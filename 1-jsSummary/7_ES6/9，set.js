//ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值
//🍎1，set的初始化1:
const s1 = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s1.add(x));
console.log([...s1]);
//set的初始化2:
const s2 = new Set([1, 2, 3, 4, 4]);
for (let i of s2) {
	console.log(i);
}
//set的初始化3:
let s3 = new Set().add('a').add('b').add('c');
console.log(s3);

//🍎2，数组去重：[...new Set(array)]
let a = [1,2,2,3,3,4,4];
let b = [...new Set(a)];
console.log(b);

//🍎3，字符串去重:[...new Set('ababbc')].join('')
let c = 'adsfadsdddddd';
let d = [...new Set(c)].join('');
console.log(d);

//🍎4，WeakSet对象
//首先，WeakSet 的成员只能是对象，而不能是其他类型的值
//其次，WeakSet 中的对象都是弱引用