//✅，1，Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的
let s1 = Symbol('foo');
let s2 = Symbol('foo');
console.log(s1);
console.log(typeof(s1));
console.log(s1.toString());
console.log(s1 === s2);
//description:直接读取symbol的值
console.log(s1.description);

//✅，2，作为属性名Symbol
let mySymbol1 = Symbol('A');
let mySymbol2 = Symbol('A');
//第一种写法：
let a = {};
//a[mySymbol1] = 'Hello!';
//a[mySymbol2] = 'Hello!';
//第二种写法：
//let a = {
//	[mySymbol1]: 'Hello!',
//	[mySymbol2]: 'Hello!'
//};
// 第三种写法
Object.defineProperty(a,mySymbol1 , { value: 'Hello!' });

//⚠️：Symbol 值作为对象属性名时，不能用点运算符
console.log(a);

//✅，3，属性名的遍历:用getOwnPropertySymbols遍历，for in遍历不出来
const obj = {};
let a1 = Symbol('a');
let b1 = Symbol('b');
obj[a1] = 'Hello';
obj[b1] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);
for (let i in obj) {
	console.log(i); // 无输出
}