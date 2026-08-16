const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const exportController = require('../controllers/exportController');

router.get('/', verifyToken, exportController.getExports);
router.post('/', verifyToken, exportController.createExport);

module.exports = router;