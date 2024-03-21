// Array containing URLs of images
const images = [
    "IMG_9927.jpg",
    "IMG_9917.jpg",
    "98192170-D387-45D9-8976-AD1F1F07488A.JPG"
    // Add more image URLs as needed
];

// Function to display images sequentially
function sequentialSlideshow() {
    let index = 0;

    function displayNextImage() {
        document.querySelectorAll('#slideshow img').forEach(img => img.style.display = 'none');
        document.getElementById('image' + index).style.display = 'block';
        index = (index + 1) % images.length;
        setTimeout(displayNextImage, 2000); // Change image every 2 seconds (2000 milliseconds)
    }

    displayNextImage();
}

// Function to display images randomly
function randomSlideshow() {
    function displayRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        document.querySelectorAll('#slideshow img').forEach(img => img.style.display = 'none');
        document.getElementById('image' + randomIndex).style.display = 'block';
        setTimeout(displayRandomImage, 2000); // Change image every 2 seconds (2000 milliseconds)
    }

    displayRandomImage();
}

// Prompt user for slideshow mode
const userInput = prompt("Enter 'random' or 'sequential' for slideshow mode:");
if (userInput === 'random') {
    randomSlideshow();
} else if (userInput === 'sequential') {
    sequentialSlideshow();
} else {
    alert("Invalid input. Please enter 'random' or 'sequential'.");
}
