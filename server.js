let express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 3000,
    config = require('config'),
    routes = require("./app/routes");

// db connection
mongoose.connect(config.DB_URI);
let db = mongoose.connection;
db.on('error',
console.error.bind(console, 'connection error'));

// hide log in test
if(config.util.getEnv('NODE_ENV') === 'test') {
  app.use(morgan('combined'));
}
//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/json'}));
// use routes
app.use(require("./app/routes"));
// start server
app.listen(port, ()=> {
  console.log(`server is running on pott ${port}`);
});
// export for testing
module.exports = app;
