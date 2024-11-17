let slideIndex = 0;
let autoPlay; // Store the autoplay timer

// Start the slideshow
showSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(autoPlay); // Stop the auto-timer on manual navigation
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
        let video = slides[i].querySelector("video"); // Stop videos
        if (video) {
            video.pause();
            video.currentTime = 0; // Reset video playback
        }
    }

    slides[slideIndex].style.display = "block"; // Show the current slide
    let currentVideo = slides[slideIndex].querySelector("video");
    if (currentVideo) {
        currentVideo.play(); // Play the video
        autoPlay = setTimeout(() => { plusSlides(1); }, (currentVideo.duration * 1000)); // Wait for video duration
    } else {
        autoPlay = setTimeout(() => { plusSlides(1); }, 5000); // Fallback for non-video slides
    }
}

// Optional: Start playback with sound (e.g., user interaction required for autoplay with sound)
document.addEventListener("click", () => {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        let video = slides[i].querySelector("video");
        if (video) {
            video.muted = true; // Enable sound
        }
    }
});
