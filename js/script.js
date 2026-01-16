document.addEventListener('DOMContentLoaded', () => {
    const supportedLangs = ['es', 'en', 'fr', 'ar'];
    const currentLang = document.documentElement.lang;
    const browserLang = navigator.language.slice(0, 2);

    const popup = document.getElementById('lang-popup');
    const overlay = document.getElementById('overlay');

    // Check if user has already made a choice
    const savedLang = localStorage.getItem('preferredLang');

    function showPopup() {
        if (popup && overlay) {
            popup.classList.add('active');
            overlay.classList.add('active');
        }
    }

    function hidePopup() {
        if (popup && overlay) {
            popup.classList.remove('active');
            overlay.classList.remove('active');
        }
    }

    // Logic: 
    // If no saved preference AND browser language is supported AND browser language != current page language
    // Show popup
    if (!savedLang && supportedLangs.includes(browserLang) && browserLang !== currentLang) {
        // Construct the message dynamically if we want, or rely on static HTML in the popup
        // The requirement says: "¿Prefieres ver la página en otro idioma?" in Spanish + destination language
        // We will just show the generic popup which lists options.
        showPopup();
    }

    // Event listeners for language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.dataset.lang;
            localStorage.setItem('preferredLang', selectedLang);
            hidePopup();

            // Redirect if different
            if (selectedLang !== currentLang) {
                const target = selectedLang === 'es' ? 'index.html' : `${selectedLang}/index.html`;
                // Handle root path logic if in subfolder
                // Assuming structure: /index.html, /en/index.html
                // If we are in /en/, 'es' should go to ../index.html

                let path = '';
                if (currentLang === 'es') {
                    path = selectedLang === 'es' ? 'index.html' : `${selectedLang}/index.html`;
                } else {
                    path = selectedLang === 'es' ? '../index.html' : `../${selectedLang}/index.html`;
                }
                window.location.href = path;
            }
        });
    });

    // Close button or overlay click
    if (overlay) {
        overlay.addEventListener('click', hidePopup);
    }
});
