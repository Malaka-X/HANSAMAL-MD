const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'jyQTGa6b#8LveO290bR1_W_GKp73CKSDE3qzD1bOAkWb5F_3k8hU',
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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' : process.env.GITHUB_AUTH_TOKEN,
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'Malaka-X' : process.env.GITHUB_USER_NAME,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? 'YOUR NUMBER' : process.env.OWNER_NUMBER
};
