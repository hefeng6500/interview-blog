import{_ as n,c as s,o as a,a as p}from"./app.c2d6ed1b.js";const _='{"title":"\u63D2\u5165\u6392\u5E8F","description":"","frontmatter":{},"relativePath":"algorithm/sort/insertionSort.md","lastUpdated":1657622796478}',t={},o=p(`__VP_STATIC_START__<h1 id="\u63D2\u5165\u6392\u5E8F" tabindex="-1">\u63D2\u5165\u6392\u5E8F <a class="header-anchor" href="#\u63D2\u5165\u6392\u5E8F" aria-hidden="true">#</a></h1><p>\u901A\u8FC7\u6784\u5EFA\u6709\u5E8F\u5E8F\u5217\uFF0C\u5BF9\u4E8E\u672A\u6392\u5E8F\u6570\u636E\uFF0C\u5728\u5DF2\u6392\u5E8F\u5E8F\u5217\u4E2D\u4ECE\u540E\u5411\u524D\u626B\u63CF\uFF0C\u627E\u5230\u76F8\u5E94\u4F4D\u7F6E\u5E76\u63D2\u5165\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">insertionSort</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> previousIndex<span class="token punctuation">,</span> current<span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    previousIndex <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    current <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>previousIndex <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> current <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>previousIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nums<span class="token punctuation">[</span>previousIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>previousIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
      previousIndex<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    nums<span class="token punctuation">[</span>previousIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> current<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>
  nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>
  nums<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,3),e=[o];function c(u,l,r,k,i,d){return a(),s("div",null,e)}var h=n(t,[["render",c]]);export{_ as __pageData,h as default};
