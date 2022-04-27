//English-Turkish language exchange

document.querySelector(".turkish-button").addEventListener("click", (e) => {
    document.querySelector(".warning").innerText = "Düğmenin çalışması için en az bir ses seçmeniz gerekir.";
    document.querySelector(".discription").innerHTML = "Calibri web uygulaması aslında Microsoft'un Elpy uygulamasından ilham alınarak hayata geçirilen bir projedir.";
    document.querySelector(".contents").innerHTML = "Hangi teknolojiler kullanıldı?";
    document.querySelector(".about-app-p").innerText = "Uygulama Hakkında";
    document.querySelector(".name").innerHTML = "Milyaz Kamil Tarafından Oluşturuldu";
    document.querySelector(".name2").innerHTML = "Milyaz Kamil Tarafından Oluşturuldu";
    document.querySelector(".rights").innerHTML = "© Tüm Hakları Saklıdır";
    document.querySelector(".beach-p").innerText = "Plaj";
    document.querySelector(".birds-p").innerText = "Kuşlar";
    document.querySelector(".cafe-p").innerText = "Kafe";
    document.querySelector(".campfire-p").innerText = "Kamp ateşi";
    document.querySelector(".city-p").innerText = "Şehir";
    document.querySelector(".fireplace-p").innerText = "Şömine";
    document.querySelector(".forest-p").innerText = "Orman";
    document.querySelector(".heavy-rain-p").innerText = "Yoğun yağış";
    document.querySelector(".night-crickets-p").innerText = "Cırcır böcekleri";
    document.querySelector(".rain-p").innerText = "Yağmur";
    document.querySelector(".rain-camping-p").innerText = "Yağmur, kamp";
    document.querySelector(".rain-windshield-p").innerText = "Yağmur, ön cam";
    document.querySelector(".snow-p").innerText = "Kar";
    document.querySelector(".thunder-p").innerText = "Gök gürültüsü";
    document.querySelector(".train-p").innerText = "Tren";
})

document.querySelector(".english-button").addEventListener("click", (e) => {
    document.querySelector(".warning").innerText = "For the button to work, you need to select one sound.";
    document.querySelector(".discription").innerHTML = "Calibri web application is actually a project inspired by Microsoft's Elpy application.";
    document.querySelector(".contents").innerHTML = "What technologies were used?";
    document.querySelector(".about-app-p").innerText = "About App";
    document.querySelector(".name").innerHTML = "Created by Milyaz Kamil";
    document.querySelector(".name2").innerHTML = "Created by Milyaz Kamil";
    document.querySelector(".rights").innerHTML = "© All Rights Reserved";
    document.querySelector(".beach-p").innerText = "Beach";
    document.querySelector(".birds-p").innerText = "Birds";
    document.querySelector(".cafe-p").innerText = "Cafe";
    document.querySelector(".campfire-p").innerText = "Campfire";
    document.querySelector(".city-p").innerText = "City";
    document.querySelector(".fireplace-p").innerText = "Fireplace";
    document.querySelector(".forest-p").innerText = "Forest";
    document.querySelector(".heavy-rain-p").innerText = "Heavy rain";
    document.querySelector(".night-crickets-p").innerText = "Night crickets";
    document.querySelector(".rain-p").innerText = "Rain";
    document.querySelector(".rain-camping-p").innerText = "Rain, camping";
    document.querySelector(".rain-windshield-p").innerText = "Rain, windshield";
    document.querySelector(".snow-p").innerText = "Snow";
    document.querySelector(".thunder-p").innerText = "Thunder";
    document.querySelector(".train-p").innerText = "Train";
})


const warning = document.querySelector(".warning");
warning.style.display =  "none";

const mainVolume = document.querySelector(".main-volume");

