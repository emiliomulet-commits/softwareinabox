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
    /* Desplegables del menú: menú clásico.
       Ratón: se abre al pasar por encima (todo el elemento, no solo la flecha) y se cierra con 300 ms de margen,
       así se puede bajar a las opciones sin que se cierre. Táctil: el primer toque abre, el segundo entra.
       Teclado: flecha abajo abre y recorre las opciones, Esc cierra. */
    hd.classList.add("js-dd");
    var dds = [].slice.call(hd.querySelectorAll(".sx-dd"));
    var mobile = function () { return n && getComputedStyle(b).display !== "none"; };
    var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    var setOpen = function (d, o) {
      d.classList.toggle("open", o);
      d.querySelector("button").setAttribute("aria-expanded", o ? "true" : "false");
    };
    var closeAll = function (except) { dds.forEach(function (x) { if (x !== except) { clearTimeout(x._t); setOpen(x, false); } }); };
    var items = function (d) { return [].slice.call(d.querySelectorAll(".sx-panel a")); };
    dds.forEach(function (d) {
      var link = d.querySelector("a"), btn = d.querySelector("button");
      d.addEventListener("mouseenter", function () {
        if (!canHover || mobile()) return;
        clearTimeout(d._t); closeAll(d); setOpen(d, true);
      });
      d.addEventListener("mouseleave", function () {
        if (!canHover || mobile()) return;
        clearTimeout(d._t);
        d._t = setTimeout(function () { setOpen(d, false); }, 300);
      });
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var o = !d.classList.contains("open"); closeAll(d); setOpen(d, o);
      });
      /* táctil (o menú móvil): el primer toque en «Productos», «Regulación UE»… abre la lista en vez de saltar */
      link.addEventListener("click", function (e) {
        if ((!canHover || mobile()) && !d.classList.contains("open")) { e.preventDefault(); closeAll(d); setOpen(d, true); }
      });
      d.addEventListener("keydown", function (e) {
        var list = items(d), i = list.indexOf(document.activeElement);
        if (e.key === "ArrowDown") {
          e.preventDefault(); setOpen(d, true); closeAll(d);
          (list[i + 1] || list[0]).focus();
        } else if (e.key === "ArrowUp" && i >= 0) {
          e.preventDefault(); (i === 0 ? link : list[i - 1]).focus();
        } else if (e.key === "Escape" && d.classList.contains("open")) {
          e.stopPropagation(); setOpen(d, false); link.focus();
        }
      });
      d.addEventListener("focusout", function (e) { if (!d.contains(e.relatedTarget)) setOpen(d, false); });
    });
    document.addEventListener("click", function (e) { if (!e.target.closest(".sx-dd")) closeAll(); });
    /* selector de idioma: también se abre al pasar el ratón */
    var sw = hd.querySelector(".i18n-sw details");
    if (sw && canHover) {
      var swt;
      sw.parentNode.addEventListener("mouseenter", function () { if (mobile()) return; clearTimeout(swt); closeAll(); sw.open = true; });
      sw.parentNode.addEventListener("mouseleave", function () { if (mobile()) return; clearTimeout(swt); swt = setTimeout(function () { sw.open = false; }, 300); });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeAll();
        if (sw) sw.open = false;
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
