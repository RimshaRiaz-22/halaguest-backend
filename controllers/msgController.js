const MessageModel = require("../models/msgModel");

exports.addMsg = (req, res) => {
    try {
        const { from, to, message } = req.body;
        const data = MessageModel.create({
          message: { text: message },
          users: [from, to],
          sender: from,
        });
    
        if (data) return res.json({ msg: "Message added successfully." });
        else return res.json({ msg: "Failed to add message to the database" });
      } catch (ex) {
        next(ex);
      }
}

exports.getMsg = (req, res) => {
    try {
        const { from, to } = req.body;
        const messages = MessageModel.find({ users: {
                    $all: [from, to],
                }
            }, (error, result) => {
            if (error) {
                res.send(error)
            } else {
                const projectedMessages = result.map((msg) => {
                        return {
                            fromSelf: msg.sender.toString() === from,
                            message: msg.message.text,
                        };
                    });
                    res.json(projectedMessages);
            }
        })
     
    } catch (ex) {
        next(ex);
    }
}
