import{_ as n,c as s,o as a,e as t}from"./app.1a8e239b.js";const g='{"title":"66. \u52A0\u4E00","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/array/66.\u52A0\u4E00.md","lastUpdated":1639744946821}',p={},e=t(`<h1 id="_66-\u52A0\u4E00" tabindex="-1">66. \u52A0\u4E00 <a class="header-anchor" href="#_66-\u52A0\u4E00" aria-hidden="true">#</a></h1><p>\u7ED9\u5B9A\u4E00\u4E2A\u7531 \u6574\u6570 \u7EC4\u6210\u7684 \u975E\u7A7A \u6570\u7EC4\u6240\u8868\u793A\u7684\u975E\u8D1F\u6574\u6570\uFF0C\u5728\u8BE5\u6570\u7684\u57FA\u7840\u4E0A\u52A0\u4E00\u3002</p><p>\u6700\u9AD8\u4F4D\u6570\u5B57\u5B58\u653E\u5728\u6570\u7EC4\u7684\u9996\u4F4D\uFF0C \u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u53EA\u5B58\u50A8\u5355\u4E2A\u6570\u5B57\u3002</p><p>\u4F60\u53EF\u4EE5\u5047\u8BBE\u9664\u4E86\u6574\u6570 0 \u4E4B\u5916\uFF0C\u8FD9\u4E2A\u6574\u6570\u4E0D\u4F1A\u4EE5\u96F6\u5F00\u5934\u3002</p><p>\u793A\u4F8B \xA01\uFF1A</p><div class="language-"><pre><code>\u8F93\u5165\uFF1Adigits = [1,2,3]
\u8F93\u51FA\uFF1A[1,2,4]
\u89E3\u91CA\uFF1A\u8F93\u5165\u6570\u7EC4\u8868\u793A\u6570\u5B57 123\u3002
</code></pre></div><p>\u793A\u4F8B \xA02\uFF1A</p><div class="language-"><pre><code>\u8F93\u5165\uFF1Adigits = [4,3,2,1]
\u8F93\u51FA\uFF1A[4,3,2,2]
\u89E3\u91CA\uFF1A\u8F93\u5165\u6570\u7EC4\u8868\u793A\u6570\u5B57 4321\u3002
</code></pre></div><p>\u793A\u4F8B 3\uFF1A</p><div class="language-"><pre><code>\u8F93\u5165\uFF1Adigits = [0]
\u8F93\u51FA\uFF1A[1]
</code></pre></div><p>\u63D0\u793A\uFF1A</p><p><code>1 &lt;= digits.length &lt;= 100</code></p><p><code>0 &lt;= digits[i] &lt;= 9</code></p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><ul><li>\u5982\u679C\u6570\u7EC4\u4E2D\u7684\u6240\u6709\u5143\u7D20\u90FD\u662F9\uFF0C\u7C7B\u4F3C9999\uFF0C\u52A01\u4E4B\u540E\u80AF\u5B9A\u4F1A\u53D8\u4E3A10000\uFF0C\u4E5F\u5C31\u662F\u6570\u7EC4\u957F\u5EA6\u4F1A\u589E\u52A01\u4F4D\u3002</li><li>\u5982\u679C\u6570\u7EC4\u7684\u5143\u7D20\u53EA\u8981\u6709\u4E00\u4E2A\u4E0D\u662F9\uFF0C\u52A01\u4E4B\u540E\u76F4\u63A5\u8FD4\u56DE\u5373\u53EF\u3002</li></ul><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number[]} digits
 * @return {number[]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">plusOne</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">digits</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> digits<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> digits<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  digits<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> digits<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,16),o=[e];function c(i,l,u,r,k,d){return a(),s("div",null,o)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
