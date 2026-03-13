fetch("https://randomuser.me/api/?results=4")
.then(raw => raw.json())
.then((data)=>{
    data.results.forEach(function(user){
            // Create main div
let card = document.createElement("div");
card.className = "bg-gray-300 shadow-lg rounded-2xl p-6 w-80 text-center";

// Create image
let img = document.createElement("img");
img.className = "w-24 h-24 rounded-full mx-auto border-4 border-blue-500";
img.src = user.picture.large;
img.alt = "User Profile";

// Create name
let name = document.createElement("h2");
name.className = "text-xl font-semibold mt-4";
name.textContent = user.name.first + " " + user.name.last;

// Create email
let email = document.createElement("p");
email.className = "text-gray-500 text-sm";
email.textContent = user.email;

// Append elements
card.appendChild(img);
card.appendChild(name);
card.appendChild(email);

// Add card to body
document.querySelector(".cc").appendChild(card);
        
    });
});





