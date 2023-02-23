var currentlyPlaying = null;

function togglePlay(playerId) {
    var player = document.getElementById(playerId);

    if (player.paused && currentlyPlaying == null) {
        player.play();
        currentlyPlaying = player;
    } else if (player.paused && currentlyPlaying !== player) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0
        player.play();
        currentlyPlaying = player;
    } else {
        player.pause();
        currentlyPlaying = null;
    }
}