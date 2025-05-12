export default function addRes(res, { header = 'application.json', code = 200, data = null }) {
    res.setHeader('Content-Type', header);
    // CORS: Allow access from any origin / port /protocol for 'GET' methods
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.statusCode = code;
    res.end(JSON.stringify(data));
    return res;
}