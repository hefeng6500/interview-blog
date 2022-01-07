import{_ as n,c as s,o as a,e as t}from"./app.157e2c5d.js";const h='{"title":"102.\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/tree/102.\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386.md","lastUpdated":1641544470682}',p={},o=t(`__VP_STATIC_START__<h1 id="_102-\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386" tabindex="-1">102.\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386 <a class="header-anchor" href="#_102-\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386" aria-hidden="true">#</a></h1><p>\u7ED9\u4F60\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u8BF7\u4F60\u8FD4\u56DE\u5176\u6309 \u5C42\u5E8F\u904D\u5386 \u5F97\u5230\u7684\u8282\u70B9\u503C\u3002 \uFF08\u5373\u9010\u5C42\u5730\uFF0C\u4ECE\u5DE6\u5230\u53F3\u8BBF\u95EE\u6240\u6709\u8282\u70B9\uFF09\u3002</p><p><strong>\u793A\u4F8B\uFF1A</strong> \u4E8C\u53C9\u6811\uFF1A[3,9,20,null,null,15,7],</p><div class="language-"><pre><code>    3
   / \\
  9  20
    /  \\
   15   7
</code></pre></div><p>\u8FD4\u56DE\u5176\u5C42\u5E8F\u904D\u5386\u7ED3\u679C\uFF1A</p><div class="language-"><pre><code>[
[3],
[9,20],
[15,7]
]
</code></pre></div><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p><strong>1\u3001BFS \u89E3\u51B3</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {number[][]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">levelOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> length <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">const</span> subList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      subList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>subList<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2\u3001DFS</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {number[][]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">levelOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">list<span class="token punctuation">,</span> root<span class="token punctuation">,</span> level</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">&gt;=</span> list<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    list<span class="token punctuation">[</span>level<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">helper</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> level <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">helper</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> level <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">helper</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> list<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,11),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{h as __pageData,_ as default};
