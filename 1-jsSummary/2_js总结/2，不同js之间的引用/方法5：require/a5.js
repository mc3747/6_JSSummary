//  5，运行失败❎ ：浏览器端不能识别require关键字，require是node.js环境下的
function a(){
	var test = require('./b5.js')
	console.log(test.a);
}
a();