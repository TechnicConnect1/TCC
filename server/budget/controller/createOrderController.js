const axios = require('axios');
require('dotenv').config();
const paypalToken = require('../../utils/paypalToken.js');
const Budget = require('../model/Budget.js')
const Technician = require('../../auth/model/TechnicianData.js');

exports.createOrder = async () => {
    const id = req.headers.budgetId;
    const budgetData = Budget.findOne({ _id: id });
    const technicianData = Technician.findOne({ user: budgetData.technicianId });
    const response = axios({
        url: `${process.env.PAYPAL_BASE_URL}/v2/checkout/orders`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${paypalToken()}`
        },
        data: JSON.stringify({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    items: [
                        {
                            name: `${technicianData.business_name}`,
                            description: `Orçamento para: ${budgetData.device_model}`,
                            quantity: 1,
                            unit_amount: {
                                currency_code: 'BRL',
                                value: `${budgetData.value}`
                            }
                        }
                    ],
                    amount: {
                        currency_code: 'BRL',
                        value: `${budgetData.value}`,
                        breakdown: {
                            currency_code: 'BRL',
                            value: `${budgetData.value}`,
                        }
                    },
                }
            ],
            application_context: {
                return_url: `localhost:${process.env.API_PORT}/complete-order`,
                cancel_url: `localhost:${process.env.API_PORT}/cancel-order`,
                shipping_preference: 'NO_SHIPPING',
                user_action: 'PAY_NOW',
                brand_name: 'Technic Connect'
            }
        })
    });
    return response.data.links.find(link => link.rel === 'approve').href;
};

this.createOrder.then(result => console.log(result));