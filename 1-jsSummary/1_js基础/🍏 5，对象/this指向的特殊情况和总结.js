//✅， ①例外的情况 ：call和apply是否使用严格模式
	//在使用call或者apply方法的时候，非严格模式下如果我们传递的参数是null或者是undefined，那么这些值在调用的时候其实会被忽略，this默认绑定的其实是全局对象
	/**[代码 01]**/
	//声明全局变量用于测试
//		var name = "测试的name";
//		var obj1 = {
//			 name:"zs",
//			 showName:function (a,b) {
//				  console.log("姓名 " + this.name,a, b);
//			 }
//		};
//
//		//注意：虽然此处以上下文的方式调用，但是因为传递的第一个参数是null,实际这里应用的是默认绑定规则
//		obj1.showName.call(null,1,2);       //姓名 测试的name 1 2
//		obj1.showName.call(undefined,1,2);  //姓名 测试的name 1 2
//		
		/**[代码 02]**/
//		严格模式下，传递null或者是undefined作为call和apply方法的第一个参数，this的绑定和上下文调用保持一致
		//开启严格模式
			"use strict";

			//声明全局变量用于测试
			var obj = {
				 name:"zs",
				 showName:function () {
					  console.log(this);
				 }
			};

			obj.showName.call(null);        //null
			obj.showName.apply(undefined);  //undefined

		//建议的处理方式
		obj.showName.apply(Object.create(null));
		
//✅， ②例外的情况 ：箭头函数
//ES6中推出了一种特殊的函数类型：箭头函数。箭头函数使用=>操作符来定义，需要注意的是箭头函数内部的this绑定并不适用于既定的四种规则，this的绑定由外层作用域来决定
//声明函数
function fn() {
	console.log("fn",this);
	//fn函数中返回一个箭头函数
	return ()=>{
		console.log(this);
	}
}


//fn以普通函数方式调用，fn中的this指向全局对象
//箭头函数中的this绑定由外部的词法作用域来决定,this指向window
fn()();

//fn以函数上下文方式调用，fn中的this指向对象o
//箭头函数中的this绑定由外部的词法作用域来决定,this指向对象o
var o = {name:"zs"};
fn.call(o)(); //this指向{name:"zs"}对象

//✅， ③例外的情况 ：在代码中我们可能会创建函数的“间接引用”，这种情况下调用函数会使用默认绑定规则。
var objA = {
		 name:"zs",
		 showName:function(){
			  console.log(this.name);
		 }
	}

	objA.showName();                //对象方法调用，this指向objA 打印zs
	var objB = {name:"ls"};
//	(objB.showName = objA.showName)(); //打印 空字符串
	
//✅， this指向的总结
/*
① 是否由new调用？ 如果是，则绑定到构造函数新创建的实例对象身上。
② 是否由call或者apply调用？如果是，则绑定到第一个参数指定的对象身上。
③ 是有作为对象的方法调用？如果是，则绑定到这个引用的对象身上。
④ 默认普通函数调用，如果是严格模式则绑定到undefined，否则绑定到全局对象。
特殊场景：
①call和apply是否使用严格模式
②箭头函数中的this，由外层作用域决定
③函数的间接引用，this指向全局

*/
	 