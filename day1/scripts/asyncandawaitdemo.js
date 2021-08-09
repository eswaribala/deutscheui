promiseModule=require('promise');

(async ()=> {
    let promise=new promiseModule((resolve,reject)=>{
        setTimeout(()=>resolve("done"),3000);
    })
    console.log("Async call happening..");
    let result= await promise;
    console.log(result);

})();
console.log("Async call completed..");
