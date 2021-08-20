//✅ ，1，Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大
let promise = new Promise((resolve, reject) => {
	//进来之后，状态为pending
	console.log('111');  //这行代码是同步的
	//开始执行异步操作（这里开始，写异步的代码，比如ajax请求 or 开启定时器）
	if (false) {
		console.log('333');
		resolve('haha');//如果请求成功了，请写resolve()，此时，promise的状态会被自动修改为fullfilled
	} else {
		reject('555');//如果请求失败了，请写reject()，此时，promise的状态会被自动修改为rejected
	}
})
console.log('222');

//调用promise的then()
promise.then((successMsg) => {
		//如果promise的状态为fullfilled，则执行这里的代码
		console.log(successMsg, '成功了');
	}
	, (errorMsg) => {
		//如果promise的状态为rejected，则执行这里的代码
		console.log(errorMsg, '失败了');
	}
)

//✅ ，2，模拟ajax请求:例子要做html里调用才可以
/*
//定义一个请求news的方法
function getNews(url) {
	//创建一个promise对象
	let promise = new Promise((resolve, reject) => {
		//初始化promise状态为pending
		//启动异步任务
		let request = new XMLHttpRequest();
		request.onreadystatechange = function () {
			if (request.readyState === 4) {
				if (request.status === 200) {
					let news = request.response;
					resolve(news);
				} else {
					reject('请求失败了。。。');
				}
			}
		};
		request.responseType = 'json';//设置返回的数据类型
		request.open("GET", url);//规定请求的方法，创建链接
		request.send();//发送
	})
	return promise;
}

getNews('https://www.baidu.com')
	.then((news) => {
		console.log(news);
//		document.write(JSON.stringify(news));
		console.log('https://www.baidu.com' + news.commentsUrl);
		return getNews('https://www.baidu.com');
	}, (error) => {
//		alert(error);
		console.log(error);
	})
	.then((comments) => {
		console.log(comments);
//		document.write('<br><br><br><br><br>' + JSON.stringify(comments));
	}, (error) => {
//		alert(error);
		console.log(error);
	})
	*/
	
	async function testSync() {
		  const response = await new Promise(resolve => {
				setTimeout(() => {
					 resolve("async await test...");
				 }, 1000);
		  });
		  console.log(response);
	}
	testSync();//async await test...
	
//	✅ async、await串行并行处理
//	串行：等待前面一个await执行后接着执行下一个await，以此类推
	async function asyncAwaitFn(str) {
		return await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(str)
			}, 1000);
		})
	}

	const serialFn = async () => { //串行执行

		console.time('serialFn')
		console.log(await asyncAwaitFn('string 1'));
		console.log(await asyncAwaitFn('string 2'));
		console.timeEnd('serialFn')
	}

	serialFn();
	
// ✅并行：将多个promise直接发起请求（先执行async所在函数），然后再进行await操作
	async function asyncAwaitFn(str) {
		return await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(str)
			}, 1000);
		})
	}
	const parallel = async () => { //并行执行
		console.time('parallel')
		const parallelOne = asyncAwaitFn('string 11');
		const parallelTwo = asyncAwaitFn('string 21')
		//直接打印
		console.log(await parallelOne)
		console.log(await parallelTwo)
		console.timeEnd('parallel')


	}
	parallel()
	
//✅ async、await错误处理	
	async function catchErr() {
				try {
						const errRes = await new Promise((resolve, reject) => {
									setTimeout(() => {
											reject("http error...");
									 }, 1000);
						 });
									//平常我们也可以在await请求成功后通过判断当前status是不是200来判断请求是否成功
									// console.log(errRes.status, errRes.statusText);
					} 
					catch(err) {
							 console.log(err);
					}
	}
	catchErr(); //http error...