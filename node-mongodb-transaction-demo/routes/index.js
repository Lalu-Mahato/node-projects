const router = require('express').Router();
const userControllers = require('../controllers/user');
const jobControllers = require('../controllers/job');

// User
router.post('/users', userControllers.create);
router.get('/users', userControllers.findAll);

// Job
router.post('/jobs', jobControllers.create);
router.get('/jobs', jobControllers.findAll);

module.exports = router;
