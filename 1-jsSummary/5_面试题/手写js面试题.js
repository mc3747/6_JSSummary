 // 1，防抖函数：debounce
const debounce = (fn, delay) => {
	let timer = null;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
};

// 2，节流函数：throttle
const throttle = (fn, delay = 500) => {
	let flag = true;
	return (...args) => {
		if (!flag) return;
		flag = false;
		setTimeout(() => {
			fn.apply(this, args);
			flag = true;
		}, delay);
	};
};

// 3,解析url为对象
function parseParam(url) {
	const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
	const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
	let paramsObj = {};
	// 将 params 存到对象中
	paramsArr.forEach(param => {
		if (/=/.test(param)) { // 处理有 value 的参数
			let [key, val] = param.split('='); // 分割 key 和 value
			val = decodeURIComponent(val); // 解码
			val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字

			if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
				paramsObj[key] = [].concat(paramsObj[key], val);
			} else { // 如果对象没有这个 key，创建 key 并设置值
				paramsObj[key] = val;
			}
		} else { // 处理没有 value 的参数
			paramsObj[param] = true;
		}
	})

	return paramsObj;
}
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
console.log(parseParam(url));

//4，模板引擎的实现:对象转字符串
function render(template, data) {
	const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
	if (reg.test(template)) { // 判断模板里是否有模板字符串
		const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段
		template = template.replace(reg, data[name]); // 将第一个模板字符串渲染
		return render(template, data); // 递归的渲染并返回渲染后的结构
	}
	return template; // 如果模板没有模板字符串直接返回
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
	name: '姓名',
	age: 18
}
console.log(render(template, data)); // 我是姓名，年龄18，性别undefined

//5，转驼峰命名
var f = function(s) {
	return s.replace(/-\w/g, function(x) {
		return x.slice(1).toUpperCase();
	})
}
var s1 = "get-element-by-id"

// 6，模拟 instanceof
function instance_of(L, R) {
	//L 表示左表达式，R 表示右表达式
	var O = R.prototype; // 取 R 的显示原型
	L = L.__proto__; // 取 L 的隐式原型
	while (true) {
		if (L === null) return false;
		if (O === L)
			// 这里重点：当 O 严格等于 L 时，返回 true
			return true;
		L = L.__proto__;
	}
}

//7，模拟new
/*
new操作符做了这些事：
它创建了一个全新的对象
它会被执行[[Prototype]]（也就是__proto__）链接
它使this指向新创建的对象
通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上
如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用
*/
// objectFactory(name, 'cxk', '18')
function objectFactory() {
	const obj = new Object();
	const Constructor = [].shift.call(arguments);

	obj.__proto__ = Constructor.prototype;

	const ret = Constructor.apply(obj, arguments);

	return typeof ret === "object" ? ret : obj;
}

//7，模拟call
/*
call做了什么:
将函数设为对象的属性
执行&删除这个函数
指定this到函数并传入给定参数执行函数
如果不传入参数，默认指向为 window
*/
// 模拟 call bar.mycall(null);
//实现一个call方法：
Function.prototype.myCall = function(context) {
	//此处没有考虑context非object情况
	context.fn = this;
	let args = [];
	for (let i = 1, len = arguments.length; i < len; i++) {
		args.push(arguments[i]);
	}
	context.fn(...args);
	let result = context.fn(...args);
	delete context.fn;
	return result;
};

// 8,模拟 apply
Function.prototype.myapply = function(context, arr) {
	var context = Object(context) || window;
	context.fn = this;

	var result;
	if (!arr) {
		result = context.fn();
	} else {
		var args = [];
		for (var i = 0, len = arr.length; i < len; i++) {
			args.push("arr[" + i + "]");
		}
		result = eval("context.fn(" + args + ")");
	}

	delete context.fn;
	return result;
};

//9,实现bind
/*
实现bind要做什么
返回一个函数，绑定this，传递预置参数
bind返回的函数可以作为构造函数使用。故作为构造函数时应使得this失效，但是传入的参数依然有效
*/
// mdn的实现
if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if (typeof this !== 'function') {
			// closest thing possible to the ECMAScript 5
			// internal IsCallable function
			throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
		}

		var aArgs   = Array.prototype.slice.call(arguments, 1),
				fToBind = this,
				fNOP    = function() {},
				fBound  = function() {
					// this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
					return fToBind.apply(this instanceof fBound
								 ? this
								 : oThis,
								 // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
								 aArgs.concat(Array.prototype.slice.call(arguments)));
				};

		// 维护原型关系
		if (this.prototype) {
			// Function.prototype doesn't have a prototype property
			fNOP.prototype = this.prototype; 
		}
		// 下行的代码使fBound.prototype是fNOP的实例,因此
		// 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
		fBound.prototype = new fNOP();

		return fBound;
	};
}

// 10,模拟 Object.create
//Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
function create(proto) {
	function F() {}
	F.prototype = proto;

	return new F();
}

//11,实现类的继承
function Parent(name) {
	this.parent = name
}
Parent.prototype.say = function() {
	console.log(`${this.parent}: 你打篮球的样子像kunkun`)
}
function Child(name, parent) {
	// 将父类的构造函数绑定在子类上
	Parent.call(this, parent)
	this.child = name
}

/** 
 1. 这一步不用Child.prototype =Parent.prototype的原因是怕共享内存，修改父类原型对象就会影响子类
 2. 不用Child.prototype = new Parent()的原因是会调用2次父类的构造方法（另一次是call），会存在一份多余的父类实例属性
3. Object.create是创建了父类原型的副本，与父类原型完全隔离
*/
Child.prototype = Object.create(Parent.prototype);
Child.prototype.say = function() {
	console.log(`${this.parent}好，我是练习时长两年半的${this.child}`);
}

// 注意记得把子类的构造指向子类本身
Child.prototype.constructor = Child;

var parent = new Parent('father');
parent.say() // father: 你打篮球的样子像kunkun

var child = new Child('cxk', 'father');
child.say() // father好，我是练习时长两年半的cxk