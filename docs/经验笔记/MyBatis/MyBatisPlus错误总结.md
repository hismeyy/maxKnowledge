---
title: MyBatisPlus错误总结
sidebar: heading
---

# 解决MyBatisPlus-Available parameters are \[ew, param1, et, param2\]

## 出现的原因

今天在写代码的时候，使用MyBatisPlus的查询条件，`selectList()`
。但是不满足我的要求，于是我就写了一个XML，同样命名为 `selectList`
。编译的时候没有任何问题，但是运行的时候，我使用 `selectOne()` 的时候，出现了该错误。

## 解决

重新命名，不可以使用 `selectList` ，因为框架会生成XML，XML中不能同时存在两个一样的 `id` 为 `selectList` 的方法。

## 注意

在使用 MybatisPlus 时有三个地方可以生成SQL语句，第一个是 XML 映射文件中，第二个是继承 BaseMapper 类之后可以调用方法，第三个是实体类继承
Model 类。使用这三个方法生成SQL语句时，需要注意避免映射语句的 id 重复。
