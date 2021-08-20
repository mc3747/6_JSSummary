
/*写法1------------------------------------------------*/
// 引入模块 ，与 OC 的 import 一样
var http = require('http');

// 创建 webserver
var server = http.createServer(function (request, response) {
    // 只要访问服务器就会执行
    console.log('请求服务器');

    // 响应服务器请求
    // response.write('holle world');
    // response.end();
    response.end('holle world,我是个🍎', function (request, response) {
        console.log('服务器完成响应，结束啦');
    });

});

// 监听端口访问
server.listen(3000, '10.100.154.156');
console.log('监听3000端口');

/*写法2------------------------------------------------*/
// var http = require('http');

// http.createServer(function (request, response) {

//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     // 发送响应数据 "Hello World"
//     response.end('Hello World\n');
// }).listen(8888);

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');