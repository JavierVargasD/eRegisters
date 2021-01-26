var i = 1;
var ac= 0;
var infraImgageNumber;

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
    var query = "SELECT * FROM pre_infra_p where id=" + window.localStorage.getItem("actaId");
	
	if( window.localStorage.getItem("post") === 'true' ){
		
		query = "SELECT * FROM post_infra_p where id=" + window.localStorage.getItem("actaId");
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
					$("#topografia").val(results.rows.item(i).topografia);
					$("#tiempo_construccion").val(results.rows.item(i).tiempo_construccion);
					$("#elemento").val(results.rows.item(i).elemento);
					$("#forma").val(results.rows.item(i).forma);
					$("#trafico_otro").val(results.rows.item(i).trafico_otro);
					$("#revestimiento_e_m").val(results.rows.item(i).revestimiento_e_m);
					$("#revestimiento_e_e").val(results.rows.item(i).revestimiento_e_e);
					$("#revestimiento_e_c").val(results.rows.item(i).revestimiento_e_c);
					$("#revestimiento_m_m").val(results.rows.item(i).revestimiento_m_m);
					$("#revestimiento_m_e").val(results.rows.item(i).revestimiento_m_e);
					$("#revestimiento_m_c").val(results.rows.item(i).revestimiento_m_c);
					$("#compuerta_e_m").val(results.rows.item(i).compuerta_e_m);
					$("#compuerta_e_e").val(results.rows.item(i).compuerta_e_e);
					$("#compuerta_e_c").val(results.rows.item(i).compuerta_e_c);
					$("#compuerta_m_m").val(results.rows.item(i).compuerta_m_m);
					$("#compuerta_m_e").val(results.rows.item(i).compuerta_m_e);
					$("#compuerta_m_c").val(results.rows.item(i).compuerta_m_c);
					$("#columna_e_m").val(results.rows.item(i).columna_e_m);
					$("#columna_e_e").val(results.rows.item(i).columna_e_e);
					$("#columna_e_c").val(results.rows.item(i).columna_e_c);
					$("#columna_m_m").val(results.rows.item(i).columna_m_m);
					$("#columna_m_e").val(results.rows.item(i).columna_m_e);
					$("#columna_m_c").val(results.rows.item(i).columna_m_c);
					$("#caja_entrada_e_m").val(results.rows.item(i).caja_entrada_e_m);
					$("#caja_entrada_e_e").val(results.rows.item(i).caja_entrada_e_e);
					$("#caja_entrada_e_c").val(results.rows.item(i).caja_entrada_e_c);
					$("#caja_entrada_m_m").val(results.rows.item(i).caja_entrada_m_m);
					$("#caja_entrada_m_e").val(results.rows.item(i).caja_entrada_m_e);
					$("#caja_entrada_m_c").val(results.rows.item(i).caja_entrada_m_c);
					$("#caja_salida_e_m").val(results.rows.item(i).caja_salida_e_m);
					$("#caja_salida_e_e").val(results.rows.item(i).caja_salida_e_e);
					$("#caja_salida_e_c").val(results.rows.item(i).caja_salida_e_c);
					$("#caja_salida_m_m").val(results.rows.item(i).caja_salida_m_m);
					$("#caja_salida_m_e").val(results.rows.item(i).caja_salida_m_e);
					$("#caja_salida_m_c").val(results.rows.item(i).caja_salida_m_c);
					$("#losa_e_m").val(results.rows.item(i).losa_e_m);
					$("#losa_e_e").val(results.rows.item(i).losa_e_e);
					$("#losa_e_c").val(results.rows.item(i).losa_e_c);
					$("#losa_m_m").val(results.rows.item(i).losa_m_m);
					$("#losa_m_e").val(results.rows.item(i).losa_m_e);
					$("#losa_m_c").val(results.rows.item(i).losa_m_c);
					$("#torre_e_m").val(results.rows.item(i).torre_e_m);
					$("#torre_e_e").val(results.rows.item(i).torre_e_e);
					$("#torre_e_c").val(results.rows.item(i).torre_e_c);
					$("#torre_m_m").val(results.rows.item(i).torre_m_m);
					$("#torre_m_e").val(results.rows.item(i).torre_m_e);
					$("#torre_m_c").val(results.rows.item(i).torre_m_c);
					$("#cerramiento_e_m").val(results.rows.item(i).cerramiento_e_m);
					$("#cerramiento_e_e").val(results.rows.item(i).cerramiento_e_e);
					$("#cerramiento_e_c").val(results.rows.item(i).cerramiento_e_c);
					$("#cerramiento_m_m").val(results.rows.item(i).cerramiento_m_m);
					$("#cerramiento_m_e").val(results.rows.item(i).cerramiento_m_e);
					$("#cerramiento_m_c").val(results.rows.item(i).cerramiento_m_c);
					$("#muro_e_m").val(results.rows.item(i).muro_e_m);
					$("#muro_e_e").val(results.rows.item(i).muro_e_e);
					$("#muro_e_c").val(results.rows.item(i).muro_e_c);
					$("#muro_m_m").val(results.rows.item(i).muro_m_m);
					$("#muro_m_e").val(results.rows.item(i).muro_m_e);
					$("#muro_m_c").val(results.rows.item(i).muro_m_c);
					$("#gavion_e_m").val(results.rows.item(i).gavion_e_m);
					$("#gavion_e_e").val(results.rows.item(i).gavion_e_e);
					$("#gavion_e_c").val(results.rows.item(i).gavion_e_c);
					$("#gavion_m_m").val(results.rows.item(i).gavion_m_m);
					$("#gavion_m_e").val(results.rows.item(i).gavion_m_e);
					$("#gavion_m_c").val(results.rows.item(i).gavion_m_c);
					$("#pilotes_e_m").val(results.rows.item(i).pilotes_e_m);
					$("#pilotes_e_e").val(results.rows.item(i).pilotes_e_e);
					$("#pilotes_e_c").val(results.rows.item(i).pilotes_e_c);
					$("#pilotes_m_m").val(results.rows.item(i).pilotes_m_m);
					$("#pilotes_m_e").val(results.rows.item(i).pilotes_m_e);
					$("#pilotes_m_c").val(results.rows.item(i).pilotes_m_c);
					$("#captacion_sumergida_e_m").val(results.rows.item(i).captacion_sumergida_e_m);
					$("#captacion_sumergida_e_e").val(results.rows.item(i).captacion_sumergida_e_e);
					$("#captacion_sumergida_e_c").val(results.rows.item(i).captacion_sumergida_e_c);
					$("#captacion_sumergida_m_m").val(results.rows.item(i).captacion_sumergida_m_m);
					$("#captacion_sumergida_m_e").val(results.rows.item(i).captacion_sumergida_m_e);
					$("#captacion_sumergida_m_c").val(results.rows.item(i).captacion_sumergida_m_c);
					$("#rejilla_e_m").val(results.rows.item(i).rejilla_e_m);
					$("#rejilla_e_e").val(results.rows.item(i).rejilla_e_e);
					$("#rejilla_e_c").val(results.rows.item(i).rejilla_e_c);
					$("#rejilla_m_m").val(results.rows.item(i).rejilla_m_m);
					$("#rejilla_m_e").val(results.rows.item(i).rejilla_m_e);
					$("#rejilla_m_c").val(results.rows.item(i).rejilla_m_c);
					$("#conduccion_e_m").val(results.rows.item(i).conduccion_e_m);
					$("#conduccion_e_e").val(results.rows.item(i).conduccion_e_e);
					$("#conduccion_e_c").val(results.rows.item(i).conduccion_e_c);
					$("#conduccion_m_m").val(results.rows.item(i).conduccion_m_m);
					$("#conduccion_m_e").val(results.rows.item(i).conduccion_m_e);
					$("#conduccion_m_c").val(results.rows.item(i).conduccion_m_c);
					$("#desarenador_e_m").val(results.rows.item(i).desarenador_e_m);
					$("#desarenador_e_e").val(results.rows.item(i).desarenador_e_e);
					$("#desarenador_e_c").val(results.rows.item(i).desarenador_e_c);
					$("#desarenador_m_m").val(results.rows.item(i).desarenador_m_m);
					$("#desarenador_m_e").val(results.rows.item(i).desarenador_m_e);
					$("#desarenador_m_c").val(results.rows.item(i).desarenador_m_c);
					$("#tanque_desarenador_e_m").val(results.rows.item(i).tanque_desarenador_e_m);
					$("#tanque_desarenador_e_e").val(results.rows.item(i).tanque_desarenador_e_e);
					$("#tanque_desarenador_e_c").val(results.rows.item(i).tanque_desarenador_e_c);
					$("#tanque_desarenador_m_m").val(results.rows.item(i).tanque_desarenador_m_m);
					$("#tanque_desarenador_m_e").val(results.rows.item(i).tanque_desarenador_m_e);
					$("#tanque_desarenador_m_c").val(results.rows.item(i).tanque_desarenador_m_c);
					$("#conduccion_desarenador_e_m").val(results.rows.item(i).conduccion_desarenador_e_m);
					$("#conduccion_desarenador_e_e").val(results.rows.item(i).conduccion_desarenador_e_e);
					$("#conduccion_desarenador_e_c").val(results.rows.item(i).conduccion_desarenador_e_c);
					$("#conduccion_desarenador_m_m").val(results.rows.item(i).conduccion_desarenador_m_m);
					$("#conduccion_desarenador_m_e").val(results.rows.item(i).conduccion_desarenador_m_e);
					$("#conduccion_desarenador_m_c").val(results.rows.item(i).conduccion_desarenador_m_c);
					$("#tanque_almacenamiento_e_m").val(results.rows.item(i).tanque_almacenamiento_e_m);
					$("#tanque_almacenamiento_e_e").val(results.rows.item(i).tanque_almacenamiento_e_e);
					$("#tanque_almacenamiento_e_c").val(results.rows.item(i).tanque_almacenamiento_e_c);
					$("#tanque_almacenamiento_m_m").val(results.rows.item(i).tanque_almacenamiento_m_m);
					$("#tanque_almacenamiento_m_e").val(results.rows.item(i).tanque_almacenamiento_m_e);
					$("#tanque_almacenamiento_m_c").val(results.rows.item(i).tanque_almacenamiento_m_c);
					$("#conduccion_almacenamiento_e_m").val(results.rows.item(i).conduccion_almacenamiento_e_m);
					$("#conduccion_almacenamiento_e_e").val(results.rows.item(i).conduccion_almacenamiento_e_e);
					$("#conduccion_almacenamiento_e_c").val(results.rows.item(i).conduccion_almacenamiento_e_c);
					$("#conduccion_almacenamiento_m_m").val(results.rows.item(i).conduccion_almacenamiento_m_m);
					$("#conduccion_almacenamiento_m_e").val(results.rows.item(i).conduccion_almacenamiento_m_e);
					$("#conduccion_almacenamiento_m_c").val(results.rows.item(i).conduccion_almacenamiento_m_c);
					$("#tanque_distribucion_e_m").val(results.rows.item(i).tanque_distribucion_e_m);
					$("#tanque_distribucion_e_e").val(results.rows.item(i).tanque_distribucion_e_e);
					$("#tanque_distribucion_e_c").val(results.rows.item(i).tanque_distribucion_e_c);
					$("#tanque_distribucion_m_m").val(results.rows.item(i).tanque_distribucion_m_m);
					$("#tanque_distribucion_m_e").val(results.rows.item(i).tanque_distribucion_m_e);
					$("#tanque_distribucion_m_c").val(results.rows.item(i).tanque_distribucion_m_c);
					$("#tuberia_distribucion_e_m").val(results.rows.item(i).tuberia_distribucion_e_m);
					$("#tuberia_distribucion_e_e").val(results.rows.item(i).tuberia_distribucion_e_e);
					$("#tuberia_distribucion_e_c").val(results.rows.item(i).tuberia_distribucion_e_c);
					$("#tuberia_distribucion_m_m").val(results.rows.item(i).tuberia_distribucion_m_m);
					$("#tuberia_distribucion_m_e").val(results.rows.item(i).tuberia_distribucion_m_e);
					$("#tuberia_distribucion_m_c").val(results.rows.item(i).tuberia_distribucion_m_c);
					$("#valvula_control_e_m").val(results.rows.item(i).valvula_control_e_m);
					$("#valvula_control_e_e").val(results.rows.item(i).valvula_control_e_e);
					$("#valvula_control_e_c").val(results.rows.item(i).valvula_control_e_c);
					$("#valvula_control_m_m").val(results.rows.item(i).valvula_control_m_m);
					$("#valvula_control_m_e").val(results.rows.item(i).valvula_control_m_e);
					$("#valvula_control_m_c").val(results.rows.item(i).valvula_control_m_c);
					$("#otro1_e_m").val(results.rows.item(i).otro1_e_m);
					$("#otro1_e_e").val(results.rows.item(i).otro1_e_e);
					$("#otro1_e_c").val(results.rows.item(i).otro1_e_c);
					$("#otro1_m_m").val(results.rows.item(i).otro1_m_m);
					$("#otro1_m_e").val(results.rows.item(i).otro1_m_e);
					$("#otro1_m_c").val(results.rows.item(i).otro1_m_c);
					$("#otro2_e_m").val(results.rows.item(i).otro2_e_m);
					$("#otro2_e_e").val(results.rows.item(i).otro2_e_e);
					$("#otro2_e_c").val(results.rows.item(i).otro2_e_c);
					$("#otro2_m_m").val(results.rows.item(i).otro2_m_m);
					$("#otro2_m_e").val(results.rows.item(i).otro2_m_e);
					$("#otro2_m_c").val(results.rows.item(i).otro2_m_c);
					$("#otro3_e_m").val(results.rows.item(i).otro3_e_m);
					$("#otro3_e_e").val(results.rows.item(i).otro3_e_e);
					$("#otro3_e_c").val(results.rows.item(i).otro3_e_c);
					$("#otro3_m_m").val(results.rows.item(i).otro3_m_m);
					$("#otro3_m_e").val(results.rows.item(i).otro3_m_e);
					$("#otro3_m_c").val(results.rows.item(i).otro3_m_c);
					$("#otro4_e_m").val(results.rows.item(i).otro4_e_m);
					$("#otro4_e_e").val(results.rows.item(i).otro4_e_e);
					$("#otro4_e_c").val(results.rows.item(i).otro4_e_c);
					$("#otro4_m_m").val(results.rows.item(i).otro4_m_m);
					$("#otro4_m_e").val(results.rows.item(i).otro4_m_e);
					$("#otro4_m_c").val(results.rows.item(i).otro4_m_c);
					$("#otro5_e_m").val(results.rows.item(i).otro5_e_m);
					$("#otro5_e_e").val(results.rows.item(i).otro5_e_e);
					$("#otro5_e_c").val(results.rows.item(i).otro5_e_c);
					$("#otro5_m_m").val(results.rows.item(i).otro5_m_m);
					$("#otro5_m_e").val(results.rows.item(i).otro5_m_e);
					$("#otro5_m_c").val(results.rows.item(i).otro5_m_c);
					$("#otro1_nombre").val(results.rows.item(i).otro1_nombre);
					$("#otro2_nombre").val(results.rows.item(i).otro2_nombre);
					$("#otro3_nombre").val(results.rows.item(i).otro3_nombre);
					$("#otro4_nombre").val(results.rows.item(i).otro4_nombre);
					$("#otro5_nombre").val(results.rows.item(i).otro5_nombre);
					$("#observa").val(results.rows.item(i).observa);
					$("#rela_repre_prop").val(results.rows.item(i).rela_repre_prop);
					$("#falta_rela").val(results.rows.item(i).falta_rela);
					$("#ancho").val(results.rows.item(i).ancho);
					$("#largo").val(results.rows.item(i).largo);
					$("#altura").val(results.rows.item(i).altura);
					$("#profundidad").val(results.rows.item(i).profundidad);
					$("#laminar").prop('checked', JSON.parse(results.rows.item(i).laminar));
					$("#surcos").prop('checked', JSON.parse(results.rows.item(i).surcos));
					$("#carcavas").prop('checked', JSON.parse(results.rows.item(i).carcavas));
					$("#socavacion").prop('checked', JSON.parse(results.rows.item(i).socavacion));
					$("#erosivos_ninguno").prop('checked', JSON.parse(results.rows.item(i).erosivos_ninguno));
					$("#caidas").prop('checked', JSON.parse(results.rows.item(i).caidas));
					$("#deslizamientos").prop('checked', JSON.parse(results.rows.item(i).deslizamientos));
					$("#volcamiento").prop('checked', JSON.parse(results.rows.item(i).volcamiento));
					$("#flujos").prop('checked', JSON.parse(results.rows.item(i).flujos));
					$("#mov_ninguno").prop('checked', JSON.parse(results.rows.item(i).mov_ninguno));
					$("#socavamiento").prop('checked', JSON.parse(results.rows.item(i).socavamiento));
					$("#erosion").prop('checked', JSON.parse(results.rows.item(i).erosion));
					$("#desprendimientos").prop('checked', JSON.parse(results.rows.item(i).desprendimientos));
					$("#volcamientos").prop('checked', JSON.parse(results.rows.item(i).volcamientos));
					$("#cizallamiento").prop('checked', JSON.parse(results.rows.item(i).cizallamiento));
					$("#caudal_permanente").prop('checked', JSON.parse(results.rows.item(i).caudal_permanente));
					$("#caudal_intermitente").prop('checked', JSON.parse(results.rows.item(i).caudal_intermitente));
					$("#caudal_efimero").prop('checked', JSON.parse(results.rows.item(i).caudal_efimero));
					$("#caudal_otro").prop('checked', JSON.parse(results.rows.item(i).caudal_otro));
					$("#trafico_pesado").prop('checked', JSON.parse(results.rows.item(i).trafico_pesado));
					$("#trafico_liviano").prop('checked', JSON.parse(results.rows.item(i).trafico_liviano));
					$("#constru_si").prop('checked', JSON.parse(results.rows.item(i).constru_si));
                                        
                                        $("#puente").prop('checked', JSON.parse(results.rows.item(i).puente));
                                        $("#boxcoulvert").prop('checked', JSON.parse(results.rows.item(i).boxcoulvert));
                                        $("#canal").prop('checked', JSON.parse(results.rows.item(i).canal));
                                        $("#bocatoma").prop('checked', JSON.parse(results.rows.item(i).bocatoma));
                                        $("#acueducto").prop('checked', JSON.parse(results.rows.item(i).acueducto));
                                        $("#tanque_elevado").prop('checked', JSON.parse(results.rows.item(i).tanque_elevado));
                                        $("#polideportivo").prop('checked', JSON.parse(results.rows.item(i).polideportivo));
                                        $("#antena_telefonica").prop('checked', JSON.parse(results.rows.item(i).antena_telefonica));
                                        $("#dique_presa").prop('checked', JSON.parse(results.rows.item(i).dique_presa));
										
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
            transaction.executeSql('SELECT MAX(id) as id FROM pre_infra_p', [], function(tx, results) {
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
            data:
			"<!DOCTYPE html>"
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
			+ "   padding-left:3px;	"
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
			+ "</style>"
			+ " </head>"
			+ "<body>"
			
            + " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + " <tbody>"
            + " <tr><td class='encabezado2' colspan='4'>Pagina 1 de 2 &nbsp&nbsp</td></tr>"
                                             + "  <tr>"
                    + "  <td colspan='4'>"
                    + "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                    + "    <tbody>"
                    + "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
                    + "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA POST REGISTRO DE INFRAESTRUCTURA</td>"
					+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
                    + "   </tr>"
					+ "   <tr>"
					+ "    <td colspan='4'>"
					+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
					+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-10</td>"					
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
            + "  <td style='width: 12.5%'>  POST-INF-" + $("#customActa").val() +" </td>"
            + "   </tr>    "
            + "  </tbody>"
            + "</table>"  
			
			+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
			+ "<tbody>"
			+ "<tr>"
			+ "    <td style='width:30%' class='encabezado' colspan='4'><b>1. LOCALIZACIÓN</b></td>"
			+ "    <td style='width:30%' class='encabezado' colspan='2'><b>2. UBICACIÓN</b></td>"
			+ "    <td style='width:40%' class='encabezado' colspan='4'><b>3. PROCESOS EROSIVOS CERCANOS</b></td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:15%'>Departamento:</td>"
			+ "    <td style='width:15%' colspan='3'>  " + ($("#P_DEPTO option:selected").text())+" </td>"
			+ "    <td style='width:15%'>Origen de coord:</td>"
			+ "    <td style='width:15%'> " + ($("#origen_coord").val())+" </td>"
			+ "    <td style='width:20%' colspan='2' align='center'><b>Erosión superficial</b></td>			"
			+ "    <td style='width:20%' colspan='2' align='center'><b>Movimientos en masa</b></td>"
			+ "							</tr>    "
			+ "<tr>"
			+ "    <td style='width:15%'>Municipio:</td>"
			+ "    <td style='width:15%' colspan='3'>  " + ($("#P_MUN option:selected").text())+" </td>"
			+ "    <td style='width:15%'>Coordenada E:</td>"
			+ "    <td style='width:15%'> " + ($("#coordenada_e").val())+" </td>"
			+ "    <td style='width:10%'>Laminar:</td>"
			+ "    <td style='width:10%;text-align:center'> " + ($("#laminar").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%'>Caídas:</td>"
			+ "    <td style='width:10%;text-align:center'> " + ($("#caidas").is(':checked') ? "X" : "") + " </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:15%'>Vereda:</td>"
			+ "    <td style='width:15%' colspan='3'>  " + ($("#vereda").val())+" </td>"
			+ "    <td style='width:15%'>Coordenada N:</td>"
			+ "    <td style='width:15%'> " + ($("#coordenada_n").val())+" </td>"
			+ "    <td style='width:10%'>Surcos:</td>"
			+ "    <td style='width:10%;text-align:center'> " + ($("#surcos").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%'>Deslizamientos:</td>"
			+ "    <td style='width:10%;text-align:center'> " + ($("#deslizamientos").is(':checked') ? "X" : "") + " </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:15%'>Propietario:</td>"
			+ "    <td style='width:15%' colspan='3'>  " + ($("#propietario").val())+" </td>"
			+ "    <td style='width:15%'>Stk:</td>"
			+ "    <td style='width:15%'> " + ($("#stk").val())+" </td>"
			+ "    <td style='width:10%'>Carcavas:</td>"
			+ "    <td style='width:10%;text-align:center'> " + ($("#carcavas").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%'>Volcamiento:</td>"
			+ "    <td style='width:10%;text-align:center'> " + ($("#volcamiento").is(':checked') ? "X" : "") + " </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:15%'>Predio:</td>"
			+ "    <td style='width:15%' colspan='3'>  " + ($("#predio").val())+" </td>"
			+ "    <td style='width:15%'>Vp. cercano:</td>"
			+ "    <td style='width:15%'> " + ($("#sp_cercano").val())+" </td>"
			+ "    <td style='width:10%'>Socavación:</td>"
			+ "    <td style='width:10%;text-align:center'> " + ($("#socavacion").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%'>Flujos:</td>"
			+ "    <td style='width:10%;text-align:center'> " + ($("#flujos").is(':checked') ? "X" : "") + " </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:15%'>Telefono:</td>"
			+ "    <td style='width:13%'>  " + ($("#telefono").val())+" </td>"
			+ "    <td style='width:1%'>P</td>"
			+ "    <td style='width:1%'>E</td>"
			+ "    <td style='width:15%'>Distancia Vp:</td>"
			+ "    <td style='width:15%'> " + ($("#distancia_sp").val())+" </td>"
			+ "    <td style='width:10%'>Ninguno:</td>"
			+ "    <td style='width:10%;text-align:center'> " + ($("#erosion_ninguno").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:10%'>Ninguno:</td>"
			+ "    <td style='width:10%;text-align:center'> " + ($("#mov_ninguno").is(':checked') ? "X" : "") + " </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td tyle='width:100%' colspan='10'> Topografia:   " + ($("#topografia").val())+"  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tiempo de construccion:  " + ($("#tiempo_construccion").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "	<td tyle='width:100%' colspan='10' align='center'> Puente (  (" + ($("#puente").is(':checked') ? "X" : "") + ")  ), Boxcoulvert (  (" + ($("#boxcoulvert").is(':checked') ? "X" : "") + ")  ), Canal (  (" + ($("#canal").is(':checked') ? "X" : "") + ")  ), Bocatoma (  (" + ($("#bocatoma").is(':checked') ? "X" : "") + ")  ), Acueducto (  (" + ($("#acueducto").is(':checked') ? "X" : "") + ")  ), Tanque elevado (  (" + ($("#tanque_elevado").is(':checked') ? "X" : "") + ")  ), Polideportivo (  (" + ($("#polideportivo").is(':checked') ? "X" : "") + ")  ), Antena telefónica (  (" + ($("#antena_telefonica").is(':checked') ? "X" : "") + ")  ), Dique o Presa (  (" + ($("#dique_presa").is(':checked') ? "X" : "") + ")  ).</td> "
			+ "</tr>    "
			+ "       </tbody>"
			+ "</table>"
			+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
			+ "<tbody>"
			+ "<tr>"
			+ "    <td style='width:28%' class='encabezado' colspan='2'><b>4. DIMENSIONES</b></td>"
			+ "    <td style='width:28%' class='encabezado' colspan='2'><b>5. ANOMALIAS ESTRUCTURA</b></td>"
			+ "    <td style='width:22%' class='encabezado' colspan='2'><b>6. CAUDAL</b></td>"
			+ "    <td style='width:22%' class='encabezado' colspan='2'><b>7. TRAFICO</b></td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:14%'>Ancho:</td>"
			+ "    <td style='width:14%'> " + ($("#ancho").val())+" </td>"
			+ "    <td style='width:14%'>Socavamiento:</td>"
			+ "    <td style='width:14%;text-align:center'> " + ($("#socavamiento").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:11%'>Permanente:</td>"
			+ "    <td style='width:11%;text-align:center'> " + ($("#caudal_permanente").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:11%'>Pesado:</td>"
			+ "    <td style='width:11%;text-align:center'> " + ($("#trafico_pesado").is(':checked') ? "X" : "") + " </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:14%'>Largo:</td>"
			+ "    <td style='width:14%'> " + ($("#largo").val())+" </td>"
			+ "    <td style='width:14%'>Erosión:</td>"
			+ "    <td style='width:14%;text-align:center'> " + ($("#erosion").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:11%'>Intermitente:</td>"
			+ "    <td style='width:11%;text-align:center'> " + ($("#caudal_intermitente").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:11%'>Liviano:</td>"
			+ "    <td style='width:11%;text-align:center'> " + ($("#trafico_liviano").is(':checked') ? "X" : "") + " </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:14%'>Altura:</td>"
			+ "    <td style='width:14%'> " + ($("#altura").val())+" </td>"
			+ "    <td style='width:14%'>Desprendimientos:</td>"
			+ "    <td style='width:14%;text-align:center'> " + ($("#desprendimientos").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:11%'>Efímero:</td>"
			+ "    <td style='width:11%;text-align:center'> " + ($("#caudal_efimero").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:11%'>Otro:</td>"
			+ "    <td style='width:11%'> " + ($("#trafico_otro").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:16%'>Forma sección:</td>"
			+ "    <td style='width:14%'> " + ($("#forma").val())+" </td>"
			+ "    <td style='width:14%'>Volcamientos:</td>"
			+ "    <td style='width:14%;text-align:center'> " + ($("#volcamientos").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:11%'>Otro:</td>"
			+ "    <td style='width:11%'> " + ($("#caudal_otro").val())+" </td>"
			+ "    <td style='width:22%' colspan='2'></td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:14%'>Profundidad:</td>"
			+ "    <td style='width:14%'> " + ($("#profundidad").val())+" </td>"
			+ "    <td style='width:14%'>Cizallamiento:</td>"
			+ "    <td style='width:14%;text-align:center'> " + ($("#cizallamiento").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:22%' colspan='2'></td>"
			+ "    <td style='width:22%' colspan='2'></td>"
			+ "</tr>"
			+ "</tbody>"
			+ "</table>"
			+ "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
			+ "<tbody>"
			+ "<tr>"
			+ "    <td style='width:50%' class='encabezado' rowspan='2'><b>8. COMPONENTES DE LA OBRA</b></td>"
			+ "    <td style='width:25%' class='encabezado' colspan='5'><b>Estructura</b></td>"
			+ "    <td style='width:1%' rowspan='28'><b></b></td>"
			+ "    <td style='width:24%' class='encabezado' colspan='5'><b>Mamposteria</b></td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td  class='encabezado' align='center'><b>M</b></td>"
			+ "    <td style='width:1%' rowspan='27'><b></b></td>"
			+ "    <td  class='encabezado' align='center'><b>E</b></td>"
			+ "    <td style='width:1%' rowspan='27'><b></b></td>"
			+ "    <td  class='encabezado' align='center'><b>C</b></td>"
			+ "    <td  class='encabezado' align='center'><b>M</b></td>"
			+ "    <td style='width:1%' rowspan='27'><b></b></td>"
			+ "    <td  class='encabezado' align='center'><b>E</b></td>"
			+ "    <td style='width:1%' rowspan='27'><b></b></td>"
			+ "    <td  class='encabezado' align='center'><b>C</b></td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Revestimiento</td>"
			+ "    <td > " + ($("#revestimiento_e_m").val())+" </td>"
			+ "    <td > " + ($("#revestimiento_e_e").val())+" </td>"
			+ "    <td > " + ($("#revestimiento_e_c").val())+" </td>"
			+ "    <td > " + ($("#revestimiento_m_m").val())+" </td>"
			+ "    <td > " + ($("#revestimiento_m_e").val())+" </td>"
			+ "    <td > " + ($("#revestimiento_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Compuerta</td>"
			+ "    <td > " + ($("#compuerta_e_m").val())+" </td>"
			+ "    <td > " + ($("#compuerta_e_e").val())+" </td>"
			+ "    <td > " + ($("#compuerta_e_c").val())+" </td>"
			+ "    <td > " + ($("#compuerta_m_m").val())+" </td>"
			+ "    <td > " + ($("#compuerta_m_e").val())+" </td>"
			+ "    <td > " + ($("#compuerta_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Columna</td>"
			+ "    <td > " + ($("#columna_e_m").val())+" </td>"
			+ "    <td > " + ($("#columna_e_e").val())+" </td>"
			+ "    <td > " + ($("#columna_e_c").val())+" </td>"
			+ "    <td > " + ($("#columna_m_m").val())+" </td>"
			+ "    <td > " + ($("#columna_m_e").val())+" </td>"
			+ "    <td > " + ($("#columna_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Caja/Aleta entrada</td>"
			+ "    <td > " + ($("#caja_entrada_e_m").val())+" </td>"
			+ "    <td > " + ($("#caja_entrada_e_e").val())+" </td>"
			+ "    <td > " + ($("#caja_entrada_e_c").val())+" </td>"
			+ "    <td > " + ($("#caja_entrada_m_m").val())+" </td>"
			+ "    <td > " + ($("#caja_entrada_m_e").val())+" </td>"
			+ "    <td > " + ($("#caja_entrada_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Caja/Aleta salida</td>"
			+ "    <td > " + ($("#caja_salida_e_m").val())+" </td>"
			+ "    <td > " + ($("#caja_salida_e_e").val())+" </td>"
			+ "    <td > " + ($("#caja_salida_e_c").val())+" </td>"
			+ "    <td > " + ($("#caja_salida_m_m").val())+" </td>"
			+ "    <td > " + ($("#caja_salida_m_e").val())+" </td>"
			+ "    <td > " + ($("#caja_salida_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Losa-placa</td>"
			+ "    <td > " + ($("#losa_e_m").val())+" </td>"
			+ "    <td > " + ($("#losa_e_e").val())+" </td>"
			+ "    <td > " + ($("#losa_e_c").val())+" </td>"
			+ "    <td > " + ($("#losa_m_m").val())+" </td>"
			+ "    <td > " + ($("#losa_m_e").val())+" </td>"
			+ "    <td > " + ($("#losa_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Torre</td>"
			+ "    <td > " + ($("#torre_e_m").val())+" </td>"
			+ "    <td > " + ($("#torre_e_e").val())+" </td>"
			+ "    <td > " + ($("#torre_e_c").val())+" </td>"
			+ "    <td > " + ($("#torre_m_m").val())+" </td>"
			+ "    <td > " + ($("#torre_m_e").val())+" </td>"
			+ "    <td > " + ($("#torre_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Cerramiento</td>"
			+ "    <td > " + ($("#cerramiento_e_m").val())+" </td>"
			+ "    <td > " + ($("#cerramiento_e_e").val())+" </td>"
			+ "    <td > " + ($("#cerramiento_e_c").val())+" </td>"
			+ "    <td > " + ($("#cerramiento_m_m").val())+" </td>"
			+ "    <td > " + ($("#cerramiento_m_e").val())+" </td>"
			+ "    <td > " + ($("#cerramiento_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Muro contención</td>"
			+ "    <td > " + ($("#muro_e_m").val())+" </td>"
			+ "    <td > " + ($("#muro_e_e").val())+" </td>"
			+ "    <td > " + ($("#muro_e_c").val())+" </td>"
			+ "    <td > " + ($("#muro_m_m").val())+" </td>"
			+ "    <td > " + ($("#muro_m_e").val())+" </td>"
			+ "    <td > " + ($("#muro_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Gavión</td>"
			+ "    <td > " + ($("#gavion_e_m").val())+" </td>"
			+ "    <td > " + ($("#gavion_e_e").val())+" </td>"
			+ "    <td > " + ($("#gavion_e_c").val())+" </td>"
			+ "    <td > " + ($("#gavion_m_m").val())+" </td>"
			+ "    <td > " + ($("#gavion_m_e").val())+" </td>"
			+ "    <td > " + ($("#gavion_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Pilotes</td>"
			+ "    <td > " + ($("#pilotes_e_m").val())+" </td>"
			+ "    <td > " + ($("#pilotes_e_e").val())+" </td>"
			+ "    <td > " + ($("#pilotes_e_c").val())+" </td>"
			+ "    <td > " + ($("#pilotes_m_m").val())+" </td>"
			+ "    <td > " + ($("#pilotes_m_e").val())+" </td>"
			+ "    <td > " + ($("#pilotes_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Captación sumergida</td>"
			+ "    <td > " + ($("#captacion_sumergida_e_m").val())+" </td>"
			+ "    <td > " + ($("#captacion_sumergida_e_e").val())+" </td>"
			+ "    <td > " + ($("#captacion_sumergida_e_c").val())+" </td>"
			+ "    <td > " + ($("#captacion_sumergida_m_m").val())+" </td>"
			+ "    <td > " + ($("#captacion_sumergida_m_e").val())+" </td>"
			+ "    <td > " + ($("#captacion_sumergida_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Rejilla</td>"
			+ "    <td > " + ($("#rejilla_e_m").val())+" </td>"
			+ "    <td > " + ($("#rejilla_e_e").val())+" </td>"
			+ "    <td > " + ($("#rejilla_e_c").val())+" </td>"
			+ "    <td > " + ($("#rejilla_m_m").val())+" </td>"
			+ "    <td > " + ($("#rejilla_m_e").val())+" </td>"
			+ "    <td > " + ($("#rejilla_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Conduccion-captacion-desarenador</td>"
			+ "    <td > " + ($("#conduccion_e_m").val())+" </td>"
			+ "    <td > " + ($("#conduccion_e_e").val())+" </td>"
			+ "    <td > " + ($("#conduccion_e_c").val())+" </td>"
			+ "    <td > " + ($("#conduccion_m_m").val())+" </td>"
			+ "    <td > " + ($("#conduccion_m_e").val())+" </td>"
			+ "    <td > " + ($("#conduccion_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Tanque desarenador</td>"
			+ "    <td > " + ($("#tanque_desarenador_e_m").val())+" </td>"
			+ "    <td > " + ($("#tanque_desarenador_e_e").val())+" </td>"
			+ "    <td > " + ($("#tanque_desarenador_e_c").val())+" </td>"
			+ "    <td > " + ($("#tanque_desarenador_m_m").val())+" </td>"
			+ "    <td > " + ($("#tanque_desarenador_m_e").val())+" </td>"
			+ "    <td > " + ($("#tanque_desarenador_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Conduccion desarenador tanque almacenamiento</td>"
			+ "    <td > " + ($("#conduccion_desarenador_e_m").val())+" </td>"
			+ "    <td > " + ($("#conduccion_desarenador_e_e").val())+" </td>"
			+ "    <td > " + ($("#conduccion_desarenador_e_c").val())+" </td>"
			+ "    <td > " + ($("#conduccion_desarenador_m_m").val())+" </td>"
			+ "    <td > " + ($("#conduccion_desarenador_m_e").val())+" </td>"
			+ "    <td > " + ($("#conduccion_desarenador_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Tanque almacenamiento</td>"
			+ "    <td > " + ($("#tanque_almacenamiento_e_m").val())+" </td>"
			+ "    <td > " + ($("#tanque_almacenamiento_e_e").val())+" </td>"
			+ "    <td > " + ($("#tanque_almacenamiento_e_c").val())+" </td>"
			+ "    <td > " + ($("#tanque_almacenamiento_m_m").val())+" </td>"
			+ "    <td > " + ($("#tanque_almacenamiento_m_e").val())+" </td>"
			+ "    <td > " + ($("#tanque_almacenamiento_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Conducción almacenamiento tanque de distribución</td>"
			+ "    <td > " + ($("#conduccion_almacenamiento_e_m").val())+" </td>"
			+ "    <td > " + ($("#conduccion_almacenamiento_e_e").val())+" </td>"
			+ "    <td > " + ($("#conduccion_almacenamiento_e_c").val())+" </td>"
			+ "    <td > " + ($("#conduccion_almacenamiento_m_m").val())+" </td>"
			+ "    <td > " + ($("#conduccion_almacenamiento_m_e").val())+" </td>"
			+ "    <td > " + ($("#conduccion_almacenamiento_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Tanque de distribución</td>"
			+ "    <td > " + ($("#tanque_distribucion_e_m").val())+" </td>"
			+ "    <td > " + ($("#tanque_distribucion_e_e").val())+" </td>"
			+ "    <td > " + ($("#tanque_distribucion_e_c").val())+" </td>"
			+ "    <td > " + ($("#tanque_distribucion_m_m").val())+" </td>"
			+ "    <td > " + ($("#tanque_distribucion_m_e").val())+" </td>"
			+ "    <td > " + ($("#tanque_distribucion_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Tubería distribucion</td>"
			+ "    <td > " + ($("#tuberia_distribucion_e_m").val())+" </td>"
			+ "    <td > " + ($("#tuberia_distribucion_e_e").val())+" </td>"
			+ "    <td > " + ($("#tuberia_distribucion_e_c").val())+" </td>"
			+ "    <td > " + ($("#tuberia_distribucion_m_m").val())+" </td>"
			+ "    <td > " + ($("#tuberia_distribucion_m_e").val())+" </td>"
			+ "    <td > " + ($("#tuberia_distribucion_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td >Válvula de control</td>"
			+ "    <td > " + ($("#valvula_control_e_m").val())+" </td>"
			+ "    <td > " + ($("#valvula_control_e_e").val())+" </td>"
			+ "    <td > " + ($("#valvula_control_e_c").val())+" </td>"
			+ "    <td > " + ($("#valvula_control_m_m").val())+" </td>"
			+ "    <td > " + ($("#valvula_control_m_e").val())+" </td>"
			+ "    <td > " + ($("#valvula_control_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td  height='12px'>" + ($("#otro1_nombre").val())+"</td>"
			+ "    <td > " + ($("#otro1_e_m").val())+" </td>"
			+ "    <td > " + ($("#otro1_e_e").val())+" </td>"
			+ "    <td > " + ($("#otro1_e_c").val())+" </td>"
			+ "    <td > " + ($("#otro1_m_m").val())+" </td>"
			+ "    <td > " + ($("#otro1_m_e").val())+" </td>"
			+ "    <td > " + ($("#otro1_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td  height='12px'>" + ($("#otro2_nombre").val())+"</td>"
			+ "    <td > " + ($("#otro2_e_m").val())+" </td>"
			+ "    <td > " + ($("#otro2_e_e").val())+" </td>"
			+ "    <td > " + ($("#otro2_e_c").val())+" </td>"
			+ "    <td > " + ($("#otro2_m_m").val())+" </td>"
			+ "    <td > " + ($("#otro2_m_e").val())+" </td>"
			+ "    <td > " + ($("#otro2_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td  height='12px'>" + ($("#otro3_nombre").val())+"</td>"
			+ "    <td > " + ($("#otro3_e_m").val())+" </td>"
			+ "    <td > " + ($("#otro3_e_e").val())+" </td>"
			+ "    <td > " + ($("#otro3_e_c").val())+" </td>"
			+ "    <td > " + ($("#otro3_m_m").val())+" </td>"
			+ "    <td > " + ($("#otro3_m_e").val())+" </td>"
			+ "    <td > " + ($("#otro3_m_c").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td  height='12px'>" + ($("#otro4_nombre").val())+"</td>"
			+ "    <td > " + ($("#otro4_e_m").val())+" </td>"
			+ "    <td > " + ($("#otro4_e_e").val())+" </td>"
			+ "    <td > " + ($("#otro4_e_c").val())+" </td>"
			+ "    <td > " + ($("#otro4_m_m").val())+" </td>"
			+ "    <td > " + ($("#otro4_m_e").val())+" </td>"
			+ "    <td > " + ($("#otro4_m_c").val())+" </td>"
			+ "</tr>"
			+ "   <tr>"
			+ "    <td  height='12px'>" + ($("#otro5_nombre").val())+"</td>"
			+ "    <td > " + ($("#otro5_e_m").val())+" </td>"
			+ "    <td > " + ($("#otro5_e_e").val())+" </td>"
			+ "    <td > " + ($("#otro5_e_c").val())+" </td>"
			+ "    <td > " + ($("#otro5_m_m").val())+" </td>"
			+ "    <td > " + ($("#otro5_m_e").val())+" </td>"
			+ "    <td > " + ($("#otro5_m_c").val())+" </td>"
			+ "</tr>"
			+ "</tbody>"
			+ "</table> "
			+ "    <table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;'>"
			+ "<tbody>"
			+ "<tr>"
			+ "    <td style='width:100%' class='encabezado' colspan='2'><b>CONVENCIONES</b></td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:8%' rowspan='2'>Material (M)</td>"
			+ "    <td style='width:92%'><b>Estructura:</b>&nbsp;&nbsp; (S) Concreto simple &nbsp;&nbsp;(R) Concreto reforzado &nbsp;&nbsp;(C) Concreto ciclópeo &nbsp;&nbsp;(H) Hierro &nbsp;&nbsp;(P) PVC &nbsp;&nbsp;(M) Madera &nbsp;&nbsp;(A) Arcilla</td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:92%'><b>Mamposteria:</b>&nbsp;&nbsp; (L) Ladrillo &nbsp;&nbsp;(B) Bloque &nbsp;&nbsp;(Pi) Piedra</td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:100%' colspan='2'><b>Estado (E):</b>&nbsp;&nbsp; (1)Muy malo &nbsp;&nbsp;(2)Malo &nbsp;&nbsp;(3)Regular &nbsp;&nbsp;(4)Bueno</td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:100%' colspan='2'><b>Anomalías principales (C):</b> &nbsp;&nbsp;(G) Grietas   &nbsp;&nbsp;(F) Fisuras   &nbsp;&nbsp;(D) Desprendimiento   &nbsp;&nbsp;(De) Desgaste   &nbsp;&nbsp;(Sc) Socavamiento  &nbsp;&nbsp;(H) Humedad   &nbsp;&nbsp;(X) No Tiene</td>"
			+ "</tr>"
			+ "    </tbody>"
			+ "</table>"
                
                        +"<table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;'>"
			+ "<tbody>"
			+ " <tr>"
			+ "    <td class='encabezado' style='width:50%' ><b>ESQUEMA DE INFRAESTRUCTURA</b></td>"
                        + "    <td class='encabezado' ><b>DIAGRAMA DE LINEA</b></td>"
			+ " </tr>"
                	+ " <tr>"
			+ "    <td style='height:300px' ><div id='content'><img  src='file:///storage/emulated/0/Download/rosa.PNG' width='60' height='60' ></div></td>"
                        + "    <td><img  src='file:///storage/emulated/0/Download/infraLine.png' style='width: 100%;  height: auto;'></td>"
			+ " </tr>"
                        + "</tbody>"
			+ "</table>"
			
			   + "<p style='page-break-after: always;'> "                  
                        + " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
                        + " <tbody>"
                        + " <tr><td class='encabezado2' colspan='4'>Pagina 2 de 2&nbsp&nbsp</td></tr>"
                                 + "  <tr>"
                    + "  <td colspan='4'>"
                    + "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                    + "    <tbody>"
                    + "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
                    + "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA POST REGISTRO DE INFRAESTRUCTURA</td>"
					+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
                    + "   </tr>"
					+ "   <tr>"
					+ "    <td colspan='4'>"
					+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
					+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-10</td>"					
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
                        + "  <td style='width: 12.5%'>  POST-INF-" + $("#customActa").val() +" </td>"
 
                        + "   </tr>    "
                        + "  </tbody>"
                        + "</table>"  
			
			
                
        		+ "<table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;'>"
			+ "<tbody>"
			+ "<tr>"
			+ "    <td class='encabezado' colspan='5'><b>OBSERVACIONES GENERALES</b></td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='height: 100px;vertical-align: top;padding:5px;text-align:justify' colspan='5'>  " + ($("#observa").val())+" </td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:100%' colspan='5'>Relación entre representante y propietario: " + ($("#rela_repre_prop").val())+"</td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td style='width:80%'>Todas las construcciones de la infraestructura están relacionadas en esta Acta?</td>"
			+ "    <td style='width:5%'>SI</td>"
			+ "    <td style='width:5%;text-align:center'> " + ($("#constru_si").is(':checked') ? "X" : "") + " </td>"
			+ "    <td style='width:5%'>NO</td>"
			+ "    <td style='width:5%;text-align:center'> " + ($("#constru_no").is(':checked') ? "X" : "") + " </td>"
			+ "</tr>"
			+ "							<tr>"
			+ "    <td style='height: 50px;vertical-align: top;padding:5px' colspan='5'>Que falta por relacionar?   " + ($("#falta_rela").val())+" </td>"
			+ "</tr>"
			+ "</tbody>"
			+ "</table>"
                        
                
             			+ "<table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;'>"
			+ "<tbody>"
			+ "<tr>"			
			+ " <td><p align='justify' style='padding: 5px'>"
			
			
			+ "Una vez comprobada las condiciones de la obra de arte/infraestructura del acta PRE-INF-" + $("#customActa").val() +" correspondiente a " 
			+ "Puente (  (" + ($("#puente").is(':checked') ? "X" : "") + ")  ), Boxcoulvert (  (" + ($("#boxcoulvert").is(':checked') ? "X" : "") + ")  ), Canal (  (" + ($("#canal").is(':checked') ? "X" : "") + ")  ), Bocatoma (  (" + ($("#bocatoma").is(':checked') ? "X" : "") + ")  ), Acueducto (  (" + ($("#acueducto").is(':checked') ? "X" : "") + ")  ), Tanque elevado (  (" + ($("#tanque_elevado").is(':checked') ? "X" : "") + ")  ), Polideportivo (  (" + ($("#polideportivo").is(':checked') ? "X" : "") + ")  ), Antena telefónica (  (" + ($("#antena_telefonica").is(':checked') ? "X" : "") + ")  ), Dique o Presa (  (" + ($("#dique_presa").is(':checked') ? "X" : "") + ")"
			+" ubicada en el predio predio "+ $("#predio").val() 
			+", en el municipio de " + $("#P_MUN option:selected").text()+ " vereda o barrio " + $("#vereda").val() + "	en el departamento de " + $("#P_DEPTO option:selected").text()
			+"  se reunieron el (la) funcionario(a) "+window.localStorage.getItem('representante')+"  con cédula de ciudadanía "+window.localStorage.getItem('numdocrepre')
			+" de  "+window.localStorage.getItem('lugarcc')+" quien actúa como evaluador(a) y el (la) señor(a) "+ $("#propietario").val() + ", con cédula de  Ciudadania No." + $("#cc_propietario").val() 
			+ " de " + $("#lugar_cc_propietario").val() + ", como " + ($("#texcom").val()) +", el día  " + ($("#dia").val())+" del mes de " + ($("#mes").val())+" del año " + ($("#ann").val())
			+"  con el fin de comprobar y manifestar que la obra de arte ó infraestructura y construcciones anexas referenciadas  en el acta pre-registro Codigo PRE-INF " + $("#customActa").val() +" , " + ($("#enca").val())
			+" presentan afectación alguna por los trabajos de sísmica efectuados en desarrollo del programa sísmico "+ window.localStorage.getItem('programa_sismico') +". "              

	
			+ "</td></tr>"   
            + "</tbody>"
			+ "</table>"
			+ "<table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;'>"
			+ "<tbody>"
			+ "<tr>"
			+ "    <td class='encabezado' colspan='5'><b>FIRMAS DE APROBACIÓN</b></td>"
			+ "</tr>"
			+ "<tr>"
			+ "    <td width='100%' colspan='4'><p></p>Los presentes firman en constancia de la evaluación realizada y las partes se declaran entre si, a paz y salvo por todo concepto y responsabilidad en especial en lo referente a las afectaciones a la infraestructura. Para constancia se firma siendo las _________ horas del día ___________ del mes de  ______________ de 201___.</td></tr>"
			        + "<tr>"
                        + " <td>AVISO DE PRIVACIDAD PARA RECOLECCIÓN DE DATOS PERSONALES</td> "
                        + "</tr>"
                        + "<tr>"
						+ " <td style='text-align: justify;font-size:11px;'>En mi calidad de titular de información personal, actuando libre y voluntariamente, al diligenciar los datos aquí solicitados, autorizo a PETROSEISMIC SERVICES S.A, ubicado en la Carrera 23 # 102 - 53 de la ciudad de Bogotá, Teléfono: +57 1 743 3650 , Movíl: +57 3114524265. Entiendo que las políticas para el tratamiento de mi información personal (Ley 1581/2012), así como el procedimiento para elevar cualquier solicitud, queja o reclamo al correo electrónico contactol@petroseismicservices.com, para que de forma directa o a través de terceros realice el tratamiento de mi información personal, el cual consiste en recolectar, almacenar, usar, transferir y administrar mis datos personales, para el acta de infraestructura.</td> "
                       
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
                        + "              <td class='rotate'><div>POST-INF-"+(padDigits($("#customActa").val(), 3))+"-02</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-inf-" + ac +"-"+ 2 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "              <td  class='rotate'><div>POST-INF-"+(padDigits($("#customActa").val(), 3))+"-01</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-inf-" + ac +"-"+ 1 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "            </tr>"
                        + "            <tr>"
                        + "              <td class='rotate'><div>POST-INF-"+(padDigits($("#customActa").val(), 3))+"-04</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-inf-" + ac +"-"+ 4 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "              <td  class='rotate' ><div>POST-INF-"+(padDigits($("#customActa").val(), 3))+"-03</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-inf-" + ac +"-"+ 3 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "            </tr>"
                        + "         </tbody>"
                        + "       </table></p>"	
                        + "     <p style='page-break-after: always;'> "
                        + "     <table width='100%' border='1' cellspacing='0' cellpadding='0'  style='padding-top: 10px;margin-top: 40px'>"
                        + "       <tbody>"
                        + "            <tr>"
                        + "            <tr>"
                        + "              <td class='rotate' style='height:650px;width:30px;'><div>POST-INF-"+(padDigits($("#customActa").val(), 3))+"-06</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-inf-" + ac +"-"+ 6 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "              <td  class='rotate' style='height:650px;width:30px;'><div>POST-INF-"+(padDigits($("#customActa").val(), 3))+"-05</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-inf-" + ac +"-"+ 5 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "            </tr>"
                        + "            <tr>"
                        + "              <td class='rotate' style='height:650px;width:30px;'><div>POST-INF-"+(padDigits($("#customActa").val(), 3))+"-07</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-inf-" + ac +"-"+ 7 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "              <td  class='rotate' style='height:650px;width:30px;'><div>POST-INF-"+(padDigits($("#customActa").val(), 3))+"-08</div></td>"
                        + "              <td  style='width:400px;'><img src='"+ cordova.file.dataDirectory +"/files/post-inf-" + ac +"-"+ 8 + ".jpg' style='transform:rotate(90deg);width: 500px;height: 360px'></td>"
                        + "            </tr>"
                        + "         </tbody>"
                        + "       </table></p>"		
			+ "</body></html>",
            documentSize: 'A4',
            landscape: 'portrait',
            type: 'share',
			fileName: 'post-inf-'+ $("#acta").val()
        }, this.success, this.failure);
}

function capturePhoto(imageNumber) {
    infraImgageNumber  = imageNumber;
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
    var newFileName = 'post-inf-' + ac +'-'+ infraImgageNumber + ".jpg";
    i++;
    
    var dir = '/';
    window.localStorage.setItem('post-inf-' + ac +'-'+ infraImgageNumber,'');

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
	var album = 'post-inf-' + ac;
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
	var topografia = $("#topografia").val();
	var tiempo_construccion = $("#tiempo_construccion").val();
	var elemento = $("#elemento").val();
	var forma = $("#forma").val();
	var trafico_otro = $("#trafico_otro").val();
	var revestimiento_e_m = $("#revestimiento_e_m").val();
	var revestimiento_e_e = $("#revestimiento_e_e").val();
	var revestimiento_e_c = $("#revestimiento_e_c").val();
	var revestimiento_m_m = $("#revestimiento_m_m").val();
	var revestimiento_m_e = $("#revestimiento_m_e").val();
	var revestimiento_m_c = $("#revestimiento_m_c").val();
	var compuerta_e_m = $("#compuerta_e_m").val();
	var compuerta_e_e = $("#compuerta_e_e").val();
	var compuerta_e_c = $("#compuerta_e_c").val();
	var compuerta_m_m = $("#compuerta_m_m").val();
	var compuerta_m_e = $("#compuerta_m_e").val();
	var compuerta_m_c = $("#compuerta_m_c").val();
	var columna_e_m = $("#columna_e_m").val();
	var columna_e_e = $("#columna_e_e").val();
	var columna_e_c = $("#columna_e_c").val();
	var columna_m_m = $("#columna_m_m").val();
	var columna_m_e = $("#columna_m_e").val();
	var columna_m_c = $("#columna_m_c").val();
	var caja_entrada_e_m = $("#caja_entrada_e_m").val();
	var caja_entrada_e_e = $("#caja_entrada_e_e").val();
	var caja_entrada_e_c = $("#caja_entrada_e_c").val();
	var caja_entrada_m_m = $("#caja_entrada_m_m").val();
	var caja_entrada_m_e = $("#caja_entrada_m_e").val();
	var caja_entrada_m_c = $("#caja_entrada_m_c").val();
	var caja_salida_e_m = $("#caja_salida_e_m").val();
	var caja_salida_e_e = $("#caja_salida_e_e").val();
	var caja_salida_e_c = $("#caja_salida_e_c").val();
	var caja_salida_m_m = $("#caja_salida_m_m").val();
	var caja_salida_m_e = $("#caja_salida_m_e").val();
	var caja_salida_m_c = $("#caja_salida_m_c").val();
	var losa_e_m = $("#losa_e_m").val();
	var losa_e_e = $("#losa_e_e").val();
	var losa_e_c = $("#losa_e_c").val();
	var losa_m_m = $("#losa_m_m").val();
	var losa_m_e = $("#losa_m_e").val();
	var losa_m_c = $("#losa_m_c").val();
	var torre_e_m = $("#torre_e_m").val();
	var torre_e_e = $("#torre_e_e").val();
	var torre_e_c = $("#torre_e_c").val();
	var torre_m_m = $("#torre_m_m").val();
	var torre_m_e = $("#torre_m_e").val();
	var torre_m_c = $("#torre_m_c").val();
	var cerramiento_e_m = $("#cerramiento_e_m").val();
	var cerramiento_e_e = $("#cerramiento_e_e").val();
	var cerramiento_e_c = $("#cerramiento_e_c").val();
	var cerramiento_m_m = $("#cerramiento_m_m").val();
	var cerramiento_m_e = $("#cerramiento_m_e").val();
	var cerramiento_m_c = $("#cerramiento_m_c").val();
	var muro_e_m = $("#muro_e_m").val();
	var muro_e_e = $("#muro_e_e").val();
	var muro_e_c = $("#muro_e_c").val();
	var muro_m_m = $("#muro_m_m").val();
	var muro_m_e = $("#muro_m_e").val();
	var muro_m_c = $("#muro_m_c").val();
	var gavion_e_m = $("#gavion_e_m").val();
	var gavion_e_e = $("#gavion_e_e").val();
	var gavion_e_c = $("#gavion_e_c").val();
	var gavion_m_m = $("#gavion_m_m").val();
	var gavion_m_e = $("#gavion_m_e").val();
	var gavion_m_c = $("#gavion_m_c").val();
	var pilotes_e_m = $("#pilotes_e_m").val();
	var pilotes_e_e = $("#pilotes_e_e").val();
	var pilotes_e_c = $("#pilotes_e_c").val();
	var pilotes_m_m = $("#pilotes_m_m").val();
	var pilotes_m_e = $("#pilotes_m_e").val();
	var pilotes_m_c = $("#pilotes_m_c").val();
	var captacion_sumergida_e_m = $("#captacion_sumergida_e_m").val();
	var captacion_sumergida_e_e = $("#captacion_sumergida_e_e").val();
	var captacion_sumergida_e_c = $("#captacion_sumergida_e_c").val();
	var captacion_sumergida_m_m = $("#captacion_sumergida_m_m").val();
	var captacion_sumergida_m_e = $("#captacion_sumergida_m_e").val();
	var captacion_sumergida_m_c = $("#captacion_sumergida_m_c").val();
	var rejilla_e_m = $("#rejilla_e_m").val();
	var rejilla_e_e = $("#rejilla_e_e").val();
	var rejilla_e_c = $("#rejilla_e_c").val();
	var rejilla_m_m = $("#rejilla_m_m").val();
	var rejilla_m_e = $("#rejilla_m_e").val();
	var rejilla_m_c = $("#rejilla_m_c").val();
	var conduccion_e_m = $("#conduccion_e_m").val();
	var conduccion_e_e = $("#conduccion_e_e").val();
	var conduccion_e_c = $("#conduccion_e_c").val();
	var conduccion_m_m = $("#conduccion_m_m").val();
	var conduccion_m_e = $("#conduccion_m_e").val();
	var conduccion_m_c = $("#conduccion_m_c").val();
	var desarenador_e_m = $("#desarenador_e_m").val();
	var desarenador_e_e = $("#desarenador_e_e").val();
	var desarenador_e_c = $("#desarenador_e_c").val();
	var desarenador_m_m = $("#desarenador_m_m").val();
	var desarenador_m_e = $("#desarenador_m_e").val();
	var desarenador_m_c = $("#desarenador_m_c").val();
	var tanque_desarenador_e_m = $("#tanque_desarenador_e_m").val();
	var tanque_desarenador_e_e = $("#tanque_desarenador_e_e").val();
	var tanque_desarenador_e_c = $("#tanque_desarenador_e_c").val();
	var tanque_desarenador_m_m = $("#tanque_desarenador_m_m").val();
	var tanque_desarenador_m_e = $("#tanque_desarenador_m_e").val();
	var tanque_desarenador_m_c = $("#tanque_desarenador_m_c").val();
	var conduccion_desarenador_e_m = $("#conduccion_desarenador_e_m").val();
	var conduccion_desarenador_e_e = $("#conduccion_desarenador_e_e").val();
	var conduccion_desarenador_e_c = $("#conduccion_desarenador_e_c").val();
	var conduccion_desarenador_m_m = $("#conduccion_desarenador_m_m").val();
	var conduccion_desarenador_m_e = $("#conduccion_desarenador_m_e").val();
	var conduccion_desarenador_m_c = $("#conduccion_desarenador_m_c").val();
	var tanque_almacenamiento_e_m = $("#tanque_almacenamiento_e_m").val();
	var tanque_almacenamiento_e_e = $("#tanque_almacenamiento_e_e").val();
	var tanque_almacenamiento_e_c = $("#tanque_almacenamiento_e_c").val();
	var tanque_almacenamiento_m_m = $("#tanque_almacenamiento_m_m").val();
	var tanque_almacenamiento_m_e = $("#tanque_almacenamiento_m_e").val();
	var tanque_almacenamiento_m_c = $("#tanque_almacenamiento_m_c").val();
	var conduccion_almacenamiento_e_m = $("#conduccion_almacenamiento_e_m").val();
	var conduccion_almacenamiento_e_e = $("#conduccion_almacenamiento_e_e").val();
	var conduccion_almacenamiento_e_c = $("#conduccion_almacenamiento_e_c").val();
	var conduccion_almacenamiento_m_m = $("#conduccion_almacenamiento_m_m").val();
	var conduccion_almacenamiento_m_e = $("#conduccion_almacenamiento_m_e").val();
	var conduccion_almacenamiento_m_c = $("#conduccion_almacenamiento_m_c").val();
	var tanque_distribucion_e_m = $("#tanque_distribucion_e_m").val();
	var tanque_distribucion_e_e = $("#tanque_distribucion_e_e").val();
	var tanque_distribucion_e_c = $("#tanque_distribucion_e_c").val();
	var tanque_distribucion_m_m = $("#tanque_distribucion_m_m").val();
	var tanque_distribucion_m_e = $("#tanque_distribucion_m_e").val();
	var tanque_distribucion_m_c = $("#tanque_distribucion_m_c").val();
	var tuberia_distribucion_e_m = $("#tuberia_distribucion_e_m").val();
	var tuberia_distribucion_e_e = $("#tuberia_distribucion_e_e").val();
	var tuberia_distribucion_e_c = $("#tuberia_distribucion_e_c").val();
	var tuberia_distribucion_m_m = $("#tuberia_distribucion_m_m").val();
	var tuberia_distribucion_m_e = $("#tuberia_distribucion_m_e").val();
	var tuberia_distribucion_m_c = $("#tuberia_distribucion_m_c").val();
	var valvula_control_e_m = $("#valvula_control_e_m").val();
	var valvula_control_e_e = $("#valvula_control_e_e").val();
	var valvula_control_e_c = $("#valvula_control_e_c").val();
	var valvula_control_m_m = $("#valvula_control_m_m").val();
	var valvula_control_m_e = $("#valvula_control_m_e").val();
	var valvula_control_m_c = $("#valvula_control_m_c").val();
	var otro1_e_m = $("#otro1_e_m").val();
	var otro1_e_e = $("#otro1_e_e").val();
	var otro1_e_c = $("#otro1_e_c").val();
	var otro1_m_m = $("#otro1_m_m").val();
	var otro1_m_e = $("#otro1_m_e").val();
	var otro1_m_c = $("#otro1_m_c").val();
	var otro2_e_m = $("#otro2_e_m").val();
	var otro2_e_e = $("#otro2_e_e").val();
	var otro2_e_c = $("#otro2_e_c").val();
	var otro2_m_m = $("#otro2_m_m").val();
	var otro2_m_e = $("#otro2_m_e").val();
	var otro2_m_c = $("#otro2_m_c").val();
	var otro3_e_m = $("#otro3_e_m").val();
	var otro3_e_e = $("#otro3_e_e").val();
	var otro3_e_c = $("#otro3_e_c").val();
	var otro3_m_m = $("#otro3_m_m").val();
	var otro3_m_e = $("#otro3_m_e").val();
	var otro3_m_c = $("#otro3_m_c").val();
	var otro4_e_m = $("#otro4_e_m").val();
	var otro4_e_e = $("#otro4_e_e").val();
	var otro4_e_c = $("#otro4_e_c").val();
	var otro4_m_m = $("#otro4_m_m").val();
	var otro4_m_e = $("#otro4_m_e").val();
	var otro4_m_c = $("#otro4_m_c").val();
	var otro5_e_m = $("#otro5_e_m").val();
	var otro5_e_e = $("#otro5_e_e").val();
	var otro5_e_c = $("#otro5_e_c").val();
	var otro5_m_m = $("#otro5_m_m").val();
	var otro5_m_e = $("#otro5_m_e").val();
	var otro5_m_c = $("#otro5_m_c").val();
	var otro1_nombre = $("#otro1_nombre").val();
	var otro2_nombre = $("#otro2_nombre").val();
	var otro3_nombre = $("#otro3_nombre").val();
	var otro4_nombre = $("#otro4_nombre").val();
	var otro5_nombre = $("#otro5_nombre").val();
	var observa = $("#observa").val();
	var rela_repre_prop = $("#rela_repre_prop").val();
	var falta_rela = $("#falta_rela").val();
	var ancho = $("#ancho").val();
	var largo = $("#largo").val();
	var altura = $("#altura").val();
	var profundidad = $("#profundidad").val();
	var laminar = $("#laminar").is(':checked');
	var surcos = $("#surcos").is(':checked');
	var carcavas = $("#carcavas").is(':checked');
	var socavacion = $("#socavacion").is(':checked');
	var erosivos_ninguno = $("#erosivos_ninguno").is(':checked');
	var caidas = $("#caidas").is(':checked');
	var deslizamientos = $("#deslizamientos").is(':checked');
	var volcamiento = $("#volcamiento").is(':checked');
	var flujos = $("#flujos").is(':checked');
	var mov_ninguno = $("#mov_ninguno").is(':checked');
	var socavamiento = $("#socavamiento").is(':checked');
	var erosion = $("#erosion").is(':checked');
	var desprendimientos = $("#desprendimientos").is(':checked');
	var volcamientos = $("#volcamientos").is(':checked');
	var cizallamiento = $("#cizallamiento").is(':checked');
	var caudal_permanente = $("#caudal_permanente").is(':checked');
	var caudal_intermitente = $("#caudal_intermitente").is(':checked');
	var caudal_efimero = $("#caudal_efimero").is(':checked');
	var caudal_otro = $("#caudal_otro").is(':checked');
	var trafico_pesado = $("#trafico_pesado").is(':checked');
	var trafico_liviano = $("#trafico_liviano").is(':checked');
	var constru_si = $("#constru_si").is(':checked');
        
        var puente = $("#puente").is(':checked');
        var boxcoulvert = $("#boxcoulvert").is(':checked');
        var canal = $("#canal").is(':checked');
        var bocatoma = $("#bocatoma").is(':checked');
        var acueducto = $("#acueducto").is(':checked');
        var tanque_elevado = $("#tanque_elevado").is(':checked');
        var polideportivo = $("#polideportivo").is(':checked');
        var antena_telefonica = $("#antena_telefonica").is(':checked');
        var dique_presa = $("#dique_presa").is(':checked');
        
        
        
    var fechaHoraInicio = window.localStorage.getItem("fechaHoraIni");
    var usuario = window.localStorage.getItem("current_user");
    var estado = '1';
	
    if (window.localStorage.getItem("editar") === 'true') {

        var executeQuery = "UPDATE post_infra_p SET "				
				+ "permiso=?,"
				+ "P_DEPTO=?,"
				+ "P_MUN=?,"
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
				+ "topografia=?,"
				+ "tiempo_construccion=?,"
				+ "elemento=?,"
				+ "forma=?,"
				+ "trafico_otro=?,"
				+ "revestimiento_e_m=?,"
				+ "revestimiento_e_e=?,"
				+ "revestimiento_e_c=?,"
				+ "revestimiento_m_m=?,"
				+ "revestimiento_m_e=?,"
				+ "revestimiento_m_c=?,"
				+ "compuerta_e_m=?,"
				+ "compuerta_e_e=?,"
				+ "compuerta_e_c=?,"
				+ "compuerta_m_m=?,"
				+ "compuerta_m_e=?,"
				+ "compuerta_m_c=?,"
				+ "columna_e_m=?,"
				+ "columna_e_e=?,"
				+ "columna_e_c=?,"
				+ "columna_m_m=?,"
				+ "columna_m_e=?,"
				+ "columna_m_c=?,"
				+ "caja_entrada_e_m=?,"
				+ "caja_entrada_e_e=?,"
				+ "caja_entrada_e_c=?,"
				+ "caja_entrada_m_m=?,"
				+ "caja_entrada_m_e=?,"
				+ "caja_entrada_m_c=?,"
				+ "caja_salida_e_m=?,"
				+ "caja_salida_e_e=?,"
				+ "caja_salida_e_c=?,"
				+ "caja_salida_m_m=?,"
				+ "caja_salida_m_e=?,"
				+ "caja_salida_m_c=?,"
				+ "losa_e_m=?,"
				+ "losa_e_e=?,"
				+ "losa_e_c=?,"
				+ "losa_m_m=?,"
				+ "losa_m_e=?,"
				+ "losa_m_c=?,"
				+ "torre_e_m=?,"
				+ "torre_e_e=?,"
				+ "torre_e_c=?,"
				+ "torre_m_m=?,"
				+ "torre_m_e=?,"
				+ "torre_m_c=?,"
				+ "cerramiento_e_m=?,"
				+ "cerramiento_e_e=?,"
				+ "cerramiento_e_c=?,"
				+ "cerramiento_m_m=?,"
				+ "cerramiento_m_e=?,"
				+ "cerramiento_m_c=?,"
				+ "muro_e_m=?,"
				+ "muro_e_e=?,"
				+ "muro_e_c=?,"
				+ "muro_m_m=?,"
				+ "muro_m_e=?,"
				+ "muro_m_c=?,"
				+ "gavion_e_m=?,"
				+ "gavion_e_e=?,"
				+ "gavion_e_c=?,"
				+ "gavion_m_m=?,"
				+ "gavion_m_e=?,"
				+ "gavion_m_c=?,"
				+ "pilotes_e_m=?,"
				+ "pilotes_e_e=?,"
				+ "pilotes_e_c=?,"
				+ "pilotes_m_m=?,"
				+ "pilotes_m_e=?,"
				+ "pilotes_m_c=?,"
				+ "captacion_sumergida_e_m=?,"
				+ "captacion_sumergida_e_e=?,"
				+ "captacion_sumergida_e_c=?,"
				+ "captacion_sumergida_m_m=?,"
				+ "captacion_sumergida_m_e=?,"
				+ "captacion_sumergida_m_c=?,"
				+ "rejilla_e_m=?,"
				+ "rejilla_e_e=?,"
				+ "rejilla_e_c=?,"
				+ "rejilla_m_m=?,"
				+ "rejilla_m_e=?,"
				+ "rejilla_m_c=?,"
				+ "conduccion_e_m=?,"
				+ "conduccion_e_e=?,"
				+ "conduccion_e_c=?,"
				+ "conduccion_m_m=?,"
				+ "conduccion_m_e=?,"
				+ "conduccion_m_c=?,"
				+ "desarenador_e_m=?,"
				+ "desarenador_e_e=?,"
				+ "desarenador_e_c=?,"
				+ "desarenador_m_m=?,"
				+ "desarenador_m_e=?,"
				+ "desarenador_m_c=?,"
				+ "tanque_desarenador_e_m=?,"
				+ "tanque_desarenador_e_e=?,"
				+ "tanque_desarenador_e_c=?,"
				+ "tanque_desarenador_m_m=?,"
				+ "tanque_desarenador_m_e=?,"
				+ "tanque_desarenador_m_c=?,"
				+ "conduccion_desarenador_e_m=?,"
				+ "conduccion_desarenador_e_e=?,"
				+ "conduccion_desarenador_e_c=?,"
				+ "conduccion_desarenador_m_m=?,"
				+ "conduccion_desarenador_m_e=?,"
				+ "conduccion_desarenador_m_c=?,"
				+ "tanque_almacenamiento_e_m=?,"
				+ "tanque_almacenamiento_e_e=?,"
				+ "tanque_almacenamiento_e_c=?,"
				+ "tanque_almacenamiento_m_m=?,"
				+ "tanque_almacenamiento_m_e=?,"
				+ "tanque_almacenamiento_m_c=?,"
				+ "conduccion_almacenamiento_e_m=?,"
				+ "conduccion_almacenamiento_e_e=?,"
				+ "conduccion_almacenamiento_e_c=?,"
				+ "conduccion_almacenamiento_m_m=?,"
				+ "conduccion_almacenamiento_m_e=?,"
				+ "conduccion_almacenamiento_m_c=?,"
				+ "tanque_distribucion_e_m=?,"
				+ "tanque_distribucion_e_e=?,"
				+ "tanque_distribucion_e_c=?,"
				+ "tanque_distribucion_m_m=?,"
				+ "tanque_distribucion_m_e=?,"
				+ "tanque_distribucion_m_c=?,"
				+ "tuberia_distribucion_e_m=?,"
				+ "tuberia_distribucion_e_e=?,"
				+ "tuberia_distribucion_e_c=?,"
				+ "tuberia_distribucion_m_m=?,"
				+ "tuberia_distribucion_m_e=?,"
				+ "tuberia_distribucion_m_c=?,"
				+ "valvula_control_e_m=?,"
				+ "valvula_control_e_e=?,"
				+ "valvula_control_e_c=?,"
				+ "valvula_control_m_m=?,"
				+ "valvula_control_m_e=?,"
				+ "valvula_control_m_c=?,"
				+ "otro1_e_m=?,"
				+ "otro1_e_e=?,"
				+ "otro1_e_c=?,"
				+ "otro1_m_m=?,"
				+ "otro1_m_e=?,"
				+ "otro1_m_c=?,"
				+ "otro2_e_m=?,"
				+ "otro2_e_e=?,"
				+ "otro2_e_c=?,"
				+ "otro2_m_m=?,"
				+ "otro2_m_e=?,"
				+ "otro2_m_c=?,"
				+ "otro3_e_m=?,"
				+ "otro3_e_e=?,"
				+ "otro3_e_c=?,"
				+ "otro3_m_m=?,"
				+ "otro3_m_e=?,"
				+ "otro3_m_c=?,"
				+ "otro4_e_m=?,"
				+ "otro4_e_e=?,"
				+ "otro4_e_c=?,"
				+ "otro4_m_m=?,"
				+ "otro4_m_e=?,"
				+ "otro4_m_c=?,"
				+ "otro5_e_m=?,"
				+ "otro5_e_e=?,"
				+ "otro5_e_c=?,"
				+ "otro5_m_m=?,"
				+ "otro5_m_e=?,"
				+ "otro5_m_c=?,"
				+ "otro1_nombre=?,"
				+ "otro2_nombre=?,"
				+ "otro3_nombre=?,"
				+ "otro4_nombre=?,"
				+ "otro5_nombre=?,"
				+ "observa=?,"
				+ "rela_repre_prop=?,"
				+ "falta_rela=?,"
				+ "ancho=?,"
				+ "largo=?,"
				+ "altura=?,"
				+ "profundidad=?,"
				+ "laminar=?,"
				+ "surcos=?,"
				+ "carcavas=?,"
				+ "socavacion=?,"
				+ "erosivos_ninguno=?,"
				+ "caidas=?,"
				+ "deslizamientos=?,"
				+ "volcamiento=?,"
				+ "flujos=?,"
				+ "mov_ninguno=?,"
				+ "socavamiento=?,"
				+ "erosion=?,"
				+ "desprendimientos=?,"
				+ "volcamientos=?,"
				+ "cizallamiento=?,"
				+ "caudal_permanente=?,"
				+ "caudal_intermitente=?,"
				+ "caudal_efimero=?,"
				+ "caudal_otro=?,"
				+ "trafico_pesado=?,"
				+ "trafico_liviano=?,"
                                
                                + "puente=?,"
                                + "boxcoulvert=?,"
                                + "canal=?,"
                                + "bocatoma=?,"
                                + "acueducto=?,"
                                + "tanque_elevado=?,"
                                + "polideportivo=?,"
                                + "antena_telefonica=?,"
                                + "dique_presa=?,"
                        
				+ "constru_si=?"
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
				topografia,
				tiempo_construccion,
				elemento,
				forma,
				trafico_otro,
				revestimiento_e_m,
				revestimiento_e_e,
				revestimiento_e_c,
				revestimiento_m_m,
				revestimiento_m_e,
				revestimiento_m_c,
				compuerta_e_m,
				compuerta_e_e,
				compuerta_e_c,
				compuerta_m_m,
				compuerta_m_e,
				compuerta_m_c,
				columna_e_m,
				columna_e_e,
				columna_e_c,
				columna_m_m,
				columna_m_e,
				columna_m_c,
				caja_entrada_e_m,
				caja_entrada_e_e,
				caja_entrada_e_c,
				caja_entrada_m_m,
				caja_entrada_m_e,
				caja_entrada_m_c,
				caja_salida_e_m,
				caja_salida_e_e,
				caja_salida_e_c,
				caja_salida_m_m,
				caja_salida_m_e,
				caja_salida_m_c,
				losa_e_m,
				losa_e_e,
				losa_e_c,
				losa_m_m,
				losa_m_e,
				losa_m_c,
				torre_e_m,
				torre_e_e,
				torre_e_c,
				torre_m_m,
				torre_m_e,
				torre_m_c,
				cerramiento_e_m,
				cerramiento_e_e,
				cerramiento_e_c,
				cerramiento_m_m,
				cerramiento_m_e,
				cerramiento_m_c,
				muro_e_m,
				muro_e_e,
				muro_e_c,
				muro_m_m,
				muro_m_e,
				muro_m_c,
				gavion_e_m,
				gavion_e_e,
				gavion_e_c,
				gavion_m_m,
				gavion_m_e,
				gavion_m_c,
				pilotes_e_m,
				pilotes_e_e,
				pilotes_e_c,
				pilotes_m_m,
				pilotes_m_e,
				pilotes_m_c,
				captacion_sumergida_e_m,
				captacion_sumergida_e_e,
				captacion_sumergida_e_c,
				captacion_sumergida_m_m,
				captacion_sumergida_m_e,
				captacion_sumergida_m_c,
				rejilla_e_m,
				rejilla_e_e,
				rejilla_e_c,
				rejilla_m_m,
				rejilla_m_e,
				rejilla_m_c,
				conduccion_e_m,
				conduccion_e_e,
				conduccion_e_c,
				conduccion_m_m,
				conduccion_m_e,
				conduccion_m_c,
				desarenador_e_m,
				desarenador_e_e,
				desarenador_e_c,
				desarenador_m_m,
				desarenador_m_e,
				desarenador_m_c,
				tanque_desarenador_e_m,
				tanque_desarenador_e_e,
				tanque_desarenador_e_c,
				tanque_desarenador_m_m,
				tanque_desarenador_m_e,
				tanque_desarenador_m_c,
				conduccion_desarenador_e_m,
				conduccion_desarenador_e_e,
				conduccion_desarenador_e_c,
				conduccion_desarenador_m_m,
				conduccion_desarenador_m_e,
				conduccion_desarenador_m_c,
				tanque_almacenamiento_e_m,
				tanque_almacenamiento_e_e,
				tanque_almacenamiento_e_c,
				tanque_almacenamiento_m_m,
				tanque_almacenamiento_m_e,
				tanque_almacenamiento_m_c,
				conduccion_almacenamiento_e_m,
				conduccion_almacenamiento_e_e,
				conduccion_almacenamiento_e_c,
				conduccion_almacenamiento_m_m,
				conduccion_almacenamiento_m_e,
				conduccion_almacenamiento_m_c,
				tanque_distribucion_e_m,
				tanque_distribucion_e_e,
				tanque_distribucion_e_c,
				tanque_distribucion_m_m,
				tanque_distribucion_m_e,
				tanque_distribucion_m_c,
				tuberia_distribucion_e_m,
				tuberia_distribucion_e_e,
				tuberia_distribucion_e_c,
				tuberia_distribucion_m_m,
				tuberia_distribucion_m_e,
				tuberia_distribucion_m_c,
				valvula_control_e_m,
				valvula_control_e_e,
				valvula_control_e_c,
				valvula_control_m_m,
				valvula_control_m_e,
				valvula_control_m_c,
				otro1_e_m,
				otro1_e_e,
				otro1_e_c,
				otro1_m_m,
				otro1_m_e,
				otro1_m_c,
				otro2_e_m,
				otro2_e_e,
				otro2_e_c,
				otro2_m_m,
				otro2_m_e,
				otro2_m_c,
				otro3_e_m,
				otro3_e_e,
				otro3_e_c,
				otro3_m_m,
				otro3_m_e,
				otro3_m_c,
				otro4_e_m,
				otro4_e_e,
				otro4_e_c,
				otro4_m_m,
				otro4_m_e,
				otro4_m_c,
				otro5_e_m,
				otro5_e_e,
				otro5_e_c,
				otro5_m_m,
				otro5_m_e,
				otro5_m_c,
				otro1_nombre,
				otro2_nombre,
				otro3_nombre,
				otro4_nombre,
				otro5_nombre,
				observa,
				rela_repre_prop,
				falta_rela,
				ancho,
				largo,
				altura,
				profundidad,
				laminar,
				surcos,
				carcavas,
				socavacion,
				erosivos_ninguno,
				caidas,
				deslizamientos,
				volcamiento,
				flujos,
				mov_ninguno,
				socavamiento,
				erosion,
				desprendimientos,
				volcamientos,
				cizallamiento,
				caudal_permanente,
				caudal_intermitente,
				caudal_efimero,
				caudal_otro,
				trafico_pesado,
				trafico_liviano,
                                puente,
                                boxcoulvert,
                                canal,
                                bocatoma,
                                acueducto,
                                tanque_elevado,
                                polideportivo,
                                antena_telefonica,
                                dique_presa,
				constru_si
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
            var executeQuery = "INSERT INTO post_infra_p ("
                    + "id,"
					+ "programa_sismico,"
					+ "operadora,"
					+ "fecha_modificada,"
					+ "linea,"
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
					+ "topografia,"
					+ "tiempo_construccion,"
					+ "elemento,"
					+ "forma,"
					+ "trafico_otro,"
					+ "revestimiento_e_m,"
					+ "revestimiento_e_e,"
					+ "revestimiento_e_c,"
					+ "revestimiento_m_m,"
					+ "revestimiento_m_e,"
					+ "revestimiento_m_c,"
					+ "compuerta_e_m,"
					+ "compuerta_e_e,"
					+ "compuerta_e_c,"
					+ "compuerta_m_m,"
					+ "compuerta_m_e,"
					+ "compuerta_m_c,"
					+ "columna_e_m,"
					+ "columna_e_e,"
					+ "columna_e_c,"
					+ "columna_m_m,"
					+ "columna_m_e,"
					+ "columna_m_c,"
					+ "caja_entrada_e_m,"
					+ "caja_entrada_e_e,"
					+ "caja_entrada_e_c,"
					+ "caja_entrada_m_m,"
					+ "caja_entrada_m_e,"
					+ "caja_entrada_m_c,"
					+ "caja_salida_e_m,"
					+ "caja_salida_e_e,"
					+ "caja_salida_e_c,"
					+ "caja_salida_m_m,"
					+ "caja_salida_m_e,"
					+ "caja_salida_m_c,"
					+ "losa_e_m,"
					+ "losa_e_e,"
					+ "losa_e_c,"
					+ "losa_m_m,"
					+ "losa_m_e,"
					+ "losa_m_c,"
					+ "torre_e_m,"
					+ "torre_e_e,"
					+ "torre_e_c,"
					+ "torre_m_m,"
					+ "torre_m_e,"
					+ "torre_m_c,"
					+ "cerramiento_e_m,"
					+ "cerramiento_e_e,"
					+ "cerramiento_e_c,"
					+ "cerramiento_m_m,"
					+ "cerramiento_m_e,"
					+ "cerramiento_m_c,"
					+ "muro_e_m,"
					+ "muro_e_e,"
					+ "muro_e_c,"
					+ "muro_m_m,"
					+ "muro_m_e,"
					+ "muro_m_c,"
					+ "gavion_e_m,"
					+ "gavion_e_e,"
					+ "gavion_e_c,"
					+ "gavion_m_m,"
					+ "gavion_m_e,"
					+ "gavion_m_c,"
					+ "pilotes_e_m,"
					+ "pilotes_e_e,"
					+ "pilotes_e_c,"
					+ "pilotes_m_m,"
					+ "pilotes_m_e,"
					+ "pilotes_m_c,"
					+ "captacion_sumergida_e_m,"
					+ "captacion_sumergida_e_e,"
					+ "captacion_sumergida_e_c,"
					+ "captacion_sumergida_m_m,"
					+ "captacion_sumergida_m_e,"
					+ "captacion_sumergida_m_c,"
					+ "rejilla_e_m,"
					+ "rejilla_e_e,"
					+ "rejilla_e_c,"
					+ "rejilla_m_m,"
					+ "rejilla_m_e,"
					+ "rejilla_m_c,"
					+ "conduccion_e_m,"
					+ "conduccion_e_e,"
					+ "conduccion_e_c,"
					+ "conduccion_m_m,"
					+ "conduccion_m_e,"
					+ "conduccion_m_c,"
					+ "desarenador_e_m,"
					+ "desarenador_e_e,"
					+ "desarenador_e_c,"
					+ "desarenador_m_m,"
					+ "desarenador_m_e,"
					+ "desarenador_m_c,"
					+ "tanque_desarenador_e_m,"
					+ "tanque_desarenador_e_e,"
					+ "tanque_desarenador_e_c,"
					+ "tanque_desarenador_m_m,"
					+ "tanque_desarenador_m_e,"
					+ "tanque_desarenador_m_c,"
					+ "conduccion_desarenador_e_m,"
					+ "conduccion_desarenador_e_e,"
					+ "conduccion_desarenador_e_c,"
					+ "conduccion_desarenador_m_m,"
					+ "conduccion_desarenador_m_e,"
					+ "conduccion_desarenador_m_c,"
					+ "tanque_almacenamiento_e_m,"
					+ "tanque_almacenamiento_e_e,"
					+ "tanque_almacenamiento_e_c,"
					+ "tanque_almacenamiento_m_m,"
					+ "tanque_almacenamiento_m_e,"
					+ "tanque_almacenamiento_m_c,"
					+ "conduccion_almacenamiento_e_m,"
					+ "conduccion_almacenamiento_e_e,"
					+ "conduccion_almacenamiento_e_c,"
					+ "conduccion_almacenamiento_m_m,"
					+ "conduccion_almacenamiento_m_e,"
					+ "conduccion_almacenamiento_m_c,"
					+ "tanque_distribucion_e_m,"
					+ "tanque_distribucion_e_e,"
					+ "tanque_distribucion_e_c,"
					+ "tanque_distribucion_m_m,"
					+ "tanque_distribucion_m_e,"
					+ "tanque_distribucion_m_c,"
					+ "tuberia_distribucion_e_m,"
					+ "tuberia_distribucion_e_e,"
					+ "tuberia_distribucion_e_c,"
					+ "tuberia_distribucion_m_m,"
					+ "tuberia_distribucion_m_e,"
					+ "tuberia_distribucion_m_c,"
					+ "valvula_control_e_m,"
					+ "valvula_control_e_e,"
					+ "valvula_control_e_c,"
					+ "valvula_control_m_m,"
					+ "valvula_control_m_e,"
					+ "valvula_control_m_c,"
					+ "otro1_e_m,"
					+ "otro1_e_e,"
					+ "otro1_e_c,"
					+ "otro1_m_m,"
					+ "otro1_m_e,"
					+ "otro1_m_c,"
					+ "otro2_e_m,"
					+ "otro2_e_e,"
					+ "otro2_e_c,"
					+ "otro2_m_m,"
					+ "otro2_m_e,"
					+ "otro2_m_c,"
					+ "otro3_e_m,"
					+ "otro3_e_e,"
					+ "otro3_e_c,"
					+ "otro3_m_m,"
					+ "otro3_m_e,"
					+ "otro3_m_c,"
					+ "otro4_e_m,"
					+ "otro4_e_e,"
					+ "otro4_e_c,"
					+ "otro4_m_m,"
					+ "otro4_m_e,"
					+ "otro4_m_c,"
					+ "otro5_e_m,"
					+ "otro5_e_e,"
					+ "otro5_e_c,"
					+ "otro5_m_m,"
					+ "otro5_m_e,"
					+ "otro5_m_c,"
					+ "otro1_nombre,"
					+ "otro2_nombre,"
					+ "otro3_nombre,"
					+ "otro4_nombre,"
					+ "otro5_nombre,"
					+ "observa,"
					+ "rela_repre_prop,"
					+ "falta_rela,"
					+ "ancho,"
					+ "largo,"
					+ "altura,"
					+ "profundidad,"
					+ "laminar,"
					+ "surcos,"
					+ "carcavas,"
					+ "socavacion,"
					+ "erosivos_ninguno,"
					+ "caidas,"
					+ "deslizamientos,"
					+ "volcamiento,"
					+ "flujos,"
					+ "mov_ninguno,"
					+ "socavamiento,"
					+ "erosion,"
					+ "desprendimientos,"
					+ "volcamientos,"
					+ "cizallamiento,"
					+ "caudal_permanente,"
					+ "caudal_intermitente,"
					+ "caudal_efimero,"
					+ "caudal_otro,"
					+ "trafico_pesado,"
					+ "trafico_liviano,"
                                        + "puente,"
                                        + "boxcoulvert,"
                                        + "canal,"
                                        + "bocatoma,"
                                        + "acueducto,"
                                        + "tanque_elevado,"
                                        + "polideportivo,"
                                        + "antena_telefonica,"
                                        + "dique_presa,"
					+ "constru_si,"
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
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, " 
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, " 
					+ "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, " 
					+ "?, ?, ? );";
					

            transaction.executeSql(executeQuery, [id,
				programa_sismico,
                operadora,
                fecha,
                linea,  
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
				topografia,
				tiempo_construccion,
				elemento,
				forma,
				trafico_otro,
				revestimiento_e_m,
				revestimiento_e_e,
				revestimiento_e_c,
				revestimiento_m_m,
				revestimiento_m_e,
				revestimiento_m_c,
				compuerta_e_m,
				compuerta_e_e,
				compuerta_e_c,
				compuerta_m_m,
				compuerta_m_e,
				compuerta_m_c,
				columna_e_m,
				columna_e_e,
				columna_e_c,
				columna_m_m,
				columna_m_e,
				columna_m_c,
				caja_entrada_e_m,
				caja_entrada_e_e,
				caja_entrada_e_c,
				caja_entrada_m_m,
				caja_entrada_m_e,
				caja_entrada_m_c,
				caja_salida_e_m,
				caja_salida_e_e,
				caja_salida_e_c,
				caja_salida_m_m,
				caja_salida_m_e,
				caja_salida_m_c,
				losa_e_m,
				losa_e_e,
				losa_e_c,
				losa_m_m,
				losa_m_e,
				losa_m_c,
				torre_e_m,
				torre_e_e,
				torre_e_c,
				torre_m_m,
				torre_m_e,
				torre_m_c,
				cerramiento_e_m,
				cerramiento_e_e,
				cerramiento_e_c,
				cerramiento_m_m,
				cerramiento_m_e,
				cerramiento_m_c,
				muro_e_m,
				muro_e_e,
				muro_e_c,
				muro_m_m,
				muro_m_e,
				muro_m_c,
				gavion_e_m,
				gavion_e_e,
				gavion_e_c,
				gavion_m_m,
				gavion_m_e,
				gavion_m_c,
				pilotes_e_m,
				pilotes_e_e,
				pilotes_e_c,
				pilotes_m_m,
				pilotes_m_e,
				pilotes_m_c,
				captacion_sumergida_e_m,
				captacion_sumergida_e_e,
				captacion_sumergida_e_c,
				captacion_sumergida_m_m,
				captacion_sumergida_m_e,
				captacion_sumergida_m_c,
				rejilla_e_m,
				rejilla_e_e,
				rejilla_e_c,
				rejilla_m_m,
				rejilla_m_e,
				rejilla_m_c,
				conduccion_e_m,
				conduccion_e_e,
				conduccion_e_c,
				conduccion_m_m,
				conduccion_m_e,
				conduccion_m_c,
				desarenador_e_m,
				desarenador_e_e,
				desarenador_e_c,
				desarenador_m_m,
				desarenador_m_e,
				desarenador_m_c,
				tanque_desarenador_e_m,
				tanque_desarenador_e_e,
				tanque_desarenador_e_c,
				tanque_desarenador_m_m,
				tanque_desarenador_m_e,
				tanque_desarenador_m_c,
				conduccion_desarenador_e_m,
				conduccion_desarenador_e_e,
				conduccion_desarenador_e_c,
				conduccion_desarenador_m_m,
				conduccion_desarenador_m_e,
				conduccion_desarenador_m_c,
				tanque_almacenamiento_e_m,
				tanque_almacenamiento_e_e,
				tanque_almacenamiento_e_c,
				tanque_almacenamiento_m_m,
				tanque_almacenamiento_m_e,
				tanque_almacenamiento_m_c,
				conduccion_almacenamiento_e_m,
				conduccion_almacenamiento_e_e,
				conduccion_almacenamiento_e_c,
				conduccion_almacenamiento_m_m,
				conduccion_almacenamiento_m_e,
				conduccion_almacenamiento_m_c,
				tanque_distribucion_e_m,
				tanque_distribucion_e_e,
				tanque_distribucion_e_c,
				tanque_distribucion_m_m,
				tanque_distribucion_m_e,
				tanque_distribucion_m_c,
				tuberia_distribucion_e_m,
				tuberia_distribucion_e_e,
				tuberia_distribucion_e_c,
				tuberia_distribucion_m_m,
				tuberia_distribucion_m_e,
				tuberia_distribucion_m_c,
				valvula_control_e_m,
				valvula_control_e_e,
				valvula_control_e_c,
				valvula_control_m_m,
				valvula_control_m_e,
				valvula_control_m_c,
				otro1_e_m,
				otro1_e_e,
				otro1_e_c,
				otro1_m_m,
				otro1_m_e,
				otro1_m_c,
				otro2_e_m,
				otro2_e_e,
				otro2_e_c,
				otro2_m_m,
				otro2_m_e,
				otro2_m_c,
				otro3_e_m,
				otro3_e_e,
				otro3_e_c,
				otro3_m_m,
				otro3_m_e,
				otro3_m_c,
				otro4_e_m,
				otro4_e_e,
				otro4_e_c,
				otro4_m_m,
				otro4_m_e,
				otro4_m_c,
				otro5_e_m,
				otro5_e_e,
				otro5_e_c,
				otro5_m_m,
				otro5_m_e,
				otro5_m_c,
				otro1_nombre,
				otro2_nombre,
				otro3_nombre,
				otro4_nombre,
				otro5_nombre,
				observa,
				rela_repre_prop,
				falta_rela,
				ancho,
				largo,
				altura,
				profundidad,
				laminar,
				surcos,
				carcavas,
				socavacion,
				erosivos_ninguno,
				caidas,
				deslizamientos,
				volcamiento,
				flujos,
				mov_ninguno,
				socavamiento,
				erosion,
				desprendimientos,
				volcamientos,
				cizallamiento,
				caudal_permanente,
				caudal_intermitente,
				caudal_efimero,
				caudal_otro,
				trafico_pesado,
				trafico_liviano,
                                puente,
                                boxcoulvert,
                                canal,
                                bocatoma,
                                acueducto,
                                tanque_elevado,
                                polideportivo,
                                antena_telefonica,
                                dique_presa,
				constru_si,
				fechaHoraInicio,
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




