
//✅ 1，时间格式化
const dateFormatter = (formatter, date) => {
	date = (date ? new Date(date) : new Date)
	const Y = date.getFullYear() + '',
					M = date.getMonth() + 1,
					D = date.getDate(),
					H = date.getHours(),
					m = date.getMinutes(),
					s = date.getSeconds()
		return formatter.replace(/YYYY|yyyy/g, Y)
							.replace(/YY|yy/g, Y.substr(2, 2))
							.replace(/MM/g, (M < 10 ? '0' : '') + M)
							.replace(/DD/g, (D < 10 ? '0' : '') + D)
							.replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
							.replace(/mm/g, (m < 10 ? '0' : '') + m)
							.replace(/ss/g, (s < 10 ? '0' : '') + s)
}

//获取当前时间
var d = new Date();
//24小时制
d.toLocaleString('zh-CN',{
	hour12: false
});

console.log(dateFormatter('YYYY-MM-DD HH:mm:ss', d));


//✅ 2，时间戳:距离1970年1月1日00:00:00的毫秒数
//方法1：当前时间的时间戳
console.log(d.getTime());
//方法2：当前时间的时间戳
console.log(d.valueOf());
//方法3：指定时间的时间戳
const timestamp = +new Date("2019-08-22 16:19:44");
console.log(timestamp);
