import{_ as s,o as n,c as p,a0 as e}from"./chunks/framework.dDzXfurR.js";const d=JSON.parse('{"title":"springcloud-day06","description":"学习springcloud","frontmatter":{"title":"springcloud-day06","description":"学习springcloud","date":"2026-10-11T00:00:00.000Z","tags":["java","后端"]},"headers":[],"relativePath":"posts/springcloud-day06.md","filePath":"posts/springcloud-day06.md","lastUpdated":1791736239000}'),t={name:"posts/springcloud-day06.md"};function l(i,a,o,c,u,r){return n(),p("div",null,[...a[0]||(a[0]=[e(`<h1 id="es-day02" tabindex="-1">ES day02 <a class="header-anchor" href="#es-day02" aria-label="Permalink to &quot;ES day02&quot;">​</a></h1><h2 id="dsl查询" tabindex="-1">DSL查询 <a class="header-anchor" href="#dsl查询" aria-label="Permalink to &quot;DSL查询&quot;">​</a></h2><h3 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /indexName/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> &quot;query&quot;: {</span></span>
<span class="line"><span>  &quot;查询类型&quot;:{</span></span>
<span class="line"><span>   &quot;查询条件&quot;: &quot;条件值&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="叶子查询" tabindex="-1">叶子查询 <a class="header-anchor" href="#叶子查询" aria-label="Permalink to &quot;叶子查询&quot;">​</a></h3><h4 id="全文检索查询" tabindex="-1">全文检索查询 <a class="header-anchor" href="#全文检索查询" aria-label="Permalink to &quot;全文检索查询&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /indexName/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> &quot;query&quot;: {</span></span>
<span class="line"><span>  &quot;查询类型&quot;:{</span></span>
<span class="line"><span>   &quot;字段名&quot;: &quot;条件值&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /indexName/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> &quot;query&quot;: {</span></span>
<span class="line"><span>  &quot;查询类型&quot;:{</span></span>
<span class="line"><span>   &quot;query&quot;: &quot;条件值&quot;</span></span>
<span class="line"><span>   &quot;filed&quot;: [&quot;字段1&quot;,&quot;字段2&quot;]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="精确查询" tabindex="-1">精确查询 <a class="header-anchor" href="#精确查询" aria-label="Permalink to &quot;精确查询&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /indexName/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> &quot;query&quot;: {</span></span>
<span class="line"><span>  &quot;term&quot;:{</span></span>
<span class="line"><span>   &quot;FILED&quot;:{</span></span>
<span class="line"><span>    &quot;value&quot;: &quot;条件值&quot;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /indexName/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> &quot;query&quot;: {</span></span>
<span class="line"><span>  &quot;range&quot;:{</span></span>
<span class="line"><span>   &quot;FILED&quot;:{</span></span>
<span class="line"><span>    &quot;gte&quot;: &quot;10&quot;  </span></span>
<span class="line"><span>    &quot;gte&quot;: &quot;10&quot;  &gt;=</span></span>
<span class="line"><span>    &quot;lte&quot;: &quot;20&quot;  &lt;=</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="复合查询" tabindex="-1">复合查询 <a class="header-anchor" href="#复合查询" aria-label="Permalink to &quot;复合查询&quot;">​</a></h3><h4 id="bool查询" tabindex="-1">bool查询 <a class="header-anchor" href="#bool查询" aria-label="Permalink to &quot;bool查询&quot;">​</a></h4><p>must 与</p><p>should 或</p><p>must_not 非</p><p>filter 必须参与，不参与算分</p><h3 id="排序和分页" tabindex="-1">排序和分页 <a class="header-anchor" href="#排序和分页" aria-label="Permalink to &quot;排序和分页&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /indexName/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> &quot;query&quot;: {</span></span>
<span class="line"><span>   &quot;matchall&quot;:{}</span></span>
<span class="line"><span> },</span></span>
<span class="line"><span> &quot;sort&quot;: [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>   &quot;字段名1&quot;: &quot;asc&quot;</span><span> // desc ,asc</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>   &quot;字段名&quot;2: &quot;asc&quot;</span><span> // desc ,asc</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>  &quot;from&quot;: 0,</span><span> //分页开始位置，默认是 0 </span></span>
<span class="line"><span>  &quot;size&quot;: 10</span><span> //期望获得的页数</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="深度分页问题" tabindex="-1">深度分页问题 <a class="header-anchor" href="#深度分页问题" aria-label="Permalink to &quot;深度分页问题&quot;">​</a></h4><p>search after 或者增加限制</p><h3 id="高亮显示" tabindex="-1">高亮显示 <a class="header-anchor" href="#高亮显示" aria-label="Permalink to &quot;高亮显示&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /indexName/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> &quot;query&quot;: {</span></span>
<span class="line"><span>   &quot;matchall&quot;:{}</span></span>
<span class="line"><span> },</span></span>
<span class="line"><span> &quot;highlight&quot;: {</span></span>
<span class="line"><span>  &quot;fields&quot;: {</span></span>
<span class="line"><span>   &quot;字段名&quot;: {</span></span>
<span class="line"><span>    &quot;pre_tags&quot;: [&quot;&lt;em&gt;&quot;],</span><span> //高亮前置</span></span>
<span class="line"><span>    &quot;post_tags&quot;: [&quot;&lt;/em&gt;&quot;]</span><span> //高亮后置</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="javarestclient" tabindex="-1">JavaRestClient <a class="header-anchor" href="#javarestclient" aria-label="Permalink to &quot;JavaRestClient&quot;">​</a></h2><h3 id="基础-1" tabindex="-1">基础 <a class="header-anchor" href="#基础-1" aria-label="Permalink to &quot;基础&quot;">​</a></h3><h4 id="查询" tabindex="-1">查询 <a class="header-anchor" href="#查询" aria-label="Permalink to &quot;查询&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SearchRequest request = new SearchRequest(&quot;indexName&quot;);</span></span>
<span class="line"><span>request.source()</span></span>
<span class="line"><span>        .query(QueryBuilders.matchAllQuery());</span></span>
<span class="line"><span>SearchResponse response = client.search(request, RequestOptions.DEFAULT);</span></span></code></pre></div><h4 id="解析" tabindex="-1">解析 <a class="header-anchor" href="#解析" aria-label="Permalink to &quot;解析&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SearchHits searchHits = response.getHits();</span></span>
<span class="line"><span>//查询总条数</span></span>
<span class="line"><span>long total = searchHits.getTotalHits().value();</span></span>
<span class="line"><span>SearchHit[] hits = searchHits.getHits();</span></span>
<span class="line"><span>for(SearchHit hit : hits) {</span></span>
<span class="line"><span>    String json = hits.getSourceAsString();</span></span>
<span class="line"><span>    sout(json);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="构建查询条件" tabindex="-1">构建查询条件 <a class="header-anchor" href="#构建查询条件" aria-label="Permalink to &quot;构建查询条件&quot;">​</a></h3><p>同Builder创建对象，使用对象的API即可</p><h3 id="排序和分页-1" tabindex="-1">排序和分页 <a class="header-anchor" href="#排序和分页-1" aria-label="Permalink to &quot;排序和分页&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>request.source().from(0).size(5);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>request.source().sort(”字段“,SortOrder.Desc)</span></span>
<span class="line"><span>.sort();</span></span></code></pre></div><h3 id="高亮api" tabindex="-1">高亮API <a class="header-anchor" href="#高亮api" aria-label="Permalink to &quot;高亮API&quot;">​</a></h3><h4 id="加tag" tabindex="-1">加tag <a class="header-anchor" href="#加tag" aria-label="Permalink to &quot;加tag&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>request.source().highlight(</span></span>
<span class="line"><span>    SearchSourceBuilder.highlight()</span></span>
<span class="line"><span>    .field(&quot;字段&quot;)</span></span>
<span class="line"><span>    .preTag(&quot;&lt;em&gt;&quot;)</span></span>
<span class="line"><span>    .postTag(&quot;&lt;/em&gt;&quot;)</span></span>
<span class="line"><span>)</span></span></code></pre></div><h4 id="解析-1" tabindex="-1">解析 <a class="header-anchor" href="#解析-1" aria-label="Permalink to &quot;解析&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//得到source </span></span>
<span class="line"><span>String source = hit.getSourceAsString();</span></span>
<span class="line"><span>ItemDoc item = JSONUtil.toBean(source,ItemDoc.class);</span></span>
<span class="line"><span>Map&lt;String,HighlightField&gt; hfs = hit.getHighlightFields();</span></span>
<span class="line"><span>if(CollUtils.isEmpty(hfs)) {</span></span>
<span class="line"><span>    HighlightField hf = hfs.get(&quot;高亮字段名&quot;);</span></span>
<span class="line"><span>    if(hf != null) {</span></span>
<span class="line"><span>        //这里的hf可能是由多个数据组成的，这里只取第一个正常需要组合</span></span>
<span class="line"><span>        String hfName = hf.getFragment()[0].string();</span></span>
<span class="line"><span>        item.setName(hfName);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="聚合" tabindex="-1">聚合 <a class="header-anchor" href="#聚合" aria-label="Permalink to &quot;聚合&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;size&quot; : 0,</span></span>
<span class="line"><span>&quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;cateaggs&quot; {//聚合的name</span></span>
<span class="line"><span>        &quot;terms&quot;:{</span><span> //聚合类型</span></span>
<span class="line"><span>            &quot;field&quot;: &quot;字段name&quot;,  </span></span>
<span class="line"><span>            ”size“ : 20 //希望获取的数量 </span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="桶-分组" tabindex="-1">桶(分组) <a class="header-anchor" href="#桶-分组" aria-label="Permalink to &quot;桶(分组)&quot;">​</a></h3><p>用于对文档做分组</p><h3 id="度量" tabindex="-1">度量 <a class="header-anchor" href="#度量" aria-label="Permalink to &quot;度量&quot;">​</a></h3><p>计算一些值，平均值之类的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;size&quot; : 0,</span></span>
<span class="line"><span>&quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;cateaggs&quot; {//聚合的name</span></span>
<span class="line"><span>        &quot;terms&quot;:{</span><span> //聚合类型</span></span>
<span class="line"><span>            &quot;field&quot;: &quot;字段name&quot;,  </span></span>
<span class="line"><span>            ”size“ : 20 //希望获取的数量 </span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;aggs&quot;: {</span></span>
<span class="line"><span>         &quot;聚合name&quot; : {</span></span>
<span class="line"><span>          &quot;聚合类型&quot;: {</span></span>
<span class="line"><span>            &quot;field&quot;: &quot;字段name&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="管道" tabindex="-1">管道 <a class="header-anchor" href="#管道" aria-label="Permalink to &quot;管道&quot;">​</a></h3><p>聚合其他聚合的结果</p><h3 id="java与聚合" tabindex="-1">java与聚合 <a class="header-anchor" href="#java与聚合" aria-label="Permalink to &quot;java与聚合&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>request.source().size(0);</span></span>
<span class="line"><span>request.source().aggregation(</span></span>
<span class="line"><span>    AggregationBuilders</span></span>
<span class="line"><span>    .terms(&quot;聚合name&quot;） //.term 代表聚合类型</span></span>
<span class="line"><span>    .field(&quot;字段&quot;)</span></span>
<span class="line"><span>    .size(20)</span></span>
<span class="line"><span>);</span></span></code></pre></div><h4 id="解析-2" tabindex="-1">解析 <a class="header-anchor" href="#解析-2" aria-label="Permalink to &quot;解析&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Aggregations aggregations = response.getAggregation();</span></span>
<span class="line"><span>Terms brandTerms = aggregations.get(&quot;聚合name&quot;);</span></span>
<span class="line"><span>List&lt;? extends Terms.Bucket&gt; buckets = brandTerms.getBuckets();</span></span>
<span class="line"><span>for(Term.Bucket bucket : buckets) {</span></span>
<span class="line"><span>    String brandName = bucket.getKeyAsString();</span></span>
<span class="line"><span>    sout(brandName); </span></span>
<span class="line"><span>}</span></span></code></pre></div>`,52)])])}const q=s(t,[["render",l]]);export{d as __pageData,q as default};
