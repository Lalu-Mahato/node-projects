const router = require('express').Router();
const reportController = require('@controllers/ReportController');

router.get('/report/reschedule-tracker-report', reportController.trackerReport);

router.get('/health-check', (req, res) => res.send({ message: 'App running...' }));

module.exports = router;
