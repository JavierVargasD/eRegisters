var i = 1;
var ac= 0;
var vialImageNumber;
var currentPage = 2;
var currentPage2 = 0;


document.addEventListener("deviceready", onDeviceReady, false);

$(document).ready(function() {

    function cascadeSelect(parent, child) {
        var childOptions = child.find('option:not(.static)');
        child.data('options', childOptions);

        parent.change(function() {
            childOptions.remove();
            child
                    .append(child.data('options').filter('.sub_' + this.value))
                    .change();
            $("#P_MUN").val('-1');
        })

        childOptions.not('.static, .sub_' + parent.val()).remove();

    }

    $(function() {
        cascadeForm = $('.form-inline');
        orgSelect = $("#P_DEPTO");
        terrSelect = $("#P_MUN");
        cascadeSelect(orgSelect, terrSelect);
    });
	
	
	var $TABLE_OBRAS = $('#tableObras');

    $('.table-add').click(function() {
        var $clone = $TABLE_OBRAS.find('tr.hide').clone(true).removeClass('hide table-line');
        $TABLE_OBRAS.find('table').append($clone);
    });

    $('.table-remove').click(function() {
        $(this).parents('tr').detach();
	});
	
	var $TABLE_PATO = $('#tablePatologias');

    $('.table-add2').click(function() {
        var $clone = $TABLE_PATO.find('tr.hide').clone(true).removeClass('hide table-line');
        $TABLE_PATO.find('table').append($clone);
    });

    $('.table-remove2').click(function() {
        $(this).parents('tr').detach();
	});
    

});


