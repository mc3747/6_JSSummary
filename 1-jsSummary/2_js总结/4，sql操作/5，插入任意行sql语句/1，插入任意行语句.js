//👍简单的js代码，用来插入任意多行代码：👍
	var string = 'insert into MyNewTable1 (id) values ';
	var first = 401;
	var last = 600;
	for(var i = first; i <= last; i++) {
	if (i<last) {
	string =	string + '(' + i + ')' + ','
	}else {
	string =	string + '(' + i + ')' + ';'
	};
	}
	console.log(string);