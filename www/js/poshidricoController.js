var i = 1;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});

    myDB.transaction(function(transaction) {
        transaction.executeSql('SELECT * FROM pre_hidrico_p', [], function(tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                $("#TableData").append("<li class='list-group-item'><input id='" + results.rows.item(i).id + "' type='checkbox' aria-label='...'>&nbsp;&nbsp;&nbsp;<a href='javascript:prepareEdit(" + results.rows.item(i).id + ")' >act-pre-hid-00" + results.rows.item(i).id + "</a></li>");
            }
        }, function(tx, error)
        {
            alert('Error occurred');
        });
		
		
				transaction.executeSql('SELECT * FROM post_hidrico_p', [], function(tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                $("#TableData").append("<li class='list-group-item'><input id='" + results.rows.item(i).id + "' type='checkbox' aria-label='...'>&nbsp;&nbsp;&nbsp;<a href='javascript:prepareEditPost(" + results.rows.item(i).id + ")' >act-post-hid-00" + results.rows.item(i).id + "</a></li>");
            }
        }, function(tx, error)
        {
            alert('Error occurred');
        });
		
		
    });
}

function transmit() {

    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});

    $("input[type='checkbox']:checked").each(function() {
        var idPre = $(this).attr('id');
        myDB.transaction(function(transaction) {
            transaction.executeSql('SELECT * FROM pre_hidrico_p where id=' + idPre, [], function(tx, results) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    //results.rows.item(i).id
                    var datasend = JSON.stringify({
                        "PDepto": results.rows.item(i).P_DEPTO,
						"PMun": results.rows.item(i).P_MUN,
						"abandonado": results.rows.item(i).abandonado,
						//"acta": results.rows.item(i).acta,
						"agricolaHa": results.rows.item(i).agricola_ha,
						"agricolaTipo": results.rows.item(i).agricola_tipo,
						"aguaLluvias": results.rows.item(i).agua_lluvias,
						"aguaOtro": results.rows.item(i).agua_otro,
						"aguasEstancadas": results.rows.item(i).aguas_estancadas,
						"aguasOtro": results.rows.item(i).aguas_otro,
						"albercaAncho": results.rows.item(i).alberca_ancho,
						"albercaCapacidad": results.rows.item(i).alberca_capacidad,
						"albercaDiametro": results.rows.item(i).alberca_diametro,
						"albercaLargo": results.rows.item(i).alberca_largo,
						"albercaProfundidad": results.rows.item(i).alberca_profundidad,
						"aljibe": results.rows.item(i).aljibe,
						"aparienciaClara": results.rows.item(i).apariencia_clara,
						"aparienciaOtro": results.rows.item(i).apariencia_otro,
						"aparienciaTurbia": results.rows.item(i).apariencia_turbia,
						"aporteAguaIntermitente": results.rows.item(i).aporte_agua_intermitente,
						"aporteAguaLluvias": results.rows.item(i).aporte_agua_lluvias,
						"aporteAguaPermanente": results.rows.item(i).aporte_agua_permanente,
						"basuraEstiercol": results.rows.item(i).basura_estiercol,
						"bombaClase": results.rows.item(i).bomba_clase,
						"bombaModelo": results.rows.item(i).bomba_modelo,
						"bombaNatural": results.rows.item(i).bomba_natural,
						"bombaPotencia": results.rows.item(i).bomba_potencia,
						"bombaProfundidad": results.rows.item(i).bomba_profundidad,
						"bombaSumergible": results.rows.item(i).bomba_sumergible,
						"canalCemento": results.rows.item(i).canal_cemento,
						"canalTierra": results.rows.item(i).canal_tierra,
						"captaManual": results.rows.item(i).capta_manual,
						"captaOtro": results.rows.item(i).capta_otro,
						"ccPropietario": results.rows.item(i).cc_propietario,
						"cementerio": results.rows.item(i).cementerio,
						"colorAmarillo": results.rows.item(i).color_amarillo,
						"colorCafe": results.rows.item(i).color_cafe,
						"colorIncoloro": results.rows.item(i).color_incoloro,
						"colorOtro": results.rows.item(i).color_otro,
						"comienzoInvierno": results.rows.item(i).comienzo_invierno,
						"comienzoVerano": results.rows.item(i).comienzo_verano,
						"comunitario": results.rows.item(i).comunitario,
						"conductividad": results.rows.item(i).conductividad,
						"constructor": results.rows.item(i).constructor,
						"contaminaOtro": results.rows.item(i).contamina_otro,
						"coordenadaE": results.rows.item(i).coordenada_e,
						"coordenadaN": results.rows.item(i).coordenada_n,
						"diqueEstado": results.rows.item(i).dique_estado,
						"diqueSi": results.rows.item(i).dique_si,
						"distanciaSp": results.rows.item(i).distancia_sp,
						"domestico": results.rows.item(i).domestico,
						"drenajeNatural": results.rows.item(i).drenaje_natural,
						"electrobomba": results.rows.item(i).electrobomba,
						"elementosSi": results.rows.item(i).elementos_si,
						"embalseAncho": results.rows.item(i).embalse_ancho,
						"embalseCapacidad": results.rows.item(i).embalse_capacidad,
						"embalseDiametro": results.rows.item(i).embalse_diametro,
						"embalseLargo": results.rows.item(i).embalse_largo,
						"embalseProfundidad": results.rows.item(i).embalse_profundidad,
						"enCampo": results.rows.item(i).en_campo,
						"epocaDisminucion": results.rows.item(i).epoca_disminucion,
						"espejoAncho": results.rows.item(i).espejo_ancho,
						"espejoColoracion": results.rows.item(i).espejo_coloracion,
						"espejoLargo": results.rows.item(i).espejo_largo,
						"espejoProfundidad": results.rows.item(i).espejo_profundidad,
						"espejoaSi": results.rows.item(i).espejoa_si,
						"estanquePiscicola": results.rows.item(i).estanque_piscicola,
						"estudios": results.rows.item(i).estudios,
						"faltaRela": results.rows.item(i).falta_rela,
						"ganaderoN": results.rows.item(i).ganadero_n,
						"ganaderoSp": results.rows.item(i).ganadero_sp,
						"geoAbanicoAluvial": results.rows.item(i).geo_abanico_aluvial,
						"geoCauceAluvial": results.rows.item(i).geo_cauce_aluvial,
						"geoDolina": results.rows.item(i).geo_dolina,
						"geoLlanuraAluvial": results.rows.item(i).geo_llanura_aluvial,
						"geoLuna": results.rows.item(i).geo_luna,
						"geoOtro": results.rows.item(i).geo_otro,
						"geoPlaya": results.rows.item(i).geo_playa,
						"geoTerraza": results.rows.item(i).geo_terraza,
						"gps": results.rows.item(i).gps,
						"id": results.rows.item(i).id,
						"inactivo": results.rows.item(i).inactivo,
						"industrial": results.rows.item(i).industrial,
						"infoDireccion": results.rows.item(i).info_direccion,
						"infoNombre": results.rows.item(i).info_nombre,
						"infoTelefono": results.rows.item(i).info_telefono,
						"invierno": results.rows.item(i).invierno,
						"jagueyCantMax": results.rows.item(i).jaguey_cant_max,
						"jagueyCantPeces": results.rows.item(i).jaguey_cant_peces,
						"jagueyComercial": results.rows.item(i).jaguey_comercial,
						"jagueyDiametro": results.rows.item(i).jaguey_diametro,
						"jagueyEspecies": results.rows.item(i).jaguey_especies,
						"jagueyFamiliar": results.rows.item(i).jaguey_familiar,
						"jagueyProfundidad": results.rows.item(i).jaguey_profundidad,
						"jagueyTamano": results.rows.item(i).jaguey_tamano,
						"jagueyZonaProteccion": results.rows.item(i).jaguey_zona_proteccion,
						"jagüey":  results.rows.item(i).jagüey,
						"lagunasOxidacion": results.rows.item(i).lagunas_oxidacion,
						"litologia1": results.rows.item(i).litologia1,
						"lugarCcPropietario": results.rows.item(i).lugar_cc_propietario,
						"mallaSi": results.rows.item(i).malla_si,
						"manantialFiltracion": results.rows.item(i).manantial_filtracion,
						"manantialGoteo": results.rows.item(i).manantial_goteo,
						"manantialOtro": results.rows.item(i).manantial_otro,
						"mangueraBombeo": results.rows.item(i).manguera_bombeo,
						"mangueraGravedad": results.rows.item(i).manguera_gravedad,
						"mapa": results.rows.item(i).mapa,
						"materialBloque": results.rows.item(i).material_bloque,
						"materialConcreto": results.rows.item(i).material_concreto,
						"materialMetalico": results.rows.item(i).material_metalico,
						"materialOtro": results.rows.item(i).material_otro,
						"materialPvc": results.rows.item(i).material_pvc,
						"molinoViento": results.rows.item(i).molino_viento,
						"monitoreo": results.rows.item(i).monitoreo,
						"motoBomba": results.rows.item(i).moto_bomba,
						"muestreoBombeo": results.rows.item(i).muestreo_bombeo,
						"muestreoManual": results.rows.item(i).muestreo_manual,
						"muestreoOtro": results.rows.item(i).muestreo_otro,
						"nacedero": results.rows.item(i).nacedero,
						"ninguno": results.rows.item(i).ninguno,
						"nivelacion": results.rows.item(i).nivelacion,
						"observa": results.rows.item(i).observa,
						"olorFetida": results.rows.item(i).olor_fetida,
						"olorInolora": results.rows.item(i).olor_inolora,
						"olorOtro": results.rows.item(i).olor_otro,
						"origenCoord": results.rows.item(i).origen_coord,
						"otroAncho": results.rows.item(i).otro_ancho,
						"otroCapacidad": results.rows.item(i).otro_capacidad,
						"otroDescp": results.rows.item(i).otro_descp,
						"otroDiametro": results.rows.item(i).otro_diametro,
						"otroLargo": results.rows.item(i).otro_largo,
						"otroNombre": results.rows.item(i).otro_nombre,
						"otroProfundidad": results.rows.item(i).otro_profundidad,
						"otros": results.rows.item(i).otros,
						"permaEstacional": results.rows.item(i).perma_estacional,
						"permaIntermitente": results.rows.item(i).perma_intermitente,
						"permaPerenne": results.rows.item(i).perma_perenne,
						"permaSininfo": results.rows.item(i).perma_sininfo,
						"permiso": results.rows.item(i).permiso,
						"ph": results.rows.item(i).ph,
						"piscicola": results.rows.item(i).piscicola,
						"plantasSacrificio": results.rows.item(i).plantas_sacrificio,
						"pozoAbandonado": results.rows.item(i).pozo_abandonado,
						"pozoCaudal": results.rows.item(i).pozo_caudal,
						"pozoDiametro": results.rows.item(i).pozo_diametro,
						"pozoDiametrop": results.rows.item(i).pozo_diametrop,
						"pozoFecha": results.rows.item(i).pozo_fecha,
						"pozoProfundidad": results.rows.item(i).pozo_profundidad,
						"pozoProfundo": results.rows.item(i).pozo_profundo,
						"pozoProteccion": results.rows.item(i).pozo_proteccion,
						"predio": results.rows.item(i).predio,
						"productivo": results.rows.item(i).productivo,
						"propietario": results.rows.item(i).propietario,
						"propietarioI": results.rows.item(i).propietario_i,
						"puntoCaudal": results.rows.item(i).punto_caudal,
						"puntoFecha": results.rows.item(i).punto_fecha,
						"puntoLegalizado": results.rows.item(i).punto_legalizado,
						"puntoResolucion": results.rows.item(i).punto_resolucion,
						"relaRepreProp": results.rows.item(i).rela_repre_prop,
						"reportes": results.rows.item(i).reportes,
						"represa": results.rows.item(i).represa,
						"reserva": results.rows.item(i).reserva,
						"residuosPeligrosos": results.rows.item(i).residuos_peligrosos,
						"residuosSolidos": results.rows.item(i).residuos_solidos,
						"sdt": results.rows.item(i).sdt,
						"sellado": results.rows.item(i).sellado,
						"spCercano": results.rows.item(i).sp_cercano,
						"stk": results.rows.item(i).stk,
						"subterraneo": results.rows.item(i).subterraneo,
						"surgenciaContacto": results.rows.item(i).surgencia_contacto,
						"surgenciaFracturas": results.rows.item(i).surgencia_fracturas,
						"surgenciaKastico": results.rows.item(i).surgencia_kastico,
						"surgenciaOtro": results.rows.item(i).surgencia_otro,
						"tanqueAncho": results.rows.item(i).tanque_ancho,
						"tanqueCapacidad": results.rows.item(i).tanque_capacidad,
						"tanqueDiametro": results.rows.item(i).tanque_diametro,
						"tanqueLargo": results.rows.item(i).tanque_largo,
						"tanqueProfundidad": results.rows.item(i).tanque_profundidad,
						"telefono": results.rows.item(i).telefono,
						"temperatura": results.rows.item(i).temperatura,
						"tipoSuelo": results.rows.item(i).tipo_suelo,
						"tipoVegetacion": results.rows.item(i).tipo_vegetacion,
						"topoAltiplanicie": results.rows.item(i).topo_altiplanicie,
						"topoColina": results.rows.item(i).topo_colina,
						"topoDepresion": results.rows.item(i).topo_depresion,
						"topoLadera": results.rows.item(i).topo_ladera,
						"topoOtro": results.rows.item(i).topo_otro,
						"topoPiedemonte": results.rows.item(i).topo_piedemonte,
						"topoPlanicie": results.rows.item(i).topo_planicie,
						"tuberiaAncho": results.rows.item(i).tuberia_ancho,
						"tuberiaCapacidad": results.rows.item(i).tuberia_capacidad,
						"tuberiaDiametro": results.rows.item(i).tuberia_diametro,
						"tuberiaLargo": results.rows.item(i).tuberia_largo,
						"tuberiaProfundidad": results.rows.item(i).tuberia_profundidad,
						"tuberiadDiametro": results.rows.item(i).tuberiad_diametro,
						"tuberiadLongitud": results.rows.item(i).tuberiad_longitud,
						"tuberiadMaterial": results.rows.item(i).tuberiad_material,
						"ultimaLluvia": results.rows.item(i).ultima_lluvia,
						"unidadGeologica1": results.rows.item(i).unidad_geologica1,
						"verano": results.rows.item(i).verano,
						"vereda": results.rows.item(i).vereda
                    });
                    
		
                    $.ajax({
                        type: 'POST',
                        contentType: 'application/json',
                        url: 'http://'+ window.localStorage.getItem("ip") +'/eregistersServe/webresources/com.eregisters.entities.prehidricop',
                        dataType: "json",
                        data: datasend,
                        async: false,
                        success: function(data, textStatus, jqXHR) {
                            alert('Acta '+JSON.parse(datasend).id+' trasmitida');
                            $('#btnDelete').show();
                            $('#wineId').val(data.id);
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            alert('Error trasmitiendo acta '+JSON.parse(datasend).id+'. Error: '+ textStatus);
                        }
                    });

                }
            }, function(tx, error)
            {
                alert('Error occurred');
            });
        });
    });




}

function prepareEdit(actaId) {

       window.localStorage.setItem("editar", "false");
    window.localStorage.setItem("actaId", actaId);
		window.localStorage.setItem("post", "false");
    window.location.href = "posRecursoHidrico.html";
}


function prepareEditPost(actaId) {

    window.localStorage.setItem("editar", "true");
    window.localStorage.setItem("actaId", actaId);
	window.localStorage.setItem("post", "true");
    window.location.href = "posRecursoHidrico.html";
}

function prepareCreate() {

    window.localStorage.setItem("editar", "false");
    window.localStorage.setItem("actaId", 0);
    window.location.href = "preRecursoHidrico.html";
}
