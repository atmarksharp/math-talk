/*$(document).ready(
	function(){
	
		$("#submit_btn").click(
			function(){
				$("#content").append('');
				if($("input[name=mode]:checked").val()=="equation"){
					var eq=$("#comment").val().replace(/¥/g,"\\");
					$("#content").append('<div class="post_article"><img src="http://chart.apis.google.com/chart?cht=tx&chs=1x0&chf=bg,s,FFFFFF&chco=000000&chl='+encodeURIComponent(eq)+'" alt="equation" /></div>');
				}else{
					$("#content").append('<div class="post_article">'+$("#comment").val()+"</div>");
				}
				$(".post_article:hidden").fadeIn("1500");
			}
		)
	}
);*/