//1，✅整数和小数
	//1，JavaScript 内部，所有数字都是以64位浮点数形式储存,1和1.0相等
	console.log(1 === 1.0);
	//2，由于浮点数不是精确的值
	console.log(0.1 + 0.2 === 0.3);
	console.log(0.3 / 0.1);
	console.log((0.3 - 0.2) === (0.2 - 0.1));


//2，✅数值精度
	//	Number对象的MAX_VALUE和MIN_VALUE属性，返回可以表示的具体的最大值和最小值
	console.log(Number.MAX_VALUE) 
	console.log(Number.MIN_VALUE)
	
//3,✅数值的进制
/*
十进制：没有前导0的数值。
八进制：有前缀0o或0O的数值，或者有前导0、且只用到0-7的八个阿拉伯数字的数值。
十六进制：有前缀0x或0X的数值。
二进制：有前缀0b或0B的数值。
*/

//4,✅特殊的数值
	//1，正零和负零：所有场合都是等价的，除了用作分母
console.log((1 / +0) === (1 / -0));

	//2，NaN：
	//表示“非数字”（Not a Number），主要出现在将字符串解析成数字出错,数学公式转换的场合
	//NaN不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于Number
console.log(0 / 0);
console.log(typeof(0 / 0));
console.log(typeof(NaN));
console.log(5 - 'x');
console.log(Math.sqrt(-1));

//	3,Infinity:表示“无穷”，Infinity表示正的无穷，-Infinity表示负的无穷
	
//5，✅与数值相关的全局方法:
//1，parseInt()：字符串转成整数
	//返回值只有两种可能，要么是一个十进制整数，要么是NaN
console.log(parseInt('8a'));
	//接收2个参数，第二个表示进制
console.log(parseInt('1000', 2));

//2，parseFloat()
//用于将一个字符串转为浮点数
//parseFloat会将空字符串转为NaN
//parseFloat和Number函数的区别
console.log(parseFloat(true))  // NaN
console.log(Number(true)) // 1

console.log(parseFloat(null)) // NaN
console.log(Number(null)) // 0

console.log(parseFloat('')) // NaN
console.log(Number('')) // 0

console.log(parseFloat('123.45#')) // 123.45
console.log(Number('123.45#')) // NaN

//3，isNaN()：可以用来判断一个值是否为NaN
//使用isNaN之前，最好判断一下数据类型:以下有两种方法
function myIsNaN1(value) {
	return typeof value === 'number' && isNaN(value);
}
console.log(myIsNaN1('333'));

//判断是否是NaN:NaN为唯一不等于自身的值的这个特点
function myIsNaN2(value) {
	return value !== value;
}
console.log(myIsNaN2(NaN));

//4，isFinite():方法返回一个布尔值，表示某个值是否为正常的数值
//除了Infinity、-Infinity、NaN和undefined这几个值会返回false，isFinite对于其他的数值都会返回true
console.log(isFinite(Infinity)) // false
console.log(isFinite(-Infinity)) // false
console.log(isFinite(NaN)) // false
console.log(isFinite(undefined)) // false
console.log(isFinite(null)) // true
console.log(isFinite(-1)) // true