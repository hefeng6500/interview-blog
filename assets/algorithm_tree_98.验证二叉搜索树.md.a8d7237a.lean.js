import{_ as a,c as t,o,b as n,d as s}from"./app.99222a11.js";var e="/interview-blog/tree1.jpg",c="/interview-blog/tree2.jpg",l="/interview-blog/1602255638-CdMLrU-image.png";const q='{"title":"98.\u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/tree/98.\u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811.md","lastUpdated":1639489922323}',p={},u=n("h1",{id:"_98-\u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811",tabindex:"-1"},[s("98.\u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811 "),n("a",{class:"header-anchor",href:"#_98-\u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811","aria-hidden":"true"},"#")],-1),r=n("p",null,[s("\u7ED9\u4F60\u4E00\u4E2A\u4E8C\u53C9\u6811\u7684\u6839\u8282\u70B9 "),n("code",null,"root"),s(" \uFF0C\u5224\u65AD\u5176\u662F\u5426\u662F\u4E00\u4E2A\u6709\u6548\u7684\u4E8C\u53C9\u641C\u7D22\u6811\u3002")],-1),i=n("p",null,"\u6709\u6548 \u4E8C\u53C9\u641C\u7D22\u6811\u5B9A\u4E49\u5982\u4E0B\uFF1A",-1),k=n("p",null,"\u8282\u70B9\u7684\u5DE6\u5B50\u6811\u53EA\u5305\u542B \u5C0F\u4E8E \u5F53\u524D\u8282\u70B9\u7684\u6570\u3002 \u8282\u70B9\u7684\u53F3\u5B50\u6811\u53EA\u5305\u542B \u5927\u4E8E \u5F53\u524D\u8282\u70B9\u7684\u6570\u3002 \u6240\u6709\u5DE6\u5B50\u6811\u548C\u53F3\u5B50\u6811\u81EA\u8EAB\u5FC5\u987B\u4E5F\u662F\u4E8C\u53C9\u641C\u7D22\u6811\u3002",-1),d=n("p",null,[n("strong",null,"\u793A\u4F8B 1\uFF1A")],-1),_=n("p",null,[n("img",{src:e,alt:""})],-1),h=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Aroot = [2,1,3]
\u8F93\u51FA\uFF1Atrue
`)])],-1),f=n("p",null,[n("strong",null,"\u793A\u4F8B 2\uFF1A")],-1),g=n("p",null,[n("img",{src:c,alt:""})],-1),m=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Aroot = [5,1,4,null,null,3,6]
\u8F93\u51FA\uFF1Afalse
`)])],-1),v=n("p",null,"\u89E3\u91CA\uFF1A\u6839\u8282\u70B9\u7684\u503C\u662F 5 \uFF0C\u4F46\u662F\u53F3\u5B50\u8282\u70B9\u7684\u503C\u662F 4 \u3002",-1),w=n("p",null,"\u63D0\u793A\uFF1A",-1),y=n("p",null,"\u6811\u4E2D\u8282\u70B9\u6570\u76EE\u8303\u56F4\u5728[1, 104] \u5185 -231 <= Node.val <= 231 - 1 \u901A\u8FC7\u6B21\u6570 384,507 \u63D0\u4EA4\u6B21\u6570 1,092,52",-1),b=n("h3",{id:"\u89E3\u6CD5",tabindex:"-1"},[s("\u89E3\u6CD5 "),n("a",{class:"header-anchor",href:"#\u89E3\u6CD5","aria-hidden":"true"},"#")],-1),V=n("p",null,[n("strong",null,"\u9012\u5F52")],-1),x=n("p",null,"\u8FD9\u91CC\u9700\u8981\u8003\u8651\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5DE6\u5B50\u6811\u8282\u70B9\u6811\u5B58\u5728\u5927\u4E8E \u7236\u7EA7 \u8282\u70B9\u7684\uFF0C \u6216\u8005\u53F3\u5B50\u6811\u8282\u70B9\u6811\u4E2D\u5B58\u5728\u5C0F\u4E8E \u7236\u7EA7 \u8282\u70B9\u7684\uFF0C\u6240\u4EE5\u4E0D\u80FD\u7B80\u5355\u7684\u9012\u5F52\u8003\u8651",-1),N=n("p",null,[n("img",{src:l,alt:""})],-1),T=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */`),s(`
`),n("span",{class:"token comment"},`/**
 * @param {TreeNode} root
 * @return {boolean}
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"isValidBST"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"helper"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("root"),n("span",{class:"token punctuation"},","),s(" minVal"),n("span",{class:"token punctuation"},","),s(" maxVal")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},">="),s(" maxVal "),n("span",{class:"token operator"},"||"),s(" root"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<="),s(" minVal"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" minVal"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(`
      `),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},","),s(" maxVal"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),B=n("p",null,[n("strong",null,"\u89E3\u6CD5\u4E8C\uFF1A \u4E2D\u5E8F\u904D\u5386\u9012\u5F52")],-1),j=n("p",null,"\u771F TMD \u7684 Niu B\uFF01",-1),D=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */`),s(`
`),n("span",{class:"token comment"},`/**
 * @param {TreeNode} root
 * @return {boolean}
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"isValidBST"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" stack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" cur "),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" pre "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"||"),s(" cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      stack`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("cur"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      cur `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" p "),n("span",{class:"token operator"},"="),s(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("pre "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" p"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"<="),s(" pre"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      pre `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},";"),s(`
      cur `),n("span",{class:"token operator"},"="),s(" p"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),$=[u,r,i,k,d,_,h,f,g,m,v,w,y,b,V,x,N,T,B,j,D];function I(M,S,U,C,E,L){return o(),t("div",null,$)}var z=a(p,[["render",I]]);export{q as __pageData,z as default};
