
// ½ûÖ¹°´F12µ÷ÊÔ
document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if (e && e.keyCode == 123) {
		mAlert();
		e.returnValue = false;
		return (false);
	}
}
function mAlert() {
	alert("haha");
}

// ·ÀÖ¹Êó±êÓÒ¼üä¯ÀÀÆ÷¡®¼ì²é¡¯²Ù×÷
setInterval(function () {
	debugger;
}, 100)

// ½ûÖ¹ÓÒ¼ü
document.oncontextmenu = function () { return false; };

