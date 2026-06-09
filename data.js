// ============ 心技能加成（三组） ============
var heartSkillBonus = [
  [0.342, 0.4, 0.456, 0.513, 0.571],
  [0.185, 0.216, 0.246, 0.277, 0.308],
  [0.258, 0.301, 0.344, 0.387, 0.43]
];

// ============ 影召闪耀瞬间（四组） ============
var shadowFlashMomentTable = [
  [0.75, 0.875, 1, 1.125, 1.25],
  [1.14, 1.33, 1.52, 1.71, 1.9],
  [1.1, 1.28, 1.46, 1.64, 1.82],
  [0.6, 0.7, 0.8, 0.9, 1]
];

// ============ 印象数据 ============
var impressionData = [
  { name:"闪耀", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5] },
  { name:"闪耀(无人编织童话)", burstRate:0.25, skillOne:[0.158,0.225,0.27,0.315,0.338], skillTwo:[0.3,0.35,0.4,0.45,0.5] },
  { name:"非凡", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1] },
  { name:"非凡(18%)", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1] },
  { name:"非凡(16%)", burstRate:0.16, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1] }
];

// ============ 被动数值表 ============
var passiveTable = {
  "闪耀": {
    "裙": [0.033, 0.067, 0.1, 0.133, 0.167],
    "头": [0.033, 0.067, 0.1, 0.133, 0.167],
    "鞋": [0.033, 0.067, 0.1, 0.133, 0.167],
    "饰": [0.006, 0.013, 0.02, 0.026, 0.034]
  },
  "非凡": {
    "裙": [0.02, 0.04, 0.06, 0.08, 0.1],
    "头": [0.02, 0.04, 0.06, 0.08, 0.1],
    "鞋": [0.02, 0.04, 0.06, 0.08, 0.1],
    "饰": [0.004, 0.008, 0.012, 0.016, 0.02]
  }
};

// ============ 忆海加成 ============
var Yhjc = [0, 0.01, 0.025, 0.04, 0.055, 0.07, 0.085, 0.1, 0.115];

// ============ Carddp数组（长度5） ============
var Carddp = [0, 0, 0, 0, 0];

function calcCarddp(card, recovery, gallery) {
  var sn = ["典雅","清新","甜美","性感","帅气"];
  var sv = [];
  for(var i=0;i<5;i++) sv.push(card.styles[sn[i]]);
  var maxVal=0, maxIdx=0;
  for(var i=0;i<5;i++){if(sv[i]>maxVal){maxVal=sv[i];maxIdx=i;}}
  var topC, othC;
  if(card.rarity==="非凡"){topC=5451+9816;othC=2725;}else{topC=13104+7268;othC=3634;}
  var rec=recovery?0.15:0;
  var tM=1+rec+gallery*0.02;
  var oM=1+gallery*0.02;
  for(var i=0;i<5;i++){
    Carddp[i]=(i===maxIdx)?Math.floor((sv[i]+topC)*tM):Math.floor((sv[i]+othC)*oM);
  }
  return Carddp;
}

// ============ 每卡牌存储（复苏 / 馆藏） ============
var cardSettings = {};
function getCardSettings(cardId) {
  if (!cardSettings[cardId]) {
    cardSettings[cardId] = { recovery: false, gallery: 0 };
  }
  return cardSettings[cardId];
}
function loadCardSettings(cardId) {
  var s = getCardSettings(cardId);
  document.getElementById("cfRecovery").checked = s.recovery;
  document.getElementById("cfGallery").value = s.gallery;
  document.getElementById("pcRecovery").checked = s.recovery;
  document.getElementById("pcGallery").value = s.gallery;
}

// ============ DpScore（长度1）、Mjscore（长度1） ============
var DpScore = [0];
var Mjscore = [0];

// ============ Score数组（长度16） ============
var Score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// ============ Scoresum变量 ============
var Scoresum = 0;

// ============ 统一数据存储对象 ============
var gameData = {
  shadow: [0, 0, 0],
  yhjc: [0],
  rc: [0],
  impression: [0, 0, 0],
  passive: [0, 0, 0, 0],
  xin: [0, 0, 0, 0, 0, 0, 0, 0],
  xinSum: [0, 0, 0],
  yzzh: [0],
  sysj: [0],
  baofa: [0]
};

