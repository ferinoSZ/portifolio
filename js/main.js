// JavaScript principal - Portfólio Wesley Ferino
// Comentários em português-BR conforme Constituição IV

(function () {
  "use strict";

  // Media queries de referência (mesmas faixas usadas no CSS)
  const DESKTOP_QUERY = "(min-width: 768px)";
  const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

  // Ícones e rótulos do botão de menu
  const MENU_ICON_CLOSED = "☰";
  const MENU_ICON_OPEN = "✕";
  const MENU_LABEL_CLOSED = "Abrir menu de navegação";
  const MENU_LABEL_OPEN = "Fechar menu de navegação";

  // Distância da linha de leitura usada para detectar a seção ativa
  const SCROLL_MARKER_RATIO = 0.3;

  /**
   * Verifica se o usuário pediu redução de movimento
   */
  function prefersReducedMotion() {
    return window.matchMedia(REDUCED_MOTION_QUERY).matches;
  }

  /**
   * Função de inicialização
   */
  function init() {
    setupSmoothScroll();
    setupMobileMenu();
    setupMenuResetOnDesktop();
    setupActiveNavLink();
  }

  /**
   * Configura navegação suave por âncoras.
   * O deslocamento do header fixo é resolvido por scroll-padding-top no CSS.
   */
  function setupSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        const href = this.getAttribute("href");

        // Ignora links sem destino ou apenas "#"
        if (!href || href === "#") {
          return;
        }

        const target = document.getElementById(href.slice(1));

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
          block: "start",
        });

        // Fecha o menu mobile antes de mover o foco
        closeMobileMenu();
        focusSection(target);
      });
    });
  }

  /**
   * Move o foco para a seção destino sem interferir na rolagem suave
   */
  function focusSection(section) {
    section.setAttribute("tabindex", "-1");
    section.focus({ preventScroll: true });

    window.setTimeout(function () {
      section.removeAttribute("tabindex");
    }, 1000);
  }

  /**
   * Aplica o estado aberto/fechado no menu mobile, mantendo ARIA, ícone e corpo sincronizados
   */
  function setMobileMenuOpen(isOpen) {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (!navToggle || !navMenu) {
      return;
    }

    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    navToggle.setAttribute("aria-label", isOpen ? MENU_LABEL_OPEN : MENU_LABEL_CLOSED);
    navMenu.classList.toggle("active", isOpen);
    document.body.classList.toggle("menu-open", isOpen);

    const icon = navToggle.querySelector(".nav-toggle-icon");

    if (icon) {
      icon.textContent = isOpen ? MENU_ICON_OPEN : MENU_ICON_CLOSED;
    }
  }

  /**
   * Fecha o menu mobile
   */
  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  /**
   * Configura o menu mobile (toggle, ESC e clique fora)
   */
  function setupMobileMenu() {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (!navToggle || !navMenu) {
      return;
    }

    navToggle.addEventListener("click", function () {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      setMobileMenuOpen(!isExpanded);
    });

    // Fecha o menu ao pressionar ESC e devolve o foco ao botão
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navMenu.classList.contains("active")) {
        closeMobileMenu();
        navToggle.focus();
      }
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener("click", function (event) {
      if (
        navMenu.classList.contains("active") &&
        !navToggle.contains(event.target) &&
        !navMenu.contains(event.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  /**
   * Garante que o menu mobile volte ao estado fechado ao passar para desktop
   */
  function setupMenuResetOnDesktop() {
    const desktopMedia = window.matchMedia(DESKTOP_QUERY);

    function handleChange(event) {
      if (event.matches) {
        closeMobileMenu();
      }
    }

    if (typeof desktopMedia.addEventListener === "function") {
      desktopMedia.addEventListener("change", handleChange);
    } else {
      desktopMedia.addListener(handleChange);
    }
  }

  /**
   * Destaca o link da seção visível na navegação (scroll spy)
   */
  function setupActiveNavLink() {
    const sections = Array.prototype.slice.call(
      document.querySelectorAll("main section[id]")
    );
    const navLinks = Array.prototype.slice.call(
      document.querySelectorAll(".nav-link")
    );

    if (sections.length === 0 || navLinks.length === 0) {
      return;
    }

    let currentSectionId = null;

    function setActiveSection(sectionId) {
      if (sectionId === currentSectionId) {
        return;
      }

      currentSectionId = sectionId;

      navLinks.forEach(function (link) {
        const isActive = link.getAttribute("href") === "#" + sectionId;
        link.classList.toggle("active", isActive);

        if (isActive) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    function detectActiveSection() {
      const marker = window.pageYOffset + window.innerHeight * SCROLL_MARKER_RATIO;
      let activeSection = sections[0];

      // Seção ativa: a última cujo início já passou da linha de leitura
      for (let index = 0; index < sections.length; index++) {
        if (sections[index].offsetTop <= marker) {
          activeSection = sections[index];
        }
      }

      // No fim da página a última seção é sempre a visível
      const isAtBottom =
        window.pageYOffset + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (isAtBottom) {
        activeSection = sections[sections.length - 1];
      }

      setActiveSection(activeSection.id);
    }

    let isScheduled = false;

    function handleScroll() {
      if (isScheduled) {
        return;
      }

      isScheduled = true;
      window.requestAnimationFrame(function () {
        isScheduled = false;
        detectActiveSection();
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    detectActiveSection();
  }

  // Inicializa quando o DOM estiver pronto
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
