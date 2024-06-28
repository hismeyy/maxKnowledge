import{_ as n,c as s,o as e,b as a}from"./app-DRh4EpUn.js";const l={},i=a(`<h1 id="解决创建索引卡死的问题" tabindex="-1"><a class="header-anchor" href="#解决创建索引卡死的问题"><span>解决创建索引卡死的问题</span></a></h1><p>因上级安排，需要通过身份证字段联查两张表并将结果导出到Excel。两张表的数据量分别约为 800 万条 和 300 万条 。如果进行全表扫描，速度会非常慢。因此，需要为这两张表的身份证字段创建索引。然而，创建索引的线程被锁定，导致等待一整晚索引也没有成功创建。因此有了这篇文档。</p><h2 id="创建索引卡死的原因分析" tabindex="-1"><a class="header-anchor" href="#创建索引卡死的原因分析"><span>创建索引卡死的原因分析</span></a></h2><ul><li><strong>数据量过大</strong>：当表中的数据量非常大的时候，创建索引就需要很长的时间，就可能会导致卡死；</li><li><strong>索引冲突</strong>：如果表中已经存在重复的数据，创建唯一索引时可能会卡死；</li><li><strong>锁冲突</strong>：如果其他事务正在对表进行操作，创建索引时可能会被锁住，导致卡死；</li><li><strong>硬件资源不足</strong>：服务器的CPU、内存、磁盘等资源不足，也可能导致索引创建卡死。</li></ul><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><ol><li>在创建索引的时候需要先确定硬件资源是否足够；</li><li>检查数据库和表状态是否正常；</li><li>确定要创建索引的表，并找到需要创建索引的列；</li><li>对数据进行备份，防止出现问题；</li><li>使用 <code>SHOW PROCESSLIST</code> 命令查看MySQL当前正在执行的线程，查看表是否被其他线程所操作；</li><li>如果有其他线程正在操作表，可以等待其线程完成后再尝试创建索引，或者使用 <code>KILL</code> 命令终止其他线程；</li><li>如果没有其他线程正在操作表，使用 <code>ALTER TABLE</code> 语句创建索引。</li></ol><h2 id="可能会用到的命令" tabindex="-1"><a class="header-anchor" href="#可能会用到的命令"><span>可能会用到的命令</span></a></h2><div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code><span class="line">SHOW DATABASES;</span>
<span class="line"></span>
<span class="line">USE your_database_name;</span>
<span class="line"></span>
<span class="line">SHOW TABLES;</span>
<span class="line"></span>
<span class="line">DESCRIBE your_table_name;</span>
<span class="line"></span>
<span class="line">CREATE TABLE your_table_name_backup AS SELECT * FROM your_table_name;</span>
<span class="line"></span>
<span class="line">SHOW PROCESSLIST;</span>
<span class="line"></span>
<span class="line">KILL process_id;</span>
<span class="line"></span>
<span class="line">ALTER TABLE your_table_name ADD INDEX index_name (column_name);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="平时注意防止慢查询" tabindex="-1"><a class="header-anchor" href="#平时注意防止慢查询"><span>平时注意防止慢查询</span></a></h2><ol><li>优化自己的SQL语句；</li><li>创建数据库的时候，考虑好，提前添加索引。</li></ol>`,10),c=[i];function d(r,t){return e(),s("div",null,c)}const p=n(l,[["render",d],["__file","解决创建索引卡死的问题.html.vue"]]),m=JSON.parse('{"path":"/%E7%BB%8F%E9%AA%8C%E7%AC%94%E8%AE%B0/MySQL/%E8%A7%A3%E5%86%B3%E5%88%9B%E5%BB%BA%E7%B4%A2%E5%BC%95%E5%8D%A1%E6%AD%BB%E7%9A%84%E9%97%AE%E9%A2%98.html","title":"解决创建索引卡死的问题","lang":"zh-CN","frontmatter":{"title":"解决创建索引卡死的问题","sidebar":"heading"},"headers":[{"level":2,"title":"创建索引卡死的原因分析","slug":"创建索引卡死的原因分析","link":"#创建索引卡死的原因分析","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":2,"title":"可能会用到的命令","slug":"可能会用到的命令","link":"#可能会用到的命令","children":[]},{"level":2,"title":"平时注意防止慢查询","slug":"平时注意防止慢查询","link":"#平时注意防止慢查询","children":[]}],"git":{"updatedTime":1719541416000,"contributors":[{"name":"MaxCosmos","email":"renyh2001@outlook.com","commits":1}]},"filePathRelative":"经验笔记/MySQL/解决创建索引卡死的问题.md"}');export{p as comp,m as data};
