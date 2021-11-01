//✅ 1，输出一行字符串的方法
//方法1：字符串用反斜杠\ + 换行符:防止字符串太长，还是一个字符串
var longString = 'Long \
long \
long \
string';
console.log(longString);
//方法2：与上面方法等价
var longString2 = 'Long ' +
	'long ' +
	'long ' +
	'string';
console.log(longString2);

//✅2，输出多行字符串的方法
let string = (function() {
	'line 1'
	'line 2'
	'line 3'
}).toString().split('\n').slice(1, -1).join('\n')
console.log(string)

//✅3，字符串和字符数组
//不能修改其中的字符
var s = 'hello';
console.log(s[0]);
console.log('hello' [0]);

//✅4，ASCII码：8位从00000000到11111111，ASCII 码一共规定了128个字符的编码
/*
ASCII码和整型的根本区别就是所占位数不一样，
ASCII码：1个字节
整型：至少2个字节
*/
console.log(0b01000001);
console.log(String.fromCharCode(0b01000001));
console.log(0b0000000001000001);

//字符串转ascii
var str = 'abcd';
var codeValue = str.charCodeAt(0);
console.log(codeValue); //97

//ascii码转为字符
var charValue = String.fromCharCode(94);
console.log(charValue); //a

//✅5，Unicode码：只是一个符号集，包含所有的符号
var s1 = '\u00A9';
var s2 = '\u0041';
console.log(s1);
console.log(s2);
//  字符串转unicode
function encodeUnicode(str) {
	var res = [];
	for (var i = 0; i < str.length; i++) {
		res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
	}
	return "\\u" + res.join("\\u");
}

// unicode转字符串 
function decodeUnicode(str) {
	str = str.replace(/\\/g, "%");
	return unescape(str);
}
console.log('字符串转unicode：' + encodeUnicode('严'));
console.log('unicode转字符串：' + decodeUnicode('\u4e25'));

//✅ 6，UTF-8和字符串转化（js默认用UTF-16 ）
	//字符串转utf-8方法1：
function encodeUtf8(text) {
	const code = encodeURIComponent(text);
	const bytes = [];
	for (var i = 0; i < code.length; i++) {
		const c = code.charAt(i);
		if (c === '%') {
			const hex = code.charAt(i + 1) + code.charAt(i + 2);
			const hexVal = parseInt(hex, 16);
			bytes.push(hexVal);
			i += 2;
		} else bytes.push(c.charCodeAt(0));
	}
	return bytes;
}
var array = encodeUtf8('严');
console.log('字符串转utf-8(数组格式)：' + array);
var code1 = array.map(item => '%'+item.toString(16)).join('');
console.log('数组转%字符串：' + code1);
var code2 = ('%E4%B8%A5'.split('%')).map(item => parseInt(item,16));
console.log('%字符串转数组：' + code2);

	//字符串转utf-8方法2：浏览器自带的方法encodeURI
console.log('字符串转utf-8：' + encodeURI('严'));
	//字符串转utf-8方法3：浏览器自带的方法encodeURIComponent
console.log('字符串转utf-8：' + encodeURIComponent('严'));


//utf-8转成中文
function utf8CodeToChineseChar(strUtf8) {
	var iCode, iCode1, iCode2;
	iCode = parseInt("0x" + strUtf8.substr(1, 2));
	iCode1 = parseInt("0x" + strUtf8.substr(4, 2));
	iCode2 = parseInt("0x" + strUtf8.substr(7, 2));

	return String.fromCharCode(((iCode & 0x0F) << 12) |
		((iCode1 & 0x3F) << 6) |
		(iCode2 & 0x3F));
}
console.log('utf-8转字符串：' +utf8CodeToChineseChar('%E4%B8%A5'));
console.log('utf-8转字符串：' + decodeURI('%E4%B8%A5'));
console.log('utf-8转字符串：' + decodeURIComponent('%E4%B8%A5'));


