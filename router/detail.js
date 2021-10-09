const express = require("express");

const process = express.Router();

require("../db/conn");
const Detail = require("../models/detailschema");

// using async await
process.post("/detail", async (req, res) => {
  const { serial, store_name, procurl, reqip, procstatus, proctype, procdate } =
    req.body;

  if (
    !serial ||
    !store_name ||
    !procurl ||
    !reqip ||
    !procstatus ||
    !proctype
  ) {
    return res.status(422).json({ error: "Invalid details, Please Check" });
  }

  if(serial % 9 !== 0){
      return res.status(422).json({error: "Invalid Serial Number, Please Check"})
  }

  try {
    const detailsExist = await Detail.findOne({
      serial: serial,
      store_name: store_name,
      procurl: procurl,
      reqip: reqip,
      procstatus: procstatus,
      proctype: proctype,
    //   procdate: procdate,
    });

    if (detailsExist) {
      return res.status(422).json({ error: "Details Already Exist" });
    }
    const detail = new Detail({
      serial,
      store_name,
      procurl,
      reqip,
      procstatus,
      proctype,
      procdate,
    });

    await detail.save();

    res.status(201).json({ message: "Detail added successfully" });
  } catch (err) {
    console.log(err);
  }
});

// process.post("/detail", (req, res) => {
//   const { serial, store_name, procurl, reqip, procstatus, proctype, procdate } =
//     req.body;

//   if (
//     !serial ||
//     !store_name ||
//     !procurl ||
//     !reqip ||
//     !procstatus ||
//     !proctype
//   ) {
//     return res.status(422).json({ error: "Invalid details, Please Check" });
//   }

//   Detail.findOne({
//     serial: serial,
//     store_name: store_name,
//     procurl: procurl,
//     reqip: reqip,
//     procstatus: procstatus,
//     proctype: proctype,
//     procdate: procdate,
//   })
//     .then((detailsExist) => {
//       if (detailsExist) {
//         return res.status(422).json({ error: "Details Already Exist" });
//       }
//       const detail = new Detail({
//         serial,
//         store_name,
//         procurl,
//         reqip,
//         procstatus,
//         proctype,
//         procdate,
//       });

//       detail
//         .save()
//         .then((result) => {
//           res.status(201).json({ message: "Detail added successfully" });
//         })
//         .catch((error) => {
//           res
//             .status(500)
//             .json({ error: error, message: "failed to update detail" });
//         });
//     })
//     .catch((error) => console.log(error));
// });

module.exports = process;
