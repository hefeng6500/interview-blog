import{_ as n,c as s,o as a,a as p}from"./app.7782a168.js";const _='{"title":"\u4E8C\u8FDB\u5236\u52A0\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9898\u76EE","slug":"\u9898\u76EE"},{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801"}],"relativePath":"data-structures/integer/\u4E8C\u8FDB\u5236\u52A0\u6CD5.md","lastUpdated":1641650619840}',t={},o=p(`__VP_STATIC_START__<h1 id="\u4E8C\u8FDB\u5236\u52A0\u6CD5" tabindex="-1">\u4E8C\u8FDB\u5236\u52A0\u6CD5 <a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u52A0\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u9898\u76EE" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a></h2><p><a href="https://leetcode-cn.com/problems/JFETK5/" target="_blank" rel="noopener noreferrer">\u5251\u6307 Offer II 002. \u4E8C\u8FDB\u5236\u52A0\u6CD5</a></p><p>\u7ED9\u5B9A\u4E24\u4E2A\u5B57\u7B26\u4E32 a \u548C b \uFF0C\u8BF7\u8BA1\u7B97\u5B83\u4EEC\u7684\u548C\uFF0C\u5E76\u4EE5\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\u8F93\u51FA\u3002</p><p>\u8F93\u5165\u4E3A <strong>\u975E\u7A7A</strong> \u5B57\u7B26\u4E32\u4E14\u53EA\u5305\u542B\u6570\u5B57 1 \u548C 0\u3002</p><h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><h2 id="\u4EE3\u7801" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a></h2><p><strong>1. \u6A21\u62DF \u300C\u5217\u7AD6\u5F0F\u300D</strong></p><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">addBinary</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> i1 <span class="token operator">=</span> num1<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> i2 <span class="token operator">=</span> num2<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i1 <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">||</span> i2 <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> x <span class="token operator">=</span> i1 <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">?</span> num1<span class="token punctuation">[</span>i1<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token string">&quot;0&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> y <span class="token operator">=</span> i2 <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">?</span> num2<span class="token punctuation">[</span>i2<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token string">&quot;0&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> sum <span class="token operator">=</span> x <span class="token operator">+</span> y <span class="token operator">+</span> carry<span class="token punctuation">;</span>
    res <span class="token operator">=</span> <span class="token punctuation">(</span>sum <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> res<span class="token punctuation">;</span>
    carry <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>sum <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    i1<span class="token operator">--</span><span class="token punctuation">;</span>
    i2<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>carry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res <span class="token operator">=</span> carry <span class="token operator">+</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,9),e=[o];function c(r,l,u,k,i,d){return a(),s("div",null,e)}var m=n(t,[["render",c]]);export{_ as __pageData,m as default};
