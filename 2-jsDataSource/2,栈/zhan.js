//es5 

//  函数： 函数 ， 构造器
//  this指向要创建的对象
var Stack = function(){
    var items = []   //私有

    // push 栈顶添加元素
    this.push = function(element){
        items.push(element)
    }
    // pop 移除栈顶元素
    this.pop = function(){
        return items.pop()
    }
    // peek 检查栈顶
    this.peek = function(){
        return items[items.length - 1]
    }

    // 检查栈 是否为空
    this.isEmpty = function(){
        return items.length == 0
    }

    // 清除栈
    this.clear = function(){
        items = []
    }

    // 获取栈的大小
    this.size = function(){
        return items.length
    }

    // 检查items
    this.getItems = function(){
        return items
    }
}


//10转2
var divBy2 = function(number){
    var stack = new Stack()
    var yushu

    var string2 = ''

    while(number > 0){
        yushu = number % 2
        stack.push(yushu)
        number = Math.floor( number / 2)
    }

    while(!stack.isEmpty()){
        string2 += stack.pop()
    }

    return string2
}


// 2. 先完成fn1，再完成fn2
var fn1 = function(){
    return console.log('fn1 finish')
}
var fn2 = function(){
    fn1()
    return console.log('fn2 finish')
}

var app = function(){
    app()
}
app()