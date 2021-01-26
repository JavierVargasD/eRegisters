var i = 1;
var ac= 0;
var hidImageNumber;


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


});


function onDeviceReady() {

    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});
    var query = "SELECT * FROM pre_hidrico_p where id=" + window.localStorage.getItem("actaId");
	
	if( window.localStorage.getItem("post") === 'true' ){
		
		query = "SELECT * FROM post_hidrico_p where id=" + window.localStorage.getItem("actaId");
	}
	
	ac =  window.localStorage.getItem("actaId");

    if (true) {
        myDB.transaction(function(transaction) {
            transaction.executeSql(query, [], function(tx, results) {
                var len = results.rows.length, i;

                for (i = 0; i < len; i++) {
				

					
					$("#acta").val(results.rows.item(i).id);
					$("#permiso").val(results.rows.item(i).permiso);
					$("#P_DEPTO").val(results.rows.item(i).P_DEPTO);
					$("#P_MUN").val(results.rows.item(i).P_MUN);
					$("#vereda").val(results.rows.item(i).vereda);
					$("#predio").val(results.rows.item(i).predio);
					$("#propietario").val(results.rows.item(i).propietario);
					$("#cc_propietario").val(results.rows.item(i).cc_propietario);
					$("#lugar_cc_propietario").val(results.rows.item(i).lugar_cc_propietario);
					$("#telefono").val(results.rows.item(i).telefono);
					$("#origen_coord").val(results.rows.item(i).origen_coord);
					$("#coordenada_e").val(results.rows.item(i).coordenada_e);
					$("#coordenada_n").val(results.rows.item(i).coordenada_n);
					$("#stk").val(results.rows.item(i).stk);
					$("#sp_cercano").val(results.rows.item(i).sp_cercano);
					$("#distancia_sp").val(results.rows.item(i).distancia_sp);
					$("#productivo").prop('checked', JSON.parse(results.rows.item(i).productivo));
					$("#reserva").prop('checked', JSON.parse(results.rows.item(i).reserva));
					$("#abandonado").prop('checked', JSON.parse(results.rows.item(i).abandonado));
					$("#inactivo").prop('checked', JSON.parse(results.rows.item(i).inactivo));
					$("#sellado").prop('checked', JSON.parse(results.rows.item(i).sellado));
					$("#monitoreo").prop('checked', JSON.parse(results.rows.item(i).monitoreo));
					$("#en_campo").prop('checked', JSON.parse(results.rows.item(i).en_campo));
					$("#constructor").prop('checked', JSON.parse(results.rows.item(i).constructor));
					$("#propietario_i").prop('checked', JSON.parse(results.rows.item(i).propietario_i));
					$("#estudios").prop('checked', JSON.parse(results.rows.item(i).estudios));
					$("#reportes").prop('checked', JSON.parse(results.rows.item(i).reportes));
					$("#otros").prop('checked', JSON.parse(results.rows.item(i).otros));					
					$("#jagüey").prop('checked', JSON.parse(results.rows.item(i).jaguey));
					$("#estanque_piscicola").prop('checked', JSON.parse(results.rows.item(i).estanque_piscicola));
					$("#aljibe").prop('checked', JSON.parse(results.rows.item(i).aljibe));
					$("#pozo_profundo").prop('checked', JSON.parse(results.rows.item(i).pozo_profundo));
					$("#nacedero").prop('checked', JSON.parse(results.rows.item(i).nacedero));
					$("#info_nombre").val(results.rows.item(i).info_nombre);
					$("#info_direccion").val(results.rows.item(i).info_direccion);
					$("#info_telefono").val(results.rows.item(i).info_telefono);
					$("#punto_legalizado").prop('checked', JSON.parse(results.rows.item(i).punto_legalizado));
					$("#punto_resolucion").val(results.rows.item(i).punto_resolucion);
					$("#punto_fecha").val(results.rows.item(i).punto_fecha);
					$("#punto_caudal").val(results.rows.item(i).punto_caudal);
					$("#invierno").prop('checked', JSON.parse(results.rows.item(i).invierno));
					$("#verano").prop('checked', JSON.parse(results.rows.item(i).verano));
					$("#comienzo_invierno").prop('checked', JSON.parse(results.rows.item(i).comienzo_invierno));
					$("#comienzo_verano").prop('checked', JSON.parse(results.rows.item(i).comienzo_verano));
					$("#ultima_lluvia").val(results.rows.item(i).ultima_lluvia);
					$("#gps").prop('checked', JSON.parse(results.rows.item(i).gps));
					$("#nivelacion").prop('checked', JSON.parse(results.rows.item(i).nivelacion));
					$("#mapa").prop('checked', JSON.parse(results.rows.item(i).mapa));
					$("#domestico").prop('checked', JSON.parse(results.rows.item(i).domestico));
					$("#comunitario").prop('checked', JSON.parse(results.rows.item(i).comunitario));
					$("#ganadero_sp").val(results.rows.item(i).ganadero_sp);
					$("#agricola_tipo").val(results.rows.item(i).agricola_tipo);
					$("#ganadero_n").val(results.rows.item(i).ganadero_n);
					$("#agricola_ha").val(results.rows.item(i).agricola_ha);
					$("#industrial").prop('checked', JSON.parse(results.rows.item(i).industrial));
					$("#piscicola").prop('checked', JSON.parse(results.rows.item(i).piscicola));
					$("#ninguno").prop('checked', JSON.parse(results.rows.item(i).ninguno));
					$("#agua_otro").val(results.rows.item(i).agua_otro);
                                        $("#sisagua_otro").val(results.rows.item(i).sisagua_otro);
                                        
					$("#cementerio").prop('checked', JSON.parse(results.rows.item(i).cementerio));
					$("#basura_estiercol").prop('checked', JSON.parse(results.rows.item(i).basura_estiercol));
					$("#aguas_estancadas").prop('checked', JSON.parse(results.rows.item(i).aguas_estancadas));
					$("#pozo_abandonado").prop('checked', JSON.parse(results.rows.item(i).pozo_abandonado));
					$("#residuos_solidos").prop('checked', JSON.parse(results.rows.item(i).residuos_solidos));
					$("#residuos_peligrosos").prop('checked', JSON.parse(results.rows.item(i).residuos_peligrosos));
					$("#plantas_sacrificio").prop('checked', JSON.parse(results.rows.item(i).plantas_sacrificio));
					$("#lagunas_oxidacion").prop('checked', JSON.parse(results.rows.item(i).lagunas_oxidacion));
					$("#contamina_otro").val(results.rows.item(i).contamina_otro);
					$("#tipo_suelo").val(results.rows.item(i).tipo_suelo);
					$("#tipo_vegetacion").val(results.rows.item(i).tipo_vegetacion);
					$("#aporte_agua_permanente").prop('checked', JSON.parse(results.rows.item(i).aporte_agua_permanente));
					$("#aporte_agua_intermitente").prop('checked', JSON.parse(results.rows.item(i).aporte_agua_intermitente));
					$("#aporte_agua_lluvias").prop('checked', JSON.parse(results.rows.item(i).aporte_agua_lluvias));
					$("#epoca_disminucion").val(results.rows.item(i).epoca_disminucion);
					$("#espejoa_si").prop('checked', JSON.parse(results.rows.item(i).espejoa_si));
					$("#otro_descp").val(results.rows.item(i).otro_descp);
					$("#espejo_ancho").val(results.rows.item(i).espejo_ancho);
					$("#espejo_largo").val(results.rows.item(i).espejo_largo);
					$("#espejo_profundidad").val(results.rows.item(i).espejo_profundidad);
					$("#espejo_coloracion").val(results.rows.item(i).espejo_coloracion);
					$("#manguera_gravedad").prop('checked', JSON.parse(results.rows.item(i).manguera_gravedad));
					$("#manguera_bombeo").prop('checked', JSON.parse(results.rows.item(i).manguera_bombeo));
					$("#canal_tierra").prop('checked', JSON.parse(results.rows.item(i).canal_tierra));
					$("#canal_cemento").prop('checked', JSON.parse(results.rows.item(i).canal_cemento));
					$("#drenaje_natural").prop('checked', JSON.parse(results.rows.item(i).drenaje_natural));
					$("#subterraneo").prop('checked', JSON.parse(results.rows.item(i).subterraneo));
					$("#agua_lluvias").prop('checked', JSON.parse(results.rows.item(i).agua_lluvias));
					$("#aguas_otro").val(results.rows.item(i).aguas_otro);
					$("#capta_manual").prop('checked', JSON.parse(results.rows.item(i).capta_manual));
					$("#bomba_sumergible").prop('checked', JSON.parse(results.rows.item(i).bomba_sumergible));
					$("#bomba_natural").prop('checked', JSON.parse(results.rows.item(i).bomba_natural));
					$("#electrobomba").prop('checked', JSON.parse(results.rows.item(i).electrobomba));
					$("#moto_bomba").prop('checked', JSON.parse(results.rows.item(i).moto_bomba));
					$("#represa").prop('checked', JSON.parse(results.rows.item(i).represa));
					$("#molino_viento").prop('checked', JSON.parse(results.rows.item(i).molino_viento));
					$("#capta_otro").val(results.rows.item(i).capta_otro);
					$("#bomba_clase").val(results.rows.item(i).bomba_clase);
					$("#bomba_modelo").val(results.rows.item(i).bomba_modelo);
					$("#bomba_potencia").val(results.rows.item(i).bomba_potencia);
					$("#bomba_profundidad").val(results.rows.item(i).bomba_profundidad);
					$("#tuberiad_diametro").val(results.rows.item(i).tuberiad_diametro);
					$("#tuberiad_longitud").val(results.rows.item(i).tuberiad_longitud);
					$("#tuberiad_material").val(results.rows.item(i).tuberiad_material);
					$("#manantial_goteo").prop('checked', JSON.parse(results.rows.item(i).manantial_goteo));
					$("#manantial_filtracion").prop('checked', JSON.parse(results.rows.item(i).manantial_filtracion));
					$("#manantial_otro").val(results.rows.item(i).manantial_otro);
					$("#perma_perenne").prop('checked', JSON.parse(results.rows.item(i).perma_perenne));
					$("#perma_estacional").prop('checked', JSON.parse(results.rows.item(i).perma_estacional));
					$("#perma_intermitente").prop('checked', JSON.parse(results.rows.item(i).perma_intermitente));
					$("#perma_sininfo").prop('checked', JSON.parse(results.rows.item(i).perma_sininfo));
					$("#surgencia_kastico").prop('checked', JSON.parse(results.rows.item(i).surgencia_kastico));
					$("#surgencia_fracturas").prop('checked', JSON.parse(results.rows.item(i).surgencia_fracturas));
					$("#surgencia_contacto").prop('checked', JSON.parse(results.rows.item(i).surgencia_contacto));
					$("#surgencia_otro").val(results.rows.item(i).surgencia_otro);
					$("#pozo_fecha").val(results.rows.item(i).pozo_fecha);
					$("#pozo_profundidad").val(results.rows.item(i).pozo_profundidad);
					$("#pozo_diametro").val(results.rows.item(i).pozo_diametro);
					$("#pozo_diametrop").val(results.rows.item(i).pozo_diametrop);
					$("#pozo_caudal").val(results.rows.item(i).pozo_caudal);
					$("#pozo_proteccion").val(results.rows.item(i).pozo_proteccion);
					$("#material_concreto").prop('checked', JSON.parse(results.rows.item(i).material_concreto));
					$("#material_bloque").prop('checked', JSON.parse(results.rows.item(i).material_bloque));
					$("#material_pvc").prop('checked', JSON.parse(results.rows.item(i).material_pvc));
					$("#material_metalico").prop('checked', JSON.parse(results.rows.item(i).material_metalico));
					$("#material_otro").val(results.rows.item(i).material_otro);
					$("#jaguey_profundidad").val(results.rows.item(i).jaguey_profundidad);
					$("#jaguey_diametro").val(results.rows.item(i).jaguey_diametro);
					$("#dique_si").prop('checked', JSON.parse(results.rows.item(i).dique_si));
					$("#dique_estado").val(results.rows.item(i).dique_estado);
					$("#malla_si").prop('checked', JSON.parse(results.rows.item(i).malla_si));
					$("#jaguey_especies").val(results.rows.item(i).jaguey_especies);
					$("#jaguey_cant_peces").val(results.rows.item(i).jaguey_cant_peces);
					$("#jaguey_cant_max").val(results.rows.item(i).jaguey_cant_max);
					$("#jaguey_tamano").val(results.rows.item(i).jaguey_tamano);
					$("#jaguey_comercial").prop('checked', JSON.parse(results.rows.item(i).jaguey_comercial));
					$("#jaguey_familiar").prop('checked', JSON.parse(results.rows.item(i).jaguey_familiar)); 
					$("#jaguey_zona_proteccion").prop('checked', JSON.parse(results.rows.item(i).jaguey_zona_proteccion));
					$("#ph").val(results.rows.item(i).ph);
					$("#conductividad").val(results.rows.item(i).conductividad);
					$("#temperatura").val(results.rows.item(i).temperatura);
					$("#sdt").val(results.rows.item(i).sdt);
					$("#muestreo_manual").prop('checked', JSON.parse(results.rows.item(i).muestreo_manual));
					$("#muestreo_bombeo").prop('checked', JSON.parse(results.rows.item(i).muestreo_bombeo));
					$("#muestreo_otro").val(results.rows.item(i).muestreo_otro);
					$("#color_incoloro").prop('checked', JSON.parse(results.rows.item(i).color_incoloro));
					$("#color_amarillo").prop('checked', JSON.parse(results.rows.item(i).color_amarillo));
					$("#color_cafe").prop('checked', JSON.parse(results.rows.item(i).color_cafe));
					$("#color_otro").val(results.rows.item(i).color_otro);
					$("#apariencia_clara").prop('checked', JSON.parse(results.rows.item(i).apariencia_clara));
					$("#apariencia_turbia").prop('checked', JSON.parse(results.rows.item(i).apariencia_turbia));
					$("#apariencia_otro").val(results.rows.item(i).apariencia_otro);
					$("#olor_inolora").prop('checked', JSON.parse(results.rows.item(i).olor_inolora));
					$("#olor_fetida").prop('checked', JSON.parse(results.rows.item(i).olor_fetida));
					$("#olor_otro").val(results.rows.item(i).olor_otro);
					$("#topo_depresion").prop('checked', JSON.parse(results.rows.item(i).topo_depresion));
					$("#topo_planicie").prop('checked', JSON.parse(results.rows.item(i).topo_planicie));
					$("#topo_altiplanicie").prop('checked', JSON.parse(results.rows.item(i).topo_altiplanicie));
					$("#topo_piedemonte").prop('checked', JSON.parse(results.rows.item(i).topo_piedemonte));
					$("#topo_ladera").prop('checked', JSON.parse(results.rows.item(i).topo_ladera));
					$("#topo_colina").prop('checked', JSON.parse(results.rows.item(i).topo_colina));
					$("#topo_otro").val(results.rows.item(i).topo_otro);
					$("#geo_abanico_aluvial").prop('checked', JSON.parse(results.rows.item(i).geo_abanico_aluvial));
					$("#geo_cauce_aluvial").prop('checked', JSON.parse(results.rows.item(i).geo_cauce_aluvial));
					$("#geo_llanura_aluvial").prop('checked', JSON.parse(results.rows.item(i).geo_llanura_aluvial));
					$("#geo_terraza").prop('checked', JSON.parse(results.rows.item(i).geo_terraza));
					$("#geo_luna").prop('checked', JSON.parse(results.rows.item(i).geo_luna));
					$("#geo_dolina").prop('checked', JSON.parse(results.rows.item(i).geo_dolina));
					$("#geo_playa").prop('checked', JSON.parse(results.rows.item(i).geo_playa));
					$("#geo_otro").val(results.rows.item(i).geo_otro);
					$("#unidad_geologica1").val(results.rows.item(i).unidad_geologica1);
					$("#litologia1").val(results.rows.item(i).litologia1);
					$("#embalse_diametro").val(results.rows.item(i).embalse_diametro);
					$("#embalse_largo").val(results.rows.item(i).embalse_largo);
					$("#embalse_ancho").val(results.rows.item(i).embalse_ancho);
					$("#embalse_profundidad").val(results.rows.item(i).embalse_profundidad);
					$("#embalse_capacidad").val(results.rows.item(i).embalse_capacidad);
					$("#tanque_diametro").val(results.rows.item(i).tanque_diametro);
					$("#tanque_largo").val(results.rows.item(i).tanque_largo);
					$("#tanque_ancho").val(results.rows.item(i).tanque_ancho);
					$("#tanque_profundidad").val(results.rows.item(i).tanque_profundidad);
					$("#tanque_capacidad").val(results.rows.item(i).tanque_capacidad);
					$("#alberca_diametro").val(results.rows.item(i).alberca_diametro);
					$("#alberca_largo").val(results.rows.item(i).alberca_largo);
					$("#alberca_ancho").val(results.rows.item(i).alberca_ancho);
					$("#alberca_profundidad").val(results.rows.item(i).alberca_profundidad);
					$("#alberca_capacidad").val(results.rows.item(i).alberca_capacidad);
					$("#tuberia_diametro").val(results.rows.item(i).tuberia_diametro);
					$("#tuberia_largo").val(results.rows.item(i).tuberia_largo);
					$("#tuberia_ancho").val(results.rows.item(i).tuberia_ancho);
					$("#tuberia_profundidad").val(results.rows.item(i).tuberia_profundidad);
					$("#tuberia_capacidad").val(results.rows.item(i).tuberia_capacidad);
					$("#otro_nombre").val(results.rows.item(i).otro_nombre);
					$("#otro_diametro").val(results.rows.item(i).otro_diametro);
					$("#otro_largo").val(results.rows.item(i).otro_largo);
					$("#otro_ancho").val(results.rows.item(i).otro_ancho);
					$("#otro_profundidad").val(results.rows.item(i).otro_profundidad);
					$("#otro_capacidad").val(results.rows.item(i).otro_capacidad);
					$("#observa").val(results.rows.item(i).observa);
					$("#rela_repre_prop").val(results.rows.item(i).rela_repre_prop);
					$("#elementos_si").prop('checked', JSON.parse(results.rows.item(i).elementos_si));
					$("#falta_rela").val(results.rows.item(i).falta_rela);
                                        $("#punto_cercado").prop('checked', JSON.parse(results.rows.item(i).punto_cercado));
                                        $("#punto_cemento").prop('checked', JSON.parse(results.rows.item(i).punto_cemento));
                                         $("#punto_adecuada").prop('checked', JSON.parse(results.rows.item(i).punto_adecuada));
										 $("#customActa").val(results.rows.item(i).custom_acta);
                                        

                                        
                                        
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
            transaction.executeSql('SELECT MAX(id) as id FROM pre_hidrico_p', [], function(tx, results) {
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

}

function generatePDF() {
	
	alert('gen');
    
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
            data:
			"<!DOCTYPE html> "
			+ "<html><head><meta http-equiv='Content-Type' content='text/html; charset=windows-1252'> "
			+ "<title></title> "
                        + "        <style type='text/css'>"
                        + "            body {"
                        + "                font: normal 14px Verdana, Arial, sans-serif;"
                        + "            }"
                        + "            .encabezado {"
                        + "                background-color: #dd0806;"
                        + "                color: #FFFFFF;"
                        + "                text-align:center;"
                        + "            }"
                        + "            .encabezado2 {"
                        + "                 background-color: #dd0806;"
                        + "                 color: #FFFFFF;"
                        + "                 text-align:right;"
                        + "                 font-size: 11px;"
                        + "            }"
                        + "            .celda{"
                        + "                border: 1px solid black;"
                        + "            }"
                        + "            table {"
                        + "                border-collapse: collapse;"
                        + "                border-top: none;	"
                        + "            }"
                        + "            td{"
                        + "                padding-left:3px;	"
                        + "            }"
                        + "            .tituloFila{"
                        + "                width: 200px;	"
                        + "            }"
                        + "            .tituloFila2{"
                        + "                width: 150px;	"
                        + "                font-weight: bold;"
                        + "            }"
                        + "            .tituloFila3{"
                        + "                width: 12%;	"
                        + "            }"
                        + "            .tag {"
                        + "              text-align:left;"
                        + "              bottom:0;"
                        + "              position:relative;"
                        + "              top: 0px;"
                        + "              background-color: white; "
                        + "              left:0;"
                        + "              width:200px; }"
                        + "@page"  
                        + "{" 
                        + "    size: auto;  " 
                        + " margin: 5mm 10mm 5mm 10mm;  "
                        + "}"                                 
                        + ".rotate {"
                        + " text-align: center;"
                        + " white-space: nowrap;"
                        + " vertical-align: middle;"
                        + " width: 2em;"
                        + " height:650px;"
                        + "}"
                        + ".rotate div {"
                        + "    -moz-transform: rotate(-270.0deg);"
                        + "     -o-transform: rotate(-270.0deg);"
                        + "     -webkit-transform: rotate(-270.0deg);"
                        + "      margin-left: -10em; "
                        + "      margin-right: -10em;"
                        + "   background-color: #dd0806;"
                        + "   color: #FFFFFF;"
                        + "}"  
                        + "@page :first "  
                        + "{" 
                        + "    size: auto;  " 
                        + " margin: 5mm 10mm 5mm 10mm;  "
                        + "}" 
                        + "#content{" 
                        + "		background-size: 40px 40px;" 
                        + "		background-image: linear-gradient(to right, grey 1px, transparent 1px), linear-gradient(to bottom, grey 1px, transparent 1px);" 
                        + "		height:100%;" 
                        + "         background-size:25px 25px;" 
                        + "        vertical-align:top;text-align: right"
                        + "	}" 
                        + "  </style>"
			+ "</head> "
			+ " <body> "
                
                         + " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
                         + " <tbody>"
                         + " <tr><td class='encabezado2' colspan='4'>Pagina 1 de 2 &nbsp&nbsp</td></tr>"
                         + "  <tr>"
                         + "  <td colspan='4'>"
                         + "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                         + "    <tbody>"
                         + "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
                         + "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA POST REGISTRO DE RECURSO HÍDRICO</td>"
						 + "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
                         + "   </tr>"
							+ "   <tr>"
							+ "    <td colspan='4'>"
							+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
							+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-07</td>"					
							+ "	    <td  style='font-size:10px;text-align:right;padding-right:5px'>Versi&oacute;n 8, Octubre de 2018</td></tr></table>"
							+ "  </td></tr><tr>"
							+ "  <td style='width: 40%'>  "+ window.localStorage.getItem('programa_sismico') +" </td>"
							+ "  <td style='width: 10%'>OPERADORA:</td>"
							+ "  <td>  "+  window.localStorage.getItem('operadora') +"  </td>"
							+ "   </tr>    "
                         + "    </tbody>"
                         + "</table>"
                         + "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
                         + " <tbody>"
                         + "  <tr>"
                         + "  <td style='width: 12.5%'>Fecha:</td>"
                         + "  <td style='width: 12.5%'> "+ getCurrentDate() +"</td>"
                         + "  <td style='width: 12.5%'>Línea</td>"
                         + "  <td style='width: 12.5%'>  " + ($("#linea").val())+" </td>"
                         + "  <td style='width: 12.5%'>Acta Nº.</td>"
                         + "  <td style='width: 12.5%'>  POST-RH-" + $("#customActa").val() +" </td>"
                         + "   </tr>    "
                         + "  </tbody>"
                         + "</table>"
    
                
			+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'> "
			+ "    <tbody> "
			+ "<tr> "
			+ "    <td style='width:30%' class='encabezado' colspan='2'><b>1. LOCALIZACIÓN</b></td> "
			+ "    <td style='width:30%' class='encabezado' colspan='2'><b>2. UBICACIÓN</b></td> "
			+ "    <td style='width:20%' class='encabezado' colspan='2'><b>3. ESTADO DEL PUNTO</b></td> "
			+ "    <td style='width:20%' class='encabezado' colspan='2'><b>4. FUENTE DE INFORMACIÓN</b></td> "
			+ "</tr> "
			+ "<tr> "
			+ "    <td style='width:15%'>Departamento:</td> "
			+ "    <td style='width:15%'>  " + ($("#P_DEPTO option:selected").text())+" </td> "
			+ "    <td style='width:15%'>Origen de coord:</td> "
			+ "    <td style='width:15%'> " + ($("#origen_coord").val())+ " </td> "
			+ "    <td style='width:10%'>Productivo:</td> "
			+ "     <td style='width:10%;text-align:center'> " + ($("#productivo").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:10%'>En campo:</td> "
			+ "     <td style='width:10%;text-align:center'> " + ($("#en_campo").is(':checked') ? "X" : "") + " </td>      "
			+ "</tr> "
			+ "<tr> "
				+ "    <td style='width:15%'>Municipio:</td> "
			+ "    <td style='width:15%'>  " + ($("#P_MUN option:selected").text())+" </td> "
			+ "    <td style='width:15%'>Coordenada E:</td> "
			+ "    <td style='width:15%'>" + ($("#coordenada_e").val())+ "</td> "
			+ "    <td style='width:10%'>Reserva:</td> "
			+ "     <td style='width:10%;text-align:center'> " + ($("#reserva").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:10%'>Constructor:</td> "
			+ "     <td style='width:10%;text-align:center'> " + ($("#constructor").is(':checked') ? "X" : "") + " </td> "
			+ "</tr> "
			+ "<tr> "
			+ "    <td style='width:15%'>Vereda:</td> "
			+ "    <td style='width:15%'>  " + ($("#vereda").val())+ " </td> "
			+ "    <td style='width:15%'>Coordenada N:</td> "
			+ "    <td style='width:15%'>" + ($("#coordenada_n").val())+ "</td> "
			+ "    <td style='width:10%'>Abandonado:</td> "
			+ "     <td style='width:10%;text-align:center'>" + ($("#abandonado").is(':checked') ? "X" : "") + "</td> "
			+ "<td style='width:10%'>Propietario:</td> "
			+ "     <td style='width:10%;text-align:center'> " + ($("#propietario_i").is(':checked') ? "X" : "") + " </td> "
			+ "</tr> "
			+ "<tr> "
			+ "    <td style='width:15%'>Propietario:</td> "
			+ "    <td style='width:15%'>  " + ($("#propietario").val())+ " </td> "
			+ "    <td style='width:15%'>Stk:</td> "
			+ "    <td style='width:15%'>" + ($("#stk").val())+ "</td> "
			+ "    <td style='width:10%'>Inactivo:</td> "
			+ "     <td style='width:10%;text-align:center'>" + ($("#inactivo").is(':checked') ? "X" : "") + "</td> "
			+ "<td style='width:10%'>Estudios:</td> "
			+ "     <td style='width:10%;text-align:center'> " + ($("#estudios").is(':checked') ? "X" : "") + " </td>      "
			+ "</tr> "
			+ "<tr> "
			+ "    <td style='width:15%'>Predio:</td> "
			+ "    <td style='width:15%'>  " + ($("#predio").val())+ " </td> "
			+ "    <td style='width:15%'>Sp. cercano:</td> "
			+ "    <td style='width:15%'>" + ($("#sp_cercano").val())+ "</td> "
			+ "    <td style='width:10%'>Sellado:</td> "
			+ "     <td style='width:10%;text-align:center'>" + ($("#sellado").is(':checked') ? "X" : "") + "</td> "
			+ "<td style='width:10%'>Reportes:</td> "
			+ "     <td style='width:10%;text-align:center'> " + ($("#reportes").is(':checked') ? "X" : "") + " </td>      "
			+ "</tr> "
			+ "<tr> "
			+ "    <td style='width:15%'>Teléfono:</td> "
			+ "    <td style='width:15%'>  " + ($("#telefono").val())+ " </td> "
			+ "    <td style='width:15%'>Distancia Sp:</td> "
			+ "    <td style='width:15%'>" + ($("#distancia_sp").val())+ "</td> "
			+ "    <td style='width:10%'>Monitoreo:</td> "
			+ "     <td style='width:10%;text-align:center'>" + ($("#monitoreo").is(':checked') ? "X" : "") + "</td> "
			+ "<td style='width:10%'>Otros:</td> "
			+ "     <td style='width:10%;text-align:center'> " + ($("#otros").is(':checked') ? "X" : "") + " </td>      "
			+ "</tr> "
			+ "    </tbody> "
			+ "</table> "
			+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'> "
			+ "    <tbody> "
			+ "<tr> "
			+ "    <td class='encabezado'><b>5. ELEMENTO AMBIENTAL "
			+ "       </b></td> "
			+ "</tr>  "
			+ "<tr> "
			+ "    <td align='center'> <b>Jagüey (      " + ($("#jagüey").is(':checked') ? "X" : "") + "),     Estanque Piscícola (" + ($("#estanque_piscicola").is(':checked') ? "X" : "") + ") ,     Aljibe (" + ($("#aljibe").is(':checked') ? "X" : "") + "),   Pozo profundo (" + ($("#pozo_profundo").is(':checked') ? "X" : "") + "),   Nacedero (" + ($("#nacedero").is(':checked') ? "X" : "") + ")</b></td>"
                        +"</tr> "
			+ "    <td style='text-align: justify'><p></p><p>"
			
				+ "Una vez comprobada el acta pre-registro PRE-RH-" + $("#customActa").val() +" del Jagüey (      " + ($("#jagüey").is(':checked') ? "X" : "") + "),     Estanque Piscícola (" 
				+ ($("#estanque_piscicola").is(':checked') ? "X" : "") + ") ,     Aljibe (" + ($("#aljibe").is(':checked') ? "X" : "") + "),   Pozo profundo (" 
				+ ($("#pozo_profundo").is(':checked') ? "X" : "") + "),   Nacedero (" + ($("#nacedero").is(':checked') ? "X" : "") + "), en el predio " 
				+ ($("#predio").val())+", en el municipio de " + ($("#P_MUN option:selected").text()) +" vereda o barrio "+ ($("#vereda").val())+" del departamento del " 
				+ ($("#P_DEPTO option:selected").text())+",se reunieron el funcionario (a) "+window.localStorage.getItem('representante') +" con cédula de ciudadania N° "
				+ window.localStorage.getItem('numdocrepre')+" de "+window.localStorage.getItem('lugarcc')+", quien actúa como evaluador (a)  y el (la) señor(a) "
				+ $("#propietario").val() +", con cédula de  ciudadanía N° "+ $("#cc_propietario").val() + " de " + $("#lugar_cc_propietario").val() + ", en calidad de propietario(a) o representante  del predio, el día "
				+ ($("#dia").val()) +" del mes de " + ($("#mes").val()) +" del año " + ($("#ann").val())+" para verificar que el Jagüey (      " + ($("#jagüey").is(':checked') ? "X" : "") + "),     Estanque Piscícola (" 
				+ ($("#estanque_piscicola").is(':checked') ? "X" : "") + ") ,     Aljibe (" + ($("#aljibe").is(':checked') ? "X" : "") + "),   Pozo profundo ("
				+ ($("#pozo_profundo").is(':checked') ? "X" : "") + "),   Nacedero (" + ($("#nacedero").is(':checked') ? "X" : "") + ") y elementos anexos, " + ($("#enca").val())+" presentan afectación alguna por los trabajos efectuados en desarrollo del programa sísmico "
				+ window.localStorage.getItem('programa_sismico') +"." 

			
			+"</p></td></tr> "
			+ "    </tbody> "
			+ "</table> "
			+ " <table width='100%' border='1' cellspacing='0' cellpadding='0'> "
			+ "    <tbody> "
			+ "<tr> "
			+ "    <td class='encabezado' colspan='11'><b>6. ANOTACIONES GENERALES "
			+ "       </b></td> "
			+ "</tr> "
			+ "<tr> "
			+ "    <td style='width:20%' class='encabezado' colspan='2'><b>7. PERIODO CLIMÁTICO</b></td> "
			+ "    <td style='width:30%' class='encabezado' colspan='2'><b>8. USO DEL AGUA</b></td> "
			+ "    <td style='width:15%' class='encabezado'><b>9. F. CONTAMINACIÓN</b></td> "
			+ "    <td style='width:5%' class='encabezado'><b>DIST</b></td> "
			+ "    <td style='width:30%' class='encabezado' colspan='5'><b>10. DESCRIPCIÓN PUNTUAL</b></td> "
			+ "</tr>  "
			+ "<tr> "
			+ "    <td style='width:10%'>Invierno:</td> "
			+ "    <td style='width:10%;text-align:center'> " + ($("#invierno").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:15%'>Doméstico:</td> "
			+ "    <td style='width:15%;text-align:center'> " + ($("#domestico").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:15%'>Cementerio:</td> "
			+ "     <td style='width:5%;text-align:center'> " + ($("#cementerio").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:15%'>Tipo de Suelo:</td> "
			+ "     <td style='width:15%' colspan='4'> " + ($("#tipo_suelo").val())+ " </td>    "
			+ " </tr> "
			+ "<tr> "
			+ "    <td style='width:10%'>Verano:</td> "
			+ "    <td style='width:10%;text-align:center'> " + ($("#verano").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:15%'>Comunitario:</td> "
			+ "    <td style='width:15%;text-align:center'> " + ($("#comunitario").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:15%'>Basura/Estiércol:</td> "
			+ "     <td style='width:5%;text-align:center'> " + ($("#basura_estiercol").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:15%'>Tipo de vegetación:</td> "
			+ "     <td style='width:15%' colspan='4'> " + ($("#tipo_vegetacion").val())+ " </td>      "
			+ "</tr> "
			+ "<tr> "
			+ "    <td style='width:10%'>Comienzo de Invierno:</td> "
			+ "    <td style='width:10%';text-align:center> " + ($("#comienzo_invierno").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:15%'>Ganadero:</td> "
			+ "    <td style='width:15%'>SP  " + ($("#ganadero_sp").val())+ " &nbsp; &nbsp; &nbsp; #  " + ($("#ganadero_n").val())+ " </td> "
			+ "    <td style='width:15%'>Aguas estancadas:</td> "
			+ "     <td style='width:5%;text-align:center'> " + ($("#aguas_estancadas").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:15%'>Aporte de agua permanente:</td> "
			+ "     <td style='width:15%;text-align:center' colspan='4'> " + ($("#aporte_agua_permanente").is(':checked') ? "X" : "") + " </td>      "
			+ "</tr> "
			+ "<tr> "
			+ "    <td style='width:10%'>Comienzo de Verano:</td> "
			+ "    <td style='width:10%;text-align:center'> " + ($("#comienzo_verano").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:15%'>Agricola:</td> "
			+ "    <td style='width:15%'>Tipo  " + ($("#agricola_tipo").val())+ " &nbsp; &nbsp; &nbsp; ha  " + ($("#agricola_ha").val())+ " </td> "
			+ "    <td style='width:15%'>Pozo Abandonado:</td> "
			+ "     <td style='width:5%;text-align:center'> " + ($("#pozo_abandonado").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:15%'>Aporte de agua intermitente:</td> "
			+ "     <td style='width:15%;text-align:center' colspan='4'> " + ($("#aporte_agua_intermitente").is(':checked') ? "X" : "")  + " </td>      "
			+ "</tr> "
			+ "<tr> "
			+ "    <td style='width:10%'>Fecha última lluvia:</td> "
			+ "    <td style='width:10%'> " + ($("#ultima_lluvia").val())+ " </td> "
			+ "    <td style='width:15%'>Industrial:</td> "
			+ "    <td style='width:15%;text-align:center'> " + ($("#industrial").is(':checked') ? "X" : "") + "</td> "
			+ "    <td style='width:15%'>Residuos solidos:</td> "
			+ "     <td style='width:5%;text-align:center'> " + ($("#residuos_solidos").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:15%'>Aporte por lluvias:</td> "
			+ "     <td style='width:15%;text-align:center' colspan='4'> " + ($("#aporte_agua_lluvias").is(':checked') ? "X" : "")+ " </td>      "
			+ "</tr> "
			+ "<tr> "
			+ "    <td style='width:20%' class='encabezado' colspan='2'><b>11. MÉTODO DE MEDIDA DE LA COTA</b></td> "
			+ "    <td style='width:15%'>piscícola:</td> "
			+ "    <td style='width:15%;text-align:center'> " + ($("#piscicola").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:15%'>Residuos peligrosos:</td> "
			+ "     <td style='width:5%;text-align:center'> " + ($("#residuos_peligrosos").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:15%'>Epoca de disminución:</td> "
			+ "     <td style='width:15%' colspan='4'> " + ($("#epoca_disminucion").val())+ " </td>      "
			+ "</tr>  "
			+ "<tr> "
			+ "    <td style='width:10%'>GPS:</td> "
			+ "    <td style='width:10%;text-align:center'> " + ($("#gps").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:15%'>Ninguno:</td> "
			+ "    <td style='width:15%;text-align:center'> " + ($("#ninguno").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:15%'>Plantas de sacrificio:</td> "
			+ "    <td style='width:5%;text-align:center'> " + ($("#plantas_sacrificio").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:15%'>Espejos de agua permanente:</td> "
			+ "    <td style='width:4%'>SI</td> "
			+ "    <td style='width:4%;text-align:center'> " + ($("#espejoa_si").is(':checked') ? "X" : "") + " </td>      "
			+ "    <td style='width:4%'>NO</td>"
			+ "    <td style='width:4%;text-align:center'> " + ($("#espejoa_si").is(':checked') ? "" : "X") + " </td>     "
			+ "     "
			+ "</tr> "
			+ " <tr> "
			+ "    <td style='width:10%'>Nivelación:</td> "
			+ "    <td style='width:10%;text-align:center'> " + ($("#nivelacion").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:15%'>Otro:</td> "
			+ "    <td style='width:15%'> " + ($("#agua_otro").val())+ " </td> "
			+ "    <td style='width:15%'>Lagunas de oxidación:</td> "
			+ "    <td style='width:5%;text-align:center'> " + ($("#lagunas_oxidacion").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:15%'>Otro:</td> "
			+ "    <td style='width:15%' colspan='4'> " + ($("#otro_descp").val())+ " </td>      "
			+ "</tr> "
			+ "<tr> "
			+ "    <td style='width:10%'>Mapa:</td> "
			+ "    <td style='width:10%;text-align:center'> " + ($("#mapa").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:30%' colspan='2'>sp(especie),#(numero de animales),ha(hectareas)</td> "
			+ "     "
			+ "    <td style='width:15%'>Otro:</td> "
			+ "    <td style='width:5%'> " + ($("#contamina_otro").val())+ " </td> "
			+ "    <td style='width:30%' colspan='5'></td> "
			+ "</tr> "
			+ "    </tbody> "
			+ "</table> "
			+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'> "
			+ "    <tbody> "
			+ "<tr> "
			+ "    <td style='width:25%' class='encabezado' colspan='2'><b>12. ESPEJO DE AGUA</b></td> "
			+ "    <td style='width:25%' class='encabezado' colspan='2'><b>13. SISTEMA DE APORTE DE AGUA</b></td> "
			+ "    <td style='width:20%' class='encabezado' colspan='2'><b>14. SISTEMA DE CAPTACIÓN</b></td> "
			+ "    <td style='width:30%' class='encabezado' colspan='2'><b>15. CARACTERISTICA DE LA BOMBA</b></td> "
			+ "</tr>  "
			+ "<tr> "
			+ "    <td style='width:15%'>Ancho/diámetro:</td> "
			+ "    <td style='width:10%'> " + ($("#espejo_ancho").val())+ " </td> "
			+ "    <td style='width:15%'>Manguera gravedad:</td> "
			+ "    <td style='width:10%;text-align:center'> " + ($("#manguera_gravedad").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:12%'>Manual:</td> "
			+ "    <td style='width:8%;text-align:center'> " + ($("#capta_manual").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:30%' border='0'>Clase de bomba:  " + ($("#bomba_clase").val())+ " </td> "
			+ " </tr> "
			+ "<tr> "
			+ "    <td style='width:15%'>Largo:</td> "
			+ "    <td style='width:10%'> " + ($("#espejo_largo").val())+ " </td> "
			+ "    <td style='width:15%'>Manguera bombeo:</td> "
			+ "    <td style='width:10%;text-align:center'> " + ($("#manguera_bombeo").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:12%'>Bomba sumergible:</td> "
			+ "     <td style='width:8%;text-align:center'> " + ($("#bomba_sumergible").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:30%' border='0'>Modelo:  " + ($("#bomba_modelo").val())+ " </td> "
			+ " </tr> "
			+ "<tr> "
			+ "    <td style='width:15%'>Profundidad lámina de agua:</td> "
			+ "    <td style='width:10%'> " + ($("#espejo_profundidad").val())+ " </td> "
			+ "    <td style='width:15%'>Canal de tierra:</td> "
			+ "    <td style='width:10%;text-align:center'> " + ($("#canal_tierra").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:12%'>Bomba natural:</td> "
			+ "     <td style='width:8%;text-align:center'> " + ($("#bomba_natural").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:30%'>Potencia:  " + ($("#bomba_potencia").val())+ "  HP</td> "
			+ " </tr> "
			+ "<tr> "
			+ "    <td style='width:15%'>Coloración:</td> "
			+ "    <td style='width:10%'> " + ($("#espejo_coloracion").val())+ " </td> "
			+ "    <td style='width:15%'>Canal en cemento:</td> "
			+ "    <td style='width:10%;text-align:center'> " + ($("#canal_cemento").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:12%'>Electrobomba:</td> "
			+ "     <td style='width:8%;text-align:center'> " + ($("#electrobomba").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:30%'>Profundidad del punto de succión:  " + ($("#bomba_profundidad").val())+ "  M</td> "
			+ " </tr> "
			+ "<tr> "
			+ "    <td style='width:25%' class='encabezado' colspan='2'><b>16. CONDICIÓN DEL PUNTO</b></td> "
			+ "    <td style='width:15%'>Drenaje natural:</td> "
			+ "    <td style='width:10%;text-align:center'> " + ($("#drenaje_natural").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:12%'>Moto bomba:</td> "
			+ "     <td style='width:8%;text-align:center'> " + ($("#moto_bomba").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:30%' align='center'><b>Tubería de descarga:</b></td> "
			+ " </tr> "
			+ "<tr> "
			+ "    <td style='width:13%'>Cubierta Adecuada:</td> "
			+ "    <td style='width:12%;text-align:center'> " + ($("#punto_adecuada").is(':checked') ? "X" : "")  + " </td> "
			+ "    <td style='width:15%'>Subterraneo:</td> "
			+ "    <td style='width:10%;text-align:center'> " + ($("#subterraneo").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:12%'>Represa:</td> "
			+ "     <td style='width:8%;text-align:center'> " + ($("#represa").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:30%'>Diámetro: " + ($("#tuberiad_diametro").val())+ " Pulg</td> "
			+ " </tr> "
			+ "<tr> "
			+ "    <td style='width:13%'>Piso en cemento:</td> "
			+ "    <td style='width:12%;text-align:center'> " + ($("#punto_cemento").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:15%'>Agua lluvias:</td> "
			+ "    <td style='width:10%;text-align:center'> " + ($("#agua_lluvias").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:12%'>Molino de viento:</td> "
			+ "     <td style='width:8%;text-align:center'> " + ($("#molino_viento").is(':checked') ? "X" : "") + " </td> "
			+ "<td style='width:30%'>Longitud: " + ($("#tuberiad_longitud").val())+ " M</td> "
			+ " </tr> "
			+ "<tr> "
			+ "    <td style='width:13%'>Cercado:</td> "
			+ "    <td style='width:12%;text-align:center'> " + ($("#punto_cercado").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:15%'>Otro:</td> "
			+ "    <td style='width:10%'> " + ($("#sisagua_otro").val())+ " </td> "
			+ "    <td style='width:12%'>Otro:</td> "
			+ "     <td style='width:8%'> " + ($("#capta_otro").val())+ " </td> "
			+ "<td style='width:30%'>Material: " + ($("#tuberiad_material").val())+ " </td> "
			+ " </tr> "
			+ "    </tbody> "
			+ "</table> "
			+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'> "
			+ "    <tbody> "
			+ "<tr> "
			+ "    <td style='width:33%' class='encabezado'><b>17. CARACTERISTICAS DE LOS MANANTIALES</b></td> "
			+ "    <td style='width:33%' class='encabezado'><b>18. DESCRIPCIÓN POZOS PROFUNDOS Y ALJIBES</b></td> "
			+ "    <td style='width:33%' class='encabezado'><b>19. DESCRIPCIÓN JAGÜEY Y ESTANQUES PISCICOLAS</b></td> "
			+ "    </tr> "
			+ "       "
			+ "</tbody></table> "
			+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'> "
			+ "    <tbody> "
			+ "<tr> "
			+ "      <td style='width:15%' rowspan='3'>Tipo de manantial:</td> "
			+ "            <td style='width:13%'>Goteo</td> "
			+ "            <td style='width:5.3%;text-align:center'> " + ($("#manantial_goteo").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:17.3%'>Fecha de construcción:</td> "
			+ "    <td style='width:16%'> " + ($("#pozo_fecha").val())+ " </td> "
			+ "    <td style='width:17%'>Profundidad:</td> "
			+ "    <td style='width:16%' colspan='4'> " + ($("#jaguey_profundidad").val())+ " </td> "
			+ "     "
			+ "   </tr> "
			+ "   <tr> "
			+ "      <td style='width:13%'>Filtración</td> "
			+ "            <td style='width:5.3%;text-align:center'> " + ($("#manantial_filtracion").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:17.3%'>Profundidad:</td> "
			+ "    <td style='width:16%'> " + ($("#pozo_profundidad").val())+ " </td> "
			+ "    <td style='width:17%'>Diámetro:</td> "
			+ "    <td style='width:16%' colspan='4'> " + ($("#jaguey_diametro").val())+ " </td> "
			+ "   </tr> "
			+ "   <tr> "
			+ "     <td style='width:18.3%' colspan='2'>Otro cual?  " + ($("#manantial_otro").val())+ "  "
			+ "         </td> "
			+ "       <td style='width:17.3%'>Diámetro:</td> "
			+ "    <td style='width:16%'> " + ($("#pozo_diametro").val())+ " </td> "
			+ "   <td style='width:17%'>Presencia de diques:</td> "
			+ "        "
			+ "       <td style='width:4%'>SI</td> "
			+ "       <td style='width:4%'> " + ($("#dique_si").is(':checked') ? "X" : "") + " </td> "
			+ "       <td style='width:4%'>NO</td> "
			+ "       <td style='width:4%'> " + ($("#dique_si").is(':checked') ? "" : "X") + " </td> "
			+ "       </tr> "
			+ "       <tr> "
			+ "      <td style='width:15%' rowspan='4'>Permanencia:</td> "
			+ "            <td style='width:13%'>Perenne</td> "
			+ "            <td style='width:5.3%;text-align:center'> " + ($("#perma_perenne").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:17.3%'>Diametro de la perforación:</td> "
			+ "    <td style='width:16%'> " + ($("#pozo_diametrop").val())+ " </td> "
			+ "    <td style='width:17%'>Estado del Dique:</td> "
			+ "    <td style='width:16%' colspan='4'> " + ($("#dique_estado").val())+ " </td> "
			+ "    </tr> "
			+ "   <tr> "
			+ "      <td style='width:13%'>Estacional</td> "
			+ "            <td style='width:5.3%;text-align:center'> " + ($("#perma_estacional").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:17.3%'>Caudal estimado (L/s):</td> "
			+ "    <td style='width:16%'> " + ($("#pozo_caudal").val())+ " </td> "
			+ "    <td style='width:17%'>Presencia de mallas:</td> "
			+ "       <td style='width:4%'>SI</td> "
			+ "       <td style='width:4%;text-align:center'> " + ($("#malla_si").is(':checked') ? "X" : "") + " </td> "
			+ "       <td style='width:4%'>NO</td> "
			+ "       <td style='width:4%;text-align:center'> " + ($("#malla_si").is(':checked') ? "" : "X") + " </td> "
			+ "              "
			+ "    </tr> "
			+ "   <tr> "
			+ "     <td style='width:13%'>Intermitente "
			+ "         </td><td style='width:5.3%;text-align:center'> " + ($("#perma_intermitente").is(':checked') ? "X" : "") + " </td> "
			+ "  <td style='width:17.3%'>Zona de protección:</td> "
			+ "    <td style='width:16%'> " + ($("#pozo_proteccion").val())+ " </td> "
			+ "   <td style='width:17%'>Especies "
			+ "    </td><td style='width:16%' colspan='4'> " + ($("#jaguey_especies").val())+ " </td> "
			+ "       </tr> "
			+ "  "
			+ "   <tr> "
			+ "      <td style='width:13%'>Sin información</td> "
			+ "            <td style='width:5.3%;text-align:center'> " + ($("#perma_sininfo").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:33,3%' colspan='2' align='center'><b>Material de revestimiento</b></td> "
			+ "    <td style='width:17%'>cantidad actual de peces</td> "
			+ "       <td style='width:16%' colspan='4'> " + ($("#jaguey_cant_peces").val())+ " </td></tr> "
			+ "        <tr> "
			+ "      <td style='width:15%' rowspan='5'>Medio de surgencia:</td> "
			+ "            <td style='width:13%'>Rasgo Kárstico</td> "
			+ "            <td style='width:5.3%;text-align:center'> " + ($("#surgencia_kastico").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:17.3%'>Concreto:</td> "
			+ "    <td style='width:16%;text-align:center'> " + ($("#material_concreto").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:17%'>Cantidad máxima de peces:</td> "
			+ "           <td style='width:16%' colspan='4'> " + ($("#jaguey_cant_max").val())+ " </td></tr> "
			+ "     "
			+ "   "
			+ "           <tr><td style='width:13%'>Fracturas</td> "
			+ "            <td style='width:5.3%;text-align:center'> " + ($("#surgencia_fracturas").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:17.3%'>Bloque arena-cemento:</td> "
			+ "    <td style='width:16%;text-align:center'> " + ($("#material_bloque").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:17%'>Tamaño/peso:</td> "
			+ "    <td style='width:16%' colspan='4'> " + ($("#jaguey_tamano").val())+ " </td></tr> "
			+ " <tr><td style='width:13%'>Contacto</td> "
			+ "            <td style='width:5.3%;text-align:center'> " + ($("#surgencia_contacto").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:17.3%'>PVC:</td> "
			+ "    <td style='width:16%;text-align:center'> " + ($("#material_pvc").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:17%'>Comercial:</td> "
			+ "    <td style='width:16%' colspan='4'> " + ($("#jaguey_comercial").val())+ " </td></tr> "
			+ " <tr><td style='width:18.3%' colspan='2'>Otro cual? " + ($("#surgencia_otro").val())+ "  "
			+ "         </td> "
			+ "    <td style='width:17.3%'>Metálico:</td> "
			+ "    <td style='width:16%;text-align:center'> " + ($("#material_metalico").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:17%'>Consumo familiar:</td> "
			+ "    <td style='width:16%' colspan='4'> " + ($("#jaguey_familiar").val())+ " </td></tr> "
			+ " <tr><td style='width:18.3%' colspan='2'></td> "
			+ "    <td style='width:17.3%' colspan='2'>Otro:  " + ($("#material_otro").val())+ " </td> "
			+ "    <td style='width:17%'>Zona de protección:</td> "
			+ "    <td style='width:16%' colspan='4'> " + ($("#jaguey_zona_proteccion").val())+ " </td></tr> "
			+ "        "
			+ "    </tbody></table> "

			+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'> "
			+ "    <tbody> "
			+ "<tr> "
			+ "    <td style='width:50%' class='encabezado' colspan='5'><b>20. CARACTERÍSTICAS TOPOGRÁFICAS, GEOMORFOLÓGICAS Y GEOLÓGICAS</b></td> "
			+ "    <td style='width:50%' class='encabezado' colspan='6'><b>21. CONSTRUCCIONES ADICIONALES DE LA CAPTACIÓN</b></td> "
			+ "   </tr>  "
			+ "<tr> "
			+ "<td style='width:16.6%' colspan='2'><b>Topografía:</b></td> "
			+ " <td style='width:16.6%' colspan='2'><b>Geoforma:</b></td> "
			+ " <td style='width:16.6%'><b>Unidad Geológica:</b></td> "
			+ " <td style='width:8.3%'><b>Tipo de construcción:</b></td> "
			+ " <td style='width:8.3%'><b>Diametro:</b></td>    "
			+ " <td style='width:8.3%'><b>Largo:</b></td> "
			+ " <td style='width:8.3%'><b>Ancho:</b></td> "
			+ " <td style='width:8.3%'><b>Profundidad:</b></td> "
			+ " <td style='width:8.3%'><b>Capacidad:</b></td> "
			+ " </tr>  "
			+ "<tr> "
			+ "<td style='width:12%'>Depresión:</td> "
			+ " <td style='width:8%;text-align:center'> " + ($("#topo_depresion").is(':checked') ? "X" : "") + " </td> "
			+ " <td style='width:12%'>Abanico Aluvial:</td> "
			+ " <td style='width:8%;text-align:center'> " + ($("#geo_abanico_aluvial").is(':checked') ? "X" : "") + " </td> "
			+ " <td style='width:10%'> " + ($("#unidad_geologica1").val())+ " </td> "
			+ " <td style='width:8.3%'>Embalse:</td> "
			+ " <td style='width:8.3%'> " + ($("#embalse_diametro").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#embalse_largo").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#embalse_ancho").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#embalse_profundidad").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#embalse_capacidad").val())+ " </td> "
			+ " </tr>  "
			+ "<tr> "
			+ "<td style='width:12%'>Planicie:</td> "
			+ " <td style='width:8%;text-align:center'> " + ($("#topo_planicie").is(':checked') ? "X" : "") + " </td> "
			+ " <td style='width:12%'>Cauce Aluvial:</td> "
			+ " <td style='width:8%;text-align:center'> " + ($("#geo_cauce_aluvial").is(':checked') ? "X" : "") + " </td> "
			+ " <td style='width:10%'></td> "
			+ " <td style='width:8.3%'>Tanque:</td> "
			+ " <td style='width:8.3%'> " + ($("#tanque_diametro").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#tanque_largo").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#tanque_ancho").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#tanque_profundidad").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#tanque_capacidad").val())+ " </td> "
			+ " </tr>  "
			+ "<tr> "
			+ "<td style='width:12%'>Altiplanicie:</td> "
			+ " <td style='width:8%;text-align:center'> " + ($("#topo_altiplanicie").is(':checked') ? "X" : "") + " </td> "
			+ " <td style='width:12%'>Llanura Aluvial:</td> "
			+ " <td style='width:8%;text-align:center'> " + ($("#geo_llanura_aluvial").is(':checked') ? "X" : "") + " </td> "
			+ " <td style='width:10%'><b>Litología:</b></td> "
			+ "    <td style='width:8.3%'>Alberca</td> "
			+ " <td style='width:8.3%'> " + ($("#alberca_diametro").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#alberca_largo").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#alberca_ancho").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#alberca_profundidad").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#alberca_capacidad").val())+ " </td> "
			+ " </tr>  "
			+ " <tr> "
			+ "<td style='width:12%'>Piedemonte:</td> "
			+ " <td style='width:8%;text-align:center'> " + ($("#topo_piedemonte").is(':checked') ? "X" : "") + " </td> "
			+ " <td style='width:12%'>Terraza:</td> "
			+ " <td style='width:8%;text-align:center'> " + ($("#geo_terraza").is(':checked') ? "X" : "") + " </td> "
			+ " <td style='width:10%'> " + ($("#litologia1").val())+ " </td> "
			+ "    <td style='width:8.3%'>Tubería</td> "
			+ " <td style='width:8.3%'> " + ($("#tuberia_diametro").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#tuberia_largo").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#tuberia_ancho").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#tuberia_profundidad").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#tuberia_capacidad").val())+ " </td> "
			+ " </tr>  "
			+ " <tr> "
			+ "<td style='width:12%'>Ladera:</td> "
			+ " <td style='width:8%;text-align:center'> " + ($("#topo_ladera").is(':checked') ? "X" : "") + " </td> "
			+ " <td style='width:12%'>Luna:</td> "
			+ " <td style='width:8%;text-align:center'> " + ($("#geo_luna").is(':checked') ? "X" : "") + " </td> "
			+ " <td style='width:10%'></td> "
			+ "    <td style='width:8.3%'> " + ($("#otro_nombre").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#otro_diametro").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#otro_largo").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#otro_ancho").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#otro_profundidad").val())+ " </td> "
			+ " <td style='width:8.3%'> " + ($("#otro_capacidad").val())+ " </td> "
			+ " </tr>  "
			+ "<tr> "
			+ "<td style='width:12%'>Colina:</td> "
			+ " <td style='width:8%;text-align:center'> " + ($("#topo_colina").is(':checked') ? "X" : "") + " </td> "
			+ " <td style='width:12%'>Colina:</td> "
			+ " <td style='width:8%;text-align:center'> " + ($("#geo_dolina").is(':checked') ? "X" : "") + " </td> "
			+ " <td style='width:10%'><b></b></td> "
			+ "    <td style='width:50%' colspan='6'></td> "
			+ " </tr>  "
			+ "       <tr> "
			+ "<td style='width:20%' colspan='2'>Otra cual?: " + ($("#topo_otro").val())+ " </td> "
			+ " <td style='width:12%'>Playa:</td> "
			+ " <td style='width:8%;text-align:center'> " + ($("#geo_playa").is(':checked') ? "X" : "") + " </td> "
			+ " <td style='width:10%'><b></b></td> "
			+ "    <td style='width:50%' colspan='6'></td> "
			+ " </tr>  "
			+ " <tr> "
			+ "<td style='width:20%' colspan='2'></td> "
			+ " <td style='width:30%' colspan='3'>Otra cual? " + ($("#geo_otro").val())+ " </td> "
			+ " <td style='width:50%' colspan='6'></td> "
			+ " </tr> "
			+ "    </tbody> "
			+ "</table> "
			
			                        + "</p> "
                
                        + "<p style='page-break-after: always;'> "
						
						
						
						+ " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
                        + "  <tbody>"
                        + "   <tr><td class='encabezado2' colspan='4'>Pagina 2 de 3 &nbsp&nbsp</td></tr>"
						+ "  <tr>"
						+ "  <td colspan='4'>"
						+ "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
						+ "    <tbody>"
						+ "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
						+ "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA POST REGISTRO DE RECURSO HÍDRICO</td>"
						+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
						+ "   </tr>"
						+ "   <tr>"
						+ "    <td colspan='4'>"
						+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
						+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-07</td>"					
						+ "	    <td  style='font-size:10px;text-align:right;padding-right:5px'>Versi&oacute;n 8, Octubre de 2018</td></tr></table>"
						+ "  </td></tr><tr>"
						+ "  <td style='width: 40%'>  "+ window.localStorage.getItem('programa_sismico') +" </td>"
						+ "  <td style='width: 10%'>OPERADORA:</td>"
						+ "  <td>  "+  window.localStorage.getItem('operadora') +"  </td>"
						+ "   </tr>    "
						+ "    </tbody>"
						+ "</table>"
						+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
						+ " <tbody>"
						+ "  <tr>"
                        + "  <td style='width: 12.5%'>Fecha:</td>"
                        + "  <td style='width: 12.5%'> "+ getCurrentDate() +"</td>"
                        + "  <td style='width: 12.5%'>Línea</td>"
                        + "  <td style='width: 12.5%'>  " + ($("#linea").val())+" </td>"
                        + "  <td style='width: 12.5%'>Acta Nº.</td>"
                        + "  <td style='width: 12.5%'>  POST-RH-" + $("#customActa").val() +" </td>"
                          + "   </tr>    "
                        + "  </tbody>"
                        + "</table>"  
						
						
						
                
			+ "<table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;'> "
			+ "    <tbody> "
			+ "<tr> "
			+ "    <td class='encabezado' colspan='5'><b>OBSERVACIONES GENERALES</b></td> "
			+ "</tr> "
			+ "<tr> "
			+ "    <td style='height: 100px;vertical-align: top;padding:5px;text-align: justify' colspan='5'>  " + ($("#observa").val())+ " </td> "
			+ "</tr> "
			+ "<tr> "
			+ "    <td style='width:100%' colspan='5'>Relación entre representante y propietario:  " + ($("#rela_repre_prop").val())+ " </td>   "
			+ "</tr> "
			+ "<tr> "
			+ "   <td style='width:90%'>¿Todos los elementos estan relacionados en esta acta?</td>  "
			+ "   <td style='width:2.5%'>SI</td> "
			+ "   <td style='width:2.5%;text-align:center'> " + ($("#elementos_si").is(':checked') ? "X" : "") + " </td> "
			+ "    <td style='width:2.5%'>NO</td> "
			+ "    <td style='width:2.5%;text-align:center'> " + ($("#elementos_si").is(':checked') ? "" : "X") + " </td> "
			+ "</tr> "
			+ "<tr> "
			+ "    <td style='width:100%' height='30px' colspan='5'>¿Que falta por relacionar?:  " + ($("#falta_rela").val())+ " </td>  "
			+ "</tr> "
			+ "    </tbody> "
			+ "</table> "
   

                
                        +"<table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;'>"
			+ "<tbody>"
			+ " <tr>"
			+ "    <td class='encabezado' style='width:50%' ><b>ESQUEMA RECURSO HÍDRICO EN PLANTA</b></td>"
                        + "    <td class='encabezado' ><b>DIAGRAMA DE LINEA</b></td>"
			+ " </tr>"
                	+ " <tr>"
			+ "    <td style='height:300px' ><img  src='file:///storage/emulated/0/Download/esquemaprerh"+ ac +".jpg' style='width: 100%;  height: auto;' ></td>"
                        + "    <td><img  src='file:///storage/emulated/0/Download/lineaprerh"+ ac +".jpg' style='width: 100%;  height: auto;'></td>"
			+ " </tr>"
                        + "</tbody>"
			+ "</table>"
                
                        + "<table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;'> "
                        + "    <tbody> "
                        + "<tr> "
                        + "    <td class='encabezado' colspan='4'><b>FIRMAS DE APROBACIÓN</b></td> "
                        + "</tr> "
                        + "<tr> "
                        + "    <td width='100%' colspan='4'><p></p>Los presentes firman en constancia de la evaluación realizada y las partes se declaran entre si, a paz y salvo por todo concepto y responsabilidad en especial con respecto al elemento referenciado. Para constancia se firma siendo las _________ horas del día ___________ del mes de  ______________ de 201___.</td></tr> "
                            + "<tr>"
                        + " <td>AVISO DE PRIVACIDAD PARA RECOLECCIÓN DE DATOS PERSONALES</td> "
                        + "</tr>"
                        + "<tr>"
 						+ " <td style='text-align: justify;font-size:11px;'>En mi calidad de titular de información personal, actuando libre y voluntariamente, al diligenciar los datos aquí solicitados, autorizo a PETROSEISMIC SERVICES S.A, ubicado en la Carrera 23 # 102 - 53 de la ciudad de Bogotá, Teléfono: +57 1 743 3650 , Movíl: +57 3114524265. Entiendo que las políticas para el tratamiento de mi información personal (Ley 1581/2012), así como el procedimiento para elevar cualquier solicitud, queja o reclamo al correo electrónico contactol@petroseismicservices.com, para que de forma directa o a través de terceros realice el tratamiento de mi información personal, el cual consiste en recolectar, almacenar, usar, transferir y administrar mis datos personales, para el acta de recurso hídrico.</td> "
						+ "</tr> "
                        + "<tr>"
                        + " <td>El firmante manifiesta haber puesto a disposición del Proyecto, de manera verídica, toda la información existente al respecto.</td> "
                        + "</tr>"
                        + "</table>"
                         + "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
                        + " <tr>"
                        + "     <td style='height:50px;vertical-align:bottom;'></td><td style='height:50px;vertical-align:bottom;'></td><td  style='font-size:8px;vertical-align:bottom;text-align:center' rowspan='3'>huella</td>"
                        + " </tr>"
                        +" <tr>"
                        + "     <td width='45%'>NOMBRE DEL PROPIETARIO O REPRESENTANTE DEL PREDIO</td><td  width='45%'>FIRMA DEL PROPIETARIO O REPRESENTANTE DEL PREDIO</td>"
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
            + "     <td>NOMBRE DEL EVALUADOR PETROSEISMIC SERVICES</td><td></td><td>FIRMA DEL EVALUADOR PETROSEISMIC SERVICES</td>"
            + "</tr>"
            +" <tr>"
            + "     <td>Teléfono_______________</td><td></td><td>C.C #_____________ de _________</td>"
            + " </tr>"   
            +" <tr>"
            + "     <td style='height:60px;vertical-align:bottom;'> ____________________________________</td><td></td><td colspan='2' style='height:60px;vertical-align:bottom;'>___________________________________</td>"
            + " </tr>"
            +" <tr>"
            + "     <td>NOMBRE DEL COORDINADOR DE ACTAS PETROSEISMIC SERVICES</td><td></td><td colspan='2'>FIRMA DEL COORDINADOR DE ACTAS PETROSEISMIC SERVICES</td>"
            + "</tr>"
            +" <tr>"
            + "     <td></td><td></td><td colspan='2'>C.C #_____________ de _________</td>"
            + " </tr>"   
            +" <tr>"
            + "     <td style='height:60px;vertical-align:bottom;'>____________________________________</td><td></td><td colspan='2' style='height:60px;vertical-align:bottom;'>___________________________________</td>"
            + " </tr>"
            +" <tr>"
            + "     <td>NOMBRE DEL SUPERVISOR HSE DE CAMPO ANH</td><td></td><td colspan='2'>FIRMA DEL SUPERVISOR HSE DE CAMPO ANH</td>"
            + "</tr>"
            +" <tr>"
            + "     <td></td><td></td><td colspan='2'>C.C #_____________ de _________</td>"
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
            + "</table>"

                        + "<p style='page-break-after: always;'> "                             
                        + "     <table width='100%' border='1' cellspacing='0' cellpadding='0'  style='padding-top: 10px;margin-top: 40px'>"
                        + "       <tbody>"
                        + "            <tr>"
                        + "              <td class='rotate'><div>POST-RH-"+(padDigits($("#customActa").val(), 3))+"-02</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-hid-" + ac +"-"+ 2 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "              <td  class='rotate'><div>POST-RH-"+(padDigits($("#customActa").val(), 3))+"-01</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-hid-" + ac +"-"+ 1 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "            </tr>"
                        + "            <tr>"
                        + "              <td class='rotate'><div>POST-RH-"+(padDigits($("#customActa").val(), 3))+"-04</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-hid-" + ac +"-"+ 4 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "              <td  class='rotate' ><div>POST-RH-"+(padDigits($("#customActa").val(), 3))+"-03</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-hid-" + ac +"-"+ 3 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "            </tr>"
                        + "         </tbody>"
                        + "       </table></p>"	
                        + "     <p style='page-break-after: always;'> "
                        + "     <table width='100%' border='1' cellspacing='0' cellpadding='0'  style='padding-top: 10px;margin-top: 40px'>"
                        + "       <tbody>"
                        + "            <tr>"
                        + "            <tr>"
                        + "              <td class='rotate' style='height:650px;width:30px;'><div>POST-RH-"+(padDigits($("#customActa").val(), 3))+"-06</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-hid-" + ac +"-"+ 6 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "              <td  class='rotate' style='height:650px;width:30px;'><div>POST-RH-"+(padDigits($("#customActa").val(), 3))+"-05</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-hid-" + ac +"-"+ 5 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "            </tr>"
                        + "            <tr>"
                        + "              <td class='rotate' style='height:650px;width:30px;'><div>POST-RH-"+(padDigits($("#customActa").val(), 3))+"-07</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-hid-" + ac +"-"+ 7 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "              <td  class='rotate' style='height:650px;width:30px;'><div>POST-RH-"+(padDigits($("#customActa").val(), 3))+"-08</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-hid-" + ac +"-"+ 8 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "            </tr>"
                        + "         </tbody>"
                        + "       </table></p>"
        		+ "</body></html>",
            documentSize: 'A4',
            landscape: 'portrait',
            type: 'share',
			fileName: 'post-hid-'+ $("#acta").val()
        }, this.success, this.failure);
}

function capturePhoto(imageNumber) {
    hidImageNumber = imageNumber;
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
    var newFileName = 'post-hid-' + ac +'-'+ hidImageNumber + ".jpg";
    i++;
    
    var dir = '/';
    window.localStorage.setItem('post-hid-' + ac +'-'+ hidImageNumber,'');

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
    //The folder is created if doesn't exist

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
	var album = 'post-hid-' + ac;
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

function insertDataPreHidrico() {
	
    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});


    var id = $("#acta").val();
	var programa_sismico = window.localStorage.getItem("programa_sismico");
    var operadora = window.localStorage.getItem("operadora");
    var fecha = getCurrentDateTime();
    var linea = $("#linea").val();
	var permiso = $("#permiso").val();
	var P_DEPTO = $("#P_DEPTO").val();
	var P_MUN = $("#P_MUN").val();
	var vereda = $("#vereda").val();
	var predio = $("#predio").val();
	var propietario = $("#propietario").val();
	var cc_propietario = $("#cc_propietario").val();
	var lugar_cc_propietario = $("#lugar_cc_propietario").val();
	var telefono = $("#telefono").val();
	var origen_coord = $("#origen_coord").val();
	var coordenada_e = $("#coordenada_e").val();
	var coordenada_n = $("#coordenada_n").val();
	var stk = $("#stk").val();
	var sp_cercano = $("#sp_cercano").val();
	var distancia_sp = $("#distancia_sp").val();
	var productivo = $("#productivo").is(':checked');
	var reserva = $("#reserva").is(':checked');
	var abandonado = $("#abandonado").is(':checked');
	var inactivo = $("#inactivo").is(':checked');
	var sellado = $("#sellado").is(':checked');
	var monitoreo = $("#monitoreo").is(':checked');
	var en_campo = $("#en_campo").is(':checked');
	var constructor = $("#constructor").is(':checked');
	var propietario_i = $("#propietario_i").is(':checked');
	var estudios = $("#estudios").is(':checked');
	var reportes = $("#reportes").is(':checked');
	var otros = $("#otros").is(':checked');
	var jagüey = $("#jagüey").is(':checked');
	var estanque_piscicola = $("#estanque_piscicola").is(':checked');
	var aljibe = $("#aljibe").is(':checked');
	var pozo_profundo = $("#pozo_profundo").is(':checked');
	var nacedero = $("#nacedero").is(':checked');
	var info_nombre = $("#info_nombre").val();
	var info_direccion = $("#info_direccion").val();
	var info_telefono = $("#info_telefono").val();
	var punto_legalizado = $("#punto_legalizado").is(':checked');
	var punto_resolucion = $("#punto_resolucion").val();
	var punto_fecha = $("#punto_fecha").val();
	var punto_caudal = $("#punto_caudal").val();
	var invierno = $("#invierno").is(':checked');
	var verano = $("#verano").is(':checked');
	var comienzo_invierno = $("#comienzo_invierno").is(':checked');
	var comienzo_verano = $("#comienzo_verano").is(':checked');
	var ultima_lluvia = $("#ultima_lluvia").val();
	var gps = $("#gps").is(':checked');
	var nivelacion = $("#nivelacion").is(':checked');
	var mapa = $("#mapa").is(':checked');
	var domestico = $("#domestico").is(':checked');
	var comunitario = $("#comunitario").is(':checked');
	var ganadero_sp = $("#ganadero_sp").val();
	var agricola_tipo = $("#agricola_tipo").val();
	var ganadero_n = $("#ganadero_n").val();
	var agricola_ha = $("#agricola_ha").val();
	var industrial = $("#industrial").is(':checked');
	var piscicola = $("#piscicola").is(':checked');
	var ninguno = $("#ninguno").is(':checked');
	var agua_otro = $("#agua_otro").val();
        var sisagua_otro = $("#sisagua_otro").val();
	var cementerio = $("#cementerio").is(':checked');
	var basura_estiercol = $("#basura_estiercol").is(':checked');
	var aguas_estancadas = $("#aguas_estancadas").is(':checked');
	var pozo_abandonado = $("#pozo_abandonado").is(':checked');
	var residuos_solidos = $("#residuos_solidos").is(':checked');
	var residuos_peligrosos = $("#residuos_peligrosos").is(':checked');
	var plantas_sacrificio = $("#plantas_sacrificio").is(':checked');
	var lagunas_oxidacion = $("#lagunas_oxidacion").is(':checked');
	var contamina_otro = $("#contamina_otro").val();
	var tipo_suelo = $("#tipo_suelo").val();
	var tipo_vegetacion = $("#tipo_vegetacion").val();
	var aporte_agua_permanente = $("#aporte_agua_permanente").is(':checked');
	var aporte_agua_intermitente = $("#aporte_agua_intermitente").is(':checked');
	var aporte_agua_lluvias = $("#aporte_agua_lluvias").is(':checked');
	var epoca_disminucion = $("#epoca_disminucion").val();
	var espejoa_si = $("#espejoa_si").is(':checked');
	var otro_descp = $("#otro_descp").val();
	var espejo_ancho = $("#espejo_ancho").val();
	var espejo_largo = $("#espejo_largo").val();
	var espejo_profundidad = $("#espejo_profundidad").val();
	var espejo_coloracion = $("#espejo_coloracion").val();
	var manguera_gravedad = $("#manguera_gravedad").is(':checked');
	var manguera_bombeo = $("#manguera_bombeo").is(':checked');
	var canal_tierra = $("#canal_tierra").is(':checked');
	var canal_cemento = $("#canal_cemento").is(':checked');
	var drenaje_natural = $("#drenaje_natural").is(':checked');
	var subterraneo = $("#subterraneo").is(':checked');
	var agua_lluvias = $("#agua_lluvias").is(':checked');
	var aguas_otro = $("#aguas_otro").val();
	var capta_manual = $("#capta_manual").is(':checked');
	var bomba_sumergible = $("#bomba_sumergible").is(':checked');
	var bomba_natural = $("#bomba_natural").is(':checked');
	var electrobomba = $("#electrobomba").is(':checked');
	var moto_bomba = $("#moto_bomba").is(':checked');
	var represa = $("#represa").is(':checked');
	var molino_viento = $("#molino_viento").is(':checked');
	var capta_otro = $("#capta_otro").val();
	var bomba_clase = $("#bomba_clase").val();
	var bomba_modelo = $("#bomba_modelo").val();
	var bomba_potencia = $("#bomba_potencia").val();
	var bomba_profundidad = $("#bomba_profundidad").val();
	var tuberiad_diametro = $("#tuberiad_diametro").val();
	var tuberiad_longitud = $("#tuberiad_longitud").val();
	var tuberiad_material = $("#tuberiad_material").val();
	var manantial_goteo = $("#manantial_goteo").is(':checked');
	var manantial_filtracion = $("#manantial_filtracion").is(':checked');
	var manantial_otro = $("#manantial_otro").val();
	var perma_perenne = $("#perma_perenne").is(':checked');
	var perma_estacional = $("#perma_estacional").is(':checked');
	var perma_intermitente = $("#perma_intermitente").is(':checked');
	var perma_sininfo = $("#perma_sininfo").is(':checked');
	var surgencia_kastico = $("#surgencia_kastico").is(':checked');
	var surgencia_fracturas = $("#surgencia_fracturas").is(':checked');
	var surgencia_contacto = $("#surgencia_contacto").is(':checked');
	var surgencia_otro = $("#surgencia_otro").val();
	var pozo_fecha = $("#pozo_fecha").val();
	var pozo_profundidad = $("#pozo_profundidad").val();
	var pozo_diametro = $("#pozo_diametro").val();
	var pozo_diametrop = $("#pozo_diametrop").val();
	var pozo_caudal = $("#pozo_caudal").val();
	var pozo_proteccion = $("#pozo_proteccion").val();
	var material_concreto = $("#material_concreto").is(':checked');
	var material_bloque = $("#material_bloque").is(':checked');
	var material_pvc = $("#material_pvc").is(':checked');
	var material_metalico = $("#material_metalico").is(':checked');
	var material_otro = $("#material_otro").val();
	var jaguey_profundidad = $("#jaguey_profundidad").val();
	var jaguey_diametro = $("#jaguey_diametro").val();
	var dique_si = $("#dique_si").is(':checked');
	var dique_estado = $("#dique_estado").val();
	var malla_si = $("#malla_si").is(':checked');
	var jaguey_especies = $("#jaguey_especies").val();
	var jaguey_cant_peces = $("#jaguey_cant_peces").val();
	var jaguey_cant_max = $("#jaguey_cant_max").val();
	var jaguey_tamano = $("#jaguey_tamano").val();
	var jaguey_comercial = $("#jaguey_comercial").is(':checked');
	var jaguey_familiar = $("#jaguey_familiar").is(':checked');
	var jaguey_zona_proteccion = $("#jaguey_zona_proteccion").is(':checked');
	var ph = $("#ph").val();
	var conductividad = $("#conductividad").val();
	var temperatura = $("#temperatura").val();
	var sdt = $("#sdt").val();
	var muestreo_manual = $("#muestreo_manual").is(':checked');
	var muestreo_bombeo = $("#muestreo_bombeo").is(':checked');
	var muestreo_otro = $("#muestreo_otro").val();
	var color_incoloro = $("#color_incoloro").is(':checked');
	var color_amarillo = $("#color_amarillo").is(':checked');
	var color_cafe = $("#color_cafe").is(':checked');
	var color_otro = $("#color_otro").val();
	var apariencia_clara = $("#apariencia_clara").is(':checked');
	var apariencia_turbia = $("#apariencia_turbia").is(':checked');
	var apariencia_otro = $("#apariencia_otro").val();
	var olor_inolora = $("#olor_inolora").is(':checked');
	var olor_fetida = $("#olor_fetida").is(':checked');
	var olor_otro = $("#olor_otro").val();
	var topo_depresion = $("#topo_depresion").is(':checked');
	var topo_planicie = $("#topo_planicie").is(':checked');
	var topo_altiplanicie = $("#topo_altiplanicie").is(':checked');
	var topo_piedemonte = $("#topo_piedemonte").is(':checked');
	var topo_ladera = $("#topo_ladera").is(':checked');
	var topo_colina = $("#topo_colina").is(':checked');
	var topo_otro = $("#topo_otro").val();
	var geo_abanico_aluvial = $("#geo_abanico_aluvial").is(':checked');
	var geo_cauce_aluvial = $("#geo_cauce_aluvial").is(':checked');
	var geo_llanura_aluvial = $("#geo_llanura_aluvial").is(':checked');
	var geo_terraza = $("#geo_terraza").is(':checked');
	var geo_luna = $("#geo_luna").is(':checked');
	var geo_dolina = $("#geo_dolina").is(':checked');
	var geo_playa = $("#geo_playa").is(':checked');
	var geo_otro = $("#geo_otro").val();
	var unidad_geologica1 = $("#unidad_geologica1").val();
	var litologia1 = $("#litologia1").val();
	var embalse_diametro = $("#embalse_diametro").val();
	var embalse_largo = $("#embalse_largo").val();
	var embalse_ancho = $("#embalse_ancho").val();
	var embalse_profundidad = $("#embalse_profundidad").val();
	var embalse_capacidad = $("#embalse_capacidad").val();
	var tanque_diametro = $("#tanque_diametro").val();
	var tanque_largo = $("#tanque_largo").val();
	var tanque_ancho = $("#tanque_ancho").val();
	var tanque_profundidad = $("#tanque_profundidad").val();
	var tanque_capacidad = $("#tanque_capacidad").val();
	var alberca_diametro = $("#alberca_diametro").val();
	var alberca_largo = $("#alberca_largo").val();
	var alberca_ancho = $("#alberca_ancho").val();
	var alberca_profundidad = $("#alberca_profundidad").val();
	var alberca_capacidad = $("#alberca_capacidad").val();
	var tuberia_diametro = $("#tuberia_diametro").val();
	var tuberia_largo = $("#tuberia_largo").val();
	var tuberia_ancho = $("#tuberia_ancho").val();
	var tuberia_profundidad = $("#tuberia_profundidad").val();
	var tuberia_capacidad = $("#tuberia_capacidad").val();
	var otro_nombre = $("#otro_nombre").val();
	var otro_diametro = $("#otro_diametro").val();
	var otro_largo = $("#otro_largo").val();
	var otro_ancho = $("#otro_ancho").val();
	var otro_profundidad = $("#otro_profundidad").val();
	var otro_capacidad = $("#otro_capacidad").val();
	var observa = $("#observa").val();
	var rela_repre_prop = $("#rela_repre_prop").val();
	var elementos_si = $("#elementos_si").is(':checked');
	var falta_rela = $("#falta_rela").val();
        var fechaHoraInicio = window.localStorage.getItem("fechaHoraIni");
        var usuario = window.localStorage.getItem("current_user");
        var estado = '1';
        
        var punto_cercado = $("#punto_cercado").is(':checked');
        var punto_cemento = $("#punto_cercado").is(':checked');
        var punto_adecuada = $("#punto_cercado").is(':checked');

    if (window.localStorage.getItem("editar") === 'true') {

        var executeQuery = "UPDATE post_hidrico_p SET "
				+ "vereda=?,"
				+ "predio=?,"
				+ "propietario=?,"
				+ "cc_propietario=?,"
				+ "lugar_cc_propietario=?,"
				+ "telefono=?,"
				+ "origen_coord=?,"
				+ "coordenada_e=?,"
				+ "coordenada_n=?,"
				+ "stk=?,"
				+ "sp_cercano=?,"
				+ "distancia_sp=?,"
				+ "productivo=?,"
				+ "reserva=?,"
				+ "abandonado=?,"
				+ "inactivo=?,"
				+ "sellado=?,"
				+ "monitoreo=?,"
				+ "en_campo=?,"
				+ "constructor=?,"
				+ "propietario_i=?,"
				+ "estudios=?,"
				+ "reportes=?,"
				+ "otros=?,"
				+ "jaguey=?,"
				+ "estanque_piscicola=?,"
				+ "aljibe=?,"
				+ "pozo_profundo=?,"
				+ "nacedero=?,"
				+ "info_nombre=?,"
				+ "info_direccion=?,"
				+ "info_telefono=?,"
				+ "punto_legalizado=?,"
				+ "punto_resolucion=?,"
				+ "punto_fecha=?,"
				+ "punto_caudal=?,"
				+ "invierno=?,"
				+ "verano=?,"
				+ "comienzo_invierno=?,"
				+ "comienzo_verano=?,"
				+ "ultima_lluvia=?,"
				+ "gps=?,"
				+ "nivelacion=?,"
				+ "mapa=?,"
				+ "domestico=?,"
				+ "comunitario=?,"
				+ "ganadero_sp=?,"
				+ "agricola_tipo=?,"
				+ "ganadero_n=?,"
				+ "agricola_ha=?,"
				+ "industrial=?,"
				+ "piscicola=?,"
				+ "ninguno=?,"
				+ "agua_otro=?,"
				+ "cementerio=?,"
				+ "basura_estiercol=?,"
				+ "aguas_estancadas=?,"
				+ "pozo_abandonado=?,"
				+ "residuos_solidos=?,"
				+ "residuos_peligrosos=?,"
				+ "plantas_sacrificio=?,"
				+ "lagunas_oxidacion=?,"
				+ "contamina_otro=?,"
				+ "tipo_suelo=?,"
				+ "tipo_vegetacion=?,"
				+ "aporte_agua_permanente=?,"
				+ "aporte_agua_intermitente=?,"
				+ "aporte_agua_lluvias=?,"
				+ "epoca_disminucion=?,"
				+ "espejoa_si=?,"
				+ "otro_descp=?,"
				+ "espejo_ancho=?,"
				+ "espejo_largo=?,"
				+ "espejo_profundidad=?,"
				+ "espejo_coloracion=?,"
				+ "manguera_gravedad=?,"
				+ "manguera_bombeo=?,"
				+ "canal_tierra=?,"
				+ "canal_cemento=?,"
				+ "drenaje_natural=?,"
				+ "subterraneo=?,"
				+ "agua_lluvias=?,"
				+ "aguas_otro=?,"
				+ "capta_manual=?,"
				+ "bomba_sumergible=?,"
				+ "bomba_natural=?,"
				+ "electrobomba=?,"
				+ "moto_bomba=?,"
				+ "represa=?,"
				+ "molino_viento=?,"
				+ "capta_otro=?,"
				+ "bomba_clase=?,"
				+ "bomba_modelo=?,"
				+ "bomba_potencia=?,"
				+ "bomba_profundidad=?,"
				+ "tuberiad_diametro=?,"
				+ "tuberiad_longitud=?,"
				+ "tuberiad_material=?,"
				+ "manantial_goteo=?,"
				+ "manantial_filtracion=?,"
				+ "manantial_otro=?,"
				+ "perma_perenne=?,"
				+ "perma_estacional=?,"
				+ "perma_intermitente=?,"
				+ "perma_sininfo=?,"
				+ "surgencia_kastico=?,"
				+ "surgencia_fracturas=?,"
				+ "surgencia_contacto=?,"
				+ "surgencia_otro=?,"
				+ "pozo_fecha=?,"
				+ "pozo_profundidad=?,"
				+ "pozo_diametro=?,"
				+ "pozo_diametrop=?,"
				+ "pozo_caudal=?,"
				+ "pozo_proteccion=?,"
				+ "material_concreto=?,"
				+ "material_bloque=?,"
				+ "material_pvc=?,"
				+ "material_metalico=?,"
				+ "material_otro=?,"
				+ "jaguey_profundidad=?,"
				+ "jaguey_diametro=?,"
				+ "dique_si=?,"
				+ "dique_estado=?,"
				+ "malla_si=?,"
				+ "jaguey_especies=?,"
				+ "jaguey_cant_peces=?,"
				+ "jaguey_cant_max=?,"
				+ "jaguey_tamano=?,"
				+ "jaguey_comercial=?,"
				+ "jaguey_familiar=?,"
				+ "jaguey_zona_proteccion=?,"
				+ "ph=?,"
				+ "conductividad=?,"
				+ "temperatura=?,"
				+ "sdt=?,"
				+ "muestreo_manual=?,"
				+ "muestreo_bombeo=?,"
				+ "muestreo_otro=?,"
				+ "color_incoloro=?,"
				+ "color_amarillo=?,"
				+ "color_cafe=?,"
				+ "color_otro=?,"
				+ "apariencia_clara=?,"
				+ "apariencia_turbia=?,"
				+ "apariencia_otro=?,"
				+ "olor_inolora=?,"
				+ "olor_fetida=?,"
				+ "olor_otro=?,"
				+ "topo_depresion=?,"
				+ "topo_planicie=?,"
				+ "topo_altiplanicie=?,"
				+ "topo_piedemonte=?,"
				+ "topo_ladera=?,"
				+ "topo_colina=?,"
				+ "topo_otro=?,"
				+ "geo_abanico_aluvial=?,"
				+ "geo_cauce_aluvial=?,"
				+ "geo_llanura_aluvial=?,"
				+ "geo_terraza=?,"
				+ "geo_luna=?,"
				+ "geo_dolina=?,"
				+ "geo_playa=?,"
				+ "geo_otro=?,"
				+ "unidad_geologica1=?,"
				+ "litologia1=?,"
				+ "embalse_diametro=?,"
				+ "embalse_largo=?,"
				+ "embalse_ancho=?,"
				+ "embalse_profundidad=?,"
				+ "embalse_capacidad=?,"
				+ "tanque_diametro=?,"
				+ "tanque_largo=?,"
				+ "tanque_ancho=?,"
				+ "tanque_profundidad=?,"
				+ "tanque_capacidad=?,"
				+ "alberca_diametro=?,"
				+ "alberca_largo=?,"
				+ "alberca_ancho=?,"
				+ "alberca_profundidad=?,"
				+ "alberca_capacidad=?,"
				+ "tuberia_diametro=?,"
				+ "tuberia_largo=?,"
				+ "tuberia_ancho=?,"
				+ "tuberia_profundidad=?,"
				+ "tuberia_capacidad=?,"
				+ "otro_nombre=?,"
				+ "otro_diametro=?,"
				+ "otro_largo=?,"
				+ "otro_ancho=?,"
				+ "otro_profundidad=?,"
				+ "otro_capacidad=?,"
				+ "observa=?,"
				+ "rela_repre_prop=?,"
				+ "elementos_si=?,"
				+ "falta_rela=?,"
                                +"sisagua_otro=?,"
                                +"punto_cercado=?,"
                                +"punto_cemento=?,"
                                +"punto_adecuada=?"
                + " WHERE id =" + id;

        myDB.transaction(function(transaction) {

            transaction.executeSql(executeQuery, [
				vereda,
				predio,
				propietario,
				cc_propietario,
				lugar_cc_propietario,
				telefono,
				origen_coord,
				coordenada_e,
				coordenada_n,
				stk,
				sp_cercano,
				distancia_sp,
				productivo,
				reserva,
				abandonado,
				inactivo,
				sellado,
				monitoreo,
				en_campo,
				constructor,
				propietario_i,
				estudios,
				reportes,
				otros,
				jagüey,
				estanque_piscicola,
				aljibe,
				pozo_profundo,
				nacedero,
				info_nombre,
				info_direccion,
				info_telefono,
				punto_legalizado,
				punto_resolucion,
				punto_fecha,
				punto_caudal,
				invierno,
				verano,
				comienzo_invierno,
				comienzo_verano,
				ultima_lluvia,
				gps,
				nivelacion,
				mapa,
				domestico,
				comunitario,
				ganadero_sp,
				agricola_tipo,
				ganadero_n,
				agricola_ha,
				industrial,
				piscicola,
				ninguno,
				agua_otro,
				cementerio,
				basura_estiercol,
				aguas_estancadas,
				pozo_abandonado,
				residuos_solidos,
				residuos_peligrosos,
				plantas_sacrificio,
				lagunas_oxidacion,
				contamina_otro,
				tipo_suelo,
				tipo_vegetacion,
				aporte_agua_permanente,
				aporte_agua_intermitente,
				aporte_agua_lluvias,
				epoca_disminucion,
				espejoa_si,
				otro_descp,
				espejo_ancho,
				espejo_largo,
				espejo_profundidad,
				espejo_coloracion,
				manguera_gravedad,
				manguera_bombeo,
				canal_tierra,
				canal_cemento,
				drenaje_natural,
				subterraneo,
				agua_lluvias,
				aguas_otro,
				capta_manual,
				bomba_sumergible,
				bomba_natural,
				electrobomba,
				moto_bomba,
				represa,
				molino_viento,
				capta_otro,
				bomba_clase,
				bomba_modelo,
				bomba_potencia,
				bomba_profundidad,
				tuberiad_diametro,
				tuberiad_longitud,
				tuberiad_material,
				manantial_goteo,
				manantial_filtracion,
				manantial_otro,
				perma_perenne,
				perma_estacional,
				perma_intermitente,
				perma_sininfo,
				surgencia_kastico,
				surgencia_fracturas,
				surgencia_contacto,
				surgencia_otro,
				pozo_fecha,
				pozo_profundidad,
				pozo_diametro,
				pozo_diametrop,
				pozo_caudal,
				pozo_proteccion,
				material_concreto,
				material_bloque,
				material_pvc,
				material_metalico,
				material_otro,
				jaguey_profundidad,
				jaguey_diametro,
				dique_si,
				dique_estado,
				malla_si,
				jaguey_especies,
				jaguey_cant_peces,
				jaguey_cant_max,
				jaguey_tamano,
				jaguey_comercial,
				jaguey_familiar,
				jaguey_zona_proteccion,
				ph,
				conductividad,
				temperatura,
				sdt,
				muestreo_manual,
				muestreo_bombeo,
				muestreo_otro,
				color_incoloro,
				color_amarillo,
				color_cafe,
				color_otro,
				apariencia_clara,
				apariencia_turbia,
				apariencia_otro,
				olor_inolora,
				olor_fetida,
				olor_otro,
				topo_depresion,
				topo_planicie,
				topo_altiplanicie,
				topo_piedemonte,
				topo_ladera,
				topo_colina,
				topo_otro,
				geo_abanico_aluvial,
				geo_cauce_aluvial,
				geo_llanura_aluvial,
				geo_terraza,
				geo_luna,
				geo_dolina,
				geo_playa,
				geo_otro,
				unidad_geologica1,
				litologia1,
				embalse_diametro,
				embalse_largo,
				embalse_ancho,
				embalse_profundidad,
				embalse_capacidad,
				tanque_diametro,
				tanque_largo,
				tanque_ancho,
				tanque_profundidad,
				tanque_capacidad,
				alberca_diametro,
				alberca_largo,
				alberca_ancho,
				alberca_profundidad,
				alberca_capacidad,
				tuberia_diametro,
				tuberia_largo,
				tuberia_ancho,
				tuberia_profundidad,
				tuberia_capacidad,
				otro_nombre,
				otro_diametro,
				otro_largo,
				otro_ancho,
				otro_profundidad,
				otro_capacidad,
				observa,
				rela_repre_prop,
				elementos_si,
				falta_rela,
                                sisagua_otro,
                                punto_cercado,
                                punto_cemento,
                                punto_adecuada
                                
                                
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
            var executeQuery = "INSERT INTO post_hidrico_p ("
                    + "id,"
					+ "programa_sismico,"
                    + "operadora,"
                    + "fecha,"
                    + "linea,"
					+ "acta,"
                    + "permiso,"
					+ "P_DEPTO,"
					+ "P_MUN,"
					+ "vereda,"
					+ "predio,"
					+ "propietario,"
					+ "cc_propietario,"
					+ "lugar_cc_propietario,"
					+ "telefono,"
					+ "origen_coord,"
					+ "coordenada_e,"
					+ "coordenada_n,"
					+ "stk,"
					+ "sp_cercano,"
					+ "distancia_sp,"
					+ "productivo,"
					+ "reserva,"
					+ "abandonado,"
					+ "inactivo,"
					+ "sellado,"
					+ "monitoreo,"
					+ "en_campo,"
					+ "constructor,"
					+ "propietario_i,"
					+ "estudios,"
					+ "reportes,"
					+ "otros,"
					+ "jaguey,"
					+ "estanque_piscicola,"
					+ "aljibe,"
					+ "pozo_profundo,"
					+ "nacedero,"
					+ "info_nombre,"
					+ "info_direccion,"
					+ "info_telefono,"
					+ "punto_legalizado,"
					+ "punto_resolucion,"
					+ "punto_fecha,"
					+ "punto_caudal,"
					+ "invierno,"
					+ "verano,"
					+ "comienzo_invierno,"
					+ "comienzo_verano,"
					+ "ultima_lluvia,"
					+ "gps,"
					+ "nivelacion,"
					+ "mapa,"
					+ "domestico,"
					+ "comunitario,"
					+ "ganadero_sp,"
					+ "agricola_tipo,"
					+ "ganadero_n,"
					+ "agricola_ha,"
					+ "industrial,"
					+ "piscicola,"
					+ "ninguno,"
					+ "agua_otro,"
					+ "cementerio,"
					+ "basura_estiercol,"
					+ "aguas_estancadas,"
					+ "pozo_abandonado,"
					+ "residuos_solidos,"
					+ "residuos_peligrosos,"
					+ "plantas_sacrificio,"
					+ "lagunas_oxidacion,"
					+ "contamina_otro,"
					+ "tipo_suelo,"
					+ "tipo_vegetacion,"
					+ "aporte_agua_permanente,"
					+ "aporte_agua_intermitente,"
					+ "aporte_agua_lluvias,"
					+ "epoca_disminucion,"
					+ "espejoa_si,"
					+ "otro_descp,"
					+ "espejo_ancho,"
					+ "espejo_largo,"
					+ "espejo_profundidad,"
					+ "espejo_coloracion,"
					+ "manguera_gravedad,"
					+ "manguera_bombeo,"
					+ "canal_tierra,"
					+ "canal_cemento,"
					+ "drenaje_natural,"
					+ "subterraneo,"
					+ "agua_lluvias,"
					+ "aguas_otro,"
					+ "capta_manual,"
					+ "bomba_sumergible,"
					+ "bomba_natural,"
					+ "electrobomba,"
					+ "moto_bomba,"
					+ "represa,"
					+ "molino_viento,"
					+ "capta_otro,"
					+ "bomba_clase,"
					+ "bomba_modelo,"
					+ "bomba_potencia,"
					+ "bomba_profundidad,"
					+ "tuberiad_diametro,"
					+ "tuberiad_longitud,"
					+ "tuberiad_material,"
					+ "manantial_goteo,"
					+ "manantial_filtracion,"
					+ "manantial_otro,"
					+ "perma_perenne,"
					+ "perma_estacional,"
					+ "perma_intermitente,"
					+ "perma_sininfo,"
					+ "surgencia_kastico,"
					+ "surgencia_fracturas,"
					+ "surgencia_contacto,"
					+ "surgencia_otro,"
					+ "pozo_fecha,"
					+ "pozo_profundidad,"
					+ "pozo_diametro,"
					+ "pozo_diametrop,"
					+ "pozo_caudal,"
					+ "pozo_proteccion,"
					+ "material_concreto,"
					+ "material_bloque,"
					+ "material_pvc,"
					+ "material_metalico,"
					+ "material_otro,"
					+ "jaguey_profundidad,"
					+ "jaguey_diametro,"
					+ "dique_si,"
					+ "dique_estado,"
					+ "malla_si,"
					+ "jaguey_especies,"
					+ "jaguey_cant_peces,"
					+ "jaguey_cant_max,"
					+ "jaguey_tamano,"
					+ "jaguey_comercial,"
					+ "jaguey_familiar,"
					+ "jaguey_zona_proteccion,"
					+ "ph,"
					+ "conductividad,"
					+ "temperatura,"
					+ "sdt,"
					+ "muestreo_manual,"
					+ "muestreo_bombeo,"
					+ "muestreo_otro,"
					+ "color_incoloro,"
					+ "color_amarillo,"
					+ "color_cafe,"
					+ "color_otro,"
					+ "apariencia_clara,"
					+ "apariencia_turbia,"
					+ "apariencia_otro,"
					+ "olor_inolora,"
					+ "olor_fetida,"
					+ "olor_otro,"
					+ "topo_depresion,"
					+ "topo_planicie,"
					+ "topo_altiplanicie,"
					+ "topo_piedemonte,"
					+ "topo_ladera,"
					+ "topo_colina,"
					+ "topo_otro,"
					+ "geo_abanico_aluvial,"
					+ "geo_cauce_aluvial,"
					+ "geo_llanura_aluvial,"
					+ "geo_terraza,"
					+ "geo_luna,"
					+ "geo_dolina,"
					+ "geo_playa,"
					+ "geo_otro,"
					+ "unidad_geologica1,"
					+ "litologia1,"
					+ "embalse_diametro,"
					+ "embalse_largo,"
					+ "embalse_ancho,"
					+ "embalse_profundidad,"
					+ "embalse_capacidad,"
					+ "tanque_diametro,"
					+ "tanque_largo,"
					+ "tanque_ancho,"
					+ "tanque_profundidad,"
					+ "tanque_capacidad,"
					+ "alberca_diametro,"
					+ "alberca_largo,"
					+ "alberca_ancho,"
					+ "alberca_profundidad,"
					+ "alberca_capacidad,"
					+ "tuberia_diametro,"
					+ "tuberia_largo,"
					+ "tuberia_ancho,"
					+ "tuberia_profundidad,"
					+ "tuberia_capacidad,"
					+ "otro_nombre,"
					+ "otro_diametro,"
					+ "otro_largo,"
					+ "otro_ancho,"
					+ "otro_profundidad,"
					+ "otro_capacidad,"
					+ "observa,"
					+ "rela_repre_prop,"
					+ "elementos_si,"
					+ "falta_rela,"
					+ "fecha_inicio,"
                                        + "usuario,"
                                        + "estado,"
                                        + "sisagua_otro,"
                                        + "punto_cercado,"
                                        + "punto_cemento,"
                                        + "punto_adecuada"
                                        + ") VALUES ("
                                        + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
/*10*/                                  + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                                        + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, " 
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?" 
					+ ");";
					

            transaction.executeSql(executeQuery, [id,
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
				origen_coord,
				coordenada_e,
				coordenada_n,
				stk,
				sp_cercano,
				distancia_sp,
				productivo,
				reserva,
				abandonado,
				inactivo,
				sellado,
				monitoreo,
				en_campo,
				constructor,
				propietario_i,
				estudios,
				reportes,
				otros,
				jagüey,
				estanque_piscicola,
				aljibe,
				pozo_profundo,
				nacedero,
				info_nombre,
				info_direccion,
				info_telefono,
				punto_legalizado,
				punto_resolucion,
				punto_fecha,
				punto_caudal,
				invierno,
				verano,
				comienzo_invierno,
				comienzo_verano,
				ultima_lluvia,
				gps,
				nivelacion,
				mapa,
				domestico,
				comunitario,
				ganadero_sp,
				agricola_tipo,
				ganadero_n,
				agricola_ha,
				industrial,
				piscicola,
				ninguno,
				agua_otro,
				cementerio,
				basura_estiercol,
				aguas_estancadas,
				pozo_abandonado,
				residuos_solidos,
				residuos_peligrosos,
				plantas_sacrificio,
				lagunas_oxidacion,
				contamina_otro,
				tipo_suelo,
				tipo_vegetacion,
				aporte_agua_permanente,
				aporte_agua_intermitente,
				aporte_agua_lluvias,
				epoca_disminucion,
				espejoa_si,
				otro_descp,
				espejo_ancho,
				espejo_largo,
				espejo_profundidad,
				espejo_coloracion,
				manguera_gravedad,
				manguera_bombeo,
				canal_tierra,
				canal_cemento,
				drenaje_natural,
				subterraneo,
				agua_lluvias,
				aguas_otro,
				capta_manual,
				bomba_sumergible,
				bomba_natural,
				electrobomba,
				moto_bomba,
				represa,
				molino_viento,
				capta_otro,
				bomba_clase,
				bomba_modelo,
				bomba_potencia,
				bomba_profundidad,
				tuberiad_diametro,
				tuberiad_longitud,
				tuberiad_material,
				manantial_goteo,
				manantial_filtracion,
				manantial_otro,
				perma_perenne,
				perma_estacional,
				perma_intermitente,
				perma_sininfo,
				surgencia_kastico,
				surgencia_fracturas,
				surgencia_contacto,
				surgencia_otro,
				pozo_fecha,
				pozo_profundidad,
				pozo_diametro,
				pozo_diametrop,
				pozo_caudal,
				pozo_proteccion,
				material_concreto,
				material_bloque,
				material_pvc,
				material_metalico,
				material_otro,
				jaguey_profundidad,
				jaguey_diametro,
				dique_si,
				dique_estado,
				malla_si,
				jaguey_especies,
				jaguey_cant_peces,
				jaguey_cant_max,
				jaguey_tamano,
				jaguey_comercial,
				jaguey_familiar,
				jaguey_zona_proteccion,
				ph,
				conductividad,
				temperatura,
				sdt,
				muestreo_manual,
				muestreo_bombeo,
				muestreo_otro,
				color_incoloro,
				color_amarillo,
				color_cafe,
				color_otro,
				apariencia_clara,
				apariencia_turbia,
				apariencia_otro,
				olor_inolora,
				olor_fetida,
				olor_otro,
				topo_depresion,
				topo_planicie,
				topo_altiplanicie,
				topo_piedemonte,
				topo_ladera,
				topo_colina,
				topo_otro,
				geo_abanico_aluvial,
				geo_cauce_aluvial,
				geo_llanura_aluvial,
				geo_terraza,
				geo_luna,
				geo_dolina,
				geo_playa,
				geo_otro,
				unidad_geologica1,
				litologia1,
				embalse_diametro,
				embalse_largo,
				embalse_ancho,
				embalse_profundidad,
				embalse_capacidad,
				tanque_diametro,
				tanque_largo,
				tanque_ancho,
				tanque_profundidad,
				tanque_capacidad,
				alberca_diametro,
				alberca_largo,
				alberca_ancho,
				alberca_profundidad,
				alberca_capacidad,
				tuberia_diametro,
				tuberia_largo,
				tuberia_ancho,
				tuberia_profundidad,
				tuberia_capacidad,
				otro_nombre,
				otro_diametro,
				otro_largo,
				otro_ancho,
				otro_profundidad,
				otro_capacidad,
				observa,
				rela_repre_prop,
				elementos_si,
				falta_rela,
				fechaHoraInicio,
                                usuario,
                                estado,
                                sisagua_otro,
                                punto_cercado,
                                punto_cemento,
                                punto_adecuada
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

function padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}



