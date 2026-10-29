/* ============================================================
   Sophia Belinska Cosmetics — Prototype JS
   i18n (UA/EN), mobile menu, accordion, scroll reveal
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
    "menu.cart": "Кошик",

    "hero.eyebrow": "Преміальна косметика ручної роботи",
    "hero.title": "Sophie Bilynska",
    "hero.text": "Косметика ручної роботи з натуральних інгредієнтів. Мило, бальзами та догляд у преміальній еко-упаковці.",
    "hero.cta": "Переглянути каталог",
    "hero.hint": "Прокрутіть вниз",

    "home.shopNow": "Переглянути",
    "home.ed1Kicker": "Догляд за обличчям",
    "home.ed1Title": "Гель-сироватка для сяйва шкіри",
    "home.ed1Text": "Для обличчя, шиї та декольте — зволоження та пружність малими партіями.",
    "home.ed2Kicker": "Контур очей",
    "home.ed2Title": "Крем для шкіри навколо очей",
    "home.ed2Text": "Делікатне зволоження для ніжної зони навколо очей та обличчя.",

    "home.catsKicker": "Колекція",
    "home.catsTitle": "Категорії",
    "home.catsSub": "Обрані засоби для обличчя, тіла та волосся.",
    "cat.face": "Обличчя",
    "cat.body": "Тіло",
    "cat.hair": "Волосся",
    "cat.soap": "Мило",
    "cat.lips": "Губи",
    "cat.sets": "Набори",

    "home.bestKicker": "Обране",
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

    "home.aboutKicker": "Наша філософія",
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
    "foot.rights": "Усі права захищено.",

    "brand.kicker": "Еко-косметика ручної роботи",
    "brand.heroTitle": "Турбота, що підходить усім",
    "brand.heroText": "Гіпоалергенний догляд із натуральних інгредієнтів — створений для чутливої шкіри, для дорослих і дітей, для всієї родини.",
    "brand.missionKicker": "Наша місія",
    "brand.missionTitle": "Чистий догляд без компромісів",
    "brand.mission1": "Sophia Belinska народилася з простої ідеї: догляд за шкірою має бути безпечним для кожного. Ми варимо косметику малими партіями вручну, обираючи лише те, що можемо прочитати й вимовити у складі.",
    "brand.mission2": "Без агресивних сульфатів, парабенів, штучних барвників та синтетичних віддушок. Тільки рослинні олії, екстракти та активи, що дбають про шкіру, а не навантажують її.",
    "brand.v1Title": "Натуральний склад",
    "brand.v1Text": "Рослинні олії, масла та екстракти. Прозорий склад, який не доведеться розшифровувати.",
    "brand.v2Title": "Гіпоалергенність",
    "brand.v2Text": "Формули без поширених подразників — для чутливої та реактивної шкіри, що потребує делікатності.",
    "brand.v3Title": "Еко-підхід",
    "brand.v3Text": "Бамбук і скло замість пластику. Малі партії без відходів і зайвого транспортування.",
    "brand.familyKicker": "Для всієї родини",
    "brand.familyTitle": "Один догляд — для кожного вдома",
    "brand.familyText1": "Шкіра дитини, підлітка й дорослого різна, але всім потрібна м'якість і безпека. Наші засоби розроблені так, щоб їх могли ділити між собою всі покоління родини.",
    "brand.familyText2": "Ми тестуємо формули на переносимість і свідомо прибираємо все, що може викликати реакцію.",
    "brand.kidsKicker": "Найменшим — найделікатніше",
    "brand.kidsTitle": "Ніжність, якій можна довіряти",
    "brand.kidsText1": "Для дитячої та надчутливої шкіри ми обираємо мінімалістичні формули: короткий склад, нейтральний pH і жодних зайвих добавок.",
    "brand.kidsText2": "Наша мета проста — допомогти кожному доглядати шкіру спокійно, без страху перед етикеткою.",
    "brand.blogKicker": "Журнал",
    "brand.blogTitle": "Блог про чистий догляд",
    "brand.blogSub": "Прості поради про натуральну косметику, чутливу шкіру та догляд для всієї родини.",
    "brand.postTag": "Про бренд",
    "brand.postTitle": "Як народилася Sophia Belinska",
    "brand.postP1": "Усе почалося з пошуку догляду, якому можна довіряти. Жодна баночка на полиці не давала впевненості у складі — тож перші засоби ми зварили власноруч, для своєї родини.",
    "brand.postP2": "Так проста кухонна практика переросла у бренд. Ми лишили в основі головний принцип: якщо засіб безпечний для найчутливішої шкіри в домі, він підійде кожному. Короткий склад, прозорі інгредієнти, жодних агресивних добавок.",
    "brand.postP3": "Сьогодні Sophia Belinska — це еко-косметика ручної роботи малими партіями, що дбає про всю родину: дорослих, підлітків і найменших. Наша місія проста — зробити чистий догляд доступним для всіх.",
    "brand.ctaTitle": "Догляд, що дбає про кожного",
    "brand.ctaText": "Відкрийте косметику, створену для чутливої шкіри та всієї родини.",

    "contacts.kicker": "Ми на зв'язку",
    "contacts.title": "Контакти",
    "contacts.sub": "Напишіть нам — відповідаємо щодня. Нижче — умови доставки та оплати.",
    "contacts.reachTitle": "Як з нами зв'язатися",
    "contacts.phone": "Телефон",
    "contacts.email": "Пошта",
    "contacts.insta": "Instagram",
    "contacts.hours": "Графік",
    "contacts.hoursVal": "Пн–Нд, 9:00–20:00",
    "contacts.formTitle": "Написати нам",
    "contacts.fName": "Ваше ім'я",
    "contacts.fEmail": "Email",
    "contacts.fMsg": "Повідомлення",
    "contacts.fSend": "Надіслати",
    "delivery.kicker": "Доставка та оплата",
    "delivery.title": "Доставка",
    "delivery.sub": "Надсилаємо по всій Україні. Безкоштовна доставка від 2000 ₴.",
    "delivery.d1Title": "Нова Пошта",
    "delivery.d1Text": "Відділення або поштомат по всій Україні. Відправка протягом 1–2 робочих днів.",
    "delivery.d2Title": "Кур'єр до дверей",
    "delivery.d2Text": "Адресна доставка кур'єром Нової Пошти у більшості міст.",
    "delivery.d3Title": "Оплата",
    "delivery.d3Text": "Онлайн-оплата карткою або накладений платіж при отриманні.",
    "delivery.note": "Безкоштовна доставка діє на замовлення від 2000 ₴. Обмін і повернення — протягом 14 днів."
  },
  en: {
    "nav.catalog": "Catalog",
    "nav.bundles": "Bundles",
    "nav.about": "Brand",
    "nav.delivery": "Delivery",
    "nav.contacts": "Contacts",
    "menu.cart": "Cart",

    "hero.eyebrow": "Premium handcrafted cosmetics",
    "hero.title": "Sophie Bilynska",
    "hero.text": "Handcrafted cosmetics from natural ingredients. Soaps, balms and care in premium eco packaging.",
    "hero.cta": "Explore the catalog",
    "hero.hint": "Scroll down",

    "home.shopNow": "Shop now",
    "home.ed1Kicker": "Face care",
    "home.ed1Title": "Gel serum for radiant skin",
    "home.ed1Text": "For face, neck and décolleté — hydration and firmness, in small batches.",
    "home.ed2Kicker": "Eye contour",
    "home.ed2Title": "Cream for the eye area",
    "home.ed2Text": "Gentle hydration for the delicate skin around the eyes and face.",

    "home.catsKicker": "The collection",
    "home.catsTitle": "Categories",
    "home.catsSub": "Curated products for face, body and hair.",
    "cat.face": "Face",
    "cat.body": "Body",
    "cat.hair": "Hair",
    "cat.soap": "Soap",
    "cat.lips": "Lips",
    "cat.sets": "Sets",

    "home.bestKicker": "Selected",
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

    "home.aboutKicker": "Our philosophy",
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
    "foot.rights": "All rights reserved.",

    "brand.kicker": "Handcrafted eco cosmetics",
    "brand.heroTitle": "Care that suits everyone",
    "brand.heroText": "Hypoallergenic care from natural ingredients — made for sensitive skin, for adults and children, for the whole family.",
    "brand.missionKicker": "Our mission",
    "brand.missionTitle": "Clean care without compromise",
    "brand.mission1": "Sophia Belinska was born from a simple idea: skincare should be safe for everyone. We craft cosmetics by hand in small batches, choosing only what we can read and pronounce on the label.",
    "brand.mission2": "No harsh sulfates, parabens, artificial dyes or synthetic fragrances. Only plant oils, extracts and actives that care for the skin instead of burdening it.",
    "brand.v1Title": "Natural formula",
    "brand.v1Text": "Plant oils, butters and extracts. A transparent formula you won't need to decode.",
    "brand.v2Title": "Hypoallergenic",
    "brand.v2Text": "Formulas free of common irritants — for sensitive and reactive skin that needs gentleness.",
    "brand.v3Title": "Eco approach",
    "brand.v3Text": "Bamboo and glass instead of plastic. Small batches with no waste or excess shipping.",
    "brand.familyKicker": "For the whole family",
    "brand.familyTitle": "One routine — for everyone at home",
    "brand.familyText1": "A child's, a teen's and an adult's skin differ, yet all need softness and safety. Our products are designed to be shared across generations of the family.",
    "brand.familyText2": "We test our formulas for tolerance and deliberately remove anything that could trigger a reaction.",
    "brand.kidsKicker": "The gentlest for the smallest",
    "brand.kidsTitle": "Gentleness you can trust",
    "brand.kidsText1": "For children's and highly sensitive skin we choose minimalist formulas: a short ingredient list, neutral pH and no unnecessary additives.",
    "brand.kidsText2": "Our goal is simple — to help everyone care for their skin calmly, without fear of the label.",
    "brand.blogKicker": "Journal",
    "brand.blogTitle": "A blog about clean care",
    "brand.blogSub": "Simple advice on natural cosmetics, sensitive skin and care for the whole family.",
    "brand.postTag": "About the brand",
    "brand.postTitle": "How Sophia Belinska began",
    "brand.postP1": "It all started with the search for care you could trust. No jar on the shelf gave confidence in its formula — so we cooked the first products by hand, for our own family.",
    "brand.postP2": "That simple kitchen practice grew into a brand. We kept one core principle: if a product is safe for the most sensitive skin at home, it suits everyone. A short formula, transparent ingredients, no harsh additives.",
    "brand.postP3": "Today Sophia Belinska is handcrafted eco cosmetics made in small batches, caring for the whole family: adults, teens and the youngest. Our mission is simple — to make clean care available to all.",
    "brand.ctaTitle": "Care that looks after everyone",
    "brand.ctaText": "Discover cosmetics made for sensitive skin and the whole family.",

    "contacts.kicker": "We're in touch",
    "contacts.title": "Contacts",
    "contacts.sub": "Write to us — we reply every day. Shipping and payment terms below.",
    "contacts.reachTitle": "How to reach us",
    "contacts.phone": "Phone",
    "contacts.email": "Email",
    "contacts.insta": "Instagram",
    "contacts.hours": "Hours",
    "contacts.hoursVal": "Mon–Sun, 9:00–20:00",
    "contacts.formTitle": "Write to us",
    "contacts.fName": "Your name",
    "contacts.fEmail": "Email",
    "contacts.fMsg": "Message",
    "contacts.fSend": "Send",
    "delivery.kicker": "Shipping & payment",
    "delivery.title": "Delivery",
    "delivery.sub": "We ship across Ukraine. Free shipping from ₴2,000.",
    "delivery.d1Title": "Nova Poshta",
    "delivery.d1Text": "Branch or parcel locker across Ukraine. Dispatched within 1–2 business days.",
    "delivery.d2Title": "Courier to your door",
    "delivery.d2Text": "Address delivery by Nova Poshta courier in most cities.",
    "delivery.d3Title": "Payment",
    "delivery.d3Text": "Pay online by card or cash on delivery.",
    "delivery.note": "Free shipping applies to orders from ₴2,000. Exchange and returns within 14 days."
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

  // Dim overlay behind the drawer (created once)
  let overlay = document.querySelector(".menu-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "menu-overlay";
    document.body.appendChild(overlay);
  }

  const close = () => {
    menu.classList.remove("open");
    burger.classList.remove("active");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  const toggle = () => {
    const willOpen = !menu.classList.contains("open");
    menu.classList.toggle("open", willOpen);
    burger.classList.toggle("active", willOpen);
    overlay.classList.toggle("open", willOpen);
    // Lock scroll while the drawer is open
    document.body.style.overflow = willOpen ? "hidden" : "";
  };

  burger.addEventListener("click", toggle);
  overlay.addEventListener("click", close);
  const closeBtn = menu.querySelector(".menu-close");
  if (closeBtn) closeBtn.addEventListener("click", close);
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  // Esc closes the menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) close();
  });
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

  // Gallery thumbnail swap with a short cross-fade
  const main = document.querySelector(".pdp-main");
  document.querySelectorAll(".pdp-thumb").forEach((thumb) =>
    thumb.addEventListener("click", () => {
      document.querySelectorAll(".pdp-thumb").forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
      const img = thumb.getAttribute("data-img");
      if (main && img) {
        main.classList.add("swapping");
        setTimeout(() => {
          main.style.backgroundImage = `url('${img}')`;
          main.classList.remove("swapping");
        }, 200);
      }
    })
  );
}

/* ---------- Catalog filtering ---------- */
function initFilters() {
  const row = document.querySelector(".filters");
  const grid = document.querySelector(".grid");
  if (!row || !grid) return;

  const chips = row.querySelectorAll(".chip");
  const cards = grid.querySelectorAll(".card-wrap");

  // Map a chip to the category label it filters by (read from the live DOM,
  // so it works in both UA and EN after translation).
  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      const key = chip.getAttribute("data-i18n") || "";
      const isAll = key === "filter.all";
      const want = chip.textContent.trim().toLowerCase();

      cards.forEach((card) => {
        const catEl = card.querySelector(".card-cat");
        const cat = catEl ? catEl.textContent.trim().toLowerCase() : "";
        const show = isAll || cat === want;

        if (show) {
          card.classList.remove("filtering");
          card.style.display = "";
        } else {
          card.classList.add("filtering");
          // Hide after the fade-out finishes
          setTimeout(() => {
            if (card.classList.contains("filtering")) card.style.display = "none";
          }, 300);
        }
      });
    })
  );
}

/* ---------- Scroll progress + header condense ---------- */
function initScrollFx() {
  const header = document.querySelector(".header");

  // Golden progress thread
  let bar = document.querySelector(".scroll-progress");
  if (!bar) {
    bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);
  }

  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY || window.pageYOffset;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docH > 0 ? y / docH : 0;

    bar.style.transform = `scaleX(${progress})`;
    if (header) header.classList.toggle("scrolled", y > 24);

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );
  onScroll();
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
  initAccordion();
  initQty();
  initToggles();
  initFilters();
  initCartButtons();
  initReveal();
  initScrollFx();
});
