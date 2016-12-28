import legoWaitng from '../lego-lib/lego-waiting/0.0.1/legoWaiting.min.js';
import showPop from '../lego-lib/show-pop/0.1.3/showPop.min.js';
export default {
	waiting: new legoWaitng("图片上传中..", "extraClass"),
	USER_AGENT : navigator.userAgent,
	//apiHost : 'http://baidutest.me.yy.com:8081',
	apiHost : navigator.userAgent.toLowerCase().indexOf('environment/online') > 0 ? 'https://me.yy.com' : 'http://test.me.yy.com',
	Orientation: null,
	ajaxFun: function(url, requestData){
		var apiHost = url.indexOf('http') >= 0 ? '' : this.apiHost;
		requestData['auth'] = 'no2';
		return $.ajax({
			url: apiHost + url,
			type: 'get',
			dataType: 'jsonp',
			timeout: 8000,
			data: requestData
		})
	},
	ajaxPost: function(url, requestData){
		var apiHost = this.apiHost;
		return $.ajax({
			url: apiHost + url,
			type: 'post',
			data: requestData
		})
	},
	ajaxFile: function(url, requestData){
		var apiHost = this.apiHost;
		return $.ajax({
			url: apiHost + url,
			type: 'post',
			contentType: false,
			processData: false,
			cache: false,
			data: requestData
		})
	},
	getURLParam: function (name, url) {
        var re = new RegExp("[\\?&#]" + name + "=([^&#]+)", "gi");
        var ma = (url || location.href).match(re);
        var strArr;
        if (ma && ma.length > 0) {
            strArr = (ma[ma.length - 1]);
            var _index = strArr.indexOf("=");
            return strArr.substring(_index + 1);
        }
        return '';
    },
	setCookie: function(c_name,value,expiredays){
		var exdate=new Date()
		exdate.setDate(exdate.getDate()+expiredays)
		document.cookie=c_name+ "=" +escape(value)+
		((expiredays==null) ? "" : ";domain=.yy.com;path=/;expires="+exdate.toGMTString())
	},
}