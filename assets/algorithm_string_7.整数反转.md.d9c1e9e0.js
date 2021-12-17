import{_ as n,c as s,o as a,e as p}from"./app.1a8e239b.js";const g='{"title":"7. \u6574\u6570\u53CD\u8F6C","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/string/7.\u6574\u6570\u53CD\u8F6C.md","lastUpdated":1639745416609}',t={},e=p(`<h1 id="_7-\u6574\u6570\u53CD\u8F6C" tabindex="-1">7. \u6574\u6570\u53CD\u8F6C <a class="header-anchor" href="#_7-\u6574\u6570\u53CD\u8F6C" aria-hidden="true">#</a></h1><p>\u7ED9\u4F60\u4E00\u4E2A 32 \u4F4D\u7684\u6709\u7B26\u53F7\u6574\u6570 x \uFF0C\u8FD4\u56DE\u5C06 x \u4E2D\u7684\u6570\u5B57\u90E8\u5206\u53CD\u8F6C\u540E\u7684\u7ED3\u679C\u3002</p><p>\u5982\u679C\u53CD\u8F6C\u540E\u6574\u6570\u8D85\u8FC7 32 \u4F4D\u7684\u6709\u7B26\u53F7\u6574\u6570\u7684\u8303\u56F4 \xA0[\u2212231,\xA0 231\xA0\u2212 1] \uFF0C\u5C31\u8FD4\u56DE 0\u3002</p><p>\u5047\u8BBE\u73AF\u5883\u4E0D\u5141\u8BB8\u5B58\u50A8 64 \u4F4D\u6574\u6570\uFF08\u6709\u7B26\u53F7\u6216\u65E0\u7B26\u53F7\uFF09\u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ax = 123
\u8F93\u51FA\uFF1A321
</code></pre></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ax = -123
\u8F93\u51FA\uFF1A-321

</code></pre></div><p><strong>\u793A\u4F8B 3\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ax = 120
\u8F93\u51FA\uFF1A21
</code></pre></div><p><strong>\u793A\u4F8B 4\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ax = 0
\u8F93\u51FA\uFF1A0
</code></pre></div><p>\u63D0\u793A\uFF1A</p><p><code>-231 &lt;= x &lt;= 231 - 1</code></p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p>\u5BF9\u4E8E\u6D6E\u70B9\u6570\uFF0C~~value\u53EF\u4EE5\u4EE3\u66FFparseInt(value)\uFF0C\u800C\u4E14\u524D\u8005\u6548\u7387\u66F4\u9AD8\u4E9B</p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number} x
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> rev <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> digit <span class="token operator">=</span> x <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
    x <span class="token operator">=</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token punctuation">(</span>x <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rev <span class="token operator">=</span> rev <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> digit<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rev <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">||</span> rev <span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> rev<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,17),o=[e];function c(r,l,u,k,i,d){return a(),s("div",null,o)}var v=n(t,[["render",c]]);export{g as __pageData,v as default};
