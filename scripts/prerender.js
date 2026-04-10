import { createServer } from 'http'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, extname } from 'path'
import puppeteer from 'puppeteer'

const DIST = join(import.meta.dirname, '..', 'dist')
const BASE = '/uniwise-global'
const ROUTES = ['/', '/about', '/services', '/contact']

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

// Simple static file server for the dist folder
function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = req.url.split('?')[0]

      // Strip base path
      if (filePath.startsWith(BASE)) {
        filePath = filePath.slice(BASE.length) || '/'
      }

      // Default to index.html for SPA routes
      if (filePath === '/' || !extname(filePath)) {
        filePath = '/index.html'
      }

      const fullPath = join(DIST, filePath)
      try {
        const content = readFileSync(fullPath)
        const ext = extname(fullPath)
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' })
        res.end(content)
      } catch {
        // Fallback to index.html for SPA
        try {
          const content = readFileSync(join(DIST, 'index.html'))
          res.writeHead(200, { 'Content-Type': 'text/html' })
          res.end(content)
        } catch {
          res.writeHead(404)
          res.end('Not found')
        }
      }
    })

    server.listen(0, () => {
      const port = server.address().port
      resolve({ server, port })
    })
  })
}

async function prerender() {
  console.log('Starting prerender...')

  const { server, port } = await startServer()
  console.log(`Static server running on port ${port}`)

  const browser = await puppeteer.launch({ headless: true })

  for (const route of ROUTES) {
    const url = `http://localhost:${port}${BASE}${route}`
    console.log(`Rendering: ${route}`)

    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 })

    // Wait for React to render
    await page.waitForSelector('#root > *', { timeout: 10000 })

    const html = await page.content()

    // Determine output path
    const outputDir = route === '/'
      ? DIST
      : join(DIST, route)

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true })
    }

    const outputPath = join(outputDir, 'index.html')
    writeFileSync(outputPath, `<!DOCTYPE html>${html}`)
    console.log(`  -> Saved: ${outputPath}`)

    await page.close()
  }

  await browser.close()
  server.close()
  console.log('Prerender complete!')
}

prerender().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
