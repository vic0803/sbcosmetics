/* ============================================================
   Sophia Belinska Cosmetics — Prototype JS
   i18n (UA/EN), mobile menu, day/night hero, accordion
   ============================================================ */

/* Mark that JS is active, so reveal animations only hide content when
   we can actually un-hide it. Runs immediately to avoid a flash. */
document.documentElement.classList.add("js");

/* ---------- Translations ---------- */
const I18N = {
  ua: {
    "nav.catalog": "Каталог",
    "nav.bundles": "Набори",
    "nav.about": "Бренд",
    "nav.delivery": "Доставка",
    "nav.contacts": "Контакти",

    "hero.eyebrow": "Преміальна косметика ручної роботи",
    "hero.title": "Sophie Bilynska",
    "hero.text": "Косметика ручної роботи з натуральних інгредієнтів. Мило, бальзами та догляд у преміальній еко-упаковці.",
    "hero.cta": "Переглянути каталог",
    "hero.hint": "Прокрутіть вниз",

    "home.catsTitle": "Категорії",
    "home.catsSub": "Обрані засоби для обличчя, тіла та волосся.",
    "cat.face": "Обличчя",
    "cat.body": "Тіло",
    "cat.hair": "Волосся",
    "cat.soap": "Мило",
    "cat.lips": "Губи",
    "cat.sets": "Набори",

    "home.bestTitle": "Бестселери",
    "home.bestSub": "Те, що найчастіше обирають наші клієнти.",

    "story.tag": "Ручна робота · Малі партії",
    "story.eyebrow": "Історія бренду",
    "story.title": "Народжено з любові до деталей",
    "story.p1": "Усе почалося на домашній кухні — з перших брусків мила, зварених вручну для рідних. Сьогодні це преміальна косметика малими партіями, у якій збережено ту саму турботу.",
    "story.p2": "Кожен рецепт — це баланс натуральних інгредієнтів, прозорого складу та естетики, яку хочеться тримати в руках.",
    "story.sign": "— Sophie Bilynska",
    "story.stat1": "років ручної роботи",
    "story.stat2": "натуральний склад",
    "story.stat3": "авторських рецептів",

    "home.aboutTitle": "Філософія бренду",
    "home.aboutText": "Ми створюємо косметику малими партіями з натуральних інгредієнтів. Прозорий склад, сертифікація та увага до кожної деталі.",
    "home.aboutCta": "Про бренд",

    "catalog.title": "Каталог",
    "catalog.sub": "20–40 ретельно підібраних засобів.",
    "filter.all": "Усі",
    "filter.face": "Обличчя",
    "filter.body": "Тіло",
    "filter.hair": "Волосся",
    "sort.popular": "За популярністю",
    "sort.priceAsc": "Ціна: за зростанням",
    "sort.priceDesc": "Ціна: за спаданням",
    "catalog.count": "товарів",

    "pdp.add": "Додати в кошик",
    "pdp.preorder": "Передзамовлення",
    "pdp.size": "Об'єм",
    "pdp.scent": "Аромат",
    "pdp.benefits": "Переваги",
    "pdp.inci": "Склад (INCI)",
    "pdp.usage": "Застосування",
    "pdp.shelf": "Термін придатності",
    "pdp.related": "Схожі товари",
    "pdp.reviews": "відгуків",

    "badge.new": "Новинка",
    "badge.best": "Хіт",
    "common.addedToCart": "Додано в кошик",
    "common.freeShip": "Безкоштовна доставка від 2000 ₴",

    "foot.shop": "Магазин",
    "foot.help": "Допомога",
    "foot.company": "Компанія",
    "foot.faq": "Часті питання",
    "foot.terms": "Умови",
    "foot.privacy": "Конфіденційність",
    "foot.rights": "Усі права захищено."
  },
  en: {
    "nav.catalog": "Catalog",
    "nav.bundles": "Bundles",
    "nav.about": "Brand",
    "nav.delivery": "Delivery",
    "nav.contacts": "Contacts",

    "hero.eyebrow": "Premium handcrafted cosmetics",
    "hero.title": "Sophie Bilynska",
    "hero.text": "Handcrafted cosmetics from natural ingredients. Soaps, balms and care in premium eco packaging.",
    "hero.cta": "Explore the catalog",
    "hero.hint": "Scroll down",

    "home.catsTitle": "Categories",
    "home.catsSub": "Curated products for face, body and hair.",
    "cat.face": "Face",
    "cat.body": "Body",
    "cat.hair": "Hair",
    "cat.soap": "Soap",
    "cat.lips": "Lips",
    "cat.sets": "Sets",

    "home.bestTitle": "Bestsellers",
    "home.bestSub": "What our customers choose most.",

    "story.tag": "Hand made · Small batch",
    "story.eyebrow": "Brand story",
    "story.title": "Born from a love of detail",
    "story.p1": "It all started in a home kitchen — with the first bars of soap made by hand for family. Today it is premium small-batch cosmetics that keep that same care.",
    "story.p2": "Every recipe is a balance of natural ingredients, a transparent formula and an aesthetic you want to hold in your hands.",
    "story.sign": "— Sophie Bilynska",
    "story.stat1": "years handcrafting",
    "story.stat2": "natural formula",
    "story.stat3": "original recipes",

    "home.aboutTitle": "Brand philosophy",
    "home.aboutText": "We craft cosmetics in small batches from natural ingredients. Transparent formulas, certification and attention to every detail.",
    "home.aboutCta": "About the brand",

    "catalog.title": "Catalog",
    "catalog.sub": "20–40 carefully selected products.",
    "filter.all": "All",
    "filter.face": "Face",
    "filter.body": "Body",
    "filter.hair": "Hair",
    "sort.popular": "By popularity",
    "sort.priceAsc": "Price: low to high",
    "sort.priceDesc": "Price: high to low",
    "catalog.count": "products",

    "pdp.add": "Add to cart",
    "pdp.preorder": "Preorder",
    "pdp.size": "Size",
    "pdp.scent": "Fragrance",
    "pdp.benefits": "Benefits",
    "pdp.inci": "Ingredients (INCI)",
    "pdp.usage": "How to use",
    "pdp.shelf": "Shelf life",
    "pdp.related": "Related products",
    "pdp.reviews": "reviews",

    "badge.new": "New",
    "badge.best": "Bestseller",
    "common.addedToCart": "Added to cart",
    "common.freeShip": "Free shipping from ₴2,000",

    "foot.shop": "Shop",
    "foot.help": "Help",
    "foot.company": "Company",
    "foot.faq": "FAQ",
    "foot.terms": "Terms",
    "foot.privacy": "Privacy",
    "foot.rights": "All rights reserved."
  }
};

