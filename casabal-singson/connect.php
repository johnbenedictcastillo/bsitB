<?php

        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
    //database connection
    $conn = new mysqli('localhost', 'root', '', 'test');

    if($conn->connect_error){
        die('Connection failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into userdata(name, email, password)
            values(?,?,?)");
        $stmt->bind_param("sss"$name, $email, $password);
        $stmt->execute();
        echo "Registration Successful";
        $stmt->close();
        $conn->close();
    }

    ?>