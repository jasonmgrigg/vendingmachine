var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Item = require('./models/items');
Purchase = require('./models/purchases');
Money = require('./models/monies');

// Connect to mongoose
mongoose.connect('mongodb://localhost/vendingmachine');
var db = mongoose.connection;

//Place holder if you don't go to the correct endpoint to start
app.get('/', function(req, res){
  res.send('Please use /api/...');
});

//Gets all item information
app.get('/api/customer/items', function(req, res){
  Item.getItems(function(err, items){
    if(err){
      throw err;
    }
    res.json(items);
  });
});

//Gets all purchases information
app.get('/api/vendor/purchases', function(req, res){
  Purchase.getPurchases(function(err, purchases){
    if(err){
      throw err;
    }
    res.json(purchases);
  });
});

//Gets all money information
app.get('/api/vendor/monies', function(req, res){
  Money.getMonies(function(err, monies){
    if(err){
      throw err;
    }
    res.json(monies);
  });
});

//Adds an item
app.post('/api/vendor/items', function(req, res){
  var item = req.body;
  Item.addItem(item, function(err, item){
    if(err){
      throw err;
    }
    res.json(item);
  });
});

//Adds a purchase
app.post('/api/vendor/purchases', function(req, res){
  var purchase = req.body;
  Purchase.addPurchase(purchase, function(err, purchase){
    if(err){
      throw err;
    }
    res.json(purchase);
  });
});

//Adds a money
app.post('/api/vendor/monies', function(req, res){
  var money = req.body;
  Money.addMoney(money, function(err, money){
    if(err){
      throw err;
    }
    res.json(money);
  });
});

//Updates an item
app.put('/api/customer/items/:_id', function(req, res){
  var id = req.params._id
  var activity = req.body;
  Item.updateVending(id, item, {}, function(err, item){
    if(err){
      throw err;
    }
    res.json(item);
  });
});

//Updates a purchase
app.put('/api/vendor/purchases/:_id', function(req, res){
  var id = req.params._id
  var activity = req.body;
  Purchase.updatePurchase(id, item, {}, function(err, purchase){
    if(err){
      throw err;
    }
    res.json(purchase);
  });
});

//Updates a money
app.put('/api/vendor/monies/:_id', function(req, res){
  var id = req.params._id
  var activity = req.body;
  Money.updateMoney(id, money, {}, function(err, money){
    if(err){
      throw err;
    }
    res.json(money);
  });
});

//Gets an item by id
app.get('/api/customer/items/:_id', function(req, res){
  Item.getItemById(req.params._id, function(err, item){
    if(err){
      throw err;
    }
    res.json(item);
  });
});

//Gets a Purchase by id
app.get('/api/vendor/purchases/:_id', function(req, res){
  Purchase.getPurchaseById(req.params._id, function(err, purchase){
    if(err){
      throw err;
    }
    res.json(purchase);
  });
});

//Gets a Money by id
app.get('/api/vendor/monies/:_id', function(req, res){
  Money.getMoneyById(req.params._id, function(err, money){
    if(err){
      throw err;
    }
    res.json(money);
  });
});

//Deletes an item by id
app.delete('/api/customer/items/:_id', function(req, res){
  var id = req.params._id
  Item.removeItem(id, function(err, item){
    if(err){
      throw err;
    }
    res.json(item);
  });
});

//Deletes a purchase by id
app.delete('/api/vendor/purchases/:_id', function(req, res){
  var id = req.params._id
  Purchase.removePurchase(id, function(err, purchase){
    if(err){
      throw err;
    }
    res.json(purchase);
  });
});

//Deletes a money by id
app.delete('/api/vendor/monies/:_id', function(req, res){
  var id = req.params._id
  Money.removeMoney(id, function(err, money){
    if(err){
      throw err;
    }
    res.json(money);
  });
});


app.listen(3000);
console.log('Running on Port 3000');
