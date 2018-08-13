
$(document).ready(function(){
	var saida = $("#saida");
	saida.append("evento ready disparado<br>");
	

	var resize = false;
	$("#resize").click(function() {
		if(resize) {
			$(window).off("resize");
			$("#resize").html("ON");
			resize = false;
		} else {
			$(window).resize(function() {
				var largura = $(window).width();
				var altura = $(window).height();
				saida.append("resize: (" + largura + ", " + altura + ")");
				saida.append("<br>");
				saida.scrollTop(saida.prop("scrollHeight"));
			});
			$("#resize").html("OFF");
			resize = true;
		}
	});

	
	var scroll = false;
	$("#scroll").click(function() {
		if(scroll) {
			$(window).off("scroll");
			$("#scroll").html("ON");
			scroll = false;
		} else {
			$(window).scroll(function() {
				var x = $(window).scrollLeft();
				var y = $(window).scrollTop();
				saida.append("scroll: (" + x + ", " + y + ")");
				saida.append("<br>");
				saida.scrollTop(saida.prop("scrollHeight"));
			});
			$("#scroll").html("OFF");
			scroll = true;
		}
	});


	var foco = false;
	$("#foco").click(function() {
		if(foco) {
			$("*").off("focus focusin blur focusout");
			$("#foco").html("ON");
			foco = false;
		} else {
			$("*").on("focus focusin blur focusout",
				function(event) {
					var tag = this.tagName;
					var id = this.id;
					var type = event.type;		

					saida.append(type + "(" + tag + ", #" + id + ")");
					saida.append("<br>");
					saida.scrollTop(saida.prop("scrollHeight"));
				}
			);
			$("#foco").html("OFF");
			foco = true;
		}
	});


	var select = false;
	$("#select").click(function() {
		if(select) {
			$("#input2").off("select");
			$("#select").html("ON");
			select = false;
		} else {
			$("#input2").select(function() {
				saida.append("select: (" + window.getSelection() + ")");
				saida.append("<br>");
				saida.scrollTop(saida.prop("scrollHeight"));
			});
			$("#select").html("OFF");
			select = true;
		}
	});

	
	var change = false;
	$("#change").click(function() {
		if(change) {
			$("#input3").off("change");
			$("#change").html("ON");
			change = false;
		} else {
			$("#input3").change(function() {
				saida.append("change: (" + $(this).val() + ")");
				saida.append("<br>");
				saida.scrollTop(saida.prop("scrollHeight"));
			});
			$("#change").html("OFF");
			change = true;
		}
	});

	
	var key = false;
	$("#key").click(function() {
		if(key) {
			$("#input4").off("keydown keypress keyup");
			$("#key").html("ON");
			key = false;
		} else {
			$("#input4").on("keydown keypress keyup",
				function(event) {
					var type = event.type;	

					saida.append(type + ": (" + event.which + ")");
					saida.append("<br>");
					saida.scrollTop(saida.prop("scrollHeight"));
				}
			);
			$("#key").html("OFF");
			key = true;
		}
	});
	
	
	var mouse = false;
	$("#mouse").click(function() {
		if(mouse) {
			$("#div1").off("click dblclick mousedown mouseup " + 
					"mouseenter mouseleave hover mouseover mouseout");
			$("#mouse").html("ON");
			mouse = false;
		} else {
			$("#div1").on("click dblclick mousedown mouseup " +
				"mouseenter mouseleave hover mouseover mouseout",
				function(event) {
					var x = event.pageX;
					var y = event.pageY;
					var type = event.type;

					saida.append(type + ": (" + x + ", " + y + ")");
					saida.append("<br>");
					saida.scrollTop(saida.prop("scrollHeight"));
				}
			);
			$("#mouse").html("OFF");
			mouse = true;
		}
	});

	
	var mousemove = false;
	$("#mousemove").click(function() {
		if(mousemove) {
			$("#div2").off("mousemove");
			$("#mousemove").html("ON");
			mousemove = false;
		} else {
			$("#div2").mousemove(function(event) {
				var x = event.pageX;
				var y = event.pageY;
				var type = event.type;

				saida.append(type + ": (" + x + ", " + y + ")");
				saida.append("<br>");
				saida.scrollTop(saida.prop("scrollHeight"));
			});
			$("#mousemove").html("OFF");
			mousemove = true;
		}
	});
});