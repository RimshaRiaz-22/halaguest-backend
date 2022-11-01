const MessageModel = require("../models/msgModel");
const usersModel = require("../models/usersModel");

exports.addMsg = (req, res) => {
    try {
        const { from, to, message,order_id } = req.body;
        const data = MessageModel.create({
          message: { text: message },
          users: [from, to],
          sender: from,
          order_id:order_id
        });
    
        if (data) return res.json({ msg: "Message added successfully." });
        else return res.json({ msg: "Failed to add message to the database" });
      } catch (ex) {
        next(ex);
      }
}

exports.getMsg = (req, res) => {
    try {
        const { from, to ,order_id} = req.body;
        const messages = MessageModel.find({ users: {
                    $all: [from, to],
                },order_id:order_id
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
exports.getUsersByOrder = (req, res) => {
    const orderId = req.params.orderId;
    usersModel.find({ order_id:orderId }, function (err, foundResult) {
        try {
          res.json(foundResult)
        } catch (err) {
          res.json(err)
        }
      })
}
