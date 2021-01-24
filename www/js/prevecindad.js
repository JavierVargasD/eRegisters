var i = 1;
var ac= 0;

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

    ac =  window.localStorage.getItem("actaIdVeci");
    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});
    var query = "SELECT * FROM pre_vecindad_p where id=" + ac;
	

    if (window.localStorage.getItem("editar") === 'true') {
        myDB.transaction(function(transaction) {
            transaction.executeSql(query, [], function(tx, results) {
                var len = results.rows.length, i;

                for (i = 0; i < len; i++) {
                    //results.rows.item(i).id
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
                    $("#direccion").val(results.rows.item(i).direccion);
                    $("#contrato").val(results.rows.item(i).contrato);
                    $("#objeto").val(results.rows.item(i).objeto);
                    $("#contratista").val(results.rows.item(i).contratista);
                    $("#interventor").val(results.rows.item(i).interventor);
                    $("#elaboro").val(results.rows.item(i).elaboro);
                    $("#registro").val(results.rows.item(i).registro);
                    $("#reviso").val(results.rows.item(i).reviso);                    
                    $("#frente").val(results.rows.item(i).frente);
                    $("#pisos").val(results.rows.item(i).pisos);
                    $("#estrato").val(results.rows.item(i).estrato);
                    $("#agua").prop('checked', !!+results.rows.item(i).agua);
                    $("#alcantarillado").prop('checked', !!+results.rows.item(i).alcantarillado);
                    $("#energia").prop('checked', !!+results.rows.item(i).energia);
                    $("#telefono").prop('checked', !!+results.rows.item(i).telefono);
                    $("#gas").prop('checked', !!+results.rows.item(i).gas);
                    $("#tv").prop('checked', !!+results.rows.item(i).tv);
                    $("#residencial").prop('checked', !!+results.rows.item(i).residencial);
                    $("#comercial").prop('checked', !!+results.rows.item(i).comercial);
                    $("#finaanciero").prop('checked', !!+results.rows.item(i).finaanciero);
                    $("#industrial").prop('checked', !!+results.rows.item(i).industrial);
                    $("#dotacional").prop('checked', !!+results.rows.item(i).dotacional);
                    $("#deposito").prop('checked', !!+results.rows.item(i).deposito);
                    $("#urbanizado_no_edi").prop('checked', !!+results.rows.item(i).urbanizado_no_edi);
                    $("#urbanizables").prop('checked', !!+results.rows.item(i).urbanizables);
                    $("#no_urbanizables").prop('checked', !!+results.rows.item(i).no_urbanizables);
                    $("#rural").prop('checked', !!+results.rows.item(i).rural);
                    $("#rural_prod").prop('checked', !!+results.rows.item(i).rural_prod);                    
                    $("#otro_serv").val(results.rows.item(i).otro_serv);
                    $("#otro_urba").val(results.rows.item(i).otro_urba);
                    $("#observa_desp").val(results.rows.item(i).observa_desp);
                    $("#observa_pre").val(results.rows.item(i).observa_pre);
                    $("#observa_serv").val(results.rows.item(i).observa_serv);
                }
            }, function(tx, error)
            {
                alert('Error occurred');
            });
        });


    } else {

        var lat = 0;
        var long = 0;

        var onSuccess = function(position) {

            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            window.localStorage.setItem("lat", lat);
            window.localStorage.setItem("long", long);

        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: ' + error.code + '\n' +
                    'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

        var fechaHoraIni = getCurrentDateTime();
        window.localStorage.setItem("fechaHoraIni", fechaHoraIni);

        myDB.transaction(function(transaction) {
            transaction.executeSql('SELECT MAX(id) as id FROM pre_vecindad_p', [], function(tx, results) {
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
            data:  "<!DOCTYPE html>"
                    + "<html><head><meta http-equiv='Content-Type' content='text/html; charset=windows-1252'>"
                    + "<title></title>"
                    + "<style type='text/css'>"
                    + "    body {"
                    + "         font: normal 14px Verdana, Arial, sans-serif;"
                    + "         "
                    + "    }"
                    + "    .encabezado {"
                    + "   background-color: #2b4d3d;"
                    + "   color: #FFFFFF;"
                    + "   text-align:center;"
                    + "    }"
                    + "  .encabezado2 {"
                    + "   background-color: #2b4d3d;"
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
                    + "    margin: 45mm 0mm 5mm 20mm;  "
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
                    + "   background-color: #2b4d3d;"
                    + "   color: #FFFFFF;"
                    + "}"  
                    + "@page :first "  
                    + "{" 
                    + "    size: auto;  " 
                    + "    margin: 10mm 0mm 5mm 20mm;  "
                    + "}"     
                    + "</style>"
                    + " </head>"
                    + " <body>"
                    + "   <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
                    + " <tbody>"
                    + " <tr><td class='encabezado2' colspan='4'>Hoja 1 de 1&nbsp&nbsp</td></tr>"
                    + "  <tr>"
                    + "  <td colspan='4'>"
                    + "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                    + "    <tbody>"
                    + "       <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/logo.PNG'></td>"
                    + "       <td style='width: 90%;height:75px;text-align:center;font-size:18px'>ACTA DE VECINDAD</td>"
                    + "           <td>"
                    + "                <table>"
                    + "                    <tr>"
                    + "                     <td>CÓDIGO</td><td></td>"
                    + "                    </tr>"
                    + "                   <tr>"
                    + "                     <td>VESIÓN</td><td></td>"
                    + "                    </tr>"
                    + "                </table>"
                    + "           </td>"
                    + "        </tr>"
                    + "     <tr><td></td><td>GERENCIA DE PROYECTOS</td><td><table><tr><td>CÓDIGO</td><td></td></tr></table></td></tr>"
                    + "</tbody></table></td>"
                    + "   </tr>"
                    + "   <tr>"
                    + "  <td style='width: 25%'>CONTRATO No.:</td>"
                    + "  <td>  "+ window.localStorage.getItem('contrato') +" </td>"
                    + "   </tr>    "
                    + "  </tbody>"
                    + "</table>"
                    <table>
                        <tr>
                            <td>1. REGISTRO FOTOGRÁFICO DE FACHADA</td>
                            <td>2. DATOS DEL PREDIO</td>
                        </tr>
                        <tr>
                            <td>foto</td>
                            <td>
                                <table>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>SERVICIOS PÚBLICOS</td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td>CLASIFICACIÓN DE PREDIOS</td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                    <tr><td></td><td></td><td></td><td></td></tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    
            
            
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td style='width:33%' class='encabezado'>Localizaci&#243;n</td>"
            + "                    <td style='width:33%' class='encabezado'>Ubicaci&#243;n</td>"
            + "                    <td style='width:33%' class='encabezado'>Procesos erosivos cercanos</td>"
            + "                </tr>    "
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td style='width:16.66%'>Departamento</td>"
            + "                    <td style='width:16.66%'>" + $("#P_DEPTO option:selected").text() + "</td>"
            + "                    <td style='width:16.66%'>Origen de coord</td>"
            + "                    <td style='width:16.66%'></td>"
            + "                    <td style='width:16.66%'>Erosion superficial:</td>"
            + "                    <td>Movimientos de Masa:</td>"
            + "                </tr>    "
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td style='width:16.66%'>Municipio</td>"
            + "                    <td style='width:16.66%'>" + $("#P_MUN option:selected").text() + "</td>"
            + "                    <td style='width:16.66%'>Coordeneda E</td>"
            + "                    <td style='width:16.66%'>" + $("#coordenada_e").val() + "</td>"
            + "                    <td style='width:16.66%'>Laminar " + ($("#laminar").is(':checked') ? "X" : "") + "</td>"
            + "                    <td>Ca&#237;das</td>"
            + "                </tr>    "
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td style='width:16.66%'>Vereda</td>"
            + "                    <td style='width:16.66%'>" + $("#vereda").val() + "</td>"
            + "                    <td style='width:16.66%'>Coordenada N</td>"
            + "                    <td style='width:16.66%'>" + $("#coordenada_n").val() + "</td>"
            + "                    <td style='width:16.66%'>Surcos  " + ($("#surcos").is(':checked') ? "X" : "") + "</td>"
            + "                    <td>Deslizamientos</td>"
            + "                </tr>    "
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td style='width:16.66%'>Predio</td>"
            + "                    <td style='width:16.66%'>" + $("#predio").val() + "</td>"
            + "                    <td style='width:16.66%'>Stk</td>"
            + "                    <td style='width:16.66%'>" + $("#stk").val() + "</td>"
            + "                    <td style='width:16.66%'>C&#225;rcavas " + ($("#carcavas").is(':checked') ? "X" : "") + "</td>"
            + "                    <td>Volcamiento " + ($("#volcamiento").is(':checked') ? "X" : "") + "</td>"
            + "                </tr>    "
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td style='width:16.66%'>Propietario</td>"
            + "                    <td style='width:16.66%'>" + $("#propietario").val() + "</td>"
            + "                    <td style='width:16.66%'>Sp. Cercano</td>"
            + "                    <td style='width:16.66%'>" + $("#sp_cercano").val() + "</td>"
            + "                    <td style='width:16.66%'>Socavaci&#243;n " + ($("#socavacion").is(':checked') ? "X" : "") + "</td>"
            + "                    <td>Flujos " + ($("#flujos").is(':checked') ? "X" : "") + "</td>"
            + "                </tr>    "
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td style='width:16.66%'>Telefono</td>"
            + "                    <td style='width:16.66%'>" + $("#telefono").val() + "</td>"
            + "                    <td style='width:16.66%'>Distancia sp</td>"
            + "                    <td style='width:16.66%'>" + $("#distancia_sp").val() + "</td>"
            + "                    <td style='width:16.66%'>Ninguno " + ($("#ninguno").is(':checked') ? "X" : "") + "</td>"
            + "                    <td>Ninguno " + ($("#ningunom").is(':checked') ? "X" : "") + "</td>"
            + "                </tr>    "
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td style='width:25%'>Topograf&#237;a</td>"
            + "                    <td style='width:25%'>" + $("#topografia").val() + "</td>"
            + "                    <td style='width:25%'>Tiempo de construcci&#243;n</td>"
            + "                    <td style='width:25%'>" + $("#tiempo_construccion").val() + "</td>"
            + "                </tr>    "
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td><p align='justify' style='padding: 5px'>En el municipio de " + $("#P_MUN option:selected").text()
            + " vereda o barrio " + $("#vereda").val() + " del departamento del " + $("#P_DEPTO option:selected").text()
            + ", se reunieron el funcionario (a). Gabriel Pe&#241;aranda G&#243;mez con c&#233;dula de ciudadania 80124872 de Oca&#241;a, representante de la empresa INGECSA  y el (la) se&#241;or (a) " + $("#propietario").val() + ", con c&#233;dula de  ciudadan&#237;a N&#186; " + $("#cc_propietario").val() + "  de " + $("#lugar_cc_propietario").val() + " , como propietario o representante del predio,  con el fin de realizar un inventario fisico de la vivienda y dem&#225;s construcciones anexas que se describen a continuaci&#243;n:</p></td>"
            + "                </tr>    "
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td class='encabezado'>Descripci&#243;n General</td>"
            + "                </tr>    "
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td class='tituloFila3' style='border-bottom: none;text-align: center'>Infraestructura del</td>"
            + "                    <td class='tituloFila3' colspan='3'>Paredes</td>"
            + "                    <td class='tituloFila3' colspan='3'>Pisos</td>"
            + "                    <td class='tituloFila3' colspan='3'>Techo</td>"
            + "                    <td class='tituloFila3' colspan='3'>Cielo-Raso</td>"
            + "                    <td class='tituloFila3' colspan='3'>Estruct.</td>"
            + "                    <td class='tituloFila3' colspan='3'>Pa&#241;ete</td>"
            + "                    <td class='tituloFila3' colspan='3'>Pintura Gener.</td>"
            + "                    <td class='tituloFila3' colspan='3'>Ventana</td>"
            + "                    <td class='tituloFila3' colspan='3'>Puertas</td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td class='tituloFila3' style='text-align: center'>Predio</td>"
            + "                    <td>M</td>"
            + "                    <td>E</td>"
            + "                    <td>C</td>"
            + "                    <td>M</td>"
            + "                    <td>E</td>"
            + "                    <td>C</td>"
            + "                    <td>M</td>"
            + "                    <td>E</td>"
            + "                    <td>C</td>"
            + "                    <td>M</td>"
            + "                    <td>E</td>"
            + "                    <td>C</td>"
            + "                    <td>M</td>"
            + "                    <td>E</td>"
            + "                    <td>C</td>"
            + "                    <td>M</td>"
            + "                    <td>E</td>"
            + "                    <td>C</td>"
            + "                    <td>M</td>"
            + "                    <td>E</td>"
            + "                    <td>C</td>"
            + "                    <td>M</td>"
            + "                    <td>E</td>"
            + "                    <td>C</td>"
            + "                    <td>M</td>"
            + "                    <td>E</td>"
            + "                    <td>C</td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td class='tituloFila3'>Exterior</td>"
            + "                    <td>" + $("#ex_paredes_material").val() + "</td>"
            + "                    <td>" + $("#ex_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#ex_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#ex_pisos_material").val() + "</td>"
            + "                    <td>" + $("#ex_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#ex_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#ex_techo_material").val() + "</td>"
            + "                    <td>" + $("#ex_techo_estado").val() + "</td>"
            + "                    <td>" + $("#ex_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#ex_cielo_material").val() + "</td>"
            + "                    <td>" + $("#ex_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#ex_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#ex_estruct_material").val() + "</td>"
            + "                    <td>" + $("#ex_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#ex_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#ex_panete_material").val() + "</td>"
            + "                    <td>" + $("#ex_panete_estado").val() + "</td>"
            + "                    <td>" + $("#ex_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#ex_pintu_material").val() + "</td>"
            + "                    <td>" + $("#ex_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#ex_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#ex_ventana_material").val() + "</td>"
            + "                    <td>" + $("#ex_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#ex_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#ex_puerta_material").val() + "</td>"
            + "                    <td>" + $("#ex_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#ex_puerta_anomalias").val() + "</td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td>Alcoba 1</td>"
            + "                    <td>" + $("#alc1_paredes_material").val() + "</td>"
            + "                    <td>" + $("#alc1_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#alc1_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc1_pisos_material").val() + "</td>"
            + "                    <td>" + $("#alc1_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#alc1_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc1_techo_material").val() + "</td>"
            + "                    <td>" + $("#alc1_techo_estado").val() + "</td>"
            + "                    <td>" + $("#alc1_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc1_cielo_material").val() + "</td>"
            + "                    <td>" + $("#alc1_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#alc1_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc1_estruct_material").val() + "</td>"
            + "                    <td>" + $("#alc1_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#alc1_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc1_panete_material").val() + "</td>"
            + "                    <td>" + $("#alc1_panete_estado").val() + "</td>"
            + "                    <td>" + $("#alc1_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc1_pintu_material").val() + "</td>"
            + "                    <td>" + $("#alc1_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#alc1_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc1_ventana_material").val() + "</td>"
            + "                    <td>" + $("#alc1_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#alc1_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc1_puerta_material").val() + "</td>"
            + "                    <td>" + $("#alc1_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#alc1_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Alcoba 2</td>"
            + "                    <td>" + $("#alc2_paredes_material").val() + "</td>"
            + "                    <td>" + $("#alc2_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#alc2_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc2_pisos_material").val() + "</td>"
            + "                    <td>" + $("#alc2_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#alc2_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc2_techo_material").val() + "</td>"
            + "                    <td>" + $("#alc2_techo_estado").val() + "</td>"
            + "                    <td>" + $("#alc2_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc2_cielo_material").val() + "</td>"
            + "                    <td>" + $("#alc2_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#alc2_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc2_estruct_material").val() + "</td>"
            + "                    <td>" + $("#alc2_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#alc2_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc2_panete_material").val() + "</td>"
            + "                    <td>" + $("#alc2_panete_estado").val() + "</td>"
            + "                    <td>" + $("#alc2_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc2_pintu_material").val() + "</td>"
            + "                    <td>" + $("#alc2_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#alc2_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc2_ventana_material").val() + "</td>"
            + "                    <td>" + $("#alc2_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#alc2_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc2_puerta_material").val() + "</td>"
            + "                    <td>" + $("#alc2_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#alc2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Alcoba 3</td>"
            + "                    <td>" + $("#alc3_paredes_material").val() + "</td>"
            + "                    <td>" + $("#alc3_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#alc3_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc3_pisos_material").val() + "</td>"
            + "                    <td>" + $("#alc3_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#alc3_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc3_techo_material").val() + "</td>"
            + "                    <td>" + $("#alc3_techo_estado").val() + "</td>"
            + "                    <td>" + $("#alc3_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc3_cielo_material").val() + "</td>"
            + "                    <td>" + $("#alc3_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#alc3_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc3_estruct_material").val() + "</td>"
            + "                    <td>" + $("#alc3_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#alc3_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc3_panete_material").val() + "</td>"
            + "                    <td>" + $("#alc3_panete_estado").val() + "</td>"
            + "                    <td>" + $("#alc3_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc3_pintu_material").val() + "</td>"
            + "                    <td>" + $("#alc3_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#alc3_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc3_ventana_material").val() + "</td>"
            + "                    <td>" + $("#alc3_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#alc3_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc3_puerta_material").val() + "</td>"
            + "                    <td>" + $("#alc3_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#alc3_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Alcoba 4</td>"
            + "                    <td>" + $("#alc4_paredes_material").val() + "</td>"
            + "                    <td>" + $("#alc4_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#alc4_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc4_pisos_material").val() + "</td>"
            + "                    <td>" + $("#alc4_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#alc4_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc4_techo_material").val() + "</td>"
            + "                    <td>" + $("#alc4_techo_estado").val() + "</td>"
            + "                    <td>" + $("#alc4_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc4_cielo_material").val() + "</td>"
            + "                    <td>" + $("#alc4_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#alc4_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc4_estruct_material").val() + "</td>"
            + "                    <td>" + $("#alc4_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#alc4_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc4_panete_material").val() + "</td>"
            + "                    <td>" + $("#alc4_panete_estado").val() + "</td>"
            + "                    <td>" + $("#alc4_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc4_pintu_material").val() + "</td>"
            + "                    <td>" + $("#alc4_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#alc4_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc4_ventana_material").val() + "</td>"
            + "                    <td>" + $("#alc4_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#alc4_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc4_puerta_material").val() + "</td>"
            + "                    <td>" + $("#alc4_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#alc4_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Alcoba 5</td>"
            + "                    <td>" + $("#alc5_paredes_material").val() + "</td>"
            + "                    <td>" + $("#alc5_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#alc5_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc5_pisos_material").val() + "</td>"
            + "                    <td>" + $("#alc5_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#alc5_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc5_techo_material").val() + "</td>"
            + "                    <td>" + $("#alc5_techo_estado").val() + "</td>"
            + "                    <td>" + $("#alc5_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc5_cielo_material").val() + "</td>"
            + "                    <td>" + $("#alc5_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#alc5_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc5_estruct_material").val() + "</td>"
            + "                    <td>" + $("#alc5_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#alc5_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc5_panete_material").val() + "</td>"
            + "                    <td>" + $("#alc5_panete_estado").val() + "</td>"
            + "                    <td>" + $("#alc5_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc5_pintu_material").val() + "</td>"
            + "                    <td>" + $("#alc5_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#alc5_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc5_ventana_material").val() + "</td>"
            + "                    <td>" + $("#alc5_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#alc5_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#alc5_puerta_material").val() + "</td>"
            + "                    <td>" + $("#alc5_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#alc5_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Sala 1</td>"
            + "                    <td>" + $("#sal1_paredes_material").val() + "</td>"
            + "                    <td>" + $("#sal1_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#sal1_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal1_pisos_material").val() + "</td>"
            + "                    <td>" + $("#sal1_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#sal1_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal1_techo_material").val() + "</td>"
            + "                    <td>" + $("#sal1_techo_estado").val() + "</td>"
            + "                    <td>" + $("#sal1_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal1_cielo_material").val() + "</td>"
            + "                    <td>" + $("#sal1_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#sal1_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal1_estruct_material").val() + "</td>"
            + "                    <td>" + $("#sal1_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#sal1_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal1_panete_material").val() + "</td>"
            + "                    <td>" + $("#sal1_panete_estado").val() + "</td>"
            + "                    <td>" + $("#sal1_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal1_pintu_material").val() + "</td>"
            + "                    <td>" + $("#sal1_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#sal1_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal1_ventana_material").val() + "</td>"
            + "                    <td>" + $("#sal1_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#sal1_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal1_puerta_material").val() + "</td>"
            + "                    <td>" + $("#sal1_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#sal1_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Sala 2</td>"
            + "                    <td>" + $("#sal2_paredes_material").val() + "</td>"
            + "                    <td>" + $("#sal2_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#sal2_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal2_pisos_material").val() + "</td>"
            + "                    <td>" + $("#sal2_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#sal2_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal2_techo_material").val() + "</td>"
            + "                    <td>" + $("#sal2_techo_estado").val() + "</td>"
            + "                    <td>" + $("#sal2_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal2_cielo_material").val() + "</td>"
            + "                    <td>" + $("#sal2_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#sal2_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal2_estruct_material").val() + "</td>"
            + "                    <td>" + $("#sal2_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#sal2_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal2_panete_material").val() + "</td>"
            + "                    <td>" + $("#sal2_panete_estado").val() + "</td>"
            + "                    <td>" + $("#sal2_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal2_pintu_material").val() + "</td>"
            + "                    <td>" + $("#sal2_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#sal2_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal2_ventana_material").val() + "</td>"
            + "                    <td>" + $("#sal2_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#sal2_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#sal2_puerta_material").val() + "</td>"
            + "                    <td>" + $("#sal2_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#sal2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Comedor 1</td>"
            + "                    <td>" + $("#come1_paredes_material").val() + "</td>"
            + "                    <td>" + $("#come1_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#come1_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#come1_pisos_material").val() + "</td>"
            + "                    <td>" + $("#come1_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#come1_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#come1_techo_material").val() + "</td>"
            + "                    <td>" + $("#come1_techo_estado").val() + "</td>"
            + "                    <td>" + $("#come1_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#come1_cielo_material").val() + "</td>"
            + "                    <td>" + $("#come1_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#come1_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#come1_estruct_material").val() + "</td>"
            + "                    <td>" + $("#come1_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#come1_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#come1_panete_material").val() + "</td>"
            + "                    <td>" + $("#come1_panete_estado").val() + "</td>"
            + "                    <td>" + $("#come1_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#come1_pintu_material").val() + "</td>"
            + "                    <td>" + $("#come1_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#come1_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#come1_ventana_material").val() + "</td>"
            + "                    <td>" + $("#come1_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#come1_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#come1_puerta_material").val() + "</td>"
            + "                    <td>" + $("#come1_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#come1_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Comedor 2</td>"
            + "                    <td>" + $("#come2_paredes_material").val() + "</td>"
            + "                    <td>" + $("#come2_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#come2_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#come2_pisos_material").val() + "</td>"
            + "                    <td>" + $("#come2_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#come2_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#come2_techo_material").val() + "</td>"
            + "                    <td>" + $("#come2_techo_estado").val() + "</td>"
            + "                    <td>" + $("#come2_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#come2_cielo_material").val() + "</td>"
            + "                    <td>" + $("#come2_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#come2_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#come2_estruct_material").val() + "</td>"
            + "                    <td>" + $("#come2_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#come2_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#come2_panete_material").val() + "</td>"
            + "                    <td>" + $("#come2_panete_estado").val() + "</td>"
            + "                    <td>" + $("#come2_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#come2_pintu_material").val() + "</td>"
            + "                    <td>" + $("#come2_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#come2_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#come2_ventana_material").val() + "</td>"
            + "                    <td>" + $("#come2_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#come2_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#come2_puerta_material").val() + "</td>"
            + "                    <td>" + $("#come2_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#come2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Cocina 1</td>"
            + "                    <td>" + $("#coci1_paredes_material").val() + "</td>"
            + "                    <td>" + $("#coci1_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#coci1_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci1_pisos_material").val() + "</td>"
            + "                    <td>" + $("#coci1_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#coci1_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci1_techo_material").val() + "</td>"
            + "                    <td>" + $("#coci1_techo_estado").val() + "</td>"
            + "                    <td>" + $("#coci1_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci1_cielo_material").val() + "</td>"
            + "                    <td>" + $("#coci1_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#coci1_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci1_estruct_material").val() + "</td>"
            + "                    <td>" + $("#coci1_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#coci1_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci1_panete_material").val() + "</td>"
            + "                    <td>" + $("#coci1_panete_estado").val() + "</td>"
            + "                    <td>" + $("#coci1_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci1_pintu_material").val() + "</td>"
            + "                    <td>" + $("#coci1_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#coci1_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci1_ventana_material").val() + "</td>"
            + "                    <td>" + $("#coci1_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#coci1_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci1_puerta_material").val() + "</td>"
            + "                    <td>" + $("#coci1_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#coci1_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Cocina 2</td>"
            + "                    <td>" + $("#coci2_paredes_material").val() + "</td>"
            + "                    <td>" + $("#coci2_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#coci2_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci2_pisos_material").val() + "</td>"
            + "                    <td>" + $("#coci2_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#coci2_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci2_techo_material").val() + "</td>"
            + "                    <td>" + $("#coci2_techo_estado").val() + "</td>"
            + "                    <td>" + $("#coci2_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci2_cielo_material").val() + "</td>"
            + "                    <td>" + $("#coci2_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#coci2_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci2_estruct_material").val() + "</td>"
            + "                    <td>" + $("#coci2_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#coci2_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci2_panete_material").val() + "</td>"
            + "                    <td>" + $("#coci2_panete_estado").val() + "</td>"
            + "                    <td>" + $("#coci2_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci2_pintu_material").val() + "</td>"
            + "                    <td>" + $("#coci2_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#coci2_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci2_ventana_material").val() + "</td>"
            + "                    <td>" + $("#coci2_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#coci2_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#coci2_puerta_material").val() + "</td>"
            + "                    <td>" + $("#coci2_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#coci2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Ba&#241;o 1</td>"
            + "                    <td>" + $("#ban1_paredes_material").val() + "</td>"
            + "                    <td>" + $("#ban1_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#ban1_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban1_pisos_material").val() + "</td>"
            + "                    <td>" + $("#ban1_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#ban1_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban1_techo_material").val() + "</td>"
            + "                    <td>" + $("#ban1_techo_estado").val() + "</td>"
            + "                    <td>" + $("#ban1_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban1_cielo_material").val() + "</td>"
            + "                    <td>" + $("#ban1_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#ban1_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban1_estruct_material").val() + "</td>"
            + "                    <td>" + $("#ban1_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#ban1_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban1_panete_material").val() + "</td>"
            + "                    <td>" + $("#ban1_panete_estado").val() + "</td>"
            + "                    <td>" + $("#ban1_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban1_pintu_material").val() + "</td>"
            + "                    <td>" + $("#ban1_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#ban1_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban1_ventana_material").val() + "</td>"
            + "                    <td>" + $("#ban1_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#ban1_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban1_puerta_material").val() + "</td>"
            + "                    <td>" + $("#ban1_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#ban1_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Ba&#241;o 2</td>"
            + "                    <td>" + $("#ban2_paredes_material").val() + "</td>"
            + "                    <td>" + $("#ban2_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#ban2_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban2_pisos_material").val() + "</td>"
            + "                    <td>" + $("#ban2_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#ban2_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban2_techo_material").val() + "</td>"
            + "                    <td>" + $("#ban2_techo_estado").val() + "</td>"
            + "                    <td>" + $("#ban2_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban2_cielo_material").val() + "</td>"
            + "                    <td>" + $("#ban2_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#ban2_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban2_estruct_material").val() + "</td>"
            + "                    <td>" + $("#ban2_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#ban2_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban2_panete_material").val() + "</td>"
            + "                    <td>" + $("#ban2_panete_estado").val() + "</td>"
            + "                    <td>" + $("#ban2_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban2_pintu_material").val() + "</td>"
            + "                    <td>" + $("#ban2_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#ban2_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban2_ventana_material").val() + "</td>"
            + "                    <td>" + $("#ban2_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#ban2_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban2_puerta_material").val() + "</td>"
            + "                    <td>" + $("#ban2_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#ban2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Ba&#241;o 3</td>"
            + "                    <td>" + $("#ban3_paredes_material").val() + "</td>"
            + "                    <td>" + $("#ban3_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#ban3_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban3_pisos_material").val() + "</td>"
            + "                    <td>" + $("#ban3_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#ban3_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban3_techo_material").val() + "</td>"
            + "                    <td>" + $("#ban3_techo_estado").val() + "</td>"
            + "                    <td>" + $("#ban3_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban3_cielo_material").val() + "</td>"
            + "                    <td>" + $("#ban3_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#ban3_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban3_estruct_material").val() + "</td>"
            + "                    <td>" + $("#ban3_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#ban3_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban3_panete_material").val() + "</td>"
            + "                    <td>" + $("#ban3_panete_estado").val() + "</td>"
            + "                    <td>" + $("#ban3_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban3_pintu_material").val() + "</td>"
            + "                    <td>" + $("#ban3_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#ban3_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban3_ventana_material").val() + "</td>"
            + "                    <td>" + $("#ban3_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#ban3_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban3_puerta_material").val() + "</td>"
            + "                    <td>" + $("#ban3_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#ban3_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Ba&#241;o 4</td>"
            + "                    <td>" + $("#ban4_paredes_material").val() + "</td>"
            + "                    <td>" + $("#ban4_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#ban4_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban4_pisos_material").val() + "</td>"
            + "                    <td>" + $("#ban4_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#ban4_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban4_techo_material").val() + "</td>"
            + "                    <td>" + $("#ban4_techo_estado").val() + "</td>"
            + "                    <td>" + $("#ban4_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban4_cielo_material").val() + "</td>"
            + "                    <td>" + $("#ban4_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#ban4_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban4_estruct_material").val() + "</td>"
            + "                    <td>" + $("#ban4_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#ban4_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban4_panete_material").val() + "</td>"
            + "                    <td>" + $("#ban4_panete_estado").val() + "</td>"
            + "                    <td>" + $("#ban4_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban4_pintu_material").val() + "</td>"
            + "                    <td>" + $("#ban4_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#ban4_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban4_ventana_material").val() + "</td>"
            + "                    <td>" + $("#ban4_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#ban4_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#ban4_puerta_material").val() + "</td>"
            + "                    <td>" + $("#ban4_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#ban4_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Corredor 1</td>"
            + "                    <td>" + $("#corr1_paredes_material").val() + "</td>"
            + "                    <td>" + $("#corr1_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#corr1_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr1_pisos_material").val() + "</td>"
            + "                    <td>" + $("#corr1_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#corr1_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr1_techo_material").val() + "</td>"
            + "                    <td>" + $("#corr1_techo_estado").val() + "</td>"
            + "                    <td>" + $("#corr1_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr1_cielo_material").val() + "</td>"
            + "                    <td>" + $("#corr1_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#corr1_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr1_estruct_material").val() + "</td>"
            + "                    <td>" + $("#corr1_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#corr1_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr1_panete_material").val() + "</td>"
            + "                    <td>" + $("#corr1_panete_estado").val() + "</td>"
            + "                    <td>" + $("#corr1_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr1_pintu_material").val() + "</td>"
            + "                    <td>" + $("#corr1_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#corr1_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr1_ventana_material").val() + "</td>"
            + "                    <td>" + $("#corr1_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#corr1_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr1_puerta_material").val() + "</td>"
            + "                    <td>" + $("#corr1_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#corr1_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Corredor 2</td>"
            + "                    <td>" + $("#corr2_paredes_material").val() + "</td>"
            + "                    <td>" + $("#corr2_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#corr2_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr2_pisos_material").val() + "</td>"
            + "                    <td>" + $("#corr2_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#corr2_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr2_techo_material").val() + "</td>"
            + "                    <td>" + $("#corr2_techo_estado").val() + "</td>"
            + "                    <td>" + $("#corr2_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr2_cielo_material").val() + "</td>"
            + "                    <td>" + $("#corr2_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#corr2_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr2_estruct_material").val() + "</td>"
            + "                    <td>" + $("#corr2_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#corr2_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr2_panete_material").val() + "</td>"
            + "                    <td>" + $("#corr2_panete_estado").val() + "</td>"
            + "                    <td>" + $("#corr2_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr2_pintu_material").val() + "</td>"
            + "                    <td>" + $("#corr2_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#corr2_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr2_ventana_material").val() + "</td>"
            + "                    <td>" + $("#corr2_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#corr2_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#corr2_puerta_material").val() + "</td>"
            + "                    <td>" + $("#corr2_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#corr2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Garage</td>"
            + "                    <td>" + $("#gar2_paredes_material").val() + "</td>"
            + "                    <td>" + $("#gar2_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#gar2_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#gar2_pisos_material").val() + "</td>"
            + "                    <td>" + $("#gar2_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#gar2_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#gar2_techo_material").val() + "</td>"
            + "                    <td>" + $("#gar2_techo_estado").val() + "</td>"
            + "                    <td>" + $("#gar2_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#gar2_cielo_material").val() + "</td>"
            + "                    <td>" + $("#gar2_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#gar2_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#gar2_estruct_material").val() + "</td>"
            + "                    <td>" + $("#gar2_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#gar2_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#gar2_panete_material").val() + "</td>"
            + "                    <td>" + $("#gar2_panete_estado").val() + "</td>"
            + "                    <td>" + $("#gar2_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#gar2_pintu_material").val() + "</td>"
            + "                    <td>" + $("#gar2_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#gar2_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#gar2_ventana_material").val() + "</td>"
            + "                    <td>" + $("#gar2_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#gar2_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#gar2_puerta_material").val() + "</td>"
            + "                    <td>" + $("#gar2_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#gar2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td>Bodega</td>"
            + "                    <td>" + $("#bod_paredes_material").val() + "</td>"
            + "                    <td>" + $("#bod_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#bod_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#bod_pisos_material").val() + "</td>"
            + "                    <td>" + $("#bod_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#bod_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#bod_techo_material").val() + "</td>"
            + "                    <td>" + $("#bod_techo_estado").val() + "</td>"
            + "                    <td>" + $("#bod_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#bod_cielo_material").val() + "</td>"
            + "                    <td>" + $("#bod_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#bod_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#bod_estruct_material").val() + "</td>"
            + "                    <td>" + $("#bod_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#bod_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#bod_panete_material").val() + "</td>"
            + "                    <td>" + $("#bod_panete_estado").val() + "</td>"
            + "                    <td>" + $("#bod_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#bod_pintu_material").val() + "</td>"
            + "                    <td>" + $("#bod_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#bod_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#bod_ventana_material").val() + "</td>"
            + "                    <td>" + $("#bod_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#bod_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#bod_puerta_material").val() + "</td>"
            + "                    <td>" + $("#bod_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#bod_puerta_anomalias").val() + "</td>"
            + "                </tr>   "
            + "                <tr>"
            + "                    <td>Lavadero</td>"
            + "                    <td>" + $("#lav_paredes_material").val() + "</td>"
            + "                    <td>" + $("#lav_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#lav_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#lav_pisos_material").val() + "</td>"
            + "                    <td>" + $("#lav_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#lav_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#lav_techo_material").val() + "</td>"
            + "                    <td>" + $("#lav_techo_estado").val() + "</td>"
            + "                    <td>" + $("#lav_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#lav_cielo_material").val() + "</td>"
            + "                    <td>" + $("#lav_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#lav_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#lav_estruct_material").val() + "</td>"
            + "                    <td>" + $("#lav_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#lav_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#lav_panete_material").val() + "</td>"
            + "                    <td>" + $("#lav_panete_estado").val() + "</td>"
            + "                    <td>" + $("#lav_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#lav_pintu_material").val() + "</td>"
            + "                    <td>" + $("#lav_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#lav_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#lav_ventana_material").val() + "</td>"
            + "                    <td>" + $("#lav_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#lav_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#lav_puerta_material").val() + "</td>"
            + "                    <td>" + $("#lav_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#lav_puerta_anomalias").val() + "</td>"
            + "                </tr> "
            + "                <tr>"
            + "                    <td>Tanque</td>"
            + "                    <td>" + $("#tanq_paredes_material").val() + "</td>"
            + "                    <td>" + $("#tanq_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#tanq_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#tanq_pisos_material").val() + "</td>"
            + "                    <td>" + $("#tanq_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#tanq_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#tanq_techo_material").val() + "</td>"
            + "                    <td>" + $("#tanq_techo_estado").val() + "</td>"
            + "                    <td>" + $("#tanq_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#tanq_cielo_material").val() + "</td>"
            + "                    <td>" + $("#tanq_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#tanq_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#tanq_estruct_material").val() + "</td>"
            + "                    <td>" + $("#tanq_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#tanq_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#tanq_panete_material").val() + "</td>"
            + "                    <td>" + $("#tanq_panete_estado").val() + "</td>"
            + "                    <td>" + $("#tanq_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#tanq_pintu_material").val() + "</td>"
            + "                    <td>" + $("#tanq_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#tanq_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#tanq_ventana_material").val() + "</td>"
            + "                    <td>" + $("#tanq_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#tanq_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#tanq_puerta_material").val() + "</td>"
            + "                    <td>" + $("#tanq_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#tanq_puerta_anomalias").val() + "</td>"
            + "                </tr> "
            + "                <tr>"
            + "                    <td>C. de maquinas</td>"
            + "                    <td>" + $("#maq_paredes_material").val() + "</td>"
            + "                    <td>" + $("#maq_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#maq_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#maq_pisos_material").val() + "</td>"
            + "                    <td>" + $("#maq_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#maq_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#maq_techo_material").val() + "</td>"
            + "                    <td>" + $("#maq_techo_estado").val() + "</td>"
            + "                    <td>" + $("#maq_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#maq_cielo_material").val() + "</td>"
            + "                    <td>" + $("#maq_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#maq_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#maq_estruct_material").val() + "</td>"
            + "                    <td>" + $("#maq_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#maq_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#maq_panete_material").val() + "</td>"
            + "                    <td>" + $("#maq_panete_estado").val() + "</td>"
            + "                    <td>" + $("#maq_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#maq_pintu_material").val() + "</td>"
            + "                    <td>" + $("#maq_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#maq_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#maq_ventana_material").val() + "</td>"
            + "                    <td>" + $("#maq_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#maq_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#maq_puerta_material").val() + "</td>"
            + "                    <td>" + $("#maq_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#maq_puerta_anomalias").val() + "</td>"
            + "                </tr> "
            + "                <tr>"
            + "                    <td>Piscina</td>"
            + "                    <td>" + $("#pisc_paredes_material").val() + "</td>"
            + "                    <td>" + $("#pisc_paredes_estado").val() + "</td>"
            + "                    <td>" + $("#pisc_paredes_anomalias").val() + "</td>"
            + "                    <td>" + $("#pisc_pisos_material").val() + "</td>"
            + "                    <td>" + $("#pisc_pisos_estado").val() + "</td>"
            + "                    <td>" + $("#pisc_pisos_anomalias").val() + "</td>"
            + "                    <td>" + $("#pisc_techo_material").val() + "</td>"
            + "                    <td>" + $("#pisc_techo_estado").val() + "</td>"
            + "                    <td>" + $("#pisc_techo_anomalias").val() + "</td>"
            + "                    <td>" + $("#pisc_cielo_material").val() + "</td>"
            + "                    <td>" + $("#pisc_cielo_estado").val() + "</td>"
            + "                    <td>" + $("#pisc_cielo_anomalias").val() + "</td>"
            + "                    <td>" + $("#pisc_estruct_material").val() + "</td>"
            + "                    <td>" + $("#pisc_estruct_estado").val() + "</td>"
            + "                    <td>" + $("#pisc_estruct_anomalias").val() + "</td>"
            + "                    <td>" + $("#pisc_panete_material").val() + "</td>"
            + "                    <td>" + $("#pisc_panete_estado").val() + "</td>"
            + "                    <td>" + $("#pisc_panete_anomalias").val() + "</td>"
            + "                    <td>" + $("#pisc_pintu_material").val() + "</td>"
            + "                    <td>" + $("#pisc_pintu_estado").val() + "</td>"
            + "                    <td>" + $("#pisc_pintu_anomalias").val() + "</td>"
            + "                    <td>" + $("#pisc_ventana_material").val() + "</td>"
            + "                    <td>" + $("#pisc_ventana_estado").val() + "</td>"
            + "                    <td>" + $("#pisc_ventana_anomalias").val() + "</td>"
            + "                    <td>" + $("#pisc_puerta_material").val() + "</td>"
            + "                    <td>" + $("#pisc_puerta_estado").val() + "</td>"
            + "                    <td>" + $("#pisc_puerta_anomalias").val() + "</td>"
            + "                </tr> "
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td class='encabezado'>Conveniones</td>"
            + "                </tr>    "
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td class='tituloFila'>Conveniones</td>"
            + "                    <td><table width='100%' border='0' cellspacing='0' cellpadding='0'>"
            + "                            <tbody>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Paredes: </td>"
            + "                                    <td>(L) Ladrillo (B) Bloque (M) Madera (G) Guadua (Ba) Bahareque (A) Adobe (O) Otro (X) No tiene </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Pisos: </td>"
            + "                                    <td>(C) Cemento (B) Baldos&#237;n (M) Madera (T) Tierra (O) Otro </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Estructura: </td>"
            + "                                    <td>(M) Madera (C) Concreto (Me) Met&#225;lica (O) Otro (X) No tiene </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Techos: </td>"
            + "                                    <td>(Pc) Placa cemento (M) Madera (A) Asbesto-cemento (B) Teja de barro (Z) Zinc (P) Palma (O) Otro </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Cielo raso </td>"
            + "                                    <td>(M) Madera (I) Icopor (Y) Yeso (O) Otro (X) No tiene </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Ventanas: </td>"
            + "                                    <td>(M) Madera (Me) Met&#225;lica (O) Otro (X) No tiene </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Pintura: </td>"
            + "                                    <td>(C) Cal (V) Vinilo (A) Aceite (O) Otro (X) No tiene </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Puertas: </td>"
            + "                                    <td>(M)  Madera   (Me)  Met&#225;licas  (O) Otro (X) No tiene </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Pa&#241;ete: </td>"
            + "                                    <td>(C)  Cemento   (R)  Repelle   (O) Otro  (X) No tiene</td>"
            + "                                </tr>"
            + "                            </tbody>"
            + "                        </table>"
            + ""
            + "                    </td>"
            + "                </tr>    "
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                <tr>"
            + "                    <td class='tituloFila'>Estado: </td>"
            + "                    <td>  (1) Muy malo   (2) Malo   (3) Regular   (4) Bueno</td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td class='tituloFila'>Anomalias principales (C): </td>"
            + "                    <td>(G)  Grietas   (F)  Fisuras   (H)  Humedades   (D)  Desprendimientos   (De)   Desgaste</td>"
            + "                </tr>"
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td class='encabezado' >Observaciones Generales</td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td style='height: 118px;vertical-align: top;padding:5px' >" + $("#observa").val() + "</td>"
            + "                </tr>"
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='0' cellspacing='0' cellpadding='0' style='border: 1px solid black;'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td class='encabezado' colspan='5'>Firmas de Aprobaci&#243;n</td>"
            + "                </tr>"
            + "                <tr>"
            + "                   <td><p><img src='" + $("#singImagePath").val() + "' height='100' width='200'></p><p>FIRMA DEL PROPIETARIO DEL PREDIO</p></td><td valign='bottom'>huella</td><td></td><td valign='bottom'><p>___________________________________</p> <p>FIRMA DEL REPRESENTANTE DEL PREDIO</p></td><td valign='bottom'>huella</td>"
            + "                </tr>"
            + "                <tr>"
            + "                   <td colspan='2'>C.C #_____________ de _________</td><td></td><td colspan='2'>C.C #_____________ de _________</td>"
            + "                </tr>"
            + "                <tr>"
            + "                   <td colspan='2' style='height: 40px'><p>_____________________________________________________</p><p>NOMBRE DEL PROPIETARIO DEL PREDIO</p></td><td></td><td colspan='2'><p>_________________________________________</p><p> NOMBRE DEL REPRESENTANTE DEL PREDIO</p></td>"
            + "                </tr>"
            + "                <tr>"
            + "                   <td colspan='2'>Telefono______________</td><td></td><td colspan='2'>Telefono____________________</td>"
            + "                </tr>"
            + "                <tr>"
            + "                   <td colspan='2' style='height: 40px'><p>_________________________________________</p>  NOMBRE DEL EVALUADOR</td><td></td><td colspan='2'><p>________________________________________________</p>  FIRMA DEL EVALUADOR</td>"
            + "                </tr>"
            + "                <tr>"
            + "                   <td colspan='2'>Revisado por:_______________</td><td></td><td colspan='2'>C.C #_____________ de _________</td>"
            + "                </tr>"
            + "                <tr>"
            + "                   <td colspan='2' style='height: 40px'><p>______________________________________________</p> NOMBRE DEL INTERVENTOR AMBIENTAL</td><td></td><td colspan='2'><p>________________________________________________</p>  FIRMA DEL INTERVENTOR AMBIENTAL</td>"
            + "                </tr>"
            + "                <tr>"
            + "                   <td colspan='2'>FECHA DE APROBACION________________</td><td></td><td colspan='2'>C.C #_____________ de _________</td>"
            + "                </tr>"
            + "            </tbody>"
            + "        </table><div style='height: 673px'></div>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td class='encabezado' colspan='5'>Registro Fotografico</td>"
            + "                </tr>"
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td style='width: 8%'>LINEA:</td>"
            + "                    <td style='width: 12%'>" + $("#linea").val() + "</td>"
            + "                    <td style='width: 20%'>PUNTO FUENTE SP/VP:</td>"
            + "                    <td style='width: 20%'></td>"
            + "                    <td style='width: 10%'>PREDIO:</td>"
            + "                    <td>" + $("#predio").val() + "</td>"
            + "                </tr>"
            + "            </tbody>"
            + "        </table>"
            + "       <br/><br/>"
            + "       <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "       	<tbody>"
            + "            <tr>"
            + "              <td valign='bottom' style='background: url("+ cordova.file.dataDirectory +"/files/pre-viv-" + ac +"-"+ 1 + ".jpg );vertical-align:bottom;height:280px;background-size:cover;' >"
            + "                 <div class='tag'>"
            + "                   <table border='1' style='border: 1px solid; border-collapse: collapse; width: 100%;font-size: 8px;'><tr><td colspan='4'>ACTA DE VIVIENDA</td>"
            + "                     </tr><tr><td>Linea/salvo</td><td>" + $("#linea").val() + "</td><td>SP</td><td>" + $("#sp_cercano").val() + "</td></tr><tr><td>Coordenadas  E</td><td>" + $("#coordenada_e").val() + "</td><td>N</td><td>" + $("#coordenada_n").val() + "</td></tr>"
            + "                     <tr><td>Elemento</td><td colspan='3'></td></tr><tr><td>Propietario</td><td colspan='3'>" + $("#propietario").val() + "</td></tr>"
            + "                     <tr><td>Vereda</td><td>" + $("#vereda").val() + "</td><td>Municipio</td><td>" + $("#P_MUN option:selected").text() + "</td></tr><tr><td>Fecha</td><td colspan='3'>" + getCurrentDate() + "</td></tr>"
            + "                     </table>"
            + "                 </div>"
            + "             </td> "
            + "              <td valign='bottom' style='background: url("+ cordova.file.dataDirectory +"/files/pre-viv-" + ac +"-"+ 2 + ".jpg );vertical-align:bottom;height:280px;background-size:cover;' >"
            + "                 <div class='tag'>"
            + "                   <table border='1' style='border: 1px solid; border-collapse: collapse; width: 100%;font-size: 8px;'><tr><td colspan='4'>ACTA DE VIVIENDA</td>"
            + "                     </tr><tr><td>Linea/salvo</td><td>" + $("#linea").val() + "</td><td>SP</td><td>" + $("#sp_cercano").val() + "</td></tr><tr><td>Coordenadas  E</td><td>" + $("#coordenada_e").val() + "</td><td>N</td><td>" + $("#coordenada_n").val() + "</td></tr>"
            + "                     <tr><td>Elemento</td><td colspan='3'></td></tr><tr><td>Propietario</td><td colspan='3'>" + $("#propietario").val() + "</td></tr>"
            + "                     <tr><td>Vereda</td><td>" + $("#vereda").val() + "</td><td>Municipio</td><td>" + $("#P_MUN option:selected").text() + "</td></tr><tr><td>Fecha</td><td colspan='3'>" + getCurrentDate() + "</td></tr>"
            + "                     </table>"
            + "                 </div>"
            + "             </td> "
            + "            </tr>"
            + "            <tr>"
            + "              <td class='encabezado'>pre-viv-00" + $("#acta").val() + "-01</td>"
            + "              <td class='encabezado'>pre-viv-00" + $("#acta").val() + "-02</td>"
            + "            </tr>"
            + "            <tr>"
            + "              <td valign='bottom' style='background: url("+ cordova.file.dataDirectory +"/files/pre-viv-" + ac +"-"+ 3 + ".jpg );vertical-align:bottom;height:280px;background-size:cover;' >"
            + "                 <div class='tag'>"
            + "                   <table border='1' style='border: 1px solid; border-collapse: collapse; width: 100%;font-size: 8px;'><tr><td colspan='4'>ACTA DE VIVIENDA</td>"
            + "                     </tr><tr><td>Linea/salvo</td><td>" + $("#linea").val() + "</td><td>SP</td><td>" + $("#sp_cercano").val() + "</td></tr><tr><td>Coordenadas  E</td><td>" + $("#coordenada_e").val() + "</td><td>N</td><td>" + $("#coordenada_n").val() + "</td></tr>"
            + "                     <tr><td>Elemento</td><td colspan='3'></td></tr><tr><td>Propietario</td><td colspan='3'>" + $("#propietario").val() + "</td></tr>"
            + "                     <tr><td>Vereda</td><td>" + $("#vereda").val() + "</td><td>Municipio</td><td>" + $("#P_MUN option:selected").text() + "</td></tr><tr><td>Fecha</td><td colspan='3'>" + getCurrentDate() + "</td></tr>"
            + "                     </table>"
            + "                 </div>"
            + "             </td> "
            + "              <td valign='bottom' style='background: url("+ cordova.file.dataDirectory +"/files/pre-viv-" + ac +"-"+ 4 + ".jpg );vertical-align:bottom;height:280px;background-size:cover;' >"
            + "                 <div class='tag'>"
            + "                   <table border='1' style='border: 1px solid; border-collapse: collapse; width: 100%;font-size: 8px;'><tr><td colspan='4'>ACTA DE VIVIENDA</td>"
            + "                     </tr><tr><td>Linea/salvo</td><td>" + $("#linea").val() + "</td><td>SP</td><td>" + $("#sp_cercano").val() + "</td></tr><tr><td>Coordenadas  E</td><td>" + $("#coordenada_e").val() + "</td><td>N</td><td>" + $("#coordenada_n").val() + "</td></tr>"
            + "                     <tr><td>Elemento</td><td colspan='3'></td></tr><tr><td>Propietario</td><td colspan='3'>" + $("#propietario").val() + "</td></tr>"
            + "                     <tr><td>Vereda</td><td>" + $("#vereda").val() + "</td><td>Municipio</td><td>" + $("#P_MUN option:selected").text() + "</td></tr><tr><td>Fecha</td><td colspan='3'>" + getCurrentDate() + "</td></tr>"
            + "                     </table>"
            + "                 </div>"
            + "             </td> "
            + "            </tr>"
            + "            <tr>"
            + "              <td class='encabezado'>pre-viv-00" + $("#acta").val() + "-03</td>"
            + "              <td class='encabezado'>pre-viv-00" + $("#acta").val() + "-04</td>"
            + "            </tr>"
            + "            <tr>"
            + "              <td valign='bottom' style='background: url("+ cordova.file.dataDirectory +"/files/pre-viv-" + ac +"-"+ 5 + ".jpg );vertical-align:bottom;height:280px;background-size:cover;' >"
            + "                 <div class='tag'>"
            + "                   <table border='1' style='border: 1px solid; border-collapse: collapse; width: 100%;font-size: 8px;'><tr><td colspan='4'>ACTA DE VIVIENDA</td>"
            + "                     </tr><tr><td>Linea/salvo</td><td>" + $("#linea").val() + "</td><td>SP</td><td>" + $("#sp_cercano").val() + "</td></tr><tr><td>Coordenadas  E</td><td>" + $("#coordenada_e").val() + "</td><td>N</td><td>" + $("#coordenada_n").val() + "</td></tr>"
            + "                     <tr><td>Elemento</td><td colspan='3'></td></tr><tr><td>Propietario</td><td colspan='3'>" + $("#propietario").val() + "</td></tr>"
            + "                     <tr><td>Vereda</td><td>" + $("#vereda").val() + "</td><td>Municipio</td><td>" + $("#P_MUN option:selected").text() + "</td></tr><tr><td>Fecha</td><td colspan='3'>" + getCurrentDate() + "</td></tr>"
            + "                     </table>"
            + "                 </div>"
            + "             </td> "
            + "              <td valign='bottom' style='background: url("+ cordova.file.dataDirectory +"/files/pre-viv-" + ac +"-"+ 6 + ".jpg );vertical-align:bottom;height:280px;background-size:cover;' >"
            + "                 <div class='tag'>"
            + "                   <table border='1' style='border: 1px solid; border-collapse: collapse; width: 100%;font-size: 8px;'><tr><td colspan='4'>ACTA DE VIVIENDA</td>"
            + "                     </tr><tr><td>Linea/salvo</td><td>" + $("#linea").val() + "</td><td>SP</td><td>" + $("#sp_cercano").val() + "</td></tr><tr><td>Coordenadas  E</td><td>" + $("#coordenada_e").val() + "</td><td>N</td><td>" + $("#coordenada_n").val() + "</td></tr>"
            + "                     <tr><td>Elemento</td><td colspan='3'></td></tr><tr><td>Propietario</td><td colspan='3'>" + $("#propietario").val() + "</td></tr>"
            + "                     <tr><td>Vereda</td><td>" + $("#vereda").val() + "</td><td>Municipio</td><td>" + $("#P_MUN option:selected").text() + "</td></tr><tr><td>Fecha</td><td colspan='3'>" + getCurrentDate() + "</td></tr>"
            + "                     </table>"
            + "                 </div>"
            + "             </td> "
            + "            </tr>"
            + "            <tr>"
            + "              <td class='encabezado'>pre-viv-00" + $("#acta").val() + "-05</td>"
            + "              <td class='encabezado'>pre-viv-00" + $("#acta").val() + "-06</td>"
            + "             </tr>"
            + "       	</tbody>"
            + "       </table>"			
            + "    </body>"
            + "</html>",
            documentSize: 'A4',
            landscape: 'portrait',
            type: 'share',
			fileName: 'pre-viv-'+ $("#acta").val()
        }, this.success, this.failure);
}

function capturePhoto() {
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
    var newFileName = 'pre-viv-' + ac +'-'+ i + ".jpg";
    i++;
    
    var dir = '/';
    window.localStorage.setItem('pre-viv-' + ac +'-'+ i,'');
    
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
	alert(entry.toURL());
	var url = entry.toURL(); // file or remote URL. url can also be dataURL, but giving it a file path is much faster
	var album = 'pre-viv-' + ac;
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

function insertDataPreVivienda() {
	

    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});


    var id = $("#acta").val();
    var programa_sismico = window.localStorage.getItem("programa_sismico");
    var operadora = window.localStorage.getItem("operadora");
    var fecha = getCurrentDateTime();
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
    var topografia = $("#topografia").val();
    var tiempo_construccion = $("#tiempo_construccion").val();
    var origen_coord = $("#origen_coord").val();
    var coordenada_e = $("#coordenada_e").val();
    var coordenada_n = $("#coordenada_n").val();
    var stk = $("#stk").val();
    var sp_cercano = $("#sp_cercano").val();
    var distancia_sp = $("#distancia_sp").val();
    var laminar = ($("#laminar").is(':checked') ? "1" : "0");
    var surcos = ($("#surcos").is(':checked') ? "1" : "0");
    var carcavas = ($("#carcavas").is(':checked') ? "1" : "0");
    var socavacion = ($("#socavacion").is(':checked') ? "1" : "0");
    var ninguno = ($("#ninguno").is(':checked') ? "1" : "0");
    var caidas = ($("#caidas").is(':checked') ? "1" : "0");
    var deslizamientos = ($("#deslizamientos").is(':checked') ? "1" : "0");
    var volcamientos = ($("#volcamientos").is(':checked') ? "1" : "0");
    var flujos = ($("#flujos").is(':checked') ? "1" : "0");
    var ningunom = ($("#ningunom").is(':checked') ? "1" : "0");

    var ex_paredes_material = $("#ex_paredes_material").val();
    var ex_paredes_estado = $("#ex_paredes_estado").val();
    var ex_paredes_anomalias = $("#ex_paredes_anomalias").val();
    var ex_pisos_material = $("#ex_pisos_material").val();
    var ex_pisos_estado = $("#ex_pisos_estado").val();
    var ex_pisos_anomalias = $("#ex_pisos_anomalias").val();
    var ex_techo_material = $("#ex_techo_material").val();
    var ex_techo_estado = $("#ex_techo_estado").val();
    var ex_techo_anomalias = $("#ex_techo_anomalias").val();
    var ex_cielo_material = $("#ex_cielo_material").val();
    var ex_cielo_estado = $("#ex_cielo_estado").val();
    var ex_cielo_anomalias = $("#ex_cielo_anomalias").val();
    var ex_estruct_material = $("#ex_estruct_material").val();
    var ex_estruct_estado = $("#ex_estruct_estado").val();
    var ex_estruct_anomalias = $("#ex_estruct_anomalias").val();
    var ex_panete_material = $("#ex_panete_material").val();
    var ex_panete_estado = $("#ex_panete_estado").val();
    var ex_panete_anomalias = $("#ex_panete_anomalias").val();
    var ex_pintu_material = $("#ex_pintu_material").val();
    var ex_pintu_estado = $("#ex_pintu_estado").val();
    var ex_pintu_anomalias = $("#ex_pintu_anomalias").val();
    var ex_ventana_material = $("#ex_ventana_material").val();
    var ex_ventana_estado = $("#ex_ventana_estado").val();
    var ex_ventana_anomalias = $("#ex_ventana_anomalias").val();
    var ex_puerta_material = $("#ex_puerta_material").val();
    var ex_puerta_estado = $("#ex_puerta_estado").val();
    var ex_puerta_anomalias = $("#ex_puerta_anomalias").val();
    var alc1_paredes_material = $("#alc1_paredes_material").val();
    var alc1_paredes_estado = $("#alc1_paredes_estado").val();
    var alc1_paredes_anomalias = $("#alc1_paredes_anomalias").val();
    var alc1_pisos_material = $("#alc1_pisos_material").val();
    var alc1_pisos_estado = $("#alc1_pisos_estado").val();
    var alc1_pisos_anomalias = $("#alc1_pisos_anomalias").val();
    var alc1_techo_material = $("#alc1_techo_material").val();
    var alc1_techo_estado = $("#alc1_techo_estado").val();
    var alc1_techo_anomalias = $("#alc1_techo_anomalias").val();
    var alc1_cielo_material = $("#alc1_cielo_material").val();
    var alc1_cielo_estado = $("#alc1_cielo_estado").val();
    var alc1_cielo_anomalias = $("#alc1_cielo_anomalias").val();
    var alc1_estruct_material = $("#alc1_estruct_material").val();
    var alc1_estruct_estado = $("#alc1_estruct_estado").val();
    var alc1_estruct_anomalias = $("#alc1_estruct_anomalias").val();
    var alc1_panete_material = $("#alc1_panete_material").val();
    var alc1_panete_estado = $("#alc1_panete_estado").val();
    var alc1_panete_anomalias = $("#alc1_panete_anomalias").val();
    var alc1_pintu_material = $("#alc1_pintu_material").val();
    var alc1_pintu_estado = $("#alc1_pintu_estado").val();
    var alc1_pintu_anomalias = $("#alc1_pintu_anomalias").val();
    var alc1_ventana_material = $("#alc1_ventana_material").val();
    var alc1_ventana_estado = $("#alc1_ventana_estado").val();
    var alc1_ventana_anomalias = $("#alc1_ventana_anomalias").val();
    var alc1_puerta_material = $("#alc1_puerta_material").val();
    var alc1_puerta_estado = $("#alc1_puerta_estado").val();
    var alc1_puerta_anomalias = $("#alc1_puerta_anomalias").val();
    var alc2_paredes_material = $("#alc2_paredes_material").val();
    var alc2_paredes_estado = $("#alc2_paredes_estado").val();
    var alc2_paredes_anomalias = $("#alc2_paredes_anomalias").val();
    var alc2_pisos_material = $("#alc2_pisos_material").val();
    var alc2_pisos_estado = $("#alc2_pisos_estado").val();
    var alc2_pisos_anomalias = $("#alc2_pisos_anomalias").val();
    var alc2_techo_material = $("#alc2_techo_material").val();
    var alc2_techo_estado = $("#alc2_techo_estado").val();
    var alc2_techo_anomalias = $("#alc2_techo_anomalias").val();
    var alc2_cielo_material = $("#alc2_cielo_material").val();
    var alc2_cielo_estado = $("#alc2_cielo_estado").val();
    var alc2_cielo_anomalias = $("#alc2_cielo_anomalias").val();
    var alc2_estruct_material = $("#alc2_estruct_material").val();
    var alc2_estruct_estado = $("#alc2_estruct_estado").val();
    var alc2_estruct_anomalias = $("#alc2_estruct_anomalias").val();
    var alc2_panete_material = $("#alc2_panete_material").val();
    var alc2_panete_estado = $("#alc2_panete_estado").val();
    var alc2_panete_anomalias = $("#alc2_panete_anomalias").val();
    var alc2_pintu_material = $("#alc2_pintu_material").val();
    var alc2_pintu_estado = $("#alc2_pintu_estado").val();
    var alc2_pintu_anomalias = $("#alc2_pintu_anomalias").val();
    var alc2_ventana_material = $("#alc2_ventana_material").val();
    var alc2_ventana_estado = $("#alc2_ventana_estado").val();
    var alc2_ventana_anomalias = $("#alc2_ventana_anomalias").val();
    var alc2_puerta_material = $("#alc2_puerta_material").val();
    var alc2_puerta_estado = $("#alc2_puerta_estado").val();
    var alc2_puerta_anomalias = $("#alc2_puerta_anomalias").val();
    var alc3_paredes_material = $("#alc3_paredes_material").val();
    var alc3_paredes_estado = $("#alc3_paredes_estado").val();
    var alc3_paredes_anomalias = $("#alc3_paredes_anomalias").val();
    var alc3_pisos_material = $("#alc3_pisos_material").val();
    var alc3_pisos_estado = $("#alc3_pisos_estado").val();
    var alc3_pisos_anomalias = $("#alc3_pisos_anomalias").val();
    var alc3_techo_material = $("#alc3_techo_material").val();
    var alc3_techo_estado = $("#alc3_techo_estado").val();
    var alc3_techo_anomalias = $("#alc3_techo_anomalias").val();
    var alc3_cielo_material = $("#alc3_cielo_material").val();
    var alc3_cielo_estado = $("#alc3_cielo_estado").val();
    var alc3_cielo_anomalias = $("#alc3_cielo_anomalias").val();
    var alc3_estruct_material = $("#alc3_estruct_material").val();
    var alc3_estruct_estado = $("#alc3_estruct_estado").val();
    var alc3_estruct_anomalias = $("#alc3_estruct_anomalias").val();
    var alc3_panete_material = $("#alc3_panete_material").val();
    var alc3_panete_estado = $("#alc3_panete_estado").val();
    var alc3_panete_anomalias = $("#alc3_panete_anomalias").val();
    var alc3_pintu_material = $("#alc3_pintu_material").val();
    var alc3_pintu_estado = $("#alc3_pintu_estado").val();
    var alc3_pintu_anomalias = $("#alc3_pintu_anomalias").val();
    var alc3_ventana_material = $("#alc3_ventana_material").val();
    var alc3_ventana_estado = $("#alc3_ventana_estado").val();
    var alc3_ventana_anomalias = $("#alc3_ventana_anomalias").val();
    var alc3_puerta_material = $("#alc3_puerta_material").val();
    var alc3_puerta_estado = $("#alc3_puerta_estado").val();
    var alc3_puerta_anomalias = $("#alc3_puerta_anomalias").val();
    var alc4_paredes_material = $("#alc4_paredes_material").val();
    var alc4_paredes_estado = $("#alc4_paredes_estado").val();
    var alc4_paredes_anomalias = $("#alc4_paredes_anomalias").val();
    var alc4_pisos_material = $("#alc4_pisos_material").val();
    var alc4_pisos_estado = $("#alc4_pisos_estado").val();
    var alc4_pisos_anomalias = $("#alc4_pisos_anomalias").val();
    var alc4_techo_material = $("#alc4_techo_material").val();
    var alc4_techo_estado = $("#alc4_techo_estado").val();
    var alc4_techo_anomalias = $("#alc4_techo_anomalias").val();
    var alc4_cielo_material = $("#alc4_cielo_material").val();
    var alc4_cielo_estado = $("#alc4_cielo_estado").val();
    var alc4_cielo_anomalias = $("#alc4_cielo_anomalias").val();
    var alc4_estruct_material = $("#alc4_estruct_material").val();
    var alc4_estruct_estado = $("#alc4_estruct_estado").val();
    var alc4_estruct_anomalias = $("#alc4_estruct_anomalias").val();
    var alc4_panete_material = $("#alc4_panete_material").val();
    var alc4_panete_estado = $("#alc4_panete_estado").val();
    var alc4_panete_anomalias = $("#alc4_panete_anomalias").val();
    var alc4_pintu_material = $("#alc4_pintu_material").val();
    var alc4_pintu_estado = $("#alc4_pintu_estado").val();
    var alc4_pintu_anomalias = $("#alc4_pintu_anomalias").val();
    var alc4_ventana_material = $("#alc4_ventana_material").val();
    var alc4_ventana_estado = $("#alc4_ventana_estado").val();
    var alc4_ventana_anomalias = $("#alc4_ventana_anomalias").val();
    var alc4_puerta_material = $("#alc4_puerta_material").val();
    var alc4_puerta_estado = $("#alc4_puerta_estado").val();
    var alc4_puerta_anomalias = $("#alc4_puerta_anomalias").val();
    var alc5_paredes_material = $("#alc5_paredes_material").val();
    var alc5_paredes_estado = $("#alc5_paredes_estado").val();
    var alc5_paredes_anomalias = $("#alc5_paredes_anomalias").val();
    var alc5_pisos_material = $("#alc5_pisos_material").val();
    var alc5_pisos_estado = $("#alc5_pisos_estado").val();
    var alc5_pisos_anomalias = $("#alc5_pisos_anomalias").val();
    var alc5_techo_material = $("#alc5_techo_material").val();
    var alc5_techo_estado = $("#alc5_techo_estado").val();
    var alc5_techo_anomalias = $("#alc5_techo_anomalias").val();
    var alc5_cielo_material = $("#alc5_cielo_material").val();
    var alc5_cielo_estado = $("#alc5_cielo_estado").val();
    var alc5_cielo_anomalias = $("#alc5_cielo_anomalias").val();
    var alc5_estruct_material = $("#alc5_estruct_material").val();
    var alc5_estruct_estado = $("#alc5_estruct_estado").val();
    var alc5_estruct_anomalias = $("#alc5_estruct_anomalias").val();
    var alc5_panete_material = $("#alc5_panete_material").val();
    var alc5_panete_estado = $("#alc5_panete_estado").val();
    var alc5_panete_anomalias = $("#alc5_panete_anomalias").val();
    var alc5_pintu_material = $("#alc5_pintu_material").val();
    var alc5_pintu_estado = $("#alc5_pintu_estado").val();
    var alc5_pintu_anomalias = $("#alc5_pintu_anomalias").val();
    var alc5_ventana_material = $("#alc5_ventana_material").val();
    var alc5_ventana_estado = $("#alc5_ventana_estado").val();
    var alc5_ventana_anomalias = $("#alc5_ventana_anomalias").val();
    var alc5_puerta_material = $("#alc5_puerta_material").val();
    var alc5_puerta_estado = $("#alc5_puerta_estado").val();
    var alc5_puerta_anomalias = $("#alc5_puerta_anomalias").val();
    var sal1_paredes_material = $("#sal1_paredes_material").val();
    var sal1_paredes_estado = $("#sal1_paredes_estado").val();
    var sal1_paredes_anomalias = $("#sal1_paredes_anomalias").val();
    var sal1_pisos_material = $("#sal1_pisos_material").val();
    var sal1_pisos_estado = $("#sal1_pisos_estado").val();
    var sal1_pisos_anomalias = $("#sal1_pisos_anomalias").val();
    var sal1_techo_material = $("#sal1_techo_material").val();
    var sal1_techo_estado = $("#sal1_techo_estado").val();
    var sal1_techo_anomalias = $("#sal1_techo_anomalias").val();
    var sal1_cielo_material = $("#sal1_cielo_material").val();
    var sal1_cielo_estado = $("#sal1_cielo_estado").val();
    var sal1_cielo_anomalias = $("#sal1_cielo_anomalias").val();
    var sal1_estruct_material = $("#sal1_estruct_material").val();
    var sal1_estruct_estado = $("#sal1_estruct_estado").val();
    var sal1_estruct_anomalias = $("#sal1_estruct_anomalias").val();
    var sal1_panete_material = $("#sal1_panete_material").val();
    var sal1_panete_estado = $("#sal1_panete_estado").val();
    var sal1_panete_anomalias = $("#sal1_panete_anomalias").val();
    var sal1_pintu_material = $("#sal1_pintu_material").val();
    var sal1_pintu_estado = $("#sal1_pintu_estado").val();
    var sal1_pintu_anomalias = $("#sal1_pintu_anomalias").val();
    var sal1_ventana_material = $("#sal1_ventana_material").val();
    var sal1_ventana_estado = $("#sal1_ventana_estado").val();
    var sal1_ventana_anomalias = $("#sal1_ventana_anomalias").val();
    var sal1_puerta_material = $("#sal1_puerta_material").val();
    var sal1_puerta_estado = $("#sal1_puerta_estado").val();
    var sal1_puerta_anomalias = $("#sal1_puerta_anomalias").val();
    var sal2_paredes_material = $("#sal2_paredes_material").val();
    var sal2_paredes_estado = $("#sal2_paredes_estado").val();
    var sal2_paredes_anomalias = $("#sal2_paredes_anomalias").val();
    var sal2_pisos_material = $("#sal2_pisos_material").val();
    var sal2_pisos_estado = $("#sal2_pisos_estado").val();
    var sal2_pisos_anomalias = $("#sal2_pisos_anomalias").val();
    var sal2_techo_material = $("#sal2_techo_material").val();
    var sal2_techo_estado = $("#sal2_techo_estado").val();
    var sal2_techo_anomalias = $("#sal2_techo_anomalias").val();
    var sal2_cielo_material = $("#sal2_cielo_material").val();
    var sal2_cielo_estado = $("#sal2_cielo_estado").val();
    var sal2_cielo_anomalias = $("#sal2_cielo_anomalias").val();
    var sal2_estruct_material = $("#sal2_estruct_material").val();
    var sal2_estruct_estado = $("#sal2_estruct_estado").val();
    var sal2_estruct_anomalias = $("#sal2_estruct_anomalias").val();
    var sal2_panete_material = $("#sal2_panete_material").val();
    var sal2_panete_estado = $("#sal2_panete_estado").val();
    var sal2_panete_anomalias = $("#sal2_panete_anomalias").val();
    var sal2_pintu_material = $("#sal2_pintu_material").val();
    var sal2_pintu_estado = $("#sal2_pintu_estado").val();
    var sal2_pintu_anomalias = $("#sal2_pintu_anomalias").val();
    var sal2_ventana_material = $("#sal2_ventana_material").val();
    var sal2_ventana_estado = $("#sal2_ventana_estado").val();
    var sal2_ventana_anomalias = $("#sal2_ventana_anomalias").val();
    var sal2_puerta_material = $("#sal2_puerta_material").val();
    var sal2_puerta_estado = $("#sal2_puerta_estado").val();
    var sal2_puerta_anomalias = $("#sal2_puerta_anomalias").val();
    var come1_paredes_material = $("#come1_paredes_material").val();
    var come1_paredes_estado = $("#come1_paredes_estado").val();
    var come1_paredes_anomalias = $("#come1_paredes_anomalias").val();
    var come1_pisos_material = $("#come1_pisos_material").val();
    var come1_pisos_estado = $("#come1_pisos_estado").val();
    var come1_pisos_anomalias = $("#come1_pisos_anomalias").val();
    var come1_techo_material = $("#come1_techo_material").val();
    var come1_techo_estado = $("#come1_techo_estado").val();
    var come1_techo_anomalias = $("#come1_techo_anomalias").val();
    var come1_cielo_material = $("#come1_cielo_material").val();
    var come1_cielo_estado = $("#come1_cielo_estado").val();
    var come1_cielo_anomalias = $("#come1_cielo_anomalias").val();
    var come1_estruct_material = $("#come1_estruct_material").val();
    var come1_estruct_estado = $("#come1_estruct_estado").val();
    var come1_estruct_anomalias = $("#come1_estruct_anomalias").val();
    var come1_panete_material = $("#come1_panete_material").val();
    var come1_panete_estado = $("#come1_panete_estado").val();
    var come1_panete_anomalias = $("#come1_panete_anomalias").val();
    var come1_pintu_material = $("#come1_pintu_material").val();
    var come1_pintu_estado = $("#come1_pintu_estado").val();
    var come1_pintu_anomalias = $("#come1_pintu_anomalias").val();
    var come1_ventana_material = $("#come1_ventana_material").val();
    var come1_ventana_estado = $("#come1_ventana_estado").val();
    var come1_ventana_anomalias = $("#come1_ventana_anomalias").val();
    var come1_puerta_material = $("#come1_puerta_material").val();
    var come1_puerta_estado = $("#come1_puerta_estado").val();
    var come1_puerta_anomalias = $("#come1_puerta_anomalias").val();
    var come2_paredes_material = $("#come2_paredes_material").val();
    var come2_paredes_estado = $("#come2_paredes_estado").val();
    var come2_paredes_anomalias = $("#come2_paredes_anomalias").val();
    var come2_pisos_material = $("#come2_pisos_material").val();
    var come2_pisos_estado = $("#come2_pisos_estado").val();
    var come2_pisos_anomalias = $("#come2_pisos_anomalias").val();
    var come2_techo_material = $("#come2_techo_material").val();
    var come2_techo_estado = $("#come2_techo_estado").val();
    var come2_techo_anomalias = $("#come2_techo_anomalias").val();
    var come2_cielo_material = $("#come2_cielo_material").val();
    var come2_cielo_estado = $("#come2_cielo_estado").val();
    var come2_cielo_anomalias = $("#come2_cielo_anomalias").val();
    var come2_estruct_material = $("#come2_estruct_material").val();
    var come2_estruct_estado = $("#come2_estruct_estado").val();
    var come2_estruct_anomalias = $("#come2_estruct_anomalias").val();
    var come2_panete_material = $("#come2_panete_material").val();
    var come2_panete_estado = $("#come2_panete_estado").val();
    var come2_panete_anomalias = $("#come2_panete_anomalias").val();
    var come2_pintu_material = $("#come2_pintu_material").val();
    var come2_pintu_estado = $("#come2_pintu_estado").val();
    var come2_pintu_anomalias = $("#come2_pintu_anomalias").val();
    var come2_ventana_material = $("#come2_ventana_material").val();
    var come2_ventana_estado = $("#come2_ventana_estado").val();
    var come2_ventana_anomalias = $("#come2_ventana_anomalias").val();
    var come2_puerta_material = $("#come2_puerta_material").val();
    var come2_puerta_estado = $("#come2_puerta_estado").val();
    var come2_puerta_anomalias = $("#come2_puerta_anomalias").val();
    var coci1_paredes_material = $("#coci1_paredes_material").val();
    var coci1_paredes_estado = $("#coci1_paredes_estado").val();
    var coci1_paredes_anomalias = $("#coci1_paredes_anomalias").val();
    var coci1_pisos_material = $("#coci1_pisos_material").val();
    var coci1_pisos_estado = $("#coci1_pisos_estado").val();
    var coci1_pisos_anomalias = $("#coci1_pisos_anomalias").val();
    var coci1_techo_material = $("#coci1_techo_material").val();
    var coci1_techo_estado = $("#coci1_techo_estado").val();
    var coci1_techo_anomalias = $("#coci1_techo_anomalias").val();
    var coci1_cielo_material = $("#coci1_cielo_material").val();
    var coci1_cielo_estado = $("#coci1_cielo_estado").val();
    var coci1_cielo_anomalias = $("#coci1_cielo_anomalias").val();
    var coci1_estruct_material = $("#coci1_estruct_material").val();
    var coci1_estruct_estado = $("#coci1_estruct_estado").val();
    var coci1_estruct_anomalias = $("#coci1_estruct_anomalias").val();
    var coci1_panete_material = $("#coci1_panete_material").val();
    var coci1_panete_estado = $("#coci1_panete_estado").val();
    var coci1_panete_anomalias = $("#coci1_panete_anomalias").val();
    var coci1_pintu_material = $("#coci1_pintu_material").val();
    var coci1_pintu_estado = $("#coci1_pintu_estado").val();
    var coci1_pintu_anomalias = $("#coci1_pintu_anomalias").val();
    var coci1_ventana_material = $("#coci1_ventana_material").val();
    var coci1_ventana_estado = $("#coci1_ventana_estado").val();
    var coci1_ventana_anomalias = $("#coci1_ventana_anomalias").val();
    var coci1_puerta_material = $("#coci1_puerta_material").val();
    var coci1_puerta_estado = $("#coci1_puerta_estado").val();
    var coci1_puerta_anomalias = $("#coci1_puerta_anomalias").val();
    var coci2_paredes_material = $("#coci2_paredes_material").val();
    var coci2_paredes_estado = $("#coci2_paredes_estado").val();
    var coci2_paredes_anomalias = $("#coci2_paredes_anomalias").val();
    var coci2_pisos_material = $("#coci2_pisos_material").val();
    var coci2_pisos_estado = $("#coci2_pisos_estado").val();
    var coci2_pisos_anomalias = $("#coci2_pisos_anomalias").val();
    var coci2_techo_material = $("#coci2_techo_material").val();
    var coci2_techo_estado = $("#coci2_techo_estado").val();
    var coci2_techo_anomalias = $("#coci2_techo_anomalias").val();
    var coci2_cielo_material = $("#coci2_cielo_material").val();
    var coci2_cielo_estado = $("#coci2_cielo_estado").val();
    var coci2_cielo_anomalias = $("#coci2_cielo_anomalias").val();
    var coci2_estruct_material = $("#coci2_estruct_material").val();
    var coci2_estruct_estado = $("#coci2_estruct_estado").val();
    var coci2_estruct_anomalias = $("#coci2_estruct_anomalias").val();
    var coci2_panete_material = $("#coci2_panete_material").val();
    var coci2_panete_estado = $("#coci2_panete_estado").val();
    var coci2_panete_anomalias = $("#coci2_panete_anomalias").val();
    var coci2_pintu_material = $("#coci2_pintu_material").val();
    var coci2_pintu_estado = $("#coci2_pintu_estado").val();
    var coci2_pintu_anomalias = $("#coci2_pintu_anomalias").val();
    var coci2_ventana_material = $("#coci2_ventana_material").val();
    var coci2_ventana_estado = $("#coci2_ventana_estado").val();
    var coci2_ventana_anomalias = $("#coci2_ventana_anomalias").val();
    var coci2_puerta_material = $("#coci2_puerta_material").val();
    var coci2_puerta_estado = $("#coci2_puerta_estado").val();
    var coci2_puerta_anomalias = $("#coci2_puerta_anomalias").val();
    var ban1_paredes_material = $("#ban1_paredes_material").val();
    var ban1_paredes_estado = $("#ban1_paredes_estado").val();
    var ban1_paredes_anomalias = $("#ban1_paredes_anomalias").val();
    var ban1_pisos_material = $("#ban1_pisos_material").val();
    var ban1_pisos_estado = $("#ban1_pisos_estado").val();
    var ban1_pisos_anomalias = $("#ban1_pisos_anomalias").val();
    var ban1_techo_material = $("#ban1_techo_material").val();
    var ban1_techo_estado = $("#ban1_techo_estado").val();
    var ban1_techo_anomalias = $("#ban1_techo_anomalias").val();
    var ban1_cielo_material = $("#ban1_cielo_material").val();
    var ban1_cielo_estado = $("#ban1_cielo_estado").val();
    var ban1_cielo_anomalias = $("#ban1_cielo_anomalias").val();
    var ban1_estruct_material = $("#ban1_estruct_material").val();
    var ban1_estruct_estado = $("#ban1_estruct_estado").val();
    var ban1_estruct_anomalias = $("#ban1_estruct_anomalias").val();
    var ban1_panete_material = $("#ban1_panete_material").val();
    var ban1_panete_estado = $("#ban1_panete_estado").val();
    var ban1_panete_anomalias = $("#ban1_panete_anomalias").val();
    var ban1_pintu_material = $("#ban1_pintu_material").val();
    var ban1_pintu_estado = $("#ban1_pintu_estado").val();
    var ban1_pintu_anomalias = $("#ban1_pintu_anomalias").val();
    var ban1_ventana_material = $("#ban1_ventana_material").val();
    var ban1_ventana_estado = $("#ban1_ventana_estado").val();
    var ban1_ventana_anomalias = $("#ban1_ventana_anomalias").val();
    var ban1_puerta_material = $("#ban1_puerta_material").val();
    var ban1_puerta_estado = $("#ban1_puerta_estado").val();
    var ban1_puerta_anomalias = $("#ban1_puerta_anomalias").val();
    var ban2_paredes_material = $("#ban2_paredes_material").val();
    var ban2_paredes_estado = $("#ban2_paredes_estado").val();
    var ban2_paredes_anomalias = $("#ban2_paredes_anomalias").val();
    var ban2_pisos_material = $("#ban2_pisos_material").val();
    var ban2_pisos_estado = $("#ban2_pisos_estado").val();
    var ban2_pisos_anomalias = $("#ban2_pisos_anomalias").val();
    var ban2_techo_material = $("#ban2_techo_material").val();
    var ban2_techo_estado = $("#ban2_techo_estado").val();
    var ban2_techo_anomalias = $("#ban2_techo_anomalias").val();
    var ban2_cielo_material = $("#ban2_cielo_material").val();
    var ban2_cielo_estado = $("#ban2_cielo_estado").val();
    var ban2_cielo_anomalias = $("#ban2_cielo_anomalias").val();
    var ban2_estruct_material = $("#ban2_estruct_material").val();
    var ban2_estruct_estado = $("#ban2_estruct_estado").val();
    var ban2_estruct_anomalias = $("#ban2_estruct_anomalias").val();
    var ban2_panete_material = $("#ban2_panete_material").val();
    var ban2_panete_estado = $("#ban2_panete_estado").val();
    var ban2_panete_anomalias = $("#ban2_panete_anomalias").val();
    var ban2_pintu_material = $("#ban2_pintu_material").val();
    var ban2_pintu_estado = $("#ban2_pintu_estado").val();
    var ban2_pintu_anomalias = $("#ban2_pintu_anomalias").val();
    var ban2_ventana_material = $("#ban2_ventana_material").val();
    var ban2_ventana_estado = $("#ban2_ventana_estado").val();
    var ban2_ventana_anomalias = $("#ban2_ventana_anomalias").val();
    var ban2_puerta_material = $("#ban2_puerta_material").val();
    var ban2_puerta_estado = $("#ban2_puerta_estado").val();
    var ban2_puerta_anomalias = $("#ban2_puerta_anomalias").val();
    var ban3_paredes_material = $("#ban3_paredes_material").val();
    var ban3_paredes_estado = $("#ban3_paredes_estado").val();
    var ban3_paredes_anomalias = $("#ban3_paredes_anomalias").val();
    var ban3_pisos_material = $("#ban3_pisos_material").val();
    var ban3_pisos_estado = $("#ban3_pisos_estado").val();
    var ban3_pisos_anomalias = $("#ban3_pisos_anomalias").val();
    var ban3_techo_material = $("#ban3_techo_material").val();
    var ban3_techo_estado = $("#ban3_techo_estado").val();
    var ban3_techo_anomalias = $("#ban3_techo_anomalias").val();
    var ban3_cielo_material = $("#ban3_cielo_material").val();
    var ban3_cielo_estado = $("#ban3_cielo_estado").val();
    var ban3_cielo_anomalias = $("#ban3_cielo_anomalias").val();
    var ban3_estruct_material = $("#ban3_estruct_material").val();
    var ban3_estruct_estado = $("#ban3_estruct_estado").val();
    var ban3_estruct_anomalias = $("#ban3_estruct_anomalias").val();
    var ban3_panete_material = $("#ban3_panete_material").val();
    var ban3_panete_estado = $("#ban3_panete_estado").val();
    var ban3_panete_anomalias = $("#ban3_panete_anomalias").val();
    var ban3_pintu_material = $("#ban3_pintu_material").val();
    var ban3_pintu_estado = $("#ban3_pintu_estado").val();
    var ban3_pintu_anomalias = $("#ban3_pintu_anomalias").val();
    var ban3_ventana_material = $("#ban3_ventana_material").val();
    var ban3_ventana_estado = $("#ban3_ventana_estado").val();
    var ban3_ventana_anomalias = $("#ban3_ventana_anomalias").val();
    var ban3_puerta_material = $("#ban3_puerta_material").val();
    var ban3_puerta_estado = $("#ban3_puerta_estado").val();
    var ban3_puerta_anomalias = $("#ban3_puerta_anomalias").val();
    var ban4_paredes_material = $("#ban4_paredes_material").val();
    var ban4_paredes_estado = $("#ban4_paredes_estado").val();
    var ban4_paredes_anomalias = $("#ban4_paredes_anomalias").val();
    var ban4_pisos_material = $("#ban4_pisos_material").val();
    var ban4_pisos_estado = $("#ban4_pisos_estado").val();
    var ban4_pisos_anomalias = $("#ban4_pisos_anomalias").val();
    var ban4_techo_material = $("#ban4_techo_material").val();
    var ban4_techo_estado = $("#ban4_techo_estado").val();
    var ban4_techo_anomalias = $("#ban4_techo_anomalias").val();
    var ban4_cielo_material = $("#ban4_cielo_material").val();
    var ban4_cielo_estado = $("#ban4_cielo_estado").val();
    var ban4_cielo_anomalias = $("#ban4_cielo_anomalias").val();
    var ban4_estruct_material = $("#ban4_estruct_material").val();
    var ban4_estruct_estado = $("#ban4_estruct_estado").val();
    var ban4_estruct_anomalias = $("#ban4_estruct_anomalias").val();
    var ban4_panete_material = $("#ban4_panete_material").val();
    var ban4_panete_estado = $("#ban4_panete_estado").val();
    var ban4_panete_anomalias = $("#ban4_panete_anomalias").val();
    var ban4_pintu_material = $("#ban4_pintu_material").val();
    var ban4_pintu_estado = $("#ban4_pintu_estado").val();
    var ban4_pintu_anomalias = $("#ban4_pintu_anomalias").val();
    var ban4_ventana_material = $("#ban4_ventana_material").val();
    var ban4_ventana_estado = $("#ban4_ventana_estado").val();
    var ban4_ventana_anomalias = $("#ban4_ventana_anomalias").val();
    var ban4_puerta_material = $("#ban4_puerta_material").val();
    var ban4_puerta_estado = $("#ban4_puerta_estado").val();
    var ban4_puerta_anomalias = $("#ban4_puerta_anomalias").val();
    var corr1_paredes_material = $("#corr1_paredes_material").val();
    var corr1_paredes_estado = $("#corr1_paredes_estado").val();
    var corr1_paredes_anomalias = $("#corr1_paredes_anomalias").val();
    var corr1_pisos_material = $("#corr1_pisos_material").val();
    var corr1_pisos_estado = $("#corr1_pisos_estado").val();
    var corr1_pisos_anomalias = $("#corr1_pisos_anomalias").val();
    var corr1_techo_material = $("#corr1_techo_material").val();
    var corr1_techo_estado = $("#corr1_techo_estado").val();
    var corr1_techo_anomalias = $("#corr1_techo_anomalias").val();
    var corr1_cielo_material = $("#corr1_cielo_material").val();
    var corr1_cielo_estado = $("#corr1_cielo_estado").val();
    var corr1_cielo_anomalias = $("#corr1_cielo_anomalias").val();
    var corr1_estruct_material = $("#corr1_estruct_material").val();
    var corr1_estruct_estado = $("#corr1_estruct_estado").val();
    var corr1_estruct_anomalias = $("#corr1_estruct_anomalias").val();
    var corr1_panete_material = $("#corr1_panete_material").val();
    var corr1_panete_estado = $("#corr1_panete_estado").val();
    var corr1_panete_anomalias = $("#corr1_panete_anomalias").val();
    var corr1_pintu_material = $("#corr1_pintu_material").val();
    var corr1_pintu_estado = $("#corr1_pintu_estado").val();
    var corr1_pintu_anomalias = $("#corr1_pintu_anomalias").val();
    var corr1_ventana_material = $("#corr1_ventana_material").val();
    var corr1_ventana_estado = $("#corr1_ventana_estado").val();
    var corr1_ventana_anomalias = $("#corr1_ventana_anomalias").val();
    var corr1_puerta_material = $("#corr1_puerta_material").val();
    var corr1_puerta_estado = $("#corr1_puerta_estado").val();
    var corr1_puerta_anomalias = $("#corr1_puerta_anomalias").val();
    var corr2_paredes_material = $("#corr2_paredes_material").val();
    var corr2_paredes_estado = $("#corr2_paredes_estado").val();
    var corr2_paredes_anomalias = $("#corr2_paredes_anomalias").val();
    var corr2_pisos_material = $("#corr2_pisos_material").val();
    var corr2_pisos_estado = $("#corr2_pisos_estado").val();
    var corr2_pisos_anomalias = $("#corr2_pisos_anomalias").val();
    var corr2_techo_material = $("#corr2_techo_material").val();
    var corr2_techo_estado = $("#corr2_techo_estado").val();
    var corr2_techo_anomalias = $("#corr2_techo_anomalias").val();
    var corr2_cielo_material = $("#corr2_cielo_material").val();
    var corr2_cielo_estado = $("#corr2_cielo_estado").val();
    var corr2_cielo_anomalias = $("#corr2_cielo_anomalias").val();
    var corr2_estruct_material = $("#corr2_estruct_material").val();
    var corr2_estruct_estado = $("#corr2_estruct_estado").val();
    var corr2_estruct_anomalias = $("#corr2_estruct_anomalias").val();
    var corr2_panete_material = $("#corr2_panete_material").val();
    var corr2_panete_estado = $("#corr2_panete_estado").val();
    var corr2_panete_anomalias = $("#corr2_panete_anomalias").val();
    var corr2_pintu_material = $("#corr2_pintu_material").val();
    var corr2_pintu_estado = $("#corr2_pintu_estado").val();
    var corr2_pintu_anomalias = $("#corr2_pintu_anomalias").val();
    var corr2_ventana_material = $("#corr2_ventana_material").val();
    var corr2_ventana_estado = $("#corr2_ventana_estado").val();
    var corr2_ventana_anomalias = $("#corr2_ventana_anomalias").val();
    var corr2_puerta_material = $("#corr2_puerta_material").val();
    var corr2_puerta_estado = $("#corr2_puerta_estado").val();
    var corr2_puerta_anomalias = $("#corr2_puerta_anomalias").val();
    var gar2_paredes_material = $("#gar2_paredes_material").val();
    var gar2_paredes_estado = $("#gar2_paredes_estado").val();
    var gar2_paredes_anomalias = $("#gar2_paredes_anomalias").val();
    var gar2_pisos_material = $("#gar2_pisos_material").val();
    var gar2_pisos_estado = $("#gar2_pisos_estado").val();
    var gar2_pisos_anomalias = $("#gar2_pisos_anomalias").val();
    var gar2_techo_material = $("#gar2_techo_material").val();
    var gar2_techo_estado = $("#gar2_techo_estado").val();
    var gar2_techo_anomalias = $("#gar2_techo_anomalias").val();
    var gar2_cielo_material = $("#gar2_cielo_material").val();
    var gar2_cielo_estado = $("#gar2_cielo_estado").val();
    var gar2_cielo_anomalias = $("#gar2_cielo_anomalias").val();
    var gar2_estruct_material = $("#gar2_estruct_material").val();
    var gar2_estruct_estado = $("#gar2_estruct_estado").val();
    var gar2_estruct_anomalias = $("#gar2_estruct_anomalias").val();
    var gar2_panete_material = $("#gar2_panete_material").val();
    var gar2_panete_estado = $("#gar2_panete_estado").val();
    var gar2_panete_anomalias = $("#gar2_panete_anomalias").val();
    var gar2_pintu_material = $("#gar2_pintu_material").val();
    var gar2_pintu_estado = $("#gar2_pintu_estado").val();
    var gar2_pintu_anomalias = $("#gar2_pintu_anomalias").val();
    var gar2_ventana_material = $("#gar2_ventana_material").val();
    var gar2_ventana_estado = $("#gar2_ventana_estado").val();
    var gar2_ventana_anomalias = $("#gar2_ventana_anomalias").val();
    var gar2_puerta_material = $("#gar2_puerta_material").val();
    var gar2_puerta_estado = $("#gar2_puerta_estado").val();
    var gar2_puerta_anomalias = $("#gar2_puerta_anomalias").val();
    var bod_paredes_material = $("#bod_paredes_material").val();
    var bod_paredes_estado = $("#bod_paredes_estado").val();
    var bod_paredes_anomalias = $("#bod_paredes_anomalias").val();
    var bod_pisos_material = $("#bod_pisos_material").val();
    var bod_pisos_estado = $("#bod_pisos_estado").val();
    var bod_pisos_anomalias = $("#bod_pisos_anomalias").val();
    var bod_techo_material = $("#bod_techo_material").val();
    var bod_techo_estado = $("#bod_techo_estado").val();
    var bod_techo_anomalias = $("#bod_techo_anomalias").val();
    var bod_cielo_material = $("#bod_cielo_material").val();
    var bod_cielo_estado = $("#bod_cielo_estado").val();
    var bod_cielo_anomalias = $("#bod_cielo_anomalias").val();
    var bod_estruct_material = $("#bod_estruct_material").val();
    var bod_estruct_estado = $("#bod_estruct_estado").val();
    var bod_estruct_anomalias = $("#bod_estruct_anomalias").val();
    var bod_panete_material = $("#bod_panete_material").val();
    var bod_panete_estado = $("#bod_panete_estado").val();
    var bod_panete_anomalias = $("#bod_panete_anomalias").val();
    var bod_pintu_material = $("#bod_pintu_material").val();
    var bod_pintu_estado = $("#bod_pintu_estado").val();
    var bod_pintu_anomalias = $("#bod_pintu_anomalias").val();
    var bod_ventana_material = $("#bod_ventana_material").val();
    var bod_ventana_estado = $("#bod_ventana_estado").val();
    var bod_ventana_anomalias = $("#bod_ventana_anomalias").val();
    var bod_puerta_material = $("#bod_puerta_material").val();
    var bod_puerta_estado = $("#bod_puerta_estado").val();
    var bod_puerta_anomalias = $("#bod_puerta_anomalias").val();
    var lav_paredes_material = $("#lav_paredes_material").val();
    var lav_paredes_estado = $("#lav_paredes_estado").val();
    var lav_paredes_anomalias = $("#lav_paredes_anomalias").val();
    var lav_pisos_material = $("#lav_pisos_material").val();
    var lav_pisos_estado = $("#lav_pisos_estado").val();
    var lav_pisos_anomalias = $("#lav_pisos_anomalias").val();
    var lav_techo_material = $("#lav_techo_material").val();
    var lav_techo_estado = $("#lav_techo_estado").val();
    var lav_techo_anomalias = $("#lav_techo_anomalias").val();
    var lav_cielo_material = $("#lav_cielo_material").val();
    var lav_cielo_estado = $("#lav_cielo_estado").val();
    var lav_cielo_anomalias = $("#lav_cielo_anomalias").val();
    var lav_estruct_material = $("#lav_estruct_material").val();
    var lav_estruct_estado = $("#lav_estruct_estado").val();
    var lav_estruct_anomalias = $("#lav_estruct_anomalias").val();
    var lav_panete_material = $("#lav_panete_material").val();
    var lav_panete_estado = $("#lav_panete_estado").val();
    var lav_panete_anomalias = $("#lav_panete_anomalias").val();
    var lav_pintu_material = $("#lav_pintu_material").val();
    var lav_pintu_estado = $("#lav_pintu_estado").val();
    var lav_pintu_anomalias = $("#lav_pintu_anomalias").val();
    var lav_ventana_material = $("#lav_ventana_material").val();
    var lav_ventana_estado = $("#lav_ventana_estado").val();
    var lav_ventana_anomalias = $("#lav_ventana_anomalias").val();
    var lav_puerta_material = $("#lav_puerta_material").val();
    var lav_puerta_estado = $("#lav_puerta_estado").val();
    var lav_puerta_anomalias = $("#lav_puerta_anomalias").val();
    var tanq_paredes_material = $("#tanq_paredes_material").val();
    var tanq_paredes_estado = $("#tanq_paredes_estado").val();
    var tanq_paredes_anomalias = $("#tanq_paredes_anomalias").val();
    var tanq_pisos_material = $("#tanq_pisos_material").val();
    var tanq_pisos_estado = $("#tanq_pisos_estado").val();
    var tanq_pisos_anomalias = $("#tanq_pisos_anomalias").val();
    var tanq_techo_material = $("#tanq_techo_material").val();
    var tanq_techo_estado = $("#tanq_techo_estado").val();
    var tanq_techo_anomalias = $("#tanq_techo_anomalias").val();
    var tanq_cielo_material = $("#tanq_cielo_material").val();
    var tanq_cielo_estado = $("#tanq_cielo_estado").val();
    var tanq_cielo_anomalias = $("#tanq_cielo_anomalias").val();
    var tanq_estruct_material = $("#tanq_estruct_material").val();
    var tanq_estruct_estado = $("#tanq_estruct_estado").val();
    var tanq_estruct_anomalias = $("#tanq_estruct_anomalias").val();
    var tanq_panete_material = $("#tanq_panete_material").val();
    var tanq_panete_estado = $("#tanq_panete_estado").val();
    var tanq_panete_anomalias = $("#tanq_panete_anomalias").val();
    var tanq_pintu_material = $("#tanq_pintu_material").val();
    var tanq_pintu_estado = $("#tanq_pintu_estado").val();
    var tanq_pintu_anomalias = $("#tanq_pintu_anomalias").val();
    var tanq_ventana_material = $("#tanq_ventana_material").val();
    var tanq_ventana_estado = $("#tanq_ventana_estado").val();
    var tanq_ventana_anomalias = $("#tanq_ventana_anomalias").val();
    var tanq_puerta_material = $("#tanq_puerta_material").val();
    var tanq_puerta_estado = $("#tanq_puerta_estado").val();
    var tanq_puerta_anomalias = $("#tanq_puerta_anomalias").val();
    var maq_paredes_material = $("#maq_paredes_material").val();
    var maq_paredes_estado = $("#maq_paredes_estado").val();
    var maq_paredes_anomalias = $("#maq_paredes_anomalias").val();
    var maq_pisos_material = $("#maq_pisos_material").val();
    var maq_pisos_estado = $("#maq_pisos_estado").val();
    var maq_pisos_anomalias = $("#maq_pisos_anomalias").val();
    var maq_techo_material = $("#maq_techo_material").val();
    var maq_techo_estado = $("#maq_techo_estado").val();
    var maq_techo_anomalias = $("#maq_techo_anomalias").val();
    var maq_cielo_material = $("#maq_cielo_material").val();
    var maq_cielo_estado = $("#maq_cielo_estado").val();
    var maq_cielo_anomalias = $("#maq_cielo_anomalias").val();
    var maq_estruct_material = $("#maq_estruct_material").val();
    var maq_estruct_estado = $("#maq_estruct_estado").val();
    var maq_estruct_anomalias = $("#maq_estruct_anomalias").val();
    var maq_panete_material = $("#maq_panete_material").val();
    var maq_panete_estado = $("#maq_panete_estado").val();
    var maq_panete_anomalias = $("#maq_panete_anomalias").val();
    var maq_pintu_material = $("#maq_pintu_material").val();
    var maq_pintu_estado = $("#maq_pintu_estado").val();
    var maq_pintu_anomalias = $("#maq_pintu_anomalias").val();
    var maq_ventana_material = $("#maq_ventana_material").val();
    var maq_ventana_estado = $("#maq_ventana_estado").val();
    var maq_ventana_anomalias = $("#maq_ventana_anomalias").val();
    var maq_puerta_material = $("#maq_puerta_material").val();
    var maq_puerta_estado = $("#maq_puerta_estado").val();
    var maq_puerta_anomalias = $("#maq_puerta_anomalias").val();
    var pisc_paredes_material = $("#pisc_paredes_material").val();
    var pisc_paredes_estado = $("#pisc_paredes_estado").val();
    var pisc_paredes_anomalias = $("#pisc_paredes_anomalias").val();
    var pisc_pisos_material = $("#pisc_pisos_material").val();
    var pisc_pisos_estado = $("#pisc_pisos_estado").val();
    var pisc_pisos_anomalias = $("#pisc_pisos_anomalias").val();
    var pisc_techo_material = $("#pisc_techo_material").val();
    var pisc_techo_estado = $("#pisc_techo_estado").val();
    var pisc_techo_anomalias = $("#pisc_techo_anomalias").val();
    var pisc_cielo_material = $("#pisc_cielo_material").val();
    var pisc_cielo_estado = $("#pisc_cielo_estado").val();
    var pisc_cielo_anomalias = $("#pisc_cielo_anomalias").val();
    var pisc_estruct_material = $("#pisc_estruct_material").val();
    var pisc_estruct_estado = $("#pisc_estruct_estado").val();
    var pisc_estruct_anomalias = $("#pisc_estruct_anomalias").val();
    var pisc_panete_material = $("#pisc_panete_material").val();
    var pisc_panete_estado = $("#pisc_panete_estado").val();
    var pisc_panete_anomalias = $("#pisc_panete_anomalias").val();
    var pisc_pintu_material = $("#pisc_pintu_material").val();
    var pisc_pintu_estado = $("#pisc_pintu_estado").val();
    var pisc_pintu_anomalias = $("#pisc_pintu_anomalias").val();
    var pisc_ventana_material = $("#pisc_ventana_material").val();
    var pisc_ventana_estado = $("#pisc_ventana_estado").val();
    var pisc_ventana_anomalias = $("#pisc_ventana_anomalias").val();
    var pisc_puerta_material = $("#pisc_puerta_material").val();
    var pisc_puerta_estado = $("#pisc_puerta_estado").val();
    var pisc_puerta_anomalias = $("#pisc_puerta_anomalias").val();
    var observa = $("#observa").val();
    var fechaHoraInicio = window.localStorage.getItem("fechaHoraIni");
    var usuario = window.localStorage.getItem("current_user");
    var estado = '1';
	var lat = window.localStorage.getItem("lat");
	var lon =  window.localStorage.getItem("lon");


    if (window.localStorage.getItem("editar") === 'true') {

        var executeQuery = "UPDATE pre_vivienda_p SET "
                + "vereda=?,"
                + "predio=?,"
                + "propietario=?,"
                + "cc_propietario=?,"
                + "lugar_cc_propietario=?,"
                + "telefono=?,"
                + "topografia=?,"
                + "tiempo_construccion=?,"
                + "origen_coord=?,"
                + "coordenada_e=?,"
                + "coordenada_n=?,"
                + "stk=?,"
                + "sp_cercano=?,"
                + "distancia_sp=?,"
                + "laminar=?,"
                + "surcos=?,"
                + "carcavas=?,"
                + "socavacion=?,"
                + "ninguno=?,"
                + "caidas=?,"
                + "deslizamientos=?,"
                + "volcamientos=?,"
                + "flujos=?,"
                + "ningunom=?,"
                + "ex_paredes_material=?,"
                + "ex_paredes_estado=?,"
                + "ex_paredes_anomalias=?,"
                + "ex_pisos_material=?,"
                + "ex_pisos_estado=?,"
                + "ex_pisos_anomalias=?,"
                + "ex_techo_material=?,"
                + "ex_techo_estado=?,"
                + "ex_techo_anomalias=?,"
                + "ex_cielo_material=?,"
                + "ex_cielo_estado=?,"
                + "ex_cielo_anomalias=?,"
                + "ex_estruct_material=?,"
                + "ex_estruct_estado=?,"
                + "ex_estruct_anomalias=?,"
                + "ex_panete_material=?,"
                + "ex_panete_estado=?,"
                + "ex_panete_anomalias=?,"
                + "ex_pintu_material=?,"
                + "ex_pintu_estado=?,"
                + "ex_pintu_anomalias=?,"
                + "ex_ventana_material=?,"
                + "ex_ventana_estado=?,"
                + "ex_ventana_anomalias=?,"
                + "ex_puerta_material=?,"
                + "ex_puerta_estado=?,"
                + "ex_puerta_anomalias=?,"
                + "alc1_paredes_material=?,"
                + "alc1_paredes_estado=?,"
                + "alc1_paredes_anomalias=?,"
                + "alc1_pisos_material=?,"
                + "alc1_pisos_estado=?,"
                + "alc1_pisos_anomalias=?,"
                + "alc1_techo_material=?,"
                + "alc1_techo_estado=?,"
                + "alc1_techo_anomalias=?,"
                + "alc1_cielo_material=?,"
                + "alc1_cielo_estado=?,"
                + "alc1_cielo_anomalias=?,"
                + "alc1_estruct_material=?,"
                + "alc1_estruct_estado=?,"
                + "alc1_estruct_anomalias=?,"
                + "alc1_panete_material=?,"
                + "alc1_panete_estado=?,"
                + "alc1_panete_anomalias=?,"
                + "alc1_pintu_material=?,"
                + "alc1_pintu_estado=?,"
                + "alc1_pintu_anomalias=?,"
                + "alc1_ventana_material=?,"
                + "alc1_ventana_estado=?,"
                + "alc1_ventana_anomalias=?,"
                + "alc1_puerta_material=?,"
                + "alc1_puerta_estado=?,"
                + "alc1_puerta_anomalias=?,"
                + "alc2_paredes_material=?,"
                + "alc2_paredes_estado=?,"
                + "alc2_paredes_anomalias=?,"
                + "alc2_pisos_material=?,"
                + "alc2_pisos_estado=?,"
                + "alc2_pisos_anomalias=?,"
                + "alc2_techo_material=?,"
                + "alc2_techo_estado=?,"
                + "alc2_techo_anomalias=?,"
                + "alc2_cielo_material=?,"
                + "alc2_cielo_estado=?,"
                + "alc2_cielo_anomalias=?,"
                + "alc2_estruct_material=?,"
                + "alc2_estruct_estado=?,"
                + "alc2_estruct_anomalias=?,"
                + "alc2_panete_material=?,"
                + "alc2_panete_estado=?,"
                + "alc2_panete_anomalias=?,"
                + "alc2_pintu_material=?,"
                + "alc2_pintu_estado=?,"
                + "alc2_pintu_anomalias=?,"
                + "alc2_ventana_material=?,"
                + "alc2_ventana_estado=?,"
                + "alc2_ventana_anomalias=?,"
                + "alc2_puerta_material=?,"
                + "alc2_puerta_estado=?,"
                + "alc2_puerta_anomalias=?,"
                + "alc3_paredes_material=?,"
                + "alc3_paredes_estado=?,"
                + "alc3_paredes_anomalias=?,"
                + "alc3_pisos_material=?,"
                + "alc3_pisos_estado=?,"
                + "alc3_pisos_anomalias=?,"
                + "alc3_techo_material=?,"
                + "alc3_techo_estado=?,"
                + "alc3_techo_anomalias=?,"
                + "alc3_cielo_material=?,"
                + "alc3_cielo_estado=?,"
                + "alc3_cielo_anomalias=?,"
                + "alc3_estruct_material=?,"
                + "alc3_estruct_estado=?,"
                + "alc3_estruct_anomalias=?,"
                + "alc3_panete_material=?,"
                + "alc3_panete_estado=?,"
                + "alc3_panete_anomalias=?,"
                + "alc3_pintu_material=?,"
                + "alc3_pintu_estado=?,"
                + "alc3_pintu_anomalias=?,"
                + "alc3_ventana_material=?,"
                + "alc3_ventana_estado=?,"
                + "alc3_ventana_anomalias=?,"
                + "alc3_puerta_material=?,"
                + "alc3_puerta_estado=?,"
                + "alc3_puerta_anomalias=?,"
                + "alc4_paredes_material=?,"
                + "alc4_paredes_estado=?,"
                + "alc4_paredes_anomalias=?,"
                + "alc4_pisos_material=?,"
                + "alc4_pisos_estado=?,"
                + "alc4_pisos_anomalias=?,"
                + "alc4_techo_material=?,"
                + "alc4_techo_estado=?,"
                + "alc4_techo_anomalias=?,"
                + "alc4_cielo_material=?,"
                + "alc4_cielo_estado=?,"
                + "alc4_cielo_anomalias=?,"
                + "alc4_estruct_material=?,"
                + "alc4_estruct_estado=?,"
                + "alc4_estruct_anomalias=?,"
                + "alc4_panete_material=?,"
                + "alc4_panete_estado=?,"
                + "alc4_panete_anomalias=?,"
                + "alc4_pintu_material=?,"
                + "alc4_pintu_estado=?,"
                + "alc4_pintu_anomalias=?,"
                + "alc4_ventana_material=?,"
                + "alc4_ventana_estado=?,"
                + "alc4_ventana_anomalias=?,"
                + "alc4_puerta_material=?,"
                + "alc4_puerta_estado=?,"
                + "alc4_puerta_anomalias=?,"
                + "alc5_paredes_material=?,"
                + "alc5_paredes_estado=?,"
                + "alc5_paredes_anomalias=?,"
                + "alc5_pisos_material=?,"
                + "alc5_pisos_estado=?,"
                + "alc5_pisos_anomalias=?,"
                + "alc5_techo_material=?,"
                + "alc5_techo_estado=?,"
                + "alc5_techo_anomalias=?,"
                + "alc5_cielo_material=?,"
                + "alc5_cielo_estado=?,"
                + "alc5_cielo_anomalias=?,"
                + "alc5_estruct_material=?,"
                + "alc5_estruct_estado=?,"
                + "alc5_estruct_anomalias=?,"
                + "alc5_panete_material=?,"
                + "alc5_panete_estado=?,"
                + "alc5_panete_anomalias=?,"
                + "alc5_pintu_material=?,"
                + "alc5_pintu_estado=?,"
                + "alc5_pintu_anomalias=?,"
                + "alc5_ventana_material=?,"
                + "alc5_ventana_estado=?,"
                + "alc5_ventana_anomalias=?,"
                + "alc5_puerta_material=?,"
                + "alc5_puerta_estado=?,"
                + "alc5_puerta_anomalias=?,"
                + "sal1_paredes_material=?,"
                + "sal1_paredes_estado=?,"
                + "sal1_paredes_anomalias=?,"
                + "sal1_pisos_material=?,"
                + "sal1_pisos_estado=?,"
                + "sal1_pisos_anomalias=?,"
                + "sal1_techo_material=?,"
                + "sal1_techo_estado=?,"
                + "sal1_techo_anomalias=?,"
                + "sal1_cielo_material=?,"
                + "sal1_cielo_estado=?,"
                + "sal1_cielo_anomalias=?,"
                + "sal1_estruct_material=?,"
                + "sal1_estruct_estado=?,"
                + "sal1_estruct_anomalias=?,"
                + "sal1_panete_material=?,"
                + "sal1_panete_estado=?,"
                + "sal1_panete_anomalias=?,"
                + "sal1_pintu_material=?,"
                + "sal1_pintu_estado=?,"
                + "sal1_pintu_anomalias=?,"
                + "sal1_ventana_material=?,"
                + "sal1_ventana_estado=?,"
                + "sal1_ventana_anomalias=?,"
                + "sal1_puerta_material=?,"
                + "sal1_puerta_estado=?,"
                + "sal1_puerta_anomalias=?,"
                + "sal2_paredes_material=?,"
                + "sal2_paredes_estado=?,"
                + "sal2_paredes_anomalias=?,"
                + "sal2_pisos_material=?,"
                + "sal2_pisos_estado=?,"
                + "sal2_pisos_anomalias=?,"
                + "sal2_techo_material=?,"
                + "sal2_techo_estado=?,"
                + "sal2_techo_anomalias=?,"
                + "sal2_cielo_material=?,"
                + "sal2_cielo_estado=?,"
                + "sal2_cielo_anomalias=?,"
                + "sal2_estruct_material=?,"
                + "sal2_estruct_estado=?,"
                + "sal2_estruct_anomalias=?,"
                + "sal2_panete_material=?,"
                + "sal2_panete_estado=?,"
                + "sal2_panete_anomalias=?,"
                + "sal2_pintu_material=?,"
                + "sal2_pintu_estado=?,"
                + "sal2_pintu_anomalias=?,"
                + "sal2_ventana_material=?,"
                + "sal2_ventana_estado=?,"
                + "sal2_ventana_anomalias=?,"
                + "sal2_puerta_material=?,"
                + "sal2_puerta_estado=?,"
                + "sal2_puerta_anomalias=?,"
                + "come1_paredes_material=?,"
                + "come1_paredes_estado=?,"
                + "come1_paredes_anomalias=?,"
                + "come1_pisos_material=?,"
                + "come1_pisos_estado=?,"
                + "come1_pisos_anomalias=?,"
                + "come1_techo_material=?,"
                + "come1_techo_estado=?,"
                + "come1_techo_anomalias=?,"
                + "come1_cielo_material=?,"
                + "come1_cielo_estado=?,"
                + "come1_cielo_anomalias=?,"
                + "come1_estruct_material=?,"
                + "come1_estruct_estado=?,"
                + "come1_estruct_anomalias=?,"
                + "come1_panete_material=?,"
                + "come1_panete_estado=?,"
                + "come1_panete_anomalias=?,"
                + "come1_pintu_material=?,"
                + "come1_pintu_estado=?,"
                + "come1_pintu_anomalias=?,"
                + "come1_ventana_material=?,"
                + "come1_ventana_estado=?,"
                + "come1_ventana_anomalias=?,"
                + "come1_puerta_material=?,"
                + "come1_puerta_estado=?,"
                + "come1_puerta_anomalias=?,"
                + "come2_paredes_material=?,"
                + "come2_paredes_estado=?,"
                + "come2_paredes_anomalias=?,"
                + "come2_pisos_material=?,"
                + "come2_pisos_estado=?,"
                + "come2_pisos_anomalias=?,"
                + "come2_techo_material=?,"
                + "come2_techo_estado=?,"
                + "come2_techo_anomalias=?,"
                + "come2_cielo_material=?,"
                + "come2_cielo_estado=?,"
                + "come2_cielo_anomalias=?,"
                + "come2_estruct_material=?,"
                + "come2_estruct_estado=?,"
                + "come2_estruct_anomalias=?,"
                + "come2_panete_material=?,"
                + "come2_panete_estado=?,"
                + "come2_panete_anomalias=?,"
                + "come2_pintu_material=?,"
                + "come2_pintu_estado=?,"
                + "come2_pintu_anomalias=?,"
                + "come2_ventana_material=?,"
                + "come2_ventana_estado=?,"
                + "come2_ventana_anomalias=?,"
                + "come2_puerta_material=?,"
                + "come2_puerta_estado=?,"
                + "come2_puerta_anomalias=?,"
                + "coci1_paredes_material=?,"
                + "coci1_paredes_estado=?,"
                + "coci1_paredes_anomalias=?,"
                + "coci1_pisos_material=?,"
                + "coci1_pisos_estado=?,"
                + "coci1_pisos_anomalias=?,"
                + "coci1_techo_material=?,"
                + "coci1_techo_estado=?,"
                + "coci1_techo_anomalias=?,"
                + "coci1_cielo_material=?,"
                + "coci1_cielo_estado=?,"
                + "coci1_cielo_anomalias=?,"
                + "coci1_estruct_material=?,"
                + "coci1_estruct_estado=?,"
                + "coci1_estruct_anomalias=?,"
                + "coci1_panete_material=?,"
                + "coci1_panete_estado=?,"
                + "coci1_panete_anomalias=?,"
                + "coci1_pintu_material=?,"
                + "coci1_pintu_estado=?,"
                + "coci1_pintu_anomalias=?,"
                + "coci1_ventana_material=?,"
                + "coci1_ventana_estado=?,"
                + "coci1_ventana_anomalias=?,"
                + "coci1_puerta_material=?,"
                + "coci1_puerta_estado=?,"
                + "coci1_puerta_anomalias=?,"
                + "coci2_paredes_material=?,"
                + "coci2_paredes_estado=?,"
                + "coci2_paredes_anomalias=?,"
                + "coci2_pisos_material=?,"
                + "coci2_pisos_estado=?,"
                + "coci2_pisos_anomalias=?,"
                + "coci2_techo_material=?,"
                + "coci2_techo_estado=?,"
                + "coci2_techo_anomalias=?,"
                + "coci2_cielo_material=?,"
                + "coci2_cielo_estado=?,"
                + "coci2_cielo_anomalias=?,"
                + "coci2_estruct_material=?,"
                + "coci2_estruct_estado=?,"
                + "coci2_estruct_anomalias=?,"
                + "coci2_panete_material=?,"
                + "coci2_panete_estado=?,"
                + "coci2_panete_anomalias=?,"
                + "coci2_pintu_material=?,"
                + "coci2_pintu_estado=?,"
                + "coci2_pintu_anomalias=?,"
                + "coci2_ventana_material=?,"
                + "coci2_ventana_estado=?,"
                + "coci2_ventana_anomalias=?,"
                + "coci2_puerta_material=?,"
                + "coci2_puerta_estado=?,"
                + "coci2_puerta_anomalias=?,"
                + "ban1_paredes_material=?,"
                + "ban1_paredes_estado=?,"
                + "ban1_paredes_anomalias=?,"
                + "ban1_pisos_material=?,"
                + "ban1_pisos_estado=?,"
                + "ban1_pisos_anomalias=?,"
                + "ban1_techo_material=?,"
                + "ban1_techo_estado=?,"
                + "ban1_techo_anomalias=?,"
                + "ban1_cielo_material=?,"
                + "ban1_cielo_estado=?,"
                + "ban1_cielo_anomalias=?,"
                + "ban1_estruct_material=?,"
                + "ban1_estruct_estado=?,"
                + "ban1_estruct_anomalias=?,"
                + "ban1_panete_material=?,"
                + "ban1_panete_estado=?,"
                + "ban1_panete_anomalias=?,"
                + "ban1_pintu_material=?,"
                + "ban1_pintu_estado=?,"
                + "ban1_pintu_anomalias=?,"
                + "ban1_ventana_material=?,"
                + "ban1_ventana_estado=?,"
                + "ban1_ventana_anomalias=?,"
                + "ban1_puerta_material=?,"
                + "ban1_puerta_estado=?,"
                + "ban1_puerta_anomalias=?,"
                + "ban2_paredes_material=?,"
                + "ban2_paredes_estado=?,"
                + "ban2_paredes_anomalias=?,"
                + "ban2_pisos_material=?,"
                + "ban2_pisos_estado=?,"
                + "ban2_pisos_anomalias=?,"
                + "ban2_techo_material=?,"
                + "ban2_techo_estado=?,"
                + "ban2_techo_anomalias=?,"
                + "ban2_cielo_material=?,"
                + "ban2_cielo_estado=?,"
                + "ban2_cielo_anomalias=?,"
                + "ban2_estruct_material=?,"
                + "ban2_estruct_estado=?,"
                + "ban2_estruct_anomalias=?,"
                + "ban2_panete_material=?,"
                + "ban2_panete_estado=?,"
                + "ban2_panete_anomalias=?,"
                + "ban2_pintu_material=?,"
                + "ban2_pintu_estado=?,"
                + "ban2_pintu_anomalias=?,"
                + "ban2_ventana_material=?,"
                + "ban2_ventana_estado=?,"
                + "ban2_ventana_anomalias=?,"
                + "ban2_puerta_material=?,"
                + "ban2_puerta_estado=?,"
                + "ban2_puerta_anomalias=?,"
                + "ban3_paredes_material=?,"
                + "ban3_paredes_estado=?,"
                + "ban3_paredes_anomalias=?,"
                + "ban3_pisos_material=?,"
                + "ban3_pisos_estado=?,"
                + "ban3_pisos_anomalias=?,"
                + "ban3_techo_material=?,"
                + "ban3_techo_estado=?,"
                + "ban3_techo_anomalias=?,"
                + "ban3_cielo_material=?,"
                + "ban3_cielo_estado=?,"
                + "ban3_cielo_anomalias=?,"
                + "ban3_estruct_material=?,"
                + "ban3_estruct_estado=?,"
                + "ban3_estruct_anomalias=?,"
                + "ban3_panete_material=?,"
                + "ban3_panete_estado=?,"
                + "ban3_panete_anomalias=?,"
                + "ban3_pintu_material=?,"
                + "ban3_pintu_estado=?,"
                + "ban3_pintu_anomalias=?,"
                + "ban3_ventana_material=?,"
                + "ban3_ventana_estado=?,"
                + "ban3_ventana_anomalias=?,"
                + "ban3_puerta_material=?,"
                + "ban3_puerta_estado=?,"
                + "ban3_puerta_anomalias=?,"
                + "ban4_paredes_material=?,"
                + "ban4_paredes_estado=?,"
                + "ban4_paredes_anomalias=?,"
                + "ban4_pisos_material=?,"
                + "ban4_pisos_estado=?,"
                + "ban4_pisos_anomalias=?,"
                + "ban4_techo_material=?,"
                + "ban4_techo_estado=?,"
                + "ban4_techo_anomalias=?,"
                + "ban4_cielo_material=?,"
                + "ban4_cielo_estado=?,"
                + "ban4_cielo_anomalias=?,"
                + "ban4_estruct_material=?,"
                + "ban4_estruct_estado=?,"
                + "ban4_estruct_anomalias=?,"
                + "ban4_panete_material=?,"
                + "ban4_panete_estado=?,"
                + "ban4_panete_anomalias=?,"
                + "ban4_pintu_material=?,"
                + "ban4_pintu_estado=?,"
                + "ban4_pintu_anomalias=?,"
                + "ban4_ventana_material=?,"
                + "ban4_ventana_estado=?,"
                + "ban4_ventana_anomalias=?,"
                + "ban4_puerta_material=?,"
                + "ban4_puerta_estado=?,"
                + "ban4_puerta_anomalias=?,"
                + "corr1_paredes_material=?,"
                + "corr1_paredes_estado=?,"
                + "corr1_paredes_anomalias=?,"
                + "corr1_pisos_material=?,"
                + "corr1_pisos_estado=?,"
                + "corr1_pisos_anomalias=?,"
                + "corr1_techo_material=?,"
                + "corr1_techo_estado=?,"
                + "corr1_techo_anomalias=?,"
                + "corr1_cielo_material=?,"
                + "corr1_cielo_estado=?,"
                + "corr1_cielo_anomalias=?,"
                + "corr1_estruct_material=?,"
                + "corr1_estruct_estado=?,"
                + "corr1_estruct_anomalias=?,"
                + "corr1_panete_material=?,"
                + "corr1_panete_estado=?,"
                + "corr1_panete_anomalias=?,"
                + "corr1_pintu_material=?,"
                + "corr1_pintu_estado=?,"
                + "corr1_pintu_anomalias=?,"
                + "corr1_ventana_material=?,"
                + "corr1_ventana_estado=?,"
                + "corr1_ventana_anomalias=?,"
                + "corr1_puerta_material=?,"
                + "corr1_puerta_estado=?,"
                + "corr1_puerta_anomalias=?,"
                + "corr2_paredes_material=?,"
                + "corr2_paredes_estado=?,"
                + "corr2_paredes_anomalias=?,"
                + "corr2_pisos_material=?,"
                + "corr2_pisos_estado=?,"
                + "corr2_pisos_anomalias=?,"
                + "corr2_techo_material=?,"
                + "corr2_techo_estado=?,"
                + "corr2_techo_anomalias=?,"
                + "corr2_cielo_material=?,"
                + "corr2_cielo_estado=?,"
                + "corr2_cielo_anomalias=?,"
                + "corr2_estruct_material=?,"
                + "corr2_estruct_estado=?,"
                + "corr2_estruct_anomalias=?,"
                + "corr2_panete_material=?,"
                + "corr2_panete_estado=?,"
                + "corr2_panete_anomalias=?,"
                + "corr2_pintu_material=?,"
                + "corr2_pintu_estado=?,"
                + "corr2_pintu_anomalias=?,"
                + "corr2_ventana_material=?,"
                + "corr2_ventana_estado=?,"
                + "corr2_ventana_anomalias=?,"
                + "corr2_puerta_material=?,"
                + "corr2_puerta_estado=?,"
                + "corr2_puerta_anomalias=?,"
                + "gar2_paredes_material=?,"
                + "gar2_paredes_estado=?,"
                + "gar2_paredes_anomalias=?,"
                + "gar2_pisos_material=?,"
                + "gar2_pisos_estado=?,"
                + "gar2_pisos_anomalias=?,"
                + "gar2_techo_material=?,"
                + "gar2_techo_estado=?,"
                + "gar2_techo_anomalias=?,"
                + "gar2_cielo_material=?,"
                + "gar2_cielo_estado=?,"
                + "gar2_cielo_anomalias=?,"
                + "gar2_estruct_material=?,"
                + "gar2_estruct_estado=?,"
                + "gar2_estruct_anomalias=?,"
                + "gar2_panete_material=?,"
                + "gar2_panete_estado=?,"
                + "gar2_panete_anomalias=?,"
                + "gar2_pintu_material=?,"
                + "gar2_pintu_estado=?,"
                + "gar2_pintu_anomalias=?,"
                + "gar2_ventana_material=?,"
                + "gar2_ventana_estado=?,"
                + "gar2_ventana_anomalias=?,"
                + "gar2_puerta_material=?,"
                + "gar2_puerta_estado=?,"
                + "gar2_puerta_anomalias=?,"
                + "bod_paredes_material=?,"
                + "bod_paredes_estado=?,"
                + "bod_paredes_anomalias=?,"
                + "bod_pisos_material=?,"
                + "bod_pisos_estado=?,"
                + "bod_pisos_anomalias=?,"
                + "bod_techo_material=?,"
                + "bod_techo_estado=?,"
                + "bod_techo_anomalias=?,"
                + "bod_cielo_material=?,"
                + "bod_cielo_estado=?,"
                + "bod_cielo_anomalias=?,"
                + "bod_estruct_material=?,"
                + "bod_estruct_estado=?,"
                + "bod_estruct_anomalias=?,"
                + "bod_panete_material=?,"
                + "bod_panete_estado=?,"
                + "bod_panete_anomalias=?,"
                + "bod_pintu_material=?,"
                + "bod_pintu_estado=?,"
                + "bod_pintu_anomalias=?,"
                + "bod_ventana_material=?,"
                + "bod_ventana_estado=?,"
                + "bod_ventana_anomalias=?,"
                + "bod_puerta_material=?,"
                + "bod_puerta_estado=?,"
                + "bod_puerta_anomalias=?,"
                + "lav_paredes_material=?,"
                + "lav_paredes_estado=?,"
                + "lav_paredes_anomalias=?,"
                + "lav_pisos_material=?,"
                + "lav_pisos_estado=?,"
                + "lav_pisos_anomalias=?,"
                + "lav_techo_material=?,"
                + "lav_techo_estado=?,"
                + "lav_techo_anomalias=?,"
                + "lav_cielo_material=?,"
                + "lav_cielo_estado=?,"
                + "lav_cielo_anomalias=?,"
                + "lav_estruct_material=?,"
                + "lav_estruct_estado=?,"
                + "lav_estruct_anomalias=?,"
                + "lav_panete_material=?,"
                + "lav_panete_estado=?,"
                + "lav_panete_anomalias=?,"
                + "lav_pintu_material=?,"
                + "lav_pintu_estado=?,"
                + "lav_pintu_anomalias=?,"
                + "lav_ventana_material=?,"
                + "lav_ventana_estado=?,"
                + "lav_ventana_anomalias=?,"
                + "lav_puerta_material=?,"
                + "lav_puerta_estado=?,"
                + "lav_puerta_anomalias=?,"
                + "tanq_paredes_material=?,"
                + "tanq_paredes_estado=?,"
                + "tanq_paredes_anomalias=?,"
                + "tanq_pisos_material=?,"
                + "tanq_pisos_estado=?,"
                + "tanq_pisos_anomalias=?,"
                + "tanq_techo_material=?,"
                + "tanq_techo_estado=?,"
                + "tanq_techo_anomalias=?,"
                + "tanq_cielo_material=?,"
                + "tanq_cielo_estado=?,"
                + "tanq_cielo_anomalias=?,"
                + "tanq_estruct_material=?,"
                + "tanq_estruct_estado=?,"
                + "tanq_estruct_anomalias=?,"
                + "tanq_panete_material=?,"
                + "tanq_panete_estado=?,"
                + "tanq_panete_anomalias=?,"
                + "tanq_pintu_material=?,"
                + "tanq_pintu_estado=?,"
                + "tanq_pintu_anomalias=?,"
                + "tanq_ventana_material=?,"
                + "tanq_ventana_estado=?,"
                + "tanq_ventana_anomalias=?,"
                + "tanq_puerta_material=?,"
                + "tanq_puerta_estado=?,"
                + "tanq_puerta_anomalias=?,"
                + "maq_paredes_material=?,"
                + "maq_paredes_estado=?,"
                + "maq_paredes_anomalias=?,"
                + "maq_pisos_material=?,"
                + "maq_pisos_estado=?,"
                + "maq_pisos_anomalias=?,"
                + "maq_techo_material=?,"
                + "maq_techo_estado=?,"
                + "maq_techo_anomalias=?,"
                + "maq_cielo_material=?,"
                + "maq_cielo_estado=?,"
                + "maq_cielo_anomalias=?,"
                + "maq_estruct_material=?,"
                + "maq_estruct_estado=?,"
                + "maq_estruct_anomalias=?,"
                + "maq_panete_material=?,"
                + "maq_panete_estado=?,"
                + "maq_panete_anomalias=?,"
                + "maq_pintu_material=?,"
                + "maq_pintu_estado=?,"
                + "maq_pintu_anomalias=?,"
                + "maq_ventana_material=?,"
                + "maq_ventana_estado=?,"
                + "maq_ventana_anomalias=?,"
                + "maq_puerta_material=?,"
                + "maq_puerta_estado=?,"
                + "maq_puerta_anomalias=?,"
                + "pisc_paredes_material=?,"
                + "pisc_paredes_estado=?,"
                + "pisc_paredes_anomalias=?,"
                + "pisc_pisos_material=?,"
                + "pisc_pisos_estado=?,"
                + "pisc_pisos_anomalias=?,"
                + "pisc_techo_material=?,"
                + "pisc_techo_estado=?,"
                + "pisc_techo_anomalias=?,"
                + "pisc_cielo_material=?,"
                + "pisc_cielo_estado=?,"
                + "pisc_cielo_anomalias=?,"
                + "pisc_estruct_material=?,"
                + "pisc_estruct_estado=?,"
                + "pisc_estruct_anomalias=?,"
                + "pisc_panete_material=?,"
                + "pisc_panete_estado=?,"
                + "pisc_panete_anomalias=?,"
                + "pisc_pintu_material=?,"
                + "pisc_pintu_estado=?,"
                + "pisc_pintu_anomalias=?,"
                + "pisc_ventana_material=?,"
                + "pisc_ventana_estado=?,"
                + "pisc_ventana_anomalias=?,"
                + "pisc_puerta_material=?,"
                + "pisc_puerta_estado=?,"
                + "pisc_puerta_anomalias=?,"
                + "observa=?"
                + " WHERE id =" + id;

        myDB.transaction(function(transaction) {

            transaction.executeSql(executeQuery, [
                vereda,
                predio,
                propietario,
                cc_propietario,
                lugar_cc_propietario,
                telefono,
                topografia,
                tiempo_construccion,
                origen_coord,
                coordenada_e,
                coordenada_n,
                stk,
                sp_cercano,
                distancia_sp,
                laminar,
                surcos,
                carcavas,
                socavacion,
                ninguno,
                caidas,
                deslizamientos,
                volcamientos,
                flujos,
                ningunom,
                ex_paredes_material,
                ex_paredes_estado,
                ex_paredes_anomalias,
                ex_pisos_material,
                ex_pisos_estado,
                ex_pisos_anomalias,
                ex_techo_material,
                ex_techo_estado,
                ex_techo_anomalias,
                ex_cielo_material,
                ex_cielo_estado,
                ex_cielo_anomalias,
                ex_estruct_material,
                ex_estruct_estado,
                ex_estruct_anomalias,
                ex_panete_material,
                ex_panete_estado,
                ex_panete_anomalias,
                ex_pintu_material,
                ex_pintu_estado,
                ex_pintu_anomalias,
                ex_ventana_material,
                ex_ventana_estado,
                ex_ventana_anomalias,
                ex_puerta_material,
                ex_puerta_estado,
                ex_puerta_anomalias,
                alc1_paredes_material,
                alc1_paredes_estado,
                alc1_paredes_anomalias,
                alc1_pisos_material,
                alc1_pisos_estado,
                alc1_pisos_anomalias,
                alc1_techo_material,
                alc1_techo_estado,
                alc1_techo_anomalias,
                alc1_cielo_material,
                alc1_cielo_estado,
                alc1_cielo_anomalias,
                alc1_estruct_material,
                alc1_estruct_estado,
                alc1_estruct_anomalias,
                alc1_panete_material,
                alc1_panete_estado,
                alc1_panete_anomalias,
                alc1_pintu_material,
                alc1_pintu_estado,
                alc1_pintu_anomalias,
                alc1_ventana_material,
                alc1_ventana_estado,
                alc1_ventana_anomalias,
                alc1_puerta_material,
                alc1_puerta_estado,
                alc1_puerta_anomalias,
                alc2_paredes_material,
                alc2_paredes_estado,
                alc2_paredes_anomalias,
                alc2_pisos_material,
                alc2_pisos_estado,
                alc2_pisos_anomalias,
                alc2_techo_material,
                alc2_techo_estado,
                alc2_techo_anomalias,
                alc2_cielo_material,
                alc2_cielo_estado,
                alc2_cielo_anomalias,
                alc2_estruct_material,
                alc2_estruct_estado,
                alc2_estruct_anomalias,
                alc2_panete_material,
                alc2_panete_estado,
                alc2_panete_anomalias,
                alc2_pintu_material,
                alc2_pintu_estado,
                alc2_pintu_anomalias,
                alc2_ventana_material,
                alc2_ventana_estado,
                alc2_ventana_anomalias,
                alc2_puerta_material,
                alc2_puerta_estado,
                alc2_puerta_anomalias,
                alc3_paredes_material,
                alc3_paredes_estado,
                alc3_paredes_anomalias,
                alc3_pisos_material,
                alc3_pisos_estado,
                alc3_pisos_anomalias,
                alc3_techo_material,
                alc3_techo_estado,
                alc3_techo_anomalias,
                alc3_cielo_material,
                alc3_cielo_estado,
                alc3_cielo_anomalias,
                alc3_estruct_material,
                alc3_estruct_estado,
                alc3_estruct_anomalias,
                alc3_panete_material,
                alc3_panete_estado,
                alc3_panete_anomalias,
                alc3_pintu_material,
                alc3_pintu_estado,
                alc3_pintu_anomalias,
                alc3_ventana_material,
                alc3_ventana_estado,
                alc3_ventana_anomalias,
                alc3_puerta_material,
                alc3_puerta_estado,
                alc3_puerta_anomalias,
                alc4_paredes_material,
                alc4_paredes_estado,
                alc4_paredes_anomalias,
                alc4_pisos_material,
                alc4_pisos_estado,
                alc4_pisos_anomalias,
                alc4_techo_material,
                alc4_techo_estado,
                alc4_techo_anomalias,
                alc4_cielo_material,
                alc4_cielo_estado,
                alc4_cielo_anomalias,
                alc4_estruct_material,
                alc4_estruct_estado,
                alc4_estruct_anomalias,
                alc4_panete_material,
                alc4_panete_estado,
                alc4_panete_anomalias,
                alc4_pintu_material,
                alc4_pintu_estado,
                alc4_pintu_anomalias,
                alc4_ventana_material,
                alc4_ventana_estado,
                alc4_ventana_anomalias,
                alc4_puerta_material,
                alc4_puerta_estado,
                alc4_puerta_anomalias,
                alc5_paredes_material,
                alc5_paredes_estado,
                alc5_paredes_anomalias,
                alc5_pisos_material,
                alc5_pisos_estado,
                alc5_pisos_anomalias,
                alc5_techo_material,
                alc5_techo_estado,
                alc5_techo_anomalias,
                alc5_cielo_material,
                alc5_cielo_estado,
                alc5_cielo_anomalias,
                alc5_estruct_material,
                alc5_estruct_estado,
                alc5_estruct_anomalias,
                alc5_panete_material,
                alc5_panete_estado,
                alc5_panete_anomalias,
                alc5_pintu_material,
                alc5_pintu_estado,
                alc5_pintu_anomalias,
                alc5_ventana_material,
                alc5_ventana_estado,
                alc5_ventana_anomalias,
                alc5_puerta_material,
                alc5_puerta_estado,
                alc5_puerta_anomalias,
                sal1_paredes_material,
                sal1_paredes_estado,
                sal1_paredes_anomalias,
                sal1_pisos_material,
                sal1_pisos_estado,
                sal1_pisos_anomalias,
                sal1_techo_material,
                sal1_techo_estado,
                sal1_techo_anomalias,
                sal1_cielo_material,
                sal1_cielo_estado,
                sal1_cielo_anomalias,
                sal1_estruct_material,
                sal1_estruct_estado,
                sal1_estruct_anomalias,
                sal1_panete_material,
                sal1_panete_estado,
                sal1_panete_anomalias,
                sal1_pintu_material,
                sal1_pintu_estado,
                sal1_pintu_anomalias,
                sal1_ventana_material,
                sal1_ventana_estado,
                sal1_ventana_anomalias,
                sal1_puerta_material,
                sal1_puerta_estado,
                sal1_puerta_anomalias,
                sal2_paredes_material,
                sal2_paredes_estado,
                sal2_paredes_anomalias,
                sal2_pisos_material,
                sal2_pisos_estado,
                sal2_pisos_anomalias,
                sal2_techo_material,
                sal2_techo_estado,
                sal2_techo_anomalias,
                sal2_cielo_material,
                sal2_cielo_estado,
                sal2_cielo_anomalias,
                sal2_estruct_material,
                sal2_estruct_estado,
                sal2_estruct_anomalias,
                sal2_panete_material,
                sal2_panete_estado,
                sal2_panete_anomalias,
                sal2_pintu_material,
                sal2_pintu_estado,
                sal2_pintu_anomalias,
                sal2_ventana_material,
                sal2_ventana_estado,
                sal2_ventana_anomalias,
                sal2_puerta_material,
                sal2_puerta_estado,
                sal2_puerta_anomalias,
                come1_paredes_material,
                come1_paredes_estado,
                come1_paredes_anomalias,
                come1_pisos_material,
                come1_pisos_estado,
                come1_pisos_anomalias,
                come1_techo_material,
                come1_techo_estado,
                come1_techo_anomalias,
                come1_cielo_material,
                come1_cielo_estado,
                come1_cielo_anomalias,
                come1_estruct_material,
                come1_estruct_estado,
                come1_estruct_anomalias,
                come1_panete_material,
                come1_panete_estado,
                come1_panete_anomalias,
                come1_pintu_material,
                come1_pintu_estado,
                come1_pintu_anomalias,
                come1_ventana_material,
                come1_ventana_estado,
                come1_ventana_anomalias,
                come1_puerta_material,
                come1_puerta_estado,
                come1_puerta_anomalias,
                come2_paredes_material,
                come2_paredes_estado,
                come2_paredes_anomalias,
                come2_pisos_material,
                come2_pisos_estado,
                come2_pisos_anomalias,
                come2_techo_material,
                come2_techo_estado,
                come2_techo_anomalias,
                come2_cielo_material,
                come2_cielo_estado,
                come2_cielo_anomalias,
                come2_estruct_material,
                come2_estruct_estado,
                come2_estruct_anomalias,
                come2_panete_material,
                come2_panete_estado,
                come2_panete_anomalias,
                come2_pintu_material,
                come2_pintu_estado,
                come2_pintu_anomalias,
                come2_ventana_material,
                come2_ventana_estado,
                come2_ventana_anomalias,
                come2_puerta_material,
                come2_puerta_estado,
                come2_puerta_anomalias,
                coci1_paredes_material,
                coci1_paredes_estado,
                coci1_paredes_anomalias,
                coci1_pisos_material,
                coci1_pisos_estado,
                coci1_pisos_anomalias,
                coci1_techo_material,
                coci1_techo_estado,
                coci1_techo_anomalias,
                coci1_cielo_material,
                coci1_cielo_estado,
                coci1_cielo_anomalias,
                coci1_estruct_material,
                coci1_estruct_estado,
                coci1_estruct_anomalias,
                coci1_panete_material,
                coci1_panete_estado,
                coci1_panete_anomalias,
                coci1_pintu_material,
                coci1_pintu_estado,
                coci1_pintu_anomalias,
                coci1_ventana_material,
                coci1_ventana_estado,
                coci1_ventana_anomalias,
                coci1_puerta_material,
                coci1_puerta_estado,
                coci1_puerta_anomalias,
                coci2_paredes_material,
                coci2_paredes_estado,
                coci2_paredes_anomalias,
                coci2_pisos_material,
                coci2_pisos_estado,
                coci2_pisos_anomalias,
                coci2_techo_material,
                coci2_techo_estado,
                coci2_techo_anomalias,
                coci2_cielo_material,
                coci2_cielo_estado,
                coci2_cielo_anomalias,
                coci2_estruct_material,
                coci2_estruct_estado,
                coci2_estruct_anomalias,
                coci2_panete_material,
                coci2_panete_estado,
                coci2_panete_anomalias,
                coci2_pintu_material,
                coci2_pintu_estado,
                coci2_pintu_anomalias,
                coci2_ventana_material,
                coci2_ventana_estado,
                coci2_ventana_anomalias,
                coci2_puerta_material,
                coci2_puerta_estado,
                coci2_puerta_anomalias,
                ban1_paredes_material,
                ban1_paredes_estado,
                ban1_paredes_anomalias,
                ban1_pisos_material,
                ban1_pisos_estado,
                ban1_pisos_anomalias,
                ban1_techo_material,
                ban1_techo_estado,
                ban1_techo_anomalias,
                ban1_cielo_material,
                ban1_cielo_estado,
                ban1_cielo_anomalias,
                ban1_estruct_material,
                ban1_estruct_estado,
                ban1_estruct_anomalias,
                ban1_panete_material,
                ban1_panete_estado,
                ban1_panete_anomalias,
                ban1_pintu_material,
                ban1_pintu_estado,
                ban1_pintu_anomalias,
                ban1_ventana_material,
                ban1_ventana_estado,
                ban1_ventana_anomalias,
                ban1_puerta_material,
                ban1_puerta_estado,
                ban1_puerta_anomalias,
                ban2_paredes_material,
                ban2_paredes_estado,
                ban2_paredes_anomalias,
                ban2_pisos_material,
                ban2_pisos_estado,
                ban2_pisos_anomalias,
                ban2_techo_material,
                ban2_techo_estado,
                ban2_techo_anomalias,
                ban2_cielo_material,
                ban2_cielo_estado,
                ban2_cielo_anomalias,
                ban2_estruct_material,
                ban2_estruct_estado,
                ban2_estruct_anomalias,
                ban2_panete_material,
                ban2_panete_estado,
                ban2_panete_anomalias,
                ban2_pintu_material,
                ban2_pintu_estado,
                ban2_pintu_anomalias,
                ban2_ventana_material,
                ban2_ventana_estado,
                ban2_ventana_anomalias,
                ban2_puerta_material,
                ban2_puerta_estado,
                ban2_puerta_anomalias,
                ban3_paredes_material,
                ban3_paredes_estado,
                ban3_paredes_anomalias,
                ban3_pisos_material,
                ban3_pisos_estado,
                ban3_pisos_anomalias,
                ban3_techo_material,
                ban3_techo_estado,
                ban3_techo_anomalias,
                ban3_cielo_material,
                ban3_cielo_estado,
                ban3_cielo_anomalias,
                ban3_estruct_material,
                ban3_estruct_estado,
                ban3_estruct_anomalias,
                ban3_panete_material,
                ban3_panete_estado,
                ban3_panete_anomalias,
                ban3_pintu_material,
                ban3_pintu_estado,
                ban3_pintu_anomalias,
                ban3_ventana_material,
                ban3_ventana_estado,
                ban3_ventana_anomalias,
                ban3_puerta_material,
                ban3_puerta_estado,
                ban3_puerta_anomalias,
                ban4_paredes_material,
                ban4_paredes_estado,
                ban4_paredes_anomalias,
                ban4_pisos_material,
                ban4_pisos_estado,
                ban4_pisos_anomalias,
                ban4_techo_material,
                ban4_techo_estado,
                ban4_techo_anomalias,
                ban4_cielo_material,
                ban4_cielo_estado,
                ban4_cielo_anomalias,
                ban4_estruct_material,
                ban4_estruct_estado,
                ban4_estruct_anomalias,
                ban4_panete_material,
                ban4_panete_estado,
                ban4_panete_anomalias,
                ban4_pintu_material,
                ban4_pintu_estado,
                ban4_pintu_anomalias,
                ban4_ventana_material,
                ban4_ventana_estado,
                ban4_ventana_anomalias,
                ban4_puerta_material,
                ban4_puerta_estado,
                ban4_puerta_anomalias,
                corr1_paredes_material,
                corr1_paredes_estado,
                corr1_paredes_anomalias,
                corr1_pisos_material,
                corr1_pisos_estado,
                corr1_pisos_anomalias,
                corr1_techo_material,
                corr1_techo_estado,
                corr1_techo_anomalias,
                corr1_cielo_material,
                corr1_cielo_estado,
                corr1_cielo_anomalias,
                corr1_estruct_material,
                corr1_estruct_estado,
                corr1_estruct_anomalias,
                corr1_panete_material,
                corr1_panete_estado,
                corr1_panete_anomalias,
                corr1_pintu_material,
                corr1_pintu_estado,
                corr1_pintu_anomalias,
                corr1_ventana_material,
                corr1_ventana_estado,
                corr1_ventana_anomalias,
                corr1_puerta_material,
                corr1_puerta_estado,
                corr1_puerta_anomalias,
                corr2_paredes_material,
                corr2_paredes_estado,
                corr2_paredes_anomalias,
                corr2_pisos_material,
                corr2_pisos_estado,
                corr2_pisos_anomalias,
                corr2_techo_material,
                corr2_techo_estado,
                corr2_techo_anomalias,
                corr2_cielo_material,
                corr2_cielo_estado,
                corr2_cielo_anomalias,
                corr2_estruct_material,
                corr2_estruct_estado,
                corr2_estruct_anomalias,
                corr2_panete_material,
                corr2_panete_estado,
                corr2_panete_anomalias,
                corr2_pintu_material,
                corr2_pintu_estado,
                corr2_pintu_anomalias,
                corr2_ventana_material,
                corr2_ventana_estado,
                corr2_ventana_anomalias,
                corr2_puerta_material,
                corr2_puerta_estado,
                corr2_puerta_anomalias,
                gar2_paredes_material,
                gar2_paredes_estado,
                gar2_paredes_anomalias,
                gar2_pisos_material,
                gar2_pisos_estado,
                gar2_pisos_anomalias,
                gar2_techo_material,
                gar2_techo_estado,
                gar2_techo_anomalias,
                gar2_cielo_material,
                gar2_cielo_estado,
                gar2_cielo_anomalias,
                gar2_estruct_material,
                gar2_estruct_estado,
                gar2_estruct_anomalias,
                gar2_panete_material,
                gar2_panete_estado,
                gar2_panete_anomalias,
                gar2_pintu_material,
                gar2_pintu_estado,
                gar2_pintu_anomalias,
                gar2_ventana_material,
                gar2_ventana_estado,
                gar2_ventana_anomalias,
                gar2_puerta_material,
                gar2_puerta_estado,
                gar2_puerta_anomalias,
                bod_paredes_material,
                bod_paredes_estado,
                bod_paredes_anomalias,
                bod_pisos_material,
                bod_pisos_estado,
                bod_pisos_anomalias,
                bod_techo_material,
                bod_techo_estado,
                bod_techo_anomalias,
                bod_cielo_material,
                bod_cielo_estado,
                bod_cielo_anomalias,
                bod_estruct_material,
                bod_estruct_estado,
                bod_estruct_anomalias,
                bod_panete_material,
                bod_panete_estado,
                bod_panete_anomalias,
                bod_pintu_material,
                bod_pintu_estado,
                bod_pintu_anomalias,
                bod_ventana_material,
                bod_ventana_estado,
                bod_ventana_anomalias,
                bod_puerta_material,
                bod_puerta_estado,
                bod_puerta_anomalias,
                lav_paredes_material,
                lav_paredes_estado,
                lav_paredes_anomalias,
                lav_pisos_material,
                lav_pisos_estado,
                lav_pisos_anomalias,
                lav_techo_material,
                lav_techo_estado,
                lav_techo_anomalias,
                lav_cielo_material,
                lav_cielo_estado,
                lav_cielo_anomalias,
                lav_estruct_material,
                lav_estruct_estado,
                lav_estruct_anomalias,
                lav_panete_material,
                lav_panete_estado,
                lav_panete_anomalias,
                lav_pintu_material,
                lav_pintu_estado,
                lav_pintu_anomalias,
                lav_ventana_material,
                lav_ventana_estado,
                lav_ventana_anomalias,
                lav_puerta_material,
                lav_puerta_estado,
                lav_puerta_anomalias,
                tanq_paredes_material,
                tanq_paredes_estado,
                tanq_paredes_anomalias,
                tanq_pisos_material,
                tanq_pisos_estado,
                tanq_pisos_anomalias,
                tanq_techo_material,
                tanq_techo_estado,
                tanq_techo_anomalias,
                tanq_cielo_material,
                tanq_cielo_estado,
                tanq_cielo_anomalias,
                tanq_estruct_material,
                tanq_estruct_estado,
                tanq_estruct_anomalias,
                tanq_panete_material,
                tanq_panete_estado,
                tanq_panete_anomalias,
                tanq_pintu_material,
                tanq_pintu_estado,
                tanq_pintu_anomalias,
                tanq_ventana_material,
                tanq_ventana_estado,
                tanq_ventana_anomalias,
                tanq_puerta_material,
                tanq_puerta_estado,
                tanq_puerta_anomalias,
                maq_paredes_material,
                maq_paredes_estado,
                maq_paredes_anomalias,
                maq_pisos_material,
                maq_pisos_estado,
                maq_pisos_anomalias,
                maq_techo_material,
                maq_techo_estado,
                maq_techo_anomalias,
                maq_cielo_material,
                maq_cielo_estado,
                maq_cielo_anomalias,
                maq_estruct_material,
                maq_estruct_estado,
                maq_estruct_anomalias,
                maq_panete_material,
                maq_panete_estado,
                maq_panete_anomalias,
                maq_pintu_material,
                maq_pintu_estado,
                maq_pintu_anomalias,
                maq_ventana_material,
                maq_ventana_estado,
                maq_ventana_anomalias,
                maq_puerta_material,
                maq_puerta_estado,
                maq_puerta_anomalias,
                pisc_paredes_material,
                pisc_paredes_estado,
                pisc_paredes_anomalias,
                pisc_pisos_material,
                pisc_pisos_estado,
                pisc_pisos_anomalias,
                pisc_techo_material,
                pisc_techo_estado,
                pisc_techo_anomalias,
                pisc_cielo_material,
                pisc_cielo_estado,
                pisc_cielo_anomalias,
                pisc_estruct_material,
                pisc_estruct_estado,
                pisc_estruct_anomalias,
                pisc_panete_material,
                pisc_panete_estado,
                pisc_panete_anomalias,
                pisc_pintu_material,
                pisc_pintu_estado,
                pisc_pintu_anomalias,
                pisc_ventana_material,
                pisc_ventana_estado,
                pisc_ventana_anomalias,
                pisc_puerta_material,
                pisc_puerta_estado,
                pisc_puerta_anomalias,
                observa
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
            var executeQuery = "INSERT INTO pre_vivienda_p ("
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
                    + "topografia,"
                    + "tiempo_construccion,"
                    + "origen_coord,"
                    + "coordenada_e,"
                    + "coordenada_n,"
                    + "stk,"
                    + "sp_cercano,"
                    + "distancia_sp,"
                    + "laminar,"
                    + "surcos,"
                    + "carcavas,"
                    + "socavacion,"
                    + "ninguno,"
                    + "caidas,"
                    + "deslizamientos,"
                    + "volcamientos,"
                    + "flujos,"
                    + "ningunom,"
                    + "ex_paredes_material,"
                    + "ex_paredes_estado,"
                    + "ex_paredes_anomalias,"
                    + "ex_pisos_material,"
                    + "ex_pisos_estado,"
                    + "ex_pisos_anomalias,"
                    + "ex_techo_material,"
                    + "ex_techo_estado,"
                    + "ex_techo_anomalias,"
                    + "ex_cielo_material,"
                    + "ex_cielo_estado,"
                    + "ex_cielo_anomalias,"
                    + "ex_estruct_material,"
                    + "ex_estruct_estado,"
                    + "ex_estruct_anomalias,"
                    + "ex_panete_material,"
                    + "ex_panete_estado,"
                    + "ex_panete_anomalias,"
                    + "ex_pintu_material,"
                    + "ex_pintu_estado,"
                    + "ex_pintu_anomalias,"
                    + "ex_ventana_material,"
                    + "ex_ventana_estado,"
                    + "ex_ventana_anomalias,"
                    + "ex_puerta_material,"
                    + "ex_puerta_estado,"
                    + "ex_puerta_anomalias,"
                    + "alc1_paredes_material,"
                    + "alc1_paredes_estado,"
                    + "alc1_paredes_anomalias,"
                    + "alc1_pisos_material,"
                    + "alc1_pisos_estado,"
                    + "alc1_pisos_anomalias,"
                    + "alc1_techo_material,"
                    + "alc1_techo_estado,"
                    + "alc1_techo_anomalias,"
                    + "alc1_cielo_material,"
                    + "alc1_cielo_estado,"
                    + "alc1_cielo_anomalias,"
                    + "alc1_estruct_material,"
                    + "alc1_estruct_estado,"
                    + "alc1_estruct_anomalias,"
                    + "alc1_panete_material,"
                    + "alc1_panete_estado,"
                    + "alc1_panete_anomalias,"
                    + "alc1_pintu_material,"
                    + "alc1_pintu_estado,"
                    + "alc1_pintu_anomalias,"
                    + "alc1_ventana_material,"
                    + "alc1_ventana_estado,"
                    + "alc1_ventana_anomalias,"
                    + "alc1_puerta_material,"
                    + "alc1_puerta_estado,"
                    + "alc1_puerta_anomalias,"
                    + "alc2_paredes_material,"
                    + "alc2_paredes_estado,"
                    + "alc2_paredes_anomalias,"
                    + "alc2_pisos_material,"
                    + "alc2_pisos_estado,"
                    + "alc2_pisos_anomalias,"
                    + "alc2_techo_material,"
                    + "alc2_techo_estado,"
                    + "alc2_techo_anomalias,"
                    + "alc2_cielo_material,"
                    + "alc2_cielo_estado,"
                    + "alc2_cielo_anomalias,"
                    + "alc2_estruct_material,"
                    + "alc2_estruct_estado,"
                    + "alc2_estruct_anomalias,"
                    + "alc2_panete_material,"
                    + "alc2_panete_estado,"
                    + "alc2_panete_anomalias,"
                    + "alc2_pintu_material,"
                    + "alc2_pintu_estado,"
                    + "alc2_pintu_anomalias,"
                    + "alc2_ventana_material,"
                    + "alc2_ventana_estado,"
                    + "alc2_ventana_anomalias,"
                    + "alc2_puerta_material,"
                    + "alc2_puerta_estado,"
                    + "alc2_puerta_anomalias,"
                    + "alc3_paredes_material,"
                    + "alc3_paredes_estado,"
                    + "alc3_paredes_anomalias,"
                    + "alc3_pisos_material,"
                    + "alc3_pisos_estado,"
                    + "alc3_pisos_anomalias,"
                    + "alc3_techo_material,"
                    + "alc3_techo_estado,"
                    + "alc3_techo_anomalias,"
                    + "alc3_cielo_material,"
                    + "alc3_cielo_estado,"
                    + "alc3_cielo_anomalias,"
                    + "alc3_estruct_material,"
                    + "alc3_estruct_estado,"
                    + "alc3_estruct_anomalias,"
                    + "alc3_panete_material,"
                    + "alc3_panete_estado,"
                    + "alc3_panete_anomalias,"
                    + "alc3_pintu_material,"
                    + "alc3_pintu_estado,"
                    + "alc3_pintu_anomalias,"
                    + "alc3_ventana_material,"
                    + "alc3_ventana_estado,"
                    + "alc3_ventana_anomalias,"
                    + "alc3_puerta_material,"
                    + "alc3_puerta_estado,"
                    + "alc3_puerta_anomalias,"
                    + "alc4_paredes_material,"
                    + "alc4_paredes_estado,"
                    + "alc4_paredes_anomalias,"
                    + "alc4_pisos_material,"
                    + "alc4_pisos_estado,"
                    + "alc4_pisos_anomalias,"
                    + "alc4_techo_material,"
                    + "alc4_techo_estado,"
                    + "alc4_techo_anomalias,"
                    + "alc4_cielo_material,"
                    + "alc4_cielo_estado,"
                    + "alc4_cielo_anomalias,"
                    + "alc4_estruct_material,"
                    + "alc4_estruct_estado,"
                    + "alc4_estruct_anomalias,"
                    + "alc4_panete_material,"
                    + "alc4_panete_estado,"
                    + "alc4_panete_anomalias,"
                    + "alc4_pintu_material,"
                    + "alc4_pintu_estado,"
                    + "alc4_pintu_anomalias,"
                    + "alc4_ventana_material,"
                    + "alc4_ventana_estado,"
                    + "alc4_ventana_anomalias,"
                    + "alc4_puerta_material,"
                    + "alc4_puerta_estado,"
                    + "alc4_puerta_anomalias,"
                    + "alc5_paredes_material,"
                    + "alc5_paredes_estado,"
                    + "alc5_paredes_anomalias,"
                    + "alc5_pisos_material,"
                    + "alc5_pisos_estado,"
                    + "alc5_pisos_anomalias,"
                    + "alc5_techo_material,"
                    + "alc5_techo_estado,"
                    + "alc5_techo_anomalias,"
                    + "alc5_cielo_material,"
                    + "alc5_cielo_estado,"
                    + "alc5_cielo_anomalias,"
                    + "alc5_estruct_material,"
                    + "alc5_estruct_estado,"
                    + "alc5_estruct_anomalias,"
                    + "alc5_panete_material,"
                    + "alc5_panete_estado,"
                    + "alc5_panete_anomalias,"
                    + "alc5_pintu_material,"
                    + "alc5_pintu_estado,"
                    + "alc5_pintu_anomalias,"
                    + "alc5_ventana_material,"
                    + "alc5_ventana_estado,"
                    + "alc5_ventana_anomalias,"
                    + "alc5_puerta_material,"
                    + "alc5_puerta_estado,"
                    + "alc5_puerta_anomalias,"
                    + "sal1_paredes_material,"
                    + "sal1_paredes_estado,"
                    + "sal1_paredes_anomalias,"
                    + "sal1_pisos_material,"
                    + "sal1_pisos_estado,"
                    + "sal1_pisos_anomalias,"
                    + "sal1_techo_material,"
                    + "sal1_techo_estado,"
                    + "sal1_techo_anomalias,"
                    + "sal1_cielo_material,"
                    + "sal1_cielo_estado,"
                    + "sal1_cielo_anomalias,"
                    + "sal1_estruct_material,"
                    + "sal1_estruct_estado,"
                    + "sal1_estruct_anomalias,"
                    + "sal1_panete_material,"
                    + "sal1_panete_estado,"
                    + "sal1_panete_anomalias,"
                    + "sal1_pintu_material,"
                    + "sal1_pintu_estado,"
                    + "sal1_pintu_anomalias,"
                    + "sal1_ventana_material,"
                    + "sal1_ventana_estado,"
                    + "sal1_ventana_anomalias,"
                    + "sal1_puerta_material,"
                    + "sal1_puerta_estado,"
                    + "sal1_puerta_anomalias,"
                    + "sal2_paredes_material,"
                    + "sal2_paredes_estado,"
                    + "sal2_paredes_anomalias,"
                    + "sal2_pisos_material,"
                    + "sal2_pisos_estado,"
                    + "sal2_pisos_anomalias,"
                    + "sal2_techo_material,"
                    + "sal2_techo_estado,"
                    + "sal2_techo_anomalias,"
                    + "sal2_cielo_material,"
                    + "sal2_cielo_estado,"
                    + "sal2_cielo_anomalias,"
                    + "sal2_estruct_material,"
                    + "sal2_estruct_estado,"
                    + "sal2_estruct_anomalias,"
                    + "sal2_panete_material,"
                    + "sal2_panete_estado,"
                    + "sal2_panete_anomalias,"
                    + "sal2_pintu_material,"
                    + "sal2_pintu_estado,"
                    + "sal2_pintu_anomalias,"
                    + "sal2_ventana_material,"
                    + "sal2_ventana_estado,"
                    + "sal2_ventana_anomalias,"
                    + "sal2_puerta_material,"
                    + "sal2_puerta_estado,"
                    + "sal2_puerta_anomalias,"
                    + "come1_paredes_material,"
                    + "come1_paredes_estado,"
                    + "come1_paredes_anomalias,"
                    + "come1_pisos_material,"
                    + "come1_pisos_estado,"
                    + "come1_pisos_anomalias,"
                    + "come1_techo_material,"
                    + "come1_techo_estado,"
                    + "come1_techo_anomalias,"
                    + "come1_cielo_material,"
                    + "come1_cielo_estado,"
                    + "come1_cielo_anomalias,"
                    + "come1_estruct_material,"
                    + "come1_estruct_estado,"
                    + "come1_estruct_anomalias,"
                    + "come1_panete_material,"
                    + "come1_panete_estado,"
                    + "come1_panete_anomalias,"
                    + "come1_pintu_material,"
                    + "come1_pintu_estado,"
                    + "come1_pintu_anomalias,"
                    + "come1_ventana_material,"
                    + "come1_ventana_estado,"
                    + "come1_ventana_anomalias,"
                    + "come1_puerta_material,"
                    + "come1_puerta_estado,"
                    + "come1_puerta_anomalias,"
                    + "come2_paredes_material,"
                    + "come2_paredes_estado,"
                    + "come2_paredes_anomalias,"
                    + "come2_pisos_material,"
                    + "come2_pisos_estado,"
                    + "come2_pisos_anomalias,"
                    + "come2_techo_material,"
                    + "come2_techo_estado,"
                    + "come2_techo_anomalias,"
                    + "come2_cielo_material,"
                    + "come2_cielo_estado,"
                    + "come2_cielo_anomalias,"
                    + "come2_estruct_material,"
                    + "come2_estruct_estado,"
                    + "come2_estruct_anomalias,"
                    + "come2_panete_material,"
                    + "come2_panete_estado,"
                    + "come2_panete_anomalias,"
                    + "come2_pintu_material,"
                    + "come2_pintu_estado,"
                    + "come2_pintu_anomalias,"
                    + "come2_ventana_material,"
                    + "come2_ventana_estado,"
                    + "come2_ventana_anomalias,"
                    + "come2_puerta_material,"
                    + "come2_puerta_estado,"
                    + "come2_puerta_anomalias,"
                    + "coci1_paredes_material,"
                    + "coci1_paredes_estado,"
                    + "coci1_paredes_anomalias,"
                    + "coci1_pisos_material,"
                    + "coci1_pisos_estado,"
                    + "coci1_pisos_anomalias,"
                    + "coci1_techo_material,"
                    + "coci1_techo_estado,"
                    + "coci1_techo_anomalias,"
                    + "coci1_cielo_material,"
                    + "coci1_cielo_estado,"
                    + "coci1_cielo_anomalias,"
                    + "coci1_estruct_material,"
                    + "coci1_estruct_estado,"
                    + "coci1_estruct_anomalias,"
                    + "coci1_panete_material,"
                    + "coci1_panete_estado,"
                    + "coci1_panete_anomalias,"
                    + "coci1_pintu_material,"
                    + "coci1_pintu_estado,"
                    + "coci1_pintu_anomalias,"
                    + "coci1_ventana_material,"
                    + "coci1_ventana_estado,"
                    + "coci1_ventana_anomalias,"
                    + "coci1_puerta_material,"
                    + "coci1_puerta_estado,"
                    + "coci1_puerta_anomalias,"
                    + "coci2_paredes_material,"
                    + "coci2_paredes_estado,"
                    + "coci2_paredes_anomalias,"
                    + "coci2_pisos_material,"
                    + "coci2_pisos_estado,"
                    + "coci2_pisos_anomalias,"
                    + "coci2_techo_material,"
                    + "coci2_techo_estado,"
                    + "coci2_techo_anomalias,"
                    + "coci2_cielo_material,"
                    + "coci2_cielo_estado,"
                    + "coci2_cielo_anomalias,"
                    + "coci2_estruct_material,"
                    + "coci2_estruct_estado,"
                    + "coci2_estruct_anomalias,"
                    + "coci2_panete_material,"
                    + "coci2_panete_estado,"
                    + "coci2_panete_anomalias,"
                    + "coci2_pintu_material,"
                    + "coci2_pintu_estado,"
                    + "coci2_pintu_anomalias,"
                    + "coci2_ventana_material,"
                    + "coci2_ventana_estado,"
                    + "coci2_ventana_anomalias,"
                    + "coci2_puerta_material,"
                    + "coci2_puerta_estado,"
                    + "coci2_puerta_anomalias,"
                    + "ban1_paredes_material,"
                    + "ban1_paredes_estado,"
                    + "ban1_paredes_anomalias,"
                    + "ban1_pisos_material,"
                    + "ban1_pisos_estado,"
                    + "ban1_pisos_anomalias,"
                    + "ban1_techo_material,"
                    + "ban1_techo_estado,"
                    + "ban1_techo_anomalias,"
                    + "ban1_cielo_material,"
                    + "ban1_cielo_estado,"
                    + "ban1_cielo_anomalias,"
                    + "ban1_estruct_material,"
                    + "ban1_estruct_estado,"
                    + "ban1_estruct_anomalias,"
                    + "ban1_panete_material,"
                    + "ban1_panete_estado,"
                    + "ban1_panete_anomalias,"
                    + "ban1_pintu_material,"
                    + "ban1_pintu_estado,"
                    + "ban1_pintu_anomalias,"
                    + "ban1_ventana_material,"
                    + "ban1_ventana_estado,"
                    + "ban1_ventana_anomalias,"
                    + "ban1_puerta_material,"
                    + "ban1_puerta_estado,"
                    + "ban1_puerta_anomalias,"
                    + "ban2_paredes_material,"
                    + "ban2_paredes_estado,"
                    + "ban2_paredes_anomalias,"
                    + "ban2_pisos_material,"
                    + "ban2_pisos_estado,"
                    + "ban2_pisos_anomalias,"
                    + "ban2_techo_material,"
                    + "ban2_techo_estado,"
                    + "ban2_techo_anomalias,"
                    + "ban2_cielo_material,"
                    + "ban2_cielo_estado,"
                    + "ban2_cielo_anomalias,"
                    + "ban2_estruct_material,"
                    + "ban2_estruct_estado,"
                    + "ban2_estruct_anomalias,"
                    + "ban2_panete_material,"
                    + "ban2_panete_estado,"
                    + "ban2_panete_anomalias,"
                    + "ban2_pintu_material,"
                    + "ban2_pintu_estado,"
                    + "ban2_pintu_anomalias,"
                    + "ban2_ventana_material,"
                    + "ban2_ventana_estado,"
                    + "ban2_ventana_anomalias,"
                    + "ban2_puerta_material,"
                    + "ban2_puerta_estado,"
                    + "ban2_puerta_anomalias,"
                    + "ban3_paredes_material,"
                    + "ban3_paredes_estado,"
                    + "ban3_paredes_anomalias,"
                    + "ban3_pisos_material,"
                    + "ban3_pisos_estado,"
                    + "ban3_pisos_anomalias,"
                    + "ban3_techo_material,"
                    + "ban3_techo_estado,"
                    + "ban3_techo_anomalias,"
                    + "ban3_cielo_material,"
                    + "ban3_cielo_estado,"
                    + "ban3_cielo_anomalias,"
                    + "ban3_estruct_material,"
                    + "ban3_estruct_estado,"
                    + "ban3_estruct_anomalias,"
                    + "ban3_panete_material,"
                    + "ban3_panete_estado,"
                    + "ban3_panete_anomalias,"
                    + "ban3_pintu_material,"
                    + "ban3_pintu_estado,"
                    + "ban3_pintu_anomalias,"
                    + "ban3_ventana_material,"
                    + "ban3_ventana_estado,"
                    + "ban3_ventana_anomalias,"
                    + "ban3_puerta_material,"
                    + "ban3_puerta_estado,"
                    + "ban3_puerta_anomalias,"
                    + "ban4_paredes_material,"
                    + "ban4_paredes_estado,"
                    + "ban4_paredes_anomalias,"
                    + "ban4_pisos_material,"
                    + "ban4_pisos_estado,"
                    + "ban4_pisos_anomalias,"
                    + "ban4_techo_material,"
                    + "ban4_techo_estado,"
                    + "ban4_techo_anomalias,"
                    + "ban4_cielo_material,"
                    + "ban4_cielo_estado,"
                    + "ban4_cielo_anomalias,"
                    + "ban4_estruct_material,"
                    + "ban4_estruct_estado,"
                    + "ban4_estruct_anomalias,"
                    + "ban4_panete_material,"
                    + "ban4_panete_estado,"
                    + "ban4_panete_anomalias,"
                    + "ban4_pintu_material,"
                    + "ban4_pintu_estado,"
                    + "ban4_pintu_anomalias,"
                    + "ban4_ventana_material,"
                    + "ban4_ventana_estado,"
                    + "ban4_ventana_anomalias,"
                    + "ban4_puerta_material,"
                    + "ban4_puerta_estado,"
                    + "ban4_puerta_anomalias,"
                    + "corr1_paredes_material,"
                    + "corr1_paredes_estado,"
                    + "corr1_paredes_anomalias,"
                    + "corr1_pisos_material,"
                    + "corr1_pisos_estado,"
                    + "corr1_pisos_anomalias,"
                    + "corr1_techo_material,"
                    + "corr1_techo_estado,"
                    + "corr1_techo_anomalias,"
                    + "corr1_cielo_material,"
                    + "corr1_cielo_estado,"
                    + "corr1_cielo_anomalias,"
                    + "corr1_estruct_material,"
                    + "corr1_estruct_estado,"
                    + "corr1_estruct_anomalias,"
                    + "corr1_panete_material,"
                    + "corr1_panete_estado,"
                    + "corr1_panete_anomalias,"
                    + "corr1_pintu_material,"
                    + "corr1_pintu_estado,"
                    + "corr1_pintu_anomalias,"
                    + "corr1_ventana_material,"
                    + "corr1_ventana_estado,"
                    + "corr1_ventana_anomalias,"
                    + "corr1_puerta_material,"
                    + "corr1_puerta_estado,"
                    + "corr1_puerta_anomalias,"
                    + "corr2_paredes_material,"
                    + "corr2_paredes_estado,"
                    + "corr2_paredes_anomalias,"
                    + "corr2_pisos_material,"
                    + "corr2_pisos_estado,"
                    + "corr2_pisos_anomalias,"
                    + "corr2_techo_material,"
                    + "corr2_techo_estado,"
                    + "corr2_techo_anomalias,"
                    + "corr2_cielo_material,"
                    + "corr2_cielo_estado,"
                    + "corr2_cielo_anomalias,"
                    + "corr2_estruct_material,"
                    + "corr2_estruct_estado,"
                    + "corr2_estruct_anomalias,"
                    + "corr2_panete_material,"
                    + "corr2_panete_estado,"
                    + "corr2_panete_anomalias,"
                    + "corr2_pintu_material,"
                    + "corr2_pintu_estado,"
                    + "corr2_pintu_anomalias,"
                    + "corr2_ventana_material,"
                    + "corr2_ventana_estado,"
                    + "corr2_ventana_anomalias,"
                    + "corr2_puerta_material,"
                    + "corr2_puerta_estado,"
                    + "corr2_puerta_anomalias,"
                    + "gar2_paredes_material,"
                    + "gar2_paredes_estado,"
                    + "gar2_paredes_anomalias,"
                    + "gar2_pisos_material,"
                    + "gar2_pisos_estado,"
                    + "gar2_pisos_anomalias,"
                    + "gar2_techo_material,"
                    + "gar2_techo_estado,"
                    + "gar2_techo_anomalias,"
                    + "gar2_cielo_material,"
                    + "gar2_cielo_estado,"
                    + "gar2_cielo_anomalias,"
                    + "gar2_estruct_material,"
                    + "gar2_estruct_estado,"
                    + "gar2_estruct_anomalias,"
                    + "gar2_panete_material,"
                    + "gar2_panete_estado,"
                    + "gar2_panete_anomalias,"
                    + "gar2_pintu_material,"
                    + "gar2_pintu_estado,"
                    + "gar2_pintu_anomalias,"
                    + "gar2_ventana_material,"
                    + "gar2_ventana_estado,"
                    + "gar2_ventana_anomalias,"
                    + "gar2_puerta_material,"
                    + "gar2_puerta_estado,"
                    + "gar2_puerta_anomalias,"
                    + "bod_paredes_material,"
                    + "bod_paredes_estado,"
                    + "bod_paredes_anomalias,"
                    + "bod_pisos_material,"
                    + "bod_pisos_estado,"
                    + "bod_pisos_anomalias,"
                    + "bod_techo_material,"
                    + "bod_techo_estado,"
                    + "bod_techo_anomalias,"
                    + "bod_cielo_material,"
                    + "bod_cielo_estado,"
                    + "bod_cielo_anomalias,"
                    + "bod_estruct_material,"
                    + "bod_estruct_estado,"
                    + "bod_estruct_anomalias,"
                    + "bod_panete_material,"
                    + "bod_panete_estado,"
                    + "bod_panete_anomalias,"
                    + "bod_pintu_material,"
                    + "bod_pintu_estado,"
                    + "bod_pintu_anomalias,"
                    + "bod_ventana_material,"
                    + "bod_ventana_estado,"
                    + "bod_ventana_anomalias,"
                    + "bod_puerta_material,"
                    + "bod_puerta_estado,"
                    + "bod_puerta_anomalias,"
                    + "lav_paredes_material,"
                    + "lav_paredes_estado,"
                    + "lav_paredes_anomalias,"
                    + "lav_pisos_material,"
                    + "lav_pisos_estado,"
                    + "lav_pisos_anomalias,"
                    + "lav_techo_material,"
                    + "lav_techo_estado,"
                    + "lav_techo_anomalias,"
                    + "lav_cielo_material,"
                    + "lav_cielo_estado,"
                    + "lav_cielo_anomalias,"
                    + "lav_estruct_material,"
                    + "lav_estruct_estado,"
                    + "lav_estruct_anomalias,"
                    + "lav_panete_material,"
                    + "lav_panete_estado,"
                    + "lav_panete_anomalias,"
                    + "lav_pintu_material,"
                    + "lav_pintu_estado,"
                    + "lav_pintu_anomalias,"
                    + "lav_ventana_material,"
                    + "lav_ventana_estado,"
                    + "lav_ventana_anomalias,"
                    + "lav_puerta_material,"
                    + "lav_puerta_estado,"
                    + "lav_puerta_anomalias,"
                    + "tanq_paredes_material,"
                    + "tanq_paredes_estado,"
                    + "tanq_paredes_anomalias,"
                    + "tanq_pisos_material,"
                    + "tanq_pisos_estado,"
                    + "tanq_pisos_anomalias,"
                    + "tanq_techo_material,"
                    + "tanq_techo_estado,"
                    + "tanq_techo_anomalias,"
                    + "tanq_cielo_material,"
                    + "tanq_cielo_estado,"
                    + "tanq_cielo_anomalias,"
                    + "tanq_estruct_material,"
                    + "tanq_estruct_estado,"
                    + "tanq_estruct_anomalias,"
                    + "tanq_panete_material,"
                    + "tanq_panete_estado,"
                    + "tanq_panete_anomalias,"
                    + "tanq_pintu_material,"
                    + "tanq_pintu_estado,"
                    + "tanq_pintu_anomalias,"
                    + "tanq_ventana_material,"
                    + "tanq_ventana_estado,"
                    + "tanq_ventana_anomalias,"
                    + "tanq_puerta_material,"
                    + "tanq_puerta_estado,"
                    + "tanq_puerta_anomalias,"
                    + "maq_paredes_material,"
                    + "maq_paredes_estado,"
                    + "maq_paredes_anomalias,"
                    + "maq_pisos_material,"
                    + "maq_pisos_estado,"
                    + "maq_pisos_anomalias,"
                    + "maq_techo_material,"
                    + "maq_techo_estado,"
                    + "maq_techo_anomalias,"
                    + "maq_cielo_material,"
                    + "maq_cielo_estado,"
                    + "maq_cielo_anomalias,"
                    + "maq_estruct_material,"
                    + "maq_estruct_estado,"
                    + "maq_estruct_anomalias,"
                    + "maq_panete_material,"
                    + "maq_panete_estado,"
                    + "maq_panete_anomalias,"
                    + "maq_pintu_material,"
                    + "maq_pintu_estado,"
                    + "maq_pintu_anomalias,"
                    + "maq_ventana_material,"
                    + "maq_ventana_estado,"
                    + "maq_ventana_anomalias,"
                    + "maq_puerta_material,"
                    + "maq_puerta_estado,"
                    + "maq_puerta_anomalias,"
                    + "pisc_paredes_material,"
                    + "pisc_paredes_estado,"
                    + "pisc_paredes_anomalias,"
                    + "pisc_pisos_material,"
                    + "pisc_pisos_estado,"
                    + "pisc_pisos_anomalias,"
                    + "pisc_techo_material,"
                    + "pisc_techo_estado,"
                    + "pisc_techo_anomalias,"
                    + "pisc_cielo_material,"
                    + "pisc_cielo_estado,"
                    + "pisc_cielo_anomalias,"
                    + "pisc_estruct_material,"
                    + "pisc_estruct_estado,"
                    + "pisc_estruct_anomalias,"
                    + "pisc_panete_material,"
                    + "pisc_panete_estado,"
                    + "pisc_panete_anomalias,"
                    + "pisc_pintu_material,"
                    + "pisc_pintu_estado,"
                    + "pisc_pintu_anomalias,"
                    + "pisc_ventana_material,"
                    + "pisc_ventana_estado,"
                    + "pisc_ventana_anomalias,"
                    + "pisc_puerta_material,"
                    + "pisc_puerta_estado,"
                    + "pisc_puerta_anomalias,"
                    + "observa,"
                    + "fecha_inicio,"
                    + "usuario,"
                    + "estado,"
		    + "lat,"
		    + "lon"
                    + ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )";
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
                topografia,
                tiempo_construccion,
                origen_coord,
                coordenada_e,
                coordenada_n,
                stk,
                sp_cercano,
                distancia_sp,
                laminar,
                surcos,
                carcavas,
                socavacion,
                ninguno,
                caidas,
                deslizamientos,
                volcamientos,
                flujos,
                ningunom,
                ex_paredes_material,
                ex_paredes_estado,
                ex_paredes_anomalias,
                ex_pisos_material,
                ex_pisos_estado,
                ex_pisos_anomalias,
                ex_techo_material,
                ex_techo_estado,
                ex_techo_anomalias,
                ex_cielo_material,
                ex_cielo_estado,
                ex_cielo_anomalias,
                ex_estruct_material,
                ex_estruct_estado,
                ex_estruct_anomalias,
                ex_panete_material,
                ex_panete_estado,
                ex_panete_anomalias,
                ex_pintu_material,
                ex_pintu_estado,
                ex_pintu_anomalias,
                ex_ventana_material,
                ex_ventana_estado,
                ex_ventana_anomalias,
                ex_puerta_material,
                ex_puerta_estado,
                ex_puerta_anomalias,
                alc1_paredes_material,
                alc1_paredes_estado,
                alc1_paredes_anomalias,
                alc1_pisos_material,
                alc1_pisos_estado,
                alc1_pisos_anomalias,
                alc1_techo_material,
                alc1_techo_estado,
                alc1_techo_anomalias,
                alc1_cielo_material,
                alc1_cielo_estado,
                alc1_cielo_anomalias,
                alc1_estruct_material,
                alc1_estruct_estado,
                alc1_estruct_anomalias,
                alc1_panete_material,
                alc1_panete_estado,
                alc1_panete_anomalias,
                alc1_pintu_material,
                alc1_pintu_estado,
                alc1_pintu_anomalias,
                alc1_ventana_material,
                alc1_ventana_estado,
                alc1_ventana_anomalias,
                alc1_puerta_material,
                alc1_puerta_estado,
                alc1_puerta_anomalias,
                alc2_paredes_material,
                alc2_paredes_estado,
                alc2_paredes_anomalias,
                alc2_pisos_material,
                alc2_pisos_estado,
                alc2_pisos_anomalias,
                alc2_techo_material,
                alc2_techo_estado,
                alc2_techo_anomalias,
                alc2_cielo_material,
                alc2_cielo_estado,
                alc2_cielo_anomalias,
                alc2_estruct_material,
                alc2_estruct_estado,
                alc2_estruct_anomalias,
                alc2_panete_material,
                alc2_panete_estado,
                alc2_panete_anomalias,
                alc2_pintu_material,
                alc2_pintu_estado,
                alc2_pintu_anomalias,
                alc2_ventana_material,
                alc2_ventana_estado,
                alc2_ventana_anomalias,
                alc2_puerta_material,
                alc2_puerta_estado,
                alc2_puerta_anomalias,
                alc3_paredes_material,
                alc3_paredes_estado,
                alc3_paredes_anomalias,
                alc3_pisos_material,
                alc3_pisos_estado,
                alc3_pisos_anomalias,
                alc3_techo_material,
                alc3_techo_estado,
                alc3_techo_anomalias,
                alc3_cielo_material,
                alc3_cielo_estado,
                alc3_cielo_anomalias,
                alc3_estruct_material,
                alc3_estruct_estado,
                alc3_estruct_anomalias,
                alc3_panete_material,
                alc3_panete_estado,
                alc3_panete_anomalias,
                alc3_pintu_material,
                alc3_pintu_estado,
                alc3_pintu_anomalias,
                alc3_ventana_material,
                alc3_ventana_estado,
                alc3_ventana_anomalias,
                alc3_puerta_material,
                alc3_puerta_estado,
                alc3_puerta_anomalias,
                alc4_paredes_material,
                alc4_paredes_estado,
                alc4_paredes_anomalias,
                alc4_pisos_material,
                alc4_pisos_estado,
                alc4_pisos_anomalias,
                alc4_techo_material,
                alc4_techo_estado,
                alc4_techo_anomalias,
                alc4_cielo_material,
                alc4_cielo_estado,
                alc4_cielo_anomalias,
                alc4_estruct_material,
                alc4_estruct_estado,
                alc4_estruct_anomalias,
                alc4_panete_material,
                alc4_panete_estado,
                alc4_panete_anomalias,
                alc4_pintu_material,
                alc4_pintu_estado,
                alc4_pintu_anomalias,
                alc4_ventana_material,
                alc4_ventana_estado,
                alc4_ventana_anomalias,
                alc4_puerta_material,
                alc4_puerta_estado,
                alc4_puerta_anomalias,
                alc5_paredes_material,
                alc5_paredes_estado,
                alc5_paredes_anomalias,
                alc5_pisos_material,
                alc5_pisos_estado,
                alc5_pisos_anomalias,
                alc5_techo_material,
                alc5_techo_estado,
                alc5_techo_anomalias,
                alc5_cielo_material,
                alc5_cielo_estado,
                alc5_cielo_anomalias,
                alc5_estruct_material,
                alc5_estruct_estado,
                alc5_estruct_anomalias,
                alc5_panete_material,
                alc5_panete_estado,
                alc5_panete_anomalias,
                alc5_pintu_material,
                alc5_pintu_estado,
                alc5_pintu_anomalias,
                alc5_ventana_material,
                alc5_ventana_estado,
                alc5_ventana_anomalias,
                alc5_puerta_material,
                alc5_puerta_estado,
                alc5_puerta_anomalias,
                sal1_paredes_material,
                sal1_paredes_estado,
                sal1_paredes_anomalias,
                sal1_pisos_material,
                sal1_pisos_estado,
                sal1_pisos_anomalias,
                sal1_techo_material,
                sal1_techo_estado,
                sal1_techo_anomalias,
                sal1_cielo_material,
                sal1_cielo_estado,
                sal1_cielo_anomalias,
                sal1_estruct_material,
                sal1_estruct_estado,
                sal1_estruct_anomalias,
                sal1_panete_material,
                sal1_panete_estado,
                sal1_panete_anomalias,
                sal1_pintu_material,
                sal1_pintu_estado,
                sal1_pintu_anomalias,
                sal1_ventana_material,
                sal1_ventana_estado,
                sal1_ventana_anomalias,
                sal1_puerta_material,
                sal1_puerta_estado,
                sal1_puerta_anomalias,
                sal2_paredes_material,
                sal2_paredes_estado,
                sal2_paredes_anomalias,
                sal2_pisos_material,
                sal2_pisos_estado,
                sal2_pisos_anomalias,
                sal2_techo_material,
                sal2_techo_estado,
                sal2_techo_anomalias,
                sal2_cielo_material,
                sal2_cielo_estado,
                sal2_cielo_anomalias,
                sal2_estruct_material,
                sal2_estruct_estado,
                sal2_estruct_anomalias,
                sal2_panete_material,
                sal2_panete_estado,
                sal2_panete_anomalias,
                sal2_pintu_material,
                sal2_pintu_estado,
                sal2_pintu_anomalias,
                sal2_ventana_material,
                sal2_ventana_estado,
                sal2_ventana_anomalias,
                sal2_puerta_material,
                sal2_puerta_estado,
                sal2_puerta_anomalias,
                come1_paredes_material,
                come1_paredes_estado,
                come1_paredes_anomalias,
                come1_pisos_material,
                come1_pisos_estado,
                come1_pisos_anomalias,
                come1_techo_material,
                come1_techo_estado,
                come1_techo_anomalias,
                come1_cielo_material,
                come1_cielo_estado,
                come1_cielo_anomalias,
                come1_estruct_material,
                come1_estruct_estado,
                come1_estruct_anomalias,
                come1_panete_material,
                come1_panete_estado,
                come1_panete_anomalias,
                come1_pintu_material,
                come1_pintu_estado,
                come1_pintu_anomalias,
                come1_ventana_material,
                come1_ventana_estado,
                come1_ventana_anomalias,
                come1_puerta_material,
                come1_puerta_estado,
                come1_puerta_anomalias,
                come2_paredes_material,
                come2_paredes_estado,
                come2_paredes_anomalias,
                come2_pisos_material,
                come2_pisos_estado,
                come2_pisos_anomalias,
                come2_techo_material,
                come2_techo_estado,
                come2_techo_anomalias,
                come2_cielo_material,
                come2_cielo_estado,
                come2_cielo_anomalias,
                come2_estruct_material,
                come2_estruct_estado,
                come2_estruct_anomalias,
                come2_panete_material,
                come2_panete_estado,
                come2_panete_anomalias,
                come2_pintu_material,
                come2_pintu_estado,
                come2_pintu_anomalias,
                come2_ventana_material,
                come2_ventana_estado,
                come2_ventana_anomalias,
                come2_puerta_material,
                come2_puerta_estado,
                come2_puerta_anomalias,
                coci1_paredes_material,
                coci1_paredes_estado,
                coci1_paredes_anomalias,
                coci1_pisos_material,
                coci1_pisos_estado,
                coci1_pisos_anomalias,
                coci1_techo_material,
                coci1_techo_estado,
                coci1_techo_anomalias,
                coci1_cielo_material,
                coci1_cielo_estado,
                coci1_cielo_anomalias,
                coci1_estruct_material,
                coci1_estruct_estado,
                coci1_estruct_anomalias,
                coci1_panete_material,
                coci1_panete_estado,
                coci1_panete_anomalias,
                coci1_pintu_material,
                coci1_pintu_estado,
                coci1_pintu_anomalias,
                coci1_ventana_material,
                coci1_ventana_estado,
                coci1_ventana_anomalias,
                coci1_puerta_material,
                coci1_puerta_estado,
                coci1_puerta_anomalias,
                coci2_paredes_material,
                coci2_paredes_estado,
                coci2_paredes_anomalias,
                coci2_pisos_material,
                coci2_pisos_estado,
                coci2_pisos_anomalias,
                coci2_techo_material,
                coci2_techo_estado,
                coci2_techo_anomalias,
                coci2_cielo_material,
                coci2_cielo_estado,
                coci2_cielo_anomalias,
                coci2_estruct_material,
                coci2_estruct_estado,
                coci2_estruct_anomalias,
                coci2_panete_material,
                coci2_panete_estado,
                coci2_panete_anomalias,
                coci2_pintu_material,
                coci2_pintu_estado,
                coci2_pintu_anomalias,
                coci2_ventana_material,
                coci2_ventana_estado,
                coci2_ventana_anomalias,
                coci2_puerta_material,
                coci2_puerta_estado,
                coci2_puerta_anomalias,
                ban1_paredes_material,
                ban1_paredes_estado,
                ban1_paredes_anomalias,
                ban1_pisos_material,
                ban1_pisos_estado,
                ban1_pisos_anomalias,
                ban1_techo_material,
                ban1_techo_estado,
                ban1_techo_anomalias,
                ban1_cielo_material,
                ban1_cielo_estado,
                ban1_cielo_anomalias,
                ban1_estruct_material,
                ban1_estruct_estado,
                ban1_estruct_anomalias,
                ban1_panete_material,
                ban1_panete_estado,
                ban1_panete_anomalias,
                ban1_pintu_material,
                ban1_pintu_estado,
                ban1_pintu_anomalias,
                ban1_ventana_material,
                ban1_ventana_estado,
                ban1_ventana_anomalias,
                ban1_puerta_material,
                ban1_puerta_estado,
                ban1_puerta_anomalias,
                ban2_paredes_material,
                ban2_paredes_estado,
                ban2_paredes_anomalias,
                ban2_pisos_material,
                ban2_pisos_estado,
                ban2_pisos_anomalias,
                ban2_techo_material,
                ban2_techo_estado,
                ban2_techo_anomalias,
                ban2_cielo_material,
                ban2_cielo_estado,
                ban2_cielo_anomalias,
                ban2_estruct_material,
                ban2_estruct_estado,
                ban2_estruct_anomalias,
                ban2_panete_material,
                ban2_panete_estado,
                ban2_panete_anomalias,
                ban2_pintu_material,
                ban2_pintu_estado,
                ban2_pintu_anomalias,
                ban2_ventana_material,
                ban2_ventana_estado,
                ban2_ventana_anomalias,
                ban2_puerta_material,
                ban2_puerta_estado,
                ban2_puerta_anomalias,
                ban3_paredes_material,
                ban3_paredes_estado,
                ban3_paredes_anomalias,
                ban3_pisos_material,
                ban3_pisos_estado,
                ban3_pisos_anomalias,
                ban3_techo_material,
                ban3_techo_estado,
                ban3_techo_anomalias,
                ban3_cielo_material,
                ban3_cielo_estado,
                ban3_cielo_anomalias,
                ban3_estruct_material,
                ban3_estruct_estado,
                ban3_estruct_anomalias,
                ban3_panete_material,
                ban3_panete_estado,
                ban3_panete_anomalias,
                ban3_pintu_material,
                ban3_pintu_estado,
                ban3_pintu_anomalias,
                ban3_ventana_material,
                ban3_ventana_estado,
                ban3_ventana_anomalias,
                ban3_puerta_material,
                ban3_puerta_estado,
                ban3_puerta_anomalias,
                ban4_paredes_material,
                ban4_paredes_estado,
                ban4_paredes_anomalias,
                ban4_pisos_material,
                ban4_pisos_estado,
                ban4_pisos_anomalias,
                ban4_techo_material,
                ban4_techo_estado,
                ban4_techo_anomalias,
                ban4_cielo_material,
                ban4_cielo_estado,
                ban4_cielo_anomalias,
                ban4_estruct_material,
                ban4_estruct_estado,
                ban4_estruct_anomalias,
                ban4_panete_material,
                ban4_panete_estado,
                ban4_panete_anomalias,
                ban4_pintu_material,
                ban4_pintu_estado,
                ban4_pintu_anomalias,
                ban4_ventana_material,
                ban4_ventana_estado,
                ban4_ventana_anomalias,
                ban4_puerta_material,
                ban4_puerta_estado,
                ban4_puerta_anomalias,
                corr1_paredes_material,
                corr1_paredes_estado,
                corr1_paredes_anomalias,
                corr1_pisos_material,
                corr1_pisos_estado,
                corr1_pisos_anomalias,
                corr1_techo_material,
                corr1_techo_estado,
                corr1_techo_anomalias,
                corr1_cielo_material,
                corr1_cielo_estado,
                corr1_cielo_anomalias,
                corr1_estruct_material,
                corr1_estruct_estado,
                corr1_estruct_anomalias,
                corr1_panete_material,
                corr1_panete_estado,
                corr1_panete_anomalias,
                corr1_pintu_material,
                corr1_pintu_estado,
                corr1_pintu_anomalias,
                corr1_ventana_material,
                corr1_ventana_estado,
                corr1_ventana_anomalias,
                corr1_puerta_material,
                corr1_puerta_estado,
                corr1_puerta_anomalias,
                corr2_paredes_material,
                corr2_paredes_estado,
                corr2_paredes_anomalias,
                corr2_pisos_material,
                corr2_pisos_estado,
                corr2_pisos_anomalias,
                corr2_techo_material,
                corr2_techo_estado,
                corr2_techo_anomalias,
                corr2_cielo_material,
                corr2_cielo_estado,
                corr2_cielo_anomalias,
                corr2_estruct_material,
                corr2_estruct_estado,
                corr2_estruct_anomalias,
                corr2_panete_material,
                corr2_panete_estado,
                corr2_panete_anomalias,
                corr2_pintu_material,
                corr2_pintu_estado,
                corr2_pintu_anomalias,
                corr2_ventana_material,
                corr2_ventana_estado,
                corr2_ventana_anomalias,
                corr2_puerta_material,
                corr2_puerta_estado,
                corr2_puerta_anomalias,
                gar2_paredes_material,
                gar2_paredes_estado,
                gar2_paredes_anomalias,
                gar2_pisos_material,
                gar2_pisos_estado,
                gar2_pisos_anomalias,
                gar2_techo_material,
                gar2_techo_estado,
                gar2_techo_anomalias,
                gar2_cielo_material,
                gar2_cielo_estado,
                gar2_cielo_anomalias,
                gar2_estruct_material,
                gar2_estruct_estado,
                gar2_estruct_anomalias,
                gar2_panete_material,
                gar2_panete_estado,
                gar2_panete_anomalias,
                gar2_pintu_material,
                gar2_pintu_estado,
                gar2_pintu_anomalias,
                gar2_ventana_material,
                gar2_ventana_estado,
                gar2_ventana_anomalias,
                gar2_puerta_material,
                gar2_puerta_estado,
                gar2_puerta_anomalias,
                bod_paredes_material,
                bod_paredes_estado,
                bod_paredes_anomalias,
                bod_pisos_material,
                bod_pisos_estado,
                bod_pisos_anomalias,
                bod_techo_material,
                bod_techo_estado,
                bod_techo_anomalias,
                bod_cielo_material,
                bod_cielo_estado,
                bod_cielo_anomalias,
                bod_estruct_material,
                bod_estruct_estado,
                bod_estruct_anomalias,
                bod_panete_material,
                bod_panete_estado,
                bod_panete_anomalias,
                bod_pintu_material,
                bod_pintu_estado,
                bod_pintu_anomalias,
                bod_ventana_material,
                bod_ventana_estado,
                bod_ventana_anomalias,
                bod_puerta_material,
                bod_puerta_estado,
                bod_puerta_anomalias,
                lav_paredes_material,
                lav_paredes_estado,
                lav_paredes_anomalias,
                lav_pisos_material,
                lav_pisos_estado,
                lav_pisos_anomalias,
                lav_techo_material,
                lav_techo_estado,
                lav_techo_anomalias,
                lav_cielo_material,
                lav_cielo_estado,
                lav_cielo_anomalias,
                lav_estruct_material,
                lav_estruct_estado,
                lav_estruct_anomalias,
                lav_panete_material,
                lav_panete_estado,
                lav_panete_anomalias,
                lav_pintu_material,
                lav_pintu_estado,
                lav_pintu_anomalias,
                lav_ventana_material,
                lav_ventana_estado,
                lav_ventana_anomalias,
                lav_puerta_material,
                lav_puerta_estado,
                lav_puerta_anomalias,
                tanq_paredes_material,
                tanq_paredes_estado,
                tanq_paredes_anomalias,
                tanq_pisos_material,
                tanq_pisos_estado,
                tanq_pisos_anomalias,
                tanq_techo_material,
                tanq_techo_estado,
                tanq_techo_anomalias,
                tanq_cielo_material,
                tanq_cielo_estado,
                tanq_cielo_anomalias,
                tanq_estruct_material,
                tanq_estruct_estado,
                tanq_estruct_anomalias,
                tanq_panete_material,
                tanq_panete_estado,
                tanq_panete_anomalias,
                tanq_pintu_material,
                tanq_pintu_estado,
                tanq_pintu_anomalias,
                tanq_ventana_material,
                tanq_ventana_estado,
                tanq_ventana_anomalias,
                tanq_puerta_material,
                tanq_puerta_estado,
                tanq_puerta_anomalias,
                maq_paredes_material,
                maq_paredes_estado,
                maq_paredes_anomalias,
                maq_pisos_material,
                maq_pisos_estado,
                maq_pisos_anomalias,
                maq_techo_material,
                maq_techo_estado,
                maq_techo_anomalias,
                maq_cielo_material,
                maq_cielo_estado,
                maq_cielo_anomalias,
                maq_estruct_material,
                maq_estruct_estado,
                maq_estruct_anomalias,
                maq_panete_material,
                maq_panete_estado,
                maq_panete_anomalias,
                maq_pintu_material,
                maq_pintu_estado,
                maq_pintu_anomalias,
                maq_ventana_material,
                maq_ventana_estado,
                maq_ventana_anomalias,
                maq_puerta_material,
                maq_puerta_estado,
                maq_puerta_anomalias,
                pisc_paredes_material,
                pisc_paredes_estado,
                pisc_paredes_anomalias,
                pisc_pisos_material,
                pisc_pisos_estado,
                pisc_pisos_anomalias,
                pisc_techo_material,
                pisc_techo_estado,
                pisc_techo_anomalias,
                pisc_cielo_material,
                pisc_cielo_estado,
                pisc_cielo_anomalias,
                pisc_estruct_material,
                pisc_estruct_estado,
                pisc_estruct_anomalias,
                pisc_panete_material,
                pisc_panete_estado,
                pisc_panete_anomalias,
                pisc_pintu_material,
                pisc_pintu_estado,
                pisc_pintu_anomalias,
                pisc_ventana_material,
                pisc_ventana_estado,
                pisc_ventana_anomalias,
                pisc_puerta_material,
                pisc_puerta_estado,
                pisc_puerta_anomalias,
                observa,
                fechaHoraInicio,
                usuario,
                estado,
				lat,
				lon
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



