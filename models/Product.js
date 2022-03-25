const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true, 
        },
        image: {
            type: String,
            required: true,
        },
        categories: {
            type: Array,
            required: true,
        },
        size: {
            type: String,
        },
        color: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamp: true
    }
)

module.exports = mongoose.model("Product", ProductSchema)