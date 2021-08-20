
//✅，关于json的总结
/*
❐ JSON全称是JavaScript Object Notation基于JavaScript，是JavaScript的子集。
❐ JSON虽然是JavaScript的子集，但并不从属于JavaScript，它独立于语言。
❐ JSON是用来表示和传输数据的格式，比XML更轻量级，现已成为web数据交换的事实标准。
❐ JSON的优势在于其可以方便的把JSON字符串数据转换为对应的对象，比XML更方便且数据更小。
❐ JSON语法可以表示：字符串、数值、布尔值、null、对象和数组6种类型的值，不支持undefined。
❐ JSON中的”键”区别于JavaScript，必须要加上双引号。
❐ JSON解析可以使用传统的eval函数，或ECMAScript5推出的全局对象来处理。
*/

//✅，json转js的方法1：eavl函数
	//JavaScript语言中eavl函数可以把字符串转换为js的代码并且马上执行，使用情况和Function构造函数用法类型
eval("var a = 123;");
console.log(a + 1);  //输出结果为124

//001 [...] 格式的json数据：数组格式的json直接转成js的数组
var arrJson= '[{"name":"zs","age":18},{"name":"lisi","age":28}]';
var jsonArr = eval(arrJson);
console.log(jsonArr);

//002 {...} 格式的json数据：对象格式的json，要通过拼接才能转成js的对象
var objJson = `{"name":"wendingding","age":18,"contentAbout":["JavaScript","CSS","HTML"],"car":{"number":"粤A6666","color":"red"}}`;

//eval(json);  错误的演示：报错
//处理方式(1)：以拼接的方式赋值给变量
eval("var jsonObj1 = " + objJson);
//处理方式(2)：包装成表达式
var jsonObj2 = eval("(" + objJson +")");

//打印转换后得到的对象
console.log(jsonObj1);
console.log(jsonObj2);

//✅，json转js的方法2：JSON全局方法parse()
	//parse方法用于把json数据反序列化为原生的js
	//	语法：JSON.parse(jsonString,[fn])
	//	第一个参数：jsonString为要解析的json字符串
	//	第二个参数：fn是一个可选参数，该参数为函数类型，接收两个参数，分别是每个键值对的key和value。

//json字符串
var objJson1 = `{"name":"wendingding","age":18,"contentAbout":["JavaScript","CSS","HTML"],"car":{"number":"粤A6666","color":"red"}}`;

//把json字符串转换为js数组
var arrJson1 = '[{"name":"zs","age":18},{"name":"lisi","age":28}]';

//把json字符串转换为js对象
var jsonObj1 = JSON.parse(objJson1);
var jsonArr1 = JSON.parse(arrJson1);
console.log(jsonObj1);
console.log(jsonArr1);

//演示parse方法中函数参数的使用
function fn(key, value) {
	if (key === "name") {
		return value + "++"         //在原有value值的基础上拼接++字符串
	} else if (key === "age") {
		return undefined            //如果返回undefined，则表示删除对应的键值对
	} else {
		return value                //正常返回对应的value值
	}
}
console.log(JSON.parse(objJson1, fn));

//✅，js转json的方法：JSON全局方法parse()
/*
stringify方法使用说明
语法：JSON.stringify(Obj,[fn|arr],[space])
参数说明
第一个参数：Obj为要进行序列化操作的JavaScript对象
第二个参数：过滤器，可以是函数或者是一个数组
第三个参数：是否在生成的json字符串中保留缩进，用于控制缩进的字符
*/

///js中的普通对象
var obj2 = {
	name:"zs",
	age:18,
	friends:["小霸王","花仙子","奥特曼"],
	other:undefined,
	showName:function () {
		console.log(this.name);
	}

};

//把js中的对象转换为json字符串
//注意：
//001 如果键值对中存在value值为undefined的数据，那么会被跳过
//002 对象中的方法以及该对象的原型成员数据在进行转换的时候，会被有意忽略
console.log(JSON.stringify(obj2));

//控制缩进，该参数的值可以是数字也可以是字符串，自动换行
//001 如果是字符串那么会把对应的字符拼接在键值对前面，超过10个字符的省略
//002 如果是数字那么会设置对应的缩进，最多为10，超过则默认为10
console.log(JSON.stringify(obj2, null, 4));
console.log(JSON.stringify(obj2, null, "@@"));

//过滤器（数组）：表示只处理key为name和age这两个键值对
console.log(JSON.stringify(obj2, ["name","age"]));

//过滤器（函数）：
function fn(key,value) {
	if (key === "age")
	{
		return value + 20;
	}else if (key === "name")
	{
		return undefined;       //过滤掉key为name这个键值对
	}else
	{
		return value;
	}
}
console.log(JSON.stringify(obj2,fn));