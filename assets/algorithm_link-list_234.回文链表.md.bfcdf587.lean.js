import{_ as n,c as s,o as a,e as t}from"./app.348e0a18.js";const g='{"title":"234.\u56DE\u6587\u94FE\u8868","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/link-list/234.\u56DE\u6587\u94FE\u8868.md","lastUpdated":1638625147128}',p={},e=t(`__VP_STATIC_START__<h1 id="_234-\u56DE\u6587\u94FE\u8868" tabindex="-1">234.\u56DE\u6587\u94FE\u8868 <a class="header-anchor" href="#_234-\u56DE\u6587\u94FE\u8868" aria-hidden="true">#</a></h1><p>\u7ED9\u4F60\u4E00\u4E2A\u5355\u94FE\u8868\u7684\u5934\u8282\u70B9 head \uFF0C\u8BF7\u4F60\u5224\u65AD\u8BE5\u94FE\u8868\u662F\u5426\u4E3A\u56DE\u6587\u94FE\u8868\u3002\u5982\u679C\u662F\uFF0C\u8FD4\u56DE true \uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE false \u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ahead = [1,2,2,1]
\u8F93\u51FA\uFF1Atrue
</code></pre></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ahead = [1,2]
\u8F93\u51FA\uFF1Afalse
</code></pre></div><p>\u63D0\u793A\uFF1A</p><p>\u94FE\u8868\u4E2D\u8282\u70B9\u6570\u76EE\u5728\u8303\u56F4[1, 105] \u5185 0 &lt;= Node.val &lt;= 9</p><p><strong>\u8FDB\u9636\uFF1A</strong> \u4F60\u80FD\u5426\u7528 \xA0O(n) \u65F6\u95F4\u590D\u6742\u5EA6\u548C O(1) \u7A7A\u95F4\u590D\u6742\u5EA6\u89E3\u51B3\u6B64\u9898\uFF1F</p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p><strong>\u89E3\u6CD5\u4E00\uFF1A\u5C06\u56DE\u6587\u94FE\u8868\u95EE\u9898\u8F6C\u6210\u56DE\u6587\u5B57\u7B26\u4E32\u95EE\u9898</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} head
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> queue<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> queue<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u89E3\u6CD5\u4E8C\uFF1A \u56FD\u9645\u7AD9\u7684 most votes</strong></p><p>This can be solved by reversing the 2nd half and compare the two halves. Let&#39;s start with an example [1, 1, 2, 1].</p><p>In the beginning, set two pointers <code>fast</code> and <code>slow</code> starting at the head.</p><div class="language-"><pre><code>1 -&gt; 1 -&gt; 2 -&gt; 1 -&gt; null
sf
</code></pre></div><p>(1) <strong>Move:</strong> fast pointer goes to the end, and <code>slow</code> goes to the middle.</p><div class="language-"><pre><code>1 -&gt; 1 -&gt; 2 -&gt; 1 -&gt; null
          s          f
</code></pre></div><p>(2) <strong>Reverse:</strong> the right half is reversed, and slow pointer becomes the 2nd head.</p><div class="language-"><pre><code>1 -&gt; 1    null &lt;- 2 &lt;- 1
h                      s
</code></pre></div><p>(3) <strong>Compare:</strong> run the two pointers head and slow together and compare.</p><div class="language-"><pre><code>1 -&gt; 1    null &lt;- 2 &lt;- 1
     h            s
</code></pre></div><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */</span>
<span class="token comment">/**
 * @param {ListNode} head
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">,</span>
    slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// odd nodes: let right half smaller</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  slow <span class="token operator">=</span> <span class="token function">reverse</span><span class="token punctuation">(</span>slow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  fast <span class="token operator">=</span> head<span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>slow <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>val <span class="token operator">!=</span> slow<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    head<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">;</span>
    prev <span class="token operator">=</span> head<span class="token punctuation">;</span>
    head <span class="token operator">=</span> next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> prev<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,23),o=[e];function c(l,u,r,i,k,d){return a(),s("div",null,o)}var f=n(p,[["render",c]]);export{g as __pageData,f as default};
