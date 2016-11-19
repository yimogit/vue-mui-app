export default {
	ApiDomain: 'http://api.yimo.link',
    GetApiAddressByArtType(pageType) {
          var url = '';
          if(pageType == 'index') {
            url = '/api/ObtainData/GetSetting';
          } else {
            var pageApiName = pageType == 'list' ? 'GetList' : 'GetDetail';
            url = "/api/ObtainData/" + pageApiName;
          }
          return this.ApiDomain + url;
    },
    SendRequest(url, data, successCallback, other, type) {
        var other = other || {};
        var def = {
          data: data,
          dataType: other.dataType || 'json', //服务器返回json格式数据
          type: type || 'get', //HTTP请求类型
          timeout: other.timeout || 10000, //超时时间设置为10秒；
          //headers:other.headers||{'Content-Type':'application/json'},	              
          success: function(resp) {
            successCallback(resp);
          },
          error: function(xhr, type, errorThrown) {
            mui.toast('服务器异常') //异常处理
          }
        }
        if(Object.assign) {
          var obj = Object.assign(def, other);
          mui.ajax(url, obj);
        } else {
          mui.ajax(url, def);
        }
    }
}