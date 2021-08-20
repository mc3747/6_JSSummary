//🍍1,字符的 Unicode 表示法
//字符单字节
console.log("\u0061");
//汉字双字节
console.log("\uD842\uDFB7");
//1个字符的6种表示方法
//正常
console.log("z");
//转义
console.log("\z");
//unicode
console.log("\u007A");
//unicode-带括号
console.log("\u{7A}");
//unicode-8进制
console.log("\172");
//unicode-8进制
console.log("\x7A");

//获取z的ascii码
console.log('z'.charCodeAt());
//ascii码转字符
console.log(String.fromCharCode(122));

//🍍2,字符串的遍历：for of遍历
for (let codePoint of 'fool') {
	console.log(codePoint)
}

//🍍3,输出特殊字符
/*
U+005C：反斜杠（reverse solidus)：可以用转义或者unicode
U+000D：回车（carriage return）
U+2028：行分隔符（line separator）
U+2029：段分隔符（paragraph separator）
U+000A：换行符（line feed）
*/
console.log('\\');
console.log('\u005c');
console.log('\u000D');

//🍍4,模板字符串：用符号``表示
//a，当做普通字符串
console.log(`普通字符串`);
//b，多行字符串
console.log(`换行
字符串`);
//c，带变量的字符串
let x = 1;
let y = 2;
console.log(`${x} + ${y} = ${x + y}`);

//🍍5,字符串新增方法
console.log(String.fromCodePoint(0x20BB7));