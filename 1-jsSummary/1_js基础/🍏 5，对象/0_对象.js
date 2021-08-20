//✅ 1,属性和方法
//属性：对象的key值；
//方法：对象的value为函数
var obj = {
	p: function (x) {
		return 2 * x;
	}
};
console.log(obj.p(3));

//✅ 2,值拷贝和地址拷贝
//地址拷贝
var o1 = {};
var o2 = o1;
o1.a = 1;
console.log(o2.a); // 1

//地址拷贝：消某一个变量对于原对象的引用，不会影响到另一个变量
var o3 = {};
var o4 = o3;
o3 = 1;
console.log(o4) // {}

//值拷贝
var x = 1;
var y = x;
x = 2;
console.log(y);// 1

//✅ 3,大括号默认为代码块，对象使用时，用（）再包一层
console.log(eval('{foo: 123}'));
console.log(eval('({foo: 123})'));

//✅ 4,属性的读取:2种方法：点运算和中括号
var obj2 = {
	p: 'Hello World'
};

console.log(obj2.p);
console.log(obj2['p']);

//✅ 5,属性的后绑定
var obj3 = {};
obj3.foo = 'Hello！';
console.log(obj3);

//✅ 6：查看所有属性：Object.keys(obj)
var obj4 = {a:'a',b:'b'};
console.log(Object.keys(obj4));

//✅ 7：删除属性：delete
//删除属性：delete obj.key
//Object.defineProperty定义的属性不能删除
//继承自父类的属性不能删除
delete obj4.a;
console.log(Object.keys(obj4));

//✅ 8：判断属性是否存在
//in方法：自己和继承的都包含
console.log('b' in obj4);
console.log('toString' in obj4);

//hasOwnProperty方法：只包括自己的属性
console.log(obj4.hasOwnProperty('b'));
console.log(obj4.hasOwnProperty('toString'));

//✅ 9：属性的遍历：for 。。。in
//自己和继承的属性均遍历
//如果继承的属性是不可遍历的，就不能遍历，例如toString，就不可遍历
for (var p in obj4) {
	console.log(p);
} 

//✅ 10：with操作符：作同一个对象的多个属性时，提供一些书写的方便
var obj5 = {
	p1: 1,
	p2: 2,
};
with (obj5) {
	p1 = 4;
	p2 = 5;
}
console.log(obj5)
// 等同于
//obj5.p1 = 4;
//obj5.p2 = 5;