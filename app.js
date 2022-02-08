const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function() {
    // change the bg color of body element to a random color
        // generate a random number between 0 and 4
        const randomNumber = getRandomNumber();
        // Change the background color to the chosen array index
        document.body.style.backgroundColor = colors[randomNumber];
        // Change the color name that is displayed on the screen
        color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}