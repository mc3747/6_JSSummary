//🍎基本的实现方法
//1，失败封装：会暴露所有模块成员，内部状态可以被外部改写
var module1 = new Object({
　_count : 0,
　m1 : function (){

　},
　m2 : function (){
　}
});

//🍎封装私有变量：构造函数的写法
//2，失败封装：变量私有，但构造函数有双重作用，既用来塑造实例对象，又用来保存实例对象的数据，违背了构造函数与实例对象在数据上相分离的原则（即实例对象的数据，不应该保存在实例对象以外）。同时，非常耗费内存
var module2 = function() {
	var buffer = [];

	this.add = function (str) {
		 buffer.push(str);
	};

	this.toString = function () {
		return buffer.join('');
	};
}

//🍎封装私有变量：立即执行函数的写法
//3，成功封装：可读性差
var module3 = (function () {
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

//🍎模块的放大模式
//5，失败封装：module4可能为空
var module4 = (function (mod){
　mod.m3 = function () {
　　//...
　};
　return mod;
})(module4);

//🍎模块的宽放大模式
//6，成功封装：
var module5 = (function (mod) {
　//...
　return mod;
})(window.module5 || {});

//🍎输入全局变量：为了在模块内部调用全局变量，必须显式地将其他变量输入模块
//7，成功封装：
var module6 = (function ($, YAHOO) {
　//...
})(jQuery, YAHOO);

//🍎输入全局变量：立即执行函数还可以起到命名空间的作用
//8，成功封装：
//finalCarousel对象输出到全局，对外暴露init和destroy接口，内部方法go、handleEvents、initialize、dieCarouselDie都是外部无法调用的
var module7 = (function($, window, document) {

	function go(num) {
	}

	function handleEvents() {
	}

	function initialize() {
	}

	function dieCarouselDie() {
	}

	//attach to the global scope
	window.finalCarousel = {
		init : initialize,
		destroy : dieCarouselDie
	}

})( jQuery, window, document );