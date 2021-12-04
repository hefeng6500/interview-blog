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
      {
        text: "GitHub",
        link: "https://github.com/hefeng6500/interview-blog",
        isExternal: true,
      },
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
            { text: "栈", link: "/data-structures/stack" },
            { text: "队列", link: "/data-structures/queue" },
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
                {
                  text: "36.有效的数独 2021.11.21",
                  link: "/algorithm/array/36.有效的数独",
                },
                {
                  text: "48.旋转图像 2021.11.21",
                  link: "/algorithm/array/48.旋转图像",
                },
              ],
            },
            {
              text: "字符串",
              children: [
                {
                  text: "344.反转字符串 2021.11.22",
                  link: "/algorithm/string/344.反转字符串",
                },
                {
                  text: "7.整数反转 2021.11.23",
                  link: "/algorithm/string/7.整数反转",
                },
                {
                  text: "387.字符串中的第一个唯一字符 2021.11.23",
                  link: "/algorithm/string/387.字符串中的第一个唯一字符",
                },
                {
                  text: "242.有效的字母异位词 2021.11.24",
                  link: "/algorithm/string/242.有效的字母异位词",
                },
                {
                  text: "125.验证回文串 2021.11.25",
                  link: "/algorithm/string/125.验证回文串",
                },
                {
                  text: "8.字符串转换整数 (atoi) 2021.11.27",
                  link: "/algorithm/string/8.字符串转换整数 (atoi)",
                },
                {
                  text: "38.外观数列 2021.11.28",
                  link: "/algorithm/string/38.外观数列",
                },
                {
                  text: "14.最长公共前缀 2021.11.28",
                  link: "/algorithm/string/14.最长公共前缀",
                },
              ],
            },
            {
              text: "链表",
              children: [
                {
                  text: "237.删除链表中的节点 2021.11.29",
                  link: "/algorithm/link-list/237.删除链表中的节点",
                },
                {
                  // 19.删除链表的倒数第 N 个结点
                  text: "19.删除链表的倒数第 N 个结点 2021.11.29",
                  link: "/algorithm/link-list/19.删除链表的倒数第 N 个结点",
                },
                {
                  text: "206.反转链表 2021.12.03",
                  link: "/algorithm/link-list/206.反转链表",
                },
                {
                  text: "21.合并两个有序链表 2021.12.04",
                  link: "/algorithm/link-list/21.合并两个有序链表",
                },
                {
                  text: "234.回文链表 2021.12.04",
                  link: "/algorithm/link-list/234.回文链表",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};
