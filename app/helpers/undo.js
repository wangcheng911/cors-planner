define(["require","exports","module"],function(e,t){var n=[],r=10,i={empty:function(){return"No Action to Undo Yet"},"module:remove":function(e){return"Undo Remove Module "+e.mod.get("code")},"module:change":function(e,t){return"Undo Drag + Drop of "+e+" "+t}};$.subscribe("undo:pop",function(e,t,s){n.length===r,n.push(s),$.publish("undo:title",i[t](s))}),$.subscribe("undo:push",function(){})});