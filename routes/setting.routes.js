const express = require('express');
const router = express.Router();
const settingController = require('../controllers/setting.controller');
const { verifyAdminToken } = require('../config/token');
const upload = require('../config/upload');

router.get('/admin/get-setting',verifyAdminToken, settingController.getAllSettings);
router.post('/admin/setting',verifyAdminToken, settingController.createOrUpdateSetting);


router.post('/upload-file', upload.array('files', 10), (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: 'No files uploaded' });
    }
  
    const uploadedFiles = req.files.map(file => ({
      file: file.filename,
      path: `/uploads/${file.filename}`
    }));
  
    res.status(200).json({
      success: true,
      files: uploadedFiles
    });
  });

module.exports = router;
