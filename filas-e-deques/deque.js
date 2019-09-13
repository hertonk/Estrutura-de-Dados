//deque

var deque = [];


function inserir_fim(valor){
	
	deque.push(valor);
	console.log("Inserindo no final: "+deque);
	
}

function inserir_inicio(valor){
	
	deque.unshift(valor);
	console.log("Inserindo no inicio: "+deque);
	
}

function remover_fim(){
	
	if(deque.length == 0){
		
		console.log("O deque está vazio!");
		
	} else {
		
		deque.pop();
		console.log("Removendo no final: "+deque);
		
	}
	
	
	
}

function remover_inicio(){
	
	if(deque.length == 0){
		
		console.log("O deque está vazio!");
		
	} else {
	
		deque.shift();
		console.log("Removendo no inicio: "+deque);
		
	}
	
}

remover_fim();
remover_inicio();
inserir_fim(1);
inserir_inicio(10);
inserir_inicio(12);
inserir_inicio(15);
inserir_inicio(16);
inserir_fim(22);
inserir_fim(23);
inserir_fim(24);
remover_inicio();
remover_inicio();
remover_inicio();
remover_fim();
remover_fim();
