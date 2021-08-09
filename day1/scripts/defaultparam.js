//default params
//accessing function before declaration
var testFn1=receiveData(1,"Parameswari");
var testFn2=receiveData(2,"Eswari","USA");

//function declaration are hoisted
function receiveData(employeeId,name,country="India"){
    console.log("Employee Id=",employeeId);
    console.log("Employee Name=",name);
    console.log("Country=",country);
}

//rest params
function employeeData(employeeId, ...skillSet){
    console.log("Employee Id",employeeId);
    console.log("Skill Set....");
    skillSet.forEach(skill=>{
        console.log(skill);
    })
}

employeeData(1,"Java");

employeeData(2,"Java","JS");

employeeData(3,"Java","JS","Python");

employeeData(4);

//function Expression defined
var customer=function(name,dob) //anonymous
{
    console.log("name=",name);
    console.log("DOB",dob);
};

customer("Ashok",new Date(88,3,2));

//Immediate invocation of function expression

var customer=function(name,dob) //anonymous
{
    console.log("name=",name);
    console.log("DOB",dob);
}("Nithya",new Date(80,2,1));


//scope test
var data=8743585487;
function testLocalData(){
    var data=1234734274;
    console.log(data)
}
function testGlobalData(){
   // var data=1234734274;
    console.log(data)
}
testLocalData()
testGlobalData();

//variable hoisting

var x=788; //assign value
console.log(x); //use x
var x; //declare variable

//scope is limited block {}
for(let i=0;i<100;i++){
    console.log(Math.random().toFixed(3));
}

const roi=0.5
console.log(roi);
//roi=roi/3;
console.log(2<<4)
console.log(-2>>3)

//conditional statements
randData=Math.random().toFixed(3)*1000;
if(randData>500)
    console.log("Amount transferable");
else
    console.log("Amount is low, unnecessary charges will be levied");
