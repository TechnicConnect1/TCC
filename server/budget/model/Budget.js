const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema({
    technicianId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    used_resources: [{
        type: String
    }],
    labor: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    device_model: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Paid', 'Not Paid'],
        default: 'Not Paid'
    }
}, { timestamps: true }
);

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;