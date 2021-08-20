// 1,写法1✅
// exports.a = 123;
// exports.b = 'hello';
// exports.c = function() {
// 	console.log('ccc')
// }
// exports.d = {
// 	foo: 'bar'
// }

// 2,写法2✅
// //等价=> 
// module.exports.a = 123;
// module.exports.b = 'hello';

// 3,写法3✅ ：建议使用module.exports
module.exports = {
  a:123,
  b:'hello',
  c:function(){
    console.log('ccc')
  },
  d:{
    foo:'bar'
  }
}
