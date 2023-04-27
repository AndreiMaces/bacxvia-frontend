function cauta()
{
	if($('.cautare').val())
	{
		$('.tabelCautare').css("display" , "table");
		var value = $('.cautare').val().toLowerCase();
		$(".tabelCautare td").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
		console.log('caut');
	}
	
}

var inverted = 0;

function Invert()
{
	if(inverted == 0){
		$(":root").css("--color1", "#333");
		$(":root").css("--color2", "#eee");
		inverted = 1;
	}
	else {
		$(":root").css("--color1", "#eee");
		$(":root").css("--color2", "#333");
		inverted = 0;
	}
}