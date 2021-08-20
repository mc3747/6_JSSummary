/*
闭包3大特征：
函数嵌套函数
函数内部可以引用函数外部的参数和变量
参数和变量不会被垃圾回收机制回收

闭包的好处：
1，外部调用函数，可以改变其内部变量
2，私有化成员变量，只能通过方法访问修改

闭包注意：
1，变量容易内存泄露，结果要进行主动赋值为空
2，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。

*/

//✅ 1，闭包就是函数f2，即能够读取其他函数内部变量的函数
function f1() {
	var n = 999;

	function f2() {
		console.log(n);
	}
	return f2;
}

var result = f1();
result(); // 999

//✅ 2，闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在
function createIncrementor(start) {
	return function() {
		console.log(start);
		return start++;
	};
}

var inc = createIncrementor(5);
inc();
inc();
inc();
inc();

//✅ 3，闭包的另一个用处，是封装对象的私有属性和私有方法
function Person(name) {
	var _age;

	function setAge(n) {
		_age = n;
	}

	function getAge() {
		return _age;
	}

	return {
		name: name,
		getAge: getAge,
		setAge: setAge
	};
}

var p1 = Person('张三');
p1.setAge(25);
console.log(p1.getAge());

//✅4，定时器和闭包的例子
//js是单进程，for循环的时候，setTimeout在等待
//for(var i = 0 ; i<10; i++){    
//	setTimeout(function(){        
//	console.log(i);    
//	},100);}
////改进方法1：var改成let
//for(let i = 0 ; i<10; i++){    
//		setTimeout(function(){        
//		console.log(i);    
//		},100);}
////改进方法2：使用闭包		
//for(var i = 0; i<10 ; i++){    
//	(function(i){        
//		setTimeout(function(){            
//		console.log(i);        
//	}, i*100);    
//	})(i);}

//✅5，使用闭包解决递归调用问题的例子
function f1(num) {
	return num > 1 ?num *f(num - 1) : 1;
}
console.log(f1(4));

//for (var i = 0;i<10;i++) {
//	console.log(i);
//}