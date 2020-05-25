const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        userID: Number,
        leader1: Number,
        leader2: Number,
        leader3: Number,
    }
);

module.exports = mongoose.model("Data", DataSchema);