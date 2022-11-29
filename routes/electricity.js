var express = require('express');
const electricity_controlers= require('../controllers/electricity');
var router = express.Router();

/* GET home page. */
router.get('/', electricity_controlers.electricity_view_all_Page);

/* GET detail electricity page */
router.get('/detail', electricity_controlers.electricity_view_one_Page);

/* GET create electricity page */
router.get('/create', electricity_controlers.electricity_create_Page);

/* GET delete electricity page */
router.get('/delete', electricity_controlers.electricity_delete_Page);


// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET update electricity page */ 
router.get('/update', secured, electricity_controlers.electricity_update_Page); 

module.exports = router;
