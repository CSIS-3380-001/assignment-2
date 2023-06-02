let router = require("express").Router();

// Routes
router.get("/", (req, res) => {
    res.send(require("./templates/index_html.js"));
});

router.post("/", (req, res) => {
    
    let index_html = require("./templates/index_html.js");

    if(!validate(req.body)) {
        result = "Error in input";
        index_html = index_html.replace('<p id="result"></p>', `<p id="result">Result: ${result}</p>`);
    } else {

        // Calculate BMI
        // BMI = weight (kg) ÷ height^2 (m^2)
        let heightInMeters = req.body.height / 100;
        let bmi = req.body.weight / (heightInMeters * heightInMeters);


        // BMI Categories:
        if (bmi < 18.6) {
            result = `Under Weight`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result = `Normal`;
        } else {
            result = `Over Weight`;
        }

        // Replace the <p id="result"></p> with the result
        index_html = index_html.replace('<p id="result"></p>', `<p id="result">Result: for age(${req.body.age} years), height(${req.body.height} cm) and weight(${req.body.weight} kgs) - bmi category is ${result}.</p>`);
    }

    res.send(index_html);
});

function validate(params) {
    if(params.age == null || params.age == "" || isNaN(params.age)) {
        return false;
    }

    if(params.weight == null || params.weight == "" || isNaN(params.weight)) {
        return false;
    }

    if(params.height == null || params.height == "" || isNaN(params.height)) {
        return false;
    }

    return true;
}