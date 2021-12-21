import{_ as n,c as s,o as a,e as t}from"./app.5ef5afe9.js";const h='{"title":"104.\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/tree/104.\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6.md","lastUpdated":1640092846061}',p={},o=t(`__VP_STATIC_START__<h1 id="_104-\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6" tabindex="-1">104.\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6 <a class="header-anchor" href="#_104-\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6" aria-hidden="true">#</a></h1><p>\u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u627E\u51FA\u5176\u6700\u5927\u6DF1\u5EA6\u3002</p><p>\u4E8C\u53C9\u6811\u7684\u6DF1\u5EA6\u4E3A\u6839\u8282\u70B9\u5230\u6700\u8FDC\u53F6\u5B50\u8282\u70B9\u7684\u6700\u957F\u8DEF\u5F84\u4E0A\u7684\u8282\u70B9\u6570\u3002</p><p><strong>\u8BF4\u660E:</strong>\xA0 \u53F6\u5B50\u8282\u70B9\u662F\u6307\u6CA1\u6709\u5B50\u8282\u70B9\u7684\u8282\u70B9\u3002</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><p>\u7ED9\u5B9A\u4E8C\u53C9\u6811 <code>[3,9,20,null,null,15,7]</code>\uFF0C</p><div class="language-"><pre><code>    3
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
</code></pre></div><p><strong>\u65B9\u6CD5\u4E8C\uFF1A BFS</strong></p><p>\u5E7F\u5EA6\u4F18\u5148\u7B97\u6CD5\uFF0C\u9996\u5148\u904D\u5386\u7B2C\u4E00\u5C42\uFF0C\u7136\u540E\u904D\u5386\u7B2C 2 \u5C42\uFF0C\u7136\u540E\u904D\u5386\u7B2C 3 \u5C42\u3002</p><p>\u5185\u5C42\u5FAA\u73AF \u83B7\u53D6\u7684\u662F length\uFF0C\u800C\u4E0D\u662F queue.length\uFF0C\u8FD9\u4E2A length \u6307\u7684\u662F\u8FD9\u4E00\u5C42\u7EA7\u5143\u7D20\u7684\u4E2A\u6570\uFF0C\u6BD4\u5982\u7B2C\u4E00\u5C42\u4E00\u4E2A root \u5143\u7D20\uFF0C\u7B2C\u4E8C\u5C42\u4E24\u4E2A\uFF0C\u7B2C\u4E09\u5C42\u56DB\u4E2A\uFF0C\u5F1F\u7B2C\u56DB\u5C42\u516B\u4E2A...</p><p>\u5728\u904D\u5386\u5F53\u524D\u5C42\u7684\u65F6\u5019\u540C\u6837\u4F1A\u6536\u96C6\u4E0B\u4E00\u5C42\u7684\u8282\u70B9\uFF0C\u5728\u4E0B\u4E00\u8F6E\u5916\u5C42\u5FAA\u73AF\u7684\u65F6\u5019\uFF08\u5F53\u524D\u5185\u5C42\u5FAA\u73AF\u5B8C\u6210\u540E\uFF09\u83B7\u53D6 length \u8FDB\u884C\u904D\u5386</p><div class="language-js"><pre><code><span class="token comment">/**
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
</code></pre></div><p><strong>\u65B9\u6CD5\u4E8C\uFF1ADFS</strong></p><p>\u6DF1\u5EA6\u4F18\u5148\u7B97\u6CD5</p><p>\u4F7F\u7528\u4E24\u4E2A\u6808\uFF0C\u4E00\u4E2A\u8BB0\u5F55\u8282\u70B9\u7684stack\u6808\uFF0C\u4E00\u4E2A\u8BB0\u5F55\u8282\u70B9\u6240\u5728\u5C42\u6570\u7684level\u6808\uFF0Cstack\u4E2D\u6BCF\u4E2A\u8282\u70B9\u5728level\u4E2D\u90FD\u4F1A\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684\u503C\uFF0C\u5E76\u4E14\u4ED6\u4EEC\u662F\u540C\u65F6\u51FA\u6808\uFF0C\u540C\u65F6\u5165\u6808</p><div class="language-js"><pre><code><span class="token comment">/**
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
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> levelStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
  levelStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> level <span class="token operator">=</span> levelStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
      levelStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>level <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
      levelStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>level <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,20),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{h as __pageData,m as default};
