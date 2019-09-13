 // guarda os itens
 var fila = [];
 // armazena a última posição que foi inserida um item
 var contador = 0;
 // responsável por armazenar a posição do primeiro item
 var pitem = 0;
 
 function enfileirar(valor){
	 
	 fila[contador] = valor;
	 console.log(fila);
	
	 contador++;
	 
 }
 
 enfileirar(5);
 enfileirar(3);
 enfileirar(10);
 
 
 function desenfileirar(){
	 
	 if(contador == pitem){
		 
		console.log("A fila está vazia.")
		 
	 }else{
		 
		 fila[pitem] = "";
		 console.log(fila);
		 
		 pitem++;
		 
		 console.log("Primeiro Item: "+pitem);
		 
	 }
	 
 }
 
 desenfileirar();
 desenfileirar();