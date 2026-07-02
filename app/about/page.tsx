import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Preloader } from '@/components/Preloader'

export const metadata: Metadata = {
  title: 'Story — Bleumon',
  description:
    'Bleumon is a Paris fashion studio that makes fewer pieces and makes them right — designed in-house, made in small runs, built to last.',
}

export default function AboutPage() {
  return (
    <>
      <Preloader />
      <Nav />

      <main id="top" className="subpage">

        <nav className="breadcrumb" aria-label="Breadcrumb" data-reveal="">
          <a href="/">Home</a><span>/</span><span aria-current="page">Story</span>
        </nav>

        <section className="about-hero">
          <h1 className="about-hero__statement" data-reveal="">
            We make fewer&nbsp;pieces, and we make them <em>right.</em>
          </h1>
          <p className="about-hero__lede" data-reveal="">
            Bleumon began in a Paris studio with a simple idea: make the clothes you
            actually reach for. Tailoring that fits, denim that lasts, knits you live
            in — designed in-house, made in small runs, and built to outlast the
            season they launched in.
          </p>
        </section>

        <div
          className="about-banner"
          data-parallax-bg=""
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/17474220/pexels-photo-17474220.jpeg?auto=compress&cs=tinysrgb&w=1500&h=700&fit=crop'),linear-gradient(150deg,#b9b2a2,#2330e6 180%)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <span>The studio · Paris, 2025</span>
        </div>

        <section className="principles">
          <article className="principle" data-reveal="">
            <span className="principle__mark">Considered</span>
            <h3>Designed in-house</h3>
            <p>Every piece is drawn, draped and fitted by our own team — no licensed
            designs, no chasing micro-trends. If it doesn&apos;t earn a place in the
            wardrobe, it doesn&apos;t ship.</p>
          </article>
          <article className="principle" data-reveal="">
            <span className="principle__mark">Made well</span>
            <h3>Small-run, real fabric</h3>
            <p>We work with family mills and ateliers in Italy and Portugal, in runs
            small enough to keep quality high and waste low. Natural and recycled
            fibres first, always.</p>
          </article>
          <article className="principle" data-reveal="">
            <span className="principle__mark">Worn often</span>
            <h3>Built to be kept</h3>
            <p>Free first-year alterations and lifetime repairs. We&apos;d rather you wear
            one Bleumon piece for ten years than ten pieces for one season.</p>
          </article>
        </section>

        <section className="timeline">
          <header className="section-head" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <span className="section-head__num" data-reveal="">(How we got here)</span>
            <h2 className="section-head__title" data-reveal="">A short history.</h2>
          </header>

          <div className="tl" data-reveal="">
            <span className="tl__year">2019</span>
            <div className="tl__body">
              <h3>One blazer, one rule</h3>
              <p>The studio opened with a single tailored jacket and a promise: make
              it well enough to keep for years. It sold out in a week.</p>
            </div>
          </div>
          <div className="tl" data-reveal="">
            <span className="tl__year">2021</span>
            <div className="tl__body">
              <h3>The first full collection</h3>
              <p>Denim, knitwear and dresses joined the line, all built around the
              same clean palette so everything works back together.</p>
            </div>
          </div>
          <div className="tl" data-reveal="">
            <span className="tl__year">2023</span>
            <div className="tl__body">
              <h3>An ethical supply chain</h3>
              <p>We moved fully to family mills in Italy and Portugal, with
              carbon-neutral shipping and a take-back programme for worn pieces.</p>
            </div>
          </div>
          <div className="tl" data-reveal="">
            <span className="tl__year">2025</span>
            <div className="tl__body">
              <h3>Forty core styles</h3>
              <p>Women&apos;s, men&apos;s and accessories — a tight, considered range, still
              designed in Paris, still made in small runs, still by hand.</p>
            </div>
          </div>
        </section>

        <section className="story" id="story" style={{ gridTemplateColumns: '1fr' }}>
          <div className="story__copy" style={{ alignSelf: 'auto' }}>
            <div className="stats">
              <div className="stat" data-reveal="">
                <span className="stat__num" data-count="30">0</span>
                <span className="stat__label">day free returns</span>
              </div>
              <div className="stat" data-reveal="">
                <span className="stat__num" data-count="40">0</span>
                <span className="stat__label">styles in the range</span>
              </div>
              <div className="stat" data-reveal="">
                <span className="stat__num" data-count="12">0</span>
                <span className="stat__label">people in the studio</span>
              </div>
              <div className="stat" data-reveal="">
                <span className="stat__num" data-count="100" data-suffix="%">0</span>
                <span className="stat__label">ethically made</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <h2 data-reveal="">Buy less. Wear it more.</h2>
          <a href="/collection" className="btn btn--solid" data-magnetic="" data-reveal="">
            <span>Shop the collection</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </section>
      </main>

      <Footer />
    </>
  )
}
