interface NavProps {
  isHome?: boolean
}

const Chevron = () => (
  <svg className="nav__chevron" viewBox="0 0 12 7" width="10" height="7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 1l5 5 5-5"/>
  </svg>
)

function MenDrop() {
  return (
    <div className="nav__drop">
      <div className="nav__drop-inner">
        <div className="nav__drop-col">
          <span className="nav__drop-heading">Tailoring</span>
          <a href="/collection">Blazers</a>
          <a href="/collection">Formal Trousers</a>
          <a href="/collection">Suit Sets</a>
          <a href="/collection">Overshirts</a>
        </div>
        <div className="nav__drop-col">
          <span className="nav__drop-heading">Casual</span>
          <a href="/collection">Denim</a>
          <a href="/collection">Casual Shirts</a>
          <a href="/collection">Hoodies</a>
          <a href="/collection">T-Shirts</a>
        </div>
        <div className="nav__drop-col">
          <span className="nav__drop-heading">Knitwear</span>
          <a href="/collection">Sweaters</a>
          <a href="/collection">Knit Polo</a>
          <a href="/collection">Cardigans</a>
          <a href="/collection">Vests</a>
        </div>
        <div className="nav__drop-col">
          <span className="nav__drop-heading">Accessories</span>
          <a href="/collection">Bags</a>
          <a href="/collection">Belts</a>
          <a href="/collection">Scarves</a>
          <a href="/collection">Wallets</a>
        </div>
        <div className="nav__drop-feat">
          <div className="nav__drop-img" style={{ backgroundImage: "url('https://images.pexels.com/photos/9431122/pexels-photo-9431122.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop')" }} />
          <span>New In Men</span>
        </div>
      </div>
    </div>
  )
}

function WomenDrop() {
  return (
    <div className="nav__drop">
      <div className="nav__drop-inner">
        <div className="nav__drop-col">
          <span className="nav__drop-heading">Tailoring</span>
          <a href="/collection">Blazers</a>
          <a href="/collection">Trousers</a>
          <a href="/collection">Suit Sets</a>
          <a href="/collection">Jackets</a>
        </div>
        <div className="nav__drop-col">
          <span className="nav__drop-heading">Dresses</span>
          <a href="/collection">Midi Dress</a>
          <a href="/collection">Slip Dress</a>
          <a href="/collection">Evening</a>
          <a href="/collection">Day Dress</a>
        </div>
        <div className="nav__drop-col">
          <span className="nav__drop-heading">Tops</span>
          <a href="/collection">Blouses</a>
          <a href="/collection">Knit Tops</a>
          <a href="/collection">Shirts</a>
          <a href="/collection">Bodysuits</a>
        </div>
        <div className="nav__drop-col">
          <span className="nav__drop-heading">Accessories</span>
          <a href="/collection">Totes</a>
          <a href="/collection">Bags</a>
          <a href="/collection">Jewellery</a>
          <a href="/collection">Scarves</a>
        </div>
        <div className="nav__drop-feat">
          <div className="nav__drop-img" style={{ backgroundImage: "url('https://images.pexels.com/photos/19272278/pexels-photo-19272278.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop')" }} />
          <span>New In Women</span>
        </div>
      </div>
    </div>
  )
}

function AboutDrop() {
  return (
    <div className="nav__drop nav__drop--slim">
      <div className="nav__drop-inner">
        <div className="nav__drop-col">
          <span className="nav__drop-heading">Company</span>
          <a href="/about">Our Story</a>
          <a href="/about">Sustainability</a>
          <a href="/about">The Studio</a>
        </div>
        <div className="nav__drop-col">
          <span className="nav__drop-heading">Explore</span>
          <a href="/#journal">Journal</a>
          <a href="/#newsletter">Contact</a>
          <a href="/#newsletter">Press</a>
        </div>
      </div>
    </div>
  )
}

export function Nav({ isHome = false }: NavProps) {
  const logoHref = isHome ? '#top' : '/'
  const contactHref = isHome ? '#newsletter' : '/#newsletter'

  return (
    <>
      <header className="nav" id="nav">
        <a href={logoHref} className="nav__logo" data-magnetic="">
          BLEUMON<span>®</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          <div className="nav__group">
            <a href="/collection" data-link="" className="nav__item">Men <Chevron /></a>
            <MenDrop />
          </div>
          <div className="nav__group">
            <a href="/collection" data-link="" className="nav__item">Women <Chevron /></a>
            <WomenDrop />
          </div>
          <div className="nav__group">
            <a href="/about" data-link="" className="nav__item">About <Chevron /></a>
            <AboutDrop />
          </div>
          <a href={contactHref} data-link="">Contact</a>
        </nav>

        <div className="nav__right">
          <button className="nav__icon" aria-label="Search">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="11" cy="11" r="7"/>
              <path d="M16.5 16.5L21 21"/>
            </svg>
          </button>
          <button className="nav__icon" aria-label="Account">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6"/>
            </svg>
          </button>
          <a href="#cart" className="nav__cart" data-magnetic="" aria-label="Cart">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span className="nav__count">0</span>
          </a>
          <button className="nav__burger" id="burger" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span>
          </button>
        </div>
      </header>

      <div className="menu" id="menu" aria-hidden="true">
        <nav className="menu__links">
          <a href="/collection" data-menu-link="">Men</a>
          <a href="/collection" data-menu-link="">Women</a>
          <a href="/about" data-menu-link="">About</a>
          <a href={contactHref} data-menu-link="">Contact</a>
          <a href="#cart" data-menu-link="">Cart</a>
        </nav>
        <div className="menu__foot">
          <span>Paris · Atelier</span>
          <span>hello@bleumon.com</span>
        </div>
      </div>
    </>
  )
}
