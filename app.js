const STORAGE_KEY = "kanjiTrailStateV1";
const DAILY_BONUS = 60;
const EXTRA_GRADE_BONUS = 20;
const TASKS_PER_GRADE = 15;
const WRITING_REPETITIONS = 10;

const strokePatterns = {
  mountain: [
    [[50, 12], [50, 82], [72, 82]],
    [[28, 30], [28, 82]],
    [[72, 22], [72, 82]],
  ],
  river: [
    [[20, 22], [20, 84]],
    [[50, 12], [50, 84]],
    [[80, 24], [80, 84]],
  ],
  sun: [
    [[28, 12], [28, 86]],
    [[28, 14], [76, 14]],
    [[76, 14], [76, 86], [28, 86]],
    [[34, 50], [70, 50]],
  ],
  moon: [
    [[28, 10], [28, 88]],
    [[28, 12], [76, 12]],
    [[76, 12], [76, 88]],
    [[36, 48], [70, 48]],
  ],
  person: [
    [[46, 22], [28, 84]],
    [[48, 22], [76, 84]],
  ],
  tree: [
    [[50, 10], [50, 88]],
    [[26, 32], [74, 32]],
    [[50, 48], [28, 84]],
    [[50, 48], [74, 84]],
  ],
  rain: [
    [[18, 18], [82, 18]],
    [[26, 18], [24, 80]],
    [[76, 18], [76, 80], [24, 80]],
    [[36, 42], [36, 56]],
    [[52, 42], [52, 56]],
    [[68, 42], [68, 56]],
  ],
  roof: [
    [[18, 26], [50, 14], [82, 26]],
    [[30, 32], [30, 84]],
    [[70, 32], [70, 84]],
    [[30, 84], [70, 84]],
  ],
  shop: [
    [[16, 20], [48, 10], [84, 20]],
    [[34, 24], [34, 84]],
    [[22, 48], [78, 48]],
    [[68, 48], [68, 84]],
    [[34, 84], [68, 84]],
  ],
  friend: [
    [[20, 24], [54, 24]],
    [[20, 24], [20, 84]],
    [[20, 56], [54, 56]],
    [[62, 18], [78, 84]],
    [[82, 20], [54, 84]],
  ],
  learn: [
    [[24, 22], [50, 10], [76, 22]],
    [[34, 28], [34, 48]],
    [[66, 28], [66, 48]],
    [[22, 56], [78, 56]],
    [[50, 56], [36, 84]],
    [[50, 56], [68, 84]],
  ],
  move: [
    [[20, 20], [20, 82]],
    [[20, 50], [46, 50]],
    [[58, 18], [82, 18]],
    [[58, 18], [58, 82]],
    [[58, 82], [82, 82]],
  ],
  station: [
    [[22, 18], [22, 84]],
    [[22, 18], [74, 18]],
    [[74, 18], [74, 84]],
    [[22, 50], [74, 50]],
    [[22, 84], [74, 84]],
  ],
  thread: [
    [[24, 20], [42, 40], [24, 60]],
    [[54, 18], [54, 84]],
    [[54, 28], [82, 28]],
    [[54, 52], [82, 52]],
    [[54, 84], [82, 84]],
  ],
  clear: [
    [[18, 18], [54, 18]],
    [[18, 18], [18, 48]],
    [[18, 48], [54, 48]],
    [[62, 18], [82, 18]],
    [[72, 18], [72, 84]],
    [[62, 84], [82, 84]],
  ],
  road: [
    [[22, 18], [22, 84]],
    [[22, 48], [44, 48]],
    [[56, 20], [82, 20]],
    [[56, 52], [80, 52]],
    [[56, 84], [82, 84]],
  ],
  bird: [
    [[24, 20], [74, 20]],
    [[24, 20], [24, 82]],
    [[24, 50], [68, 50]],
    [[68, 20], [68, 82]],
    [[38, 84], [72, 84]],
  ],
  metal: [
    [[50, 12], [34, 34]],
    [[50, 12], [66, 34]],
    [[22, 42], [78, 42]],
    [[50, 42], [50, 88]],
    [[30, 62], [70, 62]],
  ],
  dream: [
    [[18, 18], [82, 18]],
    [[28, 18], [28, 54]],
    [[72, 18], [72, 54]],
    [[28, 54], [72, 54]],
    [[40, 60], [28, 86]],
    [[40, 60], [72, 86]],
  ],
  port: [
    [[20, 20], [20, 84]],
    [[20, 52], [44, 52]],
    [[56, 18], [78, 18]],
    [[56, 18], [56, 84]],
    [[56, 84], [78, 84]],
  ],
  tech: [
    [[22, 20], [22, 84]],
    [[22, 48], [46, 48]],
    [[56, 20], [56, 84]],
    [[56, 32], [82, 32]],
    [[56, 84], [82, 84]],
  ],
  tune: [
    [[22, 20], [22, 84]],
    [[22, 20], [48, 20]],
    [[22, 52], [48, 52]],
    [[58, 18], [80, 18]],
    [[58, 52], [80, 52]],
    [[58, 84], [80, 84]],
  ],
  truth: [
    [[20, 18], [80, 18]],
    [[50, 18], [50, 52]],
    [[26, 52], [74, 52]],
    [[26, 52], [26, 84]],
    [[74, 52], [74, 84]],
    [[26, 84], [74, 84]],
  ],
  watch: [
    [[20, 18], [20, 84]],
    [[20, 18], [50, 18]],
    [[20, 52], [50, 52]],
    [[60, 18], [80, 18]],
    [[70, 18], [70, 84]],
    [[60, 84], [80, 84]],
  ],
  dance: [
    [[18, 18], [82, 18]],
    [[28, 18], [28, 50]],
    [[72, 18], [72, 50]],
    [[28, 50], [72, 50]],
    [[40, 58], [28, 84]],
    [[60, 58], [72, 84]],
  ],
  speak: [
    [[20, 18], [20, 84]],
    [[20, 18], [48, 18]],
    [[20, 48], [48, 48]],
    [[58, 20], [58, 84]],
    [[58, 20], [82, 20]],
    [[58, 84], [82, 84]],
  ],
  treasure: [
    [[18, 22], [50, 10], [82, 22]],
    [[28, 28], [28, 84]],
    [[72, 28], [72, 84]],
    [[28, 54], [72, 54]],
    [[28, 84], [72, 84]],
  ],
};

