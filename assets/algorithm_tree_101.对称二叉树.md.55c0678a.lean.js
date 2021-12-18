import{_ as n,c as a,o as s,e as t}from"./app.1a8e239b.js";const h='{"title":"101.\u5BF9\u79F0\u4E8C\u53C9\u6811","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/tree/101.\u5BF9\u79F0\u4E8C\u53C9\u6811.md","lastUpdated":1639808514653}',p={},o=t(`__VP_STATIC_START__<h1 id="_101-\u5BF9\u79F0\u4E8C\u53C9\u6811" tabindex="-1">101.\u5BF9\u79F0\u4E8C\u53C9\u6811 <a class="header-anchor" href="#_101-\u5BF9\u79F0\u4E8C\u53C9\u6811" aria-hidden="true">#</a></h1><p>\u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u68C0\u67E5\u5B83\u662F\u5426\u662F\u955C\u50CF\u5BF9\u79F0\u7684\u3002</p><p>\u4F8B\u5982\uFF0C\u4E8C\u53C9\u6811 \xA0[1,2,2,3,4,4,3] \u662F\u5BF9\u79F0\u7684\u3002</p><div class="language-"><pre><code>    1
   / \\
  2   2
 / \\ / \\
3  4 4  3
</code></pre></div><p>\u4F46\u662F\u4E0B\u9762\u8FD9\u4E2A \xA0[1,2,2,null,3,null,3] \u5219\u4E0D\u662F\u955C\u50CF\u5BF9\u79F0\u7684:</p><div class="language-"><pre><code>    1
   / \\
  2   2
   \\   \\
   3    3
</code></pre></div><p><strong>\u8FDB\u9636\uFF1A</strong></p><p>\u4F60\u53EF\u4EE5\u8FD0\u7528\u9012\u5F52\u548C\u8FED\u4EE3\u4E24\u79CD\u65B9\u6CD5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5417\uFF1F</p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {boolean}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isSymmetric</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> right <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> left<span class="token punctuation">.</span>val <span class="token operator">!==</span> right<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>left<span class="token punctuation">,</span> right<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">helper</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>right<span class="token punctuation">,</span> right<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,10),e=[o];function c(l,r,u,i,k,d){return s(),a("div",null,e)}var _=n(p,[["render",c]]);export{h as __pageData,_ as default};
