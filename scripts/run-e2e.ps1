$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$node = (Get-Command node.exe).Source
$vite = Join-Path $root 'node_modules\vite\bin\vite.js'
$server = Start-Process -FilePath $node `
  -ArgumentList @($vite, 'preview', '--host', '127.0.0.1', '--port', '4173') `
  -WorkingDirectory $root -WindowStyle Hidden -PassThru

try {
  $ready = $false
  foreach ($attempt in 1..30) {
    try {
      $response = Invoke-WebRequest -Uri 'http://127.0.0.1:4173' -UseBasicParsing -TimeoutSec 1
      if ($response.StatusCode -eq 200) {
        $ready = $true
        break
      }
    } catch {
      Start-Sleep -Milliseconds 250
    }
  }
  if (-not $ready) {
    throw 'Vite preview did not become ready on port 4173.'
  }
  & (Join-Path $root 'node_modules\.bin\playwright.cmd') test @args
  exit $LASTEXITCODE
} finally {
  if (-not $server.HasExited) {
    Stop-Process -Id $server.Id -Force
  }
}