// ============ 部位选择相关 ============
var baserate = [0, 0.125, 0.025, 0.025, 0.125, 0.025, 0.025, 0.025, 0.125];
var partSelection = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// ============ 卡牌数据 ============
var cardData = [
  { id:1, rarity:"闪耀", style:"典雅", designer:"应煌", name:"煌煌照重渊", skill:"部件得分⑨", collection:"裂帛惊梦", shadow:[0.66,0.76,0.84,0.94,1.03], passive:["裙","头","鞋"], styles:{典雅:620,清新:198,甜美:255,性感:255,帅气:198}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:2, rarity:"闪耀", style:"典雅", designer:"重黎", name:"扶光落九乌", skill:"部件得分⑧", collection:"裂帛惊梦", shadow:[0.61,0.71,0.8,0.9,0.98], passive:["裙","头","鞋"], styles:{典雅:600,清新:248,甜美:248,性感:200,帅气:200}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:3, rarity:"闪耀", style:"典雅", designer:"辉光主神", name:"失格永昼", skill:"部件得分⑧", collection:"千羽森林", shadow:[0.61,0.71,0.8,0.9,0.98], passive:["裙","头","鞋"], styles:{典雅:600,清新:208,甜美:242,性感:242,帅气:208}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:4, rarity:"闪耀", style:"典雅", designer:"洛昂", name:"光影所记录的", skill:"10s加分", collection:"洛登街景", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["头","鞋","饰"], styles:{典雅:600,清新:248,甜美:248,性感:200,帅气:200}, heartSkill:[0.342,0.4,0.456,0.513,0.571], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:5, rarity:"闪耀", style:"典雅", designer:"宙海", name:"鲸向海", skill:"部件得分⑦", collection:"命运交响", shadow:[0.58,0.68,0.77,0.87,0.93], passive:["裙","头","鞋"], styles:{典雅:580,清新:198,甜美:255,性感:255,帅气:198}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:6, rarity:"闪耀", style:"典雅", designer:"闻人典", name:"绘山河万里", skill:"部件得分⑦", collection:"裂帛惊梦", shadow:[0.58,0.68,0.77,0.87,0.93], passive:["裙","头","鞋"], styles:{典雅:580,清新:252,甜美:252,性感:205,帅气:205}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:7, rarity:"闪耀", style:"典雅", designer:"江鸾", name:"金阙朝岚", skill:"部件得分⑥", collection:"裂帛惊梦", shadow:[0.53,0.62,0.7,0.79,0.88], passive:["裙","头","鞋"], styles:{典雅:560,清新:249,甜美:249,性感:201,帅气:201}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:8, rarity:"闪耀", style:"典雅", designer:"汝音", name:"一斛相思", skill:"部件得分⑥", collection:"如烟", shadow:[0.53,0.62,0.7,0.79,0.88], passive:["裙","头","鞋"], styles:{典雅:560,清新:240,甜美:240,性感:209,帅气:209}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:9, rarity:"闪耀", style:"典雅", designer:"瑟琳娜", name:"苍月萦梦之誓", skill:"部件得分④", collection:"镜中圆舞", shadow:[0.47,0.54,0.63,0.7,0.78], passive:["裙","头","鞋"], styles:{典雅:520,清新:252,甜美:252,性感:197,帅气:197}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:10, rarity:"闪耀", style:"典雅", designer:"闻人典", name:"飞羽映琳琅", skill:"部件得分③", collection:"裂帛惊梦", shadow:[0.41,0.48,0.55,0.62,0.69], passive:["裙","鞋","饰"], styles:{典雅:520,清新:254,甜美:254,性感:208,帅气:208}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:11, rarity:"闪耀", style:"典雅", designer:"承云天子", name:"乾乾之吟天", skill:"部件得分②", collection:"绮想夜", shadow:[0.34,0.41,0.46,0.53,0.58], passive:["裙","鞋","饰"], styles:{典雅:520,清新:249,甜美:249,性感:197,帅气:197}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:12, rarity:"闪耀", style:"典雅", designer:"暖暖", name:"春光画扇屏", skill:"部件得分", collection:"如烟", shadow:[0.3,0.35,0.4,0.45,0.5], passive:["裙","头","鞋"], styles:{典雅:520,清新:251,甜美:251,性感:199,帅气:199}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:13, rarity:"闪耀", style:"典雅", designer:"秦衣", name:"赤霞鸾歌", skill:"部件得分", collection:"裂帛惊梦", shadow:[0.3,0.35,0.4,0.45,0.5], passive:["裙","头","鞋"], styles:{典雅:520,清新:251,甜美:251,性感:199,帅气:199}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:14, rarity:"闪耀", style:"典雅", designer:"洛昂", name:"璀璨之约", skill:"部件得分", collection:"镜中圆舞", shadow:[0.3,0.35,0.4,0.45,0.5], passive:["裙","鞋","饰"], styles:{典雅:501,清新:250,甜美:254,性感:203,帅气:200}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:15, rarity:"闪耀", style:"典雅", designer:"奥菲莉亚", name:"凋零的晚钟", skill:"20s加分", collection:"千羽森林", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:500,清新:201,甜美:201,性感:249,帅气:249}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:16, rarity:"闪耀", style:"典雅", designer:"灰灰草", name:"森寂流萤", skill:"20s加分", collection:"千羽森林", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:500,清新:243,甜美:243,性感:200,帅气:200}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:17, rarity:"闪耀", style:"典雅", designer:"秦衣", name:"辞凤阙", skill:"10s加分", collection:"裂帛惊梦", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["头","鞋","饰"], styles:{典雅:496,清新:250,甜美:251,性感:198,帅气:196}, heartSkill:[0.342,0.4,0.456,0.513,0.571], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:18, rarity:"闪耀", style:"典雅", designer:"奥菲莉亚", name:"眷光之颂", skill:"20s加分", collection:"镜中圆舞", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:496,清新:246,甜美:246,性感:198,帅气:198}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:19, rarity:"闪耀", style:"典雅", designer:"左一", name:"锦衣行歌", skill:"20s加分", collection:"钢铁之心", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:488,清新:207,甜美:193,性感:155,帅气:142}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:20, rarity:"闪·涟", style:"清新", designer:"阿洛伊", name:"浮沉的画景", skill:"部件得分⑧", collection:"千羽森林", shadow:[0.61,0.71,0.8,0.9,0.98], passive:["裙","头","鞋"], styles:{典雅:208,清新:620,甜美:242,性感:242,帅气:208}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:21, rarity:"闪瑰", style:"清新", designer:"埃斯特拉", name:"玫瑰堙息地", skill:"部件得分⑦", collection:"镜中圆舞", shadow:[0.58,0.68,0.77,0.87,0.93], passive:["裙","头","鞋"], styles:{典雅:196,清新:600,甜美:255,性感:255,帅气:196}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:22, rarity:"闪耀", style:"清新", designer:"路德伊", name:"焕夜即谕告", skill:"部件得分⑦", collection:"千羽森林", shadow:[0.58,0.68,0.77,0.87,0.93], passive:["裙","头","鞋"], styles:{典雅:208,清新:600,甜美:242,性感:242,帅气:208}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:23, rarity:"闪·寰", style:"清新", designer:"微光", name:"黑猫与宇宙诗", skill:"部件得分⑥", collection:"镜中圆舞", shadow:[0.53,0.62,0.7,0.79,0.88], passive:["裙","头","鞋"], styles:{典雅:246,清新:580,甜美:206,性感:206,帅气:246}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:24, rarity:"闪耀", style:"清新", designer:"莫笛", name:"繁星奏鸣时", skill:"部件得分⑥", collection:"镜中圆舞", shadow:[0.53,0.62,0.7,0.79,0.88], passive:["裙","头","鞋"], styles:{典雅:195,清新:580,甜美:248,性感:248,帅气:195}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:25, rarity:"闪耀", style:"清新", designer:"墨丘利", name:"神陨之魇", skill:"部件得分⑥", collection:"命运交响", shadow:[0.53,0.62,0.7,0.79,0.88], passive:["裙","头","鞋"], styles:{典雅:193,清新:580,甜美:245,性感:245,帅气:193}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:26, rarity:"闪耀", style:"清新", designer:"秦衣", name:"云水别行客", skill:"部件得分⑤", collection:"如烟", shadow:[0.5,0.59,0.66,0.75,0.83], passive:["裙","头","鞋"], styles:{典雅:201,清新:560,甜美:253,性感:253,帅气:201}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:27, rarity:"闪耀", style:"清新", designer:"云昙", name:"一梦昙华", skill:"部件得分④", collection:"如烟", shadow:[0.47,0.54,0.63,0.7,0.78], passive:["裙","鞋","饰"], styles:{典雅:193,清新:540,甜美:245,性感:245,帅气:193}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:28, rarity:"闪耀", style:"清新", designer:"赫菲斯", name:"朝焰初临", skill:"部件得分③", collection:"千羽森林", shadow:[0.41,0.48,0.55,0.62,0.69], passive:["裙","头","鞋"], styles:{典雅:198,清新:520,甜美:255,性感:255,帅气:198}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:29, rarity:"闪耀", style:"清新", designer:"艾瑞卡", name:"纯白谧境", skill:"部件得分", collection:"镜中圆舞", shadow:[0.3,0.35,0.4,0.45,0.5], passive:["裙","头","鞋"], styles:{典雅:198,清新:506,甜美:246,性感:246,帅气:198}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:30, rarity:"闪耀", style:"清新", designer:"夜宵", name:"千重梦", skill:"部件得分", collection:"如烟", shadow:[0.3,0.35,0.4,0.45,0.5], passive:["裙","头","鞋"], styles:{典雅:201,清新:506,甜美:206,性感:250,帅气:186}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:31, rarity:"闪耀", style:"清新", designer:"赫斯提亚", name:"往日与远方", skill:"额外闪瞬", collection:"钢铁之心", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","头","鞋"], styles:{典雅:191,清新:505,甜美:243,性感:243,帅气:191}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:1 },
  { id:32, rarity:"闪耀", style:"清新", designer:"墨丘利", name:"不渝今生", skill:"闪瞬提升", collection:"镜中圆舞", shadow:[0.15,0.175,0.2,0.225,0.25], passive:["裙","头","鞋"], styles:{典雅:199,清新:502,甜美:251,性感:251,帅气:199}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0.75,0.875,1,1.125,1.25], extraFlash:0 },
  { id:33, rarity:"闪耀", style:"清新", designer:"莉莉斯", name:"深红伊甸", skill:"20s加分", collection:"镜中圆舞", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:205,清新:500,甜美:252,性感:252,帅气:205}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:34, rarity:"闪耀", style:"清新", designer:"墨丘利", name:"精灵哀歌", skill:"20s加分", collection:"千羽森林", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:204,清新:500,甜美:250,性感:248,帅气:198}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:35, rarity:"闪耀", style:"清新", designer:"左一", name:"以凛冬起誓", skill:"20s加分", collection:"钢铁之心", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:200,清新:500,甜美:247,性感:247,帅气:200}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:36, rarity:"闪耀", style:"清新", designer:"琪琪尔", name:"熔金漫纪", skill:"10s加分", collection:"钢铁之心", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["头","鞋","饰"], styles:{典雅:209,清新:490,甜美:243,性感:243,帅气:209}, heartSkill:[0.342,0.4,0.456,0.513,0.571], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:37, rarity:"闪熠", style:"甜美", designer:"德拉薇尔", name:"龙与金色梦乡", skill:"部件得分⑧", collection:"镜中圆舞", shadow:[0.61,0.71,0.8,0.9,0.98], passive:["裙","头","鞋"], styles:{典雅:209,清新:209,甜美:620,性感:245,帅气:245}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:38, rarity:"闪耀", style:"甜美", designer:"溯烬", name:"天地一浮沤", skill:"部件得分⑧", collection:"裂帛惊梦", shadow:[0.61,0.71,0.8,0.9,0.98], passive:["裙","头","鞋"], styles:{典雅:255,清新:198,甜美:620,性感:198,帅气:255}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:39, rarity:"闪耀", style:"甜美", designer:"长盈", name:"鉴照明月魄", skill:"部件得分⑦", collection:"命运交响", shadow:[0.58,0.68,0.77,0.87,0.93], passive:["裙","头","鞋"], styles:{典雅:255,清新:198,甜美:600,性感:198,帅气:255}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:40, rarity:"闪耀", style:"甜美", designer:"暖暖", name:"浩瀚花", skill:"部件得分⑦", collection:"命运交响", shadow:[0.58,0.68,0.77,0.87,0.93], passive:["裙","头","鞋"], styles:{典雅:255,清新:198,甜美:600,性感:198,帅气:255}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:41, rarity:"闪耀", style:"甜美", designer:"思明帝", name:"龙墟归海客", skill:"部件得分⑥", collection:"裂帛惊梦", shadow:[0.53,0.62,0.7,0.79,0.88], passive:["裙","头","鞋"], styles:{典雅:205,清新:205,甜美:580,性感:252,帅气:252}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:42, rarity:"闪耀", style:"甜美", designer:"搭配与美", name:"月谕", skill:"部件得分⑥", collection:"命运交响", shadow:[0.53,0.62,0.7,0.79,0.88], passive:["裙","头","鞋"], styles:{典雅:193,清新:193,甜美:580,性感:245,帅气:245}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:43, rarity:"闪耀", style:"甜美", designer:"暖暖", name:"星之引", skill:"部件得分⑤", collection:"命运交响", shadow:[0.5,0.59,0.66,0.75,0.83], passive:["裙","头","鞋"], styles:{典雅:205,清新:205,甜美:560,性感:256,帅气:256}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:44, rarity:"闪耀", style:"甜美", designer:"莉莉白", name:"献给莉莉斯", skill:"部件得分②", collection:"绮想夜", shadow:[0.34,0.41,0.46,0.53,0.58], passive:["裙","鞋","饰"], styles:{典雅:191,清新:191,甜美:520,性感:257,帅气:257}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:45, rarity:"闪耀", style:"甜美", designer:"明颐皇后", name:"昭昭之栖梧", skill:"部件得分②", collection:"绮想夜", shadow:[0.34,0.41,0.46,0.53,0.58], passive:["裙","鞋","饰"], styles:{典雅:197,清新:197,甜美:520,性感:249,帅气:249}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:46, rarity:"闪耀", style:"甜美", designer:"欲望之神", name:"郁梦伊始", skill:"部件得分", collection:"眩光", shadow:[0.3,0.35,0.4,0.45,0.5], passive:["裙","头","鞋"], styles:{典雅:191,清新:191,甜美:520,性感:246,帅气:246}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:47, rarity:"闪耀", style:"甜美", designer:"朵朵甜", name:"朝篱晨曲", skill:"20s加分", collection:"镜中圆舞", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","头","鞋"], styles:{典雅:207,清新:207,甜美:500,性感:257,帅气:257}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:48, rarity:"闪耀", style:"甜美", designer:"夜宵", name:"一枕天青", skill:"20s加分", collection:"裂帛惊梦", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:201,清新:201,甜美:500,性感:249,帅气:249}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:49, rarity:"闪耀", style:"甜美", designer:"半星", name:"循此星谕", skill:"20s加分", collection:"命运交响", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:209,清新:209,甜美:500,性感:245,帅气:245}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:50, rarity:"闪耀", style:"甜美", designer:"微光", name:"星穹法则", skill:"10s加分", collection:"眩光", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["头","鞋","饰"], styles:{典雅:201,清新:201,甜美:496,性感:253,帅气:253}, heartSkill:[0.342,0.4,0.456,0.513,0.571], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:51, rarity:"闪耀", style:"甜美", designer:"莫笛", name:"忆之眷旅", skill:"20s加分", collection:"轻歌行", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","头","鞋"], styles:{典雅:193,清新:193,甜美:496,性感:243,帅气:243}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:52, rarity:"闪耀", style:"甜美", designer:"洛昂", name:"锦狐灼灼", skill:"闪瞬提升", collection:"绮想夜", shadow:[0.15,0.175,0.2,0.225,0.25], passive:["裙","头","鞋"], styles:{典雅:241,清新:208,甜美:489,性感:259,帅气:192}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0.75,0.875,1,1.125,1.25], extraFlash:0 },
  { id:53, rarity:"闪耀", style:"帅气", designer:"暖暖", name:"誓我于星", skill:"部件得分⑧", collection:"命运交响", shadow:[0.61,0.71,0.8,0.9,0.98], passive:["裙","头","鞋"], styles:{典雅:209,清新:209,甜美:245,性感:245,帅气:600}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:54, rarity:"闪耀", style:"帅气", designer:"圣纯后", name:"欲照此身焰", skill:"部件得分⑦", collection:"裂帛惊梦", shadow:[0.58,0.68,0.77,0.87,0.93], passive:["裙","头","鞋"], styles:{典雅:245,清新:245,甜美:193,性感:193,帅气:580}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:55, rarity:"闪耀", style:"帅气", designer:"伊凡琴", name:"幽蓝中沉睡", skill:"部件得分⑥", collection:"镜中圆舞", shadow:[0.53,0.62,0.7,0.79,0.88], passive:["裙","头","鞋"], styles:{典雅:256,清新:256,甜美:205,性感:205,帅气:560}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:56, rarity:"闪耀", style:"帅气", designer:"涂山无忧", name:"有狐无忧", skill:"部件得分⑥", collection:"裂帛惊梦", shadow:[0.53,0.62,0.7,0.79,0.88], passive:["裙","头","鞋"], styles:{典雅:249,清新:249,甜美:201,性感:201,帅气:560}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:57, rarity:"闪耀", style:"帅气", designer:"羽焱", name:"日贯长虹", skill:"部件得分⑥", collection:"如烟", shadow:[0.53,0.62,0.7,0.79,0.88], passive:["裙","头","鞋"], styles:{典雅:240,清新:240,甜美:209,性感:209,帅气:560}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:58, rarity:"闪耀", style:"帅气", designer:"微光", name:"无垠之星", skill:"部件得分⑤", collection:"眩光", shadow:[0.5,0.59,0.66,0.75,0.83], passive:["裙","头","鞋"], styles:{典雅:256,清新:256,甜美:205,性感:205,帅气:560}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:59, rarity:"闪耀", style:"帅气", designer:"凌吾", name:"煊煊瑞虎威", skill:"部件得分④", collection:"如烟", shadow:[0.47,0.54,0.63,0.7,0.78], passive:["裙","鞋","饰"], styles:{典雅:245,清新:245,甜美:193,性感:193,帅气:540}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:60, rarity:"闪耀", style:"帅气", designer:"克丽丝塔", name:"虹穹之泪", skill:"部件得分③", collection:"命运交响", shadow:[0.41,0.48,0.55,0.62,0.69], passive:["裙","头","鞋"], styles:{典雅:248,清新:248,甜美:192,性感:192,帅气:520}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:61, rarity:"闪耀", style:"帅气", designer:"卿月", name:"卿霄落月", skill:"20s加分②", collection:"裂帛惊梦", shadow:[0.15,0.175,0.2,0.225,0.25], passive:["头","鞋","饰"], styles:{典雅:201,清新:255,甜美:255,性感:201,帅气:520}, heartSkill:[0.258,0.301,0.344,0.387,0.43], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:62, rarity:"闪耀", style:"帅气", designer:"李尔里德", name:"无烬之羽", skill:"10s加分", collection:"绮想夜", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","头","鞋"], styles:{典雅:246,清新:246,甜美:191,性感:191,帅气:520}, heartSkill:[0.342,0.4,0.456,0.513,0.571], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:63, rarity:"闪耀", style:"帅气", designer:"鹿明", name:"鹿祈云泽", skill:"闪瞬提升", collection:"裂帛惊梦", shadow:[0.15,0.175,0.2,0.225,0.25], passive:["裙","头","鞋"], styles:{典雅:242,清新:244,甜美:185,性感:202,帅气:504}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0.75,0.875,1,1.125,1.25], extraFlash:0 },
  { id:64, rarity:"闪耀", style:"帅气", designer:"暖暖", name:"紫藤的晴昼", skill:"20s加分", collection:"心之奏鸣曲", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:208,清新:208,甜美:242,性感:242,帅气:500}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:65, rarity:"闪耀", style:"帅气", designer:"墨丘利", name:"剑与启示录", skill:"20s加分", collection:"心之奏鸣曲", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["头","鞋","饰"], styles:{典雅:243,清新:243,甜美:192,性感:192,帅气:500}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:66, rarity:"闪耀", style:"帅气", designer:"洛洛梨", name:"繁花的假面", skill:"20s加分", collection:"镜中圆舞", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:241,清新:241,甜美:193,性感:193,帅气:500}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:67, rarity:"华梦", style:"帅气", designer:"元怀音", name:"金册画中人", skill:"20s加分", collection:"裂帛惊梦", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:249,清新:249,甜美:201,性感:201,帅气:500}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:68, rarity:"闪耀", style:"帅气", designer:"伊飒", name:"繁金为枷", skill:"10s加分", collection:"轻歌行", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["头","鞋","饰"], styles:{典雅:253,清新:253,甜美:199,性感:199,帅气:496}, heartSkill:[0.342,0.4,0.456,0.513,0.571], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:69, rarity:"闪耀", style:"帅气", designer:"莉莉斯", name:"羽落星渊", skill:"20s加分", collection:"镜中圆舞", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:255,清新:255,甜美:197,性感:197,帅气:496}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:70, rarity:"闪耀", style:"帅气", designer:"尤妮金娜", name:"霜与剑之诗", skill:"10s加分", collection:"钢铁之心", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["头","鞋","饰"], styles:{典雅:256,清新:256,甜美:199,性感:199,帅气:490}, heartSkill:[0.342,0.4,0.456,0.513,0.571], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:71, rarity:"闪耀", style:"性感", designer:"瑞因", name:"华宴不歇", skill:"20s加分", collection:"洛登街景", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:245,清新:243,甜美:193,性感:576,帅气:190}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:72, rarity:"闪耀", style:"性感", designer:"李尔里德", name:"谕", skill:"闪瞬提升③", collection:"千羽森林", shadow:[0.17,0.2,0.22,0.25,0.28], passive:["裙","头","鞋"], styles:{典雅:254,清新:208,甜美:208,性感:550,帅气:246}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[1.14,1.33,1.52,1.71,1.9], extraFlash:0 },
  { id:73, rarity:"闪耀", style:"性感", designer:"元怀音", name:"焚骨入画屏", skill:"部件得分④", collection:"裂帛惊梦", shadow:[0.43,0.48,0.53,0.59,0.66], passive:["裙","鞋","饰"], styles:{典雅:246,清新:206,甜美:206,性感:540,帅气:246}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:74, rarity:"闪耀", style:"性感", designer:"丽诺尔", name:"涉过虚妄月光", skill:"部件得分④", collection:"心之奏鸣曲", shadow:[0.43,0.48,0.53,0.59,0.66], passive:["裙","鞋","饰"], styles:{典雅:246,清新:206,甜美:206,性感:540,帅气:246}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:75, rarity:"闪·漫", style:"性感", designer:"银夕", name:"幻梦的潮声", skill:"闪瞬提升②", collection:"绮想夜", shadow:[0.16,0.18,0.21,0.23,0.26], passive:["裙","头","鞋"], styles:{典雅:246,清新:206,甜美:206,性感:540,帅气:246}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[1.1,1.28,1.46,1.64,1.82], extraFlash:0 },
  { id:76, rarity:"闪耀", style:"性感", designer:"蛛丽叶", name:"浮光中织吻", skill:"部件得分③", collection:"镜中圆舞", shadow:[0.38,0.43,0.5,0.55,0.62], passive:["裙","鞋","饰"], styles:{典雅:246,清新:206,甜美:206,性感:520,帅气:246}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:77, rarity:"闪·漫", style:"性感", designer:"阿诺斯", name:"于海渊守望", skill:"部件得分③", collection:"千羽森林", shadow:[0.38,0.43,0.5,0.55,0.62], passive:["裙","鞋","饰"], styles:{典雅:246,清新:206,甜美:206,性感:520,帅气:246}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:78, rarity:"闪耀", style:"性感", designer:"赫丽特", name:"如烈阳灿烂", skill:"部件得分③", collection:"绮想夜", shadow:[0.38,0.43,0.5,0.55,0.62], passive:["裙","鞋","饰"], styles:{典雅:255,清新:201,甜美:201,性感:520,帅气:255}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:79, rarity:"闪耀", style:"性感", designer:"夜魔女", name:"玫瑰倾颓之夜", skill:"部件得分②", collection:"镜中圆舞", shadow:[0.34,0.41,0.46,0.53,0.58], passive:["裙","鞋","饰"], styles:{典雅:252,清新:197,甜美:197,性感:506,帅气:252}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:80, rarity:"闪耀", style:"性感", designer:"塞西莉亚", name:"星辰的眸光", skill:"部件得分②", collection:"命运交响", shadow:[0.34,0.41,0.46,0.53,0.58], passive:["裙","鞋","饰"], styles:{典雅:250,清新:202,甜美:202,性感:506,帅气:250}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:81, rarity:"闪耀", style:"性感", designer:"赫斯提亚", name:"追忆与月光", skill:"20s加分", collection:"镜中圆舞", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:240,清新:209,甜美:209,性感:500,帅气:240}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:82, rarity:"闪耀", style:"性感", designer:"莫笛", name:"静候花信风", skill:"部件得分", collection:"镜中圆舞", shadow:[0.3,0.35,0.4,0.45,0.5], passive:["裙","头","鞋"], styles:{典雅:246,清新:206,甜美:206,性感:500,帅气:246}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:83, rarity:"闪耀", style:"性感", designer:"阿诺斯", name:"遗落潮汐", skill:"闪瞬提升", collection:"千羽森林", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["头","鞋","饰"], styles:{典雅:255,清新:198,甜美:198,性感:499,帅气:255}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0.6,0.7,0.8,0.9,1], extraFlash:0 },
  { id:84, rarity:"闪耀", style:"性感", designer:"艾琳卡", name:"燃情灯宴", skill:"闪瞬提升", collection:"镜中圆舞", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["头","鞋","饰"], styles:{典雅:246,清新:198,甜美:198,性感:499,帅气:246}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0.6,0.7,0.8,0.9,1], extraFlash:0 },
  { id:85, rarity:"闪耀", style:"性感", designer:"莉莉斯", name:"欲望之音", skill:"闪瞬提升", collection:"眩光", shadow:[0.15,0.175,0.2,0.225,0.25], passive:["裙","头","鞋"], styles:{典雅:253,清新:203,甜美:201,性感:499,帅气:254}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0.75,0.875,1,1.125,1.25], extraFlash:0 },
  { id:86, rarity:"闪耀", style:"性感", designer:"墨丘利", name:"星潮织梦", skill:"额外闪瞬", collection:"千羽森林", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","头","鞋"], styles:{典雅:255,清新:197,甜美:197,性感:496,帅气:255}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:1 },
  { id:87, rarity:"闪耀", style:"性感", designer:"宙", name:"蒸汽幻想", skill:"20s加分", collection:"逆转游戏", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","头","鞋"], styles:{典雅:193,清新:199,甜美:255,性感:496,帅气:252}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:88, rarity:"闪耀", style:"性感", designer:"玛格丽特", name:"燃烧的红心", skill:"10s加分", collection:"命运交响", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["头","鞋","饰"], styles:{典雅:255,清新:200,甜美:200,性感:496,帅气:255}, heartSkill:[0.342,0.4,0.456,0.513,0.571], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:89, rarity:"闪耀", style:"性感", designer:"暖暖", name:"星之海", skill:"10s加分", collection:"命运交响", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["头","鞋","饰"], styles:{典雅:244,清新:207,甜美:207,性感:490,帅气:244}, heartSkill:[0.342,0.4,0.456,0.513,0.571], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:90, rarity:"闪耀", style:"性感", designer:"洛昂", name:"舞宴暗流", skill:"20s加分", collection:"心之奏鸣曲", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","头","鞋"], styles:{典雅:255,清新:200,甜美:200,性感:488,帅气:255}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:91, rarity:"闪·斓", style:"典雅", designer:"翠丝塔", name:"翡梦之春", skill:"部件得分⑨", collection:"镜中圆舞", shadow:[0.66,0.76,0.84,0.94,1.03], passive:["裙","头","鞋"], styles:{典雅:620,清新:198,甜美:255,性感:255,帅气:198}, heartSkill:[0,0,0,0,0], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 },
  { id:92, rarity:"闪耀", style:"清新", designer:"玛格丽特", name:"灼热的逝言", skill:"20s加分", collection:"命运交响", shadow:[0.18,0.21,0.24,0.27,0.3], passive:["裙","鞋","饰"], styles:{典雅:200,清新:500,甜美:247,性感:247,帅气:200}, heartSkill:[0.185,0.216,0.246,0.277,0.308], shadowFlashMoment:[0,0,0,0,0], extraFlash:0 }
];

