// Function to toggle between light and dark themes
function changeBackground() {
    const body = document.body;
    const icons = document.querySelectorAll('.social-icons i');
    const currentBg = window.getComputedStyle(body).backgroundImage;
    
    if (currentBg.includes('bg5.jpg')) {
        body.style.backgroundImage = 'url(Media/bg2.jpg)';
        body.style.color = '#ffffff';
        icons.forEach(icon => {
            icon.style.color = '#ffffff';
        });
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.color = '#000000';
        });
        const navLinks = document.querySelectorAll('.navi_links a');
        navLinks.forEach(link => {
            link.style.color = '#ffffff';
        });
    } else {
        body.style.backgroundImage = 'url(Media/bg5.jpg)';
        body.style.color = '#000000';
        icons.forEach(icon => {
            icon.style.color = '#000000';
        });
        const navLinks = document.querySelectorAll('.navi_links a');
        navLinks.forEach(link => {
            link.style.color = '#000000';
        });
    }
}
