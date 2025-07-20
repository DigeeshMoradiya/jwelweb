const express = require('express');
const router = express.Router();
const settingController = require('../controllers/setting.controller');
const { verifyAdminToken } = require('../config/token');

router.get('/admin/get-setting',verifyAdminToken, settingController.getAllSettings);
router.post('/admin/setting',verifyAdminToken, settingController.createOrUpdateSetting);

module.exports = router;
