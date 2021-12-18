import{_ as a,c as t,o,b as n,d as s}from"./app.1a8e239b.js";var e="/interview-blog/linklist-2.png";const z='{"title":"234.\u56DE\u6587\u94FE\u8868","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/link-list/234.\u56DE\u6587\u94FE\u8868.md","lastUpdated":1639808999434}',l={},c=n("h1",{id:"_234-\u56DE\u6587\u94FE\u8868",tabindex:"-1"},[s("234.\u56DE\u6587\u94FE\u8868 "),n("a",{class:"header-anchor",href:"#_234-\u56DE\u6587\u94FE\u8868","aria-hidden":"true"},"#")],-1),p=n("p",null,"\u7ED9\u4F60\u4E00\u4E2A\u5355\u94FE\u8868\u7684\u5934\u8282\u70B9 head \uFF0C\u8BF7\u4F60\u5224\u65AD\u8BE5\u94FE\u8868\u662F\u5426\u4E3A\u56DE\u6587\u94FE\u8868\u3002\u5982\u679C\u662F\uFF0C\u8FD4\u56DE true \uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE false \u3002",-1),u=n("p",null,[n("strong",null,"\u793A\u4F8B 1\uFF1A")],-1),i=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Ahead = [1,2,2,1]
\u8F93\u51FA\uFF1Atrue
`)])],-1),k=n("p",null,[n("strong",null,"\u793A\u4F8B 2\uFF1A")],-1),r=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Ahead = [1,2]
\u8F93\u51FA\uFF1Afalse
`)])],-1),d=n("p",null,"\u63D0\u793A\uFF1A",-1),h=n("p",null,"\u94FE\u8868\u4E2D\u8282\u70B9\u6570\u76EE\u5728\u8303\u56F4[1, 105] \u5185 0 <= Node.val <= 9",-1),_=n("p",null,[n("strong",null,"\u8FDB\u9636\uFF1A"),s(" \u4F60\u80FD\u5426\u7528 \xA0O(n) \u65F6\u95F4\u590D\u6742\u5EA6\u548C O(1) \u7A7A\u95F4\u590D\u6742\u5EA6\u89E3\u51B3\u6B64\u9898\uFF1F")],-1),f=n("h3",{id:"\u89E3\u6CD5",tabindex:"-1"},[s("\u89E3\u6CD5 "),n("a",{class:"header-anchor",href:"#\u89E3\u6CD5","aria-hidden":"true"},"#")],-1),w=n("p",null,[n("strong",null,"\u89E3\u6CD5\u4E00\uFF1A\u5C06\u56DE\u6587\u94FE\u8868\u95EE\u9898\u8F6C\u6210\u56DE\u6587\u5B57\u7B26\u4E32\u95EE\u9898")],-1),v=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */`),s(`
`),n("span",{class:"token comment"},`/**
 * @param {ListNode} head
 * @return {boolean}
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"isPalindrome"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    head `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"==="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),g=n("p",null,[n("strong",null,"\u89E3\u6CD5\u4E8C\uFF1A \u56FD\u9645\u7AD9\u7684 most votes")],-1),m=n("p",null,"This can be solved by reversing the 2nd half and compare the two halves. Let's start with an example [1, 1, 2, 1].",-1),y=n("p",null,[s("In the beginning, set two pointers "),n("code",null,"fast"),s(" and "),n("code",null,"slow"),s(" starting at the head.")],-1),x=n("div",{class:"language-"},[n("pre",null,[n("code",null,`1 -> 1 -> 2 -> 1 -> null
sf
`)])],-1),b=n("p",null,[s("(1) "),n("strong",null,"Move:"),s(" fast pointer goes to the end, and "),n("code",null,"slow"),s(" goes to the middle.")],-1),N=n("div",{class:"language-"},[n("pre",null,[n("code",null,`1 -> 1 -> 2 -> 1 -> null
          s          f
`)])],-1),j=n("p",null,[s("(2) "),n("strong",null,"Reverse:"),s(" the right half is reversed, and slow pointer becomes the 2nd head.")],-1),L=n("div",{class:"language-"},[n("pre",null,[n("code",null,`1 -> 1    null <- 2 <- 1
h                      s
`)])],-1),q=n("p",null,[s("(3) "),n("strong",null,"Compare:"),s(" run the two pointers head and slow together and compare.")],-1),$=n("div",{class:"language-"},[n("pre",null,[n("code",null,`1 -> 1    null <- 2 <- 1
     h            s
`)])],-1),B=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */`),s(`
`),n("span",{class:"token comment"},`/**
 * @param {ListNode} head
 * @return {boolean}
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"isPalindrome"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" fast "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},","),s(`
    slow `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("fast "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" fast"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("fast "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// odd nodes: let right half smaller"),s(`
    slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  slow `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),s("slow"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  fast `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("slow "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("fast"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"!="),s(" slow"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" prev "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    head`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" prev"),n("span",{class:"token punctuation"},";"),s(`
    prev `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
    head `),n("span",{class:"token operator"},"="),s(" next"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" prev"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),D=n("p",null,"\u6765\uFF0C\u770B\u770B\u7ED3\u679C\uFF01",-1),P=n("p",null,[n("img",{src:e,alt:""})],-1),O=[c,p,u,i,k,r,d,h,_,f,w,v,g,m,y,x,b,N,j,L,q,$,B,D,P];function T(V,C,E,I,M,R){return o(),t("div",null,O)}var A=a(l,[["render",T]]);export{z as __pageData,A as default};
