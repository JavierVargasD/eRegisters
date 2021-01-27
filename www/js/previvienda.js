var i = 1;
var ac= 0;
var vivImageNumber;

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

	ac =  window.localStorage.getItem("actaId");
    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});
    var query = "SELECT * FROM pre_vivienda_p where id=" + ac;
	

	

    if (window.localStorage.getItem("editar") === 'true') {
        myDB.transaction(function(transaction) {
            transaction.executeSql(query, [], function(tx, results) {
                var len = results.rows.length, i;

                for (i = 0; i < len; i++) {
                    //results.rows.item(i).id
                    $("#acta").val(results.rows.item(i).id);
					$("#fecha").val(results.rows.item(i).fecha);
                    $("#permiso").val(results.rows.item(i).permiso);
                    $("#P_DEPTO").val(results.rows.item(i).P_DEPTO);
                    $("#P_MUN").val(results.rows.item(i).P_MUN).prop('selected', true);
					//$("#gate option[value='" + results.rows.item(i).P_MUN +"']").attr("selected", true);
					
                    $("#vereda").val(results.rows.item(i).vereda.capitalize());
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
					
					
					                   $("#ex_paredes_material").val(results.rows.item(i).ex_paredes_material.capitalize());
                    $("#ex_paredes_estado").val(results.rows.item(i).ex_paredes_estado.capitalize());
                    $("#ex_paredes_anomalias").val(results.rows.item(i).ex_paredes_anomalias.capitalize());
                    $("#ex_pisos_material").val(results.rows.item(i).ex_pisos_material.capitalize());
                    $("#ex_pisos_estado").val(results.rows.item(i).ex_pisos_estado.capitalize());
                    $("#ex_pisos_anomalias").val(results.rows.item(i).ex_pisos_anomalias.capitalize());
                    $("#ex_techo_material").val(results.rows.item(i).ex_techo_material.capitalize());
                    $("#ex_techo_estado").val(results.rows.item(i).ex_techo_estado.capitalize());
                    $("#ex_techo_anomalias").val(results.rows.item(i).ex_techo_anomalias.capitalize());
                    $("#ex_cielo_material").val(results.rows.item(i).ex_cielo_material.capitalize());
                    $("#ex_cielo_estado").val(results.rows.item(i).ex_cielo_estado.capitalize());
                    $("#ex_cielo_anomalias").val(results.rows.item(i).ex_cielo_anomalias.capitalize());
                    $("#ex_estruct_material").val(results.rows.item(i).ex_estruct_material.capitalize());
                    $("#ex_estruct_estado").val(results.rows.item(i).ex_estruct_estado.capitalize());
                    $("#ex_estruct_anomalias").val(results.rows.item(i).ex_estruct_anomalias.capitalize());
                    $("#ex_panete_material").val(results.rows.item(i).ex_panete_material.capitalize());
                    $("#ex_panete_estado").val(results.rows.item(i).ex_panete_estado.capitalize());
                    $("#ex_panete_anomalias").val(results.rows.item(i).ex_panete_anomalias.capitalize());
                    $("#ex_pintu_material").val(results.rows.item(i).ex_pintu_material.capitalize());
                    $("#ex_pintu_estado").val(results.rows.item(i).ex_pintu_estado.capitalize());
                    $("#ex_pintu_anomalias").val(results.rows.item(i).ex_pintu_anomalias.capitalize());
                    $("#ex_ventana_material").val(results.rows.item(i).ex_ventana_material.capitalize());
                    $("#ex_ventana_estado").val(results.rows.item(i).ex_ventana_estado.capitalize());
                    $("#ex_ventana_anomalias").val(results.rows.item(i).ex_ventana_anomalias.capitalize());
                    $("#ex_puerta_material").val(results.rows.item(i).ex_puerta_material.capitalize());
                    $("#ex_puerta_estado").val(results.rows.item(i).ex_puerta_estado.capitalize());
                    $("#ex_puerta_anomalias").val(results.rows.item(i).ex_puerta_anomalias.capitalize());
                    $("#alc1_paredes_material").val(results.rows.item(i).alc1_paredes_material.capitalize());
                    $("#alc1_paredes_estado").val(results.rows.item(i).alc1_paredes_estado.capitalize());
                    $("#alc1_paredes_anomalias").val(results.rows.item(i).alc1_paredes_anomalias.capitalize());
                    $("#alc1_pisos_material").val(results.rows.item(i).alc1_pisos_material.capitalize());
                    $("#alc1_pisos_estado").val(results.rows.item(i).alc1_pisos_estado.capitalize());
                    $("#alc1_pisos_anomalias").val(results.rows.item(i).alc1_pisos_anomalias.capitalize());
                    $("#alc1_techo_material").val(results.rows.item(i).alc1_techo_material.capitalize());
                    $("#alc1_techo_estado").val(results.rows.item(i).alc1_techo_estado.capitalize());
                    $("#alc1_techo_anomalias").val(results.rows.item(i).alc1_techo_anomalias.capitalize());
                    $("#alc1_cielo_material").val(results.rows.item(i).alc1_cielo_material.capitalize());
                    $("#alc1_cielo_estado").val(results.rows.item(i).alc1_cielo_estado.capitalize());
                    $("#alc1_cielo_anomalias").val(results.rows.item(i).alc1_cielo_anomalias.capitalize());
                    $("#alc1_estruct_material").val(results.rows.item(i).alc1_estruct_material.capitalize());
                    $("#alc1_estruct_estado").val(results.rows.item(i).alc1_estruct_estado.capitalize());
                    $("#alc1_estruct_anomalias").val(results.rows.item(i).alc1_estruct_anomalias.capitalize());
                    $("#alc1_panete_material").val(results.rows.item(i).alc1_panete_material.capitalize());
					$("#alc1_panete_estado").val(results.rows.item(i).alc1_panete_estado.capitalize());
                    $("#alc1_panete_anomalias").val(results.rows.item(i).alc1_panete_anomalias.capitalize());
                    $("#alc1_pintu_material").val(results.rows.item(i).alc1_pintu_material.capitalize());
                    $("#alc1_pintu_estado").val(results.rows.item(i).alc1_pintu_estado.capitalize());
                    $("#alc1_pintu_anomalias").val(results.rows.item(i).alc1_pintu_anomalias.capitalize());
                    $("#alc1_ventana_material").val(results.rows.item(i).alc1_ventana_material.capitalize());
                    $("#alc1_ventana_estado").val(results.rows.item(i).alc1_ventana_estado.capitalize());
                    $("#alc1_ventana_anomalias").val(results.rows.item(i).alc1_ventana_anomalias.capitalize());
                    $("#alc1_puerta_material").val(results.rows.item(i).alc1_puerta_material.capitalize());
                    $("#alc1_puerta_estado").val(results.rows.item(i).alc1_puerta_estado.capitalize());
                    $("#alc1_puerta_anomalias").val(results.rows.item(i).alc1_puerta_anomalias.capitalize());
                    $("#alc2_paredes_material").val(results.rows.item(i).alc2_paredes_material.capitalize());
                    $("#alc2_paredes_estado").val(results.rows.item(i).alc2_paredes_estado.capitalize());
                    $("#alc2_paredes_anomalias").val(results.rows.item(i).alc2_paredes_anomalias.capitalize());
                    $("#alc2_pisos_material").val(results.rows.item(i).alc2_pisos_material.capitalize());
                    $("#alc2_pisos_estado").val(results.rows.item(i).alc2_pisos_estado.capitalize());
                    $("#alc2_pisos_anomalias").val(results.rows.item(i).alc2_pisos_anomalias.capitalize());
                    $("#alc2_techo_material").val(results.rows.item(i).alc2_techo_material.capitalize());
                    $("#alc2_techo_estado").val(results.rows.item(i).alc2_techo_estado.capitalize());
                    $("#alc2_techo_anomalias").val(results.rows.item(i).alc2_techo_anomalias.capitalize());
                    $("#alc2_cielo_material").val(results.rows.item(i).alc2_cielo_material.capitalize());
                    $("#alc2_cielo_estado").val(results.rows.item(i).alc2_cielo_estado.capitalize());
                    $("#alc2_cielo_anomalias").val(results.rows.item(i).alc2_cielo_anomalias.capitalize());
                    $("#alc2_estruct_material").val(results.rows.item(i).alc2_estruct_material.capitalize());
                    $("#alc2_estruct_estado").val(results.rows.item(i).alc2_estruct_estado.capitalize());
                    $("#alc2_estruct_anomalias").val(results.rows.item(i).alc2_estruct_anomalias.capitalize());
                    $("#alc2_panete_material").val(results.rows.item(i).alc2_panete_material.capitalize());
                    $("#alc2_panete_estado").val(results.rows.item(i).alc2_panete_estado.capitalize());
                    $("#alc2_panete_anomalias").val(results.rows.item(i).alc2_panete_anomalias.capitalize());
                    $("#alc2_pintu_material").val(results.rows.item(i).alc2_pintu_material.capitalize());
                    $("#alc2_pintu_estado").val(results.rows.item(i).alc2_pintu_estado.capitalize());
                    $("#alc2_pintu_anomalias").val(results.rows.item(i).alc2_pintu_anomalias.capitalize());
                    $("#alc2_ventana_material").val(results.rows.item(i).alc2_ventana_material.capitalize());
                    $("#alc2_ventana_estado").val(results.rows.item(i).alc2_ventana_estado.capitalize());
                    $("#alc2_ventana_anomalias").val(results.rows.item(i).alc2_ventana_anomalias.capitalize());
                    $("#alc2_puerta_material").val(results.rows.item(i).alc2_puerta_material.capitalize());
                    $("#alc2_puerta_estado").val(results.rows.item(i).alc2_puerta_estado.capitalize());
                    $("#alc2_puerta_anomalias").val(results.rows.item(i).alc2_puerta_anomalias.capitalize());
                    $("#alc3_paredes_material").val(results.rows.item(i).alc3_paredes_material.capitalize());
                    $("#alc3_paredes_estado").val(results.rows.item(i).alc3_paredes_estado.capitalize());
                    $("#alc3_paredes_anomalias").val(results.rows.item(i).alc3_paredes_anomalias.capitalize());
                    $("#alc3_pisos_material").val(results.rows.item(i).alc3_pisos_material.capitalize());
                    $("#alc3_pisos_estado").val(results.rows.item(i).alc3_pisos_estado.capitalize());
                    $("#alc3_pisos_anomalias").val(results.rows.item(i).alc3_pisos_anomalias.capitalize());
                    $("#alc3_techo_material").val(results.rows.item(i).alc3_techo_material.capitalize());
                    $("#alc3_techo_estado").val(results.rows.item(i).alc3_techo_estado.capitalize());
                    $("#alc3_techo_anomalias").val(results.rows.item(i).alc3_techo_anomalias.capitalize());
                    $("#alc3_cielo_material").val(results.rows.item(i).alc3_cielo_material.capitalize());
                    $("#alc3_cielo_estado").val(results.rows.item(i).alc3_cielo_estado.capitalize());
                    $("#alc3_cielo_anomalias").val(results.rows.item(i).alc3_cielo_anomalias.capitalize());
                    $("#alc3_estruct_material").val(results.rows.item(i).alc3_estruct_material.capitalize());
                    $("#alc3_estruct_estado").val(results.rows.item(i).alc3_estruct_estado.capitalize());
                    $("#alc3_estruct_anomalias").val(results.rows.item(i).alc3_estruct_anomalias.capitalize());
                    $("#alc3_panete_material").val(results.rows.item(i).alc3_panete_material.capitalize());
                    $("#alc3_panete_estado").val(results.rows.item(i).alc3_panete_estado.capitalize());
                    $("#alc3_panete_anomalias").val(results.rows.item(i).alc3_panete_anomalias.capitalize());
                    $("#alc3_pintu_material").val(results.rows.item(i).alc3_pintu_material.capitalize());
                    $("#alc3_pintu_estado").val(results.rows.item(i).alc3_pintu_estado.capitalize());
                    $("#alc3_pintu_anomalias").val(results.rows.item(i).alc3_pintu_anomalias.capitalize());
                    $("#alc3_ventana_material").val(results.rows.item(i).alc3_ventana_material.capitalize());
                    $("#alc3_ventana_estado").val(results.rows.item(i).alc3_ventana_estado.capitalize());
                    $("#alc3_ventana_anomalias").val(results.rows.item(i).alc3_ventana_anomalias.capitalize());
                    $("#alc3_puerta_material").val(results.rows.item(i).alc3_puerta_material.capitalize());
                    $("#alc3_puerta_estado").val(results.rows.item(i).alc3_puerta_estado.capitalize());
                    $("#alc3_puerta_anomalias").val(results.rows.item(i).alc3_puerta_anomalias.capitalize());
                    $("#alc4_paredes_material").val(results.rows.item(i).alc4_paredes_material.capitalize());
                    $("#alc4_paredes_estado").val(results.rows.item(i).alc4_paredes_estado.capitalize());
                    $("#alc4_paredes_anomalias").val(results.rows.item(i).alc4_paredes_anomalias.capitalize());
                    $("#alc4_pisos_material").val(results.rows.item(i).alc4_pisos_material.capitalize());
                    $("#alc4_pisos_estado").val(results.rows.item(i).alc4_pisos_estado.capitalize());
                    $("#alc4_pisos_anomalias").val(results.rows.item(i).alc4_pisos_anomalias.capitalize());
                    $("#alc4_techo_material").val(results.rows.item(i).alc4_techo_material.capitalize());
                    $("#alc4_techo_estado").val(results.rows.item(i).alc4_techo_estado.capitalize());
                    $("#alc4_techo_anomalias").val(results.rows.item(i).alc4_techo_anomalias.capitalize());
                    $("#alc4_cielo_material").val(results.rows.item(i).alc4_cielo_material.capitalize());
                    $("#alc4_cielo_estado").val(results.rows.item(i).alc4_cielo_estado.capitalize());
                    $("#alc4_cielo_anomalias").val(results.rows.item(i).alc4_cielo_anomalias.capitalize());
                    $("#alc4_estruct_material").val(results.rows.item(i).alc4_estruct_material.capitalize());
                    $("#alc4_estruct_estado").val(results.rows.item(i).alc4_estruct_estado.capitalize());
                    $("#alc4_estruct_anomalias").val(results.rows.item(i).alc4_estruct_anomalias.capitalize());
                    $("#alc4_panete_material").val(results.rows.item(i).alc4_panete_material.capitalize());
                    $("#alc4_panete_estado").val(results.rows.item(i).alc4_panete_estado.capitalize());
                    $("#alc4_panete_anomalias").val(results.rows.item(i).alc4_panete_anomalias.capitalize());
                    $("#alc4_pintu_material").val(results.rows.item(i).alc4_pintu_material.capitalize());
                    $("#alc4_pintu_estado").val(results.rows.item(i).alc4_pintu_estado.capitalize());
                    $("#alc4_pintu_anomalias").val(results.rows.item(i).alc4_pintu_anomalias.capitalize());
                    $("#alc4_ventana_material").val(results.rows.item(i).alc4_ventana_material.capitalize());
                    $("#alc4_ventana_estado").val(results.rows.item(i).alc4_ventana_estado.capitalize());
                    $("#alc4_ventana_anomalias").val(results.rows.item(i).alc4_ventana_anomalias.capitalize());
                    $("#alc4_puerta_material").val(results.rows.item(i).alc4_puerta_material.capitalize());
                    $("#alc4_puerta_estado").val(results.rows.item(i).alc4_puerta_estado.capitalize());
                    $("#alc4_puerta_anomalias").val(results.rows.item(i).alc4_puerta_anomalias.capitalize());
                    $("#alc5_paredes_material").val(results.rows.item(i).alc5_paredes_material.capitalize());
                    $("#alc5_paredes_estado").val(results.rows.item(i).alc5_paredes_estado.capitalize());
                    $("#alc5_paredes_anomalias").val(results.rows.item(i).alc5_paredes_anomalias.capitalize());
                    $("#alc5_pisos_material").val(results.rows.item(i).alc5_pisos_material.capitalize());
                    $("#alc5_pisos_estado").val(results.rows.item(i).alc5_pisos_estado.capitalize());
                    $("#alc5_pisos_anomalias").val(results.rows.item(i).alc5_pisos_anomalias.capitalize());
                    $("#alc5_techo_material").val(results.rows.item(i).alc5_techo_material.capitalize());
                    $("#alc5_techo_estado").val(results.rows.item(i).alc5_techo_estado.capitalize());
                    $("#alc5_techo_anomalias").val(results.rows.item(i).alc5_techo_anomalias.capitalize());
                    $("#alc5_cielo_material").val(results.rows.item(i).alc5_cielo_material.capitalize());
                    $("#alc5_cielo_estado").val(results.rows.item(i).alc5_cielo_estado.capitalize());
                    $("#alc5_cielo_anomalias").val(results.rows.item(i).alc5_cielo_anomalias.capitalize());
                    $("#alc5_estruct_material").val(results.rows.item(i).alc5_estruct_material.capitalize());
                    $("#alc5_estruct_estado").val(results.rows.item(i).alc5_estruct_estado.capitalize());
                    $("#alc5_estruct_anomalias").val(results.rows.item(i).alc5_estruct_anomalias.capitalize());
                    $("#alc5_panete_material").val(results.rows.item(i).alc5_panete_material.capitalize());
                    $("#alc5_panete_estado").val(results.rows.item(i).alc5_panete_estado.capitalize());
                    $("#alc5_panete_anomalias").val(results.rows.item(i).alc5_panete_anomalias.capitalize());
                    $("#alc5_pintu_material").val(results.rows.item(i).alc5_pintu_material.capitalize());
                    $("#alc5_pintu_estado").val(results.rows.item(i).alc5_pintu_estado.capitalize());
                    $("#alc5_pintu_anomalias").val(results.rows.item(i).alc5_pintu_anomalias.capitalize());
                    $("#alc5_ventana_material").val(results.rows.item(i).alc5_ventana_material.capitalize());
                    $("#alc5_ventana_estado").val(results.rows.item(i).alc5_ventana_estado.capitalize());
                    $("#alc5_ventana_anomalias").val(results.rows.item(i).alc5_ventana_anomalias.capitalize());
                    $("#alc5_puerta_material").val(results.rows.item(i).alc5_puerta_material.capitalize());
                    $("#alc5_puerta_estado").val(results.rows.item(i).alc5_puerta_estado.capitalize());
                    $("#alc5_puerta_anomalias").val(results.rows.item(i).alc5_puerta_anomalias.capitalize());
                    $("#sal1_paredes_material").val(results.rows.item(i).sal1_paredes_material.capitalize());
                    $("#sal1_paredes_estado").val(results.rows.item(i).sal1_paredes_estado.capitalize());
                    $("#sal1_paredes_anomalias").val(results.rows.item(i).sal1_paredes_anomalias.capitalize());
                    $("#sal1_pisos_material").val(results.rows.item(i).sal1_pisos_material.capitalize());
                    $("#sal1_pisos_estado").val(results.rows.item(i).sal1_pisos_estado.capitalize());
                    $("#sal1_pisos_anomalias").val(results.rows.item(i).sal1_pisos_anomalias.capitalize());
                    $("#sal1_techo_material").val(results.rows.item(i).sal1_techo_material.capitalize());
                    $("#sal1_techo_estado").val(results.rows.item(i).sal1_techo_estado.capitalize());
                    $("#sal1_techo_anomalias").val(results.rows.item(i).sal1_techo_anomalias.capitalize());
                    $("#sal1_cielo_material").val(results.rows.item(i).sal1_cielo_material.capitalize());
                    $("#sal1_cielo_estado").val(results.rows.item(i).sal1_cielo_estado.capitalize());
                    $("#sal1_cielo_anomalias").val(results.rows.item(i).sal1_cielo_anomalias.capitalize());
                    $("#sal1_estruct_material").val(results.rows.item(i).sal1_estruct_material.capitalize());
                    $("#sal1_estruct_estado").val(results.rows.item(i).sal1_estruct_estado.capitalize());
                    $("#sal1_estruct_anomalias").val(results.rows.item(i).sal1_estruct_anomalias.capitalize());
                    $("#sal1_panete_material").val(results.rows.item(i).sal1_panete_material.capitalize());
                    $("#sal1_panete_estado").val(results.rows.item(i).sal1_panete_estado.capitalize());
                    $("#sal1_panete_anomalias").val(results.rows.item(i).sal1_panete_anomalias.capitalize());
                    $("#sal1_pintu_material").val(results.rows.item(i).sal1_pintu_material.capitalize());
                    $("#sal1_pintu_estado").val(results.rows.item(i).sal1_pintu_estado.capitalize());
                    $("#sal1_pintu_anomalias").val(results.rows.item(i).sal1_pintu_anomalias.capitalize());
                    $("#sal1_ventana_material").val(results.rows.item(i).sal1_ventana_material.capitalize());
                    $("#sal1_ventana_estado").val(results.rows.item(i).sal1_ventana_estado.capitalize());
                    $("#sal1_ventana_anomalias").val(results.rows.item(i).sal1_ventana_anomalias.capitalize());
                    $("#sal1_puerta_material").val(results.rows.item(i).sal1_puerta_material.capitalize());
                    $("#sal1_puerta_estado").val(results.rows.item(i).sal1_puerta_estado.capitalize());
                    $("#sal1_puerta_anomalias").val(results.rows.item(i).sal1_puerta_anomalias.capitalize());
                    $("#sal2_paredes_material").val(results.rows.item(i).sal2_paredes_material.capitalize());
                    $("#sal2_paredes_estado").val(results.rows.item(i).sal2_paredes_estado.capitalize());
                    $("#sal2_paredes_anomalias").val(results.rows.item(i).sal2_paredes_anomalias.capitalize());
                    $("#sal2_pisos_material").val(results.rows.item(i).sal2_pisos_material.capitalize());
                    $("#sal2_pisos_estado").val(results.rows.item(i).sal2_pisos_estado.capitalize());
                    $("#sal2_pisos_anomalias").val(results.rows.item(i).sal2_pisos_anomalias.capitalize());
                    $("#sal2_techo_material").val(results.rows.item(i).sal2_techo_material.capitalize());
                    $("#sal2_techo_estado").val(results.rows.item(i).sal2_techo_estado.capitalize());
                    $("#sal2_techo_anomalias").val(results.rows.item(i).sal2_techo_anomalias.capitalize());
                    $("#sal2_cielo_material").val(results.rows.item(i).sal2_cielo_material.capitalize());
                    $("#sal2_cielo_estado").val(results.rows.item(i).sal2_cielo_estado.capitalize());
                    $("#sal2_cielo_anomalias").val(results.rows.item(i).sal2_cielo_anomalias.capitalize());
                    $("#sal2_estruct_material").val(results.rows.item(i).sal2_estruct_material.capitalize());
                    $("#sal2_estruct_estado").val(results.rows.item(i).sal2_estruct_estado.capitalize());
                    $("#sal2_estruct_anomalias").val(results.rows.item(i).sal2_estruct_anomalias.capitalize());
                    $("#sal2_panete_material").val(results.rows.item(i).sal2_panete_material.capitalize());
                    $("#sal2_panete_estado").val(results.rows.item(i).sal2_panete_estado.capitalize());
                    $("#sal2_panete_anomalias").val(results.rows.item(i).sal2_panete_anomalias.capitalize());
                    $("#sal2_pintu_material").val(results.rows.item(i).sal2_pintu_material.capitalize());
                    $("#sal2_pintu_estado").val(results.rows.item(i).sal2_pintu_estado.capitalize());
                    $("#sal2_pintu_anomalias").val(results.rows.item(i).sal2_pintu_anomalias.capitalize());
                    $("#sal2_ventana_material").val(results.rows.item(i).sal2_ventana_material.capitalize());
                    $("#sal2_ventana_estado").val(results.rows.item(i).sal2_ventana_estado.capitalize());
                    $("#sal2_ventana_anomalias").val(results.rows.item(i).sal2_ventana_anomalias.capitalize());
                    $("#sal2_puerta_material").val(results.rows.item(i).sal2_puerta_material.capitalize());
                    $("#sal2_puerta_estado").val(results.rows.item(i).sal2_puerta_estado.capitalize());
                    $("#sal2_puerta_anomalias").val(results.rows.item(i).sal2_puerta_anomalias.capitalize());
                    $("#come1_paredes_material").val(results.rows.item(i).come1_paredes_material.capitalize());
                    $("#come1_paredes_estado").val(results.rows.item(i).come1_paredes_estado.capitalize());
                    $("#come1_paredes_anomalias").val(results.rows.item(i).come1_paredes_anomalias.capitalize());
                    $("#come1_pisos_material").val(results.rows.item(i).come1_pisos_material.capitalize());
                    $("#come1_pisos_estado").val(results.rows.item(i).come1_pisos_estado.capitalize());
                    $("#come1_pisos_anomalias").val(results.rows.item(i).come1_pisos_anomalias.capitalize());
                    $("#come1_techo_material").val(results.rows.item(i).come1_techo_material.capitalize());
                    $("#come1_techo_estado").val(results.rows.item(i).come1_techo_estado.capitalize());
                    $("#come1_techo_anomalias").val(results.rows.item(i).come1_techo_anomalias.capitalize());
                    $("#come1_cielo_material").val(results.rows.item(i).come1_cielo_material.capitalize());
                    $("#come1_cielo_estado").val(results.rows.item(i).come1_cielo_estado.capitalize());
                    $("#come1_cielo_anomalias").val(results.rows.item(i).come1_cielo_anomalias.capitalize());
                    $("#come1_estruct_material").val(results.rows.item(i).come1_estruct_material.capitalize());
                    $("#come1_estruct_estado").val(results.rows.item(i).come1_estruct_estado.capitalize());
                    $("#come1_estruct_anomalias").val(results.rows.item(i).come1_estruct_anomalias.capitalize());
                    $("#come1_panete_material").val(results.rows.item(i).come1_panete_material.capitalize());
                    $("#come1_panete_estado").val(results.rows.item(i).come1_panete_estado.capitalize());
                    $("#come1_panete_anomalias").val(results.rows.item(i).come1_panete_anomalias.capitalize());
                    $("#come1_pintu_material").val(results.rows.item(i).come1_pintu_material.capitalize());
                    $("#come1_pintu_estado").val(results.rows.item(i).come1_pintu_estado.capitalize());
                    $("#come1_pintu_anomalias").val(results.rows.item(i).come1_pintu_anomalias.capitalize());
                    $("#come1_ventana_material").val(results.rows.item(i).come1_ventana_material.capitalize());
                    $("#come1_ventana_estado").val(results.rows.item(i).come1_ventana_estado.capitalize());
                    $("#come1_ventana_anomalias").val(results.rows.item(i).come1_ventana_anomalias.capitalize());
                    $("#come1_puerta_material").val(results.rows.item(i).come1_puerta_material.capitalize());
                    $("#come1_puerta_estado").val(results.rows.item(i).come1_puerta_estado.capitalize());
                    $("#come1_puerta_anomalias").val(results.rows.item(i).come1_puerta_anomalias.capitalize());
                    $("#come2_paredes_material").val(results.rows.item(i).come2_paredes_material.capitalize());
                    $("#come2_paredes_estado").val(results.rows.item(i).come2_paredes_estado.capitalize());
                    $("#come2_paredes_anomalias").val(results.rows.item(i).come2_paredes_anomalias.capitalize());
                    $("#come2_pisos_material").val(results.rows.item(i).come2_pisos_material.capitalize());
                    $("#come2_pisos_estado").val(results.rows.item(i).come2_pisos_estado.capitalize());
                    $("#come2_pisos_anomalias").val(results.rows.item(i).come2_pisos_anomalias.capitalize());
                    $("#come2_techo_material").val(results.rows.item(i).come2_techo_material.capitalize());
                    $("#come2_techo_estado").val(results.rows.item(i).come2_techo_estado.capitalize());
                    $("#come2_techo_anomalias").val(results.rows.item(i).come2_techo_anomalias.capitalize());
                    $("#come2_cielo_material").val(results.rows.item(i).come2_cielo_material.capitalize());
                    $("#come2_cielo_estado").val(results.rows.item(i).come2_cielo_estado.capitalize());
                    $("#come2_cielo_anomalias").val(results.rows.item(i).come2_cielo_anomalias.capitalize());
                    $("#come2_estruct_material").val(results.rows.item(i).come2_estruct_material.capitalize());
                    $("#come2_estruct_estado").val(results.rows.item(i).come2_estruct_estado.capitalize());
                    $("#come2_estruct_anomalias").val(results.rows.item(i).come2_estruct_anomalias.capitalize());
                    $("#come2_panete_material").val(results.rows.item(i).come2_panete_material.capitalize());
                    $("#come2_panete_estado").val(results.rows.item(i).come2_panete_estado.capitalize());
                    $("#come2_panete_anomalias").val(results.rows.item(i).come2_panete_anomalias.capitalize());
                    $("#come2_pintu_material").val(results.rows.item(i).come2_pintu_material.capitalize());
                    $("#come2_pintu_estado").val(results.rows.item(i).come2_pintu_estado.capitalize());
                    $("#come2_pintu_anomalias").val(results.rows.item(i).come2_pintu_anomalias.capitalize());
                    $("#come2_ventana_material").val(results.rows.item(i).come2_ventana_material.capitalize());
                    $("#come2_ventana_estado").val(results.rows.item(i).come2_ventana_estado.capitalize());
                    $("#come2_ventana_anomalias").val(results.rows.item(i).come2_ventana_anomalias.capitalize());
                    $("#come2_puerta_material").val(results.rows.item(i).come2_puerta_material.capitalize());
                    $("#come2_puerta_estado").val(results.rows.item(i).come2_puerta_estado.capitalize());
                    $("#come2_puerta_anomalias").val(results.rows.item(i).come2_puerta_anomalias.capitalize());
                    $("#coci1_paredes_material").val(results.rows.item(i).coci1_paredes_material.capitalize());
                    $("#coci1_paredes_estado").val(results.rows.item(i).coci1_paredes_estado.capitalize());
                    $("#coci1_paredes_anomalias").val(results.rows.item(i).coci1_paredes_anomalias.capitalize());
                    $("#coci1_pisos_material").val(results.rows.item(i).coci1_pisos_material.capitalize());
                    $("#coci1_pisos_estado").val(results.rows.item(i).coci1_pisos_estado.capitalize());
                    $("#coci1_pisos_anomalias").val(results.rows.item(i).coci1_pisos_anomalias.capitalize());
                    $("#coci1_techo_material").val(results.rows.item(i).coci1_techo_material.capitalize());
                    $("#coci1_techo_estado").val(results.rows.item(i).coci1_techo_estado.capitalize());
                    $("#coci1_techo_anomalias").val(results.rows.item(i).coci1_techo_anomalias.capitalize());
                    $("#coci1_cielo_material").val(results.rows.item(i).coci1_cielo_material.capitalize());
                    $("#coci1_cielo_estado").val(results.rows.item(i).coci1_cielo_estado.capitalize());
                    $("#coci1_cielo_anomalias").val(results.rows.item(i).coci1_cielo_anomalias.capitalize());
                    $("#coci1_estruct_material").val(results.rows.item(i).coci1_estruct_material.capitalize());
                    $("#coci1_estruct_estado").val(results.rows.item(i).coci1_estruct_estado.capitalize());
                    $("#coci1_estruct_anomalias").val(results.rows.item(i).coci1_estruct_anomalias.capitalize());
                    $("#coci1_panete_material").val(results.rows.item(i).coci1_panete_material.capitalize());
                    $("#coci1_panete_estado").val(results.rows.item(i).coci1_panete_estado.capitalize());
                    $("#coci1_panete_anomalias").val(results.rows.item(i).coci1_panete_anomalias.capitalize());
                    $("#coci1_pintu_material").val(results.rows.item(i).coci1_pintu_material.capitalize());
                    $("#coci1_pintu_estado").val(results.rows.item(i).coci1_pintu_estado.capitalize());
                    $("#coci1_pintu_anomalias").val(results.rows.item(i).coci1_pintu_anomalias.capitalize());
                    $("#coci1_ventana_material").val(results.rows.item(i).coci1_ventana_material.capitalize());
                    $("#coci1_ventana_estado").val(results.rows.item(i).coci1_ventana_estado.capitalize());
                    $("#coci1_ventana_anomalias").val(results.rows.item(i).coci1_ventana_anomalias.capitalize());
                    $("#coci1_puerta_material").val(results.rows.item(i).coci1_puerta_material.capitalize());
                    $("#coci1_puerta_estado").val(results.rows.item(i).coci1_puerta_estado.capitalize());
                    $("#coci1_puerta_anomalias").val(results.rows.item(i).coci1_puerta_anomalias.capitalize());
                    $("#coci2_paredes_material").val(results.rows.item(i).coci2_paredes_material.capitalize());
                    $("#coci2_paredes_estado").val(results.rows.item(i).coci2_paredes_estado.capitalize());
                    $("#coci2_paredes_anomalias").val(results.rows.item(i).coci2_paredes_anomalias.capitalize());
                    $("#coci2_pisos_material").val(results.rows.item(i).coci2_pisos_material.capitalize());
                    $("#coci2_pisos_estado").val(results.rows.item(i).coci2_pisos_estado.capitalize());
                    $("#coci2_pisos_anomalias").val(results.rows.item(i).coci2_pisos_anomalias.capitalize());
                    $("#coci2_techo_material").val(results.rows.item(i).coci2_techo_material.capitalize());
                    $("#coci2_techo_estado").val(results.rows.item(i).coci2_techo_estado.capitalize());
                    $("#coci2_techo_anomalias").val(results.rows.item(i).coci2_techo_anomalias.capitalize());
                    $("#coci2_cielo_material").val(results.rows.item(i).coci2_cielo_material.capitalize());
                    $("#coci2_cielo_estado").val(results.rows.item(i).coci2_cielo_estado.capitalize());
                    $("#coci2_cielo_anomalias").val(results.rows.item(i).coci2_cielo_anomalias.capitalize());
                    $("#coci2_estruct_material").val(results.rows.item(i).coci2_estruct_material.capitalize());
                    $("#coci2_estruct_estado").val(results.rows.item(i).coci2_estruct_estado.capitalize());
                    $("#coci2_estruct_anomalias").val(results.rows.item(i).coci2_estruct_anomalias.capitalize());
                    $("#coci2_panete_material").val(results.rows.item(i).coci2_panete_material.capitalize());
                    $("#coci2_panete_estado").val(results.rows.item(i).coci2_panete_estado.capitalize());
                    $("#coci2_panete_anomalias").val(results.rows.item(i).coci2_panete_anomalias.capitalize());
                    $("#coci2_pintu_material").val(results.rows.item(i).coci2_pintu_material.capitalize());
                    $("#coci2_pintu_estado").val(results.rows.item(i).coci2_pintu_estado.capitalize());
                    $("#coci2_pintu_anomalias").val(results.rows.item(i).coci2_pintu_anomalias.capitalize());
                    $("#coci2_ventana_material").val(results.rows.item(i).coci2_ventana_material.capitalize());
                    $("#coci2_ventana_estado").val(results.rows.item(i).coci2_ventana_estado.capitalize());
                    $("#coci2_ventana_anomalias").val(results.rows.item(i).coci2_ventana_anomalias.capitalize());
                    $("#coci2_puerta_material").val(results.rows.item(i).coci2_puerta_material.capitalize());
                    $("#coci2_puerta_estado").val(results.rows.item(i).coci2_puerta_estado.capitalize());
                    $("#coci2_puerta_anomalias").val(results.rows.item(i).coci2_puerta_anomalias.capitalize());
                    $("#ban1_paredes_material").val(results.rows.item(i).ban1_paredes_material.capitalize());
                    $("#ban1_paredes_estado").val(results.rows.item(i).ban1_paredes_estado.capitalize());
                    $("#ban1_paredes_anomalias").val(results.rows.item(i).ban1_paredes_anomalias.capitalize());
                    $("#ban1_pisos_material").val(results.rows.item(i).ban1_pisos_material.capitalize());
                    $("#ban1_pisos_estado").val(results.rows.item(i).ban1_pisos_estado.capitalize());
                    $("#ban1_pisos_anomalias").val(results.rows.item(i).ban1_pisos_anomalias.capitalize());
                    $("#ban1_techo_material").val(results.rows.item(i).ban1_techo_material.capitalize());
                    $("#ban1_techo_estado").val(results.rows.item(i).ban1_techo_estado.capitalize());
                    $("#ban1_techo_anomalias").val(results.rows.item(i).ban1_techo_anomalias.capitalize());
                    $("#ban1_cielo_material").val(results.rows.item(i).ban1_cielo_material.capitalize());
                    $("#ban1_cielo_estado").val(results.rows.item(i).ban1_cielo_estado.capitalize());
                    $("#ban1_cielo_anomalias").val(results.rows.item(i).ban1_cielo_anomalias.capitalize());
                    $("#ban1_estruct_material").val(results.rows.item(i).ban1_estruct_material.capitalize());
                    $("#ban1_estruct_estado").val(results.rows.item(i).ban1_estruct_estado.capitalize());
                    $("#ban1_estruct_anomalias").val(results.rows.item(i).ban1_estruct_anomalias.capitalize());
                    $("#ban1_panete_material").val(results.rows.item(i).ban1_panete_material.capitalize());
                    $("#ban1_panete_estado").val(results.rows.item(i).ban1_panete_estado.capitalize());
                    $("#ban1_panete_anomalias").val(results.rows.item(i).ban1_panete_anomalias.capitalize());
                    $("#ban1_pintu_material").val(results.rows.item(i).ban1_pintu_material.capitalize());
                    $("#ban1_pintu_estado").val(results.rows.item(i).ban1_pintu_estado.capitalize());
                    $("#ban1_pintu_anomalias").val(results.rows.item(i).ban1_pintu_anomalias.capitalize());
                    $("#ban1_ventana_material").val(results.rows.item(i).ban1_ventana_material.capitalize());
                    $("#ban1_ventana_estado").val(results.rows.item(i).ban1_ventana_estado.capitalize());
                    $("#ban1_ventana_anomalias").val(results.rows.item(i).ban1_ventana_anomalias.capitalize());
                    $("#ban1_puerta_material").val(results.rows.item(i).ban1_puerta_material.capitalize());
                    $("#ban1_puerta_estado").val(results.rows.item(i).ban1_puerta_estado.capitalize());
                    $("#ban1_puerta_anomalias").val(results.rows.item(i).ban1_puerta_anomalias.capitalize());
                    $("#ban2_paredes_material").val(results.rows.item(i).ban2_paredes_material.capitalize());
                    $("#ban2_paredes_estado").val(results.rows.item(i).ban2_paredes_estado.capitalize());
                    $("#ban2_paredes_anomalias").val(results.rows.item(i).ban2_paredes_anomalias.capitalize());
                    $("#ban2_pisos_material").val(results.rows.item(i).ban2_pisos_material.capitalize());
                    $("#ban2_pisos_estado").val(results.rows.item(i).ban2_pisos_estado.capitalize());
                    $("#ban2_pisos_anomalias").val(results.rows.item(i).ban2_pisos_anomalias.capitalize());
                    $("#ban2_techo_material").val(results.rows.item(i).ban2_techo_material.capitalize());
                    $("#ban2_techo_estado").val(results.rows.item(i).ban2_techo_estado.capitalize());
                    $("#ban2_techo_anomalias").val(results.rows.item(i).ban2_techo_anomalias.capitalize());
                    $("#ban2_cielo_material").val(results.rows.item(i).ban2_cielo_material.capitalize());
                    $("#ban2_cielo_estado").val(results.rows.item(i).ban2_cielo_estado.capitalize());
                    $("#ban2_cielo_anomalias").val(results.rows.item(i).ban2_cielo_anomalias.capitalize());
                    $("#ban2_estruct_material").val(results.rows.item(i).ban2_estruct_material.capitalize());
                    $("#ban2_estruct_estado").val(results.rows.item(i).ban2_estruct_estado.capitalize());
                    $("#ban2_estruct_anomalias").val(results.rows.item(i).ban2_estruct_anomalias.capitalize());
                    $("#ban2_panete_material").val(results.rows.item(i).ban2_panete_material.capitalize());
                    $("#ban2_panete_estado").val(results.rows.item(i).ban2_panete_estado.capitalize());
                    $("#ban2_panete_anomalias").val(results.rows.item(i).ban2_panete_anomalias.capitalize());
                    $("#ban2_pintu_material").val(results.rows.item(i).ban2_pintu_material.capitalize());
                    $("#ban2_pintu_estado").val(results.rows.item(i).ban2_pintu_estado.capitalize());
                    $("#ban2_pintu_anomalias").val(results.rows.item(i).ban2_pintu_anomalias.capitalize());
                    $("#ban2_ventana_material").val(results.rows.item(i).ban2_ventana_material.capitalize());
                    $("#ban2_ventana_estado").val(results.rows.item(i).ban2_ventana_estado.capitalize());
                    $("#ban2_ventana_anomalias").val(results.rows.item(i).ban2_ventana_anomalias.capitalize());
                    $("#ban2_puerta_material").val(results.rows.item(i).ban2_puerta_material.capitalize());
                    $("#ban2_puerta_estado").val(results.rows.item(i).ban2_puerta_estado.capitalize());
                    $("#ban2_puerta_anomalias").val(results.rows.item(i).ban2_puerta_anomalias.capitalize());
                    $("#ban3_paredes_material").val(results.rows.item(i).ban3_paredes_material.capitalize());
                    $("#ban3_paredes_estado").val(results.rows.item(i).ban3_paredes_estado.capitalize());
                    $("#ban3_paredes_anomalias").val(results.rows.item(i).ban3_paredes_anomalias.capitalize());
                    $("#ban3_pisos_material").val(results.rows.item(i).ban3_pisos_material.capitalize());
                    $("#ban3_pisos_estado").val(results.rows.item(i).ban3_pisos_estado.capitalize());
                    $("#ban3_pisos_anomalias").val(results.rows.item(i).ban3_pisos_anomalias.capitalize());
                    $("#ban3_techo_material").val(results.rows.item(i).ban3_techo_material.capitalize());
                    $("#ban3_techo_estado").val(results.rows.item(i).ban3_techo_estado.capitalize());
                    $("#ban3_techo_anomalias").val(results.rows.item(i).ban3_techo_anomalias.capitalize());
                    $("#ban3_cielo_material").val(results.rows.item(i).ban3_cielo_material.capitalize());
                    $("#ban3_cielo_estado").val(results.rows.item(i).ban3_cielo_estado.capitalize());
                    $("#ban3_cielo_anomalias").val(results.rows.item(i).ban3_cielo_anomalias.capitalize());
                    $("#ban3_estruct_material").val(results.rows.item(i).ban3_estruct_material.capitalize());
                    $("#ban3_estruct_estado").val(results.rows.item(i).ban3_estruct_estado.capitalize());
                    $("#ban3_estruct_anomalias").val(results.rows.item(i).ban3_estruct_anomalias.capitalize());
                    $("#ban3_panete_material").val(results.rows.item(i).ban3_panete_material.capitalize());
                    $("#ban3_panete_estado").val(results.rows.item(i).ban3_panete_estado.capitalize());
                    $("#ban3_panete_anomalias").val(results.rows.item(i).ban3_panete_anomalias.capitalize());
                    $("#ban3_pintu_material").val(results.rows.item(i).ban3_pintu_material.capitalize());
                    $("#ban3_pintu_estado").val(results.rows.item(i).ban3_pintu_estado.capitalize());
                    $("#ban3_pintu_anomalias").val(results.rows.item(i).ban3_pintu_anomalias.capitalize());
                    $("#ban3_ventana_material").val(results.rows.item(i).ban3_ventana_material.capitalize());
                    $("#ban3_ventana_estado").val(results.rows.item(i).ban3_ventana_estado.capitalize());
                    $("#ban3_ventana_anomalias").val(results.rows.item(i).ban3_ventana_anomalias.capitalize());
                    $("#ban3_puerta_material").val(results.rows.item(i).ban3_puerta_material.capitalize());
                    $("#ban3_puerta_estado").val(results.rows.item(i).ban3_puerta_estado.capitalize());
                    $("#ban3_puerta_anomalias").val(results.rows.item(i).ban3_puerta_anomalias.capitalize());
                    $("#ban4_paredes_material").val(results.rows.item(i).ban4_paredes_material.capitalize());
                    $("#ban4_paredes_estado").val(results.rows.item(i).ban4_paredes_estado.capitalize());
                    $("#ban4_paredes_anomalias").val(results.rows.item(i).ban4_paredes_anomalias.capitalize());
                    $("#ban4_pisos_material").val(results.rows.item(i).ban4_pisos_material.capitalize());
                    $("#ban4_pisos_estado").val(results.rows.item(i).ban4_pisos_estado.capitalize());
                    $("#ban4_pisos_anomalias").val(results.rows.item(i).ban4_pisos_anomalias.capitalize());
                    $("#ban4_techo_material").val(results.rows.item(i).ban4_techo_material.capitalize());
                    $("#ban4_techo_estado").val(results.rows.item(i).ban4_techo_estado.capitalize());
                    $("#ban4_techo_anomalias").val(results.rows.item(i).ban4_techo_anomalias.capitalize());
                    $("#ban4_cielo_material").val(results.rows.item(i).ban4_cielo_material.capitalize());
                    $("#ban4_cielo_estado").val(results.rows.item(i).ban4_cielo_estado.capitalize());
                    $("#ban4_cielo_anomalias").val(results.rows.item(i).ban4_cielo_anomalias.capitalize());
                    $("#ban4_estruct_material").val(results.rows.item(i).ban4_estruct_material.capitalize());
                    $("#ban4_estruct_estado").val(results.rows.item(i).ban4_estruct_estado.capitalize());
                    $("#ban4_estruct_anomalias").val(results.rows.item(i).ban4_estruct_anomalias.capitalize());
                    $("#ban4_panete_material").val(results.rows.item(i).ban4_panete_material.capitalize());
                    $("#ban4_panete_estado").val(results.rows.item(i).ban4_panete_estado.capitalize());
                    $("#ban4_panete_anomalias").val(results.rows.item(i).ban4_panete_anomalias.capitalize());
                    $("#ban4_pintu_material").val(results.rows.item(i).ban4_pintu_material.capitalize());
                    $("#ban4_pintu_estado").val(results.rows.item(i).ban4_pintu_estado.capitalize());
                    $("#ban4_pintu_anomalias").val(results.rows.item(i).ban4_pintu_anomalias.capitalize());
                    $("#ban4_ventana_material").val(results.rows.item(i).ban4_ventana_material.capitalize());
                    $("#ban4_ventana_estado").val(results.rows.item(i).ban4_ventana_estado.capitalize());
                    $("#ban4_ventana_anomalias").val(results.rows.item(i).ban4_ventana_anomalias.capitalize());
                    $("#ban4_puerta_material").val(results.rows.item(i).ban4_puerta_material.capitalize());
                    $("#ban4_puerta_estado").val(results.rows.item(i).ban4_puerta_estado.capitalize());
                    $("#ban4_puerta_anomalias").val(results.rows.item(i).ban4_puerta_anomalias.capitalize());
                    $("#corr1_paredes_material").val(results.rows.item(i).corr1_paredes_material.capitalize());
                    $("#corr1_paredes_estado").val(results.rows.item(i).corr1_paredes_estado.capitalize());
                    $("#corr1_paredes_anomalias").val(results.rows.item(i).corr1_paredes_anomalias.capitalize());
                    $("#corr1_pisos_material").val(results.rows.item(i).corr1_pisos_material.capitalize());
                    $("#corr1_pisos_estado").val(results.rows.item(i).corr1_pisos_estado.capitalize());
                    $("#corr1_pisos_anomalias").val(results.rows.item(i).corr1_pisos_anomalias.capitalize());
                    $("#corr1_techo_material").val(results.rows.item(i).corr1_techo_material.capitalize());
                    $("#corr1_techo_estado").val(results.rows.item(i).corr1_techo_estado.capitalize());
                    $("#corr1_techo_anomalias").val(results.rows.item(i).corr1_techo_anomalias.capitalize());
                    $("#corr1_cielo_material").val(results.rows.item(i).corr1_cielo_material.capitalize());
                    $("#corr1_cielo_estado").val(results.rows.item(i).corr1_cielo_estado.capitalize());
                    $("#corr1_cielo_anomalias").val(results.rows.item(i).corr1_cielo_anomalias.capitalize());
                    $("#corr1_estruct_material").val(results.rows.item(i).corr1_estruct_material.capitalize());
                    $("#corr1_estruct_estado").val(results.rows.item(i).corr1_estruct_estado.capitalize());
                    $("#corr1_estruct_anomalias").val(results.rows.item(i).corr1_estruct_anomalias.capitalize());
                    $("#corr1_panete_material").val(results.rows.item(i).corr1_panete_material.capitalize());
                    $("#corr1_panete_estado").val(results.rows.item(i).corr1_panete_estado.capitalize());
                    $("#corr1_panete_anomalias").val(results.rows.item(i).corr1_panete_anomalias.capitalize());
                    $("#corr1_pintu_material").val(results.rows.item(i).corr1_pintu_material.capitalize());
                    $("#corr1_pintu_estado").val(results.rows.item(i).corr1_pintu_estado.capitalize());
                    $("#corr1_pintu_anomalias").val(results.rows.item(i).corr1_pintu_anomalias.capitalize());
                    $("#corr1_ventana_material").val(results.rows.item(i).corr1_ventana_material.capitalize());
                    $("#corr1_ventana_estado").val(results.rows.item(i).corr1_ventana_estado.capitalize());
                    $("#corr1_ventana_anomalias").val(results.rows.item(i).corr1_ventana_anomalias.capitalize());
                    $("#corr1_puerta_material").val(results.rows.item(i).corr1_puerta_material.capitalize());
                    $("#corr1_puerta_estado").val(results.rows.item(i).corr1_puerta_estado.capitalize());
                    $("#corr1_puerta_anomalias").val(results.rows.item(i).corr1_puerta_anomalias.capitalize());
                    $("#corr2_paredes_material").val(results.rows.item(i).corr2_paredes_material.capitalize());
                    $("#corr2_paredes_estado").val(results.rows.item(i).corr2_paredes_estado.capitalize());
                    $("#corr2_paredes_anomalias").val(results.rows.item(i).corr2_paredes_anomalias.capitalize());
                    $("#corr2_pisos_material").val(results.rows.item(i).corr2_pisos_material.capitalize());
                    $("#corr2_pisos_estado").val(results.rows.item(i).corr2_pisos_estado.capitalize());
                    $("#corr2_pisos_anomalias").val(results.rows.item(i).corr2_pisos_anomalias.capitalize());
                    $("#corr2_techo_material").val(results.rows.item(i).corr2_techo_material.capitalize());
                    $("#corr2_techo_estado").val(results.rows.item(i).corr2_techo_estado.capitalize());
                    $("#corr2_techo_anomalias").val(results.rows.item(i).corr2_techo_anomalias.capitalize());
                    $("#corr2_cielo_material").val(results.rows.item(i).corr2_cielo_material.capitalize());
                    $("#corr2_cielo_estado").val(results.rows.item(i).corr2_cielo_estado.capitalize());
                    $("#corr2_cielo_anomalias").val(results.rows.item(i).corr2_cielo_anomalias.capitalize());
                    $("#corr2_estruct_material").val(results.rows.item(i).corr2_estruct_material.capitalize());
                    $("#corr2_estruct_estado").val(results.rows.item(i).corr2_estruct_estado.capitalize());
                    $("#corr2_estruct_anomalias").val(results.rows.item(i).corr2_estruct_anomalias.capitalize());
                    $("#corr2_panete_material").val(results.rows.item(i).corr2_panete_material.capitalize());
                    $("#corr2_panete_estado").val(results.rows.item(i).corr2_panete_estado.capitalize());
                    $("#corr2_panete_anomalias").val(results.rows.item(i).corr2_panete_anomalias.capitalize());
                    $("#corr2_pintu_material").val(results.rows.item(i).corr2_pintu_material.capitalize());
                    $("#corr2_pintu_estado").val(results.rows.item(i).corr2_pintu_estado.capitalize());
                    $("#corr2_pintu_anomalias").val(results.rows.item(i).corr2_pintu_anomalias.capitalize());
                    $("#corr2_ventana_material").val(results.rows.item(i).corr2_ventana_material.capitalize());
                    $("#corr2_ventana_estado").val(results.rows.item(i).corr2_ventana_estado.capitalize());
                    $("#corr2_ventana_anomalias").val(results.rows.item(i).corr2_ventana_anomalias.capitalize());
                    $("#corr2_puerta_material").val(results.rows.item(i).corr2_puerta_material.capitalize());
                    $("#corr2_puerta_estado").val(results.rows.item(i).corr2_puerta_estado.capitalize());
                    $("#corr2_puerta_anomalias").val(results.rows.item(i).corr2_puerta_anomalias.capitalize());
                    $("#gar2_paredes_material").val(results.rows.item(i).gar2_paredes_material.capitalize());
                    $("#gar2_paredes_estado").val(results.rows.item(i).gar2_paredes_estado.capitalize());
                    $("#gar2_paredes_anomalias").val(results.rows.item(i).gar2_paredes_anomalias.capitalize());
                    $("#gar2_pisos_material").val(results.rows.item(i).gar2_pisos_material.capitalize());
                    $("#gar2_pisos_estado").val(results.rows.item(i).gar2_pisos_estado.capitalize());
                    $("#gar2_pisos_anomalias").val(results.rows.item(i).gar2_pisos_anomalias.capitalize());
                    $("#gar2_techo_material").val(results.rows.item(i).gar2_techo_material.capitalize());
                    $("#gar2_techo_estado").val(results.rows.item(i).gar2_techo_estado.capitalize());
                    $("#gar2_techo_anomalias").val(results.rows.item(i).gar2_techo_anomalias.capitalize());
                    $("#gar2_cielo_material").val(results.rows.item(i).gar2_cielo_material.capitalize());
                    $("#gar2_cielo_estado").val(results.rows.item(i).gar2_cielo_estado.capitalize());
                    $("#gar2_cielo_anomalias").val(results.rows.item(i).gar2_cielo_anomalias.capitalize());
                    $("#gar2_estruct_material").val(results.rows.item(i).gar2_estruct_material.capitalize());
                    $("#gar2_estruct_estado").val(results.rows.item(i).gar2_estruct_estado.capitalize());
                    $("#gar2_estruct_anomalias").val(results.rows.item(i).gar2_estruct_anomalias.capitalize());
                    $("#gar2_panete_material").val(results.rows.item(i).gar2_panete_material.capitalize());
                    $("#gar2_panete_estado").val(results.rows.item(i).gar2_panete_estado.capitalize());
                    $("#gar2_panete_anomalias").val(results.rows.item(i).gar2_panete_anomalias.capitalize());
                    $("#gar2_pintu_material").val(results.rows.item(i).gar2_pintu_material.capitalize());
                    $("#gar2_pintu_estado").val(results.rows.item(i).gar2_pintu_estado.capitalize());
                    $("#gar2_pintu_anomalias").val(results.rows.item(i).gar2_pintu_anomalias.capitalize());
                    $("#gar2_ventana_material").val(results.rows.item(i).gar2_ventana_material.capitalize());
                    $("#gar2_ventana_estado").val(results.rows.item(i).gar2_ventana_estado.capitalize());
                    $("#gar2_ventana_anomalias").val(results.rows.item(i).gar2_ventana_anomalias.capitalize());
                    $("#gar2_puerta_material").val(results.rows.item(i).gar2_puerta_material.capitalize());
                    $("#gar2_puerta_estado").val(results.rows.item(i).gar2_puerta_estado.capitalize());
                    $("#gar2_puerta_anomalias").val(results.rows.item(i).gar2_puerta_anomalias.capitalize());
                    $("#bod_paredes_material").val(results.rows.item(i).bod_paredes_material.capitalize());
                    $("#bod_paredes_estado").val(results.rows.item(i).bod_paredes_estado.capitalize());
                    $("#bod_paredes_anomalias").val(results.rows.item(i).bod_paredes_anomalias.capitalize());
                    $("#bod_pisos_material").val(results.rows.item(i).bod_pisos_material.capitalize());
                    $("#bod_pisos_estado").val(results.rows.item(i).bod_pisos_estado.capitalize());
                    $("#bod_pisos_anomalias").val(results.rows.item(i).bod_pisos_anomalias.capitalize());
                    $("#bod_techo_material").val(results.rows.item(i).bod_techo_material.capitalize());
                    $("#bod_techo_estado").val(results.rows.item(i).bod_techo_estado.capitalize());
                    $("#bod_techo_anomalias").val(results.rows.item(i).bod_techo_anomalias.capitalize());
                    $("#bod_cielo_material").val(results.rows.item(i).bod_cielo_material.capitalize());
                    $("#bod_cielo_estado").val(results.rows.item(i).bod_cielo_estado.capitalize());
                    $("#bod_cielo_anomalias").val(results.rows.item(i).bod_cielo_anomalias.capitalize());
                    $("#bod_estruct_material").val(results.rows.item(i).bod_estruct_material.capitalize());
                    $("#bod_estruct_estado").val(results.rows.item(i).bod_estruct_estado.capitalize());
                    $("#bod_estruct_anomalias").val(results.rows.item(i).bod_estruct_anomalias.capitalize());
                    $("#bod_panete_material").val(results.rows.item(i).bod_panete_material.capitalize());
                    $("#bod_panete_estado").val(results.rows.item(i).bod_panete_estado.capitalize());
                    $("#bod_panete_anomalias").val(results.rows.item(i).bod_panete_anomalias.capitalize());
                    $("#bod_pintu_material").val(results.rows.item(i).bod_pintu_material.capitalize());
                    $("#bod_pintu_estado").val(results.rows.item(i).bod_pintu_estado.capitalize());
                    $("#bod_pintu_anomalias").val(results.rows.item(i).bod_pintu_anomalias.capitalize());
                    $("#bod_ventana_material").val(results.rows.item(i).bod_ventana_material.capitalize());
                    $("#bod_ventana_estado").val(results.rows.item(i).bod_ventana_estado.capitalize());
                    $("#bod_ventana_anomalias").val(results.rows.item(i).bod_ventana_anomalias.capitalize());
                    $("#bod_puerta_material").val(results.rows.item(i).bod_puerta_material.capitalize());
                    $("#bod_puerta_estado").val(results.rows.item(i).bod_puerta_estado.capitalize());
                    $("#bod_puerta_anomalias").val(results.rows.item(i).bod_puerta_anomalias.capitalize());
                    $("#lav_paredes_material").val(results.rows.item(i).lav_paredes_material.capitalize());
                    $("#lav_paredes_estado").val(results.rows.item(i).lav_paredes_estado.capitalize());
                    $("#lav_paredes_anomalias").val(results.rows.item(i).lav_paredes_anomalias.capitalize());
                    $("#lav_pisos_material").val(results.rows.item(i).lav_pisos_material.capitalize());
                    $("#lav_pisos_estado").val(results.rows.item(i).lav_pisos_estado.capitalize());
                    $("#lav_pisos_anomalias").val(results.rows.item(i).lav_pisos_anomalias.capitalize());
                    $("#lav_techo_material").val(results.rows.item(i).lav_techo_material.capitalize());
                    $("#lav_techo_estado").val(results.rows.item(i).lav_techo_estado.capitalize());
                    $("#lav_techo_anomalias").val(results.rows.item(i).lav_techo_anomalias.capitalize());
                    $("#lav_cielo_material").val(results.rows.item(i).lav_cielo_material.capitalize());
                    $("#lav_cielo_estado").val(results.rows.item(i).lav_cielo_estado.capitalize());
                    $("#lav_cielo_anomalias").val(results.rows.item(i).lav_cielo_anomalias.capitalize());
                    $("#lav_estruct_material").val(results.rows.item(i).lav_estruct_material.capitalize());
                    $("#lav_estruct_estado").val(results.rows.item(i).lav_estruct_estado.capitalize());
                    $("#lav_estruct_anomalias").val(results.rows.item(i).lav_estruct_anomalias.capitalize());
                    $("#lav_panete_material").val(results.rows.item(i).lav_panete_material.capitalize());
                    $("#lav_panete_estado").val(results.rows.item(i).lav_panete_estado.capitalize());
                    $("#lav_panete_anomalias").val(results.rows.item(i).lav_panete_anomalias.capitalize());
                    $("#lav_pintu_material").val(results.rows.item(i).lav_pintu_material.capitalize());
                    $("#lav_pintu_estado").val(results.rows.item(i).lav_pintu_estado.capitalize());
                    $("#lav_pintu_anomalias").val(results.rows.item(i).lav_pintu_anomalias.capitalize());
                    $("#lav_ventana_material").val(results.rows.item(i).lav_ventana_material.capitalize());
                    $("#lav_ventana_estado").val(results.rows.item(i).lav_ventana_estado.capitalize());
                    $("#lav_ventana_anomalias").val(results.rows.item(i).lav_ventana_anomalias.capitalize());
                    $("#lav_puerta_material").val(results.rows.item(i).lav_puerta_material.capitalize());
                    $("#lav_puerta_estado").val(results.rows.item(i).lav_puerta_estado.capitalize());
                    $("#lav_puerta_anomalias").val(results.rows.item(i).lav_puerta_anomalias.capitalize());
                    $("#tanq_paredes_material").val(results.rows.item(i).tanq_paredes_material.capitalize());
                    $("#tanq_paredes_estado").val(results.rows.item(i).tanq_paredes_estado.capitalize());
                    $("#tanq_paredes_anomalias").val(results.rows.item(i).tanq_paredes_anomalias.capitalize());
                    $("#tanq_pisos_material").val(results.rows.item(i).tanq_pisos_material.capitalize());
                    $("#tanq_pisos_estado").val(results.rows.item(i).tanq_pisos_estado.capitalize());
                    $("#tanq_pisos_anomalias").val(results.rows.item(i).tanq_pisos_anomalias.capitalize());
                    $("#tanq_techo_material").val(results.rows.item(i).tanq_techo_material.capitalize());
                    $("#tanq_techo_estado").val(results.rows.item(i).tanq_techo_estado.capitalize());
                    $("#tanq_techo_anomalias").val(results.rows.item(i).tanq_techo_anomalias.capitalize());
                    $("#tanq_cielo_material").val(results.rows.item(i).tanq_cielo_material.capitalize());
                    $("#tanq_cielo_estado").val(results.rows.item(i).tanq_cielo_estado.capitalize());
                    $("#tanq_cielo_anomalias").val(results.rows.item(i).tanq_cielo_anomalias.capitalize());
                    $("#tanq_estruct_material").val(results.rows.item(i).tanq_estruct_material.capitalize());
                    $("#tanq_estruct_estado").val(results.rows.item(i).tanq_estruct_estado.capitalize());
                    $("#tanq_estruct_anomalias").val(results.rows.item(i).tanq_estruct_anomalias.capitalize());
                    $("#tanq_panete_material").val(results.rows.item(i).tanq_panete_material.capitalize());
                    $("#tanq_panete_estado").val(results.rows.item(i).tanq_panete_estado.capitalize());
                    $("#tanq_panete_anomalias").val(results.rows.item(i).tanq_panete_anomalias.capitalize());
                    $("#tanq_pintu_material").val(results.rows.item(i).tanq_pintu_material.capitalize());
                    $("#tanq_pintu_estado").val(results.rows.item(i).tanq_pintu_estado.capitalize());
                    $("#tanq_pintu_anomalias").val(results.rows.item(i).tanq_pintu_anomalias.capitalize());
                    $("#tanq_ventana_material").val(results.rows.item(i).tanq_ventana_material.capitalize());
                    $("#tanq_ventana_estado").val(results.rows.item(i).tanq_ventana_estado.capitalize());
                    $("#tanq_ventana_anomalias").val(results.rows.item(i).tanq_ventana_anomalias.capitalize());
                    $("#tanq_puerta_material").val(results.rows.item(i).tanq_puerta_material.capitalize());
                    $("#tanq_puerta_estado").val(results.rows.item(i).tanq_puerta_estado.capitalize());
                    $("#tanq_puerta_anomalias").val(results.rows.item(i).tanq_puerta_anomalias.capitalize());
                    $("#maq_paredes_material").val(results.rows.item(i).maq_paredes_material.capitalize());
                    $("#maq_paredes_estado").val(results.rows.item(i).maq_paredes_estado.capitalize());
                    $("#maq_paredes_anomalias").val(results.rows.item(i).maq_paredes_anomalias.capitalize());
                    $("#maq_pisos_material").val(results.rows.item(i).maq_pisos_material.capitalize());
                    $("#maq_pisos_estado").val(results.rows.item(i).maq_pisos_estado.capitalize());
                    $("#maq_pisos_anomalias").val(results.rows.item(i).maq_pisos_anomalias.capitalize());
                    $("#maq_techo_material").val(results.rows.item(i).maq_techo_material.capitalize());
                    $("#maq_techo_estado").val(results.rows.item(i).maq_techo_estado.capitalize());
                    $("#maq_techo_anomalias").val(results.rows.item(i).maq_techo_anomalias.capitalize());
                    $("#maq_cielo_material").val(results.rows.item(i).maq_cielo_material.capitalize());
                    $("#maq_cielo_estado").val(results.rows.item(i).maq_cielo_estado.capitalize());
                    $("#maq_cielo_anomalias").val(results.rows.item(i).maq_cielo_anomalias.capitalize());
                    $("#maq_estruct_material").val(results.rows.item(i).maq_estruct_material.capitalize());
                    $("#maq_estruct_estado").val(results.rows.item(i).maq_estruct_estado.capitalize());
                    $("#maq_estruct_anomalias").val(results.rows.item(i).maq_estruct_anomalias.capitalize());
                    $("#maq_panete_material").val(results.rows.item(i).maq_panete_material.capitalize());
                    $("#maq_panete_estado").val(results.rows.item(i).maq_panete_estado.capitalize());
                    $("#maq_panete_anomalias").val(results.rows.item(i).maq_panete_anomalias.capitalize());
                    $("#maq_pintu_material").val(results.rows.item(i).maq_pintu_material.capitalize());
                    $("#maq_pintu_estado").val(results.rows.item(i).maq_pintu_estado.capitalize());
                    $("#maq_pintu_anomalias").val(results.rows.item(i).maq_pintu_anomalias.capitalize());
                    $("#maq_ventana_material").val(results.rows.item(i).maq_ventana_material.capitalize());
                    $("#maq_ventana_estado").val(results.rows.item(i).maq_ventana_estado.capitalize());
                    $("#maq_ventana_anomalias").val(results.rows.item(i).maq_ventana_anomalias.capitalize());
                    $("#maq_puerta_material").val(results.rows.item(i).maq_puerta_material.capitalize());
                    $("#maq_puerta_estado").val(results.rows.item(i).maq_puerta_estado.capitalize());
                    $("#maq_puerta_anomalias").val(results.rows.item(i).maq_puerta_anomalias.capitalize());
                    $("#pisc_paredes_material").val(results.rows.item(i).pisc_paredes_material.capitalize());
                    $("#pisc_paredes_estado").val(results.rows.item(i).pisc_paredes_estado.capitalize());
                    $("#pisc_paredes_anomalias").val(results.rows.item(i).pisc_paredes_anomalias.capitalize());
                    $("#pisc_pisos_material").val(results.rows.item(i).pisc_pisos_material.capitalize());
                    $("#pisc_pisos_estado").val(results.rows.item(i).pisc_pisos_estado.capitalize());
                    $("#pisc_pisos_anomalias").val(results.rows.item(i).pisc_pisos_anomalias.capitalize());
                    $("#pisc_techo_material").val(results.rows.item(i).pisc_techo_material.capitalize());
                    $("#pisc_techo_estado").val(results.rows.item(i).pisc_techo_estado.capitalize());
                    $("#pisc_techo_anomalias").val(results.rows.item(i).pisc_techo_anomalias.capitalize());
                    $("#pisc_cielo_material").val(results.rows.item(i).pisc_cielo_material.capitalize());
                    $("#pisc_cielo_estado").val(results.rows.item(i).pisc_cielo_estado.capitalize());
                    $("#pisc_cielo_anomalias").val(results.rows.item(i).pisc_cielo_anomalias.capitalize());
                    $("#pisc_estruct_material").val(results.rows.item(i).pisc_estruct_material.capitalize());
                    $("#pisc_estruct_estado").val(results.rows.item(i).pisc_estruct_estado.capitalize());
                    $("#pisc_estruct_anomalias").val(results.rows.item(i).pisc_estruct_anomalias.capitalize());
                    $("#pisc_panete_material").val(results.rows.item(i).pisc_panete_material.capitalize());
                    $("#pisc_panete_estado").val(results.rows.item(i).pisc_panete_estado.capitalize());
                    $("#pisc_panete_anomalias").val(results.rows.item(i).pisc_panete_anomalias.capitalize());
                    $("#pisc_pintu_material").val(results.rows.item(i).pisc_pintu_material.capitalize());
                    $("#pisc_pintu_estado").val(results.rows.item(i).pisc_pintu_estado.capitalize());
                    $("#pisc_pintu_anomalias").val(results.rows.item(i).pisc_pintu_anomalias.capitalize());
                    $("#pisc_ventana_material").val(results.rows.item(i).pisc_ventana_material.capitalize());
                    $("#pisc_ventana_estado").val(results.rows.item(i).pisc_ventana_estado.capitalize());
                    $("#pisc_ventana_anomalias").val(results.rows.item(i).pisc_ventana_anomalias.capitalize());
                    $("#pisc_puerta_material").val(results.rows.item(i).pisc_puerta_material.capitalize());
                    $("#pisc_puerta_estado").val(results.rows.item(i).pisc_puerta_estado.capitalize());
                    $("#pisc_puerta_anomalias").val(results.rows.item(i).pisc_puerta_anomalias.capitalize());
                    
                    $("#otro1_paredes_material").val(results.rows.item(i).otro1_paredes_material.capitalize());
                    $("#otro1_paredes_estado").val(results.rows.item(i).otro1_paredes_estado.capitalize());
                    $("#otro1_paredes_anomalias").val(results.rows.item(i).otro1_paredes_anomalias.capitalize());
                    $("#otro1_pisos_material").val(results.rows.item(i).otro1_pisos_material.capitalize());
                    $("#otro1_pisos_estado").val(results.rows.item(i).otro1_pisos_estado.capitalize());
                    $("#otro1_pisos_anomalias").val(results.rows.item(i).otro1_pisos_anomalias.capitalize());
                    $("#otro1_techo_material").val(results.rows.item(i).otro1_techo_material.capitalize());
                    $("#otro1_techo_estado").val(results.rows.item(i).otro1_techo_estado.capitalize());
                    $("#otro1_techo_anomalias").val(results.rows.item(i).otro1_techo_anomalias.capitalize());
                    $("#otro1_cielo_material").val(results.rows.item(i).otro1_cielo_material.capitalize());
                    $("#otro1_cielo_estado").val(results.rows.item(i).otro1_cielo_estado.capitalize());
                    $("#otro1_cielo_anomalias").val(results.rows.item(i).otro1_cielo_anomalias.capitalize());
                    $("#otro1_estruct_material").val(results.rows.item(i).otro1_estruct_material.capitalize());
                    $("#otro1_estruct_estado").val(results.rows.item(i).otro1_estruct_estado.capitalize());
                    $("#otro1_estruct_anomalias").val(results.rows.item(i).otro1_estruct_anomalias.capitalize());
                    $("#otro1_panete_material").val(results.rows.item(i).otro1_panete_material.capitalize());
                    $("#otro1_panete_estado").val(results.rows.item(i).otro1_panete_estado.capitalize());
                    $("#otro1_panete_anomalias").val(results.rows.item(i).otro1_panete_anomalias.capitalize());
                    $("#otro1_pintu_material").val(results.rows.item(i).otro1_pintu_material.capitalize());
                    $("#otro1_pintu_estado").val(results.rows.item(i).otro1_pintu_estado.capitalize());
                    $("#otro1_pintu_anomalias").val(results.rows.item(i).otro1_pintu_anomalias.capitalize());
                    $("#otro1_ventana_material").val(results.rows.item(i).otro1_ventana_material.capitalize());
                    $("#otro1_ventana_estado").val(results.rows.item(i).otro1_ventana_estado.capitalize());
                    $("#otro1_ventana_anomalias").val(results.rows.item(i).otro1_ventana_anomalias.capitalize());
                    $("#otro1_puerta_material").val(results.rows.item(i).otro1_puerta_material.capitalize());
                    $("#otro1_puerta_estado").val(results.rows.item(i).otro1_puerta_estado.capitalize());
                    $("#otro1_puerta_anomalias").val(results.rows.item(i).otro1_puerta_anomalias.capitalize());
                    $("#otro2_paredes_material").val(results.rows.item(i).otro2_paredes_material.capitalize());
                    $("#otro2_paredes_estado").val(results.rows.item(i).otro2_paredes_estado.capitalize());
                    $("#otro2_paredes_anomalias").val(results.rows.item(i).otro2_paredes_anomalias.capitalize());
                    $("#otro2_pisos_material").val(results.rows.item(i).otro2_pisos_material.capitalize());
                    $("#otro2_pisos_estado").val(results.rows.item(i).otro2_pisos_estado.capitalize());
                    $("#otro2_pisos_anomalias").val(results.rows.item(i).otro2_pisos_anomalias.capitalize());
                    $("#otro2_techo_material").val(results.rows.item(i).otro2_techo_material.capitalize());
                    $("#otro2_techo_estado").val(results.rows.item(i).otro2_techo_estado.capitalize());
                    $("#otro2_techo_anomalias").val(results.rows.item(i).otro2_techo_anomalias.capitalize());
                    $("#otro2_cielo_material").val(results.rows.item(i).otro2_cielo_material.capitalize());
                    $("#otro2_cielo_estado").val(results.rows.item(i).otro2_cielo_estado.capitalize());
                    $("#otro2_cielo_anomalias").val(results.rows.item(i).otro2_cielo_anomalias.capitalize());
                    $("#otro2_estruct_material").val(results.rows.item(i).otro2_estruct_material.capitalize());
                    $("#otro2_estruct_estado").val(results.rows.item(i).otro2_estruct_estado.capitalize());
                    $("#otro2_estruct_anomalias").val(results.rows.item(i).otro2_estruct_anomalias.capitalize());
                    $("#otro2_panete_material").val(results.rows.item(i).otro2_panete_material.capitalize());
                    $("#otro2_panete_estado").val(results.rows.item(i).otro2_panete_estado.capitalize());
                    $("#otro2_panete_anomalias").val(results.rows.item(i).otro2_panete_anomalias.capitalize());
                    $("#otro2_pintu_material").val(results.rows.item(i).otro2_pintu_material.capitalize());
                    $("#otro2_pintu_estado").val(results.rows.item(i).otro2_pintu_estado.capitalize());
                    $("#otro2_pintu_anomalias").val(results.rows.item(i).otro2_pintu_anomalias.capitalize());
                    $("#otro2_ventana_material").val(results.rows.item(i).otro2_ventana_material.capitalize());
                    $("#otro2_ventana_estado").val(results.rows.item(i).otro2_ventana_estado.capitalize());
                    $("#otro2_ventana_anomalias").val(results.rows.item(i).otro2_ventana_anomalias.capitalize());
                    $("#otro2_puerta_material").val(results.rows.item(i).otro2_puerta_material.capitalize());
                    $("#otro2_puerta_estado").val(results.rows.item(i).otro2_puerta_estado.capitalize());
                    $("#otro2_puerta_anomalias").val(results.rows.item(i).otro2_puerta_anomalias.capitalize());
                    $("#otro3_paredes_material").val(results.rows.item(i).otro3_paredes_material.capitalize());
                    $("#otro3_paredes_estado").val(results.rows.item(i).otro3_paredes_estado.capitalize());
                    $("#otro3_paredes_anomalias").val(results.rows.item(i).otro3_paredes_anomalias.capitalize());
                    $("#otro3_pisos_material").val(results.rows.item(i).otro3_pisos_material.capitalize());
                    $("#otro3_pisos_estado").val(results.rows.item(i).otro3_pisos_estado.capitalize());
                    $("#otro3_pisos_anomalias").val(results.rows.item(i).otro3_pisos_anomalias.capitalize());
                    $("#otro3_techo_material").val(results.rows.item(i).otro3_techo_material.capitalize());
                    $("#otro3_techo_estado").val(results.rows.item(i).otro3_techo_estado.capitalize());
                    $("#otro3_techo_anomalias").val(results.rows.item(i).otro3_techo_anomalias.capitalize());
                    $("#otro3_cielo_material").val(results.rows.item(i).otro3_cielo_material.capitalize());
                    $("#otro3_cielo_estado").val(results.rows.item(i).otro3_cielo_estado.capitalize());
                    $("#otro3_cielo_anomalias").val(results.rows.item(i).otro3_cielo_anomalias.capitalize());
                    $("#otro3_estruct_material").val(results.rows.item(i).otro3_estruct_material.capitalize());
                    $("#otro3_estruct_estado").val(results.rows.item(i).otro3_estruct_estado.capitalize());
                    $("#otro3_estruct_anomalias").val(results.rows.item(i).otro3_estruct_anomalias.capitalize());
                    $("#otro3_panete_material").val(results.rows.item(i).otro3_panete_material.capitalize());
                    $("#otro3_panete_estado").val(results.rows.item(i).otro3_panete_estado.capitalize());
                    $("#otro3_panete_anomalias").val(results.rows.item(i).otro3_panete_anomalias.capitalize());
                    $("#otro3_pintu_material").val(results.rows.item(i).otro3_pintu_material.capitalize());
                    $("#otro3_pintu_estado").val(results.rows.item(i).otro3_pintu_estado.capitalize());
                    $("#otro3_pintu_anomalias").val(results.rows.item(i).otro3_pintu_anomalias.capitalize());
                    $("#otro3_ventana_material").val(results.rows.item(i).otro3_ventana_material.capitalize());
                    $("#otro3_ventana_estado").val(results.rows.item(i).otro3_ventana_estado.capitalize());
                    $("#otro3_ventana_anomalias").val(results.rows.item(i).otro3_ventana_anomalias.capitalize());
                    $("#otro3_puerta_material").val(results.rows.item(i).otro3_puerta_material.capitalize());
                    $("#otro3_puerta_estado").val(results.rows.item(i).otro3_puerta_estado.capitalize());
                    $("#otro3_puerta_anomalias").val(results.rows.item(i).otro3_puerta_anomalias.capitalize());
                    $("#otro4_paredes_material").val(results.rows.item(i).otro4_paredes_material.capitalize());
                    $("#otro4_paredes_estado").val(results.rows.item(i).otro4_paredes_estado.capitalize());
                    $("#otro4_paredes_anomalias").val(results.rows.item(i).otro4_paredes_anomalias.capitalize());
                    $("#otro4_pisos_material").val(results.rows.item(i).otro4_pisos_material.capitalize());
                    $("#otro4_pisos_estado").val(results.rows.item(i).otro4_pisos_estado.capitalize());
                    $("#otro4_pisos_anomalias").val(results.rows.item(i).otro4_pisos_anomalias.capitalize());
                    $("#otro4_techo_material").val(results.rows.item(i).otro4_techo_material.capitalize());
                    $("#otro4_techo_estado").val(results.rows.item(i).otro4_techo_estado.capitalize());
                    $("#otro4_techo_anomalias").val(results.rows.item(i).otro4_techo_anomalias.capitalize());
                    $("#otro4_cielo_material").val(results.rows.item(i).otro4_cielo_material.capitalize());
                    $("#otro4_cielo_estado").val(results.rows.item(i).otro4_cielo_estado.capitalize());
                    $("#otro4_cielo_anomalias").val(results.rows.item(i).otro4_cielo_anomalias.capitalize());
                    $("#otro4_estruct_material").val(results.rows.item(i).otro4_estruct_material.capitalize());
                    $("#otro4_estruct_estado").val(results.rows.item(i).otro4_estruct_estado.capitalize());
                    $("#otro4_estruct_anomalias").val(results.rows.item(i).otro4_estruct_anomalias.capitalize());
                    $("#otro4_panete_material").val(results.rows.item(i).otro4_panete_material.capitalize());
					

					
                    $("#otro4_panete_estado").val(results.rows.item(i).otro4_panete_estado.capitalize());
                    $("#otro4_panete_anomalias").val(results.rows.item(i).otro4_panete_anomalias.capitalize());
                    $("#otro4_pintu_material").val(results.rows.item(i).otro4_pintu_material.capitalize());
                    $("#otro4_pintu_estado").val(results.rows.item(i).otro4_pintu_estado.capitalize());
                    $("#otro4_pintu_anomalias").val(results.rows.item(i).otro4_pintu_anomalias.capitalize());
                    $("#otro4_ventana_material").val(results.rows.item(i).otro4_ventana_material.capitalize());
                    $("#otro4_ventana_estado").val(results.rows.item(i).otro4_ventana_estado.capitalize());
                    $("#otro4_ventana_anomalias").val(results.rows.item(i).otro4_ventana_anomalias.capitalize());
                    $("#otro4_puerta_material").val(results.rows.item(i).otro4_puerta_material.capitalize());
                    $("#otro4_puerta_estado").val(results.rows.item(i).otro4_puerta_estado.capitalize());
                    $("#otro4_puerta_anomalias").val(results.rows.item(i).otro4_puerta_anomalias.capitalize());
       
					
					
					
              
                    $("#otro1_nombre").val(results.rows.item(i).otro1_nombre);
                    $("#otro2_nombre").val(results.rows.item(i).otro2_nombre);
                    $("#otro3_nombre").val(results.rows.item(i).otro3_nombre);
                    $("#otro4_nombre").val(results.rows.item(i).otro4_nombre);
                    
                    $("#observa").val(results.rows.item(i).observa);
                    
                    $("#rela_repre_prop").val(results.rows.item(i).rela_repre_prop);
                    $("#elementos_si").prop('checked', JSON.parse(results.rows.item(i).elementos_si));
                    $("#falta_rela").val(results.rows.item(i).falta_rela);
                    
                    $("#habitada").prop('checked', !!+results.rows.item(i).habitada);
                    $("#deshabitada").prop('checked', !!+results.rows.item(i).deshabitada);
                    $("#rural").prop('checked', !!+results.rows.item(i).rural);
                    $("#urbano").prop('checked', !!+results.rows.item(i).urbano);   

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

        var lat = 0;
        var long = 0;

        var onSuccess = function(position) {



            /*alert('Latitude: ' + position.coords.latitude + '\n' +
                    'Longitude: ' + position.coords.longitude + '\n' +
                    'Altitude: ' + position.coords.altitude + '\n' +
                     'Accuracy: ' + position.coords.accuracy + '\n' +
                     'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                     'Heading: ' + position.coords.heading + '\n' +
                     'Speed: ' + position.coords.speed + '\n' +
                     'Timestamp: ' + position.timestamp + '\n');*/

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
            data:  "<!doctype html>"
            + "<html>"
            + "    <head>"
            + "        <meta charset='ISO-8859-1'>"
            + "        <title></title>"
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
            + "                width: 12%;  text-align:center;	"
            + "            }"
			+ "            .celdaTabla{"
            + "                text-align:center;	"
            + "            }"
			+ "            .tituloFila4{"
            + "                text-align:left;	"
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
            + "  </style>"
            + "    </head>"
            + "    <body>"
    
            + " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + " <tbody>"
            + " <tr><td class='encabezado2' colspan='4'>Pagina 1 de "+$("#pagDe").val()+" &nbsp&nbsp</td></tr>"
          + "  <tr>"
			+ "  <td colspan='4'>"
			+ "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
			+ "    <tbody>"
			+ "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
			+ "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA PRE REGISTRO DE VIVIENDA</td>"
			+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
			+ "   </tr>"
			+ "   <tr>"
			+ "    <td colspan='4'>"
			+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
			+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-06</td>"					
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
            + "  <td style='width: 12.5%'>Fecha:</td>"
            + "  <td style='width: 12.5%'> "+  ($("#fecha").val()) +"</td>"
            + "  <td style='width: 12.5%'>Línea</td>"
            + "  <td style='width: 12.5%'>  " + ($("#linea").val())+" </td>"
            + "  <td style='width: 12.5%'>Acta Nº.</td>"
            + "  <td style='width: 12.5%'>  PRE-AVIV-" + $("#customActa").val() +" </td>"
          

            + "   </tr>    "
            + "  </tbody>"
            + "</table>"
    
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
            + "                    <td style='width:12%'>Departamento</td>"
            + "                    <td >" + $("#P_DEPTO option:selected").text() + "</td>"
            + "                    <td style='width:12%'>Origen de coord</td>"
            + "                    <td >"+  $("#origen_coord").val() +"</td>"
            + "                    <td style='width:14%'>Erosión superficial:</td>"
            + "                    <td style='width:15%'>Movimientos en Masa:</td>"
            + "                </tr>    "
            + "                <tr>"
            + "                    <td >Municipio</td>"
            + "                    <td >" + $("#P_MUN option:selected").text() + "</td>"
            + "                    <td >Coordenada E</td>"
            + "                    <td >" + $("#coordenada_e").val() + "</td>"
            + "                    <td >Laminar " + ($("#laminar").is(':checked') ? "X" : "") + "</td>"
            + "                    <td>Ca&#237;das" + ($("#caidas").is(':checked') ? "X" : "") + "</td>"
            + "                </tr>    "
            + "                <tr>"
            + "                    <td >Vereda</td>"
            + "                    <td >" + $("#vereda").val() + "</td>"
            + "                    <td >Coordenada N</td>"
            + "                    <td >" + $("#coordenada_n").val() + "</td>"
            + "                    <td >Surcos  " + ($("#surcos").is(':checked') ? "X" : "") + "</td>"
            + "                    <td>Deslizamientos " + ($("#deslizamientos").is(':checked') ? "X" : "") + "</td>"
            + "                </tr>    "
            + "                <tr>"
            + "                    <td >Predio</td>"
            + "                    <td >" + $("#predio").val() + "</td>"
            + "                    <td >Stk</td>"
            + "                    <td >" + $("#stk").val() + "</td>"
            + "                    <td >C&#225;rcavas " + ($("#carcavas").is(':checked') ? "X" : "") + "</td>"
            + "                    <td  >Volcamiento " + ($("#volcamientos").is(':checked') ? "X" : "") + "</td>"
            + "                </tr>    "
            + "                <tr>"
            + "                    <td >Propietario</td>"
            + "                    <td >" + $("#propietario").val() + "</td>"
            + "                    <td >Sp. Cercano</td>"
            + "                    <td >" + $("#sp_cercano").val() + "</td>"
            + "                    <td >Socavaci&#243;n " + ($("#socavacion").is(':checked') ? "X" : "") + "</td>"
            + "                    <td >Flujos " + ($("#flujos").is(':checked') ? "X" : "") + "</td>"
            + "                </tr>    "
            + "                <tr>"
            + "                    <td >Teléfono</td>"
            + "                    <td >" + $("#telefono").val() + "</td>"
            + "                    <td >Distancia sp</td>"
            + "                    <td >" + $("#distancia_sp").val() + "</td>"
            + "                    <td >Ninguno " + ($("#ninguno").is(':checked') ? "X" : "") + "</td>"
            + "                    <td >Ninguno " + ($("#ningunom").is(':checked') ? "X" : "") + "</td>"
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
            + "   <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "<tr> "
            + "    <td align='center'> <b>Vivienda habitada (      " + ($("#habitada").is(':checked') ? "X" : "") + "),     Vivienda deshabitada (" + ($("#deshabitada").is(':checked') ? "X" : "") + ") ,     Predio rural (" + ($("#rural").is(':checked') ? "X" : "") + "),   Predio urbano (" + ($("#urbano").is(':checked') ? "X" : "") + ")</b></td>"
            + "</tr> "
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td><p align='justify' style='padding: 5px'>En el municipio de " + $("#P_MUN option:selected").text()
            + " " + $("#vereda").val() + " del departamento de " + $("#P_DEPTO option:selected").text()
            + ", se reunieron el funcionario (a). "+window.localStorage.getItem('representante')+" con c&#233;dula de ciudadania "+window.localStorage.getItem('numdocrepre')+" de "+window.localStorage.getItem('lugarcc')+" quien actúa como evaluador y el (la) se&#241;or (a) " + $("#propietario").val() + ", con c&#233;dula de  ciudadan&#237;a N&#186; " + $("#cc_propietario").val() + "  de " + $("#lugar_cc_propietario").val() + " , como propietario o representante del predio,  con el fin de realizar un inventario físico de la vivienda y dem&#225;s construcciones anexas que se describen a continuaci&#243;n:</p></td>"
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
            + "                    <td class='tituloFila3'>Predio</td>"
            + "                    <td class='celdaTabla'>M</td>"
            + "                    <td class='celdaTabla'>E</td>"
            + "                    <td class='celdaTabla'>C</td>"
            + "                    <td class='celdaTabla'>M</td>"
            + "                    <td class='celdaTabla'>E</td>"
            + "                    <td class='celdaTabla'>C</td>"
            + "                    <td class='celdaTabla'>M</td>"
            + "                    <td class='celdaTabla'>E</td>"
            + "                    <td class='celdaTabla'>C</td>"
            + "                    <td class='celdaTabla'>M</td>"
            + "                    <td class='celdaTabla'>E</td>"
            + "                    <td class='celdaTabla'>C</td>"
            + "                    <td class='celdaTabla'>M</td>"
            + "                    <td class='celdaTabla'>E</td>"
            + "                    <td class='celdaTabla'>C</td>"
            + "                    <td class='celdaTabla'>M</td>"
            + "                    <td class='celdaTabla'>E</td>"
            + "                    <td class='celdaTabla'>C</td>"
            + "                    <td class='celdaTabla'>M</td>"
            + "                    <td class='celdaTabla'>E</td>"
            + "                    <td class='celdaTabla'>C</td>"
            + "                    <td class='celdaTabla'>M</td>"
            + "                    <td class='celdaTabla'>E</td>"
            + "                    <td class='celdaTabla'>C</td>"
            + "                    <td class='celdaTabla'>M</td>"
            + "                    <td class='celdaTabla'>E</td>"
            + "                    <td class='celdaTabla'>C</td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td class='tituloFila4'>Exterior</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ex_puerta_anomalias").val() + "</td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td class='tituloFila4'>Alcoba 1</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc1_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Alcoba 2</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Alcoba 3</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc3_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Alcoba 4</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc4_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Alcoba 5</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#alc5_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Sala 1</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal1_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Sala 2</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#sal2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Comedor 1</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come1_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Comedor 2</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#come2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Cocina 1</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci1_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Cocina 2</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#coci2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Ba&#241;o 1</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban1_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Ba&#241;o 2</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Ba&#241;o 3</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban3_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Ba&#241;o 4</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#ban4_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Corredor 1</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr1_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Corredor 2</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#corr2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Garaje</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#gar2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Bodega</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#bod_puerta_anomalias").val() + "</td>"
            + "                </tr>   "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Lavadero</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#lav_puerta_anomalias").val() + "</td>"
            + "                </tr> "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Tanque</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#tanq_puerta_anomalias").val() + "</td>"
            + "                </tr> "
            + "                <tr>"
            + "                    <td class='tituloFila4'>C. de maquinas</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#maq_puerta_anomalias").val() + "</td>"
            + "                </tr> "
            + "                <tr>"
            + "                    <td class='tituloFila4'>Piscina</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#pisc_puerta_anomalias").val() + "</td>"
            + "                </tr> "
    
            + "                <tr>"
            + "                    <td class='tituloFila4'>" + $("#otro1_nombre").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro1_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
    
            + "                <tr>"
            + "                    <td class='tituloFila4'>" + $("#otro2_nombre").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro2_puerta_anomalias").val() + "</td>"
            + "                </tr>     "   

            + "                <tr>"
            + "                    <td class='tituloFila4'>" + $("#otro3_nombre").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro3_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
    
            + "                <tr>"
            + "                    <td class='tituloFila4'>" + $("#otro4_nombre").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_paredes_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_paredes_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_paredes_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_pisos_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_pisos_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_pisos_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_techo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_techo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_techo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_cielo_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_cielo_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_cielo_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_estruct_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_estruct_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_estruct_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_panete_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_panete_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_panete_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_pintu_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_pintu_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_pintu_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_ventana_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_ventana_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_ventana_anomalias").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_puerta_material").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_puerta_estado").val() + "</td>"
            + "                    <td class='celdaTabla'>" + $("#otro4_puerta_anomalias").val() + "</td>"
            + "                </tr>     "
    
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td class='encabezado'>Convenciones</td>"
            + "                </tr>    "
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "            <tbody>"
            + "                <tr>"
            + "                    <td class='tituloFila'>Material (M)</td>"
            + "                    <td><table width='100%' border='0' cellspacing='0' cellpadding='0'>"
            + "                            <tbody>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Paredes: </td>"
            + "                                    <td>(L) Ladrillo (B) Bloque (Ma) Madera (G) Guadua (Ba) Bahareque (A) Adobe (O) Otro (X) No tiene </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Pisos: </td>"
            + "                                    <td>(C) Cemento (B) Baldos&#237;n (Ma) Madera (T) Tierra (O) Otro </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Estructura: </td>"
            + "                                    <td>(Ma) Madera (C) Concreto (Me) Met&#225;lica (O) Otro (X) No tiene </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Techos: </td>"
            + "                                    <td>(Pc) Placa cemento (Ma) Madera (A) Asbesto-cemento (B) Teja de barro (Z) Zinc (P) Palma (O) Otro </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Cielo raso </td>"
            + "                                    <td>(Ma) Madera (I) Icopor (Y) Yeso (O) Otro (X) No tiene </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Ventanas: </td>"
            + "                                    <td>(Ma) Madera (Me) Met&#225;lica (O) Otro (X) No tiene </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Pintura: </td>"
            + "                                    <td>(C) Cal (V) Vinilo (A) Aceite (O) Otro (X) No tiene </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Puertas: </td>"
            + "                                    <td>(Ma)  Madera   (Me)  Met&#225;licas  (O) Otro (X) No tiene </td>"
            + "                                </tr>"
            + "                                <tr>"
            + "                                    <td class='tituloFila2'>Pa&#241;ete: </td>"
            + "                                    <td>(Mo) Mortero  (R) Repelle  (Est) Estuco (O) Otro  (X) No tiene</td>"
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
            + "                    <td class='tituloFila'>Estado(E) </td>"
            + "                    <td>  (1) Muy malo   (2) Malo   (3) Regular   (4) Bueno</td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td class='tituloFila'>Anomalías principales (C): </td>"
            + "                    <td>(G)  Grietas   (F)  Fisuras   (H)  Humedades   (D)  Desprendimientos   (De)   Desgaste (Ox) Oxidación</td>"
            + "                </tr>"
            + "            </tbody>"
            + "        </table>"
            + "        <table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;'>"
            + "                <tr>"
            + "                    <td class='encabezado' >Observaciones Generales</td>"
            + "                </tr>"
            + "                <tr>"
            + "                    <td style='height: 100px;vertical-align: top;padding:5px;text-align: justify' >" + $("#observa").val() + "</td>"
            + "                </tr>"
            + "        </table>"
            + " <table width='100%' border='1' cellspacing='0' cellpadding='0' style='border: 1px solid black;'>"
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
            + "        </table>"
            + "<p style='page-break-after: always;'> "   
            + " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + "  <tbody>"
            + "   <tr><td class='encabezado2' colspan='4'>Pagina 2 de "+$("#pagDe").val()+" &nbsp&nbsp</td></tr>"
          + "  <tr>"
			+ "  <td colspan='4'>"
			+ "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
			+ "    <tbody>"
			+ "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
			+ "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA PRE REGISTRO DE VIVIENDA</td>"
			+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
			+ "   </tr>"
			+ "   <tr>"
			+ "    <td colspan='4'>"
			+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
			+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-06</td>"					
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
            + "  <td style='width: 12.5%'>Fecha:</td>"
            + "  <td style='width: 12.5%'> "+  ($("#fecha").val()) +"</td>"
            + "  <td style='width: 12.5%'>Línea</td>"
            + "  <td style='width: 12.5%'>  " + ($("#linea").val())+" </td>"
            + "  <td style='width: 12.5%'>Acta Nº.</td>"
            + "  <td style='width: 12.5%'>  PRE-AVIV-" + $("#customActa").val() +" </td>"
            + "   </tr>    "
            + "  </tbody>"
            + "</table>"
    
            + "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + " <tr>"
            + "     <td class='encabezado' colspan='5'>Firmas de Aprobaci&#243;n</td>"
            + " </tr>"
            + " <tr>"
            + "     <td colspan='5'>Los presentes están de acuerdo con la evaluación efectuada y en constancia firman siendo las _______ horas del día ___________ del mes de ______________ de 201___.</td>"
            + " </tr>"
            + "<tr>"
            + " <td>AVISO DE PRIVACIDAD PARA RECOLECCIÓN DE DATOS PERSONALES</td> "
            + "</tr>"
            + "<tr>"
            + " <td style='text-align: justify;font-size:11px;' colspan='4'>En mi calidad de titular de información personal, actuando libre y voluntariamente, al diligenciar los datos aquí solicitados, autorizo a PETROSEISMIC SERVICES S.A, ubicado en la Carrera 23 # 102 - 53 de la ciudad de Bogotá, Teléfono: +57 1 743 3650 , Movíl: +57 3114524265. Entiendo que las políticas para el tratamiento de mi información personal (Ley 1581/2012), así como el procedimiento para elevar cualquier solicitud, queja o reclamo al correo electrónico contactol@petroseismicservices.com, para que de forma directa o a través de terceros realice el tratamiento de mi información personal, el cual consiste en recolectar, almacenar, usar, transferir y administrar mis datos personales, para el acta de vecindad.</td> "
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
            + "<table  width='100%'>"
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
			+ "     <td>NOMBRE DEL INTERVENTOR AMBIENTAL</td><td></td><td colspan='2'>FIRMA DEL INTERVENTOR AMBIENTAL</td>"
			+ "</tr>"
			+" <tr>"
			+ "     <td></td><td></td><td colspan='2'>C.C #_____________ de _________</td>"
			+ " </tr>"

			
			
			
            +" <tr>"
            + "     <td colspan='4' style='height:100px;vertical-align:bottom;'>FECHA DE APROBACIÓN________________</td>"
            + "</tr>"
            + "</table>"
                + "</p>"
            + "<p style='page-break-after: always;'> "  
			
			+ " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + " <tbody>"
            + " <tr><td class='encabezado2' colspan='4'>Pagina 3 de "+$("#pagDe").val()+" &nbsp&nbsp</td></tr>"
            + "  <tr>"
			+ "  <td colspan='4'>"
			+ "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
			+ "    <tbody>"
			+ "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
			+ "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA PRE REGISTRO DE VIVIENDA</td>"
			+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
			+ "   </tr>"
			+ "   <tr>"
			+ "    <td colspan='4'>"
			+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
			+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-06</td>"					
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
            + "  <td style='width: 12.5%'>Fecha:</td>"
            + "  <td style='width: 12.5%'> "+  ($("#fecha").val()) +"</td>"
            + "  <td style='width: 12.5%'>Línea</td>"
            + "  <td style='width: 12.5%'>  " + ($("#linea").val())+" </td>"
            + "  <td style='width: 12.5%'>Acta Nº.</td>"
            + "  <td style='width: 12.5%'>  PRE-AVIV-" + $("#customActa").val() +" </td>"
            + "   </tr>    "
            + "  </tbody>"
            + "</table>"
    
    
            + "<table width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + " <tr>"
            + "     <td class='encabezado' >DIAGRAMA DE LINEAS</td>"
            + " </tr>"
            + " <tr>"
            + "     <td style='height: 400px;'><img  src='file:///storage/emulated/0/Download/lineapreviv"+ ac +".jpg' style='width: 100%;  height: auto;'></td>"
            + " </tr>"
            + " <tr>"
            + "     <td class='encabezado' >ESQUEMA DE LA VIVIENDA</td>"
            + " </tr>"
            + " <tr>"
            + "     <td style='height: 400px;'><img  src='file:///storage/emulated/0/Download/esquemapreviv"+ ac +".jpg' style='width: 100%;  height: auto;'></td>"
            + " </tr>"
            + "</table>"
            + "</p>"
            + "<p style='page-break-after: always' ><br> " 


			            + " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + " <tbody>"
            + " <tr><td class='encabezado2' colspan='4'>Pagina 4 de "+$("#pagDe").val()+" &nbsp&nbsp</td></tr>"
          + "  <tr>"
			+ "  <td colspan='4'>"
			+ "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
			+ "    <tbody>"
			+ "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
			+ "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA PRE REGISTRO DE VIVIENDA</td>"
			+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
			+ "   </tr>"
			+ "   <tr>"
			+ "    <td colspan='4'>"
			+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
			+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-06</td>"					
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
            + "  <td style='width: 12.5%'>Fecha:</td>"
            + "  <td style='width: 12.5%'> "+  ($("#fecha").val()) +"</td>"
            + "  <td style='width: 12.5%'>Línea</td>"
            + "  <td style='width: 12.5%'>  " + ($("#linea").val())+" </td>"
            + "  <td style='width: 12.5%'>Acta Nº.</td>"
            + "  <td style='width: 12.5%'>  PRE-AVIV-" + $("#customActa").val() +" </td>"
          

            + "   </tr>    "
            + "  </tbody>"
            + "</table>"

			
            + "     <table width='100%' border='1' cellspacing='0' cellpadding='0' >"
            + "       <tbody>"
            + "            <tr>"
            + "              <td class='rotate'><div>PRE-AVIV-"+(padDigits($("#customActa").val(), 3))+"-02</div></td>"
            + "              <td  style='width:380px;'><img src='"+  window.localStorage.getItem('imgURL') +"pre-viv-" + ac +"-"+ 2 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
            + "              <td  class='rotate'><div>PRE-AVIV-"+(padDigits($("#customActa").val(), 3))+"-01</div></td>"
            + "              <td  style='width:380px;'><img src='"+ window.localStorage.getItem('imgURL') +"pre-viv-" + ac +"-"+ 1 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
            + "            </tr>"
            + "            <tr>"
            + "              <td class='rotate'><div>PRE-AVIV-"+(padDigits($("#customActa").val(), 3))+"-04</div></td>"
            + "              <td  style='width:380px;'><img src='"+  window.localStorage.getItem('imgURL') +"pre-viv-" + ac +"-"+ 4 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
            + "              <td  class='rotate' ><div>PRE-AVIV-"+(padDigits($("#customActa").val(), 3))+"-03</div></td>"
            + "              <td  style='width:380px;'><img src='"+  window.localStorage.getItem('imgURL') +"pre-viv-" + ac +"-"+ 3 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
            + "            </tr>"
            + "         </tbody>"
            + "       </table></p>"	
            + "     <p style='page-break-after: always;'> "
			
			
			+ " <table style='border-top: 1px solid' width='100%' border='1' cellspacing='0' cellpadding='0'>"
            + " <tbody>"
            + " <tr><td class='encabezado2' colspan='4'>Pagina 5 de "+$("#pagDe").val()+" &nbsp&nbsp</td></tr>"
            + "  <tr>"
			+ "  <td colspan='4'>"
			+ "  <table width='100%' border='0' cellspacing='0' cellpadding='0'>"
			+ "    <tbody>"
			+ "      <tr><td style='width: 10%;height=75px'><img width='90' height='60' src='file:///storage/emulated/0/Download/logo.PNG'></td>"
			+ "      <td style='width: 80%;height:75px;text-align:center;font-size:18px'>ACTA PRE REGISTRO DE VIVIENDA</td>"
			+ "      <td><img width='90' height='60' src='file:///storage/emulated/0/Download/logo2.PNG'></td></tr></tbody></table></td>"
			+ "   </tr>"
			+ "   <tr>"
			+ "    <td colspan='4'>"
			+ "    <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
			+ "     <td  style='font-size:10px;text-align:left;'>COD: FOR-QC-06</td>"					
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
            + "  <td style='width: 12.5%'>Fecha:</td>"
            + "  <td style='width: 12.5%'> "+  ($("#fecha").val()) +"</td>"
            + "  <td style='width: 12.5%'>Línea</td>"
            + "  <td style='width: 12.5%'>  " + ($("#linea").val())+" </td>"
            + "  <td style='width: 12.5%'>Acta Nº.</td>"
            + "  <td style='width: 12.5%'>  PRE-AVIV-" + $("#customActa").val() +" </td>"
            + "   </tr>    "
            + "  </tbody>"
            + "</table>"
			
			
            + "     <table width='100%' border='1' cellspacing='0' cellpadding='0' >"
            + "       <tbody>"
            + "            <tr>"
            + "            <tr>"
            + "              <td class='rotate'><div>PRE-AVIV-"+(padDigits($("#customActa").val(), 3))+"-06</div></td>"
            + "              <td  style='width:380px;'><img src='"+  window.localStorage.getItem('imgURL') +"pre-viv-" + ac +"-"+ 6 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
            + "              <td  class='rotate'><div>PRE-AVIV-"+(padDigits($("#customActa").val(), 3))+"-05</div></td>"
            + "              <td  style='width:380px;'><img src='"+  window.localStorage.getItem('imgURL') +"pre-viv-" + ac +"-"+ 5 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
            + "            </tr>"
            + "            <tr>"
            + "              <td class='rotate'><div>PRE-AVIV-"+(padDigits($("#customActa").val(), 3))+"-07</div></td>"
            + "              <td  style='width:380px;'><img src='"+  window.localStorage.getItem('imgURL') +"pre-viv-" + ac +"-"+ 7 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
            + "              <td  class='rotate'><div>PRE-AVIV-"+(padDigits($("#customActa").val(), 3))+"-08</div></td>"
            + "              <td  style='width:380px;'><img src='"+  window.localStorage.getItem('imgURL') +"pre-viv-" + ac +"-"+ 8 + ".jpg' style='transform:rotate(90deg);width: 490px;height: 360px'></td>"
            + "            </tr>"
            + "         </tbody>"
            + "       </table></p>"			
            + "    </body>"
            + "</html>",
            documentSize: 'Letter',
            landscape: 'portrait',
            type: 'share',
			fileName: 'pre-viv-'+ $("#acta").val()
        }, this.success, this.failure);
}

