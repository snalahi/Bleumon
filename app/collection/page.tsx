import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Preloader } from '@/components/Preloader'

export const metadata: Metadata = {
  title: 'Shop all — Bleumon',
  description:
    "Browse every Bleumon style — women's, men's and accessories, designed in Paris and made to last.",
}

export default function CollectionPage() {
  return (
    <>
      <Preloader />
      <Nav />

      <main id="top" className="subpage">

        <header className="collection-hero">
          <nav className="breadcrumb" aria-label="Breadcrumb" data-reveal="">
            <a href="/">Home</a><span>/</span><span aria-current="page">Shop all</span>
          </nav>
          <h1 className="collection-hero__title" data-reveal="">
            Everything<br />in the edit.
          </h1>
          <p className="collection-hero__note" data-reveal="">
            Forty core styles across women&apos;s, men&apos;s and accessories — designed in
            Paris, made in small runs. Filter by category, or sort to find your piece.
          </p>
        </header>

        <div className="toolbar">
          <div className="filters" id="filters" role="tablist" aria-label="Filter by category">
            <button className="chip is-active" data-filter="all">All <span>9</span></button>
            <button className="chip" data-filter="Women">Women</button>
            <button className="chip" data-filter="Men">Men</button>
            <button className="chip" data-filter="Accessories">Accessories</button>
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

        <section className="shop shop--collection">
          <div className="shop__grid" id="grid">

            <a href="/product" className="product" data-reveal="" data-cat="Women" data-price="245" data-name="The Tailored Blazer">
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

            <a href="/product" className="product" data-reveal="" data-cat="Women" data-price="120" data-name="Straight-Leg Denim">
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

            <a href="/product" className="product" data-reveal="" data-cat="Women" data-price="165" data-name="Slip Midi Dress">
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

            <a href="/product" className="product" data-reveal="" data-cat="Men" data-price="110" data-name="Streetwear Hoodie">
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

            <a href="/product" className="product" data-reveal="" data-cat="Accessories" data-price="260" data-name="Leather Tote">
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

            <a href="/product" className="product" data-reveal="" data-cat="Women" data-price="210" data-name="Evening Slip Dress">
              <div
                className="product__media"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/14801125/pexels-photo-14801125.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop'),linear-gradient(155deg,#d7d2c4,#b6b2a4)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              >
                <span className="product__add" data-magnetic="">Quick add +</span>
              </div>
              <div className="product__info"><h3>Evening Slip Dress</h3><span className="product__price">$210</span></div>
              <span className="product__tag">Women</span>
            </a>

            <a href="/product" className="product" data-reveal="" data-cat="Accessories" data-price="190" data-name="Structured Purse">
              <div
                className="product__media"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/19711183/pexels-photo-19711183.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop'),linear-gradient(155deg,#ded6c9,#c0b29c)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <span className="product__add" data-magnetic="">Quick add +</span>
              </div>
              <div className="product__info"><h3>Structured Purse</h3><span className="product__price">$190</span></div>
              <span className="product__tag">Accessories</span>
            </a>

            <a href="/product" className="product" data-reveal="" data-cat="Men" data-price="135" data-name="Urban Overshirt">
              <div
                className="product__media"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/9431122/pexels-photo-9431122.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop'),linear-gradient(155deg,#cdd0c4,#9ca08f)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              >
                <span className="product__add" data-magnetic="">Quick add +</span>
              </div>
              <div className="product__info"><h3>Urban Overshirt</h3><span className="product__price">$135</span></div>
              <span className="product__tag">Men</span>
            </a>

            <a href="/product" className="product" data-reveal="" data-cat="Women" data-price="230" data-name="Striped Blazer">
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
