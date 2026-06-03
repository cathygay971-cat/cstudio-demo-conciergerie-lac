import { mkdirSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC = join(__dirname, '..', 'public', 'images')

function svg(width, height, label) {
  const cx = width / 2
  const cy = height / 2
  const fs1 = Math.max(14, Math.min(Math.round(width / 28), 36))
  const fs2 = Math.round(fs1 * 0.75)
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="#e8e8e8"/>
  <line x1="0" y1="0" x2="${width}" y2="${height}" stroke="#d0d0d0" stroke-width="1.5"/>
  <line x1="${width}" y1="0" x2="0" y2="${height}" stroke="#d0d0d0" stroke-width="1.5"/>
  <text x="${cx}" y="${cy - fs1 * 0.8}" text-anchor="middle" dominant-baseline="middle"
    font-family="system-ui, -apple-system, sans-serif" font-size="${fs1}" fill="#888" font-weight="600">${label}</text>
  <text x="${cx}" y="${cy + fs2 * 0.9}" text-anchor="middle" dominant-baseline="middle"
    font-family="system-ui, -apple-system, sans-serif" font-size="${fs2}" fill="#aaa">${width} × ${height}</text>
</svg>`
}

const images = [
  // hero/
  ['hero/hero-home.svg',             1920, 1080, 'hero-home.jpg'],
  ['hero/hero-split.svg',            1100, 1400, 'hero-split.jpg'],

  // services/
  ['services/annonces-photos.svg',   900, 600, 'annonces-photos.jpg'],
  ['services/gestion-voyageurs.svg', 900, 600, 'gestion-voyageurs.jpg'],
  ['services/menage-linge.svg',      900, 600, 'menage-linge.jpg'],
  ['services/checkin-checkout.svg',  900, 600, 'checkin-checkout.jpg'],
  ['services/maintenance.svg',       900, 600, 'maintenance.jpg'],
  ['services/optimisation-prix.svg', 900, 600, 'optimisation-prix.jpg'],

  // market/ (sections "Pourquoi [ville]")
  ['market/why-main.svg',            900, 600, 'why-main.jpg'],
  ['market/cassis.svg',              900, 600, 'cassis.jpg'],
  ['market/la-ciotat.svg',           900, 600, 'la-ciotat.jpg'],
  ['market/bandol.svg',              900, 600, 'bandol.jpg'],
  ['market/sanary-sur-mer.svg',      900, 600, 'sanary-sur-mer.jpg'],

  // gallery/
  ['gallery/gallery-01.svg',  800, 1067, 'gallery-01.jpg'],
  ['gallery/gallery-02.svg',  600,  400, 'gallery-02.jpg'],
  ['gallery/gallery-03.svg',  900,  450, 'gallery-03.jpg'],
  ['gallery/gallery-04.svg',  600,  400, 'gallery-04.jpg'],
  ['gallery/gallery-05.svg',  900,  450, 'gallery-05.jpg'],
  ['gallery/gallery-06.svg',  600,  400, 'gallery-06.jpg'],
  ['gallery/gallery-07.svg',  600,  400, 'gallery-07.jpg'],
  ['gallery/gallery-08.svg',  600,  400, 'gallery-08.jpg'],
  ['gallery/gallery-09.svg',  600,  400, 'gallery-09.jpg'],

  // cities/
  ['cities/cassis.svg',          1900, 1267, 'cassis.jpg'],
  ['cities/la-ciotat.svg',       1900, 1267, 'la-ciotat.jpg'],
  ['cities/bandol.svg',          1900, 1267, 'bandol.jpg'],
  ['cities/sanary-sur-mer.svg',  1900, 1267, 'sanary-sur-mer.jpg'],
]

let count = 0
for (const [relPath, w, h, label] of images) {
  const fullPath = join(PUBLIC, relPath)
  mkdirSync(dirname(fullPath), { recursive: true })
  writeFileSync(fullPath, svg(w, h, label), 'utf8')
  console.log(`✓  /public/images/${relPath}  (${w}×${h})`)
  count++
}
console.log(`\n${count} fichiers générés.`)
