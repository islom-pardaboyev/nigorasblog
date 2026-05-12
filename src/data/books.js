export const books = [
  {
    id: 1,
    novel_name: "Qanday go'zal bu olam",
    author: "Rauf Tolib",
    genre: "She'r",
    short_description: "Tabiat va hayotning go'zalligi haqida ilhomli she'r...",
    text: `Yasharar, yashnar olam,
    Jilo berar o'ziga.
    Hattoki maysalar ham
    Boshqachadir ko'zimga.

Chorlaydi quchog'iga
Jilva qilib bu hayot.
Yuguraman, chopaman,
Orzudan bog'lab qanot.

Hadya etadi bog'lar
Menga bir olam qo'shiq.
Shamol meni quchoqlar: —
Yur, — der, — maqsadga oshiq!

Bildim, intilish, izlash —
Hayotimning mazmuni.
Do'stlarim — hamroh, safdosh,
Yuragimning ustuni.

Urilib toshdan toshga,
Oqadi tog' suvlari.
Yo'q, u qalbimdan toshgan
Hislarim, tuyg'ularim.

Ufqlar ochar quchoq,
Ta'zim etar tog'lar ham.
Qanday yaxshi yashamoq,
Qanday go'zal bu olam!`,

    tasks: [
      {
        id: 1,
        type: "drag_to_table",
        title: "1-topshiriq: Sinonimlarni toping",
        instruction: "She'rdagi so'zni uning sinonimiga torting",
        columns: ["She'rdagi so'z", "Sinonim"],
        items: [
          "Yasharar",
          "Yashnar",
          "Chorlaydi",
          "Chaqiradi",
          "Hadya etadi",
          "Bag'ishlaydi",
          "Yuguraman",
          "Chopaman",
          "Oshiq",
          "Intiluvchi",
          "Ustuni",
          "Tayanchi",
          "Ta'zim etar",
          "Bosh egadi",
          "Ufqlar",
          "Ufq chegaralar",
        ],
        correct: {
          "She'rdagi so'z": [
            "Yasharar",
            "Chorlaydi",
            "Hadya etadi",
            "Yuguraman",
            "Oshiq",
            "Ustuni",
            "Ta'zim etar",
            "Ufqlar",
          ],
          Sinonim: [
            "Yashnar",
            "Chaqiradi",
            "Bag'ishlaydi",
            "Chopaman",
            "Intiluvchi",
            "Tayanchi",
            "Bosh egadi",
            "Ufq chegaralar",
          ],
        },
      },
      {
        id: 2,
        type: "ordering",
        title: "2-topshiriq: Bandlarni tartibga keltiring",
        instruction: "She'r bandlarini to'g'ri ketma-ketlikda joylashtiring",
        correct_order: [
          "Yasharar, yashnar olam, Jilo berar o'ziga...",
          "Hadya etadi bog'lar, Menga bir olam qo'shiq...",
          "Urilib toshdan toshga, Oqadi tog' suvlari...",
          "Chorlaydi quchog'iga, Jilva qilib bu hayot...",
          "Bildim, intilish, izlash — Hayotimning mazmuni...",
          "Ufqlar ochar quchoq, Ta'zim etar tog'lar ham...",
        ],
      },
      {
        id: 3,
        type: "written_questions",
        title: "3-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "She'rda tabiat qanday tasvirlangan? 5-6 gap yozib, o'z fikringizni bildiring.",
          "She'rning asosiy g'oyasi nima deb o'ylaysiz? 'Qanday go'zal bu olam' misrasini o'z so'zlaringiz bilan izohlang.",
          "She'rda sizga eng yoqqan misrani tanlang va nima uchun yoqqanini 4-5 gap bilan yozing.",
        ],
      },
      {
        id: 4,
        type: "oral_questions",
        title: "4-topshiriq: Og'zaki savollar",
        questions: [
          "She'r sizda qanday his-tuyg'ularni uyg'otdi?",
          "Shoir she'rni qanday kayfiyatda yozgan deb o'ylaysiz?",
          "She'rdagi 'Shamol meni quchoqlar' misrasida qanday san'at qo'llangan?",
          "Sizningcha, 'Orzudan bog'lab qanot' misrasi nima ma'noni anglatadi?",
          "'Do'stlarim — hamroh, safdosh, Yuragimning ustuni' misralarini hayotingiz bilan bog'lang.",
          "She'rda tabiat va inson o'rtasidagi munosabat qanday tasvirlangan?",
          "She'rning oxirgi bandi nima bilan yakunlanadi va bu qanday ta'sir qoldiradi?",
        ],
      },
    ],
  },
  {
    id: 2,
    novel_name: "Arining qasosi (I qism)",
    author: "Muhabbat Hamidova",
    genre: "Hikoya",
    short_description:
      "Sardor va O'tkir daladan qaytarkan, ari uyasiga duch kelishadi...",
    text: `Sardor sigirini soyaga olib, o'rtog'i O'tkir bilan daladan qaytarkan atrofi beton g'isht bilan o'ralgan paxta titish sexi yonida to'xtab qoldi.
- O'tkir, qara, anavi devorning orasida qovog'arining uyasi bor ekan. Hozir uchta ari ketma-ket kirib ketdi, - dedi g'ishtlar ochiq joyga ishora qilib.
- E, qovog'ari juda yomon, bir marta buzog'imni chaqqanda hamma yog'i shishib ketgan. Mol do'xtiri Murod amaki uch kun ukol qilib, zo'rg'a tuzatib bergan. Arilarni yo'qotish kerak, - deya O'tkir atrofga qarab nimanidir qidirdi. Keyin asta borib, daraxt tagida yotgan uzun cho'pni oldi.
- Jinnimisan, inini buzmoqchimisan? Uning jahli yomon, dabdalamizni chiqaradi, - dedi qo'rqib ketgan Sardor.
- Buzamiz-u, qochamiz. Kim qilganini bilmay qoladi, - dedi O'tkir, yoriqqa cho'p tiqib kovlarkan. Kovladi-yu, cho'pni ham olmasdan ura qochdi. Sardor cho'pni olib tashlamoqchi bo'lgandi, ikki-uchta ari vizillab uyadan chiqdi.
Ular Sardorga e'tibor ham bermay, O'tkirni quvlashga tushdi. Qo'rqib ketgan Sardor o'rtog'ining ketidan yugurdi. Tepasida o'zidan ortiq ari xuddi bombaga ketayotgan samolyotlarday bir safga tizilib uchardi. Qizig'i, ular Sardorga qarashmasdi ham. Arilarning o'zidan uzoqlashganini sezgach, Sardor nafasini rostlash uchun ariq chetidagi tut soyasiga o'tdi.
- Uff, xayriyat topisholmadi, - degan ovozni eshitib, tepaga qaradi.
- Tavba, qanday ulgurding, yaxshiyam seni ko'rishmadi, bo'lmasa do'mbira qo'zi qilib chiqib tashlashardi.
- Meni bilasan-ku, shamoldan ham tez yuguraman, - maqtandi O'tkir. Keyin hayron bo'lib Sardorga qaradi. Qiziq, nega ular senga tegishmadi? Yoki uyalarini sen buzmaganingni bilishdimikan-a?
- Men ham shunga hayronman. Qulog'im tagidan viz-viz uchib, osmonga ko'tarilishdi. Voy, - o'rnidan turib ketdi Sardor, - ular qaytishyapti, berkin.
O'tkir tutlarning panasiga o'tdi. Uch-to'rtta ari shundoq tepalaridan uchib o'tdi. Lekin ikkitasi tut atrofida ikki-uch bor aylandi. Sardorning naq peshonasi tepasida vizillashdi. Sardor beixtiyor qo'llari bilan yuzini to'sdi. Arilar o'yinlarini qattiq-qattiq silkitib yig'ib olishdi-da, uyalari tomon uchib ketishdi. Ikki o'rtoq uyga qaytarkan, O'tkir arilarni qanday chalg'itganini ko'pirib maqtanardi...`,
    tasks: [
      {
        id: 1,
        type: "drag_and_drop_qa",
        title: "1-topshiriq",
        instruction: "Har bir savolga mos javob kartochkasini torting",
        pairs: [
          {
            question: "Sardor nimani soyaga olib ketayotgan edi?",
            answer: "Sigir",
          },
          { question: "Bolalar qayerdan qaytayotgan edi?", answer: "Dala" },
          {
            question: "Devor orasida qaysi hasharotning uyasi bor edi?",
            answer: "Ari",
          },
          { question: "O'tkir uyani nima bilan kovladi?", answer: "Cho'p" },
          { question: "Arilar kimni quvladi?", answer: "O'tkir" },
          { question: "Sardor qayerda dam oldi?", answer: "Ariq" },
          { question: "Sardor qaysi daraxt soyasida o'tirdi?", answer: "Tut" },
          { question: "O'tkir nimasi bilan maqtandi?", answer: "Tezligi" },
          { question: "Arilar qanday ovoz chiqardi?", answer: "Vizillash" },
          { question: "Hikoyada qaysi jonivor zarar ko'rdi?", answer: "Buzoq" },
          {
            question: "Sardor sigirini qayerga olib ketayotgan edi?",
            answer: "Soyaga",
          },
          { question: "Uyasi devorning qayerida edi?", answer: "Yoriqda" },
          {
            question: "O'tkir cho'pni qayerdan oldi?",
            answer: "Daraxt tagidan",
          },
          { question: "Sardor qaysi joyini yopdi?", answer: "Yuzini" },
          {
            question: "Murod amakining kasbi nima edi?",
            answer: "Mol do'xtiri",
          },
          {
            question: "O'tkirning buzog'i nechi kunda tuzalgan edi?",
            answer: "3 kunda",
          },
        ],
      },
      {
        id: 2,
        type: "image_match_drag",
        title: "2-topshiriq",
        instruction: "Rasmni ko'rib, hasharot nomini mos rasmga torting",
        items: [
          {
            name: "Chigirtka",
            searchQuery: "grasshopper insect",
            imageUrl: "https://xabar.uz/static/crop/2/4/920__95_2445095481.jpg",
          },
          {
            name: "Chumoli",
            searchQuery: "ant insect",
            imageUrl:
              "https://ziyouz.uz/wp-content/uploads/2022/12/chumoli.jpg",
          },
          {
            name: "Qo'ng'iz",
            imageUrl:
              "https://zamin.uz/uploads/posts/2026-02/9fdc66346b_dizayn-bez-nazvaniya-2026-02-24t143631_056.webp",
            searchQuery: "beetle insect",
          },
          {
            name: "Beshiktebratar",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/European_praying_mantis_%28Mantis_religiosa%29_green_female_Dobruja.jpg/330px-European_praying_mantis_%28Mantis_religiosa%29_green_female_Dobruja.jpg",
            searchQuery: "ladybug insect",
          },
          {
            name: "Suvarak",
            imageUrl:
              "https://odam.uz/upload/media/posts/2020-07/15/uydagi-suvaraklardan-samarali-halos-bo-lish-yo-llari_1594827985-b.jpg",
            searchQuery: "cockroach insect",
          },
          {
            name: "Xonqizi",
            imageUrl:
              "https://jizkarantin.uz/uploads/posts/2022-06/2022-06-14_215207.jpg",
            searchQuery: "ladybug red insect",
          },
          {
            name: "Tillaqo'ng'iz",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Feldmaik%C3%A4fer_%28Melolontha_melolontha%29_w_1.jpg/250px-Feldmaik%C3%A4fer_%28Melolontha_melolontha%29_w_1.jpg",
            searchQuery: "golden beetle insect",
          },
          {
            name: "Qirqoyoq",
            searchQuery: "centipede",
            imageUrl:
              "https://storage.kun.uz/source/1/KN4Kkh-3rrwM0HI9KIY3UnYklt9qhuZQ.jpg",
          },
          {
            name: "Ari",
            imageUrl: "https://xabar.uz/static/crop/3/9/920__95_3933599615.jpg",
            searchQuery: "bee insect",
          },
          {
            name: "Qovog'ari",
            imageUrl:
              "https://storage.kun.uz/source/3/TvDT1BUbMEYX3loHCv74hdU2nJFwvizy.jpg",
            searchQuery: "wasp insect",
          },
          {
            name: "Ninachi",
            imageUrl:
              "https://ziyouz.uz/wp-content/uploads/2022/12/ninachi.jpeg",
            searchQuery: "dragonfly insect",
          },
          {
            name: "Chivin",
            imageUrl: "https://ziyouz.uz/wp-content/uploads/2022/12/chivin.jpg",
            searchQuery: "mosquito insect",
          },
          {
            name: "Pashsha",
            imageUrl:
              "https://www.koppert.com/content/_processed_/4/9/csm_housefly_musca_domestica_adult_koppert_f92348aa46.jpg",
            searchQuery: "fly insect",
          },
          {
            name: "Chayon",
            imageUrl:
              "https://content.presspage.com/uploads/2170/1920_ancientscorpion-2.jpg?10000",
            searchQuery: "scorpion",
          },
        ],
      },
      {
        id: 3,
        type: "drag_to_table",
        title: "3-topshiriq",
        instruction: "Hasharotlarni xavfli yoki xavfsiz ustuniga joylashtiring",
        items: [
          "Chigirtka",
          "Chumoli",
          "Qo'ng'iz",
          "Beshiktebratar",
          "Suvarak",
          "Xonqizi",
          "Tillaqo'ng'iz",
          "Qirqoyoq",
          "Ari",
          "Qovog'ari",
          "Ninachi",
          "Chivin",
          "Pashsha",
          "Chayon",
        ],
        columns: ["Xavfli", "Xavfsiz"],
        correct: {
          Xavfli: [
            "Chayon",
            "Ari",
            "Qovog'ari",
            "Qirqoyoq",
            "Chivin",
            "Pashsha",
            "Suvarak",
          ],
          Xavfsiz: [
            "Chigirtka",
            "Chumoli",
            "Qo'ng'iz",
            "Beshiktebratar",
            "Xonqizi",
            "Tillaqo'ng'iz",
            "Ninachi",
          ],
        },
      },
      {
        id: 4,
        type: "oral_questions",
        title: "4-topshiriq: Og'zaki savollar",
        questions: [
          "Agar siz chorva bilan daladan qaytayotgan bo'lsangiz, yo'lda xavfli hasharot uyasini ko'rsangiz qanday yo'l tutasiz?",
          "O'tkirning o'rnida bo'lsangiz, nima qilgan bo'lardingiz va nega?",
          "Tabiatda hasharotlarning uyasini buzish odamlar uchun qanday xavf tug'dirishi mumkin?",
          "Agar do'stingiz xavfli ish qilmoqchi bo'lsa, siz uni qanday to'xtatgan bo'lardingiz?",
          "Arilar odamni qachon hujum qiladi deb o'ylaysiz? Hayotdan misol keltiring.",
          "Bu voqeadan kelib chiqib, tabiatga qanday munosabatda bo'lish kerak deb hisoblaysiz?",
          "Agar arilar sizni quvsa, o'zingizni qanday himoya qilasiz?",
          "Do'stingiz noto'g'ri ish qilib, keyin o'zini maqtasa, siz unga nima degan bo'lardingiz?",
        ],
      },
    ],
  },
  {
    id: 3,
    novel_name: "Aring qasosi (II qism)",
    author: "Muhabbat Hamidova",
    genre: "Hikoya",
    short_description:
      "Sardor dalaga bormaydi, O'tkir esa sigir bilan boshiga ko'p mushkul keltiradi...",
    text: `Ertasiga Sardor dalaga bormadi. O'tkir noiloj bir o'zi sigirini yetaklab, yaylovga yo'l oldi. Quyosh endigina tog' ortidan ko'tarilgan, hali o't-o'lanlar yuzida shudring yaltiraydi. O'tkir yuzini chala yuvganigami, uyqusi o'chmagan, yengil shabadada ham eti junjikardi. Kutilmaganda sigiri o'ynoqlab o'zini tutzorga urdi. O'tkir sigirning arqonini qo'yib yubormay, unga qo'shilib yugurdi. Sigir ariq bo'yida to'xtab, qirg'oqdagi maysalarni ochko'zlik bilan yamlashga tushdi. Shu payt O'tkir kalta shimining pochasida nimadir g'imirlaganini sezdi. Bunday qarasa, kattakon qovog'ari! Sho'rlik sovuqdanmi, shudringdanmi karaxt bo'lib qolgan, shekilli, qanotini arang sudrab tepaga o'rmalardi. O'tkir shosha-pisha uni chertib yerga tushirib yubordi.
So'ng ichki bir xavotir bilan bu yerdan tezroq ketishga qaror qilib, sigirini sudradi. Targ'il tixirlik qilgach, qo'lidagi tayoq bilan yelkasiga tushirdi. Sigir boshini qattiq siltadida, chopib ketdi... Arqon O'tkirning qo'lini shilib yubordi. Arqonni jahl bilan itqitayotib yuztuban yiqildi. Lekin darrov sakrab turdi-da, sigirining ketidan yugurdi. Uning bo'yni, qulogi qattiq achishib og'rirdi. U bo'ynini ushlab tepaga qaradi! Boshi ustida o'ntacha qovog'ari uni ta'qib qilib kelardi. O'tkir beixtiyor to'xtadi. Arilar shuni kutib turganday unga yopirildi...
Dehqonlarga ovqat pishirish uchun shiyponga ketayotgan Rahima opa yerda behush yotgan bolani ko'rib qolib, qorovulni chaqirdi. Qorovul O'tkirni qo'lida ko'tarib, uyiga olib bordi...
Sardor kun yoyilib ketguncha maza qilib uxladi. Nonushta qilgach, birorta o'rtog'im ko'rinib qolarmikan, deb ko'chaga chiqdi. Shu chog' yonginasidan "Tez yordam" mashinasi chinqirib o'tdi-yu, O'tkirlarning darvozasi yonida to'xtadi. "Tez yordam"dan tushgan ikki shifokor zambil ko'targancha ichkariga kirib ketdi. Sardor, Zamira buvim kasal bo'lib qoldilarmikan, deb o'ylab o'sha tomonga yurdi. U yetib kelmasdan shifokorlar zambilda kimnidir olib chiqib, "Tez yordam"ga yotqizdi-da, sirenasini chinqirtirib ortiga qaytdi. Zamira buvi voqeani Sardorga so'zlab berdi.
O'tkir bir hafta shifoxonada yotdi. Uyga qaytgach, Sardor uni ko'rgani chiqdi.
— O'rtoq, to'g'ri aytgan ekansan. Boplab o'ch oldi, mittivoylar. Toza ta'zirimni yedim. Endi nafaqat ari, chumolining ham uyini buzmayman. Axir, ular ham tabiatning bolasi, — dedi O'tkir.
— To'g'ri, endi jonavorlarga ozor bermaymiz, — uning fikriga qo'shildi Sardor.`,

    tasks: [
      {
        id: 1,
        type: "drag_to_table",
        title: "1-topshiriq: Sinonimlari",
        instruction: "Hikoyadan olingan so'zni uning sinonimiga torting",
        columns: ["Hikoyadan", "Sinonimi"],
        items: [
          "Yugurdi",
          "Chopdi",
          "Dedi",
          "Aytdi",
          "Qaradi",
          "Boqdi",
          "Ketdi",
          "Jo'nadi",
          "Tushdi",
          "Yiqildi",
          "Chiqdi",
          "Ko'rindi",
          "Bordi",
          "Yo'l oldi",
          "Ushlab turdi",
          "Mahkam tutdi",
          "Qo'rqdi",
          "Sarosimaga tushdi",
          "Aytdi",
          "So'zladi",
        ],
        correct: {
          Hikoyadan: [
            "Yugurdi",
            "Dedi",
            "Qaradi",
            "Ketdi",
            "Tushdi",
            "Chiqdi",
            "Bordi",
            "Ushlab turdi",
            "Qo'rqdi",
            "Aytdi",
          ],
          Sinonimi: [
            "Chopdi",
            "Aytdi",
            "Boqdi",
            "Jo'nadi",
            "Yiqildi",
            "Ko'rindi",
            "Yo'l oldi",
            "Mahkam tutdi",
            "Sarosimaga tushdi",
            "So'zladi",
          ],
        },
      },
      {
        id: 2,
        type: "drag_to_table",
        title: "2-topshiriq: Antonimlar",
        instruction: "So'zni uning antonimiga torting",
        columns: ["So'z", "Antonim"],
        items: [
          "Keldi",
          "Ketdi",
          "Qattiq",
          "Yumshoq",
          "Tez",
          "Sekin",
          "Baland",
          "Past",
          "Sog'",
          "Kasal",
          "Ochiq",
          "Yopiq",
          "Katta",
          "Kichik",
          "Yorug'",
          "Qorong'u",
          "Yaxshi",
          "Yomon",
          "Og'ir",
          "Yengil",
        ],
        correct: {
          "So'z": [
            "Keldi",
            "Qattiq",
            "Tez",
            "Baland",
            "Sog'",
            "Ochiq",
            "Katta",
            "Yorug'",
            "Yaxshi",
            "Og'ir",
          ],
          Antonim: [
            "Ketdi",
            "Yumshoq",
            "Sekin",
            "Past",
            "Kasal",
            "Yopiq",
            "Kichik",
            "Qorong'u",
            "Yomon",
            "Yengil",
          ],
        },
      },
      {
        id: 3,
        type: "ordering",
        title: "3-topshiriq: Voqealar ketma-ketligi",
        instruction: "Voqealarni to'g'ri tartibda joylashtiring",
        correct_order: [
          "Sardor dalaga bormadi, O'tkir sigirni yaylovga yetaklab ketdi",
          "O'tkir sigir ustiga o'tirdi, sigir uni tulporga o'xshatib otdi",
          "Sigir ariq bo'yida to'xtab, o'tlab ketdi",
          "O'tkir arqon bilan sigirni bog'lamoqchi bo'ldi",
          "Arqon uzilib, O'tkir yerga yiqildi",
          "O'tkir kasal bo'lib, shifoxonaga tushdi",
          "Zamira buvi Sardorga voqeani so'zlab berdi",
          "Sardor O'tkirni ko'rgani shifoxonaga bordi",
          "O'tkir 'ular ham tabiatning bolasi' dedi",
        ],
      },
      {
        id: 4,
        type: "written_questions",
        title: "4-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "O'tkir sigirga minmoqchi bo'lganida nima sodir bo'ldi? Shu voqeadan qanday xulosa chiqarish mumkin? 5-6 gap yozing.",
          "Agar siz Sardorning o'rnida bo'lsangiz, kasal do'stingizni ko'rgani borganda unga nima degan bo'lardingiz? Yozing.",
          "'Ular ham tabiatning bolasi' degan fikrni o'z so'zlaringiz bilan izohlang. 4-5 gap yozing.",
        ],
      },
      {
        id: 5,
        type: "oral_questions",
        title: "5-topshiriq: Og'zaki savollar",
        questions: [
          "Yaylovda qanday voqea yuz berdi?",
          "O'tkirning xavoliga tushishiga nima sabab bo'ldi deb o'ylaysiz?",
          "Nima uchun hikoya 'Aring qasosi' deb nomlangan?",
          "Zamira buvi qanday voqeani Sardorga so'zlab bergan bo'lishi mumkin?",
          "O'tkir qilgan ishidan qanday xulosa chiqardi?",
          "Sizningcha, bunday holat yuz bermasligi uchun nima kerak edi?",
          "'Axir, ular ham tabiatning bolasi' degan fikrni izohlang.",
          "O'tkirning xulq-atvori hikoya davomida qanday o'zgardi?",
        ],
      },
    ],
  },
  {
    id: 4,
    novel_name: "Tog'lar qanday paydo bo'lgan?",
    author: "Do'stlar sayohati",
    genre: "Hikoya",
    short_description:
      "Sherzod dadasi bilan tog'ga borib, tog'larning paydo bo'lishi sirini bilib oladi...",
    text: `Bir kuni Sherzod dadasi bilan tog'ga boribdi.
— Voybo'! Buncha yuksak bo'lmasa bu tog'lar! — deb hayratlanibdi Sherzod va: — Dada, ularni kim yasagan? — deb so'rabdi dadasidan.
— Ular vulqonlardan paydo bo'lgan, — deb javob beribdi unga dadasi. — Biz turgan joyimiz yerning qattiq yuzidir, uning tagida esa suyuqlik bor. U judayam qaynoq. Ba'zan bu suyuqlik yer yuzasiga chiqadi, ba'zan esa yo'q. U tashqariga yer qatlamini ko'tarib otilib chiqadi.
— Ana shu vulqon deb ataladimi?
— Ha, ana shu vulqon deyiladi. Ko'plab vulqonlar o'chdi. Lekin tog'lar qoldi. Vulqondan juda ko'p miqdorda lava va kul otilib chiqishi natijasida hosil bo'lgan tog'lar bor. Yer qatlami siljib burmalar hosil bo'lishi natijasida paydo bo'lgan tog'lar ham bor. Shuningdek, yer qatlamining yorilishi tufayli ham tog'lar paydo bo'ladi.
— Ajabo! — debdi Sherzod hayratlanib. — Yer usti qattiq ko'ringani bilan u siljishi, ko'tarilishi va yorilishi ham mumkin ekan-da!
— Endi tog'lar qanday paydo bo'lganini tushundingmi? — so'radi undan dadasi.
— Ha, mana endi tushundim, — deb javob berdi Sherzod.`,

    tasks: [
      {
        id: 1,
        type: "true_false",
        title: "1-topshiriq: To'g'ri yoki Noto'g'ri",
        instruction: "Quyidagi gaplar to'g'rimi yoki noto'g'rimi?",
        questions: [
          { q: "Tog'lar faqat vulqonlardan paydo bo'lgan.", answer: false },
          {
            q: "Yer qatlamining yorilishi ham tog' hosil qiladi.",
            answer: true,
          },
          { q: "Lava yer ostidagi qaynoq suyuqlikdan chiqadi.", answer: true },
          { q: "Barcha vulqonlar hozir ham faol.", answer: false },
          {
            q: "Yer qatlami siljib burmalar hosil qilishi mumkin.",
            answer: true,
          },
          { q: "Sherzod dadasi bilan dengizga boribdi.", answer: false },
          { q: "Yer usti siljishi va yorilishi mumkin.", answer: true },
          { q: "Vulqondan faqat lava chiqadi.", answer: false },
        ],
      },
      {
        id: 2,
        type: "fill_blank",
        title: "2-topshiriq: Bo'sh joyni to'ldiring",
        instruction: "Gapni to'liq qiling",
        questions: [
          {
            before: "Biz turgan joyimiz yerning",
            blank: "qattiq",
            after: "yuzidir, uning tagida esa suyuqlik bor.",
            options: ["qattiq", "yumshoq", "sovuq", "issiq"],
          },
          {
            before: "Vulqondan juda ko'p miqdorda",
            blank: "lava",
            after:
              "va kul otilib chiqishi natijasida hosil bo'lgan tog'lar bor.",
            options: ["lava", "suv", "qum", "tosh"],
          },
          {
            before: "Yer qatlami siljib",
            blank: "burmalar",
            after: "hosil bo'lishi natijasida paydo bo'lgan tog'lar ham bor.",
            options: ["burmalar", "daralar", "vodiylar", "tekisliklar"],
          },
          {
            before:
              "Yer usti qattiq ko'ringani bilan u siljishi, ko'tarilishi va",
            blank: "yorilishi",
            after: "ham mumkin ekan.",
            options: ["yorilishi", "erishi", "qotishi", "kengayishi"],
          },
        ],
      },
      {
        id: 3,
        type: "multiple_choice",
        title: "3-topshiriq: To'g'ri javobni tanlang",
        questions: [
          {
            q: "Tog'lar qanday yo'llar bilan paydo bo'ladi?",
            options: [
              "Faqat vulqonlar orqali",
              "Vulqon, yer qatlami siljishi va yorilish orqali",
              "Faqat yer yorilishi orqali",
              "Suv ta'sirida",
            ],
            answer: 1,
          },
          {
            q: "Yerning tagida nima bor?",
            options: ["Sovuq suv", "Qaynoq suyuqlik", "Qattiq tosh", "Havo"],
            answer: 1,
          },
          {
            q: "Sherzod nima uchun hayratlanibdi?",
            options: [
              "Tog'lar juda baland bo'lgani uchun",
              "Dadasi tog'ga chiqa olgani uchun",
              "Vulqon otilgani uchun",
              "Yer yorilgani uchun",
            ],
            answer: 0,
          },
          {
            q: "Vulqon o'chgandan keyin nima qoladi?",
            options: [
              "Hech narsa qolmaydi",
              "Daryo qoladi",
              "Tog' qoladi",
              "Tekislik qoladi",
            ],
            answer: 2,
          },
          {
            q: "Yer qatlami siljishi natijasida nima hosil bo'ladi?",
            options: ["Vulqon", "Burmalar", "Daryo", "Ko'l"],
            answer: 1,
          },
        ],
      },
      {
        id: 4,
        type: "oral_questions",
        title: "4-topshiriq: Og'zaki savollar",
        questions: [
          "Tog'lar qanday yo'llar bilan paydo bo'lishini o'z so'zlaringiz bilan tushuntiring.",
          "Vulqon nima va u qanday ishlaydi?",
          "Yer qatlamining siljishi degani nima?",
          "Sherzod dadasi bilan tog'ga borganda nimani bilib oldi?",
          "Sizningcha, tog'larni o'rganish nima uchun muhim?",
          "Agar siz Sherzodning o'rnida bo'lsangiz, yana qanday savol bergan bo'lardingiz?",
        ],
      },
    ],
  },
  {
    id: 5,
    novel_name: "Qum qayerdan paydo bo'lgan?",
    author: '"Bolalar ensiklopediyasi ertaklarda" kitobidan',
    genre: "Hikoya",
    short_description:
      "Vali dengizda dam olayotib, qumning qayerdan paydo bo'lganini bilib oladi...",
    text: `Yozda Valining dadasi uni dengizga olib boribdi. Salqin shabada, ajoyib to'lqinlar, issiqqina qum, bundan ortiq yana nima kerak?
U yerda Vali qumdan minoralar yasabdi, ko'llar qazibdi, issiqqina qumda yumalabdi, rohatbaxsh suvda cho'milibdi, xullas maza qilib dam olibdi.
— Dada, qum qayerdan paydo bo'lgan? — deb so'rabdi u dadasidan.
— Qadim-qadimda yer yuzida hech qanday qum bo'lmagan, faqat qoyalar, tog' jinslari va otilib chiqayotgan vulqonlar bo'lgan, xolos. Keyin suv, havo va qum paydo bo'lgan. Suv va shamol tog'larni buzib yiqitgan. Natijada tog' bo'laklarga bo'linib ketgan. Bora-bora bu bo'laklar qumdek maydalanib ketgan. Qumlar dengizlar ostiga borib qolgan.
— Sahrolardagi qum qayerdan kelgan?
— U yerga qumni shamol olib borgan. Ko'pgina sahrolar o'rnida esa ilgari dengiz va okeanlar bo'lgan. Ha, aytganday, qumlar yana har xil rangli bo'ladi. Bu qumning qaysi tog' jinsi bo'laklaridan paydo bo'lganiga bog'liq. Pushti, oq rangdagi qumlar bor. O'rtayer dengizi qirg'oqlari Sahara sahrosining sariq rangdagi qumlari bilan qoplangan. Bu qumlar sariq chaqmoqtoshdan tashkil topgan. Taiti plyajining qora rangli qumi esa vulqon lavasi natijasida paydo bo'lgan. Shuning uchun ham u qora rangda.
— Qoyil! Demak, qum tog' bo'laklari ekan-da?!`,

    tasks: [
      {
        id: 1,
        type: "true_false",
        title: "1-topshiriq: To'g'ri yoki Noto'g'ri",
        instruction: "Quyidagi gaplar to'g'rimi yoki noto'g'rimi?",
        questions: [
          { q: "Qadim zamonda yer yuzida qum bo'lmagan.", answer: true },
          { q: "Qumlar faqat shamol orqali paydo bo'lgan.", answer: false },
          { q: "Sahrolarga qumni shamol olib borgan.", answer: true },
          { q: "Barcha qumlar bir xil rangda bo'ladi.", answer: false },
          {
            q: "Taiti plyajining qumi vulqon lavasidan paydo bo'lgan.",
            answer: true,
          },
          { q: "Sahara sahrosining qumlari oq rangda.", answer: false },
          { q: "Suv va shamol tog'larni maydalagan.", answer: true },
          { q: "Vali dadasi bilan tog'ga boribdi.", answer: false },
        ],
      },
      {
        id: 2,
        type: "multiple_choice",
        title: "2-topshiriq: To'g'ri javobni tanlang",
        questions: [
          {
            q: "Qum qayerdan paydo bo'lgan?",
            options: [
              "Dengiz tubidan",
              "Tog' jinslari maydalanishidan",
              "Vulqondan to'g'ridan-to'g'ri",
              "Sahrolardan",
            ],
            answer: 1,
          },
          {
            q: "Sahrolarga qumni nima olib borgan?",
            options: ["Suv", "Odamlar", "Shamol", "Vulqon"],
            answer: 2,
          },
          {
            q: "Taiti plyajining qumi qanday rangda?",
            options: ["Oq", "Sariq", "Pushti", "Qora"],
            answer: 3,
          },
          {
            q: "Sahara sahrosining qumlari qanday toshdan tashkil topgan?",
            options: [
              "Granit",
              "Sariq chaqmoqtosh",
              "Ohaktosh",
              "Vulqon toshi",
            ],
            answer: 1,
          },
          {
            q: "Vali dengizda nima qildi?",
            options: [
              "Faqat suzdi",
              "Qumdan minoralar yasab, ko'llar qazib, suzdi",
              "Dadasi bilan baliq tutdi",
              "Qum yig'di",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: 3,
        type: "ordering",
        title: "3-topshiriq: Qum paydo bo'lish jarayonini tartiblang",
        instruction:
          "Qumning paydo bo'lish jarayonini to'g'ri ketma-ketlikda joylashtiring",
        correct_order: [
          "Yer yuzida faqat qoyalar va tog' jinslari bo'lgan",
          "Suv va shamol tog'larni buzib yiqitgan",
          "Tog' bo'laklarga bo'linib ketgan",
          "Bo'laklar qumdek maydalanib ketgan",
          "Qumlar dengizlar ostiga borib qolgan",
          "Shamol qumlarni sahrolarga olib borgan",
        ],
      },
      {
        id: 4,
        type: "oral_questions",
        title: "4-topshiriq: Og'zaki savollar",
        questions: [
          "Qum qanday paydo bo'lganini o'z so'zlaringiz bilan tushuntiring.",
          "Nima uchun qumlar har xil rangda bo'ladi?",
          "Sahrolarda qum qayerdan paydo bo'lgan?",
          "Sizningcha, dengiz qumi bilan sahro qumi o'rtasida qanday farq bor?",
          "Agar siz Valining o'rnida bo'lsangiz, dadasingizga yana qanday savol bergan bo'lardingiz?",
          "Qumning hayotimizdagi ahamiyati nima deb o'ylaysiz?",
        ],
      },
      {
        id: 5,
        type: "written_questions",
        title: "5-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "Agar siz qum zarrachasi bo'lsangiz, o'zingiz haqingizda qanday hikoya aytgan bo'lardingiz? 5-6 gap yozing.",
          "Dengiz va sahro qumlarini taqqoslang. Qanday o'xshashlik va farqlari bor? 4-5 gap yozing.",
          "Tabiatdagi o'zgarishlar (suv, shamol) insonlar hayotiga qanday ta'sir qiladi? 5 gap yozing.",
        ],
      },
    ],
  },
  {
    id: 6,
    novel_name: "Chaqmoq",
    author: "Otash Xolmirzayev",
    genre: "She'r",
    short_description:
      "Chaqmoq va yomg'ir tabiatning kuchli manzarasini tasvirlaydi...",
    text: `Chaqmoq chaqib olamni,
Qilich solar boshiga.
Yalt-yalt etar huv falak,
Chopar qirlar qoshiga.

Taraqlaydi arava,
Ot tuyog'i yo'l ochar.
Jala quyar paqirlab,
Go'yo yerga dur sochar.

Boshin egar dov-daraxt,
Nurdan durra boshida.
Anhorlar-chi, suv haydab,
Chopar dengiz qoshiga.

Yaraqlaydi qilichi,
Bulut bag'rin tiladi.
Bir zum o'tmay bor olam,
Yetti rangda kuladi.`,

    tasks: [
      {
        id: 1,
        type: "drag_and_drop_qa",
        title: "1-topshiriq: Savolga javob toping",
        instruction: "Har bir savolga mos javob kartochkasini torting",
        pairs: [
          {
            question: "She'rda chaqmoq nimaga o'xshatilgan?",
            answer: "Qilichga",
          },
          { question: "Jala neni sochar deyilgan?", answer: "Dur" },
          { question: "Daraxt nima qiladi?", answer: "Boshin egadi" },
          { question: "Anhorlar qayerga chopadi?", answer: "Dengizga" },
          { question: "Chaqmoq nimani tiladi?", answer: "Bulut bag'rini" },
          {
            question: "She'r oxirida olam qanday kuladi?",
            answer: "Yetti rangda",
          },
          { question: "Chaqmoq qayerga chopar?", answer: "Qirlar qoshiga" },
          { question: "Jala qanday quyar?", answer: "Paqirlab" },
        ],
      },
      {
        id: 2,
        type: "fill_blank",
        title: "2-topshiriq: Bo'sh joyni to'ldiring",
        instruction: "She'rdan olingan misralarni to'ldiring",
        questions: [
          {
            before: "Chaqmoq chaqib olamni, Qilich solar",
            blank: "boshiga",
            after: ".",
            options: ["boshiga", "ustiga", "qoshiga", "ichiga"],
          },
          {
            before: "Jala quyar paqirlab, Go'yo yerga",
            blank: "dur",
            after: "sochar.",
            options: ["dur", "tosh", "qum", "suv"],
          },
          {
            before: "Bir zum o'tmay bor olam, Yetti rangda",
            blank: "kuladi",
            after: ".",
            options: ["kuladi", "yig'laydi", "o'ynaydi", "yashaydi"],
          },
          {
            before: "Yaraqlaydi qilichi, Bulut bag'rin",
            blank: "tiladi",
            after: ".",
            options: ["tiladi", "yoradi", "kesadi", "buzadi"],
          },
        ],
      },
      {
        id: 3,
        type: "oral_questions",
        title: "3-topshiriq: Og'zaki savollar",
        questions: [
          "She'r sizda qanday his-tuyg'ularni uyg'otdi?",
          "Shoir chaqmoqni qilichga o'xshatgan. Sizningcha bu o'xshatish to'g'rimi?",
          "'Jala quyar paqirlab, go'yo yerga dur sochar' misrasini izohlang.",
          "She'rda tabiatning qanday hodisalari tasvirlangan?",
          "'Yetti rangda kuladi' misrasi nimani anglatadi deb o'ylaysiz?",
          "Chaqmoqli yomg'irni ko'rganmisiz? O'sha paytda qanday his qilgansiz?",
        ],
      },
      {
        id: 4,
        type: "written_questions",
        title: "4-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "She'rdagi eng yoqqan misrangizni tanlang va nima uchun yoqqanini 4-5 gap bilan yozing.",
          "Chaqmoqli yomg'irni tasvirlab 5-6 gap yozing.",
          "Tabiatdagi qaysi hodisa sizni eng ko'p hayratlantiради? Nima uchun? 5 gap yozing.",
        ],
      },
    ],
  },
  {
    id: 7,
    novel_name: "Mimoza",
    author: "Quddus Muhammadiy",
    genre: "She'r",
    short_description:
      "Uyatchan va foydali mimoza o'simligining ajoyib xususiyatlari haqida she'r...",
    text: `Bir o't ko'rdim uyatchan,
Bargiga qo'ndirmas chang.
Nomi ekan mimoza,
Tabiati — nur, toza.

Unga sen tegar-tegmas,
O'sha on, o'sha nafas
Barg ko'zin yumib olar,
Qovog'in uyib olar.

Ko'rganlar hayron qolar.
Mimoza nechun bunday?
Muncha uyatchan, bilay.

Yo'q, mimoza undaymas,
Xizmati zo'r, zabardast.
Bilamiz mimozani,
Tabiati tozani.

Sevmas pashsha-chivinni,
Kasallik tashvishini.
Hasharot, shum ucharni,
Yalmog'iz qon icharni —
Tutib oladi darrov,
Tekinxo'rni qilar ov.

Barglari bo'lib yasov,
Mimoza yashil posbon.

Bir o't ko'rdim uyatchan,
Bargiga qo'ndirmas chang.
Nomi ekan mimoza,
Tabiati — nur, toza.`,

    tasks: [
      {
        id: 1,
        type: "true_false",
        title: "1-topshiriq: To'g'ri yoki Noto'g'ri",
        instruction: "Quyidagi gaplar to'g'rimi yoki noto'g'rimi?",
        questions: [
          {
            q: "Mimoza o'simligining bargi changni yaxshi ko'radi.",
            answer: false,
          },
          { q: "Mimoza tegilsa barglarini yumadi.", answer: true },
          { q: "Mimoza hasharotlarni tutib oladi.", answer: true },
          {
            q: "Mimoza faqat chiroyli ko'rinishi uchun foydali.",
            answer: false,
          },
          { q: "She'rda mimoza 'yashil posbon' deb atalgan.", answer: true },
          { q: "Mimoza pashsha va chivinlarni yaxshi ko'radi.", answer: false },
          { q: "Mimoza tabiati nozik va toza.", answer: true },
        ],
      },
      {
        id: 2,
        type: "drag_and_drop_qa",
        title: "2-topshiriq: Savolga javob toping",
        instruction: "Har bir savolga mos javob kartochkasini torting",
        pairs: [
          {
            question: "Mimoza qanday o't deb tasvirlangan?",
            answer: "Uyatchan",
          },
          { question: "Mimoza bargiga nima qo'ndirmaydi?", answer: "Chang" },
          {
            question: "Mimoza tegilsa nima qiladi?",
            answer: "Barg ko'zin yumadi",
          },
          { question: "Mimoza nimani sevmaydi?", answer: "Pashsha-chivinni" },
          {
            question: "Mimoza she'rda qanday posbon deb atalgan?",
            answer: "Yashil posbon",
          },
          {
            question: "Mimoza hasharotlarni nima qiladi?",
            answer: "Tutib oladi",
          },
          { question: "Mimozaning tabiati qanday?", answer: "Nur, toza" },
        ],
      },
      {
        id: 3,
        type: "oral_questions",
        title: "3-topshiriq: Og'zaki savollar",
        questions: [
          "Mimoza nima uchun 'uyatchan o't' deb atalgan?",
          "Mimozaning foydali xususiyatlari nima?",
          "'Yashil posbon' iborasi nimani anglatadi?",
          "She'rda mimoza qanday tasvirlangan? O'z so'zlaringiz bilan ayting.",
          "Tabiatda yana qanday foydali o'simliklarni bilasiz?",
          "Mimoza haqida biror narsa eshitganmisiz? Ayting.",
        ],
      },
      {
        id: 4,
        type: "written_questions",
        title: "4-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "Mimoza kabi foydali o'simlik haqida 5-6 gap yozing.",
          "Agar siz mimoza bo'lsangiz, odamlarga nima degan bo'lardingiz? 5 gap yozing.",
          "'Tabiati — nur, toza' iborasini o'z so'zlaringiz bilan izohlang. 4-5 gap yozing.",
        ],
      },
    ],
  },
  {
    id: 8,
    novel_name: "Qushlar qanday inlarda yashaydilar?",
    author: '"Bolalar ensiklopediyasi ertaklarda" kitobidan',
    genre: "Ertak",
    short_description:
      "Baliqchi qush boshqa qushlarning inlarini ko'rib, o'ziga mos in qidiradi...",
    text: `Qadim zamonda bir baliqchi qush bo'lgan ekan. Uning tuxum qo'yib, bolalaydigan payti yaqinlashibdi. Baliqchi qush: "Qanday in qursam ekan?" deb o'ylanib qolibdi. O'ylab-o'ylab, oldin boshqa qushlarning qanday in qurishlarini bilib olishga qaror qilibdi.
— Yur, senga o'z inimni ko'rsataman, — deb Qarg'a uni iniga taklif qilibdi. — Bu yerda bolalarim uchun keng joy qilib qo'yganman, — debdi u.
Baliqchi qushga Qarg'aning ini sira yoqmabdi. Bir uyum katta-kichik shox-shabbalar har tarafga sochilib yotgan emish.
Shunda u boshqa inni ko'rgani ketibdi. Uchib borib chumchuqning iniga qo'nibdi. Chumchuq o'zi uchun dumaloq shakldagi, tepasida teshigi bor in qurgan ekan.
— Yaxshi, qulaygina uya ekan, lekin buning tashvishi-chi? Men bunday uy qurguncha charchab qolaman-ku, axir? — deb o'ylabdi o'zicha Baliqchi qush.
— Shu ham ish bo'ldimi? — debdi yovvoyi tovuqlar birvarakayiga. — Biz bo'lajak jo'jalarimiz uchun qanday in qurganimizni bir qaragin-a! Oldin yerdan yarim metr chuqurlikda o'ra kovlab, keyin uch oy davomida tepalik quramiz, — deyishibdi ular.
— Men esa o'zimga loydan in quraman, — debdi qaldirg'och.
— Men esa qirg'oq bo'ylarida chuqurcha qaziyman, — debdi qirg'oq qaldirg'ochi.
— Buncha ortiqcha harakatning nima keragi bor? — deb ajablanibdi Boyqush. — Masalan, men qizilishton daraxtda qoldirgan eski teshikni topib olib, shuning ichida tinchgina yashayveraman.
— Men ham o'zimni qiynab o'tirmayman, — debdi Kakku. — In qurishning nima keragi bor o'zi? Tuxumlarimni begona qushlar iniga tashlayman-u, ketaveraman. Boshqa qushlar bolalarimni boqib katta qilishsin.
— Yo'q, men bunday qilolmayman, — deya e'tiroz bildiribdi Baliqchi qush. — Mening tuxumlarimni begona joylarga tashlab ketish niyatim yo'q.
Baliqchi qush uchib yurib, inlarni birma-bir tomosha qilib chiqquncha, uning tuxum qo'yadigan payti ham kelib qolibdi. Shunda u tuxumlarini o'zi yashaydigan qirg'oq bo'yidagi yerga qo'yibdi va shu yerda jo'jalarini parvarishlab o'stiribdi.`,

    tasks: [
      {
        id: 1,
        type: "drag_and_drop_qa",
        title: "1-topshiriq: Savolga javob toping",
        instruction: "Har bir savolga mos javob kartochkasini torting",
        pairs: [
          {
            question: "Baliqchi qush nimani bilib olmoqchi bo'ldi?",
            answer: "In qurish usulini",
          },
          { question: "Qarg'a ini qanday edi?", answer: "Tartibsiz, keng" },
          { question: "Chumchuq ini qanday shaklda edi?", answer: "Dumaloq" },
          {
            question: "Yovvoyi tovuqlar avval nima qiladi?",
            answer: "O'ra kovlaydi",
          },
          { question: "Qaldirg'och inini nimadan quradi?", answer: "Loydan" },
          {
            question: "Boyqush qanday joyda yashaydi?",
            answer: "Eski teshikda",
          },
          {
            question: "Kakku tuxumlarini qayerga tashlab ketadi?",
            answer: "Begona qushlar iniga",
          },
          {
            question: "Baliqchi qush oxirida tuxumlarini qayerga qo'ydi?",
            answer: "Qirg'oq bo'yiga",
          },
        ],
      },
      {
        id: 2,
        type: "ordering",
        title: "2-topshiriq: Voqealar ketma-ketligi",
        instruction: "Baliqchi qush ko'rishgan qushlar ketma-ketligini toping",
        correct_order: [
          "Qarg'a",
          "Chumchuq",
          "Yovvoyi tovuqlar",
          "Qaldirg'och",
          "Qirg'oq qaldirg'ochi",
          "Boyqush",
          "Kakku",
        ],
      },
      {
        id: 3,
        type: "multiple_choice",
        title: "3-topshiriq: To'g'ri javobni tanlang",
        questions: [
          {
            q: "Nima uchun Baliqchi qush boshqa qushlarning inlarini ko'rib chiqdi?",
            options: [
              "Mehmon bo'lish uchun",
              "O'ziga in qurish usulini bilib olish uchun",
              "Qushlarni tanish uchun",
              "Sayohat qilish uchun",
            ],
            answer: 1,
          },
          {
            q: "Kakku tuxumlarini qayerga tashlab ketadi?",
            options: [
              "Daraxt kovagiga",
              "Yerga",
              "Begona qushlar iniga",
              "Qirg'oqqa",
            ],
            answer: 2,
          },
          {
            q: "Yovvoyi tovuqlar in qurish uchun qancha vaqt sarflaydi?",
            options: ["Bir oy", "Ikki oy", "Uch oy", "To'rt oy"],
            answer: 2,
          },
          {
            q: "Baliqchi qush oxirida qanday qaror qildi?",
            options: [
              "Qarg'a iniga ko'chib o'tdi",
              "Kakku kabi boshqa qushlar iniga tuxum tashladi",
              "Tuxumlarini qirg'oq bo'yiga qo'yib, jo'jalarini o'zi parvarishladi",
              "In qurishdan voz kechdi",
            ],
            answer: 2,
          },
        ],
      },
      {
        id: 4,
        type: "oral_questions",
        title: "4-topshiriq: Og'zaki savollar",
        questions: [
          "Nima sababdan Baliqchi qush boshqa qushlarning inlarini ko'rib chiqsa ham, ularni takrorlamadi?",
          "Turli qushlarning in qurish usullarini taqqoslang. Qaysi biri eng samarali deb o'ylaysiz?",
          "Kakku qushining tuxumlarini boshqa qushlar iniga tashlab ketishi sizningcha to'g'rimi?",
          "Hikoyaning asosiy g'oyasi nima? Uni real hayot bilan qanday bog'lash mumkin?",
          "Qaysi qush sizga eng ko'p yoqdi va nima uchun?",
        ],
      },
      {
        id: 5,
        type: "written_questions",
        title: "5-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "Agar siz Baliqchi qush bo'lsangiz, qanday in qurar edingiz? 5-6 gap yozing.",
          "Hikoyadan kelib chiqib, mas'uliyat haqida 4-5 gap yozing.",
          "Sizningcha, Kakku qushi to'g'ri ish qildimi? Fikringizni 5 gap bilan asoslang.",
        ],
      },
    ],
  },
  {
    id: 9,
    novel_name: "Suvda  xotira  bor",
    author: '"Bolalar adabiyoti" jurnalidan',
    genre: "Ilmiy maqola",
    short_description:
      "Yapon va rus olimlari tadqiqotlari asosida suvning noyob xususiyatlari haqida qiziqarli ma'lumotlar..",
    text: `Odamzod suvni hayot avvalida ko'rgan edi, biroq uning xususiyatlari hali ham to'liq anglab yetilgani yo'q. Yapon olimi Massaro Emoto hamda rus professori Konstantin Korotkovning suv xosiyatlari haqidagi tadqiqotlari, fikr-xuloslari sizni ham hayratlantirishi tabiiy.
Barcha suyuqlik muzlaganda torayadi, suv esa kengayadi. Har qanday modda qattiq holda suyuqligiga qaradanda og'ir bo'ladi, suvda esa buning aksi. Muz uning yuzasida qalqib turadi, fizika qonunlarga ko'ra cho'kib ketmaydi.
Suvning yana bir antiqa xususiyati — u ikki xil gaz birikmasi (kislorod va vodorod)dan tashkil topgan. Boshqa gazlar o'zaro birlashib, suyuqlik hosil qila olmaydi.
Suv bir vaqtning o'zida uchta — suyuq, qattiq va gazsimon holatda bo'la oladi. Erta bahorda, tong chog'i hali muzi erib ulgurmagan hovuz yoniga boring, bunga o'zingiz amin bo'lasiz.
Yana bir nodir xususiyati, suv nimaiki bo'lsa, eslab qoladi. Shveytsariyalik olimlar buni tasdiqlovchi hayratomuz tajriba o'tkazishdi. Ular Jeneva ko'lining qirg'oq suvida bir nechta tuz zarrachalarini eritishdi. So'ng narigi qirg'oqda uskunalar yordamida tekshiruv o'tkazishdi va tuz emas, tuz haqidagi xotira ma'lumotini qayd etishdi. Narigi qirg'oqdagi tuzning o'zini aniqlashga uskunalarning sezuvchanligi yetishmagan bo'lardi.
Ammo ko'l hovuzidagi ulkan molekula ushbu xotirani qanday bo'lsa, shundayligicha saqlab qolgan.
Biologlarning aniqlashicha, suv tirik organizmlarni nafaqat sug'oradi, balki ular bo'ylab axborot tashiydi. Aynan suv vositasida tirik jism organlari bir-birining holatidan boxabar bo'lib, qanday funksiyalar zarurligini bilib turishadi. Suv bu axborotlarni qayerdan olishi to'g'risida esa faqat taxmin qilish mumkin.
Suv hatto musiqani "tinglay" oladi. Ha-ha, Betxoven simfoniyalari yangraganda bir xil kristallar, Motsart musiqasi ostida boshqa xildagilari hosil bo'ladi. Shopen ohanglari Bax organi sadolariga qaraganda mutlaqo boshqacha kristallarni paydo qiladi...
Suv bizning tuyg'ularimizga javob beradi, ko'plab tajribalarda ayon bo'lishicha, bizdagi ijobiy va salbiy his-tuyg'ular suvning tarkibini o'zgartirib yuboradi, inson sifatiga qarab, go'zal va badburush kristallar hosil bo'ladi.`,

    tasks: [
      {
        id: 1,
        type: "drag_and_drop_qa",
        title: "1-topshiriq: Yopiq savollar",
        instruction: "Har bir savolga mos javob kartochkasini torting",
        pairs: [
          { question: "Suv muzlaganda qanday o'zgaradi?", answer: "Kengayadi" },
          { question: "Muz suvda qanday turadi?", answer: "Qalqib turadi" },
          {
            question: "Suv qanday gazlardan tashkil topgan?",
            answer: "Kislorod va vodorod",
          },
          {
            question: "Suv bir vaqtda necha holatda bo'la oladi?",
            answer: "Uchta",
          },
          {
            question:
              "Shveytsariyalik olimlar tajribasini qayerda o'tkazishdi?",
            answer: "Jeneva ko'li",
          },
          {
            question: "Olimlar ko'lning narigi qirg'og'ida nimani aniqladilar?",
            answer: "Tuz xotirasi",
          },
          {
            question: "Suv tirik organizmlar bo'ylab nima tashiydi?",
            answer: "Axborot",
          },
          {
            question: "Betxoven musiqasi suvda qanday kristallar hosil qiladi?",
            answer: "Bir xil",
          },
          {
            question: "Inson tuyg'ulari suvga qanday ta'sir qiladi?",
            answer: "Tarkibini o'zgartiradi",
          },
          { question: "Massaro Emoto qaysi mamlakatdan?", answer: "Yaponiya" },
          { question: "Konstantin Korotkov kim?", answer: "Rus professori" },
          {
            question: "Suvning uchta holati qaysilar?",
            answer: "Suyuq, qattiq, gazsimon",
          },
          {
            question: "Suv xotirasini qaysi olimlar o'rganishdi?",
            answer: "Shveytsariyalik olimlar",
          },
          {
            question: "Ijobiy tuyg'ular suvda qanday kristallar hosil qiladi?",
            answer: "Go'zal",
          },
          {
            question: "Salbiy tuyg'ular suvda qanday kristallar hosil qiladi?",
            answer: "Badburush",
          },
        ],
      },
      {
        id: 2,
        type: "oral_questions",
        title: "2-topshiriq: Og'zaki savollar",
        questions: [
          "Nima uchun suv tabiatdagi eng noyob moddalardan biri deb aytilgan?",
          "Matnga ko'ra, suvning boshqa moddalardan farqli jihatlari nimalarda ko'rinadi?",
          "Suvning 'xotirasi bor' degan fikrdan qanday xulosa chiqarish mumkin?",
          "Olimlarning tajribalari suv haqida odamlarning fikrini qanday o'zgartiradi?",
          "Musiqa suvga ta'sir qilishi haqida nima deyish mumkin?",
          "Nega suv inson hayoti uchun juda muhim deb hisoblanadi?",
          "Matndan kelib chiqib, insonlar suvga qanday munosabatda bo'lishi kerak?",
          "Suvning uch holatda bo'lishi tabiat uchun qanday foyda beradi deb o'ylaysiz?",
          "Matndagi qaysi ma'lumot sizni eng ko'p hayratlantirdi? Nima uchun?",
          "Suv haqida yana qanday ilmiy sirlar bo'lishi mumkin deb o'ylaysiz?",
          "Suvning qaysi xususiyati sizni eng ko'p hayratlantirdi? Nima uchun?",
          "Nega muz suv yuzasida qalqib turadi deb o'ylaysiz?",
          "Suvning uch xil holatda bo'lishini hayotda qayerlarda ko'rgansiz?",
          "Olimlar suv haqida qanday qiziqarli tajribalar o'tkazishgan?",
          "'Suv hamma narsani eslab qoladi' degan fikrni qanday tushundingiz?",
          "Matnga qarab, suvning inson hayotidagi o'rni haqida nima deya olasiz?",
          "Nima uchun odamlar suvni asrashi kerak deb o'ylaysiz?",
          "Suv insonlarga qanday foyda keltiradi?",
          "Agar suv bo'lmaganida, hayot qanday bo'lar edi deb tasavvur qilasiz?",
        ],
      },
      {
        id: 3,
        type: "written_questions",
        title: "3-topshiriq: Yozma savollar",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "Agar suv gapira olganida, odamlarga nima degan bo'lardi? Shu haqida 5–6 gap yozing.",
          "Suvni asrash haqida rasm chizing va rasmingizni 2–3 gap bilan izohlang.",
          "Kundalik hayotingizda suvdan qanday foydalanishingiz haqida 5 ta gap yozing.",
        ],
      },
    ],
  },
  {
    id: 10,
    novel_name: "Mikrob, virus va Salomat qiz haqida ertak (I qism)",
    author: "Kavsar Turdiyeva",
    genre: "She'r",
    short_description:
      "Salomat ismli qiz kichik odamlarning iltimosi bilan Mikrob va Virusga qarshi kurashga otlanadi...",
    text: `Bor ekan-u, yo'q ekan,
Och ekan-u, to'q ekan,
Ota-ona yolg'izi
Bor ekan bitta qizi.
Ismi ekan Salomat,
Chiroyli va xushqomat.
Xo'b orasta yurarkan,
Jismoniy mashq qilarkan.
Kerak bo'lganda har dam
Berarkan zarur yordam.
Bir kun ko'ribdi u tush:
Kichik odamlar xomush
Yoniga kelgan emish,
Shu so'zni degan emish:
"Qo'rqib ketmagin faqat,
Sen tomonga, Salomat,
Bizni keltirdi qayg'u,
Bir oy bizni ezdi u.
Bir dushman nomi — Mikrob,
Yonida Virus-xarob.
Yurtimiz bosib oldi,
Odamlar holdan toydi.
Munajjimlar yulduzga
Qarab dedilar bizga:
"Xaloskorimiz faqat,
Bir qiz — ismi Salomat.
Yuguringlar, yelinglar,
Uni olib kelinglar.
Kimgaki yordam kerak,
U doim berar ko'mak!"
Va biz otlandik yo'lga,
Maqsadni tugib dilga.
Rosa yugurdik, chopdik,
Nihoyat, seni topdik.
Voqeani bilgach qiz,
Boshin chayqar: "Eh, esiz!"
So'ng ancha o'ylab qolar,
Qoliga to'rva olar.
Unga solar sarimsoq,
Piyoz, qalampirmunchoq,
Yalpiz va yerqalampir,
Na'matak va zanjabil,
So'ng yasab ancha niqob,
"Yuringlar!" debdi shu tob.
Shivirlab, yumgancha ko'z,
Aytilar sehrli so'z:
"Shumati, bumati, davara,
Qiynalmay, bo'lmayin ovora,
Samoni bir zumda quchaylik,
'Yash' sayyorasiga uchaylik!"
Shu payt ularni bo'ron
Eltdi o'sha yurt tomon.
Hamma yoqda oh-u voy,
Bemorlarga yetmas joy.
Yo'tal, aksirish, hiqichoq,
Og'riqlardan oh-u voh.
Mikrob virus yonida,
Burnidir osmonida,
Yurishibdi gerdayib,
Kasalliklarni yoyib.
Biri qirol, biri shoh
Juda ham qalin o'rtoq.
Yonlarida vazir Gripp,
Oyna-eshikni yopib
Tumov hamda shamollash,
Deguningcha hash-u pash,
Yetib kelar yoningga,
Og'riq berar joningga.
Salomat jimib qoldi,
Atrofga nazar soldi.
Nima qilsa bo'ladi?
Qizcha shuni o'yladi.`,

    tasks: [
      {
        id: 1,
        type: "emoji_match",
        title: "1-topshiriq: Emoji va so'zni moslashtiring",
        instruction: "Har bir emojini mos so'zga torting",
        pairs: [
          { emoji: "🦠", word: "Mikrob" },
          { emoji: "🧄", word: "Sarimsoq" },
          { emoji: "😷", word: "Niqob" },
          { emoji: "💊", word: "Dori" },
          { emoji: "🌿", word: "Yalpiz" },
          { emoji: "⭐", word: "Yulduz" },
          { emoji: "🌪️", word: "Bo'ron" },
          { emoji: "👧", word: "Salomat" },
        ],
      },
      {
        id: 2,
        type: "quote_author",
        title: "2-topshiriq: Kim aytdi?",
        instruction: "Quyidagi gaplarni kim aytganini toping",
        quotes: [
          {
            quote: "Xaloskorimiz faqat, bir qiz — ismi Salomat!",
            options: ["Salomat", "Munajjimlar", "Mikrob", "Kichik odamlar"],
            answer: "Munajjimlar",
          },
          {
            quote: "Yuringlar!",
            options: ["Mikrob", "Virus", "Salomat", "Kichik odamlar"],
            answer: "Salomat",
          },
          {
            quote: "Eh, esiz!",
            options: ["Kichik odamlar", "Salomat", "Mikrob", "Virus"],
            answer: "Salomat",
          },
          {
            quote: "Bizni keltirdi qayg'u, bir oy bizni ezdi u.",
            options: ["Salomat", "Munajjimlar", "Kichik odamlar", "Mikrob"],
            answer: "Kichik odamlar",
          },
        ],
      },
      {
        id: 3,
        type: "word_scramble",
        title: "3-topshiriq: Aralashtirilgan so'zlarni toping",
        instruction: "Harflarni to'g'ri tartibga keltiring",
        words: [
          {
            scrambled: "BORKIM",
            answer: "MIKROB",
            hint: "Kasallik qo'zg'atuvchi",
          },
          {
            scrambled: "TUSRIV",
            answer: "VIRUS",
            hint: "Kasallik tarqatuvchi",
          },
          { scrambled: "TAMOLAS", answer: "SALOMAT", hint: "Qizning ismi" },
          { scrambled: "ZIBIQON", answer: "NIQOB", hint: "Yuzga kiyladi" },
          {
            scrambled: "QOSMRAS",
            answer: "SARIMSOQ",
            hint: "Foydali o'simlik",
          },
          { scrambled: "ZPLIAY", answer: "YALPIZ", hint: "Shifobaxsh o't" },
        ],
      },
      {
        id: 4,
        type: "oral_questions",
        title: "4-topshiriq: Og'zaki savollar",
        questions: [
          "Salomat qanday qiz edi? Uning xarakterini tasvirlang.",
          "Kichik odamlar Salomatga nima uchun kelishdi?",
          "Salomat to'rvaga nima soldi va nima uchun?",
          "Mikrob va Virus qanday tasvirlangan? Ular sizga qanday taassurot qoldirdi?",
          "Sizningcha, Salomat nega xaloskor sifatida tanlandi?",
          "Kasalliklardan saqlanish uchun nima qilish kerak?",
        ],
      },
    ],
  },
  {
    id: 11,
    novel_name: "Mikrob, virus va Salomat qiz haqida ertak (II qism)",
    author: "Kavsar Turdiyeva",
    genre: "She'r",
    short_description:
      "Salomat Mikrob va Virusga qarshi kurashib, bemorlarni sog'aytiradi...",
    text: `Yo'qotmasdan o'zini
Aytdi dadil so'zini.
Mikrofon olib shu tob: —
Hamma taqvolsin niqob.
Eshik-oyna ochilsin!
Yelvizakdan qochilsin!
Tozalansin uylar ham,
Hatto ko'cha-ko'ylar ham.
Qo'llar toza yuvilsin,
Barcha mikrob quvilsin!
Viruslarni qirmoq shart,
Piyozdan siqib sharbat.
Tayyorlaymiz o'q-qurol,
U bo'ladi dorivor. —
Hamma ishga kirishdi,
Mikrob bilan kurashdi.
Buni eshitib shu tob
Razil Virus va Mikrob
Jahldan tutoqdilar,
Qahr bilan boqdilar.
Endi jangga kirashar,
Jon-jahd bilan kurashar.
Isitmani ko'tarar,
Qaqshatar va titratar.
Shodlikni aritishar,
Darmonni quritishar.
Salomatda esa bor
O'q-dorilar dorivor.
Separ Mikrobga uni
Bitadi Mikrob kuni.
Virus-Mikrob qirilar,
Dorilarga urilar.
Virus boshiga to'qmoq
Urar yana Sarimsoq.
Yov ishi chiqar puchga,
Bemorlar kirar kuchga!
"Endi, — deydi Salomat, —
Yaratamiz alomat
Giyohlardan damlama.
Ular to'rvamda, mana.
Yalpiz va Yerqalampir,
Na'matak va Zanjabil,
Qani ishga, odamlar,
Bemor topsin yordamlar!
Yana qalampirmunchoq
Olib keldim bir quchoq".
Ishlar qizir har joyda,
Harakat — koni foyda.
Paydo bo'la boshlanur
Bemorlar ko'zida nur.
Sayyora aholisi
Salomatdan barisi
Juda minnatdor, xursand,
Uning obro'si baland.
Barcha quvvatga to'lar,
Damlamalar kuch berar.
Mana so'nggi bemor ham,
Tuzaldi, bo'ldi bardam.
"Yash" sayyoraning ahli,
Katta-yu kichik — bari:
Salomatga der "Rahmat!"
Xursand bo'lishib behad,
Sovg'a bilan siylashar,
Ezgu tilak tilashar.
Yengildi yovuz Mikrob,
Virus ham bo'ldi xarob,
Gripp ham Tumov qochdi,
Sog'lomlikka yo'l ochdi.
"Yash" sayyorasi esa
Endi nom oldi "Yasha!"
Salomat uyga qaytar,
Sehrli so'zlar aytar:
"Shumati, bumati, davara,
Qiynalmay, bo'lmayin ovora,
Samoni bir zumda quchayin,
Ona Yer, sen tomon uchayin!"
U uyda bo'ldi paydo,
Uzoqdan keldi sado:
"Neki 'Yasha' xalqi bor,
Bari sendan minnatdor.
Qo'llab hayot farzini,
Sog'lom turmush tarzini,
Sendagi sabr, ishonch
Keltirdi bizga quvonch".`,

    tasks: [
      {
        id: 1,
        type: "categorize",
        title: "1-topshiriq: Turkumlarga ajrating",
        instruction: "So'zlarni to'g'ri turkumga joylashtiring",
        items: [
          "Mikrob",
          "Yalpiz",
          "Virus",
          "Sarimsoq",
          "Gripp",
          "Zanjabil",
          "Tumov",
          "Piyoz",
          "Niqob",
          "Qalampirmunchoq",
          "Isitma",
          "Na'matak",
        ],
        categories: [
          { label: "Kasalliklar", color: "red" },
          { label: "Shifobaxsh o'tlar", color: "green" },
          { label: "Himoya vositalari", color: "blue" },
        ],
        correct: {
          Kasalliklar: ["Mikrob", "Virus", "Gripp", "Tumov", "Isitma"],
          "Shifobaxsh o'tlar": [
            "Yalpiz",
            "Sarimsoq",
            "Zanjabil",
            "Piyoz",
            "Qalampirmunchoq",
            "Na'matak",
          ],
          "Himoya vositalari": ["Niqob"],
        },
      },
      {
        id: 2,
        type: "ordering",
        title: "2-topshiriq: Voqealar ketma-ketligi",
        instruction: "Voqealarni to'g'ri tartibda joylashtiring",
        correct_order: [
          "Salomat mikrofondan hamma taqvolsin niqob dedi",
          "Hamma ishga kirishdi, Mikrob bilan kurashdi",
          "Virus va Mikrob jahldan tutoqdilar",
          "Salomat giyohlardan damlama tayyorladi",
          "Bemorlar ko'zida nur paydo bo'la boshladi",
          "So'nggi bemor ham tuzaldi",
          "Sayyora 'Yasha' nomini oldi",
          "Salomat uyiga qaytdi",
        ],
      },
      {
        id: 3,
        type: "word_scramble",
        title: "3-topshiriq: So'zlarni toping",
        instruction: "Aralashtirilgan harflarni to'g'ri tartibga keltiring",
        words: [
          {
            scrambled: "AMALDMA",
            answer: "DAMLAMA",
            hint: "Giyohlardan tayyorlanadi",
          },
          { scrambled: "TOTIQUT", answer: "TUTOQDI", hint: "Jahl qildi" },
          { scrambled: "TABMRAD", answer: "BARDAM", hint: "Sog'lom, tetik" },
          {
            scrambled: "ZORIMED",
            answer: "DORIVOR",
            hint: "Dori sifatida ishlatiladi",
          },
          { scrambled: "TIQSI", answer: "ISITMA", hint: "Kasallik belgisi" },
        ],
      },
      {
        id: 4,
        type: "written_questions",
        title: "4-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "Salomat Mikrobga qarshi qanday kurashdi? O'z so'zlaringiz bilan 5-6 gap yozing.",
          "Agar siz Salomat bo'lsangiz, kasalliklardan himoyalanish uchun odamlarga qanday maslahat bergan bo'lardingiz? 5 gap yozing.",
          "Ertak sizga qanday hayotiy saboq berdi? 4-5 gap yozing.",
        ],
      },
      {
        id: 5,
        type: "oral_questions",
        title: "5-topshiriq: Og'zaki savollar",
        questions: [
          "Salomat Mikrob va Virusga qarshi qanday kurashdi?",
          "Sarimsoq, yalpiz, zanjabil kabi o'simliklar nima uchun dorivor hisoblanadi?",
          "Ertak oxirida sayyora nima uchun 'Yasha' nomini oldi?",
          "Kasalliklardan saqlanish uchun kundalik hayotda nima qilish kerak?",
          "Salomat qizning qaysi fazilati sizga eng ko'p yoqdi?",
          "Ertak va haqiqiy hayot o'rtasida qanday o'xshashlik bor?",
        ],
      },
    ],
  },

  {
    id: 12,
    novel_name: "Chuchvarachi chumchuq xola",
    author: "Muazzam Ibrohimova",
    genre: "She'r",
    short_description:
      "Mehnatsevar chumchuq xola bahor kelib o'z ishini boshlaydi va shifobaxsh chuchvara tayyorlaydi...",
    text: `Bahor kelib chor atroflar
Ko'z quvnatib yashnadi.
Chuchvarachi chumchuq xola
O'z ishini boshladi.

Erta tongdan erinmasdan
Giyoh terdi o'tloqda.
Charchasa ham, churq etmasdan
Obdon yuvdi buloqda.

Surpa yozib, xamir qordi
Bo'lib rosa ovora.
Ta'mi shirin chuchvaraga
To'lib ketdi tog'ora...

– Kelib qoling, hoy, yeb qoling
Ko'klamoyning oshidan.
Sizga atay terib keldim
Qir, adirlar qoshidan.

Yalpiz chiqdi, ariqlarning
Roshlarini cho'qisam,
Ming bir dardga shifo ekan,
Kitoblardan o'qisam.

Jag'-jag' qonni tozalasa,
Yordam berar ismaloq.
Ehhe, qancha quvvat bo'lar
Quyonquloq otquloq.

Barchasini sanar bo'lsam,
Sovib qolar chuchvaram.
Qani, keling, bugun tekin,
Bo'shab qolsin tog'oram.

Ayiqpolvon, birpasgina
Yemay turgin asalni,
Bu giyohlar asalday zo'r!
Davolaydi kasalni.

Bo'ri tog'a, o'tib ketmang
Mazasini bilmasdan.
Tulkibonu, chuchvara yeng,
Chumchuqxo'rlik qilmasdan.

Qoplon aka, yotibsizmi
Qarab quruq suyakka?
Ikki kosa chuchvara yeb,
Kuch qo'shing-da, bilakka.

Xolamizning oshxonasi
O'rmonimiz yonida.
Uch-to'rt to'nka o'rindiqdir,
Maysa unar polida.

Joy yetmagan yerga qo'ndi,
Kim daraxtning uchiga.
Ishonmasdi ahli o'rmon
Chuchvaraning kuchiga.

Yeb bo'lishgach, maza qilib
Qoshiqlarni yalashdi.
Yuqi qolgan tog'orani
Olmaxonlar talashdi.

Mo'jiza ko'p kuttirmadi,
Qoyil qoldi barchasi.
Ko'p dardlardan xalos bo'ldi
Kasallarning qanchasi.

Shundan buyon qish tugamay
Taqillasa tomoqlar,
Chuchvaraxo'r jonivorlar
Terib kelar giyohlar.

Tulkixon der:
– Avval buni
Toza yuvib olamiz.
Horib-charchab qolmasin-da,
Chuchvarachi xolamiz!`,
    tasks: [
      {
        id: 1,
        type: "emoji_match",
        title: "1-topshiriq: Emoji va so'zni moslashtiring",
        instruction: "Har bir emojini mos so'zga torting",
        pairs: [
          { emoji: "🐦", word: "Chumchuq" },
          { emoji: "🌿", word: "Giyoh" },
          { emoji: "🫕", word: "Chuchvara" },
          { emoji: "🌸", word: "Bahor" },
          { emoji: "🍯", word: "Asal" },
          { emoji: "💧", word: "Buloq" },
          { emoji: "🐺", word: "Bo'ri" },
          { emoji: "🦊", word: "Tulki" },
        ],
      },
      {
        id: 2,
        type: "true_false",
        title: "2-topshiriq: To'g'ri yoki Noto'g'ri",
        instruction: "Quyidagi gaplar to'g'rimi yoki noto'g'rimi?",
        questions: [
          { q: "Chumchuq xola erta tongdan giyoh terdi.", answer: true },
          { q: "Giyohlarni u daryoda yuvdi.", answer: false },
          { q: "Yalpiz ming bir dardga shifo ekan.", answer: true },
          { q: "Ismaloq qonni tozalashga yordam beradi.", answer: true },
          { q: "O'rmon aholisi chuchvarani yemadi.", answer: false },
          { q: "Tog'oraning yuqisini olmaxonlar talashdi.", answer: true },
          { q: "Xolamizning oshxonasi daryo bo'yida edi.", answer: false },
          {
            q: "She'rda Ayiqpolvon asaldan voz kechishga chaqiriladi.",
            answer: true,
          },
        ],
      },
      {
        id: 3,
        type: "fill_blank",
        title: "3-topshiriq: Bo'sh joyni to'ldiring",
        instruction: "She'rdan olingan misralarni to'ldiring",
        questions: [
          {
            before: "Bahor kelib chor atroflar Ko'z quvnatib",
            blank: "yashnadi",
            after: ".",
            options: ["yashnadi", "so'ladi", "o'chdi", "qoldi"],
          },
          {
            before: "Charchasa ham, churq etmasdan Obdon yuvdi",
            blank: "buloqda",
            after: ".",
            options: ["buloqda", "daryoda", "hovuzda", "kanalda"],
          },
          {
            before: "Jag'-jag' qonni tozalasa, Yordam berar",
            blank: "ismaloq",
            after: ".",
            options: ["ismaloq", "yalpiz", "zanjabil", "sarimsoq"],
          },
          {
            before: "Bu giyohlar asalday zo'r! Davolaydi",
            blank: "kasalni",
            after: ".",
            options: ["kasalni", "bolani", "hayvonni", "o'tni"],
          },
        ],
      },
      {
        id: 4,
        type: "oral_questions",
        title: "4-topshiriq: Og'zaki savollar",
        questions: [
          "Chumchuq xola kim va u nima uchun mashhur?",
          "She'rda qanday o'rmon hayvonlari tilga olingan?",
          "Chuchvara tarkibiga qanday giyohlar solingan va ularning foydasi nima?",
          "She'rda mehnatsevarlik qanday tasvirlangan? Misollar keltiring.",
          "Tulkixon she'r oxirida nima dedi va bu nimani bildiradi?",
          "Sizningcha, chumchuq xola qanday inson xarakterini ifodalaydi?",
        ],
      },
      {
        id: 5,
        type: "written_questions",
        title: "5-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "Chumchuq xolaning mehnatsevarligini o'z so'zlaringiz bilan 5-6 gap yozing.",
          "Agar siz o'rmon hayvoni bo'lsangiz, chuchvara yegach qanday his qilgan bo'lardingiz? 4-5 gap yozing.",
          "She'rdagi shifobaxsh o'simliklardan birini tanlang va uning foydasi haqida 5 gap yozing.",
        ],
      },
    ],
  },
  {
    id: 13,
    novel_name: "Qari bilganni pari bilmas",
    author: "O'zbek xalq ertagi",
    genre: "Ertak",
    short_description:
      "Zolim podshoh keksalarni shahardan haydar, lekin bir yigit otasini yashirib, oxirida haqiqat g'alaba qiladi...",
    text: `Qadim zamonda, Sharq tomonda aytgani aytgan, degani degan zolim podshoh o'tgan ekan. U boylik, mol-u dunyo uchun hech narsadan tap tortmas ekan. Uning boyligi hech yerga sig'mas, biroq podshoh uni sarflash o'rniga to'plagani to'plagan ekan.

Podshoh o'ylab-o'ylab, qariyalar ishlamaydi, ulardan foyda yo'q, hammasini shahardan haydash kerak, degan qarorga kelibdi.

Kunlarning birida u shunday farmon chiqaribdi: "Qo'l ostimdagi har bir tirik jon yetmish yoshgacha tinmay mehnat qilishi kerak. Kimki yetmishdan oshsa, ishga yaroqsiz sanaladi. Uning tirik yurishidan foyda yo'q. Shuning uchun bundaylarning yaqin kishisi tog'ga olib chiqib tashlab kelsin. Kimki bu farmonga amal qilmasa, boshi o'limda, moli talonda!"

Ko'p o'tmay, bu podshohlikda qari kishilar qolmabdi. Shu mamlakatda bir yigit bo'lib, uning xotini, bola-chaqasi va keksayib qolgan otasi bor ekan. Chol yetmish yoshga to'lgan kuni podshoh yasovullari kirib, yigitdan otasini yo'qotib kelishni talab qilishibdi.

Yigit otasi uchun el-u yurtga osh beribdi va otasini yelkalab, tog'ga chiqa boshlabdi. Tog'ning tepasida supaga o'xshash bir yassi tosh bo'lib, hamma shu yerga kelganda dam olar ekan. Yigit ham o'sha yerga yetib kelibdi. Otasi uning orqasida turib qah-qah otib kulib yuboribdi.

— Ota, — debdi yigit yig'lab, — men sizni to'y-tomoshaga emas, zolim zulmi tufayli o'limga olib ketyapman. Siz yig'lash o'rniga kulasiz! Buning sababi nima?

— Ey o'g'lim, — debdi chol, — bu dunyoda yaxshilik ham, yomonlik ham qaytar ekan. Bir zamonlar men ham ojiz, notavon bechora otamni ko'tarib olib ketayotganda, xuddi shu yerga kelganda dam olgan edim. Meni sen o'limga olib borsang, seni ham kun kelib o'g'ling olib boradi, shunga ham yig'layapman, ham kulyapman!

Bu gap yigitga qattiq ta'sir qilibdi va u yig'lab bunday debdi:
— Agar meni qiynoqqa solsalar ham, zindonga tashlasalar ham mayli. Sizni men tog'da tashlab ketmayman. Bu zolimga yam bir kun o'lim bordir!

Yigit kechasi otasini uyiga qaytarib olib kelibdi. Tom tepasidagi xashaklar orasiga birov ko'rmaydigan qilib joy qilib beribdi. Chol kunduzlari kapadan chiqmay yotar, kechalari hovliga tushib, bolalari bilan suhbatlashar ekan.

Shu ahvolda kunlar, oylar, yillar o'ta boshlabdi...`,
    tasks: [
      {
        id: 1,
        type: "multiple_choice",
        title: "1-topshiriq: To'g'ri javobni tanlang",
        questions: [
          {
            q: "Podshoh necha yoshdan oshganlarni shahardan haydashni buyuradi?",
            options: ["Oltmish", "Yetmish", "Sakson", "To'qson"],
            answer: 1,
          },
          {
            q: "Yigit otasini qayerga olib chiqdi?",
            options: ["Daryoga", "O'rmonga", "Tog'ga", "Cho'lga"],
            answer: 2,
          },
          {
            q: "Tog' tepasida qanday joy bor edi?",
            options: ["Daraxt", "Yassi tosh", "Ko'l", "G'or"],
            answer: 1,
          },
          {
            q: "Chol nima uchun qah-qah otib kuldi?",
            options: [
              "Xursandchilikdan",
              "U ham bir vaqt otasini shu yerga olib kelgan edi",
              "Podshohdan qo'rqqanidan",
              "O'g'lini juda yaxshi ko'rganidan",
            ],
            answer: 1,
          },
          {
            q: "Yigit otasini qaytargach, uni qayerda yashirdi?",
            options: [
              "Yer ostiga",
              "Qo'shni uyga",
              "Tom tepasidagi xashaklar orasiga",
              "O'rmonga",
            ],
            answer: 2,
          },
        ],
      },
      {
        id: 2,
        type: "ordering",
        title: "2-topshiriq: Voqealar ketma-ketligi",
        instruction: "Ertak voqealarini to'g'ri tartibda joylashtiring",
        correct_order: [
          "Podshoh yetmishdan oshganlarni haydash farmonini chiqardi",
          "Yigitning otasi yetmish yoshga to'ldi",
          "Yasovullar yigitdan otasini yo'qotib kelishni talab qildi",
          "Yigit otasini yelkalab tog'ga olib chiqdi",
          "Tog' tepasida chol qah-qah otib kuldi",
          "Yigit otasini uyiga qaytarib olib keldi",
          "Chol tom ustidagi xashaklar orasida yashay boshladi",
        ],
      },
      {
        id: 3,
        type: "drag_and_drop_qa",
        title: "3-topshiriq: Savolga javob toping",
        instruction: "Har bir savolga mos javob kartochkasini torting",
        pairs: [
          { question: "Podshoh qanday inson edi?", answer: "Zolim" },
          {
            question: "Yigitning otasi necha yoshga to'ldi?",
            answer: "Yetmish",
          },
          {
            question: "Chol qayerda yashirinib yashadi?",
            answer: "Tom ustida",
          },
          { question: "Yasovullar kimdan talab qildi?", answer: "Yigitdan" },
          { question: "Tog' tepasida nima bor edi?", answer: "Yassi tosh" },
          {
            question: "Chol nechta o'g'li bilan suhbatlashdi?",
            answer: "Kechalari bolalari bilan",
          },
          {
            question: "Yigit otasini nima bilan ko'tardi?",
            answer: "Yelkasida",
          },
          {
            question: "Ertak qaysi millat ertagi?",
            answer: "O'zbek xalq ertagi",
          },
        ],
      },
      {
        id: 4,
        type: "oral_questions",
        title: "4-topshiriq: Og'zaki savollar",
        questions: [
          "Ertak sarlavhasi 'Qari bilganni pari bilmas' nimani anglatadi?",
          "Podshohning farmoni adolatli edimi? Nega?",
          "Chol tog'da kulganining haqiqiy sababi nima edi?",
          "Yigit nima uchun otasini tashlab ketmadi?",
          "Bu ertak bizga qanday hayotiy saboq beradi?",
          "Sizningcha, yigit to'g'ri ish qildimi? Fikringizni asoslang.",
        ],
      },
      {
        id: 5,
        type: "written_questions",
        title: "5-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "Agar siz yigitning o'rnida bo'lsangiz, nima qilgan bo'lardingiz? 5-6 gap yozing.",
          "Ertak qahramonlaridan biriga xat yozing. 5-6 gap.",
          "'Bu dunyoda yaxshilik ham, yomonlik ham qaytar ekan' gapini o'z so'zlaringiz bilan izohlang. 4-5 gap.",
        ],
      },
    ],
  },
  {
    id: 14,
    novel_name: "Nok",
    author: "Latif Mahmudov",
    genre: "Hikoya",
    short_description:
      "Buvisi bilan ko'chib ketgan o'g'il bola eski mahallaga boradi va nok daraxtining sir-asrorini bilib oladi...",
    text: `Bu yerga kelganimizga uch-to'rt oy bo'ldi. Men ham, oyim ham, dadam ham yangi uyga, qo'ni-qo'shnilarga allaqachon o'rganib ketdik. Buvim esa xuddi biror narsasini yo'qotgandek xayol surib qolar, turib-turib eski hovlini qo'msab qoladi:
— Eski mahallaga bir borib kelsak-chi, a?

Bu gap menga yoqmaydi.
— Qiziqsiz-a, buvi, — deyman, — eski mahalla qoldimi?

Shunda buvim birdan bo'shashib:
— Eshikning oldidagi nok turganmikan? — deydi.

Buvimga hayronman. Ko'chayotganimizda boshqa narsalar qolib nokka achingan. Men-ku, nokni eslasam yuragim g'ash bo'ladi. Kesilib ketsin deb yuraman.

Buvimning xomushligi bahona bo'ldi-yu, kiyindim. Buvimning oldiga kirib:
— Qani, yuring, — dedim.

Shu tobda bechora buvim yosh boladek quvonib ketdi. Mana, ikkimiz avtobusda eski mahallaga ketyapmiz. Buvim oynadan bosh chiqardilar, ilhaq bo'lib nimanidir qidirdilar. Men esa qani edi, nok kesilib to'nka-po'nkasini ham buldozer qo'porib tashlagan bo'lsa, deb boryapman.

Bunday deyishimning sababi bor. Ayni nok pishig'i. Ertaga tomosha degan kuni allavaqtgacha uxlayolmay yulduzlarga qarab yotdim. Tongga yaqin ko'zim ilingan ekan, peshonamga tushgan allaqanday mushtdan dodlab o'rnimdan turib ketdim. Qarasam, yostig'imning ustida bir dona nok dumalab yotibdi. Eng yomoni, hash-pash deguncha chap ko'zim ko'karib, qovoqlarim shishib chiqdi. Bunaqa bashara bilan ko'chaga ham chiqib bo'lmas edi.

O'sha kuni hech qayoqqa bormay, alamimdan dumalab yotdim. Keyin chidayolmay, devorga chiqdim-u, kattakon bir shoxini arralab tashladim. O'sha kuni dadamning koyiganini hisobga olmaganda butunlay alamimdan chiqqan edim.

Avtobusdan tushdik. Jin ko'chalardan, paxsa devorlardan nom-nishon qolmagan. Qator-qator yangi uylar, ba'zilari ikkinchi-uchinchi qavatgacha ko'tarilgan. Tumshug'i havoga sanchilgan ko'tarma kranlar taqa-taq to'xtagan, hamma ovqatdan so'ng nokning quyuq soyasida hordiq chiqarardi.

Biz ham buvim bilan bir chekkada o'tirib dam oldik. Ishchilardan biri shipillab nokning ustiga chiqib silkitgan edi, nok duv etib to'kildi. Qiy-chuv, kulgi bilan qizlar nokni terib o'rtaga qo'yishdi. Men ham oldimga tushganlarini cho'ntakka urdim. Nok qoqqan kishi pastga qarab:
— Bo'ldimi? — dedi.
— Ha, — chuvirlashishdi qizlar.
— Ertagaga ham qolsin.

U ohista tusha boshladi va xuddi men kesib tashlagan joyga kelganda, nazarimda, beixtiyor to'xtagandek bo'ldi. Men o'zimni allanechuk sezdim.

Buvimga bildirmay sekin nokka qaradim. O'zim ham eng chiroyli shoxini olib tashlagan ekanman. Shu tobda nok bir qanoti singan burgutni eslatdi!

— Buvi, — dedim nok chaynab, — nega shu nokni yaxshi ko'rasiz-a?

Buvim esa hadeganda javob bermadi.
— Buni, — dedi nihoyat xayol bilan, — buni rahmatli buvang ekkan. Odamlarga ekkan. Ana shu tagida o'tirgan odamlarga ekkan, bolam!

Azim tup nok esa jaziramadan odamlarni bag'riga chorlab, go'yo buvimning gaplarini tasdiqlagandek, tepamizda sirli shovullar edi.`,
    tasks: [
      {
        id: 1,
        type: "true_false",
        title: "1-topshiriq: To'g'ri yoki Noto'g'ri",
        instruction: "Quyidagi gaplar to'g'rimi yoki noto'g'rimi?",
        questions: [
          { q: "Buvim ko'chib ketgandan so'ng nokni sog'inadi.", answer: true },
          { q: "O'g'il bola nokni yaxshi ko'radi.", answer: false },
          {
            q: "Nok bir kecha bolaning peshonasiga tushib, ko'zini ko'kartirdi.",
            answer: true,
          },
          {
            q: "O'g'il bola nokning eng katta shoxini kesib tashladi.",
            answer: false,
          },
          { q: "Nokni buvining rahmatli eri ekkan.", answer: true },
          {
            q: "Eski mahallada hamma eski binolar saqlanib qolgan.",
            answer: false,
          },
          {
            q: "Ishchilar nok terayotganda qizlar ham yordam berdi.",
            answer: true,
          },
          { q: "Nok ko'chadan ham ko'rinib turardi.", answer: false },
        ],
      },
      {
        id: 2,
        type: "drag_and_drop_qa",
        title: "2-topshiriq: Savolga javob toping",
        instruction: "Har bir savolga mos javob kartochkasini torting",
        pairs: [
          {
            question: "Yangi uyga ko'chib kelganlariga qancha vaqt bo'lgan?",
            answer: "Uch-to'rt oy",
          },
          { question: "Buvim nimani qo'msab qoladi?", answer: "Eski hovlini" },
          {
            question: "Buvim eski mahalladan nima haqida so'radi?",
            answer: "Nok haqida",
          },
          {
            question: "Nok bolaning qaysi ko'zini ko'kartirdi?",
            answer: "Chap ko'zini",
          },
          {
            question: "Bola nokning qaysi qismini kesdi?",
            answer: "Kattakon shoxini",
          },
          { question: "Nokni kim ekkan?", answer: "Rahmatli buva" },
          {
            question: "Nok kesib tashlangan joyi bolaga nimani eslatdi?",
            answer: "Qanoti singan burgut",
          },
          {
            question: "Ular eski mahallaga nima bilan bordi?",
            answer: "Avtobus bilan",
          },
        ],
      },
      {
        id: 3,
        type: "word_scramble",
        title: "3-topshiriq: So'zlarni toping",
        instruction: "Aralashtirilgan harflarni to'g'ri tartibga keltiring",
        words: [
          {
            scrambled: "KONLAR",
            answer: "NOLKAR",
            hint: "Baland bino qurish uchun ishlatiladigan mashina — kran",
          },
          { scrambled: "IVUMB", answer: "BUVIM", hint: "Boboning xotini" },
          {
            scrambled: "LUZDUYZ",
            answer: "YULDUZ",
            hint: "Kechasi osmonda ko'rinadigan yorug' nuqtalar",
          },
          {
            scrambled: "MOZAJ",
            answer: "JAZOMA",
            hint: "Yoz issig'i — jazirama",
          },
          {
            scrambled: "TUGURB",
            answer: "BURGUT",
            hint: "Kuchli va ulkan qush",
          },
        ],
      },
      {
        id: 4,
        type: "oral_questions",
        title: "4-topshiriq: Og'zaki savollar",
        questions: [
          "Nok o'g'il bolaga nima qilgan edi va bola unga qanday munosabatda bo'ldi?",
          "Buvim nokni nima uchun sog'ingan edi?",
          "Hikoya oxirida o'g'il bolaning nokka munosabati o'zgardimi?",
          "'Nok bir qanoti singan burgutni eslatdi' gapi sizga qanday ta'sir qildi?",
          "Buvangiz yoki kattalaringiz o'tgan narsalarni nima uchun sog'inadi deb o'ylaysiz?",
          "Sizningcha, hikoyaning asosiy g'oyasi nima?",
        ],
      },
      {
        id: 5,
        type: "written_questions",
        title: "5-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "Hikoya oxirida o'g'il bolaning fikri qanday o'zgardi? 5-6 gap yozing.",
          "Siz ham biror narsaga achinganmisiz, keyin uning qiymatini anglaganmisiz? Yozing. 5 gap.",
          "'Odamlarga ekkan' iborasini o'z so'zlaringiz bilan izohlang. 4-5 gap.",
        ],
      },
    ],
  },
  {
    id: 15,
    novel_name: "Temir qoziq",
    author: "O'tkir Hoshimov",
    genre: "Hikoya",
    short_description:
      "Bir yigitcha jiydazorda temir qoziq topib oladi, lekin bu topilma uni qiyin ahvolga soladi...",
    text: `Tengqur bolalar bilan jiydazorda mol boqardik. Adashmasam, o'shanda beshinchi sinfda o'qirdim. Jiydazorda o't ko'p. Bekinmachoq o'ynashga ham qulay joy. Faqat kun botar-botmas, har kim o'z molini yetaklab, uyiga jo'nar, jiydazorda ajina bor, yolg'iz yursang, og'zingni qiyshaytirib ketadi, degan vahima gaplar yurardi.

Mening sigirim yuvosh bo'lsa ham, bir aybi bor. Nuqul qozig'ini sug'urib daydib ketardi. Bilasiz, qoziq yog'ochdan yasaladi. Har kuni qoqavergandan keyin boshi yediriladi, sinadi. Qarabsizki, boshqa qoziq yasash kerak...

Shunday kunlarning birida temir qoziq topib oldim. Boshida halqasi ham, hatto uzilib qolgan bir-ikki qarich arqoni ham bor. O'rtoqlarimdan "Kimning qozig'i?" — deb so'rasam, egasi chiqmadi. Sevinib ketdim. Sigirimni yangi qoziqqa bog'lab qo'ydim. Endi sug'urib ko'rsin-chi!

O'sha kuni emas-ku, ertasiga g'alati ish bo'ldi. Kechasi endi uxlagan ekanman, oyim: "Adang chaqiryaptilar, turarkansan" — deb qoldi. Hayron bo'lib ayvonga chiqsam, otam qovog'ini uyib o'tiribdi. Qo'lida o'sha temir qoziq.

— Qayoqdan olding buni? — dedi tahdid bilan.
— Topib oldim.
— Qayerdan?
— Jiydazordan.
— Qaysi jiydaning tagidan?
— Qiyshiq jiydaning.
— Jiydaning to'g'risi bo'lmaydi. Qaysi birining tagidan? Ko'rsan, taniysanmi o'sha jiydani?
— Taniyman, — dedim qo'rqa-pisa.

Otam qo'limga qoziqni tutqazdi.
— Xuddi o'sha jiydaning tagiga tashlab kelasan.

Yuragim orqamga tortib ketdi. Jiydazorda ajina borligini esimga tushib, talmovsirab qoldim. Ayvon burchagida turgan oyim yalindi:
— Tashlab keladi, adasi, tong otsin, albatta, tashlab keladi.
— Sen aralashma! — dedi otam e'tirozga o'rin qoldirmaydigan ohangda.

Uyg'onib, ichkaridan chiqqan akam hammasini tushundi, shekilli, nimchasini kiya boshlagan edi, otam jerkib berdi:
— Sen qayoqqa?
— Birga borib kelamiz.
— Yo'q! — dedi otam shiddat bilan. — O'zi topganmi, o'zi oborib qo'yadi.

Kuz. Salqin tushib qolgan. G'ira-shira ko'raydi... Qo'limda muzdek temir qoziq bilan yo'lga tushdim.

Jiydazor-ku, uzoq emas. Ammo unga yetguncha Darxon arig'i ustidagi ko'hna ko'prikdan o'tish kerak. Odam yolg'iz qolsa, kunduzi ham qo'rqadigan qing'ir-qiyshiq jiyda chakalakzori orasiga kirish kerak.

Salqin havodan mi, qo'rquvdanmi oyog'im qaltirab ko'prikdan o'tdim. G'ira-shira ko'rinayotgan sirli sukunat cho'kkan jiydazorga kirdim. Nazarimda, har bir daraxt orqasida nimadir berkinib turgandek edi. Qayerdadir boyqush "huv-huv" ladi...

Rostini aytsam, Qonqus bo'yigacha bormadim. Qo'limdagi qoziqni kuchim boricha uloqtirib, orqaga qarab yugurdim.

Oyim bilan akam ko'chaga chiqib kutib turishgan ekan...

Labimga uchuq toshib, bir-ikki kun achishib yurganini hisobga olmaganda, hech nima bo'lmadi... faqat oradan bir oycha o'tgach, otam shu masalaga qaytib, bir gap aytdi:

— Sen topib olgan qoziqqa bog'langan sigir arqonini uzib, adashib ketgan bo'lsa, yoki birov o'g'irlagan bo'lsa-da, qoziq sening uyingdan chiqsa, egasi seni o'g'ri gumon qilsa, nima bo'ladi?`,
    tasks: [
      {
        id: 1,
        type: "multiple_choice",
        title: "1-topshiriq: To'g'ri javobni tanlang",
        questions: [
          {
            q: "Hikoya qahramoni o'shanda necha sinfda o'qirdi?",
            options: ["To'rtinchi", "Beshinchi", "Oltinchi", "Yettinchi"],
            answer: 1,
          },
          {
            q: "Sigirimning aybi nima edi?",
            options: [
              "Sut bermadi",
              "Qozig'ini sug'urib daydi ketardi",
              "Baqirardi",
              "Mol boqqanda qochardi",
            ],
            answer: 1,
          },
          {
            q: "Temir qoziqni qaerdan topdi?",
            options: ["Ariq bo'yidan", "Ko'prikdan", "Jiydazordan", "Uydan"],
            answer: 2,
          },
          {
            q: "Otam qoziqni qaerga tashlab kelishni buyurdi?",
            options: [
              "Daryoga",
              "Ko'prikka",
              "Qiyshiq jiydaning tagiga",
              "Uyiga",
            ],
            answer: 2,
          },
          {
            q: "Otam bir oydan keyin qanday savol berdi?",
            options: [
              "Qoziqni topganing to'g'rimi?",
              "Nega qozig'ingni yo'qotding?",
              "Agar egasi seni o'g'ri gumon qilsa nima bo'ladi?",
              "Jiydazordan yana narsa topganmisan?",
            ],
            answer: 2,
          },
        ],
      },
      {
        id: 2,
        type: "ordering",
        title: "2-topshiriq: Voqealar ketma-ketligi",
        instruction: "Hikoya voqealarini to'g'ri tartibda joylashtiring",
        correct_order: [
          "Bola jiydazorda temir qoziq topdi",
          "Sigirimni yangi temir qoziqqa bog'ladi",
          "Otam kechasi qoziqni qo'lida ushlab chiqdi",
          "Otam qoziqni jiydazorga tashlab kelishni buyurdi",
          "Bola qo'rqib qoziqni uloqtirib qochdi",
          "Oyim va akam ko'chada kutib turishgan edi",
          "Bir oydan keyin otam saboq beruvchi savol berdi",
        ],
      },
      {
        id: 3,
        type: "fill_blank",
        title: "3-topshiriq: Bo'sh joyni to'ldiring",
        instruction: "Hikoyadan olingan gaplarni to'ldiring",
        questions: [
          {
            before:
              "Mening sigirim yuvosh bo'lsa ham, bir aybi bor. Nuqul qozig'ini sug'urib",
            blank: "daydib",
            after: "ketardi.",
            options: ["daydib", "chopib", "yugurib", "uchib"],
          },
          {
            before: "Qo'limda muzdek temir qoziq bilan",
            blank: "yo'lga",
            after: "tushdim.",
            options: ["yo'lga", "uyga", "dalaga", "bog'ga"],
          },
          {
            before:
              "Rostini aytsam, Qonqus bo'yigacha bormadim. Qo'limdagi qoziqni kuchim boricha",
            blank: "uloqtirib",
            after: ", orqaga qarab yugurdim.",
            options: ["uloqtirib", "tashlab", "otib", "irg'itib"],
          },
          {
            before: "Labimga uchuq toshib, bir-ikki kun",
            blank: "achishib",
            after: "yurganini hisobga olmaganda, hech nima bo'lmadi.",
            options: ["achishib", "og'rib", "qizarib", "shishib"],
          },
        ],
      },
      {
        id: 4,
        type: "oral_questions",
        title: "4-topshiriq: Og'zaki savollar",
        questions: [
          "Nega otam kechasi qoziqni tashlab kelishni buyurdi?",
          "Bola jiydazordan qo'rqqanida nima his qildi?",
          "Otamning bir oydan keyin aytgan gapi qanday saboq beradi?",
          "Agar siz o'sha bolaning o'rnida bo'lsangiz nima qilgan bo'lardingiz?",
          "Hikoya sizga qanday axloqiy saboq beradi?",
          "Topib olingan narsaning egasi bo'lsa, nima qilish kerak?",
        ],
      },
      {
        id: 5,
        type: "written_questions",
        title: "5-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "Otam nima uchun kechasi qoziqni tashlab kelishni buyurdi? Fikringizni 5-6 gap bilan yozing.",
          "Agar siz qoziqning egasi bo'lsangiz va uni bolaning uyida topsangiz, nima degan bo'lardingiz? 5 gap.",
          "Hikoyadan kelib chiqib, halollik haqida 4-5 gap yozing.",
        ],
      },
    ],
  },
  {
    id: 16,
    novel_name: "Ukam",
    author: "Hamza Imomberdiyev",
    genre: "She'r",
    short_description:
      "Ukasining kasalligidan xabar topgan aka o'zining barcha xato va g'ururiga tavba qiladi...",
    text: `Boya kelib "Tez yordam"
Ukamni olib ketdi.
To'xtamasdan, damo-dam
Signalin chalib ketdi.

Orqasidan termilib
Qoldim, ko'nglim buzildi.
Ushbu damda ukamning
Qadri juda sezildi.

Tushunolmay qoldim men
Bilmam, nima bo'lyapti?
Ko'zim ham o'z-o'zidan
Jiq-jiq yoshga to'lyapti.

Ukajonim, sog'ayib,
Tezroq qaytgin yonimga.
Bundan keyin yashayman
Qarab sening ra'yingga.

Kerak bo'lsa, bog'chaga
Chiqmay senga qarayman.
Kichikmasman, har qalay,
Ovutishga yarayman.

O'yinchoqning hammasi
Senga bo'lsin, ola qol.
Mayli, simi uzilsin,
Rubobni ham chala qol.

Ne xohishing bor bo'lsa,
Bajaraman, aytsang bas.
Ukajonim, sog'ayib
Tezroq uyga qaytsang bas.`,
    tasks: [
      {
        id: 1,
        type: "emoji_match",
        title: "1-topshiriq: Emoji va so'zni moslashtiring",
        instruction: "Har bir emojini mos so'zga torting",
        pairs: [
          { emoji: "🚑", word: "Tez yordam" },
          { emoji: "😢", word: "Yig'i" },
          { emoji: "🧸", word: "O'yinchoq" },
          { emoji: "🎻", word: "Rubob" },
          { emoji: "❤️", word: "Sevgi" },
          { emoji: "🏥", word: "Shifoxona" },
          { emoji: "👦", word: "Uka" },
          { emoji: "🙏", word: "Iltimos" },
        ],
      },
      {
        id: 2,
        type: "fill_blank",
        title: "2-topshiriq: Bo'sh joyni to'ldiring",
        instruction: "She'rdan olingan misralarni to'ldiring",
        questions: [
          {
            before:
              "Boya kelib 'Tez yordam' Ukamni olib ketdi. To'xtamasdan, damo-dam Signalin",
            blank: "chalib",
            after: "ketdi.",
            options: ["chalib", "qo'yib", "olib", "ushlab"],
          },
          {
            before: "Ushbu damda ukamning Qadri juda",
            blank: "sezildi",
            after: ".",
            options: ["sezildi", "yo'qoldi", "tushdi", "o'chdi"],
          },
          {
            before: "Ko'zim ham o'z-o'zidan Jiq-jiq yoshga",
            blank: "to'lyapti",
            after: ".",
            options: ["to'lyapti", "quryapti", "ko'ryapti", "bo'lyapti"],
          },
          {
            before: "O'yinchoqning hammasi Senga bo'lsin,",
            blank: "ola qol",
            after: ". Mayli, simi uzilsin, Rubobni ham chala qol.",
            options: ["ola qol", "o'yna qol", "saqla qol", "ber qol"],
          },
        ],
      },
      {
        id: 3,
        type: "quote_author",
        title: "3-topshiriq: Qaysi asardan?",
        instruction: "Quyidagi misralar qaysi asardan olinganini toping",
        quotes: [
          {
            quote: "Ukajonim, sog'ayib, Tezroq qaytgin yonimga.",
            options: [
              "Ona",
              "Ukam",
              "Mikrob va Salomat qiz",
              "Chuchvarachi chumchuq xola",
            ],
            answer: "Ukam",
          },
          {
            quote: "Ona — eng ulug' zot, Bag'ri — keng dunyo.",
            options: ["Ukam", "Ona", "Nok", "Temir qoziq"],
            answer: "Ona",
          },
          {
            quote: "Bahor kelib chor atroflar Ko'z quvnatib yashnadi.",
            options: [
              "Ukam",
              "Ona",
              "Chuchvarachi chumchuq xola",
              "Ona kaklik",
            ],
            answer: "Chuchvarachi chumchuq xola",
          },
          {
            quote: "Buni rahmatli buvang ekkan. Odamlarga ekkan.",
            options: ["Temir qoziq", "Nok", "Ukam", "Tarbiya"],
            answer: "Nok",
          },
        ],
      },
      {
        id: 4,
        type: "oral_questions",
        title: "4-topshiriq: Og'zaki savollar",
        questions: [
          "She'rda aka ukasiga nima va'da berdi?",
          "Uka kasallanganida akaning ko'ngliga qanday his keldi?",
          "She'rdan oldin aka ukasiga qanday munosabatda bo'lgan deb o'ylaysiz?",
          "Sizda ham aka yoki uka, opa yoki singil bormi? Ularning qadrini bilasizmi?",
          "She'rning asosiy g'oyasi nima deb o'ylaysiz?",
          "'Ushbu damda ukamning qadri juda sezildi' misrasini izohlang.",
        ],
      },
      {
        id: 5,
        type: "written_questions",
        title: "5-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "Siz ham aka yoki opangiz bilan janjallashganmisiz? Keyin nima his qildingiz? 5-6 gap yozing.",
          "Ukangiz yoki singlingiz kasallansa, siz nima qilgan bo'lardingiz? 5 gap yozing.",
          "She'rdagi akaning tuyg'ularini o'z so'zlaringiz bilan ifodalang. 4-5 gap.",
        ],
      },
    ],
  },
  {
    id: 17,
    novel_name: "Tarbiya",
    author: "Habibullo Qodiriy",
    genre: "Hikoya",
    short_description:
      "Buyuk yozuvchi Abdulla Qodiriy o'z farzandini qanday tarbiyalagan? O'g'li Habibullo eslaydi...",
    text: `Dadam — Abdulla Qodiriy bizni xoh oilada, xoh tashqarida bo'lsin, zimdan kuzatib turar edilar, lekin sira quruq nasihatgo'ylik qilmas, yo'rig'i bilan ikki og'iz ma'noli gap aytar, shuning o'zi bizga "ham oshlik", "ham nonlik" bo'lar edi...

— Ada, menga kitob olishga pul kerak.
— Xo'p, qancha?
— Yaxshi, — derdilar va so'raganimni berardilar.

Biroq pulni osongina olib ketdi, deb o'ylaysizmi? Hech ham. Kechaga tomon chaqirib so'rardilar:
— Qolgan pul qani?

Dadam menga faqat muzqaymoqqa ruxsat etardilar, qolganini qaytarib olardilar. Maktabga ketishimda ham pulni juda o'lchovli, tramvayga va bir-ikki stakan suvga loyiq berardilar. Peshinlik ovqatni-ku, uydan jildimga solib olishimga buyurardilar. U kishining bizga nisbatan bunchalik qattiqqo'l bo'lishlaridan bibim goho ranjirdilar.

— Juda bolaga mehring qattiq, Abdulla...
— Gap qattiqlikda emas, oyi, pulga o'rgatmaslikda, pul bolani buzadi... — der edilar jiddiy va o'z "qoida"lariga amal qilishda davom etaverardilar.

U kishi kiyim-kechak vajidan ham bizni ortiqcha siylamas, el-yurt qatori kiyintirar edilar. Bir vaqt, hali tevaragimizda rasm bo'lmagan choqda, men velosiped havas qilib qoldim. Tabiiyki, velosiped oldirishga bibimni vosita qildim. Shunda dadam dedilar:

— Velosiped olib berishga aqcham bor, lekin olib bermayman...
— Nega, bolam?
— Ayting-chi oyi, yon-verimizda kimning bolasi velosiped minayotir?
— Birov bilan nima ishing bor?
— Tushunmaysiz... Ko'pchilik bilan barobar borish kerak. Habibulla velosiped minsa, boshqa bolalarning ko'ngli o'ksiydi, qo'shnilar uyida janjal bo'ladi, ular siz-mendan ranjiydilar.`,
    tasks: [
      {
        id: 1,
        type: "multiple_choice",
        title: "1-topshiriq: To'g'ri javobni tanlang",
        questions: [
          {
            q: "Abdulla Qodiriy o'g'liga pul bergandan keyin nima qilardi?",
            options: [
              "Uni maqtardi",
              "Kechaga qolgan pulni so'rardi",
              "Yana ko'proq pul berardi",
              "Hech narsa demas edi",
            ],
            answer: 1,
          },
          {
            q: "Dadam o'g'liga nima uchun velosiped olib bermadi?",
            options: [
              "Puli yo'q edi",
              "Velosiped xavfli deb hisoblardi",
              "Qo'shni bolalar ham yo'q, ko'ngli o'ksiydi deb",
              "O'g'li kichkina edi",
            ],
            answer: 2,
          },
          {
            q: "'Pul bolani buzadi' — bu gapni kim aytgan?",
            options: ["Bibim", "Habibullo", "Abdulla Qodiriy", "Qo'shni"],
            answer: 2,
          },
          {
            q: "Dadam o'g'liga maktabda faqat nimaga pul ruxsat etardi?",
            options: [
              "Muzqaymoq va kino",
              "Tramvay va bir-ikki stakan suv, muzqaymoq",
              "Faqat non",
              "Barcha narsaga",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: 2,
        type: "drag_to_table",
        title: "2-topshiriq: Dadamning xulqi — To'g'ri yoki Noto'g'ri tarbiya?",
        instruction:
          "Quyidagi xatti-harakatlarni to'g'ri ustuniga joylashtiring",
        columns: ["To'g'ri tarbiya", "Noto'g'ri tarbiya"],
        items: [
          "Qolgan pulni so'rash",
          "Farzandga har narsani berib yuborish",
          "Ko'pchilik bilan barobar kiyintirish",
          "Bola xohlagan hamma narsani olish",
          "Ovqatni uydan olib borish",
          "Pulga o'rgatmaslik",
          "Farzandni ortiqcha siylamaslik",
          "Bolani birovdan ustun qo'yish",
        ],
        correct: {
          "To'g'ri tarbiya": [
            "Qolgan pulni so'rash",
            "Ko'pchilik bilan barobar kiyintirish",
            "Ovqatni uydan olib borish",
            "Pulga o'rgatmaslik",
            "Farzandni ortiqcha siylamaslik",
          ],
          "Noto'g'ri tarbiya": [
            "Farzandga har narsani berib yuborish",
            "Bola xohlagan hamma narsani olish",
            "Bolani birovdan ustun qo'yish",
          ],
        },
      },
      {
        id: 3,
        type: "oral_questions",
        title: "3-topshiriq: Og'zaki savollar",
        questions: [
          "Abdulla Qodiriy tarbiya haqida qanday fikrda bo'lgan?",
          "Nima uchun dadam velosiped olib bermagan?",
          "Bibimning 'mehring qattiq' degan gapiga Abdulla Qodiriy qanday javob berdi?",
          "Sizningcha, bu tarbiya usuli to'g'rimi? Nima uchun?",
          "Zamonaviy ota-onalar farzandlarini qanday tarbiyalaydi? Farqi bormi?",
          "Siz o'z farzandingizni kelajakda qanday tarbiyalagan bo'lardingiz?",
        ],
      },
      {
        id: 4,
        type: "written_questions",
        title: "4-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "'Pul bolani buzadi' gapini o'z so'zlaringiz bilan izohlang. 5-6 gap yozing.",
          "Abdulla Qodiriyning tarbiya usulini o'z fikringiz bilan baholang. 5 gap.",
          "Siz qanday ota-ona bo'lishni xohlaysiz? 4-5 gap yozing.",
        ],
      },
    ],
  },
  {
    id: 18,
    novel_name: "Ona (Alisherning onasi)",
    author: "She'r (Alisher Navoiyning onasi — Ma'suma begimga)",
    genre: "She'r",
    short_description:
      "Ona — eng ulug' zot. She'r Alisher Navoiyning onasi Ma'suma begimga bag'ishlangan...",
    text: `Ona — eng ulug' zot,
Bag'ri — keng dunyo.
U bilan yechilar
Ko'plab muammo!

U dono sarbondir
Umr yo'lida.
Ne-ne buyuk zotlar
O'sgan yo'lida.

***

Kiprigida asrab
Jon parchasini,
Lang ochgan olamning
Darichasini.

Yemakni o'rgatgan,
So'zni — kalomni,
Odob ila axloq
Va assalomni.

O'rgatgan zukkolik,
Rostlik, poklikni.
Shirin suxanlig-u
Chin o'rtoqlikni.

Alisher onasi —
Ma'suma — begim!
Sizdek ulug' zotga
Keldi so'z degim.

– Navoiydek buyuk,
Daho berib — siz,
Avlodlarni abad
Xushnud qilibsiz.

Besh yarim asrkim
Alisher — tirik.
O'qir xalq merosin
Qoqmasdan kiprik.

Halollik — ma'rifat,
Do'stlik — adolat,
Bosh mavzu shoirda
Vijdon — diyonat.

Uning umri quyosh
Umridek uzun.
Siz ham, begim, borsiz
Har dilda bugun.`,
    tasks: [
      {
        id: 1,
        type: "fill_blank",
        title: "1-topshiriq: Bo'sh joyni to'ldiring",
        instruction: "She'rdan olingan misralarni to'ldiring",
        questions: [
          {
            before: "Ona — eng ulug' zot, Bag'ri —",
            blank: "keng dunyo",
            after: ".",
            options: ["keng dunyo", "tor yo'l", "baland tog'", "chuqur daryo"],
          },
          {
            before: "U dono sarbondir",
            blank: "Umr yo'lida",
            after: ".",
            options: [
              "Umr yo'lida",
              "Tog' ustida",
              "Daryo bo'yida",
              "Bog' ichida",
            ],
          },
          {
            before:
              "Halollik — ma'rifat, Do'stlik — adolat, Bosh mavzu shoirda",
            blank: "Vijdon — diyonat",
            after: ".",
            options: [
              "Vijdon — diyonat",
              "Mehr — muhabbat",
              "Sabr — qanoat",
              "Ilm — bilim",
            ],
          },
          {
            before:
              "Besh yarim asrkim Alisher — tirik. O'qir xalq merosin Qoqmasdan",
            blank: "kiprik",
            after: ".",
            options: ["kiprik", "ko'z", "bosh", "qo'l"],
          },
        ],
      },
      {
        id: 2,
        type: "categorize",
        title: "2-topshiriq: Ona o'rgatgan narsalar va Navoiy fazilatlari",
        instruction:
          "Quyidagi so'z va iboralarni to'g'ri turkumga joylashtiring",
        categories: [
          { label: "Ona o'rgatganlari", color: "green" },
          { label: "Navoiy fazilatlari", color: "blue" },
        ],
        items: [
          "Yemak",
          "Halollik",
          "So'z — kalom",
          "Do'stlik",
          "Odob",
          "Vijdon",
          "Zukkolik",
          "Diyonat",
          "Rostlik",
          "Ma'rifat",
          "Shirin suxanlik",
          "Adolat",
        ],
        correct: {
          "Ona o'rgatganlari": [
            "Yemak",
            "So'z — kalom",
            "Odob",
            "Zukkolik",
            "Rostlik",
            "Shirin suxanlik",
          ],
          "Navoiy fazilatlari": [
            "Halollik",
            "Do'stlik",
            "Vijdon",
            "Diyonat",
            "Ma'rifat",
            "Adolat",
          ],
        },
      },
      {
        id: 3,
        type: "oral_questions",
        title: "3-topshiriq: Og'zaki savollar",
        questions: [
          "She'r kimga bag'ishlangan va nega?",
          "'Ona — eng ulug' zot' misrasini o'z so'zlaringiz bilan izohlang.",
          "Ona Alisherni qanday tarbiyaladi?",
          "Nima uchun Alisher Navoiy besh yarim asrdan keyin ham tirik deyiladi?",
          "Sizning onanngiz sizga qanday narsalarni o'rgatgan?",
          "She'r sizda qanday his-tuyg'ularni uyg'otdi?",
        ],
      },
      {
        id: 4,
        type: "written_questions",
        title: "4-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "Onangiz haqida 5-6 gap yozing. U sizga nima o'rgatgan?",
          "'Umr yo'lida dono sarbon' iborasini izohlang. 4-5 gap.",
          "Alisher Navoiy nima uchun ulug' shoir bo'ldi? She'rdan kelib chiqib yozing. 5 gap.",
        ],
      },
    ],
  },
  {
    id: 19,
    novel_name: "Ona kaklik",
    author: "Azim Suyun",
    genre: "Hikoya",
    short_description:
      "Bir cho'pon bola ona kaklikning tuxumlarini olmoqchi bo'ladi, lekin ona qush uni aqli bilan chalg'itib, bolalarini asrab qoladi...",
    text: `Hayot — murakkab. Unda umr kechirish o'z-o'zidan bo'lmaydi. Ammo qiyinchilik, og'irchilikdan, xatarlardan qo'rqavermaslik kerak. Inson aql, tafakkur chirog'i har qanday zulmatni yoritishga qodir, yo'lingizdagi ko'ringan-ko'rinmagan to'siqlarni, g'ovlarni surib tashlashda sobit. Insonni qo'yib turaylik, tabiatdagi har bir jonzot ham tiriklik uchun kurashib yashaydi.

Kaklik — sodda qush. Lekin uning sodda bo'lib qolishga haqqi yo'q.

Irg'ayli darasining qir-adirlarida mol boqib yurgan kezlarim bunga o'zim guvoh bo'lganman.

May oyining o'rtalarida ona kaklik tuxum bosib yotganiga duch keldim. Uning uyasi bir tup shuvoq ostida edi. Bolalik ekan-da, uni tutmoqchi bo'ldim. Unga qarab yo'naldim. Ona kaklik noxushlikni tez payqadi. Birdan uyasidan otilib chiqdi va pastga — qiyalik bo'ylab dumalay ketdi. Ha, u aynan dumalab borardi. Orqasidan quva boshladim, yetay deganimda dumalashni tezlatdi. Quvaverdim. Yana yetay-yetay dedim. U yana tezladi. Quvib-quvib, daraning ichiga tushib qoldim. Va shunda ona kaklik dumalashdan lahzada turdi-da, uch-to'rt qadamcha yugurgiladi-yu, uchib ketdi.

Ko'rdingizmi, sodda qush deganimiz, ona kaklik menday bir aqlli cho'pon bolani qanday chalg'itib, tuxumlarini, bolajak jo'ja-bolalarini asrab qoldi. U ayyormidi, yo'q, degim keladi bugun, ona kaklik aqlli, oqila edi.

Men o'shanda, tag'in ortimga qaytib, uning tuxumlarini olib ketishim mumkin edi. Ammo, birinchidan, uyadan ko'p uzoqlab ketgan edim. Ikkinchidan, tuxumlarni olib nima ham qilardim. Mol boqib yursam, mol boqish oson emas. Qolaversa, birorta kurk tovuq tayyor emaski, tuxumlarni bostirsam, jo'ja ochtirsam. Uchinchidan, otamning o'giti yodimda edi: "Qush uyasini buzma, tuxumlarini sindirma, polaponlariga ozor yetkazma, hatto ilon bolasini ham o'ldirma!"

Men podalar o'tlab yurgan sayhonlik sari ketdim.`,
    tasks: [
      {
        id: 1,
        type: "ordering",
        title: "1-topshiriq: Voqealar ketma-ketligi",
        instruction: "Hikoya voqealarini to'g'ri tartibda joylashtiring",
        correct_order: [
          "Bola mol boqib yurib ona kaklikka duch keldi",
          "Ona kaklik bola kelayotganini payqadi",
          "Ona kaklik uyasidan otilib chiqdi va dumala boshladi",
          "Bola ona kaklikni quvib daraga tushib qoldi",
          "Ona kaklik dumalashdan to'xtab uchib ketdi",
          "Bola ona kaklikning aqlligini tushunib yetdi",
          "Bola tuxumlarni olmay, sayhonlikka qaytdi",
        ],
      },
      {
        id: 2,
        type: "drag_and_drop_qa",
        title: "2-topshiriq: Savolga javob toping",
        instruction: "Har bir savolga mos javob kartochkasini torting",
        pairs: [
          { question: "Hikoya qaysi oyda sodir bo'ladi?", answer: "May oyi" },
          {
            question: "Kaklik uyasi nima ostida edi?",
            answer: "Shuvoq ostida",
          },
          {
            question: "Ona kaklik nima qilib boshqacha yo'l oldi?",
            answer: "Dumalab ketdi",
          },
          { question: "Bola qayerga tushib qoldi?", answer: "Daraga" },
          { question: "Ona kaklik oxirida nima qildi?", answer: "Uchib ketdi" },
          {
            question: "Bola tuxumlarni olmadi, chunki?",
            answer: "Uyadan uzoqlab ketgandi",
          },
          {
            question: "Otamning o'giti nima edi?",
            answer: "Qush uyasini buzma",
          },
          {
            question: "Hikoya qayerda sodir bo'ladi?",
            answer: "Irg'ayli darasi",
          },
        ],
      },
      {
        id: 3,
        type: "true_false",
        title: "3-topshiriq: To'g'ri yoki Noto'g'ri",
        instruction: "Quyidagi gaplar to'g'rimi yoki noto'g'rimi?",
        questions: [
          {
            q: "Ona kaklik tuxumlarini daryo bo'yida bosib yotardi.",
            answer: false,
          },
          { q: "Bola ona kaklikni tutmoqchi bo'ldi.", answer: true },
          { q: "Ona kaklik dumalab borib bolani chalg'itdi.", answer: true },
          { q: "Bola daraga tushgach ona kaklikni tutdi.", answer: false },
          { q: "Otam qush uyasini buzmaslikni o'rgatgan edi.", answer: true },
          { q: "Bola tuxumlarni olib ketdi.", answer: false },
          { q: "Hikoya may oyida sodir bo'ladi.", answer: true },
          { q: "Muallif ona kaklikni ayyorlik qildi deydi.", answer: false },
        ],
      },
      {
        id: 4,
        type: "oral_questions",
        title: "4-topshiriq: Og'zaki savollar",
        questions: [
          "Ona kaklik tuxumlarini himoya qilish uchun qanday yo'l tutdi?",
          "Muallif ona kaklikni 'ayyormidi?' deb so'radi. Siz qanday javob berardingiz?",
          "Otamning o'gitidan qanday xulosa chiqarish mumkin?",
          "Hikoyada tabiatga muhabbat qanday ifodalangan?",
          "Sizningcha, tirik jonlarni asrash nima uchun muhim?",
          "Hayotda onaning farzandini himoya qilishiga doir boshqa misollarni ayting.",
        ],
      },
      {
        id: 5,
        type: "written_questions",
        title: "5-topshiriq: Yozma topshiriq",
        instruction: "Guruhingiz uchun zarf tanlang",
        questions: [
          "Ona kaklikning xatti-harakatini o'z so'zlaringiz bilan tasvirlab bering. 5-6 gap.",
          "Tabiatni asrash nima uchun muhim? 4-5 gap yozing.",
          "Hikoyaning asosiy g'oyasi nima deb o'ylaysiz? 5 gap bilan yozing.",
        ],
      },
    ],
  },
];
