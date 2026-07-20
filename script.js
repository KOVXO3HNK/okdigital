const content = {
  ru: {
    nav: {
      services: "Services",
      solutions: "Solutions",
      projects: "Projects",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      title: "Цифровые продукты для бизнеса",
      lead: "Создаю современные сайты, веб-сервисы, AI-автоматизацию и SaaS-платформы — от идеи и прототипа до запуска.",
      primary: "Обсудить проект",
      secondary: "Посмотреть возможности",
      trust: "Прямая работа с разработчиком · Понятные этапы · Исходный код передаётся заказчику",
    },
    map: {
      caption: "От первой точки контакта до рабочей системы",
    },
    services: {
      eyebrow: "Services",
      title: "Шесть направлений, из которых собирается продукт",
      text: "От лендинга до внутреннего портала, от заявки в CRM до полноценного SaaS MVP.",
    },
    solutions: {
      eyebrow: "Solutions",
      title: "Что можно автоматизировать или запустить",
    },
    packages: {
      eyebrow: "Products",
      title: "Три понятных формата работы",
      text: "После короткого обсуждения вы получаете варианты реализации, сроки и фиксированную оценку первого этапа.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Основа для будущих SaaS-продуктов",
    },
    process: {
      eyebrow: "Process",
      title: "Как проходит работа",
    },
    contact: {
      eyebrow: "Contact",
      title: "Обсудим продукт, который должен заработать",
      text: "Можно начать с сайта, автоматизации одного процесса или первой версии SaaS. Главное — понять задачу бизнеса и собрать первый рабочий этап.",
      telegram: "Написать в Telegram",
      github: "GitHub",
    },
    servicesList: [
      {
        code: "01 / WEB",
        title: "Сайты и лендинги",
        text: "Сайты, которые объясняют продукт и приводят обращения.",
        items: ["Лендинги", "Корпоративные сайты", "Каталоги", "Мультиязычность", "Заявки, аналитика и SEO"],
        link: "Обсудить сайт →",
      },
      {
        code: "02 / APP",
        title: "Веб-сервисы и кабинеты",
        text: "Не просто страницы, а полноценные рабочие инструменты.",
        items: ["Личные кабинеты", "Панели управления", "Бронирование", "Каталоги и фильтры", "Отчёты и аналитика"],
        link: "Собрать сервис →",
      },
      {
        code: "03 / AUTOMATION",
        title: "Автоматизация бизнеса",
        text: "Соединяю сайт, CRM, мессенджеры, документы и отчёты в единую систему.",
        items: ["Обработка заявок", "CRM и воронки", "API-интеграции", "Уведомления", "Документы и отчёты"],
        link: "Обсудить автоматизацию →",
      },
      {
        code: "04 / AI",
        title: "AI-решения",
        text: "Встраиваю искусственный интеллект в реальные рабочие процессы.",
        items: ["AI-консультанты", "Классификация обращений", "Документы", "Поиск по базе знаний", "Контент-процессы"],
        link: "Добавить AI →",
      },
      {
        code: "05 / SAAS",
        title: "SaaS и MVP",
        text: "Превращаю бизнес-идею в первую рабочую версию продукта.",
        items: ["Концепция", "Сценарии", "База данных", "Роли и тарифы", "Админ-панель"],
        link: "Запустить MVP →",
      },
      {
        code: "06 / SUPPORT",
        title: "Развитие и поддержка",
        text: "Дорабатываю существующие продукты и поддерживаю их после запуска.",
        items: ["Аудит", "Скорость", "Редизайн", "Новые функции", "Техническое сопровождение"],
        link: "Развивать продукт →",
      },
    ],
    solutionsList: [
      "Заявки с сайта в CRM",
      "Telegram, WhatsApp и email-уведомления",
      "Генерация документов",
      "Оплата и статусы заказов",
      "Бронирования и календари",
      "Клиентские кабинеты",
      "Дашборды руководителя",
      "Поиск по базе знаний",
      "Автоотчёты",
      "Внутренние порталы",
      "SaaS с ролями и подписками",
      "Локальная обработка данных",
    ],
    packagesList: [
      {
        name: "Launch",
        marker: "01",
        text: "Для бизнеса, которому нужен сайт или первая версия продукта.",
        items: ["Структура", "Дизайн", "Разработка", "Мобильная версия", "Публикация"],
      },
      {
        name: "Automate",
        marker: "02",
        text: "Для компании, где слишком много ручной работы.",
        items: ["Анализ процесса", "Интеграции", "CRM", "Уведомления", "Документы", "AI-функции"],
      },
      {
        name: "Build",
        marker: "03",
        text: "Для стартапа или нового SaaS.",
        items: ["Продуктовая концепция", "Прототип", "MVP", "База данных", "Кабинет пользователя", "Запуск"],
      },
    ],
    projectsList: [
      {
        title: "VillaOps",
        text: "SaaS для управления виллами, бронированиями, задачами персонала и сервисными заявками.",
      },
      {
        title: "CarRentalOS",
        text: "Операционная система для прокатов: парк, заявки, документы, оплаты, статусы и отчёты.",
      },
      {
        title: "ServiceDesk AI",
        text: "AI-слой для обработки клиентских обращений, базы знаний и управленческих резюме.",
      },
    ],
    processList: [
      {
        title: "Задача",
        text: "Разбираемся, что должно измениться в бизнесе.",
      },
      {
        title: "Решение",
        text: "Определяем функциональность, сроки и первую версию.",
      },
      {
        title: "Разработка",
        text: "Показываем промежуточные результаты, а не исчезаем до конца проекта.",
      },
      {
        title: "Запуск",
        text: "Публикуем продукт, подключаем аналитику и передаём доступы.",
      },
    ],
  },
  en: {
    nav: {
      services: "Services",
      solutions: "Solutions",
      projects: "Projects",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      title: "Digital products for business",
      lead: "Modern websites, web services, AI automation and SaaS platforms — from idea and prototype to launch.",
      primary: "Discuss a project",
      secondary: "Explore capabilities",
      trust: "Direct work with the developer · Clear stages · Source code transferred to the client",
    },
    map: {
      caption: "From the first touchpoint to an operating system",
    },
    services: {
      eyebrow: "Services",
      title: "Six directions that become one product",
      text: "From a landing page to an internal portal, from a CRM lead to a full SaaS MVP.",
    },
    solutions: {
      eyebrow: "Solutions",
      title: "What can be automated or launched",
    },
    packages: {
      eyebrow: "Products",
      title: "Three clear ways to start",
      text: "After a short discussion, you get implementation options, timing and a fixed estimate for the first stage.",
    },
    projects: {
      eyebrow: "Projects",
      title: "A base for future SaaS products",
    },
    process: {
      eyebrow: "Process",
      title: "How the work moves",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s discuss a product that should work",
      text: "Start with a website, one automated process or the first SaaS version. The point is to understand the business task and ship the first useful stage.",
      telegram: "Message on Telegram",
      github: "GitHub",
    },
    servicesList: [
      {
        code: "01 / WEB",
        title: "Websites and landing pages",
        text: "Websites that explain the product and bring qualified inquiries.",
        items: ["Landing pages", "Company websites", "Catalogs", "Multilingual pages", "Forms, analytics and SEO"],
        link: "Discuss a website →",
      },
      {
        code: "02 / APP",
        title: "Web services and portals",
        text: "Not just pages, but complete working tools.",
        items: ["Client accounts", "Admin panels", "Booking", "Catalogs and filters", "Reports and analytics"],
        link: "Build a service →",
      },
      {
        code: "03 / AUTOMATION",
        title: "Business automation",
        text: "Connecting websites, CRM, messengers, documents and reports into one system.",
        items: ["Lead handling", "CRM pipelines", "API integrations", "Notifications", "Documents and reports"],
        link: "Discuss automation →",
      },
      {
        code: "04 / AI",
        title: "AI solutions",
        text: "Embedding AI into practical business workflows.",
        items: ["AI assistants", "Request classification", "Documents", "Knowledge search", "Content workflows"],
        link: "Add AI →",
      },
      {
        code: "05 / SAAS",
        title: "SaaS and MVP",
        text: "Turning a business idea into the first working product version.",
        items: ["Concept", "User scenarios", "Database", "Roles and plans", "Admin panel"],
        link: "Launch an MVP →",
      },
      {
        code: "06 / SUPPORT",
        title: "Growth and support",
        text: "Improving existing products and keeping them running after launch.",
        items: ["Audit", "Performance", "Redesign", "New features", "Technical support"],
        link: "Improve a product →",
      },
    ],
    solutionsList: [
      "Website leads into CRM",
      "Telegram, WhatsApp and email alerts",
      "Document generation",
      "Payments and order statuses",
      "Bookings and calendars",
      "Client portals",
      "Executive dashboards",
      "Knowledge-base search",
      "Automatic reports",
      "Internal portals",
      "SaaS with roles and subscriptions",
      "Private data processing",
    ],
    packagesList: [
      {
        name: "Launch",
        marker: "01",
        text: "For a business that needs a website or the first product version.",
        items: ["Structure", "Design", "Development", "Mobile version", "Publication"],
      },
      {
        name: "Automate",
        marker: "02",
        text: "For companies with too much manual work.",
        items: ["Process analysis", "Integrations", "CRM", "Notifications", "Documents", "AI features"],
      },
      {
        name: "Build",
        marker: "03",
        text: "For a startup or a new SaaS product.",
        items: ["Product concept", "Prototype", "MVP", "Database", "User account", "Launch"],
      },
    ],
    projectsList: [
      {
        title: "VillaOps",
        text: "SaaS for villas, bookings, staff tasks and service requests.",
      },
      {
        title: "CarRentalOS",
        text: "An operating system for rentals: fleet, leads, documents, payments, statuses and reports.",
      },
      {
        title: "ServiceDesk AI",
        text: "An AI layer for client requests, knowledge bases and management summaries.",
      },
    ],
    processList: [
      {
        title: "Task",
        text: "We define what should change inside the business.",
      },
      {
        title: "Solution",
        text: "We choose the scope, timing and first useful version.",
      },
      {
        title: "Development",
        text: "You see intermediate results instead of waiting until the end.",
      },
      {
        title: "Launch",
        text: "We publish the product, connect analytics and hand over access.",
      },
    ],
  },
};

