const _items = Symbol()
class Stack {
	constructor (){
		this[_items] = []
	}
	push (element){
		this[_items].push(element)
	}
	// 剩下方法和第一种实现的差不多，这里省略
	// 只要把前面方法中的 this.items 更改为 this[_items]
}

