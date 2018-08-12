<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>K19 Treinamentos - Parâmetros</title>
	</head>
	<body>
		<h1>Parâmetros</h1>
		<?php
		$params = file_get_contents("php://input")."&".$_SERVER["QUERY_STRING"];
		$params = explode("&",$params);

		echo "<ul>";                
		foreach ($params as $param) {
			if (!empty($param)) {
				echo "<li>";
				echo urldecode($param);
				echo "</li>";
			}
		}
		echo "</ul>";
		?>   
	</body>
</html>