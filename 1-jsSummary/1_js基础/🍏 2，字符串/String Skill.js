//1，时间比对：
const time1 = "2019-02-14 21:00:00";
const time2 = "2019-05-01 09:00:00";
const overtime = time1 > time2;
console.log(overtime);


//2，格式化金钱：千分位
const money = parseToMoney1(20190214.99);
console.log(money);
// 方法1：数组
function parseToMoney1(num) {
  num = parseFloat(num.toFixed(3));
  let [integer, decimal] = String.prototype.split.call(num, '.');
  integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
  return integer + '.' + (decimal ? decimal : '');
}
// 方法2：正则表达式(运用了正则的前向声明和反前向声明)
function parseToMoney2(str){
    // 仅仅对位置进行匹配
    let re = /(?=(?!\b)(\d{3})+$)/g; 
   return str.replace(re,','); 
}

//3,生成星级评分
const StartScore = rate => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
const start = StartScore(4);
console.log(start);

//4,操作URL查询参数:获取url字符串中的参数
const url = 'https://segmentfault.com/a/1190000014747781?utm_source=young&sex=male';
//方法1：split方法
function getUrlParam1(sUrl, sKey) {
	var left= sUrl.indexOf("?") + 1
	var right= sUrl.lastIndexOf("#")
	var parasString = sUrl.slice(left, right)
	var paras = parasString.split('&');
	var parasjson = {}
	paras.forEach(function (value, index, arr) {
		var a = value.split('=');
		parasjson[a[0]] !== undefined ? parasjson[a[0]] = [].concat(parasjson[a[0]], a[1]) : parasjson[a[0]] = a[1];
	});
 
	let result = arguments[1] !== void 0 ? (parasjson[arguments[1]] || '') : parasjson;
	return result
}

//方法2：正则匹配：Exec方法
function getUrlParam2(sUrl, sKey) {
	var resObj = {};
	var reg = /(\w+)=(\w+)/g;
	while (reg.exec(sUrl)) {
		resObj[RegExp.$1] ? resObj[RegExp.$1] = [].concat(resObj[RegExp.$1], RegExp.$2) : resObj[RegExp.$1] = RegExp.$2;
	}
	if (sKey) {
		return (resObj[sKey] ? resObj[sKey] : '');
	}
	return resObj;
}

//方法3：如果在浏览器中获取，直接用以下方法
//const params = new URLSearchParams(location.search.replace(/\?/ig, ""));
//params.has("young"); // true
//params.get("sex"); // "male"

console.log(getUrlParam2(url,"utm_source"));

//5,字符串查找
//请使用最基本的遍历来实现判断字符串 a 是否被包含在字符串 b 中，并返回第一次出现的位置（找不到返回 -1）
function isContain(a, b) {
	for (let i in b) {
		if (a[0] === b[i]) {
			let tmp = true;
			for (let j in a) {
				if (a[j] !== b[~~i + ~~j]) {
					tmp = false;
				}
			}
			if (tmp) {
				return i;
			}
		}
	}
	return -1;
}
//a='34';b='1234567'; // 返回 2
//a='35';b='1234567'; // 返回 -1
a='355';b='12354355'; // 返回 5
console.log(isContain(a,b));


//6,查找字符串中出现最多的字符和个数
let str = "abcabcabcbbccccc";
let num = 0;
let char = '';

 // 使其按照一定的次序排列
str = str.split('').sort().join('');
// "aaabbbbbcccccccc"

// 定义正则表达式
let re = /(\w)\1+/g;
str.replace(re,($0,$1) => {
	if(num < $0.length){
		num = $0.length;
		char = $1;        
	}
});
console.log(`字符最多的是${char}，出现了${num}次`);
