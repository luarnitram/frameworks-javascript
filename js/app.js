	

//---------TITULO PARPADEANTE----------------//

	function tituloEfecto(){
		$("h1").animate(
			{
				color:"white"
			},500,function(){
				$("h1").animate({
				 	color:"yellow"
				},500, tituloEfecto())
			}
		)
			
	}


//------------- MANEJO DEL CRONOMETRO -------------------------//
	
	function cronometro(){
  		if(segundo!=0)
  		{
			segundo=segundo-1;
		}
		if(segundo==0)
		{
			if(minuto==0)
    		{
				$( ".panel-tablero" ).hide("slow",termino);
				$( ".time" ).hide();
			}	
    		segundo=59;
    		minuto=minuto-1;
		}
		$("#timer").html("0"+minuto+":"+segundo)
		}

//--------------- CAMBIA PANTALLA AL TERMINAR LA PARTIDA ------------------//

	function termino(){
		$( ".panel-score" ).animate({width:'100%'},3000);
	}

//---------------  LLENA EL TABLERO CON IMAGENES ALEATORIAS ------------------//

	function llenadoDeTablero(){

		for(var i = 1; i <= 7; i++){
			var texto = ".col-" + i
			
			for(var x = 1;x <= 7; x++){
				var random = parseInt(Math.random()* (5 - 1) + 1)
				var fotoCaramelo = "<img class='mover' style='height:'14%'' src='image/" + random + ".png' >"
				
				$(texto).append(fotoCaramelo)
				
				
			}
		}
	}

