let router = require("express").Router();

// Routes
router.post("/", (req, res) => {

    if(!validate(req.body)) {
        res.status(400).send({
            error: "Invalid input"
        });
        return;
    }

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

    res.send({
        bmi: bmi,
        result: result
    });
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

module.exports = router;