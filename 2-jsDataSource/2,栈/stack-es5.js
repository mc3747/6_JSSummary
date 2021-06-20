//使用构造函数，中间用数组来模拟栈
//prototype为原型继承的方法
function Stack() {
  this.stack = [];
}

//1，Push——在顶部插入一个元素
Stack.prototype.push = function(value) {
  this.stack.push(value);
};
//2，Pop——返回并移除栈顶元素
Stack.prototype.pop = function() {
  return this.stack.pop();
};
//3，isEmpty——栈顶是否为空，则返回true
Stack.prototype.peek = function() {
  return this.stack[this.stack.length - 1];
};
//4，栈的长度
Stack.prototype.length = function() {
  return this.stack.length;
};
//5,打印元素用，连接
Stack.prototype.print = function() {
  console.log(this.stack.join(','));
};

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // => 1 2 3
console.log('length is 3:', stack.length()); // => 3
console.log('peek is 3:', stack.peek()); // => 3
console.log('pop is 3:', stack.pop()); // => 3
stack.print(); // => 1 2
console.log('pop is 2:', stack.pop());  // => 2
console.log('length is 1:', stack.length()); // => 1
console.log('pop is 1:', stack.pop()); // => 1
stack.print(); // => ''
console.log('peek is undefined:', stack.peek()); // => undefined
console.log('pop is undefined:', stack.pop()); // => undefined
