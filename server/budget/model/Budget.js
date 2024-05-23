const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema({
    userId: {
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
        enum: ['Avaliable', 'Not avaliable'],
        default: 'Avaliable'
    }
}, { timestamps: true }
);

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;