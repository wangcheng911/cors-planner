var page=require("webpage").create(),fs=require("fs"),sys=require("system");page.onConsoleMessage=function(e){console.log(e)},console.log("\n************* CORS PLANNER **************"),console.log("*** Crawl CORS Module Code and Titles ***"),console.log("*****************************************\n");var url="https://myaces.nus.edu.sg/cors/jsp/report/ModuleInfoListing.jsp",output="list.js",update=!0,global="../info.js";if(sys.args.length>1)for(var i=1;i<sys.args.length;i++)sys.args[i]==="-o"?output=sys.args[i+1]+".js":sys.args[i]==="-n"&&(update=!1);var timeStart=new Date;page.open(encodeURI(url),function(e){function r(e,t){console.log("===> Output to file ["+e+"]"),fs.write(e,"define(function(){return "+JSON.stringify(t)+"});","w"),console.log("===> Output Completed")}function i(e,t){console.log("===> Update global Info ["+e+"]");var n=fs.open(e,"rw"),r=n.read();r=r.replace(/lastUpdate\s*:\s*(\".*\")/,'lastUpdate: "'+new Date+'"'),r=r.replace(/modules\s*:\s*(\d*)/,"modules: "+t),n.write(r),n.flush(),n.close(),console.log("===> Update Completed")}if(e!=="success")console.log("===! Unable to access network\n");else{console.log("===> Page Loaded");var t=page.evaluate(function(){var e,t,n,r,i,s=[];n=document.getElementsByClassName("tableframe")[0],r=n.getElementsByTagName("tr");for(e=1,t=r.length;e<t;e++)i=r[e].getElementsByTagName("td"),s.push(i[1].textContent.trim()+" "+i[2].textContent.trim());return console.log("===> Found "+s.length+" Modules"),s});r(output,t),update&&i(global,t.length);var n=new Date-timeStart;console.log("Spent "+(n/1e3).toFixed(2)+"s")}phantom.exit()});