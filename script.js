// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(targetTab) {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to target button
        const targetButton = document.querySelector(`[data-tab="${targetTab}"]`);
        if (targetButton) {
            targetButton.classList.add('active');
        }

        // Show corresponding content
        const targetContent = document.getElementById(`${targetTab}-content`);
        if (targetContent) {
            targetContent.classList.add('active');
        }

        // Update URL hash without triggering scroll
        if (targetTab === 'privacy') {
            window.history.replaceState(null, null, '#privacy');
        } else if (targetTab === 'terms') {
            window.history.replaceState(null, null, '#terms');
        }

        // Scroll to top of content smoothly
        setTimeout(() => {
            document.querySelector('.content').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    // Check if there's a hash in the URL to open specific tab
    function handleHash() {
        const hash = window.location.hash.toLowerCase();
        if (hash === '#terms' || hash === '#termos' || hash === '#termos-de-uso') {
            switchTab('terms');
        } else if (hash === '#privacy' || hash === '#privacidade' || hash === '#politica-de-privacidade') {
            switchTab('privacy');
        } else {
            // Default to privacy if no hash
            switchTab('privacy');
        }
    }

    // Handle initial load
    handleHash();

    // Handle hash changes (back/forward buttons)
    window.addEventListener('hashchange', handleHash);
});

