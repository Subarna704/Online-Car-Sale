// script.js
document.getElementById("addCarForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get form values
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;
    const mileage = document.getElementById("mileage").value;
    const location = document.getElementById("location").value;
    const price = document.getElementById("price").value;
    
    // Create new car object
    const newCar = {
      make: make,
      model: model,
      year: year,
      mileage: mileage,
      location: location,
      price: price
    };
    
    // Log the new car object
    console.log("New Car:", newCar);
    
    // Display success message
    alert("Successfully added car!");
    
    // Display car details on the page
    displayCarDetails(newCar);
    
    // Reset form
    document.getElementById("addCarForm").reset();

  });
 
  
  function displayCarDetails(car) {
    const carDetailsContainer = document.getElementById("carDetailsContainer");
    
    // Create a new div for the car details
    const carDetailsDiv = document.createElement("li");
    carDetailsDiv.classList.add("car-details");
    
    // Populate the car details
    carDetailsDiv.innerHTML = `
      <h2>${car.make} ${car.model}</h2>
      <p>Year: ${car.year}</p>
      <p>Mileage: ${car.mileage}</p>
      <p>Location: ${car.location}</p>
      <p>Price: ${car.price}</p>
      <br>
    `;
    
    // Append the car details to the container
    carDetailsContainer.appendChild(carDetailsDiv);
  }
  // Add event listeners to form inputs for changing background color
const formInputs = document.querySelectorAll("#addCarForm input, #addCarForm select");
formInputs.forEach(input => {
    input.addEventListener("focus", function() {
        this.style.backgroundColor = "yellow";
    });
    input.addEventListener("blur", function() {
        this.style.backgroundColor = "white";
    });
});
  