/* ============================================================
   WIYO — Animations Module
   Handles: GSAP + ScrollTrigger, Lenis, hero split text,
            custom cursor, magnetic buttons, loading screen
   ============================================================ */

(function () {
  "use strict";

  /* ── Wait for DOM ── */
  document.addEventListener("DOMContentLoaded", function () {

    /* ──────────────────────────────────────────────
       1. LOADING SCREEN
    ────────────────────────────────────────────── */
    const loadingScreen = document.getElementById("loading-screen");
    const loadingLogo   = document.querySelector(".loading-logo");
    const loadingBar    = document.querySelector(".loading-bar-fill");

    if (loadingScreen && window.gsap) {
      const tl = gsap.timeline();

      // Animate logo in
      tl.to(loadingLogo, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      });

      // Fill loading bar
      tl.to(loadingBar, {
        width: "100%",
        duration: 0.9,
        ease: "power2.inOut",
      }, "-=0.2");

      // Fade out loading screen
      tl.to(loadingScreen, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          loadingScreen.style.display = "none";
          document.body.style.overflow = "";
          initMainAnimations();
        },
      }, "+=0.2");
    } else {
      if (loadingScreen) loadingScreen.style.display = "none";
      document.body.style.overflow = "";
      initMainAnimations();
    }

    /* ──────────────────────────────────────────────
       2. LENIS SMOOTH SCROLL
    ────────────────────────────────────────────── */
    let lenis;
    if (window.Lenis) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureOrientation: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Connect Lenis with GSAP ScrollTrigger
      if (window.ScrollTrigger) {
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }

      // Smooth anchor scroll
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            lenis.scrollTo(target, { offset: -80, duration: 1.4 });
          }
        });
      });
    }

    /* ──────────────────────────────────────────────
       3. CUSTOM CURSOR (desktop only)
    ────────────────────────────────────────────── */
    if (window.matchMedia("(pointer: fine)").matches) {
      const cursor    = document.querySelector(".cursor");
      const cursorDot = document.querySelector(".cursor-dot");

      if (cursor && cursorDot) {
        let cursorX = 0, cursorY = 0;
        let dotX = 0, dotY = 0;
        let mouseX = 0, mouseY = 0;

        document.addEventListener("mousemove", (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;

          // Dot follows instantly
          dotX = mouseX;
          dotY = mouseY;
          cursorDot.style.left = dotX + "px";
          cursorDot.style.top  = dotY + "px";
        });

        // Large cursor follows with lerp
        function animateCursor() {
          cursorX += (mouseX - cursorX) * 0.12;
          cursorY += (mouseY - cursorY) * 0.12;
          cursor.style.left = cursorX + "px";
          cursor.style.top  = cursorY + "px";
          requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover state
        const hoverTargets = document.querySelectorAll(
          "a, button, .faq-question, .feature-card, .pricing-card, input, select, textarea, .nav-link"
        );

        hoverTargets.forEach((el) => {
          el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
          el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
        });

        document.addEventListener("mousedown", () => cursor.classList.add("clicking"));
        document.addEventListener("mouseup",   () => cursor.classList.remove("clicking"));

        document.addEventListener("mouseleave", () => {
          cursor.style.opacity = "0";
          cursorDot.style.opacity = "0";
        });
        document.addEventListener("mouseenter", () => {
          cursor.style.opacity = "1";
          cursorDot.style.opacity = "1";
        });
      }
    }

    /* ──────────────────────────────────────────────
       4. MAIN ANIMATIONS (after loading screen)
    ────────────────────────────────────────────── */
    function initMainAnimations() {
      if (!window.gsap || !window.ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      /* ── Hero Word Split Animation ── */
      const heroH1 = document.querySelector(".hero-h1");
      if (heroH1) {
        const wordInners = heroH1.querySelectorAll(".word-inner");
        gsap.to(wordInners, {
          translateY: "0%",
          duration: 0.9,
          stagger: 0.07,
          ease: "power4.out",
          delay: 0.1,
        });
      }

      /* ── Hero elements fade in ── */
      const heroElements = [
        ".hero-eyebrow",
        ".hero-subheadline",
        ".spot-counter",
        ".hero-ctas",
        ".trust-badges",
      ];

      gsap.fromTo(
        heroElements,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.6,
        }
      );

      /* ── GSAP Number Counter (spot counter) ── */
      const spotNumberEl = document.getElementById("spot-count");
      if (spotNumberEl) {
        const targetCount = parseInt(spotNumberEl.getAttribute("data-count") || spotNumberEl.textContent);
        gsap.fromTo(
          { val: 100 },
          { val: targetCount },
          {
            duration: 1.5,
            delay: 0.9,
            ease: "power3.out",
            onUpdate: function () {
              spotNumberEl.textContent = Math.round(this.targets()[0].val);
            },
          }
        );
      }

      /* ── Section Animations via ScrollTrigger ── */
      // Problem cards
      gsap.fromTo(
        ".problem-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".problem-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Feature cards
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Pricing cards
      gsap.fromTo(
        ".pricing-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 80%",
            toggleActions: "play none none none",
            onComplete: () => {
              // Restore dominant card transform after animation
              const dominant = document.querySelector(".pricing-card.dominant");
              if (dominant) {
                dominant.style.transform = "";
              }
            },
          },
        }
      );

      // Section titles
      gsap.utils.toArray(".section-title, .section-eyebrow, .section-subtitle").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Social proof counter
      const socialCounterEl = document.getElementById("social-counter-number");
      if (socialCounterEl) {
        const finalCount = 1247;
        ScrollTrigger.create({
          trigger: "#social-proof",
          start: "top 70%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              { val: 800 },
              { val: finalCount },
              {
                duration: 2,
                ease: "power2.out",
                onUpdate: function () {
                  socialCounterEl.textContent =
                    Math.round(this.targets()[0].val).toLocaleString() + "+";
                },
              }
            );
          },
        });
      }

      // Avatar bubbles
      gsap.fromTo(
        ".avatar-bubble",
        { opacity: 0, scale: 0, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".avatar-row",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Founder's note
      gsap.fromTo(
        ".founders-note-inner",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#founders-note",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // FAQ items
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-list",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Waitlist form
      gsap.fromTo(
        ".waitlist-inner",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#waitlist",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Footer
      gsap.fromTo(
        ".footer-top",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#footer",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    /* ──────────────────────────────────────────────
       5. MAGNETIC BUTTONS
    ────────────────────────────────────────────── */
    if (window.matchMedia("(pointer: fine)").matches) {
      document.querySelectorAll(".magnetic, .btn-primary, .nav-cta").forEach((btn) => {
        btn.addEventListener("mousemove", function (e) {
          const rect   = this.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top  + rect.height / 2;
          const deltaX  = (e.clientX - centerX) * 0.25;
          const deltaY  = (e.clientY - centerY) * 0.25;

          this.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });

        btn.addEventListener("mouseleave", function () {
          this.style.transform = "translate(0, 0)";
          this.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          setTimeout(() => {
            this.style.transition = "";
          }, 500);
        });

        btn.addEventListener("mouseenter", function () {
          this.style.transition = "transform 0.15s ease";
        });
      });
    }

    /* ──────────────────────────────────────────────
       6. SCROLL-TO-TOP BUTTON
    ────────────────────────────────────────────── */
    const scrollTopBtn = document.querySelector(".scroll-top");
    if (scrollTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 600) {
          scrollTopBtn.classList.add("visible");
        } else {
          scrollTopBtn.classList.remove("visible");
        }
      }, { passive: true });

      scrollTopBtn.addEventListener("click", () => {
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.5 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }

    /* ──────────────────────────────────────────────
       7. NAVBAR SHRINK ON SCROLL
    ────────────────────────────────────────────── */
    const navbar = document.getElementById("navbar");
    if (navbar) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }, { passive: true });
    }

    /* ──────────────────────────────────────────────
       8. HAMBURGER MOBILE MENU
    ────────────────────────────────────────────── */
    const hamburger  = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        mobileMenu.classList.toggle("open");
        document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
      });

      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("open");
          mobileMenu.classList.remove("open");
          document.body.style.overflow = "";
        });
      });
    }

    /* ──────────────────────────────────────────────
       9. AOS INIT
    ────────────────────────────────────────────── */
    if (window.AOS) {
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: true,
        offset: 60,
      });
    }

    /* ──────────────────────────────────────────────
       10. HERO PARTICLES
    ────────────────────────────────────────────── */
    (function createParticles() {
      const container = document.querySelector(".hero-particles");
      if (!container) return;

      const count = window.innerWidth < 768 ? 20 : 40;

      for (let i = 0; i < count; i++) {
        const dot = document.createElement("div");
        dot.className = "particle";

        const size     = Math.random() * 3 + 1;
        const startX   = Math.random() * 100;
        const delay    = Math.random() * 15;
        const duration = Math.random() * 20 + 15;
        const opacity  = Math.random() * 0.4 + 0.1;

        dot.style.cssText = `
          left: ${startX}%;
          width: ${size}px;
          height: ${size}px;
          animation-delay: ${delay}s;
          animation-duration: ${duration}s;
          opacity: ${opacity};
        `;

        container.appendChild(dot);
      }
    })();

  }); // end DOMContentLoaded

})();
