param(
  [Parameter(Mandatory = $true)][string]$Src,
  [Parameter(Mandatory = $true)][string]$Dest,
  [int]$Max = 900,
  [switch]$TrimTransparent,
  [ValidateSet('auto', 'png', 'jpeg')][string]$Format = 'auto'
)

Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'

function Get-TransparentBounds {
  param([System.Drawing.Bitmap]$Bitmap)
  $minX = $Bitmap.Width; $minY = $Bitmap.Height; $maxX = -1; $maxY = -1
  $rect = New-Object -TypeName System.Drawing.Rectangle -ArgumentList 0, 0, $Bitmap.Width, $Bitmap.Height
  $data = $Bitmap.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $stride = $data.Stride
  $bytes = New-Object byte[] ($stride * $Bitmap.Height)
  [System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)
  for ($y = 0; $y -lt $Bitmap.Height; $y++) {
    $row = $y * $stride
    for ($x = 0; $x -lt $Bitmap.Width; $x++) {
      if ($bytes[$row + $x * 4 + 3] -gt 4) {
        if ($x -lt $minX) { $minX = $x }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }
  $Bitmap.UnlockBits($data)
  if ($maxX -lt 0) { return $null }
  return New-Object -TypeName System.Drawing.Rectangle -ArgumentList $minX, $minY, ($maxX - $minX + 1), ($maxY - $minY + 1)
}

$destDir = Split-Path -Parent $Dest
if ($destDir -and -not (Test-Path -LiteralPath $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }

$srcFull = (Resolve-Path -LiteralPath $Src).Path
$imgIn = New-Object -TypeName System.Drawing.Bitmap -ArgumentList $srcFull

$scale = [Math]::Min(1.0, ($Max / [double]$imgIn.Width))
$w = [int][Math]::Round($imgIn.Width * $scale)
$h = [int][Math]::Round($imgIn.Height * $scale)

$bmp = New-Object -TypeName System.Drawing.Bitmap -ArgumentList $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$g.Clear([System.Drawing.Color]::Transparent)
$g.DrawImage($imgIn, 0, 0, $w, $h)
$g.Dispose()
$imgIn.Dispose()

if ($TrimTransparent) {
  $bounds = Get-TransparentBounds -Bitmap $bmp
  if ($bounds -and ($bounds.Width -lt $bmp.Width -or $bounds.Height -lt $bmp.Height)) {
    $crop = New-Object -TypeName System.Drawing.Bitmap -ArgumentList $bounds.Width, $bounds.Height, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $cg = [System.Drawing.Graphics]::FromImage($crop)
    $cg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $cg.DrawImage($bmp, (New-Object -TypeName System.Drawing.Rectangle -ArgumentList 0, 0, $bounds.Width, $bounds.Height), $bounds, [System.Drawing.GraphicsUnit]::Pixel)
    $cg.Dispose()
    $bmp.Dispose()
    $bmp = $crop
    $w = $bounds.Width; $h = $bounds.Height
  }
}

$outAbs = if ([System.IO.Path]::IsPathRooted($Dest)) { $Dest } else { Join-Path (Get-Location).Path $Dest }

$ext = [System.IO.Path]::GetExtension($outAbs).ToLowerInvariant()
if ($Format -eq 'auto') { $Format = if ($ext -eq '.png') { 'png' } else { 'jpeg' } }

if ($Format -eq 'jpeg') {
  if ($ext -ne '.jpg' -and $ext -ne '.jpeg') { throw "JPEG output requires a .jpg / .jpeg extension (got '$Dest')." }
  $flat = New-Object -TypeName System.Drawing.Bitmap -ArgumentList $bmp.Width, $bmp.Height, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $fg = [System.Drawing.Graphics]::FromImage($flat)
  $fg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $fg.Clear([System.Drawing.Color]::White)
  $fg.DrawImage($bmp, 0, 0, $bmp.Width, $bmp.Height)
  $fg.Dispose()

  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $encParams = New-Object -TypeName System.Drawing.Imaging.EncoderParameters -ArgumentList 1
  $encParams.Param[0] = New-Object -TypeName System.Drawing.Imaging.EncoderParameter -ArgumentList ([System.Drawing.Imaging.Encoder]::Quality), ([long]88)
  $flat.Save($outAbs, $codec, $encParams)
  $encParams.Dispose()
  $flat.Dispose()
} else {
  $bmp.Save($outAbs, [System.Drawing.Imaging.ImageFormat]::Png)
}

$bmp.Dispose()

$out = Get-Item -LiteralPath $outAbs
"{0}  {1}x{2}  {3:N0} bytes" -f $out.Name, $w, $h, $out.Length
