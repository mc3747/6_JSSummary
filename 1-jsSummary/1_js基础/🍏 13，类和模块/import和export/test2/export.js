// export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系

// ✅，1，输出变量
// 方式1：变量直接export
// export let a1 = 100;

// 方式2：变量直接
// var m = 1;
// export {m};

// 方式3：变量直接:n来代替m
// export {m as n};

/*
// 报错
export 1;

// 报错
var m = 1;
export m;
*/ 
// ✅， 2，变量统一输出
// let a2 = 200;
// let a3 = 'aaa';
// export{a2,a3};


// ✅，3, 函数使用别名export
// function f1(a,b){
// 	return a + b
// }
// export{f1};
// 
// function f2(a,b){
// 	return a * b
// }
// export{f2 as F2};

// ✅，4, default输出
//可以是匿名函数，
// export default function () {
// 	console.log('foo');
// }

let DefaultString = '哈哈';
export default DefaultString ;