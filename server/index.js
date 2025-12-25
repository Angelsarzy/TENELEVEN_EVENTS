const express = require('express')
const fetch = require('node-fetch')
require('dotenv').config()
const app = express()
app.use(express.json())
app.post('/verify-payment', async (req, res) => {
  const { reference } = req.body
  if (!reference) return res.status(400).json({ error: 'missing reference' })
  try {
    const secretKey = process.env.PAYSTACK_SECRET_KEY
    if (!secretKey) return res.status(500).json({ error: 'server misconfigured' })
    const r = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${secretKey}` }
    })
    const data = await r.json()
    if (data && data.status && data.data && data.data.status === 'success') {
      return res.json({ ok: true, data: data.data })
    }
    return res.status(400).json({ ok: false, data })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'internal' })
  }
})
const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Paystack verify server running on ${port}`))
