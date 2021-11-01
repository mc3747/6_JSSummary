//🍎1，定义方式：2种
var regex1 = /xyz/i;
var regex2 = new RegExp('xyz', 'i');

//🍎2，实例属性
/*
与修饰相关：
RegExp.prototype.ignoreCase：返回一个布尔值，表示是否设置了i修饰符。
RegExp.prototype.global：返回一个布尔值，表示是否设置了g修饰符。（全局搜索）
RegExp.prototype.multiline：返回一个布尔值，表示是否设置了m修饰符。
RegExp.prototype.flags：返回一个字符串，包含了已经设置的所有修饰符，按字母排序。
与修饰无关：
RegExp.prototype.lastIndex：返回一个整数，表示下一次开始搜索的位置。该属性可读写，但是只在进行连续搜索时有意义，详细介绍请看后文。
RegExp.prototype.source：返回正则表达式的字符串形式（不包括反斜杠），该属性只读。
*/

//🍎3，实例方法
//1，RegExp.prototype.test()：是否有参数匹配的字符串
console.log(/cat/.test('cats and dogs'));

//2,RegExp.prototype.exec():如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回null
//不加括号：返回第一个匹配；加括号返回所有匹配
//index：第一个匹配的索引
//input：匹配的原字符串
var s = '_x_x';
var r1 = /x/;
var r2 = /(x)/;
console.log(r1.exec(s));
console.log(r2.exec(s));


var r3 = /a(b+)a/;
var arr3 = r3.exec('_abbba_aba_');
console.log(arr3);


//🍎4,字符串的实例方法
/*
String.prototype.match()：返回一个数组，成员是所有匹配的子字符串。
String.prototype.search()：按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置。
String.prototype.replace()：按照给定的正则表达式进行替换，返回替换后的字符串。
String.prototype.split()：按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员。
*/
var s4 = 'a*bba*';
var r4 = /a/g;
console.log(s4.match(r4));
console.log(s4.search(r4));
console.log(s4.replace(r4,'b'));
console.log(s4.split('*'));
//重要应用：消除首位两端的空格
/*
$&：匹配的子字符串。
$`：匹配结果前面的文本。
$'：匹配结果后面的文本。
$n：匹配成功的第n组内容，n是从1开始的自然数。
$$：指代美元符号$。
*/
var str = '  #id div.class  ';
console.log(str.replace(/^\s+|\s+$/g, ''));