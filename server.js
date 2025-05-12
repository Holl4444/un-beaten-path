import { createServer } from 'node:http';
import * as dotenv from 'dotenv';
import { getDataFromDB } from './database/db.js';
import addRes from './utils/addResponse.js';
import filterData from './utils/filterData.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

const server = createServer(async (req, res) => {
    const destinations = await getDataFromDB()

    if (req.url === '/api' && req.method === 'GET') {
        addRes(res, {data: destinations})

    } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
        const continent = filterData(destinations, req.url);        
        addRes(res, { data: continent });

    } else if (req.url.startsWith('/api/country') && req.method === 'GET') {
        const country = filterData(destinations, req.url);               
        addRes(res, { data: country });

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