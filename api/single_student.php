<?php 
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=utf-8");
header("Access-Control-Allow-Methods: GET");
require('../config/database.php');
require_once '../jwt/jwt-utils.php';

    $id = fixSqlInjection($_GET['id']);
    $sql = "select * from students where id=".$id;
    $result = dbQuery($sql);
    $coutRow = dbNumRows($result);
    // echo $coutRow;
    // die;
    $myArray = array();
    if($coutRow >0 ){
        $row = dbFetchAssoc($result);
            $records = array(
                "id"=>$row["id"],
                "profile_code"=>$row["profile_code"],
                "student_code"=>$row["student_code"],
                "firstname"=>$row["firstname"],
                "lastname"=>$row["lastname"],
                "gender"=>$row["gender"],
                "date_of_birth"=>$row["date_of_birth"],
                "place_of_birth"=>$row["place_of_birth"],
                "race"=>$row["race"],
                "religion"=>$row["religion"],
                "phone"=>$row["phone"],
                "email"=>$row["email"],
                "date_range"=>$row["date_range"],
                "place_issue"=>$row["place_issue"],
                "address"=>$row["address"],
                "identity_number"=>$row["identity_number"],
                "student_status"=>$row["student_status"],
                "note"=>$row["note"],
            );
            array_push($myArray,$records);
            // echo $myArray;
            // die;
        $arr = ['msg'=>'lấy thành công bản ghi !!!','myArray'=>$myArray,'status'=>200];
        echo json_encode($arr);
    }else{
        $arr = ['msg'=>'Lấy ra thất bại !!!','status'=>400];
        echo json_encode($arr);
    }
