import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout — Bleumon",
};

export default function CheckoutPage() {
  return (
    <div className="checkout">

      {/* ─── HEADER ─── */}
      <header className="checkout__nav">
        <a href="/" className="nav__logo checkout__logo">BLEUMON<span>®</span></a>

        <nav className="checkout__steps" aria-label="Checkout progress">
          <a href="/collection" className="checkout__step checkout__step--done">
            <span className="chk-step__num">
              <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="2,6 5,9 10,3"/></svg>
            </span>
            Cart
          </a>
          <span className="checkout__step-sep" aria-hidden="true" />
          <span className="checkout__step checkout__step--active">
            <span className="chk-step__num">2</span>Details
          </span>
          <span className="checkout__step-sep" aria-hidden="true" />
          <span className="checkout__step">
            <span className="chk-step__num">3</span>Confirm
          </span>
        </nav>

        <span className="checkout__secure">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          SSL secured
        </span>
      </header>

      {/* ─── BODY ─── */}
      <div className="checkout__body">

        {/* LEFT: form */}
        <div className="checkout__form-col">
          <form id="checkoutForm" className="checkout__form" noValidate>

            {/* 01 — Contact */}
            <section className="checkout__section">
              <div className="chk-sec__head">
                <span className="chk-sec__num" aria-hidden="true">01</span>
                <h2 className="chk-sec__title">Contact</h2>
              </div>
              <div className="checkout__fields">
                <div className="field field--float">
                  <input id="chk-email" type="email" name="email" placeholder=" " required autoComplete="email" />
                  <label htmlFor="chk-email">Email address</label>
                </div>
                <div className="field field--float">
                  <input id="chk-phone" type="tel" name="phone" placeholder=" " autoComplete="tel" />
                  <label htmlFor="chk-phone">Phone (optional)</label>
                </div>
                <label className="chk-checkbox">
                  <input type="checkbox" name="news" defaultChecked />
                  <span className="chk-checkbox__box" aria-hidden="true" />
                  <span>Email me with new arrivals and exclusive offers</span>
                </label>
              </div>
            </section>

            {/* 02 — Delivery */}
            <section className="checkout__section">
              <div className="chk-sec__head">
                <span className="chk-sec__num" aria-hidden="true">02</span>
                <h2 className="chk-sec__title">Delivery</h2>
              </div>
              <div className="checkout__fields">
                <div className="field-row">
                  <div className="field field--float">
                    <input id="chk-first" type="text" name="firstName" placeholder=" " required autoComplete="given-name" />
                    <label htmlFor="chk-first">First name</label>
                  </div>
                  <div className="field field--float">
                    <input id="chk-last" type="text" name="lastName" placeholder=" " required autoComplete="family-name" />
                    <label htmlFor="chk-last">Last name</label>
                  </div>
                </div>
                <div className="field field--float">
                  <input id="chk-addr" type="text" name="address" placeholder=" " required autoComplete="street-address" />
                  <label htmlFor="chk-addr">Street address</label>
                </div>
                <div className="field field--float">
                  <input id="chk-addr2" type="text" name="address2" placeholder=" " autoComplete="address-line2" />
                  <label htmlFor="chk-addr2">Apartment, suite, etc. (optional)</label>
                </div>
                <div className="field-row field-row--3">
                  <div className="field field--float">
                    <input id="chk-city" type="text" name="city" placeholder=" " required autoComplete="address-level2" />
                    <label htmlFor="chk-city">City</label>
                  </div>
                  <div className="field field--float">
                    <input id="chk-state" type="text" name="state" placeholder=" " autoComplete="address-level1" />
                    <label htmlFor="chk-state">Region</label>
                  </div>
                  <div className="field field--float">
                    <input id="chk-zip" type="text" name="zip" placeholder=" " required autoComplete="postal-code" />
                    <label htmlFor="chk-zip">ZIP</label>
                  </div>
                </div>
                <div className="field field--select-wrap">
                  <label htmlFor="chk-country" className="field__above-label">Country</label>
                  <div className="field__select-inner">
                    <select id="chk-country" name="country" autoComplete="country">
                      <option value="FR">France</option>
                      <option value="US">United States</option>
                      <option value="GB">United Kingdom</option>
                      <option value="DE">Germany</option>
                      <option value="IT">Italy</option>
                      <option value="ES">Spain</option>
                      <option value="JP">Japan</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                    </select>
                    <svg className="field__arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Shipping method */}
              <div className="chk-ship" id="shippingMethods">
                <p className="chk-ship__head">Shipping method</p>
                <label className="chk-ship__opt">
                  <input type="radio" name="ship" value="0" defaultChecked />
                  <span className="chk-ship__radio" aria-hidden="true" />
                  <span className="chk-ship__info">
                    <span className="chk-ship__name">Standard</span>
                    <span className="chk-ship__days">5–7 business days</span>
                  </span>
                  <span className="chk-ship__price chk-ship__price--free">Free</span>
                </label>
                <label className="chk-ship__opt">
                  <input type="radio" name="ship" value="12" />
                  <span className="chk-ship__radio" aria-hidden="true" />
                  <span className="chk-ship__info">
                    <span className="chk-ship__name">Express</span>
                    <span className="chk-ship__days">2–3 business days</span>
                  </span>
                  <span className="chk-ship__price">€12</span>
                </label>
                <label className="chk-ship__opt">
                  <input type="radio" name="ship" value="28" />
                  <span className="chk-ship__radio" aria-hidden="true" />
                  <span className="chk-ship__info">
                    <span className="chk-ship__name">Overnight</span>
                    <span className="chk-ship__days">Next business day</span>
                  </span>
                  <span className="chk-ship__price">€28</span>
                </label>
              </div>
            </section>

            {/* 03 — Payment */}
            <section className="checkout__section checkout__section--last">
              <div className="chk-sec__head">
                <span className="chk-sec__num" aria-hidden="true">03</span>
                <h2 className="chk-sec__title">
                  Payment
                  <span className="checkout__cards">
                    <svg className="chk-card-icon" viewBox="0 0 38 24" role="img" aria-label="Visa">
                      <rect width="38" height="24" rx="4" fill="#1A1F71"/>
                      <text x="6" y="17" fill="#fff" fontSize="13" fontWeight="800" fontFamily="Arial,sans-serif">VISA</text>
                    </svg>
                    <svg className="chk-card-icon" viewBox="0 0 38 24" role="img" aria-label="Mastercard">
                      <rect width="38" height="24" rx="4" fill="#222"/>
                      <circle cx="15" cy="12" r="7" fill="#EB001B"/>
                      <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
                      <path d="M19 6.8a7 7 0 0 1 0 10.4A7 7 0 0 1 19 6.8z" fill="#FF5F00"/>
                    </svg>
                    <svg className="chk-card-icon" viewBox="0 0 38 24" role="img" aria-label="Amex">
                      <rect width="38" height="24" rx="4" fill="#2E77BC"/>
                      <text x="5" y="17" fill="#fff" fontSize="10" fontWeight="700" fontFamily="Arial,sans-serif">AMEX</text>
                    </svg>
                  </span>
                </h2>
              </div>
              <div className="checkout__fields">
                <div className="field field--float field--card">
                  <input id="chk-card" type="text" name="card" placeholder=" " maxLength={19} required autoComplete="cc-number" />
                  <label htmlFor="chk-card">Card number</label>
                  <svg className="field__card-ghost" viewBox="0 0 38 24" aria-hidden="true">
                    <rect x="0" y="0" width="38" height="24" rx="3" fill="currentColor" opacity=".1"/>
                    <rect x="0" y="8" width="38" height="7" fill="currentColor" opacity=".15"/>
                  </svg>
                </div>
                <div className="field-row">
                  <div className="field field--float">
                    <input id="chk-expiry" type="text" name="expiry" placeholder=" " maxLength={7} required autoComplete="cc-exp" />
                    <label htmlFor="chk-expiry">Expiry (MM / YY)</label>
                  </div>
                  <div className="field field--float">
                    <input id="chk-cvv" type="text" name="cvv" placeholder=" " maxLength={4} required autoComplete="cc-csc" />
                    <label htmlFor="chk-cvv">CVV</label>
                  </div>
                </div>
                <div className="field field--float">
                  <input id="chk-cardname" type="text" name="cardName" placeholder=" " required autoComplete="cc-name" />
                  <label htmlFor="chk-cardname">Name on card</label>
                </div>
              </div>
            </section>

            <button type="submit" className="btn btn--solid checkout__submit">
              <span>Complete order</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            <div className="checkout__trust-row">
              <span className="chk-trust">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Secure checkout
              </span>
              <span className="chk-trust">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3"/></svg>
                Free returns
              </span>
              <span className="chk-trust">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                30-day guarantee
              </span>
            </div>

            <p className="checkout__policy">
              By placing your order you agree to our{" "}
              <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            </p>
          </form>

          {/* ── Success state ── */}
          <div className="checkout__success" id="checkoutSuccess" hidden>
            <div className="chk-success__ring" aria-hidden="true">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="chk-ring" cx="40" cy="40" r="34" stroke="var(--ink)" strokeWidth="2"/>
                <polyline className="chk-tick" points="24,40 36,52 57,29" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="chk-success__ref" id="checkoutOrderNum">Order #BLM-00000</p>
            <h2>Your order is confirmed</h2>
            <p>Thank you for shopping with Bleumon. A confirmation email is on its way — check your inbox shortly.</p>
            <div className="chk-next">
              <div className="chk-next__row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Order processing</span>
                <span className="chk-next__tag chk-next__tag--ok">Done</span>
              </div>
              <div className="chk-next__row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>Confirmation email sent</span>
                <span className="chk-next__tag chk-next__tag--ok">Done</span>
              </div>
              <div className="chk-next__row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                <span>Dispatched within 24 h</span>
                <span className="chk-next__tag">Pending</span>
              </div>
            </div>
            <a href="/collection" className="btn btn--line"><span>Continue shopping →</span></a>
          </div>
        </div>

        {/* RIGHT: order summary */}
        <aside className="checkout__summary">
          <div className="chk-summary__top">
            <h2 className="checkout__summary-title">Order summary</h2>
          </div>

          <div id="checkoutItems" className="checkout__items"></div>

          <div className="checkout__empty" id="checkoutEmpty" hidden>
            <p>Your cart is empty.</p>
            <a href="/collection">Browse the collection →</a>
          </div>

          {/* Promo code */}
          <div className="chk-promo">
            <button className="chk-promo__toggle" id="promoToggle" type="button">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                <line x1="7" y1="7" x2="7.01" y2="7"/>
              </svg>
              Add promo code
              <svg className="chk-promo__chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            <div className="chk-promo__body" id="promoBody" hidden>
              <div className="chk-promo__row">
                <input type="text" className="chk-promo__input" placeholder="Enter code" id="promoInput" />
                <button type="button" className="chk-promo__btn" id="promoApply">Apply</button>
              </div>
              <p className="chk-promo__msg" id="promoMsg" hidden></p>
            </div>
          </div>

          <div className="checkout__totals" id="checkoutTotals" hidden>
            <div className="checkout__total-row">
              <span>Subtotal</span>
              <span id="checkoutSubtotal">$0</span>
            </div>
            <div className="checkout__total-row" id="shippingRow">
              <span>Shipping</span>
              <span className="checkout__free">Free</span>
            </div>
            <div className="checkout__total-row checkout__total-row--final">
              <span>Total</span>
              <span id="checkoutTotal">$0</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="chk-badges">
            <div className="chk-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span>256-bit SSL encryption</span>
            </div>
            <div className="chk-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3"/></svg>
              <span>Free returns within 30 days</span>
            </div>
            <div className="chk-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Satisfaction guaranteed</span>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
