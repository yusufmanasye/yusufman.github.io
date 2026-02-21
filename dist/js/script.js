      window.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons();
      });

      // ── SHRINKING NAVBAR ──

      const navbar = document.getElementById("navbar");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
          navbar.classList.add(
            "scrolled",
            "glass",
            "border-b",
            "border-[#88C9C4]/10",
            "shadow-sm",
          );
        } else {
          navbar.classList.remove(
            "scrolled",
            "glass",
            "border-b",
            "border-[#88C9C4]/10",
            "shadow-sm",
          );
        }
        closeMob();
        highlightNav();
      });

      // Hamburger
      const hb = document.getElementById("hb");
      const mob = document.getElementById("mob-menu");
      function closeMob() {
        mob.classList.add("hidden");
        mob.classList.remove("flex");
        hb.classList.remove("open");
      }
      hb.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = mob.classList.contains("flex");
        if (open) closeMob();
        else {
          mob.classList.remove("hidden");
          mob.classList.add("flex");
          hb.classList.add("open");
        }
      });
      document.addEventListener("click", (e) => {
        if (!mob.contains(e.target) && e.target !== hb) closeMob();
      });
      document
        .querySelectorAll(".mob-link")
        .forEach((l) => l.addEventListener("click", closeMob));

      // Active nav
      function highlightNav() {
        const secs = document.querySelectorAll("section[id]");
        const links = document.querySelectorAll(".nav-link");
        let cur = "";
        secs.forEach((s) => {
          if (window.scrollY >= s.offsetTop - 140) cur = s.id;
        });
        links.forEach((l) => {
          l.classList.toggle(
            "text-[#88C9C4]",
            l.getAttribute("href") === "#" + cur,
          );
        });
      }

      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
          const t = document.querySelector(a.getAttribute("href"));
          if (t) {
            e.preventDefault();
            t.scrollIntoView({ behavior: "smooth" });
          }
        });
      });