function onDeviceReady() {

	ac =  window.localStorage.getItem("actaId");
    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});
	
    var query = "SELECT * FROM pre_vial_p where id=" + window.localStorage.getItem("actaId");
	if( window.localStorage.getItem("post") === 'true' ){
		query = "SELECT * FROM post_vial_p where id=" + window.localStorage.getItem("actaId");
	}


    if (true) {
        myDB.transaction(function(transaction) {
            transaction.executeSql(query, [], function(tx, results) {
                var len = results.rows.length, i;

                for (i = 0; i < len; i++) {
					
                    $("#id").val(results.rows.item(i).id);
                    $("#programa_sismico").val(results.rows.item(i).programa_sismico);
                    $("#operadora").val(results.rows.item(i).operadora);
                    $("#fecha").val(results.rows.item(i).fecha);
                    $("#linea").val(results.rows.item(i).linea);
                    $("#acta").val(results.rows.item(i).acta);
                    $("#permiso").val(results.rows.item(i).permiso);
                    $("#P_DEPTO").val(results.rows.item(i).P_DEPTO);
                    $("#P_MUN").val(results.rows.item(i).P_MUN);
                    $("#vereda").val(results.rows.item(i).vereda);
                    $("#predio").val(results.rows.item(i).predio);
                    $("#propietario").val(results.rows.item(i).propietario);
                    $("#cc_propietario").val(results.rows.item(i).cc_propietario);
                    $("#lugar_cc_propietario").val(results.rows.item(i).lugar_cc_propietario);
                    $("#telefono").val(results.rows.item(i).telefono);
                    $("#abscisa_inicial").val(results.rows.item(i).abscisa_inicial);
                    $("#abscisa_final").val(results.rows.item(i).abscisa_final);
                    $("#desp_ensitu1").val(results.rows.item(i).desp_ensitu1);
                    $("#desp_ensitu2").val(results.rows.item(i).desp_ensitu2);
                    $("#fecha").val(results.rows.item(i).fecha);
                    $("#coordenadasi_e").val(results.rows.item(i).coordenadasi_e);
                    $("#coordenadasi_n").val(results.rows.item(i).coordenadasi_n);
                    $("#coordenadasf_e").val(results.rows.item(i).coordenadasf_e);
                    $("#coordenadasf_n").val(results.rows.item(i).coordenadasf_n);
                    $("#ancho_promedio").val(results.rows.item(i).ancho_promedio);
                    $("#otros").val(results.rows.item(i).otros);
                    $("#trafico").val(results.rows.item(i).trafico);
                    $("#fecha_inicio").val(results.rows.item(i).fecha_inicio);
                    $("#usuario").val(results.rows.item(i).usuario);
                    $("#fecha_modificada").val(results.rows.item(i).fecha_modificada);
                    $("#estado").val(results.rows.item(i).estado);
                    $("#concepto_general").val(results.rows.item(i).concepto_general);
                    $("#plana").prop('checked', JSON.parse(results.rows.item(i).plana));
                    $("#ondulada").prop('checked', JSON.parse(results.rows.item(i).ondulada));
                    $("#quebrada").prop('checked', JSON.parse(results.rows.item(i).quebrada));
                    $("#escarpe").prop('checked', JSON.parse(results.rows.item(i).escarpe));
                    $("#pendiente1").prop('checked', JSON.parse(results.rows.item(i).pendiente1));
                    $("#pendiente2").prop('checked', JSON.parse(results.rows.item(i).pendiente2));
                    $("#pendiente3").prop('checked', JSON.parse(results.rows.item(i).pendiente3));
                    $("#orden_1").prop('checked', JSON.parse(results.rows.item(i).orden_1));
                    $("#orden_2").prop('checked', JSON.parse(results.rows.item(i).orden_2));
                    $("#orden_3").prop('checked', JSON.parse(results.rows.item(i).orden_3));
                    $("#veredal").prop('checked', JSON.parse(results.rows.item(i).veredal));
                    $("#vecinal").prop('checked', JSON.parse(results.rows.item(i).vecinal));
                    $("#privada").prop('checked', JSON.parse(results.rows.item(i).privada));
                    $("#comunitaria").prop('checked', JSON.parse(results.rows.item(i).comunitaria));
                    $("#sin_pavimento").prop('checked', JSON.parse(results.rows.item(i).sin_pavimento));
                    $("#con_afirmado").prop('checked', JSON.parse(results.rows.item(i).con_afirmado));
                    $("#sin_afirmado").prop('checked', JSON.parse(results.rows.item(i).sin_afirmado));
                    $("#pav_flex_cto_asfaltico").prop('checked', JSON.parse(results.rows.item(i).pav_flex_cto_asfaltico));
                    $("#pav_flex_crudo").prop('checked', JSON.parse(results.rows.item(i).pav_flex_crudo));
                    $("#trat_superficial").prop('checked', JSON.parse(results.rows.item(i).trat_superficial));
                    $("#pav_rigido").prop('checked', JSON.parse(results.rows.item(i).pav_rigido));
                    $("#adoquin").prop('checked', JSON.parse(results.rows.item(i).adoquin));
                    $("#triturado").prop('checked', JSON.parse(results.rows.item(i).triturado));
                    $("#empedrado").prop('checked', JSON.parse(results.rows.item(i).empedrado));
                    $("#material_aporte").prop('checked', JSON.parse(results.rows.item(i).material_aporte));
                    $("#crudo_rio").prop('checked', JSON.parse(results.rows.item(i).crudo_rio));
                    $("#crudo_rio_sel").prop('checked', JSON.parse(results.rows.item(i).crudo_rio_sel));
                    $("#repcomu").val(results.rows.item(i).repcomu);
                    $("#dia").val(results.rows.item(i).dia);
                    $("#mes").val(results.rows.item(i).mes);
                    $("#ann").val(results.rows.item(i).ann);
                    $("#longg").val(results.rows.item(i).longg);
                    $("#access").val(results.rows.item(i).access);
                    $("#conduce").val(results.rows.item(i).conduce);
                    $("#mung").val(results.rows.item(i).mung);
                    $("#topog").val(results.rows.item(i).topog);
                    $("#estructura").val(results.rows.item(i).estructura);
                    $("#geometria").val(results.rows.item(i).geometria);
                    $("#clasificacion_via").val(results.rows.item(i).clasificacion_via);
                    $("#parrafo_general").val(results.rows.item(i).parrafo_general);
					$("#nvia").val(results.rows.item(i).via);
                    $("#customActa").val(results.rows.item(i).custom_acta);
					 $("#pagDe").val(results.rows.item(i).pag_de);
					 
										
					var postVialParrafo = "En el municipio de " + ($("#P_MUN option:selected").text())+" vereda o barrio " + ($("#vereda").val())+" del departamento de " + ($("#P_DEPTO option:selected").text())+" el dia " + ($("#dia").val())+" del mes de " + ($("#mes").val())
					+" del año " + ($("#ann").val())+", se reunieron el (la) señor(a) "+window.localStorage.getItem('representante')+" con cédula de ciudadanía N° "+window.localStorage.getItem('numdocrepre')+" de "+window.localStorage.getItem('lugarcc')
					+", quien actúa como evaluador y el (la) señor(a)" + $("#propietario").val() + ", con cédula de ciudadanía No. "+ $("#cc_propietario").val() + "  de " + $("#lugar_cc_propietario").val() + ", como " + ($("#texcom").val()) +" , con el fin de comprobar y dar fé, que la via referenciada en el encabezado " + ($("#enca").val())+" presenta afectación alguna ocasionada con los recorridos de los vehiculos que transitaron durante el desarrollo de las diferentes etapas de exploración sismica del programa "+ window.localStorage.getItem('programa_sismico') +".";
					
						 if (window.localStorage.getItem("editar") === 'true'){								
							
							postVialParrafo = results.rows.item(i).post_cparrafo;				
							
							
							if( postVialParrafo == null  ||  postVialParrafo === "" ){
								
								postVialParrafo = "En el municipio de " + ($("#P_MUN option:selected").text())+" vereda o barrio " + ($("#vereda").val())+" del departamento de " + ($("#P_DEPTO option:selected").text())+" el dia " + ($("#dia").val())+" del mes de " + ($("#mes").val())
								+" del año " + ($("#ann").val())+", se reunieron el (la) señor(a) "+window.localStorage.getItem('representante')+" con cédula de ciudadanía N° "+window.localStorage.getItem('numdocrepre')+" de "+window.localStorage.getItem('lugarcc')
								+", quien actúa como evaluador y el (la) señor(a)" + $("#propietario").val() + ", con cédula de ciudadanía No. "+ $("#cc_propietario").val() + "  de " + $("#lugar_cc_propietario").val() + ", como " + ($("#texcom").val()) +" , con el fin de comprobar y dar fé, que la via referenciada en el encabezado " + ($("#enca").val())+" presenta afectación alguna ocasionada con los recorridos de los vehiculos que transitaron durante el desarrollo de las diferentes etapas de exploración sismica del programa "+ window.localStorage.getItem('programa_sismico') +".";

								
							}
							
						}
						
		
					 $("#postVialParrafo").val(postVialParrafo);
			

					myDB.transaction( function(transaction1) {   
					
						var query = "SELECT * FROM pre_obra_arte_p where id_acta=" + window.localStorage.getItem("actaId");
					

						if( window.localStorage.getItem("post") === 'true' ){
							query = "SELECT * FROM post_obra_arte_p where id_acta=" + window.localStorage.getItem("actaId");
						} 					
                        
                        transaction1.executeSql(query, [], function(tx1, results1) {                   

						var len2 = results1.rows.length, j;

						for (j = 0; j < len2; j++) {
                                                    
                                                   
                                var cod_obra_arte = (results1.rows.item(j).cod_obra_arte);
                                var abscisa = (results1.rows.item(j).abscisa);
                                var estribos_col_m = (results1.rows.item(j).estribos_col_m);
                                var estribos_col_e = (results1.rows.item(j).estribos_col_e);
                                var estribos_col_p = (results1.rows.item(j).estribos_col_p);
                                var estribos_col_long_mayor = (results1.rows.item(j).estribos_col_long_mayor);
                                var estribos_col_long_menor = (results1.rows.item(j).estribos_col_long_menor);
                                var estribos_col_ancho_mayor = (results1.rows.item(j).estribos_col_ancho_mayor);
                                var estribos_col_ancho_menor = (results1.rows.item(j).estribos_col_ancho_menor);
                                var estribos_t = (results1.rows.item(j).estribos_t);
                                var estribos_l = (results1.rows.item(j).estribos_l);
                                var estribos_a = (results1.rows.item(j).estribos_a);
                                var vigas_col_m = (results1.rows.item(j).vigas_col_m);
                                var vigas_col_e = (results1.rows.item(j).vigas_col_e);
                                var vigas_col_p = (results1.rows.item(j).vigas_col_p);
                                var vigas_col_long_mayor = (results1.rows.item(j).vigas_col_long_mayor);
                                var vigas_col_long_menor = (results1.rows.item(j).vigas_col_long_menor);
                                var vigas_col_ancho_mayor = (results1.rows.item(j).vigas_col_ancho_mayor);
                                var vigas_col_ancho_menor = (results1.rows.item(j).vigas_col_ancho_menor);
                                var vigas_t = (results1.rows.item(j).vigas_t);
                                var vigas_l = (results1.rows.item(j).vigas_l);
                                var vigas_a = (results1.rows.item(j).vigas_a);
                                var placas_col_m = (results1.rows.item(j).placas_col_m);
                                var placas_col_e = (results1.rows.item(j).placas_col_e);
                                var placas_col_p = (results1.rows.item(j).placas_col_p);
                                var placas_col_long_mayor = (results1.rows.item(j).placas_col_long_mayor);
                                var placas_col_long_menor = (results1.rows.item(j).placas_col_long_menor);
                                var placas_col_ancho_mayor = (results1.rows.item(j).placas_col_ancho_mayor);
                                var placas_col_ancho_menor = (results1.rows.item(j).placas_col_ancho_menor);
                                var placas_t = (results1.rows.item(j).placas_t);
                                var placas_l = (results1.rows.item(j).placas_l);
                                var placas_a = (results1.rows.item(j).placas_a);
                                var observaciones_o = (results1.rows.item(j).observaciones_o);
      
                                                    
                                var newRow = "<tr>"                                        
                                    +"<td contenteditable='false'>"
                                         +"<select name='cod_obra_arte'>"
                                            +"<option value='' "+  ( cod_obra_arte === '' ? "selected" : "") +"></option>"
                                            +"<option value='1' "+ ( cod_obra_arte === '1' ? "selected" : "") +">Alcantarilla</option>"
                                            +"<option value='2' "+ ( cod_obra_arte === '2' ? "selected" : "") +">Ponton</option>"
                                            +"<option value='3' "+ ( cod_obra_arte === '3' ? "selected" : "") +">Puente</option>"
                                            +"<option value='4' "+ ( cod_obra_arte === '4' ? "selected" : "") +">Box Coulvert</option>"
                                            +"<option value='5' "+ ( cod_obra_arte === '5' ? "selected" : "") +">Quiebrapatas</option>"
                                            +"<option value='6' "+ ( cod_obra_arte === '6' ? "selected" : "") +">Batea-Baden</option>"
                                          +"</select>"
                                    +"</td>"
                                    +"<td contenteditable='true' id='abscisa' style='text-align: center;' >"+abscisa+"</td>"
                                    +"<td contenteditable='false'>"
                                         +"<select name='estribos_col_m'>"
                                                    +"<option value='' "+  ( estribos_col_m === '' ? "selected" : "") +"></option>"
                                                    +"<option value='1' "+  ( estribos_col_m === '1' ? "selected" : "") +">Concreto Simple</option>"
                                                    +"<option value='2' "+  ( estribos_col_m === '2' ? "selected" : "") +">Concreto Reforzado</option>"	
                                                    +"<option value='3' "+  ( estribos_col_m === '3' ? "selected" : "") +">Tubería concreto ref.</option>"
                                                    +"<option value='4' "+  ( estribos_col_m === '4' ? "selected" : "") +">Tubería Concreto simple</option>"
                                                    +"<option value='5' "+  ( estribos_col_m === '5' ? "selected" : "") +">Tubería de Acero</option>"
                                                    +"<option value='6' "+  ( estribos_col_m === '6' ? "selected" : "") +">Platina de Acero</option>"
                                    +"</td>"
                                    +"<td contenteditable='false'>"
                                         +"<select name='estribos_col_e'>"
                                                    +"<option value='' "+  ( estribos_col_e === '' ? "selected" : "") +"></option>"
                                                    +"<option value='1' "+  ( estribos_col_e === '1' ? "selected" : "") +">Malo</option>"
                                                    +"<option value='2' "+  ( estribos_col_e === '2' ? "selected" : "") +">Regular</option>"	
                                                    +"<option value='3' "+  ( estribos_col_e === '3' ? "selected" : "") +">Bueno</option>"
                                    +"</td>"
                                    +"<td contenteditable='false'>"
                                         +"<select name='estribos_col_p'>"
                                                    +"<option value='' "+  ( estribos_col_p === '' ? "selected" : "") +"></option>"
                                                    +"<option value='1' "+  ( estribos_col_p === '1' ? "selected" : "") +">Grietas</option>"
                                                    +"<option value='2' "+  ( estribos_col_p === '2' ? "selected" : "") +">Fisuras</option>"	
                                                    +"<option value='3' "+  ( estribos_col_p === '3' ? "selected" : "") +">Desprendimientos</option>"
                                                    +"<option value='4' "+  ( estribos_col_p === '4' ? "selected" : "") +">Abombamientos</option>"
                                                    +"<option value='5' "+  ( estribos_col_p === '5' ? "selected" : "") +">Carbonatación</option>"
                                                    +"<option value='6' "+  ( estribos_col_p === '6' ? "selected" : "") +">Galvanoplastia</option> "                                                       
                                                    +"<option value='7' "+  ( estribos_col_p === '7' ? "selected" : "") +">Desgaste</option>"
                                                    +"<option value='8' "+  ( estribos_col_p === '8' ? "selected" : "") +">Volcamiento</option>"
                                                    +"<option value='9' "+  ( estribos_col_p === '9' ? "selected" : "") +">Desnivelado</option>"
                                                    +"<option value='10' "+  ( estribos_col_p === '10' ? "selected" : "") +">Desplomado</option>"
                                                    +"<option value='11' "+  ( estribos_col_p === '11' ? "selected" : "") +">Hundimientos</option>"
                                                    +"<option value='12' "+  ( estribos_col_p === '12' ? "selected" : "") +">Oxidación</option>"
                                                    +"<option value='13' "+  ( estribos_col_p === '13' ? "selected" : "") +">Otra</option>"
                                          +"</select>"
                                    +"</td>"
                                    +"<td contenteditable='true' id='estribos_col_long_mayor'>"+estribos_col_long_mayor+"</td>"
                                    +"<td contenteditable='true' id='estribos_col_long_menor'>"+estribos_col_long_menor+"</td>"
                                    +"<td contenteditable='true' id='estribos_col_ancho_mayor'>"+estribos_col_ancho_mayor+"</td>"
                                    +"<td contenteditable='true' id='estribos_col_ancho_menor'>"+estribos_col_ancho_menor+"</td>"
                                        +"<td contenteditable='false'>"
                                                +"<input type='checkbox' class='form-control' id='estribos_t' "+  ( estribos_t === 'true' ? "checked" : "") +" >"
                                        +"</td>"
                                        +"<td contenteditable='false'>"
                                                +"<input type='checkbox' class='form-control' id='estribos_l' "+  ( estribos_l === 'true' ? "checked" : "") +" >"
                                        +"</td>"
                                        +"<td contenteditable='false'>"
                                                +"<input type='checkbox' class='form-control' id='estribos_a' "+  ( estribos_a === 'true' ? "checked" : "") +" >"
                                        +"</td>"                                        
                                        +"<td contenteditable='false'>"
                                         +"<select name='vigas_col_m'>"
                                                    +"<option value=''></option>"
                                                    +"<option value='1' "+  ( vigas_col_m === '1' ? "selected" : "") +">Concreto Simple</option>"
                                                    +"<option value='2' "+  ( vigas_col_m === '2' ? "selected" : "") +">Concreto Reforzado</option>"	
                                                    +"<option value='3' "+  ( vigas_col_m === '3' ? "selected" : "") +">Tubería concreto ref.</option>"
                                                    +"<option value='4' "+  ( vigas_col_m === '4' ? "selected" : "") +">Tubería Concreto simple</option>"
                                                    +"<option value='5' "+  ( vigas_col_m === '5' ? "selected" : "") +">Tubería de Acero</option>"
                                                    +"<option value='6' "+  ( vigas_col_m === '6' ? "selected" : "") +">Platina de Acero</option>"
                                    +"</td>"
                                    +"<td contenteditable='false'>"
                                         +"<select name='vigas_col_e'>"
                                                    +"<option value=''></option>"
                                                    +"<option value='1' "+  ( vigas_col_e === '1' ? "selected" : "") +">Malo</option>"
                                                    +"<option value='2' "+  ( vigas_col_e === '2' ? "selected" : "") +">Regular</option>"	
                                                    +"<option value='3' "+  ( vigas_col_e === '3' ? "selected" : "") +">Bueno</option>"
                                    +"</td>"
                                    +"<td contenteditable='false'>"
                                         +"<select name='vigas_col_p'>"
                                                    +"<option value=''></option>"
                                                    +"<option value='1'  "+  ( vigas_col_p === '1' ? "selected" : "") +">Grietas</option>"
                                                    +"<option value='2'  "+  ( vigas_col_p === '2' ? "selected" : "") +">Fisuras</option>"
                                                    +"<option value='3'  "+  ( vigas_col_p === '3' ? "selected" : "") +">Desprendimientos</option>"
                                                    +"<option value='4'  "+  ( vigas_col_p === '4' ? "selected" : "") +">Abombamientos</option>"
                                                    +"<option value='5'  "+  ( vigas_col_p === '5' ? "selected" : "") +">Carbonatación</option>"
                                                    +"<option value='6'  "+  ( vigas_col_p === '6' ? "selected" : "") +">Galvanoplastia</option>"                                                       
                                                    +"<option value='7'  "+  ( vigas_col_p === '7' ? "selected" : "") +">Desgaste</option>"
                                                    +"<option value='8'  "+  ( vigas_col_p === '8' ? "selected" : "") +">Volcamiento</option>"
                                                    +"<option value='9'  "+  ( vigas_col_p === '9' ? "selected" : "") +">Desnivelado</option>"
                                                    +"<option value='10'  "+  ( vigas_col_p === '10' ? "selected" : "") +">Desplomado</option>"
                                                    +"<option value='11'  "+  ( vigas_col_p === '11' ? "selected" : "") +">Hundimientos</option>"
                                                    +"<option value='12'  "+  ( vigas_col_p === '12' ? "selected" : "") +">Oxidación</option>"
                                                    +"<option value='13'  "+  ( vigas_col_p === '13' ? "selected" : "") +">Otra</option>"
                                          +"</select>"
                                    +"</td>"
                                    +"<td contenteditable='true' id='vigas_col_long_mayor'>"+vigas_col_long_mayor+"</td>"
                                    +"<td contenteditable='true' id='vigas_col_long_menor'>"+vigas_col_long_menor+"</td>"
                                    +"<td contenteditable='true' id='vigas_col_ancho_mayor'>"+vigas_col_ancho_mayor+"</td>"
                                    +"<td contenteditable='true' id='vigas_col_ancho_menor'>"+vigas_col_ancho_menor+"</td>"
                                        +"<td contenteditable='false'>"
                                                +"<input type='checkbox' class='form-control' id='vigas_t' "+  ( vigas_t === 'true' ? "checked" : "") +">"
                                        +"</td>"
                                        +"<td contenteditable='false'>"
                                                +"<input type='checkbox' class='form-control' id='vigas_l' "+  ( vigas_l === 'true' ? "checked" : "") +">"
                                        +"</td>"
                                        +"<td contenteditable='false'>"
                                                +"<input type='checkbox' class='form-control' id='vigas_a' "+  ( vigas_a === 'true' ? "checked" : "") +">"
                                        +"</td>"										
                                        +"<td contenteditable='false'>"
                                         +"<select name='placas_col_m'>"
                                                    +"<option value=''></option>"
                                                    +"<option value='1' "+  ( placas_col_m === '1' ? "selected" : "") +">Concreto Simple</option>"
                                                    +"<option value='2' "+  ( placas_col_m === '2' ? "selected" : "") +">Concreto Reforzado</option>"
                                                    +"<option value='3' "+  ( placas_col_m === '3' ? "selected" : "") +">Tubería concreto ref.</option>"
                                                    +"<option value='4' "+  ( placas_col_m === '4' ? "selected" : "") +">Tubería Concreto simple</option>"
                                                    +"<option value='5' "+  ( placas_col_m === '5' ? "selected" : "") +">Tubería de Acero</option>"
                                                    +"<option value='6' "+  ( placas_col_m === '6' ? "selected" : "") +">Platina de Acero</option>"
                                    +"</td>"
                                    +"<td contenteditable='false'>"
                                         +"<select name='placas_col_e'>"
                                                    +"<option value=''></option>"
                                                    +"<option value='1' "+  ( placas_col_e === '1' ? "selected" : "") +">Malo</option>"
                                                    +"<option value='2' "+  ( placas_col_e === '2' ? "selected" : "") +">Regular</option>"	
                                                    +"<option value='3' "+  ( placas_col_e === '3' ? "selected" : "") +">Bueno</option>"
                                    +"</td>"
                                    +"<td contenteditable='false'>"
                                         +"<select name='placas_col_p'>"
                                                    +"<option value=''></option>"
                                                    +"<option value='1' "+  ( placas_col_p === '1' ? "selected" : "") +">Grietas</option>"
                                                    +"<option value='2' "+  ( placas_col_p === '2' ? "selected" : "") +">Fisuras</option>"	
                                                    +"<option value='3' "+  ( placas_col_p === '3' ? "selected" : "") +">Desprendimientos</option>"
                                                    +"<option value='4' "+  ( placas_col_p === '4' ? "selected" : "") +">Abombamientos</option>"
                                                    +"<option value='5' "+  ( placas_col_p === '5' ? "selected" : "") +">Carbonatación</option>"
                                                    +"<option value='6' "+  ( placas_col_p === '6' ? "selected" : "") +">Galvanoplastia</option>"                                                        
                                                    +"<option value='7' "+  ( placas_col_p === '7' ? "selected" : "") +">Desgaste</option>"
                                                    +"<option value='8' "+  ( placas_col_p === '8' ? "selected" : "") +">Volcamiento</option>"
                                                    +"<option value='9' "+  ( placas_col_p === '9' ? "selected" : "") +">Desnivelado</option>"
                                                    +"<option value='10' "+  ( placas_col_p === '10' ? "selected" : "") +">Desplomado</option>"	
                                                    +"<option value='11' "+  ( placas_col_p === '11' ? "selected" : "") +">Hundimientos</option>"
                                                    +"<option value='12' "+  ( placas_col_p === '12' ? "selected" : "") +">Oxidación</option>"
                                                    +"<option value='13' "+  ( placas_col_p === '13' ? "selected" : "") +">Otra</option>"
                                          +"</select>"
                                    +"</td>"
                                    +"<td contenteditable='true' id='placas_col_long_mayor'>"+placas_col_long_mayor+"</td>"
                                    +"<td contenteditable='true' id='placas_col_long_menor'>"+placas_col_long_menor+"</td>"
                                    +"<td contenteditable='true' id='placas_col_ancho_mayor'>"+placas_col_ancho_mayor+"</td>"
                                    +"<td contenteditable='true' id='placas_col_ancho_menor'>"+placas_col_ancho_menor+"</td>"
                                    +"<td contenteditable='false'>"
                                            +"<input type='checkbox' class='form-control' id='placas_t' "+  ( placas_t === 'true' ? "checked" : "") +">"
                                    +"</td>"
                                    +"<td contenteditable='false'>"
                                            +"<input type='checkbox' class='form-control' id='placas_l' "+  ( placas_l === 'true' ? "checked" : "") +">"
                                    +"</td>"
                                    +"<td contenteditable='false'>"
                                            +"<input type='checkbox' class='form-control' id='placas_a' "+  ( placas_a === 'true' ? "checked" : "") +">"
                                    +"</td>"										
                                     +"<td contenteditable='true' id='observaciones_o' style='text-align: justify;' >"+observaciones_o+"</td>"                                        
                                    +"<td>"
                                        +"<span class='table-remove glyphicon glyphicon-remove'></span>"
                                    +"</td>"
                                +"</tr>";                                            
                                                  
                                $('#tableObras').find('table').append(newRow);
                                                    
						}
     

						}, function(tx1, error) {
							alert('Error occurred');
						});
					});
					
					myDB.transaction( function(transaction1) {
						
						var query = "SELECT * FROM pre_patologia_p where id_acta=" + window.localStorage.getItem("actaId");
						
						if( window.localStorage.getItem("post") === 'true' ){
							query = "SELECT * FROM post_patologia_p where id_acta=" + window.localStorage.getItem("actaId");
						} 
						
						
						transaction1.executeSql(query, [], function(tx1, results1) {


						console.log('*-*' + results1.rows.length);
							
						var len2 = results1.rows.length, k;

						for (k = 0; k < len2; k++) {
		
									
                                var abscisa = (results1.rows.item(k).abscisa);
                                var valor_p = (results1.rows.item(k).valor_p);
                                var valor_e = (results1.rows.item(k).valor_e);
                                var izq = (results1.rows.item(k).izq);
                                var eje = (results1.rows.item(k).eje);
                                var der = (results1.rows.item(k).der);
                                var transver = (results1.rows.item(k).transver); 
                                var longi = (results1.rows.item(k).longi); 
                                var aleatoria = (results1.rows.item(k).aleatoria);                                
                                var long_mayor = (results1.rows.item(k).long_mayor);
                                var long_menor = (results1.rows.item(k).long_menor);
                                var ancho_mayor = (results1.rows.item(k).ancho_mayor);
                                var ancho_menor = (results1.rows.item(k).ancho_menor);
                                var prof_mayor = (results1.rows.item(k).prof_mayor);
                                var prof_menor = (results1.rows.item(k).prof_menor);
                                var observaciones_p = (results1.rows.item(k).observaciones_p);
                                                    
                                                    
                                var newRow ="<tr>"
                                  +"<td contenteditable='true' id='abscisa' style='text-align: center;'>"+abscisa+"</td>"
                                  +"<td contenteditable='false'>"
                                       +"<select name='valor_p'>"
                                          +"<option value=''></option>"
                                          +"<option value='1' "+  ( valor_p === '1' ? "selected" : "") +">Fisuras</option>"
                                          +"<option value='2' "+  ( valor_p === '2' ? "selected" : "") +">Grietas</option>"
                                          +"<option value='3' "+  ( valor_p === '3' ? "selected" : "") +">Baches</option>"
                                          +"<option value='4' "+  ( valor_p === '4' ? "selected" : "") +">Hundimiento</option>"
                                          +"<option value='5' "+  ( valor_p === '5' ? "selected" : "") +">Cuero de caiman/cocodrilo</option>"
                                          +"<option value='6' "+  ( valor_p === '6' ? "selected" : "") +">Perdida de borde</option>"
                                          +"<option value='7' "+  ( valor_p === '7' ? "selected" : "") +">Flujo de asfalto</option>"
                                          +"<option value='8' "+  ( valor_p === '8' ? "selected" : "") +">Perdida de la banca</option>"
                                          +"<option value='9' "+  ( valor_p === '9' ? "selected" : "") +">Carcavas</option>"
                                          +"<option value='10' "+  ( valor_p === '10' ? "selected" : "") +">Perdida de finos capa de rodadura</option>"
                                          +"<option value='11' "+  ( valor_p === '11' ? "selected" : "") +">Desprendimiento</option>"
                                          +"<option value='12' "+  ( valor_p === '12' ? "selected" : "") +">Socavación Avanzada</option>"
                                          +"<option value='13' "+  ( valor_p === '13' ? "selected" : "") +">Socavación fuerte</option>"
                                          +"<option value='14' "+  ( valor_p === '14' ? "selected" : "") +">Otro</option>"
                                        +"</select>"
                                  +"</td>"
                                  +"<td contenteditable='false'>"
                                      +" <select name='valor_e'>"
                                                  +"<option value=''></option>"
                                                  +"<option value='1' "+  ( valor_e === '1' ? "selected" : "") +">Malo</option>"
                                                  +"<option value='2' "+  ( valor_e === '2' ? "selected" : "") +">Regular</option>"	
                                                  +"<option value='3' "+  ( valor_e === '3' ? "selected" : "") +">Bueno</option>"
                                        +"</select>"
                                  +"</td>"
                                  +"<td contenteditable='true' id='izq'>"+izq+"</td>"
                                  +"<td contenteditable='true' id='eje'>"+eje+"</td>"
                                  +"<td contenteditable='true' id='der'>"+der+"</td>"
                                  +"<td contenteditable='false'>"
                                      +"<input type='checkbox' class='form-control' id='transver' "+  ( transver === 'true' ? "checked" : "") +">"
                                  +"</td>"
                                  +"<td contenteditable='false'>"
                                      +"<input type='checkbox' class='form-control' id='longi' "+  ( longi === 'true' ? "checked" : "") +">"
                                  +"</td>"
                                  +"<td contenteditable='false'>"
                                      +"<input type='checkbox' class='form-control' id='aleatoria' "+  ( aleatoria === 'true' ? "checked" : "") +">"
                                  +"</td>"
                                  +"<td contenteditable='true' id='long_mayor'>"+long_mayor+"</td>"
                                  +"<td contenteditable='true' id='long_menor'>"+long_menor+"</td>"
                                  +"<td contenteditable='true' id='ancho_mayor'>"+ancho_mayor+"</td>"
                                  +"<td contenteditable='true' id='ancho_menor'>"+ancho_menor+"</td>"
                                  +"<td contenteditable='true' id='prof_mayor'>"+prof_mayor+"</td>"
                                  +"<td contenteditable='true' id='prof_menor'>"+prof_menor+"</td>"
                                  +"<td contenteditable='true' id='observaciones2' style='text-align: justify'>"+observaciones_p+"</td>"
                                  +"<td>"
                                      +"<span class='table-remove2 glyphicon glyphicon-remove'></span>"
                                  +"</td>"
                              +"</tr>";
                                                    
                               $('#tablePatologias').find('table').append(newRow);                   
							
						}
     

						}, function(tx1, error) {
							alert('Error occurred');
						});
					});
					 
					 

                }
            }, function(tx, error)
            {
                alert('Error occurred');
            });
        });


    } else {


        var fechaHoraIni = getCurrentDateTime();
        window.localStorage.setItem("fechaHoraIni", fechaHoraIni);

        myDB.transaction(function(transaction) {
            transaction.executeSql('SELECT MAX(id) as id FROM pre_vial_p', [], function(tx, results) {
                var len = results.rows.length, i;
                var maxId = 0;

                for (i = 0; i < len; i++) {
                    maxId = (results.rows.item(i).id) + 1;
                }

                ac = maxId;
                $("#acta").val(maxId);

            }, function(tx, error) {
                alert('Error occurred');
            });
        });

    }
    
    $("#customActa").value(ac);

}

