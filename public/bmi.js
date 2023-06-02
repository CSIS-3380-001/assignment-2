document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    
    let result = document.getElementById("result");

    // hit API
    fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            age: age,
            height: height,
            weight: weight
        })
    })
    .then(function(response) {
        if(response.status != 200) {
            throw new Error("Invalid input");
        }
        return response.json();
    })
    .then(function(data) {
        result.innerHTML = `Your BMI is ${data.bmi.toFixed(2)} and you are ${data.result}`;
    })
    .catch(function(err) {
        result.innerHTML = `${err}`;
    });

});