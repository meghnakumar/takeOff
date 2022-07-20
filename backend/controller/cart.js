// @author: Kalpit Machhi
// @description: This file contains login for adding item to cart, getting all cart items for a particular user, and deleting item from the cart.
// @feature: Cart Management

const Cart = require("../models/cartModel");
const mongodb = require("mongodb");
const axios = require("axios").default;
const baseURL = require("../config/URL.json")["baseURL"];

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

module.exports.getItems = (req, res) => {
  Cart.find({ userId: req.params.userId })
    .then((info) => {
      var output = [];
      let userId = req.params.userId;

      for (let i = 0; i < info.length; i++) {
        let itemId = info[i].itemId;

        if (info[i].type === "hotel") {
          const res = axios
            .get(baseURL + `/hotels/get/hotelBookings/` + userId)
            .then((r) => {
              r = r.data;
              for (let j = 0; j < r.length; j++) {
                if (r[j]._id === itemId) {
                  let item = {};

                  item["_id"] = info[i]._id;
                  item["type"] = info[i].type;
                  item["ItemId"] = info[i].itemId;
                  item["userId"] = info[i].userId;
                  item["price"] = info[i].price;

                  item["hotelName"] = r[j].hotelName;
                  item["numberOfRooms"] = r[j].numberOfRooms;
                  item["startDate"] = r[j].startDate;
                  item["endDate"] = r[j].endDate;
                  item["location"] = r[j].location;

                  output.push(item);
                }
              }
            });
        } else if (info[i].type === "flight") {
          const res = axios
            .get(baseURL + `/flightbookings/` + userId)
            .then((r) => {
              r = r.data;
              for (let j = 0; j < r.length; j++) {
                if (r[j]._id === itemId) {
                  let item = {};

                  item["_id"] = info[i]._id;
                  item["type"] = info[i].type;
                  item["ItemId"] = info[i].itemId;
                  item["userId"] = info[i].userId;
                  item["price"] = info[i].price;

                  item["flightCompany"] = r[j].flightCompany;
                  item["source"] = r[j].source;
                  item["destination"] = r[j].destination;
                  item["arrivalTime"] = r[j].arrivalTime;
                  item["departureTime"] = r[j].departureTime;

                  output.push(item);
                }
              }
            });
        } else if (info[i].type === "event") {
          const res = axios
            .get(baseURL + `/events/booking/fetch/` + userId)
            .then((r) => {
              r = r.data;
              for (let j = 0; j < r.length; j++) {
                if (r[j]._id === itemId) {
                  let item = {};

                  item["_id"] = info[i]._id;
                  item["type"] = info[i].type;
                  item["ItemId"] = info[i].itemId;
                  item["userId"] = info[i].userId;
                  item["price"] = info[i].price;

                  item["title"] = r[j].title;
                  item["seat"] = r[j].seat;
                  item["date"] = r[j].date;
                  item["city"] = r[j].city;

                  output.push(item);
                }
              }
            });
        } else if (info[i].type === "tour") {
          const res = axios
            .get(baseURL + `/tours/booking/fetch/` + userId)
            .then((r) => {
              r = r.data;
              for (let j = 0; j < r.length; j++) {
                if (r[j]._id === itemId) {
                  let item = {};

                  item["_id"] = info[i]._id;
                  item["type"] = info[i].type;
                  item["ItemId"] = info[i].itemId;
                  item["userId"] = info[i].userId;
                  item["price"] = info[i].price;

                  item["seat"] = r[j].seat;
                  item["destination"] = r[j].destination;
                  item["date"] = r[j].date;

                  output.push(item);
                }
              }
            });
        }
      }

      delay(500).then(() => {
        res.json(output);
      });
    })
    .catch((err) => {
      // console.log("Error in fetching cart data.");
      res.status(404).json({ error: "Unable to find info" });
    });
};

module.exports.addItem = (req, res) => {
  const item = new Cart({
    type: req.body.type,
    userId: req.body.userId,
    itemId: req.body.itemId,
    price: req.body.price,
  });

  const result = item
    .save()
    .then(() => {
      // console.log("Item is added to the cart.");
    })
    .catch(() => {
      // console.log("Item insertion failed!");
    });

  res.json(result);
};

module.exports.deleteItem = (req, res) => {
  const cartId = req.params.cartId;

  const result = Cart.deleteOne({ _id: new mongodb.ObjectId(cartId) })
    .then(() => {
      // console.log("Item is deleted.");
    })
    .catch(() => {
      // console.log("Failed to delete item!");
    });

  res.json(result);
};
