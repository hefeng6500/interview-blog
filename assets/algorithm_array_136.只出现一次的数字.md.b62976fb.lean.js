import{_ as n,c as s,o as a,h as p}from"./app.02450c6d.js";const _='{"title":"136. \u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57","description":"","frontmatter":{},"relativePath":"algorithm/array/136.\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57.md","lastUpdated":1636798017207}',t={},o=p(`__VP_STATIC_START__<h1 id="_136-\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57" tabindex="-1">136. \u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57 <a class="header-anchor" href="#_136-\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57" aria-hidden="true">#</a></h1><p>\u7ED9\u5B9A\u4E00\u4E2A\u975E\u7A7A\u6574\u6570\u6570\u7EC4\uFF0C\u9664\u4E86\u67D0\u4E2A\u5143\u7D20\u53EA\u51FA\u73B0\u4E00\u6B21\u4EE5\u5916\uFF0C\u5176\u4F59\u6BCF\u4E2A\u5143\u7D20\u5747\u51FA\u73B0\u4E24\u6B21\u3002\u627E\u51FA\u90A3\u4E2A\u53EA\u51FA\u73B0\u4E86\u4E00\u6B21\u7684\u5143\u7D20\u3002</p><p>\u8BF4\u660E\uFF1A</p><p>\u4F60\u7684\u7B97\u6CD5\u5E94\u8BE5\u5177\u6709\u7EBF\u6027\u65F6\u95F4\u590D\u6742\u5EA6\u3002 <strong>\u4F60\u53EF\u4EE5\u4E0D\u4F7F\u7528\u989D\u5916\u7A7A\u95F4\u6765\u5B9E\u73B0\u5417</strong>\uFF1F</p><p>\u793A\u4F8B 1:</p><div class="language-"><pre><code>\u8F93\u5165: [2,2,1]
\u8F93\u51FA: 1
</code></pre></div><p>\u793A\u4F8B \xA02:</p><div class="language-"><pre><code>\u8F93\u5165: [4,1,2,1,2]
\u8F93\u51FA: 4
</code></pre></div><p>\u6807\u7B7E\uFF1A \u4F4D\u8FD0\u7B97</p><p><strong>\u89E3\u6CD5\uFF1A</strong></p><p><strong>1\u3001\u4F7F\u7528\u4F4D\u8FD0\u7B97\u5F02\u6216 <code>^</code></strong></p><ul><li>\u4F7F\u7528\u5F02\u6216\u8FD0\u7B97\uFF0C\u5C06\u6240\u6709\u503C\u8FDB\u884C\u5F02\u6216</li><li>\u5F02\u6216\u8FD0\u7B97\uFF0C\u76F8\u5F02\u4E3A\u771F\uFF0C\u76F8\u540C\u4E3A\u5047\uFF0C\u6240\u4EE5 <code>a ^ a = 0</code>, <code>0 ^ a = a</code></li><li>\u56E0\u4E3A\u5F02\u6216\u8FD0\u7B97 \u6EE1\u8DB3\u4EA4\u6362\u5F8B <code>a ^ b ^ a = a ^ a ^ b = b</code> \u6240\u4EE5\u6570\u7EC4\u7ECF\u8FC7\u5F02\u6216\u8FD0\u7B97\uFF0C\u5355\u72EC\u7684\u503C\u5C31\u5269\u4E0B\u4E86</li></ul><div class="language-js"><pre><code><span class="token comment">// 1\u3001\u4F7F\u7528\u4F4D\u8FD0\u7B97\u5F02\u6216 \`^\`</span>
<span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">singleNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">^=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2\u3001\u5148\u6392\u5E8F\u518D\u67E5\u627E</strong></p><div class="language-js"><pre><code><span class="token comment">// 2\u3001\u5148\u6392\u5E8F\u518D\u67E5\u627E</span>
<span class="token comment">/**
 * @param {number[]} nums
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">singleNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nums<span class="token punctuation">[</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,15),e=[o];function c(u,l,r,k,i,d){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{_ as __pageData,g as default};
