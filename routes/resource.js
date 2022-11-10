var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var electricity_controller = require('../controllers/electricity');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// electricity ROUTES ///
// POST request for creating a electricity.
router.post('/electricity', electricity_controller.electricity_create_post);
// DELETE request to delete electricity.
router.delete('/electricity/:id', electricity_controller.electricity_delete);
// PUT request to update electricity.
router.put('/electricity/:id', electricity_controller.electricity_update_put);
// GET request for one electricity.
router.get('/electricity/:id', electricity_controller.electricity_detail);
// GET request for list of all electricity items.
router.get('/electricity', electricity_controller.electricity_list);
module.exports = router;