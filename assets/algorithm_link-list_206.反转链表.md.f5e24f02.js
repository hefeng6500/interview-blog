import{_ as t,c as a,o,b as n,d as s}from"./app.e3cb8b85.js";var e="/interview-blog/reverse-linklist-result.png";const O='{"title":"206.\u53CD\u8F6C\u94FE\u8868","description":"","frontmatter":{},"relativePath":"algorithm/link-list/206.\u53CD\u8F6C\u94FE\u8868.md","lastUpdated":1639831853162}',c={},p=n("h1",{id:"_206-\u53CD\u8F6C\u94FE\u8868",tabindex:"-1"},[s("206.\u53CD\u8F6C\u94FE\u8868 "),n("a",{class:"header-anchor",href:"#_206-\u53CD\u8F6C\u94FE\u8868","aria-hidden":"true"},"#")],-1),l=n("p",null,"\u7ED9\u4F60\u5355\u94FE\u8868\u7684\u5934\u8282\u70B9 head \uFF0C\u8BF7\u4F60\u53CD\u8F6C\u94FE\u8868\uFF0C\u5E76\u8FD4\u56DE\u53CD\u8F6C\u540E\u7684\u94FE\u8868\u3002",-1),u=n("p",null,[n("strong",null,"\u793A\u4F8B 1\uFF1A")],-1),k=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Ahead = [1,2,3,4,5]
\u8F93\u51FA\uFF1A[5,4,3,2,1]
`)])],-1),i=n("p",null,[n("strong",null,"\u793A\u4F8B 2\uFF1A")],-1),r=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Ahead = [1,2]
\u8F93\u51FA\uFF1A[2,1]
`)])],-1),d=n("p",null,[n("strong",null,"\u793A\u4F8B 3\uFF1A")],-1),h=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Ahead = []
\u8F93\u51FA\uFF1A[]
`)])],-1),_=n("p",null,"\u63D0\u793A\uFF1A",-1),f=n("p",null,"\u94FE\u8868\u4E2D\u8282\u70B9\u7684\u6570\u76EE\u8303\u56F4\u662F [0, 5000] -5000 <= Node.val <= 5000",-1),w=n("p",null,[n("strong",null,"\u8FDB\u9636\uFF1A"),s(" \u94FE\u8868\u53EF\u4EE5\u9009\u7528\u8FED\u4EE3\u6216\u9012\u5F52\u65B9\u5F0F\u5B8C\u6210\u53CD\u8F6C\u3002\u4F60\u80FD\u5426\u7528\u4E24\u79CD\u65B9\u6CD5\u89E3\u51B3\u8FD9\u9053\u9898\uFF1F")],-1),v=n("p",null,[n("strong",null,"\u89E3\u6CD5\u4E00\uFF1A\u9012\u5F52")],-1),y=n("blockquote",null,[n("p",null,"\u8FD9\u9053\u9898\u7B97\u662F\u4E00\u9053\u7B80\u5355\u7684\u9898\uFF0C\u6211\u4F7F\u7528\u9012\u5F52\u7684\u65B9\u6CD5\u5374\u96BE\u5012\u6211\u81EA\u5DF1\u4E86\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A")],-1),m=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */`),s(`
`),n("span",{class:"token comment"},`/**
 * @param {ListNode} head
 * @return {ListNode}
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"reverseListHelper"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"||"),s(" node"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" node"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" temp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverseListHelper"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    node`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    temp`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"reverseListHelper"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),x=n("p",null,[n("strong",null,"\u601D\u8DEF"),s("\uFF1A \u6309\u7167\u6211\u7684\u601D\u8DEF\uFF0C\u4E00\u76F4\u9012\u5F52\u5230\u6700\u540E\u4E00\u4E2A\u8282\u70B9\uFF0C\u5E76\u5C06\u5B83\u4F5C\u4E3A temp \u8FD4\u56DE\uFF0C\u7136\u540E\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u4F5C\u4E3A head \u8282\u70B9\uFF0C head.next \u5C31\u63A5\u4E0A\u4E00\u4E2A\u8282\u70B9\uFF0C\u4E8E\u662F\u5C31 "),n("code",null,"temp.next = node;"),s(", \u5374\u4E0D\u77E5\u9053\u8FD9\u884C\u4EE3\u7801\u4E00\u76F4\u5728\u4FEE\u6539\u65B0\u7684\u5934\u8282\u70B9\u7684 next \u503C\uFF0C\u5BFC\u81F4\u6700\u540E\u8FD4\u56DE\u7684\u53EA\u6709\u539F\u59CB\u94FE\u8868\u7684 [tail, head]")],-1),g=n("p",null,[s("\u6240\u4EE5\uFF0C "),n("code",null,"temp.next = node;"),s(" \u8FD9\u884C\u4EE3\u7801\u662F\u7F6A\u9B41\u7978\u9996\uFF01")],-1),L=n("p",null,"\u7136\u540E\u6211\u6539\u6210\u8FD9\u6837\u4E0B\u9762\u8FD9\u6837",-1),N=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */`),s(`
`),n("span",{class:"token comment"},`/**
 * @param {ListNode} head
 * @return {ListNode}
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"reverseListHelper"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"||"),s(" node"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" node"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" temp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverseListHelper"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    node`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    node`),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"reverseListHelper"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),H=n("p",null,[s("\u5F88\u660E\u663E\u53D1\u73B0\uFF0C"),n("code",null,"node.next = null;"),s(" \u8D4B\u503C\u4E4B\u540E\uFF0C \u4E0B\u9762\u8FD9\u884C\u5C31\u62A5\u9519\u4E86 "),n("code",null,"node.next.next = node"),s(", "),n("code",null,"null.next"),s(" \u80AF\u5B9A\u662F\u8DD1\u4E0D\u901A\u4E86\u5440\uFF01")],-1),b=n("p",null,"\u6240\u4EE5\u6362\u4E2A\u987A\u5E8F\u5C82\u4E0D\u662F\u597D\u4E86\uFF01\u5982\u4E0B\uFF1A",-1),j=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */`),s(`
`),n("span",{class:"token comment"},`/**
 * @param {ListNode} head
 * @return {ListNode}
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"reverseListHelper"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"||"),s(" node"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" node"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" temp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverseListHelper"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    node`),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},";"),s(`
    node`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"reverseListHelper"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),D=n("p",null,"\u6765\uFF01\u770B\u770B\u7ED3\u679C\uFF01",-1),$=n("p",null,[n("img",{src:e,alt:""})],-1),B=n("p",null,[n("strong",null,"\u89E3\u6CD5\u4E8C\uFF1A\u6808")],-1),V=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */`),s(`
