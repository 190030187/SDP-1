!function($){$.jfPopUp=function(t,n){function s(t){t.preventDefault(),i.launch()}function e(){$(".mb_closeBtn, .mb_shade").bind("click",i.close),i.settings.onComplete.apply(i,i.settings.onCompleteArgs)}var i=this,o=$(t),a,p,c,m=o.data(),d=!1,l={loadElement:"body",message:"Hello :)",auto:!1,mouseEvent:"none",animationFrom:{opacity:"0","margin-top":"100px"},animationTo:{opacity:"1","margin-top":"0px"},pause:0,speed:250,ease:"swing",onStart:function(){},onStartArgs:[],onComplete:function(){},onCompleteArgs:[],onClosed:function(){},onClosedArgs:[]};i.settings={},i.init=function(){i.settings=$.extend({},l,n,m),a=$(i.settings.loadElement),"none"!==i.settings.mouseEvent&&o.bind(i.settings.mouseEvent,s)},i.close=function(){c.animate(i.settings.animationFrom,i.settings.speed,i.settings.ease,function(){p.animate({opacity:".85"},i.settings.speed,"",function(){$(".mb_closeBtn, .mb_shade").unbind("click"),p.remove(),i.settings.onClosed.apply(i,i.settings.onClosedArgs),d=!1})})},i.destroy=function(){d&&i.close(),o.removeData("jfPopUp",i),i=null},i.launch=function(){d=!0,i.settings.onStart.apply(i,i.settings.onStartArgs);var t=[];t.push('<div class="mb_messagebox">'),t.push('<div class="mb_shade"></div>'),t.push('<div class="mb_window">'),t.push('<div class="mb_content">'+i.settings.message+"</div>"),t.push('<div class="mb_closeBtn"></div>'),t.push("</div></div>");var n="";$(t).each(function(t,s){n+=s}),a.prepend(n),p=$(".mb_messagebox"),c=$(".mb_window"),$(".mb_shade").css({opacity:"0"}).animate({opacity:"1"},i.settings.speed),c.css(i.settings.animationFrom),c.delay(i.settings.pause).animate(i.settings.animationTo,i.settings.speed,i.settings.ease,e)},i.init(),i.settings.auto&&i.launch()},$.fn.jfPopUp=function(t){return this.each(function(){if(void 0===$(this).data("jfPopUp")){var n=new $.jfPopUp(this,t);$(this).data("jfPopUp",n)}})}}(jQuery);