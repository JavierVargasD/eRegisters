var i = 1;

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
    
    
    var $TABLE = $('#table');
    var $BTN = $('#export-btn');
    var $EXPORT = $('#export');

    $('.table-add').click(function() {
        var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
        $TABLE.find('table').append($clone);
    });

    $('.table-remove').click(function() {
        $(this).parents('tr').detach();
    });

    jQuery.fn.pop = [].pop;
    jQuery.fn.shift = [].shift;

//    $BTN.click(function() {
//        var $rows = $TABLE.find('tr:not(:hidden)');
//        var headers = [];
//        var data = [];
//
//        // Get the headers (add special header logic here)
//        $($rows.shift()).find('th:not(:empty)').each(function() {
//            headers.push($(this).text().toLowerCase());
//        });
//
//        // Turn all existing rows into a loopable array
//        $rows.each(function() {
//            var $td = $(this).find('td');
//            var h = {};
//
//            // Use the headers from earlier to name our hash keys
//            headers.forEach(function(header, i) {
//                h[header] = $td.eq(i).text();
//            });
//
//            data.push(h);
//        });
//
//        // Output the result
//        $EXPORT.text(JSON.stringify(data));
//    });



});

function getCurrentDate() {


    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();

    var then = '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);

    return then;


}

function getCurrentDateTime() {


    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    var h = date.getHours();
    var mm = date.getMinutes();

    var then = '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);

    then += ' ' + (h <= 9 ? '0' + h : h) + ':' + (mm <= 9 ? '0' + mm : mm);

    return then;

}


