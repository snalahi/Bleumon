import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found — Bleumon',
}

export default function NotFound() {
  return (
    <>
      <header className="nav" id="nav">
        <a href="/" className="nav__logo" data-magnetic="">BLEUMON<span>®</span></a>
        <nav className="nav__links" aria-label="Primary">
          <a href="/#collections" data-link="">Collections</a>
          <a href="/collection" data-link="">Shop</a>
          <a href="/about" data-link="">Story</a>
          <a href="/#journal" data-link="">Journal</a>
        </nav>
        <div className="nav__right">
          <a href="#cart" className="nav__cart" data-magnetic="">Cart <span className="nav__count">0</span></a>
        </div>
      </header>

      <main className="nf">
        <span className="nf__code">404</span>
        <span className="nf__msg">This piece is sold out.</span>
        <p>The page you&apos;re after has moved or sold through. Let&apos;s get you back to the good stuff.</p>
        <a href="/" className="btn btn--solid" data-magnetic="">
          <span>Back home</span>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </main>
    </>
  )
}
