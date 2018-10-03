//<cursor blinking>
	var timer = setInterval("t()", 500);
	function t(){
		if ($('#terminal span.terminal-green:last-child').text().substring($('#terminal span.terminal-green:last-child').text().length-1, $('#terminal span.terminal-green:last-child').text().length)!="_") {
			$('#terminal span.terminal-green:last-child').append('_');
		}else{
			$('#terminal span.terminal-green:last-child').text($('#terminal span.terminal-green:last-child').text().slice(0, -1));
		}
	}
//</cursor blinking>
	$("body").keydown(function(event) {
		if (event.keyCode == 8){													//checar backspace
			event.preventDefault();
			text = $('#terminal span.terminal-green:last-child').text();
			if (text.slice(-1)=="_") {
				text = text.slice(0, -1);
			}
			text = text.slice(0, -1);
			$('#terminal span.terminal-green:last-child').html(text);
		}else if (event.keyCode == 13) { 											//checar enter
			text = $('#terminal span.terminal-green:last-child').text();
			
			if (text.indexOf("help")<2 && text.indexOf("help")>-1) { 				//checar comando "help"
				$("#terminal").append("<br><span class='terminal-blue'>cd about - </span><span class='terminal-green'>for info about me</span><br>");
				$("#terminal").append("<span class='terminal-blue'>cd projects - </span><span class='terminal-green'>for info about my projects</span><br>");
				$("#terminal").append("<span class='terminal-blue'><a href='#'' class='terminal-blue'>cd homepage</a> - </span><span class='terminal-green'>exit this terminal and go to my homepage</span><br>");
			}else if (text.indexOf("cd homepage")<2 && text.indexOf("cd homepage")>-1){   //checa a entrada do usuario
				$("#terminal").append("<br><span class='terminal-red'>homepage not inplemented yet</span>");
			}else if (text.indexOf("cd about")<2 && text.indexOf("cd about")>-1){   
				$("#terminal").append("<br><span class='terminal-red'>about not inplemented yet</span>");
			}else{
				$("#terminal").append("<br><span class='terminal-red'>command not found</span>");	
			}

			$("#terminal").append('<br><span class="terminal-green">viewer@outsider:~$ </span> <span class="terminal-green"></span>');
		}else{
			if ($('#terminal span.terminal-green:last-child').text().substring($('#terminal span.terminal-green:last-child').text().length-1, $('#terminal span.terminal-green:last-child').text().length)=="_") {
				$('#terminal span.terminal-green:last-child').text($('#terminal span.terminal-green:last-child').text().slice(0, -1));
			}

			key = String.fromCharCode(event.keyCode).toLowerCase();
			text = $('#terminal span.terminal-green:last-child').text();
			text += key;
			$('#terminal span.terminal-green:last-child').html(text);
		}
	});
