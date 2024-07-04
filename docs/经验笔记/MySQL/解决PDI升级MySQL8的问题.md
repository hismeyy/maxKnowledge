---
title: 解决PDI升级MySQL8的问题
sidebar: heading
---

# 解决PDI升级MySQL8的问题

> Pentaho Data Integration（PDI），也称为 Kettle，是由 Hitachi Vantara 开发的一款开源数据集成工具。PDI
> 提供了一整套用于提取、转换和加载（ETL）数据的工具和功能，广泛应用于数据仓库的构建、数据迁移、数据清洗以及数据集成项目。

## MySQL升级

### 官网下载MySQL安装包

> [mysql安装包下载地址](https://downloads.mysql.com/archives/community/)

![](https://maximg.maxcosmos.top/knowledge/202407041158978.png)

### 解压并且书写配置文件

把压缩包解压，命名为 `MySQL8` ，放在将要安装的地方，在 `MySQL8` 内添加 `my.ini` 配置文件。

```
[mysql]
# 设置mysql客户端默认字符集为中文
default-character-set=utf8
[mysqld]
#设置3306端口
port = 3308
# 设置mysql的安装目录
basedir=D:\Apps\mysql8
# 设置mysql数据库的数据的存放目录
datadir=D:\Apps\mysql8
# 允许最大连接数
max_connections=200
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
explicit_defaults_for_timestamp=true
```

### 安装服务

```
mysqld install MySQL8_3306 --defaults-file="D:\Apps\mysql-5.7.35-3308-winx64\my.ini"
```

**注意**： `MySQL8_3306` 是服务名称，要保持唯一。

安装成功后，`win + R` 输入 `regedit` 可以在 ` HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\` 注册表中查看是否安装成功。

### 初始化数据库

1. 进入bin目录，执行 `mysqld --initialize --console`；

2. 注意记录临时密码。

   ![image-20240704133534913](https://maximg.maxcosmos.top/knowledge/202407041335939.png)

### 启动MySQL服务

`win + R` 输入 `services.msc` 在服务中找到MySQL8_3306，启动对应的服务。

## 更换kettle的MySQL连接驱动

### 官网下载MySQL驱动

> [下载MySQL驱动](https://dev.mysql.com/downloads/connector/j/)

![image-20240704134213560](https://maximg.maxcosmos.top/knowledge/202407041342609.png)

### 更换连接驱动

把 `jar` 包，放入 `libswt` 下，只保留一个有效驱动。

### 修改 jdbc.properties 配置

> kettle6本身并不支持MySQL8，因此需要添加jdbc.properties配置

修改 `/simple-jndi` 目录下的 `jdbc.properties` 配置。

```
localhostmysql8/type=javax.sql.DataSource
localhostmysql8/driver=com.mysql.cj.jdbc.Driver
localhostmysql8/url=jdbc:mysql://localhost:3306/xxx?characterEncoding=utf8&useSSL=false&serverTimezone=UTC&rewriteBatchedStatements=true
localhostmysql8/user=root
localhostmysql8/password=admin
```

重新编辑连接。

![image-20240704150546805](https://maximg.maxcosmos.top/knowledge/202407041505882.png)

## 参考文献

- [kettle6 连接 mysql8的两种方法_kettle连接两个不同版本mysql-CSDN博客](https://blog.csdn.net/qq_43928549/article/details/112471513)
- [JDBC如何连接Mysql 8.0.12](https://blog.csdn.net/zhangvalue/article/details/85219342)

