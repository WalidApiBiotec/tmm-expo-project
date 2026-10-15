/* TMM Expo - behaviour, animations and the AR / FR / EN translations. */
(function () {
'use strict';

/* ---------- translations ---------- */
var D = {
ar: {
  doc_title: 'معرض TMM',
  nav_about: 'عن المعرض', nav_join: 'لماذا تشارك', nav_place: 'الموقع', cta_register: 'سجّل حضورك',
  brand_sub: 'الطبعة الأولى · بني عباس',
  chip_date: '31 ديسمبر 2026 – 01 جانفي 2027', chip_place: 'بني عباس، الجزائر',
  h1: 'معرض TMM', h1_sub: 'للتجارة وريادة الأعمال', edition: 'الطبعة الأولى',
  lead: 'يومان للتجار وأصحاب المشاريع والمبتكرين في بني عباس، بين أصالة الواحة وروح التكنولوجيا.',
  cd_d: 'أيام', cd_h: 'ساعات', cd_m: 'دقائق', cd_s: 'ثوانٍ',
  cd_before: 'قبل افتتاح الطبعة الأولى', cd_live: 'الطبعة الأولى جارية الآن', cd_after: 'انتهت الطبعة الأولى، شكرًا لكل من حضر',
  cta2: 'تعرّف على المعرض',
  orb1: 'تجارة', orb2: 'ريادة الأعمال', orb3: 'رقمية',
  logo_alt: 'شعار معرض TMM. اضغط لتحريك الحروف', arch_alt: 'بوابة بيضاء بقوس تطل على الكثبان عند الغروب، رمز بني عباس 2026',
  arch_l1: 'بني عباس', arch_l2: '2026',
  rb1: 'تجارة', rb2: 'ريادة الأعمال', rb3: 'رقمية', rb4: 'بني عباس', rb6: '⁦50+⁩ عارض', rb7: '⁦30,000+⁩ زائر',
  st_ex: 'عارض', st_vis: 'زائر متوقع', st_days: 'يومان من اللقاءات', st_ed: 'الطبعة الأولى',
  about_eyebrow: 'عن المعرض', about_title: 'مكان واحد يجمع التجارة وريادة الأعمال',
  about_p1: 'معرض TMM للتجارة وريادة الأعمال تنطلق طبعته الأولى في بني عباس يوم 31 ديسمبر 2026 وتستمر حتى 01 جانفي 2027.',
  about_p2: 'يلتقي فيه أكثر من 50 عارضًا من التجار والشركات وأصحاب المشاريع مع جمهور يُتوقع أن يتجاوز 30 ألف زائر، ويقرّب الحلول الرقمية من النشاط التجاري اليومي.',
  dc_title: 'الموعد', day1_m: 'ديسمبر 2026', day1_w: 'الخميس', day2_m: 'جانفي 2027', day2_w: 'الجمعة',
  dc_note: 'تُعلن مواعيد الاستقبال والبرنامج التفصيلي قريبًا.',
  p1_t: 'التجارة', p1_d: 'عارضون من قطاعات مختلفة يقدّمون منتجاتهم وخدماتهم للجمهور مباشرة.',
  p2_t: 'ريادة الأعمال', p2_d: 'فرصة لأصحاب المشاريع للقاء الشركاء والموردين وبناء علاقات مهنية جديدة داخل الجزائر وخارجها.',
  p3_t: 'الرقمنة', p3_d: 'حلول رقمية وأدوات حديثة تساعد المؤسسات والتجار على النمو.',
  pl_eyebrow: 'المكان', pl_name: 'بني عباس، الجزائر', pl_wilaya: 'ولاية بني عباس', pl_p: 'تنطلق الطبعة الأولى في الجنوب الغربي الجزائري، بين الواحة والكثبان.', pl_btn: 'افتح الخريطة',
  jn_eyebrow: 'لماذا تشارك', jn_title: 'للزائر وللعارض', tab_v: 'زائر', tab_e: 'عارض',
  v1: 'تتعرف على منتجات وخدمات أكثر من 50 عارضًا في مكان واحد.', v2: 'تكتشف حلولًا رقمية تخدم تجارتك أو مشروعك.', v3: 'تلتقي مباشرة بأصحاب المؤسسات والمشاريع.',
  e1: 'تصل إلى جمهور يُتوقع أن يتجاوز 30 ألف زائر خلال يومين.', e2: 'تعرض منتجك وجهًا لوجه أمام عملاء محتملين.', e3: 'تبني شراكات جديدة منذ الطبعة الأولى.',
  v_cap: 'عارض لتكتشفهم', e_cap: 'زائر متوقع خلال يومين',
  rg_eyebrow: 'التسجيل', rg_title: 'كن جزءًا من الطبعة الأولى', rg_p: 'اترك بياناتك واختر صفتك، زائرًا أو عارضًا، وسنتواصل معك بتفاصيل المشاركة.',
  f_name: 'الاسم الكامل', f_contact: 'رقم الهاتف أو البريد الإلكتروني', f_role: 'أرغب في الحضور بصفتي',
  r_visitor: 'زائر', r_exhibitor: 'عارض', f_submit: 'إرسال الطلب',
  msg_empty: 'أدخل الاسم ووسيلة التواصل ثم أعد المحاولة.', msg_closed: 'باب التسجيل لم يُفتح بعد. تابعونا لمعرفة موعد فتحه.',
  msg_sending: 'جارٍ الإرسال...', msg_ok: 'تم استلام طلبك. سنتواصل معك قريبًا.', msg_fail: 'تعذّر إرسال الطلب. حاول مرة أخرى بعد قليل.',
  ft_name: 'معرض TMM للتجارة وريادة الأعمال', ft_line: 'الطبعة الأولى · بني عباس، الجزائر · 31 ديسمبر 2026 – 01 جانفي 2027'
},
fr: {
  doc_title: 'TMM Expo',
  nav_about: 'À propos', nav_join: 'Pourquoi venir', nav_place: 'Lieu', cta_register: "S'inscrire",
  brand_sub: '1re édition · Béni Abbès',
  chip_date: '31 décembre 2026 – 1er janvier 2027', chip_place: 'Béni Abbès, Algérie',
  h1: 'TMM Expo', h1_sub: "Salon du commerce et de l'entrepreneuriat", edition: '1re édition',
  lead: "Deux jours pour les commerçants, porteurs de projets et innovateurs, à Béni Abbès, entre l'authenticité de l'oasis et l'esprit de la technologie.",
  cd_d: 'jours', cd_h: 'heures', cd_m: 'minutes', cd_s: 'secondes',
  cd_before: "avant l'ouverture de la 1re édition", cd_live: 'La 1re édition est en cours', cd_after: 'La 1re édition est terminée, merci à tous',
  cta2: 'Découvrir le salon',
  orb1: 'Commerce', orb2: 'Entrepreneuriat', orb3: 'Digital',
  logo_alt: 'Logo TMM Expo. Touchez pour animer les lettres', arch_alt: "Porte blanche en arc ouvrant sur les dunes au coucher du soleil, symbole de Béni Abbès 2026",
  arch_l1: 'Béni Abbès', arch_l2: '2026',
  rb1: 'Commerce', rb2: 'Entrepreneuriat', rb3: 'Digital', rb4: 'Béni Abbès', rb6: '50+ exposants', rb7: '30 000+ visiteurs',
  st_ex: 'exposants', st_vis: 'visiteurs attendus', st_days: 'jours de rencontres', st_ed: '1re édition',
  about_eyebrow: 'À propos', about_title: "Un seul lieu pour le commerce et l'entrepreneuriat",
  about_p1: "TMM Expo, le salon du commerce et de l'entrepreneuriat, lance sa première édition à Béni Abbès le 31 décembre 2026, jusqu'au 1er janvier 2027.",
  about_p2: "Plus de 50 exposants, commerçants, entreprises et porteurs de projets, y rencontrent un public attendu à plus de 30 000 visiteurs. Le salon rapproche les solutions numériques de l'activité commerciale quotidienne.",
  dc_title: 'Dates', day1_m: 'décembre 2026', day1_w: 'jeudi', day2_m: 'janvier 2027', day2_w: 'vendredi',
  dc_note: "Les horaires d'accueil et le programme détaillé seront annoncés prochainement.",
  p1_t: 'Commerce', p1_d: 'Des exposants de secteurs variés présentent directement leurs produits et services au public.',
  p2_t: 'Entrepreneuriat', p2_d: "L'occasion pour les porteurs de projets de rencontrer partenaires et fournisseurs et de nouer de nouvelles relations professionnelles, en Algérie et au-delà.",
  p3_t: 'Digital', p3_d: 'Des solutions numériques et des outils modernes pour aider les entreprises et les commerçants à se développer.',
  pl_eyebrow: 'Lieu', pl_name: 'Béni Abbès, Algérie', pl_wilaya: 'Wilaya de Béni Abbès', pl_p: 'La première édition se tient dans le sud-ouest algérien, entre oasis et dunes.', pl_btn: 'Ouvrir la carte',
  jn_eyebrow: 'Pourquoi venir', jn_title: 'Visiteur ou exposant', tab_v: 'Visiteur', tab_e: 'Exposant',
  v1: 'Découvrez les produits et services de plus de 50 exposants en un seul lieu.', v2: 'Trouvez des solutions numériques utiles à votre commerce ou à votre projet.', v3: "Rencontrez directement les responsables d'entreprises et de projets.",
  e1: 'Touchez un public attendu à plus de 30 000 visiteurs en deux jours.', e2: 'Présentez votre offre en face à face à des clients potentiels.', e3: 'Nouez de nouveaux partenariats dès la première édition.',
  v_cap: 'exposants à découvrir', e_cap: 'visiteurs attendus en deux jours',
  rg_eyebrow: 'Inscription', rg_title: 'Faites partie de la 1re édition', rg_p: 'Laissez vos coordonnées et choisissez votre profil, visiteur ou exposant. Nous vous contacterons avec les détails de participation.',
  f_name: 'Nom complet', f_contact: 'Téléphone ou e-mail', f_role: 'Je viens en tant que',
  r_visitor: 'Visiteur', r_exhibitor: 'Exposant', f_submit: 'Envoyer ma demande',
  msg_empty: 'Renseignez votre nom et un moyen de contact, puis réessayez.', msg_closed: "Les inscriptions ne sont pas encore ouvertes. Suivez-nous pour connaître la date d'ouverture.",
  msg_sending: 'Envoi en cours...', msg_ok: 'Votre demande a bien été reçue. Nous vous contacterons bientôt.', msg_fail: "L'envoi a échoué. Réessayez dans un instant.",
  ft_name: "TMM Expo, salon du commerce et de l'entrepreneuriat", ft_line: '1re édition · Béni Abbès, Algérie · 31 décembre 2026 – 1er janvier 2027'
},
en: {
  doc_title: 'TMM Expo',
  nav_about: 'About', nav_join: 'Why join', nav_place: 'Location', cta_register: 'Register',
  brand_sub: '1st edition · Béni Abbès',
  chip_date: '31 December 2026 – 1 January 2027', chip_place: 'Béni Abbès, Algeria',
  h1: 'TMM Expo', h1_sub: 'Trade & Entrepreneurship Expo', edition: '1st edition',
  lead: 'Two days for traders, founders and innovators in Béni Abbès, where oasis heritage meets technology.',
  cd_d: 'days', cd_h: 'hours', cd_m: 'minutes', cd_s: 'seconds',
  cd_before: 'until the 1st edition opens', cd_live: 'The 1st edition is on now', cd_after: 'The 1st edition has ended. Thank you to everyone who came.',
  cta2: 'Discover the expo',
  orb1: 'Trade', orb2: 'Entrepreneurship', orb3: 'Digital',
  logo_alt: 'TMM Expo logo. Tap to animate the letters', arch_alt: 'A white archway opening onto sunset dunes, the Béni Abbès 2026 symbol',
  arch_l1: 'Béni Abbès', arch_l2: '2026',
  rb1: 'Trade', rb2: 'Entrepreneurship', rb3: 'Digital', rb4: 'Béni Abbès', rb6: '50+ exhibitors', rb7: '30,000+ visitors',
  st_ex: 'exhibitors', st_vis: 'expected visitors', st_days: 'days of meetings', st_ed: '1st edition',
  about_eyebrow: 'About', about_title: 'One place for trade and entrepreneurship',
  about_p1: 'TMM Expo, the trade and entrepreneurship expo, launches its first edition in Béni Abbès on 31 December 2026 and runs until 1 January 2027.',
  about_p2: 'More than 50 exhibitors, from traders and companies to project founders, meet an audience expected to exceed 30,000 visitors. The expo brings digital solutions closer to everyday business.',
  dc_title: 'Dates', day1_m: 'December 2026', day1_w: 'Thursday', day2_m: 'January 2027', day2_w: 'Friday',
  dc_note: 'Opening hours and the detailed programme will be announced soon.',
  p1_t: 'Trade', p1_d: 'Exhibitors from many sectors present their products and services directly to the public.',
  p2_t: 'Entrepreneurship', p2_d: 'A chance for founders to meet partners and suppliers and build new professional relationships, in Algeria and beyond.',
  p3_t: 'Digital', p3_d: 'Digital solutions and modern tools that help companies and traders grow.',
  pl_eyebrow: 'Location', pl_name: 'Béni Abbès, Algeria', pl_wilaya: 'Béni Abbès Province', pl_p: 'The first edition takes place in south-western Algeria, between oasis and dunes.', pl_btn: 'Open map',
  jn_eyebrow: 'Why join', jn_title: 'For visitors and exhibitors', tab_v: 'Visitor', tab_e: 'Exhibitor',
  v1: 'Discover the products and services of more than 50 exhibitors in one place.', v2: 'Find digital solutions that serve your business or project.', v3: 'Meet company and project leaders face to face.',
  e1: 'Reach an audience expected to exceed 30,000 visitors in two days.', e2: 'Present your offer in person to potential customers.', e3: 'Build new partnerships from the very first edition.',
  v_cap: 'exhibitors to discover', e_cap: 'expected visitors in two days',
  rg_eyebrow: 'Registration', rg_title: 'Be part of the first edition', rg_p: 'Leave your details and choose your role, visitor or exhibitor. We will contact you with the participation details.',
  f_name: 'Full name', f_contact: 'Phone or email', f_role: 'I am attending as',
  r_visitor: 'Visitor', r_exhibitor: 'Exhibitor', f_submit: 'Send request',
  msg_empty: 'Enter your name and a way to reach you, then try again.', msg_closed: 'Registration has not opened yet. Follow us to hear when it does.',
  msg_sending: 'Sending...', msg_ok: 'We received your request and will contact you soon.', msg_fail: 'The request could not be sent. Please try again in a moment.',
  ft_name: 'TMM Expo, the trade and entrepreneurship expo', ft_line: '1st edition · Béni Abbès, Algeria · 31 December 2026 – 1 January 2027'
}
};
Object.assign(D.ar, {
  f_open: 'فتح النموذج في صفحة جديدة',
  ft_org: 'الهيئة المنظمة',
  nav_nye: 'سهرة رأس السنة', cta_exh: 'سجّل كعارض', chip_date: '29 ديسمبر 2026 – 01 جانفي 2027', save_date: 'احفظ التاريخ',
  lead: 'فضاء يجمع أصحاب المؤسسات ورواد الأعمال وحاملي المشاريع والمستثمرين والعارضين والشركاء، بين التبادل التجاري والتكوين والابتكار.',
  orb1: '29 ديسمبر', orb2: 'رواد الأعمال', orb3: 'بني عباس',
  logo_alt: 'صورة معرض TMM. اضغط لتحريك الأضواء',
  st_days: 'أيام من اللقاءات',
  about_p1: 'يهدف المعرض إلى جمع أصحاب المؤسسات، ورواد الأعمال، وحاملي المشاريع، والمستثمرين، والعارضين والشركاء، في فضاء يجمع بين التبادل التجاري والتكوين والابتكار والاحتفال برأس السنة الميلادية.',
  day1_m: 'ديسمبر 2026', day1_w: 'الثلاثاء', day2_m: 'ديسمبر 2026', day2_w: 'الأربعاء', day3_m: 'ديسمبر 2026', day3_w: 'الخميس · سهرة رأس السنة', day4_m: 'جانفي 2027', day4_w: 'الجمعة',
  e1: 'تصل إلى جمهور يُتوقع أن يتجاوز 30 ألف زائر خلال أربعة أيام.', e_cap: 'زائر متوقع خلال أربعة أيام',
  nye_eyebrow: '31 ديسمبر', nye_title: 'سهرة رأس السنة', nye_p: 'يمكن أن تكون سهرة 31 ديسمبر أبرز لحظات المعرض.',
  nye1: 'فقرات موسيقية وترفيهية مناسبة لطبيعة الحدث.', nye2: 'تقديم الرعاة والشركاء وشكرهم.', nye3: 'تسليط الضوء على المشاريع والمبادرات المحلية.', nye4: 'تنظيم فضاء للتصوير يحمل هوية TMM EXPO.', nye5: 'العد التنازلي عند منتصف الليل واستقبال سنة 2027.',
  nye_note: 'يُنظَّم البرنامج وفق شروط السلامة والتراخيص المعمول بها.',
  rg_title: 'التسجيل كعارض أو راعٍ', rg_p: 'اختر نوع مشاركتك واترك بياناتك، وسنتواصل معك بتفاصيل المشاركة.',
  opt1_t: 'التسجيل كعارض', opt1_d: 'فرصة للمؤسسات وأصحاب المشاريع لعرض المنتجات والخدمات، والتعريف بأنشطتهم، والتواصل المباشر مع الزوار والعملاء المحتملين.', opt1_b: 'سجّل كعارض',
  opt2_t: 'التسجيل كراعٍ أو شريك', opt2_d: 'فرصة للمؤسسات والعلامات التجارية لدعم المعرض، وتعزيز حضورها، والتواصل مع رواد الأعمال والفاعلين الاقتصاديين.', opt2_b: 'كن راعيًا للمعرض',
  f_name: 'الاسم واللقب', f_org: 'اسم المؤسسة أو المشروع', f_phone: 'رقم الهاتف', f_email: 'البريد الإلكتروني', f_role: 'نوع المشاركة',
  r_exhibitor: 'عارض', r_sponsor: 'راعٍ', r_partner: 'شريك', f_desc: 'وصف مختصر للنشاط', f_needs: 'احتياجات العارض من مساحة وتجهيزات', f_check: 'طلب التواصل بشأن عروض الرعاية والشراكة',
  msg_empty: 'أدخل الاسم واللقب مع رقم الهاتف أو البريد الإلكتروني ثم أعد المحاولة.',
  ft_line: 'الطبعة الأولى · بني عباس، الجزائر · 29 ديسمبر 2026 – 01 جانفي 2027'
});
Object.assign(D.fr, {
  f_open: 'Ouvrir le formulaire dans une nouvelle page',
  ft_org: 'Organisé par',
  nav_nye: 'Soirée du Nouvel An', cta_exh: "S'inscrire comme exposant", chip_date: '29 décembre 2026 – 1er janvier 2027', save_date: 'Ajouter à mon agenda',
  lead: "Un espace qui réunit chefs d'entreprise, entrepreneurs, porteurs de projets, investisseurs, exposants et partenaires, entre échanges commerciaux, formation et innovation.",
  orb1: '29 décembre', orb2: 'Entrepreneurs', orb3: 'Béni Abbès',
  logo_alt: "Visuel TMM Expo. Touchez pour animer les lumières",
  st_days: 'jours de rencontres',
  about_p1: "Le salon réunit chefs d'entreprise, entrepreneurs, porteurs de projets, investisseurs, exposants et partenaires dans un espace mêlant échanges commerciaux, formation, innovation et célébration du Nouvel An.",
  day1_m: 'décembre 2026', day1_w: 'mardi', day2_m: 'décembre 2026', day2_w: 'mercredi', day3_m: 'décembre 2026', day3_w: "jeudi · soirée du Nouvel An", day4_m: 'janvier 2027', day4_w: 'vendredi',
  e1: 'Touchez un public attendu à plus de 30 000 visiteurs en quatre jours.', e_cap: 'visiteurs attendus en quatre jours',
  nye_eyebrow: '31 décembre', nye_title: 'Soirée du Nouvel An', nye_p: 'La soirée du 31 décembre peut devenir le temps fort du salon.',
  nye1: "Animations musicales et divertissements adaptés à l'événement.", nye2: 'Présentation et remerciement des sponsors et partenaires.', nye3: 'Mise en avant des projets et initiatives locales.', nye4: "Espace photo aux couleurs de TMM EXPO.", nye5: 'Compte à rebours à minuit et accueil de 2027.',
  nye_note: "Le programme est organisé dans le respect des règles de sécurité et des autorisations en vigueur.",
  rg_title: 'Inscription exposant ou sponsor', rg_p: 'Choisissez votre type de participation et laissez vos coordonnées. Nous vous contacterons avec les détails.',
  opt1_t: "S'inscrire comme exposant", opt1_d: "Une occasion pour les entreprises et porteurs de projets de présenter leurs produits et services, de faire connaître leurs activités et d'échanger directement avec les visiteurs et clients potentiels.", opt1_b: "S'inscrire comme exposant",
  opt2_t: 'Sponsor ou partenaire', opt2_d: "Une occasion pour les entreprises et les marques de soutenir le salon, de renforcer leur visibilité et d'échanger avec les entrepreneurs et acteurs économiques.", opt2_b: 'Devenir sponsor du salon',
  f_name: 'Nom et prénom', f_org: "Nom de l'entreprise ou du projet", f_phone: 'Téléphone', f_email: 'E-mail', f_role: 'Type de participation',
  r_exhibitor: 'Exposant', r_sponsor: 'Sponsor', r_partner: 'Partenaire', f_desc: "Brève description de l'activité", f_needs: "Besoins de l'exposant : espace et équipements", f_check: "Je souhaite être contacté au sujet des offres de sponsoring et de partenariat",
  msg_empty: 'Renseignez votre nom, ainsi qu’un téléphone ou un e-mail, puis réessayez.',
  ft_line: '1re édition · Béni Abbès, Algérie · 29 décembre 2026 – 1er janvier 2027'
});
Object.assign(D.en, {
  f_open: 'Open the form in a new page',
  ft_org: 'Organised by',
  nav_nye: 'New Year’s Eve', cta_exh: 'Register as exhibitor', chip_date: '29 December 2026 – 1 January 2027', save_date: 'Save the date',
  lead: 'A space that brings together business owners, entrepreneurs, project founders, investors, exhibitors and partners, through trade, training and innovation.',
  orb1: '29 December', orb2: 'Entrepreneurs', orb3: 'Béni Abbès',
  logo_alt: 'TMM Expo artwork. Tap to animate the lights',
  st_days: 'days of meetings',
  about_p1: 'The expo brings together business owners, entrepreneurs, project founders, investors, exhibitors and partners in a space that blends trade, training, innovation and a New Year celebration.',
  day1_m: 'December 2026', day1_w: 'Tuesday', day2_m: 'December 2026', day2_w: 'Wednesday', day3_m: 'December 2026', day3_w: 'Thursday · New Year’s Eve', day4_m: 'January 2027', day4_w: 'Friday',
  e1: 'Reach an audience expected to exceed 30,000 visitors over four days.', e_cap: 'expected visitors over four days',
  nye_eyebrow: '31 December', nye_title: 'New Year’s Eve', nye_p: 'The evening of 31 December can be the highlight of the expo.',
  nye1: 'Music and entertainment suited to the event.', nye2: 'Presenting and thanking the sponsors and partners.', nye3: 'Spotlighting local projects and initiatives.', nye4: 'A photo space carrying the TMM EXPO identity.', nye5: 'Midnight countdown and a welcome to 2027.',
  nye_note: 'The programme is organised in line with applicable safety rules and permits.',
  rg_title: 'Register as exhibitor or sponsor', rg_p: 'Choose how you want to take part and leave your details. We will contact you with the next steps.',
  opt1_t: 'Register as an exhibitor', opt1_d: 'A chance for companies and project founders to showcase products and services, present their activities and connect directly with visitors and potential customers.', opt1_b: 'Register as exhibitor',
  opt2_t: 'Sponsor or partner', opt2_d: 'A chance for companies and brands to support the expo, strengthen their presence and meet entrepreneurs and economic players.', opt2_b: 'Become a sponsor',
  f_name: 'Full name', f_org: 'Company or project name', f_phone: 'Phone', f_email: 'Email', f_role: 'Type of participation',
  r_exhibitor: 'Exhibitor', r_sponsor: 'Sponsor', r_partner: 'Partner', f_desc: 'Short description of your activity', f_needs: 'Exhibitor needs: space and equipment', f_check: 'Contact me about sponsorship and partnership offers',
  msg_empty: 'Enter your name and a phone number or email, then try again.',
  ft_line: '1st edition · Béni Abbès, Algeria · 29 December 2026 – 1 January 2027'
});
Object.assign(D.ar, {"nav_faq": "الأسئلة", "about_title": "تجارة وريادة وابتكار تحت سقف واحد", "jn_title": "مكانك بيننا، زائرًا كنتَ أو عارضًا", "rg_eyebrow": "التسجيل كعارض أو راعٍ", "rg_title": "كن جزءًا من الطبعة الأولى", "rg_p": "اختر نوع مشاركتك واترك بياناتك، وسيتواصل معك فريق التنظيم بالتفاصيل.", "nye_p": "ليلة 31 ديسمبر قد تكون أجمل لحظات المعرض: احتفال، شكر للشركاء، وعدّ تنازلي نحو 2027.", "faq_eyebrow": "الأسئلة الشائعة", "faq_title": "كل ما تريد معرفته", "faq_p": "إجابات سريعة عن المعرض والتسجيل. وإن لم تجد سؤالك، تواصل معنا.", "q1": "ما هو معرض TMM؟", "a1": "معرض TMM للتجارة وريادة الأعمال تنطلق طبعته الأولى في بني عباس من 29 ديسمبر 2026 إلى 1 جانفي 2027، بمشاركة أكثر من 50 عارضًا وجمهور يُتوقع أن يتجاوز 30 ألف زائر.", "q2": "من يمكنه المشاركة؟", "a2": "أصحاب المؤسسات، ورواد الأعمال، وحاملو المشاريع، والمستثمرون، والعارضون والشركاء.", "q3": "كيف أسجّل كعارض؟", "a3": "من قسم التسجيل في هذه الصفحة، اختر «عارض» في نوع المشاركة واملأ النموذج، وسيتواصل معك فريق التنظيم بخصوص المساحة والتجهيزات.", "q4": "كيف أصبح راعيًا أو شريكًا؟", "a4": "من النموذج نفسه اختر «راعٍ» أو «شريك»، وسنتواصل معك بعروض الرعاية والشراكة.", "q5": "هل هناك احتفال برأس السنة؟", "a5": "نعم، سهرة 31 ديسمبر من أبرز لحظات المعرض المقترحة: فقرات موسيقية وترفيهية، وتقديم الرعاة والشركاء، وفضاء للتصوير، وعدّ تنازلي عند منتصف الليل لاستقبال 2027.", "q6": "ما هي مواعيد الاستقبال والدخول؟", "a6": "ستُعلن مواعيد الاستقبال والبرنامج التفصيلي وشروط الدخول قريبًا. تابعنا لتصلك التفاصيل.", "ct_eyebrow": "تواصل معنا", "ct_title": "نسعد بتواصلك", "ct_p": "للاستفسار عن المشاركة أو الرعاية، اختر الطريقة الأنسب لك.", "ct_map": "الموقع على الخريطة", "ct_reg": "نموذج التسجيل", "ct_wa": "واتساب", "ct_mail": "البريد الإلكتروني", "ct_fb": "فيسبوك", "ct_ig": "إنستغرام", "totop": "العودة للأعلى"});
Object.assign(D.fr, {"nav_faq": "FAQ", "about_title": "Commerce, entrepreneuriat et innovation, sous un même toit", "jn_title": "Votre place est ici, visiteur ou exposant", "rg_eyebrow": "Inscription exposant ou sponsor", "rg_title": "Faites partie de la 1re édition", "rg_p": "Choisissez votre type de participation et laissez vos coordonnées : l'équipe d'organisation vous contactera avec les détails.", "nye_p": "La nuit du 31 décembre pourrait être le plus beau moment du salon : célébration, remerciements aux partenaires et compte à rebours vers 2027.", "faq_eyebrow": "Questions fréquentes", "faq_title": "Tout ce que vous voulez savoir", "faq_p": "Des réponses rapides sur le salon et l'inscription. Une autre question ? Contactez-nous.", "q1": "Qu'est-ce que TMM Expo ?", "a1": "TMM Expo, salon du commerce et de l'entrepreneuriat, lance sa première édition à Béni Abbès du 29 décembre 2026 au 1er janvier 2027, avec plus de 50 exposants et un public attendu à plus de 30 000 visiteurs.", "q2": "Qui peut participer ?", "a2": "Les chefs d'entreprise, entrepreneurs, porteurs de projets, investisseurs, exposants et partenaires.", "q3": "Comment m'inscrire comme exposant ?", "a3": "Dans la section Inscription de cette page, choisissez « Exposant » comme type de participation et remplissez le formulaire. L'équipe vous contactera au sujet de l'espace et des équipements.", "q4": "Comment devenir sponsor ou partenaire ?", "a4": "Dans le même formulaire, choisissez « Sponsor » ou « Partenaire » : nous vous contacterons avec les offres de sponsoring et de partenariat.", "q5": "Y a-t-il une célébration du Nouvel An ?", "a5": "Oui, la soirée du 31 décembre fait partie des temps forts proposés : animations musicales, présentation des sponsors et partenaires, espace photo et compte à rebours de minuit pour accueillir 2027.", "q6": "Quels sont les horaires et les conditions d'entrée ?", "a6": "Les horaires d'accueil, le programme détaillé et les conditions d'entrée seront annoncés prochainement. Suivez-nous pour les recevoir.", "ct_eyebrow": "Contact", "ct_title": "Nous sommes à votre écoute", "ct_p": "Pour une question sur la participation ou le sponsoring, choisissez le moyen qui vous convient.", "ct_map": "Lieu sur la carte", "ct_reg": "Formulaire d'inscription", "ct_wa": "WhatsApp", "ct_mail": "E-mail", "ct_fb": "Facebook", "ct_ig": "Instagram", "totop": "Haut de page"});
Object.assign(D.en, {"nav_faq": "FAQ", "about_title": "Trade, entrepreneurship and innovation under one roof", "jn_title": "Your place is here, as a visitor or an exhibitor", "rg_eyebrow": "Exhibitor or sponsor registration", "rg_title": "Be part of the first edition", "rg_p": "Choose how you want to take part and leave your details. The organising team will contact you with the next steps.", "nye_p": "The night of 31 December could be the best moment of the expo: a celebration, thanks to partners and a countdown to 2027.", "faq_eyebrow": "FAQ", "faq_title": "Everything you want to know", "faq_p": "Quick answers about the expo and registration. Can't find yours? Get in touch.", "q1": "What is TMM Expo?", "a1": "TMM Expo, the trade and entrepreneurship expo, launches its first edition in Béni Abbès from 29 December 2026 to 1 January 2027, with more than 50 exhibitors and an audience expected to exceed 30,000 visitors.", "q2": "Who can take part?", "a2": "Business owners, entrepreneurs, project founders, investors, exhibitors and partners.", "q3": "How do I register as an exhibitor?", "a3": "In the Registration section of this page, choose \"Exhibitor\" as the type of participation and fill in the form. The team will contact you about space and equipment.", "q4": "How do I become a sponsor or partner?", "a4": "In the same form, choose \"Sponsor\" or \"Partner\" and we will contact you with sponsorship and partnership offers.", "q5": "Is there a New Year's celebration?", "a5": "Yes, the evening of 31 December is among the proposed highlights: music and entertainment, a thank-you to sponsors and partners, a photo space and a midnight countdown to welcome 2027.", "q6": "What are the opening hours and entry conditions?", "a6": "Opening hours, the detailed programme and entry conditions will be announced soon. Follow us to receive them.", "ct_eyebrow": "Contact", "ct_title": "We'd love to hear from you", "ct_p": "For questions about taking part or sponsoring, pick the way that suits you best.", "ct_map": "Location on the map", "ct_reg": "Registration form", "ct_wa": "WhatsApp", "ct_mail": "Email", "ct_fb": "Facebook", "ct_ig": "Instagram", "totop": "Back to top"});
Object.assign(D.ar, {"ph1": "بني عباس عند الغروب", "ph2": "بني عباس ليلًا", "ph3": "مدخل بني عباس", "skip": "تخطَّ إلى المحتوى", "menu": "القائمة"});
Object.assign(D.fr, {"ph1": "Béni Abbès au coucher du soleil", "ph2": "Béni Abbès la nuit", "ph3": "L'entrée de Béni Abbès", "skip": "Aller au contenu", "menu": "Menu"});
Object.assign(D.en, {"ph1": "Béni Abbès at sunset", "ph2": "Béni Abbès at night", "ph3": "The entrance to Béni Abbès", "skip": "Skip to content", "menu": "Menu"});
Object.assign(D.ar, {"theme": "تبديل المظهر"});
Object.assign(D.fr, {"theme": "Changer l'apparence"});
Object.assign(D.en, {"theme": "Switch theme"});
Object.assign(D.ar, {"st_inv": "مستثمر", "obj_eyebrow": "أهداف المعرض", "obj_title": "ما الذي نسعى إليه", "obj1": "التعرف على سوق اقتصادي واستثماري شاغل، وفرصة الشراكة في المبادرات الاقتصادية والتنمية المحلية.", "obj2": "استثمار الحركية السياحية نهاية السنة ببني عباس في خلق آفاق استثمارية وشراكات استراتيجية وبحث فرص التعاون الاقتصادي.", "about_p2": "يلتقي فيه أكثر من 50 عارضًا من التجار والشركات وأصحاب المشاريع مع جمهور يُتوقع أن يتجاوز 30 ألف زائر، إلى جانب 2000 مستثمر، ويقرّب الحلول الرقمية من النشاط التجاري اليومي.", "a1": "معرض TMM للتجارة وريادة الأعمال تنطلق طبعته الأولى في بني عباس من 29 ديسمبر 2026 إلى 1 جانفي 2027، بمشاركة أكثر من 50 عارضًا، وجمهور يُتوقع أن يتجاوز 30 ألف زائر، و2000 مستثمر.", "ft_org": "الهيئة المنظمة"});
Object.assign(D.fr, {"st_inv": "investisseurs", "obj_eyebrow": "Objectifs", "obj_title": "Notre ambition", "obj1": "Découvrir un marché économique et d'investissement dynamique, et saisir des occasions de partenariat dans les initiatives économiques et le développement local.", "obj2": "Tirer parti de l'élan touristique de fin d'année à Béni Abbès pour créer des perspectives d'investissement, nouer des partenariats stratégiques et explorer des pistes de coopération économique.", "about_p2": "Plus de 50 exposants, commerçants, entreprises et porteurs de projets, y rencontrent un public attendu à plus de 30 000 visiteurs, ainsi que 2 000 investisseurs. Le salon rapproche les solutions numériques de l'activité commerciale quotidienne.", "a1": "TMM Expo, salon du commerce et de l'entrepreneuriat, lance sa première édition à Béni Abbès du 29 décembre 2026 au 1er janvier 2027, avec plus de 50 exposants, un public attendu à plus de 30 000 visiteurs et 2 000 investisseurs.", "ft_org": "Organisé par"});
Object.assign(D.en, {"st_inv": "investors", "obj_eyebrow": "Goals", "obj_title": "What we aim for", "obj1": "To discover a thriving economic and investment market, and to find partnership opportunities in economic initiatives and local development.", "obj2": "To harness Béni Abbès's end-of-year tourism momentum to open up investment prospects, build strategic partnerships and explore economic cooperation.", "about_p2": "More than 50 exhibitors, from traders and companies to project founders, meet an audience expected to exceed 30,000 visitors, along with 2,000 investors. The expo brings digital solutions closer to everyday business.", "a1": "TMM Expo, the trade and entrepreneurship expo, launches its first edition in Béni Abbès from 29 December 2026 to 1 January 2027, with more than 50 exhibitors, an audience expected to exceed 30,000 visitors and 2,000 investors.", "ft_org": "Organised by"});
var LANGS = { ar: { dir: 'rtl', loc: 'en-US' }, fr: { dir: 'ltr', loc: 'fr-FR' }, en: { dir: 'ltr', loc: 'en-US' } };

var lang = 'ar';
try { var saved = localStorage.getItem('tmm-lang'); if (saved && D[saved]) lang = saved; } catch (e) {}
function t(k) { return (D[lang] && D[lang][k]) || D.en[k] || ''; }
var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
var fine = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches;
function $(s, r) { return (r || document).querySelector(s); }
function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

/* ---------- logo stage ---------- */
var stage = $('#stage'), logoBtn = $('#logo-btn'), waveT = null;
function burst(n, colors) {
  if (reduced) return;
  for (var i = 0; i < n; i++) {
    var s = document.createElement('i'); s.className = 'spark';
    s.style.background = colors[i % colors.length]; s.style.left = '50%'; s.style.top = '50%';
    stage.appendChild(s);
    var a = Math.random() * Math.PI * 2, d = 90 + Math.random() * 150;
    var an = s.animate([
      { transform: 'translate(-50%,-50%) rotate(45deg) scale(1)', opacity: 1 },
      { transform: 'translate(calc(-50% + ' + (Math.cos(a) * d).toFixed(0) + 'px), calc(-50% + ' + (Math.sin(a) * d - 30).toFixed(0) + 'px)) rotate(200deg) scale(.2)', opacity: 0 }
    ], { duration: 900 + Math.random() * 500, easing: 'cubic-bezier(.2,.7,.3,1)' });
    an.onfinish = (function (node) { return function () { node.remove(); }; })(s);
  }
}
function waveLogo() {
  stage.classList.remove('wave'); void stage.offsetWidth; stage.classList.add('wave');
  burst(16, ['#F28C57', '#7FE3D4', '#ffffff', '#3EBDAD']);
  clearTimeout(waveT); waveT = setTimeout(function () { stage.classList.remove('wave'); }, 1800);
}
logoBtn.addEventListener('click', waveLogo);
(function () {
  var dust = $('.p-dust'), cols = ['#F28C57', '#FFD2A8', '#7FE3D4', '#ffffff'];
  for (var i = 0; i < 18; i++) {
    var s = document.createElement('i');
    s.style.setProperty('--l', (4 + Math.random() * 92).toFixed(1) + '%');
    s.style.setProperty('--s', (2 + Math.random() * 3).toFixed(1) + 'px');
    s.style.setProperty('--t', (6 + Math.random() * 7).toFixed(1) + 's');
    s.style.setProperty('--d', (-Math.random() * 12).toFixed(1) + 's');
    s.style.setProperty('--x', ((Math.random() - .5) * 60).toFixed(0) + 'px');
    s.style.setProperty('--c', cols[i % cols.length]);
    dust.appendChild(s);
  }
})();

function bindParallax(section, el, kx, ky) {
  if (!fine || reduced) return;
  section.addEventListener('pointermove', function (e) {
    var r = el.getBoundingClientRect();
    var x = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2);
    var y = (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2);
    x = Math.max(-1, Math.min(1, x)); y = Math.max(-1, Math.min(1, y));
    el.style.setProperty(kx, x.toFixed(3)); el.style.setProperty(ky, y.toFixed(3));
  });
  section.addEventListener('pointerleave', function () { el.style.setProperty(kx, 0); el.style.setProperty(ky, 0); });
}
bindParallax($('#hero'), stage, '--px', '--py');
bindParallax($('#place'), $('#scene'), '--gx', '--gy');

/* ---------- countdown ---------- */
var OPEN = new Date('2026-12-29T00:00:00+01:00').getTime();
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
  $('#join-panel').setAttribute('aria-labelledby', 'tab-' + tab); if (typeof movePill === 'function') movePill();
}
$$('[data-tab]').forEach(function (b) { b.addEventListener('click', function () { if (tab !== b.getAttribute('data-tab')) { tab = b.getAttribute('data-tab'); renderJoin(true); } }); });

