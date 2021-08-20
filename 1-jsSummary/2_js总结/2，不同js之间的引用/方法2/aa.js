// 2，运行失败❎
var newscript = document.createElement('script');
newscript.setAttribute('type','text/javascript');
newscript.setAttribute('src','bb.js');
var head = document.getElementsByTagName('head')[0];
head.appendChild(newscript);


function aa() {

	test();
	console.log('aaa');
}