// ============ 重构服装数据 ============
var reconstructData = [
  { id:1,  rarity:"闪耀", attribute:"典雅", name:"霜染漆夜",                       bonusType:"竞技光芒", baseScore:1104 },
  { id:2,  rarity:"闪耀", attribute:"清新", name:"光与时之舞",                     bonusType:"竞技光芒", baseScore:1076 },
  { id:3,  rarity:"闪耀", attribute:"性感", name:"漂浮光海",                       bonusType:"竞技光芒", baseScore:1031 },
  { id:4,  rarity:"闪耀", attribute:"甜美", name:"灼灼锦华",                       bonusType:"竞技光芒", baseScore:1049 },
  { id:5,  rarity:"闪耀", attribute:"帅气", name:"鹿饮兰泽",                       bonusType:"竞技光芒", baseScore:1033 },
  { id:6,  rarity:"闪耀", attribute:"性感", name:"致命之吻",                       bonusType:"竞技光芒", baseScore:1068 },
  { id:7,  rarity:"闪耀", attribute:"典雅", name:"胭脂合欢 / 凤栖牡丹",           bonusType:"竞技光芒", baseScore:1152 },
  { id:8,  rarity:"闪耀", attribute:"清新", name:"余生一诺",                       bonusType:"竞技光芒", baseScore:1104 },
  { id:9,  rarity:"闪耀", attribute:"性感", name:"海汐吟歌",                       bonusType:"竞技光芒", baseScore:1115 },
  { id:10, rarity:"闪耀", attribute:"典雅", name:"披霞归",                         bonusType:"心阶引领", baseScore:1057 },
  { id:11, rarity:"闪耀", attribute:"甜美", name:"夜露花园",                       bonusType:"竞技光芒", baseScore:1044 },
  { id:12, rarity:"闪耀", attribute:"帅气", name:"灼目之羽",                       bonusType:"竞技光芒", baseScore:1104 },
  { id:13, rarity:"闪耀", attribute:"甜美", name:"墟烬沉渊",                       bonusType:"竞技光芒", baseScore:1104 },
  { id:14, rarity:"闪耀", attribute:"典雅", name:"祝酒云霄 / 夜月独行",           bonusType:"竞技光芒", baseScore:1035 },
  { id:15, rarity:"闪耀", attribute:"清新", name:"千寻溯",                         bonusType:"竞技光芒", baseScore:1087 },
  { id:16, rarity:"闪耀", attribute:"帅气", name:"阎风邀月",                       bonusType:"竞技光芒", baseScore:1104 },
  { id:17, rarity:"闪耀", attribute:"性感", name:"恣情灯宴",                       bonusType:"竞技光芒", baseScore:1104 },
  { id:18, rarity:"闪耀", attribute:"帅气", name:"花舞落渊",                       bonusType:"心阶引领", baseScore:1002 },
  { id:19, rarity:"闪耀", attribute:"典雅", name:"肃肃之吟天",                     bonusType:"竞技光芒", baseScore:1152 },
  { id:20, rarity:"闪耀", attribute:"甜美", name:"翔翔之栖梧",                     bonusType:"竞技光芒", baseScore:1104 },
  { id:21, rarity:"闪耀", attribute:"清新", name:"幻夜秘境",                       bonusType:"竞技光芒", baseScore:1104 },
  { id:22, rarity:"闪耀", attribute:"帅气", name:"凝星之愿",                       bonusType:"竞技光芒", baseScore:1152 },
  { id:23, rarity:"闪耀", attribute:"性感", name:"追溯波光",                       bonusType:"竞技光芒", baseScore:1104 },
  { id:24, rarity:"闪耀", attribute:"典雅", name:"云漠天音 / 飞煌转霓裳",         bonusType:"竞技光芒", baseScore:1176 },
  { id:25, rarity:"闪耀", attribute:"甜美", name:"梦寐暮星",                       bonusType:"竞技光芒", baseScore:1152 },
  { id:26, rarity:"闪耀", attribute:"清新", name:"樱火花绽",                       bonusType:"竞技光芒", baseScore:1152 },
  { id:27, rarity:"闪耀", attribute:"帅气", name:"皎皎绒虎游",                     bonusType:"竞技光芒", baseScore:1176 },
  { id:28, rarity:"闪耀", attribute:"性感", name:"月光凋零之叹",                   bonusType:"竞技光芒", baseScore:1118 },
  { id:29, rarity:"闪耀", attribute:"典雅", name:"流金倾梦之愿",                   bonusType:"竞技光芒", baseScore:1176 },
  { id:30, rarity:"闪耀", attribute:"清新", name:"一梦尘寰",                       bonusType:"竞技光芒", baseScore:1152 },
  { id:31, rarity:"闪耀", attribute:"甜美", name:"星之汐",                         bonusType:"竞技光芒", baseScore:1176 },
  { id:32, rarity:"闪耀", attribute:"帅气", name:"遥空之心",                       bonusType:"竞技光芒", baseScore:1176 },
  { id:33, rarity:"闪耀", attribute:"性感", name:"眷影的凝眸",                     bonusType:"竞技光芒", baseScore:1118 },
  { id:34, rarity:"闪耀", attribute:"典雅", name:"诉尽离愁 / 游鳞逐波",           bonusType:"竞技光芒", baseScore:[588,607] },
  { id:35, rarity:"闪耀", attribute:"清新", name:"沧浪引孤鸿",                     bonusType:"竞技光芒", baseScore:1176 },
  { id:36, rarity:"闪耀", attribute:"帅气", name:"黎光裁决 / 埋灭星辉",           bonusType:"竞技光芒", baseScore:1074 },
  { id:37, rarity:"闪耀", attribute:"甜美", name:"星颂",                           bonusType:"竞技光芒", baseScore:1195 },
  { id:38, rarity:"闪耀", attribute:"帅气", name:"长天彻晓",                       bonusType:"竞技光芒", baseScore:1195 },
  { id:39, rarity:"闪耀", attribute:"性感", name:"暮夜暗舞",                       bonusType:"竞技光芒", baseScore:1038 },
  { id:40, rarity:"闪耀", attribute:"性感", name:"尘寰",                           bonusType:"竞技光芒", baseScore:1214 },
  { id:41, rarity:"闪耀", attribute:"性感", name:"月华恒耀 / 苍辰辉颂",           bonusType:"竞技光芒", baseScore:1139 },
  { id:42, rarity:"闪耀", attribute:"清新", name:"神寂之汐 / 寂渊",               bonusType:"竞技光芒", baseScore:1176 },
  { id:43, rarity:"闪耀", attribute:"清新", name:"穹辉漫纪",                       bonusType:"竞技光芒", baseScore:1076 },
  { id:44, rarity:"闪耀", attribute:"典雅", name:"朱阙流岚",                       bonusType:"竞技光芒", baseScore:1195 }
];

