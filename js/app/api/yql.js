define(["require","exports","module","util/helper"],function(require,exports){function getCORSurl(module){return"https://aces01.nus.edu.sg/cors/jsp/report/ModuleDetailedInfo.jsp?acad_y="+module.acadYear+"&sem_c="+module.semester+"&mod_c="+module.modCode.toUpperCase()}function getYQLurl(query){return"http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent(query)+"&format=json&callback="}function getCallback(query,callback){return function(result){result.url=query,callback(result)}}var helper=require("util/helper"),defaults=$.extend({},{modCode:"ACC1002"},helper.getSemester());exports.request=function(query,callback){$.getJSON(getYQLurl(query),getCallback(query,callback))},exports.requestModule=function(module,callback){typeof module=="string"&&(module={modCode:module});var mod=$.extend({},defaults,module),cors=getCORSurl(mod),query="select * from html where url='"+cors+"' and xpath='//table'";$.getJSON(getYQLurl(query),getCallback(cors,callback))}})