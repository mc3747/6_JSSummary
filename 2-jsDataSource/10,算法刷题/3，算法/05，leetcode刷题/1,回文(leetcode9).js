//数字判断回文
var isPalindrome1 = function(x) {
	// 特例判断
	if (x === 10 || x < 0) return false;

	// 获取每一位的数字组成的数组，（尾递归优化）
	var loop = (n, arr = []) => {
		arr.push(n % 10);
		if (n >= 10) return loop((n - (n % 10)) / 10, arr);
		else return arr;
	};

	var tmp = loop(x);
	// 数组回文（下标）比较得到结果
	for (var i = 0, len = tmp.length; i < len / 2; i++)
		if (tmp[i] !== tmp[len - 1 - i]) return false;
	return true;
};
//字符串判断回文
var isPalindrome2 = function(x) {
	if (!x) {
		return true
	}
	if (x< 0) {
		return false
	}
	return x.toString().split('').reverse().join('') == x.toString()
};

var begin=new Date();
console.log(begin);
isPalindrome2(100099999324123412343266663645);
//for (let i=1;i<1003300;i++) {
//	var a = i;
//}
var end=new Date();
console.log(end);
var time=end-begin;
console.log("time is="+time);