//--------------  CHEQUEA SI HAY TRE O MAS CARAMELOS EN PLANO HORIZONTAL O VERTICAL -------------------//

	function chequearSiHayTres(){

		//chequeo si hay combinacion de tres o mas caramelos en las columnas
		var cantidadColumnas = $(".panel-tablero").children();
		
		for(var i = 1;i <= cantidadColumnas.length; i++){ 
			var columna = ".col-" + i + " img";
			
			var imagenesDeColumna = $(columna);
						
			var elementoA = imagenesDeColumna[0];
			var elementoB = imagenesDeColumna[1];
			var elementoC = imagenesDeColumna[2];
			var elementoD = imagenesDeColumna[3];
			var elementoE = imagenesDeColumna[4];
			var elementoF = imagenesDeColumna[5];
			var elementoG = imagenesDeColumna[6];
			
			var a =  $(elementoA).attr("src").substr(6,1);
			var b =  $(elementoB).attr("src").substr(6,1);
			var c =  $(elementoC).attr("src").substr(6,1);
			var d =  $(elementoD).attr("src").substr(6,1);
			var e =  $(elementoE).attr("src").substr(6,1);
			var f =  $(elementoF).attr("src").substr(6,1);
			var g =  $(elementoG).attr("src").substr(6,1);
			
			
			if (a === b && b === c && c === d && d === e && e === f && f === g){
				$(elementoA).addClass("borrar");
				$(elementoB).addClass("borrar");
				$(elementoC).addClass("borrar");
				$(elementoD).addClass("borrar");
				$(elementoE).addClass("borrar");
				$(elementoF).addClass("borrar");
				$(elementoG).addClass("borrar");
				puntuacion += 70;
			}else if (a === b && b === c && c === d && d === e && e === f){
				$(elementoA).addClass("borrar");
				$(elementoB).addClass("borrar");
				$(elementoC).addClass("borrar");
				$(elementoD).addClass("borrar");
				$(elementoE).addClass("borrar");
				$(elementoF).addClass("borrar");
				puntuacion += 60;
			}else if (a === b && b === c && c === d && d === e){
				$(elementoA).addClass("borrar");
				$(elementoB).addClass("borrar");
				$(elementoC).addClass("borrar");
				$(elementoD).addClass("borrar");
				$(elementoE).addClass("borrar");
				puntuacion += 50;
			}else if (a === b && b === c && c === d){
				$(elementoA).addClass("borrar");
				$(elementoB).addClass("borrar");
				$(elementoC).addClass("borrar");
				$(elementoD).addClass("borrar");
				puntuacion += 40;
			}else if (a === b && b === c){
				$(elementoA).addClass("borrar");
				$(elementoB).addClass("borrar");
				$(elementoC).addClass("borrar");
				puntuacion += 30;
			}else if (b === c && c === d && d === e && e === f && f === g){
				$(elementoB).addClass("borrar");
				$(elementoC).addClass("borrar");
				$(elementoD).addClass("borrar");
				$(elementoE).addClass("borrar");
				$(elementoF).addClass("borrar");
				$(elementoG).addClass("borrar");
				puntuacion += 60;
			}else if (b === c && c === d && d === e && e === f){
				$(elementoB).addClass("borrar");
				$(elementoC).addClass("borrar");
				$(elementoD).addClass("borrar");
				$(elementoE).addClass("borrar");
				$(elementoF).addClass("borrar");
				puntuacion += 50;
			}else if (b === c && c === d && d === e){
				$(elementoB).addClass("borrar");
				$(elementoC).addClass("borrar");
				$(elementoD).addClass("borrar");
				$(elementoE).addClass("borrar");
				puntuacion += 40;
			}else if (b === c && c === d){
				$(elementoB).addClass("borrar");
				$(elementoC).addClass("borrar");
				$(elementoD).addClass("borrar");
				puntuacion += 30;
			}else if (c === d && d === e && e === f && f === g){
				$(elementoC).addClass("borrar");
				$(elementoD).addClass("borrar");
				$(elementoE).addClass("borrar");
				$(elementoF).addClass("borrar");
				$(elementoG).addClass("borrar");
				puntuacion += 50;
			}else if (c === d && d === e && e === f){
				$(elementoC).addClass("borrar");
				$(elementoD).addClass("borrar");
				$(elementoE).addClass("borrar");
				$(elementoF).addClass("borrar");
				puntuacion += 40;
			}else if (c === d && d === e){
				$(elementoC).addClass("borrar");
				$(elementoD).addClass("borrar");
				$(elementoE).addClass("borrar");
				puntuacion += 30;
			}else if (d === e && e === f && f === g){
				$(elementoD).addClass("borrar");
				$(elementoE).addClass("borrar");
				$(elementoF).addClass("borrar");
				$(elementoG).addClass("borrar");
				puntuacion += 40;
			}else if (d === e && e === f){
				$(elementoD).addClass("borrar");
				$(elementoE).addClass("borrar");
				$(elementoF).addClass("borrar");
				puntuacion += 30;
			}else if (e === f && f === g){
				$(elementoE).addClass("borrar");
				$(elementoF).addClass("borrar");
				$(elementoG).addClass("borrar");
				puntuacion += 30;
			}
		}
		
		//chequeo si hay combinacion de tres o mas caramelos en las filas
		for(var x = 0;x < cantidadColumnas.length; x++){ 
			var columna1 = $(".col-1 img");
			var columna2 = $(".col-2 img");
			var columna3 = $(".col-3 img");
			var columna4 = $(".col-4 img");
			var columna5 = $(".col-5 img");
			var columna6 = $(".col-6 img");
			var columna7 = $(".col-7 img");
			
	
						
			var elementoFilaA = columna1[x];
			var elementoFilaB = columna2[x];
			var elementoFilaC = columna3[x];
			var elementoFilaD = columna4[x];
			var elementoFilaE = columna5[x];
			var elementoFilaF = columna6[x];
			var elementoFilaG = columna7[x];
			
			var aa =  $(elementoFilaA).attr("src").substr(6,1);
			var ba =  $(elementoFilaB).attr("src").substr(6,1);
			var ca =  $(elementoFilaC).attr("src").substr(6,1);
			var da =  $(elementoFilaD).attr("src").substr(6,1);
			var ea =  $(elementoFilaE).attr("src").substr(6,1);
			var fa =  $(elementoFilaF).attr("src").substr(6,1);
			var ga =  $(elementoFilaG).attr("src").substr(6,1);
		
			if (aa === ba && ba === ca && ca === da && da === ea && ea === fa && fa === ga){
				$(elementoFilaA).addClass("borrar");
				$(elementoFilaB).addClass("borrar");
				$(elementoFilaC).addClass("borrar");
				$(elementoFilaD).addClass("borrar");
				$(elementoFilaE).addClass("borrar");	
				$(elementoFilaF).addClass("borrar");
				$(elementoFilaG).addClass("borrar");
				puntuacion += 70;
			}else if (aa === ba && ba === ca && ca === da && da === ea && ea === fa){
				$(elementoFilaA).addClass("borrar");
				$(elementoFilaB).addClass("borrar");
				$(elementoFilaC).addClass("borrar");
				$(elementoFilaD).addClass("borrar");
				$(elementoFilaE).addClass("borrar");	
				$(elementoFilaF).addClass("borrar");
				puntuacion += 60;
			}else if (aa === ba && ba === ca && ca === da && da === ea){
				$(elementoFilaA).addClass("borrar");
				$(elementoFilaB).addClass("borrar");
				$(elementoFilaC).addClass("borrar");
				$(elementoFilaD).addClass("borrar");
				$(elementoFilaE).addClass("borrar");
				puntuacion += 50;
			}else if (aa === ba && ba === ca && ca === da){
				$(elementoFilaA).addClass("borrar");
				$(elementoFilaB).addClass("borrar");
				$(elementoFilaC).addClass("borrar");
				$(elementoFilaD).addClass("borrar");
				puntuacion += 40;
			}else if (aa === ba && ba === ca){
				$(elementoFilaA).addClass("borrar");
				$(elementoFilaB).addClass("borrar");
				$(elementoFilaC).addClass("borrar");
				puntuacion += 30;
			}else if (ba === ca && ca === da && da === ea && ea === fa && fa === ga){
				$(elementoFilaB).addClass("borrar");
				$(elementoFilaC).addClass("borrar");
				$(elementoFilaD).addClass("borrar");
				$(elementoFilaE).addClass("borrar");
				$(elementoFilaF).addClass("borrar");
				$(elementoFilaG).addClass("borrar");
				puntuacion += 60;
			}else if (ba === ca && ca === da && da === ea && ea === fa){
				$(elementoFilaB).addClass("borrar");
				$(elementoFilaC).addClass("borrar");
				$(elementoFilaD).addClass("borrar");
				$(elementoFilaE).addClass("borrar");
				$(elementoFilaF).addClass("borrar");
				puntuacion += 50;
			}else if (ba === ca && ca === da && da === ea){
				$(elementoFilaB).addClass("borrar");
				$(elementoFilaC).addClass("borrar");
				$(elementoFilaD).addClass("borrar");
				$(elementoFilaE).addClass("borrar");
				puntuacion += 40;
			}else if (ba === ca && ca === da){
				$(elementoFilaB).addClass("borrar");
				$(elementoFilaC).addClass("borrar");
				$(elementoFilaD).addClass("borrar");
				puntuacion += 30;
			}else if (ca === da && da === ea && ea === fa && fa === ga){
				$(elementoFilaC).addClass("borrar");
				$(elementoFilaD).addClass("borrar");
				$(elementoFilaE).addClass("borrar");
				$(elementoFilaF).addClass("borrar");
				$(elementoFilaG).addClass("borrar");
				puntuacion += 50;
			}else if (ca === da && da === ea && ea === fa){
				$(elementoFilaC).addClass("borrar");
				$(elementoFilaD).addClass("borrar");
				$(elementoFilaE).addClass("borrar");
				$(elementoFilaF).addClass("borrar");
				puntuacion += 40;
			}else if (ca === da && da === ea){
				$(elementoFilaC).addClass("borrar");
				$(elementoFilaD).addClass("borrar");
				$(elementoFilaE).addClass("borrar");
				puntuacion += 30;
			}else if (da === ea && ea === fa && fa === ga){
				$(elementoFilaD).addClass("borrar");
				$(elementoFilaE).addClass("borrar");
				$(elementoFilaF).addClass("borrar");
				$(elementoFilaG).addClass("borrar");
				puntuacion += 40;
			}else if (da === ea && ea === fa){
				$(elementoFilaD).addClass("borrar");
				$(elementoFilaE).addClass("borrar");	
				$(elementoFilaF).addClass("borrar");
				puntuacion += 30;
			}else if (ea === fa && fa === ga){
				$(elementoFilaE).addClass("borrar");
				$(elementoFilaF).addClass("borrar");
				$(elementoFilaG).addClass("borrar");
				puntuacion = puntuacion + 30;
			}
		}
		
		contarBorrados()

	}

