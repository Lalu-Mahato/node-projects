const router = require('express').Router();
const excelRoutes = require('./excel.routes');

router.use('/excel', excelRoutes);

// default route
router.get('/', (req, res) => {
    return res.send({ messgae: 'App running...' });
});

module.exports = router;
