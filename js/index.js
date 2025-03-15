document.addEventListener("DOMContentLoaded", () => {
    main();
});

const ramens = [
    { name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 10, comment: "Delicious!" },
    { name: "Nirvana Ramen", restaurant: "Menya", image: "images/nirvana.jpg", rating: 9, comment: "Very flavorful!" },
    { name: "Naruto Ramen", restaurant: "Ramen-ya", image: "images/naruto.jpg", rating: 8, comment: "Rich broth!" },
    { name: "Kojiro Ramen", restaurant: "Ueno", image: "images/kojiro.jpg", rating: 7, comment: "Amazing!" },
    { name: "Gyukotsu Ramen", restaurant: "Gyopao", image: "images/gyukotsu.jpg", rating: 6, comment: "Fantastic!" },
];

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });

    // Show the first ramen by default
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}

function handleClick(ramen) {
    document.getElementById("detail-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

function addSubmitListener() {
    document.getElementById("new-ramen").addEventListener("submit", (event) => {
        event.preventDefault();

        const newRamen = {
            name: document.getElementById("new-name").value,
            restaurant: document.getElementById("new-restaurant").value,
            image: document.getElementById("new-image").value,
            rating: document.getElementById("new-rating").value,
            comment: document.getElementById("new-comment").value
        };

        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener("click", () => handleClick(newRamen));

        document.getElementById("ramen-menu").appendChild(img);

        // Clear form
        event.target.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}
