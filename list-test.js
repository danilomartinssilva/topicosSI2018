function LoadData(){
			var url = "http://localhost:3000/uegteste";
			$.get(url,function(data){
					window.console.log(data.length);						
					content = `<thead>
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">First</th>
					      <th scope="col">Last</th>
					      <th scope="col">Handle</th>
					    </tr>
					  </thead>
					  <tbody>`;
					  for(var i=0;i<data.length;i++){
					  	content+=`<tr>
      					  <th scope="row">`+data[i].id+ `</th>
					      <td>`+data[i].name+`</td>
					      <td>Otto</td>
					      <td>@mdo</td>
					    </tr>`;
					  }
					  content+=`  </tbody>`;
					  $('.table').append(content);
			});



}