function capturePhoto(imageNumber) {
    vivImageNumber = imageNumber;
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
    var newFileName = 'pre-viv-' + ac +'-'+ vivImageNumber + ".jpg";
    i++;
    
    var dir = '/';
    window.localStorage.setItem('pre-viv-' + ac +'-'+ vivImageNumber,'');
    
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
	//alert(entry.toURL());
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
    //var fecha = getCurrentDateTime();
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

    var otro1_paredes_material = $("#otro1_paredes_material").val();
    var otro1_paredes_estado = $("#otro1_paredes_estado").val();
    var otro1_paredes_anomalias = $("#otro1_paredes_anomalias").val();
    var otro1_pisos_material = $("#otro1_pisos_material").val();
    var otro1_pisos_estado = $("#otro1_pisos_estado").val();
    var otro1_pisos_anomalias = $("#otro1_pisos_anomalias").val();
    var otro1_techo_material = $("#otro1_techo_material").val();
    var otro1_techo_estado = $("#otro1_techo_estado").val();
    var otro1_techo_anomalias = $("#otro1_techo_anomalias").val();
    var otro1_cielo_material = $("#otro1_cielo_material").val();
    var otro1_cielo_estado = $("#otro1_cielo_estado").val();
    var otro1_cielo_anomalias = $("#otro1_cielo_anomalias").val();
    var otro1_estruct_material = $("#otro1_estruct_material").val();
    var otro1_estruct_estado = $("#otro1_estruct_estado").val();
    var otro1_estruct_anomalias = $("#otro1_estruct_anomalias").val();
    var otro1_panete_material = $("#otro1_panete_material").val();
    var otro1_panete_estado = $("#otro1_panete_estado").val();
    var otro1_panete_anomalias = $("#otro1_panete_anomalias").val();
    var otro1_pintu_material = $("#otro1_pintu_material").val();
    var otro1_pintu_estado = $("#otro1_pintu_estado").val();
    var otro1_pintu_anomalias = $("#otro1_pintu_anomalias").val();
    var otro1_ventana_material = $("#otro1_ventana_material").val();
    var otro1_ventana_estado = $("#otro1_ventana_estado").val();
    var otro1_ventana_anomalias = $("#otro1_ventana_anomalias").val();
    var otro1_puerta_material = $("#otro1_puerta_material").val();
    var otro1_puerta_estado = $("#otro1_puerta_estado").val();
    var otro1_puerta_anomalias = $("#otro1_puerta_anomalias").val(); 
    
    var otro2_paredes_material = $("#otro2_paredes_material").val();
    var otro2_paredes_estado = $("#otro2_paredes_estado").val();
    var otro2_paredes_anomalias = $("#otro2_paredes_anomalias").val();
    var otro2_pisos_material = $("#otro2_pisos_material").val();
    var otro2_pisos_estado = $("#otro2_pisos_estado").val();
    var otro2_pisos_anomalias = $("#otro2_pisos_anomalias").val();
    var otro2_techo_material = $("#otro2_techo_material").val();
    var otro2_techo_estado = $("#otro2_techo_estado").val();
    var otro2_techo_anomalias = $("#otro2_techo_anomalias").val();
    var otro2_cielo_material = $("#otro2_cielo_material").val();
    var otro2_cielo_estado = $("#otro2_cielo_estado").val();
    var otro2_cielo_anomalias = $("#otro2_cielo_anomalias").val();
    var otro2_estruct_material = $("#otro2_estruct_material").val();
    var otro2_estruct_estado = $("#otro2_estruct_estado").val();
    var otro2_estruct_anomalias = $("#otro2_estruct_anomalias").val();
    var otro2_panete_material = $("#otro2_panete_material").val();
    var otro2_panete_estado = $("#otro2_panete_estado").val();
    var otro2_panete_anomalias = $("#otro2_panete_anomalias").val();
    var otro2_pintu_material = $("#otro2_pintu_material").val();
    var otro2_pintu_estado = $("#otro2_pintu_estado").val();
    var otro2_pintu_anomalias = $("#otro2_pintu_anomalias").val();
    var otro2_ventana_material = $("#otro2_ventana_material").val();
    var otro2_ventana_estado = $("#otro2_ventana_estado").val();
    var otro2_ventana_anomalias = $("#otro2_ventana_anomalias").val();
    var otro2_puerta_material = $("#otro2_puerta_material").val();
    var otro2_puerta_estado = $("#otro2_puerta_estado").val();
    var otro2_puerta_anomalias = $("#otro2_puerta_anomalias").val(); 
    
    var otro3_paredes_material = $("#otro3_paredes_material").val();
    var otro3_paredes_estado = $("#otro3_paredes_estado").val();
    var otro3_paredes_anomalias = $("#otro3_paredes_anomalias").val();
    var otro3_pisos_material = $("#otro3_pisos_material").val();
    var otro3_pisos_estado = $("#otro3_pisos_estado").val();
    var otro3_pisos_anomalias = $("#otro3_pisos_anomalias").val();
    var otro3_techo_material = $("#otro3_techo_material").val();
    var otro3_techo_estado = $("#otro3_techo_estado").val();
    var otro3_techo_anomalias = $("#otro3_techo_anomalias").val();
    var otro3_cielo_material = $("#otro3_cielo_material").val();
    var otro3_cielo_estado = $("#otro3_cielo_estado").val();
    var otro3_cielo_anomalias = $("#otro3_cielo_anomalias").val();
    var otro3_estruct_material = $("#otro3_estruct_material").val();
    var otro3_estruct_estado = $("#otro3_estruct_estado").val();
    var otro3_estruct_anomalias = $("#otro3_estruct_anomalias").val();
    var otro3_panete_material = $("#otro3_panete_material").val();
    var otro3_panete_estado = $("#otro3_panete_estado").val();
    var otro3_panete_anomalias = $("#otro3_panete_anomalias").val();
    var otro3_pintu_material = $("#otro3_pintu_material").val();
    var otro3_pintu_estado = $("#otro3_pintu_estado").val();
    var otro3_pintu_anomalias = $("#otro3_pintu_anomalias").val();
    var otro3_ventana_material = $("#otro3_ventana_material").val();
    var otro3_ventana_estado = $("#otro3_ventana_estado").val();
    var otro3_ventana_anomalias = $("#otro3_ventana_anomalias").val();
    var otro3_puerta_material = $("#otro3_puerta_material").val();
    var otro3_puerta_estado = $("#otro3_puerta_estado").val();
    var otro3_puerta_anomalias = $("#otro3_puerta_anomalias").val(); 
    
    var otro4_paredes_material = $("#otro4_paredes_material").val();
    var otro4_paredes_estado = $("#otro4_paredes_estado").val();
    var otro4_paredes_anomalias = $("#otro4_paredes_anomalias").val();
    var otro4_pisos_material = $("#otro4_pisos_material").val();
    var otro4_pisos_estado = $("#otro4_pisos_estado").val();
    var otro4_pisos_anomalias = $("#otro4_pisos_anomalias").val();
    var otro4_techo_material = $("#otro4_techo_material").val();
    var otro4_techo_estado = $("#otro4_techo_estado").val();
    var otro4_techo_anomalias = $("#otro4_techo_anomalias").val();
    var otro4_cielo_material = $("#otro4_cielo_material").val();
    var otro4_cielo_estado = $("#otro4_cielo_estado").val();
    var otro4_cielo_anomalias = $("#otro4_cielo_anomalias").val();
    var otro4_estruct_material = $("#otro4_estruct_material").val();
    var otro4_estruct_estado = $("#otro4_estruct_estado").val();
    var otro4_estruct_anomalias = $("#otro4_estruct_anomalias").val();
    var otro4_panete_material = $("#otro4_panete_material").val();
    var otro4_panete_estado = $("#otro4_panete_estado").val();
    var otro4_panete_anomalias = $("#otro4_panete_anomalias").val();
    var otro4_pintu_material = $("#otro4_pintu_material").val();
    var otro4_pintu_estado = $("#otro4_pintu_estado").val();
    var otro4_pintu_anomalias = $("#otro4_pintu_anomalias").val();
    var otro4_ventana_material = $("#otro4_ventana_material").val();
    var otro4_ventana_estado = $("#otro4_ventana_estado").val();
    var otro4_ventana_anomalias = $("#otro4_ventana_anomalias").val();
    var otro4_puerta_material = $("#otro4_puerta_material").val();
    var otro4_puerta_estado = $("#otro4_puerta_estado").val();
    var otro4_puerta_anomalias = $("#otro4_puerta_anomalias").val(); 

    var otro1_nombre = $("#otro1_nombre").val(); 
    var otro2_nombre = $("#otro2_nombre").val(); 
    var otro3_nombre = $("#otro3_nombre").val(); 
    var otro4_nombre = $("#otro4_nombre").val(); 
    
    
    var rela_repre_prop = $("#rela_repre_prop").val();
    var elementos_si = $("#elementos_si").is(':checked');
    var falta_rela = $("#falta_rela").val();
    
    
     var habitada = ($("#habitada").is(':checked') ? "1" : "0");
     var deshabitada = ($("#deshabitada").is(':checked') ? "1" : "0");
     var rural = ($("#rural").is(':checked') ? "1" : "0");
     var urbano = ($("#urbano").is(':checked') ? "1" : "0");
	 var customActa =  $("#customActa").val();
	 
	 	var pagDe =  $("#pagDe").val();
     



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
        
                + "otro1_paredes_material=?,"
                + "otro1_paredes_estado=?,"
                + "otro1_paredes_anomalias=?,"
                + "otro1_pisos_material=?,"
                + "otro1_pisos_estado=?,"
                + "otro1_pisos_anomalias=?,"
                + "otro1_techo_material=?,"
                + "otro1_techo_estado=?,"
                + "otro1_techo_anomalias=?,"
                + "otro1_cielo_material=?,"
                + "otro1_cielo_estado=?,"
                + "otro1_cielo_anomalias=?,"
                + "otro1_estruct_material=?,"
                + "otro1_estruct_estado=?,"
                + "otro1_estruct_anomalias=?,"
                + "otro1_panete_material=?,"
                + "otro1_panete_estado=?,"
                + "otro1_panete_anomalias=?,"
                + "otro1_pintu_material=?,"
                + "otro1_pintu_estado=?,"
                + "otro1_pintu_anomalias=?,"
                + "otro1_ventana_material=?,"
                + "otro1_ventana_estado=?,"
                + "otro1_ventana_anomalias=?,"
                + "otro1_puerta_material=?,"
                + "otro1_puerta_estado=?,"
                + "otro1_puerta_anomalias=?,"
                + "otro2_paredes_material=?,"
                + "otro2_paredes_estado=?,"
                + "otro2_paredes_anomalias=?,"
                + "otro2_pisos_material=?,"
                + "otro2_pisos_estado=?,"
                + "otro2_pisos_anomalias=?,"
                + "otro2_techo_material=?,"
                + "otro2_techo_estado=?,"
                + "otro2_techo_anomalias=?,"
                + "otro2_cielo_material=?,"
                + "otro2_cielo_estado=?,"
                + "otro2_cielo_anomalias=?,"
                + "otro2_estruct_material=?,"
                + "otro2_estruct_estado=?,"
                + "otro2_estruct_anomalias=?,"
                + "otro2_panete_material=?,"
                + "otro2_panete_estado=?,"
                + "otro2_panete_anomalias=?,"
                + "otro2_pintu_material=?,"
                + "otro2_pintu_estado=?,"
                + "otro2_pintu_anomalias=?,"
                + "otro2_ventana_material=?,"
                + "otro2_ventana_estado=?,"
                + "otro2_ventana_anomalias=?,"
                + "otro2_puerta_material=?,"
                + "otro2_puerta_estado=?,"
                + "otro2_puerta_anomalias=?,"
                + "otro3_paredes_material=?,"
                + "otro3_paredes_estado=?,"
                + "otro3_paredes_anomalias=?,"
                + "otro3_pisos_material=?,"
                + "otro3_pisos_estado=?,"
                + "otro3_pisos_anomalias=?,"
                + "otro3_techo_material=?,"
                + "otro3_techo_estado=?,"
                + "otro3_techo_anomalias=?,"
                + "otro3_cielo_material=?,"
                + "otro3_cielo_estado=?,"
                + "otro3_cielo_anomalias=?,"
                + "otro3_estruct_material=?,"
                + "otro3_estruct_estado=?,"
                + "otro3_estruct_anomalias=?,"
                + "otro3_panete_material=?,"
                + "otro3_panete_estado=?,"
                + "otro3_panete_anomalias=?,"
                + "otro3_pintu_material=?,"
                + "otro3_pintu_estado=?,"
                + "otro3_pintu_anomalias=?,"
                + "otro3_ventana_material=?,"
                + "otro3_ventana_estado=?,"
                + "otro3_ventana_anomalias=?,"
                + "otro3_puerta_material=?,"
                + "otro3_puerta_estado=?,"
                + "otro3_puerta_anomalias=?,"
                + "otro4_paredes_material=?,"
                + "otro4_paredes_estado=?,"
                + "otro4_paredes_anomalias=?,"
                + "otro4_pisos_material=?,"
                + "otro4_pisos_estado=?,"
                + "otro4_pisos_anomalias=?,"
                + "otro4_techo_material=?,"
                + "otro4_techo_estado=?,"
                + "otro4_techo_anomalias=?,"
                + "otro4_cielo_material=?,"
                + "otro4_cielo_estado=?,"
                + "otro4_cielo_anomalias=?,"
                + "otro4_estruct_material=?,"
                + "otro4_estruct_estado=?,"
                + "otro4_estruct_anomalias=?,"
                + "otro4_panete_material=?,"
                + "otro4_panete_estado=?,"
                + "otro4_panete_anomalias=?,"
                + "otro4_pintu_material=?,"
                + "otro4_pintu_estado=?,"
                + "otro4_pintu_anomalias=?,"
                + "otro4_ventana_material=?,"
                + "otro4_ventana_estado=?,"
                + "otro4_ventana_anomalias=?,"
                + "otro4_puerta_material=?,"
                + "otro4_puerta_estado=?,"
                + "otro4_puerta_anomalias=?,"
        
                + "otro1_nombre=?,"
                + "otro2_nombre=?,"
                + "otro3_nombre=?,"
                + "otro4_nombre=?,"
                + "rela_repre_prop=?,"
                + "elementos_si=?,"
                + "falta_rela=?,"
                + "observa=?,"        
                + "habitada=?,"
                + "deshabitada=?,"
                + "rural=?,"
				+ "P_MUN=?,"
				+ "P_DEPTO=?,"
				+ "	custom_acta=?,"
				+ "	fecha=?,"
				+ "	pag_de=?,"
                + "urbano=?"        
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
                otro1_paredes_material,
                otro1_paredes_estado,
                otro1_paredes_anomalias,
                otro1_pisos_material,
                otro1_pisos_estado,
                otro1_pisos_anomalias,
                otro1_techo_material,
                otro1_techo_estado,
                otro1_techo_anomalias,
                otro1_cielo_material,
                otro1_cielo_estado,
                otro1_cielo_anomalias,
                otro1_estruct_material,
                otro1_estruct_estado,
                otro1_estruct_anomalias,
                otro1_panete_material,
                otro1_panete_estado,
                otro1_panete_anomalias,
                otro1_pintu_material,
                otro1_pintu_estado,
                otro1_pintu_anomalias,
                otro1_ventana_material,
                otro1_ventana_estado,
                otro1_ventana_anomalias,
                otro1_puerta_material,
                otro1_puerta_estado,
                otro1_puerta_anomalias,
                otro2_paredes_material,
                otro2_paredes_estado,
                otro2_paredes_anomalias,
                otro2_pisos_material,
                otro2_pisos_estado,
                otro2_pisos_anomalias,
                otro2_techo_material,
                otro2_techo_estado,
                otro2_techo_anomalias,
                otro2_cielo_material,
                otro2_cielo_estado,
                otro2_cielo_anomalias,
                otro2_estruct_material,
                otro2_estruct_estado,
                otro2_estruct_anomalias,
                otro2_panete_material,
                otro2_panete_estado,
                otro2_panete_anomalias,
                otro2_pintu_material,
                otro2_pintu_estado,
                otro2_pintu_anomalias,
                otro2_ventana_material,
                otro2_ventana_estado,
                otro2_ventana_anomalias,
                otro2_puerta_material,
                otro2_puerta_estado,
                otro2_puerta_anomalias,
                otro3_paredes_material,
                otro3_paredes_estado,
                otro3_paredes_anomalias,
                otro3_pisos_material,
                otro3_pisos_estado,
                otro3_pisos_anomalias,
                otro3_techo_material,
                otro3_techo_estado,
                otro3_techo_anomalias,
                otro3_cielo_material,
                otro3_cielo_estado,
                otro3_cielo_anomalias,
                otro3_estruct_material,
                otro3_estruct_estado,
                otro3_estruct_anomalias,
                otro3_panete_material,
                otro3_panete_estado,
                otro3_panete_anomalias,
                otro3_pintu_material,
                otro3_pintu_estado,
                otro3_pintu_anomalias,
                otro3_ventana_material,
                otro3_ventana_estado,
                otro3_ventana_anomalias,
                otro3_puerta_material,
                otro3_puerta_estado,
                otro3_puerta_anomalias,
                otro4_paredes_material,
                otro4_paredes_estado,
                otro4_paredes_anomalias,
                otro4_pisos_material,
                otro4_pisos_estado,
                otro4_pisos_anomalias,
                otro4_techo_material,
                otro4_techo_estado,
                otro4_techo_anomalias,
                otro4_cielo_material,
                otro4_cielo_estado,
                otro4_cielo_anomalias,
                otro4_estruct_material,
                otro4_estruct_estado,
                otro4_estruct_anomalias,
                otro4_panete_material,
                otro4_panete_estado,
                otro4_panete_anomalias,
                otro4_pintu_material,
                otro4_pintu_estado,
                otro4_pintu_anomalias,
                otro4_ventana_material,
                otro4_ventana_estado,
                otro4_ventana_anomalias,
                otro4_puerta_material,
                otro4_puerta_estado,
                otro4_puerta_anomalias,   
                otro1_nombre,
                otro2_nombre,
                otro3_nombre,
                otro4_nombre,
                rela_repre_prop,
                elementos_si,
                falta_rela,
                observa,
                habitada,
                deshabitada,
                rural,
				P_MUN,
				P_DEPTO,
				customActa,
				fecha,
				pagDe,
                urbano
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
            
                    + "otro1_paredes_material,"
                    + "otro1_paredes_estado,"
                    + "otro1_paredes_anomalias,"
                    + "otro1_pisos_material,"
                    + "otro1_pisos_estado,"
                    + "otro1_pisos_anomalias,"
                    + "otro1_techo_material,"
                    + "otro1_techo_estado,"
                    + "otro1_techo_anomalias,"
                    + "otro1_cielo_material,"
                    + "otro1_cielo_estado,"
                    + "otro1_cielo_anomalias,"
                    + "otro1_estruct_material,"
                    + "otro1_estruct_estado,"
                    + "otro1_estruct_anomalias,"
                    + "otro1_panete_material,"
                    + "otro1_panete_estado,"
                    + "otro1_panete_anomalias,"
                    + "otro1_pintu_material,"
                    + "otro1_pintu_estado,"
                    + "otro1_pintu_anomalias,"
                    + "otro1_ventana_material,"
                    + "otro1_ventana_estado,"
                    + "otro1_ventana_anomalias,"
                    + "otro1_puerta_material,"
                    + "otro1_puerta_estado,"
                    + "otro1_puerta_anomalias,"
                    + "otro2_paredes_material,"
                    + "otro2_paredes_estado,"
                    + "otro2_paredes_anomalias,"
                    + "otro2_pisos_material,"
                    + "otro2_pisos_estado,"
                    + "otro2_pisos_anomalias,"
                    + "otro2_techo_material,"
                    + "otro2_techo_estado,"
                    + "otro2_techo_anomalias,"
                    + "otro2_cielo_material,"
                    + "otro2_cielo_estado,"
                    + "otro2_cielo_anomalias,"
                    + "otro2_estruct_material,"
                    + "otro2_estruct_estado,"
                    + "otro2_estruct_anomalias,"
                    + "otro2_panete_material,"
                    + "otro2_panete_estado,"
                    + "otro2_panete_anomalias,"
                    + "otro2_pintu_material,"
                    + "otro2_pintu_estado,"
                    + "otro2_pintu_anomalias,"
                    + "otro2_ventana_material,"
                    + "otro2_ventana_estado,"
                    + "otro2_ventana_anomalias,"
                    + "otro2_puerta_material,"
                    + "otro2_puerta_estado,"
                    + "otro2_puerta_anomalias,"
                    + "otro3_paredes_material,"
                    + "otro3_paredes_estado,"
                    + "otro3_paredes_anomalias,"
                    + "otro3_pisos_material,"
                    + "otro3_pisos_estado,"
                    + "otro3_pisos_anomalias,"
                    + "otro3_techo_material,"
                    + "otro3_techo_estado,"
                    + "otro3_techo_anomalias,"
                    + "otro3_cielo_material,"
                    + "otro3_cielo_estado,"
                    + "otro3_cielo_anomalias,"
                    + "otro3_estruct_material,"
                    + "otro3_estruct_estado,"
                    + "otro3_estruct_anomalias,"
                    + "otro3_panete_material,"
                    + "otro3_panete_estado,"
                    + "otro3_panete_anomalias,"
                    + "otro3_pintu_material,"
                    + "otro3_pintu_estado,"
                    + "otro3_pintu_anomalias,"
                    + "otro3_ventana_material,"
                    + "otro3_ventana_estado,"
                    + "otro3_ventana_anomalias,"
                    + "otro3_puerta_material,"
                    + "otro3_puerta_estado,"
                    + "otro3_puerta_anomalias,"
                    + "otro4_paredes_material,"
                    + "otro4_paredes_estado,"
                    + "otro4_paredes_anomalias,"
                    + "otro4_pisos_material,"
                    + "otro4_pisos_estado,"
                    + "otro4_pisos_anomalias,"
                    + "otro4_techo_material,"
                    + "otro4_techo_estado,"
                    + "otro4_techo_anomalias,"
                    + "otro4_cielo_material,"
                    + "otro4_cielo_estado,"
                    + "otro4_cielo_anomalias,"
                    + "otro4_estruct_material,"
                    + "otro4_estruct_estado,"
                    + "otro4_estruct_anomalias,"
                    + "otro4_panete_material,"
                    + "otro4_panete_estado,"
                    + "otro4_panete_anomalias,"
                    + "otro4_pintu_material,"
                    + "otro4_pintu_estado,"
                    + "otro4_pintu_anomalias,"
                    + "otro4_ventana_material,"
                    + "otro4_ventana_estado,"
                    + "otro4_ventana_anomalias,"
                    + "otro4_puerta_material,"
                    + "otro4_puerta_estado,"
                    + "otro4_puerta_anomalias,"
            
                    + "otro1_nombre,"
                    + "otro2_nombre,"
                    + "otro3_nombre,"
                    + "otro4_nombre,"
                    + "rela_repre_prop,"
                    + "elementos_si,"
                    + "falta_rela,"
                    + "observa,"
                    + "habitada,"
                    + "deshabitada,"
                    + "rural,"
					+ "	custom_acta,"
					+ "pag_de,"
                    + "urbano,"   
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
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"
                    + "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )";
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
                
                otro1_paredes_material,
                otro1_paredes_estado,
                otro1_paredes_anomalias,
                otro1_pisos_material,
                otro1_pisos_estado,
                otro1_pisos_anomalias,
                otro1_techo_material,
                otro1_techo_estado,
                otro1_techo_anomalias,
                otro1_cielo_material,
                otro1_cielo_estado,
                otro1_cielo_anomalias,
                otro1_estruct_material,
                otro1_estruct_estado,
                otro1_estruct_anomalias,
                otro1_panete_material,
                otro1_panete_estado,
                otro1_panete_anomalias,
                otro1_pintu_material,
                otro1_pintu_estado,
                otro1_pintu_anomalias,
                otro1_ventana_material,
                otro1_ventana_estado,
                otro1_ventana_anomalias,
                otro1_puerta_material,
                otro1_puerta_estado,
                otro1_puerta_anomalias,
                otro2_paredes_material,
                otro2_paredes_estado,
                otro2_paredes_anomalias,
                otro2_pisos_material,
                otro2_pisos_estado,
                otro2_pisos_anomalias,
                otro2_techo_material,
                otro2_techo_estado,
                otro2_techo_anomalias,
                otro2_cielo_material,
                otro2_cielo_estado,
                otro2_cielo_anomalias,
                otro2_estruct_material,
                otro2_estruct_estado,
                otro2_estruct_anomalias,
                otro2_panete_material,
                otro2_panete_estado,
                otro2_panete_anomalias,
                otro2_pintu_material,
                otro2_pintu_estado,
                otro2_pintu_anomalias,
                otro2_ventana_material,
                otro2_ventana_estado,
                otro2_ventana_anomalias,
                otro2_puerta_material,
                otro2_puerta_estado,
                otro2_puerta_anomalias,
                otro3_paredes_material,
                otro3_paredes_estado,
                otro3_paredes_anomalias,
                otro3_pisos_material,
                otro3_pisos_estado,
                otro3_pisos_anomalias,
                otro3_techo_material,
                otro3_techo_estado,
                otro3_techo_anomalias,
                otro3_cielo_material,
                otro3_cielo_estado,
                otro3_cielo_anomalias,
                otro3_estruct_material,
                otro3_estruct_estado,
                otro3_estruct_anomalias,
                otro3_panete_material,
                otro3_panete_estado,
                otro3_panete_anomalias,
                otro3_pintu_material,
                otro3_pintu_estado,
                otro3_pintu_anomalias,
                otro3_ventana_material,
                otro3_ventana_estado,
                otro3_ventana_anomalias,
                otro3_puerta_material,
                otro3_puerta_estado,
                otro3_puerta_anomalias,
                otro4_paredes_material,
                otro4_paredes_estado,
                otro4_paredes_anomalias,
                otro4_pisos_material,
                otro4_pisos_estado,
                otro4_pisos_anomalias,
                otro4_techo_material,
                otro4_techo_estado,
                otro4_techo_anomalias,
                otro4_cielo_material,
                otro4_cielo_estado,
                otro4_cielo_anomalias,
                otro4_estruct_material,
                otro4_estruct_estado,
                otro4_estruct_anomalias,
                otro4_panete_material,
                otro4_panete_estado,
                otro4_panete_anomalias,
                otro4_pintu_material,
                otro4_pintu_estado,
                otro4_pintu_anomalias,
                otro4_ventana_material,
                otro4_ventana_estado,
                otro4_ventana_anomalias,
                otro4_puerta_material,
                otro4_puerta_estado,
                otro4_puerta_anomalias,
                
                otro1_nombre,
                otro2_nombre,
                otro3_nombre,
                otro4_nombre,
                rela_repre_prop,
                elementos_si,
                falta_rela,
                observa,
                habitada,
                deshabitada,
                rural,
				customActa,
				pagDe,
                urbano,
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

function padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}



