var ua = navigator.userAgent.toLowerCase();

// iPhone
var isiPhone = (ua.indexOf('iphone') > -1);
// iPad
var isiPad = (ua.indexOf('ipad') > -1);
// Android
var isAndroid = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1);
// Android Tablet
var isAndroidTablet = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') == -1);


// 使用例
if (isiPhone) {
    alert('iPhone');
}
if (isiPad) {
    alert('iPad');
}
if (isAndroid) {
    alert('Android');
}
if (isAndroidTablet) {
    alert('Android Tablet');
}