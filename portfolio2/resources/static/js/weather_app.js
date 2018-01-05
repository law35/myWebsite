var AppID = "2ccd31780465f06ed2dce6a1c4c5f3d0"; /*Put Api Key in different file before launch!*/
var temp;
var loc;
var humidity;
var wind;
var direction;
var icon;


function updateByZip(zip){
	var url = "http://api.openweathermap.org/data/2.5/weather?" +
		"zip=" + zip +
		"&AppID=" + AppID;
	sendRequest(url);
}

function update_by_geo(lat, lon){
	var url = "http://api.openweathermap.org/data/2.5/weather?" +
		"lat=" + lat +
		"&lon=" + lon +
		"&AppID=" + AppID;
	sendRequest(url);
}


function degrees_to_direction(degrees){
	var range = 360/16;
	var low = 360 - range/2;
	var high = (low + range) % 360;
	var angles =["N", "NNE", "ENE", "E", "ESE", "SE", 
		"SSE", "S", "SSW", "SW", "WSW", "W","WNW", "NW",
		"NNW"
		];
	for(i in angles){
		if (degrees >= low && degrees < high)
			return angles[i];
		
		low = (low + range) % 360;
		high = (high + range)% 360;
	}
	return "N";
}


function kel_to_cel(kel){
	return Math.round(kel - 273.15);
}

function kel_to_fah(kel){
	return Math.round(kel*(9/5) - 459.67);
}


function sendRequest(url){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var data = JSON.parse(xmlhttp.responseText);
			var weather = {};
			icon = ("<img src='http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png'>");
			//weather.iconcode = data.weather[0].icon;//
			weather.humidity = data.main.humidity;
			weather.wind = data.wind.speed;
			weather.direction = degrees_to_direction(data.wind.deg);
			weather.loc = data.name;
			weather.temp = kel_to_fah(data.main.temp);
			update(weather);
			console.log(weather.iconcode);
			console.log(icon);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}


function update(weather){
	temp.innerHTML = weather.temp;
	loc.innerHTML = weather.loc;
	humidity.innerHTML = weather.humidity;
	wind.innerHTML = weather.wind;
	direction.innerHTML = weather.direction;
	icon.src = "img/w/" + icon + ".png";//
	console.log(icon.src);
}


function show_position(position){
	update_by_geo(position.coords.latitude, positon.coords.longitude);
}

window.onload = function(){
	temp = document.getElementById("temperature");
	loc = document.getElementById("location");
	humidity = document.getElementById("humidity");
	wind = document.getElementById("wind");
	direction = document.getElementById("direction");
	icon = document.getElementById("icon");
	
	if(!navigator.geolocation){
		navigator.geolocation.getCurrentPosition(show_position);
		
	}else{
		var zip = window.prompt("If you would like to get the current weather in your location, please enter your zip code>>");
		updateByZip(zip);
	}
}