/*
值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
引用数据类型：狭义的对象(Object)、数组(Array)、函数(Function)。
*/
// 判断数据类型的方法；1，typeof；2，instanceof；3，Object.prototype.toString方法
function baseData() {
	var x1; // x1 为 undefined
	var x2 = 5; //  x2 为数字
	var x3 = "John"; //  x3 为字符串
	var x4 = true; //  x4 为bool
	var x5 = null; //  x5 为null
	var x6 = [1, '4', '', null];
	var x7 = {
		a: 5
	};
	console.log('undefined类型✅' + typeof(x1));
	console.log('数字类型✅' + x2);
	console.log('字符串类型✅' + x3);
	console.log('布尔类型✅' + x4);
	console.log('null类型✅' + x5);
	// 函数类型
	console.log('函数类型✅' + typeof(arrayData));
	// typeof显示的数组类型也是object
	// instanceof可以判断具体是否是数组，还是对象
	console.log('数组类型✅' + typeof(x6));
	console.log('数组类型✅' + (x6 instanceof Array));
	console.log('数组类型✅' + (x6 instanceof Object));
	// 对象类型
	console.log('对象类型✅' + typeof(x7));
	console.log('对象类型✅' + (x7 instanceof Array));
	console.log('对象类型✅' + (x7 instanceof Object));
}

function testNull() {
	// null是一个表示“空”的对象，转为数值时为0；
	// undefined是一个表示"此处无定义"的原始值，转为数值时为NaN
	console.log(Number(null));
	console.log(Number(undefined));
	
	// 以下6个值，默认转换成false，其他均为true
	// 注意，空数组（[]）和空对象（{}）对应的布尔值，都是true
	/*
		undefined
		null
		false
		0
		NaN
		""或''（空字符串）
	*/

}

// 创建数组
function arrayData() {
	// 1,常规方式
	var myCars1 = new Array();
	myCars1[0] = "Saab";
	myCars1[1] = "Volvo";
	myCars1[2] = "BMW";
	// 2，简洁方式
	var myCars2 = new Array("Saab", "Volvo", "BMW");
	// 3，字面量方式
	var myCars3 = ["Saab", "Volvo", "BMW"];
	console.log('数组✅' + myCars1 + myCars2 + myCars3)
}

// 数组元素可以不一样
function arrayData2() {
	var array = new Array("Saab", '', 1, false, 3.2, null, 1);
	console.log('数组元素不同✅' + array);
	console.log('数组长度✅' + array.length);
	console.log('数组第0个元素✅' + array[0]);
	console.log('数组第元素索引✅' + array.indexOf(1));
}

// 数组的属性3个：
// constructor（返回创建数组对象的原型函数），
// length（数组元素的个数），
// prototype（允许你向数组对象添加属性或方法）
function arrayData3() {
	// 1，constructor属性
	let number = 1;
	let string = 'string';
	let array = ["Saab", "Volvo", "BMW"];
	console.log('数字的构造方法属性✅' + number.constructor);
	console.log('字符串的构造方法属性✅' + string.constructor);
	console.log('数组的构造方法属性✅' + array.constructor);
	// 2，lenght属性

	// 3，prototype属性
	// 当构建一个属性，所有的数组将被设置属性，它是默认值。
	// 在构建一个方法时，所有的数组都可以使用该方法。
	// 下面是创建一个新的方法
	Array.prototype.myUcase = function() {
		for (i = 0; i < this.length; i++) {
			this[i] = this[i].toUpperCase();
		}
	}
	array.myUcase();
	console.log('数组的prototype属性✅' + array);
}

// 数组的方法
function arrayData4() {
	// 数组遍历
	const ary = ['a', 'b', 'c'];
	// 1，最基本的方式, 只能遍历下标有序递增的数组
	for (let i = 0; i < ary.length; i++) {
		console.log(i, ary[i]); // 0 a  1 b  2 c
	}
	// 2，in:每遍历一次数组指针向后移动一位, 并得到当前数组元素值的下标, 可以通过 ary[key] 来访问数组元素值
	for (let key in ary) {
		console.log(key, ary[key]); // 0 a  1 b  2 c
	}

	// 3，of:每遍历一次数组指针向后移动一位, 并得到当前数组元素的值, 处理二维数组时极为方便
	for (let value of ary) {
		console.log(value); // a b c
	}

	/**
	 * 4， forEach(function)
	 *  
	 *  该方法接受一个函数作为参数, 该函数拥有两个参数, 分别为数组的值、键
	 *  该方法没有返回值
	 */
	ary.forEach((value, key) => {
		console.log(key, value); // 0 a  1 b  2 c
	})


	/**
	 * 5，map(function)
	 *  
	 * 该方法接受一个函数作为参数, 该函数拥有两个参数, 分别为数组的值、键
	 * 可以在传入的函数中返回相应的值,你每次迭代时返回的值会被map方法组装成一个新数组作为返回值返回
	 */

	var result = ary.map((value, key) => {
		return value + '_runoob.com';
	})

	// 数组排序

}
