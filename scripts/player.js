let songPlaying = null;
let diskSpinning = null;
// let songTitle = "Play Something!";

function togglePlay(audioId, buttonId) {
    // Get the clicked audio on the page
    let audio = document.getElementById(audioId);
    let button = document.getElementById(buttonId);

    if (audio.paused && songPlaying == null) {
        // If the clicked audio is paused and nothing is playing, play it
        audio.play();
        songPlaying = audio;

        button.classList.add("diskSpin");
        diskSpinning = button;

        // artist = audio.metadata.artist;
        // title = audio.metadata.title;
        // songTitle.innerText = "Now Playing: ${title} by ${artist}";

    } else if (audio.paused && songPlaying !== audio) {
        // If the clicked audio is paused and something is playing, stop that...
        songPlaying.pause();
        songPlaying.currentTime = 0;

        diskSpinning.classList.remove("diskSpin");

        // ...and play the one you selected!
        audio.currentTime = 0;
        audio.play();
        songPlaying = audio;

        button.classList.add("diskSpin");
        diskSpinning = button;
        
        // artist = audio.metadata.artist;
        // title = audio.metadata.title;
        // songTitle.innerText = "Now Playing: ${title} by ${artist}";

    } else {
         // If the clicked audio is playing, pause it
        audio.pause();
        songPlaying = null;

        button.classList.remove("diskSpin");
        diskSpinning = null;

        // songTitle.innerText = "Play Something!";
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
function loopTrack(audio_id, seconds = 0){
    document.getElementById(audio_id).addEventListener("ended", () => {
        console.log("FINITA CANZONE")
    });
}*/