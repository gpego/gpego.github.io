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

function handleLinkClick(event) {
    event.preventDefault();
    const link = event.target.closest('a');
    if (link) {
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
        popup.addEventListener('click', handleLinkClick);
    }
});