/* ---------- Language ---------- */
function getLang() {
  return localStorage.getItem("sbc_lang") || "ua";
}

function setLang(lang) {
  localStorage.setItem("sbc_lang", lang);
  applyLang(lang);
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.ua;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll(".lang button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
}

/* ---------- Cart (mock) ---------- */
function getCart() {
  return parseInt(localStorage.getItem("sbc_cart") || "0", 10);
}

function updateCartBadge() {
  const el = document.querySelector(".cart-count");
  if (el) el.textContent = getCart();
}

function addToCart() {
  localStorage.setItem("sbc_cart", getCart() + 1);
  updateCartBadge();
  toast(I18N[getLang()]["common.addedToCart"]);
}

/* ---------- Toast ---------- */
function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
    Object.assign(t.style, {
      position: "fixed",
      bottom: "88px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#c9a227",
      color: "#0a0a0a",
      padding: "12px 22px",
      borderRadius: "4px",
      fontSize: "0.85rem",
      letterSpacing: "0.05em",
      zIndex: "200",
      opacity: "0",
      transition: "opacity 0.3s",
      pointerEvents: "none"
    });
  }
  t.textContent = msg;
  requestAnimationFrame(() => (t.style.opacity = "1"));
  clearTimeout(t._timer);
  t._timer = setTimeout(() => (t.style.opacity = "0"), 1800);
}

/* ---------- Mobile menu ---------- */
function initMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mobile-menu");
  if (!burger || !menu) return;
  burger.addEventListener("click", () => menu.classList.toggle("open"));
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => menu.classList.remove("open"))
  );
}

/* ---------- Hero day/night on scroll ---------- */
function initHero() {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const onScroll = () => {
    const trigger = window.innerHeight * 0.35;
    hero.classList.toggle("day", window.scrollY > trigger);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Accordion ---------- */
function initAccordion() {
  document.querySelectorAll(".acc-head").forEach((head) => {
    head.addEventListener("click", () => {
      head.closest(".acc-item").classList.toggle("open");
    });
  });
}

/* ---------- Quantity ---------- */
function initQty() {
  document.querySelectorAll(".qty").forEach((q) => {
    const input = q.querySelector("input");
    q.querySelector(".qminus").addEventListener("click", () => {
      input.value = Math.max(1, parseInt(input.value, 10) - 1);
    });
    q.querySelector(".qplus").addEventListener("click", () => {
      input.value = parseInt(input.value, 10) + 1;
    });
  });
}

/* ---------- Variant / thumb toggles ---------- */
function initToggles() {
  document.querySelectorAll(".variant-opts").forEach((group) => {
    group.querySelectorAll(".variant").forEach((v) =>
      v.addEventListener("click", () => {
        group.querySelectorAll(".variant").forEach((x) => x.classList.remove("active"));
        v.classList.add("active");
      })
    );
  });

  const main = document.querySelector(".pdp-main");
  document.querySelectorAll(".pdp-thumb").forEach((thumb) =>
    thumb.addEventListener("click", () => {
      document.querySelectorAll(".pdp-thumb").forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
      const img = thumb.getAttribute("data-img");
      if (main && img) main.style.backgroundImage = `url('${img}')`;
    })
  );

  document.querySelectorAll(".chip").forEach((chip) =>
    chip.addEventListener("click", () => {
      const row = chip.closest(".filters");
      if (row) row.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
    })
  );
}

/* ---------- Add-to-cart buttons ---------- */
function initCartButtons() {
  document.querySelectorAll("[data-add]").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      addToCart();
    })
  );
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const reveal = (el) => el.classList.add("in");

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(reveal);
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((el) => io.observe(el));

  // Safety net: anything still hidden after 2.5s (e.g. observer never fired,
  // element already in view on load, or layout quirks) is revealed anyway,
  // so content is never permanently invisible.
  setTimeout(() => {
    items.forEach((el) => {
      if (!el.classList.contains("in")) reveal(el);
    });
  }, 2500);
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyLang(getLang());
  updateCartBadge();

  document.querySelectorAll(".lang button").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.lang))
  );

  initMenu();
  initHero();
  initAccordion();
  initQty();
  initToggles();
  initCartButtons();
  initReveal();
});
