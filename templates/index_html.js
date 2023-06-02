module.exports = `
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="bmi.css">
    <link rel="stylesheet" href="bmi.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BMI checker</title>
    <link rel="stylesheet" href="bmi.css">
</head>

<body>
    <div class="header">
        <div class="wrapper">
          <form method="post" action="/">
            <h1>BMI calculator</h1>
            <p>Insert Your Age</p>
            <input type="text" id="age" name="age" value="">
            <p>Insert Weight in Kg</p>
            <input type="text" id="weight" name="weight" value="">
            <br>
            <p>Insert Height in cm</p>
            <input type="text" id="height" name="height" value="">
            <br>
            <button id="calc">check</button>
            <p id="result"></p>
          </form>
        </div>
    </div>
 
</body>

</html>`;