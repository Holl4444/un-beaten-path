export default function addRes(res, { header = 'application.json', code = 200, data = null }) {
    res.setHeader('Content-Type', header);
    res.statusCode = code;
    res.end(JSON.stringify(data));
    return res;
}