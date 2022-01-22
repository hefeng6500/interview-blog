import{_ as n,c as a,o as s,a as t}from"./app.a1f82200.js";const m='{"title":"155.\u6700\u5C0F\u6808","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/design-problem/155.\u6700\u5C0F\u6808.md","lastUpdated":1642846449642}',p={},o=t(`__VP_STATIC_START__<h1 id="_155-\u6700\u5C0F\u6808" tabindex="-1">155.\u6700\u5C0F\u6808 <a class="header-anchor" href="#_155-\u6700\u5C0F\u6808" aria-hidden="true">#</a></h1><p>\u8BBE\u8BA1\u4E00\u4E2A\u652F\u6301 push \uFF0Cpop \uFF0Ctop \u64CD\u4F5C\uFF0C\u5E76\u80FD\u5728\u5E38\u6570\u65F6\u95F4\u5185\u68C0\u7D22\u5230\u6700\u5C0F\u5143\u7D20\u7684\u6808\u3002</p><p>push(x) \u2014\u2014 \u5C06\u5143\u7D20 x \u63A8\u5165\u6808\u4E2D\u3002 pop()\xA0\u2014\u2014 \u5220\u9664\u6808\u9876\u7684\u5143\u7D20\u3002 top()\xA0\u2014\u2014 \u83B7\u53D6\u6808\u9876\u5143\u7D20\u3002 getMin() \u2014\u2014 \u68C0\u7D22\u6808\u4E2D\u7684\u6700\u5C0F\u5143\u7D20\u3002</p><p><strong>\u793A\u4F8B:</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1A
[&quot;MinStack&quot;,&quot;push&quot;,&quot;push&quot;,&quot;push&quot;,&quot;getMin&quot;,&quot;pop&quot;,&quot;top&quot;,&quot;getMin&quot;]
[[],[-2],[0],[-3],[],[],[],[]]

\u8F93\u51FA\uFF1A
[null,null,null,null,-3,null,0,-2]

\u89E3\u91CA\uFF1A
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --&gt; \u8FD4\u56DE -3.
minStack.pop();
minStack.top();      --&gt; \u8FD4\u56DE 0.
minStack.getMin();   --&gt; \u8FD4\u56DE -2.
</code></pre></div><p>\u63D0\u793A\uFF1A</p><ul><li>pop\u3001top \u548C getMin \u64CD\u4F5C\u603B\u662F\u5728 \u975E\u7A7A\u6808 \u4E0A\u8C03\u7528</li></ul><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">MinStack</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @param {number} val
 * @return {void}
 */</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @return {void}
 */</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @return {number}
 */</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">top</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @return {number}
 */</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getMin</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,9),c=[o];function e(u,l,i,k,r,d){return s(),a("div",null,c)}var _=n(p,[["render",e]]);export{m as __pageData,_ as default};
