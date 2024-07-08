const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

router.get('/readProvince', locationController.getProvinces);
router.get('/readCountry', locationController.getCountries);
router.get('/readCity', locationController.getCities);

module.exports = router;
