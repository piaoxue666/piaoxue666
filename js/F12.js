
// ��ֹ��F12����
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

// ��ֹ����Ҽ����������顯����
setInterval(function () {
	debugger;
}, 100)

// ��ֹ�Ҽ�
document.oncontextmenu = function () { return false; };