const serviceGrid = document.querySelector("#serviceGrid");
const solutionList = document.querySelector("#solutionList");
const packageGrid = document.querySelector("#packageGrid");
const projectGrid = document.querySelector("#projectGrid");
const processGrid = document.querySelector("#processGrid");
const langButtons = document.querySelectorAll(".lang-btn");
const translatable = document.querySelectorAll("[data-i18n]");
const mapNodes = [...document.querySelectorAll(".map-node")];

function getByPath(source, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], source);
}

function list(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function render(lang) {
  const data = content[lang];
  document.documentElement.lang = lang;
  document.title =
    lang === "ru"
      ? "KOVXO3HNK DIGITAL · Сайты · Автоматизация · AI · SaaS"
      : "KOVXO3HNK DIGITAL · Web Development · Automation · AI · SaaS";

  translatable.forEach((element) => {
    const value = getByPath(data, element.dataset.i18n);
    if (value) {
      element.textContent = value;
    }
  });

  serviceGrid.innerHTML = data.servicesList
    .map(
      (service) => `
        <article class="card service-card reveal">
          <div>
            <div class="card-kicker">${service.code}</div>
            <h3>${service.title}</h3>
            <p>${service.text}</p>
            <ul class="feature-list">${list(service.items)}</ul>
          </div>
          <a class="text-link" href="#contact">${service.link}</a>
        </article>
      `,
    )
    .join("");

  solutionList.innerHTML = data.solutionsList
    .map((solution) => `<span class="solution-chip">${solution}</span>`)
    .join("");

  packageGrid.innerHTML = data.packagesList
    .map(
      (pack) => `
        <article class="card package-card reveal">
          <div class="package-title">
            <h3>${pack.name}</h3>
            <span>${pack.marker}</span>
          </div>
          <p>${pack.text}</p>
          <ul class="package-list">${list(pack.items)}</ul>
        </article>
      `,
    )
    .join("");

  projectGrid.innerHTML = data.projectsList
    .map(
      (project) => `
        <article class="card project-card reveal">
          <div class="card-kicker">SAAS</div>
          <h3>${project.title}</h3>
          <p>${project.text}</p>
        </article>
      `,
    )
    .join("");

  processGrid.innerHTML = data.processList
    .map(
      (step, index) => `
        <article class="card process-step reveal">
          <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
        </article>
      `,
    )
    .join("");

  reveal();
}

function setLanguage(lang) {
  localStorage.setItem("kovxo3hnk-lang", lang);
  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  render(lang);
}

function reveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  elements.forEach((element) => {
    if (!element.classList.contains("is-visible")) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.94) {
        element.classList.add("is-visible");
      } else {
        observer.observe(element);
      }
    }
  });
}

let activeIndex = 0;
function activateNode(index) {
  mapNodes.forEach((node, nodeIndex) => {
    node.classList.toggle("is-active", nodeIndex === index);
  });
}

mapNodes.forEach((node, index) => {
  node.addEventListener("mouseenter", () => {
    activeIndex = index;
    activateNode(activeIndex);
  });
});

setInterval(() => {
  activeIndex = (activeIndex + 1) % mapNodes.length;
  activateNode(activeIndex);
}, 2200);

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem("kovxo3hnk-lang");
setLanguage(savedLanguage || "ru");
