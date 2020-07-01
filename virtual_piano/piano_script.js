let keyA = document.getElementById("keyA");
let keyS = document.getElementById("keyS");
let keyD = document.getElementById("keyD");
let keyF = document.getElementById("keyF");
let keyG = document.getElementById("keyG");
let keyH = document.getElementById("keyH");
let keyJ = document.getElementById("keyJ");

let firedA = false;
let firedS = false;
let firedD = false;
let firedF = false;
let firedG = false;
let firedH = false;
let firedJ = false;

document.addEventListener("keypress", function (event) {
    if (event.key == "a") {
        if (!firedA) {
            firedA = true;
            keyA.setAttribute("class", "active");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/A.mp3";
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }

    }
    if (event.key == "s") {
        if (!firedS) {
            firedS = true;
            keyS.setAttribute("class", "active");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/S.mp3";
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }

    }
    if (event.key == "d") {
        if (!firedD) {
            firedD = true;
            keyD.setAttribute("class", "active");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/D.mp3";
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }

    }
    if (event.key == "f") {
        if (!firedF) {
            firedF = true;
            keyF.setAttribute("class", "active");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/F.mp3";
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }

    }
    if (event.key == "g") {
        if (!firedG) {
            firedG = true;
            keyG.setAttribute("class", "active");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/G.mp3";
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }

    }
    if (event.key == "h") {
        if (!firedH) {
            firedH = true;
            keyH.setAttribute("class", "active");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/H.mp3";
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }

    }
    if (event.key == "j") {
        if (!firedJ) {
            firedJ = true;
            keyJ.setAttribute("class", "active");
            let audio = document.createElement("AUDIO");
            audio.src = "./sounds/J.mp3";
            audio.play();
            console.log("The '" + event.key + "' has been pressed.");
        }

    }
})

document.addEventListener("keyup", function (event) {
    if (event.key == "a") {
        firedA = false;
        keyA.removeAttribute("class");
    }
    if (event.key == "s") {
        firedS = false;
        keyS.removeAttribute("class");
    }
    if (event.key == "d") {
        firedD = false;
        keyD.removeAttribute("class");
    }
    if (event.key == "f") {
        firedF = false;
        keyF.removeAttribute("class");
    }
    if (event.key == "g") {
        firedG = false;
        keyG.removeAttribute("class");
    }
    if (event.key == "h") {
        firedH = false;
        keyH.removeAttribute("class");
    }
    if (event.key == "j") {
        firedJ = false;
        keyJ.removeAttribute("class");
    }
})