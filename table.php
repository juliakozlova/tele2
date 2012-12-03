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
	$sql = 'SELECT `url` FROM answer GROUP BY url';
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result))
	{
		$sites[] = $row;
	}
	if ($_REQUEST['site'] != "")
	{
		$sql = "SELECT * FROM answer WHERE `url`='{$_REQUEST['site']}'";
		$result = mysql_query($sql);
		while($row = mysql_fetch_array($result))
		{
			if ($row['question_2'] == 'socialDisabled')
			{
				$row['question_2'] = 'Нет';	
			}
			if ($row['question_2'] == 'socialEnabled')
			{
				$row['question_2'] = 'Да';	
			}
			switch($row['question_3'])
			{
				case '0':
					$row['question_3'] = 'без опозданий';
					break;
				case '5':
					$row['question_3'] = '5 минут';
					break;
				case '10':
					$row['question_3'] = '10 минут';
					break;
				case '15':
					$row['question_3'] = '15 минут';
					break;
			}
			if ($row['question_6'] == 'lampsNo')
			{
				$row['question_6'] = 'Нет';	
			}
			if ($row['question_6'] == 'lampsYes')
			{
				$row['question_6'] = 'Да';	
			}
			if ($row['question_8'] == 'mobileNo')
			{
				$row['question_8'] = 'Нет';	
			}
			if ($row['question_8'] == 'mobileYes')
			{
				$row['question_8'] = 'Да';	
			}
			$rows[] = $row;
		}
	}
mysql_close($db);
?>
<html>
<body>
<form action="" method="GET">
<select name='site'>
<?foreach($sites as $site):
?>
<option value=<?=$site['url']?> <?if ($site['url'] == $_REQUEST['site']) echo 'selected';?>><?=$site['url']?></option>
<?
endforeach;
?>
</select>
<input type="submit" value="Получить">
</form>
<?if ($_REQUEST['site'] != ""):?>
<style>
td{
border-bottom:1px;
border-bottom-color:#000;
border-bottom-style:solid;
}
</style>
<table style="width:100%;" cellpadding="2" cellspacing="2" border="1">
<tr>
	<td>№ Пользователя</td>
	<td>Сколько сотрудников в вашей компании?</td>
	<td>Есть ли у сотрудников доступ 
 в социальные сети, веб-мессенджеры 
 и на развлекательные порталы?</td>
	<td>Какое время допустимо для опоздания?</td>
	<td>Сколько в месяц вы тратите 
 на заработную плату сотрудников?</td>
	<td>Какова площадь вашего помещения?</td>
	<td>Используете ли вы энергосберегающие лампы?</td>
	<td>Сколько сотрудников в вашей компании курят?</td>
	<td>Используете ли вы корпоративные тарифы для мобильной связи?</td>
</tr>
<?foreach($rows as $row):?>
<tr>
<td><?=$row['id']?></td>
<td><?=$row['question_1']?></td>
<td><?=$row['question_2']?></td>
<td><?=$row['question_3']?></td>
<td><?=$row['question_4']?></td>
<td><?=$row['question_5']?> кв. м.</td>
<td><?=$row['question_6']?></td>
<td><?=$row['question_7']?></td>
<td><?=$row['question_8']?></td>
</tr>
<?endforeach;?>
</table>
<?endif;?>
</body>
</html>