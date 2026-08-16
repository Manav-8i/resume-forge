const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const documentController = require('../controllers/documentController');

router.get('/', verifyToken, documentController.getDocuments);
router.post('/', verifyToken, documentController.createDocument);

module.exports = router;