param(
  [Parameter(Mandatory = $true)]
  [string]$Name,

  [string]$Message = ""
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  throw "Git is not installed or not available in PATH."
}

$repoRoot = git rev-parse --show-toplevel 2>$null
if (-not $repoRoot) {
  throw "Current directory is not inside a git repository."
}

$status = git status --porcelain
if ($status) {
  throw "There are uncommitted changes. Commit or stash them before creating a restore point."
}

$existingTag = git tag --list $Name
if ($existingTag) {
  throw "Tag '$Name' already exists. Choose another name."
}

if ([string]::IsNullOrWhiteSpace($Message)) {
  $Message = "Restore point $Name"
}

git tag -a $Name -m $Message
Write-Host ""
Write-Host "Restore point created:" -ForegroundColor Green
Write-Host "  $Name"
Write-Host ""
Write-Host "To upload it to GitHub, run:"
Write-Host "  git push origin $Name"
Write-Host ""
Write-Host "To see all restore points, run:"
Write-Host "  git tag --list"
