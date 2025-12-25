# Paystack integration instructions

✅ Overview

- The client-side Paystack integration (inline.js) is included in `services.html`.
- The client code in `script.js` uses a placeholder public key string: `const PAYSTACK_PUBLIC_KEY = 'pk_test_replace_me';` Replace with your Paystack test public key for local testing.

⚠️ Important: Server-side verification (required)

- After a successful payment, Paystack returns a `reference` in the client callback. You MUST verify the transaction on the server by calling Paystack's verify endpoint using your SECRET_KEY.
- Do NOT rely solely on the client callback for fulfilment. Client callbacks can be faked.

Sample Node/Express verification (use your SECRET_KEY)

```js
// Example: POST /verify-payment { reference: 'xxxxxx' }
const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());
app.post('/verify-payment', async (req, res)=>{
  const { reference } = req.body;
  if(!reference) return res.status(400).json({ error: 'missing reference' });
  try{
    const secretKey = process.env.PAYSTACK_SECRET_KEY; // set in env
    const r = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${secretKey}` }
    });
    const data = await r.json();
    if(data && data.status && data.data && data.data.status === 'success'){
      // payment is verified — do fulfillment (persist, send email, update order)
      return res.json({ ok: true, data: data.data });
    }
    return res.status(400).json({ ok:false, data });
  }catch(err){
    console.error(err);
    return res.status(500).json({ error: 'internal' });
  }
});
app.listen(3000);
```

cURL example

```bash
curl -X GET "https://api.paystack.co/transaction/verify/{reference}" -H "Authorization: Bearer SECRET_KEY"
```

Tips:

- Use Paystack test keys (`pk_test_*` and `sk_test_*`) while developing.
- Use webhooks for asynchronous verification if you need guaranteed delivery and retries.
- Store the transaction reference and verification response in your database.

If you'd like, I can also add a small server example (Express or PHP) to this repo and wire up a test endpoint you can call from the client callback. Ask me to "Add server verification example (Express)" and I'll create it.
