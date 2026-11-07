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
    title: '忆海收集第一期统计',
    subtitle: '活动时间：2021年1月7日-2021年4月7日，共91天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2021年1月7日', end: '2021年1月13日', days: 7,
        suits: [
          { name: '安努瓦之灵', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '黑莓物语', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, start: '2021年1月14日', end: '2021年1月20日' },
          { name: '绒兔星球', rarity: '非凡', status: '复', category: '单非凡', parts: 10, points: 400, start: '2021年1月14日', end: '2021年1月20日' }
        ]
      },
      {
        id: 2, start: '2021年1月21日', end: '2021年1月27日', days: 7,
        suits: [
          { name: '燃金时代', rarity: '非凡', status: '新', category: '单非凡', parts: 10, points: 400 },
          { name: '定格瞬间', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2021年1月29日', days: 9 }
        ]
      },
      {
        id: 3, start: '2021年2月4日', end: '2021年2月17日', days: 14,
        suits: [
          { name: '乾乾之吟天', rarity: '闪耀', status: '新', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '昭昭之栖梧', rarity: '闪耀', status: '新', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '新梅初绽', rarity: '非凡', status: '新', category: '双闪\n单非凡', parts: 8, points: 360 },
          { name: '新燕啄春', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 380 },
          { name: '新春融融', rarity: '非凡', status: '新', category: '免活', parts: 7, points: 240 },
          { name: '新意融融', rarity: '非凡', status: '新', category: '免活', parts: 7, points: 240 },
          { name: '命运玫瑰', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, start: '2021年2月14日', end: '2021年2月23日', days: 10 }
        ]
      },
      {
        id: 4, start: '2021年2月25日', end: '2021年3月3日', days: 7,
        suits: [
          { name: '白昼轻语', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '黎光序曲', rarity: '非凡', status: '复', category: '单非凡', parts: 9, points: 380, start: '2021年3月4日', end: '2021年3月10日' },
          { name: '云间千纸', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105, start: '2021年3月4日', end: '2021年3月10日' },
          { name: '粉桃新宵', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2021年3月7日', days: 11 }
        ]
      },
      {
        id: 5, start: '2021年3月11日', end: '2021年3月18日', days: 8,
        suits: [
          { name: '甜梦摇篮曲', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '星星变奏曲', rarity: '非凡', status: '新', category: '双非凡', parts: 8, points: 360 },
          { name: '茉莉初蕊', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '奏鸣随想', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85 },
          { name: '夜莺与晨雾', rarity: '非凡', status: '复', category: '单非凡', parts: 8, points: 360, start: '2021年3月19日', end: '2021年3月24日', days: 6 }
        ]
      },
      {
        id: 6, start: '2021年3月25日', end: '2021年4月1日', days: 8,
        suits: [
          { name: '小丑的问好', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '疾光兔', rarity: '非凡', status: '复', category: '单非凡', parts: 7, points: 340, start: '2021年4月2日', end: '2021年4月7日', days: 6 },
          { name: '春水碧', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, start: '2021年3月27日', end: '2021年4月5日', days: 10 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第二期统计',
    subtitle: '活动时间：2021年4月8日-2021年7月14日，共98天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2021年4月8日', end: '2021年4月14日', days: 7,
        suits: [
          { name: '晚笙曲', rarity: '非凡', status: '新', category: '单非凡', parts: 10, points: 400 },
          { name: '花间馥梦', rarity: '非凡', status: '复', category: '单非凡', parts: 8, points: 360, start: '2021年4月15日', end: '2021年4月21日' },
          { name: '金色约定', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, end: '2021年4月18日', days: 11 }
        ]
      },
      {
        id: 2, start: '2021年4月22日', end: '2021年5月5日', days: 14,
        suits: [
          { name: '冰雪召唤', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 9, points: 280 },
          { name: '冰雪魔法', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 9, points: 280 },
          { name: '青罗森', rarity: '稀有', status: '新', category: '累充', parts: 6, points: 95 },
          { name: '诗意致礼', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2021年5月6日', days: 15 }
        ]
      },
      {
        id: 3, start: '2021年5月9日', end: '2021年5月15日', days: 7,
        suits: [
          { name: '月下守望者', rarity: '非凡', status: '复', category: '单非凡', parts: 10, points: 400 },
          { name: '新次元特工', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, end: '2021年5月17日', days: 9 }
        ]
      },
      {
        id: 4, start: '2021年5月18日', end: '2021年5月29日', days: 12,
        suits: [
          { name: '虹穹之泪', rarity: '闪耀', status: '新', category: '单闪\n单非凡', parts: 14, points: 880 },
          { name: '遥夜与泪光', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 8, points: 360 },
          { name: '霓光泡泡', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '童心发明', rarity: '稀有', status: '新', category: '免活', parts: 9, points: 95, start: '2021年5月22日', end: '2021年6月2日' }
        ]
      },
      {
        id: 5, start: '2021年6月3日', end: '2021年6月9日', days: 7,
        suits: [
          { name: '汐海聆音', rarity: '非凡', status: '复', category: '单非凡', parts: 10, points: 400 },
          { name: '夜之芒', rarity: '非凡', status: '新', category: '单非凡', parts: 10, points: 400, start: '2021年6月10日', end: '2021年6月16日' },
          { name: '竹苑赏夏', rarity: '非凡', status: '新', category: '免活', parts: 9, points: 280, start: '2021年6月5日', end: '2021年6月16日', days: 12 }
        ]
      },
      {
        id: 6, start: '2021年6月17日', end: '2021年6月29日', days: 13,
        suits: [
          { name: '不渝今生', rarity: '闪耀', status: '复', category: '双闪', parts: 15, points: 920 },
          { name: '赤霞鸾歌', rarity: '闪耀', status: '复', category: '双闪', parts: 15, points: 920 },
          { name: '浪漫巡礼', rarity: '非凡', status: '复', category: '累充', parts: 8, points: 360 },
          { name: '旷野旅人', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2021年6月28日', days: 12 }
        ]
      },
      {
        id: 7, start: '2021年7月2日', end: '2021年7月8日', days: 7,
        suits: [
          { name: '无月之夜', rarity: '非凡', status: '新', category: '星钻包', parts: 10, points: 300 },
          { name: '灼眼的薄暮', rarity: '非凡', status: '复', category: '单非凡', parts: 10, points: 400, start: '2021年7月9日', end: '2021年7月14日', days: 6 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第三期统计',
    subtitle: '活动时间：2021年7月15日-2021年9月23日，共71天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2021年7月15日', end: '2021年7月21日', days: 7,
        suits: [
          { name: '炫音虚幻夜', rarity: '非凡', status: '新', category: '单非凡', parts: 8, points: 360 },
          { name: '安努瓦之灵', rarity: '非凡', status: '复', category: '单非凡', parts: 9, points: 380, start: '2021年7月22日', end: '2021年7月28日' },
          { name: '沉落光羽', rarity: '非凡', status: '新', category: '累消', parts: 8, points: 260, end: '2021年8月2日', days: 19 },
          { name: '果果童趣', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2021年7月28日', days: 14 }
        ]
      },
      {
        id: 2, start: '2021年8月3日', end: '2021年8月16日', days: 14,
        suits: [
          { name: '遗落潮汐', rarity: '闪耀', status: '新', category: '双闪', parts: 14, points: 880 },
          { name: '朝焰初临', rarity: '闪耀', status: '新', category: '双闪', parts: 15, points: 920 },
          { name: '吟游诗章', rarity: '闪耀', status: '新', category: '免活', parts: 9, points: 560 },
          { name: '雾隐之息', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 360 },
          { name: '鹊桥千声', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260 }
        ]
      },
      {
        id: 3, start: '2021年8月17日', end: '2021年8月23日', days: 7,
        suits: [
          { name: '燃金时代', rarity: '非凡', status: '复', category: '单非凡', parts: 10, points: 400 },
          { name: '花羽轻翼', rarity: '非凡', status: '复', category: '星钻包', parts: 8, points: 260, start: '2021年8月24日', end: '2021年8月30日' },
          { name: '云霭轻羽', rarity: '非凡', status: '新', category: '星钻包', parts: 8, points: 260, start: '2021年8月24日', end: '2021年8月30日' }
        ]
      },
      {
        id: 4, start: '2021年9月2日', end: '2021年9月13日', days: 12,
        suits: [
          { name: '纯真挚梦', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 12, points: 340 },
          { name: '真爱旋舞', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 11, points: 320 },
          { name: '绘梦信使', rarity: '稀有', status: '新', category: '累充', parts: 7, points: 100 },
          { name: '逐浪轻歌', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2021年9月12日', days: 11 }
        ]
      },
      {
        id: 5, start: '2021年9月14日', end: '2021年9月20日', days: 7,
        suits: [
          { name: '白昼轻语', rarity: '非凡', status: '复', category: '单非凡', parts: 9, points: 380 },
          { name: '灯月人间', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2021年9月23日', days: 10 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第四期统计',
    subtitle: '活动时间：2021年9月24日-2022年1月23日，共122天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2021年9月24日', end: '2021年10月7日', days: 14,
        suits: [
          { name: '飞羽映琳琅', rarity: '闪耀', status: '新', category: '单闪\n单非凡', parts: 15, points: 920 },
          { name: '灯华夜锦', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 10, points: 400 },
          { name: '云山弈', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '云锦端仪', rarity: '闪耀', status: '新', category: '联动\n免活', parts: 14, points: 760, end: '2021年10月27日', days: 34 },
          { name: '云锦宁仪', rarity: '闪耀', status: '新', category: '联动\n免活', parts: 9, points: 560, end: '2021年10月27日', days: 34 }
        ]
      },
      {
        id: 2, start: '2021年10月14日', end: '2021年10月21日', days: 8,
        suits: [
          { name: '甜梦摇篮曲', rarity: '非凡', status: '复', category: '双非凡', parts: 10, points: 400 },
          { name: '星星变奏曲', rarity: '非凡', status: '复', category: '双非凡', parts: 8, points: 360 },
          { name: '茉莉初蕊', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105 },
          { name: '奏鸣随想', rarity: '稀有', status: '复', category: '免活', parts: 7, points: 85 },
          { name: '早安小厨娘', rarity: '稀有', status: '复', category: '累充', parts: 9, points: 110, start: '2021年10月22日', end: '2021年10月27日', days: 6 },
          { name: '汪汪派对', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, end: '2021年10月24日', days: 11 }
        ]
      },
      {
        id: 3, start: '2021年10月28日', end: '2021年11月6日', days: 10,
        suits: [
          { name: '古灵猫', rarity: '非凡', status: '新', category: '双非凡', parts: 8, points: 360 },
          { name: '白夜缚灵', rarity: '非凡', status: '新', category: '双非凡', parts: 8, points: 360 },
          { name: '甜蜜疗愈', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '酒心迷情', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2021年11月8日', days: 12 },
          { name: '小丑的问好', rarity: '非凡', status: '复', category: '单非凡', parts: 9, points: 380, start: '2021年11月8日', end: '2021年11月14日', days: 7 },
          { name: '金灿星雪', rarity: '非凡', status: '新', category: '新意节', parts: 10, points: 300, start: '2021年11月8日', end: '2021年11月14日', days: 7 }
        ]
      },
      {
        id: 4, start: '2021年11月15日', end: '2021年11月22日', days: 8,
        suits: [
          { name: '薰梦花漾', rarity: '非凡', status: '新', category: '单非凡', parts: 10, points: 400 },
          { name: '轻聆风雨', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, start: '2021年11月10日', end: '2021年11月24日', days: 15 }
        ]
      },
      {
        id: 5, start: '2021年11月25日', end: '2021年12月7日', days: 13,
        suits: [
          { name: '无烬之羽', rarity: '闪耀', status: '复', category: '双闪', parts: 15, points: 920 },
          { name: '郁梦伊始', rarity: '闪耀', status: '复', category: '双闪', parts: 14, points: 880 },
          { name: '曙光凯旋', rarity: '非凡', status: '复', category: '累充', parts: 8, points: 360 },
          { name: '加冕之路', rarity: '闪耀', status: '复', category: '免活', parts: 9, points: 560 },
          { name: '秋寒枫韵', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2021年12月6日', days: 12 },
          { name: '心焰暖梦', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 360, start: '2021年12月5日', end: '2021年12月12日', days: 8 }
        ]
      },
      {
        id: 6, start: '2021年12月8日', end: '2021年12月14日', days: 7,
        suits: [
          { name: '星罗遥域', rarity: '非凡', status: '新', category: '单非凡', parts: 10, points: 400 },
          { name: '晚笙曲', rarity: '非凡', status: '复', category: '单非凡', parts: 10, points: 400, start: '2021年12月15日', end: '2021年12月20日', days: 6 },
          { name: '黑白潮纹', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2021年12月19日', days: 12 }
        ]
      },
      {
        id: 7, start: '2021年12月21日', end: '2022年1月3日', days: 14,
        suits: [
          { name: '献给莉莉斯', rarity: '闪耀', status: '新', category: '单闪\n单非凡', parts: 14, points: 880 },
          { name: '早安，女王', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 8, points: 360 },
          { name: '暖冬愿曲', rarity: '稀有', status: '新', category: '累充', parts: 7, points: 100 },
          { name: '团团如意', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2022年1月5日', days: 16 }
        ]
      },
      {
        id: 8, start: '2022年1月6日', end: '2022年1月12日', days: 7,
        suits: [
          { name: '夜之芒', rarity: '非凡', status: '复', category: '单非凡', parts: 10, points: 400 },
          { name: '青罗森', rarity: '稀有', status: '累充', category: '累充', parts: 6, points: 95, start: '2022年1月13日', end: '2022年1月19日' }
        ]
      }
    ]
  },
  {
    title: '忆海收集第五期统计',
    subtitle: '活动时间：2022年1月24日-2022年6月15日，共143天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2022年1月24日', end: '2022年2月6日', days: 14,
        suits: [
          { name: '煊煊瑞虎威', rarity: '闪耀', status: '新', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '一梦昙华', rarity: '闪耀', status: '新', category: '双闪\n单非凡', parts: 14, points: 880 },
          { name: '红尘漫卷', rarity: '非凡', status: '新', category: '双闪\n单非凡', parts: 8, points: 360 },
          { name: '鱼跃新岁', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 360 },
          { name: '瑞兽祈祥运', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260 },
          { name: '吉兽送春抱', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260 }
        ]
      },
      {
        id: 2, start: '2022年2月10日', end: '2022年2月16日', days: 7,
        suits: [
          { name: '青葱的恋曲', rarity: '非凡', status: '新', category: '单非凡', parts: 8, points: 360 },
          { name: '千秋锦丽', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2022年2月23日', days: 14 },
          { name: '炫音虚幻夜', rarity: '非凡', status: '复', category: '单非凡', parts: 8, points: 360, start: '2022年2月17日', end: '2022年2月23日' }
        ]
      },
      {
        id: 3, start: '2022年2月24日', end: '2022年3月6日', days: 11,
        suits: [
          { name: '音之旋舞', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '月咏弦歌', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '春颂', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '幽花夜语', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      },
      {
        id: 4, start: '2022年3月10日', end: '2022年3月16日', days: 7,
        suits: [
          { name: '萌波星旅', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '樱桃奶球', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, end: '2022年3月23日', days: 14 },
          { name: '江畔花火', rarity: '非凡', status: '复', category: '单非凡', parts: 8, points: 360, start: '2022年3月17日', end: '2022年3月23日' }
        ]
      },
      {
        id: 5, start: '2022年3月24日', end: '2022年4月4日', days: 12,
        suits: [
          { name: '燃情灯宴', rarity: '闪耀', status: '复', category: '双闪', parts: 15, points: 920 },
          { name: '纯白谧境', rarity: '闪耀', status: '复', category: '双闪', parts: 15, points: 920 },
          { name: '雪鹿响叮当', rarity: '非凡', status: '复', category: '累充', parts: 9, points: 380 },
          { name: '圣诞学院', rarity: '稀有', status: '复', category: '免活', parts: 8, points: 90 },
          { name: '软泥燕柳', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2022年4月6日', days: 14 }
        ]
      },
      {
        id: 6, start: '2022年4月7日', end: '2022年4月13日', days: 7,
        suits: [
          { name: '春鸢烟柳', rarity: '非凡', status: '新', category: '单非凡', parts: 8, points: 360 },
          { name: '喵咪校园', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2022年4月18日', days: 12 }
        ]
      },
      {
        id: 7, start: '2022年4月19日', end: '2022年4月26日', days: 8,
        suits: [
          { name: '爱丽丝的茶匙', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '柴郡猫的巡礼', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '白兔迷踪', rarity: '稀有', status: '新', category: '累充', parts: 7, points: 100 },
          { name: '商谈法则', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2022年5月1日', days: 13 },
          { name: '卿霄落月', rarity: '闪耀', status: '复', category: '单闪\n单非凡', parts: 15, points: 920, start: '2022年4月27日', end: '2022年5月5日', days: 9 },
          { name: '月露生香', rarity: '非凡', status: '复', category: '单闪\n单非凡', parts: 8, points: 360, start: '2022年4月27日', end: '2022年5月5日', days: 9 },
          { name: '秋风清', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105, start: '2022年4月27日', end: '2022年5月5日', days: 9 }
        ]
      },
      {
        id: 8, start: '2022年5月6日', end: '2022年5月12日', days: 7,
        suits: [
          { name: '叶叶金铃', rarity: '非凡', status: '新', category: '新阁', parts: 10, points: 400 },
          { name: '甜樱蜜语', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2022年5月17日', days: 12 }
        ]
      },
      {
        id: 9, start: '2022年5月18日', end: '2022年5月29日', days: 12,
        suits: [
          { name: '玫瑰倾颓之夜', rarity: '闪耀', status: '新', category: '双闪', parts: 15, points: 920 },
          { name: '苍月萦梦之誓', rarity: '闪耀', status: '新', category: '双闪', parts: 14, points: 880 },
          { name: '盈枝华筵', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 360 },
          { name: '礼夜诗章', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2022年6月1日', days: 15 }
        ]
      },
      {
        id: 10, start: '2022年6月2日', end: '2022年6月8日', days: 7,
        suits: [
          { name: '星罗遥域', rarity: '非凡', status: '复', category: '单非凡', parts: 10, points: 400 },
          { name: '小楼闲碧', rarity: '非凡', status: '新', category: '免活', parts: 7, points: 240, end: '2022年6月15日', days: 14 },
          { name: '烟容曳影', rarity: '非凡', status: '新', category: '单非凡', parts: 8, points: 360, start: '2022年6月9日', end: '2022年6月15日' }
        ]
      }
    ]
  },
  {
    title: '忆海收集第六期统计',
    subtitle: '活动时间：2022年6月16日-2022年9月27日，共103天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2022年6月16日', end: '2022年6月29日', days: 14,
        suits: [
          { name: '乾乾之吟天', rarity: '闪耀', status: '复', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '昭昭之栖梧', rarity: '闪耀', status: '复', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '新梅初绽', rarity: '非凡', status: '复', category: '双闪\n单非凡', parts: 8, points: 360 },
          { name: '新燕啄春', rarity: '非凡', status: '复', category: '累充', parts: 9, points: 380 },
          { name: '新春融融', rarity: '非凡', status: '复', category: '免活', parts: 7, points: 240 },
          { name: '新意融融', rarity: '非凡', status: '复', category: '免活', parts: 7, points: 240 }
        ]
      },
      {
        id: 2, start: '2022年6月30日', end: '2022年7月10日', days: 11,
        suits: [
          { name: '半夏青柠', rarity: '非凡', status: '新', category: '双非凡', parts: 8, points: 360 },
          { name: '悠弦海风', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '浪花遐思', rarity: '稀有', status: '新', category: '累充', parts: 7, points: 100 },
          { name: '盛夏逐星', rarity: '非凡', status: '新', category: '累充', parts: 10, points: 400 },
          { name: '浅浪之歌', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, end: '2022年7月13日', days: 14 }
        ]
      },
      {
        id: 3, start: '2022年7月14日', end: '2022年7月24日', days: 11,
        suits: [
          { name: '古灵猫', rarity: '非凡', status: '复', category: '双非凡', parts: 8, points: 360 },
          { name: '白夜缚灵', rarity: '非凡', status: '复', category: '双非凡', parts: 8, points: 360 },
          { name: '甜蜜疗愈', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105 }
        ]
      },
      {
        id: 4, start: '2022年8月3日', end: '2022年8月16日', days: 14,
        suits: [
          { name: '星之引', rarity: '闪耀', status: '新', category: '双闪', parts: 17, points: 1000 },
          { name: '无垠之星', rarity: '闪耀', status: '新', category: '双闪', parts: 15, points: 920 },
          { name: '未来坐标', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 380 },
          { name: '星域使者', rarity: '闪耀', status: '新', category: '免活', parts: 9, points: 560 },
          { name: '晚月夜香', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2022年8月17日', days: 15 }
        ]
      },
      {
        id: 5, start: '2022年8月18日', end: '2022年8月26日', days: 9,
        suits: [
          { name: '晴夏海风', rarity: '非凡', status: '复', category: '双非凡', parts: 11, points: 420 },
          { name: '极夜破晓', rarity: '非凡', status: '复', category: '双非凡', parts: 7, points: 340 },
          { name: '书香英华', rarity: '闪耀', status: '新', category: '联动\n免活', parts: 12, points: 680, end: '2022年8月31日', days: 14 }
        ]
      },
      {
        id: 6, start: '2022年9月1日', end: '2022年9月12日', days: 12,
        suits: [
          { name: '星彩大耳狗', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 14, points: 380 },
          { name: '甜莓美乐蒂', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 15, points: 400 },
          { name: '草莓之戟', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '霄汉秋星', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2022年9月20日', days: 20 },
          { name: '云汉秋星', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2022年9月20日', days: 20 }
        ]
      },
      {
        id: 7, start: '2022年9月15日', end: '2022年9月24日', days: 10,
        suits: [
          { name: '音之旋舞', rarity: '非凡', status: '复', category: '双非凡', parts: 10, points: 400 },
          { name: '月咏弦歌', rarity: '非凡', status: '复', category: '双非凡', parts: 10, points: 400 },
          { name: '春颂', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第七期统计',
    subtitle: '活动时间：2022年9月27日-2023年1月16日，共112天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2022年9月27日', end: '2022年10月8日', days: 12,
        suits: [
          { name: '云水别行客', rarity: '闪耀', status: '新', category: '单闪\n单非凡', parts: 15, points: 920 },
          { name: '红姝媚', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 10, points: 400 },
          { name: '谁见青山', rarity: '稀有', status: '新', category: '累充', parts: 6, points: 95 },
          { name: '梧桐秋苑', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2022年10月12日', days: 16 }
        ]
      },
      {
        id: 2, start: '2022年10月13日', end: '2022年10月24日', days: 12,
        suits: [
          { name: '虹穹之泪', rarity: '闪耀', status: '复', category: '单闪\n单非凡', parts: 14, points: 880 },
          { name: '遥夜与泪光', rarity: '非凡', status: '复', category: '单闪\n单非凡', parts: 8, points: 360 },
          { name: '霓光泡泡', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105 },
          { name: '星动青春', rarity: '非凡', status: '新', category: '星钻包', parts: 9, points: 280, end: '2022年10月22日', days: 10 },
          { name: '星舞青春', rarity: '非凡', status: '新', category: '星钻包', parts: 9, points: 280, end: '2022年10月22日', days: 10 },
          { name: '奶油假日', rarity: '稀有', status: '新', category: '免活', parts: 6, points: 80, end: '2022年10月26日', days: 14 }
        ]
      },
      {
        id: 3, start: '2022年10月27日', end: '2022年11月2日', days: 7,
        suits: [
          { name: '凛海猎风', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '青葱的恋曲', rarity: '非凡', status: '复', category: '单非凡', parts: 8, points: 360, start: '2022年11月3日', end: '2022年11月9日' }
        ]
      },
      {
        id: 4, start: '2022年11月10日', end: '2022年11月17日', days: 8,
        suits: [
          { name: '赤霄惊弦', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '寒香雪', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '猎游暮归', rarity: '稀有', status: '新', category: '累充', parts: 6, points: 95 },
          { name: '心动狂欢', rarity: '非凡', status: '新', category: '新意节', parts: 8, points: 260, start: '2022年11月8日', days: 10 },
          { name: '热力之息', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2022年11月21日', days: 12 }
        ]
      },
      {
        id: 5, start: '2022年11月22日', end: '2022年12月4日', days: 13,
        suits: [
          { name: '遗落潮汐', rarity: '闪耀', status: '复', category: '双闪', parts: 14, points: 880 },
          { name: '朝焰初临', rarity: '闪耀', status: '复', category: '双闪', parts: 15, points: 920 },
          { name: '吟游诗章', rarity: '闪耀', status: '复', category: '免活', parts: 9, points: 560 },
          { name: '雾隐之息', rarity: '非凡', status: '复', category: '累充', parts: 8, points: 360 },
          { name: '邂逅光影', rarity: '非凡', status: '新', category: '免活', parts: 9, points: 280 }
        ]
      },
      {
        id: 6, start: '2022年12月8日', end: '2022年12月14日', days: 7,
        suits: [
          { name: '小鹿乘梦来', rarity: '非凡', status: '新', category: '单非凡', parts: 10, points: 400 },
          { name: '初雪聆愿', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 360, start: '2022年12月5日', days: 10 },
          { name: '春之圆舞曲', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 240, start: '2022年12月5日', days: 10 },
          { name: '蝶梦雨', rarity: '非凡', status: '新', category: '免活', parts: 7, points: 85, start: '2022年12月5日', days: 10 },
          { name: '萌波星旅', rarity: '非凡', status: '复', category: '单非凡', parts: 9, points: 380, start: '2022年12月15日', end: '2022年12月21日' }
        ]
      },
      {
        id: 7, start: '2022年12月22日', end: '2023年1月2日', days: 12,
        suits: [
          { name: '星辰的眸光', rarity: '闪耀', status: '新', category: '单闪\n单非凡', parts: 15, points: 920 },
          { name: '魔幻时刻', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 9, points: 380 },
          { name: '姜饼蜜语', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '柿柿如意', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, end: '2023年1月4日', days: 14 }
        ]
      },
      {
        id: 8, start: '2023年1月5日', end: '2023年1月11日', days: 7,
        suits: [
          { name: '凛风意志', rarity: '非凡', status: '新', category: '新阁', parts: 9, points: 380 },
          { name: '纯真拾忆', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, end: '2023年1月16日', days: 12 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第八期统计',
    subtitle: '活动时间：2023年1月17日-2023年4月27日，共100天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2023年1月17日', end: '2023年1月29日', days: 13,
        suits: [
          { name: '一斛相思', rarity: '闪耀', status: '新', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '日贯长虹', rarity: '闪耀', status: '新', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '玉雪织萝', rarity: '非凡', status: '新', category: '双闪\n单非凡', parts: 10, points: 400 },
          { name: '绎云初岁', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 360 },
          { name: '绛雪百戏', rarity: '非凡', status: '新', category: '免活', parts: 9, points: 280 },
          { name: '悠游百戏', rarity: '非凡', status: '新', category: '免活', parts: 9, points: 280 }
        ]
      },
      {
        id: 2, start: '2023年2月2日', end: '2023年2月8日', days: 7,
        suits: [
          { name: '爱：讯号', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '白熊足迹', rarity: '稀有', status: '新', category: '累充', parts: 6, points: 95 },
          { name: '蜜意年年', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2023年2月15日', days: 14 },
          { name: '薰梦花漾', rarity: '非凡', status: '复', category: '单非凡', parts: 10, points: 400, start: '2023年2月9日', end: '2023年2月15日' }
        ]
      },
      {
        id: 3, start: '2023年2月16日', end: '2023年2月28日', days: 13,
        suits: [
          { name: '飞羽映琳琅', rarity: '闪耀', status: '复', category: '单闪\n单非凡', parts: 15, points: 920 },
          { name: '灯华夜锦', rarity: '非凡', status: '复', category: '单闪\n单非凡', parts: 10, points: 400 },
          { name: '云山弈', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105 },
          { name: '冬日奶芙', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2023年3月1日', days: 14 }
        ]
      },
      {
        id: 4, start: '2023年3月2日', end: '2023年3月9日', days: 8,
        suits: [
          { name: '幽雾的碧纱', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '燃金的桂冠', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '魔法见习生', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '秋野往事', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, end: '2023年3月15日', days: 14 },
          { name: '春鸢烟柳', rarity: '非凡', status: '复', category: '单非凡', parts: 8, points: 360, start: '2023年3月10日', end: '2023年3月15日', days: 6 }
        ]
      },
      {
        id: 5, start: '2023年3月16日', end: '2023年3月22日', days: 7,
        suits: [
          { name: '魔法兔之杖', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '叶叶金铃', rarity: '非凡', status: '复', category: '单非凡', parts: 10, points: 400, start: '2023年3月23日', end: '2023年3月29日' },
          { name: '白雾逆境', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2023年3月29日', days: 14 }
        ]
      },
      {
        id: 6, start: '2023年3月30日', end: '2023年4月6日', days: 8,
        suits: [
          { name: '风絮之息', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '森落之春', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '沉睡森林', rarity: '稀有', status: '新', category: '累充', parts: 7, points: 100 },
          { name: '竹篁影', rarity: '稀有', status: '新', category: '免活', parts: 6, points: 80, end: '2023年4月12日', days: 14 }
        ]
      },
      {
        id: 7, start: '2023年4月13日', end: '2023年4月24日', days: 12,
        suits: [
          { name: '献给莉莉斯', rarity: '闪耀', status: '复', category: '单闪\n单非凡', parts: 14, points: 880 },
          { name: '早安，女王', rarity: '非凡', status: '复', category: '单闪\n单非凡', parts: 8, points: 360 },
          { name: '暖冬愿曲', rarity: '稀有', status: '复', category: '累充', parts: 7, points: 100 },
          { name: '弄潮街拍', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, end: '2023年4月26日', days: 14 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第九期统计',
    subtitle: '活动时间：2023年4月27日-2023年8月3日，共98天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2023年4月27日', end: '2023年5月8日', days: 12,
        suits: [
          { name: '如烈阳灿烂', rarity: '闪耀', status: '新', category: '单闪\n单非凡', parts: 15, points: 920 },
          { name: '弥夜之灵', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 9, points: 380 },
          { name: '星月奇谭', rarity: '稀有', status: '新', category: '累充', parts: 6, points: 95 },
          { name: '异域风疆', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2023年5月10日', days: 14 }
        ]
      },
      {
        id: 2, start: '2023年5月11日', end: '2023年5月18日', days: 8,
        suits: [
          { name: '爱丽丝的茶匙', rarity: '非凡', status: '复', category: '双非凡', parts: 9, points: 380 },
          { name: '柴郡猫的巡礼', rarity: '非凡', status: '复', category: '双非凡', parts: 9, points: 380 },
          { name: '白兔迷踪', rarity: '稀有', status: '复', category: '累充', parts: 7, points: 100 },
          { name: '蜜意流淌', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, start: '2023年5月19日', end: '2023年5月28日', days: 10 },
          { name: '凛海猎风', rarity: '非凡', status: '复', category: '单非凡', parts: 9, points: 380, start: '2023年5月19日', end: '2023年5月24日', days: 6 }
        ]
      },
      {
        id: 3, start: '2023年5月25日', end: '2023年6月4日', days: 11,
        suits: [
          { name: '霓朵泡泡云', rarity: '非凡', status: '新', category: '单非凡', parts: 10, points: 400 },
          { name: '云河落星', rarity: '非凡', status: '新', category: '加码', parts: 8, points: 260 },
          { name: '蓝空星坠', rarity: '非凡', status: '新', category: '加码', parts: 8, points: 260 },
          { name: '萌兔心晴', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, end: '2023年6月7日', days: 14 }
        ]
      },
      {
        id: 4, start: '2023年6月8日', end: '2023年6月19日', days: 12,
        suits: [
          { name: '玫瑰倾颓之夜', rarity: '闪耀', status: '复', category: '双闪', parts: 15, points: 920 },
          { name: '苍月萦梦之誓', rarity: '闪耀', status: '复', category: '双闪', parts: 14, points: 880 },
          { name: '盈枝华筵', rarity: '非凡', status: '复', category: '累充', parts: 8, points: 360 },
          { name: '心想是橙', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2023年6月25日', days: 18 },
          { name: '未来绽放', rarity: '非凡', status: '新', category: '免活', parts: 9, points: 280, end: '2023年7月5日', days: 28 }
        ]
      },
      {
        id: 5, start: '2023年6月20日', end: '2023年7月3日', days: 14,
        suits: [
          { name: '芳菲谢梦', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 12, points: 340 },
          { name: '宝册熹华', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 13, points: 360 },
          { name: '菀菀', rarity: '稀有', status: '新', category: '累充', parts: 6, points: 80 },
          { name: '春别空山', rarity: '非凡', status: '新', category: '免活', parts: 9, points: 280, end: '2023年7月5日', days: 16 }
        ]
      },
      {
        id: 6, start: '2023年7月6日', end: '2023年7月19日', days: 14,
        suits: [
          { name: '煊煊瑞虎威', rarity: '闪耀', status: '复', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '一梦昙华', rarity: '闪耀', status: '复', category: '双闪\n单非凡', parts: 14, points: 880 },
          { name: '红尘漫卷', rarity: '非凡', status: '复', category: '双闪\n单非凡', parts: 8, points: 360 },
          { name: '鱼跃新岁', rarity: '非凡', status: '复', category: '累充', parts: 8, points: 360 },
          { name: '果绿时光', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      },
      {
        id: 7, start: '2023年7月20日', end: '2023年7月29日', days: 10,
        suits: [
          { name: '隐匿夜幕', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '莓果茶歇', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2023年8月2日', days: 14 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第十期统计',
    subtitle: '活动时间：2023年8月3日-2024年2月1日，共182天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2023年8月3日', end: '2023年8月16日', days: 14,
        suits: [
          { name: '月谕', rarity: '闪耀', status: '新', category: '双闪', parts: 17, points: 1000 },
          { name: '神陨之魇', rarity: '闪耀', status: '新', category: '双闪', parts: 15, points: 920 },
          { name: '不谢的花', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 380 },
          { name: '风眠的林墟', rarity: '闪耀', status: '新', category: '免活', parts: 9, points: 560 }
        ]
      },
      {
        id: 2, start: '2023年8月17日', end: '2023年8月27日', days: 11,
        suits: [
          { name: '半夏青柠', rarity: '非凡', status: '复', category: '双非凡', parts: 8, points: 360 },
          { name: '悠弦海风', rarity: '非凡', status: '复', category: '双非凡', parts: 9, points: 380 },
          { name: '浪花遐思', rarity: '稀有', status: '复', category: '累充', parts: 7, points: 100 },
          { name: '盛夏逐星', rarity: '非凡', status: '复', category: '累充', parts: 10, points: 400 },
          { name: '纤丝引梦', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, end: '2023年8月30日', days: 14 }
        ]
      },
      {
        id: 3, start: '2023年8月31日', end: '2023年9月8日', days: 9,
        suits: [
          { name: '点染白夜', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '沉于穹幕', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '光明诵诗', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '书香华年', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2023年9月13日', days: 14 },
          { name: '烟容曳影', rarity: '非凡', status: '复', category: '单非凡', parts: 8, points: 360, start: '2023年9月9日', end: '2023年9月13日', days: 5 }
        ]
      },
      {
        id: 4, start: '2023年9月14日', end: '2023年9月25日', days: 12,
        suits: [
          { name: '云水别行客', rarity: '闪耀', status: '复', category: '单闪\n单非凡', parts: 15, points: 920 },
          { name: '红姝媚', rarity: '非凡', status: '复', category: '单闪\n单非凡', parts: 10, points: 400 },
          { name: '谁见青山', rarity: '稀有', status: '复', category: '累充', parts: 6, points: 95 },
          { name: '星梦引力', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2023年10月6日', days: 23 }
        ]
      },
      {
        id: 5, start: '2023年9月27日', end: '2023年10月9日', days: 13,
        suits: [
          { name: '金阙朝岚', rarity: '闪耀', status: '新', category: '双闪', parts: 15, points: 920 },
          { name: '有狐无忧', rarity: '闪耀', status: '新', category: '双闪', parts: 15, points: 920 },
          { name: '如意香', rarity: '非凡', status: '新', category: '累充', parts: 10, points: 400 },
          { name: '花馥月胧', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2023年10月20日', days: 24 },
          { name: '桂馥秋韵', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2023年10月20日', days: 24 }
        ]
      },
      {
        id: 6, start: '2023年10月12日', end: '2023年10月20日', days: 9,
        suits: [
          { name: '鹅之乐', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '喵结福缘', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 280 },
          { name: '喵守契语', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 280 },
          { name: '凛风意志', rarity: '非凡', status: '复', category: '单非凡', parts: 9, points: 380, start: '2023年10月21日', end: '2023年10月25日', days: 5 },
          { name: '香雪生姿', rarity: '稀有', status: '新', category: '免活', parts: 6, points: 80, end: '2023年10月25日', days: 14 }
        ]
      },
      {
        id: 7, start: '2023年10月26日', end: '2023年11月5日', days: 11,
        suits: [
          { name: '妙想库洛米', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 15, points: 400 },
          { name: '悠游布丁狗', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 14, points: 380 },
          { name: '千禧印象', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 }
        ]
      },
      {
        id: 8, start: '2023年11月9日', end: '2023年11月19日', days: 11,
        suits: [
          { name: '于海渊守望', rarity: '闪·漫', status: '新', category: '单闪', parts: 15, points: 920 },
          { name: '余烬音潮', rarity: '非凡', status: '新', category: '心意节', parts: 9, points: 280, end: '2023年11月22日', days: 14 },
          { name: '海潮临界', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '冰原雪线', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85 }
        ]
      },
      {
        id: 9, start: '2023年11月23日', end: '2023年12月6日', days: 14,
        suits: [
          { name: '星之引', rarity: '闪耀', status: '复', category: '双闪', parts: 17, points: 1000 },
          { name: '无垠之星', rarity: '闪耀', status: '复', category: '双闪', parts: 15, points: 920 },
          { name: '未来坐标', rarity: '非凡', status: '复', category: '累充', parts: 9, points: 380 },
          { name: '星域使者', rarity: '闪耀', status: '复', category: '免活', parts: 9, points: 560 },
          { name: '姜绒暖冬', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2023年12月4日', days: 12 }
        ]
      },
      {
        id: 10, start: '2023年12月7日', end: '2023年12月15日', days: 9,
        suits: [
          { name: '织星落梦', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '红粉佳期', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '安睡鸭鸭', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '心忆花旅', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 360, start: '2023年12月5日', end: '2023年12月14日', days: 10 }
        ]
      },
      {
        id: 11, start: '2023年12月19日', end: '2024年1月3日', days: 16,
        suits: [
          { name: '繁星奏鸣时', rarity: '闪耀', status: '新', category: '单闪\n单非凡', parts: 15, points: 920 },
          { name: '时光流音', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 10, points: 400 },
          { name: '星愿圣诞', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '盘云千转', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      },
      {
        id: 12, start: '2024年1月5日', end: '2024年1月14日', days: 10,
        suits: [
          { name: '赤霄惊弦', rarity: '非凡', status: '复', category: '双非凡', parts: 9, points: 380 },
          { name: '寒香雪', rarity: '非凡', status: '复', category: '双非凡', parts: 9, points: 380 },
          { name: '猎游暮归', rarity: '稀有', status: '复', category: '累充', parts: 6, points: 95 },
          { name: '奶咖假日', rarity: '稀有', status: '新', category: '免活', parts: 6, points: 80, end: '2024年1月18日', days: 14 }
        ]
      },
      {
        id: 13, start: '2024年1月18日', end: '2024年1月28日', days: 11,
        suits: [
          { name: '暮冬烁灵', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '寂冬原野', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第十一期统计',
    subtitle: '活动时间：2024年2月1日-2024年4月28日，共88天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2024年2月1日', end: '2024年2月15日', days: 15,
        suits: [
          { name: '绘山河万里', rarity: '闪耀', status: '新', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '龙墟归海客', rarity: '闪耀', status: '新', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '岁宴龙舞', rarity: '非凡', status: '新', category: '双闪\n单非凡', parts: 9, points: 380 },
          { name: '千山停云', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 360 },
          { name: '弦夜圣心', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 360 },
          { name: '寒梅剪雪', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260 },
          { name: '纸上剪春', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260 },
          { name: '小鹿乘梦来', rarity: '非凡', status: '复', category: '单非凡', parts: 10, points: 400, start: '2024年2月16日', end: '2024年2月21日', days: 6 },
          { name: '云锦端仪', rarity: '闪耀', status: '复', category: '联动\n免活', parts: 14, points: 760, end: '2024年3月6日', days: 35 },
          { name: '云锦宁仪', rarity: '闪耀', status: '复', category: '联动\n免活', parts: 9, points: 560, end: '2024年3月6日', days: 35 }
        ]
      },
      {
        id: 2, start: '2024年2月22日', end: '2024年3月5日', days: 13,
        suits: [
          { name: '雪桃春讯', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85 }
        ]
      },
      {
        id: 3, start: '2024年3月7日', end: '2024年3月15日', days: 9,
        suits: [
          { name: '暮雪纷冉冉', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '顾年春迟迟', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '戏若烟云', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '爱：讯号', rarity: '非凡', status: '复', category: '单非凡', parts: 9, points: 380, start: '2024年3月16日', end: '2024年3月20日', days: 5 },
          { name: '白熊足迹', rarity: '稀有', status: '复', category: '累充', parts: 6, points: 95, start: '2024年3月16日', end: '2024年3月20日', days: 5 }
        ]
      },
      {
        id: 4, start: '2024年3月21日', end: '2024年4月1日', days: 12,
        suits: [
          { name: '梦幻协奏曲', rarity: '非凡', status: '新', category: '联动免活', parts: 8, points: 260 },
          { name: '夜与蝶乐章', rarity: '非凡', status: '新', category: '联动礼包', parts: 8, points: 260 },
          { name: '星辰的眸光', rarity: '闪耀', status: '复', category: '单闪\n单非凡', parts: 15, points: 920 },
          { name: '魔幻时刻', rarity: '非凡', status: '复', category: '单闪\n单非凡', parts: 9, points: 380 },
          { name: '姜饼蜜语', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105 }
        ]
      },
      {
        id: 5, start: '2024年4月2日', end: '2024年4月13日', days: 12,
        suits: [
          { name: '千愿夜谭', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '云虹绵绵雨', rarity: '非凡', status: '新', category: '双非凡', parts: 8, points: 360 },
          { name: '拟态星云', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '碧春辞', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2024年4月14日', days: 13 }
        ]
      },
      {
        id: 6, start: '2024年4月15日', end: '2024年4月23日', days: 9,
        suits: [
          { name: '风絮之息', rarity: '非凡', status: '复', category: '双非凡', parts: 9, points: 380 },
          { name: '森落之春', rarity: '非凡', status: '复', category: '双非凡', parts: 9, points: 380 },
          { name: '沉睡森林', rarity: '稀有', status: '复', category: '累充', parts: 7, points: 100 },
          { name: '橙火青春', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2024年4月28日', days: 14 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第十二期统计',
    subtitle: '活动时间：2024年4月29日-2024年8月1日，共95天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2024年4月29日', end: '2024年5月10日', days: 12,
        suits: [
          { name: '浮光中织吻', rarity: '闪耀', status: '新', category: '双闪', parts: 16, points: 960 },
          { name: '幽蓝中沉睡', rarity: '闪耀', status: '新', category: '双闪', parts: 15, points: 920 },
          { name: '魅影妖花', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 380 },
          { name: '春藤织花', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260 }
        ]
      },
      {
        id: 2, start: '2024年5月11日', end: '2024年5月22日', days: 12,
        suits: [
          { name: '如烈阳灿烂', rarity: '闪耀', status: '复', category: '单闪\n单非凡', parts: 15, points: 920 },
          { name: '弥夜之灵', rarity: '非凡', status: '复', category: '单闪\n单非凡', parts: 9, points: 380 },
          { name: '星月奇谭', rarity: '稀有', status: '复', category: '累充', parts: 6, points: 95 },
          { name: '奇异果旅', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      },
      {
        id: 3, start: '2024年5月23日', end: '2024年6月1日', days: 10,
        suits: [
          { name: '暇日柔波', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '炽羽星途', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '绯夜沙龙', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '橙果印象', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2024年6月5日', days: 14 }
        ]
      },
      {
        id: 4, start: '2024年6月6日', end: '2024年6月17日', days: 12,
        suits: [
          { name: '黑猫与宇宙诗', rarity: '闪寰', status: '新', category: '单闪', parts: 15, points: 920 },
          { name: '熔炼真知', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '喵游四方', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2024年6月19日', days: 14 }
        ]
      },
      {
        id: 5, start: '2024年6月20日', end: '2024年6月30日', days: 11,
        suits: [
          { name: '飞燕泣残红', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 14, points: 380 },
          { name: '杨妃戏彩蝶', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 14, points: 380 },
          { name: '莫怨东风', rarity: '稀有', status: '新', category: '联动累充', parts: 8, points: 90 },
          { name: '怡红公子', rarity: '稀有', status: '新', category: '联动免活', parts: 5, points: 75, end: '2024年7月3日', days: 14 }
        ]
      },
      {
        id: 6, start: '2024年7月4日', end: '2024年7月11日', days: 8,
        suits: [
          { name: '林籁的春声', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '菇菇乐园', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, end: '2024年7月17日', days: 14 },
          { name: '幽雾的碧纱', rarity: '非凡', status: '复', category: '双非凡', parts: 10, points: 400, start: '2024年7月12日', end: '2024年7月17日', days: 6 },
          { name: '燃金的桂冠', rarity: '非凡', status: '复', category: '双非凡', parts: 9, points: 380, start: '2024年7月12日', end: '2024年7月17日', days: 6 },
          { name: '魔法见习生', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105, start: '2024年7月12日', end: '2024年7月17日', days: 6 }
        ]
      },
      {
        id: 7, start: '2024年7月18日', end: '2024年7月27日', days: 10,
        suits: [
          { name: '光沐圣心', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '紫鸢心语', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2024年8月1日', days: 15 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第十三期统计',
    subtitle: '活动时间：2024年8月2日-2025年1月22日，共174天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2024年8月2日', end: '2024年8月15日', days: 14,
        suits: [
          { name: '浩瀚花', rarity: '闪耀', status: '新', category: '双闪', parts: 17, points: 1000 },
          { name: '鲸向海', rarity: '闪耀', status: '新', category: '双闪', parts: 16, points: 960 },
          { name: '时之残响', rarity: '闪耀', status: '新', category: '免活', parts: 9, points: 560 },
          { name: '灾厄熔岩', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 380 },
          { name: '未名之诗', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 280 },
          { name: '花见之诗', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 280 },
          { name: '兰夜桂馥', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, start: '2024年8月10日', end: '2024年8月25日', days: 16 }
        ]
      },
      {
        id: 2, start: '2024年8月16日', end: '2024年8月28日', days: 13,
        suits: [
          { name: '兔说萌语', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      },
      {
        id: 3, start: '2024年8月29日', end: '2024年9月8日', days: 11,
        suits: [
          { name: '绘尽晴野', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '曦光的刻痕', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '天使的圣像', rarity: '稀有', status: '新', category: '累充', parts: 7, points: 100 },
          { name: '牙牙悠歌', rarity: '稀有', status: '新', category: '免活', parts: 6, points: 80, end: '2024年9月10日', days: 13 }
        ]
      },
      {
        id: 4, start: '2024年9月11日', end: '2024年9月20日', days: 10,
        suits: [
          { name: '游曳锦', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '向阳初绽', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 280 },
          { name: '向阳樱绽', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 280 },
          { name: '篁竹映月', rarity: '非凡', status: '新', category: '免活', parts: 7, points: 240, end: '2024年9月25日', days: 15 },
          { name: '苍竹醉月', rarity: '非凡', status: '新', category: '免活', parts: 7, points: 240, end: '2024年9月25日', days: 15 },
          { name: '魔法兔之杖', rarity: '非凡', status: '复', category: '单非凡', parts: 9, points: 380, start: '2024年9月21日', end: '2024年9月25日', days: 5 }
        ]
      },
      {
        id: 5, start: '2024年9月26日', end: '2024年10月9日', days: 14,
        suits: [
          { name: '欲照此身焰', rarity: '闪耀', status: '新', category: '单闪\n单非凡', parts: 16, points: 960 },
          { name: '熠熠花鼓', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 10, points: 400 },
          { name: '南客隐翠', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 380 },
          { name: '青玺昭愿', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2024年10月11日', days: 16 }
        ]
      },
      {
        id: 6, start: '2024年10月12日', end: '2024年10月23日', days: 12,
        suits: [
          { name: '一斛相思', rarity: '闪耀', status: '复', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '日贯长虹', rarity: '闪耀', status: '复', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '玉雪织萝', rarity: '非凡', status: '复', category: '双闪\n单非凡', parts: 10, points: 400 },
          { name: '绎云初岁', rarity: '非凡', status: '复', category: '累充', parts: 8, points: 360 },
          { name: '绛雪百戏', rarity: '非凡', status: '复', category: '免活', parts: 9, points: 280 },
          { name: '悠游百戏', rarity: '非凡', status: '复', category: '免活', parts: 9, points: 280 },
          { name: '次元跃动', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      },
      {
        id: 7, start: '2024年10月24日', end: '2024年11月4日', days: 12,
        suits: [
          { name: '彩泊石与虹之歌', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 15, points: 400 },
          { name: '光谱石与霓色梦', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 15, points: 400 },
          { name: '破碎心锯', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 }
        ]
      },
      {
        id: 8, start: '2024年11月8日', end: '2024年11月20日', days: 13,
        suits: [
          { name: '罪之花', rarity: '闪瑰', status: '新', category: '单闪', parts: 16, points: 960 },
          { name: '晴日蔷薇园', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '永夜的眷属', rarity: '非凡', status: '新', category: '赠礼', parts: 9, points: 380 },
          { name: '绮罗凝香', rarity: '非凡', status: '新', category: '新意节', parts: 10, points: 300 },
          { name: '魕娘子', rarity: '非凡', status: '新', category: '联动免活', parts: 8, points: 260 }
        ]
      },
      {
        id: 9, start: '2024年11月21日', end: '2024年12月4日', days: 14,
        suits: [
          { name: '月谕', rarity: '闪耀', status: '复', category: '双闪', parts: 17, points: 1000 },
          { name: '神陨之魇', rarity: '闪耀', status: '复', category: '双闪', parts: 15, points: 920 },
          { name: '不谢的花', rarity: '非凡', status: '复', category: '累充', parts: 9, points: 380 },
          { name: '风眠的林墟', rarity: '闪耀', status: '复', category: '免活', parts: 9, points: 560 },
          { name: '烟雨同舟渡', rarity: '闪耀', status: '新', category: '联动免活', parts: 14, points: 760, end: '2024年12月18日', days: 28 }
        ]
      },
      {
        id: 10, start: '2024年12月5日', end: '2024年12月15日', days: 11,
        suits: [
          { name: '折光寻梦', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 360 },
          { name: '掌心霓虹', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380, start: '2024年12月7日', end: '2024年12月16日', days: 10 },
          { name: '仿生与初光', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400, start: '2024年12月7日', end: '2024年12月16日', days: 10 },
          { name: '基因学者', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105, start: '2024年12月7日', end: '2024年12月16日', days: 10 }
        ]
      },
      {
        id: 11, start: '2024年12月19日', end: '2025年1月1日', days: 14,
        suits: [
          { name: '幻梦的潮声', rarity: '闪耀', status: 'None', category: '单闪', parts: 15, points: 920 },
          { name: '溺于深海', rarity: '稀有', status: 'None', category: '累充', parts: 7, points: 100 },
          { name: '岁岁烟火', rarity: '稀有', status: 'None', category: '免活', parts: 6, points: 80, end: '2025年1月3日', days: 16 },
          { name: '鹅之乐', rarity: '非凡', status: '复', category: '单非凡', parts: 9, points: 380, start: '2025年1月2日', end: '2025年1月8日', days: 7 },
          { name: '喵结福缘', rarity: '非凡', status: '复', category: '累充', parts: 9, points: 280, start: '2025年1月2日', end: '2025年1月8日', days: 7 },
          { name: '喵守契语', rarity: '非凡', status: '复', category: '累充', parts: 9, points: 280, start: '2025年1月2日', end: '2025年1月8日', days: 7 }
        ]
      },
      {
        id: 12, start: '2025年1月9日', end: '2025年1月17日', days: 9,
        suits: [
          { name: '裁决夜语', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '甜苹果厨房', rarity: '稀有', status: '新', category: '累充', parts: 7, points: 100 },
          { name: '柑橘旋动', rarity: '稀有', status: '新', category: '免活', parts: 6, points: 80, end: '2025年1月21日', days: 13 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第十四期统计',
    subtitle: '活动时间：2025年1月22日-2025年4月24日，共92天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2025年1月22日', end: '2025年2月5日', days: 15,
        suits: [
          { name: '扶光落九乌', rarity: '闪耀', status: '新', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '鉴照明月魄', rarity: '闪耀', status: '新', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '幽兰曲影', rarity: '非凡', status: '新', category: '双闪\n单非凡', parts: 9, points: 380 },
          { name: '凤衔金枝', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 360 },
          { name: '玫瑰予爱', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 280 },
          { name: '长夜予爱', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 280 },
          { name: '富贵小财神', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260 },
          { name: '金玉小财神', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260 },
          { name: '千禧印象', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105, start: '2025年2月6日', end: '2025年2月10日', days: 5 }
        ]
      },
      {
        id: 2, start: '2025年2月11日', end: '2025年2月24日', days: 14,
        suits: [
          { name: '福满新岁', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85 }
        ]
      },
      {
        id: 3, start: '2025年2月25日', end: '2025年3月7日', days: 11,
        suits: [
          { name: '燃夜疾驰', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '霜之幽蚀', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '隐匿夜幕', rarity: '非凡', status: '复', category: '单非凡', parts: 9, points: 380, start: '2025年3月8日', end: '2025年3月12日', days: 5 },
          { name: '刺猬街区', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '寻风漫行', rarity: '稀有', status: '新', category: '免活', parts: 6, points: 80, end: '2025年3月12日', days: 16 }
        ]
      },
      {
        id: 4, start: '2025年3月13日', end: '2025年3月26日', days: 14,
        suits: [
          { name: '繁星奏鸣时', rarity: '闪耀', status: '复', category: '单闪\n单非凡', parts: 15, points: 920 },
          { name: '时光流音', rarity: '非凡', status: '复', category: '单闪\n单非凡', parts: 10, points: 400 },
          { name: '星愿圣诞', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105 },
          { name: '女王的夜狩', rarity: '非凡', status: '新', category: '联动礼包', parts: 8, points: 260 },
          { name: '粉雪的足迹', rarity: '非凡', status: '新', category: '联动免活', parts: 8, points: 260 }
        ]
      },
      {
        id: 5, start: '2025年3月27日', end: '2025年4月9日', days: 14,
        suits: [
          { name: '拂雪隐豹', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '焚妄迹', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '无月之夜', rarity: '非凡', status: '复', category: '紫钻礼包', parts: 10, points: 300 },
          { name: '黯月之夜', rarity: '非凡', status: '新', category: '紫钻礼包', parts: 10, points: 300 },
          { name: '染云霜', rarity: '稀有', status: '新', category: '累充', parts: 7, points: 100 },
          { name: '竹烟春晓', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85 }
        ]
      },
      {
        id: 6, start: '2025年4月10日', end: '2025年4月23日', days: 14,
        suits: [
          { name: '于海渊守望', rarity: '闪·漫', status: '复', category: '单闪', parts: 15, points: 920 },
          { name: '海潮临界', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105 },
          { name: '芝心塔塔', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第十五期统计',
    subtitle: '活动时间：2025年4月24日-2025年8月1日，共100天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2025年4月24日', end: '2025年5月8日', days: 15,
        suits: [
          { name: '焕夜即谕告', rarity: '闪耀', status: '新', category: '单闪\n单非凡', parts: 16, points: 960 },
          { name: '虚海之梦', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 9, points: 380 },
          { name: '幽谷魔法使', rarity: '非凡', status: '新', category: '免活', parts: 9, points: 280 },
          { name: '旅行栗栗', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 }
        ]
      },
      {
        id: 2, start: '2025年5月9日', end: '2025年5月21日', days: 13,
        suits: [
          { name: '暮雪纷冉冉', rarity: '非凡', status: '复', category: '双非凡', parts: 10, points: 400 },
          { name: '顾年春迟迟', rarity: '非凡', status: '复', category: '双非凡', parts: 9, points: 380 },
          { name: '戏若烟云', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105 },
          { name: '芳馨之诗', rarity: '稀有', status: '新', category: '免活', parts: 6, points: 80 }
        ]
      },
      {
        id: 3, start: '2025年5月22日', end: '2025年6月2日', days: 12,
        suits: [
          { name: '旧梦的选段', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '忆昔的柔板', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '盛典圆音', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '海棠醉春', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2025年6月5日', days: 15 }
        ]
      },
      {
        id: 4, start: '2025年6月6日', end: '2025年6月14日', days: 9,
        suits: [
          { name: '风与远行诗', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '宇宙泡泡熊', rarity: '非凡', status: '新', category: '翻牌', parts: 10, points: 300 },
          { name: '量子泡泡蜜', rarity: '非凡', status: '新', category: '翻牌', parts: 10, points: 300 },
          { name: '晴夏手札', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85 },
          { name: '霓朵泡泡云', rarity: '非凡', status: '复', category: '单非凡', parts: 10, points: 400, start: '2025年6月15日', end: '2025年6月19日', days: 5 },
          { name: '云河落星', rarity: '非凡', status: '复', category: '加码', parts: 8, points: 260, start: '2025年6月15日', end: '2025年6月19日', days: 5 },
          { name: '蓝空星坠', rarity: '非凡', status: '复', category: '加码', parts: 8, points: 260, start: '2025年6月15日', end: '2025年6月19日', days: 5 }
        ]
      },
      {
        id: 5, start: '2025年6月20日', end: '2025年7月2日', days: 13,
        suits: [
          { name: '红尘幻绮霞', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 14, points: 380 },
          { name: '紫陌任烟云', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 14, points: 380 },
          { name: '凤尾青云', rarity: '稀有', status: '新', category: '联动累充', parts: 8, points: 90 },
          { name: '侠名香香', rarity: '稀有', status: '新', category: '联动免活', parts: 7, points: 85 }
        ]
      },
      {
        id: 6, start: '2025年7月3日', end: '2025年7月16日', days: 14,
        suits: [
          { name: '金阙朝岚', rarity: '闪耀', status: '复', category: '双闪', parts: 15, points: 920 },
          { name: '有狐无忧', rarity: '闪耀', status: '复', category: '双闪', parts: 15, points: 920 },
          { name: '如意香', rarity: '非凡', status: '复', category: '累充', parts: 10, points: 400 },
          { name: '书香英华', rarity: '闪耀', status: '复', category: '联动免活', parts: 12, points: 680, end: '2025年7月31日', days: 29 },
          { name: '樱桃假日', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      },
      {
        id: 7, start: '2025年7月17日', end: '2025年7月27日', days: 11,
        suits: [
          { name: '圣夜安魂颂', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '扭扭派对', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2025年8月1日', days: 16 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第十六期统计',
    subtitle: '活动时间：2025年8月2日-2026年2月10日，共194天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2025年8月2日', end: '2025年8月15日', days: 14,
        suits: [
          { name: '誓我于星', rarity: '闪耀', status: '新', category: '双闪', parts: 17, points: 1000 },
          { name: '失格永昼', rarity: '闪耀', status: '新', category: '双闪', parts: 16, points: 960 },
          { name: '诀别黄昏', rarity: '非凡', status: '新', category: '累充', parts: 9, points: 380 },
          { name: '永夜流金', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 260 },
          { name: '永暮星汐', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 260 },
          { name: '静候花信风', rarity: '闪耀', status: '新', category: '免活', parts: 14, points: 880 },
          { name: '如约赴繁花·盛放', rarity: '闪耀', status: '新', category: '免活', parts: 9, points: 560 },
          { name: '如约赴繁花·初绽', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260 },
          { name: '如约赴繁花·蓓蕾', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85 }
        ]
      },
      {
        id: 2, start: '2025年8月16日', end: '2025年8月27日', days: 12,
        suits: [
          { name: '荔夏恋曲', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      },
      {
        id: 3, start: '2025年8月28日', end: '2025年9月7日', days: 11,
        suits: [
          { name: '朔漠绛云', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '乍敛韶光', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '漠上弦吟', rarity: '稀有', status: '新', category: '累充', parts: 6, points: 95 },
          { name: '簪花听潮', rarity: '非凡', status: '新', category: '联动免活', parts: 7, points: 240, end: '2025年9月16日', days: 20 },
          { name: '游乐绘', rarity: '非凡', status: '复', category: '单非凡', parts: 8, points: 360, start: '2025年9月8日', end: '2025年9月11日', days: 4 }
        ]
      },
      {
        id: 4, start: '2025年9月12日', end: '2025年9月22日', days: 11,
        suits: [
          { name: '第一幕灼夜', rarity: '非凡', status: '新', category: '单非凡', parts: 10, points: 400 },
          { name: '坠夜终章', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 260 },
          { name: '猩红旧影', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 260 },
          { name: '黑白绘心', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, end: '2025年9月25日', days: 14 }
        ]
      },
      {
        id: 5, start: '2025年9月26日', end: '2025年10月10日', days: 15,
        suits: [
          { name: '焚骨入画屏', rarity: '闪耀', status: '新', category: '单闪\n单非凡', parts: 16, points: 960 },
          { name: '莫惜荷露', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 9, points: 380 },
          { name: '金册画中人', rarity: '华梦', status: '新', category: '抽一赠一', parts: 14, points: 880 },
          { name: '百怪伏藏', rarity: '稀有', status: '新', category: '累充', parts: 6, points: 95 },
          { name: '秋篱小居', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2025年10月12日', days: 17 },
          { name: '秋和景明', rarity: '非凡', status: '新', category: '免活', parts: 8, points: 260, end: '2025年10月12日', days: 17 }
        ]
      },
      {
        id: 6, start: '2025年10月13日', end: '2025年10月23日', days: 11,
        suits: [
          { name: '黑猫与宇宙诗', rarity: '闪寰', status: '复', category: '单闪', parts: 15, points: 920 },
          { name: '熔炼真知', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105 },
          { name: '绒白罗曼史', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      },
      {
        id: 7, start: '2025年10月24日', end: '2025年11月3日', days: 11,
        suits: [
          { name: '酩醉的时光', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 15, points: 400 },
          { name: '饮春的花冠', rarity: '非凡', status: '新', category: '联动\n双非凡', parts: 14, points: 380 },
          { name: '绮想的书页', rarity: '稀有', status: '新', category: '联动累充', parts: 8, points: 90 },
          { name: '莓火甜心', rarity: '稀有', status: '新', category: '免活', parts: 7, points: 85, end: '2025年11月5日', days: 13 }
        ]
      },
      {
        id: 8, start: '2025年11月6日', end: '2025年11月19日', days: 14,
        suits: [
          { name: '龙与金色梦乡', rarity: '闪熠', status: '新', category: '单闪\n单非凡', parts: 16, points: 960 },
          { name: '心是塔的指引', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 9, points: 380 },
          { name: '幽鳞碧影', rarity: '非凡', status: '新', category: '新意节', parts: 10, points: 300 },
          { name: '琪琪美拉', rarity: '稀有', status: '新', category: '累充', parts: 7, points: 100 },
          { name: '暖忆烘焙', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      },
      {
        id: 9, start: '2025年11月20日', end: '2025年12月3日', days: 14,
        suits: [
          { name: '浩瀚花', rarity: '闪耀', status: '复', category: '双闪', parts: 17, points: 1000 },
          { name: '鲸向海', rarity: '闪耀', status: '复', category: '双闪', parts: 16, points: 960 },
          { name: '时之残响', rarity: '闪耀', status: '复', category: '免活', parts: 9, points: 560 },
          { name: '灾厄熔岩', rarity: '非凡', status: '复', category: '累充', parts: 9, points: 380 },
          { name: '未名之诗', rarity: '非凡', status: '复', category: '累充', parts: 9, points: 280 },
          { name: '花见之诗', rarity: '非凡', status: '复', category: '累充', parts: 9, points: 280 },
          { name: '特级小厨神', rarity: '非凡', status: '新', category: '联动免活', parts: 8, points: 260 }
        ]
      },
      {
        id: 10, start: '2025年12月4日', end: '2025年12月14日', days: 11,
        suits: [
          { name: '爱若蔷薇誓', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '心祈愿望泉', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '丝缎甜梦诗', rarity: '非凡', status: '新', category: '免活', parts: 9, points: 380 },
          { name: '暖茸点点', rarity: '非凡', status: '新', category: '联动免活', parts: 8, points: 260, end: '2025年12月17日', days: 14 },
          { name: '雪纱人偶', rarity: '稀有', status: '新', category: '累充', parts: 7, points: 100 }
        ]
      },
      {
        id: 11, start: '2025年12月18日', end: '2026年1月3日', days: 17,
        suits: [
          { name: '浮沉的画景', rarity: '闪·涟', status: '新', category: '单闪', parts: 15, points: 920 },
          { name: '珍珠的画像', rarity: '稀有', status: '新', category: '累充', parts: 7, points: 100 },
          { name: '福蝠如意', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      },
      {
        id: 12, start: '2026年1月4日', end: '2026年1月15日', days: 12,
        suits: [
          { name: '绘山河万里', rarity: '闪耀', status: '复', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '龙墟归海客', rarity: '闪耀', status: '复', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '岁宴龙舞', rarity: '非凡', status: '复', category: '双闪\n单非凡', parts: 9, points: 380 },
          { name: '千山停云', rarity: '非凡', status: '复', category: '累充', parts: 8, points: 360 },
          { name: '弦夜圣心', rarity: '非凡', status: '复', category: '累充', parts: 8, points: 360 },
          { name: '寒梅剪雪', rarity: '非凡', status: '复', category: '免活', parts: 8, points: 260 },
          { name: '纸上剪春', rarity: '非凡', status: '复', category: '免活', parts: 8, points: 260 },
          { name: '玫瑰来信', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      },
      {
        id: 13, start: '2026年1月16日', end: '2026年1月25日', days: 10,
        suits: [
          { name: '锈火烛心', rarity: '非凡', status: '新', category: '双非凡', parts: 9, points: 380 },
          { name: '栖雾林影', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '刺血之吻', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '山色怀秋', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2026年1月27日', days: 12 }
        ]
      },
      {
        id: 14, start: '2026年1月28日', end: '2026年2月6日', days: 10,
        suits: [
          { name: '幻海先知', rarity: '非凡', status: '新', category: '单非凡', parts: 9, points: 380 },
          { name: '游曳锦', rarity: '非凡', status: '复', category: '单非凡', parts: 9, points: 380, start: '2026年2月7日', end: '2026年2月10日', days: 4 },
          { name: '向阳初绽', rarity: '非凡', status: '复', category: '累充', parts: 9, points: 280, start: '2026年2月7日', end: '2026年2月10日', days: 4 },
          { name: '向阳樱绽', rarity: '非凡', status: '复', category: '累充', parts: 9, points: 280, start: '2026年2月7日', end: '2026年2月10日', days: 4 },
          { name: '破界法则', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2026年2月10日', days: 14 }
        ]
      }
    ]
  },
  {
    title: '忆海收集第十七期统计',
    subtitle: '活动时间：2026年2月11日-2026年4月29日，共77天。',
    footer: '萝莉甜的闪暖日记',
    versions: [
      {
        id: 1, start: '2026年2月11日', end: '2026年2月25日', days: 15,
        suits: [
          { name: '煌煌照重渊', rarity: '闪耀', status: '新', category: '双闪\n单非凡', parts: 16, points: 960 },
          { name: '天地一浮沤', rarity: '闪耀', status: '新', category: '双闪\n单非凡', parts: 15, points: 920 },
          { name: '琴鸣乌野', rarity: '非凡', status: '新', category: '双闪\n单非凡', parts: 9, points: 380 },
          { name: '莲华铸我身', rarity: '非凡', status: '新', category: '累充', parts: 10, points: 400 },
          { name: '赤银星蚀', rarity: '非凡', status: '新', category: '礼包', parts: 9, points: 280 },
          { name: '环星锈野', rarity: '非凡', status: '新', category: '礼包', parts: 9, points: 280 },
          { name: '灯彩行商', rarity: '非凡', status: '新', category: '免活', parts: 9, points: 260 },
          { name: '绮夜行商', rarity: '非凡', status: '新', category: '免活', parts: 9, points: 260 },
          { name: '林籁的春声', rarity: '非凡', status: '复', category: '单非凡', parts: 9, points: 380, start: '2026年2月26日', end: '2026年3月3日', days: 6 }
        ]
      },
      {
        id: 2, start: '2026年3月4日', end: '2026年3月17日', days: 14,
        suits: [
          { name: '冷香如故', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      },
      {
        id: 3, start: '2026年3月18日', end: '2026年3月26日', days: 9,
        suits: [
          { name: '影与白的协奏', rarity: '非凡', status: '新', category: '单非凡', parts: 10, points: 400 },
          { name: '千愿夜谭', rarity: '非凡', status: '复', category: '双非凡', parts: 10, points: 400, start: '2026年3月27日', end: '2026年4月1日', days: 6 },
          { name: '云虹绵绵雨', rarity: '非凡', status: '复', category: '双非凡', parts: 8, points: 360, start: '2026年3月27日', end: '2026年4月1日', days: 6 },
          { name: '拟态星云', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105, start: '2026年3月27日', end: '2026年4月1日', days: 6 },
          { name: '顽磬天问', rarity: '非凡', status: '新', category: '联动礼包', parts: 8, points: 260, end: '2026年4月1日', days: 15 },
          { name: '倾世红绡', rarity: '非凡', status: '新', category: '联动免活', parts: 9, points: 280, end: '2026年4月1日', days: 15 }
        ]
      },
      {
        id: 4, start: '2026年4月2日', end: '2026年4月12日', days: 11,
        suits: [
          { name: '傀偶牵丝', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '绯月残心', rarity: '非凡', status: '新', category: '双非凡', parts: 10, points: 400 },
          { name: '冷域覆写', rarity: '稀有', status: '新', category: '累充', parts: 7, points: 100 },
          { name: '春烟若梦', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90, end: '2026年4月14日', days: 13 }
        ]
      },
      {
        id: 5, start: '2026年4月15日', end: '2026年4月22日', days: 8,
        suits: [
          { name: '未命名协议', rarity: '非凡', status: '新', category: '单非凡', parts: 10, points: 400 },
          { name: '星谱寻音', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 260 },
          { name: '银河寻音', rarity: '非凡', status: '新', category: '累充', parts: 8, points: 260 },
          { name: '虚幻数海', rarity: '稀有', status: '新', category: '免活', parts: 6, points: 80 },
          { name: '点染白夜', rarity: '非凡', status: '复', category: '双非凡', parts: 9, points: 380, start: '2026年4月23日', end: '2026年4月28日', days: 6 },
          { name: '沉于穹幕', rarity: '非凡', status: '复', category: '双非凡', parts: 9, points: 380, start: '2026年4月23日', end: '2026年4月28日', days: 6 },
          { name: '光明诵诗', rarity: '稀有', status: '复', category: '累充', parts: 8, points: 105, start: '2026年4月23日', end: '2026年4月28日', days: 6 }
        ]
      }
    ]
  },
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
          { name: '献予荆棘之心', rarity: '闪萦', status: '新', category: '单闪\n单非凡', parts: 16, points: 960 },
          { name: '一笼困心', rarity: '非凡', status: '新', category: '单闪\n单非凡', parts: 9, points: 380 },
          { name: '绮夜万术', rarity: '非凡', status: '新', category: '新意节', parts: 10, points: 300 },
          { name: '夜吻小恶魔', rarity: '稀有', status: '新', category: '累充', parts: 8, points: 105 },
          { name: '绯红的终舞', rarity: '稀有', status: '新', category: '免活', parts: 8, points: 90 }
        ]
      }
    ]
  }
];

var MH_DATA = MH_SETS[0];
