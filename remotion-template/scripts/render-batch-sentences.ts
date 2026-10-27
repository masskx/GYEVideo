import {existsSync, readdirSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';

const templateDir = fileURLToPath(new URL('..', import.meta.url));
const workspaceDir = fileURLToPath(new URL('../..', import.meta.url));
const sentenceEpisodesDir = join(workspaceDir, 'sentence-episodes');

const cliArgs = process.argv.slice(2);
const includeAllPre019 = cliArgs.includes('--all-pre-019');
const names = cliArgs.filter((arg) => !arg.startsWith('--'));

const run = (command: string, args: string[]) => {
  const result = spawnSync(command, args, {
    cwd: templateDir,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed with code ${result.status ?? 1}`);
  }
};

const pickEpisodeNames = () => {
  if (names.length > 0) {
    return names;
  }

  const all = readdirSync(sentenceEpisodesDir, {withFileTypes: true})
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  if (includeAllPre019) {
    return all.filter((name) => name !== '019_add_oil');
  }

  return all.filter((name) => name !== '019_add_oil');
};

const targets = pickEpisodeNames();
const skipped: string[] = [];
const succeeded: string[] = [];
const failed: Array<{name: string; reason: string}> = [];

for (const name of targets) {
  const episodeDir = join(sentenceEpisodesDir, name);
  const dataPath = join(episodeDir, 'data', 'sentencePattern.ts');
  const audioPath = join(episodeDir, 'audio', 'main-voice.mp3');

  if (!existsSync(dataPath) || !existsSync(audioPath)) {
    skipped.push(name);
    continue;
  }

  try {
    console.log(`\n=== Rebuilding ${name} ===`);
    run('npm.cmd', ['run', 'episode:use', '--', `../sentence-episodes/${name}`]);
    run('npm.cmd', ['run', 'render']);
    succeeded.push(name);
  } catch (error) {
    failed.push({
      name,
      reason: error instanceof Error ? error.message : String(error),
    });
  }
}

console.log('\n=== Batch Render Summary ===');
console.log(`Succeeded: ${succeeded.length}`);
for (const name of succeeded) {
  console.log(`  - ${name}`);
}

console.log(`Skipped: ${skipped.length}`);
for (const name of skipped) {
  console.log(`  - ${name}`);
}

console.log(`Failed: ${failed.length}`);
for (const item of failed) {
  console.log(`  - ${item.name}: ${item.reason}`);
}

