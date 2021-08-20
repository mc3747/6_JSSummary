//ES6 的类，完全可以看作构造函数的另一种写法


//🍎2，class的继承
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}
class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y);
		this.color = color; // 正确
	}
}
let cp = new ColorPoint(25, 8, 'green');
console.log(cp.x);