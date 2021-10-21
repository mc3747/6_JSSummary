//🍉1,隐式返回值函数：只能用于单语句返回值箭头函数，如果返回值是对象必须使用()包住
const Func1 = function(name) {
	return "I Love " + name;
};
// 换成
const Func2 = name => "I Love " + name;
console.log(Func1('a'));
console.log(Func1('b'));

//🍉2,自执行函数
//方式1
const Func3 = function() {
	console.log('自执行1')
}(); 
//方式2
(function() {
	console.log('自执行2')
})(); 
//方式3
(function() {
	console.log('自执行3')
}()); // 常用

//🍉3,一次性函数：：适用于运行一些只需执行一次的初始化代码
function Func4() {
	console.log("x");//此处的代码只执行一次	
	Func4 = function() {
		console.log("y");//此处的代码从第二次开始执行
	}
}
Func4();
Func4();
Func4();

//🍉4,惰性载入函数：函数内判断分支较多较复杂时可大大节约资源开销
function Func5(a,b) {
	if (a === b) {
		console.log("相同");
	} else {
		console.log("不同");
	}
}
// 换成
function Func6(a,b) {
	if (a === b) {
		Func6 = function() {
			console.log("相同");
		}
	} else {
		Func6 = function() {
			console.log("不同");
		}
	}
	return Func6();
}

Func5(2,3);
Func6(2,2);

//🍉5,函数非空参数
function IsRequired() {
//	throw new Error("param is required");
	console.log('缺少参数')
}
function Func7(name = IsRequired()) {
	console.log("I Love " + name);
}
Func7(); // "param is required"
Func7("You"); // "I Love You"

//🍉6,字符串创建函数
const Func8 = new Function("name", "console.log(\"I Love \" + name)");
Func8('🐶');



