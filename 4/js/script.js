$(document).ready(function(){
	//ну сложный алгоритм не написал но просто платим как можно ближе к нужной цене и получаем найменьший долг
	function price(arr){
		var res=[];
		var coins=[10,9,8,7,6,5,4,3,2,1];
		for(var i=0;i<10;i++){
			var min=199;
			var index=-1;
			var tmp=0;
			for(var j=0;j<10;j++){
				if (Math.abs(arr[i]-coins[j])<min){
					min=Math.abs(arr[i]-coins[j]);
					tmp=coins[j];
					index=j;
				}				
			}
			res.push(tmp);
			coins[index]=-999;
		}
		return res		
	}
	$('#clickme').click(function(){
		var t=[7,8,6,4,8,9,5,7,6,4];
		$('#output').html(price(t));
	})
})