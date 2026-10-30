/* 页面功能。通常只需编辑 content.js，不必改本文件。 */
(() => {
  'use strict';
  const c = window.PORTFOLIO;
  if (!c) return;
  const mode = document.body.dataset.template;
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const esc = value => String(value ?? '').replace(/[&<>"']/g, x => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
  const url = value => {
    const path = String(value || "").trim();

    if (/^(https?:\/\/|mailto:)/i.test(path)) {
      return esc(path);
    }

    if (/^(?:\.\/)?assets\//i.test(path)) {
      return esc(path);
    }

    return "";
  };
  const themeKey = 'portfolio-theme-' + mode;
  const icons = {arrow:'↗', play:'▶', close:'×'};
  let previousFocus = null;
  let localCV = null;
  let toastTimer;
  const hero = {
    academic: {eyebrow:'PERSONAL PORTFOLIO / ACADEMIC & ENGINEERING', title:'Thoughtful ideas.<br><em>Practical engineering.</em>', aside:'A little curiosity.<br>A lot of building.'},
    robotics: {eyebrow:'ENGINEERING PORTFOLIO / HUMAN-CENTRED SYSTEMS', title:'Explore.<br>Build.<br><em>Make it work.</em>', aside:'From a question<br>to a working system.'},
    studio: {eyebrow:'SELECTED WORK / LEARNING IN PUBLIC', title:'Curiosity,<br><em>built into motion.</em>', aside:'Engineering with<br>a human perspective.'}
  }[mode];
  document.title = c.name + ' | Robotics & Engineering Portfolio';
  $('meta[name="description"]').content = c.bio;
  // 获取某个项目的图片；兼容原来的单图项目
  function getProjectImages(p) {
    if (Array.isArray(p.images) && p.images.length > 0) {
      return p.images;
    }

    return [{
      src: p.image,
      alt: p.imageAlt,
      caption: ""
    }];
  }

  // 生成项目详情中的轮播区域
  function renderProjectGallery(p) {
    const pictures = getProjectImages(p);
    const first = pictures[0];
    const hideControls = pictures.length < 2 ? "hidden" : "";

    return `
      <figure class="project-slideshow">
        <div class="slide-stage">
          <img
            class="dialog-project-image"
            src="${esc(first.src)}"
            alt="${esc(first.alt || p.title)}"
          >

          <button
            type="button"
            class="slide-prev"
            aria-label="Previous image"
            ${hideControls}
          >‹</button>

          <button
            type="button"
            class="slide-next"
            aria-label="Next image"
            ${hideControls}
          >›</button>
        </div>

        <figcaption class="slide-caption">
          ${esc(first.caption || "")}
        </figcaption>

        <div class="slide-bottom">
          <span class="slide-counter" ${hideControls}>
            1 / ${pictures.length}
          </span>

          <a
            class="slide-full"
            href="${esc(first.src)}"
            target="_blank"
            rel="noopener"
          >View full-size image ↗</a>
        </div>
      </figure>
    `;
  }

  // 绑定左右切换，同时更新图片、说明、页码和原图链接
  function setupProjectGallery(p) {
    const pictures = getProjectImages(p);
    const gallery = document.querySelector(
      "#project-dialog .project-slideshow"
    );

    if (!gallery) return;

    let index = 0;

    const image = gallery.querySelector(".dialog-project-image");
    const caption = gallery.querySelector(".slide-caption");
    const counter = gallery.querySelector(".slide-counter");
    const fullImage = gallery.querySelector(".slide-full");

    function changePicture(step) {
      index = (index + step + pictures.length) % pictures.length;

      const current = pictures[index];

      image.src = current.src;
      image.alt = current.alt || p.title;
      caption.textContent = current.caption || "";
      counter.textContent = `${index + 1} / ${pictures.length}`;
      fullImage.href = current.src;
    }

    gallery.querySelector(".slide-prev")
      .addEventListener("click", () => changePicture(-1));

    gallery.querySelector(".slide-next")
      .addEventListener("click", () => changePicture(1));

    gallery.addEventListener("keydown", event => {
      if (pictures.length < 2) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        changePicture(-1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        changePicture(1);
      }
    });
  }
  const cards = c.projects.map(p => `<article class="project" data-category="${esc(p.category)}">
    <button class="project-image" data-project="${esc(p.id)}" aria-label="Explore ${esc(p.title)}"><img src="${esc(p.image)}" alt="${esc(p.imageAlt)}" loading="lazy"><span class="image-open">${icons.arrow}</span></button>
    <div class="project-copy"><div class="project-meta"><span>${esc(p.number)} / ${esc(p.category)}</span><span>${icons.arrow}</span></div><p class="sample-label">${esc(p.subtitle)}</p><h3><button class="text-button" data-project="${esc(p.id)}">${esc(p.title)}</button></h3><p>${esc(p.summary)}</p><div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div><button class="detail-link" data-project="${esc(p.id)}">Explore project <span>↗</span></button></div></article>`).join('');
  $('#app').innerHTML = `
  <a href="#main" class="skip-link">Skip to content</a>
  ${c.showDemoBanner ? '<div class="demo-banner">TEMPLATE PREVIEW <span>Sample content & illustrations — replace before submitting.</span></div>' : ''}
  <header class="site-header"><div class="nav-wrap"><a class="brand" href="#home"><span class="monogram">${esc(c.initials)}</span><span>${esc(c.name)}<small>ENGINEERING PORTFOLIO</small></span></a><button class="menu-toggle" aria-expanded="false" aria-controls="navigation">Menu <span>+</span></button><nav id="navigation" aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#education">Education</a><a href="#contact">Contact</a><button class="nav-cv" data-cv>View CV ↗</button></nav><button class="theme-toggle" aria-label="Switch colour theme" aria-pressed="false">◐</button></div></header>
  <main id="main"><section class="hero wrap" id="home"><div class="hero-copy"><p class="eyebrow">${hero.eyebrow}</p><p class="hero-name">${esc(c.name)} <span>/ ${esc(c.location)}</span></p><h1>${hero.title}</h1><p class="hero-bio">${esc(c.bio)}</p><div class="hero-actions"><a class="button primary" href="#work">Discover my work <span>↗</span></a><button class="button secondary" data-cv>View CV <span>↗</span></button></div><p class="hero-note">${esc(c.role)}</p></div>
  <div class="hero-art"><div class="art-topline"><span>EXPERIMENT / 001</span><span class="status-dot">PORTFOLIO STUDY</span></div><img class="hero-visual" src="assets/hero.svg" alt="Original illustrative rover route map"><div class="art-caption"><span>${hero.aside}</span><span class="art-arrow">↗</span></div><div class="orbit" aria-hidden="true"></div></div><div class="hero-bottom"><span>SELECTED PROJECTS · EDUCATION · RESEARCH INTERESTS</span><a href="#work">Scroll to explore ↓</a></div></section>
  <section class="work-section wrap section" id="work"><div class="section-heading"><div><p class="eyebrow">01 / SELECTED WORK</p><h2>Learning by <em>making.</em></h2></div><p>A closer look at the questions,<br>the process and the evidence.</p></div><div class="filters" role="group" aria-label="Filter projects"><button class="active" data-filter="All" aria-pressed="true">All projects</button>${[...new Set(c.projects.map(p=>p.category))].map(x=>`<button data-filter="${esc(x)}" aria-pressed="false">${esc(x)}</button>`).join('')}</div><div class="projects-grid">${cards}</div><p id="filter-status" class="sr-only" aria-live="polite"></p></section>
  <section class="video-section section" id="demonstration"><div class="wrap video-layout"><div class="video-copy"><p class="eyebrow">02 / WATCH THE PROCESS</p><h2>${esc(c.video.title)}</h2><p>${esc(c.video.caption)}</p><span class="micro-label">PLAY · PAUSE · EXPLORE</span></div><figure><video controls playsinline preload="metadata" poster="${esc(c.video.poster)}"><source src="${esc(c.video.file)}" type="video/mp4">${c.video.captionsFile ? `<track kind="captions" src="${esc(c.video.captionsFile)}" srclang="en" label="English" default>`:''}<p>Your browser cannot play this video.</p></video><figcaption>${esc(c.video.credit)}</figcaption></figure></div></section>
  <section class="about-section wrap section" id="about"><div class="about-image"><button class="portrait-button" aria-label="Expand portrait"><img src="${esc(c.portrait)}" alt="${esc(c.portraitAlt)}" loading="lazy"><span>GET TO KNOW ME ↗</span></button></div><div class="about-copy"><p class="eyebrow">03 / A LITTLE ABOUT ME</p><h2>Driven by questions.<br><em>Grounded in practice.</em></h2><p>${esc(c.bio)}</p><h3>Where I want to go</h3><p>${esc(c.interests)}</p><div class="skills-list">${c.skills.map(g=>`<div><h4>${esc(g.group)}</h4><div class="tags">${g.items.map(x=>`<span>${esc(x)}</span>`).join('')}</div></div>`).join('')}</div></div></section>
  <section class="education-section wrap section" id="education"><div class="section-heading"><div><p class="eyebrow">04 / ACADEMIC PATH</p><h2>A foundation for <em>what’s next.</em></h2></div></div><div class="education-list">${c.education.map(e=>`<article><p class="education-date">${esc(e.dates)}</p><div><h3>${esc(e.degree)}</h3><p class="school">${esc(e.school)}</p><p>${esc(e.detail)}</p></div><span class="education-icon" aria-hidden="true">↗</span></article>`).join('')}</div></section>
  <section class="contact-section section" id="contact"><div class="wrap"><p class="eyebrow">05 / KEEP THE CONVERSATION GOING</p><h2>Let’s build<br><em>something meaningful.</em></h2><p>For opportunities, collaboration, or a thoughtful conversation.</p><div class="contact-links"><button class="button primary" data-external="email">Say hello ↗</button><button class="contact-link" data-external="github">GitHub ↗</button><button class="contact-link" data-external="linkedin">LinkedIn ↗</button><button class="contact-link" data-cv>Download / view CV ↗</button></div></div></section></main>
  <footer class="wrap"><span>© ${new Date().getFullYear()} ${esc(c.name)}</span><details><summary>Credits & acknowledgements</summary><p>${esc(c.credits)}</p></details><a href="#home">Back to top ↑</a></footer>
  <dialog id="project-dialog" aria-labelledby="project-dialog-title"><button class="dialog-close" aria-label="Close project">×</button><div id="project-dialog-content"></div></dialog>
  <dialog id="cv-dialog" aria-labelledby="cv-title"><button class="dialog-close" aria-label="Close CV">×</button><div class="cv-top"><p class="eyebrow">CURRICULUM VITAE</p><h2 id="cv-title">${esc(c.name)} / CV</h2><p id="cv-explanation"></p><div class="cv-actions"><label class="button secondary file-label">Choose your PDF<input id="cv-file" type="file" accept="application/pdf,.pdf"></label><a id="cv-download" class="button primary" hidden>Download PDF ↗</a><a id="cv-open" class="button secondary" target="_blank" rel="noopener" hidden>Open in a new tab ↗</a></div><p id="cv-status" role="status"></p></div><div id="cv-frame-wrap" hidden><iframe id="cv-frame" title="CV PDF preview"></iframe></div><div class="cv-empty"><span>PDF</span><h3>Your experience, in one place.</h3><p>Choose your existing CV to preview it privately in this browser.<br>To publish it, copy it to <code>assets/cv.pdf</code> and set <code>cv.enabled: true</code> in <code>content.js</code>.</p><p>本地选择仅用于预览，不上传文件；正式上线前仍需把 PDF 放入 assets。</p></div></dialog>
  <dialog id="image-dialog" aria-label="Expanded portrait"><button class="dialog-close" aria-label="Close image">×</button><img src="${esc(c.portrait)}" alt="${esc(c.portraitAlt)}"></dialog><div class="toast" role="status" aria-live="polite" hidden></div>`;
  function toast(text) { const t=$('.toast'); t.textContent=text;t.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.hidden=true,6000); }
  function openDialog(d) {previousFocus=document.activeElement;d.showModal();document.body.classList.add('dialog-open');}
  $$('dialog').forEach(d=>{d.addEventListener('close',()=>{document.body.classList.remove('dialog-open');previousFocus?.focus();});d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});$('.dialog-close',d).addEventListener('click',()=>d.close());});
  $$('[data-project]').forEach(b=>b.addEventListener('click',()=>{
    const p=c.projects.find(p=>p.id===b.dataset.project); if(!p)return;
    $('#project-dialog-content').innerHTML=`${renderProjectGallery(p)}<div class="dialog-copy"><p class="eyebrow">${esc(p.number)} / ${esc(p.category)}</p><p class="sample-label">${esc(p.subtitle)}</p><h2 id="project-dialog-title">${esc(p.title)}</h2><p>${esc(p.summary)}</p><dl>${[['My contribution',p.role],['Approach',p.method],['Outcome / evidence',p.outcome],['Reflection',p.reflection]].map(([a,b])=>`<div><dt>${a}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl>${url(p.evidenceUrl)?`<a class="button primary" href="${url(p.evidenceUrl)}" target="_blank" rel="noopener">${esc(p.evidenceLabel)} ↗</a>`:'<p class="setup-note">Add a real evidence URL in content.js to display a project link here.</p>'}${url(p.codeUrl) ? `
  <a
    class="button secondary"
    href="${url(p.codeUrl)}"
    target="_blank"
    rel="noopener"
  >View source code on GitHub ↗</a>
` : ''}

<small>${esc(p.credit)}</small></div>`;
    setupProjectGallery(p);
    openDialog($('#project-dialog'));
  }));
  $$('[data-filter]').forEach(b=>b.addEventListener('click',()=>{const category=b.dataset.filter;$$('[data-filter]').forEach(x=>{const on=x===b;x.classList.toggle('active',on);x.setAttribute('aria-pressed',String(on));});let n=0;$$('.project').forEach(p=>{p.hidden=category!=='All'&&p.dataset.category!==category;if(!p.hidden)n++;});$('#filter-status').textContent=`Showing ${n} projects`; }));
  const nav=$('#navigation'),menu=$('.menu-toggle');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});$$('a',nav).forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');}));
  function setTheme(on){document.body.classList.toggle('alternate-theme',on);$('.theme-toggle').setAttribute('aria-pressed',String(on));}
  try{setTheme(localStorage.getItem(themeKey)==='alternate');}catch(e){}
  $('.theme-toggle').addEventListener('click',()=>{const on=!document.body.classList.contains('alternate-theme');setTheme(on);try{localStorage.setItem(themeKey,on?'alternate':'default');}catch(e){}});
  $$('[data-external]').forEach(b=>b.addEventListener('click',()=>{const field=b.dataset.external;const value=c[field];if(!value){toast(`Add your ${field} in content.js first. 请先在 content.js 填入你的真实信息。`);return;}if(field==='email'){window.location.href='mailto:'+value;}else if(/^https?:\/\//i.test(value)){window.open(value,'_blank','noopener');}else{toast('Please use a complete https:// URL in content.js.');}}));
  function showCV(src,filename,isLocal){$('#cv-frame').src=src;$('#cv-frame-wrap').hidden=false;$('.cv-empty').hidden=true;const a=$('#cv-download');a.href=src;a.download=filename;a.hidden=false;$('#cv-open').href=src;$('#cv-open').hidden=false;$('#cv-explanation').textContent=isLocal?'Local preview only. This PDF has not been uploaded or saved into the website.':'Preview or download the published CV. If your browser cannot display PDFs, open it in a new tab.';}
  $$('[data-cv]').forEach(b=>b.addEventListener('click',()=>{if(localCV)showCV(localCV,$('#cv-file').files[0]?.name||'CV.pdf',true);else if(c.cv.enabled)showCV(c.cv.file,c.cv.downloadName,false);else $('#cv-explanation').textContent='Connect your existing PDF — no need to recreate your CV.';openDialog($('#cv-dialog'));}));
  $('#cv-file').addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;if(!/\.pdf$/i.test(f.name)){ $('#cv-status').textContent='Please choose a PDF file.';return;}if(localCV)URL.revokeObjectURL(localCV);localCV=URL.createObjectURL(f);showCV(localCV,f.name,true);$('#cv-status').textContent='Local PDF selected: '+f.name;});
  $('.portrait-button').addEventListener('click',()=>openDialog($('#image-dialog')));
})();
