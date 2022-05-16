const mongoose = require('mongoose');

//Schema name (local) - ItemSchema
const ItemSchema = new mongoose.Schema({

    userID: {
        type: String,
        required: false,
        trim: true
    },

    productName: {
        type: String,
        required: true,
        trim: true
    },

    productImage: {
        type: String,
        required: false,
        trim: true
    },

    productDescription: {
        type: String,
        required: true,
        trim: true
    },

    productPrice: {
        type: Number,
        required: true,
        trim: true
    },


    productQuantity: {
        type: Number,
        required: true,
        trim: true
    },

});

/**
 * Schema name on the database - Items
 * 
 * Exported model to be used on the insert item route
 */
const Item = mongoose.model("Items", ItemSchema);
module.exports = Item;