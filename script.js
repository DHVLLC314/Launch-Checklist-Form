// Write your JavaScript code here!
//  This block of code shows how to format the HTML once you fetch some planetary JSON!

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   console.log(response);
   response.json().then( function(json) {
    const div = document.getElementById("missionTarget")
    console.log(json[0])
   //  console.log(json[3].name)
    div.innerHTML =
`<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[0].name}</li>
   <li>Diameter: ${json[0].diameter}</li>
   <li>Star: ${json[0].star}</li>
   <li>Distance from Earth: ${json[0].distance}</li>
   <li>Number of Moons: ${json[0].moons}</li>
</ol>
<img src="${json[0].image}"></img>`
   });
   });
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         // stop the form submission
        
      }

      if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false){
         alert("Please enter a string value");
       
      }

      if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true){
         alert("Please enter a numerical value");
       
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
        
      } else {
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
         document.getElementById("launchStatus").style.setProperty("color","green")
         document.getElementById("fuelStatus").innerHTML = "Fuel is okay for launch"
         document.getElementById("cargoStatus").innerHTML = "Mass is low enough for launch"
      }
   });
});

