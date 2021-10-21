//✅ 1，判断对象的类型:比typeof对象类型更细
//方法1：typeof
//方法2：返回数据对象
const type = data => Object.prototype.toString.call(data).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
//方法3：判断数据类型，也可以bool判断
function DataType(tgt, type) {
	const dataType = Object.prototype.toString.call(tgt).replace(/\[object /g, "").replace(/\]/g, "").toLowerCase();
	return type ? dataType === type : dataType;
}
console.log(typeof([]));
console.log(type([]));
console.log(DataType("young")); // "string"
console.log(DataType([], "array")); // true

//✅ 2，判断是否是空对象
const obj = {};
const flag = DataType(obj, "object") && !Object.keys(obj).length;
console.log(flag);