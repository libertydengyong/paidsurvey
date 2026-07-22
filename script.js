document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const fullYear = now.getFullYear();
    const monthYear = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }); // 结果如: July 2026
    const fullDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // 1. 自动填入版权年份 (针对 id="current-year")
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.innerText = fullYear;

    // 2. 自动填入完整验证日期 (针对 id="current-date")
    const dateEl = document.getElementById('current-date');
    if (dateEl) dateEl.innerText = fullDate;

    // 3. 自动更新标题/正文里的年份 (针对 class="update-year")
    document.querySelectorAll('.update-year').forEach(el => {
        el.innerText = fullYear;
    });

    // 4. 自动更新标题里的月份+年份 (针对 class="update-month-year")
    document.querySelectorAll('.update-month-year').forEach(el => {
        el.innerText = monthYear;
    });
});
