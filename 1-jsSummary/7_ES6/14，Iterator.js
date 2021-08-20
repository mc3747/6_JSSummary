
//🍎1,模拟Iterator接口的实现
//var it = makeIterator(['a', 'b']);
//function makeIterator(array) {
//	var nextIndex = 0;
//	return {
//		next: function() {
//			return nextIndex < array.length ?
//				{value: array[nextIndex++], done: false} :
//				{value: undefined, done: true};
//		}
//	};
//}
//console.log(it.next()); // { value: "a", done: false }
//console.log(it.next()); // { value: "b", done: false }
//console.log(it.next()); // { value: undefined, done: true }

//🍎2,Iterator接口
/*
原生具备 Iterator 接口的数据结构如下。
Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象
*/
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

console.log(iter.next()) // { value: 'a', done: false }
console.log(iter.next()) // { value: 'b', done: false }
console.log(iter.next()) // { value: 'c', done: false }
console.log(iter.next()) // { value: undefined, done: true }