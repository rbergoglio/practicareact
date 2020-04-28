const router = require("express").Router();
let Food = require("../models/food.model");

router.route("/").get((req, res) => {
  Food.find()
    .then(food => res.json(food))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const foodName = req.body.foodName;
  const description = req.body.description;
  const price = Number(req.body.price);
  const imgUrl = req.body.imgUrl;
  const stock = Number(req.body.stock);

  const newFood = new Food({
    foodName,
    description,
    price,
    imgUrl,
    stock
  });

  newFood
    .save()
    .then(() => res.json("Food added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Food.findById(req.params.id)
    .then(food => res.json(food))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Food.findByIdAndDelete(req.params.id)
    .then(() => res.json("Food deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Food.findById(req.params.id)
    .then(food => {
      food.foodName = req.body.foodName;
      food.description = req.body.description;
      food.price = Number(req.body.price);
      food.imgUrl = req.body.imgUrl;
      food.stock = req.body.stock;

      food
        .save()
        .then(() => res.json("Food updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
