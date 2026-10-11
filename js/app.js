/* Itmam Expo - behaviour, animations and the AR / FR / EN translations. */
var TAMIMA = "assets/tamima.webp";
var AV = { welcome: "assets/pose-welcome.webp", tech: "assets/pose-tech.webp", ambition: "assets/pose-ambition.webp", place: "assets/pose-place.webp" };

(function () {
'use strict';

/* ---------- translations ---------- */
var D = {
ar: {
  doc_title: 'معرض اتمام',
  nav_about: 'عن المعرض', nav_tamima: 'تميمة', nav_join: 'لماذا تشارك', nav_place: 'الموقع', cta_register: 'سجّل حضورك',
  brand_name: 'معرض اتمام', brand_sub: 'الطبعة الأولى · بني عباس',
  chip_date: '31 ديسمبر 2026 – 01 جانفي 2027', chip_place: 'بني عباس، الجزائر',
  h1: 'معرض اتمام', h1_sub: 'للتجارة والأعمال والتكنولوجيا', edition: 'الطبعة الأولى',
  lead: 'يومان للتجار وأصحاب الأعمال والمبتكرين في بني عباس، بين أصالة الواحة وروح التكنولوجيا.',
  cd_d: 'أيام', cd_h: 'ساعات', cd_m: 'دقائق', cd_s: 'ثوانٍ',
  cd_before: 'قبل افتتاح الطبعة الأولى', cd_live: 'الطبعة الأولى جارية الآن', cd_after: 'انتهت الطبعة الأولى، شكرًا لكل من حضر',
  cta2: 'تعرّف على المعرض',
  orb1: 'تجارة', orb2: 'أعمال', orb3: 'رقمية',
  b_welcome: 'أهلًا بك في معرض اتمام!', b_date: 'نلتقي يوم 31 ديسمبر!', b_tech: 'التكنولوجيا تفتح لنا الآفاق.',
  b_ambition: 'من بني عباس… نحو مستقبل رقمي.', b_place: 'بني عباس تجمعنا.',
  tm_alt: 'تميمة المعرض «العمامة الذكية»: طفل بعمامة زرقاء وسماعة مضيئة وجهاز لوحي يرفع إبهامه', tm_tap: 'اضغط على تميمة لتلقي التحية',
  rb1: 'تجارة', rb2: 'أعمال', rb3: 'رقمية', rb4: 'بني عباس', rb6: '\u206650+\u2069 عارض', rb7: '\u206630,000+\u2069 زائر',
  st_ex: 'عارض', st_vis: 'زائر متوقع', st_days: 'يومان من اللقاءات', st_ed: 'الطبعة الأولى',
  about_eyebrow: 'عن المعرض', about_title: 'مكان واحد يجمع التجارة والأعمال والتكنولوجيا',
  about_p1: 'معرض اتمام للتجارة والأعمال والتكنولوجيا تنطلق طبعته الأولى في بني عباس يوم 31 ديسمبر 2026 وتستمر حتى 01 جانفي 2027.',
  about_p2: 'يلتقي فيه أكثر من 50 عارضًا من التجار والشركات وأصحاب المشاريع مع جمهور يُتوقع أن يتجاوز 30 ألف زائر، ويقرّب الحلول الرقمية من النشاط التجاري اليومي.',
  dc_title: 'الموعد', day1_m: 'ديسمبر 2026', day1_w: 'الخميس', day2_m: 'جانفي 2027', day2_w: 'الجمعة',
  dc_note: 'تُعلن مواعيد الاستقبال والبرنامج التفصيلي قريبًا.',
  p1_t: 'التجارة', p1_d: 'عارضون من قطاعات مختلفة يقدّمون منتجاتهم وخدماتهم للجمهور مباشرة.',
  p2_t: 'الأعمال', p2_d: 'فرصة للقاء الشركاء والموردين وبناء علاقات مهنية جديدة داخل الجزائر وخارجها.',
  p3_t: 'التكنولوجيا', p3_d: 'حلول رقمية وأدوات حديثة تساعد المؤسسات والتجار على النمو.',
  pl_eyebrow: 'المكان', pl_name: 'بني عباس، الجزائر', pl_p: 'تنطلق الطبعة الأولى في الجنوب الغربي الجزائري، بين الواحة والكثبان.', pl_btn: 'افتح الخريطة',
  ts_eyebrow: 'تميمة المعرض', ts_title: 'تعرّف على تميمة',
  ts_p: 'العمامة الذكية: رمز الأصالة بروح التكنولوجيا. العمامة الزرقاء والثوب المزيّن بالنخيل والكثبان يحملان هوية الواحة، وخطوط الدوائر الإلكترونية والسماعة المضيئة والجهاز اللوحي تحمل روح الرقمنة.',
  ts_hint: 'اضغط على أحد الأوضاع لترى كيف تتفاعل تميمة.',
  ps_welcome: 'الترحيب', ps_tech: 'التكنولوجيا', ps_ambition: 'الطموح', ps_place: 'بني عباس',
  sw1: 'أزرق ملكي', sw2: 'أزرق سماوي', sw3: 'ذهبي الكثبان', sw4: 'كريمي الرمال',
  jn_eyebrow: 'لماذا تشارك', jn_title: 'للزائر وللعارض', tab_v: 'زائر', tab_e: 'عارض',
  v1: 'تتعرف على منتجات وخدمات أكثر من 50 عارضًا في مكان واحد.', v2: 'تكتشف حلولًا رقمية تخدم تجارتك أو مشروعك.', v3: 'تلتقي مباشرة بأصحاب المؤسسات والمشاريع.',
  e1: 'تصل إلى جمهور يُتوقع أن يتجاوز 30 ألف زائر خلال يومين.', e2: 'تعرض منتجك وجهًا لوجه أمام عملاء محتملين.', e3: 'تبني شراكات جديدة منذ الطبعة الأولى.',
  v_cap: 'عارض لتكتشفهم', e_cap: 'زائر متوقع خلال يومين',
  rg_eyebrow: 'التسجيل', rg_title: 'كن جزءًا من الطبعة الأولى', rg_p: 'اترك بياناتك واختر صفتك، زائرًا أو عارضًا، وسنتواصل معك بتفاصيل المشاركة.',
  hi: 'أهلًا بك!', f_name: 'الاسم الكامل', f_contact: 'رقم الهاتف أو البريد الإلكتروني', f_role: 'أرغب في الحضور بصفتي',
  r_visitor: 'زائر', r_exhibitor: 'عارض', f_submit: 'إرسال الطلب',
  msg_empty: 'أدخل الاسم ووسيلة التواصل ثم أعد المحاولة.', msg_closed: 'باب التسجيل لم يُفتح بعد. تابعونا لمعرفة موعد فتحه.',
  msg_sending: 'جارٍ الإرسال...', msg_ok: 'تم استلام طلبك. سنتواصل معك قريبًا.', msg_fail: 'تعذّر إرسال الطلب. حاول مرة أخرى بعد قليل.',
  ft_name: 'معرض اتمام للتجارة والأعمال والتكنولوجيا', ft_line: 'الطبعة الأولى · بني عباس، الجزائر · 31 ديسمبر 2026 – 01 جانفي 2027'
},
fr: {
  doc_title: 'TMM Expo',
  nav_about: 'À propos', nav_tamima: 'Tamima', nav_join: 'Pourquoi venir', nav_place: 'Lieu', cta_register: "S'inscrire",
  brand_name: 'TMM Expo', brand_sub: '1re édition · Béni Abbès',
  chip_date: '31 décembre 2026 – 1er janvier 2027', chip_place: 'Béni Abbès, Algérie',
  h1: 'TMM Expo', h1_sub: 'Salon du commerce, des affaires et de la technologie', edition: '1re édition',
  lead: "Deux jours pour les commerçants, entrepreneurs et innovateurs, à Béni Abbès, entre l'authenticité de l'oasis et l'esprit de la technologie.",
  cd_d: 'jours', cd_h: 'heures', cd_m: 'minutes', cd_s: 'secondes',
  cd_before: "avant l'ouverture de la 1re édition", cd_live: 'La 1re édition est en cours', cd_after: 'La 1re édition est terminée, merci à tous',
  cta2: 'Découvrir le salon',
  orb1: 'Commerce', orb2: 'Business', orb3: 'Digital',
  b_welcome: 'Bienvenue à TMM Expo !', b_date: 'Rendez-vous le 31 décembre !', b_tech: 'La technologie nous ouvre des horizons.',
  b_ambition: 'De Béni Abbès… vers un avenir numérique.', b_place: 'Béni Abbès nous rassemble.',
  tm_alt: 'Tamima, la mascotte du salon : un enfant au turban bleu, casque lumineux et tablette, pouce levé', tm_tap: 'Touchez Tamima pour la saluer',
  rb1: 'Commerce', rb2: 'Affaires', rb3: 'Digital', rb4: 'Béni Abbès', rb6: '50+ exposants', rb7: '30 000+ visiteurs',
  st_ex: 'exposants', st_vis: 'visiteurs attendus', st_days: 'jours de rencontres', st_ed: '1re édition',
  about_eyebrow: 'À propos', about_title: 'Un seul lieu pour le commerce, les affaires et la technologie',
  about_p1: 'TMM Expo, le salon du commerce, des affaires et de la technologie, lance sa première édition à Béni Abbès le 31 décembre 2026, jusqu\'au 1er janvier 2027.',
  about_p2: 'Plus de 50 exposants, commerçants, entreprises et porteurs de projets, y rencontrent un public attendu à plus de 30 000 visiteurs. Le salon rapproche les solutions numériques de l\'activité commerciale quotidienne.',
  dc_title: 'Dates', day1_m: 'décembre 2026', day1_w: 'jeudi', day2_m: 'janvier 2027', day2_w: 'vendredi',
  dc_note: 'Les horaires d\'accueil et le programme détaillé seront annoncés prochainement.',
  p1_t: 'Commerce', p1_d: 'Des exposants de secteurs variés présentent directement leurs produits et services au public.',
  p2_t: 'Affaires', p2_d: 'L\'occasion de rencontrer partenaires et fournisseurs et de nouer de nouvelles relations professionnelles, en Algérie et au-delà.',
  p3_t: 'Technologie', p3_d: 'Des solutions numériques et des outils modernes pour aider les entreprises et les commerçants à se développer.',
  pl_eyebrow: 'Lieu', pl_name: 'Béni Abbès, Algérie', pl_p: 'La première édition se tient dans le sud-ouest algérien, entre oasis et dunes.', pl_btn: 'Ouvrir la carte',
  ts_eyebrow: 'La mascotte', ts_title: 'Rencontrez Tamima',
  ts_p: 'Tamima, surnommée « le Turban Intelligent », associe l\'authenticité à l\'esprit de la technologie. Son turban bleu et sa tenue ornée de palmiers et de dunes portent l\'identité de l\'oasis, tandis que les circuits électroniques, le casque lumineux et la tablette portent l\'esprit du numérique.',
  ts_hint: 'Touchez une pose pour voir réagir Tamima.',
  ps_welcome: 'Accueil', ps_tech: 'Technologie', ps_ambition: 'Ambition', ps_place: 'Béni Abbès',
  sw1: 'Bleu royal', sw2: 'Bleu ciel', sw3: 'Or des dunes', sw4: 'Crème des sables',
  jn_eyebrow: 'Pourquoi venir', jn_title: 'Visiteur ou exposant', tab_v: 'Visiteur', tab_e: 'Exposant',
  v1: 'Découvrez les produits et services de plus de 50 exposants en un seul lieu.', v2: 'Trouvez des solutions numériques utiles à votre commerce ou à votre projet.', v3: 'Rencontrez directement les responsables d\'entreprises et de projets.',
  e1: 'Touchez un public attendu à plus de 30 000 visiteurs en deux jours.', e2: 'Présentez votre offre en face à face à des clients potentiels.', e3: 'Nouez de nouveaux partenariats dès la première édition.',
  v_cap: 'exposants à découvrir', e_cap: 'visiteurs attendus en deux jours',
  rg_eyebrow: 'Inscription', rg_title: 'Faites partie de la 1re édition', rg_p: 'Laissez vos coordonnées et choisissez votre profil, visiteur ou exposant. Nous vous contacterons avec les détails de participation.',
  hi: 'Coucou !', f_name: 'Nom complet', f_contact: 'Téléphone ou e-mail', f_role: 'Je viens en tant que',
  r_visitor: 'Visiteur', r_exhibitor: 'Exposant', f_submit: 'Envoyer ma demande',
  msg_empty: 'Renseignez votre nom et un moyen de contact, puis réessayez.', msg_closed: 'Les inscriptions ne sont pas encore ouvertes. Suivez-nous pour connaître la date d\'ouverture.',
  msg_sending: 'Envoi en cours...', msg_ok: 'Votre demande a bien été reçue. Nous vous contacterons bientôt.', msg_fail: 'L\'envoi a échoué. Réessayez dans un instant.',
  ft_name: 'TMM Expo, salon du commerce, des affaires et de la technologie', ft_line: '1re édition · Béni Abbès, Algérie · 31 décembre 2026 – 1er janvier 2027'
},
en: {
  doc_title: 'TMM Expo',
  nav_about: 'About', nav_tamima: 'Tamima', nav_join: 'Why join', nav_place: 'Location', cta_register: 'Register',
  brand_name: 'TMM Expo', brand_sub: '1st edition · Béni Abbès',
  chip_date: '31 December 2026 – 1 January 2027', chip_place: 'Béni Abbès, Algeria',
  h1: 'TMM Expo', h1_sub: 'Trade, Business & Technology Expo', edition: '1st edition',
  lead: 'Two days for traders, business owners and innovators in Béni Abbès, where oasis heritage meets technology.',
  cd_d: 'days', cd_h: 'hours', cd_m: 'minutes', cd_s: 'seconds',
  cd_before: 'until the 1st edition opens', cd_live: 'The 1st edition is on now', cd_after: 'The 1st edition has ended. Thank you to everyone who came.',
  cta2: 'Discover the expo',
  orb1: 'Commerce', orb2: 'Business', orb3: 'Digital',
  b_welcome: 'Welcome to TMM Expo!', b_date: 'See you on December 31!', b_tech: 'Technology opens up new horizons.',
  b_ambition: 'From Béni Abbès… toward a digital future.', b_place: 'Béni Abbès brings us together.',
  tm_alt: 'Tamima, the expo mascot: a child in a blue turban with glowing headphones and a tablet, giving a thumbs up', tm_tap: 'Tap Tamima to say hi',
  rb1: 'Commerce', rb2: 'Business', rb3: 'Digital', rb4: 'Béni Abbès', rb6: '50+ exhibitors', rb7: '30,000+ visitors',
  st_ex: 'exhibitors', st_vis: 'expected visitors', st_days: 'days of meetings', st_ed: '1st edition',
  about_eyebrow: 'About', about_title: 'One place for trade, business and technology',
  about_p1: 'TMM Expo, the trade, business and technology expo, launches its first edition in Béni Abbès on 31 December 2026 and runs until 1 January 2027.',
  about_p2: 'More than 50 exhibitors, from traders and companies to project founders, meet an audience expected to exceed 30,000 visitors. The expo brings digital solutions closer to everyday business.',
  dc_title: 'Dates', day1_m: 'December 2026', day1_w: 'Thursday', day2_m: 'January 2027', day2_w: 'Friday',
  dc_note: 'Opening hours and the detailed programme will be announced soon.',
  p1_t: 'Trade', p1_d: 'Exhibitors from many sectors present their products and services directly to the public.',
  p2_t: 'Business', p2_d: 'A chance to meet partners and suppliers and build new professional relationships, in Algeria and beyond.',
  p3_t: 'Technology', p3_d: 'Digital solutions and modern tools that help companies and traders grow.',
  pl_eyebrow: 'Location', pl_name: 'Béni Abbès, Algeria', pl_p: 'The first edition takes place in south-western Algeria, between oasis and dunes.', pl_btn: 'Open map',
  ts_eyebrow: 'The mascot', ts_title: 'Meet Tamima',
  ts_p: 'Tamima, nicknamed "The Smart Turban", pairs heritage with a tech spirit. The blue turban and the robe decorated with palms and dunes carry the identity of the oasis, while the circuit lines, glowing headphones and tablet carry the digital spirit.',
  ts_hint: 'Tap a pose to see how Tamima reacts.',
  ps_welcome: 'Welcome', ps_tech: 'Technology', ps_ambition: 'Ambition', ps_place: 'Béni Abbès',
  sw1: 'Royal blue', sw2: 'Sky blue', sw3: 'Dune gold', sw4: 'Sand cream',
  jn_eyebrow: 'Why join', jn_title: 'For visitors and exhibitors', tab_v: 'Visitor', tab_e: 'Exhibitor',
  v1: 'Discover the products and services of more than 50 exhibitors in one place.', v2: 'Find digital solutions that serve your business or project.', v3: 'Meet company and project leaders face to face.',
  e1: 'Reach an audience expected to exceed 30,000 visitors in two days.', e2: 'Present your offer in person to potential customers.', e3: 'Build new partnerships from the very first edition.',
  v_cap: 'exhibitors to discover', e_cap: 'expected visitors in two days',
  rg_eyebrow: 'Registration', rg_title: 'Be part of the first edition', rg_p: 'Leave your details and choose your role, visitor or exhibitor. We will contact you with the participation details.',
  hi: 'Hi there!', f_name: 'Full name', f_contact: 'Phone or email', f_role: 'I am attending as',
  r_visitor: 'Visitor', r_exhibitor: 'Exhibitor', f_submit: 'Send request',
  msg_empty: 'Enter your name and a way to reach you, then try again.', msg_closed: 'Registration has not opened yet. Follow us to hear when it does.',
  msg_sending: 'Sending...', msg_ok: 'We received your request and will contact you soon.', msg_fail: 'The request could not be sent. Please try again in a moment.',
  ft_name: 'TMM Expo, the trade, business and technology expo', ft_line: '1st edition · Béni Abbès, Algeria · 31 December 2026 – 1 January 2027'
}
};
var LANGS = { ar: { dir: 'rtl', loc: 'en-US' }, fr: { dir: 'ltr', loc: 'fr-FR' }, en: { dir: 'ltr', loc: 'en-US' } };

var lang = 'ar';
try { var saved = localStorage.getItem('itmam-lang'); if (saved && D[saved]) lang = saved; } catch (e) {}
function t(k) { return (D[lang] && D[lang][k]) || D.en[k] || ''; }
var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
var fine = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches;
function $(s, r) { return (r || document).querySelector(s); }
function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

/* ---------- Tamima stages ---------- */
var tpl = document.getElementById('tpl-stage');
var stages = [];
var POSE_ACT = { welcome: 'wave', tech: 'tech', ambition: 'jump', place: 'place' };
var POSE_ORDER = ['welcome', 'tech', 'ambition', 'place'];

function Stage(host, kind) {
  host.appendChild(tpl.content.cloneNode(true));
  this.kind = kind; this.host = host; this.el = $('.stage', host);
  this.bubble = $('.bubble', host); this.bt = $('.bubble-t', host);
  this.btn = $('.jumper', host); this.key = 'welcome'; this.actT = null;
}
Stage.prototype.text = function () { this.bt.textContent = t('b_' + this.key); };
Stage.prototype.say = function (key, quiet) {
  this.key = key; this.text();
  if (quiet || reduced) return;
  this.bubble.classList.remove('pop'); void this.bubble.offsetWidth; this.bubble.classList.add('pop');
};
Stage.prototype.act = function (name) {
  var el = this.el, self = this;
  el.setAttribute('data-act', ''); void el.offsetWidth; el.setAttribute('data-act', name);
  clearTimeout(this.actT);
  this.actT = setTimeout(function () { el.setAttribute('data-act', ''); }, name === 'place' ? 3800 : 1500);
  var colors = name === 'tech' ? ['#4cc9ff', '#8cc8ff', '#ffffff'] : name === 'jump' ? ['#e0aa62', '#4cc9ff', '#ffffff'] : ['#e0aa62', '#ffe3b8'];
  this.burst(name === 'tech' ? 14 : 10, colors);
};
Stage.prototype.burst = function (n, colors) {
  if (reduced) return;
  for (var i = 0; i < n; i++) {
    var s = document.createElement('i'); s.className = 'spark';
    s.style.background = colors[i % colors.length]; s.style.left = '50%'; s.style.top = '42%';
    this.el.appendChild(s);
    var a = Math.random() * Math.PI * 2, d = 70 + Math.random() * 120;
    var an = s.animate([
      { transform: 'translate(-50%,-50%) rotate(45deg) scale(1)', opacity: 1 },
      { transform: 'translate(calc(-50% + ' + (Math.cos(a) * d).toFixed(0) + 'px), calc(-50% + ' + (Math.sin(a) * d - 40).toFixed(0) + 'px)) rotate(200deg) scale(.2)', opacity: 0 }
    ], { duration: 900 + Math.random() * 500, easing: 'cubic-bezier(.2,.7,.3,1)' });
    an.onfinish = (function (node) { return function () { node.remove(); }; })(s);
  }
};
Stage.prototype.label = function () {
  this.btn.setAttribute('aria-label', t('tm_alt') + '. ' + t('tm_tap'));
};

var heroStage = new Stage($('[data-stage="hero"]'), 'hero');
var playStage = new Stage($('[data-stage="play"]'), 'play');
stages.push(heroStage, playStage);
playStage.say('welcome', true);
heroStage.say('welcome', true);

function setImages() {
  $$('[data-tamima]').forEach(function (i) { i.src = TAMIMA; });
  $$('[data-av]').forEach(function (i) { i.src = AV[i.getAttribute('data-av')]; });
}
setImages();

/* pointer parallax */
function bindParallax(section, stage) {
  if (!fine || reduced) return;
  section.addEventListener('pointermove', function (e) {
    var r = stage.el.getBoundingClientRect();
    var x = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2);
    var y = (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2);
    x = Math.max(-1, Math.min(1, x)); y = Math.max(-1, Math.min(1, y));
    stage.el.style.setProperty('--px', x.toFixed(3)); stage.el.style.setProperty('--py', y.toFixed(3));
  });
  section.addEventListener('pointerleave', function () { stage.el.style.setProperty('--px', 0); stage.el.style.setProperty('--py', 0); });
}
bindParallax($('#hero'), heroStage);
bindParallax($('#tamima'), playStage);

/* hero: tap = next pose; idle = rotating speech bubble */
var heroKeys = ['welcome', 'date', 'tech', 'ambition', 'place'], heroIdx = 0, heroIdle = null;
function heroNext(withAct) {
  heroIdx = (heroIdx + 1) % heroKeys.length;
  var k = heroKeys[heroIdx];
  heroStage.say(k);
  if (withAct) heroStage.act(k === 'date' ? 'wave' : POSE_ACT[k]);
  else if (k === 'welcome' || k === 'date') heroStage.act('wave');
}
function startIdle() { clearInterval(heroIdle); heroIdle = setInterval(function () { if (!document.hidden) heroNext(false); }, 5200); }
heroStage.btn.addEventListener('click', function () { heroNext(true); startIdle(); });
startIdle();

/* play section */
var poseBtns = $$('.pose');
function setPose(name) {
  poseBtns.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-pose') === name ? 'true' : 'false'); });
  playStage.say(name); playStage.act(POSE_ACT[name]);
}
poseBtns.forEach(function (b) { b.addEventListener('click', function () { setPose(b.getAttribute('data-pose')); }); });
playStage.btn.addEventListener('click', function () {
  var i = (POSE_ORDER.indexOf(playStage.key) + 1) % POSE_ORDER.length; setPose(POSE_ORDER[i]);
});

/* ---------- countdown ---------- */
var OPEN = new Date('2026-12-31T00:00:00+01:00').getTime();
var CLOSE = new Date('2027-01-02T00:00:00+01:00').getTime();
var cEl = { d: $('#c-d'), h: $('#c-h'), m: $('#c-m'), s: $('#c-s') }, note = $('#count-note'), phase = 'before', last = {};
function pad(n) { return String(n).padStart(2, '0'); }
function put(k, v) { if (last[k] !== v) { last[k] = v; cEl[k].textContent = v; if (!reduced) { cEl[k].classList.remove('tick'); void cEl[k].offsetWidth; cEl[k].classList.add('tick'); } } }
function tick() {
  var now = Date.now(), left = OPEN - now;
  if (left <= 0) { phase = now < CLOSE ? 'live' : 'after'; ['d', 'h', 'm', 's'].forEach(function (k) { put(k, '00'); }); }
  else {
    phase = 'before'; var s = Math.floor(left / 1000);
    put('d', pad(Math.floor(s / 86400))); put('h', pad(Math.floor(s % 86400 / 3600))); put('m', pad(Math.floor(s % 3600 / 60))); put('s', pad(s % 60));
  }
  note.textContent = t('cd_' + phase);
}

/* ---------- numbers ---------- */
function fmt(n) { return new Intl.NumberFormat(LANGS[lang].loc).format(n); }
var numsShown = false;
function renderNums() { $$('.num').forEach(function (el) { el.textContent = fmt(+el.getAttribute('data-to')) + el.getAttribute('data-suffix'); }); }
function countUp(el, to, suffix, dur) {
  if (reduced) { el.textContent = fmt(to) + suffix; return; }
  var t0 = null;
  function step(ts) {
    if (t0 === null) t0 = ts;
    var p = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(to * e)) + (p === 1 ? suffix : '');
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ---------- join tabs ---------- */
var tab = 'v';
var CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
function renderJoin(animate) {
  var keys = tab === 'v' ? ['v1', 'v2', 'v3'] : ['e1', 'e2', 'e3'];
  var ul = $('#join-list'); ul.innerHTML = '';
  keys.forEach(function (k) { var li = document.createElement('li'); li.innerHTML = CHECK; var s = document.createElement('span'); s.textContent = t(k); li.appendChild(s); ul.appendChild(li); });
  $('#join-cap').textContent = t(tab + '_cap');
  var to = tab === 'v' ? 50 : 30000;
  if (animate) countUp($('#join-num'), to, '+', 1100); else $('#join-num').textContent = fmt(to) + '+';
  $$('[data-tab]').forEach(function (b) { b.setAttribute('aria-selected', b.getAttribute('data-tab') === tab ? 'true' : 'false'); });
  $('#join-panel').setAttribute('aria-labelledby', 'tab-' + tab);
}
$$('[data-tab]').forEach(function (b) { b.addEventListener('click', function () { if (tab !== b.getAttribute('data-tab')) { tab = b.getAttribute('data-tab'); renderJoin(true); } }); });

/* ---------- ribbon ---------- */
function buildRibbon() {
  var words = [t('rb1'), t('rb2'), t('rb3'), t('rb4'), '31.12.2026', t('rb6'), t('rb7')], track = $('#ribbon');
  track.innerHTML = '';
  for (var g = 0; g < 2; g++) {
    var grp = document.createElement('div'); grp.className = 'grp';
    words.concat(words).forEach(function (w) { var s = document.createElement('span'); s.textContent = w; grp.appendChild(s); });
    track.appendChild(grp);
  }
}

/* ---------- language ---------- */
function apply() {
  var L = LANGS[lang], page = $('.page');
  document.documentElement.lang = lang; document.documentElement.dir = L.dir;
  page.setAttribute('lang', lang); page.setAttribute('dir', L.dir);
  document.title = t('doc_title');
  $$('[data-i]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i')); });
  $$('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false'); });
  stages.forEach(function (s) { s.text(); s.label(); });
  $$('.peek .tamima-img').forEach(function (i) { i.alt = t('tm_alt'); });
  $$('.stage .tamima-img').forEach(function (i, n) { i.alt = n === 0 ? t('tm_alt') : ''; });
  buildRibbon(); renderNums(); renderJoin(false); $('#form-status').textContent = ''; last = {}; tick();
}
$$('[data-lang]').forEach(function (b) {
  b.addEventListener('click', function () {
    lang = b.getAttribute('data-lang');
    try { localStorage.setItem('itmam-lang', lang); } catch (e) {}
    apply();
  });
});

