define(["require","exports","module","util/store"],function(e,t){var n=e("util/store"),r=["key","user","status"];(function(){var t=Function,i=(new t("return this"))();i.planner||(i.planner={}),planner.version="0.7.4",planner.school=n.get("app:school")||null,planner.list={modules:"modules",previews:"previews"},planner.weekDays=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"],planner.slotPopover=n.get("app:slotPopover")||!0,planner.slotType=n.get("app:slotType")||"location",planner.get=function(e){return this[e]},planner.set=function(e,t){$.inArray(e,r)===-1&&(this[e]=t,n.set("app:"+e,t),$.publish("app:"+e,[t]))},planner.analytics=function(){i._gaq&&i._gaq.push($.makeArray(arguments))},planner.trackEvent=function(e,t){planner.analytics("_trackEvent",e,t)},planner.trackPageView=function(e,t){planner.analytics("_trackPageview",t?t+"="+e:e)}})()});