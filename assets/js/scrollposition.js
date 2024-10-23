// Track the navigation type in sessionStorage
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.scrollY);
});

// Reset scroll position when changing pages
window.addEventListener('load', () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    const navigatingFromProjectPage = sessionStorage.getItem('navigatingFromProjectPage');

    // If navigating from project page, scroll to the last position
    if (scrollPosition && navigatingFromProjectPage) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition'); // Optional: Remove after use
    } else {
        // If not navigating from project page, scroll to top
        window.scrollTo(0, 0);
    }

    // Reset the navigatingFromProjectPage flag
    sessionStorage.removeItem('navigatingFromProjectPage');
});

// Set the navigatingFromProjectPage flag when viewing a project
document.querySelectorAll('.project-link').forEach(button => {
    button.addEventListener('click', () => {
        sessionStorage.setItem('navigatingFromProjectPage', 'true');
    });
});
