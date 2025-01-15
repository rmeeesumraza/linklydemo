import {bhLP, whLP} from './config';

export default function handler(req, res) {
    const bhv = bhLP;
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (isMobileDevice) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(bhv);
    }
    else { 
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(bhv);
    }
    
    res.end();
  }