/* ---------- ribbon ---------- */
function buildRibbon() {
  var words = [t('rb1'), t('rb2'), t('rb3'), t('rb4'), '29.12.2026', t('rb6'), t('rb7')], track = $('#ribbon');
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
  logoBtn.setAttribute('aria-label', t('logo_alt'));
  $$('[data-alt]').forEach(function (el) { el.alt = t(el.getAttribute('data-alt')); }); $('#menu-btn').setAttribute('aria-label', t('menu')); $('#theme-btn').setAttribute('aria-label', t('theme'));
  setForm(); buildContact(); totop.setAttribute('aria-label', t('totop')); buildRibbon(); renderNums(); renderJoin(false); last = {}; tick();
}
$$('[data-lang]').forEach(function (b) {
  b.addEventListener('click', function () {
    lang = b.getAttribute('data-lang');
    try { localStorage.setItem('tmm-lang', lang); } catch (e) {}
    apply();
  });
});

/* ---------- reveal, spotlight, progress ---------- */
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); var tg = e.target; setTimeout(function () { tg.style.transitionDelay = ''; }, 1100); } }); }, { threshold: .12 });
  $$('.rv, .sec h2').forEach(function (el) { io.observe(el); });
  var io2 = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting && !numsShown) {
        numsShown = true; io2.disconnect();
        $$('.num').forEach(function (el) { countUp(el, +el.getAttribute('data-to'), el.getAttribute('data-suffix'), 1500); });
      }
    });
  }, { threshold: .4 });
  io2.observe($('.stats ul'));
} else { $$('.rv, .sec h2').forEach(function (el) { el.classList.add('in'); }); }
$$('.card').forEach(function (c) {
  c.addEventListener('pointermove', function (e) { var r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
});
var prog = $('#progress'), raf = 0;
function onScroll() {
  if (raf) return;
  raf = requestAnimationFrame(function () {
    raf = 0; var h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.setProperty('--p', h > 0 ? Math.min(1, window.scrollY / h).toFixed(4) : 0); spy();
  });
}
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- contact: fill in the channels you have (empty ones are hidden) ---------- */
var CONTACT = { whatsapp: '', email: 'itmam.dz@gmail.com', phones: ['0665904586', '0665089411'], facebook: '', instagram: '' };
var IC = {
  map: '<path d="M12 21s-7-6.2-7-11.2A7 7 0 0119 9.8C19 14.8 12 21 12 21z"/><circle cx="12" cy="10" r="2.6"/>',
  reg: '<rect x="5" y="4" width="14" height="17" rx="2.5"/><path d="M9 4V3h6v1M9 11h6M9 15h6"/>',
  wa: '<path d="M4 20l1.3-4A8 8 0 1112 20a8 8 0 01-3.9-1z"/><path d="M9 9c0 3 3 6 6 6l1.2-1.4-2-1-1 .7a4 4 0 01-2-2l.7-1-1-2z"/>',
  tel: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 8l9 6 9-6"/>',
  fb: '<path d="M14 8h2V4h-2.5A3.5 3.5 0 0010 7.5V10H8v4h2v6h4v-6h2.2l.6-4H14V8z"/>',
  ig: '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.8" cy="7.2" r=".6"/>'
};
function fmtPhone(n) { return n.replace(/(\d{2})(?=\d)/g, '$1 '); }
function buildContact() {
  var ul = $('#ct-list'); if (ul) ul.innerHTML = '';
  var items = [{ ic: 'map', href: 'https://www.google.com/maps/search/?api=1&query=B%C3%A9ni+Abb%C3%A8s%2C+Algeria', key: 'ct_map' }, { ic: 'reg', href: '#register', key: 'ct_reg' }];
  (CONTACT.phones || []).forEach(function (p) { items.push({ ic: 'tel', href: 'tel:+213' + p.slice(1), text: fmtPhone(p), ltr: true }); });
  if (CONTACT.whatsapp) items.push({ ic: 'wa', href: 'https://wa.me/' + CONTACT.whatsapp.replace(/\D/g, ''), key: 'ct_wa' });
  if (CONTACT.email) items.push({ ic: 'mail', href: 'mailto:' + CONTACT.email, text: CONTACT.email, ltr: true });
  if (CONTACT.facebook) items.push({ ic: 'fb', href: CONTACT.facebook, key: 'ct_fb' });
  if (CONTACT.instagram) items.push({ ic: 'ig', href: CONTACT.instagram, key: 'ct_ig' });
  if (ul) items.forEach(function (it) {
    var a = document.createElement('a'); a.className = 'ct-btn'; a.href = it.href;
    if (/^https?:/.test(it.href)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + IC[it.ic] + '</svg><span></span>';
    var sp = a.lastChild; sp.textContent = it.text || t(it.key); if (it.ltr) sp.setAttribute('dir', 'ltr');
    ul.appendChild(a);
  });
  var ol = $('#org-links'); if (ol) {
    ol.innerHTML = '';
    var l = [];
    if (CONTACT.email) l.push(['mailto:' + CONTACT.email, CONTACT.email]);
    (CONTACT.phones || []).forEach(function (p) { l.push(['tel:+213' + p.slice(1), fmtPhone(p)]); });
    l.forEach(function (x) { var a = document.createElement('a'); a.href = x[0]; a.textContent = x[1]; ol.appendChild(a); });
  }
}

/* ---------- extras: nav highlight, back to top, card tilt, magnetic buttons, hero spotlight, staggered reveal ---------- */
var spyIds = ['about', 'nye', 'place', 'join', 'faq'], totop = $('#totop');
function spy() {
  var cur = '', y = window.innerHeight * .4;
  spyIds.forEach(function (id) { var el = document.getElementById(id); if (el && el.getBoundingClientRect().top < y && el.getBoundingClientRect().bottom > y) cur = id; });
  $$('.nav a').forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + cur); });
  totop.classList.toggle('show', window.scrollY > 900);
}
totop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }); });
if (fine && !reduced) {
  $$('.card').forEach(function (c) {
    c.addEventListener('pointermove', function (e) { var r = c.getBoundingClientRect(); c.style.setProperty('--ry', (((e.clientX - r.left) / r.width - .5) * 7).toFixed(2) + 'deg'); c.style.setProperty('--rx', ((.5 - (e.clientY - r.top) / r.height) * 7).toFixed(2) + 'deg'); });
    c.addEventListener('pointerleave', function () { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); });
  });
  $$('.hero .btn').forEach(function (b) {
    b.addEventListener('pointermove', function (e) { var r = b.getBoundingClientRect(); b.style.translate = ((e.clientX - r.left - r.width / 2) * .14).toFixed(1) + 'px ' + ((e.clientY - r.top - r.height / 2) * .22).toFixed(1) + 'px'; });
    b.addEventListener('pointerleave', function () { b.style.translate = ''; });
  });
  var hero = $('#hero');
  hero.addEventListener('pointermove', function (e) { var r = hero.getBoundingClientRect(); hero.style.setProperty('--sx', (e.clientX - r.left) + 'px'); hero.style.setProperty('--sy', (e.clientY - r.top) + 'px'); });
}
$$('.bento .rv, .faq-list .rv').forEach(function (el, i) { el.style.transitionDelay = ((i % 3) * 90) + 'ms'; });

