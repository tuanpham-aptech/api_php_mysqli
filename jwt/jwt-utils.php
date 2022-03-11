<?php
// Tạo JWT gồm header, payload, secret 
function generate_jwt($headers, $payload, $secret = 'secret') {
	// mã hoá chuỗi header 
	$headers_encoded = base64url_encode(json_encode($headers));
	// mã hoá chuỗi payload 
	$payload_encoded = base64url_encode(json_encode($payload));
	// mã hoá thuật toán SHA từ header, payload và secret
	$signature = hash_hmac('SHA256', "$headers_encoded.$payload_encoded", $secret, true);
	// valid chuỗi signature sau khi mã hoá 
	$signature_encoded = base64url_encode($signature);
	// kết hợp 3 phần header, payload, secret để tạo thành JWT 
	$jwt = "$headers_encoded.$payload_encoded.$signature_encoded";
	// trả về chuỗi JWT 
	return $jwt;
}

function is_jwt_valid($jwt, $secret = 'secret') {
	// cắt chuỗi JWT theo dấu chấm thành 3 phần header, payload và signature
	$tokenParts = explode('.', $jwt);
	$header = base64_decode($tokenParts[0]);
	$payload = base64_decode($tokenParts[1]);
	$signature_provided = $tokenParts[2];

	// kiểm tra thời gian hết hạn
	$expiration = json_decode($payload)->exp;
	$is_token_expired = ($expiration - time()) < 0;

	// xây dựng chữ ký dựa trên header và payload  bằng cách sử dụng secret(Khoá bí mật )
	$base64_url_header = base64url_encode($header);
	$base64_url_payload = base64url_encode($payload);
	// băm chuỗi header và payload theo thuật toán của header và khoá bí mật 
	$signature = hash_hmac('SHA256', $base64_url_header . "." . $base64_url_payload, $secret, true);
	// mã hoá giá trị băm thu được 
	$base64_url_signature = base64url_encode($signature);

	// xác minh nó khớp với chữ ký được cung cấp trong jwt
	$is_signature_valid = ($base64_url_signature === $signature_provided);
	// kiểm tra nếu hết thời gian hoặc không khớp với chữ ký cung cấp jwt 
	if ($is_token_expired || !$is_signature_valid) {
		return FALSE;
	} else {
		return TRUE;
	}
}
// valid chuỗi 
function base64url_encode($str) {
	// chuỗi thay thế các ký tự + bằng - và / bằng _  tiếp đó sử dụng rtrim loại bỏ các dấu = 
    return rtrim(strtr(base64_encode($str), '+/', '-_'), '=');
}
// author
function get_authorization_header(){
	$headers = null;
	
	if (isset($_SERVER['Authorization'])) {
		$headers = trim($_SERVER["Authorization"]);
	} else if (isset($_SERVER['HTTP_AUTHORIZATION'])) { 
		$headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
		// nếu tồn tại hàm apache_request_headers
	} else if (function_exists('apache_request_headers')) {
		$requestHeaders = apache_request_headers();
		
		$requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
		//print_r($requestHeaders);
		if (isset($requestHeaders['Authorization'])) {
			$headers = trim($requestHeaders['Authorization']);
		}
	}
	
	return $headers;
}
// 
function get_bearer_token() {
    $headers = get_authorization_header();
	
    // kiểm tra header 
    if (!empty($headers)) {
		// kiểm tra chuỗi header có so khớp pattern /Bearer\s(\S+)/  
        if (preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
			// trả về kết quả nếu so khớp 
            return $matches[1];
        }
    }
    return null;
}