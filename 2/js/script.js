$(document).ready(function(){
	function trucks(n){
		var ans=[];
		n++;
		//попробовал на бумаге  получилось что решение сводится к этому:
		//перемещаем стопку из плит на 1 меньше на временную платформу,
		//перемещаем последнюю плиту куда нужно перемещаем нашу оставшуюся стопку куда нужно
		function moveAll(from,temp,where,number){
			if (number>1){
				moveAll(from,where,temp,number-1);
				moveOne(from,where,number-1);
				moveAll(temp,from,where,number-1);
			}
		}
		function moveOne(from,where,number){
			ans.push('#'+number+' from ' + from +' to ' +where);
		}
		moveAll('slot_a','slot_b','slot_c',n);
		return ans
	}
	$('#clickme').click(function(){
		var n=$('#trucksinp').val();
		var data=trucks(n);
		$('#output ul').append('<li>output for n='+n+':</li>')
		for(var i=0;i<data.length;i++){
			$('#output ul').append('<li>'+data[i]+'</li>')
		}
	})
})