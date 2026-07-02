/* ============================================================================
   OBJET — main.js
   Dependency-free. Each behaviour is its own block so you can lift or remove
   pieces without breaking the rest. Respects prefers-reduced-motion.
   ========================================================================== */

(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer  = window.matchMedia("(pointer: fine)").matches;
  const $  = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));

  /* ----------------------------------------------------- PRELOADER */
  (function preloader() {
    const pre = $("#preloader");
    const bar = $("#preloaderBar");
    if (!pre) return;

    let p = 0;
    const tick = setInterval(() => {
      p = Math.min(100, p + Math.random() * 22);
      if (bar) bar.style.width = p + "%";
      if (p >= 100) clearInterval(tick);
    }, 130);

    const finish = () => {
      pre.classList.add("is-done");
      document.body.classList.add("is-loaded");
      revealHero();
      setTimeout(() => pre.remove(), 1000);
    };
    // Wait for load OR a max of 1.6s so we never hang
    window.addEventListener("load", () => setTimeout(finish, 600));
    setTimeout(finish, 1600);
  })();

  /* ----------------------------------------------------- HERO STAGGER */
  function revealHero() {
    if (reduceMotion) {
      $$("[data-hero]").forEach((w) => (w.style.transform = "none"));
      return;
    }
    $$("[data-hero]").forEach((word, i) => {
      word.style.transition = "transform .9s cubic-bezier(.22,1,.36,1)";
      word.style.transitionDelay = 0.08 * i + "s";
      requestAnimationFrame(() => (word.style.transform = "translateY(0)"));
    });
  }

  /* ----------------------------------------------------- SCROLL REVEALS */
  (function reveals() {
    const items = $$("[data-reveal]");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    // Stagger reveals that share a parent
    items.forEach((el, i) => {
      const sibs = el.parentElement
        ? $$("[data-reveal]", el.parentElement).indexOf(el)
        : 0;
      el.style.transitionDelay = Math.max(0, sibs) * 0.07 + "s";
      io.observe(el);
    });
  })();

  /* ----------------------------------------------------- MEGA MENU */
  (function megaMenu() {
    const groups = $$('.nav__group');
    if (!groups.length) return;
    let closeTimer;

    const closeAll = () => groups.forEach(g => g.classList.remove('is-open'));

    groups.forEach(group => {
      group.addEventListener('mouseenter', () => {
        clearTimeout(closeTimer);
        closeAll();
        group.classList.add('is-open');
      });
      group.addEventListener('mouseleave', () => {
        closeTimer = setTimeout(closeAll, 300);
      });
    });

    // Close on outside click or scroll
    document.addEventListener('click', e => {
      if (!e.target.closest('.nav__group')) closeAll();
    });
    window.addEventListener('scroll', closeAll, { passive: true });
  })();

  /* ----------------------------------------------------- NAV: hide on scroll down */
  (function nav() {
    const nav = $("#nav");
    if (!nav) return;
    let last = 0;
    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        if (y > last && y > 120) nav.classList.add("is-hidden");
        else nav.classList.remove("is-hidden");
        nav.classList.toggle("is-scrolled", y > 10);
        last = y;
      },
      { passive: true }
    );
  })();

  /* ----------------------------------------------------- MOBILE MENU */
  (function menu() {
    const burger = $("#burger");
    const menu = $("#menu");
    if (!burger || !menu) return;
    const toggle = (open) => {
      burger.classList.toggle("is-open", open);
      menu.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-hidden", String(!open));
      document.body.style.overflow = open ? "hidden" : "";
    };
    burger.addEventListener("click", () =>
      toggle(!menu.classList.contains("is-open"))
    );
    $$("[data-menu-link]").forEach((a) =>
      a.addEventListener("click", () => toggle(false))
    );
  })();

  /* ----------------------------------------------------- CUSTOM CURSOR */
