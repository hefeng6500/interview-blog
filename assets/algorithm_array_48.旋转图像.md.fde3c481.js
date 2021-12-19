import{_ as t}from"./TagList.b2a78386.js";import{L as o}from"./Level.2062e43d.js";import{o as e,c as p,a,b as n,d as s}from"./app.e3cb8b85.js";import"./Tag.vue_vue_type_style_index_0_scoped_true_lang.f741ab98.js";var c="/interview-blog/mat1.jpg",l="/interview-blog/mat2.jpg",u="/interview-blog/1.png",i="/interview-blog/2.png";const r=n("h1",{id:"_48-\u65CB\u8F6C\u56FE\u50CF",tabindex:"-1"},[s("48. \u65CB\u8F6C\u56FE\u50CF "),n("a",{class:"header-anchor",href:"#_48-\u65CB\u8F6C\u56FE\u50CF","aria-hidden":"true"},"#")],-1),k=n("p",null,"\u7ED9\u5B9A\u4E00\u4E2A n\xA0\xD7\xA0n \u7684\u4E8C\u7EF4\u77E9\u9635 \xA0matrix \u8868\u793A\u4E00\u4E2A\u56FE\u50CF\u3002\u8BF7\u4F60\u5C06\u56FE\u50CF\u987A\u65F6\u9488\u65CB\u8F6C 90 \u5EA6\u3002",-1),m=n("p",null,"\u4F60\u5FC5\u987B\u5728 \u539F\u5730 \u65CB\u8F6C\u56FE\u50CF\uFF0C\u8FD9\u610F\u5473\u7740\u4F60\u9700\u8981\u76F4\u63A5\u4FEE\u6539\u8F93\u5165\u7684\u4E8C\u7EF4\u77E9\u9635\u3002\u8BF7\u4E0D\u8981 \u4F7F\u7528\u53E6\u4E00\u4E2A\u77E9\u9635\u6765\u65CB\u8F6C\u56FE\u50CF\u3002",-1),d=n("p",null,[n("strong",null,"\u793A\u4F8B 1\uFF1A")],-1),_=n("p",null,[n("img",{src:c,alt:""})],-1),g=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Amatrix = [[1,2,3],[4,5,6],[7,8,9]]
\u8F93\u51FA\uFF1A[[7,4,1],[8,5,2],[9,6,3]]
`)])],-1),h=n("p",null,[n("strong",null,"\u793A\u4F8B 2\uFF1A")],-1),x=n("p",null,[n("img",{src:l,alt:""})],-1),j=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Amatrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
\u8F93\u51FA\uFF1A[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
`)])],-1),y=n("p",null,[n("strong",null,"\u793A\u4F8B 3\uFF1A")],-1),b=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Amatrix = [[1]]
\u8F93\u51FA\uFF1A[[1]]
`)])],-1),v=n("p",null,[n("strong",null,"\u793A\u4F8B 4\uFF1A")],-1),f=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u8F93\u5165\uFF1Amatrix = [[1,2],[3,4]]
\u8F93\u51FA\uFF1A[[3,1],[4,2]]
`)])],-1),w=n("h3",{id:"\u89E3\u6CD5",tabindex:"-1"},[s("\u89E3\u6CD5 "),n("a",{class:"header-anchor",href:"#\u89E3\u6CD5","aria-hidden":"true"},"#")],-1),L=n("p",null,[n("strong",null,"1\u3001\u5148\u4E0A\u4E0B\u4EA4\u6362\uFF0C\u518D\u6CBF\u5BF9\u89D2\u7EBF\u4EA4\u6362")],-1),B=n("p",null,[n("img",{src:u,alt:""})],-1),D=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"rotate"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"matrix"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" length "),n("span",{class:"token operator"},"="),s(" matrix"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},"// \u5148\u4E0A\u4E0B\u4EA4\u6362"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" length "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" temp "),n("span",{class:"token operator"},"="),s(" matrix"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    matrix`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" matrix"),n("span",{class:"token punctuation"},"["),s("length "),n("span",{class:"token operator"},"-"),s(" i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    matrix`),n("span",{class:"token punctuation"},"["),s("length "),n("span",{class:"token operator"},"-"),s(" i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"// \u5728\u6309\u7167\u5BF9\u89D2\u7EBF\u4EA4\u6362"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(" i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" length"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" temp "),n("span",{class:"token operator"},"="),s(" matrix"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

      matrix`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" matrix"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
      matrix`),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),N=n("p",null,[n("strong",null,"2\uFF0C\u76F4\u63A5\u4EA4\u6362")],-1),T=n("p",null,"\u9898\u4E2D\u8BF4\u4E86\u662F\u987A\u65F6\u9488\u65CB\u8F6C 90 \u5EA6\uFF0C\u901A\u8FC7\u65CB\u8F6C\u5176\u5B9E\u53EF\u4EE5\u53D1\u73B0\u4E00\u4E2A\u89C4\u5F8B\uFF0C\u53EA\u9700\u8981\u4E00\u5708\u4E00\u5708\u7684\u65CB\u8F6C\u5373\u53EF\u3002",-1),V=n("p",null,[n("img",{src:i,alt:""})],-1),E=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},`/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */`),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"rotate"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"matrix"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" length "),n("span",{class:"token operator"},"="),s(" matrix"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},"// \u56E0\u4E3A\u662F\u5BF9\u79F0\u7684\uFF0C\u53EA\u9700\u8981\u8BA1\u7B97\u5FAA\u73AF\u524D\u534A\u884C\u5373\u53EF(\u8FD9\u53E5\u8BDD\u5176\u5B9E\u6211\u6CA1\u592A\u770B\u61C2)"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" length "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" length "),n("span",{class:"token operator"},"-"),s(" i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" temp "),n("span",{class:"token operator"},"="),s(" matrix"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" m "),n("span",{class:"token operator"},"="),s(" length "),n("span",{class:"token operator"},"-"),s(" j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" n "),n("span",{class:"token operator"},"="),s(" length "),n("span",{class:"token operator"},"-"),s(" i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
      matrix`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" matrix"),n("span",{class:"token punctuation"},"["),s("m"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
      matrix`),n("span",{class:"token punctuation"},"["),s("m"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" matrix"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("m"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
      matrix`),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("m"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" matrix"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
      matrix`),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),O=n("p",null,"\u65B9\u6CD5\u4E8C\u7684\u4EA4\u6362\u7B56\u7565\u53EF\u4EE5\u8BF4\u7684\u65B9\u6CD5\u4E00\u7684\u4E00\u79CD\u5347\u7EA7\u4E86\uFF0C \u76F4\u63A5\u65CB\u8F6C\u4EA4\u6362\u3002\u4E0B\u9762\u6211\u901A\u8FC7\u679A\u4E3E\u904D\u5386\u5FAA\u73AF\u67E5\u770B\u8BE6\u7EC6\u6570\u636E\u3002",-1),P=n("div",{class:"language-"},[n("pre",null,[n("code",null,`length = 4
i < 2
j < 4 - i -1

// \u7B2C\u4E00\u8F6E\u5FAA\u73AF
i = 0;
j < 3

i = 0, j = 0
m = 3, n = 3
[0][0] = [3][0], 5 = 15
[3][0] = [3][3], 15 = 16
[3][3] = [0][3], 16 = 11
[0][3] = [0][0], 11 = 5

// \u7B2C\u4E8C\u8F6E\u5FAA\u73AF
i = 0, j = 1

m = 2, m = 3
[0][1] = [2][0], 1 = 13
[2][0] = [3][2], 13 = 12
[3][2] = [1][3], 12 = 10
[1][3] = [0][1], 10 = 1


// \u7B2C\u4E09\u8F6E\u5FAA\u73AF

i = 0, j = 2

m = 1, n = 3
[0][2] = [1][0], 9 = 2
[1][0] = [3][1], 2 = 14
[3][1] = [2][3], 14 = 7
[2][3] = [0][2], 7 = 9


// \u524D\u9762\u4E09\u8F6E\u5FAA\u73AF\u90FD\u662F\u65CB\u8F6C\u5916\u5C42\u7684\u6570\u636E, \u5206\u522B\u5BF9\uFF0C j = 0,1,2 \u4E09\u79CD\u60C5\u51B5\u8FDB\u884C\u4E86\u65CB\u8F6C\uFF0C\u4F7F\u5F97\u6574\u4E2A\u5916\u5C42\u65CB\u8F6C\u5B8C\u6210
// \u4E0B\u9762\u5373\u662F\u5BF9\u5185\u5C42\u8FDB\u884C\u65CB\u8F6C

// \u5185\u5C42\uFF0C\u5FAA\u73AF\uFF0C\u7B2C\u4E00\u8F6E\u5FAA\u73AF

i = 1, i < 2
j = 1, j < 2

m = 2, n = 2

[1][1] = [2][1], 4 = 3
[2][1] = [2][2], 3 = 8
[2][2] = [1][2], 6 = 8
[1][2] = [1][1], 8 = 4


`)])],-1),I='{"title":"48. \u65CB\u8F6C\u56FE\u50CF","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/array/48.\u65CB\u8F6C\u56FE\u50CF.md","lastUpdated":1639878607895}',U={};function $(q){return(z,A)=>(e(),p("div",null,[r,a(o,{level:"middle"}),a(t,{list:[{label:"\u6570\u7EC4",type:"primary"},{label:"\u6570\u5B66",type:"success"},{label:"\u77E9\u9635",type:"darkorchid"}]}),k,m,d,_,g,h,x,j,y,b,v,f,w,L,B,D,N,T,V,E,O,P]))}const J=Object.assign(U,{setup:$});export{I as __pageData,J as default};
