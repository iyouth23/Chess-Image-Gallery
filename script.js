// RUBRIC DOCUMENTATION

// 1.) 12+ images: satisfied
// 2.) Images are all the same size, aligned, have a margin/padding between them,
        // border/framing optional: satisfied
// 3.) Hover effect on images implemented: satisfied (border/border-radius/cursor)
// 4.) Clicking on an image opens a larger version of it: satisfied
// 5.) The larger version of each image has a "close" button and left/right
        // arrows: satisfied (note: no left arrow on image 1; no right arrow)
        // on image 12
// 6.) Clicking an image's "close" button returns user to gallery view: satisfied
// 7.) Clicking the left/right arrows moves the user to the next/previous image
        // (does not have to loop): satisfied
// 8.) Turned in 2 days before due: satisfied (turned in 3/25/21)



// All small images stored here
var images = document.getElementsByClassName("small-image");
var imageNumber = 0;
var imageName = "chess" + imageNumber + ".jpg";

// Scoping documentation: https://www.w3schools.com/js/js_function_closures.asp */
for (var i = 0; i < images.length; i++) (function(i) {
    images[i].onclick = function() {
        enlargeImage(i);
        hideOtherImages();
        toggleButtons();
    }
})(i);

function enlargeImage(i) {

    // index adjustment
    imageNumber = (i + 1);

    imageName = "chess" + imageNumber + ".jpg";
    document.getElementById("enlarged-image").style.visibility = "visible";
    document.getElementById("enlarged-image").src = imageName;
    document.getElementById("enlarged-image").style.zIndex = "10";
    document.getElementById("enlarged-image").style.height = "500px";
    document.getElementById("enlarged-image").style.width = "750px";
}

function hideOtherImages() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.zIndex = "-10";
    }
}

function toggleButtons() {
    if (document.getElementById("enlarged-image").getAttribute("src") != "chess1.jpg") {
        document.getElementById("left-button").style.visibility = "visible";
    } else {
        document.getElementById("left-button").style.visibility = "hidden";
    }
    if (document.getElementById("enlarged-image").getAttribute("src") != "chess12.jpg") {
        document.getElementById("right-button").style.visibility = "visible";
    } else {
        document.getElementById("right-button").style.visibility = "hidden";
    }
    document.getElementById("close-button").style.visibility = "visible";
}

document.getElementById("close-button").onclick = function() { 
    hideButtons();
    hideEnlargedImage();
    showOtherImages();
};

function hideButtons() {
    document.getElementById("left-button").style.visibility = "hidden";
    document.getElementById("right-button").style.visibility = "hidden";
    document.getElementById("close-button").style.visibility = "hidden";
}

function hideEnlargedImage() {
    document.getElementById("enlarged-image").style.visibility = "hidden";
    document.getElementById("enlarged-image").src = "empty_image.jpg";
}

function showOtherImages() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.zIndex = "10";
    }
}

document.getElementById("left-button").onclick = function() {
    goToPreviousImage();
}

function goToPreviousImage() {
    imageNumber -= 1;
    imageName = "chess" + imageNumber + ".jpg";
    document.getElementById("enlarged-image").src = imageName;
    toggleButtons();
}

document.getElementById("right-button").onclick = function() {
    goToNextImage();
}

function goToNextImage() {
    imageNumber += 1;
    imageName = "chess" + imageNumber + ".jpg";
    document.getElementById("enlarged-image").src = imageName;
    toggleButtons();
}