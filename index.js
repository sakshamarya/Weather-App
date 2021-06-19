

document.getElementById("subBtn").addEventListener("click", myFunction);

function myFunction(){
    var x=document.getElementById("ipField").value;
    // alert(x);

    var str='https://api.openweathermap.org/data/2.5/weather?q='+ x +'&appid=1c1ecdf3638df6f5bf4ba1260e8234fa&units=metric#';

    
    function show_image(src, width, height, alt) {
        var img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;
    
        // This next line will just add it to the <body> tag
        document.getElementById("output").appendChild(img);
    }


    $.getJSON(str,function(data){
        console.log("Inside the function");
        var temp=data.main.temp;
        var lon=data.coord.lon;
        var lat=data.coord.lat;
        var loc=data.name;
        var mint=data.main.temp_min;
        var maxt=data.main.temp_max;
        var hum=data.main.humidity;
        var ico=data.weather[0].icon;

        var url="http://openweathermap.org/img/wn/"+ ico +"@2x.png";

        show_image(url, 200,100, "Weather Icon");

        document.getElementById("loc").innerHTML = "Your location is " + loc + ".";
        document.getElementById("pos").innerHTML = "Your location is at longitude " + lon +" and latitude " + lat +".";
        document.getElementById("temp").innerHTML = "Temperature: "+temp+ ".";
        document.getElementById("minTemp").innerHTML = "Min Temperature: "+mint+".";
        document.getElementById("maxTemp").innerHTML = "Max Temperature: "+maxt+".";
        document.getElementById("hum").innerHTML = "Humidity: "+hum+".";

    });

    
   
};

