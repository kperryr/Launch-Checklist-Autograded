// Write your JavaScript code here!

window.addEventListener("load", function() {
    

    //let button  = document.getElementById('formSubmit');
    //let form = document.querySelectorAll('testForm');
    let form = document.getElementsByTagName("form");
    //let doc = document.getElementById;
    let faultyList = document.getElementById("faultyItems");
    let pilotName = document.querySelector("input[name=pilotName]");
    let coPilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    


    console.log(pilotName);



    for (let i = 0; i<form.length; i++){
        form[i].addEventListener("submit", function(event){
            if ((!(pilotName.value&&coPilotName.value&&fuelLevel.value&&cargoMass.value))){
                alert(" All Fields Required.");

            }else{

                let ready = formSubmission(document,faultyList,pilotName.value,coPilotName.value,fuelLevel.value,cargoMass.value);
                    event.preventDefault();

            }
        });
    }
    



    /* let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    }) */
    
 });
 