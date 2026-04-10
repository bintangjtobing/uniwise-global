import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import nodemailer from 'nodemailer'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'api-send-email',
        configureServer(server) {
          server.middlewares.use('/api/send-email', async (req, res) => {
            if (req.method !== 'POST') {
              res.writeHead(405, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ error: 'Method not allowed' }))
              return
            }

            let body = ''
            req.on('data', chunk => { body += chunk })
            req.on('end', async () => {
              try {
                const data = JSON.parse(body)

                const transporter = nodemailer.createTransport({
                  host: env.MAIL_HOST,
                  port: Number(env.MAIL_PORT),
                  auth: {
                    user: env.MAIL_USERNAME,
                    pass: env.MAIL_PASSWORD,
                  },
                })

                await transporter.sendMail({
                  from: `"Uniwise Website" <${env.MAIL_TO}>`,
                  to: env.MAIL_TO,
                  replyTo: data.email,
                  subject: `New Inquiry from ${data.firstName} ${data.lastName}${data.company ? ` - ${data.company}` : ''}`,
                  html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
                    ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
                    ${data.service ? `<p><strong>Service:</strong> ${data.service}</p>` : ''}
                    <p><strong>Message:</strong></p>
                    <p>${data.message.replace(/\n/g, '<br>')}</p>
                  `,
                })

                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ success: true }))
              } catch (err) {
                console.error('Email send error:', err.message, err.code, err.response)
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: err.message }))
              }
            })
          })
        },
      },
    ],
    base: '/uniwise-global/',
  }
})