/* ---------- reveal, spotlight, progress ---------- */
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .12 });
  $$('.rv').forEach(function (el) { io.observe(el); });
  var io2 = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting && !numsShown) {
        numsShown = true; io2.disconnect();
        $$('.num').forEach(function (el) { countUp(el, +el.getAttribute('data-to'), el.getAttribute('data-suffix'), 1500); });
      }
    });
  }, { threshold: .4 });
  io2.observe($('.stats ul'));
} else { $$('.rv').forEach(function (el) { el.classList.add('in'); }); }
$$('.card').forEach(function (c) {
  c.addEventListener('pointermove', function (e) { var r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
});
var prog = $('#progress'), raf = 0;
function onScroll() {
  if (raf) return;
  raf = requestAnimationFrame(function () {
    raf = 0; var h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.setProperty('--p', h > 0 ? Math.min(1, window.scrollY / h).toFixed(4) : 0);
  });
}
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- registration ---------- */
/* Set FORM_ENDPOINT to a form-handling URL (for example Formspree) once the site is hosted. */
var FORM_ENDPOINT = '';
var form = $('#reg-form'), statusEl = $('#form-status');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var name = $('#f-name').value.trim(), contact = $('#f-contact').value.trim();
  if (!name || !contact) { statusEl.textContent = t('msg_empty'); return; }
  if (!FORM_ENDPOINT) { statusEl.textContent = t('msg_closed'); return; }
  statusEl.textContent = t('msg_sending');
  fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ name: name, contact: contact, role: $('#f-role').value }) })
    .then(function (r) { if (!r.ok) throw new Error('bad status'); form.reset(); statusEl.textContent = t('msg_ok'); })
    .catch(function () { statusEl.textContent = t('msg_fail'); });
});

apply();
setInterval(tick, 1000);
})();
