// ============================================================
// data3.js —— 忆海收集统计（数据源，多期并存）
// 供 index5.html 渲染使用；累计积分由页面自动累计
// 列结构：版本数 | 套装名称 | 稀有度 | 类别(新/复) | (版本配置) | 部件数量 | 套装积分 | 累计积分 | 开始日期 | 结束日期 | 持续天数
//   · 类别列（新/复）与版本配置列：同版本内连续相同值自动合并单元格
//   · 累计积分/开始日期：同版本内按「开始日期组」合并（个别套装另开一组时拆分）
//   · 结束日期/持续天数：同组内个别套装截止日不同时拆分显示
//   · 套装可覆盖 start/end/days（省略则继承版本值）
// 整理：萝莉甜的闪暖日记
// ============================================================
var MH_SETS = [
  {
    title: '忆海收集第十八期统计',
    subtitle: '活动时间：2026年4月29日-2026年8月5日，共98天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2026年4月29日', end: '2026年5月14日', days: 16,
        suits: [
          { name: '涉过虚妄月光', rarity: '闪耀', status: '新', category: '单闪\n单非凡', parts: 16, points: 960 },
          { name: '雨幕安魂曲', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 9, points: 380 },
          { name: '绒白怦然', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260 },
          { name: '灯蛾小夜曲', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 }
        ]
      },
      {
        id: 2, start: '2026年5月15日', end: '2026年5月27日', days: 13,
        suits: [
          { name: '心意花笺', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85 }
        ]
      },
      {
        id: 3, start: '2026年5月28日', end: '2026年6月10日', days: 14,
        suits: [
          { name: '翡梦之春', rarity: '闪·斓', status: '新', category: '单闪', parts: 15, points: 920 },
          { name: '点滴疗愈', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '纸筑漫想', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85 }
        ]
      },
      {
        id: 4, start: '2026年6月11日', end: '2026年6月24日', days: 14,
        suits: [
          { name: '浮光中织吻', rarity: '闪耀', status: '复', category: '双闪', parts: 16, points: 960 },
          { name: '幽蓝中沉睡', rarity: '闪耀', status: '复', category: '双闪', parts: 15, points: 920 },
          { name: '魅影妖花', rarity: '非凡', status: '复', category: '累充', parts: 9, points: 380 },
          { name: '艾虎巡山', rarity: '非凡', status: '新', category: '免活', parts: 7, points: 240 },
          { name: '逢考必过', rarity: '非凡', status: '新', category: '联动免活', parts: 6, points: 220 }
        ]
      },
      {
        id: 5, start: '2026年6月25日', end: '2026年7月6日', days: 12,
        suits: [
          { name: '狩月的弦歌', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 14, points: 380 },
          { name: '翩跹的诗集', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 15, points: 400 },
          { name: '童梦玩偶伞', rarity: '稀有', status: '新', category: '联动累充', parts: 7, points: 85 },
          { name: '蓝调奶油派', rarity: '稀有', status: '新', category: '联动免活', parts: 8, points: 90 }
        ]
      },
      {
        id: 6, start: '2026年7月9日', end: '2026年7月16日', days: 8,
        suits: [
          { name: '金砂琥珀', rarity: '非凡', status: '新', category: '单非凡', parts: 10, points: 400 },
          { name: '霞落云天', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 260 },
          { name: '闲梦春山', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 260 },
          { name: '芝心奇缘', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2026年7月22日', days: 14 },
          { name: '烟雨同舟渡', rarity: '闪耀', status: '复', category: '联动免活', parts: 14, points: 760, end: '2026年8月4日', days: 27 },
          { name: '暇日柔波', rarity: '非凡', status: '复', category: '双非凡', parts: 9, points: 380, start: '2026年7月17日', end: '2026年7月22日', days: 6 },
          { name: '炽羽星途', rarity: '非凡', status: '复', category: '双非凡', parts: 9, points: 380, start: '2026年7月17日', end: '2026年7月22日', days: 6 },
          { name: '绯夜沙龙', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105, start: '2026年7月17日', end: '2026年7月22日', days: 6 }
        ]
      },
      {
        id: 7, start: '2026年7月23日', end: '2026年8月4日', days: 13,
        suits: [
          { name: '不知者的溟海', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '晴漪雨季', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第十九期统计',
    subtitle: '活动时间：2026年8月5日-2027年1月28日，共177天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2026年8月5日', end: '2026年8月19日', days: 15,
        suits: [
          { name: '荒芜恩典', rarity: '闪耀', status: '新', category: '双闪', parts: 17, points: 1000 },
          { name: '虹色诗', rarity: '闪耀', status: '新', category: '双闪', parts: 16, points: 960 },
          { name: '纯白的诞生', rarity: '新启', status: '新', category: '免活', parts: 3, points: 320 },
          { name: '星夜童话', rarity: '闪耀', status: '新', category: '免活', parts: 9, points: 560 },
          { name: '守护者的心旅', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 380 },
          { name: '灯下蔷薇眠', rarity: '非凡', status: '新', category: '累充', parts: 10, points: 300 },
          { name: '灯下玫瑰梦', rarity: '非凡', status: '新', category: '累充', parts: 10, points: 300 }
        ]
      },
      {
        id: 2, start: '2026年8月20日', end: '2026年9月2日', days: 14,
        suits: [
          { name: '欲照此身焰', rarity: '闪耀', status: '复', category: '单闪\n单非凡', parts: 16, points: 960 },
          { name: '熠熠花鼓', rarity: '非凡', status: '复', category: '单闪\n单非凡', parts: 10, points: 400 },
          { name: '南客隐翠', rarity: '非凡', status: '复', category: '累充', parts: 9, points: 380 },
          { name: '花馔盈香', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85 }
        ]
      },
      {
        id: 3, start: '2026年9月3日', end: '2026年9月13日', days: 11,
        suits: [
          { name: '山有灵兮', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '素衣问剑', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '锦愿长明', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '百草识香', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2026年9月21日', days: 19 }
        ]
      },
      {
        id: 4, start: '2026年9月22日', end: '2026年10月8日', days: 17,
        suits: [
          { name: '琼华身在水', rarity: '闪耀', status: '新', category: '单闪\n单非凡', parts: 16, points: 960 },
          { name: '墨卷兰芳', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 10, points: 400 },
          { name: '蝶月相逢', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260 },
          { name: '蝶月清辉', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260 },
          { name: '瓶中照影', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 }
        ]
      },
      {
        id: 5, start: '2026年10月9日', end: '2026年10月21日', days: 13,
        suits: [
          { name: '罪之花', rarity: '闪瑰', status: '复', category: '单闪', parts: 16, points: 960 },
          { name: '晴日蔷薇园', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105 },
          { name: '永夜的眷属', rarity: '非凡', status: '复', category: '赠礼', parts: 9, points: 380 },
          { name: '湘水遥心', rarity: '闪耀', status: '新', category: '联动免活', parts: 15, points: 800, end: '2026年11月4日', days: 27 }
        ]
      },
      {
        id: 6, start: '2026年10月22日', end: '2026年11月4日', days: 14,
        suits: [
          { name: '麟影入泉台', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 15, points: 400 },
          { name: '霞染万壑声', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 14, points: 380 },
          { name: '珠雨流霖', rarity: '稀有', status: '新', category: '联动累充', parts: 7, points: 85 },
          { name: '蘑幻绮境', rarity: '稀有', status: '新', category: '联动免活', parts: 8, points: 90 }
        ]
      },
       {
        id: 7, start: '2026年11月5日', end: '2026年11月18日', days: 14,
        suits: [
          { name: '献予荆棘之心', rarity: '闪萦', status: '新', category: '单闪\n单非凡', parts: 15, points: 920 },
          { name: '一笼困心', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 9, points: 380 },
          { name: '绮夜万术', rarity: '非凡', status: '新', category: '新意节', parts: 8, points: 260 },
          { name: '夜吻小恶魔', rarity: '稀有', status: '新', category: '累充', parts: 7, points: 100 },
          { name: '绯红的终舞', rarity: '稀有', status: '新', category: '联动免活', parts: 8, points: 90 }
        ]
      }
    ]
  }
];
// 当前显示期数（index5.html 可切换）
var MH_DATA = MH_SETS[0];
