// 全站自动日期更新脚本 - Payout Ledger 专用
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const fullYear = now.getFullYear();
    const monthYearOptions = { year: 'numeric', month: 'long' }; // July 2026
    const fullDateOptions = { year: 'numeric', month: 'long', day: 'numeric' }; // July 17, 2026

    // 1. 自动填充页脚版权年份 (针对 id="current-year")
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.innerText = fullYear;

    // 2. 自动填充标题年份 (针对 class="update-year")
    // 专门解决 index.html 里的 2026 自动更新
    document.querySelectorAll('.update-year').forEach(el => {
        el.innerText = fullYear;
    });

    // 3. 自动填充标题月份年份 (针对 class="update-month-year")
    const monthYearString = now.toLocaleDateString('en-US', monthYearOptions);
    document.querySelectorAll('.update-month-year').forEach(el => {
        el.innerText = monthYearString;
    });

    // 4. 自动填充页脚完整同步日期 (针对 id="current-date")
    const footerDate = document.getElementById('current-date');
    if (footerDate) {
        footerDate.innerText = now.toLocaleDateString('en-US', fullDateOptions);
    }
});
