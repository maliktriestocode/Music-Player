let playing = document.getElementById('play');
let pauser = document.getElementById('pause');
let audio1 = document.getElementById('audio1');
let controls = document.getElementById('controls');
let time = document.getElementById('time');
let title = document.getElementById('title');
let album = document.getElementById('albumcover');
let skip = document.getElementById('skip');
let back = document.getElementById('back');
const tracks = [
    {
        title: "Ken Carson - Lord Of Chaos",
        audio: "./audios/audio1.mp3",
        album: "./images/morechaos.jpg"
    },
    {
        title: "Playboi Carti & The Weeknd - RATHER LIE",
        audio: "./audios/audio2.mp3",
        album: "./images/iammusic.png"
    },
    {
        title: "Ken Carson - Off The Meter (ft.Playboi Carti & Destroy Lonely)",
        audio: "./audios/audio3.mp3",
        album: "./images/morechaos.jpg"
    },
    {
        title: "Tame Impala - The Less I Know The Better",
        audio: "./audios/audio4.mp3",
        album: "./images/thelessiknowthebetter.jpeg"
    },
    {
        title: "Flawed Mangoes - Swimming",
        audio: "./audios/audio5.mp3",
        album: "./images/swimming.jpg"
    },
    {
        title: "The Marías - No One Noticed",
        audio: "./audios/audio6.mp3",
        album: "./images/noonejpg.jpg"
    },
    {
        title: "Destroy Lonely - NOSTYLIST",
        audio: "./audios/audio7.mp3",
        album: "./images/nostyles.jpeg"
    },
    {
        title: "Destroy Lonely - Bane",
        audio: "./audios/audio8.mp3",
        album: "./images/bane.jpeg"
    }
    
    
];

let currentTrack = 0;






playing.addEventListener('click', player);
pauser.addEventListener('click', pause);
skip.addEventListener('click', change)
back.addEventListener('click', changeBack);




function player(){ 

    audio1.play();
    
    
    

}

function pause(){

    audio1.pause();
}

function change(){
        if (currentTrack < tracks.length-1){
        currentTrack++;
        title.innerHTML = `${tracks[currentTrack].title}`;
        audio1.src = `${tracks[currentTrack].audio}`;
        album.src = `${tracks[currentTrack].album}`;
        }else{
            currentTrack = -1;

        }
            
}

function changeBack(){
    if (currentTrack > 0){
    currentTrack--;
    title.innerHTML = `${tracks[currentTrack].title}`;
    audio1.src = `${tracks[currentTrack].audio}`;
    album.src = `${tracks[currentTrack].album}`;
    }else{
        currentTrack = tracks.length;
    }
        
}


// if (audio1.src = "./audios/audio1.mp3"){
//     title.innerHTML = "Playboi Carti & The Weeknd - RATHER LIE"
//     audio1.src = "./audios/audio2.mp3";
//     audio1.play();
//     album.src = "./images/iammusic.png";
//     }else if (audio1.src = "./audios/audio2.mp3"){
//         title.innerHTML = "Ken Carson - Lord Of Chaos";
//         audio1.src = "./audios/audio1.mp3";
//         audio1.play();
//         album.src = "./images/morechaos.png";
//     }