//---------------------  CHEQUEA CUANTAS IMAGENES EN CADA COLUMNA TIENEN LA CLASE BORRAR(van a ser la imagenes a reempolazar)----------------//
		
	function contarBorrados(){
		
		var cantidadColumnas = $(".panel-tablero").children();
		ImagenesXColumna = new Array(8);

		for(var i = 1;i <= cantidadColumnas.length; i++){
			var aReemplazar = 0;
			var columna = ".col-" + i + " img";
			var todasLasImagenes = $(columna);
						
			var elementoA = todasLasImagenes[0];
			var elementoB = todasLasImagenes[1];
			var elementoC = todasLasImagenes[2];
			var elementoD = todasLasImagenes[3];
			var elementoE = todasLasImagenes[4];
			var elementoF = todasLasImagenes[5];
			var elementoG = todasLasImagenes[6];
			
			if($(elementoA).hasClass("borrar")){
				aReemplazar++
			}
			if($(elementoB).hasClass("borrar")){
				aReemplazar++
			}
			if($(elementoC).hasClass("borrar")){
				aReemplazar++
			}
			if($(elementoD).hasClass("borrar")){
				aReemplazar++
			}
			if($(elementoE).hasClass("borrar")){
				aReemplazar++
			}
			if($(elementoF).hasClass("borrar")){
				aReemplazar++
			}
			if($(elementoG).hasClass("borrar")){
				aReemplazar++
			}
			ImagenesXColumna[i]= aReemplazar
		}
		eliminarConEfecto()
		
	}


