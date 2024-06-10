const Service = require('../model/ServiceSolicitation.js');

exports.createService = async (req, res) => {
    try {
        const clientId = req.user._id
        const { problem_type, problem_details, device_model, status } = req.body;

        const newService = new Service({ clientId: clientId, problem_type, problem_details, device_model, status });

        await newService.save();
        return res.status(201).json({ newService });
    } catch (error) {
        return res.status(500).json({ msg: 'Erro no servidor!' });
    };
};
 
exports.updateService = async (req, res) => {
    const id = req.headers.id;
    const { problem_type, problem_details, device_model, status } = req.body;
    const service = { problem_type, problem_details, device_model, status };

    try {
        const updatedService = await Service.updateOne({ _id: id }, service);

        if (updatedService.matchedCount === 0) {
            return res.status(404).json({ msg: 'Orçamento não encontrado!' });
        } else {
            res.status(201).json({ msg: `O orçamento foi alterado com sucesso! \n\n ${updatedService}` });
        };
    } catch (error) {
        res.status(500).json({ msg: error });
    };
};

exports.deleteService = async (req, res) => {
    const id = req.headers.id;
    const service = await Service.findOne({ _id: id });

    if (!service) {
        return res.status(404).json({ msg: 'Orçamento não encontrado!' });
    };

    try {
        await service.deleteOne({ _id: id });
        res.status(200).json({ msg: 'O orçamento foi deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ msg: error });
    };

};