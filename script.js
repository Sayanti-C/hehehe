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

// NEXT BUTTON
function nextMessage() {
    index = (index + 1) % messages.length;

    document.getElementById("message").innerText = messages[index];
    document.getElementById("photo").src = images[index];

    if (index === messages.length - 1) {
        launchConfetti();
        showBear();
    }
}

// 🎈 BALLOONS
function createBalloon() {
    let b = document.createElement("div");
    b.classList.add("balloon");

    b.style.left = Math.random() * 100 + "vw";
    b.style.animationDuration = (4 + Math.random() * 4) + "s";

    // tap/click pop
    function pop(e) {
        e.preventDefault();
        b.classList.add("pop");
        setTimeout(() => b.remove(), 300);
    }

    b.addEventListener("click", pop);
    b.addEventListener("touchstart", pop);

    document.getElementById("balloon-container").appendChild(b);

    setTimeout(() => b.remove(), 8000);
}

// 🎆 CONFETTI
function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        let c = document.createElement("div");
        c.classList.add("confetti");

        c.style.left = Math.random() * 100 + "vw";
        c.style.setProperty('--x', (Math.random() - 0.5) * 200 + "px");

        document.body.appendChild(c);

        setTimeout(() => c.remove(), 3000);
    }
}

// 🐻 BEAR
function showBear() {
    let bear = document.getElementById("bear");
    bear.style.display = "block";
}

// 🚀 START EVERYTHING
document.addEventListener("DOMContentLoaded", function () {

    // button
    document.getElementById("nextBtn").addEventListener("click", nextMessage);

    // balloons
    setInterval(createBalloon, 700);
});
