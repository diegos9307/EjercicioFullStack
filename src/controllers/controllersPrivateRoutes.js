const privateUser = require('../routes/privateroutes');

const renderPlanner = (req,res) => {
    res.render('planner');
}

const renderProfile = (req,res) => {
    console.log(req.session)
    res.render('profile');
}

const getPlanner = (req,res)=>{
    const {task, taskDescription, taskDate} = req.body
    console.log(req.body)};

module.exports = {
    renderPlanner,
    renderProfile,
    getPlanner
}
