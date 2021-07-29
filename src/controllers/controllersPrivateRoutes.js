const privateUser = require('../routes/privateroutes');

const renderTask = (req,res) => {
    console.log(req.session)
    res.render('planner');
}

const renderProfile = (req,res) => {
    res.render('profile');
}

const getPlanner = (req,res)=>{
    const {task, taskDescription, taskDate} = req.body
    console.log(req.body)};

module.exports = {
    renderTask,
    renderProfile,
    getPlanner
}
