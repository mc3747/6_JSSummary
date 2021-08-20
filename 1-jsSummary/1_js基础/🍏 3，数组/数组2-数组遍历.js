// 🍎 1,for循环
forDemo(){
	var arr = [1, 2, 3, 4, 5, 6]
	for(var i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
	
	// 1 2 3 4 5 6
}
// 优化：使用临时变量，将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果才会比较明显
forDemo2(){
	var arr = [1, 2, 3, 4, 5, 6]
	var len = arr.length
	for(var i = 0; i < len; i++) {
		console.log(arr[i])
	}
	
	// 1 2 3 4 5 6
	
}
// 🍎 2,for in:这个循环用的人也很多，但是效率最低（输出的 key 是数组索引）
forInDemo(){
	var arr = ['我', '是', '谁', '我', '在', '哪']
	for(var key in arr) {
	    console.log(key)
	}
	
	// 0 1 2 3 4 5
	
}
// 🍎 3,for of:虽然性能要好于 for…in…，但仍然比不上普通的 for 循环（不能循环对象）
forOfDemo(){
	var arr = ['我', '是', '谁', '我', '在', '哪']
	for(var key of arr) {
	    console.log(key)
	}
	
	// 我 是 谁 我 在 哪
}

// 🍎 4,for each
// 数组里的元素个数有几个，该方法里的回调就会执行几次
//     第一个参数是数组里的元素，第二个参数为数组里元素的索引，第三个参数则是它自己
//     数组自带的遍历方法，虽然使用频率略高，但是性能仍然比普通循环略低
forEachDemo(){
	var arr = [1, 2, 3, 4, 5, 6]
	arr.forEach(function (item, idnex, array) {
	    console.log(item)     // 1 2 3 4 5 6
	    console.log(array)    // [1, 2, 3, 4, 5, 6]
	})
}
// 🍎 5,map
mapDemo(){
	var arr = [1, 2, 3, 4, 5, 6]
	var newArr = arr.map(function (item, idnex) {
	    return item * item
	})
	
	console.log(newArr)    // [1, 4, 9, 16, 25, 36]
	
}
// 🍎 6,filter
// 遍历数组，过滤出符合条件的元素并返回一个新数组
filterDemo(){
	var arr = [
		{ id: 1, name: '买笔', done: true },
		{ id: 2, name: '买笔记本', done: true },
		{ id: 3, name: '练字', done: false }
	]
	    
	var newArr = arr.filter(function (item, index) {
		return item.done
	})
	
	console.log(newArr)
	
	// [{ id: 1, name: '买笔', done: true },{ id: 2, name: '买笔记本', done: true }]
}

// 🍎 7,some
// 遍历数组，只要有一个以上的元素满足条件就返回 true，否则返回 false
someDemo(){
	var arr = [
		{ id: 1, name: '买笔', done: true },
		{ id: 2, name: '买笔记本', done: true },
		{ id: 3, name: '练字', done: false }
	]
	
	var bool = arr.some(function (item, index) {
		return item.done
	})
	
	console.log(bool)    // true
}
// 🍎 8,every
//  遍历数组，每一个元素都满足条件 则返回 true，否则返回 false
everyDemo(){
	var arr = [
		{ id: 1, name: '买笔', done: true },
		{ id: 2, name: '买笔记本', done: true },
		{ id: 3, name: '练字', done: false }
	]
	
	var bool = arr.every(function (item, index) {
		return item.done
	})
	
	console.log(bool)    // false
	
}
// 🍎 9,find
// 遍历数组，返回符合条件的第一个元素，如果没有符合条件的元素则返回 undefined
findDemo(){
	var arr = [1, 1, 2, 2, 3, 3, 4, 5, 6]
	    
	var num = arr.find(function (item, index) {
		return item === 3
	})
	
	console.log(num)   //  3
	
}
// 🍎 10,findIndex
//   遍历数组，返回符合条件的第一个元素的索引，如果没有符合条件的元素则返回 -1
findIndexDemo(){
	var arr = [1, 1, 2, 2, 3, 3, 4, 5, 6]
	    
	var num = arr.findIndex(function (item) {
		return item === 3
	})
	
	console.log(num)   //  4
	
}

//  🍎 11,keys，values，entries
 // ES6 提供三个新的方法 —— entries()，keys()和values() —— 用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
keyValueEntriesDemo(){
	for (let index of ['a', 'b'].keys()) {
	console.log(index);
	}
	// 0
	// 1
	for (let elem of ['a', 'b'].values()) {
	console.log(elem);
	}
	// 'a'
	// 'b'
	for (let [index, elem] of ['a', 'b'].entries()) {
	console.log(index, elem);
	}
	// 0 "a"
	// 1 "b"
}