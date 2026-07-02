import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout — Bleumon",
};

export default function CheckoutPage() {
  return (
    <div className="checkout">
      {/* Minimal header */}
      <header className="checkout__nav">
        <a href="/" className="nav__logo checkout__logo">
          BLEUMON<span>®</span>
        </a>
        <span className="checkout__secure">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          Secure Checkout
        </span>
      </header>

      <div className="checkout__body">
        {/* ---- LEFT: Form ---- */}
        <div className="checkout__form-col">
          <form id="checkoutForm" className="checkout__form" noValidate>

            {/* Contact */}
            <section className="checkout__section">
              <h2 className="checkout__section-title">Contact</h2>
              <div className="field">
                <label htmlFor="chk-email">Email</label>
                <input id="chk-email" type="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="field">
                <label htmlFor="chk-phone">Phone (optional)</label>
                <input id="chk-phone" type="tel" name="phone" placeholder="+1 555 000 0000" />
              </div>
            </section>

            {/* Shipping */}
            <section className="checkout__section">
              <h2 className="checkout__section-title">Shipping address</h2>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="chk-first">First name</label>
                  <input id="chk-first" type="text" name="firstName" required />
                </div>
                <div className="field">
                  <label htmlFor="chk-last">Last name</label>
                  <input id="chk-last" type="text" name="lastName" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="chk-addr">Address</label>
                <input id="chk-addr" type="text" name="address" placeholder="Street address or P.O. box" required />
              </div>
              <div className="field">
                <label htmlFor="chk-addr2">Apartment, suite, etc. (optional)</label>
                <input id="chk-addr2" type="text" name="address2" />
              </div>
              <div className="field-row field-row--3">
                <div className="field">
                  <label htmlFor="chk-city">City</label>
                  <input id="chk-city" type="text" name="city" required />
                </div>
                <div className="field">
                  <label htmlFor="chk-state">State / Region</label>
                  <input id="chk-state" type="text" name="state" />
                </div>
                <div className="field field--sm">
                  <label htmlFor="chk-zip">ZIP / Postal</label>
                  <input id="chk-zip" type="text" name="zip" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="chk-country">Country</label>
                <select id="chk-country" name="country">
                  <option>France</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>Italy</option>
                  <option>Spain</option>
                  <option>Japan</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>
            </section>

            {/* Payment */}
            <section className="checkout__section checkout__section--last">
              <h2 className="checkout__section-title">
                Payment
                <span className="checkout__cards">
                  <span className="chk-card-badge">VISA</span>
                  <span className="chk-card-badge">MC</span>
                  <span className="chk-card-badge">AMEX</span>
                </span>
              </h2>
              <div className="field">
                <label htmlFor="chk-card">Card number</label>
                <input id="chk-card" type="text" name="card" placeholder="1234 5678 9012 3456" maxLength={19} required />
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="chk-expiry">Expiry</label>
                  <input id="chk-expiry" type="text" name="expiry" placeholder="MM / YY" maxLength={7} required />
                </div>
                <div className="field field--sm">
                  <label htmlFor="chk-cvv">CVV</label>
                  <input id="chk-cvv" type="text" name="cvv" placeholder="123" maxLength={4} required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="chk-cardname">Name on card</label>
                <input id="chk-cardname" type="text" name="cardName" required />
              </div>
            </section>

            <button type="submit" className="btn btn--solid checkout__submit">
              <span>Place Order</span>
            </button>
            <p className="checkout__policy">
              By placing your order you agree to our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </p>
          </form>

          {/* Success state — shown by JS after submit */}
          <div className="checkout__success" id="checkoutSuccess" hidden>
            <div className="checkout__success-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2>Order confirmed!</h2>
            <p>Thank you for shopping with Bleumon. A confirmation will be sent to your email shortly.</p>
            <a href="/collection" className="btn btn--line"><span>Continue shopping →</span></a>
          </div>
        </div>

        {/* ---- RIGHT: Order summary ---- */}
        <aside className="checkout__summary">
          <h2 className="checkout__summary-title">Order summary</h2>

          {/* JS populates this */}
          <div id="checkoutItems" className="checkout__items"></div>

          <div className="checkout__empty" id="checkoutEmpty" hidden>
            <p>Your cart is empty.</p>
            <a href="/collection">Browse collection →</a>
          </div>

          <div className="checkout__totals" id="checkoutTotals" hidden>
            <div className="checkout__total-row">
              <span>Subtotal</span>
              <span id="checkoutSubtotal">$0</span>
            </div>
            <div className="checkout__total-row">
              <span>Shipping</span>
              <span className="checkout__free">Free</span>
            </div>
            <div className="checkout__total-row checkout__total-row--final">
              <span>Total</span>
              <span id="checkoutTotal">$0</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
