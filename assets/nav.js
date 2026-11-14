/* Navegación común de www.softwareinabox.eu: menú móvil, desplegables, volver arriba. Lo inserta i18n/nav.py. */
(function () {
  var hd = document.querySelector("header.sx-hd");
  if (hd) {
    var b = hd.querySelector(".sx-burger"), n = hd.querySelector(".sx-nav");
    if (b && n) {
      b.addEventListener("click", function () {
        var o = n.classList.toggle("open");
        b.setAttribute("aria-expanded", o);
      });
      n.addEventListener("click", function (e) {
        if (e.target.closest("a")) { n.classList.remove("open"); b.setAttribute("aria-expanded", "false"); }
      });
    }
    hd.querySelectorAll(".sx-dd>button").forEach(function (t) {
      t.addEventListener("click", function (e) {
        e.stopPropagation();
        var d = t.parentNode, o = !d.classList.contains("open");
        hd.querySelectorAll(".sx-dd.open").forEach(function (x) { x.classList.remove("open"); x.querySelector("button").setAttribute("aria-expanded", "false"); });
        d.classList.toggle("open", o);
        t.setAttribute("aria-expanded", o);
      });
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".sx-dd")) hd.querySelectorAll(".sx-dd.open").forEach(function (x) { x.classList.remove("open"); x.querySelector("button").setAttribute("aria-expanded", "false"); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        hd.querySelectorAll(".sx-dd.open").forEach(function (x) { x.classList.remove("open"); x.querySelector("button").setAttribute("aria-expanded", "false"); });
        if (n && n.classList.contains("open")) { n.classList.remove("open"); b.setAttribute("aria-expanded", "false"); b.focus(); }
      }
    });
  }
  var top = document.querySelector(".sx-top");
  if (top) {
    var tick = false;
    var upd = function () { top.classList.toggle("show", window.scrollY > window.innerHeight * 2); tick = false; };
    window.addEventListener("scroll", function () { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
    top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
      var f = document.querySelector("main, #contenido, h1");
      if (f) { f.setAttribute("tabindex", "-1"); f.focus({ preventScroll: true }); }
    });
    upd();
  }
})();
