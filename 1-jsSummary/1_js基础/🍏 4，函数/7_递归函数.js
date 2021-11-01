//✅函数的递归:（recursion）。
//计算斐波那契数列的代码:num表示第几个元素
function fib(num) {
	if (num === 0) return 0;
	if (num === 1) return 1;
	return fib(num - 2) + fib(num - 1);
}
console.log(fib(6));

// 使用闭包解决递归调用
function f1(num) {
	return num > 1 ?num *f1(num - 1) : 1;
}
console.log(f1(4));

