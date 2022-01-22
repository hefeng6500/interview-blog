import{_ as n,c as s,o as a,a as t}from"./app.a1f82200.js";const m='{"title":"278.\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/sort-and-search/278.\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C.md","lastUpdated":1642846618350}',p={},o=t(`__VP_STATIC_START__<h1 id="_278-\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C" tabindex="-1">278.\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C <a class="header-anchor" href="#_278-\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C" aria-hidden="true">#</a></h1><p>\u4F60\u662F\u4EA7\u54C1\u7ECF\u7406\uFF0C\u76EE\u524D\u6B63\u5728\u5E26\u9886\u4E00\u4E2A\u56E2\u961F\u5F00\u53D1\u65B0\u7684\u4EA7\u54C1\u3002\u4E0D\u5E78\u7684\u662F\uFF0C\u4F60\u7684\u4EA7\u54C1\u7684\u6700\u65B0\u7248\u672C\u6CA1\u6709\u901A\u8FC7\u8D28\u91CF\u68C0\u6D4B\u3002\u7531\u4E8E\u6BCF\u4E2A\u7248\u672C\u90FD\u662F\u57FA\u4E8E\u4E4B\u524D\u7684\u7248\u672C\u5F00\u53D1\u7684\uFF0C\u6240\u4EE5\u9519\u8BEF\u7684\u7248\u672C\u4E4B\u540E\u7684\u6240\u6709\u7248\u672C\u90FD\u662F\u9519\u7684\u3002</p><p>\u5047\u8BBE\u4F60\u6709 n \u4E2A\u7248\u672C [1, 2, ..., n]\uFF0C\u4F60\u60F3\u627E\u51FA\u5BFC\u81F4\u4E4B\u540E\u6240\u6709\u7248\u672C\u51FA\u9519\u7684\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C\u3002</p><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528 \xA0bool isBadVersion(version)\xA0 \u63A5\u53E3\u6765\u5224\u65AD\u7248\u672C\u53F7 version \u662F\u5426\u5728\u5355\u5143\u6D4B\u8BD5\u4E2D\u51FA\u9519\u3002\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\u6765\u67E5\u627E\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C\u3002\u4F60\u5E94\u8BE5\u5C3D\u91CF\u51CF\u5C11\u5BF9\u8C03\u7528 API \u7684\u6B21\u6570\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><div class="language-"><pre><code>\u8F93\u5165\uFF1An = 5, bad = 4
\u8F93\u51FA\uFF1A4
\u89E3\u91CA\uFF1A
\u8C03\u7528 isBadVersion(3) -&gt; false
\u8C03\u7528 isBadVersion(5)\xA0-&gt; true
\u8C03\u7528 isBadVersion(4)\xA0-&gt; true
\u6240\u4EE5\uFF0C4 \u662F\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C\u3002
</code></pre></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1An = 1, bad = 1
\u8F93\u51FA\uFF1A1
</code></pre></div><p>\u63D0\u793A\uFF1A</p><ul><li>1 &lt;= bad &lt;= n &lt;= 231 - 1</li></ul><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p><strong>1\u3001\u53CC\u6307\u9488 \u9012\u5F52\uFF08\u81EA\u521B\u7248\u672C\uFF09</strong></p><p>\u4E8C\u5206\u6CD5</p><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */</span>

<span class="token comment">/**
 * @param {function} isBadVersion()
 * @return {function}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">solution</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">isBadVersion</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">===</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> start<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>start <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> bad <span class="token operator">=</span> <span class="token function">isBadVersion</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>bad<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u597D\u7684</span>
        <span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u574F\u7684</span>
        <span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> start<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2\u3001\u53CC\u6307\u9488 \u8FED\u4EE3</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */</span>

<span class="token comment">/**
 * @param {function} isBadVersion()
 * @return {function}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">solution</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">isBadVersion</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> end <span class="token operator">=</span> n<span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>start <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isBadVersion</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        end <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        start <span class="token operator">=</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> start<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,16),e=[o];function c(u,r,l,i,k,d){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{m as __pageData,_ as default};
