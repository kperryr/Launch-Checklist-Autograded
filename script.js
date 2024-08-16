// Write your JavaScript code here!
const helper = require('./scriptHelper');
console.log("hello");//testing error issue

window.addEventListener("load", function() {
    

    let buttonpmn = document.getElementById('formSubmit');
    let form = document.querySelectorAll('testForm');
    let faultyList = document.getElementById("faultyItems");
    let pilotName = document.getElementById("pilotName");

    button.addEventListener("submit", function(){
        helper.formSubmission(form,faultyList,pilotName,0,0,0);
    })
    



    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });