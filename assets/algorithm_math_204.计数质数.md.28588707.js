import{_ as n,c as s,o as a,a as p}from"./app.3c45cc38.js";const _='{"title":"204. \u8BA1\u6570\u8D28\u6570","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/math/204.\u8BA1\u6570\u8D28\u6570.md","lastUpdated":1641702656502}',t={},o=p(`<h1 id="_204-\u8BA1\u6570\u8D28\u6570" tabindex="-1">204. \u8BA1\u6570\u8D28\u6570 <a class="header-anchor" href="#_204-\u8BA1\u6570\u8D28\u6570" aria-hidden="true">#</a></h1><p>\u7EDF\u8BA1\u6240\u6709\u5C0F\u4E8E\u975E\u8D1F\u6574\u6570 <code>n</code> \u7684\u8D28\u6570\u7684\u6570\u91CF\u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1An = 10
\u8F93\u51FA\uFF1A4
\u89E3\u91CA\uFF1A\u5C0F\u4E8E 10 \u7684\u8D28\u6570\u4E00\u5171\u6709 4 \u4E2A, \u5B83\u4EEC\u662F 2, 3, 5, 7 \u3002
</code></pre></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1An = 0
\u8F93\u51FA\uFF1A0
</code></pre></div><p><strong>\u793A\u4F8B 3\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1An = 1
\u8F93\u51FA\uFF1A0
</code></pre></div><p>\u63D0\u793A\uFF1A</p><p>0 &lt;= n &lt;= 5 * 106</p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p>\u4E00\u5F00\u59CB\u6211\u5199\u51FA\u8FD9\u79CD\u89E3\u6CD5\u3002\u5F88\u663E\u7136\u3002\u5728 n \u8F83\u5927\u7684\u65F6\u5019\u5C31\u8D85\u65F6\u4E86</p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number} n
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countPrimes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> n <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">primeComputed</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">%</span> i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        data <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> isPrime <span class="token operator">=</span> <span class="token function">primeComputed</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    isPrime <span class="token operator">?</span> index<span class="token operator">++</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> index<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8BC4\u8BBA\u533A\u7684\u9AD8\u7EA7\u89E3\u6CD5</p><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">countPrimes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1 \u8868\u793A\u662F\u8D28\u6570\uFF0C 0 \u8868\u793A\u662F\u5408\u6570</span>
  <span class="token keyword">const</span> isPrime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isPrime<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ans <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>

      <span class="token comment">// \u4ECE i^2 \u5F00\u59CB\uFF0C \u6BCF\u6B21\u52A0 i</span>
      <span class="token comment">// \u51CF\u5C11\u5BF9 i \u5408\u6570\u7684\u6807\u8BB0\u6B21\u6570</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">*</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j <span class="token operator">+=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        isPrime<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u57C3\u6C0F\u7B5B\uFF1A\u8BE5\u7B97\u6CD5\u7531\u5E0C\u814A\u6570\u5B66\u5BB6\u5384\u62C9\u591A\u585E\uFF08EratosthenesEratosthenes\uFF09\u63D0\u51FA\uFF0C\u79F0\u4E3A\u5384\u62C9\u591A\u585E\u7B5B\u6CD5\uFF0C\u7B80\u79F0\u57C3\u6C0F\u7B5B\u3002</p><p>\u5982\u679C x \u662F\u8D28\u6570\uFF0C\u90A3\u4E48\u5927\u4E8E x \u7684 x \u7684\u500D\u6570 2x,3x, \u2026 \u4E00\u5B9A\u4E0D\u662F\u8D28\u6570\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u5165\u624B\u3002</p>`,17),e=[o];function c(l,u,r,k,i,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{_ as __pageData,f as default};
