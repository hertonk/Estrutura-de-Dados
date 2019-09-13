 // filas
 var fila_normal = [];
 var fila_prioridade = [];
 // armazena a última posição que foi inserida um item
 var contador_normal = 0;
 var contador_prioridade = 0;
 // responsável por armazenar a posição do primeiro item
 var pitem_normal = 0;
 var pitem_prioridade = 0;
 // define a ultima fila a qual foi desenfileirada
 var ult_fila = 2;
 
 // tipo, normal = 1, prioridade = 2
 function enfileirar(valor, tipo){
	 
	 if(tipo === 1){
		 
		 fila_normal[contador_normal] = valor;
		 console.log("Fila normal: "+fila_normal);
		 contador_normal++;
		 
	 } else if(tipo === 2){
		 
		 fila_prioridade[contador_prioridade] = valor;
		 console.log("Fila prioridade: "+fila_prioridade);
		 contador_prioridade++;
		
	 }
	 
 }


enfileirar(1,1);
enfileirar(21,1);
enfileirar(33,1);
enfileirar(25,1);

enfileirar(2,2);
enfileirar(22,2);
enfileirar(28,2);

function desenfileirar(){
	
	if(ult_fila === 2){
		
		if(contador_normal === pitem_normal){
			
			console.log("A fila normal está vazia!");
			
		} else {
			
			fila_normal[pitem_normal] = "";
			console.log("Desenfileiramento fila normal: "+fila_normal);
			pitem_normal++;
			
			ult_fila = 1;
			
		}
		
	} else if(ult_fila === 1){
		
		if(contador_prioridade === pitem_prioridade){
			
			console.log("A fila prioridade está vazia!");
			
		} else {
			
			fila_prioridade[pitem_prioridade] = "";
			console.log("Desenfileiramento fila prioridade: "+fila_prioridade);
			pitem_prioridade++;
			
			ult_fila = 2;
			
		}
		
		
	}
	
}

desenfileirar();
desenfileirar();
desenfileirar();