//思路1：
class Stack1 {
	constructor() {
		this.items = [];
		this.minIndexStack = [];
	}

	push(element) {
		this.items.push(element);
		let minLen = this.minIndexStack.length;
		let minItemIndex = this.minIndexStack[minLen - 1];
		if(minLen === 0 || this.items[minItemIndex] > element) {
			this.minIndexStack.push(this.items.length - 1);
		} else {
			this.minIndexStack.push(minItemIndex);
		}
	}

	pop() {
		this.minIndexStack.pop();
		return this.items.pop();
	}
	
	min() {
		let len = this.minIndexStack.length;
		return (len > 0 && this.items[this.minIndexStack[len - 1]]) || 0;
	}

	peek() {
		return this.items[this.items.length - 1];
	}
	
	// 省略其它方法
}
//思路2：利用辅助数组
class Stack2 {
	constructor (){
		this.items = [] // 数据栈
		this.arr = []   // 辅助栈
	}
	push( element ){
		this.items.push(element)
		let min = Math.min(...this.items)
		this.arr.push( min === element ? this.size() - 1 : 0)
	}
	pop(){
		this.arr.pop()
		return this.items.pop()
	}
	peek(){
		return this.items[this.items.length - 1]
	}
	isEmpty(){
		return this.items.length === 1
	}
	clear(){
		this.items = []
	}
	size(){
		return this.items.length
	}
	min (){
		let last = this.arr[this.arr.length - 1]
		return this.items[last]
	}
}

//2种思路获取
let stack = new Stack1();
stack.push(3);
console.log('After push 3, Min item is', stack.min());
stack.push(4);
console.log('After push 4, Min item is', stack.min());
stack.push(2);
console.log('After push 2, Min item is', stack.min());
