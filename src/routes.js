const { Router } = require('express');

const router = Router();

const ContactController = require('./app/Controllers/ContactController');

router.get('/contacts', ContactController.);

module.exports = router;