`),n("span",{class:"token comment"},`/**
 * @param {ListNode} head
 * @return {ListNode}
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" stack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    head `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("stack"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" node "),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" newHead "),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" temp "),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    node`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
    node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  node`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"return"),s(" newHead"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),q=n("p",null,[n("strong",null,"\u89E3\u6CD5\u4E09\uFF1A\u53CC\u94FE\u8868")],-1),E=n("p",null,"\u8BF4\u5B9E\u8BDD\uFF0C \u8FD9\u79CD\u601D\u8DEF\u5F88\u4E0D\u597D\u7406\u89E3\uFF0C\u5E76\u4E14\u5B9E\u6D4B\u6548\u7387\u4E0D\u9AD8;",-1),P=n("p",null,[n("strong",null,"\u601D\u8DEF"),s("\uFF1A")],-1),T=n("p",null,"\u539F\u59CB\u94FE\u8868\u8FED\u4EE3\u7684\u65F6\u5019\uFF0C\u6BCF\u4E00\u4E2A\u8282\u70B9\u4F5C\u4E3A\u65B0\u94FE\u8868\u7684\u5934\u7ED3\u70B9\u3002",-1),U=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */`),s(`
`),n("span",{class:"token comment"},`/**
 * @param {ListNode} head
 * @return {ListNode}
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" newHead "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" temp "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
    head`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" newHead"),n("span",{class:"token punctuation"},";"),s(`
    newHead `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
    head `),n("span",{class:"token operator"},"="),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" newHead"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),z=[p,l,u,k,i,r,d,h,_,f,w,v,y,m,x,g,L,N,H,b,j,D,$,B,V,q,E,P,T,U];function A(C,F,G,I,J,K){return o(),a("div",null,z)}var Q=t(c,[["render",A]]);export{O as __pageData,Q as default};
