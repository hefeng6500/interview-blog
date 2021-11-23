import{_ as n,c as s,o as a,e as p}from"./app.ca589e9d.js";const y='{"title":"283. \u79FB\u52A8\u96F6","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/array/283.\u79FB\u52A8\u96F6.md","lastUpdated":1637674841703}',t={},o=p(`<h1 id="_283-\u79FB\u52A8\u96F6" tabindex="-1">283. \u79FB\u52A8\u96F6 <a class="header-anchor" href="#_283-\u79FB\u52A8\u96F6" aria-hidden="true">#</a></h1><p>\u7ED9\u5B9A\u4E00\u4E2A\u6570\u7EC4 nums\uFF0C\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\u5C06\u6240\u6709 0 \u79FB\u52A8\u5230\u6570\u7EC4\u7684\u672B\u5C3E\uFF0C\u540C\u65F6\u4FDD\u6301\u975E\u96F6\u5143\u7D20\u7684\u76F8\u5BF9\u987A\u5E8F\u3002</p><p>\u793A\u4F8B:</p><div class="language-"><pre><code>\u8F93\u5165: [0,1,0,3,12]
\u8F93\u51FA: [1,3,12,0,0]
</code></pre></div><p>\u8BF4\u660E:</p><p>\u5FC5\u987B\u5728\u539F\u6570\u7EC4\u4E0A\u64CD\u4F5C\uFF0C\u4E0D\u80FD\u62F7\u8D1D\u989D\u5916\u7684\u6570\u7EC4\u3002</p><p>\u5C3D\u91CF\u51CF\u5C11\u64CD\u4F5C\u6B21\u6570\u3002</p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p><strong>1\u3001\u53CC\u6307\u9488(2021.11.11 \u81EA\u5DF1\u7684\u89E3\u6CD5)</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">moveZeroes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
      nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
      j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
      j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u6267\u884C\u7528\u65F6\uFF1A100 ms, \u5728\u6240\u6709 JavaScript \u63D0\u4EA4\u4E2D\u51FB\u8D25\u4E8635.22%\u7684\u7528\u6237</span>
<span class="token comment">// \u5185\u5B58\u6D88\u8017\uFF1A42.7 MB, \u5728\u6240\u6709 JavaScript \u63D0\u4EA4\u4E2D\u51FB\u8D25\u4E868.63%\u7684\u7528\u6237</span>
<span class="token comment">// \u901A\u8FC7\u6D4B\u8BD5\u7528\u4F8B\uFF1A74 / 74</span>
</code></pre></div><p><strong>2\u3001\u628A\u975E 0 \u7684\u5F80\u524D\u632A</strong></p><p>\u628A\u975E 0 \u7684\u5F80\u524D\u632A\uFF0C\u632A\u5B8C\u4E4B\u540E\uFF0C\u540E\u9762\u7684\u5C31\u90FD\u662F 0 \u4E86\uFF0C\u7136\u540E\u5728\u7528 0 \u8986\u76D6\u540E\u9762\u7684</p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">moveZeroes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nums <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      index<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    index<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>3\u3001\u53CC\u6307\u9488\u6CD5</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">moveZeroes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u53EA\u8981\u4E0D\u4E3A0\u5C31\u5F80\u524D\u632A</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//i\u6307\u5411\u7684\u503C\u548Cj\u6307\u5411\u7684\u503C\u4EA4\u6362</span>
      <span class="token keyword">let</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
      nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>

      i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,15),e=[o];function c(u,l,k,r,i,m){return a(),s("div",null,e)}var _=n(t,[["render",c]]);export{y as __pageData,_ as default};
