import{_ as n,c as s,o as a,e as t}from"./app.157e2c5d.js";const f='{"title":"14.\u6700\u957F\u516C\u5171\u524D\u7F00","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/string/14.\u6700\u957F\u516C\u5171\u524D\u7F00.md","lastUpdated":1641544470682}',p={},o=t(`<h1 id="_14-\u6700\u957F\u516C\u5171\u524D\u7F00" tabindex="-1">14.\u6700\u957F\u516C\u5171\u524D\u7F00 <a class="header-anchor" href="#_14-\u6700\u957F\u516C\u5171\u524D\u7F00" aria-hidden="true">#</a></h1><p>\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\u6765\u67E5\u627E\u5B57\u7B26\u4E32\u6570\u7EC4\u4E2D\u7684\u6700\u957F\u516C\u5171\u524D\u7F00\u3002</p><p>\u5982\u679C\u4E0D\u5B58\u5728\u516C\u5171\u524D\u7F00\uFF0C\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32 \xA0&quot;&quot;\u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Astrs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;]
\u8F93\u51FA\uFF1A&quot;fl&quot;
</code></pre></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Astrs = [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;]
\u8F93\u51FA\uFF1A&quot;&quot;
\u89E3\u91CA\uFF1A\u8F93\u5165\u4E0D\u5B58\u5728\u516C\u5171\u524D\u7F00\u3002
</code></pre></div><p>\u63D0\u793A\uFF1A</p><p>1 &lt;= strs.length &lt;= 200</p><p>0 &lt;= strs[i].length &lt;= 200</p><p>strs[i] \u4EC5\u7531\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210</p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p><strong>1\u3001\u53CC\u5C42\u5FAA\u73AF</strong></p><p>\u81EA\u5DF1\u7684\u89E3\u6CD5</p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {string[]} strs
 * @return {string}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestCommonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> first <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> first<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>first<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">===</span> strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> first<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2\u3001\u9009\u53D6\u6570\u7EC4\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E0D\u65AD\u622A\u53D6\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E32\u957F\u5EA6\u6BD4\u5BF9</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {string[]} strs
 * @return {string}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestCommonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>strs <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> strs<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> pre <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>pre<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      pre <span class="token operator">=</span> pre<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> pre<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,17),e=[o];function c(u,l,r,k,i,d){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{f as __pageData,_ as default};
