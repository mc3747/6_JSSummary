//Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程
var obj = new Proxy({}, {
	get: function (target, key, receiver) {
		console.log(`getting ${key}!`);
		return Reflect.get(target, key, receiver);
	},
	set: function (target, key, value, receiver) {
		console.log(`setting ${key}!`);
		return Reflect.set(target, key, value, receiver);
	}
});
obj.count = 1
obj.count = 2
++obj.count

/**
 * 拦截方法：
get方法
set方法
apply方法
has方法
construct方法
deleteProperty方法
 *  */