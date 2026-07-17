// 全站日期自动更新脚本
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const monthYearOptions = { year: 'numeric', month: 'long' }; // 格式：July 2026
    const fullDateOptions = { year: 'numeric', month: 'long', day: 'numeric' }; // 格式：July 17, 2026

    const monthYearString = now.toLocaleDateString('en-US', monthYearOptions);
    const fullDateString = now.toLocaleDateString('en-US', fullDateOptions);

    // 1. 自动填充标题里的 (Month Year)
    // 凡是 HTML 里写着 <span class="update-month-year"></span> 的地方都会自动变
    document.querySelectorAll('.update-month-year').forEach(el => {
        el.innerText = monthYearString;
    });

    // 2. 自动填充页脚的完整日期
    // 凡是 HTML 里 id 为 current-date 的地方都会自动变
    const footerDate = document.getElementById('current-date');
    if (footerDate) {
        footerDate.innerText = fullDateString;
    }
});
