import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Preloader } from '@/components/Preloader'

export const metadata: Metadata = {
  title: 'The Tailored Blazer — Bleumon',
  description:
    'The Tailored Blazer — a slightly oversized Italian wool-blend blazer, made in small runs with free first-year alterations.',
}

export default function ProductPage() {
  return (
    <>
      <Preloader />
      <Nav />

      <main id="top" className="subpage">

        <nav className="breadcrumb" aria-label="Breadcrumb" data-reveal="">
          <a href="/">Home</a><span>/</span>
          <a href="/collection">Women</a><span>/</span>
          <span aria-current="page">The Tailored Blazer</span>
        </nav>

        <section className="pdp">
          <div className="pdp__gallery">
            <div
              className="pdp__main"
              id="pdpMain"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/19272278/pexels-photo-19272278.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1250&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
              }}
            >
              <span className="pdp__badge">New</span>
            </div>
            <div className="pdp__thumbs" id="pdpThumbs">
              <button
                className="pdp__thumb is-active"
                data-bg="url('https://images.pexels.com/photos/19272278/pexels-photo-19272278.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1250&fit=crop')"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/19272278/pexels-photo-19272278.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-label="View 1"
              ></button>
              <button
                className="pdp__thumb"
                data-bg="url('https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1250&fit=crop')"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-label="View 2"
              ></button>
              <button
                className="pdp__thumb"
                data-bg="url('https://images.pexels.com/photos/20745051/pexels-photo-20745051.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1250&fit=crop')"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/20745051/pexels-photo-20745051.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-label="View 3"
              ></button>
              <button
                className="pdp__thumb"
                data-bg="url('https://images.pexels.com/photos/15991060/pexels-photo-15991060.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1250&fit=crop')"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/15991060/pexels-photo-15991060.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-label="View 4"
              ></button>
            </div>
          </div>

          <div className="pdp__info">
            <span className="pdp__tag" data-reveal="">Women · BL-001</span>
            <h1 className="pdp__title" data-reveal="">The Tailored Blazer</h1>
            <div className="pdp__price" data-reveal="">$245</div>
            <p className="pdp__desc" data-reveal="">
              A clean, slightly oversized blazer in a soft Italian wool blend. Fully
              lined, with horn buttons and a single-breasted cut that layers as easily
              over a slip dress as it does a tee and denim.
            </p>

            <div className="pdp__opt" data-reveal="">
              <span className="pdp__opt-label">Colour <em id="finishVal">Ink</em></span>
              <div className="swatches" data-swatch-group="finish">
                <button className="swatch is-active" data-value="Ink" style={{'--sw': '#20243a'} as React.CSSProperties} aria-label="Ink"></button>
                <button className="swatch" data-value="Camel" style={{'--sw': '#b9925e'} as React.CSSProperties} aria-label="Camel"></button>
                <button className="swatch" data-value="Black" style={{'--sw': '#222'} as React.CSSProperties} aria-label="Black"></button>
              </div>
            </div>

            <div className="pdp__opt" data-reveal="">
              <span className="pdp__opt-label">Size <em id="sizeVal">M</em></span>
              <div className="pills" data-pill-group="size">
                <button className="pill" data-value="XS">XS</button>
                <button className="pill" data-value="S">S</button>
                <button className="pill is-active" data-value="M">M</button>
                <button className="pill" data-value="L">L</button>
                <button className="pill" data-value="XL">XL</button>
              </div>
            </div>

            <div className="pdp__actions" data-reveal="">
              <div className="qty" aria-label="Quantity">
                <button className="qty__btn" data-step="-1" aria-label="Decrease">−</button>
                <span className="qty__val" id="qtyVal">1</span>
                <button className="qty__btn" data-step="1" aria-label="Increase">+</button>
              </div>
              <button className="btn btn--solid pdp__add" data-magnetic="">
                <span>Add to cart — <span id="pdpTotal">$245</span></span>
              </button>
            </div>

            <p className="pdp__assurance" data-reveal="">
              <span className="dot"></span> Free shipping &amp; returns · Free first-year alterations
            </p>

            <div className="accordion" data-reveal="">
              <div className="acc">
                <button className="acc__head" aria-expanded="false">
                  <span>Details</span><span className="acc__icon"></span>
                </button>
                <div className="acc__body"><div className="acc__inner">
                  <p>Single-breasted, slightly oversized shoulder, welt pockets and a
                  back vent. 70% virgin wool, 30% recycled polyester, fully lined in
                  cupro. Model is 5&apos;9&quot; and wears a size M.</p>
                </div></div>
              </div>
              <div className="acc">
                <button className="acc__head" aria-expanded="false">
                  <span>Fabric &amp; care</span><span className="acc__icon"></span>
                </button>
                <div className="acc__body"><div className="acc__inner">
                  <p>Woven at a family mill in Biella, Italy. Dry clean only. Steam to
                  refresh between wears and store on a wide hanger to keep the shoulder
                  line. Free repairs and re-lining for the life of the piece.</p>
                </div></div>
              </div>
              <div className="acc">
                <button className="acc__head" aria-expanded="false">
                  <span>Shipping &amp; returns</span><span className="acc__icon"></span>
                </button>
                <div className="acc__body"><div className="acc__inner">
                  <p>Free carbon-neutral shipping, dispatched within 1–2 business days.
                  Free 30-day returns and exchanges, plus complimentary alterations at
                  any Bleumon atelier in your first year.</p>
                </div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="shop">
          <header className="section-head section-head--split">
            <div>
              <span className="section-head__num" data-reveal="">(+)</span>
              <h2 className="section-head__title" data-reveal="">Wear it with.</h2>
            </div>
            <a href="/collection" className="link-arrow" data-magnetic="" data-reveal="">
              <span>Shop all</span>
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
                  backgroundImage: "url('https://images.pexels.com/photos/9603489/pexels-photo-9603489.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop'),linear-gradient(155deg,#ded6c9,#c0b29c)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
