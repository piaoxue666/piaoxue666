
// 禁止按F12调试
document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if (e && e.keyCode == 123) {
		iziToast.show({
			timeout: 2000,
			icon: "fa-solid fa-circle-exclamation",
			message: '为了浏览体验，本站禁用F12'
    	});
		e.returnValue = false;
		return (false);
	}
}

