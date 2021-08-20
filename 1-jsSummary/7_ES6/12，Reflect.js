
//Reflect的作用：
//1，将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上
//2，修改某些Object方法的返回结果，让其变得更合
//3，让Object操作都变成函数行为
//4，Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法