// 1，let和var
// let 声明的变量只在其声明的块或子块中可用，这一点，与var相似。
// 二者之间最主要的区别在于var声明的变量的作用域是整个封闭函数
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;       // 同样的变量!
        console.log(x);  // 2
    }
    console.log(x);  // 2

}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;       // 不同的变量    
        console.log(x);  // 2  
    }
    console.log(x);  // 1
}

// 2，变量提升：将变量提前声明，如下返回undefined
	/*
	等效于
	var a;
	console.log(a);
	a = 1;
	*/
function varPromote(){
	console.log(a);
var a = 1;
}

// 3,标签label:标识循环，跳出指定的循环
function labelTest() {
	top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) break top;
      console.log('i=' + i + ', j=' + j);
    }
  }
}