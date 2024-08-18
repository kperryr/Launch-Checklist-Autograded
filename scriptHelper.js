// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionTarget = document.getElementById("missionTarget");
    let planetInfo = `<h2>Mission Destination</h2>
                        <ol>
                            <li>Name: ${name}</li>
                            <li>Diameter: ${diameter}</li>
                            <li>Star: ${star}</li>
                            <li>Distance from Earth: ${distance}</li>
                            <li>Number of Moons: ${moons}</li>
                        </ol>
                        <img src="${imageUrl}">`;

    missionTarget.innerHTML = planetInfo;
    
 }
 
 function validateInput(testInput) {
    if(isNaN(testInput)){
        return "Not a Number";
    }else if (testInput.length === 0 || /^\s+$/.test(testInput) ){
        return "Empty";
    }else{
        return "Is a Number";
    }
 }
 
 function formSubmission(document,list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let coPilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    flag=[true,true,true,true];


    if (validateInput(pilot) === "Not a Number"){
        pilotStatus.innerHTML= ` Pilot ${pilot} is ready for launch`;  
         
    }else{
        pilotStatus.innerHTML = `Pilot is not Ready`;
        alert('Pilot Name is not Valid');
        flag[2]=false;
        
        
    }


    if (validateInput(copilot) === "Not a Number"){
        coPilotStatus.innerHTML= ` Co-pilot ${copilot} is ready for launch`;  
         
    }else{
        coPilotStatus.innerHTML = `CoPilot is not Ready`;
        alert('Co-pilot Name is not Valid');
        flag[3]=false;
        
        
    }

    if (flag[2] === false || flag[3] === false){
        return;

    }

    
    if(validateInput(fuelLevel) === "Is a Number"){
        if (parseInt(fuelLevel) >= 10000){
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            
            flag[0] = true;
        }else{
            fuelStatus.innerHTML = `Fuel level too low for launch`;
          
            flag[0] = false;

        }
    }else{
        alert('Fuel Level is not Valid');
        return;

    }

    
    if(validateInput(cargoLevel) === "Is a Number"){
        if (parseInt(cargoLevel) <= 10000){
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            flag[1] = true;
            
        }else{
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            flag[1] = false;
        }
    }else{
        alert('Cargo Mass is not Valid');
        return;

    }


    if (flag[0] === false || flag[1] === false){
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        list.style.visibility = "visible";
    }else{
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        list.style.visibility = "visible";

    }
 }


 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
 
     return planetsReturned;

 }
 


 function pickPlanet(planets) {
    let len = planets.length;
    let randomIndex = Math.floor( Math.random()*len);
    return planets[randomIndex];
 }
 


 

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch; 