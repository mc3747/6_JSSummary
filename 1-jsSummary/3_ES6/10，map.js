//🍎1，map数据结构
//它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
const m = new Map();
const o = {p: 'Hello World'};
m.set(o, 'content')
console.log(m);
console.log(m.get(o));

//🍎2，map接受数组
const map1 = new Map([
	['name', '张三'],
	['title', 'Author']
]);
console.log(map1);

//🍎3，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构（详见《Iterator》一章）都可以当作Map构造函数的参数
const set = new Set([
	['foo', 1],
	['bar', 2]
]);
const map2 = new Map(set);
console.log(map2);