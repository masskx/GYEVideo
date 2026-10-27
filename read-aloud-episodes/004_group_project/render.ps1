# 004_group_project 渲染脚本
# 在此文件夹右键 -> 用 PowerShell 运行，或在 PowerShell 中直接执行

$ErrorActionPreference = "Stop"
$episodeId = "004_group_project"
$templateDir = "F:\抖音英语卡片视频\remotion-template"
$episodeDir = "F:\抖音英语卡片视频\read-aloud-episodes\$episodeId"

Set-Location $templateDir

Write-Host "`n[1/4] 同步 episode 数据到模板..." -ForegroundColor Cyan
npm.cmd run episode:use -- ../read-aloud-episodes/$episodeId
if ($LASTEXITCODE -ne 0) { Write-Host "episode:use 失败，中止。" -ForegroundColor Red; exit 1 }

Write-Host "`n[2/4] 生成配音 (需要 DASHSCOPE_API_KEY)..." -ForegroundColor Cyan
npm.cmd run voice
if ($LASTEXITCODE -ne 0) { Write-Host "voice 生成失败，中止。" -ForegroundColor Red; exit 1 }

Write-Host "`n[3/4] TypeScript 类型检查..." -ForegroundColor Cyan
cmd /c node_modules\.bin\tsc.cmd --noEmit
if ($LASTEXITCODE -ne 0) { Write-Host "TypeScript 检查失败，请查看上方错误。" -ForegroundColor Red; exit 1 }

Write-Host "`n[4/4] 渲染视频..." -ForegroundColor Cyan
npm.cmd run render
if ($LASTEXITCODE -ne 0) { Write-Host "渲染失败，中止。" -ForegroundColor Red; exit 1 }

Write-Host "`n✅ 渲染完成！正在复制成品到 exports..." -ForegroundColor Green

# 复制成品到 episode exports 目录
$exportsDir = "$episodeDir\exports"
if (-not (Test-Path $exportsDir)) { New-Item -ItemType Directory -Path $exportsDir | Out-Null }

$outDir = "$templateDir\out"
Get-ChildItem "$outDir\$episodeId*" | Copy-Item -Destination $exportsDir -Force
Get-ChildItem "$outDir\*$episodeId*" | Copy-Item -Destination $exportsDir -Force

Write-Host "成品已保存到：$exportsDir" -ForegroundColor Green
Write-Host "`n按任意键退出..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
