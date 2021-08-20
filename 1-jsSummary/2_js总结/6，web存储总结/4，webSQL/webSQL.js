/**
 * Created by Administrator on 2016/5/6 0006.
 */
var datatable = null;
var db = openDatabase("MyData", "", "My Database", 1024 * 100);

function init() {
	datatable = document.getElementById("datatable");
	showAllData();
}

//删除html中table下的所有的子节点
function removeAllData() {
	for (var i = datatable.childNodes.length - 1; i >= 0; i--) {
		datatable.removeChild(datatable.childNodes[i]);
	}
	var tr = document.createElement("tr");
	var th1 = document.createElement("th");
	var th2 = document.createElement("th");
	var th3 = document.createElement("th");

	th1.innerHTML = "姓名";
	th2.innerHTML = "留言";
	th3.innerHTML = "时间";

	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);

	datatable.appendChild(tr);
}

//显示基础信息内容
function showData(row) {
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");

	td1.innerHTML = row.name;
	td2.innerHTML = row.message;
	var t = new Date();
	t.setTime(row.time);
	td3.innerHTML = t.toLocaleDateString() + " " + t.toLocaleTimeString();

	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);

	datatable.appendChild(tr);
}

//显示当前本地数据库中所有的数据信息
function showAllData() {
	db.transaction(function(tx) {
		tx.executeSql("create table if not exists MsgData(name text,message text,time integer)", []);
		tx.executeSql("select * from MsgData", [], function(tx, rs) {
			removeAllData();
			for (var i = 0; i < rs.rows.length; i++) {
				showData(rs.rows.item(i));
			}
		});
	})
}

//向本地数据库中添加数据
function addData(name, message, time) {
	db.transaction(function(tx) {
		tx.executeSql("insert into MsgData values (?,?,?)", [name, message, time], function(tx, rs) {
			window.alert("插入成功！");
		}, function(tx, error) {
			window.alert(error.source + "::" + error.message);
		});
	})
}

//保存table中提交的数据
function saveData() {
	var name = document.getElementById("name").value;
	var memo = document.getElementById("memo").value;
	var time = new Date().getTime();
	addData(name, memo, time);
	showAllData();
}

//删除某一个表
function dropTable() {
	var tableName = window.prompt("请输入要删除的表名称：", "");
	db.transaction(function(tx) {
		tx.executeSql("drop table " + tableName + "", [], function(tx, rs) {
			window.alert("表删除成功！");
		}, function(tx, error) {
			window.alert(error.source + "::" + error.message);
		});
	})
}

