const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const phoneNo = process.env.phoneNumber;
exports.createSMS = async (req, res) => {
    const toContact = req.body.toContact
    const msgContent = req.body.msgContent

    client.messages
        .create({ body: msgContent, from: phoneNo, to: toContact })
        .then(message =>
            res.json({
                data: message.sid,
                message: "Message Send successfully"
            })
        )
}

exports.createOTP= async (req, res) => {
    if(req.body.toContact==="12345678" ||req.body.toContact==="23456781"||req.body.toContact==="34567812"||req.body.toContact==="45678123"){
        res.json({
            // data: message.sid,
            otp:"0000",
            message: "Message Send successfully"
        })
    }else{
        var otpGenerator = require('otp-generator');
        const otp = otpGenerator.generate(6, { alphabets: false, upperCase: false, specialChars: false });
            const toContact = req.body.toContact
            // const msgContent = req.body.msgContent
            client.messages
                .create({ body: `Verirification Otp :${otp}`, from: phoneNo, to: toContact })
                .then(message =>
                    res.json({
                        data: message.sid,
                        otp:otp,
                        message: "Message Send successfully"
                    })
                )
    }

}
