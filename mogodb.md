#mongodb数据库备份和恢复操作  
###参数依次为host和端口号、备份数据库名称、导出地址  
##备份  
###mongodump -h 127.0.0.1:27017 -d mydb -o F:\data  
##恢复  
###参数依次为host和端口号、恢复数据库名称、导出地址  
mongorestore -h 127.0.0.1:27017 -d mmmm F:\data\mydb  
##将集合导出为json格式  
###参数依次为数据库mydb、集合名称article、导出地址和格式  
mongoexport -d mydb -c article -o F:\data\article.json
