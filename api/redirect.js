import {bhLP, getLP, whLP} from "./config";

export default async function handler(req, res) {
    const userAgent = req.headers['user-agent'] || '';

    const lp = getLP(userAgent);

    // Get the User-Agent from the request headers

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(lp);

    res.end();
}
