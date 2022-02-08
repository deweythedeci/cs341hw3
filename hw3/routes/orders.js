var express = require('express');
var router = express.Router();

//hard coded temporary order values
var order = {topping:"cherry", quantity:1};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(order);
});

module.exports = router;

/*module.exports = function () {
    router.get('/order/:id', (req, res) => {
        res.send('respond with a resource');
    });
    
    router.post('/order/:id', function(req, res) {
        var request = req.body.parse();
        res.send(request.month);
    });
    return router;
}*/