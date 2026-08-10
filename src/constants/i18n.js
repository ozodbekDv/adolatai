export const translations = {
  // =========================================================
  // O'ZBEK TILI — LOTIN
  // =========================================================
  uz: {
    header: {
      home: "Bosh sahifa",
      assistant: "Yordamchi",
      knowledge: "Huquqiy baza",
      cases: "Murojaatlar",
      login: "Kirish",
      profile: "Profil",
      theme: "Mavzu",
      subtitle: "HUQUQIY YORDAMCHI",
      savedOnDevice: "Qurilmada saqlanadi",
      sections: "Sahifada",
      aiChat: "AI Chat",
      advocates: "Advokatlar",
      locations: "Joylashuvlar",
    },

    footer: {
      subtitle: "Huquqiy yordamchi",
      disclaimer:
        "Umumiy yo‘l-yo‘riq beradi, advokat xulosasi o‘rnini bosmaydi. Qonunlar o‘zgarishi mumkin — murojaatdan oldin rasmiy manbani tekshiring.",
      privacyNotice: "Ma’lumot faqat qurilmada saqlanadi",
      officialSources: "Rasmiy manbalar asosida",
    },

    hero: {
      kicker: "O‘ZBEKISTON UCHUN RAQAMLI HUQUQIY YORDAMCHI",
      titlePart1: "Muammoni tushuning.",
      titlePart2: "Keyingi qadamni biling.",
      description:
        "4 qisqa bosqichda qonuniy asos, murojaat manzili va yuklab olinadigan tayyor hujjat oling.",
      btnPrimary: "Yordam olish",
      btnSecondary: "Qanday ishlaydi?",
      badge: "Yordamchi tayyor",
      cardTitle: "Natija — shunchaki maslahat emas",
      features: [
        "Modda va rasmiy manba",
        "Idora va yuborish tartibi",
        "DOC va chop etiladigan PDF",
        "Muddat eslatmasi",
      ],
    },

    stepWizard: {
      headerLabel: "HUQUQIY YECHIM",
      headerTitle: "Vaziyatingizdan aniq rejagacha",
      reset: "Qayta boshlash",

      progress: {
        step: "bosqich",
        remaining: "bosqich qoldi",
        ready: "Natija tayyor",
        inProgress: "Jarayonda...",
      },

      steps: {
        direction: "Yo'nalish",
        situation: "Vaziyat",
        evidence: "Dalillar",
        result: "Natija",
      },

      step1: {
        unit: "1",
        title: "Muammo yo‘nalishini tanlang",
        description: "Vaziyatingizga eng yaqin mavzuni belgilang.",
      },

      step2: {
        unit: "2",
        title: "Vaziyatni qisqacha yozing",
        description:
          "Ma'lumot serverga yuborilmaydi va faqat qurilmada qoladi.",
        fullName: "F.I.Sh.",
        opponent: "Qarshi tomon yoki tashkilot",
        opponentPlaceholder: "Tashkilot nomi yoki shaxs",
        date: "Voqea sanasi",
        descriptionLabel: "Nima bo‘ldi?",
        descriptionPlaceholder: "Vaziyatni qisqacha tushuntirib bering...",
        minimum: "Kamida 15 belgi.",
      },

      step3: {
        unit: "3",
        title: "Qaysi dalillaringiz bor?",
        description:
          "Borlarini belgilang — hujjatga ilova ro‘yxati qo‘shiladi.",
        additional: "Qo‘shimcha dalil",
        additionalPlaceholder: "Boshqa ma'lumotlar bo‘lsa kiriting...",
      },

      step4: {
        unit: "4",
        title: "Sizning vaziyatingiz uchun reja",
        category: "Uy-joy va mulk",
        checkedAt: "Tekshiruv",
        legalNorms: "Vaziyatingizga eng mos qonun normalari",
        whyTheseLaws: "Nega aynan shu moddalar?",
        actionPlan: "Aniq harakat rejasi",
        readyAppeal: "Tayyor murojaat matni",
        step1: "holati bo‘yicha qarshi tomonga yozma ariza yuboring.",
        step2: "11-moddaga tayangan holda talabingizni aniq yozing.",
      },

      navigation: {
        back: "Orqaga",
        continue: "Davom etish",
        readyText: "Tayyor murojaat matni",
        viewAndCopy: "Ko‘rish va ko‘chirish",
      },

      categories: {
        work: {
          title: "Ish va mehnat",
          subtitle: "Ish haqi, hujjat, bo‘shatish",
        },
        consumer: {
          title: "Iste’molchi huquqi",
          subtitle: "Tovar, xizmat, pulni qaytarish",
        },
        housing: {
          title: "Uy-joy va mulk",
          subtitle: "Ijara, mulk, ko‘chirish",
        },
        utilities: {
          title: "Kommunal xizmatlar",
          subtitle: "Hisob, uzilish, xizmat sifati",
        },
        fines: {
          title: "Jarimalar",
          subtitle: "Qaror, bayonnoma, shikoyat",
        },
        family: {
          title: "Oila huquqi",
          subtitle: "Aliment, nikoh, bola huquqi",
        },
      },

      legalData: {
        work: {
          laws: [
            {
              title:
                "Mehnat Kodeksi 161-modda — Mehnat shartnomasini bekor qilish",
              desc: "Mehnat shartnomasi qonunda nazarda tutilgan asoslar bo'yicha bekor qilinadi.",
            },
            {
              title: "Mehnat Kodeksi 244-modda — Ish haqini to'lash muddatlari",
              desc: "Ish beruvchi xodimga ish haqini o'z vaqtida va to'liq to'lashi shart.",
            },
          ],
          actions: [
            "Ish beruvchiga rasmiy yozma e'tiroz yoki talabnoma yuboring.",
            "Mehnat inspektsiyasiga (Bandlik vazirligi) murojaat yo'llang.",
            "Natija bo'lmagan taqdirda Fuqarolik ishlar bo'yicha sudga da'vo arizasi kiriting.",
          ],
        },
        consumer: {
          laws: [
            {
              title:
                "Iste'molchilar huquqlarini himoya qilish to'g'risida 18-modda",
              desc: "Nuqsonli tovar sotilganda iste'molchi uni almashtirish yoki pulini qaytarishni talab qilishga haqli.",
            },
          ],
          actions: [
            "Sotuvchi/xizmat ko'rsatuvchiga chek va dalillar bilan yozma talabnoma bering.",
            "Iste'molchilar huquqlarini himoya qilish agentligiga murojaat qiling.",
          ],
        },
        housing: {
          laws: [
            {
              title:
                "Uy-joy Kodeksi 11-modda — Uy-joy huquqlarini himoya qilish",
              desc: "Uy-joyga oid buzilgan huquqlar qonunchilikda nazarda tutilgan tartibda himoya qilinadi.",
            },
            {
              title: "Uy-joy Kodeksi 86-modda — Turar joyni arendaga berish",
              desc: "Turar joydan haq evaziga foydalanish shartnoma bilan rasmiylashtiriladi.",
            },
          ],
          actions: [
            "Ijaraga beruvchi yoki qarshi tomonga yozma bildirishnoma yuboring.",
            "Uy-joy shartnomasi va to'lov kvitansiyalarini tayyorlab qo'ying.",
            "Hududiy fuqarolik sudiga ariza bilan murojaat qiling.",
          ],
        },
        utilities: {
          laws: [
            {
              title: "Kommunal xizmat ko'rsatish qoidalari — Xizmat sifati",
              desc: "Tashkilot iste'molchini uzluksiz va sifatli kommunal xizmat bilan ta'minlashi shart.",
            },
          ],
          actions: [
            "Tegishli kommunal korxonaga (gaz, elektr, suv) rasmiy e'tiroz yuboring.",
            "MIB yoki Bosh prokuratura qoshidagi inspektsiyaga xabar bering.",
          ],
        },
        fines: {
          laws: [
            {
              title: "MJtK 315-modda — Ma'muriy nohaq qaror ustidan shikoyat",
              desc: "Jarima qarori ustidan 10 kun muddatda yuqori organga yoki sudga shikoyat qilinishi mumkin.",
            },
          ],
          actions: [
            "Qaror yoki bayonnoma nusxasini oling.",
            "10 kunlik muddatni o'tkazib yubormasdan ma'muriy sudga shikoyat kiriting.",
          ],
        },
        family: {
          laws: [
            {
              title: "Oila Kodeksi 96-modda — Aliment undirish",
              desc: "Ota-ona voyaga yetmagan bolalariga ta'minot berishi shart.",
            },
          ],
          actions: [
            "Aliment undirish bo'yicha fuqarolik sudiga ariza yuboring.",
            "Bolalarning tug'ilganlik haqidagi guvohnomalari nusxasini tayyorlang.",
          ],
        },
      },

      evidences: {
        contract: "Shartnoma yoki qaror nusxasi",
        receipt: "Chek / to‘lov tasdig‘i",
        photo_video: "Foto yoki video",
        messages: "SMS, e-mail yoki messenger yozishmasi",
        witness: "Guvoh ma’lumoti",
        previous_appeal: "Oldingi murojaat va javob",
      },
    },

    appealModal: {
      badge: "TAYYOR NATIJA",
      title: "Murojaat matni",
      subtitle:
        "Matn kiritgan ma’lumotlaringiz asosida tuzildi. Yuborishdan oldin bo‘sh joylar va faktlarni tekshiring.",
      copyBtn: "Matnni ko‘chirish",
      copy: "Nusxalash",
      copied: "Nusxalandi!",
      pdfBtn: "PDF yuklash",
      wordBtn: "Word .doc",
      noEvidences: "Mavjud emas",
    },

    appealTemplate: {
      header: "TUMAN/SHAHAR HOKIMLIGI YOKI FUQAROLIK ISHLARI BO‘YICHA SUDGA",
      from: "Kimdan",
      address: "Manzil va aloqa",
      enter: "kiriting",
      title: "ARIZA",
      bodyIntro: "Men",
      bodyText: "sanasida",
      bodyText2: "bilan bog‘liq quyidagi holat yuzasidan murojaat qilaman",
      legalBasis: "HUQUQIY ASOS",
      requestHeader: "SHU ASOSDA SO‘RAYMAN",
      request1:
        "Bayon qilingan holatni vakolatingiz doirasida tekshirishingizni",
      request2: "Buzilgan huquqni tiklash va qonuniy choralar ko‘rishingizni",
      request3:
        "Qabul qilingan qaror va uning asoslari haqida menga yozma javob yuborishingizni",
      attachments: "ILOVALAR",
      date: "Sana",
      signature: "Imzo",
      note: "Eslatma: faktlar, organ vakolati va talablarni yuborishdan oldin tekshiring.",
    },

    stepsOverview: [
      {
        id: "01",
        title: "Yo‘nalishni tanlang",
        desc: "Muammoga mos huquq sohasi aniqlanadi.",
      },
      {
        id: "02",
        title: "Vaziyatni yozing",
        desc: "Asosiy ma’lumotlarni oddiy tilda kiriting.",
      },
      {
        id: "03",
        title: "Dalillarni belgilang",
        desc: "Mavjud hujjat va dalillarni jamlang.",
      },
      {
        id: "04",
        title: "Amaliy natija oling",
        desc: "Reja, manzil, hujjat va muddat bir joyda.",
      },
    ],

    stepsText: {
      title: "Qanday ishlaydi?",
      desc: "Murakkab yo‘lni to‘rtta sodda qadamga ajratdik",
    },
    knowledgeBase: {
      kicker: "HUQUQIY BAZA",
      title: "Ko‘p uchraydigan vaziyatlar",
      sourceNote: "Manba havolalari rasmiy LexUZ hujjatlariga olib boradi.",
      articlesCount: "5 ta amaliy modda",
      checkOnLexUz: "LexUZ’da tekshirish ↗",
    },

    myAppeals: {
      kicker: "FAQAT SHU QURILMADA",
      title: "Mening murojaatlarim",
      clearAll: "Barchasini tozalash",
      emptyTitle: "Hali saqlangan murojaatlar yo‘q.",
      emptyDesc: "Jarayon oxirida «Murojaatni saqlash» tugmasini bosing.",
    },

    advocatesPage: {
      header: {
        title: "Professional",
        titleHighlight: "Advokatlar Ro'yxati",
        subtitle:
          "O'zingizga mos bo'lgan huquqshunosni tajribasi, narxi va mutaxassisligi bo'yicha tanlang hamda bevosita bog'laning.",
      },
      filters: {
        title: "Filterlar",
        searchLabel: "Qidiruv",
        searchPlaceholder: "Ism yoki soha...",
        specialtyLabel: "Mutaxassislik",
        maxPriceLabel: "Maks. Narx (soatiga)",
        currency: "so'm",
        minExpLabel: "Min. Tajriba",
        years: "yil",
        resetBtn: "Filterlarni tozalash",
      },
      sort: {
        found: "Topildi:",
        countSuffix: "ta advokat",
        label: "Saralash:",
        options: {
          rating: "Yuqori reyting bo'yicha",
          exp: "Eng ko'p tajriba bo'yicha",
          priceAsc: "Arzonroq narx bo'yicha",
          priceDesc: "Qimmatroq narx bo'yicha",
        },
      },
      card: {
        reviews: "sharh",
        experience: "Tajriba",
        casesWon: "Yutilgan ish",
        priceLabel: "Xizmat narxi:",
        priceUnit: "so'm/soat",
        profileBtn: "Profil",
      },
      notFound: {
        title: "Advokat topilmadi",
        subtitle:
          "Kiritilgan filter parametrlaringizga mos keladigan advokatlar ro'yxati mavjud emas.",
        resetBtn: "Filterlarni tozalash",
      },
      categories: {
        all: "Barchasi",
        civil: "Fuqarolik huquqi",
        corporate: "Korporativ huquq",
        criminal: "Jinoyat huquqi",
        family: "Oila huquqi",
      },
    },

    locationsPage: {
      header: {
        title: "Advokaturalar xaritasi",
        subtitle:
          "Farg'ona hududidagi advokatura tashkilotlarini toping va eng yaqin joyni tanlang.",
      },
      filters: {
        locationSwitchLabel: "Eng yaqin joyni tanlang",
        locationSwitchSubtitle: "Joylashuvingizni aniqlang",
        searchPlaceholder: "Advokatura nomi yoki manzil",
        cityLabel: "Tuman / Shahar",
        clearBtn: "Filterni tozalash",
      },
      list: {
        foundCount: "ta advokatura topildi",
        sortLabel: "Saralash",
        sortOptions: {
          popular: "Mashhurlik bo'yicha",
          nearest: "Eng yaqinlari",
          rating: "Yuqori reytingli",
        },
        empty: "Ushbu filter bo'yicha hech qanday advokatura topilmadi.",
        loadMore: "Yana ko'proq yuklash",
      },
      card: {
        viewOnMap: "Xaritalarda ko'rish",
        distanceFallback: "1.2 km sizdan",
      },
      map: {
        myLocation: "Mening joylashuvim",
        mapView: "Xarita",
        satelliteView: "Sun'iy yo'ldosh",
        getDirections: "Yo'l ko'rsatish",
        call: "Qo'ng'iroq",
        viewMap: "Xarita",
        reviewsText: "4.3 (128 ta sharh)",
        openNow: "Hozir ochiq",
        hours: "09:00 - 18:00",
        locationPrompt:
          "Joylashuvingizni yoqing va eng yaqin advokatularni toping",
        enableLocation: "Joylashuvni yoqish",
      },
      locations: {
        all: "Barchasi",
        fargona: "Farg'ona shahar",
        qoqon: "Qo'qon shahar",
        margilon: "Marg'ilon shahar",
        rishton: "Rishton tumani",
        oltiariq: "Oltiariq tumani",
        quvasoy: "Quvasoy shahar",
        bagdod: "Bag'dod tumani",
        quva: "Quva tumani",
        buvayda: "Buvayda tumani",
        uchkoprik: "Uchko'prik tumani",
        toshloq: "Toshloq tumani",
        yozyovon: "Yozyovon tumani",
      },
    },

    ai: {
      badge: "AI Huquqiy Yordamchi v2.0",
      titleStart: "Aql bilan",
      titleHighlight: "huquqiy yechim",
      titleEnd: "toping",
      subtitle:
        "Sun'iy intellekt bilan real vaqtda muloqot qiling, muammoingizni tahlil qiling va zudlik bilan professional yo'nalish oling.",
      startBtn: "Suhbatni Boshlash",
      orSelectCat: "Yoki yo'nalish bo'yicha tanlang",
      categoryLabel: "Kategoriya:",
      defaultCat: "Umumiy huquqiy yordam",
      finishBtn: "Yakunlash",
      activeBadge: "Faol",
      placeholder: "Savolingizni yozing...",
      completedTitle: "Suhbat Yakunlandi!",
      completedDesc:
        "Ma'lumotlaringiz muvaffaqiyatli saqlandi va qayta ishlashga tayyorlandi.",
      direction: "Yo'nalish:",
      msgCount: "Xabarlar soni:",
      status: "Holat:",
      statusUploaded: "Tizimga yuklandi",
      newChatBtn: "Yangi Suhbat Boshlash",
      startToast: "Suhbat boshlandi!",
      finishError: "Suhbatni yakunlash uchun kamida bitta savol yuboring!",
      saveSuccess: "Murojaatingiz saqlandi!",
      ai: {
        typing: "AI tahlil qilmoqda...",
        welcome: (cat) =>
          cat
            ? `Assalomu alaykum! Men sizning intellektual huquqiy yordamchingizman. **${cat}** bo'yicha qanday muammo yoki savolingiz bor?`
            : "Assalomu alaykum! Men sizning intellektual huquqiy yordamchingizman. Sizga qanday huquqiy masalada yordam bera olaman?",
        response: (prompt, cat) =>
          `Sizning "${prompt}" so'rovingiz tahlil qilindi. ${
            cat
              ? `${cat} bo'yicha amaldagi qonunchilikka ko'ra`
              : "Amaldagi huquqiy me'yorlarga ko'ra"
          }, siz o'z huquqlaringizni himoya qilish uchun tegishli tartibda ariza shakllantirishingiz mumkin.`,
      },
    },
    theme: "Mavzu",
    search: "Qidirish...",
    submit: "Yuborish",
    next: "Keyingi",
    back: "Orqaga",
  },

  // =========================================================
  // O'ZBEK TILI — KIRILL
  // =========================================================
  Уз: {
    header: {
      home: "Бош саҳифа",
      assistant: "Ёрдамчи",
      knowledge: "Ҳуқуқий база",
      cases: "Мурожаатлар",
      login: "Кириш",
      profile: "Профиль",
      theme: "Мавзу",
      subtitle: "ҲУҚУҚИЙ ЁРДАМЧИ",
      savedOnDevice: "Қурилмада сақланади",
      sections: "Саҳифада",
      aiChat: "AI чат",
      advocates: "Адвокатлар",
      locations: "Жойлашувлар",
    },

    footer: {
      subtitle: "Ҳуқуқий ёрдамчи",
      disclaimer:
        "Умумий йўл-йўриқ беради, адвокат хулосаси ўрнини босмайди. Қонунлар ўзгариши мумкин — мурожаатдан олдин расмий манбани текширинг.",
      privacyNotice: "Маълумот фақат қурилмада сақланади",
      officialSources: "Расмий манбалар асосида",
    },

    hero: {
      kicker: "ЎЗБЕКИСТОН УЧУН РАҚАМЛИ ҲУҚУҚИЙ ЁРДАМЧИ",
      titlePart1: "Муаммони тушунинг.",
      titlePart2: "Кейинги қадамни билинг.",
      description:
        "4 қисқа босқичда қонуний асос, мурожаат манзили ва юклаб олинадиган тайёр ҳужжат олинг.",
      btnPrimary: "Ёрдам олиш",
      btnSecondary: "Қандай ишлайди?",
      badge: "Ёрдамчи тайёр",
      cardTitle: "Натижа — шунчаки маслаҳат эмас",
      features: [
        "Модда ва расмий манба",
        "Идора ва юбориш тартиби",
        "DOC ва чоп этиладиган PDF",
        "Муддат эслатмаси",
      ],
    },

    stepWizard: {
      headerLabel: "ҲУҚУҚИЙ ЕЧИМ",
      headerTitle: "Вазиятингиздан аниқ режагача",
      reset: "Қайта бошлаш",

      progress: {
        step: "босқич",
        remaining: "босқич қолди",
        ready: "Натижа тайёр",
        inProgress: "Жараёнда...",
      },

      steps: {
        direction: "Йўналиш",
        situation: "Вазият",
        evidence: "Далиллар",
        result: "Натижа",
      },

      step1: {
        unit: "1",
        title: "Муаммо йўналишини танланг",
        description: "Вазиятингизга энг яқин мавзуни белгиланг.",
      },

      step2: {
        unit: "2",
        title: "Вазиятни қисқача ёзинг",
        description: "Маълумот серверга юборилмайди ва фақат қурилмада қолади.",

        fullName: "Ф.И.Ш.",
        opponent: "Қарши томон ёки ташкилот",
        opponentPlaceholder: "Ташкилот номи ёки шахс",

        date: "Воқеа санаси",

        descriptionLabel: "Нима бўлди?",
        descriptionPlaceholder: "Вазиятни қисқача тушунтириб беринг...",

        minimum: "Камида 15 белги.",
      },

      step3: {
        unit: "3",
        title: "Қайси далилларингиз бор?",
        description: "Борларини белгиланг — ҳужжатга илова рўйхати қўшилади.",

        additional: "Қўшимча далил",
        additionalPlaceholder: "Бошқа маълумотлар бўлса киритинг...",
      },

      step4: {
        unit: "4",
        title: "Сизнинг вазиятингиз учун режа",
        category: "Уй-жой ва мулк",

        checkedAt: "Текширув",

        legalNorms: "Вазиятингизга энг мос қонун нормалари",

        whyTheseLaws: "Нега айнан шу моддалар?",

        actionPlan: "Аниқ ҳаракат режаси",

        readyAppeal: "Тайёр мурожаат матни",

        step1: "ҳолати бўйича қарши томонга ёзма ариза юборинг.",

        step2: "11-моддага таянган ҳолда талабингизни аниқ ёзинг.",
      },

      navigation: {
        back: "Орқага",
        continue: "Давом этиш",
        readyText: "Тайёр мурожаат матни",
        viewAndCopy: "Кўриш ва кўчириш",
      },

      categories: {
        work: {
          title: "Иш ва меҳнат",
          subtitle: "Иш ҳақи, ҳужжат, бўшатиш",
        },

        consumer: {
          title: "Истеъмолчи ҳуқуқи",
          subtitle: "Товар, хизмат, пулни қайтариш",
        },

        housing: {
          title: "Уй-жой ва мулк",
          subtitle: "Ижара, мулк, кўчириш",
        },

        utilities: {
          title: "Коммунал хизматлар",
          subtitle: "Ҳисоб-китоб, узилиш, хизмат сифати",
        },

        fines: {
          title: "Жарималар",
          subtitle: "Қарор, баённома, шикоят",
        },

        family: {
          title: "Оила ҳуқуқи",
          subtitle: "Алимент, никоҳ, бола ҳуқуқлари",
        },
      },

      legalData: {
        work: {
          laws: [
            {
              title:
                "Меҳнат Кодекси 161-модда — Меҳнат шартномасини бекор қилиш",
              desc: "Меҳнат шартномаси қонунда назарда тутилган асослар бўйича бекор қилинади.",
            },
            {
              title: "Меҳнат Кодекси 244-модда — Иш ҳақини тўлаш муддатлари",
              desc: "Иш берувчи ходимга иш ҳақини ўз вақтида ва тўлиқ тўлаши шарт.",
            },
          ],
          actions: [
            "Иш берувчига расмий ёзма эътироз ёки талабнома юборинг.",
            "Меҳнат инспекциясига (Бандлик вазирлиги) мурожаат йўлланг.",
            "Натижа бўлмаган тақдирда Фуқаролик ишлар бўйича судга да’во аризаси киритинг.",
          ],
        },
        consumer: {
          laws: [
            {
              title: "Истеъмолчилар ҳуқуқларини ҳимоя қилиш тўғрисида 18-модда",
              desc: "Нақсонли товар сотилганда истеъмолчи уни алмаштириш ёки пулни қайтаришни талаб қилишга ҳақли.",
            },
          ],
          actions: [
            "Сотувчи/хизмат кўрсатувчига чек ва далиллар билан ёзма талабнома беринг.",
            "Истеъмолчилар ҳуқуқларини ҳимоя қилиш агентлигига мурожаат қилинг.",
          ],
        },
        housing: {
          laws: [
            {
              title: "Уй-жой Кодекси 11-модда — Уй-жой ҳуқуқларини ҳимоя қилиш",
              desc: "Уй-жойга оид бузилган ҳуқуқлар қонунчиликда назарда тутилган тартибда ҳимоя қилинади.",
            },
            {
              title: "Уй-жой Кодекси 86-модда — Турар жойни арендага бериш",
              desc: "Турар жойдан ҳақ эвазига фойдаланиш шартнома билан расмийлаштирилади.",
            },
          ],
          actions: [
            "Ижарага берувчи ёки қарши томонга ёзма билдиришнома юборинг.",
            "Уй-жой шартномаси ва тўлов квитанцияларини тайёрлаб қўйинг.",
            "Ҳудудий фуқаролик судига ариза билан мурожаат қилинг.",
          ],
        },
        utilities: {
          laws: [
            {
              title: "Коммунал хизмат кўрсатиш қоидалари — Хизмат сифати",
              desc: "Ташкилот истеъмолчини узлуксиз ва сифатли коммунал хизмат билан таъминлаши шарт.",
            },
          ],
          actions: [
            "Тегишли коммунал корхонга (газ, электр, сув) расмий эътироз юборинг.",
            "MIB ёки Бош прокуратура қошидаги инспекцияга хабар беринг.",
          ],
        },
        fines: {
          laws: [
            {
              title: "MJtK 315-модда — Маъмурий ноҳақ қарор устидан шикоят",
              desc: "Жарима қарори устидан 10 кун муддатда юқори органга ёки судга шикоят қилиниши мумкин.",
            },
          ],
          actions: [
            "Қарор ёки баённома нусхасини олинг.",
            "10 кунлик муддатни ўтказиб юбормасдан маъмурий судга шикоят киритинг.",
          ],
        },
        family: {
          laws: [
            {
              title: "Оила Кодекси 96-модда — Алимент ундириш",
              desc: "Ота-она voyaga yetmagan болаларига таъминот беради.",
            },
          ],
          actions: [
            "Алимент ундириш бўйича фуқаролик судига ариза юборинг.",
            "Болаларнинг туғилганлик ҳақидаги гувоҳномалари нусхасини тайёрланг.",
          ],
        },
      },

      evidences: {
        contract: "Шартнома ёки қарор нусхаси",
        receipt: "Чек / тўлов тасдиғи",
        photo_video: "Фото ёки видео",
        messages: "SMS, e-mail ёки мессенжер ёзишмалари",
        witness: "Гувоҳ маълумотлари",
        previous_appeal: "Аввалги мурожаат ва жавоб",
      },
    },

    appealModal: {
      badge: "ТАЙЁР НАТИЖА",
      title: "Мурожаат матни",
      subtitle:
        "Матн киритган маълумотларингиз асосида тузилди. Юборишдан олдин бўш жойлар ва фактларни текширинг.",
      copyBtn: "Матнни кўчириш",
      copy: "Нусхалаш",
      copied: "Нусхаланди!",
      pdfBtn: "PDF юклаш",
      wordBtn: "Word .doc",
      noEvidences: "Мавжуд эмас",
    },

    appealTemplate: {
      header: "ТУМАН/ШАҲАР ҲОКИМЛИГИ ЁКИ ФУҚАРОЛИК ИШЛАРИ БЎЙИЧА СУДГА",
      from: "Кимдан",
      address: "Манзил ва алоқа",
      enter: "киритинг",
      title: "АРИЗА",
      bodyIntro: "Мен",
      bodyText: "санасида",
      bodyText2: "билан боғлиқ қуйидаги ҳолат юзасидан мурожаат қиламан",
      legalBasis: "ҲУҚУҚИЙ АСОС",
      requestHeader: "ШУ АСОСДА СЎРАЙМАН",
      request1: "Баён қилинган ҳолатни ваколатингиз доирасида текширишингизни",
      request2: "Бузилган ҳуқуқни тиклаш ва қонуний чоралар кўришингизни",
      request3:
        "Қабул қилинган қарор ва унинг асослари ҳақида менга ёзма жавоб юборишингизни",
      attachments: "ИЛОВАЛАР",
      date: "Сана",
      signature: "Имзо",
      note: "Эслатма: фактлар, орган ваколати ва талабларни юборишдан олдин текширинг.",
    },

    stepsOverview: [
      {
        id: "01",
        title: "Йўналишни танланг",
        desc: "Муаммога мос ҳуқуқ соҳаси аниқланади.",
      },
      {
        id: "02",
        title: "Вазиятни ёзинг",
        desc: "Асосий маълумотларни оддий тилда киритинг.",
      },
      {
        id: "03",
        title: "Далилларни белгиланг",
        desc: "Мавжуд ҳужжат ва далилларни жамланг.",
      },
      {
        id: "04",
        title: "Амалий натижа олинг",
        desc: "Режа, манзил, ҳужжат ва муддат бир жойда.",
      },
    ],

    stepsText: {
      title: "Қандай ишлайди?",
      desc: "Мураккаб йўлни тўртта содда қадамга ажратдик",
    },

    knowledgeBase: {
      kicker: "ҲУҚУҚИЙ БАЗА",
      title: "Кўп учрайдиган вазиятлар",
      sourceNote: "Манба ҳаволалари расмий LexUZ ҳужжатларига олиб боради.",
      articlesCount: "5 та амалий модда",
      checkOnLexUz: "LexUZда текшириш ↗",
    },

    myAppeals: {
      kicker: "ФАҚАТ ШУ ҚУРИЛМАДА",
      title: "Менинг мурожаатларим",
      clearAll: "Барчасини тозалаш",
      emptyTitle: "Ҳали сақланган мурожаатлар йўқ.",
      emptyDesc: "Жараён охирида «Мурожаатни сақлаш» тугмасини босинг.",
    },

    profilePage: {
      badge: "Фойдаланувчи профили",
      edit: "Таҳрирлаш",
      save: "Сақлаш",
      cancel: "Бекор қилиш",
      personalInfo: "Шахсий маълумотлар",
      fullName: "Тўлиқ исм",
      email: "Email манзил",
      phone: "Телефон рақами",
      occupation: "Мутахассислик / фаолият",
      bio: "Ўзи ҳақида (bio)",
      education: "Таълим ва тил билиши",
      educationStage: "Босқич:",
      englishLevel: "Инглиз тили даражаси:",
      skillsTitle: "Техник кўникмалар",
      toastSuccess: "Профил маълумотлари муваффақиятли сақланди!",
    },

    advocatesPage: {
      header: {
        title: "Профессионал",
        titleHighlight: "адвокатлар рўйхати",
        subtitle:
          "Ўзингизга мос бўлган ҳуқуқшуносни тажрибаси, нархи ва мутахассислиги бўйича танланг ҳамда бевосита боғланинг.",
      },
      filters: {
        title: "Фильтрлар",
        searchLabel: "Қидирув",
        searchPlaceholder: "Исм ёки соҳа...",
        specialtyLabel: "Мутахассислик",
        maxPriceLabel: "Макс. Нарх (соатига)",
        currency: "сўм",
        minExpLabel: "Мин. Тажриба",
        years: "йил",
        resetBtn: "Фильтрларни тозалаш",
      },
      sort: {
        found: "Топилди:",
        countSuffix: "та адвокат",
        label: "Саралаш:",
        options: {
          rating: "Юқори рейтинг бўйича",
          exp: "Энг кўп тажриба бўйича",
          priceAsc: "Арзонроқ нарх бўйича",
          priceDesc: "Қимматроқ нарх бўйича",
        },
      },
      card: {
        reviews: "шарҳ",
        experience: "Тажриба",
        casesWon: "Ютилган иш",
        priceLabel: "Хизмат нархи:",
        priceUnit: "сўм/соат",
        profileBtn: "Профиль",
      },
      notFound: {
        title: "Адвокат топилмади",
        subtitle:
          "Киритилган фильтр параметрларингизга мос келадиган адвокатлар рўйхати мавжуд эмас.",
        resetBtn: "Фильтрларни тозалаш",
      },
      categories: {
        all: "Барчаси",
        civil: "Фуқаролик ҳуқуқи",
        corporate: "Корпоратив ҳуқуқ",
        criminal: "Жиноят ҳуқуқи",
        family: "Оила ҳуқуқи",
      },
    },

    locationsPage: {
      header: {
        title: "Адвокатуралар харитаси",
        subtitle:
          "Фарғона вилоятидаги адвокатура ташкилотларини топинг ва энг яқин жойни танланг.",
      },
      filters: {
        locationSwitchLabel: "Энг яқин жойни танланг",
        locationSwitchSubtitle: "Жойлашувингизни аниқланг",
        searchPlaceholder: "Адвокатура номи ёки манзил",
        cityLabel: "Туман / Шаҳар",
        clearBtn: "Фильтрни тозалаш",
      },
      list: {
        foundCount: "та адвокатура топилди",
        sortLabel: "Саралаш",
        sortOptions: {
          popular: "Машҳурлик бўйича",
          nearest: "Энг яқинлари",
          rating: "Юқори рейтингли",
        },
        empty: "Ушбу фильтр бўйича ҳеч қандай адвокатура топилмади.",
        loadMore: "Яна кўпроқ юклаш",
      },
      card: {
        viewOnMap: "Хариталарда кўриш",
        distanceFallback: "1.2 км сиздан",
      },
      map: {
        myLocation: "Менинг жойлашувим",
        mapView: "Харита",
        satelliteView: "Сунъий йўлдош",
        getDirections: "Йўл кўрсатиш",
        call: "Қўнғироқ",
        viewMap: "Харита",
        reviewsText: "4.3 (128 та шарҳ)",
        openNow: "Ҳозир очиқ",
        hours: "09:00 - 18:00",
        locationPrompt: "Жойлашувингизни ёқинг ва энг яқин адвокатларни топинг",
        enableLocation: "Жойлашувни ёқиш",
      },
      locations: {
        all: "Барчаси",
        fargona: "Фарғона шаҳри",
        qoqon: "Қўқон шаҳри",
        margilon: "Марғилон шаҳри",
        rishton: "Риштон тумани",
        oltiariq: "Олтиариқ тумани",
        quvasoy: "Қувосой шаҳри",
        bagdod: "Багдод тумани",
        quva: "Қува тумани",
        buvayda: "Бувайда тумани",
        uchkoprik: "Учко'прик тумани",
        toshloq: "Тошлоқ тумани",
        yozyovon: "Ёзёвон тумани",
      },
    },

    ai: {
      badge: "AI Ҳуқуқий Ёрдамчи v2.0",
      titleStart: "Ақл билан",
      titleHighlight: "ҳуқуқий ечим",
      titleEnd: "топинг",
      subtitle:
        "Сунъий интеллект билан реал вақтда мулоқот қилинг, муаммоингизни таҳлил қилинг ва зудлик билан профессионал йўналиш олинг.",
      startBtn: "Суҳбатни Бошлаш",
      orSelectCat: "Ёки йўналиш бўйича танланг",
      categoryLabel: "Категория:",
      defaultCat: "Умумий ҳуқуқий ёрдам",
      finishBtn: "Якунлаш",
      activeBadge: "Фаол",
      placeholder: "Саволингизни ёзинг...",
      completedTitle: "Суҳбат Якунланди!",
      completedDesc:
        "Маълумотларингиз муваффақиятли сақланди ва қайта ишлашга тайёрланди.",
      direction: "Йўналиш:",
      msgCount: "Хабарлар сони:",
      status: "Ҳолат:",
      statusUploaded: "Тизимга юкланди",
      newChatBtn: "Янги Суҳбат Бошлаш",
      startToast: "Суҳбат бошланди!",
      finishError: "Суҳбатни якунлаш учун камида битта савол юборинг!",
      saveSuccess: "Мурожаатингиз сақланди!",
      ai: {
        typing: "AI таҳлил қилмоқда...",
        welcome: (cat) =>
          cat
            ? `Ассалому алайкум! Мен сизнинг интеллектуал ҳуқуқий ёрдамчингизман. **${cat}** бўйича қандай муаммо ёки саволингиз бор?`
            : "Ассалому алайкум! Мен сизнинг интеллектуал ҳуқуқий ёрдамчингизман. Сизга қандай ҳуқуқий масалада ёрдам бера оламан?",
        response: (prompt, cat) =>
          `Сизнинг "${prompt}" сўровингиз таҳлил қилинди. ${
            cat
              ? `${cat} бўйича амалдаги қонунчиликка кўра`
              : "Амалдаги ҳуқуқий меъёрларга кўра"
          }, сиз ўз ҳуқуқларингизни ҳимоя қилиш учун тегишли тартибда ариза шакллантиришингиз мумкин.`,
      },
    },

    theme: "Мавзу",
    search: "Қидириш...",
    submit: "Юбориш",
    next: "Кейинги",
    back: "Ортга",
  },

  // =========================================================
  // RUS TILI
  // =========================================================
  РУ: {
    header: {
      home: "Главная",
      assistant: "Помощник",
      knowledge: "Правовая база",
      cases: "Обращения",
      login: "Войти",
      profile: "Профиль",
      theme: "Тема",
      subtitle: "ПРАВОВОЙ ПОМОЩНИК",
      savedOnDevice: "Сохраняется на устройстве",
      sections: "На странице",
      aiChat: "AI чат",
      advocates: "Адвокаты",
      locations: "Местоположения",
    },

    footer: {
      subtitle: "Правовой помощник",
      disclaimer:
        "Даёт общую рекомендацию и не заменяет юридическое заключение адвоката. Законы могут изменяться — перед обращением проверьте официальный источник.",
      privacyNotice: "Данные сохраняются только на устройстве",
      officialSources: "На основе официальных источников",
    },

    hero: {
      kicker: "ЦИФРОВОЙ ПРАВОВОЙ ПОМОЩНИК ДЛЯ УЗБЕКИСТАНА",
      titlePart1: "Поймите проблему.",
      titlePart2: "Узнайте следующий шаг.",
      description:
        "За 4 коротких шага получите правовое основание, адрес для обращения и готовый документ для скачивания.",
      btnPrimary: "Получить помощь",
      btnSecondary: "Как это работает?",
      badge: "Помощник готов",
      cardTitle: "Результат — не просто совет",
      features: [
        "Статья закона и официальный источник",
        "Орган и порядок обращения",
        "DOC и PDF для печати",
        "Напоминание о сроках",
      ],
    },

    stepWizard: {
      headerLabel: "ПРАВОВОЕ РЕШЕНИЕ",
      headerTitle: "От вашей ситуации к чёткому плану",
      reset: "Начать заново",

      progress: {
        step: "этап",
        remaining: "этапов осталось",
        ready: "Результат готов",
        inProgress: "В процессе...",
      },

      steps: {
        direction: "Направление",
        situation: "Ситуация",
        evidence: "Доказательства",
        result: "Результат",
      },

      step1: {
        unit: "1",
        title: "Выберите направление проблемы",
        description:
          "Выберите тему, которая наиболее соответствует вашей ситуации.",
      },

      step2: {
        unit: "2",
        title: "Кратко опишите ситуацию",
        description:
          "Информация не отправляется на сервер и хранится только на устройстве.",
        fullName: "Ф.И.О.",
        opponent: "Противоположная сторона или организация",
        opponentPlaceholder: "Название организации или имя человека",
        date: "Дата события",
        descriptionLabel: "Что произошло?",
        descriptionPlaceholder: "Кратко опишите ситуацию...",
        minimum: "Минимум 15 символов.",
      },

      step3: {
        unit: "3",
        title: "Какие доказательства у вас есть?",
        description:
          "Отметьте имеющиеся доказательства — они будут добавлены в список приложений.",
        additional: "Дополнительное доказательство",
        additionalPlaceholder: "Введите дополнительную информацию...",
      },

      step4: {
        unit: "4",
        title: "План для вашей ситуации",
        category: "Жильё и имущество",
        checkedAt: "Проверка",
        legalNorms: "Наиболее подходящие нормы законодательства",
        whyTheseLaws: "Почему именно эти статьи?",
        actionPlan: "Чёткий план действий",
        readyAppeal: "Готовый текст обращения",
        step1:
          "по указанной ситуации отправьте письменное заявление противоположной стороне.",
        step2: "Чётко сформулируйте своё требование со ссылкой на статью 11.",
      },

      navigation: {
        back: "Назад",
        continue: "Продолжить",
        readyText: "Готовый текст обращения",
        viewAndCopy: "Просмотреть и скопировать",
      },

      categories: {
        work: {
          title: "Труд и занятость",
          subtitle: "Зарплата, документы, увольнение",
        },
        consumer: {
          title: "Права потребителей",
          subtitle: "Товары, услуги, возврат денег",
        },
        housing: {
          title: "Жильё и имущество",
          subtitle: "Аренда, имущество, выселение",
        },
        utilities: {
          title: "Коммунальные услуги",
          subtitle: "Расчёты, отключения, качество услуг",
        },
        fines: {
          title: "Штрафы",
          subtitle: "Постановление, протокол, жалоба",
        },
        family: {
          title: "Семейное право",
          subtitle: "Алименты, брак, права ребёнка",
        },
      },

      legalData: {
        work: {
          laws: [
            {
              title:
                "Трудовой кодекс 161 статья — Расторжение трудового договора",
              desc: "Трудовой договор прекращается на основаниях, предусмотренных законом.",
            },
            {
              title:
                "Трудовой кодекс 244 статья — Сроки выплаты заработной платы",
              desc: "Работодатель обязан выплачивать зарплату сотруднику вовремя и полностью.",
            },
          ],
          actions: [
            "Направьте работодателю официальное письменное возражение или претензию.",
            "Обратитесь в трудовую инспекцию (Министерство занятости).",
            "Если результата нет, подайте иск в суд по гражданским делам.",
          ],
        },
        consumer: {
          laws: [
            {
              title: "О защите прав потребителей 18 статья",
              desc: "Если товар оказался некачественным, потребитель вправе потребовать обмена или возврата денег.",
            },
          ],
          actions: [
            "Направьте продавцу/исполнителю письменную претензию с чеком и доказательствами.",
            "Обратитесь в агентство по защите прав потребителей.",
          ],
        },
        housing: {
          laws: [
            {
              title: "Жилищный кодекс 11 статья — Защита жилищных прав",
              desc: "Нарушенные жилищные права защищаются в установленном законом порядке.",
            },
            {
              title: "Жилищный кодекс 86 статья — Аренда жилого помещения",
              desc: "Пользование жилым помещением за плату оформляется договором.",
            },
          ],
          actions: [
            "Направьте арендодателю или противоположной стороне письменное уведомление.",
            "Подготовьте договор аренды и платежные квитанции.",
            "Обратитесь с заявлением в районный гражданский суд.",
          ],
        },
        utilities: {
          laws: [
            {
              title:
                "Правила предоставления коммунальных услуг — Качество услуги",
              desc: "Организация обязана обеспечивать потребителя бесперебойной и качественной коммунальной услугой.",
            },
          ],
          actions: [
            "Направьте официальную претензию соответствующей коммунальной организации.",
            "Сообщите в инспекцию при МИБ или Генпрокуратуре.",
          ],
        },
        fines: {
          laws: [
            {
              title:
                "КоАП 315 статья — Жалоба на административное постановление",
              desc: "На постановление о штрафе можно подать жалобу в течение 10 дней.",
            },
          ],
          actions: [
            "Получите копию постановления или протокола.",
            "Подайте жалобу в административный суд в течение 10 дней.",
          ],
        },
        family: {
          laws: [
            {
              title: "Семейный кодекс 96 статья — Взыскание алиментов",
              desc: "Родители обязаны обеспечивать своих несовершеннолетних детей.",
            },
          ],
          actions: [
            "Подайте заявление в гражданский суд о взыскании алиментов.",
            "Подготовьте копии свидетельств о рождении детей.",
          ],
        },
      },

      evidences: {
        contract: "Копия договора или решения",
        receipt: "Чек / подтверждение оплаты",
        photo_video: "Фото или видео",
        messages: "SMS, e-mail или переписка в мессенджере",
        witness: "Данные свидетеля",
        previous_appeal: "Предыдущее обращение и ответ",
      },
    },

    appealModal: {
      badge: "ГОТОВЫЙ РЕЗУЛЬТАТ",
      title: "Текст обращения",
      subtitle:
        "Текст сформирован на основе введённых вами данных. Перед отправкой проверьте пустые поля и факты.",
      copyBtn: "Скопировать текст",
      copy: "Копировать",
      copied: "Скопировано!",
      pdfBtn: "Скачать PDF",
      wordBtn: "Word .doc",
      noEvidences: "Нет",
    },

    appealTemplate: {
      header: "В ХОКИМИЯТ РАЙОНА/ГОРОДА ИЛИ В СУД ПО ГРАЖДАНСКИМ ДЕЛАМ",
      from: "От кого",
      address: "Адрес и контакты",
      enter: "введите",
      title: "ЗАЯВЛЕНИЕ",
      bodyIntro: "Я",
      bodyText: "числа",
      bodyText2: "обращаюсь по следующей ситуации, связанной с",
      legalBasis: "ПРАВОВОЕ ОСНОВАНИЕ",
      requestHeader: "НА ОСНОВАНИИ ВЫШЕПЕРЕЧИСЛЕННОГО ПРОШУ",
      request1:
        "Проверить изложенные обстоятельства в пределах ваших полномочий",
      request2:
        "Восстановить нарушенное право и принять предусмотренные законом меры",
      request3:
        "Направить мне письменный ответ о принятом решении и его основаниях",
      attachments: "ПРИЛОЖЕНИЯ",
      date: "Дата",
      signature: "Подпись",
      note: "Примечание: перед отправкой проверьте факты, полномочия органа и заявленные требования.",
    },

    stepsOverview: [
      {
        id: "01",
        title: "Выберите направление",
        desc: "Определяется правовая сфера, соответствующая проблеме.",
      },
      {
        id: "02",
        title: "Опишите ситуацию",
        desc: "Введите основные данные простым языком.",
      },
      {
        id: "03",
        title: "Укажите доказательства",
        desc: "Соберите доступные документы и доказательства.",
      },
      {
        id: "04",
        title: "Получите практический результат",
        desc: "План, адрес, документ и срок — в одном месте.",
      },
    ],
    stepsText: {
      title: "Как это работает?",
      desc: "Мы разделили сложный путь на четыре простых шага",
    },

    knowledgeBase: {
      kicker: "ПРАВОВАЯ БАЗА",
      title: "Распространённые ситуации",
      sourceNote: "Ссылки на источники ведут на официальные документы LexUZ.",
      articlesCount: "5 практических статей",
      checkOnLexUz: "Проверить в LexUZ ↗",
    },

    myAppeals: {
      kicker: "ТОЛЬКО НА ЭТОМ УСТРОЙСТВЕ",
      title: "Мои обращения",
      clearAll: "Очистить всё",
      emptyTitle: "Сохранённых обращений пока нет.",
      emptyDesc: "Нажмите «Сохранить обращение» в конце процесса.",
    },

    profilePage: {
      badge: "Профиль пользователя",
      edit: "Редактировать",
      save: "Сохранить",
      cancel: "Отмена",
      personalInfo: "Личные данные",
      fullName: "Полное имя",
      email: "Email",
      phone: "Телефон",
      occupation: "Специальность / деятельность",
      bio: "О себе (bio)",
      education: "Образование и языки",
      educationStage: "Уровень:",
      englishLevel: "Уровень английского:",
      skillsTitle: "Технические навыки",
      toastSuccess: "Данные профиля успешно сохранены!",
    },

    advocatesPage: {
      header: {
        title: "Профессиональные",
        titleHighlight: "Адвокаты",
        subtitle:
          "Выберите подходящего юриста по опыту, стоимости услуг и специализации и свяжитесь с ним напрямую.",
      },
      filters: {
        title: "Фильтры",
        searchLabel: "Поиск",
        searchPlaceholder: "Имя или специализация...",
        specialtyLabel: "Специализация",
        maxPriceLabel: "Макс. цена (в час)",
        currency: "сум",
        minExpLabel: "Мин. опыт",
        years: "лет",
        resetBtn: "Сбросить фильтры",
      },
      sort: {
        found: "Найдено:",
        countSuffix: "адвокатов",
        label: "Сортировка:",
        options: {
          rating: "По рейтингу",
          exp: "По наибольшему опыту",
          priceAsc: "Сначала дешевле",
          priceDesc: "Сначала дороже",
        },
      },
      card: {
        reviews: "отзывов",
        experience: "Опыт",
        casesWon: "Выиграно дел",
        priceLabel: "Стоимость услуг:",
        priceUnit: "сум/час",
        profileBtn: "Профиль",
      },
      notFound: {
        title: "Адвокаты не найдены",
        subtitle:
          "Список адвокатов, соответствующих введенным параметрам фильтра, отсутствует.",
        resetBtn: "Сбросить фильтры",
      },
      categories: {
        all: "Все",
        civil: "Гражданское право",
        corporate: "Корпоративное право",
        criminal: "Уголовное право",
        family: "Семейное право",
      },
    },

    locationsPage: {
      header: {
        title: "Карта адвокатур",
        subtitle:
          "Найдите адвокатские организации в Ферганской области и выберите ближайшее место.",
      },
      filters: {
        locationSwitchLabel: "Выберите ближайшее место",
        locationSwitchSubtitle: "Определите ваше местоположение",
        searchPlaceholder: "Название адвокатуры или адрес",
        cityLabel: "Район / Город",
        clearBtn: "Сбросить фильтр",
      },
      list: {
        foundCount: "адвокатур найдено",
        sortLabel: "Сортировка",
        sortOptions: {
          popular: "По популярности",
          nearest: "Ближайшие",
          rating: "С высоким рейтингом",
        },
        empty: "По этому фильтру не найдено ни одной адвокатуры.",
        loadMore: "Загрузить ещё",
      },
      card: {
        viewOnMap: "Посмотреть на карте",
        distanceFallback: "1.2 км от вас",
      },
      map: {
        myLocation: "Моё местоположение",
        mapView: "Карта",
        satelliteView: "Спутник",
        getDirections: "Построить маршрут",
        call: "Позвонить",
        viewMap: "Карта",
        reviewsText: "4.3 (128 отзывов)",
        openNow: "Сейчас открыто",
        hours: "09:00 - 18:00",
        locationPrompt:
          "Включите ваше местоположение и найдите ближайших адвокатов",
        enableLocation: "Включить местоположение",
      },
      locations: {
        all: "Все",
        fargona: "г. Фергана",
        qoqon: "г. Коканд",
        margilon: "г. Маргилан",
        rishton: "Риштанский район",
        oltiariq: "Алтыарыкский район",
        quvasoy: "г. Кувасай",
        bagdod: "Багдадский район",
        quva: "Кувинский район",
        buvayda: "Бувайдинский район",
        uchkoprik: "Учкуприкский район",
        toshloq: "Ташлакский район",
        yozyovon: "Язъяванский район",
      },
    },

    ai: {
      badge: "AI Юридический Помощник v2.0",
      titleStart: "Найдите",
      titleHighlight: "правовое решение",
      titleEnd: "с умом",
      subtitle:
        "Общайтесь с искусственным интеллектом в реальном времени, анализируйте вашу проблему и получайте профессиональные рекомендации.",
      startBtn: "Начать чат",
      orSelectCat: "Или выберите по направлению",
      categoryLabel: "Категория:",
      defaultCat: "Общая юридическая помощь",
      finishBtn: "Завершить",
      activeBadge: "Активен",
      placeholder: "Введите ваш вопрос...",
      completedTitle: "Консультация завершена!",
      completedDesc:
        "Ваши данные успешно сохранены и подготовлены для дальнейшей обработки.",
      direction: "Направление:",
      msgCount: "Сообщений:",
      status: "Статус:",
      statusUploaded: "Загружено в систему",
      newChatBtn: "Начать новый чат",
      startToast: "Чат начат!",
      finishError: "Отправьте хотя бы один вопрос, чтобы завершить чат!",
      saveSuccess: "Ваше обращение сохранено!",
      ai: {
        typing: "AI анализирует...",
        welcome: (cat) =>
          cat
            ? `Здравствуйте! Я ваш интеллектуальный юридический помощник. Какой у вас вопрос по теме **${cat}**?`
            : "Здравствуйте! Я ваш интеллектуальный юридический помощник. Чем я могу помочь вам в правовых вопросах?",
        response: (prompt, cat) =>
          `Ваш запрос "${prompt}" был проанализирован. ${
            cat
              ? `Согласно действующему законодательству по теме ${cat}`
              : "Согласно действующим правовым нормам"
          }, вы можете подать заявление в установленном порядке для защиты своих прав.`,
      },
    },

    theme: "Тема",
    search: "Поиск...",
    submit: "Отправить",
    next: "Далее",
    back: "Назад",
  },

  // =========================================================
  // ENGLISH
  // =========================================================
  ENG: {
    header: {
      home: "Home",
      assistant: "Assistant",
      knowledge: "Legal database",
      cases: "Appeals",
      login: "Login",
      profile: "Profile",
      theme: "Theme",
      subtitle: "LEGAL ASSISTANT",
      savedOnDevice: "Saved on this device",
      sections: "On this page",
      aiChat: "AI chat",
      advocates: "Advocates",
      locations: "Locations",
    },

    footer: {
      subtitle: "Legal assistant",
      disclaimer:
        "Provides general guidance and does not replace a lawyer’s opinion. Laws may change — verify the official source before filing an appeal.",
      privacyNotice: "Data is stored only on this device",
      officialSources: "Based on official sources",
    },

    hero: {
      kicker: "DIGITAL LEGAL ASSISTANT FOR UZBEKISTAN",
      titlePart1: "Understand the problem.",
      titlePart2: "Know the next step.",
      description:
        "Get the legal basis, the right authority, and a ready-to-download document in 4 simple steps.",
      btnPrimary: "Get help",
      btnSecondary: "How does it work?",
      badge: "Assistant ready",
      cardTitle: "The result — more than just advice",
      features: [
        "Legal article and official source",
        "Authority and submission procedure",
        "DOC and printable PDF",
        "Deadline reminder",
      ],
    },

    stepWizard: {
      headerLabel: "LEGAL SOLUTION",
      headerTitle: "From your situation to a clear plan",
      reset: "Start over",

      progress: {
        step: "step",
        remaining: "steps left",
        ready: "Result ready",
        inProgress: "In progress...",
      },

      steps: {
        direction: "Direction",
        situation: "Situation",
        evidence: "Evidence",
        result: "Result",
      },

      step1: {
        unit: "1",
        title: "Choose the problem area",
        description: "Select the topic that best matches your situation.",
      },

      step2: {
        unit: "2",
        title: "Briefly describe the situation",
        description:
          "Your information is not sent to a server and remains only on your device.",
        fullName: "Full name",
        opponent: "Other party or organization",
        opponentPlaceholder: "Organization name or person",
        date: "Date of the event",
        descriptionLabel: "What happened?",
        descriptionPlaceholder: "Briefly describe the situation...",
        minimum: "At least 15 characters.",
      },

      step3: {
        unit: "3",
        title: "What evidence do you have?",
        description:
          "Select the available evidence — it will be added to the attachment list.",
        additional: "Additional evidence",
        additionalPlaceholder: "Enter any additional information...",
      },

      step4: {
        unit: "4",
        title: "Plan for your situation",
        category: "Housing and property",
        checkedAt: "Checked",
        legalNorms: "Most relevant legal provisions",
        whyTheseLaws: "Why these articles?",
        actionPlan: "Clear action plan",
        readyAppeal: "Ready appeal text",
        step1:
          "send a written application to the other party regarding the situation.",
        step2: "Clearly state your request based on Article 11.",
      },

      navigation: {
        back: "Back",
        continue: "Continue",
        readyText: "Ready appeal text",
        viewAndCopy: "View and copy",
      },

      categories: {
        work: {
          title: "Employment and labor",
          subtitle: "Salary, documents, dismissal",
        },
        consumer: {
          title: "Consumer rights",
          subtitle: "Goods, services, refunds",
        },
        housing: {
          title: "Housing and property",
          subtitle: "Rent, property, eviction",
        },
        utilities: {
          title: "Utilities",
          subtitle: "Billing, outages, service quality",
        },
        fines: {
          title: "Fines",
          subtitle: "Decision, protocol, complaint",
        },
        family: {
          title: "Family law",
          subtitle: "Alimony, marriage, child rights",
        },
      },

      legalData: {
        work: {
          laws: [
            {
              title:
                "Labor Code Article 161 — Termination of an employment contract",
              desc: "An employment contract is terminated on the grounds provided by law.",
            },
            {
              title: "Labor Code Article 244 — Salary payment deadlines",
              desc: "The employer must pay wages to the employee on time and in full.",
            },
          ],
          actions: [
            "Send the employer an official written objection or claim.",
            "Contact the labor inspectorate (Ministry of Employment).",
            "If there is no result, file a civil court claim.",
          ],
        },
        consumer: {
          laws: [
            {
              title: "Consumer Protection Law Article 18",
              desc: "If a product is defective, the consumer has the right to request a replacement or a refund.",
            },
          ],
          actions: [
            "Send the seller/provider a written claim with a receipt and supporting evidence.",
            "Contact the consumer protection agency.",
          ],
        },
        housing: {
          laws: [
            {
              title: "Housing Code Article 11 — Protection of housing rights",
              desc: "Violations of housing rights are protected in the manner prescribed by law.",
            },
            {
              title: "Housing Code Article 86 — Rental of residential property",
              desc: "The use of residential property for payment must be formalized by contract.",
            },
          ],
          actions: [
            "Send the landlord or the opposing party a written notice.",
            "Prepare the lease agreement and payment receipts.",
            "Submit a statement to the district civil court.",
          ],
        },
        utilities: {
          laws: [
            {
              title: "Utility Service Rules — Service quality",
              desc: "The organization must provide uninterrupted and high-quality utility service.",
            },
          ],
          actions: [
            "Submit an official complaint to the relevant utility provider.",
            "Report it to the inspectorate under the MIB or the Prosecutor General's Office.",
          ],
        },
        fines: {
          laws: [
            {
              title:
                "Administrative Code Article 315 — Complaint against an administrative decision",
              desc: "A fine decision may be appealed within 10 days.",
            },
          ],
          actions: [
            "Obtain a copy of the decision or protocol.",
            "File a complaint with the administrative court within 10 days.",
          ],
        },
        family: {
          laws: [
            {
              title: "Family Code Article 96 — Alimony recovery",
              desc: "Parents are required to support their minor children.",
            },
          ],
          actions: [
            "File an application with the civil court for alimony recovery.",
            "Prepare copies of the children's birth certificates.",
          ],
        },
      },

      evidences: {
        contract: "Copy of contract or decision",
        receipt: "Receipt / proof of payment",
        photo_video: "Photo or video",
        messages: "SMS, e-mail or messenger correspondence",
        witness: "Witness information",
        previous_appeal: "Previous appeal and response",
      },
    },

    appealModal: {
      badge: "READY RESULT",
      title: "Appeal text",
      subtitle:
        "The text was generated based on the information you provided. Check the blank fields and facts before submitting.",
      copyBtn: "Copy text",
      copy: "Copy",
      copied: "Copied!",
      pdfBtn: "Download PDF",
      wordBtn: "Word .doc",
      noEvidences: "None",
    },

    appealTemplate: {
      header: "TO THE DISTRICT/CITY HOKIMIYAT OR CIVIL COURT",
      from: "From",
      address: "Address and contact details",
      enter: "enter",
      title: "APPLICATION",
      bodyIntro: "I",
      bodyText: "on",
      bodyText2:
        "submit this appeal regarding the following situation related to",
      legalBasis: "LEGAL BASIS",
      requestHeader: "BASED ON THE ABOVE, I REQUEST",
      request1:
        "To examine the stated circumstances within the scope of your authority",
      request2: "To restore the violated right and take lawful measures",
      request3:
        "To send me a written response regarding the decision made and its grounds",
      attachments: "ATTACHMENTS",
      date: "Date",
      signature: "Signature",
      note: "Note: check the facts, authority of the institution, and your requests before submitting.",
    },

    stepsOverview: [
      {
        id: "01",
        title: "Select direction",
        desc: "The legal area relevant to the problem is identified.",
      },
      {
        id: "02",
        title: "Describe the situation",
        desc: "Enter the basic details in simple language.",
      },
      {
        id: "03",
        title: "Mark the evidence",
        desc: "Gather available documents and evidence.",
      },
      {
        id: "04",
        title: "Get a practical result",
        desc: "Plan, address, document, and deadline in one place.",
      },
    ],

    stepsText: {
      title: "How does it work?",
      desc: "We have broken down the complex path into four simple steps",
    },

    knowledgeBase: {
      kicker: "LEGAL DATABASE",
      title: "Common situations",
      sourceNote: "Source links lead to official LexUZ documents.",
      articlesCount: "5 practical articles",
      checkOnLexUz: "Check on LexUZ ↗",
    },

    myAppeals: {
      kicker: "ONLY ON THIS DEVICE",
      title: "My appeals",
      clearAll: "Clear all",
      emptyTitle: "No saved appeals yet.",
      emptyDesc: "Click “Save appeal” at the end of the process.",
    },

    profilePage: {
      badge: "User profile",
      edit: "Edit",
      save: "Save",
      cancel: "Cancel",
      personalInfo: "Personal information",
      fullName: "Full name",
      email: "Email address",
      phone: "Phone number",
      occupation: "Profession / activity",
      bio: "About me (bio)",
      education: "Education & languages",
      educationStage: "Stage:",
      englishLevel: "English level:",
      skillsTitle: "Technical skills",
      toastSuccess: "Profile information was saved successfully!",
    },

    advocatesPage: {
      header: {
        title: "Professional",
        titleHighlight: "List of Advocates",
        subtitle:
          "Choose the right lawyer based on experience, rate, and specialty, and contact them directly.",
      },
      filters: {
        title: "Filters",
        searchLabel: "Search",
        searchPlaceholder: "Name or specialty...",
        specialtyLabel: "Specialization",
        maxPriceLabel: "Max Price (hourly)",
        currency: "UZS",
        minExpLabel: "Min. Experience",
        years: "years",
        resetBtn: "Reset Filters",
      },
      sort: {
        found: "Found:",
        countSuffix: "advocates",
        label: "Sort by:",
        options: {
          rating: "Highest rating",
          exp: "Most experienced",
          priceAsc: "Price: Low to High",
          priceDesc: "Price: High to Low",
        },
      },
      card: {
        reviews: "reviews",
        experience: "Experience",
        casesWon: "Cases won",
        priceLabel: "Service fee:",
        priceUnit: "UZS/hr",
        profileBtn: "Profile",
      },
      notFound: {
        title: "No advocates found",
        subtitle:
          "There are no advocates matching your current filter criteria.",
        resetBtn: "Reset Filters",
      },
      categories: {
        all: "All",
        civil: "Civil Law",
        corporate: "Corporate Law",
        criminal: "Criminal Law",
        family: "Family Law",
      },
    },

    locationsPage: {
      header: {
        title: "Advocacy map",
        subtitle:
          "Find advocacy organizations across the Fergana region and choose the closest location.",
      },
      filters: {
        locationSwitchLabel: "Choose the nearest place",
        locationSwitchSubtitle: "Detect your location",
        searchPlaceholder: "Advocacy name or address",
        cityLabel: "District / City",
        clearBtn: "Clear filters",
      },
      list: {
        foundCount: "advocacy centers found",
        sortLabel: "Sort",
        sortOptions: {
          popular: "Most popular",
          nearest: "Closest",
          rating: "Highest rated",
        },
        empty: "No advocacy centers were found for this filter.",
        loadMore: "Load more",
      },
      card: {
        viewOnMap: "View on map",
        distanceFallback: "1.2 km from you",
      },
      map: {
        myLocation: "My location",
        mapView: "Map",
        satelliteView: "Satellite",
        getDirections: "Get directions",
        call: "Call",
        viewMap: "Map",
        reviewsText: "4.3 (128 reviews)",
        openNow: "Open now",
        hours: "09:00 - 18:00",
        locationPrompt: "Turn on your location and find the nearest advocates",
        enableLocation: "Enable location",
      },
      locations: {
        all: "All",
        fargona: "Fergana city",
        qoqon: "Qoqon city",
        margilon: "Margilan city",
        rishton: "Rishton district",
        oltiariq: "Oltiariq district",
        quvasoy: "Quvasoy city",
        bagdod: "Bagdod district",
        quva: "Quva district",
        buvayda: "Buvayda district",
        uchkoprik: "Uchkoprik district",
        toshloq: "Toshloq district",
        yozyovon: "Yozyovon district",
      },
    },

    ai: {
      badge: "AI Legal Assistant v2.0",
      titleStart: "Find a smart",
      titleHighlight: "legal solution",
      titleEnd: "instantly",
      subtitle:
        "Chat with artificial intelligence in real time, analyze your problem, and get immediate professional guidance.",
      startBtn: "Start Consultation",
      orSelectCat: "Or select by category",
      categoryLabel: "Category:",
      defaultCat: "General Legal Advice",
      finishBtn: "Finish",
      activeBadge: "Active",
      placeholder: "Type your question...",
      completedTitle: "Consultation Finished!",
      completedDesc:
        "Your information has been successfully saved and processed.",
      direction: "Category:",
      msgCount: "Total messages:",
      status: "Status:",
      statusUploaded: "Saved to System",
      newChatBtn: "Start New Chat",
      startToast: "Chat started!",
      finishError: "Please send at least one message before finishing!",
      saveSuccess: "Your request has been saved!",
      ai: {
        typing: "AI is analyzing...",
        welcome: (cat) =>
          cat
            ? `Hello! I am your AI legal assistant. What issue or question do you have regarding **${cat}**?`
            : "Hello! I am your AI legal assistant. How can I assist you with your legal matters today?",
        response: (prompt, cat) =>
          `Your request "${prompt}" has been analyzed. ${
            cat
              ? `According to current legislation on ${cat}`
              : "According to applicable legal standards"
          }, you may submit a formal application to protect your rights.`,
      },
    },

    theme: "Theme",
    search: "Search...",
    submit: "Submit",
    next: "Next",
    back: "Back",
  },
};
