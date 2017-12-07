<!DOCTYPE HTML>  
<html>
<head>
  <head>
    <meta name='description' content='Brewers Association Form'>
    <title>Brewers Association | Form</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0">
    <link rel="shortcut icon" href="https://www.brewersassociation.org/wp-content/themes/ba2014/favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link href="styles.css" rel="stylesheet" type="text/css">
  </head>
</head>
<body>  

<?php
// define variables and set to empty values
$errors = array();
$firstNameErr = "";
$name = $firstName = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
// Placeholder for server side validations

  $firstName = test_input($_POST["firstName"]);
  $lastName = test_input($_POST["lastName"]);

}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<?php if($_SERVER["REQUEST_METHOD"] == "POST" && count($errors) == 0) { ?>

  <div class="container">
    <div class="success alert alert-info">
      Your submission has been processed!
    </div>
    <h2>Thank you, <?php echo $firstName; ?></h2>
    <a class="btn btn-success" href="/index.html">Submit Again?</a>
  </div>

<?php } else { ?>

<div class="container">
  <h2 class="text-center">Please fill out the following form</h2>
  <form id="contactform" name="contactform" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Enter first name">
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Enter last name">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" name="email" placeholder="Enter email address">
    </div>
    <div class="form-group">
      <label for="phone">Phone Number</label>
      <input type="text" class="form-control" id="phone" name="phone" placeholder="xxx-xxx-xxxx">
    </div>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" class="form-control" id="username" name="username" placeholder="Enter your username">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" name="password" placeholder="Enter your password">
    </div>
    <div class="form-group">
      <label for="password-confirm">Confirm Password</label>
      <input type="password" class="form-control" id="password-confirm" placeholder="Enter your password again">
    </div>
    <button id="submit_btn" type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>

<?php } ?>

  <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  <script src="scripts.js"></script>
</body>
</html>
