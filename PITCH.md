# Trend-Pulse

## Overview
**Trend-Pulse** is a dynamic Single Page Application (SPA) designed to provide users with the latest trending news from a variety of sources. The application integrates HTML, CSS, and JavaScript to deliver a seamless and interactive news experience. By leveraging a public API, Trend-Pulse aggregates real-time news, allowing users to stay informed about the most current headlines effortlessly.

## Core Features of MVP

1. **Real-Time News Feed**
   - Display the latest news headlines from multiple sources.
   - Automatically refresh the feed to show the most recent articles.

2. **Category Filtering**
   - Filter news by categories such as Technology, Sports, Entertainment, and more.
   - Allow users to browse topics of interest with ease.

3. **Search Functionality**
   - Implement a search bar to find specific news topics or keywords.
   - Provide relevant results based on user input.

4. **Responsive Design**
   - Ensure compatibility with desktops, tablets, and smartphones.
   - Offer a clean, user-friendly interface for optimal readability and navigation.

## API Integration

- **API:** [NewsAPI](https://newsapi.org/)
  - Provides access to the latest news headlines and articles from various sources, as well as search functionality for specific topics.

## Project Requirements and Implementation

1. **Frontend Technology:**
   - **HTML:** Structure the content and layout of the application.
   - **CSS:** Style the application to ensure a visually appealing and responsive design.
   - **JavaScript:** Handle API requests, process data, and manage user interactions.

2. **Asynchronous Data Handling:**
   - Fetch news data asynchronously from NewsAPI using `fetch` or `axios`.
   - Use JSON format to handle communication between the client and the API.

3. **Event Listeners:**
   - Implement at least three distinct event listeners for functionalities such as filtering, searching, and toggling themes.
   - Each event listener will have a unique callback function using JavaScript's `.addEventListener()`.

4. **Array Iteration:**
   - Use array methods like `map`, `forEach`, or `filter` to manipulate and display news data.

5. **Single Page Application:**
   - Ensure all interactions occur on a single page without redirects or reloads.

## Challenges Expected

- **Handling Real-Time Updates:** Efficiently managing real-time data updates and ensuring the application reflects the latest news.
- **Asynchronous Data Management:** Ensuring smooth asynchronous operations while handling API data.
- **Responsive Design:** Creating a design that is both visually appealing and functional across different devices.

## Meeting Project Requirements

- **API Integration:** Utilizes NewsAPI for fetching and displaying news data.
- **Event Handling:** Implements multiple event listeners for user interactivity.
- **Array Iteration:** Processes and manipulates data using JavaScript array methods.
- **Single Page Application:** Adheres to the requirement of running entirely on a single HTML page.
