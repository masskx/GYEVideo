import {existsSync, readFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const templateDir = fileURLToPath(new URL('..', import.meta.url));
const workspaceDir = resolve(templateDir, '..');

const stripWrappingQuotes = (value: string) => {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
};

const parseEnvFile = (filePath: string) => {
  if (!existsSync(filePath)) {
    return;
  }

  const content = readFileSync(filePath, 'utf8');
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) {
      continue;
    }

    const separatorIndex = line.indexOf('=');
    if (separatorIndex <= 0) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = stripWrappingQuotes(line.slice(separatorIndex + 1).trim());

    if (!key || process.env[key]) {
      continue;
    }

    process.env[key] = value;
  }
};

export const loadProjectEnv = () => {
  const files = [
    resolve(workspaceDir, '.env'),
    resolve(templateDir, '.env'),
    resolve(templateDir, '.env.local'),
  ];

  for (const file of files) {
    parseEnvFile(file);
  }
};

