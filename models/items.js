var mongoose = require('mongoose');

// Activity Schema
var itemSchema = mongoose.Schema({
  item:{
    type:String,
    required: true
  },
  quantity:{
    type:Number,
    required: true
  },
  price:{
    type:Number,
    required: true
  }
});

var Item = module.exports = mongoose.model('Item', itemSchema);

// Get All Items
module.exports.getItems = function(callback, limit){
  Item.find(callback).limit(limit);
}

// Get Item by Id
module.exports.getItemById = function(id, callback){
  Item.findById(id, callback);
}

// Add Item
module.exports.addItem = function(item, callback){
  Item.create(item, callback);
}

// Update Item by id
module.exports.updateItem = function(id, item, options, callback){
  var query = {_id: id};
  var update = {
    item: vending.item,
    quantity: vending.quantity,
    price: vending.price
  }
  Item.findOneAndUpdate(query, update, options, callback);
}

// Delete Item by id
module.exports.removeItem = function(id, callback){
  var query = {_id: id};
  Item.remove(query, callback);
}
