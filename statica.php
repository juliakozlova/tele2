<?
$hostname = 'localhost';
$username = 'chulakovru';
$password = 'ytV5RS7SMp';
// ������������ � ������� MySQL
$db = mysql_connect($hostname, $username, $password)
        or die('connect to database failed');
// �������� ������ ��
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
		$sql = "SELECT SUM(`question_1`) as 'SUM1',SUM(`question_4`) as 'SUM4',SUM(`question_5`) as 'SUM5',SUM(`question_7`) as 'SUM7', COUNT(*) as 'COUNT' FROM answer WHERE `url`='{$_REQUEST['site']}'";
		$result = mysql_query($sql);
		if($row = mysql_fetch_array($result))
		{
			$sr = $row;
		}
		$sql = "SELECT `question_2`,COUNT(*) FROM answer WHERE `url`='{$_REQUEST['site']}' GROUP BY `question_2`";
		$result = mysql_query($sql);
		while($row = mysql_fetch_array($result))
		{
			if ($row['question_2'] == 'socialDisabled')
			{
				$row['question_2'] = '���';	
			}
			if ($row['question_2'] == 'socialEnabled')
			{
				$row['question_2'] = '��';	
			}
			$q2[$row['question_2']] = $row['COUNT(*)'];
		}
		$sql = "SELECT `question_3`,COUNT(*) FROM answer WHERE `url`='{$_REQUEST['site']}' GROUP BY `question_3` ORDER BY `question_3` ASC";
		$result = mysql_query($sql);
		while($row = mysql_fetch_array($result))
		{
			switch($row['question_3'])
			{
				case '0':
					$row['question_3'] = '��� ���������';
					break;
				case '5':
					$row['question_3'] = '5 �����';
					break;
				case '10':
					$row['question_3'] = '10 �����';
					break;
				case '15':
					$row['question_3'] = '15 �����';
					break;
			}
			$q3[$row['question_3']] = $row['COUNT(*)'];
		}
		$sql = "SELECT `question_6`,COUNT(*) FROM answer WHERE `url`='{$_REQUEST['site']}' GROUP BY `question_6`";
		$result = mysql_query($sql);
		while($row = mysql_fetch_array($result))
		{
			if ($row['question_6'] == 'lampsNo')
			{
				$row['question_6'] = '���';	
			}
			if ($row['question_6'] == 'lampsYes')
			{
				$row['question_6'] = '��';	
			}
			$q6[$row['question_6']] = $row['COUNT(*)'];
		}
		$sql = "SELECT `question_8`,COUNT(*) FROM answer WHERE `url`='{$_REQUEST['site']}' GROUP BY `question_8`";
		$result = mysql_query($sql);
		while($row = mysql_fetch_array($result))
		{
			if ($row['question_8'] == 'mobileNo')
			{
				$row['question_8'] = '���';	
			}
			if ($row['question_8'] == 'mobileYes')
			{
				$row['question_8'] = '��';	
			}
			$q8[$row['question_8']] = $row['COUNT(*)'];
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
<input type="submit" value="��������">
</form>
<?if ($_REQUEST['site'] != ""):?>
<style>
td{
border-bottom:1px;
border-bottom-color:#000;
border-bottom-style:solid;
}
</style>
<table style="width:1000px;" cellpadding="0" cellspacing="0">
<tr><td>������</td><td>��������</td></tr>
<tr><td>1. ������� ����������� � ����� ��������?</td><td><?=round($sr['SUM1']/$sr['COUNT']);?></td></tr>
<tr><td>2. ���� �� � ����������� ������ 
 � ���������� ����, ���-����������� 
 � �� ��������������� �������?</td><td>
 <?foreach($q2 as $key=>$value):?>
 <div>
 <?=$key?>: <?=round(100*$value/$sr['COUNT'])?>%
 </div>
 <?endforeach;?>
 </td></tr>
<tr><td>3. ����� ����� ��������� ��� ���������?</td><td>
<?foreach($q3 as $key=>$value):?>
 <div>
 <?=$key?>: <?=round(100*$value/$sr['COUNT'])?>%
 </div>
 <?endforeach;?>
</td></tr>
<tr><td>4. ������� � ����� �� ������� 
 �� ���������� ����� �����������?</td><td><?=round($sr['SUM4']/$sr['COUNT']);?></td></tr>
<tr><td>5. ������ ������� ������ ���������?</td><td><?=round($sr['SUM5']/$sr['COUNT']);?></td></tr>
<tr><td>6. ����������� �� �� ����������������� �����?</td><td>
<?foreach($q6 as $key=>$value):?>
 <div>
 <?=$key?>: <?=round(100*$value/$sr['COUNT'])?>%
 </div>
 <?endforeach;?>
</td></tr>
<tr><td>7. ������� ����������� � ����� �������� �����?</td><td><?=round($sr['SUM7']/$sr['COUNT']);?></td></tr>
<tr><td>8. ����������� �� �� ������������� ������ ��� ��������� �����?</td>
<td><?foreach($q8 as $key=>$value):?>
 <div>
 <?=$key?>: <?=round(100*$value/$sr['COUNT'])?>%
 </div>
 <?endforeach;?></td></tr>
</table>
<?endif;?>
</body>
</html>