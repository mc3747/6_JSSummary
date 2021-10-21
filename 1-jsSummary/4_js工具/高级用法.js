//✅ 1，取代if的条件判断
const getScore = score => {
		const scoreData = new Array(101).fill(0).map((data, idx) => ([idx, () => (idx < 60 ? '不及格' : '及格')]))
		const scoreMap = new Map(scoreData)
		return (scoreMap.get(score) 
					? scoreMap.get(score)() 
					: '未知分数')
}
console.log(getScore(0));

//✅ 2，类数组对象的遍历
/*
1，document.getElementsByTagName()语句返回(document.querySelectorAll(selector);)
2，function代码内的arguments变量
3, string

*/
//var a =  "rtretew";
//let test =function(a,b) {
//	[1].prototype.forEach.call(this.arguments, (el, idx, list) => {
//		console.log(el) // 元素节点
//	})
//}
//test(1, 2);

//✅ 3，短路运算符
/*
const a = d && 1; // 满足条件赋值：取假运算，从左到右依次判断，遇到假值返回假值，后面不再执行，否则返回最后一个真值
const b = d || 1; // 默认赋值：取真运算，从左到右依次判断，遇到真值返回真值，后面不再执行，否则返回最后一个假值
*/
const a1 = false && 9;
const a2 = true && 9;
const b1 = false || 6;
const b2 = true || 6;
console.log(a1,a2);
console.log(b1,b2);

//✅ 4， 满足条件执行某个函数
/*
const flagA = true; // 条件A
const flagB = false; // 条件B
(flagA || flagB) && Func(); // 满足A或B时执行
(flagA || !flagB) && Func(); // 满足A或不满足B时执行
flagA && flagB && Func(); // 同时满足A和B时执行
flagA && !flagB && Func(); // 满足A且不满足B时执行
*/

//✅ 5， 函数退出代替条件分支退出
/*
if (flag) {
	Func();
	return false;
}
// 换成
if (flag) {
	return Func();
}
*/