const mainButton = document.querySelector(".main-button");
const playButton = document.querySelector(".play-button");
const pauseButton = document.querySelector(".pause-button");
const beachSound = document.querySelector(".beach-sound");
const birdsSound = document.querySelector(".birds-sound");
const cafeSound = document.querySelector(".cafe-sound");
const campfireSound = document.querySelector(".campfire-sound");
const citySound = document.querySelector(".city-sound");
const fireplaceSound = document.querySelector(".fireplace-sound");
const forestSound = document.querySelector(".forest-sound");
const heavyRainSound = document.querySelector(".heavy-rain-sound");
const nightCricketsSound = document.querySelector(".night-crickets-sound");
const rainSound = document.querySelector(".rain-sound");
const rainCampingSound = document.querySelector(".rain-camping-sound");
const rainWindshieldSound = document.querySelector(".rain-windshield-sound");
const snowSound = document.querySelector(".snow-sound");
const thunderSound = document.querySelector(".thunder-sound");
const trainSound = document.querySelector(".train-sound");

const beachDiv = document.querySelector(".beach-div");
const beachDivTwo = document.querySelector(".beach-div-two");
const beach = document.querySelector(".beach");

const birdsDiv = document.querySelector(".birds-div");
const birdsDivTwo = document.querySelector(".birds-div-two");
const birds = document.querySelector(".birds");

const cafeDiv = document.querySelector(".cafe-div");
const cafeDivTwo = document.querySelector(".cafe-div-two");
const cafe = document.querySelector(".cafe");

const campfireDiv = document.querySelector(".campfire-div");
const campfireDivTwo = document.querySelector(".campfire-div-two");
const campfire = document.querySelector(".campfire");

const cityDiv = document.querySelector(".city-div");
const cityDivTwo = document.querySelector(".city-div-two");
const city = document.querySelector(".city");

const fireplaceDiv = document.querySelector(".fireplace-div");
const fireplaceDivTwo = document.querySelector(".fireplace-div-two");
const fireplace = document.querySelector(".fireplace");

const forestDiv = document.querySelector(".forest-div");
const forestDivTwo = document.querySelector(".forest-div-two");
const forest = document.querySelector(".forest");

const heavyRainDiv = document.querySelector(".heavy-rain-div");
const heavyRainDivTwo = document.querySelector(".heavy-rain-div-two");
const heavyRain = document.querySelector(".heavy-rain");

const nightCricketsDiv = document.querySelector(".night-crickets-div");
const nightCricketsDivTwo = document.querySelector(".night-crickets-div-two");
const nightCrickets = document.querySelector(".night-crickets");

const rainDiv = document.querySelector(".rain-div");
const rainDivTwo = document.querySelector(".rain-div-two");
const rain = document.querySelector(".rain");

const rainCampingDiv = document.querySelector(".rain-camping-div");
const rainCampingDivTwo = document.querySelector(".rain-camping-div-two");
const rainCamping = document.querySelector(".rain-camping");

const rainWindshieldDiv = document.querySelector(".rain-windshield-div");
const rainWindshieldDivTwo = document.querySelector(".rain-windshield-div-two");
const rainWindshield = document.querySelector(".rain-windshield");

const snowDiv = document.querySelector(".snow-div");
const snowDivTwo = document.querySelector(".snow-div-two");
const snow = document.querySelector(".snow");

const thunderDiv = document.querySelector(".thunder-div");
const thunderDivTwo = document.querySelector(".thunder-div-two");
const thunder = document.querySelector(".thunder");

const trainDiv = document.querySelector(".train-div");
const trainDivTwo = document.querySelector(".train-div-two");
const train = document.querySelector(".train");


//create shadow on hover

beachDiv.style.backgroundColor = "black";
beachDiv.style.opacity = "0.6";

birdsDiv.style.backgroundColor = "black";
birdsDiv.style.opacity = "0.6";

cafeDiv.style.backgroundColor = "black";
cafeDiv.style.opacity = "0.6";

campfireDiv.style.backgroundColor = "black";
campfireDiv.style.opacity = "0.6";

