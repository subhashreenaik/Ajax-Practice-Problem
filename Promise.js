let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function makePromiseCall(methodType,url,async=true,data=null){
    return new Promise(function(resolve,reject){
     let xhr = new XMLHttpRequest();
     xhr.onreadystatechange=function(){
         console.log("State changed Called.Ready State :"+xhr.readyState+"Status:"+xhr.status);
         if(xhr.status.toString().match('[2][0-9]{2}')){
             resolve(xhr.responseText);
         }else if(xhr.status.toString().match('[4,5][0-9]{2}')){
             reject({
                 status : xhr.status,
                 statusText:xhr.statusText
             });
             console.log("XHR Failed");
         }
     }   
     xhr.open(methodType,url,async);
     if(data){
         console.log(JSON.stringify(data));
         xhr.setRequestHeader("content-type","application/json");
         xhr.send(JSON.stringify(data));
     }else xhr.send();
     console.log(methodType+"request sent to the server");
    });
}
const getURL = "http://127.0.0.1:5500/home.html";
makePromiseCall("GET",getURL,true).then(responseText =>{
    console.log("Get user data:"+responseText)
}).catch(error => console.log("Get error status :"+JSON.stringify(error)));