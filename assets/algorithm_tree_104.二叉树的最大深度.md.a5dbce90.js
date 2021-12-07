import{_ as n,c as s,o as a,e as t}from"./app.f74ce8db.js";const h='{"title":"104.\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/tree/104.\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6.md","lastUpdated":1638886277065}',p={},o=t(`<h1 id="_104-\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6" tabindex="-1">104.\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6 <a class="header-anchor" href="#_104-\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6" aria-hidden="true">#</a></h1><p>\u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u627E\u51FA\u5176\u6700\u5927\u6DF1\u5EA6\u3002</p><p>\u4E8C\u53C9\u6811\u7684\u6DF1\u5EA6\u4E3A\u6839\u8282\u70B9\u5230\u6700\u8FDC\u53F6\u5B50\u8282\u70B9\u7684\u6700\u957F\u8DEF\u5F84\u4E0A\u7684\u8282\u70B9\u6570\u3002</p><p><strong>\u8BF4\u660E:</strong>\xA0 \u53F6\u5B50\u8282\u70B9\u662F\u6307\u6CA1\u6709\u5B50\u8282\u70B9\u7684\u8282\u70B9\u3002</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><p>\u7ED9\u5B9A\u4E8C\u53C9\u6811 <code>[3,9,20,null,null,15,7]</code>\uFF0C</p><div class="language-"><pre><code>    3
   / \\
  9  20
    /  \\
   15   7
</code></pre></div><p>\u8FD4\u56DE\u5B83\u7684\u6700\u5927\u6DF1\u5EA6 \xA03</p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p><strong>\u65B9\u6CD5\u4E00\uFF1A\u9012\u5F52</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxDepth</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> root <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u65B9\u6CD5\u4E8C\uFF1A BFS</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxDepth</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> level <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> length <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>length<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> current <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    level<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> level<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,13),e=[o];function c(u,l,r,i,k,d){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{h as __pageData,_ as default};
