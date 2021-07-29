const router = require('express').Router();

const {renderPlanner, renderProfile, getPlanner} = require('../controllers/controllersPrivateRoutes')


router.get('/planner', renderPlanner);

router.post('/planner', getPlanner);

router.get('/profile', renderProfile);



module.exports = router;