/* ---------- place photo slider ---------- */
(function () {
  var box = $('#scene'), slides = $$('.slide', box), dots = $$('.sd', box), cur = 0, timer = null;
  function show(n) {
    cur = (n + slides.length) % slides.length;
    slides.forEach(function (s, i) { s.classList.toggle('on', i === cur); });
    dots.forEach(function (d, i) { d.classList.toggle('on', i === cur); d.setAttribute('aria-current', i === cur ? 'true' : 'false'); });
  }
  function play() { if (reduced) return; stop(); timer = setInterval(function () { show(cur + 1); }, 5200); }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  dots.forEach(function (d) { d.addEventListener('click', function () { show(+d.getAttribute('data-n')); play(); }); });
  box.addEventListener('pointerenter', stop); box.addEventListener('pointerleave', play);
  box.addEventListener('focusin', stop); box.addEventListener('focusout', play);
  var x0 = null;
  box.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) { show(cur + (dx < 0 ? 1 : -1) * (LANGS[lang].dir === 'rtl' ? -1 : 1)); play(); } x0 = null; });
  show(0); play();
})();

/* ---------- mobile menu ---------- */
(function () {
  var btn = $('#menu-btn'), nav = $('#nav');
  function set(open) { nav.classList.toggle('open', open); btn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  btn.addEventListener('click', function () { set(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  document.addEventListener('click', function (e) { if (!e.target.closest('.bar')) set(false); });
})();

/* ---------- v4: intro, parallax, tabs pill, ripples, fireworks ---------- */
(function () {
  var page = $('.page'), ld = $('.loader');
  function ready() { page.classList.add('ready'); }
  if (reduced) ready(); else setTimeout(ready, 1150);
  setTimeout(function () { if (ld) ld.remove(); }, 2300);
})();
var heroEl = $('#hero');
function parallax() { if (!reduced) heroEl.style.setProperty('--scr', Math.min(1, window.scrollY / Math.max(1, heroEl.offsetHeight)).toFixed(3)); }
window.addEventListener('scroll', parallax, { passive: true });
function movePill() {
  var tabs = $('.tabs'), on = $('.tabs [aria-selected="true"]');
  if (!tabs || !on) return;
  tabs.style.setProperty('--x', on.offsetLeft + 'px'); tabs.style.setProperty('--w', on.offsetWidth + 'px');
}
window.addEventListener('resize', movePill);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(movePill);
document.addEventListener('pointerdown', function (e) {
  var b = e.target.closest && e.target.closest('.btn'); if (!b || reduced) return;
  var r = b.getBoundingClientRect(), sz = Math.max(r.width, r.height), sp = document.createElement('i');
  sp.className = 'rp'; sp.style.cssText = 'width:' + sz + 'px;height:' + sz + 'px;left:' + (e.clientX - r.left - sz / 2) + 'px;top:' + (e.clientY - r.top - sz / 2) + 'px';
  b.appendChild(sp); setTimeout(function () { sp.remove(); }, 700);
});
(function () {
  var panel = $('.nye-panel'); if (!panel || reduced) return;
  var cv = document.createElement('canvas'); cv.className = 'fx'; cv.setAttribute('aria-hidden', 'true'); panel.insertBefore(cv, panel.firstChild);
  var ctx = cv.getContext('2d'), W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2), parts = [], rockets = [], run = false, last = 0, nextL = 0;
  var cols = ['#FF8A4C', '#7FE3D4', '#ffffff', '#FFD2A8', '#3EBDAD'];
  function size() { var r = panel.getBoundingClientRect(); W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  function burst(x, y) {
    var n = 48, c = cols[(Math.random() * cols.length) | 0], c2 = cols[(Math.random() * cols.length) | 0];
    for (var i = 0; i < n; i++) { var a = i / n * Math.PI * 2 + Math.random() * .1, sp = 1.1 + Math.random() * 2.7; parts.push({ x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, l: 1, c: i % 3 ? c : c2, s: 1.5 + Math.random() * 1.5 }); }
  }
  function launch() { rockets.push({ x: W * (.12 + Math.random() * .76), y: H, vy: -(5 + Math.random() * 2.5), ty: H * (.14 + Math.random() * .38) }); }
  function frame(t) {
    if (!run) return;
    var dt = Math.min(t - last, 40) / 16.7; last = t;
    if (t > nextL) { launch(); nextL = t + 1300 + Math.random() * 1500; }
    ctx.globalCompositeOperation = 'destination-out'; ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    rockets = rockets.filter(function (r) {
      r.y += r.vy * dt; ctx.fillStyle = '#FFD2A8'; ctx.beginPath(); ctx.arc(r.x, r.y, 2, 0, 6.3); ctx.fill();
      if (r.y <= r.ty) { burst(r.x, r.y); return false; } return true;
    });
    parts = parts.filter(function (p) {
      p.x += p.vx * dt; p.y += p.vy * dt; p.vy += .035 * dt; p.vx *= .99; p.l -= .013 * dt;
      if (p.l <= 0) return false;
      ctx.globalAlpha = p.l; ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(p.x, p.y, p.s * p.l + .3, 0, 6.3); ctx.fill(); ctx.globalAlpha = 1; return true;
    });
    requestAnimationFrame(frame);
  }
  function start() { if (run) return; run = true; size(); last = performance.now(); nextL = last + 400; requestAnimationFrame(frame); }
  function stop() { run = false; ctx.clearRect(0, 0, W, H); parts = []; rockets = []; }
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { es[0].isIntersecting ? start() : stop(); }, { threshold: .15 }).observe(panel);
  window.addEventListener('resize', function () { if (run) size(); });
  panel.addEventListener('pointerdown', function (e) { if (e.target.closest('a,button') || !run) return; var r = panel.getBoundingClientRect(); burst(e.clientX - r.left, e.clientY - r.top); });
})();

/* ---------- theme toggle, rising sparks, ribbon skew, cursor ring ---------- */
(function () {
  var btn = $('#theme-btn'), root = document.documentElement;
  function cur() { return root.getAttribute('data-theme') || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }
  function set(th, save) {
    root.setAttribute('data-theme', th); btn.classList.toggle('dark', th === 'dark'); btn.setAttribute('aria-pressed', th === 'dark' ? 'true' : 'false');
    if (save) { try { localStorage.setItem('tmm-theme', th); } catch (e) {} }
  }
  var saved = null; try { saved = localStorage.getItem('tmm-theme'); } catch (e) {}
  if (saved === 'dark' || saved === 'light') set(saved, false); else btn.classList.toggle('dark', cur() === 'dark');
  btn.addEventListener('click', function () { set(cur() === 'dark' ? 'light' : 'dark', true); });
})();
(function () {
  if (reduced) return;
  var host = $('#hero .aurora'), cols = ['#FF8A4C', '#3EBDAD', '#2F9FD0'];
  for (var i = 0; i < 16; i++) {
    var e = document.createElement('i'); e.className = 'fz';
    e.style.setProperty('--l', (Math.random() * 100).toFixed(1) + '%'); e.style.setProperty('--s', (4 + Math.random() * 6).toFixed(1) + 'px');
    e.style.setProperty('--t', (11 + Math.random() * 12).toFixed(1) + 's'); e.style.setProperty('--d', (-Math.random() * 20).toFixed(1) + 's');
    e.style.setProperty('--x', ((Math.random() - .5) * 160).toFixed(0) + 'px'); e.style.setProperty('--c', cols[i % cols.length]);
    host.appendChild(e);
  }
  var rib = $('.ribbon'), lastY = window.scrollY, skT = 0, busy = false;
  window.addEventListener('scroll', function () {
    if (busy) return; busy = true;
    requestAnimationFrame(function () {
      busy = false; var y = window.scrollY, v = Math.max(-7, Math.min(7, (y - lastY) * .18)); lastY = y;
      rib.style.setProperty('--sk', v.toFixed(2) + 'deg');
      clearTimeout(skT); skT = setTimeout(function () { rib.style.setProperty('--sk', '0deg'); }, 140);
    });
  }, { passive: true });
})();
(function () {
  if (!fine || reduced) return;
  var c = document.createElement('div'); c.className = 'cursor'; c.setAttribute('aria-hidden', 'true'); document.body.appendChild(c);
  var x = 0, y = 0, tx = 0, ty = 0, started = false;
  document.addEventListener('pointermove', function (e) {
    tx = e.clientX; ty = e.clientY;
    if (!started) { started = true; x = tx; y = ty; c.classList.add('on'); loop(); }
    c.classList.toggle('hot', !!e.target.closest('a, button, summary, .sd'));
  });
  document.addEventListener('pointerleave', function () { c.classList.remove('on'); });
  document.addEventListener('pointerenter', function () { if (started) c.classList.add('on'); });
  function loop() { x += (tx - x) * .2; y += (ty - y) * .2; c.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)'; requestAnimationFrame(loop); }
})();

/* ---------- registration: Google Forms embedded as an iframe; one form per language ---------- */
/* ar = Arabic form. fr and en = French form. Replace these URLs to change a form. */
var FORMS = {
  ar: 'https://docs.google.com/forms/d/e/1FAIpQLSdCtOHFD5SpC9Ny_es93RSztIOSo26HDTxzkXWelz_B1CU5pg/viewform',
  fr: 'https://docs.google.com/forms/d/e/1FAIpQLScpBrJNt6-i3MHDVNiuK0lr5bpY-l3dS1GGFm6HXrxObnbnaw/viewform',
  en: 'https://docs.google.com/forms/d/e/1FAIpQLSfNOMRnbf2b1__ECZVvu0AQw5bcnUgkoJbBJzvtPIv_-1LWyg/viewform'
};
function setForm() {
  var f = $('#gf-frame'), a = $('#gf-open'), u = FORMS[lang] || FORMS.fr;
  if (a) a.href = u;
  if (f && f.getAttribute('src') !== u + '?embedded=true') f.setAttribute('src', u + '?embedded=true');
}

apply(); spy(); movePill();
setInterval(tick, 1000);
})();