const gradeData = {
  1: {
    title: "1ねんせい コース",
    accent: "#ff8a4c",
    theme: "はじめての かんじ",
    mapTheme: "もりの きっぷ",
    missionTime: "15分",
    dailySet: [
      {
        kanji: "山",
        meaning: "やま",
        reading: "やま",
        readingOptions: ["やま", "かわ", "つき", "そら"],
        wordPrompt: "『山』を つかう ことばは どれ？",
        wordOptions: ["やまみち", "つきよ", "かわべ", "あめつぶ"],
        goodWord: "やまみち",
        pattern: "mountain",
        tip: "まんなかを しっかり たてて、左右の あしを ひろげよう。",
      },
      {
        kanji: "川",
        meaning: "かわ",
        reading: "かわ",
        readingOptions: ["かわ", "もり", "ひと", "あめ"],
        wordPrompt: "『川』を つかう ことばは どれ？",
        wordOptions: ["かわあそび", "やまみち", "つきよ", "そらいろ"],
        goodWord: "かわあそび",
        pattern: "river",
        tip: "3本の せんの ながさを そろえると きれい。",
      },
      {
        kanji: "日",
        meaning: "ひ",
        reading: "ひ",
        readingOptions: ["ひ", "つき", "やま", "いえ"],
        wordPrompt: "『日』を つかう ことばは どれ？",
        wordOptions: ["にようび", "かわあそび", "もりのみち", "やまのぼり"],
        goodWord: "にようび",
        pattern: "sun",
        tip: "しかくを とじてから、まんなかの よこせんを ひこう。",
      },
      {
        kanji: "月",
        meaning: "つき",
        reading: "つき",
        readingOptions: ["つき", "ひ", "かわ", "き"],
        wordPrompt: "『月』を つかう ことばは どれ？",
        wordOptions: ["おつきみ", "ひなた", "やまみち", "かわぎし"],
        goodWord: "おつきみ",
        pattern: "moon",
        tip: "左の たてせんを まっすぐ。中の せんは すこし みじかめ。",
      },
      {
        kanji: "人",
        meaning: "ひと",
        reading: "ひと",
        readingOptions: ["ひと", "やま", "かわ", "みず"],
        wordPrompt: "『人』を つかう ことばは どれ？",
        wordOptions: ["ひとり", "つきよ", "やまみち", "あめのひ"],
        goodWord: "ひとり",
        pattern: "person",
        tip: "左右の はらいを バランスよく ひろげよう。",
      },
    ],
  },
  2: {
    title: "2ねんせい コース",
    accent: "#3cb7d4",
    theme: "ことばが ひろがる",
    mapTheme: "そらの ステージ",
    missionTime: "16分",
    dailySet: [
      {
        kanji: "林",
        meaning: "はやし",
        reading: "はやし",
        readingOptions: ["はやし", "そら", "みせ", "おと"],
        wordPrompt: "『林』を つかう ことばは どれ？",
        wordOptions: ["はやしみち", "おとあそび", "そらいろ", "みせさき"],
        goodWord: "はやしみち",
        pattern: "tree",
        tip: "木へんの 形を そろえると、二本の 木が きれいに ならぶよ。",
      },
      {
        kanji: "雨",
        meaning: "あめ",
        reading: "あめ",
        readingOptions: ["あめ", "くも", "おと", "そら"],
        wordPrompt: "『雨』を つかう ことばは どれ？",
        wordOptions: ["あまぐも", "ほしぞら", "おとあて", "やまみち"],
        goodWord: "あまぐも",
        pattern: "rain",
        tip: "屋根を 先に ととのえて、中の てんを そろえて うとう。",
      },
      {
        kanji: "空",
        meaning: "そら",
        reading: "そら",
        readingOptions: ["そら", "みせ", "おと", "みち"],
        wordPrompt: "『空』を つかう ことばは どれ？",
        wordOptions: ["そらいろ", "おとあそび", "みせばん", "かわべ"],
        goodWord: "そらいろ",
        pattern: "roof",
        tip: "上の やねは ひろく、したは しっかり ささえよう。",
      },
      {
        kanji: "音",
        meaning: "おと",
        reading: "おと",
        readingOptions: ["おと", "あめ", "はやし", "そら"],
        wordPrompt: "『音』を つかう ことばは どれ？",
        wordOptions: ["おとあそび", "そらいろ", "やまみち", "かわべ"],
        goodWord: "おとあそび",
        pattern: "station",
        tip: "上の ふたと 下の はこを わけて かくと まとまるよ。",
      },
      {
        kanji: "店",
        meaning: "みせ",
        reading: "みせ",
        readingOptions: ["みせ", "そら", "おと", "あめ"],
        wordPrompt: "『店』を つかう ことばは どれ？",
        wordOptions: ["みせさき", "おつきみ", "かわべ", "おとあそび"],
        goodWord: "みせさき",
        pattern: "shop",
        tip: "ひろいやねの 下に、お店の 形を いれる イメージで。",
      },
    ],
  },
  3: {
    title: "3ねんせい コース",
    accent: "#56c79b",
    theme: "読めることばが ふえる",
    mapTheme: "まちの ラリー",
    missionTime: "17分",
    dailySet: [
      {
        kanji: "友",
        meaning: "ともだち",
        reading: "とも",
        readingOptions: ["とも", "まなぶ", "あそぶ", "まち"],
        wordPrompt: "『友』を つかう ことばは どれ？",
        wordOptions: ["友だち", "学しゅう", "町あるき", "でんしゃ"],
        goodWord: "友だち",
        pattern: "friend",
        tip: "左の はこを 先に まとめて、右の はらいを のびやかに。",
      },
      {
        kanji: "学",
        meaning: "まなぶ",
        reading: "まなぶ",
        readingOptions: ["まなぶ", "でんき", "あそぶ", "まち"],
        wordPrompt: "『学』を つかう ことばは どれ？",
        wordOptions: ["学しゅう", "友だち", "町あるき", "雨の日"],
        goodWord: "学しゅう",
        pattern: "learn",
        tip: "上の 形と 下の はらいを 2つの パートに わけて かこう。",
      },
      {
        kanji: "遊",
        meaning: "あそぶ",
        reading: "あそぶ",
        readingOptions: ["あそぶ", "とも", "まち", "みち"],
        wordPrompt: "『遊』を つかう ことばは どれ？",
        wordOptions: ["水あそび", "町あるき", "友だち", "学しゅう"],
        goodWord: "水あそび",
        pattern: "move",
        tip: "左と 右の パーツを すこし はなして、道が のびる かんじで。",
      },
      {
        kanji: "町",
        meaning: "まち",
        reading: "まち",
        readingOptions: ["まち", "とも", "あそぶ", "でんき"],
        wordPrompt: "『町』を つかう ことばは どれ？",
        wordOptions: ["町あるき", "友だち", "水あそび", "空いろ"],
        goodWord: "町あるき",
        pattern: "station",
        tip: "左右の 高さを そろえると、まちの 看板みたいに 見えるよ。",
      },
      {
        kanji: "電",
        meaning: "でん",
        reading: "でん",
        readingOptions: ["でん", "とも", "まなぶ", "あそぶ"],
        wordPrompt: "『電』を つかう ことばは どれ？",
        wordOptions: ["でんしゃ", "友だち", "学しゅう", "山みち"],
        goodWord: "でんしゃ",
        pattern: "rain",
        tip: "上の 雨かんむりを まず 安定させて、下の 形を おさめよう。",
      },
    ],
  },
  4: {
    title: "4ねんせい コース",
    accent: "#ef5d77",
    theme: "文しょうの 漢字へ",
    mapTheme: "ひかりの トンネル",
    missionTime: "18分",
    dailySet: [
      {
        kanji: "秋",
        meaning: "あき",
        reading: "あき",
        readingOptions: ["あき", "みち", "はれる", "せん"],
        wordPrompt: "『秋』を つかう ことばは どれ？",
        wordOptions: ["秋の空", "道しるべ", "晴れの日", "せんろ"],
        goodWord: "秋の空",
        pattern: "tree",
        tip: "左の 木と 右の 火を つなげる ように 書こう。",
      },
      {
        kanji: "線",
        meaning: "せん",
        reading: "せん",
        readingOptions: ["せん", "あき", "みち", "とり"],
        wordPrompt: "『線』を つかう ことばは どれ？",
        wordOptions: ["せんろ", "秋の空", "道しるべ", "鳥かご"],
        goodWord: "せんろ",
        pattern: "thread",
        tip: "糸へんを 小さめに、右がわを しっかり ひろげよう。",
      },
      {
        kanji: "晴",
        meaning: "はれる",
        reading: "はれる",
        readingOptions: ["はれる", "せん", "みち", "とり"],
        wordPrompt: "『晴』を つかう ことばは どれ？",
        wordOptions: ["晴れの日", "せんろ", "道しるべ", "鳥かご"],
        goodWord: "晴れの日",
        pattern: "clear",
        tip: "左の 日へんを まとめて、右を のびのび 書こう。",
      },
      {
        kanji: "道",
        meaning: "みち",
        reading: "みち",
        readingOptions: ["みち", "はれる", "せん", "とり"],
        wordPrompt: "『道』を つかう ことばは どれ？",
        wordOptions: ["道しるべ", "秋の空", "せんろ", "鳥かご"],
        goodWord: "道しるべ",
        pattern: "road",
        tip: "しんにょうを 最後に のびやかに ひくと かっこいい。",
      },
      {
        kanji: "鳥",
        meaning: "とり",
        reading: "とり",
        readingOptions: ["とり", "みち", "せん", "はれる"],
        wordPrompt: "『鳥』を つかう ことばは どれ？",
        wordOptions: ["鳥かご", "道しるべ", "晴れの日", "せんろ"],
        goodWord: "鳥かご",
        pattern: "bird",
        tip: "上から 下へ、顔と からだを わけて 書いてみよう。",
      },
    ],
  },
  5: {
    title: "5ねんせい コース",
    accent: "#f3b632",
    theme: "意味まで つながる",
    mapTheme: "きんいろ レール",
    missionTime: "19分",
    dailySet: [
      {
        kanji: "鉄",
        meaning: "てつ",
        reading: "てつ",
        readingOptions: ["てつ", "みなと", "わざ", "しらべる"],
        wordPrompt: "『鉄』を つかう ことばは どれ？",
        wordOptions: ["鉄どう", "港まつり", "わざくらべ", "しらべ学しゅう"],
        goodWord: "鉄どう",
        pattern: "metal",
        tip: "金へんを 小さく、右を やや 大きめに 書くと 安定するよ。",
      },
      {
        kanji: "夢",
        meaning: "ゆめ",
        reading: "ゆめ",
        readingOptions: ["ゆめ", "てつ", "みなと", "わざ"],
        wordPrompt: "『夢』を つかう ことばは どれ？",
        wordOptions: ["ゆめノート", "鉄どう", "港まつり", "わざくらべ"],
        goodWord: "ゆめノート",
        pattern: "dream",
        tip: "上の はこを そろえて、下の 足を やわらかく ひろげよう。",
      },
      {
        kanji: "港",
        meaning: "みなと",
        reading: "みなと",
        readingOptions: ["みなと", "ゆめ", "わざ", "てつ"],
        wordPrompt: "『港』を つかう ことばは どれ？",
        wordOptions: ["港まつり", "ゆめノート", "鉄どう", "しらべ学しゅう"],
        goodWord: "港まつり",
        pattern: "port",
        tip: "さんずいを すっきり まとめて、右を しっかり 支えよう。",
      },
      {
        kanji: "技",
        meaning: "わざ",
        reading: "わざ",
        readingOptions: ["わざ", "てつ", "ゆめ", "みなと"],
        wordPrompt: "『技』を つかう ことばは どれ？",
        wordOptions: ["わざくらべ", "鉄どう", "港まつり", "ゆめノート"],
        goodWord: "わざくらべ",
        pattern: "tech",
        tip: "手へんを コンパクトに。右の しめくくりを 広げよう。",
      },
      {
        kanji: "調",
        meaning: "しらべる",
        reading: "しらべる",
        readingOptions: ["しらべる", "わざ", "てつ", "ゆめ"],
        wordPrompt: "『調』を つかう ことばは どれ？",
        wordOptions: ["しらべ学しゅう", "わざくらべ", "鉄どう", "港まつり"],
        goodWord: "しらべ学しゅう",
        pattern: "tune",
        tip: "ごんべんは 小さめ、右の 形を よこに 広げる イメージで。",
      },
    ],
  },
  6: {
    title: "6ねんせい コース",
    accent: "#7f76ff",
    theme: "表現する 漢字へ",
    mapTheme: "ほしの しゅうてん",
    missionTime: "20分",
    dailySet: [
      {
        kanji: "誠",
        meaning: "まこと",
        reading: "まこと",
        readingOptions: ["まこと", "みる", "まう", "たから"],
        wordPrompt: "『誠』を つかう ことばは どれ？",
        wordOptions: ["誠じつ", "観さつ", "舞台", "宝もの"],
        goodWord: "誠じつ",
        pattern: "truth",
        tip: "ごんべんを 先に まとめて、右を まっすぐ 立てよう。",
      },
      {
        kanji: "観",
        meaning: "みる",
        reading: "みる",
        readingOptions: ["みる", "まこと", "まう", "たから"],
        wordPrompt: "『観』を つかう ことばは どれ？",
        wordOptions: ["観さつ", "誠じつ", "舞台", "宝もの"],
        goodWord: "観さつ",
        pattern: "watch",
        tip: "左と 右を きっちり 分けて、下の しめを そろえよう。",
      },
      {
        kanji: "舞",
        meaning: "まう",
        reading: "まう",
        readingOptions: ["まう", "みる", "まこと", "たから"],
        wordPrompt: "『舞』を つかう ことばは どれ？",
        wordOptions: ["舞台", "観さつ", "誠じつ", "宝もの"],
        goodWord: "舞台",
        pattern: "dance",
        tip: "上を 安定させてから、下の はらいを 左右に ひろげよう。",
      },
      {
        kanji: "論",
        meaning: "ろん",
        reading: "ろん",
        readingOptions: ["ろん", "まう", "みる", "たから"],
        wordPrompt: "『論』を つかう ことばは どれ？",
        wordOptions: ["ろんてん", "舞台", "観さつ", "宝もの"],
        goodWord: "ろんてん",
        pattern: "speak",
        tip: "ごんべんを そろえて、右がわを 下まで まっすぐ まとめよう。",
      },
      {
        kanji: "宝",
        meaning: "たから",
        reading: "たから",
        readingOptions: ["たから", "ろん", "まう", "みる"],
        wordPrompt: "『宝』を つかう ことばは どれ？",
        wordOptions: ["宝もの", "ろんてん", "舞台", "観さつ"],
        goodWord: "宝もの",
        pattern: "treasure",
        tip: "屋根を ひろく、したの 形を 中央に ぎゅっと 集めよう。",
      },
    ],
  },
};

