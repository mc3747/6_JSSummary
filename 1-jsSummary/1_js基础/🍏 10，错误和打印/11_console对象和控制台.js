
//✅，1，console显示占位符、
/*
%s 字符串
%d 整数
%i 整数
%f 浮点数
%o 对象的链接
%c CSS 格式字符串
*/
console.log(' %s + %s = %s', 1, 1, 2);

//✅，2，自定义打印内容，打印时间戳
['log', 'info', 'warn', 'error'].forEach(function(method) {
	console[method] = console[method].bind(
		console,
		new Date().toISOString()
	);
});
console.log("出错了！");
console.info("出错了！");
console.warn("出错了！-警告");
console.error("出错了！-错误");

//✅，3，console.table()：打印表格
var languages = [
	{ name: "JavaScript", fileExtension: ".js" },
	{ name: "TypeScript", fileExtension: ".ts" },
	{ name: "CoffeeScript", fileExtension: ".coffee" }
];

console.table(languages);
var languages = {
	csharp: { name: "C#", paradigm: "object-oriented" },
	fsharp: { name: "F#", paradigm: "functional" }
};

console.table(languages);

//✅，3，console.count()：用于计数，输出它被调用了多少次。
//console.count接收一个参数
function greet(user) {
	console.count(user);
	return 'hi ' + user;
}
console.log(greet('A'));
console.log(greet('B'));
console.log(greet('C'));

//✅，4，console.dir()，console.dirxml()
//console.dir()打印对象，易于阅读和打印的格式显示
let object = {f1: 'foo', f2: 'bar',f3:function () {
	console.log(value是函数)
},f4:{a:'b'}};
console.log(object);
console.dir(object);

//打印对象，颜色显示
console.dir(object, {colors: true})

//如果参数不是 DOM 节点，而是普通的 JavaScript 对象，console.dirxml等同于console.dir
console.dirxml(object);

//✅，5，console.assert()
//进行条件判断，如果不满足条件，就显示一个错误，但不会中断程序执行
console.assert(false, '判断条件不成立');
console.assert(true, '判断条件成立');

//✅，6,console.time()，console.timeEnd()
//这两个方法用于计时，可以算出一个操作所花费的准确时间
//两个方法传的字符串要一样
console.time('Array 开始');

var array= new Array(10000);
for (var i = array.length - 1; i >= 0; i--) {
	array[i] = new Object();
};

console.timeEnd('Array 开始');

//✅，7，console.group()，console.groupEnd()，console.groupCollapsed()
//信息分组
//console.group('一级分组');
//console.log('一级分组的内容');
//console.log('一级分组的内容');
//
//console.group('二级分组');
//console.log('二级分组的内容');
//console.log('二级分组的内容');
//console.groupEnd(); // 二级分组结束
//console.groupEnd(); // 一级分组结束

console.groupCollapsed('Fetching Data');
console.log('Request Sent');
console.error('Error: Server not responding (500)');
console.log('Request Sent');
console.log('Request Sent');
console.groupEnd();

//✅，8，console.trace()，console.clear()
//console.trace方法显示当前执行的代码在堆栈中的调用路径
//console.clear方法用于清除当前控制台的所有输出，将光标回置到第一行。如果用户选中了控制台的“Preserve log”选项，console.clear方法将不起作用

