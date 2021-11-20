//JS File
//select all the button divs

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", () => playSound(btn));
});

function playSound(btn){
    const sound = document.getElementById(btn.dataset.key);
    sound.currentTime=0;
    sound.play();
}
