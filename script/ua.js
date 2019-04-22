/* eslint-disable */
// 判断浏览器版本兼容ie 10+ /谷歌49+
var parser = new UAParser()

var uaResult = parser.getResult()
console.log(parser.getResult())
if (uaResult.device.type !== 'mobile') {
  if (uaResult.os.name == 'Mac OS') {
    if (uaResult.browser.name == 'Chrome') {
      if (parseInt(uaResult.browser.major) < 49) {
        window.location.href = './is-mobile.html?os=mac'
      }
    } else {
      // window.location.href = './is-mobile.html?os=mac'
    }
  }

  if (uaResult.os.name == 'Windows') {
    if (uaResult.browser.name == 'Chrome') {
      if (parseInt(uaResult.browser.major) < 49) {
        if (uaResult.os.ua.indexOf('x64')) {
          window.location.href = './is-mobile.html?os=win64'
        } else {
          window.location.href = './is-mobile.html?os=win32'
        }
      }
    } else if (uaResult.browser.name == 'IE'){
      if (parseInt(uaResult.browser.major) < 10){
        if (uaResult.os.ua.indexOf('x64')) {
          window.location.href = './is-mobile.html?os=win64'
        } else {
          window.location.href = './is-mobile.html?os=win32'
        }
      }
    } else {
      // if(uaResult.os.ua.includes('x64')){
      //   window.location.href = './is-mobile.html?os=win64'
      // }else{
      //   window.location.href = './is-mobile.html?os=win32'
      // }
    }

  }

}
