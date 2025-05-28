document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });
    
    // Add Font Awesome icons if the CDN fails
    if (typeof FontAwesome === 'undefined') {
        const iconMap = {
            'fa-search': '🔍',
            'fa-shopping-cart': '🛒',
            'fa-bars': '☰',
            'fa-graduation-cap': '🎓',
            'fa-users': '👥',
            'fa-certificate': '🏅',
            'fa-quote-right': '❝',
            'fa-facebook-f': 'f',
            'fa-twitter': 't',
            'fa-instagram': 'i',
            'fa-youtube': 'y',
            'fa-map-marker-alt': '📍',
            'fa-phone': '📞',
            'fa-envelope': '✉️'
        };
        
        document.querySelectorAll('.fas, .fab').forEach(icon => {
            const classes = Array.from(icon.classList);
            for (const cls of classes) {
                if (iconMap[cls]) {
                    icon.textContent = iconMap[cls];
                    break;
                }
            }
        });
    }
});
