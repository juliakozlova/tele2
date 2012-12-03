<?
$hostname = 'localhost';
$username = 'chulakovru';
$password = 'ytV5RS7SMp';
 
// Подключаемся к серверу MySQL
$db = mysql_connect($hostname, $username, $password)
        or die('connect to database failed');
// Выбираем нужную БД
mysql_select_db('chulakovru')
        or die('db not found');
if ($_REQUEST['peoplesOverall'] > 0 && $_REQUEST['social'] != "" && $_REQUEST['late'] != "" && $_REQUEST['wage'] > 0 && $_REQUEST['square'] > 0 && $_REQUEST['lamps'] != "" && $_REQUEST['smokers'] != "" && $_REQUEST['mobile'] !="")
{
		$sql = "INSERT INTO `chulakovru`.`answer` (`id` ,`question_1` ,`question_2` ,`question_3` ,`question_4` ,`question_5` ,`question_6` ,`question_7` ,`question_8` ,`url`) VALUES (NULL , '{$_REQUEST['peoplesOverall']}','{$_REQUEST['social']}', '{$_REQUEST['late']}', '{$_REQUEST['wage']}','{$_REQUEST['square']}','{$_REQUEST['lamps']}','{$_REQUEST['smokers']}','{$_REQUEST['mobile']}','{$_SERVER['SERVER_NAME']}');";
		$id = mysql_query($sql);
}
mysql_close($db);
?>