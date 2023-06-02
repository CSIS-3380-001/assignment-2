let express = require("express");
let app = express();
let bodyParser = require("body-parser");
const morgan = require('morgan');


let router = require("./route.js");
let e404_html = require("./templates/e404_html.js");
let _PORT = 3000;

// Middlewares
app.use(morgan(':method :url :status :response-time ms'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))

// Routes
app.use("/", router);

app.use((req, res, next) => {
    res.status(404).send(e404_html);
});  

app.listen(_PORT, () => {
    console.log(`Server is up and running on port http://localhost:${_PORT}`);
});
