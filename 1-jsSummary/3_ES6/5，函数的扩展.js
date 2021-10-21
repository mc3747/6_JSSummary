//🍎1，函数默认传值：默认值可以修改
let x = 99;
function foo(p = x + 1) {
	console.log(p);
}
foo() // 100

x = 100;
foo() // 101

//🍎2，解构参数默认
function foo1({x, y = 5}) {
	console.log(x, y);
}
foo1({})
//foo1()//⚠️此处会崩溃

//🍎3，解构整体默认
function foo2({x, y = 5} = {}) {
	console.log(x, y);
}
foo2({})
foo2()