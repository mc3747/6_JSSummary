/*
Promise 实例具有三种状态
异步操作未完成（pending）
异步操作成功（fulfilled）
异步操作失败（rejected）

Promise 的最终结果只有两种。
异步操作成功，Promise 实例传回一个值（value），状态变为fulfilled。
异步操作失败，Promise 实例抛出一个错误（error），状态变为rejected。
*/
//✅，promise立即执行 ，然后同步任务 ，然后回调执行
var p1 = new Promise(function (resolve, reject) {
	console.log('立即执行')
	resolve('回调成功');
});
p1.then(console.log, console.error);
console.log('同步任务')

//✅，100ms后，回调done值
function timeout(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms, 'done');
	});
}

timeout(100).then((value) => {
	console.log(value);
});