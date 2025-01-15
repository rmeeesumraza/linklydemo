//Set your blackhat landing page
const bhLPP = `
<html>
    <body>
        <iframe style="display: block; position: absolute; width: 100%; height: 100%;" width="100%" height="100%" frameborder="0" src="https://xjsdiaoqpwepa.myfunnelish.com/imbassd-1736879310456939"></iframe>
    </body>
</html>
`;

//Set your whitehat landing page
const whLPP = `
<html>
    <body>
        <iframe style="display: block; position: absolute; width: 100%; height: 100%;" width="100%" height="100%" frameborder="0" src="https://www.blundstone.com/rustic-brown-premium-leather-chelsea-boots-womens-style-585"></iframe>
    </body>
</html>
`;

//Turn blackhat lander on or off - true = Black Hat - False = White Hat
// const isRedirectEnabled = true; 

// if (isRedirectEnabled == true) {
//   bhLP = whLP;
// }

const settings = {
    bhLP: bhLPP,
    whLP: whLPP;
}

export default settings;
