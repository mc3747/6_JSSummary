/**
 * 检验圆括号顺序的有效性
 * @param {String} str 
 */

 var fun1 = require('./stack-es6.js');

function validParentheses1 (str){
	if(!str || str.length === 0 || str[0] === ')') return false

	let stack = new fun1.Stack()
	str.split('').forEach(char => {
		let status = stack.peek() === '(' && char === ')'
		status ? stack.pop() : stack.push(char)
	})
	return stack.isEmpty()
}

/**
 * 检验圆括号顺序的有效性
 * @param {String} str 
 */
function validParentheses2 (str){
	if(!str || str.length === 0 || str[0] === ')') return false

	let arr = []
	for(let i = 0; i < str.length ; i++){
		str[i] === '(' ? arr.push(str[i]) : arr.pop()
	}
	return arr.length === 0
}

console.log(validParentheses1('(())'));
console.log(validParentheses2('()'));