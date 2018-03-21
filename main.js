
 function validarCPF(inputCPF){
    	var soma = 0;
    	var resto;
        //var inputCPF = document.getElementById('cpf').value;

        if(inputCPF == '00000000000') return false;
        for(i=1; i<=9; i++) soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);
        resto = (soma * 10) % 11;

    	if((resto == 10) || (resto == 11)) resto = 0;
    	if(resto != parseInt(inputCPF.substring(9, 10))) return false;

    	soma = 0;
    	for(i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
    	resto = (soma * 10) % 11;

    	if((resto == 10) || (resto == 11)) resto = 0;
    	if(resto != parseInt(inputCPF.substring(10, 11))) return false;
    	return true;
    }
function RecuperarDados(){

var name = document.getElementById("name").value;

var email = document.getElementById("email").value;
var cpf_cnpj = document.getElementById("cpf_cnpj").value;
var password = document.getElementById("password").value;


	if(name=="" || name==null){
		document.getElementById("result").innerHTML = "Preencha o campo name!";
		document.getElementById("result").className += "alert alert-danger";
//class="alert alert-danger"
	}
	else if(email=="" || email==null){
		document.getElementById("result").innerHTML = "Preencha o campo email, corretamente!";
		document.getElementById("result").className += "alert alert-danger";
	}
	else if(cpf_cnpj =="" || cpf_cnpj==null || !validarCPF(cpf_cnpj)){
		
		//alert("Preencha o campo cpf_cnpj");		
		document.getElementById("result").innerHTML = "Preencha o campo cpf, corretamente!";
		document.getElementById("result").className += "alert alert-danger";

	}
	else if(password=="" || password==null){
		alert("Preencha o campo password");		
	}
	else{

		document.getElementById("result").innerHTML = "Você concluiu o cadastro com sucesso!";
		var url = "http://localhost:3000/uegteste";

		$.post(url,{'name':name,
					'email':email,
					'cpf_cnpj':cpf_cnpj,
					'passowrd':password
		});

		//$.post(url,{'name':name,'email':cpf,'cpf_cnpj':cpf_cnpj,'password':password});
		

		 


		//window.location.href = "http://www.uol.com.br";
	}



	


}