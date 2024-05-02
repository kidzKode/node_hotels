const  mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    taste:{
        type: String,
        enum: ['sweet','spicy','sour']
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type: [String],
        default:[]
    },
    num_saled:{
        type: Number,
        default: 0
    }

})

const menuItems = mongoose.model('menuitems',menuItemSchema);

module.exports = menuItems;