// ============ 通用函数 ============
function getBonusValue(id, level) { return (id <= 33) ? level * 30 : level * 60; }

var flashLevels      = [1, 16, 32, 48, 60, 80];
var flashTable_1_33  = [0.02, 0.04, 0.06, 0.08, 0.1, 0.12];
var flashTable_34_44 = [0.04, 0.08, 0.12, 0.16, 0.2, 0.24];

function getFlashBonus(id, level) {
  var table = (id <= 33) ? flashTable_1_33 : flashTable_34_44;
  var result = 0;
  for (var i = 0; i < flashLevels.length; i++) {
    if (level >= flashLevels[i]) result = table[i];
  }
  return result;
}

function getPassiveValue(rarity, part, levelIndex) {
  var key = (rarity === "非凡") ? "非凡" : "闪耀";
  if (passiveTable[key] && passiveTable[key][part]) return passiveTable[key][part][levelIndex];
  return 0;
}

var shadowLabels = ["影一","影二","影三","影四","影五"];
var styleNames   = ["典雅","清新","甜美","性感","帅气"];
var partNames    = ["", "裙", "饰品1", "饰品2", "头", "饰品3", "饰品4", "饰品5", "鞋"];

function toPercent(val) {
  return (val * 100).toFixed(1).replace(/\.0$/, '') + '%';
}

