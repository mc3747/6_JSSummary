//✅1，setTimeout
/*
var timerId = setTimeout(func|code, delay);
timerId：定时器的标记,用来取消定时器
第一个参数可以是字符串，可以是函数，
第二个参数是延迟的时间
第三个或多个，作为回调函数的参数
*/

//function add(a,b) {
//	console.log(a + b);
//}
//setTimeout(add, 1000, 1, 1);

////✅2，setTimeout回调的this指向
var x = 1;
var obj = {
	x: 2,
	y: function () {
		console.log(this.x);
	}
};
//this所指向的已经不是obj了，而是全局环境
setTimeout(obj.y, 1000) // 1

//一种解决方法是将obj.y放入一个函数
setTimeout(function () {
	obj.y();
}, 1000);// 1

//另一种解决方法是，使用bind方法，将obj.y这个方法绑定在obj上面。
setTimeout(obj.y.bind(obj), 1000)


//✅3，setInterval()
//⚠️：setInterval指定某个任务每隔一段时间就执行一次，但并不考虑每次任务执行本身所消耗的时间
//所以说setInterval可能是不准的

//var i = 1;
//var timer = setTimeout(function f() {
//	console.log(i++);
//	timer = setTimeout(f, 1000);
//}, 1000);

//✅3，clearTimeout：清除定时器Timeout
	//clearInterval：清除定时器Interval
	


//✅4，定时器有个特点：第二个setTimeout方法返回的整数值，将比第一个的整数值大1
//⚠️：要取消所有的setTimeout定时器：先创建一个新timeout定时器，然后清空所有比
//(function() {
//	// 每轮事件循环检查一次
//	var gid = setInterval(clearAllTimeouts, 0);
//
//	function clearAllTimeouts() {
//		var id = setTimeout(function() {}, 0);
//		while (id > 0) {
//			if (id !== gid) {
//				clearTimeout(id);
//			}
//			id--;
//		}
//	}
//})();

//✅5，debounce 函数：防抖动函数
/*
设置一个门槛值，表示两次 Ajax 通信的最小间隔时间。
如果在间隔时间内，发生新的keydown事件，则不触发 Ajax 通信，并且重新开始计时。
如果过了指定时间，没有发生新的keydown事件，再将数据发送出去
*/

//✅6，setTimeout和setInterval的运行机制
/*
是将指定的代码移出本轮事件循环，等到下一轮事件循环，再检查是否到了指定时间。如果到了，就执行对应的代码；如果不到，就继续等待
*/

//✅7，setTimeout(f, 0):
//不是立即执行，必须要等到当前脚本的同步任务，全部处理完以后，才会执行setTimeout指定的回调函数f
setTimeout(function () {
	console.log('异步任务'+1);
}, 0);
console.log('同步任务' + 2);

//setTimeout(f, 0):可以改善性能