const rewardPool = [
  { name: "七転び八起き", rarity: "normal", meaning: "何度失敗しても立ち上がること。", example: "まちがえても、またチャレンジ。" },
  { name: "ちりも積もれば山となる", rarity: "normal", meaning: "小さな努力も続ければ大きな力になる。", example: "毎日5文字で、大きな自信に。" },
  { name: "石の上にも三年", rarity: "normal", meaning: "がまん強く続けると実る。", example: "れんしゅうを続ける子は強い。" },
  { name: "好きこそ物の上手なれ", rarity: "rare", meaning: "好きなことは上達しやすい。", example: "たのしく学ぶほど、漢字がのびる。" },
  { name: "継続は力なり", rarity: "rare", meaning: "続けることが力になる。", example: "きょうの1回が明日の力。" },
  { name: "笑う門には福来る", rarity: "rare", meaning: "明るく過ごすと良いことが来る。", example: "ニコニコ学習で、ごほうびゲット。" },
  { name: "案ずるより産むが易し", rarity: "super", meaning: "やってみると意外とうまくいく。", example: "まず書いてみよう、から始めよう。" },
  { name: "雨降って地固まる", rarity: "super", meaning: "トラブルの後でかえって良くなる。", example: "まちがいの後こそ、しっかり覚える。" },
];

