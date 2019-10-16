// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();
      }

      if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false){
         alert("Please enter a string value");
         event.preventDefault();
      }

      if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true){
         alert("Please enter a numerical value");
         event.preventDefault();
      }

      if (fuelLevel.value < 10000 || cargoMass.value > 10000) {
         document.getElementById("faultyItems").style.setProperty("visibility","visible")
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
         document.getElementById("launchStatus").style.setProperty("color","red")
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is Ready`
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} is Ready`

         if (fuelLevel.value < 10000) {
            document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey"
         }

         if (cargoMass.value > 10000) {
            document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off"
         }
         event.preventDefault();
      } else {
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
         document.getElementById("launchStatus").style.setProperty("color","green")
      }
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
