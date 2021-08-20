//1，🍎数组的解构赋值：按照属性赋值变量
let [a, b, c] = [1, 2, 3];
console.log(a);

//2，🍎对象的解构赋值：不用按照顺序
let { a1, b1 } = { a1: 'aaa', b1: 'bbb' };
console.log(a1);

//3，🍎字符串的解构赋值:length属性可以解构出来
const [a2, b2, c2, d2, e2] = 'hello';
const {length:len} = 'hello';
console.log(a2);
console.log(len);

//4，🍎数值和布尔值的解构赋值:等号右边是数值和布尔值，则会先转为对象
let {toString: a3} = 123;
console.log(a3);
console.log(a3 === Number.prototype.toString);

let {toString: a4} = true;
console.log(a4);
console.log(a4 === Boolean.prototype.toString);

//5，🍎函数参数的解构赋值:可以使用默认值
//1，参数x，y使用默认值
function move({x = 0, y = 0} = {}) {
	return [x, y];
}
console.log(move({x: 3, y: 8})); // [3, 8]
console.log(move({x: 3})); // [3, 0]
console.log(move({})); // [0, 0]
console.log(move()); // [0, 0]
//2，函数参数使用默认值
function move1({x, y} = { x: 0, y: 0 }) {
	return [x, y];
}

console.log(move1({x: 3, y: 8})); // [3, 8]
console.log(move1({x: 3})); // [3, undefined]
console.log(move1({})); // [undefined, undefined]
console.log(move1()); // [0, 0]

//6，🍎圆括号问题


//7，🍎用途
//1，交换变量
let x1 = 1;
let y1 = 2;
[x1, y1] = [y1, x1];

//2，函数返回多个值
// 返回一个数组
function example2() {
	return [1, 2, 3];
}
let [x2, y2, z2] = example2();

// 返回一个对象
function example3() {
	return {
		x3: 1,
		y3: 2
	};
}
let { x3, y3 } = example3();


//3，函数参数的定义
// 参数是一组有次序的值
function f2([x, y, z]) { 
	console.log(x)
	 }
f2([1, 2, 3]);

// 参数是一组无次序的值
function f3({x, y, z}) { 
	console.log(x)
	 }
f3({z: 3, y: 2, x: 1});

//4,提取 JSON 数据
let jsonData = {
	id: 42,
	status: "OK",
	data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);

//5,函数参数的默认值:免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句

//6,遍历 Map 结构
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
//同时获取key和value
for (let [key, value] of map) {
	console.log(key + " is " + value);
}
//只获取键名
for (let [key] of map) {
	console.log(key);
}
//只获取键值
for (let [,value] of map) {
	console.log(value);
}
//7,输入模块的指定方法
//const { SourceMapConsumer, SourceNode } = require("source-map");