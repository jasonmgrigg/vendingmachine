var mongoose = require('mongoose');

// Activity Schema
var purchaseSchema = mongoose.Schema({
  item:{
    type:String,
    required: true
  },
  date:{
    type:Date,
    required: true
  }
});

var Purchase = module.exports = mongoose.model('Purchase', purchaseSchema);

// Get All Purchases
module.exports.getPurchases = function(callback, limit){
  Purchase.find(callback).limit(limit);
}

// Get Purchase by Id
module.exports.getPurchaseById = function(id, callback){
  Purchase.findById(id, callback);
}

// Add Purchases
module.exports.addPurchase = function(purchase, callback){
  Purchase.create(purchase, callback);
}

// Update Purchase by id
module.exports.updatePurchase = function(id, purchase, options, callback){
  var query = {_id: id};
  var update = {
    item: vending.item,
    date: vending.date
  }
  Purchase.findOneAndUpdate(query, update, options, callback);
}

// Delete Purchase by id
module.exports.removePurchase = function(id, callback){
  var query = {_id: id};
  Purchase.remove(query, callback);
}
