let currentlyPlaying = null;

function togglePlay(playerId) {
    // Get the clicked player on the page
    let player = document.getElementById(playerId);

    if (player.paused && currentlyPlaying == null) {
        // If the clicked audio is paused and nothing is playing, play it
        player.play();
        currentlyPlaying = player;
    } else if (player.paused && currentlyPlaying !== player) {
        // If the clicked audio is paused and something is playing, stop that and play it
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0
        player.play();
        currentlyPlaying = player;
    } else {
         // If the clicked audio is playing, pause it
        player.pause();
        currentlyPlaying = null;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let audioPlayers = [];
    let volumeSlider = document.getElementById("slider");
    volumeSlider.value = 20;
  
    // Populate the array audioPlayers with all audio elements
    let audioElements = document.getElementsByTagName("audio");
    for (var i = 0; i < audioElements.length; i++) {
        audioPlayers.push(audioElements[i]);
    }

    // Set initial volume for all players
    for (let i = 0; i < audioPlayers.length; i++) {
        audioPlayers[i].volume = volumeSlider.value / 100;
    }
  
    // Change volume function for all players
    function changeVolume() {
        for (let i = 0; i < audioPlayers.length; i++) {
            audioPlayers[i].volume = volumeSlider.value / 100;
        }
    }
  
    // Add event listener to volume slider
    volumeSlider.addEventListener("input", changeVolume);
});