//✅ 1，数组的本质也是对象，key值默认从0开始
//数组可以存放不同类型的数据,
var arr = [
	6,
	'adf',
	{a: 1},
	[1, 2, 3],
	function() {return true;}
];
console.log(typeof(arr));
console.log(Object.keys(arr));

//✅，2，length属性可以改变
var arr1 = [ 'a', 'b', 'c' ];
console.log(arr1.length);
arr1.length = 2;
console.log(arr1); // ["a", "b"]
//设置某一个值，自动改变数组长度
var arr2= [];
arr2[10] = 'a';
console.log(arr2);
console.log(arr2.length);

//清空数组可以将length置为0

//✅，3，in运算符：遍历key值是否存在，自动转成字符串（数组和对象）
var arr3 = [ 'a', 'b', 'c' ];
console.log(2 in arr3);
console.log('2' in arr3);

//✅，4，数组遍历的方法
var a = [1, 2, 3];
a.foo = true;
//1,for in运算符：遍历key（数组和对象），⚠️把非数字的key都遍历出来了，不推荐
for (var key in a) {
//	console.log(key);
	console.log(a[key]);
}
// 2，for循环
for(var i = 0; i < a.length; i++) {
	console.log(a[i]);
}
// 3，while循环
var i = 0;
while (i < a.length) {
	console.log(a[i]);
	i++;
}
// 4，while逆循环
var l = a.length;
while (l--) {
	console.log(a[l]);
}
//5，forEach方法
a.forEach(function (color) {
	console.log(color);
});

//✅，5，数组的空位
//空位就是数组没有这个元素，所以不会被遍历到，而undefined则表示数组有这个元素，值是undefined，所以遍历不会跳过
//形成空位的2种情形：逗号；delete
var a1 = [1, , 1];
var a2 = [1, 2, 3];
delete a[1];

//✅，5，很像数组的情况，但都不是
//1,函数的arguments
function args() { return arguments }
var arrayLike = args('a', 'b');
console.log(arrayLike instanceof Array); // false

//2,DOM元素集
//var elts = document.getElementsByTagName('h3');
//3，字符串

//很像数组的，转成数组：Array.prototype.slice.call
var array = Array.prototype.slice.call(arrayLike);
console.log(array instanceof Array);//true

//很像数组的，使用数组的方法：Array.prototype.forEach.call
//Array.prototype.forEach.call(arrayLike, print);