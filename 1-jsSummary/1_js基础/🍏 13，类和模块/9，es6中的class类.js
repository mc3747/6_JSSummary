//✅ES6 的类，完全可以看作构造函数的另一种写法
class B {}
let b = new B();
console.log(B.prototype.constructor)
console.log(b.constructor)

//✅constructor：一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加
class Foo {
	constructor() {
		return Object.create(null);
	}
}
let foo = new Foo();
console.log(foo.constructor)
console.log(Foo.prototype.constructor)
console.log(foo instanceof Foo)

//✅定义类
class Point {
//	实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）
	constructor(x, y) {
	//	自身属性	
		this.x = x;
		this.y = y;
	}
	//	原型方法
	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}
}

var point = new Point(2, 3);
point.toString() // (2, 3)
point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true

//✅class的get和set
class MyClass1 {
	constructor() {

	}
	get prop() {
		return 'getter';
	}
	set prop(value) {
		console.log('setter: '+value);
	}
}

let inst = new MyClass1();
inst.prop = 123;
console.log(inst.prop);

//✅属性表达式:可以使用变量，用中括号
let methodName = 'getMethod';
let propertyName = 'getProperty';
class MyClass2 {
	constructor(length) {
		// ...
	}
	[propertyName] = '我是属性';
	[methodName]() {
		console.log('我是属性表达式')
	}
}
let demo2 = new MyClass2();
demo2.getMethod();
console.log(demo2.getProperty);

//✅类可以使用立即表达式：不用创建class类名
let demo3 = new class {
	constructor(name) {
		this.name = name;
	}

	sayName() {
		console.log(this.name);
	}
}('张三');

demo3.sayName(); // "张三"

//✅this指向的绑定：class 内部是严格模式
//方法1：利用bind绑定class内部的this 
//class Logger1 {
//	constructor() {
//		//	绑定printName方法1
//		this.printName = this.printName.bind(this);
//	}
//	
//	printName(name = 'there') {
//		this.print(`Hello ${name}`);
//	}
//
//	print(text) {
//		console.log(text);
//	}
//}
//const logger1 = new Logger1();
//const {printName} = logger1;
//printName('a');

//方法2：利用箭头函数绑定class内部的this 
//class Logger2 {
//	constructor() {
//		//	绑定printName方法2
//		this.printName = (name = 'there') => {
//		 this.print(`Hello ${name}`);
//		 };
//	}
//
//	print(text) {
//		console.log(text);
//	}
//}
//const logger2 = new Logger2();
//const {printName} = logger2;
//printName('a');

//方法3：利用Proxy绑定class内部的this 
class Logger3 {
	printName(name = 'there') {
		this.print(`Hello ${name}`);
	}

	print(text) {
		console.log(text);
	}
}
function selfish (target) {
	const cache = new WeakMap();
	const handler = {
		get (target, key) {
			const value = Reflect.get(target, key);
			if (typeof value !== 'function') {
				return value;
			}
			if (!cache.has(value)) {
				cache.set(value, value.bind(target));
			}
			return cache.get(value);
		}
	};
	const proxy = new Proxy(target, handler);
	return proxy;
}

const logger3 = selfish(new Logger3());
const {printName} = logger3;
printName('b');

//✅静态方法static：类似于类方法
//如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，可以类继承，这就称为“静态方法”
//如果静态方法包含this关键字，这个this指的是类，而不是实例
class Foo2 {
	static classMethod() {
		return 'hello';
	}
}

console.log(Foo2.classMethod()) // 'hello'

//class中私有方法的封装
/*
1，命名区分，带下划线为私有（还是可以访问）
2，私有方法移出模块
3，利用Symbol值的唯一性
*/
//私有方法移出模块
class Widget {
	foo (baz) {
		bar.call(this, baz);
	}
}
function bar(baz) {
	return this.snaf = baz;
}