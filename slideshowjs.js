// Last Major Updates: March 2024 by Andy Kowles
// javascript for a simple slide show webpage/UI for Jesse Barden's memorial.
// The cool thing about this code is it's independent from the content itself.
// Feel free to reuse this code.

function openSlideshow() {
    // URL of the slideshow page
    var slideshowUrl = 'slideshow.html';

    // Open a new tab with the slideshow
    window.open(slideshowUrl, '_blank');
}

// Function to display images sequentially
function sequentialSlideshow() {
    let index = 0;

    function displayNextImage() {
        const images = document.querySelectorAll('.clickable-image');
        images.forEach(img => img.style.display = 'none');
        images[index].style.display = 'block';
        index = (index + 1) % images.length;
        setTimeout(displayNextImage, 3000); // Change image every 3 seconds (3000 milliseconds)
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
