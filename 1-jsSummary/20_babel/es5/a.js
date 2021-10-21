'use strict';

var _b = require('./b');

var _b2 = _interopRequireDefault(_b);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 1_整体import
console.log(_b.a1);

// 2_别名import

console.log(_b.a2);
console.log(_b.A3);
console.log((0, _b.f1)(1, 2));
console.log((0, _b.f2)(1, 3));
console.log((0, _b.F3)(1, 4));

// 3_export导出的加{},export default导出的不用{}

console.log(_b2.default);
console.log(_b.N);

console.log('adfa');