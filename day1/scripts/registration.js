window.addEventListener('load',function(){
  //alert("Window loading....");
    var form=document.querySelector("#regForm");
    form.addEventListener('submit',function(event){
       event.preventDefault();
       // alert("Entering submit...");
        console.log("Form Submitted");

    },false)

})
