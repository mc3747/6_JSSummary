var CookieUtil = {
	
	// get可根据cookie的名字获取相应的值
	get: function() {
		const cookieName = encodeURIcOMPONET(name) + "=",
			   cookieStart = document.cookie.indexOf(cookieName),
			   cookieValue = null
		if(cookieStart > -1) {
			const cookieEnd = document.cookie.indexOf(";", cookieStart)
			if(cookieEnd == -1) {
				cookieEnd = document.cookie.length
			}
			cookieValue = decodeURICompoent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd))	
		}
		return cookieValue
	},
	
	// set设置一个cookie
	set: function(name, value, expires, path, domain, secure) {
		// var cookieText = encodeURIComponet(name)+"="+encodeURIComponet(value)
		var cookieText = name + "=" + value;
		if(expires instanceof Date) {
			cookieText += "; expires=" + expires.toGMTString()
		}
		if(path) {
			cookieText += ";path=" + path
		}
		if(domain) {
			cookieText += "; domain" + domain
		}
		if(secure) {
			cookieText += "; secure"
		}
		document.cookie = cookieText
	},
	
	// 删除已有的cookie
	unset: function(name, path, domain, secure) {
		this.set(name, "", new Date(0), path, domain, secure)
	}
}
