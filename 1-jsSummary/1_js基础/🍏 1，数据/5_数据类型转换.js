//✅ 1，数据强制转换

//🍎Number函数：要比parseInt函数严格很多
Number('324') // 324
Number(null) // 0
Number(undefined) // NaN
Number(true) // 1
Number(false) // 0
parseInt('42 cats') // 42
Number('42 cats') // NaN
Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5

//🍎String函数
/*
数值：转为相应的字符串。
字符串：转换后还是原来的值。
布尔值：true转为字符串"true"，false转为字符串"false"。
undefined：转为字符串"undefined"。
null：转为字符串"null"。
String方法的参数如果是对象，返回一个类型字符串；如果是数组，返回该数组的字符串形式
*/
String({a: 1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"

//🍎Boolean函数：可以将任意类型的值转为布尔值
/*
以下5种为false，其余为true
undefined
null
0（包含-0和+0）
NaN
''（空字符串）
*/

//✅ 2，数据自动转换
//🍎自动转换为布尔值
/*
以下为false：
undefined
null
+0或-0
NaN
''（空字符串）
*/


//🍎自动转换为字符串
//主要发生在字符串的加法运算时。当一个值为字符串，另一个值为非字符串，则后者转为字符串

//🍎自动转换为数值
//除了加法运算符（+）有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值
//null转为数值时为0，而undefined转为数值时为NaN。
//一元运算符也会把运算子转成数值：+'abc'（NaN），-false（0）