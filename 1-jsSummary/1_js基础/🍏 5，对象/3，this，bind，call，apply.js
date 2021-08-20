/*
1，this总返回一个对象

2，全局环境使用this，它指的就是顶层对象window
	function f() {
		console.log(this === window);
	}
	f() // true
3，构造函数中，指向实例对象
	var Obj = function (p) {
		this.p = p;
	};
4，函数作为属性，指向运行时的对象，并且可以改变
	var obj ={
		foo: function () {
			console.log(this);
		}
	};
	obj.foo() // obj
	
5,this注意点
	避免多层嵌套this，否则使用一个变量that来固定this
	for each方法中避免this，因为它指向顶层window
	回调函数中，避免this，因为它不指向本身对象，而是指向回调的调用对象
	避免不确定性，进行绑定：call，apply，bind
	
*/

/*
✅ 2，call和apply的注意
	函数或者对象，调用方法
	改变this的指向:
		1、thisObj不传或者为null、undefined时，函数中的this会指向window对象（非严格模式）。
		2、传递一个别的函数名时，函数中的this将指向这个函数的引用。
		3、传递的值为数字、布尔值、字符串时，this会指向这些基本类型的包装对象Number、Boolean、String。
		4、传递一个对象时，函数中的this则指向传递的这个对象。
	实现继承
*/
//对象和函数的例子
function foo(x,y) {
			console.log(this.a);
	}

var obj = {
			a: 2
	};
foo.apply(obj);
foo.call(obj);

//✅ 3，call和apply的区别：传递参数的形式不一样
//对象和对象方法的例子
var father = {
	 name: "小王",
	 gender: "男",
	 age: 34,
	 say: function (school, grade) {
				console.log(this.name + " , " + this.gender + " ,今年" + this.age + " ,在" + school + "上" + grade);
			}
}
 var son = {
		name: "小呗",
		gender: "女",
		age: 5
	}
father.say.call(son, "实验小学", "六年级");
father.say.apply(son, ["实验小学", "六年级"]);

//✅ 4，apply的应用
//求最值
var a = [10, 2, 4, 15, 9];
console.log(Math.max.call(null, a))
//转换类似数组的对象:属性值和length长度要对应
console.log(Array.prototype.slice.apply({0: 1, length: 1})) 
console.log(Array.prototype.slice.apply({0: 1,1:2, length: 2})) 

//✅ 5，bind的用法
var counter = {
	count: 0,
	inc: function () {
		this.count++;
	}
};
//绑定自己
var func = counter.inc.bind(counter);
func();
console.log(counter.count)
//绑定别人
var obj2 = {
	count: 100
};
var func2 = counter.inc.bind(obj2);
func2();
console.log(obj2.count) // 101


