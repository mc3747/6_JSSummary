/**
 * 十进制转换为二进制
 * @param {Number} bit 
 */
//node.js导入js文件的写法
 var fun1 = require('./stack-es6.js');
//1，使用了栈的用法
function bitset1 (bit){
	if(bit == 0) return '0'
	if(!/^[0-9]+.?[0-9]*$/.test(bit)){
		return new Error('请输入正确的数值！')
	}

	let stack = new fun1.Stack(), result = ''
	while (bit > 0){
		stack.push(bit % 2)
		bit = Math.floor(bit / 2)
	}
	while (!stack.isEmpty()){
		result += stack.pop().toString()
	}
	return result;

}
//2，没使用了栈的用法
function bitset2 (bit){
	if(bit == 0) return '0'
	if(!/^[0-9]+.?[0-9]*$/.test(bit)){
		return new Error('请输入正确的数值！')
	}

	let arr = []
	while(bit > 0){
		arr.push(bit % 2)
		bit = Math.floor(bit / 2)
	}
	return arr.reverse().join('')
}

console.log(bitset1(100));
console.log(bitset2(100));