function onDeviceReady() {


  




    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});
    var query = "SELECT * FROM areas_fragiles where id=" + window.localStorage.getItem("actaId");

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
                    $("#topografia").val(results.rows.item(i).topografia);
                    $("#tiempo_construccion").val(results.rows.item(i).tiempo_construccion);
                    $("#origen_coord").val(results.rows.item(i).origen_coord);
                    $("#coordenada_e").val(results.rows.item(i).coordenada_e);
                    $("#coordenada_n").val(results.rows.item(i).coordenada_n);
                    $("#stk").val(results.rows.item(i).stk);
                    $("#sp_cercano").val(results.rows.item(i).sp_cercano);
                    $("#distancia_sp").val(results.rows.item(i).distancia_sp);
                    $("#laminar").prop('checked', !!+results.rows.item(i).laminar);
                    $("#surcos").prop('checked', !!+results.rows.item(i).surcos);
                    $("#carcavas").prop('checked', !!+results.rows.item(i).carcavas);
                    $("#socavacion").prop('checked', !!+results.rows.item(i).socavacion);
                    $("#ninguno").prop('checked', !!+results.rows.item(i).ninguno);
                    $("#caidas").prop('checked', !!+results.rows.item(i).caidas);
                    $("#deslizamientos").prop('checked', !!+results.rows.item(i).deslizamientos);
                    $("#volcamientos").prop('checked', !!+results.rows.item(i).volcamientos);
                    $("#flujos").prop('checked', !!+results.rows.item(i).flujos);
                    $("#ningunom").prop('checked', !!+results.rows.item(i).ningunom);
                    $("#ex_paredes_material").val(results.rows.item(i).ex_paredes_material);
                    $("#ex_paredes_estado").val(results.rows.item(i).ex_paredes_estado);
                    $("#ex_paredes_anomalias").val(results.rows.item(i).ex_paredes_anomalias);
                    $("#ex_pisos_material").val(results.rows.item(i).ex_pisos_material);
                    $("#ex_pisos_estado").val(results.rows.item(i).ex_pisos_estado);
                    $("#ex_pisos_anomalias").val(results.rows.item(i).ex_pisos_anomalias);
                    $("#ex_techo_material").val(results.rows.item(i).ex_techo_material);
                    $("#ex_techo_estado").val(results.rows.item(i).ex_techo_estado);
                    $("#ex_techo_anomalias").val(results.rows.item(i).ex_techo_anomalias);
                    $("#ex_cielo_material").val(results.rows.item(i).ex_cielo_material);
                    $("#ex_cielo_estado").val(results.rows.item(i).ex_cielo_estado);
                    $("#ex_cielo_anomalias").val(results.rows.item(i).ex_cielo_anomalias);
                    $("#ex_estruct_material").val(results.rows.item(i).ex_estruct_material);
                    $("#ex_estruct_estado").val(results.rows.item(i).ex_estruct_estado);
                    $("#ex_estruct_anomalias").val(results.rows.item(i).ex_estruct_anomalias);
                    $("#ex_panete_material").val(results.rows.item(i).ex_panete_material);
                    $("#ex_panete_estado").val(results.rows.item(i).ex_panete_estado);
                    $("#ex_panete_anomalias").val(results.rows.item(i).ex_panete_anomalias);
                    $("#ex_pintu_material").val(results.rows.item(i).ex_pintu_material);
                    $("#ex_pintu_estado").val(results.rows.item(i).ex_pintu_estado);
                    $("#ex_pintu_anomalias").val(results.rows.item(i).ex_pintu_anomalias);
                    $("#ex_ventana_material").val(results.rows.item(i).ex_ventana_material);
                    $("#ex_ventana_estado").val(results.rows.item(i).ex_ventana_estado);
                    $("#ex_ventana_anomalias").val(results.rows.item(i).ex_ventana_anomalias);
                    $("#ex_puerta_material").val(results.rows.item(i).ex_puerta_material);
                    $("#ex_puerta_estado").val(results.rows.item(i).ex_puerta_estado);
                    $("#ex_puerta_anomalias").val(results.rows.item(i).ex_puerta_anomalias);
                    $("#alc1_paredes_material").val(results.rows.item(i).alc1_paredes_material);
                    $("#alc1_paredes_estado").val(results.rows.item(i).alc1_paredes_estado);
                    $("#alc1_paredes_anomalias").val(results.rows.item(i).alc1_paredes_anomalias);
                    $("#alc1_pisos_material").val(results.rows.item(i).alc1_pisos_material);
                    $("#alc1_pisos_estado").val(results.rows.item(i).alc1_pisos_estado);
                    $("#alc1_pisos_anomalias").val(results.rows.item(i).alc1_pisos_anomalias);
                    $("#alc1_techo_material").val(results.rows.item(i).alc1_techo_material);
                    $("#alc1_techo_estado").val(results.rows.item(i).alc1_techo_estado);
                    $("#alc1_techo_anomalias").val(results.rows.item(i).alc1_techo_anomalias);
                    $("#alc1_cielo_material").val(results.rows.item(i).alc1_cielo_material);
                    $("#alc1_cielo_estado").val(results.rows.item(i).alc1_cielo_estado);
                    $("#alc1_cielo_anomalias").val(results.rows.item(i).alc1_cielo_anomalias);
                    $("#alc1_estruct_material").val(results.rows.item(i).alc1_estruct_material);
                    $("#alc1_estruct_estado").val(results.rows.item(i).alc1_estruct_estado);
                    $("#alc1_estruct_anomalias").val(results.rows.item(i).alc1_estruct_anomalias);
                    $("#alc1_panete_material").val(results.rows.item(i).alc1_panete_material);
                    $("#alc1_panete_estado").val(results.rows.item(i).alc1_panete_estado);
                    $("#alc1_panete_anomalias").val(results.rows.item(i).alc1_panete_anomalias);
                    $("#alc1_pintu_material").val(results.rows.item(i).alc1_pintu_material);
                    $("#alc1_pintu_estado").val(results.rows.item(i).alc1_pintu_estado);
                    $("#alc1_pintu_anomalias").val(results.rows.item(i).alc1_pintu_anomalias);
                    $("#alc1_ventana_material").val(results.rows.item(i).alc1_ventana_material);
                    $("#alc1_ventana_estado").val(results.rows.item(i).alc1_ventana_estado);
                    $("#alc1_ventana_anomalias").val(results.rows.item(i).alc1_ventana_anomalias);
                    $("#alc1_puerta_material").val(results.rows.item(i).alc1_puerta_material);
                    $("#alc1_puerta_estado").val(results.rows.item(i).alc1_puerta_estado);
                    $("#alc1_puerta_anomalias").val(results.rows.item(i).alc1_puerta_anomalias);
                    $("#alc2_paredes_material").val(results.rows.item(i).alc2_paredes_material);
                    $("#alc2_paredes_estado").val(results.rows.item(i).alc2_paredes_estado);
                    $("#alc2_paredes_anomalias").val(results.rows.item(i).alc2_paredes_anomalias);
                    $("#alc2_pisos_material").val(results.rows.item(i).alc2_pisos_material);
                    $("#alc2_pisos_estado").val(results.rows.item(i).alc2_pisos_estado);
                    $("#alc2_pisos_anomalias").val(results.rows.item(i).alc2_pisos_anomalias);
                    $("#alc2_techo_material").val(results.rows.item(i).alc2_techo_material);
                    $("#alc2_techo_estado").val(results.rows.item(i).alc2_techo_estado);
                    $("#alc2_techo_anomalias").val(results.rows.item(i).alc2_techo_anomalias);
                    $("#alc2_cielo_material").val(results.rows.item(i).alc2_cielo_material);
                    $("#alc2_cielo_estado").val(results.rows.item(i).alc2_cielo_estado);
                    $("#alc2_cielo_anomalias").val(results.rows.item(i).alc2_cielo_anomalias);
                    $("#alc2_estruct_material").val(results.rows.item(i).alc2_estruct_material);
                    $("#alc2_estruct_estado").val(results.rows.item(i).alc2_estruct_estado);
                    $("#alc2_estruct_anomalias").val(results.rows.item(i).alc2_estruct_anomalias);
                    $("#alc2_panete_material").val(results.rows.item(i).alc2_panete_material);
                    $("#alc2_panete_estado").val(results.rows.item(i).alc2_panete_estado);
                    $("#alc2_panete_anomalias").val(results.rows.item(i).alc2_panete_anomalias);
                    $("#alc2_pintu_material").val(results.rows.item(i).alc2_pintu_material);
                    $("#alc2_pintu_estado").val(results.rows.item(i).alc2_pintu_estado);
                    $("#alc2_pintu_anomalias").val(results.rows.item(i).alc2_pintu_anomalias);
                    $("#alc2_ventana_material").val(results.rows.item(i).alc2_ventana_material);
                    $("#alc2_ventana_estado").val(results.rows.item(i).alc2_ventana_estado);
                    $("#alc2_ventana_anomalias").val(results.rows.item(i).alc2_ventana_anomalias);
                    $("#alc2_puerta_material").val(results.rows.item(i).alc2_puerta_material);
                    $("#alc2_puerta_estado").val(results.rows.item(i).alc2_puerta_estado);
                    $("#alc2_puerta_anomalias").val(results.rows.item(i).alc2_puerta_anomalias);
                    $("#alc3_paredes_material").val(results.rows.item(i).alc3_paredes_material);
                    $("#alc3_paredes_estado").val(results.rows.item(i).alc3_paredes_estado);
                    $("#alc3_paredes_anomalias").val(results.rows.item(i).alc3_paredes_anomalias);
                    $("#alc3_pisos_material").val(results.rows.item(i).alc3_pisos_material);
                    $("#alc3_pisos_estado").val(results.rows.item(i).alc3_pisos_estado);
                    $("#alc3_pisos_anomalias").val(results.rows.item(i).alc3_pisos_anomalias);
                    $("#alc3_techo_material").val(results.rows.item(i).alc3_techo_material);
                    $("#alc3_techo_estado").val(results.rows.item(i).alc3_techo_estado);
                    $("#alc3_techo_anomalias").val(results.rows.item(i).alc3_techo_anomalias);
                    $("#alc3_cielo_material").val(results.rows.item(i).alc3_cielo_material);
                    $("#alc3_cielo_estado").val(results.rows.item(i).alc3_cielo_estado);
                    $("#alc3_cielo_anomalias").val(results.rows.item(i).alc3_cielo_anomalias);
                    $("#alc3_estruct_material").val(results.rows.item(i).alc3_estruct_material);
                    $("#alc3_estruct_estado").val(results.rows.item(i).alc3_estruct_estado);
                    $("#alc3_estruct_anomalias").val(results.rows.item(i).alc3_estruct_anomalias);
                    $("#alc3_panete_material").val(results.rows.item(i).alc3_panete_material);
                    $("#alc3_panete_estado").val(results.rows.item(i).alc3_panete_estado);
                    $("#alc3_panete_anomalias").val(results.rows.item(i).alc3_panete_anomalias);
                    $("#alc3_pintu_material").val(results.rows.item(i).alc3_pintu_material);
                    $("#alc3_pintu_estado").val(results.rows.item(i).alc3_pintu_estado);
                    $("#alc3_pintu_anomalias").val(results.rows.item(i).alc3_pintu_anomalias);
                    $("#alc3_ventana_material").val(results.rows.item(i).alc3_ventana_material);
                    $("#alc3_ventana_estado").val(results.rows.item(i).alc3_ventana_estado);
                    $("#alc3_ventana_anomalias").val(results.rows.item(i).alc3_ventana_anomalias);
                    $("#alc3_puerta_material").val(results.rows.item(i).alc3_puerta_material);
                    $("#alc3_puerta_estado").val(results.rows.item(i).alc3_puerta_estado);
                    $("#alc3_puerta_anomalias").val(results.rows.item(i).alc3_puerta_anomalias);
                    $("#alc4_paredes_material").val(results.rows.item(i).alc4_paredes_material);
                    $("#alc4_paredes_estado").val(results.rows.item(i).alc4_paredes_estado);
                    $("#alc4_paredes_anomalias").val(results.rows.item(i).alc4_paredes_anomalias);
                    $("#alc4_pisos_material").val(results.rows.item(i).alc4_pisos_material);
                    $("#alc4_pisos_estado").val(results.rows.item(i).alc4_pisos_estado);
                    $("#alc4_pisos_anomalias").val(results.rows.item(i).alc4_pisos_anomalias);
                    $("#alc4_techo_material").val(results.rows.item(i).alc4_techo_material);
                    $("#alc4_techo_estado").val(results.rows.item(i).alc4_techo_estado);
                    $("#alc4_techo_anomalias").val(results.rows.item(i).alc4_techo_anomalias);
                    $("#alc4_cielo_material").val(results.rows.item(i).alc4_cielo_material);
                    $("#alc4_cielo_estado").val(results.rows.item(i).alc4_cielo_estado);
                    $("#alc4_cielo_anomalias").val(results.rows.item(i).alc4_cielo_anomalias);
                    $("#alc4_estruct_material").val(results.rows.item(i).alc4_estruct_material);
                    $("#alc4_estruct_estado").val(results.rows.item(i).alc4_estruct_estado);
                    $("#alc4_estruct_anomalias").val(results.rows.item(i).alc4_estruct_anomalias);
                    $("#alc4_panete_material").val(results.rows.item(i).alc4_panete_material);
                    $("#alc4_panete_estado").val(results.rows.item(i).alc4_panete_estado);
                    $("#alc4_panete_anomalias").val(results.rows.item(i).alc4_panete_anomalias);
                    $("#alc4_pintu_material").val(results.rows.item(i).alc4_pintu_material);
                    $("#alc4_pintu_estado").val(results.rows.item(i).alc4_pintu_estado);
                    $("#alc4_pintu_anomalias").val(results.rows.item(i).alc4_pintu_anomalias);
                    $("#alc4_ventana_material").val(results.rows.item(i).alc4_ventana_material);
                    $("#alc4_ventana_estado").val(results.rows.item(i).alc4_ventana_estado);
                    $("#alc4_ventana_anomalias").val(results.rows.item(i).alc4_ventana_anomalias);
                    $("#alc4_puerta_material").val(results.rows.item(i).alc4_puerta_material);
                    $("#alc4_puerta_estado").val(results.rows.item(i).alc4_puerta_estado);
                    $("#alc4_puerta_anomalias").val(results.rows.item(i).alc4_puerta_anomalias);
                    $("#alc5_paredes_material").val(results.rows.item(i).alc5_paredes_material);
                    $("#alc5_paredes_estado").val(results.rows.item(i).alc5_paredes_estado);
                    $("#alc5_paredes_anomalias").val(results.rows.item(i).alc5_paredes_anomalias);
                    $("#alc5_pisos_material").val(results.rows.item(i).alc5_pisos_material);
                    $("#alc5_pisos_estado").val(results.rows.item(i).alc5_pisos_estado);
                    $("#alc5_pisos_anomalias").val(results.rows.item(i).alc5_pisos_anomalias);
                    $("#alc5_techo_material").val(results.rows.item(i).alc5_techo_material);
                    $("#alc5_techo_estado").val(results.rows.item(i).alc5_techo_estado);
                    $("#alc5_techo_anomalias").val(results.rows.item(i).alc5_techo_anomalias);
                    $("#alc5_cielo_material").val(results.rows.item(i).alc5_cielo_material);
                    $("#alc5_cielo_estado").val(results.rows.item(i).alc5_cielo_estado);
                    $("#alc5_cielo_anomalias").val(results.rows.item(i).alc5_cielo_anomalias);
                    $("#alc5_estruct_material").val(results.rows.item(i).alc5_estruct_material);
                    $("#alc5_estruct_estado").val(results.rows.item(i).alc5_estruct_estado);
                    $("#alc5_estruct_anomalias").val(results.rows.item(i).alc5_estruct_anomalias);
                    $("#alc5_panete_material").val(results.rows.item(i).alc5_panete_material);
                    $("#alc5_panete_estado").val(results.rows.item(i).alc5_panete_estado);
                    $("#alc5_panete_anomalias").val(results.rows.item(i).alc5_panete_anomalias);
                    $("#alc5_pintu_material").val(results.rows.item(i).alc5_pintu_material);
                    $("#alc5_pintu_estado").val(results.rows.item(i).alc5_pintu_estado);
                    $("#alc5_pintu_anomalias").val(results.rows.item(i).alc5_pintu_anomalias);
                    $("#alc5_ventana_material").val(results.rows.item(i).alc5_ventana_material);
                    $("#alc5_ventana_estado").val(results.rows.item(i).alc5_ventana_estado);
                    $("#alc5_ventana_anomalias").val(results.rows.item(i).alc5_ventana_anomalias);
                    $("#alc5_puerta_material").val(results.rows.item(i).alc5_puerta_material);
                    $("#alc5_puerta_estado").val(results.rows.item(i).alc5_puerta_estado);
                    $("#alc5_puerta_anomalias").val(results.rows.item(i).alc5_puerta_anomalias);
                    $("#sal1_paredes_material").val(results.rows.item(i).sal1_paredes_material);
                    $("#sal1_paredes_estado").val(results.rows.item(i).sal1_paredes_estado);
                    $("#sal1_paredes_anomalias").val(results.rows.item(i).sal1_paredes_anomalias);
                    $("#sal1_pisos_material").val(results.rows.item(i).sal1_pisos_material);
                    $("#sal1_pisos_estado").val(results.rows.item(i).sal1_pisos_estado);
                    $("#sal1_pisos_anomalias").val(results.rows.item(i).sal1_pisos_anomalias);
                    $("#sal1_techo_material").val(results.rows.item(i).sal1_techo_material);
                    $("#sal1_techo_estado").val(results.rows.item(i).sal1_techo_estado);
                    $("#sal1_techo_anomalias").val(results.rows.item(i).sal1_techo_anomalias);
                    $("#sal1_cielo_material").val(results.rows.item(i).sal1_cielo_material);
                    $("#sal1_cielo_estado").val(results.rows.item(i).sal1_cielo_estado);
                    $("#sal1_cielo_anomalias").val(results.rows.item(i).sal1_cielo_anomalias);
                    $("#sal1_estruct_material").val(results.rows.item(i).sal1_estruct_material);
                    $("#sal1_estruct_estado").val(results.rows.item(i).sal1_estruct_estado);
                    $("#sal1_estruct_anomalias").val(results.rows.item(i).sal1_estruct_anomalias);
                    $("#sal1_panete_material").val(results.rows.item(i).sal1_panete_material);
                    $("#sal1_panete_estado").val(results.rows.item(i).sal1_panete_estado);
                    $("#sal1_panete_anomalias").val(results.rows.item(i).sal1_panete_anomalias);
                    $("#sal1_pintu_material").val(results.rows.item(i).sal1_pintu_material);
                    $("#sal1_pintu_estado").val(results.rows.item(i).sal1_pintu_estado);
                    $("#sal1_pintu_anomalias").val(results.rows.item(i).sal1_pintu_anomalias);
                    $("#sal1_ventana_material").val(results.rows.item(i).sal1_ventana_material);
                    $("#sal1_ventana_estado").val(results.rows.item(i).sal1_ventana_estado);
                    $("#sal1_ventana_anomalias").val(results.rows.item(i).sal1_ventana_anomalias);
                    $("#sal1_puerta_material").val(results.rows.item(i).sal1_puerta_material);
                    $("#sal1_puerta_estado").val(results.rows.item(i).sal1_puerta_estado);
                    $("#sal1_puerta_anomalias").val(results.rows.item(i).sal1_puerta_anomalias);
                    $("#sal2_paredes_material").val(results.rows.item(i).sal2_paredes_material);
                    $("#sal2_paredes_estado").val(results.rows.item(i).sal2_paredes_estado);
                    $("#sal2_paredes_anomalias").val(results.rows.item(i).sal2_paredes_anomalias);
                    $("#sal2_pisos_material").val(results.rows.item(i).sal2_pisos_material);
                    $("#sal2_pisos_estado").val(results.rows.item(i).sal2_pisos_estado);
                    $("#sal2_pisos_anomalias").val(results.rows.item(i).sal2_pisos_anomalias);
                    $("#sal2_techo_material").val(results.rows.item(i).sal2_techo_material);
                    $("#sal2_techo_estado").val(results.rows.item(i).sal2_techo_estado);
                    $("#sal2_techo_anomalias").val(results.rows.item(i).sal2_techo_anomalias);
                    $("#sal2_cielo_material").val(results.rows.item(i).sal2_cielo_material);
                    $("#sal2_cielo_estado").val(results.rows.item(i).sal2_cielo_estado);
                    $("#sal2_cielo_anomalias").val(results.rows.item(i).sal2_cielo_anomalias);
                    $("#sal2_estruct_material").val(results.rows.item(i).sal2_estruct_material);
                    $("#sal2_estruct_estado").val(results.rows.item(i).sal2_estruct_estado);
                    $("#sal2_estruct_anomalias").val(results.rows.item(i).sal2_estruct_anomalias);
                    $("#sal2_panete_material").val(results.rows.item(i).sal2_panete_material);
                    $("#sal2_panete_estado").val(results.rows.item(i).sal2_panete_estado);
                    $("#sal2_panete_anomalias").val(results.rows.item(i).sal2_panete_anomalias);
                    $("#sal2_pintu_material").val(results.rows.item(i).sal2_pintu_material);
                    $("#sal2_pintu_estado").val(results.rows.item(i).sal2_pintu_estado);
                    $("#sal2_pintu_anomalias").val(results.rows.item(i).sal2_pintu_anomalias);
                    $("#sal2_ventana_material").val(results.rows.item(i).sal2_ventana_material);
                    $("#sal2_ventana_estado").val(results.rows.item(i).sal2_ventana_estado);
                    $("#sal2_ventana_anomalias").val(results.rows.item(i).sal2_ventana_anomalias);
                    $("#sal2_puerta_material").val(results.rows.item(i).sal2_puerta_material);
                    $("#sal2_puerta_estado").val(results.rows.item(i).sal2_puerta_estado);
                    $("#sal2_puerta_anomalias").val(results.rows.item(i).sal2_puerta_anomalias);
                    $("#come1_paredes_material").val(results.rows.item(i).come1_paredes_material);
                    $("#come1_paredes_estado").val(results.rows.item(i).come1_paredes_estado);
                    $("#come1_paredes_anomalias").val(results.rows.item(i).come1_paredes_anomalias);
                    $("#come1_pisos_material").val(results.rows.item(i).come1_pisos_material);
                    $("#come1_pisos_estado").val(results.rows.item(i).come1_pisos_estado);
                    $("#come1_pisos_anomalias").val(results.rows.item(i).come1_pisos_anomalias);
                    $("#come1_techo_material").val(results.rows.item(i).come1_techo_material);
                    $("#come1_techo_estado").val(results.rows.item(i).come1_techo_estado);
                    $("#come1_techo_anomalias").val(results.rows.item(i).come1_techo_anomalias);
                    $("#come1_cielo_material").val(results.rows.item(i).come1_cielo_material);
                    $("#come1_cielo_estado").val(results.rows.item(i).come1_cielo_estado);
                    $("#come1_cielo_anomalias").val(results.rows.item(i).come1_cielo_anomalias);
                    $("#come1_estruct_material").val(results.rows.item(i).come1_estruct_material);
                    $("#come1_estruct_estado").val(results.rows.item(i).come1_estruct_estado);
                    $("#come1_estruct_anomalias").val(results.rows.item(i).come1_estruct_anomalias);
                    $("#come1_panete_material").val(results.rows.item(i).come1_panete_material);
                    $("#come1_panete_estado").val(results.rows.item(i).come1_panete_estado);
                    $("#come1_panete_anomalias").val(results.rows.item(i).come1_panete_anomalias);
                    $("#come1_pintu_material").val(results.rows.item(i).come1_pintu_material);
                    $("#come1_pintu_estado").val(results.rows.item(i).come1_pintu_estado);
                    $("#come1_pintu_anomalias").val(results.rows.item(i).come1_pintu_anomalias);
                    $("#come1_ventana_material").val(results.rows.item(i).come1_ventana_material);
                    $("#come1_ventana_estado").val(results.rows.item(i).come1_ventana_estado);
                    $("#come1_ventana_anomalias").val(results.rows.item(i).come1_ventana_anomalias);
                    $("#come1_puerta_material").val(results.rows.item(i).come1_puerta_material);
                    $("#come1_puerta_estado").val(results.rows.item(i).come1_puerta_estado);
                    $("#come1_puerta_anomalias").val(results.rows.item(i).come1_puerta_anomalias);
                    $("#come2_paredes_material").val(results.rows.item(i).come2_paredes_material);
                    $("#come2_paredes_estado").val(results.rows.item(i).come2_paredes_estado);
                    $("#come2_paredes_anomalias").val(results.rows.item(i).come2_paredes_anomalias);
                    $("#come2_pisos_material").val(results.rows.item(i).come2_pisos_material);
                    $("#come2_pisos_estado").val(results.rows.item(i).come2_pisos_estado);
                    $("#come2_pisos_anomalias").val(results.rows.item(i).come2_pisos_anomalias);
                    $("#come2_techo_material").val(results.rows.item(i).come2_techo_material);
                    $("#come2_techo_estado").val(results.rows.item(i).come2_techo_estado);
                    $("#come2_techo_anomalias").val(results.rows.item(i).come2_techo_anomalias);
                    $("#come2_cielo_material").val(results.rows.item(i).come2_cielo_material);
                    $("#come2_cielo_estado").val(results.rows.item(i).come2_cielo_estado);
                    $("#come2_cielo_anomalias").val(results.rows.item(i).come2_cielo_anomalias);
                    $("#come2_estruct_material").val(results.rows.item(i).come2_estruct_material);
                    $("#come2_estruct_estado").val(results.rows.item(i).come2_estruct_estado);
                    $("#come2_estruct_anomalias").val(results.rows.item(i).come2_estruct_anomalias);
                    $("#come2_panete_material").val(results.rows.item(i).come2_panete_material);
                    $("#come2_panete_estado").val(results.rows.item(i).come2_panete_estado);
                    $("#come2_panete_anomalias").val(results.rows.item(i).come2_panete_anomalias);
                    $("#come2_pintu_material").val(results.rows.item(i).come2_pintu_material);
                    $("#come2_pintu_estado").val(results.rows.item(i).come2_pintu_estado);
                    $("#come2_pintu_anomalias").val(results.rows.item(i).come2_pintu_anomalias);
                    $("#come2_ventana_material").val(results.rows.item(i).come2_ventana_material);
                    $("#come2_ventana_estado").val(results.rows.item(i).come2_ventana_estado);
                    $("#come2_ventana_anomalias").val(results.rows.item(i).come2_ventana_anomalias);
                    $("#come2_puerta_material").val(results.rows.item(i).come2_puerta_material);
                    $("#come2_puerta_estado").val(results.rows.item(i).come2_puerta_estado);
                    $("#come2_puerta_anomalias").val(results.rows.item(i).come2_puerta_anomalias);
                    $("#coci1_paredes_material").val(results.rows.item(i).coci1_paredes_material);
                    $("#coci1_paredes_estado").val(results.rows.item(i).coci1_paredes_estado);
                    $("#coci1_paredes_anomalias").val(results.rows.item(i).coci1_paredes_anomalias);
                    $("#coci1_pisos_material").val(results.rows.item(i).coci1_pisos_material);
                    $("#coci1_pisos_estado").val(results.rows.item(i).coci1_pisos_estado);
                    $("#coci1_pisos_anomalias").val(results.rows.item(i).coci1_pisos_anomalias);
                    $("#coci1_techo_material").val(results.rows.item(i).coci1_techo_material);
                    $("#coci1_techo_estado").val(results.rows.item(i).coci1_techo_estado);
                    $("#coci1_techo_anomalias").val(results.rows.item(i).coci1_techo_anomalias);
                    $("#coci1_cielo_material").val(results.rows.item(i).coci1_cielo_material);
                    $("#coci1_cielo_estado").val(results.rows.item(i).coci1_cielo_estado);
                    $("#coci1_cielo_anomalias").val(results.rows.item(i).coci1_cielo_anomalias);
                    $("#coci1_estruct_material").val(results.rows.item(i).coci1_estruct_material);
                    $("#coci1_estruct_estado").val(results.rows.item(i).coci1_estruct_estado);
                    $("#coci1_estruct_anomalias").val(results.rows.item(i).coci1_estruct_anomalias);
                    $("#coci1_panete_material").val(results.rows.item(i).coci1_panete_material);
                    $("#coci1_panete_estado").val(results.rows.item(i).coci1_panete_estado);
                    $("#coci1_panete_anomalias").val(results.rows.item(i).coci1_panete_anomalias);
                    $("#coci1_pintu_material").val(results.rows.item(i).coci1_pintu_material);
                    $("#coci1_pintu_estado").val(results.rows.item(i).coci1_pintu_estado);
                    $("#coci1_pintu_anomalias").val(results.rows.item(i).coci1_pintu_anomalias);
                    $("#coci1_ventana_material").val(results.rows.item(i).coci1_ventana_material);
                    $("#coci1_ventana_estado").val(results.rows.item(i).coci1_ventana_estado);
                    $("#coci1_ventana_anomalias").val(results.rows.item(i).coci1_ventana_anomalias);
                    $("#coci1_puerta_material").val(results.rows.item(i).coci1_puerta_material);
                    $("#coci1_puerta_estado").val(results.rows.item(i).coci1_puerta_estado);
                    $("#coci1_puerta_anomalias").val(results.rows.item(i).coci1_puerta_anomalias);
                    $("#coci2_paredes_material").val(results.rows.item(i).coci2_paredes_material);
                    $("#coci2_paredes_estado").val(results.rows.item(i).coci2_paredes_estado);
                    $("#coci2_paredes_anomalias").val(results.rows.item(i).coci2_paredes_anomalias);
                    $("#coci2_pisos_material").val(results.rows.item(i).coci2_pisos_material);
                    $("#coci2_pisos_estado").val(results.rows.item(i).coci2_pisos_estado);
                    $("#coci2_pisos_anomalias").val(results.rows.item(i).coci2_pisos_anomalias);
                    $("#coci2_techo_material").val(results.rows.item(i).coci2_techo_material);
                    $("#coci2_techo_estado").val(results.rows.item(i).coci2_techo_estado);
                    $("#coci2_techo_anomalias").val(results.rows.item(i).coci2_techo_anomalias);
                    $("#coci2_cielo_material").val(results.rows.item(i).coci2_cielo_material);
                    $("#coci2_cielo_estado").val(results.rows.item(i).coci2_cielo_estado);
                    $("#coci2_cielo_anomalias").val(results.rows.item(i).coci2_cielo_anomalias);
                    $("#coci2_estruct_material").val(results.rows.item(i).coci2_estruct_material);
                    $("#coci2_estruct_estado").val(results.rows.item(i).coci2_estruct_estado);
                    $("#coci2_estruct_anomalias").val(results.rows.item(i).coci2_estruct_anomalias);
                    $("#coci2_panete_material").val(results.rows.item(i).coci2_panete_material);
                    $("#coci2_panete_estado").val(results.rows.item(i).coci2_panete_estado);
                    $("#coci2_panete_anomalias").val(results.rows.item(i).coci2_panete_anomalias);
                    $("#coci2_pintu_material").val(results.rows.item(i).coci2_pintu_material);
                    $("#coci2_pintu_estado").val(results.rows.item(i).coci2_pintu_estado);
                    $("#coci2_pintu_anomalias").val(results.rows.item(i).coci2_pintu_anomalias);
                    $("#coci2_ventana_material").val(results.rows.item(i).coci2_ventana_material);
                    $("#coci2_ventana_estado").val(results.rows.item(i).coci2_ventana_estado);
                    $("#coci2_ventana_anomalias").val(results.rows.item(i).coci2_ventana_anomalias);
                    $("#coci2_puerta_material").val(results.rows.item(i).coci2_puerta_material);
                    $("#coci2_puerta_estado").val(results.rows.item(i).coci2_puerta_estado);
                    $("#coci2_puerta_anomalias").val(results.rows.item(i).coci2_puerta_anomalias);
                    $("#ban1_paredes_material").val(results.rows.item(i).ban1_paredes_material);
                    $("#ban1_paredes_estado").val(results.rows.item(i).ban1_paredes_estado);
                    $("#ban1_paredes_anomalias").val(results.rows.item(i).ban1_paredes_anomalias);
                    $("#ban1_pisos_material").val(results.rows.item(i).ban1_pisos_material);
                    $("#ban1_pisos_estado").val(results.rows.item(i).ban1_pisos_estado);
                    $("#ban1_pisos_anomalias").val(results.rows.item(i).ban1_pisos_anomalias);
                    $("#ban1_techo_material").val(results.rows.item(i).ban1_techo_material);
                    $("#ban1_techo_estado").val(results.rows.item(i).ban1_techo_estado);
                    $("#ban1_techo_anomalias").val(results.rows.item(i).ban1_techo_anomalias);
                    $("#ban1_cielo_material").val(results.rows.item(i).ban1_cielo_material);
                    $("#ban1_cielo_estado").val(results.rows.item(i).ban1_cielo_estado);
                    $("#ban1_cielo_anomalias").val(results.rows.item(i).ban1_cielo_anomalias);
                    $("#ban1_estruct_material").val(results.rows.item(i).ban1_estruct_material);
                    $("#ban1_estruct_estado").val(results.rows.item(i).ban1_estruct_estado);
                    $("#ban1_estruct_anomalias").val(results.rows.item(i).ban1_estruct_anomalias);
                    $("#ban1_panete_material").val(results.rows.item(i).ban1_panete_material);
                    $("#ban1_panete_estado").val(results.rows.item(i).ban1_panete_estado);
                    $("#ban1_panete_anomalias").val(results.rows.item(i).ban1_panete_anomalias);
                    $("#ban1_pintu_material").val(results.rows.item(i).ban1_pintu_material);
                    $("#ban1_pintu_estado").val(results.rows.item(i).ban1_pintu_estado);
                    $("#ban1_pintu_anomalias").val(results.rows.item(i).ban1_pintu_anomalias);
                    $("#ban1_ventana_material").val(results.rows.item(i).ban1_ventana_material);
                    $("#ban1_ventana_estado").val(results.rows.item(i).ban1_ventana_estado);
                    $("#ban1_ventana_anomalias").val(results.rows.item(i).ban1_ventana_anomalias);
                    $("#ban1_puerta_material").val(results.rows.item(i).ban1_puerta_material);
                    $("#ban1_puerta_estado").val(results.rows.item(i).ban1_puerta_estado);
                    $("#ban1_puerta_anomalias").val(results.rows.item(i).ban1_puerta_anomalias);
                    $("#ban2_paredes_material").val(results.rows.item(i).ban2_paredes_material);
                    $("#ban2_paredes_estado").val(results.rows.item(i).ban2_paredes_estado);
                    $("#ban2_paredes_anomalias").val(results.rows.item(i).ban2_paredes_anomalias);
                    $("#ban2_pisos_material").val(results.rows.item(i).ban2_pisos_material);
                    $("#ban2_pisos_estado").val(results.rows.item(i).ban2_pisos_estado);
                    $("#ban2_pisos_anomalias").val(results.rows.item(i).ban2_pisos_anomalias);
                    $("#ban2_techo_material").val(results.rows.item(i).ban2_techo_material);
                    $("#ban2_techo_estado").val(results.rows.item(i).ban2_techo_estado);
                    $("#ban2_techo_anomalias").val(results.rows.item(i).ban2_techo_anomalias);
                    $("#ban2_cielo_material").val(results.rows.item(i).ban2_cielo_material);
                    $("#ban2_cielo_estado").val(results.rows.item(i).ban2_cielo_estado);
                    $("#ban2_cielo_anomalias").val(results.rows.item(i).ban2_cielo_anomalias);
                    $("#ban2_estruct_material").val(results.rows.item(i).ban2_estruct_material);
                    $("#ban2_estruct_estado").val(results.rows.item(i).ban2_estruct_estado);
                    $("#ban2_estruct_anomalias").val(results.rows.item(i).ban2_estruct_anomalias);
                    $("#ban2_panete_material").val(results.rows.item(i).ban2_panete_material);
                    $("#ban2_panete_estado").val(results.rows.item(i).ban2_panete_estado);
                    $("#ban2_panete_anomalias").val(results.rows.item(i).ban2_panete_anomalias);
                    $("#ban2_pintu_material").val(results.rows.item(i).ban2_pintu_material);
                    $("#ban2_pintu_estado").val(results.rows.item(i).ban2_pintu_estado);
                    $("#ban2_pintu_anomalias").val(results.rows.item(i).ban2_pintu_anomalias);
                    $("#ban2_ventana_material").val(results.rows.item(i).ban2_ventana_material);
                    $("#ban2_ventana_estado").val(results.rows.item(i).ban2_ventana_estado);
                    $("#ban2_ventana_anomalias").val(results.rows.item(i).ban2_ventana_anomalias);
                    $("#ban2_puerta_material").val(results.rows.item(i).ban2_puerta_material);
                    $("#ban2_puerta_estado").val(results.rows.item(i).ban2_puerta_estado);
                    $("#ban2_puerta_anomalias").val(results.rows.item(i).ban2_puerta_anomalias);
                    $("#ban3_paredes_material").val(results.rows.item(i).ban3_paredes_material);
                    $("#ban3_paredes_estado").val(results.rows.item(i).ban3_paredes_estado);
                    $("#ban3_paredes_anomalias").val(results.rows.item(i).ban3_paredes_anomalias);
                    $("#ban3_pisos_material").val(results.rows.item(i).ban3_pisos_material);
                    $("#ban3_pisos_estado").val(results.rows.item(i).ban3_pisos_estado);
                    $("#ban3_pisos_anomalias").val(results.rows.item(i).ban3_pisos_anomalias);
                    $("#ban3_techo_material").val(results.rows.item(i).ban3_techo_material);
                    $("#ban3_techo_estado").val(results.rows.item(i).ban3_techo_estado);
                    $("#ban3_techo_anomalias").val(results.rows.item(i).ban3_techo_anomalias);
                    $("#ban3_cielo_material").val(results.rows.item(i).ban3_cielo_material);
                    $("#ban3_cielo_estado").val(results.rows.item(i).ban3_cielo_estado);
                    $("#ban3_cielo_anomalias").val(results.rows.item(i).ban3_cielo_anomalias);
                    $("#ban3_estruct_material").val(results.rows.item(i).ban3_estruct_material);
                    $("#ban3_estruct_estado").val(results.rows.item(i).ban3_estruct_estado);
                    $("#ban3_estruct_anomalias").val(results.rows.item(i).ban3_estruct_anomalias);
                    $("#ban3_panete_material").val(results.rows.item(i).ban3_panete_material);
                    $("#ban3_panete_estado").val(results.rows.item(i).ban3_panete_estado);
                    $("#ban3_panete_anomalias").val(results.rows.item(i).ban3_panete_anomalias);
                    $("#ban3_pintu_material").val(results.rows.item(i).ban3_pintu_material);
                    $("#ban3_pintu_estado").val(results.rows.item(i).ban3_pintu_estado);
                    $("#ban3_pintu_anomalias").val(results.rows.item(i).ban3_pintu_anomalias);
                    $("#ban3_ventana_material").val(results.rows.item(i).ban3_ventana_material);
                    $("#ban3_ventana_estado").val(results.rows.item(i).ban3_ventana_estado);
                    $("#ban3_ventana_anomalias").val(results.rows.item(i).ban3_ventana_anomalias);
                    $("#ban3_puerta_material").val(results.rows.item(i).ban3_puerta_material);
                    $("#ban3_puerta_estado").val(results.rows.item(i).ban3_puerta_estado);
                    $("#ban3_puerta_anomalias").val(results.rows.item(i).ban3_puerta_anomalias);
                    $("#ban4_paredes_material").val(results.rows.item(i).ban4_paredes_material);
                    $("#ban4_paredes_estado").val(results.rows.item(i).ban4_paredes_estado);
                    $("#ban4_paredes_anomalias").val(results.rows.item(i).ban4_paredes_anomalias);
                    $("#ban4_pisos_material").val(results.rows.item(i).ban4_pisos_material);
                    $("#ban4_pisos_estado").val(results.rows.item(i).ban4_pisos_estado);
                    $("#ban4_pisos_anomalias").val(results.rows.item(i).ban4_pisos_anomalias);
                    $("#ban4_techo_material").val(results.rows.item(i).ban4_techo_material);
                    $("#ban4_techo_estado").val(results.rows.item(i).ban4_techo_estado);
                    $("#ban4_techo_anomalias").val(results.rows.item(i).ban4_techo_anomalias);
                    $("#ban4_cielo_material").val(results.rows.item(i).ban4_cielo_material);
                    $("#ban4_cielo_estado").val(results.rows.item(i).ban4_cielo_estado);
                    $("#ban4_cielo_anomalias").val(results.rows.item(i).ban4_cielo_anomalias);
                    $("#ban4_estruct_material").val(results.rows.item(i).ban4_estruct_material);
                    $("#ban4_estruct_estado").val(results.rows.item(i).ban4_estruct_estado);
                    $("#ban4_estruct_anomalias").val(results.rows.item(i).ban4_estruct_anomalias);
                    $("#ban4_panete_material").val(results.rows.item(i).ban4_panete_material);
                    $("#ban4_panete_estado").val(results.rows.item(i).ban4_panete_estado);
                    $("#ban4_panete_anomalias").val(results.rows.item(i).ban4_panete_anomalias);
                    $("#ban4_pintu_material").val(results.rows.item(i).ban4_pintu_material);
                    $("#ban4_pintu_estado").val(results.rows.item(i).ban4_pintu_estado);
                    $("#ban4_pintu_anomalias").val(results.rows.item(i).ban4_pintu_anomalias);
                    $("#ban4_ventana_material").val(results.rows.item(i).ban4_ventana_material);
                    $("#ban4_ventana_estado").val(results.rows.item(i).ban4_ventana_estado);
                    $("#ban4_ventana_anomalias").val(results.rows.item(i).ban4_ventana_anomalias);
                    $("#ban4_puerta_material").val(results.rows.item(i).ban4_puerta_material);
                    $("#ban4_puerta_estado").val(results.rows.item(i).ban4_puerta_estado);
                    $("#ban4_puerta_anomalias").val(results.rows.item(i).ban4_puerta_anomalias);
                    $("#corr1_paredes_material").val(results.rows.item(i).corr1_paredes_material);
                    $("#corr1_paredes_estado").val(results.rows.item(i).corr1_paredes_estado);
                    $("#corr1_paredes_anomalias").val(results.rows.item(i).corr1_paredes_anomalias);
                    $("#corr1_pisos_material").val(results.rows.item(i).corr1_pisos_material);
                    $("#corr1_pisos_estado").val(results.rows.item(i).corr1_pisos_estado);
                    $("#corr1_pisos_anomalias").val(results.rows.item(i).corr1_pisos_anomalias);
                    $("#corr1_techo_material").val(results.rows.item(i).corr1_techo_material);
                    $("#corr1_techo_estado").val(results.rows.item(i).corr1_techo_estado);
                    $("#corr1_techo_anomalias").val(results.rows.item(i).corr1_techo_anomalias);
                    $("#corr1_cielo_material").val(results.rows.item(i).corr1_cielo_material);
                    $("#corr1_cielo_estado").val(results.rows.item(i).corr1_cielo_estado);
                    $("#corr1_cielo_anomalias").val(results.rows.item(i).corr1_cielo_anomalias);
                    $("#corr1_estruct_material").val(results.rows.item(i).corr1_estruct_material);
                    $("#corr1_estruct_estado").val(results.rows.item(i).corr1_estruct_estado);
                    $("#corr1_estruct_anomalias").val(results.rows.item(i).corr1_estruct_anomalias);
                    $("#corr1_panete_material").val(results.rows.item(i).corr1_panete_material);
                    $("#corr1_panete_estado").val(results.rows.item(i).corr1_panete_estado);
                    $("#corr1_panete_anomalias").val(results.rows.item(i).corr1_panete_anomalias);
                    $("#corr1_pintu_material").val(results.rows.item(i).corr1_pintu_material);
                    $("#corr1_pintu_estado").val(results.rows.item(i).corr1_pintu_estado);
                    $("#corr1_pintu_anomalias").val(results.rows.item(i).corr1_pintu_anomalias);
                    $("#corr1_ventana_material").val(results.rows.item(i).corr1_ventana_material);
                    $("#corr1_ventana_estado").val(results.rows.item(i).corr1_ventana_estado);
                    $("#corr1_ventana_anomalias").val(results.rows.item(i).corr1_ventana_anomalias);
                    $("#corr1_puerta_material").val(results.rows.item(i).corr1_puerta_material);
                    $("#corr1_puerta_estado").val(results.rows.item(i).corr1_puerta_estado);
                    $("#corr1_puerta_anomalias").val(results.rows.item(i).corr1_puerta_anomalias);
                    $("#corr2_paredes_material").val(results.rows.item(i).corr2_paredes_material);
                    $("#corr2_paredes_estado").val(results.rows.item(i).corr2_paredes_estado);
                    $("#corr2_paredes_anomalias").val(results.rows.item(i).corr2_paredes_anomalias);
                    $("#corr2_pisos_material").val(results.rows.item(i).corr2_pisos_material);
                    $("#corr2_pisos_estado").val(results.rows.item(i).corr2_pisos_estado);
                    $("#corr2_pisos_anomalias").val(results.rows.item(i).corr2_pisos_anomalias);
                    $("#corr2_techo_material").val(results.rows.item(i).corr2_techo_material);
                    $("#corr2_techo_estado").val(results.rows.item(i).corr2_techo_estado);
                    $("#corr2_techo_anomalias").val(results.rows.item(i).corr2_techo_anomalias);
                    $("#corr2_cielo_material").val(results.rows.item(i).corr2_cielo_material);
                    $("#corr2_cielo_estado").val(results.rows.item(i).corr2_cielo_estado);
                    $("#corr2_cielo_anomalias").val(results.rows.item(i).corr2_cielo_anomalias);
                    $("#corr2_estruct_material").val(results.rows.item(i).corr2_estruct_material);
                    $("#corr2_estruct_estado").val(results.rows.item(i).corr2_estruct_estado);
                    $("#corr2_estruct_anomalias").val(results.rows.item(i).corr2_estruct_anomalias);
                    $("#corr2_panete_material").val(results.rows.item(i).corr2_panete_material);
                    $("#corr2_panete_estado").val(results.rows.item(i).corr2_panete_estado);
                    $("#corr2_panete_anomalias").val(results.rows.item(i).corr2_panete_anomalias);
                    $("#corr2_pintu_material").val(results.rows.item(i).corr2_pintu_material);
                    $("#corr2_pintu_estado").val(results.rows.item(i).corr2_pintu_estado);
                    $("#corr2_pintu_anomalias").val(results.rows.item(i).corr2_pintu_anomalias);
                    $("#corr2_ventana_material").val(results.rows.item(i).corr2_ventana_material);
                    $("#corr2_ventana_estado").val(results.rows.item(i).corr2_ventana_estado);
                    $("#corr2_ventana_anomalias").val(results.rows.item(i).corr2_ventana_anomalias);
                    $("#corr2_puerta_material").val(results.rows.item(i).corr2_puerta_material);
                    $("#corr2_puerta_estado").val(results.rows.item(i).corr2_puerta_estado);
                    $("#corr2_puerta_anomalias").val(results.rows.item(i).corr2_puerta_anomalias);
                    $("#gar2_paredes_material").val(results.rows.item(i).gar2_paredes_material);
                    $("#gar2_paredes_estado").val(results.rows.item(i).gar2_paredes_estado);
                    $("#gar2_paredes_anomalias").val(results.rows.item(i).gar2_paredes_anomalias);
                    $("#gar2_pisos_material").val(results.rows.item(i).gar2_pisos_material);
                    $("#gar2_pisos_estado").val(results.rows.item(i).gar2_pisos_estado);
                    $("#gar2_pisos_anomalias").val(results.rows.item(i).gar2_pisos_anomalias);
                    $("#gar2_techo_material").val(results.rows.item(i).gar2_techo_material);
                    $("#gar2_techo_estado").val(results.rows.item(i).gar2_techo_estado);
                    $("#gar2_techo_anomalias").val(results.rows.item(i).gar2_techo_anomalias);
                    $("#gar2_cielo_material").val(results.rows.item(i).gar2_cielo_material);
                    $("#gar2_cielo_estado").val(results.rows.item(i).gar2_cielo_estado);
                    $("#gar2_cielo_anomalias").val(results.rows.item(i).gar2_cielo_anomalias);
                    $("#gar2_estruct_material").val(results.rows.item(i).gar2_estruct_material);
                    $("#gar2_estruct_estado").val(results.rows.item(i).gar2_estruct_estado);
                    $("#gar2_estruct_anomalias").val(results.rows.item(i).gar2_estruct_anomalias);
                    $("#gar2_panete_material").val(results.rows.item(i).gar2_panete_material);
                    $("#gar2_panete_estado").val(results.rows.item(i).gar2_panete_estado);
                    $("#gar2_panete_anomalias").val(results.rows.item(i).gar2_panete_anomalias);
                    $("#gar2_pintu_material").val(results.rows.item(i).gar2_pintu_material);
                    $("#gar2_pintu_estado").val(results.rows.item(i).gar2_pintu_estado);
                    $("#gar2_pintu_anomalias").val(results.rows.item(i).gar2_pintu_anomalias);
                    $("#gar2_ventana_material").val(results.rows.item(i).gar2_ventana_material);
                    $("#gar2_ventana_estado").val(results.rows.item(i).gar2_ventana_estado);
                    $("#gar2_ventana_anomalias").val(results.rows.item(i).gar2_ventana_anomalias);
                    $("#gar2_puerta_material").val(results.rows.item(i).gar2_puerta_material);
                    $("#gar2_puerta_estado").val(results.rows.item(i).gar2_puerta_estado);
                    $("#gar2_puerta_anomalias").val(results.rows.item(i).gar2_puerta_anomalias);
                    $("#bod_paredes_material").val(results.rows.item(i).bod_paredes_material);
                    $("#bod_paredes_estado").val(results.rows.item(i).bod_paredes_estado);
                    $("#bod_paredes_anomalias").val(results.rows.item(i).bod_paredes_anomalias);
                    $("#bod_pisos_material").val(results.rows.item(i).bod_pisos_material);
                    $("#bod_pisos_estado").val(results.rows.item(i).bod_pisos_estado);
                    $("#bod_pisos_anomalias").val(results.rows.item(i).bod_pisos_anomalias);
                    $("#bod_techo_material").val(results.rows.item(i).bod_techo_material);
                    $("#bod_techo_estado").val(results.rows.item(i).bod_techo_estado);
                    $("#bod_techo_anomalias").val(results.rows.item(i).bod_techo_anomalias);
                    $("#bod_cielo_material").val(results.rows.item(i).bod_cielo_material);
                    $("#bod_cielo_estado").val(results.rows.item(i).bod_cielo_estado);
                    $("#bod_cielo_anomalias").val(results.rows.item(i).bod_cielo_anomalias);
                    $("#bod_estruct_material").val(results.rows.item(i).bod_estruct_material);
                    $("#bod_estruct_estado").val(results.rows.item(i).bod_estruct_estado);
                    $("#bod_estruct_anomalias").val(results.rows.item(i).bod_estruct_anomalias);
                    $("#bod_panete_material").val(results.rows.item(i).bod_panete_material);
                    $("#bod_panete_estado").val(results.rows.item(i).bod_panete_estado);
                    $("#bod_panete_anomalias").val(results.rows.item(i).bod_panete_anomalias);
                    $("#bod_pintu_material").val(results.rows.item(i).bod_pintu_material);
                    $("#bod_pintu_estado").val(results.rows.item(i).bod_pintu_estado);
                    $("#bod_pintu_anomalias").val(results.rows.item(i).bod_pintu_anomalias);
                    $("#bod_ventana_material").val(results.rows.item(i).bod_ventana_material);
                    $("#bod_ventana_estado").val(results.rows.item(i).bod_ventana_estado);
                    $("#bod_ventana_anomalias").val(results.rows.item(i).bod_ventana_anomalias);
                    $("#bod_puerta_material").val(results.rows.item(i).bod_puerta_material);
                    $("#bod_puerta_estado").val(results.rows.item(i).bod_puerta_estado);
                    $("#bod_puerta_anomalias").val(results.rows.item(i).bod_puerta_anomalias);
                    $("#lav_paredes_material").val(results.rows.item(i).lav_paredes_material);
                    $("#lav_paredes_estado").val(results.rows.item(i).lav_paredes_estado);
                    $("#lav_paredes_anomalias").val(results.rows.item(i).lav_paredes_anomalias);
                    $("#lav_pisos_material").val(results.rows.item(i).lav_pisos_material);
                    $("#lav_pisos_estado").val(results.rows.item(i).lav_pisos_estado);
                    $("#lav_pisos_anomalias").val(results.rows.item(i).lav_pisos_anomalias);
                    $("#lav_techo_material").val(results.rows.item(i).lav_techo_material);
                    $("#lav_techo_estado").val(results.rows.item(i).lav_techo_estado);
                    $("#lav_techo_anomalias").val(results.rows.item(i).lav_techo_anomalias);
                    $("#lav_cielo_material").val(results.rows.item(i).lav_cielo_material);
                    $("#lav_cielo_estado").val(results.rows.item(i).lav_cielo_estado);
                    $("#lav_cielo_anomalias").val(results.rows.item(i).lav_cielo_anomalias);
                    $("#lav_estruct_material").val(results.rows.item(i).lav_estruct_material);
                    $("#lav_estruct_estado").val(results.rows.item(i).lav_estruct_estado);
                    $("#lav_estruct_anomalias").val(results.rows.item(i).lav_estruct_anomalias);
                    $("#lav_panete_material").val(results.rows.item(i).lav_panete_material);
                    $("#lav_panete_estado").val(results.rows.item(i).lav_panete_estado);
                    $("#lav_panete_anomalias").val(results.rows.item(i).lav_panete_anomalias);
                    $("#lav_pintu_material").val(results.rows.item(i).lav_pintu_material);
                    $("#lav_pintu_estado").val(results.rows.item(i).lav_pintu_estado);
                    $("#lav_pintu_anomalias").val(results.rows.item(i).lav_pintu_anomalias);
                    $("#lav_ventana_material").val(results.rows.item(i).lav_ventana_material);
                    $("#lav_ventana_estado").val(results.rows.item(i).lav_ventana_estado);
                    $("#lav_ventana_anomalias").val(results.rows.item(i).lav_ventana_anomalias);
                    $("#lav_puerta_material").val(results.rows.item(i).lav_puerta_material);
                    $("#lav_puerta_estado").val(results.rows.item(i).lav_puerta_estado);
                    $("#lav_puerta_anomalias").val(results.rows.item(i).lav_puerta_anomalias);
                    $("#tanq_paredes_material").val(results.rows.item(i).tanq_paredes_material);
                    $("#tanq_paredes_estado").val(results.rows.item(i).tanq_paredes_estado);
                    $("#tanq_paredes_anomalias").val(results.rows.item(i).tanq_paredes_anomalias);
                    $("#tanq_pisos_material").val(results.rows.item(i).tanq_pisos_material);
                    $("#tanq_pisos_estado").val(results.rows.item(i).tanq_pisos_estado);
                    $("#tanq_pisos_anomalias").val(results.rows.item(i).tanq_pisos_anomalias);
                    $("#tanq_techo_material").val(results.rows.item(i).tanq_techo_material);
                    $("#tanq_techo_estado").val(results.rows.item(i).tanq_techo_estado);
                    $("#tanq_techo_anomalias").val(results.rows.item(i).tanq_techo_anomalias);
                    $("#tanq_cielo_material").val(results.rows.item(i).tanq_cielo_material);
                    $("#tanq_cielo_estado").val(results.rows.item(i).tanq_cielo_estado);
                    $("#tanq_cielo_anomalias").val(results.rows.item(i).tanq_cielo_anomalias);
                    $("#tanq_estruct_material").val(results.rows.item(i).tanq_estruct_material);
                    $("#tanq_estruct_estado").val(results.rows.item(i).tanq_estruct_estado);
                    $("#tanq_estruct_anomalias").val(results.rows.item(i).tanq_estruct_anomalias);
                    $("#tanq_panete_material").val(results.rows.item(i).tanq_panete_material);
                    $("#tanq_panete_estado").val(results.rows.item(i).tanq_panete_estado);
                    $("#tanq_panete_anomalias").val(results.rows.item(i).tanq_panete_anomalias);
                    $("#tanq_pintu_material").val(results.rows.item(i).tanq_pintu_material);
                    $("#tanq_pintu_estado").val(results.rows.item(i).tanq_pintu_estado);
                    $("#tanq_pintu_anomalias").val(results.rows.item(i).tanq_pintu_anomalias);
                    $("#tanq_ventana_material").val(results.rows.item(i).tanq_ventana_material);
                    $("#tanq_ventana_estado").val(results.rows.item(i).tanq_ventana_estado);
                    $("#tanq_ventana_anomalias").val(results.rows.item(i).tanq_ventana_anomalias);
                    $("#tanq_puerta_material").val(results.rows.item(i).tanq_puerta_material);
                    $("#tanq_puerta_estado").val(results.rows.item(i).tanq_puerta_estado);
                    $("#tanq_puerta_anomalias").val(results.rows.item(i).tanq_puerta_anomalias);
                    $("#maq_paredes_material").val(results.rows.item(i).maq_paredes_material);
                    $("#maq_paredes_estado").val(results.rows.item(i).maq_paredes_estado);
                    $("#maq_paredes_anomalias").val(results.rows.item(i).maq_paredes_anomalias);
                    $("#maq_pisos_material").val(results.rows.item(i).maq_pisos_material);
                    $("#maq_pisos_estado").val(results.rows.item(i).maq_pisos_estado);
                    $("#maq_pisos_anomalias").val(results.rows.item(i).maq_pisos_anomalias);
                    $("#maq_techo_material").val(results.rows.item(i).maq_techo_material);
                    $("#maq_techo_estado").val(results.rows.item(i).maq_techo_estado);
                    $("#maq_techo_anomalias").val(results.rows.item(i).maq_techo_anomalias);
                    $("#maq_cielo_material").val(results.rows.item(i).maq_cielo_material);
                    $("#maq_cielo_estado").val(results.rows.item(i).maq_cielo_estado);
                    $("#maq_cielo_anomalias").val(results.rows.item(i).maq_cielo_anomalias);
                    $("#maq_estruct_material").val(results.rows.item(i).maq_estruct_material);
                    $("#maq_estruct_estado").val(results.rows.item(i).maq_estruct_estado);
                    $("#maq_estruct_anomalias").val(results.rows.item(i).maq_estruct_anomalias);
                    $("#maq_panete_material").val(results.rows.item(i).maq_panete_material);
                    $("#maq_panete_estado").val(results.rows.item(i).maq_panete_estado);
                    $("#maq_panete_anomalias").val(results.rows.item(i).maq_panete_anomalias);
                    $("#maq_pintu_material").val(results.rows.item(i).maq_pintu_material);
                    $("#maq_pintu_estado").val(results.rows.item(i).maq_pintu_estado);
                    $("#maq_pintu_anomalias").val(results.rows.item(i).maq_pintu_anomalias);
                    $("#maq_ventana_material").val(results.rows.item(i).maq_ventana_material);
                    $("#maq_ventana_estado").val(results.rows.item(i).maq_ventana_estado);
                    $("#maq_ventana_anomalias").val(results.rows.item(i).maq_ventana_anomalias);
                    $("#maq_puerta_material").val(results.rows.item(i).maq_puerta_material);
                    $("#maq_puerta_estado").val(results.rows.item(i).maq_puerta_estado);
                    $("#maq_puerta_anomalias").val(results.rows.item(i).maq_puerta_anomalias);
                    $("#pisc_paredes_material").val(results.rows.item(i).pisc_paredes_material);
                    $("#pisc_paredes_estado").val(results.rows.item(i).pisc_paredes_estado);
                    $("#pisc_paredes_anomalias").val(results.rows.item(i).pisc_paredes_anomalias);
                    $("#pisc_pisos_material").val(results.rows.item(i).pisc_pisos_material);
                    $("#pisc_pisos_estado").val(results.rows.item(i).pisc_pisos_estado);
                    $("#pisc_pisos_anomalias").val(results.rows.item(i).pisc_pisos_anomalias);
                    $("#pisc_techo_material").val(results.rows.item(i).pisc_techo_material);
                    $("#pisc_techo_estado").val(results.rows.item(i).pisc_techo_estado);
                    $("#pisc_techo_anomalias").val(results.rows.item(i).pisc_techo_anomalias);
                    $("#pisc_cielo_material").val(results.rows.item(i).pisc_cielo_material);
                    $("#pisc_cielo_estado").val(results.rows.item(i).pisc_cielo_estado);
                    $("#pisc_cielo_anomalias").val(results.rows.item(i).pisc_cielo_anomalias);
                    $("#pisc_estruct_material").val(results.rows.item(i).pisc_estruct_material);
                    $("#pisc_estruct_estado").val(results.rows.item(i).pisc_estruct_estado);
                    $("#pisc_estruct_anomalias").val(results.rows.item(i).pisc_estruct_anomalias);
                    $("#pisc_panete_material").val(results.rows.item(i).pisc_panete_material);
                    $("#pisc_panete_estado").val(results.rows.item(i).pisc_panete_estado);
                    $("#pisc_panete_anomalias").val(results.rows.item(i).pisc_panete_anomalias);
                    $("#pisc_pintu_material").val(results.rows.item(i).pisc_pintu_material);
                    $("#pisc_pintu_estado").val(results.rows.item(i).pisc_pintu_estado);
                    $("#pisc_pintu_anomalias").val(results.rows.item(i).pisc_pintu_anomalias);
                    $("#pisc_ventana_material").val(results.rows.item(i).pisc_ventana_material);
                    $("#pisc_ventana_estado").val(results.rows.item(i).pisc_ventana_estado);
                    $("#pisc_ventana_anomalias").val(results.rows.item(i).pisc_ventana_anomalias);
                    $("#pisc_puerta_material").val(results.rows.item(i).pisc_puerta_material);
                    $("#pisc_puerta_estado").val(results.rows.item(i).pisc_puerta_estado);
                    $("#pisc_puerta_anomalias").val(results.rows.item(i).pisc_puerta_anomalias);
                    $("#observa").val(results.rows.item(i).observa);
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



            alert('Latitude: ' + position.coords.latitude + '\n' +
                    'Longitude: ' + position.coords.longitude + '\n' +
                    'Altitude: ' + position.coords.altitude /*+ '\n' +
                     'Accuracy: ' + position.coords.accuracy + '\n' +
                     'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                     'Heading: ' + position.coords.heading + '\n' +
                     'Speed: ' + position.coords.speed + '\n' +
                     'Timestamp: ' + position.timestamp + '\n'*/);

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
            transaction.executeSql('SELECT MAX(id) as id FROM pre_vivienda_p', [], function(tx, results) {
                var len = results.rows.length, i;
                var maxId = 0;

                for (i = 0; i < len; i++) {
                    maxId = (results.rows.item(i).id) + 1;
                }

                $("#acta").val(maxId);

            }, function(tx, error) {
                alert('Error occurred');
            });
        });

    }

}





