document.addEventListener('DOMContentLoaded', () => {
    loadLatestNews();
});

function loadLatestNews() {
    const newsData = [
        { title: "Новина 1", info: "Деталі Новини 1..." },
        { title: "Новина 2", info: "Деталі Новини 2..." },
        { title: "Новина 3", info: "Деталі Новини 3..." },
        // ... інші новини
    ];

    const latestNewsContainer = document.getElementById('latest-news');

    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        const newsTitle = document.createElement('h3');
        newsTitle.textContent = news.title;
        newsTitle.classList.add('news-title');
        newsTitle.onclick = () => toggleNewsInfo(newsItem, news.info);
        
        newsItem.appendChild(newsTitle);
        latestNewsContainer.appendChild(newsItem);
    });
}

function toggleNewsInfo(newsItem, info) {
    let infoParagraph = newsItem.querySelector('.news-info');
    
    // Якщо інформація вже є, то просто її приховаємо
    if (infoParagraph) {
        newsItem.removeChild(infoParagraph);
        infoParagraph = null;
        return;
    }

    // Інакше створюємо новий абзац з інформацією
    infoParagraph = document.createElement('p');
    infoParagraph.classList.add('news-info');
    infoParagraph.textContent = info;
    newsItem.appendChild(infoParagraph);
}
