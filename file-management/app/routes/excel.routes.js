const router = require('express').Router();
const excelController = require('../controllers/excel.controller');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/upload', upload.single('file'), excelController.upload);

module.exports = router;
