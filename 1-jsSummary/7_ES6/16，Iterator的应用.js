//🍎1，解构赋值
let set = new Set(['a','b','c']);
let [first, ...rest] = set;
console.log(first);
console.log(rest);

//🍎1扩展运算符
var str = 'hello';
console.log([...str]) //  ['h','e','l','l','o']

//🍎1yield*:面跟的是一个可遍历的结构，它会调用该结构的遍历器接口
let generator = function* () {
	yield 1;
	yield* [2,3,4];
	yield 5;
};

var iterator = generator();
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 2, done: false }
console.log(iterator.next()) // { value: 3, done: false }
console.log(iterator.next()) // { value: 4, done: false }
console.log(iterator.next()) // { value: 5, done: false }
console.log(iterator.next()) // { value: undefined, done: true }

//🍎1数组的for in；for of；forEach方法
var arr = ['a', 'b', 'c', 'd'];
//for in：遍历索引key
for (let a in arr) {
	console.log(a); // 0 1 2 3
}
//for in：遍历值value
for (let a of arr) {
	console.log(a); // a b c d
}
//forEach：同时遍历key和value
arr.forEach(function (element, index) {
	console.log(element); // red green blue
	console.log(index);   // 0 1 2
});
/*
✅ 总结：
1，原始的for循环，比较麻烦；
2，for in：循环主要是为遍历对象而设计的，不适用于遍历数组
3，forEach：break命令或return命令都不能奏效
4，for of：为遍历数组的首选
*
/
