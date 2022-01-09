import{_ as n,c as s,o as a,a as t}from"./app.a1f82200.js";const d='{"title":"412.Fizz Buzz","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/math/412.Fizz Buzz.md","lastUpdated":1641702993046}',o={},p=t(`<h1 id="_412-fizz-buzz" tabindex="-1">412.Fizz Buzz <a class="header-anchor" href="#_412-fizz-buzz" aria-hidden="true">#</a></h1><p>\u7ED9\u4F60\u4E00\u4E2A\u6574\u6570 n \uFF0C\u627E\u51FA\u4ECE 1 \u5230 n \u5404\u4E2A\u6574\u6570\u7684 Fizz Buzz \u8868\u793A\uFF0C\u5E76\u7528\u5B57\u7B26\u4E32\u6570\u7EC4 answer\uFF08\u4E0B\u6807\u4ECE 1 \u5F00\u59CB\uFF09\u8FD4\u56DE\u7ED3\u679C\uFF0C\u5176\u4E2D\uFF1A</p><ul><li>answer[i] == &quot;FizzBuzz&quot; \u5982\u679C i \u540C\u65F6\u662F 3 \u548C 5 \u7684\u500D\u6570\u3002</li><li>answer[i] == &quot;Fizz&quot; \u5982\u679C i \u662F 3 \u7684\u500D\u6570\u3002</li><li>answer[i] == &quot;Buzz&quot; \u5982\u679C i \u662F 5 \u7684\u500D\u6570\u3002</li><li>answer[i] == i \uFF08\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF09\u5982\u679C\u4E0A\u8FF0\u6761\u4EF6\u5168\u4E0D\u6EE1\u8DB3\u3002</li></ul><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1An = 3
\u8F93\u51FA\uFF1A[&quot;1&quot;,&quot;2&quot;,&quot;Fizz&quot;]
</code></pre></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1An = 5
\u8F93\u51FA\uFF1A[&quot;1&quot;,&quot;2&quot;,&quot;Fizz&quot;,&quot;4&quot;,&quot;Buzz&quot;]
</code></pre></div><p><strong>\u793A\u4F8B 3\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1An = 15
\u8F93\u51FA\uFF1A[&quot;1&quot;,&quot;2&quot;,&quot;Fizz&quot;,&quot;4&quot;,&quot;Buzz&quot;,&quot;Fizz&quot;,&quot;7&quot;,&quot;8&quot;,&quot;Fizz&quot;,&quot;Buzz&quot;,&quot;11&quot;,&quot;Fizz&quot;,&quot;13&quot;,&quot;14&quot;,&quot;FizzBuzz&quot;]
</code></pre></div><p>\u63D0\u793A\uFF1A</p><ul><li>1 &lt;= n &lt;= 104</li></ul><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number} n
 * @return {string[]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">fizzBuzz</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> five <span class="token operator">=</span> i <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> three <span class="token operator">=</span> i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>five <span class="token operator">&amp;&amp;</span> three<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;FizzBuzz&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>three<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;Fizz&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>five<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;Buzz&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,13),e=[p];function u(c,i,l,r,k,z){return a(),s("div",null,e)}var _=n(o,[["render",u]]);export{d as __pageData,_ as default};
