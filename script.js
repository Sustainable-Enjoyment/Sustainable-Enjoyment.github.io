const translations = {
  zh: {
    navAbout: '关于我', navEducation: '教育背景', navContact: '联系',
    eyebrow: '博士生 · 计算机系', heroTagline: '香港理工大学计算机系博士生',
    heroIntro: '导师：曹建农教授、陈云天教授。',
    emailMe: '发邮件 <span>↗</span>', aboutLabel: '关于我',
    aboutLead: '我关注源于现实需求、能够产生实际影响，同时又具有方法、算法或理论研究空间的计算问题。',
    aboutBody1: '我的本科训练结合了数学与金融。期间，我围绕生产决策、供应链风险测度和社交网络分析开展项目，接触了统计推断、优化、动态规划、自然语言处理和网络模拟等方法。',
    aboutBody2: '目前我正通过跨领域阅读来理解研究问题是如何形成的。相比过早地把自己限定在某一种技术或领域，我更希望找到那些在实践中有用、同时又值得深入研究的问题。',
    projectsLabel: '项目经历',
    project1Title: '抽样检测不确定性下的企业生产决策', project1Body: '针对质量检测成本和不确定性，建立多阶段生产决策模型。作为队长，我负责模型设计、序贯概率比检验、动态规划和灵敏度分析。',
    project2Title: '基于词嵌入的供应链风险测度', project2Body: '独立完成的文本分析项目：利用 Word2Vec 从财报电话会议中提取风险信号，并与美股数据结合进行评估，探索注意力机制和图排序方法的扩展。',
    project3Title: '社交网络中的影响力最大化', project3Body: '结合贪心算法、独立级联模型、广度优先搜索和蒙特卡洛模拟，在包含 20,000 名用户的网络中识别具有影响力的节点。',
    educationLabel: '教育背景', phdLine: '计算机系博士生', supervisorLine: '导师：曹建农教授、陈云天教授 · PolyU Research Postgraduate Scholarship', honorsDegree: '数学荣誉学士', financeDegree: '金融学士 <em>（双学位）</em>', awardLine: '专业排名前 3.7% · 优秀毕业生 · 2024 高教社杯全国大学生数学建模竞赛国家一等奖',
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
