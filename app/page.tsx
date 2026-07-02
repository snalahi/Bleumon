import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Preloader } from '@/components/Preloader'

export const metadata: Metadata = {
  title: 'Bleumon — Contemporary essentials, worn boldly',
  description:
    'Bleumon is a contemporary fashion label — tailoring, denim, knits and leather, designed in Paris and made to be worn on repeat.',
}

export default function Home() {
  return (
    <>
      <Preloader />
      <Nav isHome />

      <main id="top">

        {/* ============ HERO SLIDER ============ */}
        <section className="hero-slider" id="homeSlider" aria-label="Bleumon hero">

          <div className="hs-track">

            {/* Slide 1 — New Season */}
            <div className="hs-slide is-active">
              <div className="hs-slide__bg" style={{ backgroundImage: "url('https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600&h=2000&fit=crop')" }}></div>
              <div className="hs-slide__overlay"></div>
              <div className="hs-slide__content">
                <span className="hs-slide__tag">New Season · 2025</span>
                <h1 className="hs-slide__title">Clothes that<br /><em>move with you.</em></h1>
                <p className="hs-slide__desc">Contemporary essentials — tailoring, denim and easy knits — cut clean, made well, and worn on repeat.</p>
                <a href="/collection" className="hs-slide__cta">Shop new arrivals →</a>
              </div>
            </div>

            {/* Slide 2 — Women's Edit */}
            <div className="hs-slide">
              <div className="hs-slide__bg" style={{ backgroundImage: "url('https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=1600&h=2000&fit=crop')" }}></div>
              <div className="hs-slide__overlay"></div>
              <div className="hs-slide__content">
                <span className="hs-slide__tag">Women&apos;s Edit · Paris</span>
                <h1 className="hs-slide__title">Dressed for<br /><em>every mood.</em></h1>
                <p className="hs-slide__desc">Light layers and clean silhouettes for the new season.</p>
                <a href="/collection" className="hs-slide__cta">Shop women&apos;s →</a>
              </div>
            </div>

            {/* Slide 3 — The Bold Edit */}
            <div className="hs-slide">
              <div className="hs-slide__bg" style={{ backgroundImage: "url('https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600&h=2000&fit=crop')" }}></div>
              <div className="hs-slide__overlay"></div>
              <div className="hs-slide__content">
                <span className="hs-slide__tag">The Bold Edit · SS 2025</span>
                <h1 className="hs-slide__title">Style with<br /><em>no rules.</em></h1>
                <p className="hs-slide__desc">Statement silhouettes for those who dress entirely on their own terms.</p>
                <a href="/collection" className="hs-slide__cta">Explore the edit →</a>
              </div>
            </div>

          </div>

          {/* Bottom nav */}
          <div className="hs-nav" aria-hidden="true">
            <div className="hs-counter">
              <span className="hs-counter__cur">01</span>
              <span className="hs-counter__total"> / 03</span>
            </div>
            <div className="hs-bars">
              <button className="hs-bar is-active" data-slide="0"><div className="hs-bar__fill"></div></button>
              <button className="hs-bar" data-slide="1"><div className="hs-bar__fill"></div></button>
              <button className="hs-bar" data-slide="2"><div className="hs-bar__fill"></div></button>
            </div>
            <div className="hs-arrows">
              <button className="hs-arrow hs-arrow--prev" aria-label="Previous slide">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button className="hs-arrow hs-arrow--next" aria-label="Next slide">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>

        </section>

        {/* ============ MARQUEE ============ */}
        <section className="marquee" aria-hidden="true">
          <div className="marquee__track" id="marquee">
            <span>Free shipping &amp; returns</span><span className="sep">✳</span>
            <span>New drops every week</span><span className="sep">✳</span>
            <span>Ethically made</span><span className="sep">✳</span>
            <span>Designed in Paris</span><span className="sep">✳</span>
            <span>Free shipping &amp; returns</span><span className="sep">✳</span>
            <span>New drops every week</span><span className="sep">✳</span>
            <span>Ethically made</span><span className="sep">✳</span>
            <span>Designed in Paris</span><span className="sep">✳</span>
          </div>
        </section>

        {/* ============ COLLECTIONS ============ */}
        <section className="collections" id="collections">
          <header className="section-head">
            <h2 className="section-head__title" data-reveal="">
              Three ways<br />to get dressed.
            </h2>
            <p className="section-head__note" data-reveal="">
              Start with tailoring, soften it with knits, finish with the bag.
              Shop the edit by category.
            </p>
          </header>

          <div className="collections__grid">
            <a href="/collection" className="coll" data-reveal="" data-tilt="">
              <div
                className="coll__media"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop'),linear-gradient(160deg,#d9d3c6,#b3ab9a)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              >
                <span className="coll__index">W</span>
              </div>
              <div className="coll__row"><h3>Women</h3><span className="coll__count">120 styles</span></div>
              <p>Tailoring, dresses and denim — cut for every day, dressed up or down.</p>
            </a>

            <a href="/collection" className="coll" data-reveal="" data-tilt="">
              <div
                className="coll__media"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop'),linear-gradient(160deg,#c8c6bc,#a0a193)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              >
                <span className="coll__index">M</span>
              </div>
              <div className="coll__row"><h3>Men</h3><span className="coll__count">64 styles</span></div>
              <p>Easy essentials and elevated streetwear, built around a clean palette.</p>
            </a>

            <a href="/collection" className="coll" data-reveal="" data-tilt="">
              <div
                className="coll__media"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop'),linear-gradient(160deg,#ded6c9,#c0b29c)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <span className="coll__index">A</span>
              </div>
              <div className="coll__row"><h3>Accessories</h3><span className="coll__count">40 styles</span></div>
              <p>Bags and finishing pieces in real leather, made to last for years.</p>
            </a>
          </div>
        </section>

        {/* ============ SHOP GRID ============ */}
        <section className="shop" id="shop">
          <header className="section-head section-head--split">
            <div>
              <h2 className="section-head__title" data-reveal="">Best&nbsp;loved.</h2>
            </div>
            <a href="/collection" className="link-arrow" data-magnetic="" data-reveal="">
              <span>View all 40 styles</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </header>

          <div className="shop__grid">
            <a href="/product" className="product" data-reveal="">
              <div
                className="product__media"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/19272278/pexels-photo-19272278.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop'),linear-gradient(155deg,#cfc8b8,#a39c8a)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              >
                <span className="product__add" data-magnetic="">Quick add +</span>
              </div>
              <div className="product__info"><h3>The Tailored Blazer</h3><span className="product__price">$245</span></div>
              <span className="product__tag">Women</span>
            </a>

            <a href="/product" className="product" data-reveal="">
              <div
                className="product__media"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/4102966/pexels-photo-4102966.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop'),linear-gradient(155deg,#d7d2c4,#b6b2a4)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              >
                <span className="product__add" data-magnetic="">Quick add +</span>
              </div>
              <div className="product__info"><h3>Straight-Leg Denim</h3><span className="product__price">$120</span></div>
              <span className="product__tag">Women</span>
            </a>

            <a href="/product" className="product" data-reveal="">
              <div
                className="product__media"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/30736117/pexels-photo-30736117.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop'),linear-gradient(155deg,#ddd6c6,#bdb6a4)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              >
                <span className="product__add" data-magnetic="">Quick add +</span>
              </div>
              <div className="product__info"><h3>Slip Midi Dress</h3><span className="product__price">$165</span></div>
              <span className="product__tag">Women</span>
            </a>

            <a href="/product" className="product" data-reveal="">
              <div
                className="product__media"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/35347257/pexels-photo-35347257.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop'),linear-gradient(155deg,#cdd0c4,#9ca08f)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              >
                <span className="product__add" data-magnetic="">Quick add +</span>
              </div>
              <div className="product__info"><h3>Streetwear Hoodie</h3><span className="product__price">$110</span></div>
              <span className="product__tag">Men</span>
            </a>

            <a href="/product" className="product" data-reveal="">
              <div
                className="product__media"
                style={{
                  backgroundImage: "url('https://buffalojackson.com/cdn/shop/articles/ryder-reserve-bison-leather-duffloe-bag-2_900x900_crop_center_095727c4-c15d-4d19-885b-2337c6416986_1400x.progressive.webp.jpg?v=1708707024'),linear-gradient(155deg,#ded6c9,#c0b29c)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              >
                <span className="product__add" data-magnetic="">Quick add +</span>
              </div>
              <div className="product__info"><h3>Leather Tote</h3><span className="product__price">$260</span></div>
              <span className="product__tag">Accessories</span>
            </a>

            <a href="/product" className="product" data-reveal="">
              <div
                className="product__media"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/20745051/pexels-photo-20745051.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop'),linear-gradient(155deg,#cdc6b6,#9ca08f)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              >
                <span className="product__add" data-magnetic="">Quick add +</span>
              </div>
              <div className="product__info"><h3>Striped Blazer</h3><span className="product__price">$230</span></div>
              <span className="product__tag">Women</span>
            </a>
          </div>
        </section>

        {/* ============ SEASONS ============ */}
        <section className="seasons">
          <header className="section-head section-head--split">
            <div>
              <h2 className="section-head__title" data-reveal="">Dressed for<br />every season.</h2>
            </div>
            <a href="/collection" className="link-arrow" data-magnetic="" data-reveal="">
              <span>View collection</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </header>

          <div className="seasons__wrap" id="seasonsWrap">
            <div className="seasons__track" id="seasonsTrack">
              {[0,1,2,3,4,5].map(i => (
                <a key={i} href="/collection" className="seasons__card">
                  <div className="seasons__img"></div>
                  <div className="seasons__over">
                    <span className="seasons__over-tag">New Arrival</span>
                    <span className="seasons__over-cta">Shop Edit →</span>
                  </div>
                </a>
              ))}
            </div>
            <button className="seasons__arrow seasons__arrow--prev" id="seasonsPrev" aria-label="Previous">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className="seasons__arrow seasons__arrow--next" id="seasonsNext" aria-label="Next">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          <div className="seasons__nav">
            <button className="seasons__tab is-active" data-season="spring">
              <svg className="seasons__icon" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <ellipse cx="12" cy="5.5" rx="2" ry="3.5" transform="rotate(0 12 12)"/>
                <ellipse cx="12" cy="5.5" rx="2" ry="3.5" transform="rotate(60 12 12)"/>
                <ellipse cx="12" cy="5.5" rx="2" ry="3.5" transform="rotate(120 12 12)"/>
                <ellipse cx="12" cy="5.5" rx="2" ry="3.5" transform="rotate(180 12 12)"/>
                <ellipse cx="12" cy="5.5" rx="2" ry="3.5" transform="rotate(240 12 12)"/>
                <ellipse cx="12" cy="5.5" rx="2" ry="3.5" transform="rotate(300 12 12)"/>
                <circle cx="12" cy="12" r="2.5"/>
              </svg>
              <div className="seasons__tab-body">
                <span className="seasons__tab-name">Spring (March – May) 🌸</span>
                <span className="seasons__tab-desc">Light layers, floral prints, pastel colors, denim jackets</span>
              </div>
            </button>
            <button className="seasons__tab" data-season="summer">
              <svg className="seasons__icon" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <circle cx="12" cy="12" r="4"/>
                <line x1="12" y1="2" x2="12" y2="5.5"/>
                <line x1="12" y1="18.5" x2="12" y2="22"/>
                <line x1="2" y1="12" x2="5.5" y2="12"/>
                <line x1="18.5" y1="12" x2="22" y2="12"/>
                <line x1="4.93" y1="4.93" x2="7.28" y2="7.28"/>
                <line x1="16.72" y1="16.72" x2="19.07" y2="19.07"/>
                <line x1="19.07" y1="4.93" x2="16.72" y2="7.28"/>
                <line x1="7.28" y1="16.72" x2="4.93" y2="19.07"/>
              </svg>
              <div className="seasons__tab-body">
                <span className="seasons__tab-name">Summer (June – August) ☀️</span>
                <span className="seasons__tab-desc">Breathable fabrics, shorts, dresses, sandals, sunglasses</span>
              </div>
            </button>
            <button className="seasons__tab" data-season="autumn">
              <svg className="seasons__icon" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
              <div className="seasons__tab-body">
                <span className="seasons__tab-name">Autumn (Sept – Nov) 🍂</span>
                <span className="seasons__tab-desc">Warm tones, sweaters, boots, leather jackets, scarves</span>
              </div>
            </button>
          </div>
        </section>

        {/* ============ VENDORS ============ */}
        <section className="vendors" id="vendors">

          {/* ---- Header ---- */}
          <div className="vendors__head">

            {/* Floating frosted-glass brand pills */}
            <div className="vendors__orbs" aria-hidden="true">
              <span className="vorb vorb--1">Maison Delacroix</span>
              <span className="vorb vorb--2">Atelier Renaud</span>
              <span className="vorb vorb--3">Studio Velin</span>
              <span className="vorb vorb--4">Le Marcheur</span>
              <span className="vorb vorb--5">Kova Studio</span>
              <span className="vorb vorb--6">Façade Paris</span>
              <span className="vorb vorb--7">Rive Gauche</span>
            </div>

            <h2 className="vendors__title" data-reveal="">
              Independent <em>designers.</em><br />One destination.
            </h2>
            <p className="vendors__sub" data-reveal="">
              Every brand on Bleumon is handpicked — emerging ateliers and established houses
              united by one conviction: clothes should outlast the season they were made for.
            </p>

            {/* Stats pill */}
            <div className="vendors__stats" data-reveal="">
              <div className="vstat">
                <span className="vstat__num" data-count="18">0</span>
                <span className="vstat__label">Curated vendors</span>
              </div>
              <div className="vstat__div"></div>
              <div className="vstat">
                <span className="vstat__num" data-count="6">0</span>
                <span className="vstat__label">Countries</span>
              </div>
              <div className="vstat__div"></div>
              <div className="vstat">
                <span className="vstat__num" data-count="400" data-suffix="+">0</span>
                <span className="vstat__label">Pieces live</span>
              </div>
              <div className="vstat__div"></div>
              <div className="vstat">
                <span className="vstat__num" data-count="3">0</span>
                <span className="vstat__label">Avg. years vetted</span>
              </div>
            </div>

          </div>

          {/* ---- Dual-direction brand name marquee ---- */}
          <div className="vnd-strip" aria-hidden="true">
            <div className="vnd-strip__row">
              <div className="vnd-strip__inner">
                {[
                  'MAISON DELACROIX','ATELIER RENAUD','STUDIO VELIN','CLAIRE MOREAU','HOUSE OF NOIR','FAÇADE PARIS',
                  'MAISON DELACROIX','ATELIER RENAUD','STUDIO VELIN','CLAIRE MOREAU','HOUSE OF NOIR','FAÇADE PARIS',
                ].map((name, i) => (
                  <span key={i} className="vnd-item">{name}<em className="vnd-sep">✦</em></span>
                ))}
              </div>
            </div>
            <div className="vnd-strip__row vnd-strip__row--rev">
              <div className="vnd-strip__inner">
                {[
                  'LE MARCHEUR','KOVA STUDIO','MODE CLAIRE','DUBOIS ÉDIT','BLANC COLLECTIF','RIVE GAUCHE',
                  'LE MARCHEUR','KOVA STUDIO','MODE CLAIRE','DUBOIS ÉDIT','BLANC COLLECTIF','RIVE GAUCHE',
                ].map((name, i) => (
                  <span key={i} className="vnd-item">{name}<em className="vnd-sep">✦</em></span>
                ))}
              </div>
            </div>
          </div>

          {/* ---- Featured vendor cards (bento grid) ---- */}
          <div className="vendors__grid">

            {/* Card 1 — tall, spans 2 rows */}
            <a href="/collection" className="vcard vcard--1" data-reveal="">
              <div className="vcard__media" style={{ backgroundImage: "url('https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=700&h=1100&fit=crop')" }}></div>
              <div className="vcard__shine"></div>
              <div className="vcard__body">
                <div className="vcard__top">
                  <span className="vcard__loc">Paris, France</span>
                  <span className="vcard__badge">48 pieces</span>
                </div>
                <h3 className="vcard__name">Maison<br />Delacroix</h3>
                <p className="vcard__cat">Tailoring &amp; Outerwear</p>
                <div className="vcard__cta">
                  <span>Explore brand</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/collection" className="vcard vcard--2" data-reveal="">
              <div className="vcard__media" style={{ backgroundImage: "url('https://images.pexels.com/photos/5935748/pexels-photo-5935748.jpeg?auto=compress&cs=tinysrgb&w=700&h=600&fit=crop')" }}></div>
              <div className="vcard__shine"></div>
              <div className="vcard__body">
                <div className="vcard__top">
                  <span className="vcard__loc">Lyon, France</span>
                  <span className="vcard__badge">36 pieces</span>
                </div>
                <h3 className="vcard__name">Atelier<br />Renaud</h3>
                <p className="vcard__cat">Denim &amp; Casual Wear</p>
                <div className="vcard__cta">
                  <span>Explore brand</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/collection" className="vcard vcard--3" data-reveal="">
              <div className="vcard__media" style={{ backgroundImage: "url('https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=700&h=600&fit=crop')" }}></div>
              <div className="vcard__shine"></div>
              <div className="vcard__body">
                <div className="vcard__top">
                  <span className="vcard__loc">Paris, France</span>
                  <span className="vcard__badge">22 pieces</span>
                </div>
                <h3 className="vcard__name">Studio<br />Velin</h3>
                <p className="vcard__cat">Evening &amp; Couture</p>
                <div className="vcard__cta">
                  <span>Explore brand</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </div>
              </div>
            </a>

            {/* Card 4 — wide, spans 2 columns */}
            <a href="/collection" className="vcard vcard--4" data-reveal="">
              <div className="vcard__media" style={{ backgroundImage: "url('https://images.pexels.com/photos/8386668/pexels-photo-8386668.jpeg?auto=compress&cs=tinysrgb&w=1200&h=500&fit=crop')" }}></div>
              <div className="vcard__shine"></div>
              <div className="vcard__body">
                <div className="vcard__top">
                  <span className="vcard__loc">Bordeaux, France</span>
                  <span className="vcard__badge">31 pieces</span>
                </div>
                <h3 className="vcard__name">Le Marcheur</h3>
                <p className="vcard__cat">Footwear &amp; Leather Goods</p>
                <div className="vcard__cta">
                  <span>Explore brand</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </div>
              </div>
            </a>

          </div>

          {/* ---- Bottom CTA ---- */}
          <div className="vendors__cta" data-reveal="">
            <a href="/collection" className="btn btn--line" data-magnetic="">
              <span>Browse all 18 vendors →</span>
            </a>
          </div>

        </section>

        {/* ============ PINNED SHOWCASE ============ */}
        <section className="showcase" id="showcase">
          <div className="showcase__sticky">
            <div className="showcase__visual">
              <div
                className="showcase__card"
                id="showcaseCard"
                style={{
                  backgroundImage: "linear-gradient(to top,rgba(15,14,10,.55),rgba(15,14,10,.05)),url('https://images.pexels.com/photos/19272278/pexels-photo-19272278.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              >
                <span className="showcase__sku">SKU · BL-001</span>
                <span className="showcase__name">The Tailored Blazer</span>
              </div>
            </div>

            <div className="showcase__copy">
              <p className="showcase__step is-active" data-step="0">
                A clean, slightly oversized shoulder in a soft Italian wool blend —
                structured enough to dress up, easy enough to throw over denim.
              </p>
              <p className="showcase__step" data-step="1">
                Fully lined, with horn buttons and felled seams, made in limited runs
                by a family atelier rather than a fast-fashion line.
              </p>
              <p className="showcase__step" data-step="2">
                One blazer, a dozen outfits — and free alterations in your first year
                so it always fits exactly the way you want.
              </p>

              <div className="showcase__progress" aria-hidden="true">
                <span className="showcase__dot is-active"></span>
                <span className="showcase__dot"></span>
                <span className="showcase__dot"></span>
              </div>

              <a href="/product" className="btn btn--line" data-magnetic="">
                <span>View the Tailored Blazer — $245</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============ STORY ============ */}
        <section className="story" id="story">
          <div className="story__copy">
            <h2 className="story__title" data-reveal="">
              We make fewer pieces,<br />and we make them right.
            </h2>
            <p data-reveal="">
              Bleumon started in a Paris studio with a simple idea: make the clothes
              you actually reach for. Everything is designed in-house, made in small
              runs, and built to outlast the season it launched in.
            </p>

            <div className="stats">
              <div className="stat" data-reveal="">
                <span className="stat__num" data-count="30">0</span>
                <span className="stat__label">day free returns</span>
              </div>
              <div className="stat" data-reveal="">
                <span className="stat__num" data-count="40">0</span>
                <span className="stat__label">styles in the core range</span>
              </div>
              <div className="stat" data-reveal="">
                <span className="stat__num" data-count="100" data-suffix="%">0</span>
                <span className="stat__label">ethically made</span>
              </div>
            </div>
          </div>
          <div
            className="story__media"
            data-parallax-bg=""
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/17474220/pexels-photo-17474220.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1400&fit=crop'),linear-gradient(160deg,#b9b2a2,#8c8576)",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span className="story__media-label">The Spring lookbook · 2025</span>
          </div>
        </section>

        {/* ============ QUOTE ============ */}
        <section className="quote">
          <blockquote data-reveal="">
            &ldquo;The rare label that makes <em>basics</em> feel like a statement.&rdquo;
          </blockquote>
          <cite data-reveal="">— Mode Quarterly</cite>
        </section>

        {/* ============ JOURNAL ============ */}
        <section className="journal" id="journal">
          <header className="section-head section-head--split">
            <div>
              <h2 className="section-head__title" data-reveal="">From the journal.</h2>
            </div>
            <a href="#journal" className="link-arrow" data-magnetic="" data-reveal="">
              <span>Read all entries</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </header>

          <div className="journal__grid">
            <a href="#journal" className="entry" data-reveal="">
              <div
                className="entry__media"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/18505089/pexels-photo-18505089.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop'),linear-gradient(150deg,#c9c2b2,#a39b88)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <span className="entry__date">May 2025 · Styling</span>
              <h3>Five ways to wear one blazer</h3>
            </a>
            <a href="#journal" className="entry" data-reveal="">
              <div
                className="entry__media"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/35347257/pexels-photo-35347257.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop'),linear-gradient(150deg,#cdd0c4,#969a88)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              ></div>
              <span className="entry__date">Apr 2025 · The Edit</span>
              <h3>Building a capsule that lasts</h3>
            </a>
            <a href="#journal" className="entry" data-reveal="">
              <div
                className="entry__media"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/19711183/pexels-photo-19711183.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop'),linear-gradient(150deg,#d8d1c2,#b3aa96)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <span className="entry__date">Mar 2025 · Atelier</span>
              <h3>Inside our Paris studio</h3>
            </a>
          </div>
        </section>

        {/* ============ SIGNUP ============ */}
        <section className="signup">
          <h2 className="signup__title" data-reveal="">Join the list.</h2>
          <p data-reveal="">Early access to new drops, restocks and members-only sales. No noise.</p>
          <form className="signup__form" id="signupForm" data-reveal="">
            <input type="email" placeholder="you@email.com" aria-label="Email address" required />
            <button type="submit" className="btn btn--solid" data-magnetic=""><span>Subscribe</span></button>
          </form>
          <p className="signup__msg" id="signupMsg" role="status"></p>
        </section>
      </main>

      <Footer />
    </>
  )
}
