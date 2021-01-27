var i = 1;
var ac= 0;
var eroImageNumber;


document.addEventListener("deviceready", onDeviceReady, false);

$(document).ready(function() {

    /*function cascadeSelect(parent, child) {
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
    });*/


});


function onDeviceReady() {

    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});
    var query = "SELECT * FROM pre_erosivo_p where id=" + window.localStorage.getItem("actaId");
	ac =  window.localStorage.getItem("actaId");

    if (window.localStorage.getItem("editar") === 'true') {
        myDB.transaction(function(transaction) {
            transaction.executeSql(query, [], function(tx, results) {
                var len = results.rows.length, i;

                for (i = 0; i < len; i++) {
					
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
					$("#origen_coord").val(results.rows.item(i).origen_coord);
					$("#coordenada_e").val(results.rows.item(i).coordenada_e);
					$("#coordenada_n").val(results.rows.item(i).coordenada_n);
					$("#stk").val(results.rows.item(i).stk);
					$("#sp_cercano").val(results.rows.item(i).sp_cercano);
					$("#distancia_sp").val(results.rows.item(i).distancia_sp);
					$("#litologia").val(results.rows.item(i).litologia);
					$("#unid_fisiografica").val(results.rows.item(i).unid_fisiografica);
					$("#otro").val(results.rows.item(i).otro);
					$("#masa_otro").val(results.rows.item(i).masa_otro);
					$("#afectacion_otro").val(results.rows.item(i).afectacion_otro);
					$("#area_baja").val(results.rows.item(i).area_baja);
					$("#area_media").val(results.rows.item(i).area_media);
					$("#area_alta").val(results.rows.item(i).area_alta);
					$("#area_muyalta").val(results.rows.item(i).area_muyalta);
					$("#morfo_ancho").val(results.rows.item(i).morfo_ancho);
					$("#morfo_long").val(results.rows.item(i).morfo_long);
					$("#morfo_prof").val(results.rows.item(i).morfo_prof);
					$("#morfo_desliza").val(results.rows.item(i).morfo_desliza);
                                        $("#unid_geologica").val(results.rows.item(i).unid_geologica);
                                        
					$("#observa").val(results.rows.item(i).observa);
					$("#fecha_inicio").val(results.rows.item(i).fecha_inicio);
					$("#usuario").val(results.rows.item(i).usuario);
					$("#fecha_modificada").val(results.rows.item(i).fecha_modificada);
					$("#estado").val(results.rows.item(i).estado);
					$("#rela_repre_prop").val(results.rows.item(i).rela_repre_prop);
					$("#estado_activo").prop('checked', JSON.parse(results.rows.item(i).estado_activo));
					$("#estado_inactivo").prop('checked', JSON.parse(results.rows.item(i).estado_inactivo));
					$("#estado_estabilizado").prop('checked', JSON.parse(results.rows.item(i).estado_estabilizado));
					$("#uni_terraza").prop('checked', JSON.parse(results.rows.item(i).uni_terraza));
					$("#uni_coluvion").prop('checked', JSON.parse(results.rows.item(i).uni_coluvion));
					$("#uni_llanura").prop('checked', JSON.parse(results.rows.item(i).uni_llanura));
					$("#uni_loma").prop('checked', JSON.parse(results.rows.item(i).uni_loma));
					$("#periodo_verano").prop('checked', JSON.parse(results.rows.item(i).periodo_verano));
					$("#periodo_invierno").prop('checked', JSON.parse(results.rows.item(i).periodo_invierno));
					$("#bosque_primario").prop('checked', JSON.parse(results.rows.item(i).bosque_primario));
					$("#bosque_secundario").prop('checked', JSON.parse(results.rows.item(i).bosque_secundario));
					$("#bosque_galeria").prop('checked', JSON.parse(results.rows.item(i).bosque_galeria));
					$("#rastrojo").prop('checked', JSON.parse(results.rows.item(i).rastrojo));
					$("#cultivos").prop('checked', JSON.parse(results.rows.item(i).cultivos));
					$("#pastos").prop('checked', JSON.parse(results.rows.item(i).pastos));
					$("#eriales").prop('checked', JSON.parse(results.rows.item(i).eriales));
					$("#rotacional").prop('checked', JSON.parse(results.rows.item(i).rotacional));
					$("#traslacional").prop('checked', JSON.parse(results.rows.item(i).traslacional));
					$("#complejo").prop('checked', JSON.parse(results.rows.item(i).complejo));
					$("#caida_rocas").prop('checked', JSON.parse(results.rows.item(i).caida_rocas));
					$("#volcamiento").prop('checked', JSON.parse(results.rows.item(i).volcamiento));
					$("#flujos_escombros").prop('checked', JSON.parse(results.rows.item(i).flujos_escombros));
					$("#flujos_lodo").prop('checked', JSON.parse(results.rows.item(i).flujos_lodo));
					$("#flujos_detritos").prop('checked', JSON.parse(results.rows.item(i).flujos_detritos));
					$("#reptacion").prop('checked', JSON.parse(results.rows.item(i).reptacion));
					$("#terraceras").prop('checked', JSON.parse(results.rows.item(i).terraceras));
					$("#laminar_leve").prop('checked', JSON.parse(results.rows.item(i).laminar_leve));
					$("#laminar_moderada").prop('checked', JSON.parse(results.rows.item(i).laminar_moderada));
					$("#laminar_severa").prop('checked', JSON.parse(results.rows.item(i).laminar_severa));
					$("#laminar_muysevera").prop('checked', JSON.parse(results.rows.item(i).laminar_muysevera));
					$("#surco_leve").prop('checked', JSON.parse(results.rows.item(i).surco_leve));
					$("#surco_moderada").prop('checked', JSON.parse(results.rows.item(i).surco_moderada));
					$("#surco_severa").prop('checked', JSON.parse(results.rows.item(i).surco_severa));
					$("#surco_muysevera").prop('checked', JSON.parse(results.rows.item(i).surco_muysevera));
					$("#carcavas_leve").prop('checked', JSON.parse(results.rows.item(i).carcavas_leve));
					$("#carcavas_moderada").prop('checked', JSON.parse(results.rows.item(i).carcavas_moderada));
					$("#carcavas_severa").prop('checked', JSON.parse(results.rows.item(i).carcavas_severa));
					$("#carcavas_muysevera").prop('checked', JSON.parse(results.rows.item(i).carcavas_muysevera));
					$("#socava_leve").prop('checked', JSON.parse(results.rows.item(i).socava_leve));
					$("#socava_moderada").prop('checked', JSON.parse(results.rows.item(i).socava_moderada));
					$("#socava_severa").prop('checked', JSON.parse(results.rows.item(i).socava_severa));
					$("#socava_muysevera").prop('checked', JSON.parse(results.rows.item(i).socava_muysevera));
					$("#otro_leve").prop('checked', JSON.parse(results.rows.item(i).otro_leve));
					$("#otro_moderada").prop('checked', JSON.parse(results.rows.item(i).otro_moderada));
					$("#otro_severa").prop('checked', JSON.parse(results.rows.item(i).otro_severa));
					$("#otro_muysevera").prop('checked', JSON.parse(results.rows.item(i).otro_muysevera));
					$("#pend_baja").prop('checked', JSON.parse(results.rows.item(i).pend_baja));
					$("#pend_media").prop('checked', JSON.parse(results.rows.item(i).pend_media));
					$("#pend_alta").prop('checked', JSON.parse(results.rows.item(i).pend_alta));
					$("#pend_muyalta").prop('checked', JSON.parse(results.rows.item(i).pend_muyalta));
					$("#aflorante").prop('checked', JSON.parse(results.rows.item(i).aflorante));
					$("#no_aflorante").prop('checked', JSON.parse(results.rows.item(i).no_aflorante));
					$("#customActa").val(results.rows.item(i).custom_acta);
					$("#linea").val(results.rows.item(i).linea);
										$("#pagDe").val(results.rows.item(i).pag_de);

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
            transaction.executeSql('SELECT MAX(id) as id FROM pre_erosivo_p', [], function(tx, results) {
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
                        + "         "
                        + "    }"
                        + "    .encabezado {"
                        + "   background-color: #dd0806;"
                        + "   color: #FFFFFF;"
                        + "   text-align:center;"
                        + "    }"
                        + "  .encabezado2 {"
                        + "   background-color: #dd0806;"
                        + "   color: #FFFFFF;"
                        + "   text-align:right;"
                        + "   	font-size: 11px;"
                        + "    }"
                        + "    .celda{"
                        + "   border: 1px solid black;"
                        + "    }"
                        + "    table {"
                        + "   border-collapse: collapse;"
                        + "   border-top: none;	"
                        + "    }"
                        + "    td{"
                        + "   padding-left:3px"
                        + "    }"
                        + "    .tituloFila{"
                        + "   width: 200px;	"
                        + "    }"
                        + "    .tituloFila2{"
                        + "   width: 150px;	"
                        + "   font-weight: bold;"
                        + "    }"
                        + "    .tituloFila3{"
                        + "          width: 12%;	"
                        + "    }"
                        + "    .tag {"
                        + "         text-align:left;"
                        + "         bottom:0;"
                        + "         position:relative;"
                        + "         top: 0px;"
                        + "         background-color: white; "
                        + "         left:0;"
                        + "         width:200px; }"
						+ ".infoTable td{ height: 28px };"
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
                        + " height:600px;"
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
                        + "</style>"
			+ "</head>"
			+ "<body>"                
                        + " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
                        + " <tbody>"
                        + " <tr><td class='encabezado2' colspan='4'>Pagina 1 de "+$("#pagDe").val()+" &nbsp&nbsp</td></tr>"
                        + "  <tr>"
                        + "  <td colspan='4'>"
                        + "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                        + "    <tbody>"
                        + "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
                        + "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA PRE REGISTRO PROCESO EROSIVO</td>"
						+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
                        + "   </tr>"
							+ "   <tr>"
							+ "    <td colspan='4'>"
							+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
							+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-08</td>"					
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
                        + "  <td style='width: 12.5%'> "+  ($("#fecha").val()) +"</td>"
                        + "  <td style='width: 12.5%'>Línea</td>"
                        + "  <td style='width: 12.5%'>  " + ($("#linea").val())+" </td>"
                        + "  <td style='width: 12.5%'>Acta Nº.</td>"
                        + "  <td style='width: 12.5%'>  PRE-APE-" + $("#customActa").val() +" </td>"
                        + "   </tr>    "
                        + "  </tbody>"
                        + "</table>"

			+ "<table width='100%' border='1' cellspacing='0' cellpadding='0' class='infoTable'>"
			+ "   <tbody>"
			+ "       <tr>"
			+ "    <td style='width:30%' class='encabezado' colspan='2'><b>1. LOCALIZACIÓN</b></td>"
			+ "    <td style='width:30%' class='encabezado' colspan='2'><b>2. UBICACIÓN</b></td>"
			+ "    <td style='width:20%' class='encabezado' colspan='2'><b>3. ESTADO P. EROSIVO</b></td>"
			+ "    <td style='width:20%' class='encabezado' colspan='2'><b>4. UNIDAD GEOLÓGICA</b></td>"
			+ "       </tr> "
			+ "      <tr>"
			+ "    <td style='width:15%'>Departamento:</td>"
			+ "    <td style='width:15%'>  " + ($("#P_DEPTO option:selected").text())+" </td>"
			+ "    <td style='width:15%'>Origen de coord:</td>"
			+ "    <td style='width:15%'> " + ($("#origen_coord").val())+" </td>"
			+ "    <td style='width:10%'>Activo:</td>"
			+ "     <td style='width:10%,text-align:center'> " + ($("#estado_activo").is(':checked') ? "X" : "") + " </td>"
			+ "       <td style='width:20%' colspan='2'> " + ($("#unid_geologica").val())+" </td>  "
			+ "       </tr>"
			+ "<tr>"
			+ "    <td style='width:15%'>Municipio:</td>"
			+ "    <td style='width:15%'>  " + ($("#P_MUN option:selected").text()) +" </td>"
			+ "    <td style='width:15%'>Coordenada E:</td>"
			+ "    <td style='width:15%'>	" + ($("#coordenada_e").val())+"</td>"
			+ "    <td style='width:10%'>Inactivo:</td>"
			+ "     <td style='width:10%,text-align:center'> " + ($("#estado_inanctivo").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:20%' class='encabezado' colspan='2'><b>5. LITOLOGÍA</b></td>"
			+ "     </tr>"
			+ "<tr>"
			+ "    <td style='width:15%'>Vereda:</td>"
			+ "    <td style='width:15%'>  " + ($("#vereda").val())+" </td>"
			+ "    <td style='width:15%'>Coordenada N:</td>"
			+ "    <td style='width:15%'>	" + ($("#coordenada_n").val())+"</td>"
			+ "    <td style='width:10%'>Estabilizado:</td>"
			+ "     <td style='width:10%,text-align:center'> " + ($("#estado_estabilizado").is(':checked') ? "X" : "") + " </td>"
			+ "       <td style='width:20%' colspan='2'> " + ($("#litologia").val())+" </td>"
			+ "     </tr>"
			+ "<tr>"
			+ "    <td style='width:15%'>Propietario:</td>"
			+ "    <td style='width:15%'>  " + ($("#propietario").val())+" </td>"
			+ "    <td style='width:15%'>Stk:</td>"
			+ "    <td style='width:15%'>	" + ($("#stk").val())+"</td>"
			+ "    <td style='width:40%' class='encabezado' colspan='4'><b>6. UNIDAD FISIOGRAFICA</b></td>"
			+ "   </tr>"
			+ "<tr>"
			+ "    <td style='width:15%'>Predio:</td>"
			+ "    <td style='width:15%'>  " + ($("#predio").val())+" </td>"
			+ "    <td style='width:15%'>Vp. cercano:</td>"
			+ "    <td style='width:15%'>	" + ($("#sp_cercano").val())+"</td>"
			+ "    <td style='width:10%'>Terraza:</td>"
			+ "     <td style='width:10%,text-align:center'>   " + ($("#uni_terraza").is(':checked') ? "X" : "") + " </td>"
			+ "       <td style='width:10%,text-align:center'>Llanura aluvial:</td>"
			+ "     <td style='width:10%,text-align:center'>  " + ($("#uni_llanura").is(':checked') ? "X" : "") +" </td>     "
			+ "       </tr>"
			+ "<tr>"
			+ "    <td style='width:15%'>Teléfono:</td>"
			+ "    <td style='width:15%'>  " + ($("#telefono").val())+" </td>"
			+ "    <td style='width:15%'>Distancia Vp:</td>"
			+ "    <td style='width:15%'>	" + ($("#distancia_sp").val())+"</td>"
			+ "    <td style='width:10%'>Coluvión:</td>"
			+ "     <td style='width:10%,text-align:center'>  " + ($("#uni_coluvion").is(':checked') ? "X" : "") +" </td>"
			+ "       <td style='width:10%'>Loma o colina:</td>"
			+ "     <td style='width:10%,text-align:center'>  " + ($("#uni_loma").is(':checked') ? "X" : "") +" </td>     "
			+ "       </tr>"
			+ "     </tbody>"
			+ "</table>"
			+ "       <table width='100%' border='1' cellspacing='0' cellpadding='0' class='infoTable'>"
			+ "   <tbody>"
			+ "       <tr>"
			+ "    <td style='width:50%' class='encabezado'><b>7. DIAGRAMA DE LINEA"
			+ "       </b></td>"
			+ "     <td style='width:20%' class='encabezado' colspan='2'><b>8. PERIODO CLIMATICO"
			+ "       </b></td>"
			+ "     <td style='width:30%' class='encabezado' colspan='3'><b>9. TIPO DE REMOCIÓN EN MASA"
			+ "       </b></td>"
			+ "       </tr>"
			+ "        <tr>"
			+ "    <td style='width:50%' rowspan='11'><img  src='file:///storage/emulated/0/Download/infraLine.png' style='width: 100%;  height: auto;'></td>"
			+ "    <td style='width:20%;text-align:center' colspan='2'>Verano:  " + ($("#periodo_verano").is(':checked') ? "X" : "")+" </td>"
			+ "    <td style='width:12%' rowspan='4'>Deslizamiento</td>"
			+ "    <td style='width:12%'>Rotacional:</td>"
			+ "    <td style='width:6%;text-align:center'> " + ($("#rotacional").is(':checked') ? "X" : "") + "</td>"
			+ "   </tr>"
			+ "<tr>"
			+ "    <td style='width:20%;text-align:center' colspan='2'>Invierno:  " + ($("#periodo_invierno").is(':checked') ? "X" : "")+" </td>"
			+ "    <td style='width:12%'>Traslacional:</td>"
			+ "    <td style='width:6%;text-align:center'> " + ($("#traslacional").is(':checked') ? "X" : "") + "</td>"
			+ "   </tr>"
			+ "<tr>"
			+ "    <td style='width:20%' class='encabezado' colspan='2'><b>10. USOS DEL SUELO</b></td>"
			+ "    <td style='width:12%'>Complejo:</td>"
			+ "    <td style='width:6%;text-align:center'> " + ($("#complejo").is(':checked') ? "X" : "") + " "
			+ "</td>"
			+ "   </tr>"
			+ "<tr>"
			+ "    <td style='width:16%'>Bosque primario</td>"
			+ "    <td style='width:4%;text-align:center'> " + ($("#bosque_primario").is(':checked') ? "X" : "") + "</td>"
			+ "    <td style='width:12%'>Otro:</td>"
			+ "    <td style='width:6%'> " + ($("#masa_otro").val())+"</td>"
			+ "   </tr>"
			+ " <tr>"
			+ "    <td style='width:16%'>Bosque secundario</td>"
			+ "    <td style='width:4%;text-align:center'> " + ($("#bosque_secundario").is(':checked') ? "X" : "") + " "
			+ "</td>"
			+ "    <td style='width:24%' colspan='2'>Caida de rocas y/o detritos</td>"
			+ "    <td style='widht:6%;text-align:center'> " + ($("#caida_rocas").is(':checked') ? "X" : "") + " "
			+ "</td>"
			+ "   </tr>"
			+ "<tr>"
			+ "    <td style='width:16%'>Bosque de galería</td>"
			+ "    <td style='width:4%;text-align:center'> " + ($("#bosque_galeria").is(':checked') ? "X" : "") + " "
			+ "</td>"
			+ "    <td style='width:24%' colspan='2'>Volcamiento</td>"
			+ "    <td style='widht:6%;text-align:center'> " + ($("#volcamiento").is(':checked') ? "X" : "") + " "
			+ "</td>"
			+ "   </tr>"
			+ "<tr>"
			+ "    <td style='width:16%'>Rastrojo</td>"
			+ "    <td style='width:4%;text-align:center'> " + ($("#rastrojo").is(':checked') ? "X" : "") + " "
			+ "</td>"
			+ "    <td style='width:12%' rowspan='3'>Flujos</td>"
			+ "    <td style='width:12%'>Escombros:</td>"
			+ "    <td style='width:6%;text-align:center'> " + ($("#flujos_escombros").is(':checked') ? "X" : "") + " "
			+ "</td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:16%'>Cultivos</td>"
			+ "    <td style='width:4%;text-align:center'> " + ($("#cultivos").is(':checked') ? "X" : "") + " "
			+ "</td>"
			+ "    <td style='width:12%'>Lodo:</td>"
			+ "    <td style='width:6%;text-align:center'> " + ($("#flujos_lodo").is(':checked') ? "X" : "") + " "
			+ "</td>"
			+ "   </tr>"
			+ "<tr>"
			+ "    <td style='width:16%'>Pastos</td>"
			+ "    <td style='width:4%;text-align:center'> " + ($("#pastos").is(':checked') ? "X" : "") + " "
			+ "</td>"
			+ "    <td style='width:12%'>Detrítos:</td>"
			+ "    <td style='width:6%;text-align:center'> " + ($("#flujos_detritos").is(':checked') ? "X" : "") + " "
			+ "</td>"
			+ "   </tr>"
			+ "<tr>"
			+ "    <td style='width:16%'>Eriales</td>"
			+ "    <td style='width:4%;text-align:center'> " + ($("#eriales").is(':checked') ? "X" : "") + " "
			+ "</td>"
			+ "    <td style='width:24%' colspan='2'>Reptación</td>"
			+ "    <td style='width:6%;text-align:center'> " + ($("#reptacion").is(':checked') ? "X" : "") + " "
			+ "</td>"
			+ "   </tr>"
			+ " <tr>"
			+ "    <td style='width:16%'>Otro:</td>"
			+ "    <td style='width:4%'> " + ($("#otro").val())+" "
			+ "</td>"
			+ "    <td style='width:24%' colspan='2'>Terracetas o pata de vaca</td>"
			+ "    <td style='width:6%;text-align:center'> " + ($("#terraceras").is(':checked') ? "X" : "") + " "
			+ "</td>"
			+ "   </tr>"
			+ "</tbody>"
			+ "</table>"
			+ "  <table width='100%' border='1' cellspacing='0' cellpadding='0' class='infoTable'>"
			+ "   <tbody>"
			+ "       <tr>"
			+ "    <td style='width:50%' class='encabezado'><b>11. ESQUEMA GEOMORFOLÓGICO (EN PLANTA)"
			+ "       </b></td>"
			+ "     <td style='width:10%' class='encabezado' rowspan='2'><b>12. TIPO EROSIÓN SUPERFICIAL"
			+ "       </b></td>"
			+ "     <td style='width:40%' class='encabezado' colspan='4'><b>13. NIVEL DE AFECTACIÓN"
			+ "       </b></td>"
			+ "       </tr>"
			+ "       <tr>"
			+ "    <td style='width:50%' rowspan='11'><div id='content' style='height:250px'><img  src='file:///storage/emulated/0/Download/rosa.PNG' width='60' height='60' ></div></td>"
			+ "    <td style='width:10%' class='encabezado'>Leve</td>"
			+ "    <td style='width:10%' class='encabezado'>Moderada</td>"
			+ "    <td style='width:10%' class='encabezado'>Severa</td>"
			+ "    <td style='width:10%' class='encabezado'>Muy severa</td>"
			+ "   </tr>"
			+ "<tr>"
			+ "    <td style='width:10%'>Laminar:</td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#laminar_leve").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#laminar_moderada").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#laminar_severa").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#laminar_muysevera").is(':checked') ? "X" : "") + " </td>"
			+ " </tr>   "
			+ " <tr>"
			+ "    <td style='width:10%'>En surcos:</td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#surco_leve").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#surco_moderada").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#surco_severa").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#surco_muysevera").is(':checked') ? "X" : "") + " </td>"
			+ " </tr>   "
			+ " <tr>"
			+ "    <td style='width:10%'>En cárcavas:</td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#carcavas_leve").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#carcavas_moderada").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#carcavas_severa").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#carcavas_muysevera").is(':checked') ? "X" : "") + " </td>"
			+ " </tr>   "
			+ " <tr>"
			+ "    <td style='width:10%'>Socavamiento:</td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#socavamiento_leve").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#socavamiento_moderada").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#socavamiento_severa").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#socavamiento_muysevera").is(':checked') ? "X" : "") + " </td>"
			+ " </tr>   "
			+ " <tr>"
			+ "    <td style='width:10%'> " + ($("#afectacion_otro").val())+" </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#otro_leve").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#otro_moderada").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#otro_severa").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#otro_muysevera").is(':checked') ? "X" : "") + " </td>"
			+ " </tr>   "
			+ " 		<tr>"
			+ "    <td style='width:30%' class='encabezado' colspan='3'><b>14. PENDIENTE DEL TERRENO"
			+ "       </b></td>"
			+ "     <td style='width:20%' class='encabezado' colspan='2'><b>15. AREA Aprox. M2"
			+ "       </b></td>"
			+ "       </tr>"
			+ " <tr>"
			+ "    <td style='width:10%'>Baja:</td>"
			+ "    <td style='width:10%'>1° - 15°</td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#pend_baja").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:20%' colspan='2'> " + ($("#area_baja").val())+" </td> 							  </tr>  "
			+ " <tr>"
			+ "    <td style='width:10%'>Media:</td>"
			+ "    <td style='width:10%'>15° - 30°</td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#pend_media").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:20%' colspan='2'> " + ($("#area_media").val())+" </td> 							  </tr>"
			+ "<tr>"
			+ "    <td style='width:10%'>Alta:</td>"
			+ "    <td style='width:10%'>30° - 45°</td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#pend_alta").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:20%' colspan='2'> " + ($("#area_alta").val())+" </td> 							  </tr>"
			+ "<tr>"
			+ "    <td style='width:10%'>Muy Alta:</td>"
			+ "    <td style='width:10%'>&gt; 45°</td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#pend_muyalta").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:20%' colspan='2'> " + ($("#area_muyalta").val())+" </td> 							  </tr>"
			+ "      </tbody>"
			+ "</table><table width='100%' border='1' cellspacing='0' cellpadding='0'>"
			+ "   <tbody>"
			+ "       <tr>"
			+ "    <td style='width:50%' class='encabezado'><b>16. ESQUEMA GEOMORFOLÓGICO (PERFIL)"
			+ "       </b></td>"
			+ "     <td style='width:20%' class='encabezado' rowspan='2' colspan='2'><b>17. NIVEL FREATICO"
			+ "       </b></td>"
			+ "     <td style='width:30%' class='encabezado' colspan='4'><b>18. MORFOMETRIA"
			+ "       </b></td>"
			+ "       </tr>"
			+ "<tr>"
			+ "    <td style='width:50%' rowspan='11'><div id='content'  style='height:250px'></div></td>"
			+ "    <td style='width:20%'>Ancho:</td>"
			+ "    <td style='width:8%'> " + ($("#morfo_ancho").val())+" </td>"
			+ "    <td style='width:2%'>m</td>"
			+ "       </tr>"
			+ "<tr>"
			+ "    <td style='width:10%'>Aflorante</td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#aflorante").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:20%'>Longitud:</td>"
			+ "    <td style='width:8%'> " + ($("#morfo_long").val())+" </td>"
			+ "    <td style='width:2%'>m</td>"
			+ "       </tr>"
			+ "<tr>"
			+ "    <td style='width:20%' colspan='2'></td>"
			+ "    <td style='width:20%'>Profundidad aproximada:</td>"
			+ "    <td style='width:8%'> " + ($("#morfo_prof").val())+" </td>"
			+ "    <td style='width:2%'>m</td>"
			+ "       </tr>"
			+ "<tr>"
			+ "    <td style='width:10%'>No Aflorante</td>"
			+ "    <td style='width:10%,text-align:center'> " + ($("#no_aflorante").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:20%'>Desplazamiento:</td>"
			+ "    <td style='width:8%'> " + ($("#morfo_desliza").val())+" </td>"
			+ "    <td style='width:2%'>m</td>"
			+ "       </tr>"
			+ "   <tr>"
			+ "    <td style='width:50%' class='encabezado' colspan='5'><b> OBSERVACIONES"
			+ "       </b></td>"
			+ "      </tr>"
			+ "<tr>"
			+ "    <td style='height: 100px;vertical-align: top;padding:5px;text-align: justify' colspan='5'>  " + ($("#observa").val())+" </td>"
			+ "       </tr>"
			+ "<tr>"
			+ "    <td style='width:50%' colspan='5'>Relación entre representante y propietario:  " + ($("#rela_repre_prop").val())+" </td></tr>"
			+ "  </tbody></table>"
			+ "<p style='page-break-after: always;'> "
                
                        + " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
                        + " <tbody>"
                        + " <tr><td class='encabezado2' colspan='4'>Pagina 2 de "+$("#pagDe").val()+" &nbsp&nbsp</td></tr>"
						+ "  <tr>"
                        + "  <td colspan='4'>"
                        + "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                        + "    <tbody>"
                        + "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
                        + "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA PRE REGISTRO PROCESO EROSIVO</td>"
						+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
                        + "   </tr>"
							+ "   <tr>"
							+ "    <td colspan='4'>"
							+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
							+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-08</td>"					
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
                        + "  <td style='width: 12.5%'> "+  ($("#fecha").val()) +"</td>"
                        + "  <td style='width: 12.5%'>Línea</td>"
                        + "  <td style='width: 12.5%'>  " + ($("#linea").val())+" </td>"
                        + "  <td style='width: 12.5%'>Acta Nº.</td>"
                        + "  <td style='width: 12.5%'>  PRE-APE-" + $("#customActa").val() +" </td>"

                        + "   </tr>    "
                        + "  </tbody>"
                        + "</table>"
                 
			+ " <table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;'>"
			+ "   <tbody>"
			+ "       <tr>"
			+ "    <td class='encabezado' colspan='5'><b>FIRMAS DE APROBACIÓN</b></td>"
			+ "       </tr>"
			+ "<tr>"
			+ "    <td width='100%' colspan='4'><p></p>Los presentes están de acuerdo con la evaluación efectuada y en constancia firman siendo las  _______ horas del día ______ del mes  de  ______________ de 201___.</td></tr>"
                        + "<tr>"
                        + " <td>AVISO DE PRIVACIDAD PARA RECOLECCIÓN DE DATOS PERSONALES</td> "
                        + "</tr>"
                        + "<tr>"
 						+ " <td style='text-align: justify;font-size:11px;'>En mi calidad de titular de información personal, actuando libre y voluntariamente, al diligenciar los datos aquí solicitados, autorizo a PETROSEISMIC SERVICES S.A, ubicado en la Carrera 23 # 102 - 53 de la ciudad de Bogotá, Teléfono: +57 1 743 3650 , Movíl: +57 3114524265. Entiendo que las políticas para el tratamiento de mi información personal (Ley 1581/2012), así como el procedimiento para elevar cualquier solicitud, queja o reclamo al correo electrónico contactol@petroseismicservices.com, para que de forma directa o a través de terceros realice el tratamiento de mi información personal, el cual consiste en recolectar, almacenar, usar, transferir y administrar mis datos personales, para el acta de proceso erosivo.</td> "
                       
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
                        +" <tr style='height:50px;vertical-align:bottom'>"
                        + "     <td>Teléfono_______________</td><td>C.C #_____________ de _________</td>"
                        + " </tr>"  
                        + "</table>"
						+ "<table width='100%'>"
						+ " <tr>"
						+ "     <td style='height:100px;vertical-align:bottom;'>____________________________________</td><td></td><td style='height:100px;vertical-align:bottom;'>___________________________________</td><td  style='font-size:8px;vertical-align:bottom;text-align:center' rowspan='3'></td>"
						+ " </tr>"
						+" <tr>"
						+ "     <td>NOMBRE DEL EVALUADOR PETROSEISMIC SERVICES</td><td></td><td>FIRMA DEL EVALUADOR PETROSEISMIC SERVICES</td>"
						+ "</tr>"
						+" <tr>"
						+ "     <td>Teléfono_______________</td><td></td><td>C.C #_____________ de _________</td>"
						+ " </tr>"  
						+" <tr>"
						+ "     <td></td><td></td><td>TP_______________</td>"
						+ " </tr>"  						
						+" <tr>"
						+ "     <td style='height:100px;vertical-align:bottom;'> ____________________________________</td><td></td><td colspan='2' style='height:100px;vertical-align:bottom;'>___________________________________</td>"
						+ " </tr>"
						+" <tr>"
						+ "     <td>NOMBRE DEL COORDINADOR DE ACTAS PETROSEISMIC SERVICES</td><td></td><td colspan='2'>FIRMA DEL COORDINADOR DE ACTAS PETROSEISMIC SERVICES</td>"
						+ "</tr>"
						+" <tr>"
						+ "     <td></td><td></td><td colspan='2'>C.C #_____________ de _________</td>"
						+ " </tr>"
						+" <tr>"
						+ "     <td></td><td></td><td>TP_______________</td>"
						+ " </tr>"  
						+" <tr>"
						+ "     <td style='height:100px;vertical-align:bottom;'>____________________________________</td><td></td><td colspan='2' style='height:100px;vertical-align:bottom;'>___________________________________</td>"
						+ " </tr>"					
						+" <tr>"
						+ "     <td style='height:100px;vertical-align:bottom;'>____________________________________</td><td></td><td colspan='2' style='height:100px;vertical-align:bottom;'>___________________________________</td>"
						+ " </tr>"
						+" <tr>"
						+ "     <td>NOMBRE DEL INTERVENTOR AMBIENTAL</td><td></td><td colspan='2'>FIRMA DEL INTERVENTOR AMBIENTAL</td>"
						+ "</tr>"
						+" <tr>"
						+ "     <td></td><td></td><td colspan='2'>C.C #_____________ de _________</td>"
						+ " </tr>"	
						
						+" <tr>"
						+ "     <td colspan='4' style='height:100px;vertical-align:bottom;'>FECHA DE APROBACIÓN________________</td>"
						+ "</tr>"
						+ "</table>"

                        + "<p style='page-break-after: always;'> "  


						                        + " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
                        + " <tbody>"
                        + " <tr><td class='encabezado2' colspan='4'>Pagina 3 de "+$("#pagDe").val()+" &nbsp&nbsp</td></tr>"
						+ "  <tr>"
                        + "  <td colspan='4'>"
                        + "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                        + "    <tbody>"
                        + "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
                        + "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA PRE REGISTRO PROCESO EROSIVO</td>"
						+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
                        + "   </tr>"
							+ "   <tr>"
							+ "    <td colspan='4'>"
							+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
							+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-08</td>"					
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
                        + "  <td style='width: 12.5%'> "+  ($("#fecha").val()) +"</td>"
                        + "  <td style='width: 12.5%'>Línea</td>"
                        + "  <td style='width: 12.5%'>  " + ($("#linea").val())+" </td>"
                        + "  <td style='width: 12.5%'>Acta Nº.</td>"
                        + "  <td style='width: 12.5%'>  PRE-APE-" + $("#customActa").val() +" </td>"

                        + "   </tr>    "
                        + "  </tbody>"
                        + "</table>"

						
                        + "     <table width='100%' border='1' cellspacing='0' cellpadding='0' >"
                        + "       <tbody>"
                        + "            <tr>"
                        + "              <td class='rotate'><div>PRE-APE-"+(padDigits($("#customActa").val(), 3))+"-02</div></td>"
                        + "              <td  style='width:380px;'><img src='"+ window.localStorage.getItem('imgURL') +"pre-ero-" + ac +"-"+ 2 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
                        + "              <td  class='rotate'><div>PRE-APE-"+(padDigits($("#customActa").val(), 3))+"-01</div></td>"
                        + "              <td  style='width:380px;'><img src='"+ window.localStorage.getItem('imgURL') +"pre-ero-" + ac +"-"+ 1 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
                        + "            </tr>"
                        + "            <tr>"
                        + "              <td class='rotate'><div>PRE-APE-"+(padDigits($("#customActa").val(), 3))+"-04</div></td>"
                        + "              <td  style='width:380px;'><img src='"+ window.localStorage.getItem('imgURL') +"pre-ero-" + ac +"-"+ 4 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
                        + "              <td  class='rotate' ><div>PRE-APE-"+(padDigits($("#customActa").val(), 3))+"-03</div></td>"
                        + "              <td  style='width:380px;'><img src='"+ window.localStorage.getItem('imgURL') +"pre-ero-" + ac +"-"+ 3 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
                        + "            </tr>"
                        + "         </tbody>"
                        + "       </table></p>"	
                        + "     <p style='page-break-after: always;'> "
						
						
						                        + " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
                        + " <tbody>"
                        + " <tr><td class='encabezado2' colspan='4'>Pagina 4 de "+$("#pagDe").val()+" &nbsp&nbsp</td></tr>"
						+ "  <tr>"
                        + "  <td colspan='4'>"
                        + "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                        + "    <tbody>"
                        + "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
                        + "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA PRE REGISTRO PROCESO EROSIVO</td>"
						+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
                        + "   </tr>"
							+ "   <tr>"
							+ "    <td colspan='4'>"
							+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
							+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-08</td>"					
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
                        + "  <td style='width: 12.5%'> "+  ($("#fecha").val()) +"</td>"
                        + "  <td style='width: 12.5%'>Línea</td>"
                        + "  <td style='width: 12.5%'>  " + ($("#linea").val())+" </td>"
                        + "  <td style='width: 12.5%'>Acta Nº.</td>"
                        + "  <td style='width: 12.5%'>  PRE-APE-" + $("#customActa").val() +" </td>"

                        + "   </tr>    "
                        + "  </tbody>"
                        + "</table>"
						
						
						
                        + "       <table width='100%' border='1' cellspacing='0' cellpadding='0'  >"
                        + "       <tbody>"
                        + "            <tr>"
                        + "            <tr>"
                        + "              <td class='rotate'><div>PRE-APE-"+(padDigits($("#customActa").val(), 3))+"-06</div></td>"
                        + "              <td  style='width:380px;'><img src='"+ window.localStorage.getItem('imgURL') +"pre-ero-" + ac +"-"+ 6 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
                        + "              <td  class='rotate'><div>PRE-APE-"+(padDigits($("#customActa").val(), 3))+"-05</div></td>"
                        + "              <td  style='width:380px;'><img src='"+ window.localStorage.getItem('imgURL') +"pre-ero-" + ac +"-"+ 5 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
                        + "            </tr>"
                        + "            <tr>"
                        + "              <td class='rotate'><div>PRE-APE-"+(padDigits($("#customActa").val(), 3))+"-07</div></td>"
                        + "              <td  style='width:380px;'><img src='"+ window.localStorage.getItem('imgURL') +"pre-ero-" + ac +"-"+ 7 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
                        + "              <td  class='rotate'><div>PRE-APE-"+(padDigits($("#customActa").val(), 3))+"-08</div></td>"
                        + "              <td  style='width:380px;'><img src='"+ window.localStorage.getItem('imgURL') +"pre-ero-" + ac +"-"+ 8 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
                        + "            </tr>"
                        + "         </tbody>"
                        + "       </table></p>"
			+ "   </body></html>",
            documentSize: 'A4',
            landscape: 'portrait',
            type: 'share',
			fileName: 'pre-ero-'+ $("#acta").val()
        }, this.success, this.failure );
}

