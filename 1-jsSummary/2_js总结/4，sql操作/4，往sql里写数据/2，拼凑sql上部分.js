//⚠️name为更新的字段名，一定要记得修改
//⚠️：记得此结果不能直接运行sql，要和下部分合起来，否则先前数据全覆盖
//first和last为要更新的id首位序号
var string = 'UPDATE MyNewTable2 SET desc = CASE id';
var first = 244;
var last = 253;
var array = [
	'微信授权code', '银行卡号',
		'银行编码',     '手机号',
		'银行名',      '姓名',
		'支付代码',     '身份证',
		'token',    '流水号'
];
for (var i = first;i<=last;i++) {
	string = string + ` WHEN ${i} Then '${array[i-first]}'`;
}
string = string + ' END';
console.log(string);
//⚠️：此处结果不要直接拿来运行sql