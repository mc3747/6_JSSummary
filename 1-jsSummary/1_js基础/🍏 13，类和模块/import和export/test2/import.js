// ✅ 引用方式1：逐个导入
	// import {a1,m,n,a2,a3,f1,F2} from "./export.js";
	// console.log(a1,m,n);
	// console.log(a2,a3);
	// console.log(f1(3,4));
	// console.log(F2(5,4));
	
// ✅ 引用方式2：整体导入
// import * as AAA from './export.js';
// console.log(AAA.a1);
// console.log(AAA.f1(3,4));

//import default模块时
/*
// 第一组
export default function crc32() { // 输出
	// ...
}
import crc32 from 'crc32'; // 输入

// 第二组
export function crc32() { // 输出
	// ...
};
import {crc32} from 'crc32'; // 输入
*/
// import aa from './export.js'
// aa();

// import DefaultString from './export.js';
// console.log(DefaultString)