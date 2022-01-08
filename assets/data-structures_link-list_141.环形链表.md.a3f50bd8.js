import{_ as a,c as t,o,b as n,d as s}from"./app.e81d32ba.js";var e="/interview-blog/circularlinkedlist.png",l="/interview-blog/circularlinkedlist_test2.png",c="/interview-blog/circularlinkedlist_test3.png";const I='{"title":"141.\u73AF\u5F62\u94FE\u8868","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"data-structures/link-list/141.\u73AF\u5F62\u94FE\u8868.md","lastUpdated":1641652942386}',p={},u=n("h1",{id:"_141-\u73AF\u5F62\u94FE\u8868",tabindex:"-1"},[s("141.\u73AF\u5F62\u94FE\u8868 "),n("a",{class:"header-anchor",href:"#_141-\u73AF\u5F62\u94FE\u8868","aria-hidden":"true"},"#")],-1),i=n("p",null,[s("\u7ED9\u4F60\u4E00\u4E2A\u94FE\u8868\u7684\u5934\u8282\u70B9 "),n("code",null,"head"),s(" \uFF0C\u5224\u65AD\u94FE\u8868\u4E2D\u662F\u5426\u6709\u73AF\u3002")],-1),k=n("p",null,[s("\u5982\u679C\u94FE\u8868\u4E2D\u6709\u67D0\u4E2A\u8282\u70B9\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FDE\u7EED\u8DDF\u8E2A "),n("code",null,"next"),s(" \u6307\u9488\u518D\u6B21\u5230\u8FBE\uFF0C\u5219\u94FE\u8868\u4E2D\u5B58\u5728\u73AF\u3002 \u4E3A\u4E86\u8868\u793A\u7ED9\u5B9A\u94FE\u8868\u4E2D\u7684\u73AF\uFF0C\u8BC4\u6D4B\u7CFB\u7EDF\u5185\u90E8\u4F7F\u7528\u6574\u6570 "),n("code",null,"pos"),s(" \u6765\u8868\u793A\u94FE\u8868\u5C3E\u8FDE\u63A5\u5230\u94FE\u8868\u4E2D\u7684\u4F4D\u7F6E\uFF08\u7D22\u5F15\u4ECE 0 \u5F00\u59CB\uFF09\u3002\u5982\u679C "),n("code",null,"pos"),s(" \u662F -1\uFF0C\u5219\u5728\u8BE5\u94FE\u8868\u4E2D\u6CA1\u6709\u73AF\u3002\u6CE8\u610F\uFF1A"),n("code",null,"pos"),s(" \u4E0D\u4F5C\u4E3A\u53C2\u6570\u8FDB\u884C\u4F20\u9012\uFF0C\u4EC5\u4EC5\u662F\u4E3A\u4E86\u6807\u8BC6\u94FE\u8868\u7684\u5B9E\u9645\u60C5\u51B5\u3002")],-1),r=n("p",null,[s("\u5982\u679C\u94FE\u8868\u4E2D\u5B58\u5728\u73AF\uFF0C\u5219\u8FD4\u56DE "),n("code",null,"true"),s(" \u3002 \u5426\u5219\uFF0C\u8FD4\u56DE "),n("code",null,"false"),s(" \u3002")],-1),d=n("p",null,[n("strong",null,"\u793A\u4F8B 1\uFF1A")],-1),_=n("p",null,[n("img",{src:e,alt:""})],-1),h=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Ahead = [3,2,0,-4], pos = 1
\u8F93\u51FA\uFF1Atrue
\u89E3\u91CA\uFF1A\u94FE\u8868\u4E2D\u6709\u4E00\u4E2A\u73AF\uFF0C\u5176\u5C3E\u90E8\u8FDE\u63A5\u5230\u7B2C\u4E8C\u4E2A\u8282\u70B9\u3002
`)])],-1),f=n("p",null,[n("strong",null,"\u793A\u4F8B \xA02\uFF1A")],-1),g=n("p",null,[n("img",{src:l,alt:""})],-1),w=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Ahead = [1,2], pos = 0
\u8F93\u51FA\uFF1Atrue
\u89E3\u91CA\uFF1A\u94FE\u8868\u4E2D\u6709\u4E00\u4E2A\u73AF\uFF0C\u5176\u5C3E\u90E8\u8FDE\u63A5\u5230\u7B2C\u4E00\u4E2A\u8282\u70B9\u3002
`)])],-1),m=n("p",null,[n("strong",null,"\u793A\u4F8B 3\uFF1A")],-1),y=n("p",null,[n("img",{src:c,alt:""})],-1),v=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Ahead = [1], pos = -1
\u8F93\u51FA\uFF1Afalse
\u89E3\u91CA\uFF1A\u94FE\u8868\u4E2D\u6CA1\u6709\u73AF\u3002
`)])],-1),x=n("p",null,"\u63D0\u793A\uFF1A",-1),b=n("p",null,"\u94FE\u8868\u4E2D\u8282\u70B9\u7684\u6570\u76EE\u8303\u56F4\u662F [0, 104] -105 <= Node.val <= 105 pos \u4E3A -1 \u6216\u8005\u94FE\u8868\u4E2D\u7684\u4E00\u4E2A \u6709\u6548\u7D22\u5F15 \u3002",-1),N=n("p",null,[n("strong",null,"\u8FDB\u9636\uFF1A"),s(" \u4F60\u80FD\u7528 O(1)\uFF08\u5373\uFF0C\u5E38\u91CF\uFF09\u5185\u5B58\u89E3\u51B3\u6B64\u95EE\u9898\u5417\uFF1F")],-1),L=n("h3",{id:"\u89E3\u6CD5",tabindex:"-1"},[s("\u89E3\u6CD5 "),n("a",{class:"header-anchor",href:"#\u89E3\u6CD5","aria-hidden":"true"},"#")],-1),j=n("p",null,[n("strong",null,"\u89E3\u6CD5\u4E00\uFF1A\u5FEB\u6162\u6307\u9488")],-1),C=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */`),s(`

`),n("span",{class:"token comment"},`/**
 * @param {ListNode} head
 * @return {boolean}
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"hasCycle"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" slow "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" fast "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("fast "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" fast"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("slow "),n("span",{class:"token operator"},"==="),s(" fast"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),D=n("p",null,[n("strong",null,"\u65B9\u6CD5\u4E8C\uFF1A \u54C8\u5E0C\u8868")],-1),$=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */`),s(`

`),n("span",{class:"token comment"},`/**
 * @param {ListNode} head
 * @return {boolean}
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"hasCycle"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" map "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    head `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),B=n("p",null,[n("strong",null,"\u89E3\u6CD5\u4E09\uFF1A\u9012\u5F52\uFF08\u9010\u4E2A\u5220\u9664\uFF09")],-1),V=n("p",null,[s("\u4E00\u4E2A\u94FE\u8868\u4ECE\u5934\u8282\u70B9\u5F00\u59CB\u4E00\u4E2A\u4E2A\u5220\u9664\uFF0C"),n("strong",null,"\u6240\u8C13\u5220\u9664\u5C31\u662F\u8BA9\u4ED6\u7684 next \u6307\u9488\u6307\u5411\u4ED6\u81EA\u5DF1"),s("\u3002")],-1),E=n("p",null,[n("strong",null,"\u5982\u679C\u6CA1\u6709\u73AF\uFF0C\u4ECE\u5934\u7ED3\u70B9\u4E00\u4E2A\u4E2A\u5220\u9664\uFF0C\u6700\u540E\u80AF\u5B9A\u4F1A\u5220\u5B8C\uFF1B")],-1),M=n("p",null,[n("strong",null,"\u5982\u679C\u5220\u5230\u6700\u540E\uFF0C\u51FA\u73B0 head=head.next\uFF0C \u8BF4\u660E\u5B58\u5728\u73AF")],-1),O=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */`),s(`

`),n("span",{class:"token comment"},`/**
 * @param {ListNode} head
 * @return {boolean}
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"hasCycle"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("head "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"!"),s("head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"==="),s(" head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" nextNode "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
  head`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"hasCycle"),n("span",{class:"token punctuation"},"("),s("nextNode"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),P=[u,i,k,r,d,_,h,f,g,w,m,y,v,x,b,N,L,j,C,D,$,B,V,E,M,O];function T(U,q,z,A,F,G){return o(),t("div",null,P)}var J=a(p,[["render",T]]);export{I as __pageData,J as default};
