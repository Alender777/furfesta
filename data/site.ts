export type BoothEntry = {
  id: string;
  name: string;
};

export type BoothZone = {
  zone: string;
  booths: BoothEntry[];
};

export type SiteData = {
  event: {
    name: string;
    subtitle: string;
    date: string;
    dateLabel: string;
    venue: string;
    venueAddress: string;
    status: "upcoming" | "ended";
    tagline: string;
    heroDescription: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  schedule: {
    label: string;
    value: string;
    note?: string;
  }[];
  tickets: {
    label: string;
    value: string;
    note?: string;
  }[];
  circleRegistration: {
    status: "pending" | "open" | "closed";
    intro: string;
    period: {
      start: string;
      end: string;
    };
    boothSpec: string;
    boothFee: string;
    boothFeeDouble: string;
    catalogSpec: string;
    notes: string[];
    rules: string[];
  };
  booths: {
    disclaimer: string;
    zones: BoothZone[];
  };
  contact: {
    email: string;
    facebook: string;
    plurk: string;
    message: string;
  };
  nav: {
    label: string;
    href: string;
  }[];
  gallery: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  announcements: {
    tag: string;
    title: string;
    date: string;
    href?: string;
  }[];
};

export const siteData: SiteData = {
  event: {
    name: "FurFesta",
    subtitle: "獸盛宴",
    date: "2027-12-18",
    dateLabel: "2027.12.18",
    venue: "南港瓶蓋工廠台北製造所",
    venueAddress: "A2棟 + F棟",
    status: "upcoming",
    tagline: "屬於獸迷們的狂歡盛宴",
    heroDescription:
      "以獸系為主題，涵蓋動物、獸人、怪獸、吉祥物、幻想生物等人外類型的多元創作交流會。誠摯邀請您一同共襄盛舉！",
  },
  about: {
    title: "關於 FUR FESTA",
    paragraphs: [
      "FUR FESTA是在台灣創立的年度獸迷販售會，不僅提供創作者們推廣作品的空間，也致力於打造出讓獸友們自在交流的場次，讓粉絲與創作者能共譜美好的回憶。",
      "睽違兩年，我們將與大家再次見面，致力為參加者們準備一場如慶典般熱烈，燦爛且值得留念的參場體驗。",
    ],
  },
  highlights: [
    {
      title: "多元創作交流",
      description: "匯聚獸系創作者與同好，在友善的氛圍中交流、支持與分享。",
      icon: "01",
    },
    {
      title: "豐富社團攤位",
      description: "涵蓋同人本、周邊、工藝、獸裝等多元創作，歡迎探索每個攤位的獨特世界。",
      icon: "02",
    },
    {
      title: "自由參與體驗",
      description: "Cosplay 自由參加、提供更衣室，歡迎企業攤位入駐與宣傳。",
      icon: "03",
    },
    {
      title: "獸圈友善專場",
      description: "專為獸迷打造的販售會專場，讓興趣變得有趣，提升自我價值。",
      icon: "04",
    },
  ],
  schedule: [
    { label: "活動日期", value: "2027.12.18（六）" },
    { label: "社團入場", value: "待公布", note: "歷屆參考：11:00–12:00" },
    { label: "一般入場", value: "待公布", note: "歷屆參考：12:00–16:00" },
    { label: "活動結束", value: "待公布", note: "歷屆參考：16:30" },
  ],
  tickets: [
    { label: "一般入場", value: "待公布", note: "歷屆參考：TWD 250 元" },
    { label: "社團攤位", value: "待公布", note: "歷屆參考：TWD 650 元／攤" },
    { label: "小精靈入場", value: "待公布", note: "歷屆參考：TWD 250 元／人" },
    { label: "攤位數量", value: "待公布", note: "歷屆參考：120 攤" },
  ],
  circleRegistration: {
    status: "pending",
    intro:
      "在本活動主旨下所舉辦的多元創作販售會，主題符合動物、獸人、怪獸、幻想生物、吉祥物等人外類之獸系創作者皆可報名。有貴社團的參與，必定使這場祭典的煙花更加絢爛！",
    period: {
      start: "待公布",
      end: "待公布",
    },
    boothSpec: "90 × 60 cm 會議桌 ＋ 兩張塑膠椅",
    boothFee: "待公布（歷屆參考：650 元整／攤，可帶兩名小精靈）",
    boothFeeDouble: "待公布（歷屆參考：1300 元整／兩攤四椅）",
    catalogSpec: "800 × 400 px，300 dpi，JPG 彩色檔",
    notes: [
      "本活動如符合上述規範會直接錄取，請先行準備好場刊圖與匯款資訊再報名。",
      "如報名過於踴躍、超出場地攤位上限則會採取審核制，以台灣社團優先錄取。",
      "一個社團名稱最多可報名兩攤。不提供現場再加椅，如有需要更大的空間請與主辦單位聯繫。",
      "攤主請於活動當日出示實體社團入場券進行驗票，如遺失請出示身分證明補票。",
      "每攤最多可攜帶兩名小精靈入場，小精靈當日必須與攤主一同從社團入口進場。",
    ],
    rules: [
      "當日攤位上一定要有獸系相關的主力商品或展示品。",
      "本活動販售、展示的商品如有裸露圖像，請務必將樣品及見本的露點部位全數遮蔽。",
      "嚴禁轉售二手同人商品，或盜版販售其他非官方授權之版權物品。",
      "可販售自有版權或正式代理的轉蛋類商品，但嚴禁有大聲搖鈴之行為造成他人困擾。",
      "請勿販售由 AI 圖像生成後直接轉印輸出的商品。",
      "嚴禁於本活動販賣、發放非市面上合法流通販售的食物與飲品。",
      "本活動場館不得於牆面及地上進行黏貼、打釘、塗漆等可能損壞場地的行為。",
      "本活動場館恕不供電，亦不可擅自使用館內的插座設備。",
      "攤主或小精靈如有毛裝扮演需求也必須填寫毛裝登記，並於換裝時領取識別證。",
      "活動當日 12:00 後會封閉社團入口，逾時到場的社團請改由一般入口進場。",
      "本活動場館內開放飲食，請將垃圾集中或丟至場內垃圾桶，嚴禁在場館外隨意棄置。",
    ],
  },
  booths: {
    disclaimer:
      "以下為 2025 年第一屆獸祭典的歷屆攤位配置，僅供參考。2027 獸盛宴最新攤位配置待公布。",
    zones: [
      {
        zone: "A",
        booths: [
          { id: "A01", name: "毛皮小事" },
          { id: "A02", name: "毛皮小事" },
          { id: "A03", name: "XXL 猛漢町" },
          { id: "A04", name: "XXL 猛漢町" },
          { id: "A05", name: "桃酥酥獸裝工作室" },
          { id: "A06", name: "桃酥酥獸裝工作室" },
          { id: "A07", name: "Monster Shake 怪獸搖獸裝" },
          { id: "A08", name: "Monster Shake 怪獸搖獸裝" },
          { id: "A09", name: "Nexus" },
          { id: "A10", name: "Nexus" },
          { id: "A11", name: "Nexus" },
          { id: "A12", name: "Nexus" },
        ],
      },
      {
        zone: "B",
        booths: [
          { id: "B01", name: "雷虎雜貨舖" },
          { id: "B02", name: "雷虎雜貨舖" },
          { id: "B03", name: "吉時豹島" },
          { id: "B04", name: "Sea Story" },
          { id: "B05", name: "URA BOU" },
          { id: "B06", name: "URA BOU" },
          { id: "B07", name: "雙狼和作" },
          { id: "B08", name: "回転ParaDOGs" },
          { id: "B09", name: "橘子布丁" },
          { id: "B10", name: "空空食堂" },
          { id: "B11", name: "逗貓棒之尾_貓介" },
          { id: "B12", name: "逗貓棒之尾_貓介" },
          { id: "B13", name: "阿魯米下麵給你吃" },
          { id: "B14", name: "阿魯米下麵給你吃" },
          { id: "B15", name: "西虎前鋒" },
          { id: "B16", name: "芭樂青檸綠" },
          { id: "B17", name: "Black's Den" },
          { id: "B18", name: "Chirenbo's tour bus" },
          { id: "B19", name: "KemoCore" },
          { id: "B20", name: "KemoCore" },
          { id: "B21", name: "KUMAYAKI" },
          { id: "B22", name: "KUMAYAKI" },
        ],
      },
      {
        zone: "C",
        booths: [
          { id: "C01", name: "轟轟愛花轟" },
          { id: "C02", name: "轟轟愛花轟" },
          { id: "C03", name: "盛川食堂" },
          { id: "C04", name: "盛川食堂" },
          { id: "C05", name: "月熊飯糰" },
          { id: "C06", name: "笨熊的薛丁格天窗" },
          { id: "C07", name: "樊樊汪汪叫" },
          { id: "C08", name: "鹹魚工廠" },
          { id: "C09", name: "旭日潮聲" },
          { id: "C10", name: "獸桑です_SOSUNDAYS" },
          { id: "C11", name: "仁禁渴膚" },
          { id: "C12", name: "仁禁渴膚" },
          { id: "C13", name: "Devil Studio" },
          { id: "C14", name: "獸獸黑白切" },
          { id: "C15", name: "獸獸黑白切" },
          { id: "C16", name: "夸克小鎮" },
          { id: "C17", name: "虎皮蛋糕獅子丸" },
          { id: "C18", name: "虎皮蛋糕獅子丸" },
          { id: "C19", name: "狐鹿重工" },
          { id: "C20", name: "狐鹿重工" },
          { id: "C21", name: "漣月影堂" },
          { id: "C22", name: "漣月影堂" },
          { id: "C23", name: "藍德的羊皮紙" },
          { id: "C24", name: "軍龍神威實驗工坊" },
        ],
      },
      {
        zone: "D",
        booths: [
          { id: "D01", name: "咩咩繪夢工坊" },
          { id: "D02", name: "咩咩繪夢工坊" },
          { id: "D03", name: "迷因小怪獸.蟲蟲商號" },
          { id: "D04", name: "迷因小怪獸.蟲蟲商號" },
          { id: "D05", name: "毛毛創森坊" },
          { id: "D06", name: "毛毛創森坊" },
          { id: "D07", name: "魔法松鼠嘟嘟" },
          { id: "D08", name: "小垃圾集中營" },
          { id: "D09", name: "微光創造" },
          { id: "D10", name: "微光創造" },
          { id: "D11", name: "可可貓漫工坊" },
          { id: "D12", name: "可可貓漫工坊" },
          { id: "D13", name: "獸曜日" },
          { id: "D14", name: "兔疊紀" },
          { id: "D15", name: "白熊箱庭" },
          { id: "D16", name: "雪嶺藏青" },
          { id: "D17", name: "BiBi" },
          { id: "D18", name: "Tobey·又·" },
          { id: "D19", name: "湯種麵包" },
          { id: "D20", name: "元元與豬豬窩" },
          { id: "D21", name: "booiaher戊夜輝" },
          { id: "D22", name: "食肉動物" },
          { id: "D23", name: "食肉動物" },
          { id: "D24", name: "Dragon Life" },
        ],
      },
      {
        zone: "E",
        booths: [
          { id: "E01", name: "肥胖俱樂部" },
          { id: "E02", name: "肥胖俱樂部" },
          { id: "E03", name: "RM布偶X彩衣製毛" },
          { id: "E04", name: "獸托邦Furry utopia" },
          { id: "E05", name: "【好運狐狸 】" },
          { id: "E06", name: "【好運狐狸 】" },
          { id: "E07", name: "灰狼窩Gray wolf's den" },
          { id: "E08", name: "灰狼窩Gray wolf's den" },
          { id: "E09", name: "Zc手工皮革項圈" },
          { id: "E10", name: "赤鱗先鋒" },
          { id: "E11", name: "赤鱗先鋒" },
          { id: "E12", name: "天狐城" },
          { id: "E13", name: "My Garden我的庭園(毛毛氈創作坊)" },
          { id: "E14", name: "My Garden我的庭園(毛毛氈創作坊)" },
          { id: "E15", name: "雙夏" },
          { id: "E16", name: "雙夏" },
          { id: "E17", name: "琉璃茉莉❀∣原創設計" },
          { id: "E18", name: "琉璃茉莉❀∣原創設計" },
          { id: "E19", name: "維狐其圍" },
          { id: "E20", name: "蜂蜜熊貓罐罐" },
          { id: "E21", name: "PONKA" },
          { id: "E22", name: "町町噹噹狗生活" },
          { id: "E23", name: "町町噹噹狗生活" },
          { id: "E24", name: "迪諾Dinner" },
        ],
      },
    ],
  },
  contact: {
    email: "furfesta008@gmail.com",
    facebook: "https://www.facebook.com/FurFesta/",
    plurk: "https://www.plurk.com/FurFesta",
    message: "想即時聯絡問答，請直接發到官方信箱或至粉專私訊！",
  },
  nav: [
    { label: "首頁", href: "/" },
    { label: "關於", href: "/about" },
    { label: "社團報名", href: "/circles" },
    { label: "攤位配置", href: "/booths" },
    { label: "聯絡", href: "/contact" },
  ],
  gallery: [
    { src: "/images/gallery/photo-01.svg", alt: "獸盛宴活動現場照片 1" },
    { src: "/images/gallery/photo-02.svg", alt: "獸盛宴活動現場照片 2" },
    { src: "/images/gallery/photo-03.svg", alt: "獸盛宴活動現場照片 3" },
    { src: "/images/gallery/photo-04.svg", alt: "獸盛宴活動現場照片 4" },
    { src: "/images/gallery/photo-05.svg", alt: "獸盛宴活動現場照片 5" },
    { src: "/images/gallery/photo-06.svg", alt: "獸盛宴活動現場照片 6" },
  ],
  announcements: [
    {
      tag: "活動",
      title: "FurFesta 獸盛宴 2027.12.18 籌備中",
      date: "2026.07",
      href: "/about",
    },
    {
      tag: "社團",
      title: "2027 社團報名時間待公布",
      date: "2026.07",
      href: "/circles",
    },
    {
      tag: "會場",
      title: "活動場館：南港瓶蓋工廠台北製造所 A2棟 + F棟",
      date: "2026.07",
      href: "/about",
    },
    {
      tag: "社群",
      title: "追蹤官方 Plurk 獲取最新消息",
      date: "2026.07",
      href: "/contact",
    },
  ],
};

export function getDaysUntilEvent(): number | null {
  const eventDate = new Date(siteData.event.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  const diff = eventDate.getTime() - today.getTime();
  if (diff < 0) return null;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
