import{_ as n,c as s,o as a,e as t}from"./app.e7eaf4d5.js";const f='{"title":"125.\u9A8C\u8BC1\u56DE\u6587\u4E32","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/string/125.\u9A8C\u8BC1\u56DE\u6587\u4E32.md","lastUpdated":1638626422819}',p={},o=t(`<h1 id="_125-\u9A8C\u8BC1\u56DE\u6587\u4E32" tabindex="-1">125.\u9A8C\u8BC1\u56DE\u6587\u4E32 <a class="header-anchor" href="#_125-\u9A8C\u8BC1\u56DE\u6587\u4E32" aria-hidden="true">#</a></h1><p>\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u9A8C\u8BC1\u5B83\u662F\u5426\u662F\u56DE\u6587\u4E32\uFF0C\u53EA\u8003\u8651\u5B57\u6BCD\u548C\u6570\u5B57\u5B57\u7B26\uFF0C\u53EF\u4EE5\u5FFD\u7565\u5B57\u6BCD\u7684\u5927\u5C0F\u5199\u3002</p><p>\u8BF4\u660E\uFF1A\u672C\u9898\u4E2D\uFF0C\u6211\u4EEC\u5C06\u7A7A\u5B57\u7B26\u4E32\u5B9A\u4E49\u4E3A\u6709\u6548\u7684\u56DE\u6587\u4E32\u3002</p><p><strong>\u793A\u4F8B 1:</strong></p><div class="language-"><pre><code>\u8F93\u5165: &quot;A man, a plan, a canal: Panama&quot;
\u8F93\u51FA: true
\u89E3\u91CA\uFF1A&quot;amanaplanacanalpanama&quot; \u662F\u56DE\u6587\u4E32
</code></pre></div><p><strong>\u793A\u4F8B 2:</strong></p><div class="language-"><pre><code>\u8F93\u5165: &quot;race a car&quot;
\u8F93\u51FA: false
\u89E3\u91CA\uFF1A&quot;raceacar&quot; \u4E0D\u662F\u56DE\u6587\u4E32
</code></pre></div><p>\u63D0\u793A\uFF1A</p><p>1 &lt;= s.length &lt;= 2 * 105 \u5B57\u7B26\u4E32 s \u7531 ASCII \u5B57\u7B26\u7EC4\u6210</p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p><strong>1\u3001\u6B63\u5219\u8868\u8FBE\u5F0F + \u5B57\u7B26\u4E32\u53CD\u8F6C</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {string} s
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> str <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^A-Za-z0-9]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> str <span class="token operator">===</span> cache<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2\u3001\u53CC\u6307\u9488</strong></p><ul><li>\u4E00\u4E2A\u5DE6\u6307\u9488\uFF0C\u4E00\u4E2A\u53F3\u6307\u9488\uFF0C</li><li>\u9047\u5230\u975E\u5B57\u6BCD\u548C\u6570\u5B57\u5C31\u8DF3\u8FC7\uFF0C\u9047\u5230\u5B57\u6BCD\u5C31\u8FDB\u884C\u6BD4\u5BF9</li><li>\u5982\u679C\u6700\u540E\u6CA1\u6709\u4E0D\u60F3\u7B49\u7684\u4EE3\u8868\u662F\u56DE\u6587\u5B57\u7B26\u4E32</li></ul><div class="language-js"><pre><code><span class="token comment">/**
 * @param {string} s
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-zA-Z0-9]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      right<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLocaleLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!==</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLocaleLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      left<span class="token operator">++</span><span class="token punctuation">;</span>
      right<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>3\u3001\u9012\u5F52\u5B9E\u73B0</strong></p><p>\u73A9\u51FA\u82B1\u6837\u7684\u65B9\u5F0F</p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {string} s
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-zA-Z0-9]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">isPalindromeHelper</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      right<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLocaleLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLocaleLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      <span class="token function">isPalindromeHelper</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token operator">++</span>left<span class="token punctuation">,</span> <span class="token operator">--</span>right<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">isPalindromeHelper</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,18),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{f as __pageData,m as default};
