////✅，1，crud本文件的json数据
var json=[
{
"_id":"5a2a251752d3ca6a96a26601",
"user":"qqq",
"email":"aaa"
},
{
"_id":"5a2a25b352d3ca6a96a26638",
"user":"www",
"email":"bbb"
},
{
"_id":"5a2a260952d3ca6a96a2665a",
"user":"sss",
"email":"zzz"
}
]
/*
1，map操作；
2，中括号或者点语法访问属性
*/

//添加json字段
console.log(json.map(v=>(v["node"]="node",v)));

//删除json字段
console.log(json.map(v=>(delete v.user,v)));

//修改json字段
console.log(json.map(v=>(v._id = '99',v)));

//✅，2，crud外部文件的json数据
// function readTextFile(file, callback) {  
//     var rawFile = new XMLHttpRequest();  
//    rawFile.overrideMimeType("application/json");  
//    rawFile.open("GET", file, true);  
//    rawFile.onreadystatechange = function() {  
//        if (rawFile.readyState === 4 && rawFile.status == "200") {  
//           callback(rawFile.responseText);  
//        }  
//    }  
//    rawFile.send(null);  
// }  
//   
// 
// readTextFile("./json测试数据.json", function(text){  
//   var data = JSON.parse(text);  
//    console.log(data);  
// }); 