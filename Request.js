
function makeAJAXCall(methodType, url, callback){
    var XMLHttpRequest = require('xhr2');
       var xhr = new XMLHttpRequest();
      xhr.open(methodType, url, true);
      xhr.onreadystatechange = function(){
           if (xhr.readyState === 4 && xhr.state === 200){
               callback(xhr.response);
           }
       }
         xhr.send();
      console.log("request sent to the server");
     }
     makeAJAXCall('GET', 'https://api.github.com/users',true);
