import DefaultString from './exportString.js';
import {md5} from './md5.js';

//查找切断点
let arrary=DefaultString.split('<li><strong>');
//删除第一个元素
arrary.splice(0,1) 
//过滤空值
arrary = arrary.filter(Boolean);
//组合
let newArray = arrary.map(function (item,index,arrary ) { 
	return ('<li><strong>' + item );
});
// console.log(newArray);
//拼接对象
let resultArray = [];
newArray.forEach((item,index,array)=>{
	let newObject = {};
//	描述
	newObject.urlDes = item.match(/<li><strong>(\S*)<\/strong>/)[1];
//	url	
	newObject.urlName = item.match(/https:\/\/IP:PORT\/(\S*)<\/p>/)[1];
	
//	urlId：将描述进行md5
	newObject.urlId = md5(newObject.urlDes);
//	内容	
	newObject.content = item;
// 	是否是app	
	newObject.isApp = true;
// 	是否是wx
	newObject.isWX = false;
	resultArray.push(newObject);
});
// console.log(resultArray);
// 需要去掉转义的
console.log(JSON.stringify(resultArray));

// let jsonString = JSON.stringify(resultArray);
// jsonString = jsonString.replace(/\\/g, '');
// console.log(jsonString);

