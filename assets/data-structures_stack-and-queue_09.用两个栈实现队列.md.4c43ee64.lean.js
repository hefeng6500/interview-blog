import{_ as a,c as t,o,b as n,d as s}from"./app.4a20ffa3.js";var e="/interview-blog/jianzhi_9.gif";const x='{"title":"\u9898\u76EE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9898\u76EE","slug":"\u9898\u76EE"},{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801"}],"relativePath":"data-structures/stack-and-queue/09.\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u961F\u5217.md","lastUpdated":1641569795081}',c={},p=n("h2",{id:"\u9898\u76EE",tabindex:"-1"},[s("\u9898\u76EE "),n("a",{class:"header-anchor",href:"#\u9898\u76EE","aria-hidden":"true"},"#")],-1),u=n("p",null,[n("a",{href:"https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/",target:"_blank",rel:"noopener noreferrer"},"\u5251\u6307 Offer 09. \u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u961F\u5217")],-1),l=n("p",null,"\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217\u3002\u961F\u5217\u7684\u58F0\u660E\u5982\u4E0B\uFF0C\u8BF7\u5B9E\u73B0\u5B83\u7684\u4E24\u4E2A\u51FD\u6570 appendTail \u548C deleteHead \uFF0C\u5206\u522B\u5B8C\u6210\u5728\u961F\u5217\u5C3E\u90E8\u63D2\u5165\u6574\u6570\u548C\u5728\u961F\u5217\u5934\u90E8\u5220\u9664\u6574\u6570\u7684\u529F\u80FD\u3002(\u82E5\u961F\u5217\u4E2D\u6CA1\u6709\u5143\u7D20\uFF0CdeleteHead \u64CD\u4F5C\u8FD4\u56DE -1 )",-1),i=n("h2",{id:"\u601D\u8DEF",tabindex:"-1"},[s("\u601D\u8DEF "),n("a",{class:"header-anchor",href:"#\u601D\u8DEF","aria-hidden":"true"},"#")],-1),k=n("p",null,[n("img",{src:e,alt:""})],-1),r=n("h2",{id:"\u4EE3\u7801",tabindex:"-1"},[s("\u4EE3\u7801 "),n("a",{class:"header-anchor",href:"#\u4EE3\u7801","aria-hidden":"true"},"#")],-1),d=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"CQueue"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("target "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("temp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},`/**
 * @param {number} value
 * @return {void}
 */`),s(`
`),n("span",{class:"token class-name"},"CQueue"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"appendTail"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},`/**
 * @return {number}
 */`),s(`
`),n("span",{class:"token class-name"},"CQueue"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"deleteHead"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("temp"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("temp"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("temp"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("temp"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),h=[p,u,l,i,k,r,d];function _(f,m,y,w,g,v){return o(),t("div",null,h)}var $=a(c,[["render",_]]);export{x as __pageData,$ as default};
