//✅ 1，Error 实例对象
/*
message：错误提示信息
name：错误名称（非标准属性）
stack：错误的堆栈（非标准属性）
*/
var err = new Error('出错了');
console.log(err.message) // "出错了"
console.log(err.name)
//console.log(err.stack)

//✅2，原生错误类型6个派生对象
/*
SyntaxError 对象：语法错误
ReferenceError 对象：引用一个不存在的变量时发生的错误
RangeError 对象：超出有效范围时
TypeError 对象：对象是变量或参数不是预期类型时发生的错误
URIError 对象：对象是 URI 相关函数的参数不正确时抛出的错误
EvalError 对象：函数未正确执行；已不再使用
*/

//✅3，自定义错误:自定义一个错误对象UserError，让它继承Error对象
function UserError(message) {
	this.message = message || '默认信息';
	this.name = 'UserError';
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;
var error = new UserError('这是自定义的错误！');
console.log(error.message);
console.log(error.name);

//✅4，throw抛异常
//throw语句的作用是手动中断程序执行，抛出一个错误

//✅5，try...catch 结构：允许对错误进行处理，选择是否往下执行
try {
	throw "出错了";
} catch (e) {
	console.log(111);
}
console.log(222);

//✅6，try...catch...finally结构
function f1() {
	try {
		throw '出错了！';
	} catch(e) {
		console.log('捕捉到内部错误');
		throw e; // 这句原本会等到finally结束再执行
	} finally {
		console.log('执行finally');
		return false; // 直接返回
		console.log('执行finally');
	}
}
f1();
function f2() {
	try {
		console.log('没有错误')
	} catch(e) {
		console.log('捕捉到内部错误');
		throw e; // 这句原本会等到finally结束再执行
	} finally {
		console.log('执行finally');
		return false; // 直接返回
	}
}
f2();