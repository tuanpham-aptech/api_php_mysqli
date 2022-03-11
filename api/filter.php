<?php 
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=utf-8");
header("Access-Control-Allow-Methods: GET");
require('../config/database.php');
require_once '../jwt/jwt-utils.php';
$bear_token = get_bearer_token();
if (is_jwt_valid($bear_token)) {
    $name = fixSqlInjection($_GET['firstname']);
    $profile_code = fixSqlInjection($_GET['profile_code']);
    $student_code = fixSqlInjection($_GET['student_code']);
    // echo $name;
    // die;
    if($name != ''&& $profile_code != '' && $student_code != ''){

        $sql = "select * from students where firstname like '".$name."' and profile_code like '".$profile_code.""."' and student_code like '".$student_code."'";
        // echo $sql;
        // die;
        $result = dbQuery($sql);
        $coutRow = dbNumRows($result);
        $myArray = array();
        if($coutRow >0){
            while($row = dbFetchAssoc($result)){
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
            }
            $arr = ['msg'=>'lấy thành công bản ghi !!!','coutRow'=>$coutRow,'myArray'=>$myArray,'status'=>200];
            echo json_encode($arr);
        }else{
            $arr = ['msg'=>'Lấy ra thất bại !!!','status'=>400];
            echo json_encode($arr);
        }
    }else{
        $arr = ['msg'=>'Bạn chưa nhập từ khoá tìm kiếm','status'=>400];
        echo json_encode($arr);
    }
}else{
    $arr = ['msg'=>'Token sai hoặc đã hết hiệu lực xin kiểm tra lại!!!','status'=>403];
    echo json_encode($arr);
}
