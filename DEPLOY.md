# Publishing OBJET — go-live guide

This is a **static front-end** (HTML/CSS/JS). That's great news for hosting: it
runs on any static host, free, in a few minutes. One honest caveat first, then
the steps.

## First, what "a complete online store" means

What you have is a fully designed storefront: home, collection, product, about,
a working cart drawer, and all the motion. The **cart and checkout are a
front-end demo** — they don't charge cards or store orders yet. So you can put
this online today as a beautiful catalog/marketing site, but to actually *take
payments* you need to connect a commerce backend. Both paths are below.

---

## Path A — Put it online now (free, ~3 minutes)

Best for: showing it to people, a real URL, a custom domain. No payments yet.

### Option 1 · Netlify Drop (no account needed to start)
1. Unzip the project so you have the `objet/` folder with `index.html` at its root.
2. Go to **app.netlify.com/drop**.
3. Drag the **`objet` folder** onto the drop zone.
4. In seconds you get a live URL like `https://random-name-1234.netlify.app`,
   with free HTTPS.
5. **Keep it permanently:** unclaimed drops are temporary — create a free Netlify
   account to claim the site, then you can rename it and add your own domain
   (Site settings → Domain). To update later, drag the updated folder again.

Tip: keep the deploy under ~50 MB and make sure `index.html` is at the folder root.

### Option 2 · Other one-step static hosts (all have free tiers)
- **Vercel** — `vercel.com`, import the folder or a Git repo, deploy.
- **Cloudflare Pages** — `pages.cloudflare.com`, connect a repo or upload.
- **GitHub Pages** — push the files to a repo, enable Pages in Settings → Pages
  (serve from the root). Free `username.github.io` URL.

### Custom domain
On any of the above: buy a domain (Namecheap, Cloudflare, Google Domains, etc.),
then point it at the host in their dashboard. They issue the SSL certificate for
you automatically.

---

## Path B — Turn it into a store that takes real payments

Pick one of these depending on how much you want to keep this exact code.

### Option 1 · Make it a real Shopify theme (keeps Shopify as your backend)
You originally liked Shopify — this is the route to a true Shopify store.
1. Start a Shopify trial (3 days free, then promotional pricing for the first
   months; the entry **Basic** plan is the cheapest full online store — check
   `shopify.com/pricing` for the current figure in your region, since it changes).
2. The HTML here gets ported into Shopify's **Liquid** templating (the CSS and JS
   carry over almost unchanged). Product cards become a
   `{% for product in collection.products %}` loop, the cart connects to
   Shopify's real cart, and checkout is handled by Shopify.
3. Zip the theme and upload it in **Online Store → Themes → Add theme → Upload
   zip**, then publish.
   This is real development work — I can start converting the pages to Liquid for
   you if you want to go this way.

### Option 2 · Keep this static site and bolt on a hosted cart
Don't want to rebuild in Liquid? Add a drop-in commerce layer so the existing
buttons take payments:
- **Shopify Buy Button / Storefront API (headless):** keep Shopify for products,
  inventory and checkout, but render this design as the storefront.
- **Snipcart** or **Stripe Payment Links:** add a lightweight cart/checkout to a
  static site with a few attributes and a script. Good for small catalogs.

In all of Option B, you'd replace the demo `addItem`/checkout logic in `main.js`
(look for the `TODO` comments) with the provider's calls.

---

## What's already publish-ready in this bundle
- `index.html` at the root (required by every static host)
- `404.html` — custom not-found page (Netlify/Cloudflare/GitHub Pages use it
  automatically)
- `robots.txt` — crawlers allowed; add your sitemap line once you have a domain
- `assets/favicon.svg` — browser tab icon
- No build step, no dependencies — what you see is what deploys

> Reminder: before launch, swap the gradient placeholders for your real product
> photography, and replace the demo cart/checkout with a real provider if you
> intend to sell.