const levelTitles = [
  { min: 0, title: "はじめの一歩" },
  { min: 90, title: "ことばの芽" },
  { min: 180, title: "かんじ探検家" },
  { min: 320, title: "よみかきジャンパー" },
  { min: 480, title: "ことば職人" },
  { min: 700, title: "かんじマスター" },
];

const journeyLabels = [
  { icon: "1", name: "スタート", caption: "はじめの きっぷ" },
  { icon: "2", name: "ひらがな駅", caption: "ことばの じゅんび" },
  { icon: "3", name: "ことば森", caption: "れんしゅうを ためよう" },
  { icon: "4", name: "クイズ橋", caption: "スピード問題" },
  { icon: "5", name: "えんぴつ広場", caption: "なぞり書き" },
  { icon: "6", name: "ごほうび谷", caption: "ことわざを もらおう" },
  { icon: "7", name: "きらり湖", caption: "れんぞくクリア" },
  { icon: "8", name: "ことば町", caption: "語いを ひろげよう" },
  { icon: "9", name: "チャレンジ坂", caption: "レベルアップ前" },
  { icon: "10", name: "先生の門", caption: "むずかしめ ミッション" },
  { icon: "11", name: "ひかり駅", caption: "きょうの ごほうび" },
  { icon: "12", name: "おうかん橋", caption: "つぎの 称号へ" },
  { icon: "13", name: "にじ広場", caption: "ことわざコレクション" },
  { icon: "14", name: "ゴール", caption: "あしたも つづけよう" },
];

const uiState = {
  feedback: null,
  gradeMenuOpen: false,
  writing: {
    strokes: [],
    current: [],
    pointerDown: false,
  },
};

function createEmptySession() {
  return {
    stepIndex: 0,
    completed: 0,
    finished: false,
    rewardClaimed: false,
    writingPractice: {},
  };
}

function makeSessions() {
  const sessions = {};
  Object.keys(gradeData).forEach(function buildSession(grade) {
    sessions[grade] = createEmptySession();
  });
  return sessions;
}

