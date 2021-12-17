import{_ as n,c as s,o as a,e as t}from"./app.1a8e239b.js";const _='{"title":"8.\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570 (atoi)","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/string/8.\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570 (atoi).md","lastUpdated":1639745416609}',o={},p=t(`<h1 id="_8-\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570-atoi" tabindex="-1">8.\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570 (atoi) <a class="header-anchor" href="#_8-\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570-atoi" aria-hidden="true">#</a></h1><p>\u8BF7\u4F60\u6765\u5B9E\u73B0\u4E00\u4E2A \xA0myAtoi(string s)\xA0 \u51FD\u6570\uFF0C\u4F7F\u5176\u80FD\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u4E00\u4E2A 32 \u4F4D\u6709\u7B26\u53F7\u6574\u6570\uFF08\u7C7B\u4F3C C/C++ \u4E2D\u7684 atoi \u51FD\u6570\uFF09\u3002</p><p>\u51FD\u6570 \xA0myAtoi(string s) \u7684\u7B97\u6CD5\u5982\u4E0B\uFF1A</p><p>\u8BFB\u5165\u5B57\u7B26\u4E32\u5E76\u4E22\u5F03\u65E0\u7528\u7684\u524D\u5BFC\u7A7A\u683C \u68C0\u67E5\u4E0B\u4E00\u4E2A\u5B57\u7B26\uFF08\u5047\u8BBE\u8FD8\u672A\u5230\u5B57\u7B26\u672B\u5C3E\uFF09\u4E3A\u6B63\u8FD8\u662F\u8D1F\u53F7\uFF0C\u8BFB\u53D6\u8BE5\u5B57\u7B26\uFF08\u5982\u679C\u6709\uFF09\u3002 \u786E\u5B9A\u6700\u7EC8\u7ED3\u679C\u662F\u8D1F\u6570\u8FD8\u662F\u6B63\u6570\u3002 \u5982\u679C\u4E24\u8005\u90FD\u4E0D\u5B58\u5728\uFF0C\u5219\u5047\u5B9A\u7ED3\u679C\u4E3A\u6B63\u3002 \u8BFB\u5165\u4E0B\u4E00\u4E2A\u5B57\u7B26\uFF0C\u76F4\u5230\u5230\u8FBE\u4E0B\u4E00\u4E2A\u975E\u6570\u5B57\u5B57\u7B26\u6216\u5230\u8FBE\u8F93\u5165\u7684\u7ED3\u5C3E\u3002\u5B57\u7B26\u4E32\u7684\u5176\u4F59\u90E8\u5206\u5C06\u88AB\u5FFD\u7565\u3002 \u5C06\u524D\u9762\u6B65\u9AA4\u8BFB\u5165\u7684\u8FD9\u4E9B\u6570\u5B57\u8F6C\u6362\u4E3A\u6574\u6570\uFF08\u5373\uFF0C&quot;123&quot; -&gt; 123\uFF0C &quot;0032&quot; -&gt; 32\uFF09\u3002\u5982\u679C\u6CA1\u6709\u8BFB\u5165\u6570\u5B57\uFF0C\u5219\u6574\u6570\u4E3A 0 \u3002\u5FC5\u8981\u65F6\u66F4\u6539\u7B26\u53F7\uFF08\u4ECE\u6B65\u9AA4 2 \u5F00\u59CB\uFF09\u3002 \u5982\u679C\u6574\u6570\u6570\u8D85\u8FC7 32 \u4F4D\u6709\u7B26\u53F7\u6574\u6570\u8303\u56F4 [\u2212231,\xA0 231\xA0\u2212 1] \uFF0C\u9700\u8981\u622A\u65AD\u8FD9\u4E2A\u6574\u6570\uFF0C\u4F7F\u5176\u4FDD\u6301\u5728\u8FD9\u4E2A\u8303\u56F4\u5185\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u5C0F\u4E8E \u2212231 \u7684\u6574\u6570\u5E94\u8BE5\u88AB\u56FA\u5B9A\u4E3A \u2212231 \uFF0C\u5927\u4E8E 231\xA0\u2212 1 \u7684\u6574\u6570\u5E94\u8BE5\u88AB\u56FA\u5B9A\u4E3A 231\xA0\u2212 1 \u3002 \u8FD4\u56DE\u6574\u6570\u4F5C\u4E3A\u6700\u7EC8\u7ED3\u679C\u3002 \u6CE8\u610F\uFF1A</p><p>\u672C\u9898\u4E2D\u7684\u7A7A\u767D\u5B57\u7B26\u53EA\u5305\u62EC\u7A7A\u683C\u5B57\u7B26 &#39; &#39; \u3002 \u9664\u524D\u5BFC\u7A7A\u683C\u6216\u6570\u5B57\u540E\u7684\u5176\u4F59\u5B57\u7B26\u4E32\u5916\uFF0C\u8BF7\u52FF\u5FFD\u7565 \u4EFB\u4F55\u5176\u4ED6\u5B57\u7B26\u3002</p><p><strong>\u793A\u4F8B \xA01\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1As = &quot;42&quot;
\u8F93\u51FA\uFF1A42
\u89E3\u91CA\uFF1A\u52A0\u7C97\u7684\u5B57\u7B26\u4E32\u4E3A\u5DF2\u7ECF\u8BFB\u5165\u7684\u5B57\u7B26\uFF0C\u63D2\u5165\u7B26\u53F7\u662F\u5F53\u524D\u8BFB\u53D6\u7684\u5B57\u7B26\u3002
\u7B2C 1 \u6B65\uFF1A&quot;42&quot;\uFF08\u5F53\u524D\u6CA1\u6709\u8BFB\u5165\u5B57\u7B26\uFF0C\u56E0\u4E3A\u6CA1\u6709\u524D\u5BFC\u7A7A\u683C\uFF09
         ^
\u7B2C 2 \u6B65\uFF1A&quot;42&quot;\uFF08\u5F53\u524D\u6CA1\u6709\u8BFB\u5165\u5B57\u7B26\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u4E0D\u5B58\u5728 &#39;-&#39; \u6216\u8005 &#39;+&#39;\uFF09
         ^
\u7B2C 3 \u6B65\uFF1A&quot;42&quot;\uFF08\u8BFB\u5165 &quot;42&quot;\uFF09
           ^
\u89E3\u6790\u5F97\u5230\u6574\u6570 42 \u3002
\u7531\u4E8E &quot;42&quot; \u5728\u8303\u56F4 [-231, 231 - 1] \u5185\uFF0C\u6700\u7EC8\u7ED3\u679C\u4E3A 42 \u3002
</code></pre></div><p><strong>\u793A\u4F8B \xA02\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1As = &quot;   -42&quot;
\u8F93\u51FA\uFF1A-42
\u89E3\u91CA\uFF1A
\u7B2C 1 \u6B65\uFF1A&quot;   -42&quot;\uFF08\u8BFB\u5165\u524D\u5BFC\u7A7A\u683C\uFF0C\u4F46\u5FFD\u89C6\u6389\uFF09
            ^
\u7B2C 2 \u6B65\uFF1A&quot;   -42&quot;\uFF08\u8BFB\u5165 &#39;-&#39; \u5B57\u7B26\uFF0C\u6240\u4EE5\u7ED3\u679C\u5E94\u8BE5\u662F\u8D1F\u6570\uFF09
             ^
\u7B2C 3 \u6B65\uFF1A&quot;   -42&quot;\uFF08\u8BFB\u5165 &quot;42&quot;\uFF09
               ^
\u89E3\u6790\u5F97\u5230\u6574\u6570 -42 \u3002
\u7531\u4E8E &quot;-42&quot; \u5728\u8303\u56F4 [-231, 231 - 1] \u5185\uFF0C\u6700\u7EC8\u7ED3\u679C\u4E3A -42 \u3002
</code></pre></div><p><strong>\u793A\u4F8B \xA03\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1As = &quot;4193 with words&quot;
\u8F93\u51FA\uFF1A4193
\u89E3\u91CA\uFF1A
\u7B2C 1 \u6B65\uFF1A&quot;4193 with words&quot;\uFF08\u5F53\u524D\u6CA1\u6709\u8BFB\u5165\u5B57\u7B26\uFF0C\u56E0\u4E3A\u6CA1\u6709\u524D\u5BFC\u7A7A\u683C\uFF09
         ^
\u7B2C 2 \u6B65\uFF1A&quot;4193 with words&quot;\uFF08\u5F53\u524D\u6CA1\u6709\u8BFB\u5165\u5B57\u7B26\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u4E0D\u5B58\u5728 &#39;-&#39; \u6216\u8005 &#39;+&#39;\uFF09
         ^
\u7B2C 3 \u6B65\uFF1A&quot;4193 with words&quot;\uFF08\u8BFB\u5165 &quot;4193&quot;\uFF1B\u7531\u4E8E\u4E0B\u4E00\u4E2A\u5B57\u7B26\u4E0D\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u6240\u4EE5\u8BFB\u5165\u505C\u6B62\uFF09
             ^
\u89E3\u6790\u5F97\u5230\u6574\u6570 4193 \u3002
\u7531\u4E8E &quot;4193&quot; \u5728\u8303\u56F4 [-231, 231 - 1] \u5185\uFF0C\u6700\u7EC8\u7ED3\u679C\u4E3A 4193 \u3002
</code></pre></div><p><strong>\u793A\u4F8B \xA04\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1As = &quot;words and 987&quot;
\u8F93\u51FA\uFF1A0
\u89E3\u91CA\uFF1A
\u7B2C 1 \u6B65\uFF1A&quot;words and 987&quot;\uFF08\u5F53\u524D\u6CA1\u6709\u8BFB\u5165\u5B57\u7B26\uFF0C\u56E0\u4E3A\u6CA1\u6709\u524D\u5BFC\u7A7A\u683C\uFF09
         ^
\u7B2C 2 \u6B65\uFF1A&quot;words and 987&quot;\uFF08\u5F53\u524D\u6CA1\u6709\u8BFB\u5165\u5B57\u7B26\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u4E0D\u5B58\u5728 &#39;-&#39; \u6216\u8005 &#39;+&#39;\uFF09
         ^
\u7B2C 3 \u6B65\uFF1A&quot;words and 987&quot;\uFF08\u7531\u4E8E\u5F53\u524D\u5B57\u7B26 &#39;w&#39; \u4E0D\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u6240\u4EE5\u8BFB\u5165\u505C\u6B62\uFF09
         ^
\u89E3\u6790\u5F97\u5230\u6574\u6570 0 \uFF0C\u56E0\u4E3A\u6CA1\u6709\u8BFB\u5165\u4EFB\u4F55\u6570\u5B57\u3002
\u7531\u4E8E 0 \u5728\u8303\u56F4 [-231, 231 - 1] \u5185\uFF0C\u6700\u7EC8\u7ED3\u679C\u4E3A 0 \u3002
</code></pre></div><p><strong>\u793A\u4F8B \xA05\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1As = &quot;-91283472332&quot;
\u8F93\u51FA\uFF1A-2147483648
\u89E3\u91CA\uFF1A
\u7B2C 1 \u6B65\uFF1A&quot;-91283472332&quot;\uFF08\u5F53\u524D\u6CA1\u6709\u8BFB\u5165\u5B57\u7B26\uFF0C\u56E0\u4E3A\u6CA1\u6709\u524D\u5BFC\u7A7A\u683C\uFF09
         ^
\u7B2C 2 \u6B65\uFF1A&quot;-91283472332&quot;\uFF08\u8BFB\u5165 &#39;-&#39; \u5B57\u7B26\uFF0C\u6240\u4EE5\u7ED3\u679C\u5E94\u8BE5\u662F\u8D1F\u6570\uFF09
          ^
\u7B2C 3 \u6B65\uFF1A&quot;-91283472332&quot;\uFF08\u8BFB\u5165 &quot;91283472332&quot;\uFF09
                     ^
\u89E3\u6790\u5F97\u5230\u6574\u6570 -91283472332 \u3002
\u7531\u4E8E -91283472332 \u5C0F\u4E8E\u8303\u56F4 [-231, 231 - 1] \u7684\u4E0B\u754C\uFF0C\u6700\u7EC8\u7ED3\u679C\u88AB\u622A\u65AD\u4E3A -231 = -2147483648 \u3002
</code></pre></div><p>\u63D0\u793A\uFF1A</p><p>0 &lt;= s.length &lt;= 200 s \u7531\u82F1\u6587\u5B57\u6BCD\uFF08\u5927\u5199\u548C\u5C0F\u5199\uFF09\u3001\u6570\u5B57\uFF080-9\uFF09\u3001&#39; &#39;\u3001&#39;+&#39;\u3001&#39;-&#39; \u548C &#39;.&#39; \u7EC4\u6210</p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p>\u9898\u76EE\u592A\u957F\u4E86\uFF0C\u8BF4\u5B9E\u8BDD\u5F88\u8BA8\u538C</p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {string} str
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">myAtoi</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> number <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">||</span> number <span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> number <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> number<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,20),e=[p];function u(c,r,l,i,k,d){return a(),s("div",null,e)}var m=n(o,[["render",u]]);export{_ as __pageData,m as default};
