// 4，运行失败❎：import是es6语法，web浏览器和node.js不识别，可以用babel代替
import {sum, multiply,firstName, lastName, year} from './b4.js'

function a(){
	// test();
	console.log('aaa');
	console.log(firstName + lastName);
	console.log(sum(1, 2, 3));
	console.log(multiply(5, 8));
}
