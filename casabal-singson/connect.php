<?php

    //database connection
    $con = new mysqli('localhost', 'root', '', 'test');

    if(!$con){
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
    }

    ?>