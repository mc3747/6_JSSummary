/*
对象的拷贝：
确保拷贝后的对象，与原对象具有同样的原型。
确保拷贝后的对象，与原对象具有同样的实例属性。
注明：拷贝后，源对象改变不影响拷贝后的对象
*/
//1，一般对象拷贝函数
function copyObject(orig) {
	var copy = Object.create(Object.getPrototypeOf(orig));
	copyOwnPropertiesFrom(copy, orig);
	return copy;
}

function copyOwnPropertiesFrom(target, source) {
	Object
		.getOwnPropertyNames(source)
		.forEach(function (propKey) {
			var desc = Object.getOwnPropertyDescriptor(source, propKey);
			Object.defineProperty(target, propKey, desc);
		});
	return target;
}
//2， ES2017 才引入标准的Object.getOwnPropertyDescriptors方法
function copyObject(orig) {
	return Object.create(
		Object.getPrototypeOf(orig),
		Object.getOwnPropertyDescriptors(orig)
	);
}

var object1 = {
	A:'a',
	B:'b'
}
var object2 = copyObject(object1);

console.log(Object.getPrototypeOf(object1) == Object.getPrototypeOf(object2));
object1.A = 'A';
console.log(object1);
console.log(object2);