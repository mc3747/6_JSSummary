//✅，1，回调函数写法：函数f1执行完，再执行f2
function f1(callback) {
	console.log('我是f1前');
	callback();
	console.log('我是f1后');
}

function f2() {
	console.log('我是f2');
}

f1(f2);

//✅，2，事件绑定：
/*
f1的done事件发生，立即执行f2
f1.on('done', f2);
*/

//✅，3，发布/订阅
/*
jQuery.subscribe('done', f2);
jQuery.unsubscribe('done', f2);
*/

//✅，4，异步任务串行：使用嵌套
//执行完
function async(arg, callback) {
	console.log('参数为 ' + arg +' , 1秒后返回结果');
	setTimeout(function () { callback(arg * 2); }, 1000);
}
function final(value) {
	console.log('完成: ', value);
}
//async(1, function (value) {
//	console.log('第1个嵌套执行完：' + value);
//		async(2, function (value) {
//			console.log('第2个嵌套执行完：' + value);
//				async(3, final);
//				
//		});
//});

//✅，5，异步任务串行：使用流程控制函数
var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];//保存每次执行完的结果
//function series(item) {
//	console.log(results);
//	if(item) {
//		async( item, function(result) {
//			results.push(result);
//			return series(items.shift());
//		});
//	} else {
//		return final(results[results.length - 1]);
//	}
//}
//series(items.shift());

//✅，6，异步任务并行
//同时执行6个子任务，执行完了再执行final
//items.forEach(function(item) {
////	console.log(results);
//	async(item, function(result){
//		results.push(result);
//		if(results.length === items.length) {
//			final(results[results.length - 1]);
//		};
//		console.log(results);
//	})
//});

//✅，7，异步任务串行 + 并行的结合（性能 + 速度）
var running = 0;//正在运行的任务数
var limit = 2;//最多只能同时运行两个异步任务
function launcher() {
	while(running < limit && items.length > 0) {
		var item = items.shift();
		async(item, function(result) {
			results.push(result);
			running--;
			if(items.length > 0) {
				launcher();
			} else if(running == 0) {
				final(results);
			}
		});
		running++;
	}
}

launcher();