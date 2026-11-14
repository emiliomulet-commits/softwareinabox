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

  /* «En esta página»: desplegable con todas las secciones, pestaña activa visible y barra de progreso */
  var L = top ? top.dataset : {};
  var sub = document.querySelector("nav.subnav");
  if (sub && L.toc) {
    var wrap = sub.querySelector(".wrap") || sub, links = [].slice.call(wrap.querySelectorAll('a[href^="#"]'));
    if (links.length > 2) {
      sub.classList.add("sx-toc");
      var box = document.createElement("div"); box.className = "sx-tocbox";
      var btn = document.createElement("button"); btn.type = "button"; btn.className = "sx-tocbtn";
      btn.setAttribute("aria-expanded", "false"); btn.innerHTML = '<span>' + L.toc + '</span><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';
      var list = document.createElement("div"); list.className = "sx-toclist";
      links.forEach(function (a) { var c = a.cloneNode(true); c.classList.remove("on"); list.appendChild(c); });
      box.appendChild(btn); box.appendChild(list); sub.insertBefore(box, sub.firstChild);
      var bar = document.createElement("div"); bar.className = "sx-prog"; sub.appendChild(bar);
      var close = function () { box.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
      btn.addEventListener("click", function (e) { e.stopPropagation(); var o = box.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });
      list.addEventListener("click", close);
      document.addEventListener("click", function (e) { if (!e.target.closest(".sx-tocbox")) close(); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
      var secs = links.map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); });
      var last = -1, t2 = false;
      var spy = function () {
        t2 = false;
        var h = document.documentElement, max = h.scrollHeight - innerHeight;
        bar.style.width = (max > 0 ? Math.min(100, scrollY / max * 100) : 0) + "%";
        var i = -1;
        secs.forEach(function (s, k) { if (s && s.getBoundingClientRect().top < 160) i = k; });
        if (i !== last) {
          last = i;
          links.forEach(function (a, k) { a.classList.toggle("on", k === i); if (k === i) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current"); });
          [].forEach.call(list.children, function (a, k) { a.classList.toggle("on", k === i); });
          if (i >= 0 && wrap.scrollWidth > wrap.clientWidth) {
            var a = links[i]; wrap.scrollTo({ left: a.offsetLeft - wrap.clientWidth / 2 + a.offsetWidth / 2, behavior: "smooth" });
          }
        }
      };
      addEventListener("scroll", function () { if (!t2) { t2 = true; requestAnimationFrame(spy); } }, { passive: true });
      spy();
    }
  }

  /* secciones largas plegadas (índice /regulacion/) */
  if (L.fold) {
    var links2 = L.foldlinks ? JSON.parse(L.foldlinks) : {};
    L.fold.split(" ").forEach(function (id) {
      var sec = document.getElementById(id); if (!sec) return;
      var w = sec.querySelector(".wrap") || sec, kids = [].slice.call(w.children);
      var head = kids[0] && kids[0].classList.contains("sec-h") ? 1 : 0;
      if (kids.length <= head) return;
      var f = document.createElement("div"); f.className = "sx-fold";
      kids.slice(head).forEach(function (k) { f.appendChild(k); });
      w.appendChild(f);
      if (f.scrollHeight < innerHeight * 1.1) { kids.slice(head).forEach(function (k) { w.insertBefore(k, f); }); f.remove(); return; }
      var row = document.createElement("div"); row.className = "sx-foldrow";
      var more = document.createElement("button"); more.type = "button"; more.className = "sx-more"; more.textContent = L.more;
      more.setAttribute("aria-expanded", "false");
      more.addEventListener("click", function () {
        var o = f.classList.toggle("open"); more.textContent = o ? L.less : L.more; more.setAttribute("aria-expanded", o);
        if (!o) sec.scrollIntoView({ behavior: "smooth" });
      });
      row.appendChild(more);
      if (links2[id]) { var a = document.createElement("a"); a.href = links2[id][0]; a.textContent = links2[id][1] + " →"; a.className = "sx-morelink"; row.appendChild(a); }
      w.appendChild(row);
    });
    var openHash = function () {
      var t = location.hash && document.getElementById(location.hash.slice(1));
      var f = t && t.closest(".sx-fold");
      if (f && !f.classList.contains("open")) { f.nextSibling.querySelector(".sx-more").click(); t.scrollIntoView(); }
    };
    addEventListener("hashchange", openHash); openHash();
  }
})();
