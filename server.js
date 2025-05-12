import { createServer } from 'node:http';
import * as dotenv from 'dotenv';
import { getDataFromDB } from './database/db.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

const server = createServer(async (req, res) => {
    const destinations = await getDataFromDB()

    if (req.url === '/api' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(destinations));

    } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        const continent = req.url.slice(15);
        console.log(continent);
        const continentDests = destinations.filter(dest => dest.continent.toLowerCase() === continent.toLowerCase());
        res.end(JSON.stringify(continentDests));

    } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "not found", message: "The requested route does not exist" }))
    }

});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));