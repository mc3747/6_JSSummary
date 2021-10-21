//✅，1，满足某些条件时执行函数
/*
为非假值时执行
const flag = false; // undefined、null、""、0、false、NaN
!flag && Func();

数组不为空时执行
const arr = [0, 1, 2];
arr.length && Func();

对象不为空时执行
const obj = { a: 0, b: 1, c: 2 };
Object.keys(obj).length && Func();
*/
//✅，2，是否是身份证
function isCardNo(number) {
    var regx = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return regx.test(number);
}

//✅，3，验证是否是邮箱
function isEmail(email) {
    var regx = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-])+$/;
    return regx.test(email);
}
//✅，4，验证是否是电话号码
function isPhone(tel) {
    var regx = /^1[34578]\d{9}$/;
    return regx.test(tel);
}
