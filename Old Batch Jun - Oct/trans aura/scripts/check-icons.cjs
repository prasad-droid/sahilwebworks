const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, '..', 'src', 'components')
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.jsx'))

const globals = new Set([
  'window','document','IntersectionObserver','URL','RegExp','Math','JSON','Array','Object','String','Number','Set','Map','Promise','Date','Error','console','SVGElement','XML'
])
const local = new Set(['Icon', 'NextIcon', 'PrevIcon'])

let issues = 0

for (const file of files) {
  const src = fs.readFileSync(path.join(dir, file), 'utf8')

  const luci = [...src.matchAll(/import\s+\{([^}]+)\}\s+from\s+'lucide-react'/g)]
  const imported = new Set(luci.flatMap((m) =>
    m[1].split(',').map((s) => s.trim().split(/\s+as\s+/)[0].trim()).filter(Boolean)
  ))
  const importedDefs = new Set([...src.matchAll(/import\s+(\w+)\s+from/g)].map((m) => m[1]))
  const selfDefined = new Set([...src.matchAll(/\bfunction\s+([A-Z]\w*)|const\s+([A-Z]\w*)\s*=\s*(?:\(|function|[A-Z])/g)]
    .map((m) => m[1] || m[2]))

  const used = new Set()
  for (const m of src.matchAll(/<([A-Z][A-Za-z0-9_]*)\b/g)) used.add(m[1])
  for (const m of src.matchAll(/\bicon:\s*(['"]?)([A-Za-z0-9_]+)\1/g)) used.add(m[2])

  const missing = [...used].filter((c) =>
    !imported.has(c) && !importedDefs.has(c) && !globals.has(c) && !local.has(c) && !selfDefined.has(c)
  )
  if (missing.length) {
    issues++
    console.log(`${file}: likely missing import for: ${missing.join(', ')}`)
  }
}

if (issues === 0) console.log('OK — no JSX/icon identifiers are unimported.')