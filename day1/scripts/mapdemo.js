var accounts=new Map();

for(let i=0;i<10;i++){
    accounts.set(Math.random().toFixed(7)*100000000,
        Math.random().toFixed(7)*100000000);
}

for(var [key,value] of accounts.entries() ){
    console.log(key,value);
}
