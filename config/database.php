<?php

$conn = mysqli_connect('localhost','root','','students') or die('Mysql not connected!!!');
mysqli_set_charset($conn,'utf8');

function dbQuery($sql) 
{
	global $conn;
	$result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
	return $result;
}

function dbFetchAssoc($result) 
{
	return mysqli_fetch_assoc($result);
}

function dbNumRows($result) 
{
    return mysqli_num_rows($result);
}

function fixSqlInjection($field) 
{
	global $conn;
	$field = mysqli_real_escape_string($conn, $field);
    return $field;
}

function fixXssInjection($param) 
{
    $param = htmlspecialchars(strip_tags($param));
    return $param;
}

function closeConn() 
{
	global $conn;
	mysqli_close($conn);
}
