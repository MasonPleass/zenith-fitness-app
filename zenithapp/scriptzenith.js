function showPage(pageId) {
    console.log(`Switching to page: ${pageId}`);
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('page-active');
    });
    
    // Show the selected page
    document.getElementById(pageId).classList.add('page-active');
    
    // Remove 'active' class from all nav links
    const navLinks = document.querySelectorAll('.bottom-nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add 'active' class to the current page's nav link
    const activeLink = document.querySelector(`.bottom-nav a[data-page="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

