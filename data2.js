// ============ 共鸣组（按ID列表定义） ============
var resonanceGroups = [
  [1,2,3],       // 属于我的永夜I/II/III
  [4,5],         // 掌控未来I/II
  [6,7],         // 云间的隐士I/II
  [8,9],         // 分离与纠缠I/II
  [10,11],       // 千秋岁华I/II
  [12,13],       // 海市烟火·I/II
  [14,15],       // 日月同天·I/II
  [16,17],       // 寄意山河间+丹青应风月
  [19,20,21],    // 云端设计之辩I/II/III
  [26,27,28],    // 眼前的存在I/II/III
  [29,30,31],    // 无人编织童话I/II/III
  [32,33],       // 奇遇大自然I/II
  [34,35,36],    // 幕不落幕剧团I/II/III
  [37,38],       // 暖暖的世界I/II
  [40,41],       // 初心之愿I/II
  [42,43],       // 尘封的往昔I/II
  [44,45],       // 细嗅流年I/II
  [46,47],       // 星渚之望I/II
  [50,51,52],    // 科长的一天I/II/III
  [57,58,59],    // 佑果的旅程I/II/III
  [60,61,62],    // 失落的回忆I/II/III
  [63,64],       // 辉光之途I/II
  [65,66,67],    // 幕间十二月I/II/III
  [68,69],       // 世界里的暖暖I/II
  [76,77,78],    // 冬雪盛典I/II/III
  [79,80],       // 冬雪盛典IV/V
  [81,82],       // 墟空中的星芒I/II
  [85,86],       // 无限少女·I/II
  [95,96,97],    // 战争与热吻I/II/III
  [98,99],       // 天鹅的倒影I/II
  [100,101,102], // 未尽的乐章I/II/III
  [103,104],     // 晨昏交错之际I/II
  [112,113,114], // 不只做个英雄I/II/III
  [115,116,117], // 认知中的自己I/II/III
  [118,119],     // 猎鹰的勇者I/II
  [120,121,122], // 弑光者的独行I/II/III
  [123,124],     // 海哲的创业梦I/II
  [125,126],     // 夜骸的侍奉I/II
  [127,128],     // 启明的群星·I/II
  [129,130]      // 烬海蜉梦·I/II
];
var elegantImpressionData = [
  // ---- 闪耀 ----
  // 属于我的永夜
  { id:1, name:"属于我的永夜I", rare:"闪耀", attr:"典雅", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:941 ,maxPower:4483},
  { id:2, name:"属于我的永夜II", rare:"闪耀", attr:"典雅", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:941 ,maxPower:4485},
  { id:3, name:"属于我的永夜III", rare:"闪耀", attr:"典雅", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4489},
  // 掌控未来
  { id:4, name:"掌控未来I", rare:"闪耀", attr:"典雅", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:764 ,maxPower:4495},
  { id:5, name:"掌控未来II", rare:"闪耀", attr:"典雅", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:763 ,maxPower:4494},
  // 云间的隐士
  { id:6, name:"云间的隐士I", rare:"闪耀", attr:"典雅", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:763 ,maxPower:4489},
  { id:7, name:"云间的隐士II", rare:"闪耀", attr:"典雅", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:763 ,maxPower:4489},
  // ---- 非凡 ----
  // 分离与纠缠
  { id:8, name:"分离与纠缠I", rare:"非凡", attr:"典雅", type:"心技能", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:427 ,maxPower:2513},
  { id:9, name:"分离与纠缠II", rare:"非凡", attr:"典雅", type:"心技能", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:427 ,maxPower:2512},
  // 千秋岁华
  { id:10, name:"千秋岁华I", rare:"非凡", attr:"典雅", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  { id:11, name:"千秋岁华II", rare:"非凡", attr:"典雅", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  // 海市烟火
  { id:12, name:"海市烟火·I", rare:"非凡", attr:"典雅", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  { id:13, name:"海市烟火·II", rare:"非凡", attr:"典雅", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  // 日月同天
  { id:14, name:"日月同天·I", rare:"非凡", attr:"典雅", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  { id:15, name:"日月同天·II", rare:"非凡", attr:"典雅", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  // 按顺序配对可触发共鸣（必须寄意山河间在前、丹青应风月在后，否则不触发）
  { id:16, name:"寄意山河间", rare:"非凡", attr:"典雅", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  { id:17, name:"丹青应风月", rare:"非凡", attr:"典雅", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  // 倾心温特蒙（不可触发共鸣）
  { id:18, name:"倾心温特蒙", rare:"非凡", attr:"典雅", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:0 ,maxPower:2282},
  // ---- 稀有 ----
  // 云端设计之辩
  { id:19, name:"云端设计之辩I", rare:"稀有", attr:"典雅", type:"影召", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:300 ,maxPower:1433},
  { id:20, name:"云端设计之辩II", rare:"稀有", attr:"典雅", type:"心技能", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:299 ,maxPower:1425},
  { id:21, name:"云端设计之辩III", rare:"稀有", attr:"典雅", type:"心技能", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:299 ,maxPower:1426},
  // 繁花盛景（不可触发共鸣）
  { id:22, name:"繁花盛景", rare:"稀有", attr:"典雅", type:"心技能", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:0 ,maxPower:1425},
  // ---- 普通 ----
  { id:23, name:"洛洛梨的秘密", rare:"普通", attr:"典雅", type:"心技能", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1093},
  { id:24, name:"云端尚衣使系谱", rare:"普通", attr:"典雅", type:"心技能", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1098},
  { id:25, name:"古老的皇权", rare:"普通", attr:"典雅", type:"心技能", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1091},
  // ==================== 清新 印象 ====================
  // ---- 闪耀 ----
  { id:26, name:"眼前的存在I", rare:"闪耀", attr:"清新", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4488},
  { id:27, name:"眼前的存在II", rare:"闪耀", attr:"清新", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:944 ,maxPower:4496},
  { id:28, name:"眼前的存在III", rare:"闪耀", attr:"清新", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4488},
  { id:29, name:"无人编织童话I", rare:"闪耀", attr:"清新", type:"心技能", burstRate:0.25, skillOne:[0.158,0.225,0.27,0.315,0.338], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:944 ,maxPower:4496},
  { id:30, name:"无人编织童话II", rare:"闪耀", attr:"清新", type:"心技能", burstRate:0.25, skillOne:[0.158,0.225,0.27,0.315,0.338], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4488},
  { id:31, name:"无人编织童话III", rare:"闪耀", attr:"清新", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4489},
  { id:32, name:"奇遇大自然I", rare:"闪耀", attr:"清新", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:763 ,maxPower:4489},
  { id:33, name:"奇遇大自然II", rare:"闪耀", attr:"清新", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:763 ,maxPower:4489},
  { id:34, name:"幕不落幕剧团I", rare:"闪耀", attr:"清新", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:944 ,maxPower:4496},
  { id:35, name:"幕不落幕剧团II", rare:"闪耀", attr:"清新", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4488},
  { id:36, name:"幕不落幕剧团III", rare:"闪耀", attr:"清新", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4489},
  // ---- 非凡 ----
  { id:37, name:"暖暖的世界I", rare:"非凡", attr:"清新", type:"影召", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:427 ,maxPower:2514},
  { id:38, name:"暖暖的世界II", rare:"非凡", attr:"清新", type:"影召", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:426 ,maxPower:2511},
  { id:39, name:"过去的旅程", rare:"非凡", attr:"清新", type:"心技能", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:0 ,maxPower:2514},
  { id:40, name:"初心之愿 I", rare:"非凡", attr:"清新", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  { id:41, name:"初心之愿 II", rare:"非凡", attr:"清新", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  { id:42, name:"尘封的往昔I", rare:"非凡", attr:"清新", type:"心技能", burstRate:0.16, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:368 ,maxPower:2166},
  { id:43, name:"尘封的往昔II", rare:"非凡", attr:"清新", type:"心技能", burstRate:0.16, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:367 ,maxPower:2164},
  { id:44, name:"细嗅流年I", rare:"非凡", attr:"清新", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  { id:45, name:"细嗅流年II", rare:"非凡", attr:"清新", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  { id:46, name:"星渚之望I", rare:"非凡", attr:"清新", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  { id:47, name:"星渚之望II", rare:"非凡", attr:"清新", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  { id:48, name:"同行梦旅", rare:"非凡", attr:"清新", type:"影召", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:0 ,maxPower:2513},
  // ---- 稀有 ----
  { id:49, name:"爱衣的梦想", rare:"稀有", attr:"清新", type:"影召", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:0 ,maxPower:1425},
  { id:50, name:"科长的一天I", rare:"稀有", attr:"清新", type:"心技能", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:297 ,maxPower:1416},
  { id:51, name:"科长的一天II", rare:"稀有", attr:"清新", type:"心技能", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:300 ,maxPower:1430},
  { id:52, name:"科长的一天III", rare:"稀有", attr:"清新", type:"影召", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:300 ,maxPower:1429},
  { id:53, name:"院中四季", rare:"稀有", attr:"清新", type:"心技能", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:0 ,maxPower:1416},
  // ---- 普通 ----
  { id:54, name:"雪花与记忆", rare:"普通", attr:"清新", type:"心技能", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1093},
  { id:55, name:"初遇云端", rare:"普通", attr:"清新", type:"影召", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1092},
  { id:56, name:"与爱衣初次相会", rare:"普通", attr:"清新", type:"心技能", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1093},
  // ==================== 甜美 印象 ====================
  // ---- 闪耀 ----
  { id:57, name:"佑果的旅程I", rare:"闪耀", attr:"甜美", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:943 ,maxPower:4495},
  { id:58, name:"佑果的旅程II", rare:"闪耀", attr:"甜美", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4490},
  { id:59, name:"佑果的旅程III", rare:"闪耀", attr:"甜美", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4486},
  { id:60, name:"失落的回忆I", rare:"闪耀", attr:"甜美", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:965 ,maxPower:4599},
  { id:61, name:"失落的回忆II", rare:"闪耀", attr:"甜美", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:965 ,maxPower:4599},
  { id:62, name:"失落的回忆III", rare:"闪耀", attr:"甜美", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:965 ,maxPower:4599},
  { id:63, name:"辉光之途I", rare:"闪耀", attr:"甜美", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:763 ,maxPower:4489},
  { id:64, name:"辉光之途II", rare:"闪耀", attr:"甜美", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:763 ,maxPower:4489},
  { id:65, name:"幕间十二月I", rare:"闪耀", attr:"甜美", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4489},
  { id:66, name:"幕间十二月II", rare:"闪耀", attr:"甜美", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4489},
  { id:67, name:"幕间十二月III", rare:"闪耀", attr:"甜美", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4489},
  // ---- 非凡 ----
  { id:68, name:"世界里的暖暖I", rare:"非凡", attr:"甜美", type:"心技能", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:427 ,maxPower:2514},
  { id:69, name:"世界里的暖暖II", rare:"非凡", attr:"甜美", type:"影召", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:426 ,maxPower:2511},
  { id:70, name:"时光旅行", rare:"非凡", attr:"甜美", type:"影召", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:0 ,maxPower:2513},
  { id:71, name:"深渊与破晓", rare:"非凡", attr:"甜美", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:0 ,maxPower:2282},
  { id:72, name:"大喵的炸鸡桶", rare:"非凡", attr:"甜美", type:"影召", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:0 ,maxPower:2513},
  { id:73, name:"温暖滋味", rare:"非凡", attr:"甜美", type:"影召", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:0 ,maxPower:2513},
  { id:74, name:"璀璨心焰", rare:"非凡", attr:"甜美", type:"影召", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:0 ,maxPower:2513},
  { id:75, name:"圣诞双城记", rare:"非凡", attr:"甜美", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:0 ,maxPower:2282},
  { id:76, name:"冬雪盛典I", rare:"非凡", attr:"甜美", type:"心技能", burstRate:0.16, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:454 ,maxPower:2165},
  { id:77, name:"冬雪盛典II", rare:"非凡", attr:"甜美", type:"心技能", burstRate:0.16, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:454 ,maxPower:2163},
  { id:78, name:"冬雪盛典III", rare:"非凡", attr:"甜美", type:"心技能", burstRate:0.16, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:454 ,maxPower:2162},
  { id:79, name:"冬雪盛典IV", rare:"非凡", attr:"甜美", type:"心技能", burstRate:0.16, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:368 ,maxPower:2166},
  { id:80, name:"冬雪盛典V", rare:"非凡", attr:"甜美", type:"心技能", burstRate:0.16, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:367 ,maxPower:2164},
  { id:81, name:"墟空中的星芒I", rare:"非凡", attr:"甜美", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  { id:82, name:"墟空中的星芒II", rare:"非凡", attr:"甜美", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  { id:83, name:"暖梦融雪", rare:"非凡", attr:"甜美", type:"影召", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:0 ,maxPower:2513},
  { id:84, name:"花团心意", rare:"非凡", attr:"甜美", type:"影召", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:0 ,maxPower:2513},
  { id:85, name:"无限少女·I", rare:"非凡", attr:"甜美", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  { id:86, name:"无限少女·II", rare:"非凡", attr:"甜美", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:387 ,maxPower:2282},
  { id:87, name:"甜点时刻", rare:"非凡", attr:"甜美", type:"影召", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:0 ,maxPower:2513},
  // ---- 稀有 ----
  { id:88, name:"茶薄荷的房间", rare:"稀有", attr:"甜美", type:"影召", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:0 ,maxPower:1428},
  { id:89, name:"十平方青春", rare:"稀有", attr:"甜美", type:"心技能", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:0 ,maxPower:1428},
  { id:90, name:"变身魔镜", rare:"稀有", attr:"甜美", type:"影召", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:0 ,maxPower:1416},
  { id:91, name:"心境", rare:"稀有", attr:"甜美", type:"影召", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:0 ,maxPower:1433},
  // ---- 普通 ----
  { id:92, name:"被解构的爱情", rare:"普通", attr:"甜美", type:"心技能", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1095},
  { id:93, name:"点亮星空的魔法", rare:"普通", attr:"甜美", type:"影召", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1103},
  { id:94, name:"五花肉", rare:"普通", attr:"甜美", type:"心技能", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1093},
  // ==================== 性感 印象 ====================
  // ---- 闪耀 ----
  { id:95, name:"战争与热吻I", rare:"闪耀", attr:"性感", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4489},
  { id:96, name:"战争与热吻II", rare:"闪耀", attr:"性感", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4487},
  { id:97, name:"战争与热吻III", rare:"闪耀", attr:"性感", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4488},
  { id:98, name:"天鹅的倒影I", rare:"闪耀", attr:"性感", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:763 ,maxPower:4489},
  { id:99, name:"天鹅的倒影II", rare:"闪耀", attr:"性感", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:763 ,maxPower:4489},
  { id:100, name:"未尽的乐章I", rare:"闪耀", attr:"性感", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4489},
  { id:101, name:"未尽的乐章II", rare:"闪耀", attr:"性感", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4489},
  { id:102, name:"未尽的乐章III", rare:"闪耀", attr:"性感", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4489},
  // ---- 非凡 ----
  { id:103, name:"晨昏交错之际I", rare:"非凡", attr:"性感", type:"心技能", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:427 ,maxPower:2513},
  { id:104, name:"晨昏交错之际II", rare:"非凡", attr:"性感", type:"影召", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:427 ,maxPower:2513},
  // ---- 稀有 ----
  { id:105, name:"谁都可以性感", rare:"稀有", attr:"性感", type:"心技能", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:0 ,maxPower:1428},
  { id:106, name:"致命果实", rare:"稀有", attr:"性感", type:"心技能", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:0 ,maxPower:1420},
  { id:107, name:"脆弱之美", rare:"稀有", attr:"性感", type:"影召", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:0 ,maxPower:1416},
  { id:108, name:"灰暗记忆", rare:"稀有", attr:"性感", type:"心技能", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:0 ,maxPower:1429},
  // ---- 普通 ----
  { id:109, name:"断了跟的高跟鞋", rare:"普通", attr:"性感", type:"心技能", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1096},
  { id:110, name:"破碎的人偶", rare:"普通", attr:"性感", type:"心技能", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1102},
  { id:111, name:"夏日的街边火锅", rare:"普通", attr:"性感", type:"心技能", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1105},
  // ==================== 帅气 印象 ====================
  // ---- 闪耀 ----
  { id:112, name:"不只做个英雄I", rare:"闪耀", attr:"帅气", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:943 ,maxPower:4491},
  { id:113, name:"不只做个英雄II", rare:"闪耀", attr:"帅气", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:941 ,maxPower:4485},
  { id:114, name:"不只做个英雄III", rare:"闪耀", attr:"帅气", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:943 ,maxPower:4492},
  { id:115, name:"认知中的自己I", rare:"闪耀", attr:"帅气", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:944 ,maxPower:4496},
  { id:116, name:"认知中的自己II", rare:"闪耀", attr:"帅气", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4488},
  { id:117, name:"认知中的自己III", rare:"闪耀", attr:"帅气", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:944 ,maxPower:4496},
  { id:118, name:"猎鹰的勇者I", rare:"闪耀", attr:"帅气", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:763 ,maxPower:4489},
  { id:119, name:"猎鹰的勇者II", rare:"闪耀", attr:"帅气", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:763 ,maxPower:4489},
  { id:120, name:"弑光者的独行I", rare:"闪耀", attr:"帅气", type:"影召", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4489},
  { id:121, name:"弑光者的独行II", rare:"闪耀", attr:"帅气", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4489},
  { id:122, name:"弑光者的独行III", rare:"闪耀", attr:"帅气", type:"心技能", burstRate:0.25, skillOne:[0.175,0.25,0.3,0.35,0.375], skillTwo:[0.3,0.35,0.4,0.45,0.5], resonance:942 ,maxPower:4489},
  // ---- 非凡 ----
  { id:123, name:"海哲的创业梦I", rare:"非凡", attr:"帅气", type:"心技能", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:427 ,maxPower:2514},
  { id:124, name:"海哲的创业梦II", rare:"非凡", attr:"帅气", type:"心技能", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:427 ,maxPower:2514},
  { id:125, name:"夜骸的侍奉I", rare:"非凡", attr:"帅气", type:"心技能", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:427 ,maxPower:2514},
  { id:126, name:"夜骸的侍奉II", rare:"非凡", attr:"帅气", type:"影召", burstRate:0.20, skillOne:[0.14,0.2,0.24,0.28,0.3], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:427 ,maxPower:2512},
  { id:127, name:"启明的群星·I", rare:"非凡", attr:"帅气", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:392 ,maxPower:2310},
  { id:128, name:"启明的群星·II", rare:"非凡", attr:"帅气", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:392 ,maxPower:2310},
  { id:129, name:"烬海蜉梦·I", rare:"非凡", attr:"帅气", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:392 ,maxPower:2310},
  { id:130, name:"烬海蜉梦·II", rare:"非凡", attr:"帅气", type:"心技能", burstRate:0.18, skillOne:[0.126,0.18,0.216,0.252,0.27], skillTwo:[0.06,0.07,0.08,0.09,0.1], resonance:392 ,maxPower:2310},
  // ---- 稀有 ----
  { id:131, name:"荒原派对", rare:"稀有", attr:"帅气", type:"心技能", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:0 ,maxPower:1421},
  { id:132, name:"午夜街头I", rare:"稀有", attr:"帅气", type:"心技能", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:242 ,maxPower:1424},
  { id:133, name:"午夜街头II", rare:"稀有", attr:"帅气", type:"影召", burstRate:0.16, skillOne:[0.112,0.16,0.192,0.224,0.24], skillTwo:0, resonance:241 ,maxPower:1420},
  // ---- 普通 ----
  { id:134, name:"断裂时空", rare:"普通", attr:"帅气", type:"影召", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1094},
  { id:135, name:"童话演奏家", rare:"普通", attr:"帅气", type:"心技能", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1092},
  { id:136, name:"蒙尘勋章", rare:"普通", attr:"帅气", type:"心技能", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1103},
  { id:137, name:"海豹自杀日记", rare:"普通", attr:"帅气", type:"心技能", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1104},
  { id:138, name:"凶手就是她", rare:"普通", attr:"帅气", type:"心技能", burstRate:0.10, skillOne:[0.07,0.10,0.12,0.14,0.15], skillTwo:0, resonance:0 ,maxPower:1101}
];
