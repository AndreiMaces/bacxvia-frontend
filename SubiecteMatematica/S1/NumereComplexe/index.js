var z;
var a , b , r , phi;
function calcft()
{
	z = $('.Z').val().split('+');
	a = parseFloat(z[0]);
	b = parseFloat(z[1]);
	r = Math.sqrt(a*a + b*b);
	phi = Math.atan(b/a);
	$('.rezultat').html("$$" + r + "(\cos(" + phi + ") + " + "i\sin(" + phi + "))" + "$$");
	renderMathInElement(document.body);
}