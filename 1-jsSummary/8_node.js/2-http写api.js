
/*✅写法1------------------------------------------------*/
const http = require('http');
// 创建一个 HTTP server
const server = new http.Server();

/**
 * request 事件，当客户端发起请求后会响应这个事件
 * req：请求对象
 * res：响应对象
 * */ 
server.on('request', function(req, res) {
    let path = req.url;
    if (path.indexOf('/api/fe/list') == 0) {
        // 处理请求的 path 为 /api/fe/list
        res.writeHead(200, {
            "Content-type" : "application/json"
        });
        let data = {
            title: "前端小课",
            des: "内容由素燕公众号发布"
        };
        // 最终数据需要转换成 json 字符串
        res.write(JSON.stringify(data));
    } else {
        // 未实现，直接报 404 错误
        res.writeHead(404, {
            "Content-type" : "application/json"
        });
        let data = {
            code: "404",
            msg: "not found"
        };
        res.write(JSON.stringify(data));
    }
    res.end();
});

// 监听 8888 端口
server.listen(8888, function() {
    console.log('Server run in: http://127.0.0.1:8888');
});

/*✅写法2------------------------------------------------*/
// 引入模块 ，与 OC 的 import 一样
// var http = require('http');

// // 创建 webserver
// var server = http.createServer(function (request, response) {
//     // 只要访问服务器就会执行
//     console.log('请求服务器');

//     // 响应服务器请求
//     // response.write('holle world');
//     // response.end();
//     response.end('holle world,我是个🍎', function (request, response) {
//         console.log('服务器完成响应，结束啦');
//     });

// });

// // 监听端口访问
// server.listen(3000, '10.100.154.156');
// console.log('监听3000端口');


/*✅写法3------------------------------------------------*/
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