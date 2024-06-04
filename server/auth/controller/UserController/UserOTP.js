//Importações
const transporter = require('../../../config/OTPConfig');
const EmailOTP = require('../../model/EmailOTP');
const bcrypt = require('bcrypt');
const User = require('../../model/User');

/* Rota para envio de Email */
exports.emailOTP = async (req, res) => {
    const email = req.headers.email;
    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
        const salt = await bcrypt.genSalt(12);
        const OTPHash = await bcrypt.hash(otp, salt);
        const userExists = await User.findOne({ email: email });

        if (!/\S+@\S+\.\S+/.test(email)) {
            return res.status(422).json({ msg: 'Por favor, digite um email válido!' });
        };

        if (!userExists) {
            return res.status(422).json({ msg: 'Não existe um usuário com este email' });
        };

        transporter.sendMail({
            from: {
                name: 'Technic Connect Team',
                address: 'TechnicConnectTeam@gmail.com'
            },
            to: email,
            subject: "Verificação de Email",
            text: "",
            html: `<body>
            <div id="main" style="margin: auto;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            width: 700px;
            height: 600px;
            border-radius: 25px;
            text-align: center;
            background-color: rgb(112, 110, 110);">

                <div id="title-box" style="height: 100px;
                width: 700px;
                border-radius: 25px 25px 0 0;
                background-color: rgb(70, 151, 218);">
                    <h1 id="title" style="font-weight: 600;
                    font-size: 50px;
                    color:rgb(255, 255, 255);">Confirmação de Email</h1>
                </div>

                <h2 id="text" style="font-weight: 500;
                font-size: 40px;
                color:rgb(255, 255, 255);">Digite o código abaixo para verificarmos a existência do seu Email</h2>

                <h1 id="code" style="font-weight: 700;
                font-size: 100px;
                color:rgb(108, 183, 245);">${otp}</h1>
                
                <h3 id="alert" style="font-weight: 400;
                font-size: 20px;
                color:rgb(255, 255, 255);">Este código expira em 1 hora.</h3>
            </div>
        </body>`
        });

        const newOTPVerification = new EmailOTP({
            email,
            uniqueString: OTPHash,
            createdAt: Date.now(),
            expiresAt: Date.now() + 3600000,
        });

        await newOTPVerification.save();

        res.status(200).json({
            msg: 'E-mail enviado no seu Inbox.',
            data: {
                email: email
            }
        });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        res.status(500).json({ msg: 'Ocorreu um erro ao enviar o email.' });
    };
};

/* Rota para confirmação de OTP */
exports.confirmOTP = async (req, res) => {
    const { otp } = req.body;
    const email = req.headers.email;
    try {
        if (!email || !otp) {
            res.status(422).json({ msg: 'E-mail ou código de verificação inválidos.' })
            return;
        };
        
        const otpMatch = await EmailOTP.findOne({ email });

        if (otpMatch === null) {
            res.status(422).json({ msg: 'Nenhum código de verificação encontrado.' });
            return;
        };

        const userExists = await User.findOne({ email: email });

        if (!userExists) {
            return res.status(422).json({ msg: 'Não existe um usuário com este email' });
        };
        
        const { expiresAt, uniqueString: OTPHash } = otpMatch;

        if (expiresAt < Date.now()) {
            await EmailOTP.deleteOne({ email });
            res.status(500).json({ msg: 'Seu código de verificação expirou, solicite outro código.' })
            return;
        };

        const validOTP = await bcrypt.compare(otp, OTPHash);
        if (validOTP) {
            await User.updateOne({ email }, { verified: true });
            await EmailOTP.deleteOne({ email });
            return res.status(200).json({ msg: 'OTP Confirmado com sucesso!' });
        } else {
            return res.status(422).json({ msg: 'OTP Inválido!' });
        };
    } catch (error) {
        console.error(error)
        res.status(500).json({ msg: error });
    };
};