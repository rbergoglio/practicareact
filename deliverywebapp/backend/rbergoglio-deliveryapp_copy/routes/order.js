const router = require("express").Router();
let Order = require("../models/order.model");

router.route("/").get((req, res) => {
  Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const plates = req.body.plates;
  const deliveryman = req.body.deliveryman;
  const total = Number(req.body.total);
  const address = req.body.address;
  const phone = req.body.phone;

  const newOrder = new Order({ plates, deliveryman, total, address, phone });

  newOrder
    .save()
    .then(() => res.json("Order added!"))
    .catch(err => res.status(400).json("Error: " + err));
});
/*
router.route("/update/:id").put((req, res) => {
  Order.findById(req.params.id)
    .then(order => {
      order.plates.push(req.body.orderItem)

      order
        .save()
        .then(() => res.json("Order updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});
*/


module.exports = router;
