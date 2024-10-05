const paginationContainer = document.querySelector('.pagination');
const itemsPerPage = 10; // Adjust as needed
let currentPage = 1;
let totalPages = 0;

function createPaginationButtons(totalPages) {
    paginationContainer.innerHTML = ''; // Clear existing buttons

    // Previous button
    const previousButton = document.createElement('li');
    previousButton.classList.add('page-item');
    previousButton.innerHTML = '<span class="page-link">Previous</span>';
    previousButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });
    paginationContainer.appendChild(previousButton);

    // Numbered buttons
    for (let i = 1; i <= totalPages; i++) {
        const numberButton = document.createElement('li');
        numberButton.classList.add('page-item');
        if (i === currentPage) {
            numberButton.classList.add('active');
        }
        numberButton.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        numberButton.addEventListener('click', () => {
            currentPage = i;
            updatePagination();
        });
        paginationContainer.appendChild(numberButton);
    }

    // Next button
    const nextButton = document.createElement('li');
    nextButton.classList.add('page-item');
    nextButton.innerHTML = '<a class="page-link" href="#">Next</a>';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
        }
    });
    paginationContainer.appendChild(nextButton);
}

function updatePagination() {
    // Calculate total pages based on the number of items and items per page
    totalPages = Math.ceil(items.length / itemsPerPage);

    // Create pagination buttons based on the calculated total pages
    createPaginationButtons(totalPages);

    // Update the displayed items based on the current page
    // ... (your logic for updating the displayed items)
}