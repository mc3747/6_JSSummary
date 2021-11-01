
//✅，1. this 是静态的. this 始终指向函数声明时所在作用域下的 this 的值
function getName() {
	console.log(this.name);
}
let getName2 = () => {
	console.log(this.name);
}

//设置 window 对象的 name 属性
var name = '尚硅谷';
const school = {
	name: "ATGUIGU"
}

//直接调用
getName();
getName2();

//call 方法调用
getName.call(school);
getName2.call(school);

// // ✅ 2,es6添加函数参数默认值
// // es5默认值写法
// function f2(x, y) {
// 	// 如果y赋值为false，则用||结果不正确
// 	// y = y || 'World';
// 	if (typeof y === 'undefined') {
// 		y = 'World';
// 	}
// }
// // es6默认值写法
// function f3(x, y = 'World') {
//   console.log(x, y);
// }

// // ✅ 3,函数参数为对象:默认值与解构组合使用
// // 如果结构参数不加{},调用f4（）会直接报错
// function f4({x, y = 'World'} = {}) {
//   console.log(x, y);
// }
// f4({x:1});
// f4();

// // ✅ 4,es6添加rest参数,即遍历参数的写法...arguments
// // 求和
// function f5(){
// 	 let sum = 0;
// 	for (var val of arguments) {
// 	  sum += val;
// 	}
// 	return sum;
// }
// console.log('arguments写法' + f5(2,3,5));

// function f6(...values) {
//   let sum = 0;
//   for (var val of values) {
//     sum += val;
//   }
//   return sum;
// }
// console.log('rest写法' + f6(2,3,5));

// // ✅ 5,箭头函数的用法
// // 🍉一般箭头函数
// var f7 = v => v;
// // 等同于
// var f8 = function (v) {
//   return v;
// };

// // 🍉箭头函数与回调
// // 正常函数写法
// var array1 = [1,2,3].map(function (x) {
//   return x * x;
// });
// console.log('普通函数回调' + array1);
// // 箭头函数写法
// var array2 =[1,2,3].map(x => x * x);
// console.log('箭头函数回调' + array2);

// // 🍉箭头函数与解构
// // 正常函数写法
// function f9(person) {
// 	return person.first + ' ' + person.last;
// }
// // 箭头函数写法
// const f10 = ({ first, last }) => first + ' ' + last;
// console.log('普通函数解构' + f9({first:'A',last:'B'}));
// console.log('箭头函数解构' + f10({first:'A',last:'B'}));

// // 🍉箭头函数与rest参数
// //返回数组
// const numbers = (...nums) => nums;
// //返回头元素 + 其余元素组成的数组
// const headAndTail = (head, ...tail) => [head, tail];
// console.log(numbers(1,2,3,4));
// console.log(headAndTail(1,2,3,4));

// // ✅ 6,箭头函数的注意点
// /*
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。 本质是this函数没有自己的this，有的只是外层的this

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
// */
// function Timer() {
// 	this.s1 = 0;
// 	this.s2 = 0;
// 	// 箭头函数
// 	setInterval(() => this.s1++, 1000);
// 	// 普通函数
// 	setInterval(function () {
// 		this.s2++;
// 	}, 1000);
// }

// //var timer = new Timer();
// //setTimeout(() => console.log('s1: ', timer.s1), 3100);
// //setTimeout(() => console.log('s2: ', timer.s2), 3100);

// //部署管道机制（pipeline）的例子，即前一个函数的输出是后一个函数的输入
// const plus1 = a => a + 1;
// const mult2 = a => a * 2;
// console.log(mult2(plus1(5)));

