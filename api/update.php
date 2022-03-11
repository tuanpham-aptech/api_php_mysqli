<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=utf-8");
header("Access-Control-Allow-Methods: POST,GET");
require('../config/database.php');
require_once '../jwt/jwt-utils.php';
// lấy ra id 
$bear_token = get_bearer_token();
if (is_jwt_valid($bear_token)) {
    $id = fixXssInjection($_GET['id']);
    $profile_code = fixXssInjection($_POST['profile_code']);
    $student_code = fixXssInjection($_POST['student_code']);
    $firstname = fixXssInjection($_POST['firstname']);
    $lastname = fixXssInjection($_POST['lastname']);
    $gender = fixXssInjection($_POST['gender'])==0?'Nam':'Nữ';

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
    $student_status = fixXssInjection($_POST['student_status'])==0?'Đang học':'Bảo lưu';
    $note = fixXssInjection($_POST['note']);
    //query get id 
    $query = "select id from students where id = $id";
    $update_query = "update students set profile_code='$profile_code',profile_code='$profile_code',student_code='$student_code',firstname='$firstname',lastname='$lastname',gender='$gender',date_of_birth='$date_of_birth',place_of_birth='$place_of_birth',race='$race',religion='$religion',phone='$phone',email='$email',date_range='$date_range',place_issue='$place_issue',address='$address',identity_number='$identity_number',student_status='$student_status',note='$note' where id=$id";
    //lấy ra dữ liệu 
    $result = dbQuery($query);
    // số lượng id đó 
    $coutRow = dbNumRows($result);
    // echo $coutRow;
    // die;
    if ($coutRow > 0) {
        $row = dbQuery($update_query);
        $arr = ['msg' => 'Cập nhật thành công  bản ghi !!!', 'status' => 200];
        echo json_encode($arr);
    } else if ($coutRow < 0) {
        $arr = ['msg' => 'Cập nhật thất bại  !!!', 'status' => 400];
        echo json_encode($arr);
    }
}else{
    $arr = ['msg'=>'Token sai hoặc đã hết hiệu lực xin kiểm tra lại!!!','status'=>403];
    echo json_encode($arr);
}