function generatePDF() {

    var success = function(status) {
        alert('Se genero PDF ' + status);
    }

    var error = function(status) {
        alert('Error generando PDF ' + status);
    }

    window.html2pdf.create(
        "<!doctype html>"
            + "<html>"
            + "    <head>"
            + "        <meta charset='ISO-8859-1'>"
            + "        <title></title>"
            + "        <style type='text/css'>"
            + "            body {"
            + "                font: normal 11px Verdana, Arial, sans-serif;"
            + "            }"
            + "            .encabezado {"
            + "                background-color: #76A836;"
            + "                color: #FFFFFF;"
            + "                text-align:center;"
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
            + "        </style>"
            + "    </head>"
            + "    <body>"
            + "        <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td>"
            + "                        <table  width='100%' border='0' cellspacing='0' cellpadding='0'>"
            + "                            <tr>"
            + "                                <td style='width: 10%;height:60px'>"
            + "                                    <img width='90' height='60' src='/storage/sdcard1/logo.png' >"
            + "                                </td>"
            + "                                <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA PRE REGISTRO DE VIVIENDA</td>"
            + "                                <td style='width: 10%;height:60px'>"
            + "                                    <img width='90' style='position: absolute; right: 15px; top: 15px' height='60' src='/storage/sdcard1/logo.png' >"
            + "                                </td>"
            + "                            </tr>"
            + "                        </table> "                      
            + "                    </td>"
            + "                </tr>"
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td style='width: 12.5%'>Fecha:</td>"
            + "                    <td style='width: 12.5%'>" + getCurrentDate() + "</td>"
            + "                    <td style='width: 12.5%'>Depatamento</td>"
            + "                    <td style='width: 12.5%'>" + $("#P_DEPTO option:selected").text() + "</td>"
            + "                    <td style='width: 12.5%'>Municipio</td>"
            + "                    <td style='width: 12.5%'>" + $("#P_MUN option:selected").text() + "</td>"
            + "                    <td style='width: 12.5%'>Vereda</td>"
            + "                    <td>" + $("#vereda").val() + "</td>"
            + "                </tr>    "
             + "                <tr>"
            + "                    <td colspan='2' style='width: 25%'>Predio:</td>"
            + "                    <td colspan='2' style='width: 25%'>" + $("#predio").val() + "</td>"
            + "                    <td colspan='2' style='width: 25%'>Elemento Ambiental</td>"
            + "                    <td colspan='2' style='width: 25%'>" + $("#elemento_ambiental").val() + "</td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td colspan='2' style='width: 25%'>Propietario:</td>"
            + "                    <td colspan='2' style='width: 25%'>" + $("#propietario").val() + "</td>"
            + "                    <td colspan='2' style='width: 25%'>Coordenadas</td>"
            + "                    <td colspan='2' style='width: 25%'>" + $("#coordenadas").val() + "</td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td colspan='4' style='width: 50%;text-align: center'>USO DEL ELEMENTO</td>"
            + "                    <td colspan='5' style='width: 50%;text-align: center'>CARACTER&Iacute;STICAS ORGANOL&Eacute;PTICAS</td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td colspan='2' style='width: 25%'>DOMESTICO</td>"
            + "                    <td colspan='2' style='width: 25%'>X</td>"
            + "                    <td colspan='2' style='width: 25%'>OPTIMA</td>"
            + "                    <td colspan='2' style='width: 25%'></td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td colspan='2' style='width: 25%'>INDUSTRIAL</td>"
            + "                    <td colspan='2' style='width: 25%'>X</td>"
            + "                    <td colspan='2' style='width: 25%'>ALTERADA</td>"
            + "                    <td colspan='2' style='width: 25%'></td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td colspan='2' style='width: 25%'>AGROPECUARIA</td>"
            + "                    <td colspan='2' style='width: 25%'>X</td>"
            + "                    <td colspan='2' style='width: 25%'>DETERIORADA</td>"
            + "                    <td colspan='2' style='width: 25%'></td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td colspan='2' style='width: 25%'>NINGUNO</td>"
            + "                    <td colspan='2' style='width: 25%'>X</td>"
            + "                    <td colspan='2' style='width: 25%'>OTRA</td>"
            + "                    <td colspan='2' style='width: 25%'></td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td colspan='8' style='width: 100%'>OBSERVACIONES DEL ÁREA AMBIENTALMENET FRÁGIL</td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td colspan='8' style='width: 100%'>" + $("#observa").val() + "</td>"
            + "                </tr>"
            + "            </tbody>"
            + "        </table>"
            + "    </body>"
            + "</html>",
            "~/Documents/test.pdf",
            success,
            error
            );
}

