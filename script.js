// Messages
let messages = [
"Maaaa....💖",
"আমি কিছু বলবো ...",
"You are my biggest strength 🌸",
"তুমি সব থেকে cutest person আমার life e🥺",
"I love you so... so... much🌍",
"!!! Happy Birthday !!!🎂"
];

// Images
let images = [
"me_smiley.png",
"me_cute.png",
"mum_me.png",
"mum_cute.png",
"mum_papa.png",
"mum.png"
];

let index = 0;
let musicStarted = false;

// 🎵 MUSIC FUNCTION
function startMusic() {
    let music = document.getElementById("bgMusic");
    music.volume = 0.5;

    music.play().catch(err => {
        console.log("Music blocked:", err);
    });
}

// NEXT MESSAGE
function nextMessage() {
    index = (index + 1) % messages.length;

    let msg = document.getElementById("message");
    let img = document.getElementById("photo");

    msg.classList.remove("fade");

    setTimeout(() => {
        msg.innerText = messages[index];
        img.src = images[index];
        msg.classList.add("fade");

        if (index === messages.length - 1) {
            launchConfetti();
            showBear();
        }
    }, 100);
}

// 🎈 BALLOONS
function createBalloon() {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");

    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = (4 + Math.random() * 4) + "s";

    function popBalloon(e) {
        e.preventDefault();
        balloon.classList.add("pop");

        setTimeout(() => balloon.remove(), 300);
    }

    balloon.addEventListener("click", popBalloon);
    balloon.addEventListener("touchstart", popBalloon);

    document.getElementById("balloon-container").appendChild(balloon);

    setTimeout(() => balloon.remove(), 8000);
}

// 🎆 CONFETTI
function launchConfetti() {
    for (let i = 0; i < 150; i++) {
        let c = document.createElement("div");
        c.classList.add("confetti");

        c.style.left = Math.random() * 100 + "vw";
        c.style.top = Math.random() * 50 + "vh";

        c.style.setProperty('--x', (Math.random() - 0.5) * 200 + "px");

        document.body.appendChild(c);
        setTimeout(() => c.remove(), 4000);
    }
}

// 🐻 BEAR
function showBear() {
    let bear = document.getElementById("bear");
    bear.style.display = "block";

    setInterval(() => {
        let x = Math.random() * (window.innerWidth - 120);
        let y = Math.random() * (window.innerHeight - 120);

        bear.style.left = x + "px";
        bear.style.top = y + "px";
    }, 1500);
}

// 🚀 INIT EVERYTHING AFTER DOM LOAD
document.addEventListener("DOMContentLoaded", function () {

    // button click
    document.getElementById("nextBtn").addEventListener("click", function () {

        if (!musicStarted) {
            startMusic();
            musicStarted = true;
        }

        nextMessage();
    });

    // balloons
    setInterval(createBalloon, 700);
});
