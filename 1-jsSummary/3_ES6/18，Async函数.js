//async 函数是什么？一句话，它就是 Generator 函数的语法糖
//async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已
function getStockSymbol(name){
	return name + '✅'
}
function getStockPrice(symbol){
	return symbol + '✅'
}
async function getStockPriceByName(name) {
	const symbol = await getStockSymbol(name);
	const stockPrice = await getStockPrice(symbol);
	return stockPrice;
}

getStockPriceByName('goog').then(function (result) {
	console.log(result);
});


async function logInOrder(urls) {
	// 并发读取远程URL
	const textPromises = urls.map(async url => {
		const response = await fetch(url);
		return response.text();
	});

	// 按次序输出
	for (const textPromise of textPromises) {
		console.log(await textPromise);
	}
}
let urls = ['www.baidu.com','www.jd.com','www.tenent.com'];
logInOrder(urls).then(function (result) {
	console.log(result);
});
