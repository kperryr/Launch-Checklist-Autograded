// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
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
    flag=[true,true];


    if (validateInput(pilot) === "Not a Number"){
        pilotStatus.innerHTML= ` Pilot ${pilot} is ready for launch`;  
         
    }else{
        pilotStatus.innerHTML = `Pilot is not Ready`;
        alert('Pilot Name is not Valid');
        
    }


    if (validateInput(copilot) === "Not a Number"){
        coPilotStatus.innerHTML= ` CoPilot ${copilot} is ready for launch`;  
         
    }else{
        coPilotStatus.innerHTML = `CoPilot is not Ready`;
        alert('CoPilot Name is not Valid');
        
    }

    
    if(validateInput(fuelLevel) === "Is a Number"){
        if (parseInt(fuelLevel) > 10000){
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            list.style.visibility = "visible";
            flag[0] = true;
        }else{
            fuelStatus.innerHTML = `Fuel level too low for launch"`;
            list.style.visibility = "visible";
            flag[0] = false;

        }
    }else{
        alert('Fuel Level is not Valid');

    }

    
    if(validateInput(cargoLevel) === "Is a Number"){
        if (parseInt(cargoLevel) <= 10000){
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            list.style.visibility = "visible";
            flag[1] = true;
            
        }else{
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            list.style.visibility = "visible";
            flag[1] = false;
        }
    }else{
        alert('Cargo Mass is not Valid');

    }


    if (flag[0] === false || flag[1] === false){
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
    }else{
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is Ready for Launch"

    }



   
   
     
    
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 


 

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch; 