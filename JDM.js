const toggleBtn = document.getElementById('theme-toggle');
 
function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (toggleBtn) {
        toggleBtn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
}
 

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
});
 
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const current = document.body.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });
}
 
 

const searchInput = document.getElementById('car-search');
const carCards = document.querySelectorAll('.car-card');
 
if (searchInput && carCards.length > 0) {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
 
        carCards.forEach(card => {
            const name = card.getAttribute('data-name') || '';
            const year = card.getAttribute('data-year') || '';
            const type = card.getAttribute('data-type') || '';
            const combined = `${name} ${year} ${type}`.toLowerCase();
 
            if (combined.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        const noResults = document.getElementById('no-results');
        if (noResults) {
            const anyVisible = [...carCards].some(c => c.style.display !== 'none');
            noResults.style.display = anyVisible ? 'none' : 'block';
        }
    });
}
 
 

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});