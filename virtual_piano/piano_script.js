/* White keys */
let keyA = document.getElementById("keyA");
let keyS = document.getElementById("keyS");
let keyD = document.getElementById("keyD");
let keyF = document.getElementById("keyF");
let keyG = document.getElementById("keyG");
let keyH = document.getElementById("keyH");
let keyJ = document.getElementById("keyJ");

/* Black keys */
let keyW = document.getElementById("keyW");
let keyE = document.getElementById("keyE");
let keyT = document.getElementById("keyT");
let keyY = document.getElementById("keyY");
let keyU = document.getElementById("keyU");

/* Fired toggles, for each key to allow sound to finish */
let firedA = false;
let firedS = false;
let firedD = false;
let firedF = false;
let firedG = false;
let firedH = false;
let firedJ = false;

let firedW = false;
let firedE = false;
let firedT = false;
let firedY = false;
let firedU = false;

let volume = 0.5;

let slider = document.getElementById("myRange");

slider.oninput = function() {
    volume = this.value / 100;
    console.log("slider value= " + this.value / 100);
}

document.addEventListener("keypress", function (event) {
    if (event.key === "a") {
        if (!firedA) {
            firedA = true;
            keyA.setAttribute("class", "active-white-key");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/A.mp3";
            audio.volume = volume;
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }
    }
    if (event.key === "s") {
        if (!firedS) {
            firedS = true;
            keyS.setAttribute("class", "active-white-key");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/S.mp3";
            audio.volume = volume;
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }
    }
    if (event.key === "d") {
        if (!firedD) {
            firedD = true;
            keyD.setAttribute("class", "active-white-key");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/D.mp3";
            audio.volume = volume;
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }

    }
    if (event.key === "f") {
        if (!firedF) {
            firedF = true;
            keyF.setAttribute("class", "active-white-key");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/F.mp3";
            audio.volume = volume;
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }
    }
    if (event.key === "g") {
        if (!firedG) {
            firedG = true;
            keyG.setAttribute("class", "active-white-key");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/G.mp3";
            audio.volume = volume;
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }

    }
    if (event.key === "h") {
        if (!firedH) {
            firedH = true;
            keyH.setAttribute("class", "active-white-key");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/H.mp3";
            audio.volume = volume;
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }

    }
    if (event.key === "j") {
        if (!firedJ) {
            firedJ = true;
            keyJ.setAttribute("class", "active-white-key");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/J.mp3";
            audio.volume = volume;
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }

    }
    if (event.key === "w") {
        if (!firedW) {
            firedW = true;
            keyW.setAttribute("class", "active-black-key");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/W.mp3";
            audio.volume = volume;
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");

        }


    }
    if (event.key === "e") {
        if (!firedE) {
            firedE = true;
            keyE.setAttribute("class", "active-black-key");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/E.mp3";
            audio.volume = volume;
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }
    }
    if (event.key === "t") {
        if (!firedT) {
            firedT = true;
            keyT.setAttribute("class", "active-black-key");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/T.mp3";
            audio.volume = volume;
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");

        }
    }
    if (event.key === "y") {
        if (!firedY) {
            firedY = true;
            keyY.setAttribute("class", "active-black-key");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/Y.mp3";
            audio.volume = volume;
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");

        }
    }
    if (event.key === "u") {
        if (!firedU) {
            firedU = true;
            keyU.setAttribute("class", "active-black-key");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/U.mp3";
            audio.volume = volume;
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");

        }
    }
})

document.addEventListener("keyup", function (event) {
    if (event.key === "a") {
        firedA = false;
        keyA.removeAttribute("class");
    }
    if (event.key === "s") {
        firedS = false;
        keyS.removeAttribute("class");
    }
    if (event.key === "d") {
        firedD = false;
        keyD.removeAttribute("class");
    }
    if (event.key === "f") {
        firedF = false;
        keyF.removeAttribute("class");
    }
    if (event.key === "g") {
        firedG = false;
        keyG.removeAttribute("class");
    }
    if (event.key === "h") {
        firedH = false;
        keyH.removeAttribute("class");
    }
    if (event.key === "j") {
        firedJ = false;
        keyJ.removeAttribute("class");
    }

    if (event.key === "w") {
        firedW = false;
        keyW.removeAttribute("class");
    }
    if (event.key === "e") {
        firedE = false;
        keyE.removeAttribute("class");
    }
    if (event.key === "t") {
        firedT = false;
        keyT.removeAttribute("class");
    }
    if (event.key === "y") {
        firedY = false;
        keyY.removeAttribute("class");
    }
    if (event.key === "u") {
        firedU = false;
        keyU.removeAttribute("class");
    }
})
