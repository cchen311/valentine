const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const baseImage = document.getElementById('base-image')
let headerText = document.getElementById("text")
const baseImageSrc = "images/unsure_cat.gif"
let clickCount = 0; 
let timerId; 

// Functions
function resizeButton(button) {
    const currentFontSize = parseInt(window.getComputedStyle(button).fontSize);
    const currentMaxWidth = parseInt(window.getComputedStyle(button).maxWidth);
    const maxFontSize = 5; // Maximum incrementations

    if (clickCount < maxFontSize) {
        button.style.fontSize = (currentFontSize + 5) + 'px';
        button.style.maxWidth = (currentMaxWidth + 50) + 'px'
    } 
    clickCount++;
}

// Function to remove items to disable eventListeners 
function removeItems() {
    yesButton.remove()
    noButton.remove()
}

// EventListeners
noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "vw";
    noButton.style.top = Math.random() * 80 + "vh";
    // Change image to angry cat
    baseImage.src = "images/angry_cat.gif";
    timerId = setTimeout(function() {
        baseImage.src = baseImageSrc;
    }, 1500);
    resizeButton(yesButton)
});

// Event listener for mouseover
yesButton.addEventListener("mouseover", function() {
    baseImage.src = "images/shy_cat.gif";
});

// Event listener for mouseout
yesButton.addEventListener("mouseout", function() {
    baseImage.src = baseImageSrc;
});


yesButton.addEventListener("click", () => {
    headerText.textContent = "Good luck hehe ❤️"
    // Remove all other event listeners
    removeItems()
    timerId = setTimeout(function() {
        baseImage.src = "images/kiss_cat.gif";
    }, 2500);
    baseImage.src = "images/pervert_cat.gif";
});

