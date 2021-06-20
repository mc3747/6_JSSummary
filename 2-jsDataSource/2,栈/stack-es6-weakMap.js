const items = new WeakMap()
class Stack {
	constructor (){
		items.set(this, [])
	}
	push (element){
		let item = items.get(this)
		item.push(element)
	}
	// 剩下方法和第一种实现的差不多，这里省略
	// 只要把前面方法中的获取 this.items 的方式，更改为 items.get(this) 获取
}

