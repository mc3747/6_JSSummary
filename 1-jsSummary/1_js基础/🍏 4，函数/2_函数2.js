/*
✅，1，创建函数的3种方式：
① 函数声明(函数名为小写是普通函数；是大写是构造函数，用new)
② 字面量方式创建
③ 使用Function构造函数创建
*/
function f1(a, b) {
	return a + b;
}
var f2 = function(a, b) {
	return a + b;
};
var f3 = new Function("a", "b", "return a + b");
console.log('✅' + f3(2,3));
/*
✅，2，函数的4种调用方式：
① 普通函数调用模式
② 对象方法调用模式
③ 构造函数调用模式
④ 上下文的调用模式
*/
// 1，普通函数调用
console.log('普通函数调用：' + f1(5, 6));

// 2，对象方法调用
var o1 = {
	name: "文顶顶",
	showName: function() {
		console.log('对象方法调用：' +this.name); //文顶顶
	}
};
o1.showName(); //this被绑定到o对象

// 3,构造函数调用
function Person() {
	console.log('构造函数调用：' +this);
}
new Person();

// 4, 上下文的调用模式
//声明函数f4
function f4(a, b) {
	console.log(a, b, a + b);
	console.log(this); //使用上下文模式调用时，this被绑定给o对象
	console.log(this.name); //wendingding
}
//字面量的方式创建对象
var o2 = {
	name: "wendingding"
};
//使用apply和call方法来调用函数
function f5() {
	f4.apply(o2, [1, 2]);
	f4.call(o2, 3, 4);
}

/*
✅，3，函数具有的默认属性和方法
默认属性
1，this
2，arguments：参数数组
3，length参数个数
4，name函数名称
默认方法：
1，toString：返回函数整体字符串
2，apply
3，call
*/
const myFunction7 = ()=>{
	console.log("7箭头函数常量");
}
function f6(a,b)
{
	// arguments是个参数数组列表，
    console.log("8函数的默认参数");
	console.log(arguments[0]+'参数列表');
	console.log(arguments.length+'参数个数');
	// name：函数名称
	console.log(myFunction7.name+'函数的名称');
	// length，参数个数
	console.log(myFunction7.length+'参数的个数');
	// toString（），方法作为字符串返回
	console.log(myFunction7.toString+'函数作为字符串返回');
	console.log(myFunction7.toString()+'函数作为字符串返回');
}
function f7(a,b=3){
	// ⚠🍉默认参数只能通过显示参数a，b访问，通过参数列表只能访问传入的值
	console.log(arguments[0]+'参数列表');
	console.log(arguments[1]+'参数列表');
	console.log(b+'参数b');
}
f6(5, 6);
f7(5, 6);

