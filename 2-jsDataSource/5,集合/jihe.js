//ES6 Set
var Set2 = function(){
    var items = {}
    // var length = 0
    //has 检查元素是否存在 return boolean
    this.has = function(value){
        return items.hasOwnProperty(value)
    }

    //集合是不重复的
    //add 添加元素
    this.add = function(value){ // value = 3
        if(this.has(value)){
            //true 存在
            return false
        } else{
            //false 不存在
            items[value] = value
            // items[3] = 3
            // 方括号语法、点语法
            // length++
            return value
        }
    }

    //移除元素 
    this.remove = function(value){
        if(this.has(value)){
            //拿出来用
            delete items[value]
            // length--
            return true
        } else{
            //不用管
            return false
        }
    }

    // 清空集合 
    this.clear = function(){
        items = {}
    }
    //size 集合的大小？？？？？
    this.size = function(){
        // 遍历集合
        // var count = 0
        // for(var i in items){
        //     if(items.hasOwnProperty(i)){
        //         count ++
        //     }
        // }
        // return count

        //keys es6
        return Object.keys(items).length
    }

    this.value = function(){
        var values = []
        for(var i in items){
            if(items.hasOwnProperty(i)){
                values.push(items[i])
            }
        }
        return values
    }
    //并集
    this.union = function(otherSet){
        var resultSet = new Set2()

        // 1 : 把自己的值提取出来
        var arr = this.value()
        for(var i = 0 ; i < arr.length ; i++){
            resultSet.add(arr[i])
        }

        // 2.把另一只集合的值提取出来
        arr = otherSet.value()
        for(var i = 0 ; i < arr.length ; i++){
            resultSet.add(arr[i])
        }
        return resultSet
    }
    //交集
    this.intersection = function(otherSet){
        var resultSet = new Set2()

        var arr = this.value()
        for(var i = 0 ; i < arr.length ; i++){
            if(otherSet.has(arr[i])){
                resultSet.add(arr[i])
            }
        }

        return resultSet
    }

    this.difference  =function(otherSet){
        var resultSet = new Set2()
        var arr = this.value()
        for(var i = 0 ; i < arr.length ; i++){
            if(otherSet.has(arr[i])){
                // B中有 添加？ 不添加！
            } else {
                resultSet.add(arr[i])
            }
        }

        return resultSet
    }

}

var A = new Set2()
A.add(1)
A.add(2)
A.add(3)

var B = new Set2()
B.add(2)
B.add(3)
B.add(4)

// [].length

// var book = {name : "红楼梦  ",price : "20"}
// for(var i in book){
//     console.log(i) //key  i = "name"
//     console.log(book[i]) //value  book[i] == book["name"] == book.name
// }

//都是函数，函数允许有属性和方法  》 函数（构造器）的方法称之为静态方法 Math.random
// var Object = function(){}
// Object.prototype = ...
// Object.keys = ...
