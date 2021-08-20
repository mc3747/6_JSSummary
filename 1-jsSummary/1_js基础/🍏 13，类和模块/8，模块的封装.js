//✅封装私有变量1（不可取）：对象封装：属性暴露
var module1 = new Object({
　_count : 0,
　m1 : function (){
　　//...
　},
　m2 : function (){
  　//...
　}
});
console.info(module1._count); 
module1._count = 5;
console.info(module1._count); 

//✅封装私有变量2（不可取）：构造函数封装：变量私有，但实例对象和构造函数未分类，且消耗内存
function Module2() {
	var _count = 0;
	this.m1 = function () {

	};

	this.m2 = function () {

	};
}
var module2 = new Module2();
console.info(module2._count); 
module2._count = 5;
console.info(module2._count); 

//✅封装私有变量3（不可取）：构造函数与实例对象在数据上分离，但属性却可以修改
function Module3() {
	this._count = 0;
}
Module3.prototype = {
	constructor:Module3,
	m1:function () {

		},
	m2:function () {

		},
}
var module3 = new Module3();
console.info(module3._count); 
module3._count = 5;
console.info(module3._count); 

//✅封装私有变量（可取）：立即执行函数的写法
var module4 = (function () {
　var _count = 0;
　var m1 = function () {
　  //...
　};
　var m2 = function () {
　　//...
　};
　return {
　　m1 : m1,
　　m2 : m2
　};
})();

console.info(module4._count); 

//✅“放大模式”（augmentation):给模块新增方法
var module4 = (function (mod){
　mod.m3 = function () {
	console.log("我是新增的m3")
　};
　return mod;
})(module4);
module4.m3();

//✅“宽放大模式”（Loose augmentation):给模块新增方法
var module4 = (function (mod){
　mod.m4 = function () {
	console.log("我是新增的m4")
　};
　return mod;
})(module4 || {});
module4.m4();