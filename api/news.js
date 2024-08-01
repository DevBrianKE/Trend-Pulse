// api/news.js
export default async function handler(req, res) {
    const { query, source } = req.query;
    const API_KEY = process.env.NEWS_API_KEY; // Access the environment variable

    try {
        const url = new URL('https://newsapi.org/v2/everything');
        url.searchParams.append('q', query);
        if (source) {
            url.searchParams.append('sources', source);
        }
        url.searchParams.append('apiKey', API_KEY);

        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching news data' });
    }
}
    