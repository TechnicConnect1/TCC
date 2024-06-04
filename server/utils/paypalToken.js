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

exports.createOrder = async () => {
    const paypalToken = await paypalToken();

    const response = axios({
        url: `${process.env.PAYPAL_BASE_URL}/v2/checkout/orders`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${paypalToken}`
        },
        data: JSON.stringify({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    items: [
                        {
                            name: '',
                            description: '',
                            quantity: 1,
                            unit_amount: {
                                currency_code: 'BRL',
                                value: ''
                            }
                        }
                    ],
                    amount: {
                        currency_code: 'BRL',
                        value: '',
                        breakdown: {
                            currency_code: 'BRL',
                            value: '',
                        }
                    },
                }
            ],
            application_context: {
                return_url: 'localhost:8000/complete-order',
                cancel_url: 'localhost:8000/cancel-order',
                shipping_preference: 'NO_SHIPPING',
                user_action: 'PAY_NOW',
                brand_name: 'Technic Connect'
            }
        })
    });
    return response.data.links.find(link => link.rel === 'approve').href;
};

this.createOrder.then(result => console.log(result));