module.exports = {
  base: "/interview-blog/",
  lang: "zh-CN",
  title: "算法自由之路",
  description: "hefeng6500 的前端学习笔记，记录学习历程，分享学习总结！",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "数据结构", link: "/data-structures/" },
      { text: "算法", link: "/algorithm/" },
      { text: "Tecent-50", link: "/tecent-50/" },
      {
        text: "GitHub",
        link: "https://github.com/hefeng6500/interview-blog",
        isExternal: true,
      },
    ],
    sidebar: {
      "data-structures": [
        {
          text: "数据结构专题",
          children: [
            {
              text: "整数",
              children: [
                {
                  text: "整数除法",
                  link: "/data-structures/integer/整数除法",
                },
                {
                  text: '二进制加法',
                  link: "/data-structures/integer/二进制加法",
                },
                {
                  text: '前n个数字二进制中1的个数',
                  link: "/data-structures/integer/前n个数字二进制中1的个数",
                },
                {
                  text: '只出现一次的数字',
                  link: "/data-structures/integer/只出现一次的数字",
                },
                {
                  text: '单词长度的最大乘积',
                  link: "/data-structures/integer/单词长度的最大乘积",
                },
                {
                  text: "排序数组中两个数字之和",
                  link: "/data-structures/integer/排序数组中两个数字之和",
                  
                }
              ],
            },
            {
              text: "栈和队列",
              children: [
                {
                  text: "用两个栈实现队列",
                  link: "/data-structures/stack-and-queue/09.用两个栈实现队列",
                },
              ],
            },
            {
              text: "数组",
              children: [
                {
                  text: "217.存在重复元素",
                  link: "/data-structures/array/217.存在重复元素",
                },
                {
                  text: "136.只出现一次的数字",
                  link: "/data-structures/array/136.只出现一次的数字",
                },
                {
                  text: "350. 两个数组的交集 II",
                  link: "/data-structures/array/350. 两个数组的交集 II",
                },
                {
                  text: "66. 加一",
                  link: "/data-structures/array/66.加一",
                },
                {
                  text: "283.移动零",
                  link: "/data-structures/array/283.移动零",
                },
                {
                  text: "1.两数之和",
                  link: "/data-structures/array/1.两数之和",
                },
                {
                  text: "36.有效的数独",
                  link: "/data-structures/array/36.有效的数独",
                },
                {
                  text: "48.旋转图像",
                  link: "/data-structures/array/48.旋转图像",
                },
                {
                  text: "11.盛最多水的容器",
                  link: "/data-structures/array/11.盛最多水的容器",
                },
              ],
            },
            {
              text: "字符串",
              children: [
                {
                  text: "344.反转字符串",
                  link: "/data-structures/string/344.反转字符串",
                },
                {
                  text: "7.整数反转",
                  link: "/data-structures/string/7.整数反转",
                },
                {
                  text: "387.字符串中的第一个唯一字符",
                  link: "/data-structures/string/387.字符串中的第一个唯一字符",
                },
                {
                  text: "242.有效的字母异位词",
                  link: "/data-structures/string/242.有效的字母异位词",
                },
                {
                  text: "125.验证回文串",
                  link: "/data-structures/string/125.验证回文串",
                },
                {
                  text: "8.字符串转换整数 (atoi)",
                  link: "/data-structures/string/8.字符串转换整数 (atoi)",
                },
                {
                  text: "38.外观数列",
                  link: "/data-structures/string/38.外观数列",
                },
                {
                  text: "14.最长公共前缀",
                  link: "/data-structures/string/14.最长公共前缀",
                },
              ],
            },
            {
              text: "链表",
              children: [
                {
                  text: "237.删除链表中的节点",
                  link: "/data-structures/link-list/237.删除链表中的节点",
                },
                {
                  // 19.删除链表的倒数第 N 个结点
                  text: "19.删除链表的倒数第 N 个结点",
                  link: "/data-structures/link-list/19.删除链表的倒数第 N 个结点",
                },
                {
                  text: "206.反转链表 12.03",
                  link: "/data-structures/link-list/206.反转链表",
                },
                {
                  text: "21.合并两个有序链表",
                  link: "/data-structures/link-list/21.合并两个有序链表",
                },
                {
                  text: "234.回文链表",
                  link: "/data-structures/link-list/234.回文链表",
                },
                {
                  text: "141.环形链表",
                  link: "/data-structures/link-list/141.环形链表",
                },
              ],
            },
            {
              text: "树",
              children: [
                {
                  text: "104.二叉树的最大深度",
                  link: "/data-structures/tree/104.二叉树的最大深度",
                },
                {
                  text: "98.验证二叉搜索树",
                  link: "/data-structures/tree/98.验证二叉搜索树",
                },
                {
                  text: "101.对称二叉树",
                  link: "/data-structures/tree/101.对称二叉树",
                },
                {
                  text: "102.二叉树的层序遍历",
                  link: "/data-structures/tree/102.二叉树的层序遍历",
                },
                {
                  text: "108.将有序数组转换为二叉搜索树",
                  link: "/data-structures/tree/108.将有序数组转换为二叉搜索树",
                },
              ],
            },
          ],
        },
      ],
      algorithm: [
        {
          text: "算法",
          children: [
            {
              text: "排序和搜索",
              children: [
                {
                  text: "88.合并两个有序数组",
                  link: "/algorithm/sort-and-search/88.合并两个有序数组",
                },
                {
                  text: "278.第一个错误的版本qwe",
                  link: "/algorithm/sort-and-search/278.第一个错误的版本",
                },
              ],
            },
            {
              text: "动态规划",
              children: [
                {
                  text: "70.爬楼梯",
                  link: "/algorithm/dynamic-programming/70.爬楼梯",
                },
                {
                  text: "121.买卖股票的最佳时机",
                  link: "/algorithm/dynamic-programming/121.买卖股票的最佳时机",
                },
                {
                  text: "53.最大子数组和",
                  link: "/algorithm/dynamic-programming/53.最大子数组和",
                },
                {
                  text: "198.打家劫舍",
                  link: "/algorithm/dynamic-programming/198.打家劫舍",
                },
              ],
            },
            {
              text: "设计问题",
              children: [
                {
                  text: "384.打乱数组",
                  link: "/algorithm/design-problem/384.打乱数组",
                },
                {
                  text: "155.最小栈",
                  link: "/algorithm/design-problem/155.最小栈",
                },
              ],
            },
            {
              text: "数学",
              children: [
                {
                  text: "412.Fizz Buzz",
                  link: "/algorithm/math/412.Fizz Buzz",
                },
                {
                  text: "204.计数质数",
                  link: "/algorithm/math/204.计数质数",
                },
                {
                  text: "326.3 的幂",
                  link: "/algorithm/math/326.3 的幂",
                },
                {
                  text: "13.罗马数字转整数",
                  link: "/algorithm/math/13.罗马数字转整数",
                },
              ],
            },
          ],
        },
      ],
      "tecent-50": [
        {
          text: "腾讯精选50题",
          children: [
            {
              text: "2.两数相加",
              link: "/tecent-50/2.两数相加",
            }
          ]
        }
      ]
    },
  },
};
