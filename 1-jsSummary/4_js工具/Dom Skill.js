//1，自适应页面：页面基于一张设计图但需做多款机型自适应，元素尺寸使用rem进行设置

function AutoResponse(width = 750) {
	const target = document.documentElement;
	target.clientWidth >= 600
		? (target.style.fontSize = "80px")
		: (target.style.fontSize = target.clientWidth / width * 100 + "px");
}

//2，过滤XSS
function FilterXss(content) {
	let elem = document.createElement("div");
	elem.innerText = content;
	const result = elem.innerHTML;
	elem = null;
	return result;
}

//3，存取LocalStorage：反序列化取，序列化存
const love = JSON.parse(localStorage.getItem("love"));
localStorage.setItem("love", JSON.stringify("I Love You"));

