/* ============================================================
   WIYO — Main JS Module
   Handles: FAQ accordion, spot counter, social counter,
            waitlist form, confetti, localStorage, CSRF
   ============================================================ */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {

    /* ──────────────────────────────────────────────
       1. SPOT COUNTER — FOMO (localStorage-based)
    ────────────────────────────────────────────── */
    (function initSpotCounter() {
      const STORAGE_KEY  = "wiyo_spots_data";
      const INITIAL      = 73;
      const MIN_SPOTS    = 12;
      const HOURS_WINDOW = 8;
      const DECREMENT_MIN = 1;
      const DECREMENT_MAX = 3;

      function getStoredData() {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (raw) return JSON.parse(raw);
        } catch (e) {}
        return null;
      }

      function saveData(data) {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {}
      }

      let data = getStoredData();

      if (!data) {
        data = {
          spots:     INITIAL,
          lastDecay: Date.now(),
        };
        saveData(data);
      } else {
        // Apply time-based decay
        const now      = Date.now();
        const elapsed  = now - data.lastDecay;
        const periods  = Math.floor(elapsed / (HOURS_WINDOW * 3600 * 1000));

        if (periods > 0) {
          for (let i = 0; i < periods; i++) {
            const drop = Math.floor(Math.random() * (DECREMENT_MAX - DECREMENT_MIN + 1)) + DECREMENT_MIN;
            data.spots = Math.max(MIN_SPOTS, data.spots - drop);
          }
          data.lastDecay = now;
          saveData(data);
        }
      }

      // Update DOM
      const spotEl = document.getElementById("spot-count");
      if (spotEl) {
        spotEl.setAttribute("data-count", data.spots);
        spotEl.textContent = data.spots;
      }

      const spotTextEl = document.getElementById("spot-text");
      if (spotTextEl) {
        spotTextEl.textContent = data.spots + " / 100 Founder spots remaining";
      }
    })();

    /* ──────────────────────────────────────────────
       2. SOCIAL COUNTER — live increment
    ────────────────────────────────────────────── */
    (function initSocialCounter() {
      const STORAGE_KEY = "wiyo_social_count";
      const BASE_COUNT  = 1247;
      let currentCount  = BASE_COUNT;

      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const val = parseInt(stored);
          if (val >= BASE_COUNT) currentCount = val;
        }
      } catch (e) {}

      const counterEl = document.getElementById("social-counter-number");
      if (!counterEl) return;

      counterEl.textContent = currentCount.toLocaleString() + "+";

      // Slow increment every 4–6 seconds
      function scheduleIncrement() {
        const delay = (Math.random() * 2000 + 4000);
        setTimeout(() => {
          currentCount++;
          counterEl.textContent = currentCount.toLocaleString() + "+";
          try {
            localStorage.setItem(STORAGE_KEY, currentCount.toString());
          } catch (e) {}
          scheduleIncrement();
        }, delay);
      }

      scheduleIncrement();
    })();

    /* ──────────────────────────────────────────────
       3. FAQ ACCORDION
    ────────────────────────────────────────────── */
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      if (!question) return;

      question.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        // Close all others
        faqItems.forEach((other) => {
          if (other !== item) other.classList.remove("open");
        });

        // Toggle current
        item.classList.toggle("open", !isOpen);
      });

      // Keyboard accessibility
      question.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          question.click();
        }
      });
    });

    /* ──────────────────────────────────────────────
       4. CSRF TOKEN GENERATION
    ────────────────────────────────────────────── */
    function generateToken(length) {
      const chars  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result   = "";
      const array  = new Uint8Array(length);
      window.crypto.getRandomValues(array);
      array.forEach((val) => {
        result += chars[val % chars.length];
      });
      return result;
    }

    const csrfInput = document.getElementById("csrf_token");
    if (csrfInput) {
      const token = generateToken(32);
      csrfInput.value = token;
      try {
        sessionStorage.setItem("wiyo_csrf", token);
      } catch (e) {}
    }

    /* ──────────────────────────────────────────────
       5. RETURNING USER — hide form if already signed up
    ────────────────────────────────────────────── */
    const SIGNED_UP_KEY = "wiyo_signed_up";
    const waitlistForm       = document.getElementById("waitlist-form");
    const returningNotice    = document.getElementById("returning-user-notice");

    try {
      const signedUp = localStorage.getItem(SIGNED_UP_KEY);
      if (signedUp) {
        const data = JSON.parse(signedUp);
        if (waitlistForm)    waitlistForm.style.display    = "none";
        if (returningNotice) {
          returningNotice.classList.add("show");
          const positionEl = returningNotice.querySelector(".returning-position");
          if (positionEl && data.position) {
            positionEl.textContent = "#" + data.position;
          }
        }
      }
    } catch (e) {}

    /* ──────────────────────────────────────────────
       6. WAITLIST FORM SUBMISSION
    ────────────────────────────────────────────── */
    if (waitlistForm) {
      waitlistForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const submitBtn  = this.querySelector(".form-submit-btn");
        const formSuccess = document.getElementById("form-success");

        // Honeypot check
        const honeypot = this.querySelector('input[name="bot_field"]');
        if (honeypot && honeypot.value !== "") return; // silent drop

        // Basic client-side validation
        const emailInput = this.querySelector('input[name="email"]');
        if (!emailInput || !isValidEmail(emailInput.value)) {
          shakeField(emailInput);
          return;
        }

        // Loading state
        submitBtn.classList.add("loading");
        submitBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 0.8s linear infinite;">
            <path d="M21 12a9 9 0 11-6.219-8.56"/>
          </svg>
          Processing...
        `;

        const formData = new FormData(this);

        try {
          const response = await fetch("submit.php", {
            method: "POST",
            body:   formData,
          });

          if (!response.ok) throw new Error("Server error");

          const result = await response.json();

          if (result.success) {
            showSuccess(result.position, emailInput.value, formSuccess, waitlistForm);
          } else {
            showError(submitBtn, result.message || "Something went wrong. Please try again.");
          }

        } catch (err) {
          // Fallback: try Formspree if PHP fails
          tryFormspree(formData, emailInput.value, submitBtn, formSuccess, waitlistForm);
        }
      });
    }

    async function tryFormspree(formData, email, submitBtn, formSuccess, form) {
      // Formspree fallback — replace FORMSPREE_ID with actual endpoint
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ID";

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method:  "POST",
          body:    formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          const estimatedPosition = Math.floor(Math.random() * 40) + 60;
          showSuccess(estimatedPosition, email, formSuccess, form);
        } else {
          throw new Error("Formspree error");
        }
      } catch (err) {
        // Last resort: show a polite error
        submitBtn.classList.remove("loading");
        submitBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Try Again
        `;
        submitBtn.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";

        setTimeout(() => {
          submitBtn.style.background = "";
          submitBtn.innerHTML = `Claim My Founder Spot 🚀`;
        }, 3000);
      }
    }

    function showSuccess(position, email, formSuccess, form) {
      // Store in localStorage
      try {
        localStorage.setItem(
          SIGNED_UP_KEY,
          JSON.stringify({ position, email, timestamp: Date.now() })
        );
      } catch (e) {}

      // Hide form
      if (form) form.style.display = "none";

      // Show success card
      if (formSuccess) {
        formSuccess.classList.add("show");
        const positionEl = formSuccess.querySelector(".user-position");
        if (positionEl) positionEl.textContent = "#" + position;
      }

      // Confetti!
      if (window.confetti) {
        const end = Date.now() + 3000;
        const colors = ["#6366F1", "#A855F7", "#06B6D4", "#22c55e", "#FFFFFF"];

        (function frame() {
          confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
          });
          confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
          });
          if (Date.now() < end) requestAnimationFrame(frame);
        })();

        // Central burst
        confetti({
          particleCount: 120,
          spread: 100,
          origin: { y: 0.6 },
          colors: colors,
          ticks: 200,
        });
      }

      // Scroll to success message
      setTimeout(() => {
        const successEl = document.getElementById("form-success");
        if (successEl) {
          successEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 200);
    }

    function showError(btn, message) {
      btn.classList.remove("loading");
      btn.textContent = message;
      btn.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";
      setTimeout(() => {
        btn.textContent = "Claim My Founder Spot 🚀";
        btn.style.background = "";
      }, 4000);
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    }

    function shakeField(input) {
      if (!input) return;
      input.style.animation = "none";
      input.getBoundingClientRect(); // reflow
      input.style.borderColor = "#ef4444";
      input.style.boxShadow   = "0 0 0 3px rgba(239,68,68,0.2)";

      input.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-8px)" },
          { transform: "translateX(8px)" },
          { transform: "translateX(-6px)" },
          { transform: "translateX(6px)" },
          { transform: "translateX(-3px)" },
          { transform: "translateX(3px)" },
          { transform: "translateX(0)" },
        ],
        { duration: 480, easing: "ease-out" }
      );

      setTimeout(() => {
        input.style.borderColor = "";
        input.style.boxShadow   = "";
      }, 2500);

      input.focus();
    }

    /* ──────────────────────────────────────────────
       7. SPIN KEYFRAME (for loading spinner)
    ────────────────────────────────────────────── */
    const spinStyle = document.createElement("style");
    spinStyle.textContent = `
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(spinStyle);

    /* ──────────────────────────────────────────────
       8. SMOOTH INPUT LABEL INTERACTION
    ────────────────────────────────────────────── */
    document.querySelectorAll(".form-input, .form-select").forEach((input) => {
      const group = input.closest(".form-group");
      if (!group) return;

      input.addEventListener("focus", () => {
        group.classList.add("focused");
      });

      input.addEventListener("blur", () => {
        group.classList.remove("focused");
        if (input.value) group.classList.add("has-value");
        else group.classList.remove("has-value");
      });
    });

    /* ──────────────────────────────────────────────
       9. KEYBOARD NAVIGATION ACCESSIBILITY
    ────────────────────────────────────────────── */
    document.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        document.body.classList.add("keyboard-nav");
      }
    });

    document.addEventListener("mousedown", () => {
      document.body.classList.remove("keyboard-nav");
    });

  }); // end DOMContentLoaded

})();
