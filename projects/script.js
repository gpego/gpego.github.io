function showPopup() {
    const popup = document.getElementById('popupOverlay');
    popup.classList.add('popup-visible');
}

function closePopup() {
    const popup = document.getElementById('popupOverlay');
    popup.classList.remove('popup-visible');
}

function hasSeenPopup() {
    return localStorage.getItem('hasSeenPopup') === 'true';
}

function setPopupSeen() {
    localStorage.setItem('hasSeenPopup', 'true');
}

function handlePopupClick(event) {
    const closeButton = event.target.closest('.close-button'); // Assume the close button has a 'close-button' class
    const link = event.target.closest('a');

    if (closeButton) {
        event.preventDefault();
        closePopup();
    } else if (link) {
        event.preventDefault();
        closePopup();
        window.open(link.href, '_blank');
    }
}

// Show popup on page load if it hasn't been seen before
window.addEventListener('load', function() {
    if (!hasSeenPopup()) {
        showPopup();
        setPopupSeen();
        
        // Add click event listener to the popup
        const popup = document.getElementById('popupOverlay');
        popup.addEventListener('click', handlePopupClick);
    }
});