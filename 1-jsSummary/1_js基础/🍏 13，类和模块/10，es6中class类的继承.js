//✅
//1,Class 可以通过extends关键字实现继承
//2,不管有没有显式定义，任何一个子类都有constructor方法
//3,只有调用super之后，才可以使用this关键字

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y);
		this.color = color; // ReferenceError
		this.color = color; // 正确
	}
}

//✅super关键字
//第一种情况，super作为函数调用时，代表父类的构造函数;super()只能用在子类的构造函数之中，用在其他地方就会报错
//第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类
//super 只能访问原型对象，不能访问实例对象
class A {
	constructor() {
			this.x = 2;
		}
		
	y() {
		return 2;
	}
}
A.prototype.z = 3;

class B extends A {
	constructor() {
		super();
		console.log(super.x); 
		console.log(super.y()); 
		console.log(super.z); 
	}
}

let b = new B();

//✅类的prototype和__proto__属性
/*
每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链
（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
*/
class C extends Object{
}

class D extends C {
}
//子类自己的原型
console.log(C.prototype)
//总是指向父类的原型
console.log(C.__proto__)
console.log(C.prototype.__proto__)

console.log(D.prototype)
console.log(D.__proto__)
console.log(D.prototype.__proto__)

//✅实例的__proto__属性
//子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型
let c = new C();
let d = new D();
console.log(c.__proto__)
console.log(c.__proto__.__proto__)
console.log(d.__proto__)
console.log(d.__proto__.__proto__)


//✅ES6 允许继承原生构造函数定义子类
class MyArray extends Array {
	constructor(...args) {
		super(...args);
	}
}
var arr = new MyArray();
arr[0] = 12;
console.log(arr.length)