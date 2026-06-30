# Bleumon — animated storefront starter

An original, dependency-free storefront template with the kind of motion you
liked in premium Shopify themes: a load reveal, staggered hero, scroll-triggered
reveals, a marquee, magnetic buttons, a custom cursor, parallax, count-up stats,
and a signature **pinned scroll showcase**. No build step, no frameworks — open
`index.html` and it runs.

> This is your own codebase to edit freely. It is *not* a copy of any commercial
> theme — it's a clean-room build you fully own.

## Run it

Just open `index.html` in a browser. For the smoothest experience (and so fonts
and relative paths always resolve), serve it locally:

```bash
# any one of these from inside the project folder
python3 -m http.server 8000      # then visit http://localhost:8000
npx serve .
```

## Structure

```
bleumon/
├── index.html              ← home page (all marketing sections)
├── collection.html         ← listing page: filter, sort, load-more grid
├── product.html            ← product detail: gallery, options, accordions
├── about.html              ← story page: principles, timeline, stats
├── assets/
│   ├── css/styles.css      ← design tokens + every section's styling
│   └── js/main.js          ← all animations, interactions + cart
└── README.md
```

All pages share the same `styles.css` and `main.js`. The navigation links them
together (home → collection → product → about) so it behaves like a small store.

### The two store pages

- **collection.html** — sticky filter chips (by category), a sort dropdown
  (featured / price / A–Z), and a "Load more" button. The logic lives in the
  `collection()` block of `main.js` and reads `data-cat`, `data-price`, and
  `data-name` off each product card. Add products by copying a card and setting
  those attributes.
- **product.html** — image gallery with clickable thumbnails, finish swatches,
  size pills, a quantity stepper with a live total, an assurance line, and
  expandable Details / Materials / Shipping accordions. Each behaviour is its own
  block in `main.js` (`gallery`, `singleSelect`, `quantity`, `accordion`) and
  no-ops on pages that don't use it.

## Customizing

**Colors & type — one place.** Open `styles.css` and edit the `:root` block.
Change `--accent`, `--bg`, `--ink`, the three `--font-*` values, spacing, and
radius. The whole site re-skins from there.

**Swap in your product images.** The product/collection/journal "media" blocks
use CSS gradients as placeholders. Replace e.g. `.product__media--1`'s
`background` with a real image, or drop an `<img>` inside the media div in
`index.html`. Search the CSS for `--media` and `linear-gradient` to find them all.

**Edit content.** All copy, product names, prices, and section text live as plain
HTML in `index.html`. Each section is banner-commented (`<!-- ===== HERO -->`).

**Turn off an animation.** Each behaviour in `main.js` is a self-contained block
(preloader, cursor, magnetic, parallax, showcase, counters…). Delete or comment
out any block and nothing else breaks. Reduced-motion preferences are respected
automatically.

**The signature showcase.** The pinned section (`#showcase`) is driven by scroll
progress in the `showcase()` function in `main.js`. Adjust the `scale`/`rotate`
math there, and add/remove `.showcase__step` blocks (keep the dot count matching).

**The cart drawer.** A slide-in cart is injected by `main.js` on every page, so
there's no cart markup to duplicate. "Quick add +" on product cards and "Add to
cart" on the product page both feed it; it reads the name, price, category and
image straight off the DOM. Cart state is an in-memory array that resets on
reload — to keep it between visits, save and restore the `cart` array with
`localStorage` in your own deployment. The Checkout button is a stub: wire it to
your store's real checkout where the `TODO` comment is.

## Taking it to Shopify

This is static HTML/CSS/JS, which is ideal for prototyping and for a headless
(Hydrogen/Storefront API) build. To use it as a classic Shopify theme, the markup
would be ported into Liquid templates and section schemas — the CSS and JS carry
over almost unchanged. Keep the section structure as-is and replace the hard-coded
product cards with a `{% for product in collection.products %}` loop.

## Accessibility & performance notes

- Keyboard focus is visible; `prefers-reduced-motion` disables transforms/cursor.
- No external JS dependencies. Only Google Fonts is loaded over the network.
- All scroll work is throttled with `requestAnimationFrame`.
```

## Images & licensing (important)

The product, lookbook and journal photos are **free stock photography from
Pexels**, embedded by direct URL. Pexels content is free to use commercially and
requires no attribution, which is why it's safe to ship on a live store. Each
image also sits over a CSS gradient fallback, so if a photo ever fails to load,
the card still looks intentional instead of broken.

These are placeholders for a real brand: when you have your own campaign
photography, replace the Pexels URLs. Every image is set as an inline
`background-image` on the relevant `.product__media`, `.coll__media`,
`.pdp__main`, `.entry__media`, `story__media`, `about-banner`, or hero `.float`
element — search the HTML for `images.pexels.com` to find them all and swap in
your own URLs (keep the `,linear-gradient(...)` fallback layer).
