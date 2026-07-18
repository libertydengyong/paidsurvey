import os
from datetime import datetime

# 你的域名
BASE_URL = "https://www.333555.tech/"

def generate_sitemap():
    files = [f for f in os.listdir('.') if f.endswith('.html')]
    
    sitemap_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    sitemap_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    # 获取当前日期
    today = datetime.now().strftime('%Y-%m-%d')
    
    for file in files:
        # 处理首页
        if file == 'index.html':
            url = BASE_URL
            priority = "1.0"
        else:
            url = BASE_URL + file
            priority = "0.8"
            
        sitemap_content += f'  <url>\n    <loc>{url}</loc>\n    <lastmod>{today}</lastmod>\n    <priority>{priority}</priority>\n  </url>\n'
    
    sitemap_content += '</urlset>'
    
    with open('sitemap.xml', 'w', encoding='utf-8') as f:
        f.write(sitemap_content)

if __name__ == "__main__":
    generate_sitemap()
