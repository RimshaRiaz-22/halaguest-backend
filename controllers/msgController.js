const MessageModel = require("../models/msgModel");
const orderModel = require("../models/orderModel");
const usersModel = require("../models/usersModel");

exports.addMsg = (req, res) => {
  try {
    const { from, to, message, order_id } = req.body;
    const data = MessageModel.create({
      message: { text: message },
      users: [from, to],
      sender: from,
      order_id: order_id
    });
    // console.log(data)

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (ex) {
    next(ex);
  }
}
exports.addMsgBroadcast = (req, res) => {
  orderModel.find({ _id: req.body.order_id }, function (err, foundResult) {
    try {
      // res.json(foundResult)
      const driverId = foundResult[0].driver_id;
      const dispacherId = foundResult[0].dispacher_id;
      const hotelId = foundResult[0].hotel_id;
      const guestId = foundResult[0].guest_id;
      try {
        // const { from, to, message,order_id } = req.body;

        const data = MessageModel.create({
          message: { text: req.body.message },
          users: [driverId, dispacherId],
          sender: driverId,
          order_id: req.body.order_id
        });
        const data1 = MessageModel.create({
          message: { text: req.body.message },
          users: [driverId, hotelId],
          sender: driverId,
          order_id: req.body.order_id
        });
        const data2 = MessageModel.create({
          message: { text: req.body.message },
          users: [driverId, guestId],
          sender: driverId,
          order_id: req.body.order_id
        });
        // console.log(data,data1,data2)
      
        if (data && data1 && data2) return res.json({ msg: "Messages added successfully." });
        else return res.json({ msg: "Failed to add message to the database" });
      } catch (ex) {
        next(ex);
      }

    } catch (err) {
      res.json(err)
    }
  })
  // try {
  //     const { from, to, message,order_id } = req.body;

  //   //   const data = MessageModel.create({
  //   //     message: { text: message },
  //   //     users: [from, to],
  //   //     sender: from,
  //   //     order_id:order_id
  //   //   });

  //   //   if (data) return res.json({ msg: "Message added successfully." });
  //   //   else return res.json({ msg: "Failed to add message to the database" });
  //   } catch (ex) {
  //     next(ex);
  //   }
}
exports.getMultiMsgs = (req, res) => {
  try {
    const order_id  = req.params.order_id;
    const messages = MessageModel.find({
      // users: {
      //   $all: [from, to],
      // }, 
      order_id: order_id
    }, (error, result) => {
      if (error) {
        res.send(error)
      } else {
        // console.log(result);

        // const projectedMessages = result.map((msg) => {
        //   return {
        //     fromSelf: msg.sender.toString() === from,
        //     message: msg.message.text,
        //   };
        
      
        // });
        res.json(result);
      }
    })
  } catch (ex) {
    next(ex);
  }
}
exports.getMsg = (req, res) => {
  try {
    const { from, to, order_id } = req.body;
    const messages = MessageModel.find({
      users: {
        $all: [from, to],
      }, 
      order_id: order_id
    }, (error, result) => {
      if (error) {
        res.send(error)
      } else {
        // console.log(result);

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
  usersModel.find({ order_id: orderId }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
}
