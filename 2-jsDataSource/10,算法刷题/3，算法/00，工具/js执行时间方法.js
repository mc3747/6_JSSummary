//方法1：直接打印执行前后时间
var begin= Date.now();
for (let i=1;i<1000000;i++) {
	var a = i;
}
var end= Date.now();
console.log("time is="+(end-begin) + 'ms');

//方法2：global全局打印：保证引号内的内容一致
console.time("global");
for (let i=1;i<1000000;i++) {
	var a = i;
}
console.timeEnd("global");

//方法3：closure闭包打印
console.time("closure");
for (let i=1;i<1000000;i++) {
	var a = i;
}
console.timeEnd("closure");
