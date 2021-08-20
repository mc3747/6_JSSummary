//✅，原型式继承 
//01 提供超类型|父类型构造函数
function SuperClass1() {}

//02 设置父类型的原型属性和原型方法
SuperClass1.prototype.info = 'SuperClass的信息';
SuperClass1.prototype.showInfo = function () {
	console.log(this.info);
};

//03 提供子类型
function SubClass1() {}

//04 设置继承(原型对象继承)
SubClass1.prototype = SuperClass1.prototype;
SubClass1.prototype.constructor = SubClass1;

var sub = new SubClass1();
console.log(sub.info);          //SuperClass的信息
sub.showInfo();                 //SuperClass的信息

//✅，2原型链继承
//01 提供超类型|父类型
function SuperClass2() {
	this.name = 'SuperClass的名称';
	this.showName = function () {
		console.log(this.name);
	}
}

//02 设置父类型的原型属性和原型方法
SuperClass2.prototype.info = 'SuperClass的信息';
SuperClass2.prototype.showInfo = function () {
	console.log(this.info);
};

//03 提供子类型
function SubClass2() {}

//04 设置继承(原型对象继承)
var sup = new SuperClass2();
SubClass2.prototype = sup;
SubClass2.prototype.constructor = SubClass2;

var sub = new SubClass2();
console.log(sub.name);          //SuperClass的名称
console.log(sub.info);          //SuperClass的信息
sub.showInfo();                 //SuperClass的信息
sub.showName();                 //SuperClass的名称

//✅，3组合继承
/*
① 使用原型链实现对原型属性和方法的继承
② 通过伪造(冒充)构造函数来实现对实例成员的继承，并且解决了父构造函数传参问题
*/
 //01 提供超类型|父类型
function SuperClass3(name) {
	this.name = name;
	this.showName = function () {
		console.log(this.name);
	}
}

//02 设置父类型的原型属性和原型方法
SuperClass3.prototype.info = 'SuperClass的信息';
SuperClass3.prototype.showInfo = function () {
	console.log(this.info);
};

//03 提供子类型
function SubClass3(name) {
	SuperClass3.call(this,name);
}

//(1)获取父构造函数的实例成员  Person.call(this,name);
//(2)获取父构造函数的原型成员  SubClass.prototype = SuperClass.prototype;
SubClass3.prototype = SuperClass3.prototype;
SubClass3.prototype.constructor = SubClass3;

var sub_one = new SubClass3("zhangsan");
var sub_two = new SubClass3("lisi");
console.log(sub_one);
console.log(sub_two);