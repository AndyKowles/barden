// Array containing URLs of images


// Function to display images sequentially
function sequentialSlideshow() {
    let index = 0;

    function displayNextImage() {
        const images = document.querySelectorAll('.clickable-image');
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
            const images = document.querySelectorAll('.clickable-image');
            if (images.length > 0) {
                const randomIndex = Math.floor(Math.random() * images.length);
                images.forEach(img => img.style.display = 'none');
                images[randomIndex].style.display = 'block';
            }
            setTimeout(displayRandomImage, 3000); // Change image every 3 seconds (2000 milliseconds)    }
        }
        displayRandomImage();
}

// Function to handle form submission
document.getElementById('slideshowForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const selectedMode = document.getElementById('slideshowMode').value;
    if (selectedMode === 'random') {
        randomSlideshow();
    } else if (selectedMode === 'sequential') {
        sequentialSlideshow();
    } else {
        alert("Invalid input. Please enter 'random' or 'sequential'.");
    }
});
