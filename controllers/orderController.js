const orderModel = require("../models/orderModel");
const mongoose = require("mongoose");
const moment = require('moment');
const UsersModel = require("../models/usersModel");
const driverModel = require("../models/driverModel");
exports.getAllOrders = (req, res) => {
  orderModel.find({}, (error, result) => {
    if (error) {
      res.send(error)
    } else {
      res.send(result)
    }
  }).sort({ $natural: -1 })
    .populate("condition_id")
    .populate("guest_id")
    .populate("hotel_id")
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
  // .populate("driver_id")
}
exports.getOrdersScheduled = (req, res) => {
  const Status = req.params.status;
  orderModel.find({ status: Status }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getSpecificOrder = (req, res) => {
  const OrderId = req.params.OrderId;
  orderModel.find({ _id: OrderId }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  }).populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getHotelOrders = (req, res) => {
  const HotelId = req.params.hotelId;
  orderModel.find({ hotel_id: HotelId }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getHotelOrdersByTime = (req, res) => {
  const HotelId = req.params.hotelId;
  orderModel.find({ hotel_id: HotelId }, function (err, foundResult) {
    try {
      res.json(foundResult.sort((a, b) => a.flight_date - b.flight_date))

    } catch (err) {
      res.json(err)
    }
  }).sort({ $natural: -1 })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getDispacherOrders = (req, res) => {
  const DispacherId = req.params.dispacherId;
  orderModel.find({ dispacher_id: DispacherId }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getDispacherOrdersByTime = (req, res) => {
  const DispacherId = req.params.dispacherId;
  orderModel.find({ dispacher_id: DispacherId }, function (err, foundResult) {
    try {
      // res.json(foundResult)
      res.json(foundResult.sort((a, b) => a.flight_date - b.flight_date))

    } catch (err) {
      res.json(err)
    }
  }).sort({ $natural: -1 })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getDispacherOrdersScheduled = (req, res) => {
  const DispacherId = req.params.dispacherId;
  orderModel.find({ dispacher_id: DispacherId, status: 'schedule' }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getDispacherOrdersCompleted = (req, res) => {
  const DispacherId = req.params.dispacherId;
  orderModel.find({ dispacher_id: DispacherId, status: 'completed' }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getHotelOrdersScheduled = (req, res) => {
  const HotelId = req.params.hotelId;
  orderModel.find({ hotel_id: HotelId, status: 'schedule' }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getHotelOrdersCompleted = (req, res) => {
  const HotelId = req.params.hotelId;
  orderModel.find({ hotel_id: HotelId, status: 'completed' }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getDriverOrders = (req, res) => {
  const DriverId = req.params.driverId;
  orderModel.find({ driver_id: DriverId, status: 'schedule' }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.driverOrdersByTime = (req, res) => {
  const DriverId = req.params.driverId;
  orderModel.find({ driver_id: DriverId, status: 'schedule' }, function (err, foundResult) {
    try {
      res.json(foundResult.sort((a, b) => a.flight_date - b.flight_date))
    } catch (err) {
      res.json(err)
    }
  }).sort({ $natural: -1 })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getDriverOrdersAll = (req, res) => {
  const DriverId = req.params.driverId;
  orderModel.find({ driver_id: DriverId }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getGuestOrdersByTime = (req, res) => {
  const GuestId = req.params.guest_id;
  orderModel.find({ guest_id: GuestId }, function (err, foundResult) {
    try {
      res.json(foundResult.sort((a, b) => a.flight_date - b.flight_date))

    } catch (err) {
      res.json(err)
    }
  }).sort({ $natural: -1 })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getGuestOrdersAll = (req, res) => {
  const GuestId = req.params.guest_id;
  orderModel.find({ guest_id: GuestId }, function (err, foundResult) {
    try {
      // res.json( foundResult.sort((a, b) => a.flight_date - b.flight_date))
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  }).sort({ $natural: -1 })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getGuestOrdersByStatus = (req, res) => {
  const GuestId = req.body.guest_id;
  const Status = req.body.status;

  orderModel.find({ guest_id: GuestId, status: Status }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getDispacherOrdersByStatus = (req, res) => {
  const DispacherId = req.body.dispacherId;
  const Status = req.body.status;
  orderModel.find({ dispacher_id: DispacherId, status: Status }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getDriverOrdersByStatus = (req, res) => {
  const DriverId = req.body.driver_id;
  const Status = req.body.status;

  orderModel.find({ driver_id: DriverId, status: Status }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getHotelOrdersByStatus = (req, res) => {
  const HotelId = req.body.hotel_id;
  const Status = req.body.status;

  orderModel.find({ hotel_id: HotelId, status: Status }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getDriverOrdersCompleted = (req, res) => {
  const DriverId = req.params.driverId;
  orderModel.find({ driver_id: DriverId, status: 'completed' }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getDriverOrdersOngoing = (req, res) => {
  const DriverId = req.params.driverId;
  orderModel.find({ driver_id: DriverId, status: 'ongoing' }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.getDriverOrdersCancel = (req, res) => {
  const DriverId = req.params.driverId;
  orderModel.find({ driver_id: DriverId, status: 'cancel' }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
    .populate("condition_id")
    .populate({
      path: 'guest_id',
      populate: {
        path: 'hotel_id',
        model: 'hotel',
      }
    })
    .populate("car_type_id")
    .populate({
      path: 'driver_id',
      populate: {
        path: 'dispacher_id',
        model: 'dispacher',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'vehicle_detail_id',
        model: 'vehicle_detail',
      }
    })
    .populate({
      path: 'driver_id',
      populate: {
        path: 'doc_id',
        model: 'driver_documents',
      }
    })
}
exports.deleteOrder = (req, res) => {
  const OrderId = req.params.OrderId;
  orderModel.deleteOne({ _id: OrderId }, function (err, foundResult) {
    try {
      res.json(foundResult)
    } catch (err) {
      res.json(err)
    }
  })
}
exports.createOrder = async (req, res) => {
  let orderNo = Math.floor((Math.random() * 100000) + 1);
  console.log(orderNo)
  const Createddate = req.body.flight_date;
  const Order = new orderModel({
    _id: mongoose.Types.ObjectId(),
    orderNo: orderNo,
    guest_id: req.body.guest_id,
    hotel_id: req.body.hotel_id,
    pickup_location: req.body.pickup_location,
    pickup_log: req.body.pickup_log,
    pickup_lat: req.body.pickup_lat,
    location: {
      type: 'Point',
      coordinates: [parseFloat(req.body.pickup_log), parseFloat(req.body.pickup_lat)]
    },
    dropoff_location: req.body.dropoff_location,
    dropoff_log: req.body.dropoff_log,
    dropoff_lat: req.body.dropoff_lat,
    condition_id: req.body.condition_id,
    car_type_id: req.body.car_type_id,
    ac: req.body.ac,
    flight_date: moment(Createddate).format("DD/MM/YYYY"),
    flight_time: moment(Createddate).format("h:mm:ss a"),
    driver_notes: req.body.driver_notes,
    estimated_amount: req.body.estimated_amount,
    total_amount: req.body.total_amount,
    status: req.body.status,
    cancellation_reason: req.body.cancellation_reason,
    canceled_by: req.body.canceled_by,
    canceled_by_id: req.body.canceled_by_id,
    driver_id: req.body.driver_id
  });
  try {
    const savedOrder = await Order.save();
    res.json({
      data: savedOrder,
      message: "Order Created successfully"
    })
  } catch (err) {
    res.status(400).send(err);
  }
}
exports.updateOrder = async (req, res) => {
  if (req.body.flight_date === undefined) {
    driverModel.find({ _id: req.body.driver_id }, function (err, foundResult) {
      try {
        // res.json(foundResult[0].dispacher_id[0])
        const updateData = {
          guest_id: req.body.guest_id,
          pickup_location: req.body.pickup_location,
          pickup_log: req.body.pickup_log,
          pickup_lat: req.body.pickup_lat,
          dropoff_location: req.body.dropoff_location,
          dropoff_log: req.body.dropoff_log,
          dropoff_lat: req.body.dropoff_lat,
          condition_id: req.body.condition_id,
          car_type_id: req.body.car_type_id,
          ac: req.body.ac,
          driver_notes: req.body.driver_notes,
          estimated_amount: req.body.estimated_amount,
          total_amount: req.body.total_amount,
          status: req.body.status,
          cancellation_reason: req.body.cancellation_reason,
          canceled_by: req.body.canceled_by,
          canceled_by_id: req.body.canceled_by_id,
          driver_id: req.body.driver_id,
          dispacher_id: foundResult[0].dispacher_id[0],
        }
        const options = {
          new: true
        }
        orderModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
          if (error) {
            res.send(error)
          } else {
            res.send(result)
          }
        })
      } catch (err) {
        res.json(err)
      }
    })
  } else {
    const Createddate = req.body.flight_date;
    driverModel.find({ _id: req.body.driver_id }, function (err, foundResult) {
      try {
        // res.json(foundResult[0].dispacher_id[0])
        const updateData = {
          guest_id: req.body.guest_id,
          pickup_location: req.body.pickup_location,
          pickup_log: req.body.pickup_log,
          pickup_lat: req.body.pickup_lat,
          dropoff_location: req.body.dropoff_location,
          dropoff_log: req.body.dropoff_log,
          dropoff_lat: req.body.dropoff_lat,
          condition_id: req.body.condition_id,
          car_type_id: req.body.car_type_id,
          ac: req.body.ac,
          flight_date: moment(Createddate).format("DD/MM/YYYY"),
          flight_time: req.body.flight_time,
          driver_notes: req.body.driver_notes,
          estimated_amount: req.body.estimated_amount,
          total_amount: req.body.total_amount,
          status: req.body.status,
          cancellation_reason: req.body.cancellation_reason,
          canceled_by: req.body.canceled_by,
          canceled_by_id: req.body.canceled_by_id,
          driver_id: req.body.driver_id,
          dispacher_id: foundResult[0].dispacher_id[0],
        }
        const options = {
          new: true
        }
        orderModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
          if (error) {
            res.send(error)
          } else {
            res.send(result)
          }
        })
      } catch (err) {
        res.json(err)
      }
    })
  }


}
exports.updateOrderStatus = async (req, res) => {
  const updateData = {
    status: req.body.status,

  }
  const options = {
    new: true
  }
  orderModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
    if (error) {
      res.send(error)
    } else {
      res.send(result)
    }

  })

}
exports.updateOrderStatusOngoing = async (req, res) => {
  const OrderId = req.body._id;
  orderModel.find({ _id: OrderId }, function (err, foundResult) {
    try {
      // res.json(foundResult[0].driver_id)
      driverModel.find({ _id: foundResult[0].driver_id }, function (err, foundResult) {
        try {
          // res.json(foundResult)
          const driver_lat = foundResult[0].driver_lat;
          const driver_lng = foundResult[0].driver_log;
          const updateData = {
            status: req.body.status,
            driver_location: {
              type: 'Point',
              coordinates: [parseFloat(driver_lng), parseFloat(driver_lat)]
            },
          }
          const options = {
            new: true
          }
          orderModel.findByIdAndUpdate(OrderId, updateData, options, (error, result) => {
            if (error) {
              res.send(error)
            } else {
              res.send(result)
            }

          })

        } catch (err) {
          res.json(err)
        }
      })

    } catch (err) {
      res.json(err)
    }
  })
  // const updateData = {
  //   status: req.body.status,

  // }
  // const options = {
  //   new: true
  // }
  //     orderModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
  //       if (error) {
  //         res.send(error)
  //       } else {
  //         res.send(result)
  //       }

  // })

}
exports.AcceptOrder = async (req, res) => {
  driverModel.find({ _id: req.body.driver_id }, function (err, foundResult) {
    try {
      // res.json(foundResult[0].dispacher_id[0])
      const updateData = {
        driver_id: req.body.driver_id,
        status: req.body.status,
        dispacher_id: foundResult[0].dispacher_id[0]
      }
      const options = {
        new: true
      }
      orderModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
          res.send(error)
        } else {
          res.send(result)
          const user = new UsersModel({
            _id: mongoose.Types.ObjectId(),
            name: result.guest_id.name,
            image: result.guest_id.img,
            order_id: result._id,
            userId: result.guest_id._id
          })
          user.save((error, result) => {
            if (error) {
              res.send(error)
            } else {
              // res.send(result)
            }
          })
        }
        const userDriver = new UsersModel({
          _id: mongoose.Types.ObjectId(),
          name: result.driver_id.name,
          image: result.driver_id.img,
          order_id: result._id,
          userId: result.driver_id._id
        })
        userDriver.save((error, result) => {
          if (error) {
            res.send(error)
          } else {
            // res.send(result)
          }
        })
        const userDispacher = new UsersModel({
          _id: mongoose.Types.ObjectId(),
          name: result.dispacher_id.name_of_company,
          image: result.dispacher_id.img,
          order_id: result._id,
          userId: result.dispacher_id._id
        })
        userDispacher.save((error, result) => {
          if (error) {
            res.send(error)
          } else {
            // res.send(result)
          }
        })
        const userHotel = new UsersModel({
          _id: mongoose.Types.ObjectId(),
          name: result.hotel_id.hotel_name,
          image: result.hotel_id.img,
          order_id: result._id,
          userId: result.hotel_id._id
        })
        userHotel.save((error, result) => {
          if (error) {
            res.send(error)
          } else {
            // res.send(result)
          }
        })
        
      }).populate('guest_id').populate('driver_id').populate('hotel_id').populate('dispacher_id')

    } catch (err) {
      res.json(err)
    }
  })

}



