function items(req, res){
  Item.getItems(function(err, items){
    if(err){
      throw err;
    }
    res.json(items);
  });
};

module.exports = items
