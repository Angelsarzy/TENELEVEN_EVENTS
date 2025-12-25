Paystack verification server

1. Copy `.env.example` to `.env` and set `PAYSTACK_SECRET_KEY`.
2. Run `npm install` in the `server/` folder.
3. Start server: `npm run dev` (requires nodemon) or `npm start`.
4. POST to `/verify-payment` with JSON `{ "reference": "txn_ref_here" }` to verify a payment reference with Paystack.
