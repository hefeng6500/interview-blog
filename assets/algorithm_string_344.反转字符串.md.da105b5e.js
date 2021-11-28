import{_ as s}from"./TagList.b3b31d21.js";import{o as a,c as t,d as p,a as n,b as o,e}from"./app.41fa1c8d.js";import"./Tag.vue_vue_type_style_index_0_scoped_true_lang.f741ab98.js";const c=n("h1",{id:"_344-\u53CD\u8F6C\u5B57\u7B26\u4E32",tabindex:"-1"},[o("344.\u53CD\u8F6C\u5B57\u7B26\u4E32 "),n("a",{class:"header-anchor",href:"#_344-\u53CD\u8F6C\u5B57\u7B26\u4E32","aria-hidden":"true"},"#")],-1),u=e(`<p>\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u5176\u4F5C\u7528\u662F\u5C06\u8F93\u5165\u7684\u5B57\u7B26\u4E32\u53CD\u8F6C\u8FC7\u6765\u3002\u8F93\u5165\u5B57\u7B26\u4E32\u4EE5\u5B57\u7B26\u6570\u7EC4 s \u7684\u5F62\u5F0F\u7ED9\u51FA\u3002</p><p>\u4E0D\u8981\u7ED9\u53E6\u5916\u7684\u6570\u7EC4\u5206\u914D\u989D\u5916\u7684\u7A7A\u95F4\uFF0C\u4F60\u5FC5\u987B\u539F\u5730\u4FEE\u6539\u8F93\u5165\u6570\u7EC4\u3001\u4F7F\u7528 O(1) \u7684\u989D\u5916\u7A7A\u95F4\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1As = [&quot;h&quot;,&quot;e&quot;,&quot;l&quot;,&quot;l&quot;,&quot;o&quot;]
\u8F93\u51FA\uFF1A[&quot;o&quot;,&quot;l&quot;,&quot;l&quot;,&quot;e&quot;,&quot;h&quot;]
</code></pre></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1As = [&quot;H&quot;,&quot;a&quot;,&quot;n&quot;,&quot;n&quot;,&quot;a&quot;,&quot;h&quot;]
\u8F93\u51FA\uFF1A[&quot;h&quot;,&quot;a&quot;,&quot;n&quot;,&quot;n&quot;,&quot;a&quot;,&quot;H&quot;]
</code></pre></div><p>\u63D0\u793A\uFF1A</p><p>1 &lt;= s.length &lt;= 105 s[i] \u90FD\u662F ASCII \u7801\u8868\u4E2D\u7684\u53EF\u6253\u5370\u5B57\u7B26</p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p><strong>1\u3001\u53CC\u6307\u9488</strong></p><p>\u4F7F\u7528\u4E24\u4E2A\u6307\u9488\uFF0C\u4E00\u4E2A\u4ECE\u5DE6\u5F00\u59CB\uFF0C \u4E00\u4E2A\u4ECE\u53F3\u5F00\u59CB\uFF0C \u4E24\u4E24\u4EA4\u6362</p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">swap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
    s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
    s<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> left<span class="token operator">++</span><span class="token punctuation">,</span> right<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2\u3001\u9012\u5F52</strong></p><p>\u4E5F\u53EF\u4EE5\u662F\u7528\u9012\u5F52\u6C42\u89E3</p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> s<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">swap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">reverseStringHelper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">reverseStringHelper</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token operator">++</span>left<span class="token punctuation">,</span> <span class="token operator">--</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">reverseStringHelper</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>3\u3001\u6211\u7684\u76F4\u89C9\u89E3\u6CD5\uFF082021.11.22\uFF09</strong></p><p>\u5934\u5C3E\u4EA4\u6362</p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">swap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,18),m='{"title":"344.\u53CD\u8F6C\u5B57\u7B26\u4E32","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/string/344.\u53CD\u8F6C\u5B57\u7B26\u4E32.md","lastUpdated":1638064014786}',l={};function r(k){return(i,d)=>(a(),t("div",null,[c,p(s,{list:[{label:"\u53CC\u6307\u9488",type:"primary"},{label:"\u9012\u5F52",type:"success"},{label:"\u5B57\u7B26\u4E32",type:"darkorchid"}]}),u]))}const q=Object.assign(l,{setup:r});export{m as __pageData,q as default};
