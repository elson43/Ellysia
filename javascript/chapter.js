// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Image containers (ensure these containers exist in HTML)
const image1 = document.querySelector("#img1");
const image2 = document.querySelector("#img2");
const image3 = document.querySelector("#img3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                // Show image after the flip animation
                setTimeout(() => {
                    image1.style.opacity = 1; // Show image after flip
                }, 500); // Sync with flip animation
                setTimeout(() => {
                    paper1.style.zIndex = 1; // Set zIndex after flip
                }, 500);
                break;
            case 2:
                paper2.classList.add("flipped");
                setTimeout(() => {
                    image2.style.opacity = 1; // Show image after flip
                }, 500); // Sync with flip animation
                setTimeout(() => {
                    paper2.style.zIndex = 2; // Set zIndex after flip
                }, 500);
                break;
            case 3:
                paper3.classList.add("flipped");
                setTimeout(() => {
                    image3.style.opacity = 1; // Show image after flip
                }, 500); // Sync with flip animation
                setTimeout(() => {
                    paper3.style.zIndex = 3; // Set zIndex after flip
                }, 500);
                closeBook(false);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                setTimeout(() => {
                    image1.style.opacity = 0; // Hide image before flipping back
                }, 500); // Sync with flip animation
                setTimeout(() => {
                    paper1.style.zIndex = 3; // Delay zIndex change
                }, 500);
                break;
            case 3:
                paper2.classList.remove("flipped");
                setTimeout(() => {
                    image2.style.opacity = 0; // Hide image before flipping back
                }, 500); // Sync with flip animation
                setTimeout(() => {
                    paper2.style.zIndex = 2; // Delay zIndex change
                }, 500);
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                setTimeout(() => {
                    image3.style.opacity = 0; // Hide image before flipping back
                }, 500); // Sync with flip animation
                setTimeout(() => {
                    paper3.style.zIndex = 1; // Set zIndex correctly after flip
                }, 500);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}
