const router = require('express').Router();

const {renderTask, renderProfile, getPlanner} = require('../controllers/controllersPrivateRoutes')


router.get('/planner', renderTask);

router.post('/planner', getPlanner);

router.get('/profile', renderProfile);



module.exports = router;