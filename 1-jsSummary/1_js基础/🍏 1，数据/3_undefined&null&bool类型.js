// ✅ 1,null,undefined类型,在if语句与false等效
if (!undefined) {
  console.log('undefined is false');
}
if (!null) {
  console.log('null is false');
}
if (!false) {
  console.log('false is false');
}

// ✅2,null转成数字,自动为0
console.log(Number(null));

// ✅3,undefined转成数字为NaN
console.log(Number(undefined));

// ✅4,常见的undefined场景
    //1,变量未声明
console.log(typeof(i));

    // 2,变量声明了，但没有赋值
var i;
console.log(typeof(i));

    // 3,调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f1(x) {
  return x;
}
console.log(typeof(f1()));

    // 4,对象没有赋值的属性
var  o = new Object();
console.log(typeof(o.p));

    // 5,函数没有返回值时，默认返回 undefined
function f2() {}
console.log(typeof(f2()));

// ✅ 5，以下6种值，用作bool判断时，都会转换成false
/*
undefined
  null
  false
  0
  NaN
  ""或''（空字符串）
  
  */