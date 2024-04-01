// Add event listener to play button
document.querySelector('.play-button').addEventListener('click', function(event) {
    event.preventDefault();
    loadYouTubeVideo(); // Function to load YouTube video
    this.style.display = 'none'; // Hide the play button
});

// Function to load YouTube video
function loadYouTubeVideo() {
    // Create an iframe for the YouTube video
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/fCw_GL_-_DY'); // Replace 'your_video_id' with your YouTube video ID
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');

    // Append the iframe to the player container
    document.getElementById('player-container').appendChild(iframe);
}

// For the gallery page
