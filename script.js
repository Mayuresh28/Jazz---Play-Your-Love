// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let CurrentSongName = document.getElementById('current_song_name');
let myProgressBar = document.getElementById('range1');
let songs = [
    { songName: "Ishq Risk", filePath: "song/1.mp3" },
    { songName: "Dil ke Pas", filePath: "songs/2.mp3" },
    { songName: "Hasi", filePath: "songs/3.mp3" },
    { songName: "Give Me Some Sunshine", filePath: "songs/4.mp3" },
    { songName: "Hawa Banke", filePath: "songs/5.mp3" },
    { songName: "Dekha Hazaro Dafa", filePath: "songs/6.mp3" },
    { songName: "Lakeerien", filePath: "songs/7.mp3" },
]
let songItems = Array.from(document.getElementsByClassName('SongName'));



masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        // console.log("Played")
        masterPlay.classList.add("fa-pause-circle-o");
        masterPlay.classList.remove("fa-play-circle-o");
    } else {

        audioElement.pause();
        // console.log("Paused")
        masterPlay.classList.remove("fa-pause-circle-o");
        masterPlay.classList.add("fa-play-circle-o");

    }
    makeAllPlay();

})


audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate')
    let progress = ((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

songItems.forEach((element, i) => {
    // console.log(element, i);
    songItems[i].innerText = songs[i].songName
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element) => {

        element.classList.remove("fa-pause-circle-o")
        element.classList.add("fa-play-circle-o")
    })
}



Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlay();
        songIndex = parseInt(e.target.id)
        e.target.classList.add("fa-pause-circle-o")
        e.target.classList.remove("fa-play-circle-o")
        audioElement.src = `songs/${songIndex+1}.mp3`
        CurrentSongName.innerText = songs[songIndex].songName
        // console.log(songIndex);
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.add("fa-pause-circle-o");
        masterPlay.classList.remove("fa-play-circle-o");

    })
})

document.getElementById("next").addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = 0;
    } else {
        songIndex++

    }
    makeAllPlay();
    audioElement.src = `songs/${songIndex+1}.mp3`
    CurrentSongName.innerText = songs[songIndex].songName

    // console.log(songIndex);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.add("fa-pause-circle-o");
    masterPlay.classList.remove("fa-play-circle-o");

})
document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 6;
    } else {
        songIndex--

    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    CurrentSongName.innerText = songs[songIndex].songName

    // console.log(songIndex);
    makeAllPlay();
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.add("fa-pause-circle-o");
    masterPlay.classList.remove("fa-play-circle-o");

})     

// Array.from(document.getElementById("name")).forEach((element) => {
//    console.log(audioElement.)
// })