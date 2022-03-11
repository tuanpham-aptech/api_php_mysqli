<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
require_once './config/database.php';
require_once './jwt/jwt-utils.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// get posted data
	
	// $data = json_decode(file_get_contents("php://input", true));
	$email = fixXssInjection($_POST['email']);
	$password = fixXssInjection($_POST['password']);
	
	// tạo câu truy vấn 
	$sql = 'SELECT * FROM users WHERE email = "' . $email . '" AND password = "' . $password . '" LIMIT 1';
	$result = dbQuery($sql);
	// echo dbNumRows($result);
	// die;
	$row = mysqli_num_rows($result);
	// kiểm tra số bản ghi lấy được 
	if($row < 1) {
		$arr = ['msg'=>'Login thất bại !!!','token'=>'','status'=>404];
		echo json_encode($arr);
	} else {
		// lấy ra bản ghi 
		$row = dbFetchAssoc($result);
		
		$email = $row['email'];
		// header 
		$headers = array('alg'=>'HS256','typ'=>'JWT');
		// payload 
		$payload = array('email'=>$email, 'exp'=>(time() +3600));
		
		$jwt = generate_jwt($headers, $payload);
		$arr = ['token'=>$jwt];
		// mã hoá JWT
		echo json_encode($arr);
	}
}
