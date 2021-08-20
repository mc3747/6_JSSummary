//✅数据类型：
	//基本类型主要包括：字符串(string)、数值(number)、布尔值(boolean)、Null和undefined五种
	//复杂类型主要是对象类型，包括Object对象、Function函数、String对象，Number对象，Boolean对象，
//	Math对象，Date对象，event对象，RegExp正则等
	//语法 typeof 变量 | typeof(变量)：结果 typeof 关键字执行后的结果总是为一个string类型的字符串
/*多种类型的变量*/
var age   = 18;                     //数值类型
var name  = "宁夏";                  //字符串类型
var isFun = true;                   //布尔类型值
var a;                              //未定义
var obj   = {id:1,desc:"描述信息"};   //Object类型
function fn() {
	console.log("我是fn函数");
}

console.log(typeof age);            //number
console.log(typeof name);           //string
console.log(typeof isFun);          //boolean
console.log(typeof a);              //undefined
console.log(typeof obj);            //object

/*typeof的两种使用方式*/
console.log(typeof fn);             //function
console.log(typeof(fn));            //function

obj = null;
console.log(typeof obj);            //object

//✅需要注意的特例
	//	注意 ① typeof null 的结果为 object 而非 null。
	//	注意 ② 实际上，undefined的值派生自null，因此ECMA-262规定它们的相等性测试需要返回true。
	//	注意 ③ 实际上JavaScript内部并不直接区分整数值和浮点数值，其所有数字均用浮点数值表示
	//	注意 ④ NaN 全称Not a Number(非数值)，NaN用于表示本来要返回数值的操作数而实际未返回的情况
		/*
		NaN的2个特点：
		① 任何涉及NaN的操作都会返回NaN。
		② NaN与任何值都不相等，包括NaN自身。
		isNaN函数的特点：
		接收一个参数，该参数可以是任何类型的，该函数在执行的时候会尝试把参数转换为数值，
		如果参数不能被转换为数值(转换失败)，那么返回true，否则返回false
		*/
	console.log(undefined == null);   //true
	console.log(isNaN(NaN));      //true
	console.log(isNaN(10));       //false
	console.log(isNaN("20.3"));   //false
	console.log(isNaN("5red"));   //true   无法转换为数值
	console.log(isNaN(true));     //false
	console.log(isNaN("red"));    //true   无法转换为数值
	
//✅数据类型转换
//Number(),Boolean(),String()
//parseInt(),parseFloat(),toString()

	/*✅转成数字型01 Number(构造)函数把其它类型转换为数值*/
console.log(Number(null));         //0
console.log(Number(undefined));   //NaN
console.log(Number("miaoXia"));   //NaN
console.log(Number("18blue"));    //NaN
console.log(Number("18"));        //18
console.log(Number(true));        //1
console.log(Number(false));       //0

	/*✅转成数字型02parseInt()和parseFloat()函数相对于Number()函数而言更加灵活*/
/*
parseInt()函数用于解析整数，如果字符串前缀是0x或0X，则将会被解析为十六进制数。解析规则为：
跳过任意数量的前导空格，尽可能解析更多数值字符，并忽略数字后面的内容，
如果第一个非空格字符是非法的数字直接量，将最终返回NaN

parseFloat()函数用于解析浮点数。解析规则为：跳过任意数量的前导空格，检索纯数字字符串后面第一个.后的不为数字的字符，
并对之前所有的结果进行返回，如果第一个非空格字符是非法的数字直接量，将最终返回NaN，如果没有.则以整数解析的方式处理。
*/
console.log(parseInt("123.9"));         //123
console.log(parseFloat("123.9"));       //123.9

	/*✅转成字符型1：String*/
/*02-1 String函数用于把其它类型转换为字符串*/
console.log(String(null));       //"null"
console.log(String(undefined));  //"undefined"
console.log(String(123));        //"123"
console.log(String(21.5));       //"21.5"
console.log(String(-0));         //"0"
console.log(String(true));       //"true"
console.log(String(false));      //"false"

	/*✅转成字符型2：toString*/
/*02-2 toString函数
* a、其实其它类型的值直接调用toString方法也能强转为字符串
* b、toString方法可以接收一个参数，该参数用于表示转换时的进制数
* c、如果toString方法的参数缺省，那么默认采用的十进制
* d、null和undefined值无法调用toString方法
* */
console.log((123).toString());  //"123"
console.log(true.toString());   //"true"
console.log(false.toString());  //"false"
console.log(NaN.toString());    //"NaN"