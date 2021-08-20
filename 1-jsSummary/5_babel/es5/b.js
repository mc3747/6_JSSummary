'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.f1 = f1;
// export暴露的必须是接口，不能是值,或者单独的变量
/**
 * 
    export 1; // 报错
    let a = 1;
    export a; // 报错
 */

// 1. 变量(完整)
var a1 = exports.a1 = 'leo';

// 2_变量(接口)
var a2 = 100;
exports.a2 = a2;

// 3_变量(别名)

var a3 = 1;
exports.A3 = a3; // 正确

// 4. 方法(完整)

function f1(a, b) {
    return a * b;
}

// 5. 方法(接口)
var f2 = function f1(a, b) {
    return a * b;
};
exports.f2 = f2;

// 6. 方法(as方法)

function f3() {
    console.log('引用');
}
exports.F3 = f3;

// 7.export default
//export default其实是输出一个名字叫default的变量,与export刚好相反

var M = 1;
exports.default = M;
var N = exports.N = 2;