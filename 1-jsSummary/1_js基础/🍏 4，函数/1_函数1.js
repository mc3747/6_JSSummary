//函数声明的3种方式
//✅ 1，function命令
function print1(s) {
	console.log(s);
}
//✅ 2，函数匿名表达式
var print2 = function(s) {
	console.log(s);
};
//✅ 3，函数声明表达式
//好处：一是可以在函数体内部调用自身，二是方便除错
var print3 = function f(s) {
	console.log(s);
	console.log(f);
};
//✅ 4，Function 构造函数
var print4 = new Function(
	'x',
	'y',
	'return x + y'
);
console.log(print4(4,5));

//✅函数的递归:（recursion）。
//计算斐波那契数列的代码:num表示第几个元素
function fib(num) {
	if (num === 0) return 0;
	if (num === 1) return 1;
	return fib(num - 2) + fib(num - 1);
}
console.log(fib(8));

//🍎函数作为变量
function add(x, y) {
	return x + y;
}
var operator = add;
console.log(operator(3,4));

//🍎函数作为参数
function a(op){
	console.log(op);
}
a(add(4, 5));

//🍎函数作为返回值
function b(){
	return add(5, 6);
}
console.log(b());

//⚽️函数的默认属性
/*
1，name函数名称
2，length参数个数
3，this
4, argument
*/

//✅name属性:匿名函数为变量；有名函数为名称
//name的作用可以根据传入的参数名称，知道传入的函数是什么
function f1() {}
var f2 = function () {}
var f3 = function myName() {}
console.log(f1.name)
console.log(f2.name)
console.log(f3.name)

//✅length:函数的参数个数
function f4(a, b) {}
console.log(f4.length);


/*
⚽️函数默认方法：
1，toString：返回函数整体字符串
2，apply
3，call
*/

	//✅toString：函数的源码
function f5(a, b) {
//	我是注释
}
console.log(f5.toString())
//toString的应用：变相实现展示多行字符串
var multiline = function (fn) {
	var arr = fn.toString().split('\n');
	return arr.slice(1, arr.length - 1).join('\n');
};

function f6() {/*
	这是一个
	多行注释
*/}

console.log(multiline(f6));

//⚽️函数的对象
//1，arguments：参数数组，不定参数来访问
var f7 = function (one) {
	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
}

f7(1, 2, 3)

//2，arguments转成数组的2种方法
//数组专有的方法（比如slice和forEach），不能在arguments对象上直接使用
var args = Array.prototype.slice.call(arguments);

// 或者
var args = [];
for (var i = 0; i < arguments.length; i++) {
	args.push(arguments[i]);
}

//3，arguments对象带有一个callee属性，返回它所对应的原函数
var f8 = function () {
	console.log(arguments.callee === f8);
}

f8() // true