//✅7，Unicode和utf-8转化：⚠️以下方法有问题
//unicode为1个接收数据，串口收到的字符编码放在该数组中 
//unicode为1个接收数据，串口收到的字符编码放在该数组中
function UnicodeToUtf8(unicode) {
	var uchar;
	var utf8str = "";
	var i;
	
	for(i=0; i<unicode.length;i+=2){			
		uchar = (unicode[i]<<8) | unicode[i+1];				//UNICODE为2字节编码，一次读入2个字节
		utf8str = utf8str  + String.fromCharCode(uchar);	//使用String.fromCharCode强制转换
	}
	return utf8str;
}
 
 
function Utf8ToUnicode(strUtf8) {
	var i,j;
	var uCode;
	var temp = new Array();
	
	for(i=0,j=0; i<strUtf8.length; i++){
		uCode = strUtf8.charCodeAt(i);
		if(uCode<0x100){					//ASCII字符
			temp[j++] = 0x00;
			temp[j++] = uCode;
		}else if(uCode<0x10000){
			temp[j++] = (uCode>>8)&0xff;
			temp[j++] = uCode&0xff;
		}else if(uCode<0x1000000){
			temp[j++] = (uCode>>16)&0xff;
			temp[j++] = (uCode>>8)&0xff;
			temp[j++] = uCode&0xff;
		}else if(uCode<0x100000000){
			temp[j++] = (uCode>>24)&0xff;
			temp[j++] = (uCode>>16)&0xff;
			temp[j++] = (uCode>>8)&0xff;
			temp[j++] = uCode&0xff;
		}else{
			break;
		}
	}
	temp.length = j;
	return temp;
}

console.log('unicode转utf-8：' + UnicodeToUtf8('%E4%B8%A5'));
console.log('utf-8转unicode：' + Utf8ToUnicode('&#20005;'));

////✅ 8，utf- 8与utf- 16相互转化
////UTF-8转UTF-16
var utf8ToUtf16 = function(utf8Arr) {
	var utf16Str = '';

	for (var i = 0; i < utf8Arr.length; i++) {
		//每个字节都转换为2进制字符串进行判断
		var one = utf8Arr[i].toString(2);

		//正则表达式判断该字节是否符合>=2个1和1个0的情况
		var v = one.match(/^1+?(?=0)/);

		//多个字节编码
		if (v && one.length == 8) {
			//获取该编码是多少个字节长度
			var bytesLength = v[0].length;

			//首个字节中的数据,因为首字节有效数据长度为8位减去1个0位，再减去bytesLength位的剩余位数
			var store = utf8Arr[i].toString(2).slice(7 - bytesLength);
			for (var st = 1; st < bytesLength; st++) {
				//后面剩余字节中的数据，因为后面字节都是10xxxxxxx，所以slice中的2指的是去除10
				store += utf8Arr[st + i].toString(2).slice(2)
			}

			//转换为Unicode码值
			utf16Str += String.fromCharCode(parseInt(store, 2));

			//调整剩余字节数
			i += bytesLength - 1
		} else {
			//单个字节编码，和Unicode码值一致，直接将该字节转换为UTF-16
			utf16Str += String.fromCharCode(utf8Arr[i])
		}
	}

	return utf16Str
}

//UTF-16转UTF-8	
var utf16ToUtf8 = function(utf16Str) {
	var utf8Arr = [];
	var byteSize = 0;
	for (var i = 0; i < utf16Str.length; i++) {
		//获取字符Unicode码值
		var code = utf16Str.charCodeAt(i);

		//如果码值是1个字节的范围，则直接写入
		if (code >= 0x00 && code <= 0x7f) {
			byteSize += 1;
			utf8Arr.push(code);

			//如果码值是2个字节以上的范围，则按规则进行填充补码转换
		} else if (code >= 0x80 && code <= 0x7ff) {
			byteSize += 2;
			utf8Arr.push((192 | (31 & (code >> 6))));
			utf8Arr.push((128 | (63 & code)))
		} else if ((code >= 0x800 && code <= 0xd7ff) ||
			(code >= 0xe000 && code <= 0xffff)) {
			byteSize += 3;
			utf8Arr.push((224 | (15 & (code >> 12))));
			utf8Arr.push((128 | (63 & (code >> 6))));
			utf8Arr.push((128 | (63 & code)))
		} else if (code >= 0x10000 && code <= 0x10ffff) {
			byteSize += 4;
			utf8Arr.push((240 | (7 & (code >> 18))));
			utf8Arr.push((128 | (63 & (code >> 12))));
			utf8Arr.push((128 | (63 & (code >> 6))));
			utf8Arr.push((128 | (63 & code)))
		}
	}

	return utf8Arr
}

console.log('utf-8转utf-16：' + utf8ToUtf16([228,184,165]));
console.log('utf-16转utf-8：' + utf16ToUtf8('严'));

////✅ 9，Base64 转码
//所谓 Base64 就是一种编码方法，可以将任意值转成 0～9、A～Z、a-z、+和/这64个字符组成的可打印字符
//js用window.atob
//node.js用 先安装包 atob,，然后引用const atob = require('atob');

//btoa()：任意值转为 Base64 编码
var string1 = 'Hello World!';
//console.log(window.btoa(string1)); // "SGVsbG8gV29ybGQh"

//atob()：Base64 编码转为原来的值
//console.log(atob('SGVsbG8gV29ybGQh')); // "Hello World!"

