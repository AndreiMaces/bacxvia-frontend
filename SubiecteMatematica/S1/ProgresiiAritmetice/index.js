var a1;
var n;
var r;
var sn;
var an;
var afisare;

function init()
{
	 a1 = parseFloat($('.a1').val());
	 n = parseFloat($('.n').val());
	 r = parseFloat($('.r').val());
	 sn = parseFloat($('.sn').val());
	 an = parseFloat($('.an').val());
	 afisare = $('.rezultat');
}

function suma(x)
{
	return "<p>" + a1 + ' + ' + (a1 + r) + ' + ' + (a1 + 2*r) + ' + ... + ' + x + " = " + sn;
}

function p(x)
{
	return "<div class=\"alert alert-danger\">" + x + "</div>";
}

function calcan()
{
	init();
	if(isNaN(an))
		if(!isNaN(n) && !isNaN(a1) && !isNaN(r)) 
		{
			an = a1 + (n-1)*r;
			$('.an').val(an);
			console.log(an);
		}
		else if(!isNaN(sn) && !isNaN(a1) && !isNaN(r))
		{
			n = 0;
			var s = a1 , s1 = sn;
			while(s1 > 0)
			{
				n++;
				s1 -= s;
				s += r;
			}
			$('.n').val(n);
			an = a1 + (n-1)*r;
			$('.an').val(an);
		}
		else afisare.html(p("Date insuficiente"));
}

function calcn()
{
	init();
	if(isNaN(n))
		if(!isNaN(an) && !isNaN(r) && !isNaN(a1))
		{
			n = 1;
			var a = a1;
			while(an > a)
			{
				n++;
				a += r;
				$('.n').val(n);
			}
		}
		else if(!isNaN(sn) && !isNaN(a1) && !isNaN(r))
		{
			n = 0;
			var s = a1 , s1 = sn;
			while(s1 > 0)
			{
				n++;
				s1 -= s;
				s += r;
			}
			$('.n').val(n);
			an = a1 + (n-1)*r;
			$('.an').val(an);
		}
		else afisare.html(p("Date insuficiente"));
			
}

function calcr()
{
	init();
	if(isNaN(r))
		if(!isNaN(an) && !isNaN(a1) && !isNaN(n))
		{
			r = (an - a1)/(n-1);
			$('.r').val(r);
		}
		else afisare.html(p("Date insuficiente"));
}

function calcsn()
{
	init();
	if(isNaN(sn))
		if(!isNaN(n) && !isNaN(a1) && !isNaN(r))
		{
			calcan();
			sn = n*(a1 + an)/2;
			$('.sn').val(sn);
		}
		else if(!isNaN(an) && !isNaN(a1) && !isNaN(r))
		{
			sn = 0;
			var a = a1;
			while(a <= an)
			{
				sn += a;
				a += r;
			}
			$('.sn').val(sn);
		}
		else afisare.html(p("Date insuficiente"));
		
}