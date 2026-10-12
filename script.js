(() => {
  const D = DATA;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M4 19h16"/></svg>',
    badge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/></svg>',
  };

  const NAV = [["about", "About"], ["skills", "Skills"], ["experience", "Experience"], ["projects", "Projects"], ["contact", "Contact"]];
  const cert = D.about.certifications.find((c) => c.highlight);
  const stats = [
    { value: `${new Date().getFullYear() - D.about.itSince}+`, label: "Years in IT" },
    { value: D.projects.length, label: "Key projects" },
    { value: new Set(D.projects.map((p) => p.domain)).size, label: "Industries" },
  ];

  /* ── Theme ─────────────────────────── */
  const root = document.documentElement;
  let theme = "dark";
  try { theme = localStorage.getItem("theme") || theme; } catch (e) {}
  root.dataset.theme = theme;
  const setTheme = (t) => {
    root.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch (e) {}
    $("#theme-btn").textContent = t === "dark" ? "☀" : "☾";
  };

  /* ── Nav ───────────────────────────── */
  $("#nav").innerHTML = `
    <div class="nav-inner">
      <a href="#hero" class="logo" aria-label="Back to top">&lt;ali.emre.kaya/&gt;</a>
      <ul class="nav-links">${NAV.map(([id, l]) => `<li><a href="#${id}">${l}</a></li>`).join("")}</ul>
      <div class="nav-right">
        <button class="icon-btn" id="theme-btn" aria-label="Toggle theme"></button>
        <button class="icon-btn" id="menu-btn" aria-label="Menu">☰</button>
      </div>
    </div>`;
  setTheme(theme);
  $("#theme-btn").onclick = () => setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  $("#menu-btn").onclick = () => $(".nav-links").classList.toggle("open");
  $$(".nav-links a").forEach((a) => (a.onclick = () => $(".nav-links").classList.remove("open")));

  const head = (label, title) => `<div class="sec-head reveal"><div class="sec-label">${label}</div><h2 class="sec-title">${title}</h2></div>`;
  const pills = (arr) => `<div class="pills">${arr.map((t) => `<span class="pill">${esc(t)}</span>`).join("")}</div>`;

  /* ── Hero ──────────────────────────── */
  const P = D.personal;
  $("#hero").innerHTML = `
    <canvas></canvas>
    <div class="wrap hero-grid">
      <div class="reveal">
        ${cert ? `<a class="cert-chip" href="${cert.url}" target="_blank" rel="noopener"><span class="dot"></span>${esc(cert.issuer)} · ${esc(cert.name)}</a>` : ""}
        <div class="hello">Hi, I'm</div>
        <h1 class="hero-name"><span class="grad">${esc(P.name)}</span></h1>
        <div class="typed"><span id="typed"></span><span class="cursor"></span></div>
        <p class="tagline">${esc(P.tagline)}</p>
        <p class="loc">📍 ${esc(P.location)}</p>
        <p class="print-only print-contact">${esc(P.title)}<br>${esc(P.location)} · ${D.social.linkedin.replace("https://www.", "")} · ${D.social.github.replace("https://", "")}</p>
        <div class="ctas">
          <a class="btn primary" href="#experience">View experience</a>
          <button class="btn" type="button" data-print>${ICONS.download} Download CV</button>
          <div class="socials">
            <a class="icon-btn lg" href="${D.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
            <a class="icon-btn lg" href="${D.social.github}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>
          </div>
        </div>
      </div>
      <div class="avatar-wrap reveal"><div class="avatar">${P.avatar ? `<img src="${P.avatar}" alt="${esc(P.name)}">` : `<div class="mono">${esc(P.initials)}</div>`}</div></div>
    </div>`;

  /* ── About ─────────────────────────── */
  const A = D.about;
  $("#about").innerHTML = `
    <div class="wrap">
      ${head("01. about", "About me")}
      <div class="about-grid">
        <div class="about-text reveal">
          ${A.paragraphs.map((p) => `<p>${p}</p>`).join("")}
          <div class="stats">${stats.map((s) => `<div class="stat"><b class="grad">${s.value}</b><span>${s.label}</span></div>`).join("")}</div>
        </div>
        <div class="side reveal">
          <div class="card"><h3>Certifications</h3>${A.certifications.map((c) => `
            <div class="li${c.highlight ? " hl" : ""}"><b>${esc(c.name)}</b><span>${esc(c.issuer)} · ${esc(c.year)}</span>
            ${c.url ? `<br><a class="verify" href="${c.url}" target="_blank" rel="noopener">Verify credential ↗</a>` : ""}</div>`).join("")}
          </div>
          <div class="card"><h3>Education</h3>${A.education.map((e) => `<div class="li"><b>${esc(e.school)}</b><span>${esc(e.degree)} · ${esc(e.period)}</span></div>`).join("")}</div>
          <div class="card"><h3>Languages</h3>${A.languages.map((l) => `<div class="li"><b>${esc(l.name)}</b><span>${esc(l.level)}</span></div>`).join("")}</div>
        </div>
      </div>
    </div>`;

  /* ── Skills ────────────────────────── */
  $("#skills").innerHTML = `
    <div class="wrap">
      ${head("02. skills", "Tech stack")}
      <div class="skills-grid">${D.skills.map((g) => `
        <div class="card skill-card reveal"><h4><span>${g.icon}</span>${esc(g.group)}</h4>${pills(g.items)}</div>`).join("")}
      </div>
    </div>`;

  /* ── Experience ────────────────────── */
  $("#experience").innerHTML = `
    <div class="wrap">
      ${head("03. experience", "Where I've worked")}
      <div class="timeline">${D.experience.map((c) => `
        <article class="company reveal">
          <header class="company-head">
            <h3>${esc(c.company)}</h3>
            <span class="company-meta">${esc(c.period)} · ${esc(c.location)}</span>
          </header>
          ${c.roles.map((r) => `
            <div class="role">
              <div class="role-head">
                <div>
                  <div class="t-role">${esc(r.title)}</div>
                  ${r.project ? `<div class="t-project">${esc(r.project)}</div>` : ""}
                </div>
                <span class="t-period">${esc(r.period)}</span>
              </div>
              ${r.points.length ? `<ul>${r.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
            </div>`).join("")}
        </article>`).join("")}
      </div>
    </div>`;

  /* ── Projects ──────────────────────── */
  $("#projects").innerHTML = `
    <div class="wrap">
      ${head("04. projects", "Selected projects")}
      <div class="proj-grid">${D.projects.map((p) => `
        <div class="card proj reveal">
          <div class="proj-top"><span class="domain">${esc(p.domain)}</span><span class="period">${esc(p.period)}</span></div>
          <h4>${esc(p.title)}</h4>
          <div class="client">${esc(p.client)} · ${esc(p.role)}</div>
          <p>${esc(p.description)}</p>${pills(p.tags)}
        </div>`).join("")}
      </div>
    </div>`;

  /* ── Contact ───────────────────────── */
  $("#contact").innerHTML = `
    <div class="wrap contact-box reveal">
      <div class="sec-label">05. contact</div>
      <h2 class="sec-title">Let's build something</h2>
      <p>Open to conversations about backend architecture, cloud-native platforms and AI-native engineering. The fastest way to reach me is LinkedIn.</p>
      <div class="ctas">
        <a class="btn primary" href="${D.social.linkedin}" target="_blank" rel="noopener">${ICONS.linkedin} Message on LinkedIn</a>
        <button class="btn" type="button" data-print>${ICONS.download} Download CV</button>
        <a class="btn" href="${D.social.github}" target="_blank" rel="noopener">${ICONS.github} GitHub</a>
        ${cert ? `<a class="btn" href="${cert.url}" target="_blank" rel="noopener">${ICONS.badge} Claude certification</a>` : ""}
      </div>
    </div>`;

  $("#footer").innerHTML = `© ${new Date().getFullYear()} ${esc(P.name)} · Built with plain HTML, CSS & JS`;

  $$("[data-print]").forEach((b) => (b.onclick = () => {
    $$(".reveal").forEach((el) => el.classList.add("in"));
    print();
  }));

  /* ── Typing effect ─────────────────── */
  const typedEl = $("#typed");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) typedEl.textContent = P.roles[0];
  else {
    let ri = 0, ci = 0, del = false;
    const tick = () => {
      const word = P.roles[ri];
      ci += del ? -1 : 1;
      typedEl.textContent = word.slice(0, ci);
      let wait = del ? 40 : 80;
      if (!del && ci === word.length) { del = true; wait = 1600; }
      else if (del && ci === 0) { del = false; ri = (ri + 1) % P.roles.length; wait = 300; }
      setTimeout(tick, wait);
    };
    tick();
  }

  /* ── Scroll reveal + active nav ────── */
  const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.12 });
  $$(".reveal").forEach((el) => io.observe(el));
  const navIo = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) $$(".nav-links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("section[id]").forEach((s) => navIo.observe(s));

  /* ── Particles ─────────────────────── */
  const cv = $("#hero canvas");
  if (cv && !reduce) {
    const ctx = cv.getContext("2d");
    let w, h, pts;
    const init = () => {
      w = cv.width = cv.offsetWidth * devicePixelRatio;
      h = cv.height = cv.offsetHeight * devicePixelRatio;
      const n = Math.min(70, Math.floor((cv.offsetWidth * cv.offsetHeight) / 16000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 }));
    };
    const draw = () => {
      const rgb = getComputedStyle(root).getPropertyValue("--particle").trim();
      ctx.clearRect(0, 0, w, h);
      const max = 130 * devicePixelRatio;
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.fillStyle = `rgba(${rgb},0.55)`;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.6 * devicePixelRatio, 0, Math.PI * 2); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < max) { ctx.strokeStyle = `rgba(${rgb},${0.18 * (1 - d / max)})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
      });
      if (visible) requestAnimationFrame(draw);
    };
    let visible = true;
    new IntersectionObserver(([e]) => { const was = visible; visible = e.isIntersecting; if (visible && !was) draw(); }).observe(cv);
    init(); draw();
    addEventListener("resize", init);
  }
})();
