module.exports = {
  base: "/interview-blog/",
  lang: "zh-CN",
  title: "前端学习记录",
  description: "hefeng6500 的前端学习笔记，记录学习历程，分享学习总结！",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "javascript", link: "/javascript/" },
      { text: "数据结构与算法", link: "/algorithm/" },
    ],
    sidebar: {
      javascript: [
        {
          text: "深入javascript",
          children: [
            { text: "JavaScript深入之执行上下文", link: "/javascript/1" },
            { text: "JavaScript深入之作用域链", link: "/javascript/2" },
            { text: "JavaScript深入之闭包", link: "/javascript/3" },
            { text: "JavaScript深入之call和apply", link: "/javascript/4" },
            { text: "JavaScript深入之bind", link: "/javascript/5" },
            { text: "JavaScript深入之new", link: "/javascript/6" },
            {
              text: "JavaScript深入之类数组对象arguments",
              link: "/javascript/7",
            },
            { text: "JavaScript深入之循环和iterator", link: "/javascript/8" },
            { text: "JavaScript深入之原型和原型链", link: "/javascript/9" },
            { text: "JavaScript深入之继承", link: "/javascript/10" },
          ],
        },
      ],
      algorithm: [
        {
          text: "数据结构",
          children: [
            { text: "栈", link: "/algorithm/1" },
            { text: "队列", link: "/algorithm/2" },
          ],
        },
        {
          text: "算法",
          children: [
            {
              text: "数组",
              children: [
                {
                  text: "217.存在重复元素 2021.11.07",
                  link: "/algorithm/array/217.存在重复元素",
                },
                {
                  text: "136.只出现一次的数字 2021.11.08",
                  link: "/algorithm/array/136.只出现一次的数字",
                },
                {
                  text: "350. 两个数组的交集 II 2021.11.09",
                  link: "/algorithm/array/350. 两个数组的交集 II",
                },
                {
                  text: "66. 加一 2021.11.10",
                  link: "/algorithm/array/66.加一",
                },
                {
                  text: "283.移动零 2021.11.11",
                  link: "/algorithm/array/283.移动零",
                },
                {
                  text: "1.两数之和 2021.11.12",
                  link: "/algorithm/array/1.两数之和",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};
