import{_ as n,c as s,o as a,e as t}from"./app.b7db8792.js";const h='{"title":"19.\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C N \u4E2A\u7ED3\u70B9","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/link-list/19.\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C N \u4E2A\u7ED3\u70B9.md","lastUpdated":1638588236661}',p={},e=t(`__VP_STATIC_START__<h1 id="_19-\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C-n-\u4E2A\u7ED3\u70B9" tabindex="-1">19.\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C N \u4E2A\u7ED3\u70B9 <a class="header-anchor" href="#_19-\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C-n-\u4E2A\u7ED3\u70B9" aria-hidden="true">#</a></h1><p>\u7ED9\u4F60\u4E00\u4E2A\u94FE\u8868\uFF0C\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C \xA0n\xA0 \u4E2A\u7ED3\u70B9\uFF0C\u5E76\u4E14\u8FD4\u56DE\u94FE\u8868\u7684\u5934\u7ED3\u70B9\u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ahead = [1,2,3,4,5], n = 2
\u8F93\u51FA\uFF1A[1,2,3,5]
</code></pre></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ahead = [1], n = 1
\u8F93\u51FA\uFF1A[]
</code></pre></div><p><strong>\u793A\u4F8B 3\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ahead = [1,2], n = 1
\u8F93\u51FA\uFF1A[1]
</code></pre></div><p><strong>\u63D0\u793A\uFF1A</strong></p><p>\u94FE\u8868\u4E2D\u7ED3\u70B9\u7684\u6570\u76EE\u4E3A sz 1 &lt;= sz &lt;= 30 0 &lt;= Node.val &lt;= 100 1 &lt;= n &lt;= sz</p><p>**\u8FDB\u9636\uFF1A**\u4F60\u80FD\u5C1D\u8BD5\u4F7F\u7528\u4E00\u8D9F\u626B\u63CF\u5B9E\u73B0\u5417\uFF1F</p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeNthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getSize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> size <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> current <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> <span class="token function">getSize</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> targetIndex <span class="token operator">=</span> length <span class="token operator">-</span> n<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>targetIndex <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> targetIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    index<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  current<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,13),o=[e];function c(l,u,r,k,i,d){return a(),s("div",null,o)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};
