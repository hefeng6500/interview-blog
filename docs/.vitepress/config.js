module.exports = {
  lang: 'zh-CN',
  title: '前端学习记录',
  description: 'hefeng6500 的前端学习笔记，记录学习历程，分享学习总结！',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'javascript', link: '/javascript/' },
      { text: '算法', link: '/algorithm/' },
      
    ],
    sidebar: {
      "javascript": [
        {
          text: '深入javascript',
          children: [
            { text: "JavaScript深入之执行上下文", link: "/javascript/1" },
            { text: "JavaScript深入之作用域链", link: "/javascript/2" },
            { text: "JavaScript深入之闭包", link: "/javascript/3" },
            { text: "JavaScript深入之call和apply", link: "/javascript/4" },
            { text: "JavaScript深入之bind", link: "/javascript/5" },
            { text: "JavaScript深入之new", link: "/javascript/6" },
            { text: "JavaScript深入之类数组对象arguments", link: "/javascript/7" },
            { text: "JavaScript深入之循环和iterator", link: "/javascript/8" },
            { text: "JavaScript深入之原型和原型链", link: "/javascript/9" },
            { text: "JavaScript深入之继承", link: "/javascript/10" },
          ]
        }
      ],
      "algorithm": [
        {
          text: '数据结构',
          children: [
            { text: "栈", link: "/algorithm/1" },
            { text: "队列", link: "/algorithm/2" },
          ]
        },
        {
          text: '算法',
          children: [
          ]
        },
        {
          text: '刷题',
          children: [
          ]
        }
      ]
    },
  },
}