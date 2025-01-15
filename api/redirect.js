import pSettings from './config';

export default function handler(req, res) {

    console.log(pSettings.isRedirectEnabled);
    console.log(pSettings.bhLP);
    console.log(pSettings.whLP);
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
