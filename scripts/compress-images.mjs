import sharp from 'sharp'
import { readdirSync, statSync, unlinkSync } from 'fs'
import { resolve, join, extname } from 'path'

const ROOTS = ['src/assets/services', 'src/assets/cases']
const EXTS = new Set(['.png', '.jpg', '.jpeg'])

function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory()) out.push(...walk(full))
    else if (EXTS.has(extname(name).toLowerCase())) out.push(full)
  }
  return out
}

const fmt = (n) => (n / 1024 / 1024).toFixed(2) + ' MB'

let totalBefore = 0
let totalAfter = 0
let count = 0

for (const root of ROOTS) {
  const files = walk(resolve(root))
  for (const file of files) {
    const before = statSync(file).size
    const out = file.replace(/\.(png|jpg|jpeg)$/i, '.webp')

    await sharp(file)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(out)

    const after = statSync(out).size
    unlinkSync(file)

    totalBefore += before
    totalAfter += after
    count++
    console.log(`  ${file.replace(process.cwd() + '/', '')}`)
    console.log(`    ${fmt(before)} -> ${fmt(after)}`)
  }
}

console.log('\n========================================')
console.log(`處理 ${count} 張圖片`)
console.log(`總大小: ${fmt(totalBefore)} -> ${fmt(totalAfter)}`)
console.log(`縮小到原本的 ${(totalAfter / totalBefore * 100).toFixed(1)}%`)
