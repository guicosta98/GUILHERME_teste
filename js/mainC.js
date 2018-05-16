document.getElementById('formularioC').addEventListener('submit', cadastrarCorrida);

function cadastrarCorrida(e){
	var nomeM = document.getElementById('nomeM');
	var nomeM2 = nomeM.options[nomeM.selectedIndex].value;
	var nomeP = document.getElementById('nomeP');
	var nomeP2 = nomeP.options[nomeP.selectedIndex].value;
	var valor = document.getElementById('valor').value;	

	if(!valor || !nomeP || !nomeM){
		alert("Por favor, preencha todos os campos!");
		e.preventDefault();
		return false;
	}
	
	corrida = {
		nomeM: nomeM2,
		nomeP: nomeP2,
		valor: valor
	}

	if(localStorage.getItem('corrida') == null){
		var corridas = [];
		corridas.push(corrida);
		localStorage.setItem('corrida', JSON.stringify(corridas));
		console.log(corridas);
	} else {
		var corridas = JSON.parse(localStorage.getItem('corrida'));
		corridas.push(corrida);
		localStorage.setItem('corrida', JSON.stringify(corridas));
		console.log(corridas);
	}


}

function mostrarCorrida(){
	var corridas = JSON.parse(localStorage.getItem('corrida'));
	var corridasResult = document.getElementById('resultadosC');

	corridasResult.innerHTML = '';

	for(var i = 0; i < corridas.length; i++){
		var nomeM = corridas[i].nomeM;
		var nomeP = corridas[i].nomeP;
		var valor = corridas[i].valor;


		corridasResult.innerHTML += '<tr><td>' + nomeM +
								'</td><td>' + nomeP +
								'</td><td>' + valor +
								'</tr>';
	}
}

function carregarNomes(){
	var motoristas = JSON.parse(localStorage.getItem('motorista'));
	var passageiros = JSON.parse(localStorage.getItem('passageiro'));

	for(var i = 0; i < motoristas.length; i++){
		var nomeM = motoristas[i].nome;
		var status = motoristas[i].status;
		if(status == 'A'){
			var listaMotoristas = document.getElementById("nomeM");
    		var option = document.createElement("option");
    		option.text = nomeM;
    		listaMotoristas.add(option);
		}
	}

	for(var i = 0; i < passageiros.length; i++){
		var nomeP = passageiros[i].nome;
		var listaPassageiros = document.getElementById("nomeP");
    	var option = document.createElement("option");
    	option.text = nomeP;
    	listaPassageiros.add(option);
	}

}

function start(){
	carregarNomes();
	mostrarCorrida();
}