//------------------------------ ELIMINO LAS IMAGENES QUE TIENEN LA CLASE BORRAR CON EFECTO DE PARPADEO -------------------------//
	
	function eliminarConEfecto(){
		var chequearSiHayImagenes = false;
		var cantidadColumnas = $(".panel-tablero").children();

		for(var i = 1;i <= cantidadColumnas.length; i++){
			var columna = ".col-" + i + " img";
			var todasLasImagenes = $(columna);
						
			var elementoA = todasLasImagenes[0];
			var elementoB = todasLasImagenes[1];
			var elementoC = todasLasImagenes[2];
			var elementoD = todasLasImagenes[3];
			var elementoE = todasLasImagenes[4];
			var elementoF = todasLasImagenes[5];
			var elementoG = todasLasImagenes[6];
		
			if($(elementoA).hasClass("borrar")){
				$(elementoA).hide("pulsate",1000,function(){$(this).remove()});
				chequearSiHayImagenes = true;
			}
			if($(elementoB).hasClass("borrar")){
				$(elementoB).hide("pulsate",1000,function(){$(this).remove()});
				chequearSiHayImagenes = true;
			}
			if($(elementoC).hasClass("borrar")){
				$(elementoC).hide("pulsate",1000,function(){$(this).remove()});
				chequearSiHayImagenes = true;
			}
			if($(elementoD).hasClass("borrar")){
				$(elementoD).hide("pulsate",1000,function(){$(this).remove()});	
				chequearSiHayImagenes = true;
			}
			if($(elementoE).hasClass("borrar")){
				$(elementoE).hide("pulsate",1000,function(){$(this).remove()});
				chequearSiHayImagenes = true;
			}
			if($(elementoF).hasClass("borrar")){
				$(elementoF).hide("pulsate",1000,function(){$(this).remove()});	
				chequearSiHayImagenes = true;
			}
			if($(elementoG).hasClass("borrar")){
				$(elementoG).hide("pulsate",1000,function(){$(this).remove()});	
				chequearSiHayImagenes = true;
			}
		}
		
		if(chequearSiHayImagenes == true){//----CHEQUEO SI SE TUVIERON QUE BORRAR IMAGENES, SI ES ASI EJECUTO LA FUNCION QUE RELLENA EL TABLERO--//
			setTimeout(rellenar,2000)
			$(".score span").text (puntuacion)
		}else{//--------------------------------SI NO HAY IMAGENES QUE RELLENAR HABILITO LA FUNCION QUE PERMITE MOVER LOS CARAMELOS -------------//
			setTimeout(moverCaramelos,2000)	
		}		
	}


