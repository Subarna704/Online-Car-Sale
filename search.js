// script.js
const cars = [
  { model: "Toyota Camry", location: "Sydney CBD", image: "images/toyota.jpg" },
  { model: "Honda Civic", location: "Bondi Beach", image: "images/car3.jpg" },
  { model: "Ford Mustang", location: "Darling Harbour", image: "images/car4.jpg" },
  { model: "Toyota Camry", location: "Circular Quay", image: "images/car5.jpg" },
  { model: "BMW 3 Series", location: "Manly Beach", image: "images/car6.jpg" },
  { model: "Audi A4", location: "The Rocks", image: "images/car7.jpg" },
  { model: "Toyota Camry", location: "Sydney Olympic Park", image: "images/car8.jpg" },
  { model: "Chevrolet Silverado", location: "Bondi Junction", image: "images/car9.jpg" },
  { model: "Subaru Outback", location: "Parramatta", image: "images/car10.jpg" },
  { model: "Jeep Wrangler", location: "Chatswood", image: "images/car11.jpg" },
  { model: "Ford Mustang", location: "Bondi Beach", image: "images/car12.jpg" },
  { model: "Tesla Model S", location: "Darling Harbour", image: "images/car13.jpg" },
  { model: "Mercedes-Benz C-Class", location: "Circular Quay", image: "images/car14.jpg" },
  { model: "Toyota Camry", location: "The Rocks", image: "images/car15.jpg" },
  { model: "Volkswagen Golf", location: "Coogee Beach", image: "images/car16.jpg" },
  { model: "Nissan Altima", location: "Surry Hills", image: "images/car17.jpg" },
  { model: "Mazda CX-5", location: "North Sydney", image: "images/car18.jpg" },
  { model: "Hyundai Sonata", location: "Bondi Junction", image: "images/car19.jpg" },
  { model: "Kia Sportage", location: "Manly Beach", image: "images/car20.jpg" }
  ];
  
  function setHeaderText() {
    const headerText = document.getElementById("headerInput").value;
    document.getElementById("headerText").innerText = headerText;
  }
  
  function searchCars() {
    const model = document.getElementById("modelInput").value.toLowerCase();
    const location = document.getElementById("locationInput").value.toLowerCase();
    
    const filteredCars = cars.filter(car => car.model.toLowerCase().includes(model) && car.location.toLowerCase().includes(location));
    
    displayCars(filteredCars);
  }
  
  function displayCars(cars) {
    const carListContainer = document.getElementById("carList");
    carListContainer.innerHTML = "";
    
    if (cars.length === 0) {
      carListContainer.innerHTML = "<p>No cars found.</p>";
      return;
    }
    
    cars.forEach(car => {
      const li = document.createElement("div");
      li.classList.add("car-item");
      const img = document.createElement("img");
      img.classList.add("car-img");
      img.src = car.image;
      img.alt = car.model;
      li.appendChild(img);
      const info = document.createElement("div");
      info.classList.add("car-info");
      info.textContent = `${car.model} - Location: ${car.location}`;
      li.appendChild(info);
      carListContainer.appendChild(li);
    });
  }
  
  // Display all cars initially
  displayCars(cars);
  