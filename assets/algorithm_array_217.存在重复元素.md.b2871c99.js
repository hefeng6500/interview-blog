import{_ as n,c as s,o as a,e as p}from"./app.62f83930.js";const m='{"title":"217. \u5B58\u5728\u91CD\u590D\u5143\u7D20","description":"","frontmatter":{},"relativePath":"algorithm/array/217.\u5B58\u5728\u91CD\u590D\u5143\u7D20.md","lastUpdated":1638626265680}',t={},o=p(`<h1 id="_217-\u5B58\u5728\u91CD\u590D\u5143\u7D20" tabindex="-1">217. \u5B58\u5728\u91CD\u590D\u5143\u7D20 <a class="header-anchor" href="#_217-\u5B58\u5728\u91CD\u590D\u5143\u7D20" aria-hidden="true">#</a></h1><p>\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\u6570\u7EC4\uFF0C\u5224\u65AD\u662F\u5426\u5B58\u5728\u91CD\u590D\u5143\u7D20\u3002</p><p>\u5982\u679C\u5B58\u5728\u4E00\u503C\u5728\u6570\u7EC4\u4E2D\u51FA\u73B0\u81F3\u5C11\u4E24\u6B21\uFF0C\u51FD\u6570\u8FD4\u56DE true \u3002\u5982\u679C\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u90FD\u4E0D\u76F8\u540C\uFF0C\u5219\u8FD4\u56DE false \u3002</p><p>\u793A\u4F8B 1:</p><div class="language-"><pre><code>\u8F93\u5165: [1,2,3,1]
\u8F93\u51FA: true
</code></pre></div><p>\u793A\u4F8B 2:</p><div class="language-"><pre><code>\u8F93\u5165: [1,2,3,4]
\u8F93\u51FA: false
</code></pre></div><p>\u793A\u4F8B \xA03:</p><div class="language-"><pre><code>\u8F93\u5165: [1,1,1,3,3,4,3,2,4,2]
\u8F93\u51FA: true
</code></pre></div><p>\u89E3\u6CD5\uFF1A</p><p>1\u3001\u66B4\u529B\u7834\u89E3\u6CD5\uFF0C\u53CC\u5C42\u5FAA\u73AF\u6BD4\u5BF9</p><p>2\u3001\u5BF9\u8C61\u54C8\u5E0C\u8868\u6CD5</p><p>3\u3001\u5229\u7528 <code>Set</code> \u6570\u636E\u7ED3\u6784</p><div class="language-js"><pre><code><span class="token comment">// 2\u3001\u5BF9\u8C61\u54C8\u5E0C\u8868\u6CD5</span>
<span class="token comment">/**
 * @param {number[]} nums
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">containsDuplicate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      obj<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// 3\u3001\u5229\u7528 \`Set\` \u6570\u636E\u7ED3\u6784</span>
<span class="token comment">/**
 * @param {number[]} nums
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">containsDuplicate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">!==</span> nums<span class="token punctuation">.</span>length
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,15),e=[o];function c(u,l,r,k,i,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{m as __pageData,f as default};
