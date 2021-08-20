//✅ 1，数组去重
const list = [1, 1, 2, 3, 6, 45, 8, 5, 4, 6, 5]
const uniqueList = [...new Set(list)] 
console.log(uniqueList);

//✅ 2，判断是否是空数组
const arr = [];
const flag = Array.isArray(arr) && !arr.length;
console.log(flag);

//✅ 3，克隆数组
const _arr = [0, 1, 2];
const arr2 = [..._arr];
console.log(arr2);

//✅ 4，合并数组
const arr3 = [0, 1, 2];
const arr4 = [3, 4, 5];
const arr5 = [...arr3, ...arr4];
console.log(arr5);

//✅ 5，清空数组
const arr6 = [0, 1, 2];
arr6.length = 0;
console.log(arr6);

//✅ 6，截断数组
const arr7 = [0, 1, 2];
arr7.length = 2;
console.log(arr7);

//✅ 7，交换赋值
let a = 0;
let b = 1;
[a, b] = [b, a];
console.log(a,b);

//✅ 8，过滤空值：undefined、null、""、0、false、NaN
const arr8 = [undefined, null, "", 0, false, NaN, 1, 2].filter(Boolean);
console.log(arr8);

//✅ 9，数组首部插入成员
let arr9 = [1, 2]; 
//方法1
//arr9.unshift(0);
//方法2
arr9 = [0].concat(arr9);
//方法3
//arr9 = [0, ...arr];
console.log(arr9);

//✅ 10，数组尾部插入成员：
let arr10 = [0, 1]; 
//方法1
//arr10.push(2);
//方法2
//arr10.concat(2);
//方法3
//arr10[arr10.length] = 2;
//方法4
arr10 = [...arr10, 2];
console.log(arr10);

//✅ 11，统计数组成员个数
const arr11 = [0, 1, 1, 2, 2, 2];
const count11 = arr11.reduce((t, c) => {
	t[c] = t[c] ? ++ t[c] : 1;
	return t;
}, {});
console.log(count11);
// count => { 0: 1, 1: 2, 2: 3 }


//✅ 12，reduce代替map和filter
const _arr12 = [0, 1, 2];

// map
const arr13 = _arr12.map(v => v * 2);
const arr14 = _arr12.reduce((t, c) => {
	t.push(c * 2);
	return t;
}, []);
console.log(arr13,arr14);
// arr => [0, 2, 4]

// filter
const arr15 = _arr12.filter(v => v > 0);
const arr16 = _arr12.reduce((t, c) => {
	c > 0 && t.push(c);
	return t;
}, []);
console.log(arr15,arr16);
// arr => [1, 2]

// map和filter
const arr17 = _arr12.map(v => v * 2).filter(v => v > 2);
const arr18 = _arr.reduce((t, c) => {
	c = c * 2;
	c > 2 && t.push(c);
	return t;
}, []);
console.log(arr17,arr18);
// arr => [4]


//✅13，删除数组的某一个元素（已知下标）
/*
splice(index,len,[item]) 
splice有3个参数，它也可以用来替换/删除/添加数组内某一个或者几个值
*/

//✅14，删除数组的某一个元素（未知下标）
Array.prototype.indexOf = function (val) {
 for(var i = 0; i < this.length; i++){
	if(this[i] == val){return i;}
 }
 return -1;
}
Array.prototype.remove = function (val) {
 var index = this.indexOf(val);
 if(index > -1){this.splice(index,1);}
}
var temp = [1,5,6,12,453,324];
console.log('删除前'+temp);
temp.remove(12);
console.log('删除后'+temp);

//✅15，判断某个元素是否在数组中
var fruits = ["Banana", "Orange", "Apple", "Mango"];
//方法1： arr.indexOf(某元素)：未找到则返回 -1。 
var a = fruits.indexOf("Apple");  // 2
//方法2：array.indexOf(item,start) ,从第n个元素开始检索
var b = fruits.indexOf("Apple",4);  // 2
//方法3：通过回调函数find，遍历
fruits.find(function(value, index, arr) {
	if(value == 'apple') ;
}) // 10
//方法4：通过回调函数findIndex，遍历
fruits.findIndex(function(value, index, arr) {
	if(value == 1);
})
//方法5，6，7：使用自定义遍历
var arr = [1, 5, 10, 15];
//传统for
for(let i=0; i<fruits.length; i++) {
	if(arr[i] === 'apple') {
		//则包含该元素
	}
}
// for...of
for(v of fruits) {
	if(v === 'apple') {
		//则包含该元素
	}
}
//forEach
fruits.forEach(v=>{
	if(v === 'apple') {
		//则包含该元素
	}
//方法8: 自定义封装
function isInArray3(arr,value){
	if(arr.indexOf&&typeof(arr.indexOf)=='function'){
		var index = arr.indexOf(value);
		if(index >= 0){
			return true;
		}
	}
	return false;
}

//✅16，数组遍历