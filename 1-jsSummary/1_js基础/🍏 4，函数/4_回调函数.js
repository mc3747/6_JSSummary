// ✅ 1,回调函数
/* 
函数作为参数
*/
function f1(a, b, callback) {
	let c = a + b;
	callback(c);
};
f1(1, 2, function(c) {
	console.log(c);
})