function formatNum(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// ============ 弹窗显示结果 ============
function showResult(mode) {
  var title = "";
  var html = "";

  var lastScoresum = parseFloat(localStorage.getItem("sn_lastScoresum")) || 0;
  var diff = Scoresum - lastScoresum;
  var diffText = "";
  var diffCls = "same";
  if (lastScoresum > 0) {
    if (diff > 0) { diffText = "▲ 多 " + formatNum(diff); diffCls = "up"; }
    else if (diff < 0) { diffText = "▼ 少 " + formatNum(Math.abs(diff)); diffCls = "down"; }
    else { diffText = "— 持平"; diffCls = "same"; }
  }

  function r(label, value) {
    return '<div class="mr"><span class="ml">' + label + '</span><span class="mv">' + value + '</span></div>';
  }
  function rd(label, value, dt, dc) {
    return '<div class="mr"><span class="ml">' + label + '</span><span class="mv">' + value + '<span class="diff ' + dc + '"> ' + dt + '</span></span></div>';
  }

  if (mode === "arena") {
    title = "竞技场 · 计算结果";
    html += r("搭配之力", formatNum(DpScore[0]));
    html += r("技能收益", formatNum(Score[13]));
    html += r("竞技场战力", formatNum(Score[14]));
    html += r("技能倍率", gameData.xinSum[0].toFixed(4));
    html += rd("得 分", formatNum(Scoresum), diffText, diffCls);
  } else if (mode === "heart") {
    title = "心阶 · 计算结果";
    html += r("技能倍率", gameData.xinSum[1].toFixed(4));
    html += rd("得 分", formatNum(Scoresum), diffText, diffCls);
  } else if (mode === "league") {
    title = "联盟最后一关 · 计算结果";
    html += r("技能倍率", gameData.xinSum[2].toFixed(4));
    html += r("点灯得分", formatNum(Score[15]));
    html += rd("得 分", formatNum(Scoresum), diffText, diffCls);
  }

  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalBody").innerHTML = html;
  document.getElementById("resultModal").classList.add("show");

  localStorage.setItem("sn_lastScoresum", Scoresum);
}

function showCurrentResult() {
  var mode = document.getElementById("pcMode").value;
  if (!pcCurrentCard) {
    alert("请先选择卡牌");
    return;
  }
  if (DpScore[0] === 0) {
    alert("请先输入总搭配之力");
    return;
  }
  showResult(mode);
}

function closeModal() {
  document.getElementById("resultModal").classList.remove("show");
}

// ============ calcXin ============
function calcXin() {
  if (!pcCurrentCard) return;
  var card = pcCurrentCard;
  var mode = document.getElementById("pcMode").value;
  var impType = document.getElementById("pcImpType").value;
  var impSkill1 = (impType === "heart") ? gameData.impression[1] : 0;
  var heartEffect = [0, 0, 0, 0, 0, 0, 0, 0];
  var skill = card.skill;
  var currentHeartValue = gameData.shadow[1];

  if (skill.indexOf("10s加分") !== -1) {
    if (mode === "arena") {
      heartEffect[2] = currentHeartValue;
      heartEffect[3] = currentHeartValue;
    } else {
      heartEffect[0] = currentHeartValue;
      heartEffect[1] = currentHeartValue;
      heartEffect[2] = currentHeartValue;
      heartEffect[3] = currentHeartValue;
    }
  } else if (skill.indexOf("20s加分") !== -1) {
    if (skill.indexOf("②") !== -1) {
      for (var i = 2; i < 8; i++) heartEffect[i] = currentHeartValue;
    } else {
      if (mode === "arena") {
        for (var i = 2; i < 7; i++) heartEffect[i] = currentHeartValue;
      } else {
        for (var i = 0; i < 6; i++) heartEffect[i] = currentHeartValue;
      }
    }
  }

  var burstBonus = [0, 0, 0, 0, 0, 0, 0, 0];
  if (mode === "arena" || mode === "league") {
    for (var i = 1; i <= 8; i++) burstBonus[i - 1] = partSelection[i] ? 0.5 : 0;
  }

  var shadowCoeff = gameData.shadow[0];
  if (impType === "shadow") {
    gameData.yzzh[0] = shadowCoeff * (1 + gameData.impression[1]);
  } else {
    gameData.yzzh[0] = shadowCoeff;
  }

  var shadowFlash = gameData.shadow[2];
  var rcFlash = gameData.rc[0];
  var impSkill2 = gameData.impression[2];
  if (card.extraFlash === 1) {
    gameData.sysj[0] = 0.2 * (2 + shadowFlash + 2 * rcFlash + impSkill2);
  } else {
    gameData.sysj[0] = 0.2 * (1 + shadowFlash + rcFlash + impSkill2);
  }

  gameData.baofa[0] = 0.5 * gameData.impression[0] * (0.5 + gameData.passive[0] + gameData.passive[1] + gameData.passive[2] + 5 * gameData.passive[3]);

  /* baseXin：不含 burstBonus */
  var baseXin = [0, 0, 0, 0, 0, 0, 0, 0];
  baseXin[0] = (0.125 + gameData.passive[0]) * (1 + impSkill1 + heartEffect[0]);
  baseXin[1] = (0.025 + gameData.passive[3]) * (1 + impSkill1 + heartEffect[1]);
  baseXin[2] = (0.025 + gameData.passive[3]) * (1 + impSkill1 + heartEffect[2]);
  baseXin[3] = (0.125 + gameData.passive[1]) * (1 + impSkill1 + heartEffect[3]);
  baseXin[4] = (0.025 + gameData.passive[3]) * (1 + impSkill1 + heartEffect[4]);

  if (mode === "league") {
    baseXin[5] = (0.025 + gameData.passive[3]) * (1 + impSkill1 + heartEffect[5] - 0.714);
    baseXin[6] = (0.025 + gameData.passive[3]) * (1 + impSkill1 + heartEffect[6] - 0.714);
    baseXin[7] = (0.125 + gameData.passive[2]) * (1 + impSkill1 + heartEffect[7] - 0.714);
  } else {
    baseXin[5] = (0.025 + gameData.passive[3]) * (1 + impSkill1 + heartEffect[5]);
    baseXin[6] = (0.025 + gameData.passive[3]) * (1 + impSkill1 + heartEffect[6]);
    baseXin[7] = (0.125 + gameData.passive[2]) * (1 + impSkill1 + heartEffect[7]);
  }

  for (var i = 0; i < 8; i++) gameData.xin[i] = baseXin[i];

  var sum = 0;
  for (var i = 0; i < 8; i++) sum += gameData.xin[i];
  sum += gameData.yzzh[0] + gameData.sysj[0];
  if (mode === "heart") sum += gameData.baofa[0];

  /* stdBaseXin：含 burstBonus（标准模式用） */
  var stdBaseXin = [0,0,0,0,0,0,0,0];
  stdBaseXin[0] = (0.125 + gameData.passive[0]) * (1 + impSkill1 + heartEffect[0] + burstBonus[0]);
  stdBaseXin[1] = (0.025 + gameData.passive[3]) * (1 + impSkill1 + heartEffect[1] + burstBonus[1]);
  stdBaseXin[2] = (0.025 + gameData.passive[3]) * (1 + impSkill1 + heartEffect[2] + burstBonus[2]);
  stdBaseXin[3] = (0.125 + gameData.passive[1]) * (1 + impSkill1 + heartEffect[3] + burstBonus[3]);
  stdBaseXin[4] = (0.025 + gameData.passive[3]) * (1 + impSkill1 + heartEffect[4] + burstBonus[4]);
  stdBaseXin[5] = (0.025 + gameData.passive[3]) * (1 + impSkill1 + heartEffect[5] + burstBonus[5]);
  stdBaseXin[6] = (0.025 + gameData.passive[3]) * (1 + impSkill1 + heartEffect[6] + burstBonus[6]);
  stdBaseXin[7] = (0.125 + gameData.passive[2]) * (1 + impSkill1 + heartEffect[7] + burstBonus[7]);

  /* lgBaseXin：含 burstBonus + 联盟减益（联盟模式用） */
  var lgBaseXin5 = (0.025 + gameData.passive[3]) * (1 + impSkill1 + heartEffect[5] + burstBonus[5] - 0.714);
  var lgBaseXin6 = (0.025 + gameData.passive[3]) * (1 + impSkill1 + heartEffect[6] + burstBonus[6] - 0.714);
  var lgBaseXin7 = (0.125 + gameData.passive[2]) * (1 + impSkill1 + heartEffect[7] + burstBonus[7] - 0.714);

  var arenaSum = 0;
  for (var i = 0; i < 8; i++) arenaSum += stdBaseXin[i];
  arenaSum += gameData.yzzh[0] + gameData.sysj[0];

  var heartSum = arenaSum + gameData.baofa[0];

  var leagueSum = 0;
  for (var i = 0; i < 5; i++) leagueSum += stdBaseXin[i];
  leagueSum += lgBaseXin5 + lgBaseXin6 + lgBaseXin7;
  leagueSum += gameData.yzzh[0] + gameData.sysj[0];

  gameData.xinSum[0] = arenaSum;
  gameData.xinSum[1] = heartSum;
  gameData.xinSum[2] = leagueSum;

  var yh1 = parseInt(document.getElementById("pcYhjc1").value) || 0;
  var yh2 = parseInt(document.getElementById("pcYhjc2").value) || 0;
  gameData.yhjc[0] = Yhjc[yh1] + Yhjc[yh2];

  var totalEl = document.getElementById("pcTotal");
  var nailEl = document.getElementById("pcNail");
  DpScore[0] = totalEl ? (parseFloat(totalEl.value) || 0) : 0;
  Mjscore[0] = nailEl ? (parseFloat(nailEl.value) || 0) : 0;

  Score[0]  = Math.round(DpScore[0] * 3 * (1 + gameData.yhjc[0]));
  Score[1]  = Math.round(Score[0] * gameData.xin[0]);
  Score[2]  = Math.round(Score[0] * gameData.xin[1]);
  Score[3]  = Math.round(Score[0] * gameData.xin[2]);
  Score[4]  = Math.round(Score[0] * gameData.xin[3]);
  Score[5]  = Math.round(Score[0] * gameData.xin[4]);
  Score[6]  = Math.round(Score[0] * gameData.xin[5]);
  Score[7]  = Math.round(Score[0] * gameData.xin[6]);
  Score[8]  = Math.round(Score[0] * gameData.xin[7]);
  Score[9]  = Math.round(Score[0] * gameData.yzzh[0]);
  Score[10] = Math.round(Score[0] * gameData.sysj[0]);
  Score[11] = Math.round(Score[0] * gameData.baofa[0]);
  Score[12] = Math.round(Mjscore[0] * 1.05 * (1 + gameData.yhjc[0]));
  Score[13] = Math.round(DpScore[0] * baseXin[0])
            + Math.round(DpScore[0] * baseXin[1])
            + Math.round(DpScore[0] * baseXin[2])
            + Math.round(DpScore[0] * baseXin[3])
            + Math.round(DpScore[0] * baseXin[4])
            + Math.round(DpScore[0] * baseXin[5])
            + Math.round(DpScore[0] * baseXin[6])
            + Math.round(DpScore[0] * baseXin[7])
            + Math.round(DpScore[0] * gameData.yzzh[0])
            + Math.round(DpScore[0] * gameData.sysj[0]);
  Score[14] = Math.round((DpScore[0] + Score[13]) * (1 + gameData.yhjc[0]));

  if (mode === "heart") {
    Scoresum = Score[0]+Score[1]+Score[2]+Score[3]+Score[4]+Score[5]+Score[6]+Score[7]+Score[8]+Score[9]+Score[10]+Score[11]+Score[12];
  } else {
    Scoresum = Score[0]+Score[1]+Score[2]+Score[3]+Score[4]+Score[5]+Score[6]+Score[7]+Score[8]+Score[9]+Score[10]+Score[12];
  }

  /* 点灯得分 */
  Score[15] = Math.floor(Scoresum * 1.1);
}