//------------------ RELLENO EL TABLERO AGREGANDO LAS IMAGENES QUE SE BORRARON POR TENER LA CLASE BORRAR ---------------------------------------//

	function rellenar(){
		var cantidadColumnas = $(".panel-tablero").children();
		for(var i = 1; i <= cantidadColumnas.length ; i++){
			var imagenesAagregar = ImagenesXColumna[i];
			for(var x = 1; x <= imagenesAagregar;x++){
				var columna = ".col-" + i ;
				var random = parseInt(Math.random()* (5 - 1) + 1);
				var imagen = "<img class = 'mover' style='height:'14%'' src='image/" + random + ".png' >";
				$(columna).prepend(imagen);
			}
		}
		setTimeout(chequearSiHayTres,1000)
		
	}

//------------------ FUNCION QUE GENERA EL INTERCAMBIO ENTRE CARAMELOS ATRAVEZ DEL DRAG & DROP -----------------------------------------------------//

jQuery.fn.swap = function(b){ 
    b = jQuery(b)[0]; 
    var a = this[0]; 
    var t = a.parentNode.insertBefore(document.createTextNode(''), a); 
    b.parentNode.insertBefore(a, b); 
    t.parentNode.insertBefore(b, t); 
    t.parentNode.removeChild(t); 
    return this; 
};


//------------------  HABILITO EL DRAG & DROP PARA INTERCAMBIAR LOS CARAMELOS Y SUMO LOS MOVIMIENTOS QUE SE HACEN----------------------------------//

function moverCaramelos(){
	
	$(".mover").draggable({revert: true, helper: "clone", containment: ".panel-tablero", opacity: "0.80"});

	$(".mover").droppable({
    accept: ".mover",
    drop: function( event, ui ) {
			movimientos++;
        var draggable = ui.draggable, droppable = $(this),
            dragPos = draggable.position(), dropPos = droppable.position();
        
        draggable.css({
            left: dropPos.left+'px',
            top: dropPos.top+'px'
        });

        droppable.css({
            left: dragPos.left+'px',
            top: dragPos.top+'px'
        });
        draggable.swap(droppable);
    	}
	});
	$("#movimientos-text").text(movimientos)// IMPRIMO LOS MOVIMIENTOS QUE SE HICIERON HASTA EL MOMENTO
	setTimeout(chequearSiHayTres,1000)
}




$(function(){
	
	tituloEfecto()
	
	$(".btn-reinicio").click(function(){
		movimientos = 0;
		minuto = 2; 
  		segundo = 0; 
		setInterval(cronometro, 1000)
		puntuacion = 0;
		llenadoDeTablero()
		chequearSiHayTres()
		
		if($(this).text() == "Reiniciar"){//------- REINICIO EL JUEGO SI EL TEXTO ES REINICIAR
			location.reload()
		}
		
		$(this).text("Reiniciar");
		

		
	})
	
	
	
	

})


 