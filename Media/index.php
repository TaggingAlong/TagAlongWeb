<?php 
	header("Content-type: application/json");
	
	echo file_get_contents(isset($_GET['fle']) ? $_GET['fle'] : "./datas.json");
?>