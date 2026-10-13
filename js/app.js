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
  ft_org: 'الهيئة المنظمة: متمام',
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
  ft_org: 'Organisé par : متمام',
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
  ft_org: 'Organised by: متمام',
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
  $('#join-panel').setAttribute('aria-labelledby', 'tab-' + tab);
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
  $('.arch-scene').setAttribute('aria-label', t('arch_alt'));
  buildRibbon(); renderNums(); renderJoin(false); $('#form-status').textContent = ''; last = {}; tick();
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
var FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzfiuUajQ7Khf9jSSWANszxRQin_lLqBtHeFxRgZSXCpcEHYDpooxQH1W9I-tmW3IhO/exec';
var form = $('#reg-form'), statusEl = $('#form-status'), roleSel = $('#f-role');
function setType(type, focus) {
  roleSel.value = type;
  $$('.opt').forEach(function (o) { o.setAttribute('aria-pressed', o.getAttribute('data-type') === type ? 'true' : 'false'); });
  $('#w-needs').hidden = type !== 'exhibitor';
  $('#w-follow').hidden = type === 'exhibitor';
  statusEl.textContent = '';
  if (focus) $('#f-name').focus();
}
$$('.opt').forEach(function (o) { o.addEventListener('click', function () { setType(o.getAttribute('data-type'), true); }); });
roleSel.addEventListener('change', function () { setType(roleSel.value, false); });
$$('[data-reg]').forEach(function (a) { a.addEventListener('click', function () { setType(a.getAttribute('data-reg'), false); }); });
setType('exhibitor', false);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var v = function (id) { return $(id).value.trim(); };
  var name = v('#f-name'), phone = v('#f-phone'), email = v('#f-email');
  if (!name || (!phone && !email)) { statusEl.textContent = t('msg_empty'); return; }
  if (!FORM_ENDPOINT) { statusEl.textContent = t('msg_closed'); return; }
  statusEl.textContent = t('msg_sending');
  var body = { name: name, organisation: v('#f-org'), phone: phone, email: email, type: roleSel.value, description: v('#f-desc'),
    needs: roleSel.value === 'exhibitor' ? v('#f-needs') : '', sponsor_contact: roleSel.value !== 'exhibitor' && $('#f-follow').checked };
  var data = new URLSearchParams();
  Object.keys(body).forEach(function (k) { data.append(k, String(body[k])); });
  data.append('lang', lang);
  /* Google Apps Script web apps do not answer CORS requests, so the reply cannot be read: no-cors, and a sent request counts as success. */
  var gas = /script\.google\.com/.test(FORM_ENDPOINT);
  fetch(FORM_ENDPOINT, gas ? { method: 'POST', mode: 'no-cors', body: data }
    : { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(body) })
    .then(function (r) { if (!gas && !r.ok) throw new Error('bad status'); form.reset(); setType('exhibitor', false); statusEl.textContent = t('msg_ok'); })
    .catch(function () { statusEl.textContent = t('msg_fail'); });
});

apply();
setInterval(tick, 1000);
})();
