var mongoose = require('mongoose');

// Activity Schema
var moneySchema = mongoose.Schema({
  amount:{
    type:Number,
    required: true
  }
});

var Money = module.exports = mongoose.model('Money', moneySchema);

// Get All Purchases
module.exports.getMonies = function(callback, limit){
  Money.find(callback).limit(limit);
}

// Get Purchase by Id
module.exports.getMoniesById = function(id, callback){
  Money.findById(id, callback);
}

// Add Purchases
module.exports.addMonies = function(money, callback){
  Money.create(money, callback);
}

// Update Purchase by id
module.exports.updateMonies = function(id, money, options, callback){
  var query = {_id: id};
  var update = {
    amount: vending.amount
  }
  Money.findOneAndUpdate(query, update, options, callback);
}

// Delete Purchase by id
module.exports.removeMonies = function(id, callback){
  var query = {_id: id};
  Money.remove(query, callback);
}
