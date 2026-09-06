const translations = {
  zh: {
    navAbout: '关于我', navEducation: '教育背景', navContact: '联系',
    eyebrow: '博士生 · 计算机系', heroTagline: '香港理工大学计算机系博士生',
    heroIntro: '导师：曹建农教授、陈云天教授。',
    emailMe: '发邮件 <span>↗</span>', aboutLabel: '关于我',
    aboutLead: '我目前是香港理工大学计算学系博士研究生，在曹建农教授和陈云天教授的指导下开展研究。2026 年，我获得山东大学数学荣誉学士学位及金融学士学位。',
    aboutBody1: '本科阶段的数学与金融训练使我接触了建模、优化、统计分析以及数据驱动的研究问题。逐渐地，相比某一种特定方法，我更关心一个问题本身是否值得研究，以及计算方法能否帮助我们理解或解决它。',
    aboutBody2: '在博士早期阶段，我正广泛阅读不同领域的文献，学习有意义的研究问题是如何被发现和表述的。我尤其关注那些在实践中重要、同时又具有方法、算法或理论研究空间的问题。',
    projectsLabel: '项目经历',
    project1Title: '抽样检测不确定性下的企业生产决策', project1Body: '针对质量检测成本和不确定性，建立多阶段生产决策模型。作为队长，我负责模型设计、序贯概率比检验、动态规划和灵敏度分析。',
    project2Title: '基于词嵌入的供应链风险测度', project2Body: '独立完成的文本分析项目：利用 Word2Vec 从财报电话会议中提取风险信号，并与美股数据结合进行评估，探索注意力机制和图排序方法的扩展。',
    project3Title: '社交网络中的影响力最大化', project3Body: '结合贪心算法、独立级联模型、广度优先搜索和蒙特卡洛模拟，在包含 20,000 名用户的网络中识别具有影响力的节点。',
    educationLabel: '教育背景', phdLine: '计算机系博士生', supervisorLine: '导师：曹建农教授、陈云天教授', honorsDegree: '数学荣誉学士', financeDegree: '金融学士 <em>（双学位）</em>', awardLine: '专业排名前 3.7% · 优秀毕业生',
    contactEyebrow: '联系我', contactTitle: '欢迎交流一个值得研究的好问题。', footerText: '最后更新：2026 年 9 月'
  }
};
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
let isZh = false;
langToggle.addEventListener('click', () => {
  isZh = !isZh;
  document.documentElement.lang = isZh ? 'zh-CN' : 'en';
  langToggle.textContent = isZh ? 'EN' : '中文';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (isZh && translations.zh[key]) el.innerHTML = translations.zh[key];
    else el.innerHTML = el.dataset.original || el.innerHTML;
  });
});
document.querySelectorAll('[data-i18n]').forEach(el => { el.dataset.original = el.innerHTML; });
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☾' : '☼';
});
