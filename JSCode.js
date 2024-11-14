let trackIndex=0;
let overlayContainer = document.getElementById('enlargedAlbumContainer');
let enlargedImage = document.getElementById('enlargedAlbum');
let closeBtn = document.getElementById('closeButton');
let prevBtn = document.getElementById('prevButton');
let nextBtn = document.getElementById('nextButton');
let galleryImages = document.querySelectorAll('.gallery-movement');

//OPEN AND DISPLAY ALBUM (CALLED LATER ON)
function openOverlay(index) {
    trackIndex = index;
    enlargedImage.src = galleryImages[trackIndex].src;
    overlayContainer.style.display = 'flex';
}

// CLOSE ALBUM OVERLAY
function closeOverlay() {
    overlayContainer.style.display = 'none';
}

// NAVIGATE THROUGH ALBUMS
function navigateImage(direction) {
    trackIndex += direction;

// LOOP THAT UPDATES POSITION OF ALBUM INDEX. ALSO PREVENTS OVERFLOW FOR FIRST AND LAST IMAGE.
    if (trackIndex <0) {
        trackIndex = galleryImages.length - 1;
    } else if (trackIndex >= galleryImages.length) {
        trackIndex = 0;
    }

// UPDATE INDEX ON ALBUM'S NUMBER AND ATTACH IT PROPERLY
    enlargedImage.src = galleryImages[trackIndex].src;
}

// FOR LOOP LIVE INDEX TRACKER 
for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', () => openOverlay(i));
}


//BUTTONS TO CLOSE, ADVANCE, OR GO BACK
closeBtn.addEventListener('click', closeOverlay);
prevBtn.addEventListener('click', () => navigateImage(-1));
nextBtn.addEventListener('click', () => navigateImage(1));