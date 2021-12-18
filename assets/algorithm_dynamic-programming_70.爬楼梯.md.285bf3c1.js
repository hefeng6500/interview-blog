import{_ as n,c as s,o as a,e as p}from"./app.1a8e239b.js";const b='{"title":"70.\u722C\u697C\u68AF","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/dynamic-programming/70.\u722C\u697C\u68AF.md","lastUpdated":1639810097419}',t={},o=p(`<h1 id="_70-\u722C\u697C\u68AF" tabindex="-1">70.\u722C\u697C\u68AF <a class="header-anchor" href="#_70-\u722C\u697C\u68AF" aria-hidden="true">#</a></h1><p>\u5047\u8BBE\u4F60\u6B63\u5728\u722C\u697C\u68AF\u3002\u9700\u8981 n \u9636\u4F60\u624D\u80FD\u5230\u8FBE\u697C\u9876\u3002</p><p>\u6BCF\u6B21\u4F60\u53EF\u4EE5\u722C 1 \u6216 2 \u4E2A\u53F0\u9636\u3002\u4F60\u6709\u591A\u5C11\u79CD\u4E0D\u540C\u7684\u65B9\u6CD5\u53EF\u4EE5\u722C\u5230\u697C\u9876\u5462\uFF1F</p><p>\u6CE8\u610F\uFF1A\u7ED9\u5B9A n \u662F\u4E00\u4E2A\u6B63\u6574\u6570\u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1A 2
\u8F93\u51FA\uFF1A 2
\u89E3\u91CA\uFF1A \u6709\u4E24\u79CD\u65B9\u6CD5\u53EF\u4EE5\u722C\u5230\u697C\u9876\u3002

1.  1 \u9636 + 1 \u9636
2.  2 \u9636
</code></pre></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1A 3
\u8F93\u51FA\uFF1A 3
\u89E3\u91CA\uFF1A \u6709\u4E09\u79CD\u65B9\u6CD5\u53EF\u4EE5\u722C\u5230\u697C\u9876\u3002
1.  1 \u9636 + 1 \u9636 + 1 \u9636
2.  1 \u9636 + 2 \u9636
3.  2 \u9636 + 1 \u9636
</code></pre></div><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p><strong>1\u3001\u9012\u5F52</strong></p><p>\u9996\u5148\u662F\u8FD9\u4E48\u5199\uFF0C\u770B\u4E0A\u53BB\u53EF\u4EE5\uFF0C\u4F46\u662F n \u503C\u8F83\u5927\u65F6\uFF0C\u8017\u65F6\u8F83\u957F</p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number} n
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">climbStairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u91C7\u7528<strong>\u5C3E\u9012\u5F52\u4F18\u5316</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number} n
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">climbStairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">fibonacci</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2. \u6570\u7EC4\u8FED\u4EE3\u7684\u89E3\u6CD5\uFF0C\u81EA\u5E95\u5411\u4E0A\u8BA1\u7B97\u65B9\u5F0F</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number} n
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">climbStairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token number">1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token number">2</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> map<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> map<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> map<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>3. \u5FAA\u73AF\uFF0C\u4F18\u5316\u7A7A\u95F4\u590D\u6742\u5EA6</strong></p><p>\u540E\u4E00\u4E2A\u503C\u662F\u524D\u4E24\u4E2A\u503C\u5F97\u603B\u548C\uFF0C\u4E0D\u7528\u7533\u8BF7\u989D\u5916\u7684\u7A7A\u95F4</p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number} n
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">climbStairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">=</span> first <span class="token operator">+</span> second<span class="token punctuation">;</span>
    first <span class="token operator">=</span> second<span class="token punctuation">;</span>
    second <span class="token operator">=</span> sum<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,19),e=[o];function c(u,l,r,k,i,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{b as __pageData,f as default};
