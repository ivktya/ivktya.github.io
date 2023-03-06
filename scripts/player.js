let nowPlaying = null;
let nowSpinning = null;

function togglePlay(playerId, buttonId) {
    // Get the clicked player on the page
    let player = document.getElementById(playerId);
    let button = document.getElementById(buttonId);

    if (player.paused && nowPlaying == null) {
        // If the clicked audio is paused and nothing is playing, play it
        player.play();
        nowPlaying = player;

        button.classList.add("diskSpin");
        nowSpinning = button;

    } else if (player.paused && nowPlaying !== player) {
        // If the clicked audio is paused and something is playing, stop that...
        nowPlaying.pause();
        nowPlaying.currentTime = 0
        nowSpinning.classList.remove("diskSpin");
        // ...and play the one you selected!
        player.play();
        nowPlaying = player;
        button.classList.add("diskSpin");
        nowSpinning = button;
    } else {
         // If the clicked audio is playing, pause it
        player.pause();
        nowPlaying = null;
        button.classList.remove("diskSpin");
        nowSpinning = null;
    }
}

//  Waits for the HTML document to load before executing
document.addEventListener("DOMContentLoaded", function() {
    let audioPlayers = [];
    let volumeSlider = document.getElementById("slider");
    // Sets the volume slider to 20 when the page loads
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
  
    // Change volume for all players
    function changeVolume() {
        for (let i = 0; i < audioPlayers.length; i++) {
            audioPlayers[i].volume = volumeSlider.value / 100;
            audioPlayers[i].getAttribute('start', 20);
        }
    }
  
    // Add event listener to volume slider
    volumeSlider.addEventListener("input", changeVolume);
});



/*
// Quando viene cliccato il play, setta i secondi a cui va in loop la canzone, prendendo il parametro dall'html
function loopTrack(seconds) {
    let loopTime = seconds;

}*/

/*
function loopTrack(player_id, seconds = 0){
    document.getElementById(player_id).addEventListener("ended", () => {
        console.log("FINITA CANZONE")
    });
}*/