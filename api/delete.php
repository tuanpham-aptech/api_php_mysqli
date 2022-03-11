<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=utf-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Creadentials:true");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: *");

require('../config/database.php');
require_once '../jwt/jwt-utils.php';

$bear_token = get_bearer_token();
if (is_jwt_valid($bear_token)) {

    $id = $_GET['id'];

    $query = "select id from students where id = $id";
    $delete_query = "delete from students where id=$id";

    $result = dbQuery($query);
    $coutRow = dbNumRows($result);
    // $myArray = array();
    if ($coutRow > 0) {
        $row = dbQuery($delete_query);
        $arr = ['msg' => 'Bạn đã xoá bản ghi !!!', 'status' => 200];
        echo json_encode($arr);
    } else if ($coutRow < 0) {
        $arr = ['msg' => 'Xoá không thành công !!!', 'status' => 400];
        echo json_encode($arr);
    }
} else {
    $arr = ['msg' => 'Token sai hoặc đã hết hiệu lực xin kiểm tra lại!!!', 'status' => 403];
    echo json_encode($arr);
}
