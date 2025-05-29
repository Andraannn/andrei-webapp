const textArray = ["Graphic Designer", "Photo Editor", "Web Developer", "Video Editor"];
let index = 0;
let currentText = "";
let letterIndex = 0;

function type() {
    if (letterIndex < textArray[index].length) {
        currentText += textArray[index].charAt(letterIndex);
        document.getElementById("typewriter").innerHTML = currentText;
        letterIndex++;
        setTimeout(type, 100); // Adjust typing speed (milliseconds)
    } else {
        setTimeout(erase, 1200); // Wait before erasing
    }
}

function erase() {
    if (letterIndex >= 0) {
        currentText = textArray[index].substring(0, letterIndex);
        document.getElementById("typewriter").innerHTML = currentText;
        letterIndex--;
        setTimeout(erase, 50); // Adjust erasing speed (milliseconds)
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(type, 500); // Wait before typing the next text
    }
}

// Start the typing effect
type();
