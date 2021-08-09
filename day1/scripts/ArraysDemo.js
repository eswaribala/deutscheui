var ids=new Array();
for(let i=0;i<100;i++){
    ids.push(i);
}
console.log("Filter demo....");
filteredIds=ids.filter(id=>id<50);
console.log(filteredIds)
/*
console.log("Push elements....")
for(var elem in ids){
    console.log(elem);
}
console.log("Pop elements....")
while(ids.length!=0){
    console.log(ids.pop())
}



console.log("Unshift  elements....")
//unshift

ids=new Array();
for(let i=0;i<100;i++){
    ids.unshift(i);
}
console.log(ids);
*/
