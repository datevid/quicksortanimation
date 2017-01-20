//arreglo a ordenar
//arreglo=[10,9,19,8,1,12,14,0,5,6,9,17,10,4,5,3,2,3,4,5,6,7,88,77,66,55,44,33,21,2,33,44,73,78,9,2,3,0,1,8,1,13];
arreglo=[];	


function validarNumeros(){

	var number = $("#addNumber").val();
	if(number==""){
		console.log("vacio");
	}
	else if (!siRepiteNumero(number)) {
		$("#contenido").append("<div class='bloque'>"+number+"</div>");
		$("#addNumber").val("");
		arreglo.push(parseInt(number));
	}
}

function siRepiteNumero (number) {
	flagNumeroRepetido=false;

	for (var i = 0; i < arreglo.length; i++) {
		console.log("flagNumeroRepetido: "+flagNumeroRepetido);
		if (number==arreglo[i]) {
			alert("numero repetido detectado");
			flagNumeroRepetido=true;
		};
	};
	return flagNumeroRepetido;
}


function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
function nuevamente (argument) {
	$("#botonsito1").prop("disabled",false);
	$("#botonsito2").prop("disabled",false);
	arreglo=[];
	imprimirArreglo();
}
function comenzar(){
	
	//llamamos la función mandando 0 en el primer parametro
	//y mandando la longitud del arreglo -1
	quicksort(0,(arreglo.length-1));
	
	
	//desabilitamos boton
	$("#botonsito1").prop("disabled",true);
	$("#botonsito2").prop("disabled",true);
	
}

//funcion que plasma el arreglo para poder ser visualizado
function imprimirArreglo(){
    
	//borramos el contenido del div del contenido
	$("#contenido").html("");
	
	//imprimimos los elementos en forma de div
	for(i_=0;i_<arreglo.length;i_++){
		
		//anexamos un div con clase bloque
		$("#contenido").append("<div class='bloque'>"+arreglo[i_]+"</div>");
	}
	
	
}


//función quicksort
function quicksort(primero,ultimo){
	//definimos variables indices
	i = primero
	j = ultimo
	
	//sacamos el pivote de la mitad del arreglo
    pivote = arreglo[parseInt((i+j)/2)]; 

  
	iteracionQS(i,j,pivote,primero,ultimo)
		

		
}

//funcion que suplanta el while y se llama recursivamente 
function iteracionQS(i,j,pivote,primero,ultimo){
	
		//mientras arreglo[i] sea menor a pivote
		while(arreglo[i]<pivote)
			i++;
		//mientras j sea mayor a pivote
		while(arreglo[j]>pivote)
			j--;
			
		//si el indice i es menor o igual a j entonces intercambiamos
		if(i<=j){
		
			//variable temporal auxiliar para guardar valor de arreglo[j]
			aux=arreglo[j];
				
			//intercambiamos los valores de arreglo[j] y arreglo[i]
            arreglo[j] = arreglo[i]
            arreglo[i] = aux
            
			// incrementamos y decrementamos i y j 
            i++;
            j--;
			
			imprimirArreglo(arreglo);
		}
		
		
		
		//repetimos
	if(i<j){
		//hacemos una pausa de medio segundo
		setTimeout(function(){
			iteracionQS(i,j,pivote,primero,ultimo)
		},500);
	}else{
		 //si primero es menor a j llamamos la funcion nuevamente
				if(primero<j){	
				
					//pausa de medio segundo		
					setTimeout(function(){
						quicksort(primero,j);
						},500);
				}
						//si ultimo es mayor que i llamamos la funcion nuevamente
				if(ultimo>i){
						
						//pausa de medio segundo
						setTimeout(function(){
						quicksort(i,ultimo)
						}
						,500);
				}
	}	
}