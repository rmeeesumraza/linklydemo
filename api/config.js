// This file exports a boolean value to control redirection logic
const isRedirectEnabled = false; // Change this value as needed


let bhLP = `
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
    <iframe src="https://jzudipwaq.myfunnelish.com/tt-shp-rw"></iframe>
</body>
</html>
    `;

const whLP = `
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
</html>`;


function getLP(userAgent) {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    //TODO: Checks for isMobileDevice
    return isRedirectEnabled ? bhLP : whLP;
}

export {isRedirectEnabled, getLP, bhLP, whLP};
