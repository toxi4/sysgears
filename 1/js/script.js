$(document).ready(function(){
	function tempcount(str){
		var letter=str[str.length-1];
		var n=str.slice(0,-1)*1;
		var kelvin, celsium, fahrenheit;
		var out={};
		switch (letter){
			case 'k' :
			case 'K' :celsium=(n*100-27315)/100+'C';
				fahrenheit=((9/5)*(n*100-27315)/100+32)+'F';
				return JSON.stringify({"celsium":celsium,"fahrenheit":fahrenheit});
				break;	
			case 'f':
			case 'F':celsium=((5/9)*(n-32))+'C';
				kelvin=((5/9)*(n-32)*100+27315)/100+'K';
				return JSON.stringify({"celsium":celsium,"kelvin":kelvin});
				break;
			case 'c':
			case 'C':fahrenheit=((9/5)*n+32)+'F';
				kelvin=(n*100+27315)/100+'K';
				return JSON.stringify({"fahrenheit":fahrenheit,"kelvin":kelvin});
				break;
			default: return JSON.stringify({"error":"wrong data"});	
		}
	}
	$('#clickme').click(function(){
		var data=tempcount($('#tempinp').val());
		$('#output').html(data);
	})
})