cityDiv.style.backgroundColor = "black";
cityDiv.style.opacity = "0.6";

fireplaceDiv.style.backgroundColor = "black";
fireplaceDiv.style.opacity = "0.6";

forestDiv.style.backgroundColor = "black";
forestDiv.style.opacity = "0.6";

heavyRainDiv.style.backgroundColor = "black";
heavyRainDiv.style.opacity = "0.6";

nightCricketsDiv.style.backgroundColor = "black";
nightCricketsDiv.style.opacity = "0.6";

rainDiv.style.backgroundColor = "black";
rainDiv.style.opacity = "0.6";

rainCampingDiv.style.backgroundColor = "black";
rainCampingDiv.style.opacity = "0.6";

rainWindshieldDiv.style.backgroundColor = "black";
rainWindshieldDiv.style.opacity = "0.6";

snowDiv.style.backgroundColor = "black";
snowDiv.style.opacity = "0.6";

thunderDiv.style.backgroundColor = "black";
thunderDiv.style.opacity = "0.6";

trainDiv.style.backgroundColor = "black";
trainDiv.style.opacity = "0.6";

// Clicking any box changes opacity, volume and shadow

beachDivTwo.addEventListener("click", () => {
    if(beachDiv.style.opacity === "0.6"){
        beachDiv.style.opacity = "0";
        beach.style.boxShadow = "0px 0px 50px 15px #2ae5fe";
        beachSound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        beachDiv.style.opacity = "0.6";
        beach.style.boxShadow = "none";
        beachSound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})

birdsDivTwo.addEventListener("click", () => {
    if(birdsDiv.style.opacity === "0.6"){
        birdsDiv.style.opacity = "0";
        birds.style.boxShadow = "0px 0px 50px 15px #fef32a";
        birdsSound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        birdsDiv.style.opacity = "0.6";
        birds.style.boxShadow = "none";
        birdsSound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})

cafeDivTwo.addEventListener("click", () => {
    if(cafeDiv.style.opacity === "0.6"){
        cafeDiv.style.opacity = "0";
        cafe.style.boxShadow = "0px 0px 50px 15px #fea34d";
        cafeSound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        cafeDiv.style.opacity = "0.6";
        cafe.style.boxShadow = "none";
        cafeSound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})

campfireDivTwo.addEventListener("click", () => {
    if(campfireDiv.style.opacity === "0.6"){
        campfireDiv.style.opacity = "0";
        campfire.style.boxShadow = "0px 0px 50px 15px #fe1b1b";
        campfireSound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        campfireDiv.style.opacity = "0.6";
        campfire.style.boxShadow = "none";
        campfireSound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})

cityDivTwo.addEventListener("click", () => {
    if(cityDiv.style.opacity === "0.6"){
        cityDiv.style.opacity = "0";
        city.style.boxShadow = "0px 0px 50px 15px #fec11b";
        citySound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        cityDiv.style.opacity = "0.6";
        city.style.boxShadow = "none";
        citySound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})

fireplaceDivTwo.addEventListener("click", () => {
    if(fireplaceDiv.style.opacity === "0.6"){
        fireplaceDiv.style.opacity = "0";
        fireplace.style.boxShadow = "0px 0px 50px 15px red";
        fireplaceSound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        fireplaceDiv.style.opacity = "0.6";
        fireplace.style.boxShadow = "none";
        fireplaceSound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})

forestDivTwo.addEventListener("click", () => {
    if(forestDiv.style.opacity === "0.6"){
        forestDiv.style.opacity = "0";
        forest.style.boxShadow = "0px 0px 50px 15px #1bfe31";
        forestSound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        forestDiv.style.opacity = "0.6";
        forest.style.boxShadow = "none";
        forestSound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})

heavyRainDivTwo.addEventListener("click", () => {
    if(heavyRainDiv.style.opacity === "0.6"){
        heavyRainDiv.style.opacity = "0";
        heavyRain.style.boxShadow = "0px 0px 50px 15px #d1ba23";
        heavyRainSound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        heavyRainDiv.style.opacity = "0.6";
        heavyRain.style.boxShadow = "none";
        heavyRainSound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})

nightCricketsDivTwo.addEventListener("click", () => {
    if(nightCricketsDiv.style.opacity === "0.6"){
        nightCricketsDiv.style.opacity = "0";
        nightCrickets.style.boxShadow = "0px 0px 50px 15px #23bad1";
        nightCricketsSound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        nightCricketsDiv.style.opacity = "0.6";
        nightCrickets.style.boxShadow = "none";
        nightCricketsSound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})

rainDivTwo.addEventListener("click", () => {
    if(rainDiv.style.opacity === "0.6"){
        rainDiv.style.opacity = "0";
        rain.style.boxShadow = "0px 0px 50px 15px #29d123";
        rainSound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        rainDiv.style.opacity = "0.6";
        rain.style.boxShadow = "none";
        rainSound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})

rainCampingDivTwo.addEventListener("click", () => {
    if(rainCampingDiv.style.opacity === "0.6"){
        rainCampingDiv.style.opacity = "0";
        rainCamping.style.boxShadow = "0px 0px 50px 15px #0077ff";
        rainCampingSound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        rainCampingDiv.style.opacity = "0.6";
        rainCamping.style.boxShadow = "none";
        rainCampingSound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})

rainWindshieldDivTwo.addEventListener("click", () => {
    if(rainWindshieldDiv.style.opacity === "0.6"){
        rainWindshieldDiv.style.opacity = "0";
        rainWindshield.style.boxShadow = "0px 0px 50px 15px #ffd000";
        rainWindshieldSound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        rainWindshieldDiv.style.opacity = "0.6";
        rainWindshield.style.boxShadow = "none";
        rainWindshieldSound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})


snowDivTwo.addEventListener("click", () => {
    if(snowDiv.style.opacity === "0.6"){
        snowDiv.style.opacity = "0";
        snow.style.boxShadow = "0px 0px 50px 15px #ffffff";
        snowSound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        snowDiv.style.opacity = "0.6";
        snow.style.boxShadow = "none";
        snowSound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})

thunderDivTwo.addEventListener("click", () => {
    if(thunderDiv.style.opacity === "0.6"){
        thunderDiv.style.opacity = "0";
        thunder.style.boxShadow = "0px 0px 50px 15px #1bfefa";
        thunderSound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        thunderDiv.style.opacity = "0.6";
        thunder.style.boxShadow = "none";
        thunderSound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})

trainDivTwo.addEventListener("click", () => {
    if(trainDiv.style.opacity === "0.6"){
        trainDiv.style.opacity = "0";
        train.style.boxShadow = "0px 0px 50px 15px #fe4c1b";
        trainSound.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        warning.style.display = "none";
    } else {
        trainDiv.style.opacity = "0.6";
        train.style.boxShadow = "none";
        trainSound.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
})



//If no box is selected and the play button is clicked, a warning will appear.

mainButton.addEventListener("click", (e) => {
    if (playButton.style.display = "none"
         && beachDiv.style.opacity === "0.6"
         && birdsDiv.style.opacity === "0.6"
         && cafeDiv.style.opacity === "0.6"
         && campfireDiv.style.opacity === "0.6"
         && cityDiv.style.opacity === "0.6"
         && fireplaceDiv.style.opacity === "0.6"
         && forestDiv.style.opacity === "0.6"
         && heavyRainDiv.style.opacity === "0.6"
         && nightCricketsDiv.style.opacity === "0.6"
         && rainDiv.style.opacity === "0.6"
         && rainCampingDiv.style.opacity === "0.6"
         && rainWindshieldDiv.style.opacity === "0.6"
         && snowDiv.style.opacity === "0.6"
         && thunderDiv.style.opacity === "0.6"
         && trainDiv.style.opacity === "0.6") {
        setTimeout(() => {
            warning.style.display = "block";
        },)
        setTimeout(() => {
            warning.style.display = "none";
        },5000)   
    }
})

//Controlling the volume

function volume_change() {
    beachSound.volume = mainVolume.value / 100;
    birdsSound.volume = mainVolume.value / 100;
    cafeSound.volume = mainVolume.value / 100;
    campfireSound.volume = mainVolume.value / 100;
    citySound.volume = mainVolume.value / 100;
    fireplaceSound.volume = mainVolume.value / 100;
    forestSound.volume = mainVolume.value / 100;
    heavyRainSound.volume = mainVolume.value / 100;
    nightCricketsSound.volume = mainVolume.value / 100;
    rainSound.volume = mainVolume.value / 100;
    rainCampingSound.volume = mainVolume.value / 100;
    rainWindshieldSound.volume = mainVolume.value / 100;
    snowSound.volume = mainVolume.value / 100;
    thunderSound.volume = mainVolume.value / 100;
    trainSound.volume = mainVolume.value / 100;
}
//If the pause button is clicked, all open sounds will be paused and opacity, shadows will be turned off.

playButton.style.display = "block";
pauseButton.style.display = "none";

mainButton.addEventListener("click", () => {
    if( playButton.style.display === "block" 
        && beachSound.pause() === true
        && birdsSound.pause() === true
        && cafeSound.pause() === true
        && campfireSound.pause() === true
        && citySound.pause() === true
        && fireplaceSound.pause() === true
        && forestSound.pause() === true
        && heavyRainSound.pause() === true
        && nightCricketsSound.pause() === true
        && rainSound.pause() === true
        && rainCampingSound.pause() === true
        && rainWindshieldSound.pause() === true
        && snowSound.pause() === true
        && thunderSound.pause() === true
        && trainSound.pause() === true
        ){
        pauseButton.style.display = "block";
        playButton.style.display = "none";
    } else {
        pauseButton.style.display = "none";
        playButton.style.display = "block";

        beachDiv.style.opacity = "0.6";
        birdsDiv.style.opacity = "0.6";
        cafeDiv.style.opacity = "0.6";
        campfireDiv.style.opacity = "0.6";
        cityDiv.style.opacity = "0.6";
        fireplaceDiv.style.opacity = "0.6";
        forestDiv.style.opacity = "0.6";
        heavyRainDiv.style.opacity = "0.6";
        nightCricketsDiv.style.opacity = "0.6";
        rainDiv.style.opacity = "0.6";
        rainCampingDiv.style.opacity = "0.6";
        rainWindshieldDiv.style.opacity = "0.6";
        snowDiv.style.opacity = "0.6";
        thunderDiv.style.opacity = "0.6";
        trainDiv.style.opacity = "0.6";

        beach.style.boxShadow = "none";
        birds.style.boxShadow = "none";
        cafe.style.boxShadow = "none";
        campfire.style.boxShadow = "none";
        city.style.boxShadow = "none";
        fireplace.style.boxShadow = "none";
        forest.style.boxShadow = "none";
        heavyRain.style.boxShadow = "none";
        nightCrickets.style.boxShadow = "none";
        rain.style.boxShadow = "none";
        rainCamping.style.boxShadow = "none";
        rainWindshield.style.boxShadow = "none";
        snow.style.boxShadow = "none";
        thunder.style.boxShadow = "none";
        train.style.boxShadow = "none";

        beachSound.pause();
        birdsSound.pause();
        cafeSound.pause();
        campfireSound.pause();
        citySound.pause();
        fireplaceSound.pause();
        forestSound.pause();
        heavyRainSound.pause();
        nightCricketsSound.pause();
        rainSound.pause();
        rainCampingSound.pause();
        rainWindshieldSound.pause();
        snowSound.pause();
        thunderSound.pause();
        trainSound.pause();
    }
})

