import{_ as t,c as a,o,b as n,d as s}from"./app.c2d6ed1b.js";var e="/interview-blog/merge_ex1.jpg";const V='{"title":"21.\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"data-structures/link-list/21.\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868.md","lastUpdated":1657622796478}',l={},c=n("h1",{id:"_21-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868",tabindex:"-1"},[s("21.\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868 "),n("a",{class:"header-anchor",href:"#_21-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868","aria-hidden":"true"},"#")],-1),p=n("p",null,"\u5C06\u4E24\u4E2A\u5347\u5E8F\u94FE\u8868\u5408\u5E76\u4E3A\u4E00\u4E2A\u65B0\u7684 \u5347\u5E8F \u94FE\u8868\u5E76\u8FD4\u56DE\u3002\u65B0\u94FE\u8868\u662F\u901A\u8FC7\u62FC\u63A5\u7ED9\u5B9A\u7684\u4E24\u4E2A\u94FE\u8868\u7684\u6240\u6709\u8282\u70B9\u7EC4\u6210\u7684\u3002",-1),u=n("p",null,[n("img",{src:e,alt:""})],-1),i=n("p",null,[n("strong",null,"\u793A\u4F8B 1\uFF1A")],-1),k=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Al1 = [1,2,4], l2 = [1,3,4]
\u8F93\u51FA\uFF1A[1,1,2,3,4,4]
`)])],-1),r=n("p",null,[n("strong",null,"\u793A\u4F8B 2\uFF1A")],-1),d=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Al1 = [], l2 = []
\u8F93\u51FA\uFF1A[]
`)])],-1),_=n("p",null,[n("strong",null,"\u793A\u4F8B 3\uFF1A")],-1),h=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Al1 = [], l2 = [0]
\u8F93\u51FA\uFF1A[0]
`)])],-1),m=n("p",null,"\u63D0\u793A\uFF1A",-1),f=n("p",null,"\u4E24\u4E2A\u94FE\u8868\u7684\u8282\u70B9\u6570\u76EE\u8303\u56F4\u662F [0, 50] -100 <= Node.val <= 100 l1 \u548C l2 \u5747\u6309 \u975E\u9012\u51CF\u987A\u5E8F \u6392\u5217",-1),g=n("h3",{id:"\u89E3\u6CD5",tabindex:"-1"},[s("\u89E3\u6CD5 "),n("a",{class:"header-anchor",href:"#\u89E3\u6CD5","aria-hidden":"true"},"#")],-1),v=n("p",null,[n("strong",null,"\u65B9\u6CD5\u4E00\uFF1A\u9012\u5F52")],-1),w=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */`),s(`
`),n("span",{class:"token comment"},`/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"mergeTwoLists"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("list1"),n("span",{class:"token punctuation"},","),s(" list2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list2 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<"),s(" list2"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    list1`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},","),s(" list2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    list2`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"mergeTwoLists"),n("span",{class:"token punctuation"},"("),s("list2"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},","),s(" list1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),x=n("p",null,[n("strong",null,"\u65B9\u6CD5\u4E8C\uFF1A\u8FED\u4EE3\u94FE\u8868\u8FDB\u884C\u6BD4\u8F83")],-1),y=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */`),s(`
`),n("span",{class:"token comment"},`/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"mergeTwoLists"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("list1"),n("span",{class:"token punctuation"},","),s(" list2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" mergedHead "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    val`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
    next`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(" mergedHead"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("list1 "),n("span",{class:"token operator"},"&&"),s(" list2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list1"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<"),s(" list2"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      current`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" list1"),n("span",{class:"token punctuation"},";"),s(`
      list1 `),n("span",{class:"token operator"},"="),s(" list1"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      current`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" list2"),n("span",{class:"token punctuation"},";"),s(`
      list2 `),n("span",{class:"token operator"},"="),s(" list2"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  current`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" list1 "),n("span",{class:"token operator"},"||"),s(" list2"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u6DFB\u52A0\u5269\u4E0B\u7684\u8F83\u957F\u7684\u94FE\u8868"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" mergedHead"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),L=[c,p,u,i,k,r,d,_,h,m,f,g,v,w,x,y];function N(b,T,j,$,B,D){return o(),a("div",null,L)}var E=t(l,[["render",N]]);export{V as __pageData,E as default};