function buildDefaultState() {
  return {
    today: getTodayKey(),
    selectedGrade: 1,
    points: 45,
    streak: 1,
    journeyPosition: 1,
    lastCompletedDate: null,
    lastDraw: null,
    cards: [],
    sessions: makeSessions(),
  };
}

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const day = `${now.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function loadState() {
  let raw = null;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    return buildDefaultState();
  }

  if (!raw) {
    return buildDefaultState();
  }

  try {
    const parsed = JSON.parse(raw);
    const base = buildDefaultState();
    return {
      ...base,
      ...parsed,
      sessions: Object.keys(base.sessions).reduce(function mergeSessions(result, grade) {
        result[grade] = {
          ...createEmptySession(),
          ...(base.sessions[grade] || {}),
          ...(((parsed.sessions || {})[grade]) || {}),
        };
        return result;
      }, {}),
    };
  } catch (error) {
    return buildDefaultState();
  }
}

let state = loadState();
resetDailyStateIfNeeded();

function resetDailyStateIfNeeded() {
  const today = getTodayKey();
  if (state.today === today) {
    return;
  }

  state = {
    ...state,
    today,
    sessions: makeSessions(),
  };
  uiState.feedback = {
    type: "info",
    message: "あたらしい日です。きょうの ミッションを はじめよう。",
  };
  persistState();
}

function persistState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    // Opening from file:// can disable storage in some browsers.
  }
}

function getCurrentGradeData() {
  return gradeData[state.selectedGrade];
}

function getCurrentSession() {
  return state.sessions[state.selectedGrade];
}

function getStepsForGrade(grade) {
  const items = gradeData[grade].dailySet;
  const steps = [];
  for (let index = 0; index < items.length; index += 1) {
    steps.push({ type: "reading", item: items[index], id: `${index}-r` });
    steps.push({ type: "word", item: items[(index + 2) % items.length], id: `${index}-w` });
    steps.push({ type: "writing", item: items[index], id: `${index}-t` });
  }
  return steps;
}

function getCurrentStep() {
  const session = getCurrentSession();
  const steps = getStepsForGrade(state.selectedGrade);
  return steps[Math.min(session.stepIndex, steps.length - 1)];
}

function getLevelInfo(points) {
  const current = [...levelTitles].reverse().find((entry) => points >= entry.min) || levelTitles[0];
  const next = levelTitles.find((entry) => entry.min > points) || null;
  const level = levelTitles.indexOf(current) + 1;
  const progress = next
    ? ((points - current.min) / (next.min - current.min)) * 100
    : 100;
  return {
    level,
    title: current.title,
    nextTitle: next ? next.title : "MAX",
    progress: Math.max(8, Math.min(progress, 100)),
  };
}

function formatStepLabel(type) {
  if (type === "reading") return "よみかた クイズ";
  if (type === "word") return "ことば クイズ";
  return "なぞり書き AI判定β";
}

function getExpectedStrokePattern(item) {
  return strokePatterns[item.pattern] || strokePatterns.person;
}

function chooseReward() {
  const roll = Math.random();
  if (roll > 0.95) return rewardPool.filter((card) => card.rarity === "super")[Math.floor(Math.random() * 2)];
  if (roll > 0.72) {
    const rares = rewardPool.filter((card) => card.rarity === "rare");
    return rares[Math.floor(Math.random() * rares.length)];
  }
  const normals = rewardPool.filter((card) => card.rarity === "normal");
  return normals[Math.floor(Math.random() * normals.length)];
}

function giveDailyKotowazaCard() {
  const reward = chooseReward();
  state.cards = [reward, ...state.cards].slice(0, 12);
  state.lastDraw = reward;
  return reward;
}

function awardPoints(amount, message) {
  state.points += amount;
  uiState.feedback = {
    type: "success",
    message: `${message} +${amount}ポイント`,
  };
  persistState();
}

function handleCorrectAnswer(message, amount = 12) {
  const session = getCurrentSession();
  session.completed += 1;
  session.stepIndex += 1;
  awardPoints(amount, message);
  checkSessionCompletion();
}

function checkSessionCompletion() {
  const session = getCurrentSession();
  if (session.finished) {
    return;
  }

  if (session.stepIndex < TASKS_PER_GRADE) {
    persistState();
    return;
  }

  session.finished = true;
  let bonus = EXTRA_GRADE_BONUS;
  let rewardCard = null;
  if (state.lastCompletedDate !== state.today) {
    bonus = DAILY_BONUS;
    updateStreak();
    state.journeyPosition = Math.min(journeyLabels.length, state.journeyPosition + 1);
    rewardCard = giveDailyKotowazaCard();
    state.lastCompletedDate = state.today;
  }
  if (!session.rewardClaimed) {
    session.rewardClaimed = true;
    state.points += bonus;
  }
  uiState.feedback = {
    type: "success",
    message: rewardCard
      ? `きょうの コース クリア。${bonus}ポイントと「${rewardCard.name}」カードを ゲット！`
      : `きょうの コース クリア。ごほうび ${bonus}ポイント！`,
  };
  persistState();
}

function updateStreak() {
  if (!state.lastCompletedDate) {
    state.streak = 1;
    return;
  }
  const previous = new Date(`${state.lastCompletedDate}T00:00:00`);
  const current = new Date(`${state.today}T00:00:00`);
  const diffDays = Math.round((current - previous) / 86400000);
  state.streak = diffDays === 1 ? state.streak + 1 : 1;
}

function setGrade(grade) {
  state.selectedGrade = grade;
  uiState.gradeMenuOpen = false;
  uiState.feedback = {
    type: "info",
    message: `${gradeData[grade].title} に きりかえたよ。`,
  };
  resetWritingState();
  persistState();
  render();
}

function handleAnswer(option) {
  const step = getCurrentStep();
  if (!step) return;

  const isCorrect =
    step.type === "reading"
      ? option === step.item.reading
      : option === step.item.goodWord;

  if (isCorrect) {
    handleCorrectAnswer("せいかい");
  } else {
    uiState.feedback = {
      type: "warn",
      message: `おしい。正解は「${step.type === "reading" ? step.item.reading : step.item.goodWord}」だよ。`,
    };
    persistState();
  }
  render();
}

function resetWritingState() {
  uiState.writing = {
    strokes: [],
    current: [],
    pointerDown: false,
  };
}

function getWritingProgress(stepId) {
  const session = getCurrentSession();
  return session.writingPractice[stepId] || 0;
}

function handleWritingCheck() {
  const step = getCurrentStep();
  if (!step || step.type !== "writing") return;

  const score = scoreStrokes(uiState.writing.strokes, getExpectedStrokePattern(step.item));
  const session = getCurrentSession();
  const currentRepeat = getWritingProgress(step.id);
  if (score >= 68) {
    resetWritingState();
    const nextRepeat = currentRepeat + 1;
    session.writingPractice[step.id] = nextRepeat;
    if (nextRepeat >= WRITING_REPETITIONS) {
      delete session.writingPractice[step.id];
      handleCorrectAnswer(`10回れんしゅう クリア (${score}点)`, 18);
    } else {
      awardPoints(3, `なぞり ${nextRepeat}/${WRITING_REPETITIONS}`);
      uiState.feedback = {
        type: "success",
        message: `${step.item.kanji} を ${nextRepeat} / ${WRITING_REPETITIONS} 回 かけたよ。あと ${WRITING_REPETITIONS - nextRepeat} 回。`,
      };
      persistState();
    }
  } else {
    uiState.feedback = {
      type: "warn",
      message: `いまは ${score}点。画の 始まりと 終わりを もう少し そろえてみよう。`,
    };
  }
  persistState();
  render();
}

function scoreStrokes(actualStrokes, expectedStrokes) {
  if (!actualStrokes.length) {
    return 0;
  }

  const countPenalty = Math.min(24, Math.abs(actualStrokes.length - expectedStrokes.length) * 10);
  let total = 100 - countPenalty;
  const compareLength = Math.min(actualStrokes.length, expectedStrokes.length);

  for (let index = 0; index < compareLength; index += 1) {
    const actual = simplifyStroke(actualStrokes[index]);
    const expected = expectedStrokes[index];
    const start = pointDistance(actual[0], expected[0]);
    const end = pointDistance(actual[actual.length - 1], expected[expected.length - 1]);
    const direction = directionScore(actual, expected);
    const path = lengthScore(actual, expected);
    total -= Math.min(12, start * 0.18);
    total -= Math.min(12, end * 0.18);
    total += direction;
    total += path;
  }

  return Math.round(Math.max(0, Math.min(total, 100)));
}

function simplifyStroke(points) {
  if (points.length <= 2) return points;
  return [points[0], points[Math.floor(points.length / 2)], points[points.length - 1]];
}

function pointDistance(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
}

function directionScore(actual, expected) {
  const a = actual[actual.length - 1];
  const b = actual[0];
  const c = expected[expected.length - 1];
  const d = expected[0];
  const av = [a[0] - b[0], a[1] - b[1]];
  const ev = [c[0] - d[0], c[1] - d[1]];
  const lengthA = Math.hypot(av[0], av[1]) || 1;
  const lengthE = Math.hypot(ev[0], ev[1]) || 1;
  const dot = (av[0] * ev[0] + av[1] * ev[1]) / (lengthA * lengthE);
  return Math.max(-8, Math.round(dot * 10));
}

function lengthScore(actual, expected) {
  const actualLen = strokeLength(actual);
  const expectedLen = strokeLength(expected);
  const ratio = Math.min(actualLen, expectedLen) / Math.max(actualLen, expectedLen, 1);
  return Math.round(ratio * 6);
}

function strokeLength(points) {
  let total = 0;
  for (let index = 1; index < points.length; index += 1) {
    total += pointDistance(points[index - 1], points[index]);
  }
  return total;
}

function render() {
  renderGradeTabs();
  renderHero();
  renderLesson();
  renderSidePanel();
  renderTrack();
  updateTopStats();
}

function updateTopStats() {
  const levelInfo = getLevelInfo(state.points);
  document.getElementById("pointsValue").textContent = `${state.points} pt`;
  document.getElementById("streakValue").textContent = `${state.streak}日`;
  document.getElementById("titleValue").textContent = levelInfo.title;
}

function renderGradeTabs() {
  const switcher = document.getElementById("gradeSwitcher");
  const current = gradeData[state.selectedGrade];
  switcher.innerHTML = `
    <button class="grade-toggle ${uiState.gradeMenuOpen ? "open" : ""}" data-action="toggle-grade-menu" aria-expanded="${uiState.gradeMenuOpen ? "true" : "false"}">
      <span class="grade-toggle-copy">
        <strong>${state.selectedGrade}年</strong>
        <small>${current.theme}</small>
      </span>
      <span class="grade-toggle-arrow">${uiState.gradeMenuOpen ? "▲" : "▼"}</span>
    </button>
    <div class="grade-menu ${uiState.gradeMenuOpen ? "open" : ""}">
      ${Object.entries(gradeData)
        .map(
          ([grade, info]) => `
            <button class="grade-option ${Number(grade) === state.selectedGrade ? "active" : ""}" data-action="select-grade" data-grade="${grade}">
              <strong>${grade}年</strong>
              <small>${info.theme}</small>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderHero() {
  const info = getCurrentGradeData();
  const session = getCurrentSession();
  const levelInfo = getLevelInfo(state.points);
  const progress = Math.round((session.completed / TASKS_PER_GRADE) * 100);
  const nextStep = getCurrentStep();
  const todayChars = info.dailySet.map((item) => item.kanji).join(" ・ ");
  const nextLevelEntry = levelTitles[levelInfo.level] || null;
  const pointsToNext =
    levelInfo.nextTitle === "MAX"
      ? "MAX"
      : `${Math.max(0, ((nextLevelEntry && nextLevelEntry.min) || state.points) - state.points)} pt`;
  const rewardHint = session.finished
    ? "受け取りずみ"
    : `あと ${Math.max(TASKS_PER_GRADE - session.completed, 0)}問`;
  const currentMission = session.finished ? "コース クリア" : formatStepLabel(nextStep.type);
  document.getElementById("heroCard").innerHTML = `
    <div class="hero-grid">
      <div>
        <div class="mission-chip-row">
          <span class="mission-chip">今日の 5文字: ${todayChars}</span>
          <span class="mission-chip">${info.mapTheme}</span>
        </div>
        <h2 class="hero-title">${info.title}</h2>
        <p class="hero-subtitle">
          1日 ${info.missionTime} の ペースで、読み・ことば・書きじゅんを ミックス学習。
          いまの ミッションは <strong>${currentMission}</strong>。
        </p>
        <div class="progress-wrap">
          <div class="progress-meta">
            <span>きょうの しんちょく</span>
            <strong>${session.completed} / ${TASKS_PER_GRADE} ミッション</strong>
          </div>
          <div class="progress-bar"><div class="progress-fill" style="width: ${progress}%"></div></div>
        </div>
      </div>
      <div class="hero-side">
        <div class="micro-card">
          <span class="stat-label">つぎの レベルまで</span>
          <strong>${pointsToNext}</strong>
        </div>
        <div class="quick-row">
          <div class="mini-stat">
            <span class="stat-label">きょうの 目安</span>
            <strong>${info.missionTime}</strong>
          </div>
          <div class="mini-stat">
            <span class="stat-label">書きじゅん</span>
            <strong>5回</strong>
          </div>
          <div class="mini-stat">
            <span class="stat-label">ごほうび</span>
            <strong>${rewardHint}</strong>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderLesson() {
  const lessonCard = document.getElementById("lessonCard");
  const session = getCurrentSession();
  const step = getCurrentStep();
  const info = getCurrentGradeData();

  if (session.finished && session.stepIndex >= TASKS_PER_GRADE) {
    lessonCard.innerHTML = `
      <div class="lesson-header">
        <div>
          <p class="eyebrow">Mission Complete</p>
          <h2>${info.title} を クリア</h2>
        </div>
        <span class="lesson-step">Complete</span>
      </div>
      ${renderFeedbackBanner()}
      <div class="tip-box">
        <strong>すごい。</strong>
        <p>きょうの 5文字を ぜんぶ 学習したよ。毎日の 学習完了で ランダムな ことわざカードが 1枚 もらえるよ。学年を きりかえて サンプルを見ることも できるよ。</p>
      </div>
      <div class="footer-actions">
        <button class="ghost-btn" data-action="restart-grade">この学年を もう一度</button>
      </div>
    `;
    return;
  }

  const header = `
    <div class="lesson-header">
      <div>
        <p class="eyebrow">Lesson Flow</p>
        <h2>${formatStepLabel(step.type)}</h2>
      </div>
      <span class="lesson-step">${session.stepIndex + 1} / ${TASKS_PER_GRADE}</span>
    </div>
  `;

  const body =
    step.type === "writing"
      ? renderWritingStep(step)
      : renderQuestionStep(step);

  lessonCard.innerHTML = `${header}${renderFeedbackBanner()}${body}`;

  if (step.type === "writing") {
    setupWritingCanvas(step.item);
  }
}

function renderFeedbackBanner() {
  if (!uiState.feedback) return "";
  return `<div class="feedback-banner ${uiState.feedback.type}">${uiState.feedback.message}</div>`;
}

function renderQuestionStep(step) {
  const isReading = step.type === "reading";
  const options = isReading ? step.item.readingOptions : step.item.wordOptions;
  const labels = isReading
    ? ["よみかたを えらぼう", "ひらがなで こたえてね"]
    : [step.item.wordPrompt, "ことばの つながりを つかもう"];

  return `
    <div class="kanji-stage">
      <div class="kanji-poster">
        <small>${step.item.meaning}</small>
        <div class="kanji-glyph">${step.item.kanji}</div>
      </div>
      <div class="kanji-detail">
        <h2>${step.item.kanji} の ${isReading ? "よみ" : "ことば"}</h2>
        <p>
          ${isReading ? `この漢字の よみかたは どれかな。` : `${step.item.meaning} に 関係する ことばを 見つけよう。`}
        </p>
        <div class="tip-box">
          <strong>コツ</strong>
          <p>${step.item.tip}</p>
        </div>
        <div class="question-block">
          <h3>${labels[0]}</h3>
          <div class="answer-grid">
            ${options
              .map(
                (option, index) => `
                  <button class="answer-btn" data-action="answer" data-value="${option}">
                    <strong>${option}</strong>
                    <span>${index % 2 === 0 ? labels[1] : "タップして こたえる"}</span>
                  </button>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function getKanjiHex(char) {
  if (!char) return "";
  const cp = char.codePointAt(0);
  return cp ? cp.toString(16).toLowerCase().padStart(5, "0") : "";
}

function getStrokeResourceUrls(char, preferStatic) {
  const hex = getKanjiHex(char);
  if (!hex) return [];
  const gifUrl = `https://cdn.jsdelivr.net/gh/sepTN/kanji-png-gif@main/kanji_gif/${hex}.gif`;
  const pngUrl = `https://cdn.jsdelivr.net/gh/sepTN/kanji-png-gif@main/kanji_png/${hex}.png`;
  const commonsGifUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(char)}-order.gif`;
  return preferStatic ? [pngUrl, gifUrl, commonsGifUrl] : [gifUrl, pngUrl, commonsGifUrl];
}

function isMobilePreview() {
  return typeof window !== "undefined" && window.innerWidth <= 760;
}

function handleStrokeHintError(image) {
  const sources = (image.dataset.sources || "").split("|").filter(Boolean);
  const nextIndex = Number(image.dataset.index || "0") + 1;
  if (nextIndex < sources.length) {
    image.dataset.index = String(nextIndex);
    image.src = sources[nextIndex];
    return;
  }
  image.style.display = "none";
  if (image.nextElementSibling) {
    image.nextElementSibling.style.display = "block";
  }
}

function renderWritingStep(step) {
  const expected = getExpectedStrokePattern(step.item);
  const completedRepeats = getWritingProgress(step.id);
  const repeatProgress = Math.round((completedRepeats / WRITING_REPETITIONS) * 100);
  const compactHint = isMobilePreview();
  const strokeSources = getStrokeResourceUrls(step.item.kanji, compactHint);
  return `
    <div class="kanji-stage">
      <div class="kanji-poster">
        <small>${expected.length}画 目安</small>
        <div class="kanji-glyph">${step.item.kanji}</div>
      </div>
      <div class="kanji-detail">
        <h2>${step.item.kanji} を なぞってみよう</h2>
        <p>ガイドの 順ばんに あわせて、1画ずつ 指やマウスで なぞり書き。終わったら AI判定β を ためそう。</p>
        <div class="tip-box">
          <strong>書き方の ヒント</strong>
          <p>${step.item.tip}</p>
        </div>
      </div>
    </div>
    <div class="writing-shell">
      <div class="writing-meta">
        <span class="writing-badge">AI判定β: 画の 始点・終点・方向を みています</span>
        <span class="writing-badge" id="writingStrokeCount">筆画: ${uiState.writing.strokes.length} / ${expected.length}</span>
        <span class="writing-badge">${step.item.kanji} を ${completedRepeats} / ${WRITING_REPETITIONS} 回 れんしゅう</span>
      </div>
      <div class="writing-support-grid">
      <div class="practice-progress-card">
        <div class="practice-progress-head">
          <strong>10回れんしゅう の しんちょく</strong>
          <span>${completedRepeats} / ${WRITING_REPETITIONS}</span>
        </div>
        <div class="practice-progress-bar">
          <div class="practice-progress-fill" style="width: ${repeatProgress}%"></div>
        </div>
      </div>
      <div class="stroke-hint-card ${compactHint ? "compact" : ""}">
        <div class="stroke-hint-head">
          <strong>${compactHint ? "筆順参考" : "筆順の 参考図"}</strong>
          <span>${expected.length}画</span>
        </div>
        <div class="stroke-hint-panel">
          <div class="stroke-hint-char">${step.item.kanji}</div>
          <div class="stroke-hint-image-wrap">
            <img
              class="stroke-hint-image"
              src="${strokeSources[0] || ""}"
              alt="${step.item.kanji} の 筆順参考図"
              loading="lazy"
              referrerpolicy="no-referrer"
              data-index="0"
              data-sources="${strokeSources.join("|")}"
              onerror="handleStrokeHintError(this)"
            />
            <p class="stroke-hint-fallback">筆順画像を 読みこめませんでした。ネット接続があると 表示されます。</p>
          </div>
        </div>
      </div>
      </div>
      <div class="canvas-frame">
        <div class="trace-corner">手本を なぞろう</div>
        <div class="ghost-kanji">${step.item.kanji}</div>
        <canvas id="writingCanvas" width="420" height="420"></canvas>
      </div>
      <p class="trace-note">練習用の 大きな字は シンプルに なぞるだけ。筆順は 上の 静止参考図を 見ながら すすめよう。</p>
      <div class="writing-actions">
        <button class="cta-btn alt" data-action="check-writing">AI判定する</button>
        <button class="ghost-btn" data-action="clear-writing">もういちど</button>
      </div>
    </div>
  `;
}

function updateWritingStrokeCount(item) {
  const strokeCount = document.getElementById("writingStrokeCount");
  if (!strokeCount) return;
  strokeCount.textContent = `筆画: ${uiState.writing.strokes.length} / ${getExpectedStrokePattern(item).length}`;
}

function renderSidePanel() {
  const levelInfo = getLevelInfo(state.points);
  const levelPanel = document.getElementById("levelPanel");
  levelPanel.innerHTML = `
    <p class="eyebrow">Level</p>
    <h3>れべる と 称号</h3>
    <p class="empty-note">ポイントが たまると 称号が かわって、トレイルが もっと ひらくよ。</p>
    <div class="level-ring" style="--progress: ${levelInfo.progress}%">
      <strong>Lv.${levelInfo.level}</strong>
      <span></span>
    </div>
    <div class="badge-row">
      <span class="badge">いま: ${levelInfo.title}</span>
      <span class="badge">つぎ: ${levelInfo.nextTitle}</span>
    </div>
  `;

  const lastDraw = state.lastDraw;
  document.getElementById("gachaPanel").innerHTML = `
    <p class="eyebrow">Daily Reward</p>
    <h3>きょうの ことわざカード</h3>
    <p class="empty-note">その日の 学習を ぜんぶ終えると、ランダムで ことわざカードが 1枚 もらえるよ。</p>
    <div class="gacha-showcase">
      <div class="gacha-card ${lastDraw ? rarityClass(lastDraw.rarity) : ""}">
        <h4>${lastDraw ? lastDraw.name : "まだ もらっていないよ"}</h4>
        <p>${lastDraw ? `${lastDraw.meaning} / ${lastDraw.example}` : "きょうの レッスンを クリアして、はじめての ことわざカードを 手に入れよう。"}</p>
      </div>
    </div>
  `;

  const collection = state.cards.slice(0, 6);
  document.getElementById("collectionPanel").innerHTML = `
    <p class="eyebrow">Collection</p>
    <h3>あつめた ことわざ</h3>
    ${
      collection.length
        ? `<div class="collection-grid">
            ${collection
              .map(
                (card) => `
                  <div class="collect-item">
                    <strong>${card.name}</strong>
                    <small>${card.meaning}</small>
                    <small>${card.rarity.toUpperCase()}</small>
                  </div>
                `,
              )
              .join("")}
          </div>`
        : '<p class="empty-note">まだ コレクションが ないよ。きょうの ミッションを クリアして ことわざカードを もらおう。</p>'
    }
  `;
}

function rarityClass(rarity) {
  if (rarity === "rare") return "rare";
  if (rarity === "super") return "super";
  return "";
}

function renderAvatarAccessory(variant) {
  if (variant === "crown") {
    return `
      <path d="M23 12 L29 3 L40 12 L51 3 L57 12 L57 18 L23 18 Z" fill="#5f48ff" stroke="#263247" stroke-width="2"/>
      <circle cx="30" cy="10" r="2.4" fill="#ffe65b"/>
      <circle cx="40" cy="8" r="2.4" fill="#66f2ff"/>
      <circle cx="50" cy="10" r="2.4" fill="#9cff57"/>
    `;
  }
  if (variant === "wings") {
    return `
      <path d="M18 32 C6 26 6 12 18 10 C21 18 25 24 30 28" fill="#8e6bff" opacity="0.86"/>
      <path d="M62 32 C74 26 74 12 62 10 C59 18 55 24 50 28" fill="#8e6bff" opacity="0.86"/>
    `;
  }
  if (variant === "guitar") {
    return `
      <rect x="46" y="30" width="5" height="24" rx="2" fill="#2c1d16" transform="rotate(28 46 30)"/>
      <ellipse cx="51" cy="49" rx="9" ry="11" fill="#d08332" transform="rotate(28 51 49)"/>
      <circle cx="53" cy="48" r="2.6" fill="#704018"/>
    `;
  }
  if (variant === "boxbot") {
    return `
      <rect x="26" y="10" width="28" height="24" rx="2" fill="#d6a75c" stroke="#263247" stroke-width="2"/>
      <rect x="31" y="17" width="18" height="6" rx="1" fill="#805735"/>
      <rect x="37" y="34" width="6" height="7" fill="#263247"/>
    `;
  }
  if (variant === "pirate") {
    return `
      <path d="M20 16 C24 7 56 7 60 16 L55 22 L25 22 Z" fill="#7d2d20"/>
      <path d="M28 20 C34 17 46 17 52 20" stroke="#f6d57d" stroke-width="2" fill="none"/>
    `;
  }
  if (variant === "rainbow") {
    return `
      <path d="M22 16 C28 6 52 6 58 16" stroke="#ff5f6d" stroke-width="5" fill="none"/>
      <path d="M23 18 C29 9 51 9 57 18" stroke="#ffc94a" stroke-width="5" fill="none"/>
      <path d="M24 20 C30 12 50 12 56 20" stroke="#47d37d" stroke-width="5" fill="none"/>
      <path d="M25 22 C31 15 49 15 55 22" stroke="#48b7ff" stroke-width="5" fill="none"/>
    `;
  }
  if (variant === "robot") {
    return `
      <rect x="28" y="11" width="24" height="22" rx="4" fill="#b7e7ff" stroke="#263247" stroke-width="2"/>
      <line x1="40" y1="4" x2="40" y2="11" stroke="#263247" stroke-width="2"/>
      <circle cx="40" cy="3" r="3" fill="#ff5f6d"/>
    `;
  }
  return "";
}

function renderTrackAvatar(order, status) {
  const mood = status === "current" ? "wow" : status === "done" ? "smile" : "blank";
  const variants = ["crown", "wings", "guitar", "rainbow", "pirate", "boxbot", "robot"];
  const variant = variants[(order - 1) % variants.length];
  const bodyColor = status === "current" ? "#34c3ff" : status === "done" ? "#36d28c" : "#825cff";
  const legColor = status === "current" ? "#ffffff" : "#ecf4ff";
  const mouth =
    mood === "wow"
      ? '<circle cx="40" cy="27" r="3.4" fill="#263247"/>'
      : mood === "smile"
        ? '<path d="M34 27 Q40 32 46 27" stroke="#263247" stroke-width="2.6" fill="none" stroke-linecap="round"/>'
        : '<line x1="34" y1="28" x2="46" y2="28" stroke="#263247" stroke-width="2.6" stroke-linecap="round"/>';
  return `
    <div class="node-avatar ${status} mood-${mood} variant-${variant}">
      <svg class="avatar-svg" viewBox="0 0 80 80" aria-hidden="true">
        ${renderAvatarAccessory(variant)}
        <rect x="28" y="14" width="24" height="22" rx="4" fill="#f6c19a" stroke="#263247" stroke-width="2"></rect>
        <circle cx="34" cy="24" r="2.5" fill="#263247"></circle>
        <circle cx="46" cy="24" r="2.5" fill="#263247"></circle>
        ${mouth}
        <rect x="26" y="38" width="28" height="20" rx="5" fill="${bodyColor}" stroke="#263247" stroke-width="2"></rect>
        <rect x="15" y="40" width="11" height="17" rx="4" fill="#2d9cdb" stroke="#263247" stroke-width="2"></rect>
        <rect x="54" y="40" width="11" height="17" rx="4" fill="#2d9cdb" stroke="#263247" stroke-width="2"></rect>
        <rect x="28" y="58" width="10" height="16" rx="4" fill="${legColor}" stroke="#263247" stroke-width="2"></rect>
        <rect x="42" y="58" width="10" height="16" rx="4" fill="${legColor}" stroke="#263247" stroke-width="2"></rect>
      </svg>
      <div class="avatar-badge">${order}</div>
    </div>
  `;
}

function renderTrack() {
  const session = getCurrentSession();
  const displayPosition = Math.max(state.journeyPosition, session.finished ? state.journeyPosition : state.journeyPosition - 1);
  document.getElementById("trackPanel").innerHTML = `
    <div class="track-header">
      <div>
        <p class="eyebrow">Trail Map</p>
        <h3>ながい だんだんマップ</h3>
      </div>
      <span class="mission-chip">きょうの 進行: ${session.completed} / ${TASKS_PER_GRADE}</span>
    </div>
    <div class="track-board">
      <div class="track-path"></div>
      <div class="track-grid">
        ${journeyLabels
          .map((node, index) => {
            const order = index + 1;
            const status = order < displayPosition ? "done" : order === displayPosition ? "current" : "";
            return `
              <div class="track-node ${status}">
                <div class="node-dot">${renderTrackAvatar(order, status)}</div>
                <strong>${node.name}</strong>
                <small>${node.caption}</small>
              </div>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function setupWritingCanvas(item) {
  const canvas = document.getElementById("writingCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  redrawCanvas(ctx, canvas);

  const toPoint = (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((event.clientY - rect.top) / rect.height) * canvas.height;
    return [x, y];
  };

  canvas.onpointerdown = (event) => {
    if (canvas.setPointerCapture) {
      canvas.setPointerCapture(event.pointerId);
    }
    uiState.writing.pointerDown = true;
    const point = toPoint(event);
    uiState.writing.current = [point];
    redrawCanvas(ctx, canvas);
  };

  canvas.onpointermove = (event) => {
    if (!uiState.writing.pointerDown) return;
    uiState.writing.current.push(toPoint(event));
    redrawCanvas(ctx, canvas);
  };

  canvas.onpointerup = () => {
    if (!uiState.writing.pointerDown) return;
    uiState.writing.pointerDown = false;
    if (uiState.writing.current.length > 1) {
      uiState.writing.strokes.push(normalizeStroke(uiState.writing.current, canvas));
    }
    uiState.writing.current = [];
    redrawCanvas(ctx, canvas);
    updateWritingStrokeCount(item);
  };

  canvas.onpointerleave = () => {
    if (!uiState.writing.pointerDown) return;
    uiState.writing.pointerDown = false;
    uiState.writing.current = [];
    redrawCanvas(ctx, canvas);
  };
}

function normalizeStroke(points, canvas) {
  return points.map((point) => [
    Number(((point[0] / canvas.width) * 100).toFixed(2)),
    Number(((point[1] / canvas.height) * 100).toFixed(2)),
  ]);
}

function redrawCanvas(ctx, canvas) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#1c6d7d";
  ctx.lineWidth = 12;
  uiState.writing.strokes.forEach((stroke) => drawStroke(ctx, denormalizeStroke(stroke, canvas)));
  if (uiState.writing.current.length) {
    ctx.strokeStyle = "#ff8a4c";
    drawStroke(ctx, uiState.writing.current);
  }
}

function denormalizeStroke(points, canvas) {
  return points.map((point) => [
    (point[0] / 100) * canvas.width,
    (point[1] / 100) * canvas.height,
  ]);
}

function drawStroke(ctx, points) {
  if (!points.length) return;
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  points.slice(1).forEach((point) => ctx.lineTo(point[0], point[1]));
  ctx.stroke();
}

function findActionTarget(element) {
  let current = element;
  while (current) {
    if (current.dataset && current.dataset.action) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}

document.addEventListener("click", (event) => {
  const target = findActionTarget(event.target);
  if (!target) return;
  const action = target.dataset.action;

  if (action === "select-grade") {
    setGrade(Number(target.dataset.grade));
    return;
  }
  if (action === "toggle-grade-menu") {
    uiState.gradeMenuOpen = !uiState.gradeMenuOpen;
    render();
    return;
  }
  if (action === "answer") {
    handleAnswer(target.dataset.value);
    return;
  }
  if (action === "clear-writing") {
    resetWritingState();
    uiState.feedback = {
      type: "info",
      message: "キャンバスを クリアしたよ。もう一回 なぞってみよう。",
    };
    render();
    return;
  }
  if (action === "check-writing") {
    handleWritingCheck();
    return;
  }
  if (action === "restart-grade") {
    state.sessions[state.selectedGrade] = createEmptySession();
    uiState.feedback = {
      type: "info",
      message: `${getCurrentGradeData().title} を はじめから できるよ。`,
    };
    resetWritingState();
    persistState();
    render();
  }
});

document.addEventListener("click", function closeGradeMenu(event) {
  const actionTarget = findActionTarget(event.target);
  if (actionTarget && (actionTarget.dataset.action === "toggle-grade-menu" || actionTarget.dataset.action === "select-grade")) {
    return;
  }
  const switcher = document.getElementById("gradeSwitcher");
  if (!switcher || switcher.contains(event.target)) return;
  if (!uiState.gradeMenuOpen) return;
  uiState.gradeMenuOpen = false;
  render();
});

window.handleStrokeHintError = handleStrokeHintError;

render();
