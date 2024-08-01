// API key and base URL for News API
const apiKey = 'e4e7e57749eb4cfba714ba23739acff2';
const baseUrl = 'https://newsapi.org/v2';

// Function to fetch top headlines
async function fetchTopHeadlines() {
    try {
        const response = await fetch(`${baseUrl}/top-headlines?country=us&apiKey=${apiKey}`);
        const data = await response.json();
        displayTopHeadlines(data.articles);
    } catch (error) {
        console.error('Error fetching top headlines:', error);
        document.getElementById('top-headlines-container').innerHTML = '<p>Failed to load top headlines. Please try again later.</p>';
    }
}

// Function to display top headlines
function displayTopHeadlines(articles) {
    const container = document.getElementById('top-headlines-container');
    container.innerHTML = '';

    if (articles.length === 0) {
        container.innerHTML = '<p>No top headlines available.</p>';
        return;
    }

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <img src="${article.urlToImage}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;
        container.appendChild(articleElement);
    });
}

// Function to fetch news sources
async function fetchSources() {
    try {
        const response = await fetch(`${baseUrl}/sources?apiKey=${apiKey}`);
        const data = await response.json();
        displaySources(data.sources);
        populateSourceSelect(data.sources);
    } catch (error) {
        console.error('Error fetching sources:', error);
        document.getElementById('sources-container').innerHTML = '<p>Failed to load news sources. Please try again later.</p>';
    }
}

// Function to display news sources
function displaySources(sources) {
    const container = document.getElementById('sources-container');
    container.innerHTML = '';

    if (sources.length === 0) {
        container.innerHTML = '<p>No news sources available.</p>';
        return;
    }

    sources.forEach(source => {
        const sourceElement = document.createElement('div');
        sourceElement.classList.add('source');
        sourceElement.innerHTML = `
            <h3>${source.name}</h3>
            <p>${source.description}</p>
            <a href="${source.url}" target="_blank">Visit Site</a>
        `;
        container.appendChild(sourceElement);
    });
}

// Function to populate the source select dropdown
function populateSourceSelect(sources) {
    const select = document.getElementById('source-select');
    sources.forEach(source => {
        const option = document.createElement('option');
        option.value = source.id;
        option.textContent = source.name;
        select.appendChild(option);
    });
}

// Function to handle search form submission
document.getElementById('search-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('search-query').value;
    const source = document.getElementById('source-select').value;
    await searchArticles(query, source);
});

// Function to search articles
async function searchArticles(query, source) {
    try {
        const url = new URL(`${baseUrl}/everything`);
        url.searchParams.append('q', query);
        if (source) {
            url.searchParams.append('sources', source);
        }
        url.searchParams.append('apiKey', apiKey);

        const response = await fetch(url);
        const data = await response.json();
        displaySearchResults(data.articles);
    } catch (error) {
        console.error('Error searching articles:', error);
        document.getElementById('search-results').innerHTML = '<p>Failed to load search results. Please try again later.</p>';
    }
}

// Function to display search results
function displaySearchResults(articles) {
    const container = document.getElementById('search-results');
    container.innerHTML = '';

    if (articles.length === 0) {
        container.innerHTML = '<p>No articles found.</p>';
        return;
    }

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <img src="${article.urlToImage}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;
        container.appendChild(articleElement);
    });
}


// Function to handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    // Reset form fields
    event.target.reset();
});

// Fetch top headlines and sources on page load
window.addEventListener('load', function() {
    fetchTopHeadlines();
    fetchSources();
});
