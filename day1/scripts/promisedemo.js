fs=require('fs');
promise=require('promise')

function readJSON(fileName){
    return new promise(function(resolve,reject){
        fs.readFile(fileName,function(err,data){
            if(err){
                reject(err)
                console.log("Error Occurred",err);
            }
            else
            {
                resolve(data)
            }
        })

    })
}

readJSON("users.json").then(function success(data){
    jsonData=JSON.parse(data);
    jsonUsers=jsonData["users"];
    jsonUsers.forEach(u=>{
        console.log(u["name"]);
    })

},function error(err){
    console.log(err);
})