function capturePhoto(imageNumber) {
    eroImageNumber = imageNumber;
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
    var newFileName = 'pre-ero-' + ac +'-'+ eroImageNumber + ".jpg";
    i++;
    
    var dir = '/';
    window.localStorage.setItem('pre-ero-' + ac +'-'+ eroImageNumber,'');

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
    //The folder is created if doesn't exist

    fileSys.root.getDirectory( dir ,
                    {create:false, exclusive: true},
                    function(directory) {
						window.localStorage.setItem("imgURL", directory.nativeURL);
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
	var album = 'pre-ero-' + ac;
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
	var programa_sismico = window.localStorage.getItem("programa_sismico");
    var operadora = window.localStorage.getItem("operadora");
    var fecha = $("#fecha").val();
    var linea = $("#linea").val();	
	var acta = $("#acta").val();
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
	var litologia = $("#litologia").val();
	var unid_fisiografica = $("#unid_fisiografica").val();
	var otro = $("#otro").val();
	var masa_otro = $("#masa_otro").val();
	var afectacion_otro = $("#afectacion_otro").val();
	var area_baja = $("#area_baja").val();
	var area_media = $("#area_media").val();
	var area_alta = $("#area_alta").val();
	var area_muyalta = $("#area_muyalta").val();
	var morfo_ancho = $("#morfo_ancho").val();
	var morfo_long = $("#morfo_long").val();
	var morfo_prof = $("#morfo_prof").val();
	var morfo_desliza = $("#morfo_desliza").val();
        var unid_geologica = $("#unid_geologica").val();
	var observa = $("#observa").val();
	var fecha_inicio = $("#fecha_inicio").val();
	var usuario = $("#usuario").val();
	var fecha_modificada = $("#fecha_modificada").val();
	var estado = $("#estado").val();
	var rela_repre_prop = $("#rela_repre_prop").val();
	var estado_activo = $("#estado_activo").is(':checked');
	var estado_inactivo = $("#estado_inactivo").is(':checked');
	var estado_estabilizado = $("#estado_estabilizado").is(':checked');
	var uni_terraza = $("#uni_terraza").is(':checked');
	var uni_coluvion = $("#uni_coluvion").is(':checked');
	var uni_llanura = $("#uni_llanura").is(':checked');
	var uni_loma = $("#uni_loma").is(':checked');
	var periodo_verano = $("#periodo_verano").is(':checked');
	var periodo_invierno = $("#periodo_invierno").is(':checked');
	var bosque_primario = $("#bosque_primario").is(':checked');
	var bosque_secundario = $("#bosque_secundario").is(':checked');
	var bosque_galeria = $("#bosque_galeria").is(':checked');
	var rastrojo = $("#rastrojo").is(':checked');
	var cultivos = $("#cultivos").is(':checked');
	var pastos = $("#pastos").is(':checked');
	var eriales = $("#eriales").is(':checked');
	var rotacional = $("#rotacional").is(':checked');
	var traslacional = $("#traslacional").is(':checked');
	var complejo = $("#complejo").is(':checked');
	var caida_rocas = $("#caida_rocas").is(':checked');
	var volcamiento = $("#volcamiento").is(':checked');
	var flujos_escombros = $("#flujos_escombros").is(':checked');
	var flujos_lodo = $("#flujos_lodo").is(':checked');
	var flujos_detritos = $("#flujos_detritos").is(':checked');
	var reptacion = $("#reptacion").is(':checked');
	var terraceras = $("#terraceras").is(':checked');
	var laminar_leve = $("#laminar_leve").is(':checked');
	var laminar_moderada = $("#laminar_moderada").is(':checked');
	var laminar_severa = $("#laminar_severa").is(':checked');
	var laminar_muysevera = $("#laminar_muysevera").is(':checked');
	var surco_leve = $("#surco_leve").is(':checked');
	var surco_moderada = $("#surco_moderada").is(':checked');
	var surco_severa = $("#surco_severa").is(':checked');
	var surco_muysevera = $("#surco_muysevera").is(':checked');
	var carcavas_leve = $("#carcavas_leve").is(':checked');
	var carcavas_moderada = $("#carcavas_moderada").is(':checked');
	var carcavas_severa = $("#carcavas_severa").is(':checked');
	var carcavas_muysevera = $("#carcavas_muysevera").is(':checked');
	var socava_leve = $("#socava_leve").is(':checked');
	var socava_moderada = $("#socava_moderada").is(':checked');
	var socava_severa = $("#socava_severa").is(':checked');
	var socava_muysevera = $("#socava_muysevera").is(':checked');
	var otro_leve = $("#otro_leve").is(':checked');
	var otro_moderada = $("#otro_moderada").is(':checked');
	var otro_severa = $("#otro_severa").is(':checked');
	var otro_muysevera = $("#otro_muysevera").is(':checked');
	var pend_baja = $("#pend_baja").is(':checked');
	var pend_media = $("#pend_media").is(':checked');
	var pend_alta = $("#pend_alta").is(':checked');
	var pend_muyalta = $("#pend_muyalta").is(':checked');
	var aflorante = $("#aflorante").is(':checked');
	var no_aflorante = $("#no_aflorante").is(':checked');
    var fechaHoraInicio = window.localStorage.getItem("fechaHoraIni");
    var usuario = window.localStorage.getItem("current_user");
    var estado = '1';
	var customActa =  $("#customActa").val();
	
		var pagDe =  $("#pagDe").val();
	

    if (window.localStorage.getItem("editar") === 'true') {

        var executeQuery = "UPDATE pre_erosivo_p SET "				
				+ "	permiso=?,"
				+ "	P_DEPTO=?,"
				+ "	P_MUN=?,"
				+ "	vereda=?,"
				+ "	predio=?,"
				+ "	propietario=?,"
				+ "	cc_propietario=?,"
				+ "	lugar_cc_propietario=?,"
				+ "	telefono=?,"
				+ "	origen_coord=?,"
				+ "	coordenada_e=?,"
				+ "	coordenada_n=?,"
				+ "	stk=?,"
				+ "	sp_cercano=?,"
				+ "	distancia_sp=?,"
				+ "	litologia=?,"
				+ "	unid_fisiografica=?,"
				+ "	otro=?,"
				+ "	masa_otro=?,"
				+ "	afectacion_otro=?,"
				+ "	area_baja=?,"
				+ "	area_media=?,"
				+ "	area_alta=?,"
				+ "	area_muyalta=?,"
				+ "	morfo_ancho=?,"
				+ "	morfo_long=?,"
				+ "	morfo_prof=?,"
				+ "	morfo_desliza=?,"
                                +"      unid_geologica=?,"
				+ "	observa=?,"
				+ "	fecha_inicio=?,"
				+ "	usuario=?,"
				+ "	fecha_modificada=?,"
				+ "	estado=?,"
				+ "	rela_repre_prop=?,"
				+ "	estado_activo=?,"
				+ "	estado_inactivo=?,"
				+ "	estado_estabilizado=?,"
				+ "	uni_terraza=?,"
				+ "	uni_coluvion=?,"
				+ "	uni_llanura=?,"
				+ "	uni_loma=?,"
				+ "	periodo_verano=?,"
				+ "	periodo_invierno=?,"
				+ "	bosque_primario=?,"
				+ "	bosque_secundario=?,"
				+ "	bosque_galeria=?,"
				+ "	rastrojo=?,"
				+ "	cultivos=?,"
				+ "	pastos=?,"
				+ "	eriales=?,"
				+ "	rotacional=?,"
				+ "	traslacional=?,"
				+ "	complejo=?,"
				+ "	caida_rocas=?,"
				+ "	volcamiento=?,"
				+ "	flujos_escombros=?,"
				+ "	flujos_lodo=?,"
				+ "	flujos_detritos=?,"
				+ "	reptacion=?,"
				+ "	terraceras=?,"
				+ "	laminar_leve=?,"
				+ "	laminar_moderada=?,"
				+ "	laminar_severa=?,"
				+ "	laminar_muysevera=?,"
				+ "	surco_leve=?,"
				+ "	surco_moderada=?,"
				+ "	surco_severa=?,"
				+ "	surco_muysevera=?,"
				+ "	carcavas_leve=?,"
				+ "	carcavas_moderada=?,"
				+ "	carcavas_severa=?,"
				+ "	carcavas_muysevera=?,"
				+ "	socava_leve=?,"
				+ "	socava_moderada=?,"
				+ "	socava_severa=?,"
				+ "	socava_muysevera=?,"
				+ "	otro_leve=?,"
				+ "	otro_moderada=?,"
				+ "	otro_severa=?,"
				+ "	otro_muysevera=?,"
				+ "	pend_baja=?,"
				+ "	pend_media=?,"
				+ "	pend_alta=?,"
				+ "	pend_muyalta=?,"
				+ "	aflorante=?,"
				+ "	custom_acta=?,"
				+ "	fecha=?,"
				+ "	pag_de=?,"
				+ "	no_aflorante=?"
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
				origen_coord,
				coordenada_e,
				coordenada_n,
				stk,
				sp_cercano,
				distancia_sp,
				litologia,
				unid_fisiografica,
				otro,
				masa_otro,
				afectacion_otro,
				area_baja,
				area_media,
				area_alta,
				area_muyalta,
				morfo_ancho,
				morfo_long,
				morfo_prof,
				morfo_desliza,
                                unid_geologica,
				observa,
				fecha_inicio,
				usuario,
				fecha_modificada,
				estado,
				rela_repre_prop,
				estado_activo,
				estado_inactivo,
				estado_estabilizado,
				uni_terraza,
				uni_coluvion,
				uni_llanura,
				uni_loma,
				periodo_verano,
				periodo_invierno,
				bosque_primario,
				bosque_secundario,
				bosque_galeria,
				rastrojo,
				cultivos,
				pastos,
				eriales,
				rotacional,
				traslacional,
				complejo,
				caida_rocas,
				volcamiento,
				flujos_escombros,
				flujos_lodo,
				flujos_detritos,
				reptacion,
				terraceras,
				laminar_leve,
				laminar_moderada,
				laminar_severa,
				laminar_muysevera,
				surco_leve,
				surco_moderada,
				surco_severa,
				surco_muysevera,
				carcavas_leve,
				carcavas_moderada,
				carcavas_severa,
				carcavas_muysevera,
				socava_leve,
				socava_moderada,
				socava_severa,
				socava_muysevera,
				otro_leve,
				otro_moderada,
				otro_severa,
				otro_muysevera,
				pend_baja,
				pend_media,
				pend_alta,
				pend_muyalta,
				aflorante,
				customActa,
				fecha,
				pagDe,
				no_aflorante
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
            var executeQuery = "INSERT INTO pre_erosivo_p ("
                    + "id,"
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
					+ "	origen_coord,"
					+ "	coordenada_e,"
					+ "	coordenada_n,"
					+ "	stk,"
					+ "	sp_cercano,"
					+ "	distancia_sp,"
					+ "	litologia,"
					+ "	unid_fisiografica,"
					+ "	otro,"
					+ "	masa_otro,"
					+ "	afectacion_otro,"
					+ "	area_baja,"
					+ "	area_media,"
					+ "	area_alta,"
					+ "	area_muyalta,"
					+ "	morfo_ancho,"
					+ "	morfo_long,"
					+ "	morfo_prof,"
					+ "	morfo_desliza,"
                                        + "	unid_geologica,"
					+ "	observa,"
					+ "	rela_repre_prop,"
					+ "	estado_activo,"
					+ "	estado_inactivo,"
					+ "	estado_estabilizado,"
					+ "	uni_terraza,"
					+ "	uni_coluvion,"
					+ "	uni_llanura,"
					+ "	uni_loma,"
					+ "	periodo_verano,"
					+ "	periodo_invierno,"
					+ "	bosque_primario,"
					+ "	bosque_secundario,"
					+ "	bosque_galeria,"
					+ "	rastrojo,"
					+ "	cultivos,"
					+ "	pastos,"
					+ "	eriales,"
					+ "	rotacional,"
					+ "	traslacional,"
					+ "	complejo,"
					+ "	caida_rocas,"
					+ "	volcamiento,"
					+ "	flujos_escombros,"
					+ "	flujos_lodo,"
					+ "	flujos_detritos,"
					+ "	reptacion,"
					+ "	terraceras,"
					+ "	laminar_leve,"
					+ "	laminar_moderada,"
					+ "	laminar_severa,"
					+ "	laminar_muysevera,"
					+ "	surco_leve,"
					+ "	surco_moderada,"
					+ "	surco_severa,"
					+ "	surco_muysevera,"
					+ "	carcavas_leve,"
					+ "	carcavas_moderada,"
					+ "	carcavas_severa,"
					+ "	carcavas_muysevera,"
					+ "	socava_leve,"
					+ "	socava_moderada,"
					+ "	socava_severa,"
					+ "	socava_muysevera,"
					+ "	otro_leve,"
					+ "	otro_moderada,"
					+ "	otro_severa,"
					+ "	otro_muysevera,"
					+ "	pend_baja,"
					+ "	pend_media,"
					+ "	pend_alta,"
					+ "	pend_muyalta,"
					+ "	aflorante,"
					+ "	custom_acta,"
					+ "pag_de,"
					+ "	no_aflorante,"
					+ "fecha_inicio,"
                    + "usuario,"
                    + "estado "
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
 					+ "?, ?, ?, ? " 
					+ ");";
					


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
				origen_coord,
				coordenada_e,
				coordenada_n,
				stk,
				sp_cercano,
				distancia_sp,
				litologia,
				unid_fisiografica,
				otro,
				masa_otro,
				afectacion_otro,
				area_baja,
				area_media,
				area_alta,
				area_muyalta,
				morfo_ancho,
				morfo_long,
				morfo_prof,
				morfo_desliza,
                                unid_geologica,
				observa,
				rela_repre_prop,
				estado_activo,
				estado_inactivo,
				estado_estabilizado,
				uni_terraza,
				uni_coluvion,
				uni_llanura,
				uni_loma,
				periodo_verano,
				periodo_invierno,
				bosque_primario,
				bosque_secundario,
				bosque_galeria,
				rastrojo,
				cultivos,
				pastos,
				eriales,
				rotacional,
				traslacional,
				complejo,
				caida_rocas,
				volcamiento,
				flujos_escombros,
				flujos_lodo,
				flujos_detritos,
				reptacion,
				terraceras,
				laminar_leve,
				laminar_moderada,
				laminar_severa,
				laminar_muysevera,
				surco_leve,
				surco_moderada,
				surco_severa,
				surco_muysevera,
				carcavas_leve,
				carcavas_moderada,
				carcavas_severa,
				carcavas_muysevera,
				socava_leve,
				socava_moderada,
				socava_severa,
				socava_muysevera,
				otro_leve,
				otro_moderada,
				otro_severa,
				otro_muysevera,
				pend_baja,
				pend_media,
				pend_alta,
				pend_muyalta,
				aflorante,
				customActa,
				pagDe,
				no_aflorante,
				fecha_inicio,
				usuario,
				estado 
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


