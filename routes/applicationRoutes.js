const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const applicationController = require('../controllers/applicationController');

router.get('/', verifyToken, applicationController.getApplications);
router.post('/', verifyToken, applicationController.createApplication);

module.exports = router;