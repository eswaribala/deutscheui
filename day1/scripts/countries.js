window.addEventListener('load',function(){

    var ajaxRequest;
    try
    {
        ajaxRequest=new XMLHttpRequest();

    }
    catch (e) {

        try {
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP3.0");
        } catch (e) {
            console.log("Browser not supporting ajax");
        }
    }

    ajaxRequest.open("GET","https://restcountries.eu/rest/v2/all",true);

    ajaxRequest.send(null);
    ajaxRequest.onreadystatechange=function(){

        if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){

            console.log(ajaxRequest.responseText);
        }
    }




})
