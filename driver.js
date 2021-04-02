"use strict";

const io = require("socket.io-client");

const host = "http://localhost:3000";

const socket = io.connect(host);

socket.on("pickup", pickup);

function pickup(payload) {
  setTimeout(() => {
    console.log("*** PICKUP EVENT *** ");
    console.log(new Date());
    console.log(`DRIVER: picked up order ${payload.orderID}`);
    console.log("================================");
    socket.emit("in-transit", payload);
  }, 1500);

  setTimeout(() => {
    console.log("*** DELIVERED EVENT ***");
    socket.emit("delivered", payload);
  }, 3000);
}

module.exports = pickup;
