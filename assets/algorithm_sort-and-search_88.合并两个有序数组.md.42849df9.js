import{_ as n,c as s,o as a,a as p}from"./app.3c45cc38.js";const g='{"title":"88.\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u89E3\u6CD5","slug":"\u89E3\u6CD5"}],"relativePath":"algorithm/sort-and-search/88.\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4.md","lastUpdated":1641702656502}',t={},o=p(`<h1 id="_88-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4" tabindex="-1">88.\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4 <a class="header-anchor" href="#_88-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4" aria-hidden="true">#</a></h1><p>\u7ED9\u4F60\u4E24\u4E2A\u6309 \u975E\u9012\u51CF\u987A\u5E8F \u6392\u5217\u7684\u6574\u6570\u6570\u7EC4 <code>nums1</code> \u548C <code>nums2</code>\uFF0C\u53E6\u6709\u4E24\u4E2A\u6574\u6570 m \u548C n \uFF0C\u5206\u522B\u8868\u793A <code>nums1</code> \u548C <code>nums2</code> \u4E2D\u7684\u5143\u7D20\u6570\u76EE\u3002</p><p>\u8BF7\u4F60 \u5408\u5E76 <code>nums2</code> \u5230 <code>nums1</code> \u4E2D\uFF0C\u4F7F\u5408\u5E76\u540E\u7684\u6570\u7EC4\u540C\u6837\u6309 \u975E\u9012\u51CF\u987A\u5E8F \u6392\u5217\u3002</p><p>\u6CE8\u610F\uFF1A\u6700\u7EC8\uFF0C\u5408\u5E76\u540E\u6570\u7EC4\u4E0D\u5E94\u7531\u51FD\u6570\u8FD4\u56DE\uFF0C\u800C\u662F\u5B58\u50A8\u5728\u6570\u7EC4 <code>nums1</code> <code>\u4E2D\u3002\u4E3A\u4E86\u5E94\u5BF9\u8FD9\u79CD\u60C5\u51B5\uFF0Cnums1</code> \u7684\u521D\u59CB\u957F\u5EA6\u4E3A <code>m + n</code>\uFF0C\u5176\u4E2D\u524D <code>m</code> \u4E2A\u5143\u7D20\u8868\u793A\u5E94\u5408\u5E76\u7684\u5143\u7D20\uFF0C\u540E <code>n</code> \u4E2A\u5143\u7D20\u4E3A <code>0</code> \uFF0C\u5E94\u5FFD\u7565\u3002<code>nums2</code> \u7684\u957F\u5EA6\u4E3A <code>n</code> \u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Anums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
\u8F93\u51FA\uFF1A[1,2,2,3,5,6]
\u89E3\u91CA\uFF1A\u9700\u8981\u5408\u5E76 [1,2,3] \u548C [2,5,6] \u3002
\u5408\u5E76\u7ED3\u679C\u662F [1,2,2,3,5,6] \uFF0C\u5176\u4E2D\u659C\u4F53\u52A0\u7C97\u6807\u6CE8\u7684\u4E3A nums1 \u4E2D\u7684\u5143\u7D20\u3002
</code></pre></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Anums1 = [1], m = 1, nums2 = [], n = 0
\u8F93\u51FA\uFF1A[1]
\u89E3\u91CA\uFF1A\u9700\u8981\u5408\u5E76 [1] \u548C [] \u3002
\u5408\u5E76\u7ED3\u679C\u662F [1] \u3002
</code></pre></div><p><strong>\u793A\u4F8B 3\uFF1A</strong></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Anums1 = [0], m = 0, nums2 = [1], n = 1
\u8F93\u51FA\uFF1A[1]
\u89E3\u91CA\uFF1A\u9700\u8981\u5408\u5E76\u7684\u6570\u7EC4\u662F [] \u548C [1] \u3002
\u5408\u5E76\u7ED3\u679C\u662F [1] \u3002
\u6CE8\u610F\uFF0C\u56E0\u4E3A m = 0 \uFF0C\u6240\u4EE5 nums1 \u4E2D\u6CA1\u6709\u5143\u7D20\u3002nums1 \u4E2D\u4EC5\u5B58\u7684 0 \u4EC5\u4EC5\u662F\u4E3A\u4E86\u786E\u4FDD\u5408\u5E76\u7ED3\u679C\u53EF\u4EE5\u987A\u5229\u5B58\u653E\u5230 nums1 \u4E2D\u3002
</code></pre></div><p>\u63D0\u793A\uFF1A</p><ul><li>nums1.length == m + n</li><li>nums2.length == n</li><li>0 &lt;= m, n &lt;= 200</li><li>1 &lt;= m + n &lt;= 200</li><li>-109 &lt;= nums1[i], nums2[j] &lt;= 109</li></ul><p><strong>\u8FDB\u9636\uFF1A</strong> \u4F60\u53EF\u4EE5\u8BBE\u8BA1\u5B9E\u73B0\u4E00\u4E2A\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(m + n) \u7684\u7B97\u6CD5\u89E3\u51B3\u6B64\u95EE\u9898\u5417\uFF1F</p><h3 id="\u89E3\u6CD5" tabindex="-1">\u89E3\u6CD5 <a class="header-anchor" href="#\u89E3\u6CD5" aria-hidden="true">#</a></h3><p><strong>\u65B9\u6CD5\u4E00\uFF1A \u53CC\u6307\u9488</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> m<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> m <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    j<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> temp<span class="token punctuation">.</span>length<span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums1<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u89E3\u6CD5\u4E8C:</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> m<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> end <span class="token operator">=</span> m <span class="token operator">+</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nums1<span class="token punctuation">[</span>end<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>i<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      nums1<span class="token punctuation">[</span>end<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>j<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u89E3\u6CD5\u4E09\uFF1A sort api</strong></p><div class="language-js"><pre><code><span class="token comment">/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> m<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums1<span class="token punctuation">[</span>m <span class="token operator">+</span> i<span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nums1<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,20),e=[o];function c(u,l,k,r,i,m){return a(),s("div",null,e)}var _=n(t,[["render",c]]);export{g as __pageData,_ as default};
