const express = require('express');
const router = express.Router();
const FormController = require('../controllers/FormController');

//route to subnmit
router.post('/submit', FormController.submitForm);

module.exports = router;
