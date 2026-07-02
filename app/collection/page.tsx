import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Preloader } from '@/components/Preloader'

export const metadata: Metadata = {
  title: 'Shop all — Bleumon',
  description: "Browse every Bleumon style — women's, men's and accessories, designed in Paris and made to last.",
}

const products = [
  {
    idx: '01', cat: 'Women', price: 245, name: 'The Tailored Blazer',
    vendor: 'Maison Delacroix', isNew: true,
    img: 'https://images.pexels.com/photos/19272278/pexels-photo-19272278.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    bg: 'linear-gradient(155deg,#cfc8b8,#a39c8a)', pos: 'center top',
  },
  {
    idx: '02', cat: 'Women', price: 120, name: 'Straight-Leg Denim',
    vendor: 'Atelier Renaud', isNew: true,
    img: 'https://images.pexels.com/photos/4102966/pexels-photo-4102966.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    bg: 'linear-gradient(155deg,#d7d2c4,#b6b2a4)', pos: 'center top',
  },
  {
    idx: '03', cat: 'Women', price: 165, name: 'Slip Midi Dress',
    vendor: 'Studio Velin', isNew: true,
    img: 'https://images.pexels.com/photos/30736117/pexels-photo-30736117.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    bg: 'linear-gradient(155deg,#ddd6c6,#bdb6a4)', pos: 'center top',
  },
  {
    idx: '04', cat: 'Men', price: 110, name: 'Streetwear Hoodie',
    vendor: 'Kova Studio', isNew: false,
    img: 'https://images.pexels.com/photos/35347257/pexels-photo-35347257.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    bg: 'linear-gradient(155deg,#cdd0c4,#9ca08f)', pos: 'center top',
  },
  {
    idx: '05', cat: 'Accessories', price: 260, name: 'Leather Tote',
    vendor: 'Le Marcheur', isNew: false,
    img: 'https://images.pexels.com/photos/9603489/pexels-photo-9603489.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    bg: 'linear-gradient(155deg,#ded6c9,#c0b29c)', pos: 'center',
  },
  {
    idx: '06', cat: 'Women', price: 210, name: 'Evening Slip Dress',
    vendor: 'Studio Velin', isNew: false,
    img: 'https://images.pexels.com/photos/14801125/pexels-photo-14801125.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    bg: 'linear-gradient(155deg,#d7d2c4,#b6b2a4)', pos: 'center top',
  },
  {
    idx: '07', cat: 'Accessories', price: 190, name: 'Structured Purse',
    vendor: 'Le Marcheur', isNew: false,
    img: 'https://images.pexels.com/photos/19711183/pexels-photo-19711183.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    bg: 'linear-gradient(155deg,#ded6c9,#c0b29c)', pos: 'center',
  },
  {
    idx: '08', cat: 'Men', price: 135, name: 'Urban Overshirt',
    vendor: 'Kova Studio', isNew: false,
    img: 'https://images.pexels.com/photos/9431122/pexels-photo-9431122.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    bg: 'linear-gradient(155deg,#cdd0c4,#9ca08f)', pos: 'center top',
  },
  {
    idx: '09', cat: 'Women', price: 230, name: 'Striped Blazer',
    vendor: 'Maison Delacroix', isNew: false,
    img: 'https://images.pexels.com/photos/20745051/pexels-photo-20745051.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    bg: 'linear-gradient(155deg,#cdc6b6,#9ca08f)', pos: 'center top',
  },
]

export default function CollectionPage() {
  return (
    <>
      <Preloader />
      <Nav />

      <main id="top" className="subpage">

        {/* ============ EDITORIAL SLIDER ============ */}
        <section className="col-slider" id="colSlider" aria-label="Featured collection">

          <div className="col-slider__track">

            {/* Slide 1 — Women */}
            <div className="col-slide is-active">
              <div className="col-slide__bg" style={{ backgroundImage: "url('https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1900&fit=crop')" }}></div>
              <div className="col-slide__overlay"></div>
              <div className="col-slide__content">
                <span className="col-slide__tag">Women&apos;s Edit</span>
                <h2 className="col-slide__title">Dressed for<br /><em>every mood.</em></h2>
                <p className="col-slide__desc">Light layers and clean silhouettes for the new season.</p>
                <a href="/product" className="btn btn--line col-slide__cta"><span>Shop women&apos;s →</span></a>
              </div>
            </div>

            {/* Slide 2 — New Season */}
            <div className="col-slide">
              <div className="col-slide__bg" style={{ backgroundImage: "url('https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1900&fit=crop')" }}></div>
              <div className="col-slide__overlay"></div>
              <div className="col-slide__content">
                <span className="col-slide__tag">SS 2025 · Paris</span>
                <h2 className="col-slide__title">A new<br /><em>season.</em></h2>
                <p className="col-slide__desc">Forty core styles arriving now from Paris ateliers.</p>
                <a href="/product" className="btn btn--line col-slide__cta"><span>Explore the edit →</span></a>
              </div>
            </div>

            {/* Slide 3 — Men */}
            <div className="col-slide">
              <div className="col-slide__bg" style={{ backgroundImage: "url('https://images.pexels.com/photos/9431122/pexels-photo-9431122.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1900&fit=crop')" }}></div>
              <div className="col-slide__overlay"></div>
              <div className="col-slide__content">
                <span className="col-slide__tag">Men&apos;s Edit</span>
                <h2 className="col-slide__title">Made to<br /><em>move in.</em></h2>
                <p className="col-slide__desc">Easy essentials and elevated streetwear, built clean.</p>
                <a href="/product" className="btn btn--line col-slide__cta"><span>Shop men&apos;s →</span></a>
              </div>
            </div>

            {/* Slide 4 — Accessories */}
            <div className="col-slide">
              <div className="col-slide__bg" style={{ backgroundImage: "url('https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1900&fit=crop')" }}></div>
              <div className="col-slide__overlay"></div>
              <div className="col-slide__content">
                <span className="col-slide__tag">Accessories</span>
                <h2 className="col-slide__title">Carry less,<br /><em>carry well.</em></h2>
                <p className="col-slide__desc">Real leather goods made to outlast the season.</p>
                <a href="/product" className="btn btn--line col-slide__cta"><span>Shop accessories →</span></a>
              </div>
            </div>

          </div>

          {/* Slide counter */}
          <div className="col-slider__counter" aria-hidden="true">
            <span id="colSliderCur">01</span>
            <span className="col-slider__ctotal"> / 04</span>
          </div>

          {/* Arrows */}
          <button className="col-slider__arrow col-slider__arrow--prev" id="colSliderPrev" aria-label="Previous slide">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="col-slider__arrow col-slider__arrow--next" id="colSliderNext" aria-label="Next slide">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          {/* Progress bars (also act as slide nav) */}
          <div className="col-slider__bars" aria-hidden="true">
            <button className="col-sbar is-active" data-slide="0"><div className="col-sbar__fill"></div></button>
            <button className="col-sbar" data-slide="1"><div className="col-sbar__fill"></div></button>
            <button className="col-sbar" data-slide="2"><div className="col-sbar__fill"></div></button>
            <button className="col-sbar" data-slide="3"><div className="col-sbar__fill"></div></button>
          </div>

        </section>

        {/* ============ TOOLBAR ============ */}
        <div className="toolbar">
          <div className="filters" id="filters" role="tablist" aria-label="Filter by category">
            <div className="chip-track">
              <div className="chip-indicator" id="chipIndicator" aria-hidden="true"></div>
              <button className="chip is-active" data-filter="all" role="tab" aria-selected="true">
                All <span>9</span>
              </button>
              <button className="chip" data-filter="Women" role="tab" aria-selected="false">Women</button>
              <button className="chip" data-filter="Men" role="tab" aria-selected="false">Men</button>
              <button className="chip" data-filter="Accessories" role="tab" aria-selected="false">Accessories</button>
            </div>
            <span className="filter-count" id="filterCount" aria-live="polite">9 styles</span>
          </div>

          <div className="toolbar__right">
            <div className="view-toggle" id="viewToggle" aria-label="Change grid layout">
              <button className="view-btn is-active" data-cols="3" aria-label="3-column grid" title="3 columns">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                  <rect x="0" y="0" width="3.5" height="14" rx="1"/>
                  <rect x="5.25" y="0" width="3.5" height="14" rx="1"/>
                  <rect x="10.5" y="0" width="3.5" height="14" rx="1"/>
                </svg>
              </button>
              <button className="view-btn" data-cols="2" aria-label="2-column grid" title="2 columns">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                  <rect x="0" y="0" width="6" height="14" rx="1"/>
                  <rect x="8" y="0" width="6" height="14" rx="1"/>
                </svg>
              </button>
            </div>
            <label className="sort">
              <span>Sort</span>
              <select id="sort">
                <option value="featured">Featured</option>
                <option value="price-asc">Price · low to high</option>
                <option value="price-desc">Price · high to low</option>
                <option value="name">Alphabetical</option>
              </select>
            </label>
          </div>
        </div>

        {/* ============ GRID ============ */}
        <section className="shop shop--collection">
          <div className="shop__grid" id="grid">

            {products.map((p) => (
              <a
                key={p.idx}
                href="/product"
                className="product"
                data-reveal=""
                data-cat={p.cat}
                data-price={p.price}
                data-name={p.name}
                data-vendor={p.vendor}
              >
                <div
                  className="product__media"
                  style={{
                    backgroundImage: `url('${p.img}'),${p.bg}`,
                    backgroundSize: 'cover',
                    backgroundPosition: p.pos,
                  }}
                >
                  {p.isNew && <span className="product__badge">New</span>}
                  <span className="product__idx">{p.idx}</span>
                  <button className="product__wish" aria-label="Save to wishlist" data-wish="">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                  <span className="product__add" data-magnetic="">Quick add +</span>
                </div>
                <div className="product__info">
                  <h3>{p.name}</h3>
                  <span className="product__price">${p.price}</span>
                </div>
                <div className="product__sub">
                  <span className="product__vendor">{p.vendor}</span>
                  <span className="product__tag">{p.cat}</span>
                </div>
              </a>
            ))}

          </div>

          <p className="shop__empty" id="empty" hidden>
            No styles in this category yet — check back soon.
          </p>

          <div className="loadmore-wrap">
            <button className="btn btn--line loadmore" id="loadmore" data-magnetic="">
              <span>Load more</span>
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
