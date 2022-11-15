var express = require('express');
const electricity_controlers= require('../controllers/electricity');
var router = express.Router();

/* GET home page. */
router.get('/', electricity_controlers.electricity_view_all_Page);

/* GET detail electricity page */
router.get('/detail', electricity_controlers.electricity_view_one_Page);

module.exports = router;
