document.getElementById('formularioM').addEventListener('submit', cadastrarMotorista);

function cadastrarMotorista(e){
	var nomeM = document.getElementById('nomeMotorista').value;
	var dataNascM = document.getElementById('dataNascM').value;
	var cpfM = document.getElementById('cpfM').value;
	var carro = document.getElementById('modeloCarro').value;
	var statusM = document.getElementById('status');
	var statusM2 = statusM.options[statusM.selectedIndex].value;	
	var sexoM = document.getElementById('sexoM');
	var sexoM2 = sexoM.options[sexoM.selectedIndex].value;
	
	if(!nomeM || !dataNascM || !cpfM || !carro){
		alert("Por favor, preencha todos os campos!");
		e.preventDefault();
		return false;
	}


	motorista = {
		nome: nomeM,
		dataNasc: dataNascM,
		cpf: cpfM,
		modeloCarro: carro,
		status: statusM2,
		sexo: sexoM2
	}

	if(localStorage.getItem('motorista') == null){
		var motoristas = [];
		motoristas.push(motorista);
		localStorage.setItem('motorista', JSON.stringify(motoristas));
	} else {
		var motoristas = JSON.parse(localStorage.getItem('motorista'));
		motoristas.push(motorista);
		localStorage.setItem('motorista', JSON.stringify(motoristas));
	}

	
}

function mostrarMotorista(){
	var motoristas = JSON.parse(localStorage.getItem('motorista'));
	var motoristasResult = document.getElementById('resultados');

	motoristasResult.innerHTML = '';

	for(var i = 0; i < motoristas.length; i++){
		var nome = motoristas[i].nome;
		var dataNasc = motoristas[i].dataNasc;
		var cpf = motoristas[i].cpf;
		var carro = motoristas[i].modeloCarro;
		var status = motoristas[i].status;
		var sexo = motoristas[i].sexo;

		if (status == 'A'){
			status = 'Ativo';
		} else {
			status = 'Inativo';
		}

		if (sexo == 'M'){
			sexo = 'Masculino';
		} else {
			sexo = 'Feminino';
		}

		motoristasResult.innerHTML += '<tr><td>' + nome +
								'</td><td>' + dataNasc +
								'</td><td>' + cpf +
								'</td><td>' + carro +
								'</td><td>' + sexo +
								'</td><td>' + status +
								'</td><td><button onclick="alterarStatusPorCPF(\''+ cpf +'\')" class="btn btn-danger">Alterar</button></td>'+
								'</tr>';
	}
}

function alterarStatusPorCPF(cpf){
	var motoristas = JSON.parse(localStorage.getItem('motorista'));

	 for(var i = 0 ; i < motoristas.length; i++){
	 	var cpfM = motoristas[i].cpf;
	 	console.log('contador');
		if(cpfM == cpf){
			console.log(cpfM + ' - ' + cpf);
			if(motoristas[i].status == 'A'){

	 			console.log('ativo');
				motoristas[i].status = 'I';
			} else {
				console.log('inativo');
				motoristas[i].status = 'A';
			}
		}
	}



	localStorage.setItem('motorista', JSON.stringify(motoristas));

	mostrarMotorista();
}


