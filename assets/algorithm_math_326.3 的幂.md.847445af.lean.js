import{_ as n,c as s,o as a,a as p}from"./app.a1f82200.js";const g='{"title":"326.3 \u7684\u5E42","description":"","frontmatter":{},"relativePath":"algorithm/math/326.3 \u7684\u5E42.md","lastUpdated":1642846557049}',t={},o=p(`__VP_STATIC_START__<h1 id="_326-3-\u7684\u5E42" tabindex="-1">326.3 \u7684\u5E42 <a class="header-anchor" href="#_326-3-\u7684\u5E42" aria-hidden="true">#</a></h1><p>\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\uFF0C\u5199\u4E00\u4E2A\u51FD\u6570\u6765\u5224\u65AD\u5B83\u662F\u5426\u662F 3 \u7684\u5E42\u6B21\u65B9\u3002\u5982\u679C\u662F\uFF0C\u8FD4\u56DE true \uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE false \u3002</p><p>\u6574\u6570 n \u662F 3 \u7684\u5E42\u6B21\u65B9\u9700\u6EE1\u8DB3\uFF1A\u5B58\u5728\u6574\u6570 x \u4F7F\u5F97 n == 3x</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language-"><pre><code>
\u8F93\u5165\uFF1An = 27
\u8F93\u51FA\uFF1Atrue
</code></pre></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-"><pre><code>
\u8F93\u5165\uFF1An = 0
\u8F93\u51FA\uFF1Afalse
</code></pre></div><p><strong>\u793A\u4F8B 3\uFF1A</strong></p><div class="language-"><pre><code>
\u8F93\u5165\uFF1An = 9
\u8F93\u51FA\uFF1Atrue
</code></pre></div><p><strong>\u793A\u4F8B 4\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1An = 45
\u8F93\u51FA\uFF1Afalse
</code></pre></div><p>\u63D0\u793A\uFF1A</p><p>-231 &lt;= n &lt;= 231 - 1</p><p>\u8FDB\u9636\uFF1A\u4F60\u80FD\u4E0D\u4F7F\u7528\u5FAA\u73AF\u6216\u8005\u9012\u5F52\u6765\u5B8C\u6210\u672C\u9898\u5417\uFF1F</p><p><strong>\u5FAA\u73AF\u4E0D\u65AD\u9664\u4EE5 3</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number} n
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPowerOfThree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      n <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u6570\u5B66\u65B9\u5F0F</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number} n
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPowerOfThree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,18),e=[o];function c(r,l,u,k,i,d){return a(),s("div",null,e)}var m=n(t,[["render",c]]);export{g as __pageData,m as default};
