// Messages
let messages = [
    "Maaaa....💖",
    "আমি কিছু বলবো ...",
    "You are my biggest strength 🌸",
    "তুমি সব থেকে cutest person আমার life e🥺",
    "I love you so... so... much🌍",
    "!!! Happy Birthday !!!🎂"
];

// Images (same order as messages)
let images = [
    "me_smiley.png",
    "me_cute.png",
    "mum_me.png",
    "mum_cute.png",
    "mum_papa.png",
    "mum.png"
];

let index = 0;

// NEXT BUTTON FUNCTION
let bear = document.getElementById("bear");

function nextMessage() {
    index = (index + 1) % messages.length;

    let msg = document.getElementById("message");
    let img = document.getElementById("photo");

    msg.classList.remove("fade");

    setTimeout(() => {
        msg.innerText = messages[index];
        img.src = images[index];
        msg.classList.add("fade");

        // 🎆 FINAL MESSAGE
        if (index === messages.length - 1) {
            launchConfetti();
            showBear();
        }

    }, 100);
}

function createBalloon() {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");

    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.getElementById("balloon-container").appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 10000);
}

setInterval(createBalloon, 500);

// 🎆 CONFETTI FUNCTION
    function launchConfetti() {
    for (let i = 0; i < 200; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // RANDOM horizontal start
        confetti.style.left = Math.random() * 100 + "vw";

        // RANDOM vertical start (IMPORTANT FIX)
        confetti.style.top = Math.random() * 50 + "vh";

        // RANDOM COLORS
        let colors = ["#ff4d6d", "#ffd43b", "#69db7c", "#4dabf7", "#b197fc"];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // RANDOM SIZE
        let size = 5 + Math.random() * 8;
        confetti.style.width = size + "px";
        confetti.style.height = size + "px";

        // RANDOM DIRECTION (LEFT/RIGHT SPREAD)
        let randomX = (Math.random() - 0.5) * 200; 

        confetti.style.setProperty('--x', randomX + 'px');

        // RANDOM SPEED
        confetti.style.animationDuration = (2 + Math.random() * 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}
    
function showBear() {
    let bear = document.getElementById("bear");
    bear.style.display = "block";

    // Move randomly every 1.5 sec
    setInterval(() => {
        let x = Math.random() * (window.innerWidth - 120);
        let y = Math.random() * (window.innerHeight - 120);

        bear.style.left = x + "px";
        bear.style.top = y + "px";
    }, 1500);
}