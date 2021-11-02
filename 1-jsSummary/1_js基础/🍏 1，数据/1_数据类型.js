/*
值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
引用数据类型：狭义的对象(Object)、数组(Array)、函数(Function)。
*/

/* 
// 判断数据类型的方法；
1，typeof；
2，instanceof；
3，Object.prototype.toString方法 
4,使用constructor 
5,jquery的$.type（内部原理就是用的Object.prototype.toString.call()）
*/

var bool = true
var num = 1
var str = 'abc'
var und = undefined
var nul = null
var arr = [1, 2, 3]
var obj = { name: 'haoxl', age: 18 }
var fun = function () { console.log('I am a function') }
// ✅使用typeof 
/* 
    对于null及数组、对象，typeof均检测出为object，不能进一步判断它们的类型
*/
function typeofDemo() {
    console.log(typeof bool); //boolean
    console.log(typeof num);//number
    console.log(typeof str);//string
    console.log(typeof und);//undefined
    console.log(typeof nul);//object
    console.log(typeof arr);//object
    console.log(typeof obj);//object
    console.log(typeof fun);//function
}

// typeofDemo();

// ✅使用instanceof
/* 
    不能区分：
        undefined和null
        基本类型如果不是用new声明的则也测试不出来
*/

function instanceofDemo() {
    console.log(bool instanceof Boolean);// false
    console.log(num instanceof Number);// false
    console.log(str instanceof String);// false
    console.log(und instanceof Object);// false
    console.log(arr instanceof Array);// true
    console.log(nul instanceof Object);// false
    console.log(obj instanceof Object);// true
    console.log(fun instanceof Function);// true

    var bool2 = new Boolean()
    console.log(bool2 instanceof Boolean);// true

    var num2 = new Number()
    console.log(num2 instanceof Number);// true

    var str2 = new String()
    console.log(str2 instanceof String);//  true

    function Person() { }
    var per = new Person()
    console.log(per instanceof Person);// true

    function Student() { }
    Student.prototype = new Person()
    var haoxl = new Student()
    console.log(haoxl instanceof Student);// true
    console.log(haoxl instanceof Person);// true
}
// instanceofDemo();

// ✅使用Object.prototype.toString.call
/* 
    不能区分：
        不能检测非原生构造函数的构造函数名
*/
function prototypeDemo() {
    console.log(Object.prototype.toString.call(bool));//[object Boolean]
    console.log(Object.prototype.toString.call(num));//[object Number]
    console.log(Object.prototype.toString.call(str));//[object String]
    console.log(Object.prototype.toString.call(und));//[object Undefined]
    console.log(Object.prototype.toString.call(nul));//[object Null]
    console.log(Object.prototype.toString.call(arr));//[object Array]
    console.log(Object.prototype.toString.call(obj));//[object Object]
    console.log(Object.prototype.toString.call(fun));//[object Function]

    function Person() { }
    function Student() { }
    Student.prototype = new Person()
    var haoxl = new Student()
    console.log(Object.prototype.toString.call(haoxl));//[object Object]
}
// prototypeDemo();

// ✅使用constructor
/* 
    不能区分：
        不能检测非原生构造函数的构造函数名
        使用它是不安全的，因为contructor的指向是可以改变的
*/
function constructorDemo() {
    console.log(bool.constructor === Boolean);// true
    console.log(num.constructor === Number);// true
    console.log(str.constructor === String);// true
    console.log(arr.constructor === Array);// true
    console.log(obj.constructor === Object);// true
    console.log(fun.constructor === Function);// true
    function Person() { }
    function Student() { }
    Student.prototype = new Person()
    var haoxl = new Student()
    console.log(haoxl.constructor === Student);// false
    console.log(haoxl.constructor === Person);// true
}
// constructorDemo();

// ✅使用jquery中的$.type
/*
    $.type()内部原理就是用的Object.prototype.toString.call()
*/
function typeDemo() {
    const $ = require("../../9_jQuery/jquery");

    console.log($.type(bool));//boolean
    console.log($.type(num));//number
    console.log($.type(str));//string
    console.log($.type(und));//undefined
    console.log($.type(nul));//null
    console.log($.type(arr));//array
    console.log($.type(obj));//object
    console.log($.type(fun));//function

    function Person() { }
    function Student() { }
    Student.prototype = new Person()
    var haoxl = new Student()
    console.log($.type(haoxl));//object
}
typeDemo();