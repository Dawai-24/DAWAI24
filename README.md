# MediCart – Demo Online Pharmacy Storefront

An **original, fictional** online pharmacy storefront built with **Next.js (App Router), React (JSX), Tailwind CSS v4 and Lucide React**.
Blue-and-white theme, fully responsive, with cart, wishlist, checkout, prescription-upload, OTP login and account pages.

> **Demo only.** All products, brands, prices, reviews and policies are sample data. No real payments, prescriptions,
> SMS/email or orders are processed. Nothing here is medical advice. MediCart is not affiliated with any real pharmacy.

## Requirements
- Node.js 18.18+ (Node 20 or 22 recommended)
- npm

## Install & run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Features
- Header: announcement bar, PIN-code modal, search with live suggestions, nested category dropdowns, mobile slide-in menu, sticky
- Home: hero carousel, category grid, prescription banner, product rows, trust section, testimonials, FAQ accordion
- Listings: filters (brand, price, discount, Rx), sorting, load-more, mobile filter sheet
- Product page: image, price/MRP/discount, quantity, add to cart, buy now, wishlist, PIN check, tabs, similar products
- Cart page + cart drawer, coupons (`WELCOME10`, `FREESHIP`), delivery-fee rule (free above ₹499)
- Checkout with validation, saved addresses, payment-method UI (demo), order confirmation, order tracking
- Prescription upload (JPG/PNG/PDF, 5 MB, drag-drop, preview, replace/remove) – processed in the browser only
- Login / Signup with on-screen demo OTP, forgot password, My Account, saved addresses, orders, wishlist
- Info pages: About, Contact (validated form), Help, FAQs, 6 policy pages, 404
- State: React Context + `localStorage` (key `medicart-demo-v1`). Clear it to reset the demo.

## Project structure
```
app/            routes (see ROUTES.md)
components/     Header, Footer, Cart, Products, Search, Forms, Orders, Home, Common
data/           categories.js, products.js (generated sample data), content.js
lib/            catalog.js (data-access layer – swap for an API), store.jsx (global state)
```

## Connecting a real catalogue
`lib/catalog.js` is the only module that reads `data/products.js`. Replace its functions with API/database calls
(and make pages async) to use a real catalogue. A real store would also need a secure backend for auth, payments and
prescription handling, plus regulatory compliance – none of which this demo includes.

## Notes
- Product images are original inline SVG illustrations (no external image URLs).
- See `TEST-REPORT.md` for exactly what was and was not verified.