/* ----------------------------------------------------- MAGNETIC ELEMENTS */
  (function magnetic() {
    if (!finePointer || reduceMotion) return;
    $$("[data-magnetic]").forEach((el) => {
      const strength = 0.32;
      el.style.transition = "transform .35s cubic-bezier(.22,1,.36,1)";
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${mx * strength}px, ${my * strength}px)`;
      });
      el.addEventListener("mouseleave", () => (el.style.transform = ""));
    });
  })();

  /* ----------------------------------------------------- PARALLAX (floats + bg) */
  (function parallax() {
    if (reduceMotion) return;
    const floats = $$("[data-parallax]");
    const bg = $("[data-parallax-bg]");
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      floats.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0;
        el.style.transform = `translateY(${y * speed}px)`;
      });
      if (bg) {
        const rect = bg.getBoundingClientRect();
        const off = (rect.top - window.innerHeight / 2) * -0.06;
        bg.style.backgroundPosition = `center ${off}px`;
      }
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
      },
      { passive: true }
    );
    update();
  })();

  /* ----------------------------------------------------- PINNED SHOWCASE */
  (function showcase() {
    const section = $("#showcase");
    const card = $("#showcaseCard");
    if (!section || !card) return;
    const steps = $$(".showcase__step", section);
    const dots = $$(".showcase__dot", section);
    let ticking = false;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      // progress 0 -> 1 across the pinned scroll
      let prog = total > 0 ? (-rect.top) / total : 0;
      prog = Math.min(1, Math.max(0, prog));

      if (!reduceMotion) {
        const scale = 1 + prog * 0.28;
        const rot = (prog - 0.5) * 8;
        card.style.transform = `scale(${scale}) rotate(${rot}deg)`;
      }

      const idx = Math.min(steps.length - 1, Math.floor(prog * steps.length));
      steps.forEach((s, i) => s.classList.toggle("is-active", i === idx));
      dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } },
      { passive: true }
    );
    window.addEventListener("resize", update);
    update();
  })();

  /* ----------------------------------------------------- COUNT-UP STATS */
  (function counters() {
    const nums = $$("[data-count]");
    if (!nums.length || !("IntersectionObserver" in window)) {
      nums.forEach((n) => (n.textContent = n.dataset.count + (n.dataset.suffix || "")));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || "";
          if (reduceMotion) { el.textContent = target + suffix; io.unobserve(el); return; }
          const dur = 1400; const t0 = performance.now();
          const step = (t) => {
            const k = Math.min(1, (t - t0) / dur);
            const eased = 1 - Math.pow(1 - k, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (k < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    nums.forEach((n) => io.observe(n));
  })();

  /* ----------------------------------------------------- MARQUEE SPEED ON SCROLL */
  (function marqueeBoost() {
    const track = $("#marquee");
    if (!track || reduceMotion) return;
    let last = window.scrollY, dir = 1;
    window.addEventListener(
      "scroll",
      () => {
        dir = window.scrollY > last ? 1 : -1;
        last = window.scrollY;
        track.style.animationDirection = dir > 0 ? "normal" : "reverse";
      },
      { passive: true }
    );
  })();

  /* ----------------------------------------------------- NEWSLETTER (demo only) */
  (function signup() {
    const form = $("#signupForm");
    const msg = $("#signupMsg");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input");
      if (msg) msg.textContent = "Thanks — you're on the list ✳";
      if (input) input.value = "";
      // TODO: wire to your email provider / Shopify customer API here.
    });
  })();

  /* ----------------------------------------------------- TILT (collection cards) */
  (function tilt() {
    if (!finePointer || reduceMotion) return;
    $$("[data-tilt]").forEach((el) => {
      const media = $(".coll__media", el);
      if (!media) return;
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
        media.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
      });
      el.addEventListener("mouseleave", () => (media.style.transform = ""));
    });
  })();
})();

/* ============================================================================
   SUBPAGE INTERACTIONS — product detail + collection listing
   Appended as one IIFE; each block no-ops if its elements aren't present,
   so this safely runs on every page.
   ========================================================================== */
(function () {
  "use strict";
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------------------------------------- PDP: gallery thumbnails */
  (function gallery() {
    const main = $("#pdpMain");
    const thumbs = $$("#pdpThumbs .pdp__thumb");
    if (!main || !thumbs.length) return;
    thumbs.forEach((t) =>
      t.addEventListener("click", () => {
        thumbs.forEach((x) => x.classList.remove("is-active"));
        t.classList.add("is-active");
        main.style.background = t.dataset.bg;
      })
    );
  })();

  /* ---------------------------------------- PDP: swatches + pills */
  function singleSelect(groupSelector, onPick) {
    $$(groupSelector).forEach((group) => {
      const btns = $$("button", group);
      btns.forEach((b) =>
        b.addEventListener("click", () => {
          btns.forEach((x) => x.classList.remove("is-active"));
          b.classList.add("is-active");
          onPick && onPick(group, b.dataset.value);
        })
      );
    });
  }
  singleSelect("[data-swatch-group='finish']", (_, v) => {
    const out = $("#finishVal"); if (out) out.textContent = v;
  });
  singleSelect("[data-pill-group='size']", (_, v) => {
    const out = $("#sizeVal"); if (out) out.textContent = v;
  });

  /* ---------------------------------------- PDP: quantity + live total */
  (function quantity() {
    const val = $("#qtyVal");
    const total = $("#pdpTotal");
    if (!val) return;
    const unit = 245; // base price; wire to your product data
    let q = 1;
    const fmt = (n) => "$" + n.toLocaleString("en-US");
    $$(".qty__btn").forEach((b) =>
      b.addEventListener("click", () => {
        q = Math.max(1, q + parseInt(b.dataset.step, 10));
        val.textContent = q;
        if (total) total.textContent = fmt(unit * q);
      })
    );
  })();

  /* ---------------------------------------- PDP: accordions */
  (function accordion() {
    const heads = $$(".acc__head");
    if (!heads.length) return;
    heads.forEach((head) => {
      const body = head.nextElementSibling;
      head.addEventListener("click", () => {
        const open = head.getAttribute("aria-expanded") === "true";
        head.setAttribute("aria-expanded", String(!open));
        body.style.maxHeight = open ? "0px" : body.scrollHeight + "px";
      });
    });
  })();

  /* ---------------------------------------- COLLECTION: filter + sort + view + wishlist */
  (function collection() {
    const grid = $("#grid");
    if (!grid) return;

    const cards    = $$(".product", grid);
    const chips    = $$("#filters .chip");
    const sortSel  = $("#sort");
    const empty    = $("#empty");
    const loadmore = $("#loadmore");
    const countEl  = $("#filterCount");
    const indicator = $("#chipIndicator");

    const PAGE = 6;
    let activeFilter = "all";
    let shown = PAGE;

    /* ---- sliding chip indicator ---- */
    function moveIndicator(chip) {
      if (!indicator || !chip) return;
      const track = chip.closest(".chip-track");
      if (!track) return;
      const tr = track.getBoundingClientRect();
      const cr = chip.getBoundingClientRect();
      indicator.style.width  = cr.width  + "px";
      indicator.style.height = cr.height + "px";
      indicator.style.left   = (cr.left - tr.left) + "px";
      indicator.style.top    = (cr.top  - tr.top)  + "px";
    }
    const initActive = chips.find((c) => c.classList.contains("is-active"));
    // defer one frame so layout is ready
    requestAnimationFrame(() => moveIndicator(initActive));
    window.addEventListener("resize", () => {
      moveIndicator(chips.find((c) => c.classList.contains("is-active")));
    }, { passive: true });

    /* ---- filter count label ---- */
    function updateCount() {
      if (!countEl) return;
      const n = cards.filter((c) => activeFilter === "all" || c.dataset.cat === activeFilter).length;
      countEl.textContent = n + " style" + (n !== 1 ? "s" : "");
    }

    /* ---- core apply (filter + sort + paginate) ---- */
    function apply() {
      const matched = cards.filter(
        (c) => activeFilter === "all" || c.dataset.cat === activeFilter
      );
      const v = sortSel ? sortSel.value : "featured";
      const sorted = [...matched].sort((a, b) => {
        if (v === "price-asc")  return (+a.dataset.price) - (+b.dataset.price);
        if (v === "price-desc") return (+b.dataset.price) - (+a.dataset.price);
        if (v === "name")       return a.dataset.name.localeCompare(b.dataset.name);
        return 0;
      });
      sorted.forEach((c) => grid.appendChild(c));
      cards.forEach((c) => c.classList.add("is-hidden"));
      sorted.slice(0, shown).forEach((c) => c.classList.remove("is-hidden"));
      if (empty)    empty.hidden = matched.length !== 0;
      if (loadmore) loadmore.style.display = shown >= matched.length ? "none" : "";
    }

    /* ---- animated apply: fade grid out → update → fade in ---- */
    function animatedApply() {
      grid.classList.add("is-filtering");
      setTimeout(() => {
        apply();
        updateCount();
        grid.classList.remove("is-filtering");
      }, 230);
    }

    /* ---- chip clicks ---- */
    chips.forEach((chip) =>
      chip.addEventListener("click", () => {
        chips.forEach((x) => { x.classList.remove("is-active"); x.setAttribute("aria-selected", "false"); });
        chip.classList.add("is-active");
        chip.setAttribute("aria-selected", "true");
        activeFilter = chip.dataset.filter;
        shown = PAGE;
        moveIndicator(chip);
        animatedApply();
      })
    );

    if (sortSel) sortSel.addEventListener("change", () => { shown = PAGE; animatedApply(); });
    if (loadmore) loadmore.addEventListener("click", () => { shown += PAGE; apply(); updateCount(); });

    /* ---- view toggle (2-col / 3-col) ---- */
    $$(".view-btn", document).forEach((btn) =>
      btn.addEventListener("click", () => {
        $$(".view-btn", document).forEach((b) => { b.classList.remove("is-active"); b.setAttribute("aria-pressed", "false"); });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        grid.setAttribute("data-cols", btn.dataset.cols);
      })
    );

    /* ---- wishlist buttons ---- */
    $$("[data-wish]", grid).forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        btn.classList.toggle("is-wished");
        btn.setAttribute("aria-label", btn.classList.contains("is-wished") ? "Remove from wishlist" : "Save to wishlist");
      })
    );

    apply();
    updateCount();
  })();

  /* ---------------------------------------- HOME: hero slider */
  (function homeSlider() {
    const section = $("#homeSlider");
    if (!section) return;

    const slides    = $$(".hs-slide",     section);
    const bars      = $$(".hs-bar",       section);
    const fills     = $$(".hs-bar__fill", section);
    const counterEl = $(".hs-counter__cur", section);
    const prevBtn   = $(".hs-arrow--prev", section);
    const nextBtn   = $(".hs-arrow--next", section);

    const TOTAL    = slides.length;
    const INTERVAL = 5000;
    let current = 0;
    let timer;

    function pad(n) { return String(n + 1).padStart(2, "0"); }

    function goTo(idx) {
      slides[current].classList.remove("is-active");
      bars[current].classList.remove("is-active");

      current = ((idx % TOTAL) + TOTAL) % TOTAL;

      slides[current].classList.add("is-active");
      bars[current].classList.add("is-active");

      const fill = fills[current];
      fill.style.animation = "none";
      void fill.offsetWidth;
      fill.style.animation = "";

      if (counterEl) counterEl.textContent = pad(current);
    }

    function startAuto() { timer = setInterval(() => goTo(current + 1), INTERVAL); }
    function stopAuto()  { clearInterval(timer); }

    if (prevBtn) prevBtn.addEventListener("click", () => { stopAuto(); goTo(current - 1); startAuto(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { stopAuto(); goTo(current + 1); startAuto(); });

    bars.forEach((bar, i) =>
      bar.addEventListener("click", () => { stopAuto(); goTo(i); startAuto(); })
    );

    section.addEventListener("mouseenter", stopAuto);
    section.addEventListener("mouseleave", startAuto);

    let tx = 0;
    section.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; }, { passive: true });
    section.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 48) { stopAuto(); goTo(dx > 0 ? current - 1 : current + 1); startAuto(); }
    });

    section.setAttribute("tabindex", "0");
    section.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft")  { stopAuto(); goTo(current - 1); startAuto(); }
      if (e.key === "ArrowRight") { stopAuto(); goTo(current + 1); startAuto(); }
    });

    goTo(0);
    startAuto();
  })();

  /* ---------------------------------------- COLLECTION: editorial slider */
  (function colSlider() {
    const section = $("#colSlider");
    if (!section) return;

    const slides    = $$(".col-slide",   section);
    const bars      = $$(".col-sbar",    section);
    const fills     = $$(".col-sbar__fill", section);
    const counterEl = $("#colSliderCur");
    const prevBtn   = $("#colSliderPrev");
    const nextBtn   = $("#colSliderNext");

    const TOTAL    = slides.length;
    const INTERVAL = 3000;
    let current = 0;
    let timer;

    function pad(n) { return String(n + 1).padStart(2, "0"); }

    function goTo(idx) {
      /* remove active from old */
      slides[current].classList.remove("is-active");
      bars[current].classList.remove("is-active");

      /* advance index */
      current = ((idx % TOTAL) + TOTAL) % TOTAL;

      /* add active to new */
      slides[current].classList.add("is-active");
      bars[current].classList.add("is-active");

      /* restart fill animation via reflow */
      const fill = fills[current];
      fill.style.animation = "none";
      void fill.offsetWidth;
      fill.style.animation = "";

      /* update counter */
      if (counterEl) counterEl.textContent = pad(current);
    }

    function startAuto() { timer = setInterval(() => goTo(current + 1), INTERVAL); }
    function stopAuto()  { clearInterval(timer); }

    /* arrow buttons */
    if (prevBtn) prevBtn.addEventListener("click", () => { stopAuto(); goTo(current - 1); startAuto(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { stopAuto(); goTo(current + 1); startAuto(); });

    /* progress bar click = jump to slide */
    bars.forEach((bar, i) =>
      bar.addEventListener("click", () => { stopAuto(); goTo(i); startAuto(); })
    );

    /* pause on hover / focus */
    section.addEventListener("mouseenter", stopAuto);
    section.addEventListener("mouseleave", startAuto);

    /* touch / swipe */
    let tx = 0;
    section.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; }, { passive: true });
    section.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 48) { stopAuto(); goTo(dx > 0 ? current - 1 : current + 1); startAuto(); }
    });

    /* keyboard */
    section.setAttribute("tabindex", "0");
    section.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft")  { stopAuto(); goTo(current - 1); startAuto(); }
      if (e.key === "ArrowRight") { stopAuto(); goTo(current + 1); startAuto(); }
    });

    /* boot */
    goTo(0);
    startAuto();
  })();

})();

/* ============================================================================
   CART DRAWER — in-memory cart shared across pages.
   The drawer markup is injected here so it exists on every page without
   duplicating HTML. Cart state lives in a JS array (resets on reload); to
   persist it in your own build, save/restore `cart` via localStorage.
   ========================================================================== */
(function () {
  "use strict";
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  const money = (n) => "$" + Number(n).toLocaleString("en-US");
  const parsePrice = (txt) => parseFloat(String(txt).replace(/[^0-9.]/g, "")) || 0;
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  let cart = []; // { id, name, cat, price, qty, bg }
  try { cart = JSON.parse(localStorage.getItem("bleumon_cart") || "[]"); } catch {}

  /* ---- inject drawer markup ---- */
  const drawer = document.createElement("div");
  drawer.className = "drawer";
  drawer.id = "drawer";
  drawer.setAttribute("aria-hidden", "true");
  drawer.innerHTML = `
    <div class="drawer__overlay" data-cart-close></div>
    <aside class="drawer__panel" role="dialog" aria-label="Shopping cart">
      <header class="drawer__head">
        <span class="drawer__title">Your cart <span id="cartCount">0</span></span>
        <button class="drawer__close" data-cart-close aria-label="Close cart">✕</button>
      </header>
      <div class="drawer__items" id="cartItems"></div>
      <div class="drawer__empty" id="cartEmpty">
        Your cart is empty.
        <a href="/collection">Start shopping →</a>
      </div>
      <footer class="drawer__foot" id="cartFoot" hidden>
        <div class="drawer__row"><span>Subtotal</span><span id="cartSubtotal">$0</span></div>
        <p class="drawer__note">Shipping &amp; taxes calculated at checkout.</p>
        <button class="btn btn--solid drawer__checkout" data-magnetic><span>Checkout</span></button>
      </footer>
    </aside>`;
  document.body.appendChild(drawer);

  const itemsEl = $("#cartItems");
  const emptyEl = $("#cartEmpty");
  const footEl  = $("#cartFoot");

  /* ---- open / close ---- */
  function open()  { drawer.classList.add("is-open"); drawer.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; }
  function close() { drawer.classList.remove("is-open"); drawer.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }

  drawer.addEventListener("click", (e) => { if (e.target.matches("[data-cart-close]")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  // Any link/button pointing at the cart opens the drawer
  $$('.nav__cart, [data-menu-link][href="#cart"], [href="#cart"]').forEach((el) =>
    el.addEventListener("click", (e) => { e.preventDefault(); open(); })
  );

  /* ---- render ---- */
  function render() {
    const count = cart.reduce((n, i) => n + i.qty, 0);
    const subtotal = cart.reduce((n, i) => n + i.qty * i.price, 0);

    $("#cartCount").textContent = count;
    $$(".nav__count").forEach((b) => { b.textContent = count; b.classList.remove("is-bump"); void b.offsetWidth; b.classList.add("is-bump"); });

    const hasItems = cart.length > 0;
    emptyEl.hidden = hasItems;
    footEl.hidden = !hasItems;

    itemsEl.innerHTML = cart.map((i) => `
      <div class="citem" data-id="${i.id}">
        <div class="citem__media" style="background-image:${i.bg}"></div>
        <div class="citem__body">
          <div class="citem__top">
            <h4>${i.name}</h4>
            <button class="citem__remove" data-remove="${i.id}">Remove</button>
          </div>
          <span class="citem__tag">${i.cat}</span>
          <div class="citem__bottom">
            <div class="qty qty--sm">
              <button class="qty__btn" data-dec="${i.id}" aria-label="Decrease">−</button>
              <span class="qty__val">${i.qty}</span>
              <button class="qty__btn" data-inc="${i.id}" aria-label="Increase">+</button>
            </div>
            <span class="citem__price">${money(i.qty * i.price)}</span>
          </div>
        </div>
      </div>`).join("");

    if (hasItems) $("#cartSubtotal").textContent = money(subtotal);
    localStorage.setItem("bleumon_cart", JSON.stringify(cart));
  }

  /* ---- mutations (event delegation) ---- */
  itemsEl.addEventListener("click", (e) => {
    const inc = e.target.closest("[data-inc]");
    const dec = e.target.closest("[data-dec]");
    const rem = e.target.closest("[data-remove]");
    if (inc) { const it = cart.find((x) => x.id === inc.dataset.inc); if (it) it.qty++; }
    if (dec) { const it = cart.find((x) => x.id === dec.dataset.dec); if (it && --it.qty < 1) cart = cart.filter((x) => x !== it); }
    if (rem) { cart = cart.filter((x) => x.id !== rem.dataset.remove); }
    if (inc || dec || rem) render();
  });

  function addItem({ id, name, cat, price, bg, qty = 1 }) {
    const existing = cart.find((x) => x.id === id);
    if (existing) existing.qty += qty;
    else cart.push({ id, name, cat, price, bg, qty });
    render();
    open();
  }

  /* ---- wire "Quick add +" on product cards ---- */
  $$(".product__add").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();   // don't follow the card's link
      e.stopPropagation();
      const card = btn.closest(".product");
      if (!card) return;
      const name = $(".product__info h3", card)?.textContent.trim() || "Item";
      const price = parsePrice($(".product__price", card)?.textContent);
      const cat = $(".product__tag", card)?.textContent.trim() || "";
      const media = $(".product__media", card);
      const bg = media ? getComputedStyle(media).backgroundImage : "var(--card-1)";
      addItem({ id: slug(name), name, cat, price, bg });
    });
  });

  /* ---- wire the product detail "Add to cart" ---- */
  const pdpAdd = $(".pdp__add");
  if (pdpAdd) {
    pdpAdd.addEventListener("click", () => {
      const name = $(".pdp__title")?.textContent.trim() || "Item";
      const cat = ($(".pdp__tag")?.textContent.split("·")[0] || "").trim();
      const price = parsePrice($(".pdp__price")?.textContent);
      const qty = parseInt($("#qtyVal")?.textContent || "1", 10);
      const bg = $("#pdpMain") ? getComputedStyle($("#pdpMain")).backgroundImage : "var(--accent)";
      addItem({ id: slug(name), name, cat, price, bg, qty });
    });
  }

  /* ---- checkout button → navigate ---- */
  drawer.addEventListener("click", (e) => {
    if (e.target.closest(".drawer__checkout")) {
      window.location.href = "/checkout";
    }
  });

  /* ----------------------------------------------------- SEASONS */
  (function seasons() {
    const track   = $("#seasonsTrack");
    const prevBtn = $("#seasonsPrev");
    const nextBtn = $("#seasonsNext");
    const tabs    = $$(".seasons__tab");
    if (!track) return;

    const PX      = "https://images.pexels.com/photos/";
    const Q       = "?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop";
    const VISIBLE = 4;
    const GAP     = 3;

    const data = {
      spring: [
        PX + "1021693/pexels-photo-1021693.jpeg" + Q,
        PX + "2220316/pexels-photo-2220316.jpeg" + Q,
        PX + "1462637/pexels-photo-1462637.jpeg" + Q,
        PX + "2681751/pexels-photo-2681751.jpeg" + Q,
        PX + "1536619/pexels-photo-1536619.jpeg" + Q,
        PX + "3621741/pexels-photo-3621741.jpeg" + Q,
      ],
      summer: [
        PX + "1040945/pexels-photo-1040945.jpeg" + Q,
        PX + "1375849/pexels-photo-1375849.jpeg" + Q,
        PX + "2213200/pexels-photo-2213200.jpeg" + Q,
        PX + "949670/pexels-photo-949670.jpeg"   + Q,
        PX + "1972115/pexels-photo-1972115.jpeg" + Q,
        PX + "3622608/pexels-photo-3622608.jpeg" + Q,
      ],
      autumn: [
        PX + "2220328/pexels-photo-2220328.jpeg" + Q,
        PX + "1381553/pexels-photo-1381553.jpeg" + Q,
        PX + "5935748/pexels-photo-5935748.jpeg" + Q,
        PX + "2613260/pexels-photo-2613260.jpeg" + Q,
        PX + "8386668/pexels-photo-8386668.jpeg" + Q,
        PX + "3622214/pexels-photo-3622214.jpeg" + Q,
      ],
    };

    const cards  = $$(".seasons__card", track);
    const section = track.closest('.seasons');
    const KEYS   = Object.keys(data);
    let offset   = 0;
    let season   = 'spring';
    let autoTimer;
    const INTERVAL = 2800;

    const cardW  = () => (cards[0] ? cards[0].offsetWidth + GAP : 1);
    const maxOff = () => Math.max(0, data[season].length - VISIBLE);

    function updateArrows() {
      if (prevBtn) prevBtn.disabled = offset <= 0;
      if (nextBtn) nextBtn.disabled = offset >= maxOff();
    }

    function slideTo(idx) {
      offset = Math.max(0, Math.min(maxOff(), idx));
      track.style.transform = `translateX(${-offset * cardW()}px)`;
      updateArrows();
    }

    function setImages(s) {
      $$(".seasons__img", track).forEach((img, i) => {
        img.style.backgroundImage = data[s][i] ? `url('${data[s][i]}')` : '';
      });
    }

    function activate(s, fromAuto) {
      season = s;
      // Restart tab progress bar by toggling class
      tabs.forEach(t => {
        const isActive = t.dataset.season === s;
        t.classList.remove("is-active");
        if (isActive) { void t.offsetWidth; t.classList.add("is-active"); }
      });
      track.style.transition = 'opacity .22s';
      track.style.opacity = '0';
      setTimeout(() => {
        offset = 0;
        track.style.transition = 'none';
        void track.offsetWidth;
        track.style.transform = 'translateX(0)';
        setImages(s);
        updateArrows();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            track.style.transition = 'transform .55s cubic-bezier(.25,0,.25,1), opacity .22s';
            track.style.opacity = '1';
          });
        });
      }, 220);
    }

    function autoStep() {
      if (offset < maxOff()) {
        slideTo(offset + 1);
      } else {
        const next = KEYS[(KEYS.indexOf(season) + 1) % KEYS.length];
        activate(next, true);
      }
    }

    function startAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(autoStep, INTERVAL);
    }

    function stopAuto() { clearInterval(autoTimer); }

    tabs.forEach(tab => tab.addEventListener("click", () => {
      activate(tab.dataset.season);
      stopAuto(); startAuto();
    }));
    if (prevBtn) prevBtn.addEventListener("click", () => { slideTo(offset - 1); stopAuto(); startAuto(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { slideTo(offset + 1); stopAuto(); startAuto(); });

    if (section) {
      section.addEventListener("mouseenter", stopAuto);
      section.addEventListener("mouseleave", startAuto);
    }

    window.addEventListener("resize", () => {
      track.style.transform = `translateX(${-offset * cardW()}px)`;
    }, { passive: true });

    // Init
    setImages('spring');
    track.style.transition = 'transform .55s cubic-bezier(.25,0,.25,1), opacity .22s';
    updateArrows();
    startAuto();
  })();

  /* ----------------------------------------------------- CHECKOUT PAGE */
  (function checkoutPage() {
    const form = $("#checkoutForm");
    if (!form) return;

    const fmt = (n) => "€" + Number(n).toLocaleString("fr-FR");
    let pageCart = [];
    try { pageCart = JSON.parse(localStorage.getItem("bleumon_cart") || "[]"); } catch {}

    const itemsEl    = $("#checkoutItems");
    const emptyEl    = $("#checkoutEmpty");
    const totalsEl   = $("#checkoutTotals");
    const subtotalEl = $("#checkoutSubtotal");
    const totalEl    = $("#checkoutTotal");
    const shippingRow = $("#shippingRow");
    const successEl  = $("#checkoutSuccess");
    const orderNumEl = $("#checkoutOrderNum");
    let shippingCost = 0;
    let discount = 0;

    function calcTotal() {
      const sub = pageCart.reduce((s, i) => s + i.qty * i.price, 0);
      const total = Math.max(0, sub - discount) + shippingCost;
      if (subtotalEl) subtotalEl.textContent = fmt(sub);
      if (totalEl)    totalEl.textContent    = fmt(total);
    }

    function renderSummary() {
      const has = pageCart.length > 0;
      if (emptyEl)  emptyEl.hidden  = has;
      if (totalsEl) totalsEl.hidden = !has;
      if (!has) return;
      if (itemsEl) {
        itemsEl.innerHTML = pageCart.map((i) => `
          <div class="chk-item">
            <div class="chk-item__img" style="background:${i.bg}">
              ${i.qty > 1 ? `<span class="chk-item__qty">${i.qty}</span>` : ""}
            </div>
            <div class="chk-item__info">
              <div class="chk-item__name">${i.name}</div>
              <div class="chk-item__meta">${i.cat}</div>
            </div>
            <div class="chk-item__price">${fmt(i.qty * i.price)}</div>
          </div>`).join("");
      }
      calcTotal();
    }

    renderSummary();

    /* Shipping method — update price row */
    document.querySelectorAll('[name="ship"]').forEach((radio) => {
      radio.addEventListener("change", () => {
        shippingCost = Number(radio.value);
        if (shippingRow) {
          shippingRow.querySelector("span:last-child").textContent =
            shippingCost === 0 ? "Free" : fmt(shippingCost);
          shippingRow.querySelector("span:last-child").className =
            shippingCost === 0 ? "checkout__free" : "";
        }
        calcTotal();
      });
    });

    /* Promo toggle */
    const promoToggle = $("#promoToggle");
    const promoBody   = $("#promoBody");
    if (promoToggle && promoBody) {
      promoToggle.addEventListener("click", () => {
        const open = !promoBody.hidden;
        promoBody.hidden = open;
        promoToggle.classList.toggle("is-open", !open);
      });
    }

    /* Promo apply */
    const promoApply = $("#promoApply");
    const promoInput = $("#promoInput");
    const promoMsg   = $("#promoMsg");
    const CODES = { "BLEUMON10": 10, "PARIS20": 20 };
    if (promoApply && promoInput && promoMsg) {
      promoApply.addEventListener("click", () => {
        const code = promoInput.value.trim().toUpperCase();
        promoMsg.hidden = false;
        if (CODES[code]) {
          discount = CODES[code];
          promoMsg.textContent = `Code applied — €${discount} off!`;
          promoMsg.className = "chk-promo__msg chk-promo__msg--ok";
          calcTotal();
        } else {
          promoMsg.textContent = "Invalid code. Try BLEUMON10 or PARIS20.";
          promoMsg.className = "chk-promo__msg chk-promo__msg--err";
        }
      });
    }

    /* Card number spacing */
    const cardInput = form.querySelector('[name="card"]');
    if (cardInput) {
      cardInput.addEventListener("input", (e) => {
        let v = e.target.value.replace(/\D/g, "").slice(0, 16);
        e.target.value = v.replace(/(.{4})/g, "$1 ").trim();
      });
    }

    /* Expiry formatting */
    const expiryInput = form.querySelector('[name="expiry"]');
    if (expiryInput) {
      expiryInput.addEventListener("input", (e) => {
        let v = e.target.value.replace(/\D/g, "").slice(0, 4);
        if (v.length >= 3) v = v.slice(0,2) + " / " + v.slice(2);
        e.target.value = v;
      });
    }

    /* Submit */
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const num = "BLM-" + Math.random().toString(36).slice(2,7).toUpperCase();
      if (orderNumEl) orderNumEl.textContent = "Order #" + num;
      form.hidden = true;
      if (successEl) successEl.hidden = false;
      localStorage.removeItem("bleumon_cart");
      /* update cart count in nav */
      const countEl = document.querySelector(".nav__count");
      if (countEl) countEl.hidden = true;
    });
  })();

  render();
})();
