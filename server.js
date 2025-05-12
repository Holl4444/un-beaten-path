import { createServer } from 'node:http';
import * as dotenv from 'dotenv';
import { getDataFromDB } from './database/db.js';
import addRes from './utils/addResponse.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

const server = createServer(async (req, res) => {
    const destinations = await getDataFromDB()

    if (req.url === '/api' && req.method === 'GET') {
        addRes(res, {data: destinations})

    } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
        const continent = req.url.slice(15);
        const continentDests = destinations.filter(dest => dest.continent.toLowerCase() === continent.toLowerCase());
        
        addRes(res, { data: continentDests });

    } else {
        addRes(res, {
          code: 404,
          data: {
            error: 'not found',
            message: 'The requested route does not exist',
          },
        });
    }

});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));