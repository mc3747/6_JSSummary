
//定义：
//Generator 函数是一个状态机，封装了多个内部状态。
//还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态
//形式：
//一是，function关键字与函数名之间有一个星号；
//二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”
function* helloWorldGenerator() {
	yield 'hello';
	yield 'world';
	return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

//Generator作为异步函数
function* gen(x) {
	var y = yield x + 2;
	return y;
}

var g = gen(1);
console.log(g.next()) // { value: 3, done: false }
console.log(g.next()) // { value: undefined, done: true }