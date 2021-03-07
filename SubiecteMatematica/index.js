
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

