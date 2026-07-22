document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const fullYear = now.getFullYear();
    const monthYear = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    const fullDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.innerText = fullYear;
    const dateEl = document.getElementById('current-date');
    if (dateEl) dateEl.innerText = fullDate;
    document.querySelectorAll('.update-year').forEach(el => el.innerText = fullYear);
    document.querySelectorAll('.update-month-year').forEach(el => el.innerText = monthYear);
});
