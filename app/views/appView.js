define(["require","exports","module","view/schoolView","view/addModuleView","view/basketView","view/detailView","view/messageView","view/shareView","view/plannerView"],function(e,t){function f(){$("#nav").tooltip({placement:"bottom",selector:"a[rel=tooltip]"}),$("#misc-btns").tooltip({placement:"bottom",selector:"a[rel=tooltip]"}),$("#footer").tooltip({placement:"top",selector:"a[rel=tooltip]"}),$("#version").text(planner.version),$("#planner").css("min-height",$("#primary").height()),$(window).bind("resize",function(e){var t=$(this).height(),n=$("#primary").height(),r=t>n?t:n;$("#sidebar").height(r-20);var i=$("h1").first().height(),s=$("#metro-pivot").find(".pivotItem");s.height(r-i-138),s.find(".info").width(s.width()-43),$.publish("app:window:resize",[t,$(this).width()])}).trigger("resize"),$("#fullsize").on("click",function(){var e=!1;return function(){$.publish("app:fullsize",e=!e)}}()),$(".share-btn").on("click",function(e){if(!e)return;e.preventDefault(),window.open(e.target.href,"intent","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left="+(window.screen?Math.round(screen.width/2-275):50)+",top="+100)})}var n=e("view/schoolView"),r=e("view/addModuleView"),i=e("view/basketView"),s=e("view/detailView"),o=e("view/messageView"),u=e("view/shareView"),a=e("view/plannerView");t.init=function(){u.init(),n.init(),r.init(),a.init(),i.init(),s.init(),o.init(),f()},$.subscribe("app:fullsize",function(e,t){var n=$("#primary"),r=$("#secondary");t?(r.hide(),n.removeClass("span26").addClass("offset1 span32")):(r.show(),n.removeClass("offset1 span32").addClass("span26")),$(window).resize()})});