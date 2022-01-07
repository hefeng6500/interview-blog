import{_ as n,c as s,o as a,a as p}from"./app.4a20ffa3.js";const g='{"title":"13.\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570","description":"","frontmatter":{},"relativePath":"algorithm/math/13.\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570.md","lastUpdated":1641570027627}',t={},o=p(`__VP_STATIC_START__<h1 id="_13-\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570" tabindex="-1">13.\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570 <a class="header-anchor" href="#_13-\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570" aria-hidden="true">#</a></h1><p>\u7F57\u9A6C\u6570\u5B57\u5305\u542B\u4EE5\u4E0B\u4E03\u79CD\u5B57\u7B26: <code>I</code>\uFF0C <code>V</code>\uFF0C <code>X</code>\uFF0C <code>L</code>\uFF0C<code>C</code>\uFF0C<code>D</code> \u548C <code>M</code>\u3002</p><div class="language-"><pre><code>\u5B57\u7B26 \u6570\u503C
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
</code></pre></div><p>\u4F8B\u5982\uFF0C \u7F57\u9A6C\u6570\u5B57 2 \u5199\u505A II \uFF0C\u5373\u4E3A\u4E24\u4E2A\u5E76\u5217\u7684 1 \u300212 \u5199\u505A XII \uFF0C\u5373\u4E3A X + II \u3002 27 \u5199\u505A XXVII, \u5373\u4E3A XX + V + II \u3002</p><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u7F57\u9A6C\u6570\u5B57\u4E2D\u5C0F\u7684\u6570\u5B57\u5728\u5927\u7684\u6570\u5B57\u7684\u53F3\u8FB9\u3002\u4F46\u4E5F\u5B58\u5728\u7279\u4F8B\uFF0C\u4F8B\u5982 4 \u4E0D\u5199\u505A IIII\uFF0C\u800C\u662F IV\u3002\u6570\u5B57 1 \u5728\u6570\u5B57 5 \u7684\u5DE6\u8FB9\uFF0C\u6240\u8868\u793A\u7684\u6570\u7B49\u4E8E\u5927\u6570 5 \u51CF\u5C0F\u6570 1 \u5F97\u5230\u7684\u6570\u503C 4 \u3002\u540C\u6837\u5730\uFF0C\u6570\u5B57 9 \u8868\u793A\u4E3A IX\u3002\u8FD9\u4E2A\u7279\u6B8A\u7684\u89C4\u5219\u53EA\u9002\u7528\u4E8E\u4EE5\u4E0B\u516D\u79CD\u60C5\u51B5\uFF1A</p><p>I \u53EF\u4EE5\u653E\u5728 V (5) \u548C X (10) \u7684\u5DE6\u8FB9\uFF0C\u6765\u8868\u793A 4 \u548C 9\u3002 X \u53EF\u4EE5\u653E\u5728 L (50) \u548C C (100) \u7684\u5DE6\u8FB9\uFF0C\u6765\u8868\u793A 40 \u548C 90\u3002 C \u53EF\u4EE5\u653E\u5728 D (500) \u548C M (1000) \u7684\u5DE6\u8FB9\uFF0C\u6765\u8868\u793A 400 \u548C 900\u3002 \u7ED9\u5B9A\u4E00\u4E2A\u7F57\u9A6C\u6570\u5B57\uFF0C\u5C06\u5176\u8F6C\u6362\u6210\u6574\u6570\u3002</p><p><strong>\u793A\u4F8B 1:</strong></p><div class="language-"><pre><code>\u8F93\u5165: s = &quot;III&quot;
\u8F93\u51FA: 3
</code></pre></div><p><strong>\u793A\u4F8B 2:</strong></p><div class="language-"><pre><code>\u8F93\u5165: s = &quot;IV&quot;
\u8F93\u51FA: 4
</code></pre></div><p><strong>\u793A\u4F8B 3:</strong></p><div class="language-"><pre><code>\u8F93\u5165: s = &quot;IX&quot;
\u8F93\u51FA: 9
</code></pre></div><p><strong>\u793A\u4F8B 4:</strong></p><div class="language-"><pre><code>\u8F93\u5165: s = &quot;LVIII&quot;
\u8F93\u51FA: 58
\u89E3\u91CA: L = 50, V= 5, III = 3.
</code></pre></div><p><strong>\u793A\u4F8B 5:</strong></p><div class="language-"><pre><code>\u8F93\u5165: s = &quot;MCMXCIV&quot;
\u8F93\u51FA: 1994
\u89E3\u91CA: M = 1000, CM = 900, XC = 90, IV = 4.
</code></pre></div><p>\u63D0\u793A\uFF1A</p><ul><li>1 &lt;= s.length &lt;= 15</li><li>s \u4EC5\u542B\u5B57\u7B26 (&#39;I&#39;, &#39;V&#39;, &#39;X&#39;, &#39;L&#39;, &#39;C&#39;, &#39;D&#39;, &#39;M&#39;)</li><li>\u9898\u76EE\u6570\u636E\u4FDD\u8BC1 s \u662F\u4E00\u4E2A\u6709\u6548\u7684\u7F57\u9A6C\u6570\u5B57\uFF0C\u4E14\u8868\u793A\u6574\u6570\u5728\u8303\u56F4 [1, 3999] \u5185</li><li>\u9898\u76EE\u6240\u7ED9\u6D4B\u8BD5\u7528\u4F8B\u7686\u7B26\u5408\u7F57\u9A6C\u6570\u5B57\u4E66\u5199\u89C4\u5219\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u8DE8\u4F4D\u7B49\u60C5\u51B5\u3002</li><li>IL \u548C IM \u8FD9\u6837\u7684\u4F8B\u5B50\u5E76\u4E0D\u7B26\u5408\u9898\u76EE\u8981\u6C42\uFF0C49 \u5E94\u8BE5\u5199\u4F5C XLIX\uFF0C999 \u5E94\u8BE5\u5199\u4F5C CMXCIX \u3002</li><li>\u5173\u4E8E\u7F57\u9A6C\u6570\u5B57\u7684\u8BE6\u5C3D\u4E66\u5199\u89C4\u5219\uFF0C\u53EF\u4EE5\u53C2\u8003 \u7F57\u9A6C\u6570\u5B57 - Mathematics \u3002</li></ul><div class="language-js"><pre><code><span class="token comment">/**
 * @param {string} s
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">romanToInt</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">I</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token constant">IV</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token constant">V</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token constant">IX</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token constant">X</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token constant">XL</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
    <span class="token constant">L</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token constant">XC</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
    <span class="token constant">C</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token constant">CD</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    <span class="token constant">D</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
    <span class="token constant">CM</span><span class="token operator">:</span> <span class="token number">900</span><span class="token punctuation">,</span>
    <span class="token constant">M</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> result <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(IV?X?)|(XL?C?)|(CD?M?)|[VLDM]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  result<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> obj<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,19),e=[o];function c(l,r,u,k,i,d){return a(),s("div",null,e)}var m=n(t,[["render",c]]);export{g as __pageData,m as default};
