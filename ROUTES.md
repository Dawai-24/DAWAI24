# MediCart Route Inventory

All routes are original to this demo project.

| Route | Type | Notes |
|---|---|---|
| `/` | Home | Hero carousel, categories, product rows, trust, testimonials, FAQ |
| `/medicines` | Listing | All products, filters/sort/load-more |
| `/categories` | Index | All categories with sub-category chips |
| `/category/[slug]` | Listing | 10 categories; `?sub=<index>` filters a sub-category |
| `/products/[slug]` | Detail | 57 statically generated product pages |
| `/search?q=` | Search | Results, category matches, empty and no-results states |
| `/brands` | Index | 8 fictional brands |
| `/health-conditions` | Index | 10 health topics |
| `/health-conditions/[slug]` | Listing | Sample products mapped to topic |
| `/upload-prescription` | Form | Browser-only upload preview |
| `/cart` | Cart | Quantities, coupon, totals |
| `/checkout` | Checkout | Address, payment UI (demo), validation |
| `/order-confirmation/[id]` | Confirmation | Reads order from localStorage |
| `/orders` | Account | Order list |
| `/orders/[id]` | Account | Order detail + demo tracking |
| `/wishlist` | Account | Saved products |
| `/login` | Auth | Mobile + demo OTP |
| `/signup` | Auth | Validated form + demo OTP |
| `/forgot-password` | Auth | Demo only |
| `/account` | Account | Profile, summary tiles |
| `/account/addresses` | Account | Saved addresses CRUD |
| `/about-us` | Info | |
| `/contact` | Info | Validated demo form |
| `/help` | Info | Help topics |
| `/faqs` | Info | Accordion |
| `/policies/[slug]` | Info | privacy-policy, terms-and-conditions, return-policy, cancellation-policy, shipping-policy, disclaimer |
