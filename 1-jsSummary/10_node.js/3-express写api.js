let express = require('express');
let app = express();
let bodyParser = require('body-parser');


//设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://test.test.com:8080');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next()
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  //data参数以字典格式传输

app.get('/api/user', (req, res) => {
    // res.send("get请求正常");
    console.log('request path:' + req.path);
    var result = {
        code: 200,
        data: {
                name: "返回结果",
                des: "正常返回"
              }
        }
        // 响应以 json 的方式返回给客户端
        res.json(result);
});

app.post('/register',(req, res)=>{
    console.log(req.body);   // 打印一个对象 ，例如:{name:'zs',age:'12'}
    res.send(req.body);    // 不能发送数字，只能发字符串
 });


//配置服务端口
var server = app.listen(8000, () => {

    console.log("node接口服务正常运行");

});

// get请求地址：http://localhost:8000/api/user
// post