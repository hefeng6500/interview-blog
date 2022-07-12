import{_ as n,c as s,o as a,a as p}from"./app.c2d6ed1b.js";const f='{"title":"\u5FEB\u901F\u6392\u5E8F","description":"","frontmatter":{},"relativePath":"algorithm/sort/quickSort.md","lastUpdated":1657622796478}',t={},o=p(`<h1 id="\u5FEB\u901F\u6392\u5E8F" tabindex="-1">\u5FEB\u901F\u6392\u5E8F <a class="header-anchor" href="#\u5FEB\u901F\u6392\u5E8F" aria-hidden="true">#</a></h1><p>\u5FEB\u901F\u6392\u5E8F\u4F7F\u7528\u5206\u6CBB\u6CD5\u6765\u628A\u4E00\u4E2A\u4E32\uFF08list\uFF09\u5206\u4E3A\u4E24\u4E2A\u5B50\u4E32\uFF08sub-lists\uFF09\u3002\u5177\u4F53\u7B97\u6CD5\u63CF\u8FF0\u5982\u4E0B\uFF1A</p><ul><li>\u4ECE\u6570\u5217\u4E2D\u6311\u51FA\u4E00\u4E2A\u5143\u7D20\uFF0C\u79F0\u4E3A \u201C\u57FA\u51C6\u201D\uFF08pivot\uFF09\uFF1B</li><li>\u91CD\u65B0\u6392\u5E8F\u6570\u5217\uFF0C\u6240\u6709\u5143\u7D20\u6BD4\u57FA\u51C6\u503C\u5C0F\u7684\u6446\u653E\u5728\u57FA\u51C6\u524D\u9762\uFF0C\u6240\u6709\u5143\u7D20\u6BD4\u57FA\u51C6\u503C\u5927\u7684\u6446\u5728\u57FA\u51C6\u7684\u540E\u9762\uFF08\u76F8\u540C\u7684\u6570\u53EF\u4EE5\u5230\u4EFB\u4E00\u8FB9\uFF09\u3002\u5728\u8FD9\u4E2A\u5206\u533A\u9000\u51FA\u4E4B\u540E\uFF0C\u8BE5\u57FA\u51C6\u5C31\u5904\u4E8E\u6570\u5217\u7684\u4E2D\u95F4\u4F4D\u7F6E\u3002\u8FD9\u4E2A\u79F0\u4E3A\u5206\u533A\uFF08partition\uFF09\u64CD\u4F5C\uFF1B</li><li>\u9012\u5F52\u5730\uFF08recursive\uFF09\u628A\u5C0F\u4E8E\u57FA\u51C6\u503C\u5143\u7D20\u7684\u5B50\u6570\u5217\u548C\u5927\u4E8E\u57FA\u51C6\u503C\u5143\u7D20\u7684\u5B50\u6570\u5217\u6392\u5E8F</li></ul><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">quick</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">quick</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> begin<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>begin <span class="token operator">&gt;=</span> end<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> pivot <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> begin<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">quick</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> begin<span class="token punctuation">,</span> pivot <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">quick</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> pivot <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">partition</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> begin<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pivot <span class="token operator">=</span> end<span class="token punctuation">;</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> begin<span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> begin<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>pivot<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
      j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> pivot<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> pivot<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>
  nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>
  nums<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u962E\u4E00\u5CF0\u8001\u5E08\u7684\u4E10\u7248\u5FEB\u901F\u6392\u5E8F(\u77E5\u4E4E\u9971\u53D7\u4E89\u8BAE)</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> middleIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> middle <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>middleIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> middle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>middle<span class="token punctuation">,</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var w=n(t,[["render",e]]);export{f as __pageData,w as default};
