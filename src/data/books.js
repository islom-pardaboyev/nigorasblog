export const books = [
  {
    id: 1,
    novel_name: "Aring qasosi (I qism)",
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
];
