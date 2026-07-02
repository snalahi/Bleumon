export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__big" aria-hidden="true">BLEUMON</div>
      <div className="footer__cols">
        <div className="footer__col">
          <span className="footer__head">Shop</span>
          <a href="/collection">Women</a>
          <a href="/collection">Men</a>
          <a href="/collection">Accessories</a>
          <a href="/collection">Gift cards</a>
        </div>
        <div className="footer__col">
          <span className="footer__head">Studio</span>
          <a href="/about">Our story</a>
          <a href="/#journal">Journal</a>
          <a href="/about">Sustainability</a>
          <a href="/about">Careers</a>
        </div>
        <div className="footer__col">
          <span className="footer__head">Help</span>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Size guide</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer__col">
          <span className="footer__head">Social</span>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">Pinterest</a>
        </div>
      </div>
      <div className="footer__base">
        <span>© 2025 Bleumon — All rights reserved.</span>
        <span>Designed in Paris.</span>
      </div>
    </footer>
  )
}
