const axios = require('axios');
require('dotenv').config();

async function paypalToken() {
    const response = await axios({
        url: `${process.env.PAYPAL_BASE_URL}/v1/oauth2/token`,
        method: 'post',
        data: 'grant_type=user_credentials',
        auth: {
            username: process.env.PAYPAL_USER,
            password: process.env.PAYPAL_SECRET
        }
    });
    return response.data.access_token;
};

module.exports = paypalToken;