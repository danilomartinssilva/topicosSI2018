function LoadData(){
			var url = "http://localhost:3000/uegteste";
			$.get(url,function(data){
					console.log(data);
			});

}