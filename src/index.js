require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const hbs = require('express-handlebars');
const flash = require('connect-flash');


const session = require('express-session');

require('./config/dbConfig');


app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60}
}));


app.use(flash());

//variables globales

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.danger_msg = req.flash('danger_msg')
    next()
    
})

const userRoutes = require('./routes/user.routes');
const tasksRouter = require('./routes/tasks.routes');

app.use(express.urlencoded({ extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    layoutsDir : path.join(app.get('views'), 'layouts'),
    partialsDir : path.join(app.get('views'), 'partials'),
    extname : '.hbs',
    defaultLayout : 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault : true,
        allowProtoMethodsByDefault: true
    }
}))

app.set('view engine', '.hbs');

app.use(userRoutes);

app.use(tasksRouter);

/*
app.use((err,req, res, nex) =>{
    res.status(500).render('errors/serverError')
})
*/

app.listen(process.env.PORT || 3000, console.log(`running in port ${process.env.PORT || 3000}`))