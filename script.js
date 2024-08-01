// API key and base URL
const API_KEY = 'e4e7e57749eb4cfba714ba23739acff2';
const BASE_URL = 'https://newsapi.org/v2/';

// Fetch top headlines
async function fetchTopHeadlines() {
    try {
        const response = await fetch(`${BASE_URL}top-headlines?country=us&apiKey=${API_KEY}`);
        const data = await response.json();
        displayHeadlines(data.articles);
    } catch (error) {
        console.error('Error fetching top headlines:', error);
    }
}

// Display top headlines
function displayHeadlines(articles) {
    const container = document.getElementById('top-headlines-container');
    container.innerHTML = '';
    articles.forEach(article => {
        const articleElem = document.createElement('article');
        articleElem.innerHTML = `
            <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description || 'No description available'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        container.appendChild(articleElem);
    });
}

// Search articles
document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = document.getElementById('search-query').value;
    try {
        const response = await fetch(`${BASE_URL}everything?q=${query}&apiKey=${API_KEY}`);
        const data = await response.json();
        displaySearchResults(data.articles);
    } catch (error) {
        console.error('Error searching articles:', error);
    }
});

// Display search results
function displaySearchResults(articles) {
    const container = document.getElementById('search-results');
    container.innerHTML = '';
    articles.forEach(article => {
        const articleElem = document.createElement('article');
        articleElem.innerHTML = `
            <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description || 'No description available'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        container.appendChild(articleElem);
    });
}

// Fetch news sources
async function fetchNewsSources() {
    try {
        const response = await fetch(`${BASE_URL}sources?apiKey=${API_KEY}`);
        const data = await response.json();
        displaySources(data.sources);
    } catch (error) {
        console.error('Error fetching news sources:', error);
    }
}

// Display news sources
function displaySources(sources) {
    const container = document.getElementById('sources-container');
    container.innerHTML = '';
    sources.forEach(source => {
        const sourceElem = document.createElement('div');
        sourceElem.className = 'source';
        sourceElem.innerHTML = `
            <h3>${source.name}</h3>
            <p>Category: ${source.category}</p>
            <p>Description: ${source.description}</p>
            <p><a href="${source.url}" target="_blank">Visit Source</a></p>
        `;
        container.appendChild(sourceElem);
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    fetchTopHeadlines();
    fetchNewsSources();
});
