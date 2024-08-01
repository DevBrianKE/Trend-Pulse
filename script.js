// API keys and base URLs
const API_KEY = 'e4e7e57749eb4cfba714ba23739acff2';
const BASE_URL = 'https://newsapi.org/v2';

// DOM Elements
const topHeadlinesContainer = document.getElementById('top-headlines-container');
const searchForm = document.getElementById('search-form');
const searchResults = document.getElementById('search-results');
const sourcesContainer = document.getElementById('sources-container');

// Function to fetch and display top headlines
async function fetchTopHeadlines() {
    try {
        const response = await fetch(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
        const data = await response.json();
        displayArticles(data.articles, topHeadlinesContainer);
    } catch (error) {
        console.error('Error fetching top headlines:', error);
        topHeadlinesContainer.innerHTML = '<p>Unable to load top headlines at the moment.</p>';
    }
}

// Function to fetch and display search results
async function searchArticles(query) {
    try {
        const response = await fetch(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`);
        const data = await response.json();
        displayArticles(data.articles, searchResults);
    } catch (error) {
        console.error('Error searching articles:', error);
        searchResults.innerHTML = '<p>Unable to search for articles at the moment.</p>';
    }
}

// Function to fetch and display news sources
async function fetchSources() {
    try {
        const response = await fetch(`${BASE_URL}/sources?apiKey=${API_KEY}`);
        const data = await response.json();
        displaySources(data.sources);
    } catch (error) {
        console.error('Error fetching sources:', error);
        sourcesContainer.innerHTML = '<p>Unable to load sources at the moment.</p>';
    }
}

// Function to display articles in a container
function displayArticles(articles, container) {
    container.innerHTML = articles.map(article => `
        <article>
            <img src="${article.urlToImage || 'default-image.jpg'}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        </article>
    `).join('');
}

// Function to display news sources in a container
function displaySources(sources) {
    sourcesContainer.innerHTML = sources.map(source => `
        <div class="source">
            <h3>${source.name}</h3>
            <p>${source.description}</p>
        </div>
    `).join('');
}

// Event Listener for search form submission
searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const query = document.getElementById('search-query').value;
    searchArticles(query);
});

// Initialize the page by fetching top headlines and sources
fetchTopHeadlines();
fetchSources();
