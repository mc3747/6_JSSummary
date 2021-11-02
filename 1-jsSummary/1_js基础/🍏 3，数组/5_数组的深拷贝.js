/* 
1-深拷贝方式1：JSON.stringify 和 JSON.parse 方法
    弊端：
        必须是严格的json格式
        不能拷贝对象中的函数
*/
function deepCopy1(){
    let arr1 = [1, {x: 5},{y: function(){return 2}}];
    let arr2 = JSON.parse(JSON.stringify(arr1));
    arr1[0] = 6;
    arr1[1].x = 6;
    console.log(arr1); 
    console.log(arr2);
}

/* 
2-深拷贝方式2：使用递归
    思路：
        当对象的属性是基本类型值得时候，直接拷贝；
        当属性是引用类型值的时候，再次调用这个函数进行递归拷贝
    弊端：
        只是简单拷贝基本类型，数组，对象等场景
        null，函数等情况不会拷贝
*/
function deepCopyTool(newobj, oldobj) {
    for (var k in oldobj) {
      // 判断我们的属性值属于那种数据类型
      // 1. 获取属性值  oldobj[k]
      var item = oldobj[k];
      // 2. 判断这个值是否是数组
      if (item instanceof Array) {
        newobj[k] = [];
        deepCopy(newobj[k], item)
      } else if (item instanceof Object) {
        // 3. 判断这个值是否是对象
        newobj[k] = {};
        deepCopy(newobj[k], item)
      } else {
        // 4. 属于简单数据类型
        newobj[k] = item;
      }
    }
  }
function deepCopy2(){
    let arr1 = [1, {x: 5},{y: function(){return 2}}];
    let arr2 = [];
    deepCopy(arr2,arr1);
    arr1[0] = 6;
    arr1[1].x = 6;
    console.log(arr1); 
    console.log(arr2);
}
/* 
3-深拷贝方式3：使用 jQuery 复制
      使用：
      语法：$.extend([deep], target, object1[, objectN] )
        **deep：**表示是否深拷贝 默认为false 为true为深拷贝，为false，则为浅拷贝
        target: Object类型 目标对象，其他对象的成员属性将被附加到该对象上。
        object1  objectN: 可选 Object类型 第一个以及第N个被合并的对象。
*/

function deepCopy3(){
    let arr1 = [1, {x: 5},{y: function(){return 2}}];
    let arr2 = [];
    const $ = require("../../9_jQuery/jquery");
    $.extend(arr2,arr1);
    arr1[0] = 6;
    arr1[1].x = 6;
    console.log(arr1); 
    console.log(arr2);
}
// deepCopy3();

/* 
4-深拷贝方式4：使用第三方lodash
      使用：
      语法：$.extend([deep], target, object1[, objectN] )
        **deep：**表示是否深拷贝 默认为false 为true为深拷贝，为false，则为浅拷贝
        target: Object类型 目标对象，其他对象的成员属性将被附加到该对象上。
        object1  objectN: 可选 Object类型 第一个以及第N个被合并的对象。
*/

function deepCopy4(){
    let arr1 = [1, {x: 5},{y: function(){return 2}}];
    let _ = require('lodash');
    let arr2 = _.cloneDeep(arr1);
    arr1[0] = 6;
    arr1[1].x = 6;
    console.log(arr1); 
    console.log(arr2);
}
deepCopy4();