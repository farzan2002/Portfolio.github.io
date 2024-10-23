let currentPage = 1;

function changePage(pageNumber) {
    const pages = document.querySelectorAll('.posts');
    pages.forEach((page, index) => {
        page.style.display = (index + 1 === pageNumber);
    });
    
    currentPage = pageNumber;
}

// Initialize to show the first page
changePage(currentPage);
