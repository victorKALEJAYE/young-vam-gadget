# Young Vam Gadgets

3D website for **Young Vam Gadgets & Accessories** (Shop 14), "Your surest gadgets store". Built with Next.js (App Router), React Three Fiber and Framer Motion.

## Features

- Full-screen shop video background with a live 3D scene of floating gadgets that follows the mouse and scroll
- Hero with a tilting 3D phone playing the shop video (tap for sound)
- Brand marquee, 3D tilt service cards
- Shop section with category filters and CSS-3D product models; each item opens WhatsApp to ask for today's price
- Swap quote form that opens WhatsApp with the customer's device details filled in
- FAQ accordion, visit/contact section and a floating WhatsApp button
- Mobile menu, responsive layout and reduced-motion support

## Getting started

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit store details

All contact details live in `lib/site.js`. Replace the placeholders before going live:

- `phone`: the shop's phone number
- `whatsapp`: WhatsApp number in international format, digits only (e.g. `2347012345678`)
- `address`: street and city
- `hours`: opening hours

Services, products, brands, swap steps and FAQs are in `lib/data.js`.

## Project structure

```
app/            layout, page and global styles
components/     page sections, 3D scene and UI helpers
lib/            store details and content
public/         store.mp4 (shop video) and poster.jpg
```

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new). No extra settings are needed.
