<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
include('../config/database.php');
include('../jwt/jwt-utils.php');
// get bearer token 
$bear_token = get_bearer_token();
if (is_jwt_valid($bear_token)) {
    $profile_code = fixXssInjection($_POST['profile_code']);
    // echo $profile_code;
    // die;
    $student_code = fixXssInjection($_POST['student_code']);
    $firstname = fixXssInjection($_POST['firstname']);
    $lastname = fixXssInjection($_POST['lastname']);
    $gender = fixXssInjection($_POST['gender']);
    $date_of_birth = fixXssInjection($_POST['date_of_birth']);
    $place_of_birth = fixXssInjection($_POST['place_of_birth']);
    $race = fixXssInjection($_POST['race']);
    $religion = fixXssInjection($_POST['religion']);
    $phone = fixXssInjection($_POST['phone']);
    $email = fixXssInjection($_POST['email']);
    $date_range = fixXssInjection($_POST['date_range']);
    $place_issue = fixXssInjection($_POST['place_issue']);
    $address = fixXssInjection($_POST['address']);
    $identity_number = fixXssInjection($_POST['identity_number']);
    $student_status = fixXssInjection($_POST['student_status']);
    $note = fixXssInjection($_POST['note']);

    $insert = "INSERT INTO students(profile_code,student_code,firstname,lastname,gender,date_of_birth,place_of_birth,race,religion,phone,email,date_range,place_issue,address,identity_number,student_status,note) VALUES('$profile_code','$student_code','$firstname','$lastname','$gender','$date_of_birth','$place_of_birth','$race','$religion','$phone','$email','$date_range','$place_issue','$address','$identity_number','$student_status','$note')";
    $result = dbQuery($insert);
    if ($result) {
        $arr = ['msg' => 'Thêm thành công', 'status' => 200];
        echo json_encode($arr);
    } else {
        $arr = ['msg' => 'Thêm thất bại', 'status' => 400];
        echo json_encode($arr);
    }
}else{
    $arr = ['msg'=>'Token sai hoặc đã hết hiệu lực xin kiểm tra lại!!!','status'=>403];
    echo json_encode($arr);
}

