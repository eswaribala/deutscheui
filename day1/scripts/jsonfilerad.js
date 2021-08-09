var fs=require('fs');

fs.readFile("users.json",function(err,data){
    if(err){
        console.log("Error Occurred",err);
    }
    else
    {
        //string to object conversion
      jsonObject=JSON.parse(data);
       // console.log(jsonObject["users"]);
       userData=jsonObject["users"];
        userData.forEach(user=>{
            console.log(user["name"],user["email"]);
        })
    }
})
