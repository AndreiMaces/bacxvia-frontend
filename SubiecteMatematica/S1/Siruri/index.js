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
			an = a1 * Math.pow(r , n-1);
			$('.an').val(an);
			console.log(an);
		}
		else if(!isNaN(sn) && !isNaN(a1) && !isNaN(r))
		{
			n = 0;
			var s = a1 , s1 = sn;
			while(s1 > 1)
			{
				n++;
				s1 /= s;
				s *= r;
			}
			$('.n').val(n);
			an = a1 * Math.pow(r , n-1);
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
				a *= r;
			}
			$('.n').val(n);
		}
		else if(!isNaN(sn) && !isNaN(a1) && !isNaN(r))
		{
			n = 0;
			var s = a1 , s1 = sn;
			while(s1 > 1)
			{
				n++;
				s1 /= s;
				s *= r;
			}
			$('.n').val(n);
			an = a1 * Math.pow(r , n-1);
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
			r = Math.pow(an/a1 , 1/(n-1));
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
			if(r == 1)
				sn = n*a1;
			else
				sn = a1 * (Math.pow(r , n) - 1)/(r - 1);
			
			$('.sn').val(sn);
		}
		else if(!isNaN(an) && !isNaN(a1) && !isNaN(r))
		{
			sn = 0;
			var a = a1;
			while(a <= an)
			{
				sn += a;
				a *= r;
			}
			$('.sn').val(sn);
		}
		else afisare.html(p("Date insuficiente"));
		
}