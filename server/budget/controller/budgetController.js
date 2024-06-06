const Budget = require('../model/Budget.js');

exports.createBudget = async (req, res) => {
    try {
        const technicianId = req.user._id
        const { problem_type, problem_details, value, device_model, status } = req.body;

        const newBudget = new Budget({ technicianId: technicianId, problem_type, problem_details, value, device_model, status });

        await newBudget.save();
    } catch (error) {
        return res.status(500).json({ msg: 'Erro no servidor!' })
    };
};
 
exports.updateBudget = async (req, res) => {
    const id = req.headers.id;
    const { problem_type, problem_details, value, device_model, status } = req.body;
    const budget = { problem_type, problem_details, value, device_model, status };

    try {
        const updatedBudget = await Budget.updateOne({ _id: id }, budget);

        if (updatedBudget.matchedCount === 0) {
            return res.status(404).json({ msg: 'Orçamento não encontrado!' });
        } else {
            res.status(201).json({ msg: `O orçamento ${updatedBudget} foi alterado com sucesso!` });
        };
    } catch (error) {
        res.status(500).json({ msg: error });
    };
}

exports.deleteBudget = async (req, res) => {
    const id = req.headers.id;
    const budget = await Budget.findOne({ _id: id });

    if (!budget) {
        return res.status(404).json({ msg: 'Orçamento não encontrado!' });
    };

    try {
        await Budget.deleteOne({ _id: id });
        res.status(200).json({ msg: 'O orçamento foi deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ msg: error });
    };

};