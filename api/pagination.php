<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
include('../config/database.php');
include('../jwt/jwt-utils.php');
// get bearer token 
$bear_token = get_bearer_token();

if (is_jwt_valid($bear_token)) {
    // số bản ghi trên 1 trang 
    $per_page = 4;
    if (fixSqlInjection(isset($_GET['page']))) {
        $page = $_GET['page'];
        $start = ($page - 1) * $per_page;
        $sql = "select *from students limit $start,$per_page";
        // truy vấn 
        $result = dbQuery($sql);
        // tổng số bản ghi
        $coutRow = dbNumRows($result);
        // tổng số trang 
        $pages = ceil($coutRow / $per_page);
        $myArray = array();
        if ($coutRow > 0) {
            while ($row = dbFetchAssoc($result)) {

                $records = array(
                    "id" => $row["id"],
                    "profile_code" => $row["profile_code"],
                    "student_code" => $row["student_code"],
                    "firstname" => $row["firstname"],
                    "lastname" => $row["lastname"],
                    "gender" => $row["gender"],
                    "date_of_birth" => $row["date_of_birth"],
                    "place_of_birth" => $row["place_of_birth"],
                    "race" => $row["race"],
                    "religion" => $row["religion"],
                    "phone" => $row["phone"],
                    "email" => $row["email"],
                    "date_range" => $row["date_range"],
                    "place_issue" => $row["place_issue"],
                    "address" => $row["address"],
                    "identity_number" => $row["identity_number"],
                    "student_status" => $row["student_status"],
                    "note" => $row["note"],
                );
                array_push($myArray, $records);
            }
            // var_dump($myArray);

            $arr = ['msg' => 'lấy thành công tất cả bản ghi !!!', 'myArray' => $myArray, 'pages' => $pages, 'status' => 201];
            echo json_encode($arr);
        } else {
            $arr = ['msg' => 'Lấy ra thất bại  !!!', 'status' => 400];
            echo json_encode($arr);
        }
    } else {
        $page = 1;
        $sql = "select *from students limit $page,$per_page";
        // truy vấn 
        $result = mysqli_query($conn, $sql);
        // tổng số bản ghi
        $coutRow = mysqli_num_rows($result);
        // echo $coutRow;
        // die;
        // tổng số trang 
        $pages = ceil($coutRow / $per_page);
        $myArray = array();
        if ($coutRow > 0) {
            while ($row = mysqli_fetch_array($result)) {

                $records = array(
                    "id" => $row["id"],
                    "profile_code" => $row["profile_code"],
                    "student_code" => $row["student_code"],
                    "firstname" => $row["firstname"],
                    "lastname" => $row["lastname"],
                    "gender" => $row["gender"],
                    "date_of_birth" => $row["date_of_birth"],
                    "place_of_birth" => $row["place_of_birth"],
                    "race" => $row["race"],
                    "religion" => $row["religion"],
                    "phone" => $row["phone"],
                    "email" => $row["email"],
                    "date_range" => $row["date_range"],
                    "place_issue" => $row["place_issue"],
                    "address" => $row["address"],
                    "identity_number" => $row["identity_number"],
                    "student_status" => $row["student_status"],
                    "note" => $row["note"],
                );
                array_push($myArray, $records);
            }
            // var_dump($myArray);

            $arr = ['msg' => 'lấy thành công tất cả bản ghi !!!', 'myArray' => $myArray, 'status' => 201];
            echo json_encode($arr);
        } else {
            $arr = ['msg' => 'Lấy ra thất bại  !!!', 'status' => 400];
            echo json_encode($arr);
        }
    }
} else {
    $arr = ['msg' => 'Token sai hoặc đã hết hiệu lực xin kiểm tra lại!!!', 'status' => 403];
    echo json_encode($arr);
}
