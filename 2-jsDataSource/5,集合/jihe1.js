//es6
// var s = new Set()
// s.add(1)
// s.add(2)
// s.add(3)

// s.forEach(function(value1,value2,set){
//     // {1:1,2:2,3:3}
//     console.log('value 1 - ',value1)
//     console.log('value 2 - ',value2)
//     console.log('set - ',set)
// })

// var arr = ['a','b','c']
// arr.forEach(function(item,index){
//     //item 数组存储的值 index 对应的下标
//     console.log(item, index)
// })


var a = new Set([1,2,3])
var b = new Set([2,3,4])


var arr = [1,10,-2,-45,56]
// 我要把全部大于0的数拿出来

//传统 
var arr2 = []
for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] > 0){
        arr2.push(arr[i])
    }
}

//es6 filter(fn)
//fn返回true则添加到返回数组里
// arr2 = arr.filter(function(value){
//     if(value > 0) return true
// })

arr2 = arr.filter((value)=>{
    if(value > 0) return true
})

var intersect = new Set([...a].filter( x => b.has(x)))
var different = new Set([...a].filter( x => !b.has(x)))


// 箭头函数 
var add = a => a*2