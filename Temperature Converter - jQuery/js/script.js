$(document).ready(function() { 
    $( "#myForm" ).submit(function( event ) {
        event.preventDefault();

        const temperature = parseFloat($( "#temperature" ).val());
        const from = $( "#list-from" ).val();
        const to = $( "#list-to" ).val();
        let result = "";

        console.log("temperature: " + temperature);
        console.log("from: " + from + " || to: " + to);

        if(from === "C" && to === "C") {
            result = temperature;
        } else  if(from === "C" && to === "F") {
            result = (temperature * 1.8) + 32;
        } else if (from === "C" && to === "K") {
            result = temperature + 273.15;
        } else if (from === "F" && to === "C") {
            result = (temperature - 32) / 1.8;
        } else if (from === "F" && to === "F") {
            result = temperature;
        } else if (from === "F" && to === "K") {
            result = (temperature + 459.67) * (5 / 9);
        } else if (from === "K" && to === "C") {
            result = temperature - 273.15;
        } else if (from === "K" && to === "F") {
            result = (temperature * (5 / 9)) - 459.67;
        } else if (from === "K" && to === "K") {
            result = temperature;
        }
    
        if(result === "") {
            $("#result-from").html(temperature + "°" + from + "=");
            $("#result-to").html(temperature + "°" + to);
        } else {
            $("#result-from").html(temperature + "°" + from + "=");
            $("#result-to").html(result.toFixed(2) + "°" + to);
        }
    });
}); 
