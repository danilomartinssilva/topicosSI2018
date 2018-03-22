function LoadData(){
			var url = "http://localhost:3000/uegteste";
			$.get(url,function(data){
					window.console.log(data.length);										
					//parte inicial do Tbody
					content = ` <tbody>`; 
					//Parte onde o conteúdo se repete nas linhas
					for(var i=0;i<data.length;i++){
						content +=`<tr>
							      <th scope="row">`+data[i].id+`</th>
							      <td>`+data[i].name+`</td>
							      <td>`+data[i].cpf_cnpj+`</td>
							      <td>`+data[i].email+`</td>							      
							      <td>`+data[i].password+`</td>
							      <td><a href="" onclick="deleteRegister(`+data[i].id+`)" class="btn btn-danger">EXCLUIR</a></td>
							    </tr>`;
					}		  
					//Parte final do tbody
					content += `</tbody>`;						

					$('.table').append(content);					

			});

}

function deleteRegister(id){
		var url = "http://localhost:3000/uegteste/"+id;
		$.ajax({
			url:url, //URL=====> http://localhost:3000/uegteste no caso é a variável url
			method:"DELETE"
			
		}).done(function(msg){
			alert("Foi excluído");
		})
}