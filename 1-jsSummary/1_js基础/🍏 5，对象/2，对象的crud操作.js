
//✅对象的操作：增删改查
	//通过字面量方式创建obj对象，该对象现在拥有name属性和showName方法
	//因使用字面量方式创建，所有obj的原型对象(__proto__)指向object.prototype
var obj = {
	name:"wendingding",
	showName:function () {
		console.log(this.name);
	}
};

//🍎01 添加属性或方法
	//a 使用点语法来为obj对象添加age属性和showAge方法
obj.age = 18;
obj.showAge = function (){
	console.log(this.age);
};

	//b 使用中括号语法来为obj对象添加age属性和showAge方法
obj["class-name"] = 41;
obj["showClassName"] = function () {
	console.log(this["class-name"]);
};

//🍎02 修改属性或方法
	//如果对象的属性已经存在，那么设置该属性的时候表示修改
obj.age = 20;
obj.showAge = function (){
	console.log("年龄" + this.age);
};

//🍎03 查询属性或者调用方法
console.log(obj.name);      //wendingding
console.log(obj["age"]);    //20
obj.showName();             //wendingding
obj["showName"]();          //注意，不推荐使用这种方法

//🍎04 删除对象中的属性或方法
	//语法形式：delete 对象.属性 | delete 对象[属性]
delete obj.name;
delete obj["showName"];
console.log(obj);

//🍎05 对象的遍历
for (key in obj)
{
	 console.log(key, obj.key);
}