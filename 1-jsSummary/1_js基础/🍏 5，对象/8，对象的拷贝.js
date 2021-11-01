/* 
✅浅拷贝
	只拷贝对象的最外层
	实现：
		for in
		Object.assign
*/
var obj = {
	id: 1,
	name: 'andy',
	msg: {
		age: 18
	}
};
var o = {};
// 使用for循环
function shallowCopy1(o, obj) {
	for (var k in obj) {
		// k 是属性名   obj[k] 属性值
		o[k] = obj[k];
	}
}
// 使用Object.assign
function shallowCopy2(o, obj) {
	Object.assign(o, obj);
}
shallowCopy2(o,obj);
o.msg.age = 20;
console.log(o);
console.log(obj);

/*
✅深拷贝
	每一级别的数据都会拷贝
	实现：
		使用递归
*/
function deepCopy(newobj, oldobj) {
	for (var k in oldobj) {
		// 判断我们的属性值属于那种数据类型
		// 1. 获取属性值  oldobj[k]
		var item = oldobj[k];
		// 2. 判断这个值是否是数组
		if (item instanceof Array) {
			newobj[k] = [];
			deepCopy(newobj[k], item)
		} else if (item instanceof Object) {
			// 3. 判断这个值是否是对象
			newobj[k] = {};
			deepCopy(newobj[k], item)
		} else {
			// 4. 属于简单数据类型
			newobj[k] = item;
		}

	}
}
deepCopy(o, obj);
o.msg.age = 100;
console.log(o);
console.log(obj);

/*
对象的拷贝：
确保拷贝后的对象，与原对象具有同样的原型。
确保拷贝后的对象，与原对象具有同样的实例属性。
注明：拷贝后，源对象改变不影响拷贝后的对象
*/
//1，一般对象拷贝函数
// function copyObject(orig) {
// 	var copy = Object.create(Object.getPrototypeOf(orig));
// 	copyOwnPropertiesFrom(copy, orig);
// 	return copy;
// }

// function copyOwnPropertiesFrom(target, source) {
// 	Object
// 		.getOwnPropertyNames(source)
// 		.forEach(function (propKey) {
// 			var desc = Object.getOwnPropertyDescriptor(source, propKey);
// 			Object.defineProperty(target, propKey, desc);
// 		});
// 	return target;
// }
// //2， ES2017 才引入标准的Object.getOwnPropertyDescriptors方法
// function copyObject(orig) {
// 	return Object.create(
// 		Object.getPrototypeOf(orig),
// 		Object.getOwnPropertyDescriptors(orig)
// 	);
// }

// var object1 = {
// 	A:'a',
// 	B:'b'
// }
// var object2 = copyObject(object1);

// console.log(Object.getPrototypeOf(object1) == Object.getPrototypeOf(object2));
// object1.A = 'A';
// console.log(object1);
// console.log(object2);