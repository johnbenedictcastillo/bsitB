<?php
include 'connect.php'
    if(isset($_POST['register']))
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql="insert into `usersdata`(name, email, password)
    value('$name','$email','$password')";
    $result=mysqli_query($con,$sql);

    if($result){
        echo"Registered successfully!"
    }else{
        die(mysqli_error($con));
    }

?>









<!DOCTYPE html>
<html>

<head>
    <title>Register Form</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" type="text/css" href="/casabal-singson/style/design.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="/casabal-singson/js/main.js" defer></script>

</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-md-6 d-none d-md-block image-container"></div>

            <div class="col-lg-6 col-md-6 form-container">
                <div class="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
                    <div class="logo mb-3">
                        <img src="/casabal-singson/photos/logo.png" width="150px">
                    </div>
                    <div class="heading mb-4">
                        <h4>Create an account</h4>
                    </div>
                    <form action="/casabal-singson/connect.php" method="post">
                        <div class="form-input">
                            <span><i class="fa fa-user"></i></span>
                            <input type="text" class="form-control" id="name" placeholder="Full Name" name="name" required>
                        </div>
                        <div class="form-input">
                            <span><i class="fa fa-envelope"></i></span>
                            <input type="email" class="form-control" id="email" placeholder="Email Address" name="email" required>
                        </div>
                        <div class="form-input">
                            <span><i class="fa fa-lock"></i></span>
                            <input type="password" class="form-control" id="password" placeholder="Password" name="password" required>
                        </div>
                        <div class="row mb-3">
                            <div class="col-12 d-flex">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="cb1">
                                    <label class="custom-control-label text-white" for="cb1">I agree all terms &
                                        conditions</label>
                                </div>
                            </div>
                        </div>
                        <div class="text-left mb-3">
                            <button type="submit" class="btn" names="register">Register</button>
                        </div>
                        <div class="text-center mb-2">
                            <div style="color: #777">Already have an account
                                <a href="/casabal-singson/login.html" class="login-link">Login here</a>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</body>

</html>