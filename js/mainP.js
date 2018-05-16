document.getElementById('formularioP').addEventListener('submit', cadastrarPassageiro);

function cadastrarPassageiro(e){
	var nomeP = document.getElementById('nomePassageiro').value;
	var dataNascP = document.getElementById('dataNascP').value;
	var cpfP = document.getElementById('cpfP').value;	
	var sexoP = document.getElementById('sexoP');
	var sexoP2 = sexoP.options[sexoP.selectedIndex].value;

	if(!nomeP || !dataNascP || !cpfP){
		alert("Por favor, preencha todos os campos!");
		e.preventDefault();
		return false;
	}
	
	passageiro = {
		nome: nomeP,
		dataNasc: dataNascP,
		cpf: cpfP,
		sexo: sexoP2
	}

	if(localStorage.getItem('passageiro') == null){
		var passageiros = [];
		passageiros.push(passageiro);
		localStorage.setItem('passageiro', JSON.stringify(passageiros));
	} else {
		var passageiros = JSON.parse(localStorage.getItem('passageiro'));
		passageiros.push(passageiro);
		localStorage.setItem('passageiro', JSON.stringify(passageiros));
	}

}

function mostrarPassageiro(){
	var passageiros = JSON.parse(localStorage.getItem('passageiro'));
	var passageirosResult = document.getElementById('resultadosP');

	passageirosResult.innerHTML = '';

	for(var i = 0; i < passageiros.length; i++){
		var nome = passageiros[i].nome;
		var dataNasc = passageiros[i].dataNasc;
		var cpf = passageiros[i].cpf;
		var sexo = passageiros[i].sexo;

		if (sexo == 'M'){
			sexo = 'Masculino';
		} else {
			sexo = 'Feminino';
		}

		passageirosResult.innerHTML += '<tr><td>' + nome +
								'</td><td>' + dataNasc +
								'</td><td>' + cpf +
								'</td><td>' + sexo +
								'</tr>';
	}
}