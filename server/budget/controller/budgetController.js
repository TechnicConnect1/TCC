const Budget = require('../model/Budget.js');

exports.createBudget = async (req, res) => {
    try {
        const { problem_type, problem_details, value, device_model, status,  } = req.body;

    } catch (error) {
        return res.status(500).json({ msg: 'Erro no servidor!' })
    };
};



exports.deleteBudget = async (req, res) => {
    try {
        const { problem_type, problem_details, value, device_model } = req.body;
        
    } catch (error) {
        return res.status(500).json({ msg: 'Erro no servidor!' })
    };
};