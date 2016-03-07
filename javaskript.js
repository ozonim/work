<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
	<title>Демонстрация цикла for</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
	<style type="text/css">
		table { border-collapse: collapse }
		td { border: 1px solid black; width: 30px; height: 30px }
	</style>
</head>

<body>
	<h1>Демонстрация цикла for</h1>
	
	<script type="text/javascript">
		var white = "#FFFFFF";		// Черный цвет
		var black = "#000000";		// Белый цвет
		var n = 9;					// Количество рядов и ячеек в ряду
		var color = black;			// Текущий цвет
		
		// Отрисовка таблицы
		document.write("<table>");
		// Цикл рядов
		for (var tr = 1; tr <= n; tr++)
		{
			document.write("<tr>");
			// Цикл ячеек
			for (var td = 1; td <= n; td++)
			{
				document.write('<td bgcolor="'+color+'">')
				document.write("&nbsp;")
				document.write("</td>")
				//document.write("<td style=\"background-color:" + color + "\">&nbsp;</td>");
				// Смена текущего цвета
				color = (color == black) ? white : black;
			}
			// Конец ряда
			document.write("</tr>");
		}
		// Конец таблицы
		document.write("</table>");
	</script>
	
	<!--table>
		<tr>
			<td></td>
		</tr>
	</table-->
	
	
	

</body>
</html>