function generatePDF() {
	
    jQuery.fn.pop = [].pop;
    jQuery.fn.shift = [].shift;
	
	var $TABLE = $('#tableObras');
	
	var headers = [];
	var data = [];
	   
	var $rows = $TABLE.find('tr:not(:hidden)');
		
	//headers
	$($rows.shift()).find('th:not(:empty)').each(function() {
		headers.push($(this).attr('id') );
	});
		
	$rows.each(function() {
		
		var $td = $(this).find('td');
		var h = {};
		
		headers.forEach(function(header, i) {
			var elemen = $td.eq(i)[0].children[0];
			if(elemen){
				if( elemen.tagName === 'SELECT'  ){
					h[header] = elemen.value;
				} else {
					h[header] = elemen.checked;		
				}
			} else {
				h[header] = $td.eq(i).text();
			}

		});

		data.push(h);

	});
	

	var obrasRowsHtml = '';
	
	var arteData = JSON.stringify(data);
	
	console.log(arteData);
	
	
        
       var encabezado =  
	   

	   
					"   <tr>"
					+ "  <td class='encabezado' colspan='34'><b>8. INVENTARIO DE OBRAS DE ARTE</b></td>"
					+ "   </tr>"
					+ "   <tr>"
					+ "   <td style='width:2%' rowspan='4'><b>N</b></td>"
					+ "   <td style='width:5%' rowspan='4'><b>Cod</b></td>"
					+ "   <td style='width:5%' rowspan='4'><b>Abscisa</b></td>"
					+ "   <td style='width:22%' colspan='10' align='center'><b>Estribos / Cabezales / Columnas /Pilas/ Pantallas</b></td>"
					+ "   <td style='width:22%' colspan='10' align='center'><b>Vigas Inferiores / Aéreas / Guarda ruedas</b></td>"
					+ "   <td style='width:22%' colspan='10' align='center'><b>Placas (inferiores/superiores)</b></td>"
					+ "   <td style='width:22%' rowspan='4' align='center'><b>Observaciones</b></td>"
					+ "    </tr>"
					+ "  <tr>"
					+ "   <td style='width:6%' rowspan='2' colspan='3' align='center'><b>Código</b></td>"
					+ "   <td style='width:14%' colspan='7' align='center'><b>Magnitudes patología (m)</b></td>"
					+ "   <td style='width:6%' rowspan='2' colspan='3' align='center'><b>Código</b></td>"
					+ "   <td style='width:14%' colspan='7' align='center'><b>Magnitudes patología (m)</b></td>"
					+ "   <td style='width:6%' rowspan='2' colspan='3' align='center'><b>Código</b></td>"
					+ "   <td style='width:14%' colspan='7' align='center'><b>Magnitudes patología (m)</b></td>"
					+ "    </tr>"
					+ "   <tr>"
					+ "   <td style='width:4%' colspan='2' align='center'><b>Longitud</b></td>"
					+ "   <td style='width:4%' colspan='2' align='center'><b>Ancho</b></td>"
					+ "   <td style='width:6%' colspan='3' align='center'><b>Orient</b></td>"
					+ "   <td style='width:4%' colspan='2' align='center'><b>Longitud</b></td>"
					+ "   <td style='width:4%' colspan='2' align='center'><b>Ancho</b></td>"
					+ "   <td style='width:6%' colspan='3' align='center'><b>Orient</b></td>"
					+ "   <td style='width:4%' colspan='2' align='center'><b>Longitud</b></td>"
					+ "   <td style='width:4%' colspan='2' align='center'><b>Ancho</b></td>"
					+ "   <td style='width:6%' colspan='3' align='center'><b>Orient</b></td>"
					+ "    </tr>"
					+ "   <tr>"
					+ "  <td style='width:2%'><b>M</b></td>"
					+ "   <td style='width:2%'><b>E</b></td>"
					+ "   <td style='width:2%'><b>P</b></td>"
					+ "   <td style='width:2%'><b>Menor</b></td>"
					+ "   <td style='width:2%'><b>Mayor</b></td>"
					+ "   <td style='width:2%'><b>Menor</b></td>"
					+ "   <td style='width:2%'><b>Mayor</b></td>"
					+ "   <td style='width:2%'><b>T</b></td>"
					+ "   <td style='width:2%'><b>L</b></td>"
					+ "   <td style='width:2%'><b>A</b></td>"
					+ "  <td style='width:2%'><b>M</b></td>"
					+ "   <td style='width:2%'><b>E</b></td>"
					+ "   <td style='width:2%'><b>P</b></td>"
					+ "   <td style='width:2%'><b>Menor</b></td>"
					+ "   <td style='width:2%'><b>Mayor</b></td>"
					+ "   <td style='width:2%'><b>Menor</b></td>"
					+ "   <td style='width:2%'><b>Mayor</b></td>"
					+ "   <td style='width:2%'><b>T</b></td>"
					+ "   <td style='width:2%'><b>L</b></td>"
					+ "   <td style='width:2%'><b>A</b></td>"
					+ "  <td style='width:2%'><b>M</b></td>"
					+ "   <td style='width:2%'><b>E</b></td>"
					+ "   <td style='width:2%'><b>P</b></td>"
					+ "   <td style='width:2%'><b>Menor</b></td>"
					+ "   <td style='width:2%'><b>Mayor</b></td>"
					+ "   <td style='width:2%'><b>Menor</b></td>"
					+ "   <td style='width:2%'><b>Mayor</b></td>"
					+ "   <td style='width:2%'><b>T</b></td>"
					+ "   <td style='width:2%'><b>L</b></td>"
					+ "   <td style='width:2%'><b>A</b></td>"
					+ "</tr>"
	
	$.each(JSON.parse(arteData), function(i, item) {

		var j = i + 1;
		var obrasRowHtml = 	
				"<tr>"
				   +"<td style='width:2%;height:185px'><b>"+ j +"</b></td>"
				   +"<td style='width:5%'>"+ item.cod_obra_arte+"</td>"
				   +"<td style='width:5%;text-align: center;'>"+ item.abscisa+"</td>"
				   +"<td style='width:2%'>"+ item.estribos_col_m+"</td>"
				   +"<td style='width:2%'>"+ item.estribos_col_e +"</td>"
				   +"<td style='width:2%'>"+ item.estribos_col_p +"</td>"
				   +"<td style='width:2%'>"+ item.estribos_col_long_mayor +"</td>"
				   +"<td style='width:2%'>"+ item.estribos_col_long_menor +"</td>"
				   +"<td style='width:2%'>"+ item.estribos_col_ancho_mayor +"</td>"
				   +"<td style='width:2%'>"+ item.estribos_col_ancho_menor +"</td>"
				   +"<td style='width:2%'>"+ (item.estribos_t ? "X" : "") +"</td>"
				   +"<td style='width:2%'>"+ (item.estribos_l ? "X" : "") +"</td>"
				   +"<td style='width:2%'>"+ (item.estribos_a ? "X" : "") +"</td>"
				   +"<td style='width:2%'>"+ item.vigas_col_m +"</td>"
				   +"<td style='width:2%'>"+ item.vigas_col_e +"</td>"
				   +"<td style='width:2%'>"+ item.vigas_col_p +"</td>"
				   +"<td style='width:2%'>"+ item.vigas_col_long_mayor +"</td>"
				   +"<td style='width:2%'>"+ item.vigas_col_long_menor +"</td>"
				   +"<td style='width:2%'>"+ item.vigas_col_ancho_mayor +"</td>"
				   +"<td style='width:2%'>"+ item.vigas_col_ancho_menor +"</td>"
				   +"<td style='width:2%'>"+ (item.vigas_t ? "X" : "") +"</td>"
				   +"<td style='width:2%'>"+ (item.vigas_l ? "X" : "") +"</td>"
				   +"<td style='width:2%'>"+ (item.vigas_a ? "X" : "") +"</td>"
				   +"<td style='width:2%'>"+ item.placas_col_m +"</td>"
				   +"<td style='width:2%'>"+ item.placas_col_e +"</td>"
				   +"<td style='width:2%'>"+ item.placas_col_p +"</td>"
				   +"<td style='width:2%'>"+ item.placas_col_long_mayor +"</td>"
				   +"<td style='width:2%'>"+ item.placas_col_long_menor +"</td>"
				   +"<td style='width:2%'>"+ item.placas_col_ancho_mayor +"</td>"
				   +"<td style='width:2%'>"+ item.placas_col_ancho_menor +"</td>"
				   +"<td style='width:2%'>"+ (item.placas_t ? "X" : "") +"</td>"
				   +"<td style='width:2%'>"+ (item.placas_l ? "X" : "") +"</td>"
				   +"<td style='width:2%'>"+ (item.placas_a ? "X" : "") +"</td>"
				   +"<td style='width:20;font-size:10px;text-align: justify;'>"+ item.observaciones_o  +"</td>"
			+"</tr>";

			
                        if(j==3 || j==9 || j==15 || j==21 || j==27 || j==33 || j==39 || j==45 || j==51 || j==57 || j==63 || j==69 || j==75){
							
							var tit =
							
								"<tr>"
								+ "<td colspan='34'>"
								+ " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
								+ " <tbody>"
								+ " <tr><td class='encabezado2' colspan='4'>Pagina "+ currentPage +" de "+$("#pagDe").val()+"&nbsp&nbsp</td></tr>"
								+ "  <tr>"
								+ "  <td colspan='4'>"
								+ "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
								+ "    <tbody>"
								+ "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
								+ "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA POST REGISTRO DE EVALUACIÓN VIAL</td>"
								+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
								+ "   </tr>"
								+ "   <tr>"
								+ "    <td colspan='4'>"
								+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
								+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-09</td>"					
								+ "	    <td  style='font-size:10px;text-align:right;padding-right:5px'>Versi&oacute;n 8, Octubre de 2018</td></tr></table>"
								+ "  </td></tr><tr>"
								+ "  <td style='width: 60%;font-size:14px'>  "+ window.localStorage.getItem('programa_sismico') +" </td>"
								+ "  <td style='width: 10%;font-size:14px'>OPERADORA:</td>"
								+ "  <td style='font-size:14px;'>   "+  window.localStorage.getItem('operadora') +"  </td>"
								+ "   </tr>    "
								+ "    </tbody>"
								+ "</table>"
								+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
								+ " <tbody>"
								+ "  <tr>"
								+ "  <td style='font-size:14px'>Fecha:</td>"
								+ "  <td style='font-size:14px'> "+  ($("#fecha").val()) +"</td>"
								+ "  <td style='font-size:14px'>Acta Nº.</td>"
								+ "  <td style='font-size:14px'>  POST-AV-" + $("#customActa").val() +" </td>"
								
								+ "  <td style='font-size:14px'>Via</td>"
								+ "  <td style='font-size:14px'> " + $("#nvia").val() +" </td>"
								

								+ "   </tr>    "
								+ "  </tbody>"
								+ "</table>"            
							
							
							
							
                            obrasRowsHtml += obrasRowHtml + "</table><p style='page-break-after: always;'><table border='1' cellspacing='0' cellpadding='0' class='titulosCeldas'>"+tit+encabezado;
							currentPage++;
                        } else {
                            obrasRowsHtml += obrasRowHtml;
                        }
			
		
	});	
        
        
        obrasRowsHtml += "</table></p>";

	console.log(obrasRowsHtml);

	$TABLE = $('#tablePatologias');
	
	headers = [];
	data = [];
	   
	$rows = $TABLE.find('tr:not(:hidden)');
		
	//headers
	$($rows.shift()).find('th:not(:empty)').each(function() {
		headers.push($(this).attr('id') );
	});
		
		$rows.each(function() {
			
            var $td = $(this).find('td');
            var h = {};
			
			headers.forEach(function(header, i) {
				var elemen = $td.eq(i)[0].children[0];
				if(elemen){
					if( elemen.tagName === 'SELECT'  ){
						h[header] = elemen.value;
					} else {
						h[header] = elemen.checked;		
					}
				} else {
					h[header] = $td.eq(i).text();
				}

            });

			data.push(h);

        });
		

	var patoData = JSON.stringify(data);
	console.log(patoData);
	
	var patoRowsHtml = '';
        
        var encabezadoPatos =  
					
					"<tr>"
					+ "<td colspan='17'>"
					+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
					+ "<tbody>"
					+ "<tr>"
					+ "  <td style='width:10%' class='encabezado' colspan='2'><b>9. CLASIFICACIÓN</b></td>"
					+ "  <td style='width:40%' class='encabezado' colspan='4'><b>10. ESTRUCTURA DE LA VIA</b></td>"
					+ "  <td style='width:40%' class='encabezado' colspan='4'><b>11. CODIGOS PATOLOGÍA (P)</b></td>"
					+ "  <td style='width:10%' class='encabezado' colspan='2'><b>12. ESTADO (E)</b></td>"
					+ "</tr>"
					+ "<tr>"
					+ "  <td style='width:7%'>1. Orden</td>"
					+ "  <td style='width:3%'>" + ($("#orden_1").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Sin pavimento</td>"
					+ "  <td style='width:3%'>" + ($("#sin_pavimento").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Adoquín</td>"
					+ "  <td style='width:3%'>" + ($("#adoquin").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Fisuras</td>"
					+ "  <td style='width:3%' align='center'>1</td>"
					+ "  <td style='width:17%'>Pérdida de la banca</td>"
					+ "  <td style='width:3%' align='center'>8</td>"
					+ "  <td style='width:3%' align='center'>1</td>"
					+ "  <td style='width:7%'>Malo</td>"
					+ "</tr>"
					+ "<tr>"
					+ "  <td style='width:7%'>2. Orden</td>"
					+ "  <td style='width:3%'>" + ($("#orden_2").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Con afirmado</td>"
					+ "  <td style='width:3%'>" + ($("#con_afirmado").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Triturado</td>"
					+ "  <td style='width:3%'>" + ($("#triturado").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Grietas</td>"
					+ "  <td style='width:3%' align='center'>2</td>"
					+ "  <td style='width:17%'>Cárcavas</td>"
					+ "  <td style='width:3%' align='center'>9</td>"
					+ "  <td style='width:3%' align='center'>2</td>"
					+ "  <td style='width:7%'>Regular</td>"
					+ "</tr>"
					+ "<tr>"
					+ "  <td style='width:7%'>3. Orden</td>"
					+ "  <td style='width:3%'>" + ($("#orden_3").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Sin afirmado</td>"
					+ "  <td style='width:3%'>" + ($("#sin_afirmado").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Empedrado</td>"
					+ "  <td style='width:3%'>" + ($("#empedrado").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Baches</td>"
					+ "  <td style='width:3%' align='center'>3</td>"
					+ "  <td style='width:17%'>Pérdida de finos capa de rodadura</td>"
					+ "  <td style='width:3%' align='center'>10</td>"
					+ "  <td style='width:3%' align='center'>3</td>"
					+ "  <td style='width:7%'>Bueno</td>"
					+ "</tr>"
					+ "<tr>"
					+ "  <td style='width:7%'>Veredal</td>"
					+ "  <td style='width:3%'>" + ($("#veredal").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Pav. Flex. Cto. Asfáltico</td>"
					+ "  <td style='width:3%'>" + ($("#pav_flex_cto_asfaltico").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Material de aporte</td>"
					+ "  <td style='width:3%'>" + ($("#material_aporte").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Hundimiento</td>"
					+ "  <td style='width:3%' align='center'>4</td>"
					+ "  <td style='width:17%'>Desprendimiento</td>"
					+ "  <td style='width:3%' align='center'>11</td>"
					+ "  <td style='width:3%' class='encabezado' colspan='2'><b>Orientación</b></td>"
					+ "</tr>"
					+ "<tr>"
					+ "  <td style='width:7%'>Vecinal</td>"
					+ "  <td style='width:3%'>" + ($("#vecinal").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Pav. Flex. Crudo castilla</td>"
					+ "  <td style='width:3%'>" + ($("#pav_flex_crudo").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Crudo de río sin selecc</td>"
					+ "  <td style='width:3%'>" + ($("#crudo_rio").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Cuero de caimán/cocodrilo</td>"
					+ "  <td style='width:3%' align='center'>5</td>"
					+ "  <td style='width:17%'>Socavación Avanzada</td>"
					+ "  <td style='width:3%' align='center'>12</td>"
					+ "  <td style='width:3%' align='center'>L</td>"
					+ "  <td style='width:7%'>Longitudinal</td>"
					+ "</tr>    "
					+ "<tr>"
					+ "  <td style='width:7%'>Privada</td>"
					+ "  <td style='width:3%'>" + ($("#privada").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Tratamiento superficial</td>"
					+ "  <td style='width:3%'>" + ($("#trat_superficial").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Crudo de río selecc.</td>"
					+ "  <td style='width:3%'>" + ($("#crudo_rio_sel").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Pérdida de borde</td>"
					+ "  <td style='width:3%' align='center'>6</td>"
					+ "  <td style='width:17%'>Socavación fuerte</td>"
					+ "  <td style='width:3%' align='center'>13</td>"
					+ "  <td style='width:3%' align='center'>A</td>"
					+ "  <td style='width:7%'>Aleatoria</td>"
					+ "</tr>"
					+ "<tr>"
					+ "  <td style='width:7%'>Comunitaria</td>"
					+ "  <td style='width:3%'>" + ($("#comunitaria").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Pav. rígido Cto. Portland</td>"
					+ "  <td style='width:3%'>" + ($("#pav_rigido").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Otros:</td>"
					+ "  <td style='width:3%'> " + ($("#otros").val())+" </td>"
					+ "  <td style='width:17%'>Flujo de asfalto</td>"
					+ "  <td style='width:3%' align='center'>7</td>"
					+ "  <td style='width:17%'>Otro:</td>"
					+ "  <td style='width:3%' align='center'>14</td>"
					+ "  <td style='width:3%' align='center'>T</td>"
					+ "  <td style='width:7%'>Transversal</td>"
					+ "   </tr>"
					+ " </tbody></table>"
					+ " </td>"
					+ "</tr>"					
					+ "<tr>"
					+ "  <td class='encabezado' colspan='17'><b>13. INVENTARIO PATOLÓGICO DE LA VIA</b></td>"
					+ "</tr>"		
					+"<tr>"
					+ "   <td style='width:2%' rowspan='2'><b>No.</b></td>"
					+ "   <td style='width:10%' rowspan='2'><b>Abscisa</b></td>"
					+ "   <td style='width:4%' rowspan='2' align='center'><b>P</b></td>"
					+ "   <td style='width:4%' rowspan='2' align='center'><b>E</b></td>"
					+ "   <td style='width:12%' colspan='3' align='center'><b>Ubicación</b></td>"
					+ "   <td style='width:12%' colspan='3' align='center'><b>Orientación</b></td>"
					+ "   <td style='width:8%' colspan='2' align='center'><b>Longitud (m)</b></td>"
					+ "   <td style='width:8%' colspan='2' align='center'><b>Ancho (m)</b></td>"
					+ "   <td style='width:8%' colspan='2' align='center'><b>Profundidad (m)</b></td>"
					+ "   <td style='width:32%' rowspan='2'><b>Observaciones</b></td>"
					+ "</tr>"
					+ "<tr>"
					+ "  <td style='width:4%'><b>Izq.</b></td>"
					+ "  <td style='width:4%'><b>Eje</b></td>"
					+ "  <td style='width:4%'><b>Der.</b></td>"
					+ "  <td style='width:4%'><b>T</b></td>"
					+ "  <td style='width:4%'><b>L</b></td>"
					+ "  <td style='width:4%'><b>A</b></td>"
					+ "  <td style='width:4%'><b>Mayor</b></td>"
					+ "  <td style='width:4%'><b>Menor</b></td>"
					+ "  <td style='width:4%'><b>Mayor</b></td>"
					+ "  <td style='width:4%'><b>Menor</b></td>"
					+ "  <td style='width:4%'><b>Mayor</b></td>"
					+ "  <td style='width:4%'><b>Menor</b></td>"
					+ "</tr>";
					
					currentPage2 = currentPage + 1;
	
	$.each(JSON.parse(patoData), function(i, item) {
		
		var j = i + 1;
		var patoRowHtml = 	
				"<tr>"
				   +"<td style='width:2%;height:100px'><b>"+ j +".</b></td>"
				   +"<td style='width:10%;text-align: center'>"+ item.abscisa+"</td>"
				   +"<td style='width:4%'>"+ item.valor_p+"</td>"
				   +"<td style='width:4%'>"+ item.valor_e+"</td>"
				   +"<td style='width:4%'>"+ item.izq +"</td>"
				   +"<td style='width:4%'>"+ item.eje +"</td>"
				   +"<td style='width:4%'>"+ item.der +"</td>"
				   +"<td style='width:4%'>"+ (item.transver ? "X" : "") +"</td>"
				   +"<td style='width:4%'>"+ (item.longi ? "X" : "") +"</td>"
				   +"<td style='width:4%'>"+ (item.aleatoria ? "X" : "") +"</td>"
				   +"<td style='width:4%'>"+ item.long_mayor +"</td>"
				   +"<td style='width:4%'>"+ item.long_menor +"</td>"
				   +"<td style='width:4%'>"+ item.ancho_mayor +"</td>"
				   +"<td style='width:4%'>"+ item.ancho_menor +"</td>"
				   +"<td style='width:4%'>"+ item.prof_mayor +"</td>"
				   +"<td style='width:4%'>"+ item.prof_menor +"</td>"
                                   +"<td style='width:20;font-size:10px;text-align: justify;'>"+ item.observaciones_p  +"</td>"
			+"</tr>";
                
						
                
                        if(j==9 || j==18 || j==27 || j==37 || j==47 || j==57 || j==67 ){
							
							
							var tit2 =
							
								"<tr>"
								+ "<td colspan='34'>"
								+ " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
								+ " <tbody>"
								+ " <tr><td class='encabezado2' colspan='4'>Pagina "+ currentPage2 +" de "+$("#pagDe").val()+"&nbsp&nbsp</td></tr>"
								+ "  <tr>"
								+ "  <td colspan='4'>"
								+ "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
								+ "    <tbody>"
								+ "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
								+ "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA POST REGISTRO DE EVALUACIÓN VIAL</td>"
								+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
								+ "   </tr>"
								+ "   <tr>"
								+ "    <td colspan='4'>"
								+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
								+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-09</td>"					
								+ "	    <td  style='font-size:10px;text-align:right;padding-right:5px'>Versi&oacute;n 8, Octubre de 2018</td></tr></table>"
								+ "  </td></tr><tr>"
								+ "  <td style='width: 60%'>  "+ window.localStorage.getItem('programa_sismico') +" </td>"
								+ "  <td style='width: 10%'>OPERADORA:</td>"
								+ "  <td>  "+  window.localStorage.getItem('operadora') +"  </td>"
								+ "   </tr>    "
+ "    </tbody>"
								+ "</table>"
								+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
								+ " <tbody>"
								+ "  <tr>"
								+ "  <td >Fecha:</td>"
								+ "  <td > "+  ($("#fecha").val()) +"</td>"
								+ "  <td >Acta Nº.</td>"
								+ "  <td >  POST-AV-" + $("#customActa").val() +" </td>"
								
								+ "  <td >Via</td>"
								+ "  <td > " + $("#nvia").val() +" </td>"
								

								+ "   </tr>    "
								+ "  </tbody>"
								+ "</table>"            
							
							
							
                            patoRowsHtml += patoRowHtml + "</table><p style='page-break-after: always;'><table border='1' cellspacing='0' cellpadding='0' width='100%'>"+tit2+encabezadoPatos;
							currentPage2++;
                        } else {
                            patoRowsHtml += patoRowHtml;
                        }
		
	});
	
	patoRowsHtml += "</table></p>";
    
    var successC = function(status) {
        alert('Message: ' + status);
    };
    var errorC = function(status) {
        alert('Error: ' + status);
    };
	
    window.CacheClear(successC, errorC);

    var success = function(status) {
        alert('Se genero PDF ' + status);
    }

    var failure = function(status) {
        alert('Error generando PDF ' + status);
    }

    pdf.htmlToPDF({
            data:"<!DOCTYPE html>"
					+ "<html><head><meta http-equiv='Content-Type' content='text/html; charset=windows-1252'>"
					+ "<title></title>"
					+ "<style type='text/css'>"
					+ "    body {"
					+ "         font: normal 14px Verdana, Arial, sans-serif;"
					+ "    }"
					+ "  .encabezado {"
					+ "    background-color: #dd0806;"
					+ "    color: #FFFFFF;"
					+ "    text-align:center;"
					+ "   	font-size: 11px;"
					+ "   }"
                    + "  .encabezado2 {"
					+ "    background-color: #dd0806;"
					+ "    color: #FFFFFF;"
					+ "    text-align:right;"
                    + "    font-size: 11px;"
					+ "   }"
					+ "   .celda{"
					+ "    border: 1px solid black;"
					+ "   }"
					+ "    table {"
					+ "    border-collapse: collapse;"
					+ "    border-top: none;	"
					+ "   }"
					+ "   td{"
					+ "    padding-left:3px;	"
					+ "   }"
					+ "   .tituloFila{"
					+ "    width: 200px;	"
					+ "   }"
					+ "   .tituloFila2{"
					+ "    width: 150px;	"
					+ "    font-weight: bold;"
					+ "   }"
					+ "   .tituloFila3{"
					+ "     width: 12%;	"
					+ "    }"
					+ "   .titulosCeldas{"
					+ "   	 font-size: 10px;"
					+ "    }"
					+ "    .tag {"
					+ "         text-align:left;"
					+ "         bottom:0;"
					+ "         position:relative;"
					+ "         top: 0px;"
					+ "         background-color: white; "
					+ "         left:0;"
					+ "         width:200px; }"
                    + "@page"  
                    + "{" 
                    + "    size: auto;  " 
                    + "    margin: 10mm 10mm 5mm 10mm;  "
                    + "}"                                 
                    + ".rotate {"
                    + " text-align: center;"
                    + " white-space: nowrap;"
                    + " vertical-align: middle;"
                    + " width: 2em;"
                    + " height:650px;"
                    + "}"
                    + ".rotate div {"
                    + "   -moz-transform: rotate(-270.0deg);"
                    + "   -o-transform: rotate(-270.0deg);"
                    + "   -webkit-transform: rotate(-270.0deg);"
                    + "   margin-left: -10em; "
                    + "   margin-right: -10em;"
                    + "   background-color: #dd0806;"
					+ "   color: #FFFFFF;"
                    + "}"  
                    + "@page :first "  
                    + "{" 
                    + "    size: auto;  " 
                    + "    margin: 10mm 10mm 5mm 10mm;  "
                    + "}"     
					+ "</style>"
					+ " </head>"
					+ " <body>"
					
                                
                    + " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
                    + " <tbody>"
                    + " <tr><td class='encabezado2' colspan='4'>Pagina 1 de "+$("#pagDe").val()+"&nbsp&nbsp</td></tr>"
                    + "  <tr>"
                    + "  <td colspan='4'>"
                    + "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                    + "    <tbody>"
                    + "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
                    + "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA POST REGISTRO DE EVALUACIÓN VIAL</td>"
					+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
                    + "   </tr>"
					+ "   <tr>"
					+ "    <td colspan='4'>"
					+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
					+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-09</td>"					
					+ "	    <td  style='font-size:10px;text-align:right;padding-right:5px'>Versi&oacute;n 8, Octubre de 2018</td></tr></table>"
                    + "  </td></tr><tr>"
                    + "  <td style='width: 60%'>  "+ window.localStorage.getItem('programa_sismico') +" </td>"
                    + "  <td style='width: 10%'>OPERADORA:</td>"
                    + "  <td>  "+  window.localStorage.getItem('operadora') +"  </td>"
                    + "   </tr>    "
					
+ "    </tbody>"
								+ "</table>"
								+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
								+ " <tbody>"
								+ "  <tr>"
								+ "  <td >Fecha:</td>"
								+ "  <td > "+  ($("#fecha").val()) +"</td>"
								+ "  <td >Acta Nº.</td>"
								+ "  <td >  POST-AV-" + $("#customActa").val() +" </td>"
								
								+ "  <td >Via</td>"
								+ "  <td > " + $("#nvia").val() +" </td>"
								

								+ "   </tr>    "
								+ "  </tbody>"
								+ "</table>"                                           
                                
					+ " <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
					+ "    <tbody>"
					+ "   <tr>"
					+ "  <td style='width:40%' class='encabezado' colspan='2'><b>1. LOCALIZACIÓN</b></td>"
					+ "  <td style='width:30%' class='encabezado' colspan='2'><b>2. UNIDAD GEOMORFOLÓGICA</b></td>"
					+ "  <td style='width:30%' class='encabezado' colspan='3'><b>3. COMPONENTES GEOMÉTRICOS</b></td>"
					+ "   </tr>"
					+ "   <tr>"
					+ "  <td style='width:20%'>Departamento:</td>"
					+ "  <td style='width:20%'>  " + ($("#P_DEPTO option:selected").text())+" </td>"
					+ "  <td style='width:15%'>Plana:</td>"
					+ "  <td style='width:15%'>" + ($("#plana").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:15%'>Ancho promedio (M):</td>"
					+ "   <td style='width:15%' colspan='2'> " + ($("#ancho_promedio").val())+" </td>"
					+ "   </tr>    "
					+ "  <tr>"
					+ "  <td style='width:20%'>Municipio:</td>"
					+ "  <td style='width:20%'>  " + ($("#P_MUN option:selected").text())+" </td>"
					+ "  <td style='width:15%'>Ondulada:</td>"
					+ "  <td style='width:15%'>" + ($("#ondulada").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:15%' rowspan='3'>Pendiente longitudinal %</td>"
					+ "   <td style='width:7.5%'>0 - 5</td>"
					+ " <td style='width:7.5%'>" + ($("#pendiente1").is(':checked') ? "X" : "") + " </td>"
					+ "   </tr>"
					+ "   <tr>"
					+ "  <td style='width:15%'>Vereda:</td>"
					+ "  <td style='width:15%'>  " + ($("#vereda").val())+" </td>"
					+ "  <td style='width:15%'>Quebrada:</td>"
					+ "  <td style='width:15%'>" + ($("#quebrada").is(':checked') ? "X" : "") + " </td>"
					+ "   <td style='width:7.5%'>5 - 10</td>"
					+ " <td style='width:7.5%'>" + ($("#pendiente2").is(':checked') ? "X" : "") + " </td>"
					+ "   </tr>"
					+ "  <tr>"
					+ "  <td style='width:15%'>Propietario:</td>"
					+ "  <td style='width:15%'>  " + ($("#propietario").val())+" </td>"
					+ "  <td style='width:15%'>Escarpe:</td>"
					+ "  <td style='width:15%'>" + ($("#escarpe").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:7.5%'>&gt;10</td>"
					+ " <td style='width:7.5%'>" + ($("#pendiente3").is(':checked') ? "X" : "") + " </td>"
					+ " </tr>"
					+ " </tbody>"
					+ "</table>"
					+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
					+ "    <tbody>"
					+ "   <tr>"
					+ "  <td style='width:100%' class='encabezado'><b>4. INFORMACIÓN GENERAL</b></td>"
					+ " </tr> "
					+ " <tr>"
                    + "<td style='width:100%;padding:3px;' align='justify'><p>"+$("#postVialParrafo").val()
					+ "</p></td>  "
					+ "   </tr>"
					+ "    </tbody>"
					+ "</table>"
					+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
					+ "    <tbody>"
					+ "  <tr>"
					+ "  <td style='width:50%' class='encabezado' colspan='4'><b>5. CODIGOS OBRAS DE ARTE</b></td>"
					+ "  <td style='width:16%' class='encabezado' colspan='2'><b>6. ESTADO (E)</b></td>"
					+ "  <td style='width:34%' class='encabezado' colspan='4'><b>7. PATOLOGIAS OBRA DE ARTE (P)</b></td>"
					+ "   </tr>"
					+ "   <tr>"
					+ "  <td style='width:25%' class='encabezado' colspan='2'><b>Obras de arte</b></td>"
					+ "  <td style='width:25%' class='encabezado' colspan='2'><b>Materiales (M)</b></td>"
					+ "  <td style='width:3%' align='center'>1</td>"
					+ "  <td style='width:13%'>Malo</td>"
					+ "  <td style='width:3%' align='center'>1</td>"
					+ "  <td style='width:14%'>Grietas</td>"
					+ "  <td style='width:3%' align='center'>8</td>"
					+ "  <td style='width:14%'>Volcamiento</td>"
					+ "</tr>"
					+ "  <tr>"
					+ "  <td style='width:3%' align='center'>1</td>"
					+ "  <td style='width:22%'>Alcantarilla</td>"
					+ "  <td style='width:3%' align='center'>1</td>"
					+ "  <td style='width:22%'>Concreto simple</td>"
					+ "  <td style='width:3%' align='center'>2</td>"
					+ "  <td style='width:13%'>Regular</td>"
					+ "  <td style='width:3%' align='center'>2</td>"
					+ "  <td style='width:14%'>Fisuras</td>"
					+ "  <td style='width:3%' align='center'>9</td>"
					+ "  <td style='width:14%'>Desnivelado</td>"
					+ "</tr>"
					+ "  <tr>"
					+ "  <td style='width:3%' align='center'>2</td>"
					+ "  <td style='width:22%'>Pontón</td>"
					+ "  <td style='width:3%' align='center'>2</td>"
					+ "  <td style='width:22%'>Concreto reforzado</td>"
					+ "  <td style='width:3%' align='center'>3</td>"
					+ "  <td style='width:13%'>Bueno</td>"
					+ "  <td style='width:3%' align='center'>3</td>"
					+ "  <td style='width:14%'>Desprendimientos</td>"
					+ "  <td style='width:3%' align='center'>10</td>"
					+ "  <td style='width:14%'>Desplomado</td>"
					+ "</tr>"
					+ "  <tr>"
					+ "  <td style='width:3%' align='center'>3</td>"
					+ "  <td style='width:22%'>Puente</td>"
					+ "  <td style='width:3%' align='center'>3</td>"
					+ "  <td style='width:22%'>Tubería concreto ref.</td>"
					+ "  <td style='width:16%' class='encabezado' colspan='2'><b>Orientación</b></td>"
					+ "  <td style='width:3%' align='center'>4</td>"
					+ "  <td style='width:14%'>Abombamientos</td>"
					+ "  <td style='width:3%' align='center'>11</td>"
					+ "  <td style='width:14%'>Hundimientos</td>"
					+ "</tr>"
					+ "  <tr>"
					+ "  <td style='width:3%' align='center'>4</td>"
					+ "  <td style='width:22%'>Box Coulvert</td>"
					+ "  <td style='width:3%' align='center'>4</td>"
					+ "  <td style='width:22%'>Tubería Concreto simple</td>"
					+ "  <td style='width:3%' align='center'>L</td>"
					+ "  <td style='width:13%'>Longitudinal</td>"
					+ "  <td style='width:3%' align='center'>5</td>"
					+ "  <td style='width:14%'>Carbonatación</td>"
					+ "  <td style='width:3%' align='center'>12</td>"
					+ "  <td style='width:14%'>Oxidación</td>"
					+ "</tr>"
					+ "  <tr>"
					+ "  <td style='width:3%' align='center'>5</td>"
					+ "  <td style='width:22%'>Quiebrapatas</td>"
					+ "  <td style='width:3%' align='center'>5</td>"
					+ "  <td style='width:22%'>Tubería de Acero</td>"
					+ "  <td style='width:3%' align='center'>A</td>"
					+ "  <td style='width:13%'>Aleatoria</td>"
					+ "  <td style='width:3%' align='center'>6</td>"
					+ "  <td style='width:14%'>Galvanoplastia</td>"
					+ "  <td style='width:3%' align='center'>13</td>"
					+ "  <td style='width:14%'>Otra</td>"
					+ "</tr>"
					+ "  <tr>"
					+ "  <td style='width:3%' align='center'>6</td>"
					+ "  <td style='width:22%'>Batea-Baden</td>"
					+ "  <td style='width:3%' align='center'>6</td>"
					+ "  <td style='width:22%'>Platina de Acero</td>"
					+ "  <td style='width:3%' align='center'>T</td>"
					+ "  <td style='width:13%'>Transversal</td>"
					+ "  <td style='width:3%' align='center'>7</td>"
					+ "  <td style='width:14%'>Desgaste</td>"
					+ "  <td style='width:17%' colspan='2'></td>"
					+ "   </tr>"
					+ "  </tbody>"
					+ "</table>"
					+ "<table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;' colspan='34'>"
					+ " <tr>"
					+ "  <td class='encabezado' colspan='34'><b>8. INVENTARIO DE OBRAS DE ARTE</b></td>"
					+ " </tr>"					
				    + "</table>"
					+ "<table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;' colspan='34' class='titulosCeldas'>"					
					+ " <tr>"
					+ "   <td style='width:2%' rowspan='4'><b>N</b></td>"
					+ "   <td style='width:5%' rowspan='4'><b>Cod</b></td>"
					+ "   <td style='width:5%' rowspan='4'><b>Abscisa</b></td>"
					+ "   <td style='width:22%' colspan='10' align='center'><b>Estribos / Cabezales / Columnas /Pilas/ Pantallas</b></td>"
					+ "   <td style='width:22%' colspan='10' align='center'><b>Vigas Inferiores / Aéreas / Guarda ruedas</b></td>"
					+ "   <td style='width:22%' colspan='10' align='center'><b>Placas (inferiores/superiores)</b></td>"
					+ "   <td style='width:22%' rowspan='4' align='center'><b>Observaciones</b></td>"
					+ "    </tr>"
					+ "  <tr>"
					+ "   <td style='width:6%' rowspan='2' colspan='3' align='center'><b>Código</b></td>"
					+ "   <td style='width:14%' colspan='7' align='center'><b>Magnitudes patología (m)</b></td>"
					+ "   <td style='width:6%' rowspan='2' colspan='3' align='center'><b>Código</b></td>"
					+ "   <td style='width:14%' colspan='7' align='center'><b>Magnitudes patología (m)</b></td>"
					+ "   <td style='width:6%' rowspan='2' colspan='3' align='center'><b>Código</b></td>"
					+ "   <td style='width:14%' colspan='7' align='center'><b>Magnitudes patología (m)</b></td>"
					+ "    </tr>"
					+ "   <tr>"
					+ "   <td style='width:4%' colspan='2' align='center'><b>Longitud</b></td>"
					+ "   <td style='width:4%' colspan='2' align='center'><b>Ancho</b></td>"
					+ "   <td style='width:6%' colspan='3' align='center'><b>Orient</b></td>"
					+ "   <td style='width:4%' colspan='2' align='center'><b>Longitud</b></td>"
					+ "   <td style='width:4%' colspan='2' align='center'><b>Ancho</b></td>"
					+ "   <td style='width:6%' colspan='3' align='center'><b>Orient</b></td>"
					+ "   <td style='width:4%' colspan='2' align='center'><b>Longitud</b></td>"
					+ "   <td style='width:4%' colspan='2' align='center'><b>Ancho</b></td>"
					+ "   <td style='width:6%' colspan='3' align='center'><b>Orient</b></td>"
					+ "    </tr>"
					+ "   <tr>"
					+ "  <td style='width:2%'><b>M</b></td>"
					+ "   <td style='width:2%'><b>E</b></td>"
					+ "   <td style='width:2%'><b>P</b></td>"
					+ "   <td style='width:2%'><b>Menor</b></td>"
					+ "   <td style='width:2%'><b>Mayor</b></td>"
					+ "   <td style='width:2%'><b>Menor</b></td>"
					+ "   <td style='width:2%'><b>Mayor</b></td>"
					+ "   <td style='width:2%'><b>T</b></td>"
					+ "   <td style='width:2%'><b>L</b></td>"
					+ "   <td style='width:2%'><b>A</b></td>"
					+ "  <td style='width:2%'><b>M</b></td>"
					+ "   <td style='width:2%'><b>E</b></td>"
					+ "   <td style='width:2%'><b>P</b></td>"
					+ "   <td style='width:2%'><b>Menor</b></td>"
					+ "   <td style='width:2%'><b>Mayor</b></td>"
					+ "   <td style='width:2%'><b>Menor</b></td>"
					+ "   <td style='width:2%'><b>Mayor</b></td>"
					+ "   <td style='width:2%'><b>T</b></td>"
					+ "   <td style='width:2%'><b>L</b></td>"
					+ "   <td style='width:2%'><b>A</b></td>"
					+ "  <td style='width:2%'><b>M</b></td>"
					+ "   <td style='width:2%'><b>E</b></td>"
					+ "   <td style='width:2%'><b>P</b></td>"
					+ "   <td style='width:2%'><b>Menor</b></td>"
					+ "   <td style='width:2%'><b>Mayor</b></td>"
					+ "   <td style='width:2%'><b>Menor</b></td>"
					+ "   <td style='width:2%'><b>Mayor</b></td>"
					+ "   <td style='width:2%'><b>T</b></td>"
					+ "   <td style='width:2%'><b>L</b></td>"
					+ "   <td style='width:2%'><b>A</b></td>"
					+ "</tr>"
					+ obrasRowsHtml
					+ "<p style='page-break-after: always;'>"   
					

					+ " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
                    + " <tbody>"
                    + " <tr><td class='encabezado2' colspan='4'>Pagina "+ currentPage +" de "+$("#pagDe").val()+"&nbsp&nbsp</td></tr>"
                    + "  <tr>"
                    + "  <td colspan='4'>"
                    + "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                    + "    <tbody>"
                    + "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
                    + "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA POST REGISTRO DE EVALUACIÓN VIAL</td>"
					+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
                    + "   </tr>"
					+ "   <tr>"
					+ "    <td colspan='4'>"
					+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
					+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-09</td>"					
					+ "	    <td  style='font-size:10px;text-align:right;padding-right:5px'>Versi&oacute;n 8, Octubre de 2018</td></tr></table>"
                    + "  </td></tr><tr>"
                    + "  <td style='width: 60%'>  "+ window.localStorage.getItem('programa_sismico') +" </td>"
                    + "  <td style='width: 10%'>OPERADORA:</td>"
                    + "  <td>  "+  window.localStorage.getItem('operadora') +"  </td>"
                    + "   </tr>    "
+ "    </tbody>"
								+ "</table>"
								+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
								+ " <tbody>"
								+ "  <tr>"
								+ "  <td >Fecha:</td>"
								+ "  <td > "+  ($("#fecha").val()) +"</td>"
								+ "  <td >Acta Nº.</td>"
								+ "  <td >  POST-AV-" + $("#customActa").val() +" </td>"
								
								+ "  <td >Via</td>"
								+ "  <td > " + $("#nvia").val() +" </td>"
								

								+ "   </tr>    "
								+ "  </tbody>"
								+ "</table>"            
					
					
					+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
					+ "<tbody>"
					+ "<tr>"
					+ "  <td style='width:10%' class='encabezado' colspan='2'><b>9. CLASIFICACIÓN</b></td>"
					+ "  <td style='width:40%' class='encabezado' colspan='4'><b>10. ESTRUCTURA DE LA VIA</b></td>"
					+ "  <td style='width:40%' class='encabezado' colspan='4'><b>11. CODIGOS PATOLOGÍA (P)</b></td>"
					+ "  <td style='width:10%' class='encabezado' colspan='2'><b>12. ESTADO (E)</b></td>"
					+ "</tr>"
					+ "<tr>"
					+ "  <td style='width:7%'>1. Orden</td>"
					+ "  <td style='width:3%'>" + ($("#orden_1").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Sin pavimento</td>"
					+ "  <td style='width:3%'>" + ($("#sin_pavimento").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Adoquín</td>"
					+ "  <td style='width:3%'>" + ($("#adoquin").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Fisuras</td>"
					+ "  <td style='width:3%' align='center'>1</td>"
					+ "  <td style='width:17%'>Pérdida de la banca</td>"
					+ "  <td style='width:3%' align='center'>8</td>"
					+ "  <td style='width:3%' align='center'>1</td>"
					+ "  <td style='width:7%'>Malo</td>"
					+ "</tr>"
					+ "<tr>"
					+ "  <td style='width:7%'>2. Orden</td>"
					+ "  <td style='width:3%'>" + ($("#orden_2").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Con afirmado</td>"
					+ "  <td style='width:3%'>" + ($("#con_afirmado").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Triturado</td>"
					+ "  <td style='width:3%'>" + ($("#triturado").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Grietas</td>"
					+ "  <td style='width:3%' align='center'>2</td>"
					+ "  <td style='width:17%'>Cárcavas</td>"
					+ "  <td style='width:3%' align='center'>9</td>"
					+ "  <td style='width:3%' align='center'>2</td>"
					+ "  <td style='width:7%'>Regular</td>"
					+ "</tr>"
					+ "<tr>"
					+ "  <td style='width:7%'>3. Orden</td>"
					+ "  <td style='width:3%'>" + ($("#orden_3").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Sin afirmado</td>"
					+ "  <td style='width:3%'>" + ($("#sin_afirmado").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Empedrado</td>"
					+ "  <td style='width:3%'>" + ($("#empedrado").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Baches</td>"
					+ "  <td style='width:3%' align='center'>3</td>"
					+ "  <td style='width:17%'>Pérdida de finos capa de rodadura</td>"
					+ "  <td style='width:3%' align='center'>10</td>"
					+ "  <td style='width:3%' align='center'>3</td>"
					+ "  <td style='width:7%'>Bueno</td>"
					+ "</tr>"
					+ "<tr>"
					+ "  <td style='width:7%'>Veredal</td>"
					+ "  <td style='width:3%'>" + ($("#veredal").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Pav. Flex. Cto. Asfáltico</td>"
					+ "  <td style='width:3%'>" + ($("#pav_flex_cto_asfaltico").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Material de aporte</td>"
					+ "  <td style='width:3%'>" + ($("#material_aporte").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Hundimiento</td>"
					+ "  <td style='width:3%' align='center'>4</td>"
					+ "  <td style='width:17%'>Desprendimiento</td>"
					+ "  <td style='width:3%' align='center'>11</td>"
					+ "  <td style='width:3%' class='encabezado' colspan='2'><b>Orientación</b></td>"
					+ "</tr>"
					+ "<tr>"
					+ "  <td style='width:7%'>Vecinal</td>"
					+ "  <td style='width:3%'>" + ($("#vecinal").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Pav. Flex. Crudo castilla</td>"
					+ "  <td style='width:3%'>" + ($("#pav_flex_crudo").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Crudo de río sin selecc</td>"
					+ "  <td style='width:3%'>" + ($("#crudo_rio").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Cuero de caimán/cocodrilo</td>"
					+ "  <td style='width:3%' align='center'>5</td>"
					+ "  <td style='width:17%'>Socavación Avanzada</td>"
					+ "  <td style='width:3%' align='center'>12</td>"
					+ "  <td style='width:3%' align='center'>L</td>"
					+ "  <td style='width:7%'>Longitudinal</td>"
					+ "</tr>    "
					+ "<tr>"
					+ "  <td style='width:7%'>Privada</td>"
					+ "  <td style='width:3%'>" + ($("#privada").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Tratamiento superficial</td>"
					+ "  <td style='width:3%'>" + ($("#trat_superficial").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Crudo de río selecc.</td>"
					+ "  <td style='width:3%'>" + ($("#crudo_rio_sel").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Pérdida de borde</td>"
					+ "  <td style='width:3%' align='center'>6</td>"
					+ "  <td style='width:17%'>Socavación fuerte</td>"
					+ "  <td style='width:3%' align='center'>13</td>"
					+ "  <td style='width:3%' align='center'>A</td>"
					+ "  <td style='width:7%'>Aleatoria</td>"
					+ "</tr>"
					+ "<tr>"
					+ "  <td style='width:7%'>Comunitaria</td>"
					+ "  <td style='width:3%'>" + ($("#comunitaria").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Pav. rígido Cto. Portland</td>"
					+ "  <td style='width:3%'>" + ($("#pav_rigido").is(':checked') ? "X" : "") + " </td>"
					+ "  <td style='width:17%'>Otros:</td>"
					+ "  <td style='width:3%'> " + ($("#otros").val())+" </td>"
					+ "  <td style='width:17%'>Flujo de asfalto</td>"
					+ "  <td style='width:3%' align='center'>7</td>"
					+ "  <td style='width:17%'>Otro:</td>"
					+ "  <td style='width:3%' align='center'>14</td>"
					+ "  <td style='width:3%' align='center'>T</td>"
					+ "  <td style='width:7%'>Transversal</td>"
					+ "   </tr>"
					+ " </tbody></table>"
					+ "<table colspan='34' style='border: 2px solid black;' cellpadding='0' cellspacing='0' border='1' width='100%'>"
					+ "    <tbody>"
					+ "<tr>"
					+ "  <td class='encabezado' colspan='17'><b>13. INVENTARIO PATOLÓGICO DE LA VIA</b></td>"
					+ "</tr>"
					+ "<tr>"
					+ "   <td style='width:2%' rowspan='2'><b>No.</b></td>"
					+ "   <td style='width:10%' rowspan='2'><b>Abscisa</b></td>"
					+ "   <td style='width:4%' rowspan='2' align='center'><b>P</b></td>"
					+ "   <td style='width:4%' rowspan='2' align='center'><b>E</b></td>"
					+ "   <td style='width:12%' colspan='3' align='center'><b>Ubicación</b></td>"
					+ "   <td style='width:12%' colspan='3' align='center'><b>Orientación</b></td>"
					+ "   <td style='width:8%' colspan='2' align='center'><b>Longitud (m)</b></td>"
					+ "   <td style='width:8%' colspan='2' align='center'><b>Ancho (m)</b></td>"
					+ "   <td style='width:8%' colspan='2' align='center'><b>Profundidad (m)</b></td>"
					+ "   <td style='width:32%' rowspan='2'><b>Observaciones</b></td>"
					+ "</tr>"
					+ "<tr>"
					+ "  <td style='width:4%'><b>Izq.</b></td>"
					+ "  <td style='width:4%'><b>Eje</b></td>"
					+ "  <td style='width:4%'><b>Der.</b></td>"
					+ "  <td style='width:4%'><b>T</b></td>"
					+ "  <td style='width:4%'><b>L</b></td>"
					+ "  <td style='width:4%'><b>A</b></td>"
					+ "  <td style='width:4%'><b>Mayor</b></td>"
					+ "  <td style='width:4%'><b>Menor</b></td>"
					+ "  <td style='width:4%'><b>Mayor</b></td>"
					+ "  <td style='width:4%'><b>Menor</b></td>"
					+ "  <td style='width:4%'><b>Mayor</b></td>"
					+ "  <td style='width:4%'><b>Menor</b></td>"
					+ "</tr>"
					+ patoRowsHtml
					
                    + "<p style='page-break-after: always;'> "   

					+ " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
                    + " <tbody>"
                    + " <tr><td class='encabezado2' colspan='4'>Pagina "+ currentPage2 +" de "+$("#pagDe").val()+"&nbsp&nbsp</td></tr>"
                    + "  <tr>"
                    + "  <td colspan='4'>"
                    + "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                    + "    <tbody>"
                    + "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
                    + "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA POST REGISTRO DE EVALUACIÓN VIAL</td>"
					+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
                    + "   </tr>"
					+ "   <tr>"
					+ "    <td colspan='4'>"
					+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
					+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-09</td>"					
					+ "	    <td  style='font-size:10px;text-align:right;padding-right:5px'>Versi&oacute;n 8, Octubre de 2018</td></tr></table>"
                    + "  </td></tr><tr>"
                    + "  <td style='width: 60%'>  "+ window.localStorage.getItem('programa_sismico') +" </td>"
                    + "  <td style='width: 10%'>OPERADORA:</td>"
                    + "  <td>  "+  window.localStorage.getItem('operadora') +"  </td>"
					
					                       + "  <tr>"
+ "    </tbody>"
								+ "</table>"
								+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
								+ " <tbody>"
								+ "  <tr>"
								+ "  <td >Fecha:</td>"
								+ "  <td > "+  ($("#fecha").val()) +"</td>"
								+ "  <td >Acta Nº.</td>"
								+ "  <td >  POST-AV-" + $("#customActa").val() +" </td>"
								
								+ "  <td >Via</td>"
								+ "  <td > " + $("#nvia").val() +" </td>"
								

								+ "   </tr>    "
								+ "  </tbody>"
								+ "</table>"            

					
					+ "	<table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;'>"
					+ "    <tbody>"
					+ "   <tr>"
					+ "  <td class='encabezado' style='text-align: center;'><b>OBSERVACIONES GENERALES DE LA VIA</b></td>"
					+ "   </tr>"
					+ "   <tr>"
					+ "  <td style='height: 100px;vertical-align: top;padding:5px;text-align: justify'>  " + ($("#concepto_general").val())+" </td>"
					+ "   </tr>"
					+ "    </tbody>"
					+ "</table>"
                                

					+ " <table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;'>"
					+ "  <tbody>"
					+ "   <tr>"                                        
					+ "  <td class='encabezado' colspan='4'><b>FIRMAS DE APROBACIÓN</b></td>"
					+ "   </tr>"
					+ "   <tr>"
					+ " <td width='100%' colspan='4'><p></p><p style='text-align: justify;padding:3px'>Los presentes firman en constancia de la evaluación realizada y las partes se declaran entre si, a paz y salvo por todo concepto y responsabilidad en especial en lo referente a las afectaciones a la vía referenciada y/o construcciones anexas. Para constancia se firma siendo las _________ horas del día ___________ del mes de  ______________ de 201___.</p></td></tr>"
                                                    + "<tr>"
                                    + " <td colspan='4'>AVISO DE PRIVACIDAD PARA RECOLECCIÓN DE DATOS PERSONALES</td> "
                                    + "</tr>"
                                    + "<tr>"
                                    + " <td style='text-align: justify;font-size:11px;' colspan='4'>En mi calidad de titular de información personal, actuando libre y voluntariamente, al diligenciar los datos aquí solicitados, autorizo a PETROSEISMIC SERVICES S.A, ubicado en la Carrera 23 # 102 - 53 de la ciudad de Bogotá, Teléfono: +57 1 743 3650 , Movíl: +57 3114524265. Entiendo que las políticas para el tratamiento de mi información personal (Ley 1581/2012), así como el procedimiento para elevar cualquier solicitud, queja o reclamo al correo electrónico contactol@petroseismicservices.com, para que de forma directa o a través de terceros realice el tratamiento de mi información personal, el cual consiste en recolectar, almacenar, usar, transferir y administrar mis datos personales, para el acta vial.</td> "
                                    + "</tr> "
                                    + "<tr>"
                                    + " <td colspan='4'>El firmante manifiesta haber puesto a disposición del Proyecto, de manera verídica, toda la información existente al respecto.</td> "
                                    + "</tr>"    
  
                
                                        + " <tr>"
                                        + "     <td style='height:60px;vertical-align:bottom;'>____________________________________</td><td style='height:60px;vertical-align:bottom;'>___________________________________</td><td  style='font-size:8px;vertical-align:bottom;text-align:center' rowspan='3'>huella</td>"
					+ " </tr>"
                                        +" <tr>"
                                        + "     <td width='45%'>NOMBRE DEL REPRESENTANTE DE LA COMUNIDAD</td><td  width='45%'>FIRMA DEL REPRESENTANTE DE LA COMUNIDAD</td>"
					+ " </tr>"
                                

                                        +" <tr>"
                                        + "     <td>Teléfono_______________</td><td>C.C #_____________ de _________</td>"
					+ " </tr>"   
                                
                                    + "</table>"
                                     + "<table width='100%'>"
					                                	+ " <tr>"
                                        + "     <td style='height:60px;vertical-align:bottom;'>____________________________________</td><td></td><td style='height:60px;vertical-align:bottom;'>___________________________________</td><td  style='font-size:8px;vertical-align:bottom;text-align:center' rowspan='3'></td>"
					+ " </tr>"
					+" <tr>"
                                        + "     <td>NOMBRE DEL EVALUADOR PETROSEISMIC SERVICES</td><td></td><td colspan='2'>FIRMA DEL EVALUADOR PETROSEISMIC SERVICES</td>"
					+ "</tr>"
                                        +" <tr>"
                                        + "     <td></td><td></td><td colspan='2'>C.C #_____________ de _________</td>"
					+ " </tr>"
									 
									 
                                	+ " <tr>"
                                        + "     <td style='height:60px;vertical-align:bottom;'>____________________________________</td><td></td><td style='height:60px;vertical-align:bottom;'>___________________________________</td><td  style='font-size:8px;vertical-align:bottom;text-align:center' rowspan='3'></td>"
					+ " </tr>"
                                        +" <tr>"
                                        + "     <td>NOMBRE DEL SUPERVISOR HSE DE CAMPO ANH </td><td></td><td>FIRMA DEL SUPERVISOR HSE DE CAMPO ANH 	</td>"
					+ "</tr>"
                                        +" <tr>"
                                        + "     <td>FECHA DE APROBACIÓN________________</td><td></td><td>C.C #_____________ de _________</td>"
					+ " </tr>"   
                                        +" <tr>"
                                        + "     <td style='height:60px;vertical-align:bottom;'>APROBADO POR</td><td></td><td colspan='2' style='height:60px;vertical-align:bottom;'></td>"
					+ " </tr>"
  
                                        +" <tr>"
                                        + "     <td style='height:60px;vertical-align:bottom;'>____________________________________</td><td></td><td colspan='2' style='height:60px;vertical-align:bottom;'>___________________________________</td>"
					+ " </tr>"
                                        +" <tr>"
                                        + "     <td>NOMBRE DEL SUPERVISOR AMBIENTAL ANH</td><td></td><td colspan='2'>FIRMA DEL SUPERVISOR AMBIENTAL ANH</td>"
					+ "</tr>"
                                        +" <tr>"
                                        + "     <td></td><td></td><td colspan='2'>C.C #_____________ de _________</td>"
					+ " </tr>"
                                        +" <tr>"
                                        + "     <td colspan='4' style='height:60px;vertical-align:bottom;'>FECHA DE APROBACIÓN________________</td>"
					+ "</tr>"
                
                                        + " </tbody>"
					+ "</table>"
                                        + "</p>"
  					+ "<p style='page-break-after: always;'> " 


					
													+ " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
								+ " <tbody>"
								+ " <tr><td class='encabezado2' colspan='4'>Pagina "+ currentPage +" de "+$("#pagDe").val()+"&nbsp&nbsp</td></tr>"
								+ "  <tr>"
								+ "  <td colspan='4'>"
								+ "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
								+ "    <tbody>"
								+ "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
								+ "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA POST REGISTRO DE EVALUACIÓN VIAL</td>"
								+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
								+ "   </tr>"
								+ "   <tr>"
								+ "    <td colspan='4'>"
								+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
								+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-09</td>"					
								+ "	    <td  style='font-size:10px;text-align:right;padding-right:5px'>Versi&oacute;n 8, Octubre de 2018</td></tr></table>"
								+ "  </td></tr><tr>"
								+ "  <td style='width: 60%;font-size:14px'>  "+ window.localStorage.getItem('programa_sismico') +" </td>"
								+ "  <td style='width: 10%;font-size:14px'>OPERADORA:</td>"
								+ "  <td style='font-size:14px;'>   "+  window.localStorage.getItem('operadora') +"  </td>"
								+ "   </tr>    "
								+ "    </tbody>"
								+ "</table>"
					
					

					
					+ "     <table width='100%' border='1' cellspacing='0' cellpadding='0'  style='padding-top: 10px;margin-top: 40px'>"
					+ "       <tbody>"
                                	+ "            <tr>"
					+ "              <td class='rotate'><div>POST-AV-"+(padDigits($("#customActa").val(), 3))+"-02</div></td>"
                                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-vial-" + ac +"-"+ 2 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                                        + "              <td  class='rotate'><div>POST-AV-"+(padDigits($("#customActa").val(), 3))+"-01</div></td>"
                                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-vial-" + ac +"-"+ 1 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
					+ "            </tr>"
                                	+ "            <tr>"
					+ "              <td class='rotate'><div>POST-AV-"+(padDigits($("#customActa").val(), 3))+"-04</div></td>"
                                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-vial-" + ac +"-"+ 4 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                                        + "              <td  class='rotate' ><div>POST-AV-"+(padDigits($("#customActa").val(), 3))+"-03</div></td>"
                                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-vial-" + ac +"-"+ 3 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
					+ "            </tr>"
 					+ "         </tbody>"
					+ "       </table></p>"	
                                	+ "     <p style='page-break-after: always;'> "
					+ "       <table width='100%' border='1' cellspacing='0' cellpadding='0'  style='padding-top: 10px;margin-top: 40px'>"
					+ "       <tbody>"
                                	+ "            <tr>"
                                	+ "            <tr>"
					+ "              <td class='rotate' style='height:650px;width:30px;'><div>POST-AV-"+(padDigits($("#customActa").val(), 3))+"-06</div></td>"
                                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-vial-" + ac +"-"+ 6 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                                        + "              <td  class='rotate' style='height:650px;width:30px;'><div>POST-AV-"+(padDigits($("#customActa").val(), 3))+"-05</div></td>"
                                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-vial-" + ac +"-"+ 5 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
					+ "            </tr>"
                                	+ "            <tr>"
					+ "              <td class='rotate' style='height:650px;width:30px;'><div>POST-AV-"+(padDigits($("#customActa").val(), 3))+"-07</div></td>"
                                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-vial-" + ac +"-"+ 7 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                                        + "              <td  class='rotate' style='height:650px;width:30px;'><div>POST-AV-"+(padDigits($("#customActa").val(), 3))+"-08</div></td>"
                                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-vial-" + ac +"-"+ 8 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
					+ "            </tr>"
					+ "         </tbody>"
					+ "       </table></p>"					

					+ "</body></html>",
            documentSize: 'Letter',
            landscape: 'portrait',
            type: 'share',
			fileName: 'post-vial-'+ $("#acta").val()
        }, this.success, this.failure);
}

function capturePhoto(imageNumber) {	
    vialImageNumber = imageNumber;
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, encodingType: Camera.EncodingType.JPEG });
}


function onPhotoDataSuccess(imageData) {
	movePic(imageData);
}

function onFail(message) {
    alert('Failed to load picture because: ' + message);
}

function movePic(file){ 
    window.resolveLocalFileSystemURL(file, resolveOnSuccess, resOnError); 
} 

//Callback function when the file system uri has been resolved
function resolveOnSuccess(entry){ 
    var d = new Date();
    var n = d.getTime();
    //new file name
    var newFileName = 'post-vial-' + ac +'-'+ vialImageNumber + ".jpg";
    i++;
    
    var dir = '/';
    window.localStorage.setItem('post-vial-' + ac +'-'+ vialImageNumber,'');
	

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {
        
    fileSys.root.getDirectory( dir ,
                    {create:false, exclusive: true},
                    function(directory) {
                        entry.copyTo(directory, newFileName,  successMove, resOnError);
                    },
                    resOnError);
                    },
    resOnError);
}

//Callback function when the file has been moved successfully - inserting the complete path
function successMove(entry) {
    //I do my insert with "entry.fullPath" as for the path
	var url = entry.toURL(); // file or remote URL. url can also be dataURL, but giving it a file path is much faster
	var album = 'post-vial-' + ac;
	cordova.plugins.photoLibrary.saveImage(url, album, function (libraryItem) {}, function (err) {});
}

function resOnError(error) {
    alert(JSON.stringify(error));
	
}
                                            
function onSaveImageSuccess() {
    console.log('--------------success');
}
                                            
function onSaveImageError(error) {
    console.log('--------------error: ' + error);
}


function saveSignature(){
	
	    window.canvas2ImagePlugin.saveImageDataToLibrary(
        function(msg){
            alert('firma Guardada');
			$("#singImagePath").val(msg);
        },
        function(err){
            alert(err);
        },
         document.getElementsByTagName("canvas")[0]
    );
	
}

function insertUpdate() {
	
    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});

	var id = $("#acta").val();
	var programa_sismico = $("#programa_sismico").val();
	var operadora = $("#operadora").val();
	var fecha = $("#fecha").val();
	var linea = $("#linea").val();
	var acta = $("#acta").val();
	var permiso = $("#permiso").val();
	var P_DEPTO = $("#P_DEPTO").val();
	var P_MUN = $("#P_MUN").val();
	var vereda = $("#vereda").val();
	var predio = '';
	var propietario = $("#propietario").val();
	var cc_propietario = $("#cc_propietario").val();
	var lugar_cc_propietario = $("#lugar_cc_propietario").val();
	var telefono = $("#telefono").val();
	var abscisa_inicial = $("#abscisa_inicial").val();
	var abscisa_final = $("#abscisa_final").val();
	var desp_ensitu1 = $("#desp_ensitu1").val();
	var desp_ensitu2 = $("#desp_ensitu2").val();
	var fecha = $("#fecha").val();
	var coordenadasi_e = $("#coordenadasi_e").val();
	var coordenadasi_n = $("#coordenadasi_n").val();
	var coordenadasf_e = $("#coordenadasf_e").val();
	var coordenadasf_n = $("#coordenadasf_n").val();
	var ancho_promedio = $("#ancho_promedio").val();
	var otros = $("#otros").val();
	var trafico = $("#trafico").val();
	var fecha_inicio = $("#fecha_inicio").val();
	var usuario = $("#usuario").val();
	var fecha_modificada = $("#fecha_modificada").val();
	var estado = $("#estado").val();
	var concepto_general = $("#concepto_general").val();
	var  plana = $("#plana").is(':checked');	
	var  ondulada = $("#ondulada").is(':checked');	
	var  quebrada = $("#quebrada").is(':checked');	
	var  escarpe = $("#escarpe").is(':checked');	
	var  pendiente1 = $("#pendiente1").is(':checked');	
	var  pendiente2 = $("#pendiente2").is(':checked');	
	var  pendiente3 = $("#pendiente3").is(':checked');	
	var  orden_1 = $("#orden_1").is(':checked');	
	var  orden_2 = $("#orden_2").is(':checked');	
	var  orden_3 = $("#orden_3").is(':checked');	
	var  veredal = $("#veredal").is(':checked');	
	var  vecinal = $("#vecinal").is(':checked');	
	var  privada = $("#privada").is(':checked');	
	var  comunitaria = $("#comunitaria").is(':checked');	
	var  sin_pavimento = $("#sin_pavimento").is(':checked');	
	var  con_afirmado = $("#con_afirmado").is(':checked');	
	var  sin_afirmado = $("#sin_afirmado").is(':checked');	
	var  pav_flex_cto_asfaltico = $("#pav_flex_cto_asfaltico").is(':checked');	
	var  pav_flex_crudo = $("#pav_flex_crudo").is(':checked');	
	var  trat_superficial = $("#trat_superficial").is(':checked');	
	var  pav_rigido = $("#pav_rigido").is(':checked');	
	var  adoquin = $("#adoquin").is(':checked');	
	var  triturado = $("#triturado").is(':checked');	
	var  empedrado = $("#empedrado").is(':checked');	
	var  material_aporte = $("#material_aporte").is(':checked');	
	var  crudo_rio = $("#crudo_rio").is(':checked');	
	var  crudo_rio_sel = $("#crudo_rio_sel").is(':checked');	
    var fechaHoraInicio = window.localStorage.getItem("fechaHoraIni");
    var usuario = window.localStorage.getItem("current_user");
    var estado = '1';
    
    var repcomu = $("#repcomu").val();
    var dia = $("#dia").val();
    var mes = $("#mes").val();
    var ann = $("#ann").val();
    var longg = $("#longg").val();
    var access = $("#access").val();
    var conduce = $("#conduce").val();
    var mung = $("#mung").val();
    var topog = $("#topog").val();
    var estructura = $("#estructura").val();
    var geometria = $("#geometria").val();
    var parrafo_general = $("#parrafo_general").val();
	
	var  postVialParrafo  = $("#postVialParrafo").val();
	
	var via = $("#nvia").val();
	
	
	jQuery.fn.pop = [].pop;
    jQuery.fn.shift = [].shift;
	
	var $TABLE = $('#tableObras');
	
	var headers = [];
	var data = [];
	   
	var $rows = $TABLE.find('tr:not(:hidden)');
		
	//headers
	$($rows.shift()).find('th:not(:empty)').each(function() {
		headers.push($(this).attr('id') );
	});
		
		$rows.each(function() {
			
            var $td = $(this).find('td');
            var h = {};
			
			headers.forEach(function(header, i) {
				var elemen = $td.eq(i)[0].children[0];
				if(elemen){
					if( elemen.tagName === 'SELECT'  ){
						h[header] = elemen.value;
					} else {
						h[header] = elemen.checked;		
					}
				} else {
					h[header] = $td.eq(i).text();
				}

            });

			data.push(h);

        });
		

	var arteData = JSON.stringify(data);
	console.log(arteData);
	
	
	
	$TABLE = $('#tablePatologias');
	
	headers = [];
	data = [];
	   
	$rows = $TABLE.find('tr:not(:hidden)');
		
	//headers
	$($rows.shift()).find('th:not(:empty)').each(function() {
		headers.push($(this).attr('id') );
	});
		
		$rows.each(function() {
			
            var $td = $(this).find('td');
            var h = {};
			
			headers.forEach(function(header, i) {
				var elemen = $td.eq(i)[0].children[0];
				if(elemen){
					if( elemen.tagName === 'SELECT'  ){
						h[header] = elemen.value;
					} else {
						h[header] = elemen.checked;		
					}
				} else {
					h[header] = $td.eq(i).text();
				}

            });

			data.push(h);

        });
		

	var patoData = JSON.stringify(data);
	console.log(patoData);
	
	myDB.transaction(function(transaction) {
       
            transaction.executeSql("DELETE FROM post_patologia_p where id_acta ="+id);
            transaction.executeSql("DELETE FROM post_obra_arte_p where id_acta ="+id);

        });
	

	$.each(JSON.parse(arteData), function(i, item) {
		
		var artQuery = "INSERT INTO post_obra_arte_p ("
               	+ "id_acta,"
				+ "cod_obra_arte,"
				+ "abscisa,"
				+ "estribos_col_m,"
				+ "estribos_col_e,"
				+ "estribos_col_p,"
				+ "estribos_col_long_mayor,"
				+ "estribos_col_long_menor,"
				+ "estribos_col_ancho_mayor,"
				+ "estribos_col_ancho_menor,"
				+ "estribos_t,"
				+ "estribos_l,"
				+ "estribos_a,"
				+ "vigas_col_m,"
				+ "vigas_col_e,"
				+ "vigas_col_p,"
				+ "vigas_col_long_mayor,"
				+ "vigas_col_long_menor,"
				+ "vigas_col_ancho_mayor,"
				+ "vigas_col_ancho_menor,"
				+ "vigas_t,"
				+ "vigas_l,"
				+ "vigas_a,"
				+ "placas_col_m,"
				+ "placas_col_e,"
				+ "placas_col_p,"
				+ "placas_col_long_mayor,"
				+ "placas_col_long_menor,"
				+ "placas_col_ancho_mayor,"
				+ "placas_col_ancho_menor,"
				+ "placas_t,"
				+ "placas_l,"
				+ "placas_a,"
				+ "observaciones_o ) VALUES ("
				+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
				+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
				+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
				+ "?, ?, ?, ? "					
				+ ");";
				
		//alert(artQuery);
		console.log(artQuery);
				
		myDB.transaction(function(transaction) {

		transaction.executeSql(artQuery, [
				id,
				item.cod_obra_arte,
				item.abscisa,
				item.estribos_col_m,
				item.estribos_col_e,
				item.estribos_col_p,
				item.estribos_col_long_mayor,
				item.estribos_col_long_menor,
				item.estribos_col_ancho_mayor,
				item.estribos_col_ancho_menor,
				item.estribos_t,
				item.estribos_l,
				item.estribos_a,
				item.vigas_col_m,
				item.vigas_col_e,
				item.vigas_col_p,
				item.vigas_col_long_mayor,
				item.vigas_col_long_menor,
				item.vigas_col_ancho_mayor,
				item.vigas_col_ancho_menor,
				item.vigas_t,
				item.vigas_l,
				item.vigas_a,
				item.placas_col_m,
				item.placas_col_e,
				item.placas_col_p,
				item.placas_col_long_mayor,
				item.placas_col_long_menor,
				item.placas_col_ancho_mayor,
				item.placas_col_ancho_menor,
				item.placas_t,
				item.placas_l,
				item.placas_a,
				item.observaciones_o
            ]
            , function(tx, result) {
                //alert('obras de arte guardadas');
            },
			function(tx, err) {
				alert(err.message);
			});
        });
				
	
		console.log(item.cod_obra_arte);
		
		
	});
	
	
	$.each(JSON.parse(patoData), function(i, item) {
		
		var patoQuery = "INSERT INTO post_patologia_p ("
				+ "id_acta,"
				+ "abscisa,"
				+ "valor_p,"
				+ "valor_e,"
				+ "izq,"
				+ "eje,"
				+ "der,"
				+ "longi,"
				+ "aleatoria,"
				+ "transver,"
				+ "long_mayor,"
				+ "long_menor,"
				+ "ancho_mayor,"
				+ "ancho_menor,"
				+ "prof_mayor,"
				+ "prof_menor,"
				+ "observaciones_p ) VALUES ("
				+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
				+ "?, ?, ?, ?, ?, ?, ? "		
				+ ");";
				
		//alert(patoQuery);
		console.log(patoQuery);
				
		myDB.transaction(function(transaction) {

			transaction.executeSql(patoQuery, [
					id,
					item.abscisa,
					item.valor_p,
					item.valor_e,
					item.izq,
					item.eje,
					item.der,
					item.longi,
					item.aleatoria,
					item.transver,
					item.long_mayor,
					item.long_menor,
					item.ancho_mayor,
					item.ancho_menor,
					item.prof_mayor,
					item.prof_menor,
					item.observaciones_p
				]
				, function(tx, result) {
					//alert('patologias guardadas');
				},
				function(tx, err) {
					alert(err.message);
				});
        });
				

		
	});
		

    if (window.localStorage.getItem("editar") === 'true') {

        var executeQuery = "UPDATE post_vial_p SET "				
				+ "	permiso=?,"
				+ "	P_DEPTO=?,"
				+ "	P_MUN=?,"
				+ "	vereda=?,"
				+ "	predio=?,"
				+ "	propietario=?,"
				+ "	cc_propietario=?,"
				+ "	lugar_cc_propietario=?,"
				+ "	telefono=?,"
				+ "	abscisa_inicial=?,"
				+ "	abscisa_final=?,"
				+ "	desp_ensitu1=?,"
				+ "	desp_ensitu2=?,"
				+ "	fecha=?,"
				+ "	coordenadasi_e=?,"
				+ "	coordenadasi_n=?,"
				+ "	coordenadasf_e=?,"
				+ "	coordenadasf_n=?,"
				+ "	ancho_promedio=?,"
				+ "	otros=?,"
				+ "	trafico=?,"
				+ "	fecha_inicio=?,"
				+ "	usuario=?,"
				+ "	fecha_modificada=?,"
				+ "	estado=?,"
				+ "	concepto_general=?,"
				+ "	plana=?,"
				+ "	ondulada=?,"
				+ "	quebrada=?,"
				+ "	escarpe=?,"
				+ "	pendiente1=?,"
				+ "	pendiente2=?,"
				+ "	pendiente3=?,"
				+ "	orden_1=?,"
				+ "	orden_2=?,"
				+ "	orden_3=?,"
				+ "	veredal=?,"
				+ "	vecinal=?,"
				+ "	privada=?,"
				+ "	comunitaria=?,"
				+ "	sin_pavimento=?,"
				+ "	con_afirmado=?,"
				+ "	sin_afirmado=?,"
				+ "	pav_flex_cto_asfaltico=?,"
				+ "	pav_flex_crudo=?,"
				+ "	trat_superficial=?,"
				+ "	pav_rigido=?,"
				+ "	adoquin=?,"
				+ "	triturado=?,"
				+ "	empedrado=?,"
				+ "	material_aporte=?,"
				+ "	crudo_rio=?,"
				+ "	crudo_rio_sel=?,"				
				+ "	repcomu=?,"
				+ "	dia=?,"
				+ "	mes=?,"
				+ "	ann=?,"
				+ "	longg=?,"
				+ "	access=?,"
				+ "	conduce=?,"
				+ "	mung=?,"
				+ "	topog=?,"
				+ "	estructura=?,"
				+ "	geometria=?,"
				+ "	via=?,"
                + "	parrafo_general=?,"  
				+ "post_cparrafo=?" 		
                + " WHERE id =" + id;

        myDB.transaction(function(transaction) {

            transaction.executeSql(executeQuery, [
				permiso,
				P_DEPTO,
				P_MUN,
				vereda,
				predio,
				propietario,
				cc_propietario,
				lugar_cc_propietario,
				telefono,
				abscisa_inicial,
				abscisa_final,
				desp_ensitu1,
				desp_ensitu2,
				fecha,
				coordenadasi_e,
				coordenadasi_n,
				coordenadasf_e,
				coordenadasf_n,
				ancho_promedio,
				otros,
				trafico,
				fecha_inicio,
				usuario,
				fecha_modificada,
				estado,
				concepto_general,
				plana,
				ondulada,
				quebrada,
				escarpe,
				pendiente1,
				pendiente2,
				pendiente3,
				orden_1,
				orden_2,
				orden_3,
				veredal,
				vecinal,
				privada,
				comunitaria,
				sin_pavimento,
				con_afirmado,
				sin_afirmado,
				pav_flex_cto_asfaltico,
				pav_flex_crudo,
				trat_superficial,
				pav_rigido,
				adoquin,
				triturado,
				empedrado,
				material_aporte,
				crudo_rio,
				crudo_rio_sel,
				repcomu,
				dia,
				mes,
				ann,
				longg,
				access,
				conduce,
				mung,
				topog,
				estructura,
				geometria,
				via,
                                parrafo_general,
								postVialParrafo
            ]
            , function(tx, result) {
                alert('Se actualizo el acta');
            },
			function(tx, err) {
				alert(err.message);
			});
        });


    } else {

		
        myDB.transaction(function(transaction) {
            var executeQuery = "INSERT INTO post_vial_p ("
                    + "	id,"
					+ "	programa_sismico,"
					+ "	operadora,"
					+ "	fecha,"
					+ "	linea,"
					+ "	acta,"
					+ "	permiso,"
					+ "	P_DEPTO,"
					+ "	P_MUN,"
					+ "	vereda,"
					+ "	predio,"
					+ "	propietario,"
					+ "	cc_propietario,"
					+ "	lugar_cc_propietario,"
					+ "	telefono,"
					+ "	abscisa_inicial,"
					+ "	abscisa_final,"
					+ "	desp_ensitu1,"
					+ "	desp_ensitu2,"
					+ "	fecha,"
					+ "	coordenadasi_e,"
					+ "	coordenadasi_n,"
					+ "	coordenadasf_e,"
					+ "	coordenadasf_n,"
					+ "	ancho_promedio,"
					+ "	otros,"
					+ "	trafico,"
					+ "	fecha_inicio,"
					+ "	usuario,"
					+ "	fecha_modificada,"
					+ "	estado,"
					+ "	concepto_general,"
					+ "	plana,"
					+ "	ondulada,"
					+ "	quebrada,"
					+ "	escarpe,"
					+ "	pendiente1,"
					+ "	pendiente2,"
					+ "	pendiente3,"
					+ "	orden_1,"
					+ "	orden_2,"
					+ "	orden_3,"
					+ "	veredal,"
					+ "	vecinal,"
					+ "	privada,"
					+ "	comunitaria,"
					+ "	sin_pavimento,"
					+ "	con_afirmado,"
					+ "	sin_afirmado,"
					+ "	pav_flex_cto_asfaltico,"
					+ "	pav_flex_crudo,"
					+ "	trat_superficial,"
					+ "	pav_rigido,"
					+ "	adoquin,"
					+ "	triturado,"
					+ "	empedrado,"
					+ "	material_aporte,"
					+ "	crudo_rio,"
					+ "	crudo_rio_sel,"
					+ "fecha_inicio,"
                    + "usuario,"
                    + "estado, "                    
                    + "repcomu, "
                    + "dia, "
                    + "mes, "
                    + "ann, "
                    + "longg, "
                    + "access, "
                    + "conduce, "
                    + "mung, "
                    + "topog, "
                    + "estructura, "
                    + "geometria,"
					+ "via,"
                    + "parrafo_general,"   
					+ "post_cparrafo"
                    + ") VALUES ("
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "		
					+ "?, ? ,? ,? ,? ,? ,? ,? ,? ,?, "	
					+ "?, ? ,?, ?, ? , ? "
					+ ");";
					
			//alert(executeQuery);	
			console.log(executeQuery);				

            transaction.executeSql(executeQuery, [
				id,
				programa_sismico,
				operadora,
				fecha,
				linea,
				acta,
				permiso,
				P_DEPTO,
				P_MUN,
				vereda,
				predio,
				propietario,
				cc_propietario,
				lugar_cc_propietario,
				telefono,
				abscisa_inicial,
				abscisa_final,
				desp_ensitu1,
				desp_ensitu2,
				fecha,
				coordenadasi_e,
				coordenadasi_n,
				coordenadasf_e,
				coordenadasf_n,
				ancho_promedio,
				otros,
				trafico,
				fecha_inicio,
				usuario,
				fecha_modificada,
				estado,
				concepto_general,
				plana,
				ondulada,
				quebrada,
				escarpe,
				pendiente1,
				pendiente2,
				pendiente3,
				orden_1,
				orden_2,
				orden_3,
				veredal,
				vecinal,
				privada,
				comunitaria,
				sin_pavimento,
				con_afirmado,
				sin_afirmado,
				pav_flex_cto_asfaltico,
				pav_flex_crudo,
				trat_superficial,
				pav_rigido,
				adoquin,
				triturado,
				empedrado,
				material_aporte,
				crudo_rio,
				crudo_rio_sel,
				fechaHoraInicio,
                usuario,
                estado,                
                repcomu,
                dia,
                mes,
                ann,
                longg,
                access,
                conduce,
                mung,
                topog,
                estructura,
                geometria,
				via,
                parrafo_general,
				postVialParrafo
                
            ]
            , function(tx, result) {
                alert('Se ha guardado el acta');
            },
			function(tx, err) {
				alert(err.message);
			});
        });

    }

}


function generarEncabezado() {
	
            var successC = function(status) {
	        alert('Message: ' + status);
	    };
	    var errorC = function(status) {
	        alert('Error: ' + status);
	    };
		
	    window.CacheClear(successC, errorC);

	    var success = function(status) {
	        alert('Se genero PDF ' + status);
	    }

	    var failure = function(status) {
	        alert('Error generando PDF ' + status);
	    }           
            
            var p = 2;
            var pages = $("#pagDe").val();
            var customActa =  $("#customActa").val();
            
            var firstPage = "<table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
                        + " <tbody>"
                         + " <tr><td class='encabezado' colspan='4'>Pagina 1 de "+pages+"&nbsp&nbsp</td></tr>"
                        + "  <tr>"
                        + "  <td colspan='4'>"
                        + "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                        + "    <tbody>"
                        + "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
                        + "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA POST REGISTRO DE EVALUACIÓN VIAL</td><td>FR-QHSE-15<p style='font-size:11px'>V2  23-03-2018</p></td></tr></tbody></table></td>"
                        + "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
						+ "   </tr>"
						
											+ "   <tr>"
					+ "    <td colspan='4'>"
					+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
					+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-09</td>"					
					+ "	    <td  style='font-size:10px;text-align:right;padding-right:5px'>Versi&oacute;n 8, Octubre de 2018</td></tr></table>"
                    + "  </td></tr>"
						
                        + "   <tr>"
						+ "  <td style='width: 60%'>  "+ window.localStorage.getItem('programa_sismico') +" </td>"
						+ "  <td style='width: 10%'>OPERADORA:</td>"
                        + "  <td>  "+  window.localStorage.getItem('operadora') +"  </td>"
                        + "   </tr>    "
                        + "    </tbody>"
                        + "</table>"
                        + "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
                        + " <tbody>"
                        + "  <tr>"
                        + "  <td >Fecha:</td>"
                        + "  <td > "+ ($("#fecha").val()) +"</td>"
                        + "  <td >Acta Nº.</td>"
                        + "  <td >  POST-AV-" + (padDigits(customActa, 3)) +" </td>"
						
											+ "  <td >Via</td>"
                    + "  <td > " + $("#nvia").val() +" </td>"
						
                        + "   </tr>    "
                        + "  </tbody>"
                        + "</table>";
            
            var headersDef = "";
            
            for(;p <= pages; p++){                
                                
                 var headers = "<p style='page-break-after: always;'> "
                        + " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
                    + " <tbody>"
                     + " <tr><td class='encabezado' colspan='4'>Pagina "+p+" de "+pages+"&nbsp&nbsp</td></tr>"
                    + "  <tr>"
                    + "  <td colspan='4'>"
                    + "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                    + "    <tbody>"
                    + "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
                    + "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA POST REGISTRO DE EVALUACIÓN VIAL</td>"
					+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
                    + "   </tr>"
					+ "   <tr>"
					+ "    <td colspan='4'>"
					+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
					+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-09</td>"					
					+ "	    <td  style='font-size:10px;text-align:right;padding-right:5px'>Versi&oacute;n 8, Octubre de 2018</td></tr></table>"
                    + "  </td></tr><tr>"
                    + "  <td style='width: 60%'>  "+ window.localStorage.getItem('programa_sismico') +" </td>"
                    + "  <td style='width: 10%'>OPERADORA:</td>"
                    + "  <td>  "+  window.localStorage.getItem('operadora') +"  </td>"
                    + "   </tr>    "
+ "    </tbody>"
								+ "</table>"
								+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
								+ " <tbody>"
								+ "  <tr>"
								+ "  <td >Fecha:</td>"
								+ "  <td > "+  ($("#fecha").val()) +"</td>"
								+ "  <td >Acta Nº.</td>"
								+ "  <td >  POST-AV-" + $("#customActa").val() +" </td>"
								
								+ "  <td >Via</td>"
								+ "  <td > " + $("#nvia").val() +" </td>"
								

								+ "   </tr>    "
								+ "  </tbody>"
								+ "</table>"            
                    + "</table>"  
                        + "</p>";
                
                headersDef += headers;
                console.log(headers);
                
            }
            
            
            

	    pdf.htmlToPDF({
            data:"<!DOCTYPE html>"
					+ "<html><head><meta http-equiv='Content-Type' content='text/html; charset=windows-1252'>"
					+ "<title></title>"
					+ "<style type='text/css'>"
					+ "    body {"
					+ "         font: normal 14px Verdana, Arial, sans-serif;"
					+ "    }"
					+ "  .encabezado {"
					+ "    background-color: #dd0806;"
					+ "    color: #FFFFFF;"
					+ "    text-align:center;"
					+ "   	font-size: 11px;"
					+ "   }"
                    + "  .encabezado2 {"
					+ "    background-color: #dd0806;"
					+ "    color: #FFFFFF;"
					+ "    text-align:right;"
                    + "    font-size: 11px;"
					+ "   }"
					+ "   .celda{"
					+ "    border: 1px solid black;"
					+ "   }"
					+ "    table {"
					+ "    border-collapse: collapse;"
					+ "    border-top: none;	"
					+ "   }"
					+ "   td{"
					+ "    padding-left:3px;	"
					+ "   }"
					+ "   .tituloFila{"
					+ "    width: 200px;	"
					+ "   }"
					+ "   .tituloFila2{"
					+ "    width: 150px;	"
					+ "    font-weight: bold;"
					+ "   }"
					+ "   .tituloFila3{"
					+ "     width: 12%;	"
					+ "    }"
					+ "   .titulosCeldas{"
					+ "   	 font-size: 10px;"
					+ "    }"
					+ "    .tag {"
					+ "         text-align:left;"
					+ "         bottom:0;"
					+ "         position:relative;"
					+ "         top: 0px;"
					+ "         background-color: white; "
					+ "         left:0;"
					+ "         width:200px; }"
                        + "@page"  
                        + "{" 
                        + " size: auto;  " 
                        + " margin: 5mm 10mm 5mm 10mm;  "
                        + "}" 
                        + "</style>"
                        + "</head>"
                        + "<body>"
                        //+ firstPage 
                        + headersDef 
                        + "</body>",
	            documentSize: 'Letter',
	            landscape: 'portrait',
	            type: 'share',
				fileName: 'encabezado'+ $("#acta").val()
	        }, this.success, this.failure);	
}


function padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}