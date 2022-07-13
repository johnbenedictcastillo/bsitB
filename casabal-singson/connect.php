<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    //database connection
    $con = new mysqli('localhost', 'root', '', 'test');

    if(!$con){
        die(mysqli_error($con))
    }

    ?>