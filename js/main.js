/**
 * Main Application JS
 * Handles shared UI components like the mobile menu
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
            hamburger.textContent = menu.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !hamburger.contains(e.target) && menu.classList.contains('active')) {
                menu.classList.remove('active');
                hamburger.textContent = '☰';
            }
        });

        // Close menu when clicking links
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                hamburger.textContent = '☰';
            });
        });
    }
}

/**
 * Customise Zoho SalesIQ Float Message (Translates to Farmer Hindi)
 */
setInterval(() => {
    const bubbleTitle = document.querySelector('.zsiq_bbtitle');
    const bubbleSub = document.querySelector('.zsiq_bbmsg');
    
    if (bubbleTitle && bubbleTitle.innerText === "We're Online!") {
        bubbleTitle.innerText = "नमस्कार किसान भाई!";
    }
    if (bubbleSub && bubbleSub.innerText === "How may I help you today?") {
        bubbleSub.innerText = "फसल संबंधित कोई सवाल है?";
    }
}, 1000);
