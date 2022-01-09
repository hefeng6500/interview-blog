import{_ as n,c as s,o as a,a as t}from"./app.a1f82200.js";const f='{"title":"384.\u6253\u4E71\u6570\u7EC4","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/design-problem/384.\u6253\u4E71\u6570\u7EC4.md","lastUpdated":1641702993046}',p={},o=t(`__VP_STATIC_START__<h1 id="_384-\u6253\u4E71\u6570\u7EC4" tabindex="-1">384.\u6253\u4E71\u6570\u7EC4 <a class="header-anchor" href="#_384-\u6253\u4E71\u6570\u7EC4" aria-hidden="true">#</a></h1><p>\u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \uFF0C\u8BBE\u8BA1\u7B97\u6CD5\u6765\u6253\u4E71\u4E00\u4E2A\u6CA1\u6709\u91CD\u590D\u5143\u7D20\u7684\u6570\u7EC4\u3002</p><p>\u5B9E\u73B0 Solution class:</p><ul><li>Solution(int[] nums) \u4F7F\u7528\u6574\u6570\u6570\u7EC4 nums \u521D\u59CB\u5316\u5BF9\u8C61</li><li>int[] reset() \u91CD\u8BBE\u6570\u7EC4\u5230\u5B83\u7684\u521D\u59CB\u72B6\u6001\u5E76\u8FD4\u56DE</li><li>int[] shuffle() \u8FD4\u56DE\u6570\u7EC4\u968F\u673A\u6253\u4E71\u540E\u7684\u7ED3\u679C</li></ul><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165
[&quot;Solution&quot;, &quot;shuffle&quot;, &quot;reset&quot;, &quot;shuffle&quot;]
[[[1, 2, 3]], [], [], []]
\u8F93\u51FA
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

\u89E3\u91CA
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // \u6253\u4E71\u6570\u7EC4 [1,2,3] \u5E76\u8FD4\u56DE\u7ED3\u679C\u3002\u4EFB\u4F55 [1,2,3]\u7684\u6392\u5217\u8FD4\u56DE\u7684\u6982\u7387\u5E94\u8BE5\u76F8\u540C\u3002\u4F8B\u5982\uFF0C\u8FD4\u56DE [3, 1, 2]
solution.reset();      // \u91CD\u8BBE\u6570\u7EC4\u5230\u5B83\u7684\u521D\u59CB\u72B6\u6001 [1, 2, 3] \u3002\u8FD4\u56DE [1, 2, 3]
solution.shuffle();    // \u968F\u673A\u8FD4\u56DE\u6570\u7EC4 [1, 2, 3] \u6253\u4E71\u540E\u7684\u7ED3\u679C\u3002\u4F8B\u5982\uFF0C\u8FD4\u56DE [1, 3, 2]
</code></pre></div><p>\u63D0\u793A\uFF1A</p><ul><li>1 &lt;= nums.length &lt;= 200</li><li>-106 &lt;= nums[i] &lt;= 106</li><li>nums \u4E2D\u7684\u6240\u6709\u5143\u7D20\u90FD\u662F \u552F\u4E00\u7684</li><li>\u6700\u591A\u53EF\u4EE5\u8C03\u7528 5 * 104 \u6B21 reset \u548C shuffle</li></ul><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">Solution</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>nums <span class="token operator">=</span> nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @return {number[]}
 */</span>
<span class="token class-name">Solution</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @return {number[]}
 */</span>
<span class="token class-name">Solution</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">shuffle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> i<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> numbers<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
  nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,10),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{f as __pageData,_ as default};
