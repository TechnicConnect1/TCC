const Technician = require('../../model/Technician');
const transporter = require('../../config/OTPConfig');
const EmailOTP = require('../../model/EmailOTP');
const bcrypt = require('bcrypt');

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const Id = req.params.id;
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
        const salt = await bcrypt.genSalt(12);
        const OTPHash = await bcrypt.hash(otp, salt);

        // Validar o email
        if (!email) {
            res.status(422).json({ msg: 'Email inválido' })
        };

        const isTechnician = await Technician.findById(Id);

        if (isTechnician.email !== email) {
            res.status(422).json({ msg: 'Email inválido' })
        }

        // Checar se o Usuário existe
        const TechnicianExists = await Technician.findOne({ email: email });

        if (!TechnicianExists) {
            return res.status(422).json({ msg: 'Não existe um usuário com este email!' });
        };

        // Checar se o usuário é verificado
        if (!TechnicianExists.verified) {
            return res.status(404).json({ msg: 'Usuário não verificado!' });
        };

        transporter.sendMail({
            from: {
                name: 'Technic Connect Team',
                address: 'TechnicConnectTeam@gmail.com'
            },
            to: email,
            subject: "Redefinição de Senha",
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
                    color:rgb(255, 255, 255);">Redefinição de Senha</h1>
                </div>

                <h2 id="text" style="font-weight: 400;
                font-size: 40px;
                color:rgb(255, 255, 255);">Digite o código abaixo para confirmar a redefinição da sua senha.</h2>

                <h1 id="code" style="font-weight: 700;
                font-size: 100px;
                color:rgb(108, 183, 245);">${otp}</h1>
                
                <h3 id="alert" style="font-weight: 400;
                font-size: 20px;
                color:rgb(255, 255, 255);">Este código expira em 1 hora.</h3>
            </div>
        </body>`
        });

        const newOTPVerification = await new EmailOTP({
            userId: Id,
            uniqueString: OTPHash,
            createdAt: Date.now(),
            expiresAt: Date.now() + 3600000,
        });

        await newOTPVerification.save();

        res.status(200).json({
            msg: 'E-mail enviado no seu Inbox.',
            data: {
                userId: Id,
                email: email
            }
        });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        res.status(500).json({ msg: 'Ocorreu um erro ao enviar o email.' });
    };
};

exports.changePassword = async (req, res) => {
    const { otp, newPassword } = req.body;
    const Id = req.params.id;
    try {
        if (!Id || !otp || !newPassword) {
            res.status(422).json({ msg: 'Código de verificação ou Senha inválidos.' });
            return;
        };

        const otpMatch = await EmailOTP.findOne({ userId: Id });

        if (!otpMatch) {
            res.status(422).json({ msg: 'Nenhum código de verificação encontrado.' });
            return;
        };

        const { expiresAt, uniqueString: OTPHash } = otpMatch;

        if (expiresAt < Date.now()) {
            await EmailOTP.deleteOne({ userId });
            res.status(500).json({ msg: 'Seu código de verificação expirou, solicite outro código.' })
            return;
        };

        const validOTP = await bcrypt.compare(otp, OTPHash);

        if (!/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/.test(newPassword)) {
            res.status(422).json({ msg: 'A nova senha deve conter entre 6 e 15 caracteres e incluir pelo menos uma letra maiúscula, um número e um caractere especial.' });
            return;
        };

        const salt = await bcrypt.genSalt(12);
        const newPasswordHash = await bcrypt.hash(newPassword, salt);

        await Technician.updateOne({ cod_technician: Id }, { password: newPasswordHash });

        await EmailOTP.deleteOne({ userId: Id });

        return res.status(200).json({ validOTP });
    } catch (error) {
        console.error(error)
        res.status(500).json({ msg: error });
    };
};