function capturePhoto() {

// Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoSuccess, function(message) {
        alert('Image Capture Failed');
    }, {
        quality: 30,
        targetWidth: 600,
        targetHeight: 400,
        destinationType: Camera.DestinationType.FILE_URI
    });

}

function onPhotoSuccess(imageURI) {

    //alert(imageURI);

    var gotFileEntry = function(fileEntry) {
        //alert("got image file entry: " + fileEntry.fullPath);
        var gotFileSystem = function(fileSystem) {

            fileSystem.root.getDirectory("TestFolder", {
                create: true, exclusive: false
            }, function(dataDir) {
                //alert(dataDir.fullPath);
                // copy the file
                i++;
                fileEntry.moveTo(dataDir, i + ".jpg", success, fsFail);

            }, dirFail);


            function success(fileEntry) {
                //alert("New Path: " + fileEntry.toURL());
            }


        };
        // get file system to copy or move image file to
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFileSystem,
                fsFail);
    };
    // resolve file system for image
    window.resolveLocalFileSystemURI(imageURI, gotFileEntry, fsFail);

    // file system fail
    var fsFail = function(error) {
        alert("failed with error code: " + error.code);

    };

    var dirFail = function(error) {
        alert("Directory error code: " + error.code);

    };
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
    var lon = window.localStorage.getItem("lon");


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



