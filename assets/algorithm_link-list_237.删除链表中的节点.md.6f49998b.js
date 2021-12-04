import{_ as n,c as a,o as s,e}from"./app.81e1d541.js";const k='{"title":"237. \u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/link-list/237.\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9.md","lastUpdated":1638610609376}',t={},o=e(`<h1 id="_237-\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9" tabindex="-1">237. \u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9 <a class="header-anchor" href="#_237-\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9" aria-hidden="true">#</a></h1><p>\u8BF7\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u4E8E <strong>\u5220\u9664\u5355\u94FE\u8868\u4E2D\u67D0\u4E2A\u7279\u5B9A\u8282\u70B9</strong> \u3002\u5728\u8BBE\u8BA1\u51FD\u6570\u65F6\u9700\u8981\u6CE8\u610F\uFF0C\u4F60\u65E0\u6CD5\u8BBF\u95EE\u94FE\u8868\u7684\u5934\u8282\u70B9 \xA0head \uFF0C\u53EA\u80FD\u76F4\u63A5\u8BBF\u95EE <strong>\u8981\u88AB\u5220\u9664\u7684\u8282\u70B9</strong> \u3002</p><p>\u9898\u76EE\u6570\u636E\u4FDD\u8BC1\u9700\u8981\u5220\u9664\u7684\u8282\u70B9 <strong>\u4E0D\u662F\u672B\u5C3E\u8282\u70B9</strong> \u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ahead = [4,5,1,9], node = 5
\u8F93\u51FA\uFF1A[4,1,9]
\u89E3\u91CA\uFF1A\u6307\u5B9A\u94FE\u8868\u4E2D\u503C\u4E3A\xA05\xA0\u7684\u7B2C\u4E8C\u4E2A\u8282\u70B9\uFF0C\u90A3\u4E48\u5728\u8C03\u7528\u4E86\u4F60\u7684\u51FD\u6570\u4E4B\u540E\uFF0C\u8BE5\u94FE\u8868\u5E94\u53D8\u4E3A 4 -&gt; 1 -&gt; 9
</code></pre></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ahead = [4,5,1,9], node = 1
\u8F93\u51FA\uFF1A[4,5,9]
\u89E3\u91CA\uFF1A\u6307\u5B9A\u94FE\u8868\u4E2D\u503C\u4E3A\xA01\xA0\u7684\u7B2C\u4E09\u4E2A\u8282\u70B9\uFF0C\u90A3\u4E48\u5728\u8C03\u7528\u4E86\u4F60\u7684\u51FD\u6570\u4E4B\u540E\uFF0C\u8BE5\u94FE\u8868\u5E94\u53D8\u4E3A 4 -&gt; 5 -&gt; 9
</code></pre></div><p><strong>\u793A\u4F8B 3\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ahead = [1,2,3,4], node = 3
\u8F93\u51FA\uFF1A[1,2,4]
</code></pre></div><p><strong>\u793A\u4F8B 4\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ahead = [0,1], node = 0
\u8F93\u51FA\uFF1A[1]
</code></pre></div><p><strong>\u793A\u4F8B 5\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ahead = [-3,5,-99], node = -3
\u8F93\u51FA\uFF1A[5,-99]
</code></pre></div><p>\u63D0\u793A\uFF1A</p><p>\u94FE\u8868\u4E2D\u8282\u70B9\u7684\u6570\u76EE\u8303\u56F4\u662F [2, 1000] -1000 &lt;= Node.val &lt;= 1000 \u94FE\u8868\u4E2D\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\u90FD\u662F\u552F\u4E00\u7684 \u9700\u8981\u5220\u9664\u7684\u8282\u70B9 node \u662F \u94FE\u8868\u4E2D\u7684\u4E00\u4E2A\u6709\u6548\u8282\u70B9 \uFF0C\u4E14 \u4E0D\u662F\u672B\u5C3E\u8282\u70B9</p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p>\u8FD9\u4E2A\u5C31\u5F88\u7B80\u5355\u4E86\uFF0C\u524D\u63D0\u662F\u719F\u6089\u94FE\u8868\u8FD9\u4E2A\u6570\u636E\u7ED3\u6784</p><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  node<span class="token punctuation">.</span>val <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
  node<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,18),p=[o];function c(d,r,i,l,u,_){return s(),a("div",null,p)}var h=n(t,[["render",c]]);export{k as __pageData,h as default};
