import{_ as n,c as s,o as a,a as p}from"./app.4da2146c.js";const m='{"title":"387.\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"data-structures/string/387.\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26.md","lastUpdated":1652101560882}',t={},o=p(`__VP_STATIC_START__<h1 id="_387-\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26" tabindex="-1">387.\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26 <a class="header-anchor" href="#_387-\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26" aria-hidden="true">#</a></h1><p>\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u627E\u5230\u5B83\u7684\u7B2C\u4E00\u4E2A\u4E0D\u91CD\u590D\u7684\u5B57\u7B26\uFF0C\u5E76\u8FD4\u56DE\u5B83\u7684\u7D22\u5F15\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE -1\u3002</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-"><pre><code>s = &quot;leetcode&quot;
\u8FD4\u56DE 0

s = &quot;loveleetcode&quot;
\u8FD4\u56DE 2
</code></pre></div><p>\u63D0\u793A\uFF1A\u4F60\u53EF\u4EE5\u5047\u5B9A\u8BE5\u5B57\u7B26\u4E32\u53EA\u5305\u542B\u5C0F\u5199\u5B57\u6BCD\u3002</p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p>1\u3001\u6709\u70B9 low\uFF0C\u4F46\u662F\u80FD\u7528</p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {string} s
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">firstUniqChar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      temp<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      temp<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">[</span>s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2\u3001indexOf and lastIndexOf</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {string} s
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">firstUniqChar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> s<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,10),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{m as __pageData,f as default};
