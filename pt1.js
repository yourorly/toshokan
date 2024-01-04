document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const bookCards = document.querySelectorAll('.book-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            bookCards.forEach(book => {
                if (filter === 'all' || book.dataset.genre === filter) {
                    book.style.display = '';
                } else {
                    book.style.display = 'none';
                }
            });
        });
    });
});