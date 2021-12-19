import{_ as s}from"./TagList.78b65385.js";import{o as a,c as p,a as t,b as n,d as o,e}from"./app.c8e98f65.js";import"./Tag.vue_vue_type_style_index_0_scoped_true_lang.f741ab98.js";const c=n("h1",{id:"_1-\u4E24\u6570\u4E4B\u548C",tabindex:"-1"},[o("1. \u4E24\u6570\u4E4B\u548C "),n("a",{class:"header-anchor",href:"#_1-\u4E24\u6570\u4E4B\u548C","aria-hidden":"true"},"#")],-1),u=e(`__VP_STATIC_START__<p>\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums\xA0 \u548C\u4E00\u4E2A\u6574\u6570\u76EE\u6807\u503C target\uFF0C\u8BF7\u4F60\u5728\u8BE5\u6570\u7EC4\u4E2D\u627E\u51FA \u548C\u4E3A\u76EE\u6807\u503C target\xA0 \u7684\u90A3 \xA0 \u4E24\u4E2A \xA0 \u6574\u6570\uFF0C\u5E76\u8FD4\u56DE\u5B83\u4EEC\u7684\u6570\u7EC4\u4E0B\u6807\u3002</p><p>\u4F60\u53EF\u4EE5\u5047\u8BBE\u6BCF\u79CD\u8F93\u5165\u53EA\u4F1A\u5BF9\u5E94\u4E00\u4E2A\u7B54\u6848\u3002\u4F46\u662F\uFF0C\u6570\u7EC4\u4E2D\u540C\u4E00\u4E2A\u5143\u7D20\u5728\u7B54\u6848\u91CC\u4E0D\u80FD\u91CD\u590D\u51FA\u73B0\u3002</p><p>\u4F60\u53EF\u4EE5\u6309\u4EFB\u610F\u987A\u5E8F\u8FD4\u56DE\u7B54\u6848\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><div class="language-"><pre><code>\u8F93\u5165\uFF1Anums = [2,7,11,15], target = 9
\u8F93\u51FA\uFF1A[0,1]
\u89E3\u91CA\uFF1A\u56E0\u4E3A nums[0] + nums[1] == 9 \uFF0C\u8FD4\u56DE [0, 1] \u3002
</code></pre></div><p>\u793A\u4F8B 2\uFF1A</p><div class="language-"><pre><code>\u8F93\u5165\uFF1Anums = [3,2,4], target = 6
\u8F93\u51FA\uFF1A[1,2]
</code></pre></div><p>\u793A\u4F8B 3\uFF1A</p><div class="language-"><pre><code>\u8F93\u5165\uFF1Anums = [3,3], target = 6
\u8F93\u51FA\uFF1A[0,1]
</code></pre></div><p>\u63D0\u793A\uFF1A</p><div class="language-"><pre><code>2 &lt;= nums.length &lt;= 104
-109 &lt;= nums[i] &lt;= 109
-109 &lt;= target &lt;= 109
</code></pre></div><p>\u53EA\u4F1A\u5B58\u5728\u4E00\u4E2A\u6709\u6548\u7B54\u6848</p><p>\u8FDB\u9636\uFF1A\u4F60\u53EF\u4EE5\u60F3\u51FA\u4E00\u4E2A\u65F6\u95F4\u590D\u6742\u5EA6\u5C0F\u4E8E O(n2) \u7684\u7B97\u6CD5\u5417\uFF1F</p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p><strong>1\u3001\u54C8\u5E0C\u8868</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>map<span class="token punctuation">[</span>target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      map<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2\u3001\u66B4\u529B\u5FAA\u73AF</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> j<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>3\u3001\u53CC\u6307\u9488</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">===</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
      j <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    j<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> j<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,20),y='{"title":"1. \u4E24\u6570\u4E4B\u548C","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/array/1.\u4E24\u6570\u4E4B\u548C.md","lastUpdated":1639894166576}',l={};function r(k){return(i,d)=>(a(),p("div",null,[c,t(s,{list:[{label:"\u6570\u7EC4",type:"primary"},{label:"\u54C8\u5E0C\u8868",type:"success"}]}),u]))}const f=Object.assign(l,{setup:r});export{y as __pageData,f as default};
