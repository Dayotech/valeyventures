  // DARK MODE TOGGLE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

// LOAD SAVED MODE (SAFE)
window.addEventListener("DOMContentLoaded", () => {
  try {
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark");
    }
  } catch (e) {
    console.log("Dark mode error:", e);
  }
});

// MOBILE MENU TOGGLE
 const toggleBtn = document.querySelector("[data-menu-toggle]");
const panel = document.querySelector("[data-mobile-panel]");

if (toggleBtn && panel) {
  toggleBtn.addEventListener("click", () => {
    panel.classList.toggle("active");
  });
}

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".topbar");
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const links = document.querySelectorAll(".nav-links a, .mobile-panel a");
const currentPage = location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

 const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

if (lightbox && lightboxImg && closeBtn) {

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });
}

 // SCROLL ANIMATION OBSERVER
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".topbar");

  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

  window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (!loader) return;

  // Delay to ensure visibility
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "0.5s";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  }, 1200); // 🔥 increased time so you SEE it
});

 // FADE OUT ONLY (safe)
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (href && !href.startsWith("#") && !href.startsWith("http")) {
      e.preventDefault();

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    }
  });
});