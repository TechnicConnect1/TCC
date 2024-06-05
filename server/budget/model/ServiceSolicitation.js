const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    problem_type: {
        type: String,
        required: true
    },
    problem_details: {
        type: String,
        required: true
    },
    device_model: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Avaliable', 'Not avaliable'],
        default: 'Avaliable'
    },
}, { timestamps: true }
);

const Service = mongoose.model('Service Solicitation', serviceSchema);

module.exports = Service;