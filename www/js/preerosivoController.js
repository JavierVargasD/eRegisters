var i = 1;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});

    myDB.transaction(function(transaction) {
        transaction.executeSql('SELECT * FROM pre_erosivo_p', [], function(tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                $("#TableData").append("<li class='list-group-item'><input id='" + results.rows.item(i).id + "' type='checkbox' aria-label='...'>&nbsp;&nbsp;&nbsp;<a href='javascript:prepareEdit(" + results.rows.item(i).id + ")' >act-pre-ero-00" + results.rows.item(i).id + "</a></li>");
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
            transaction.executeSql('SELECT * FROM pre_erosivo_p where id=' + idPre, [], function(tx, results) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    //results.rows.item(i).id
                    var datasend = JSON.stringify({
                        "Acta": results.rows.item(i).acta,
						"Id": results.rows.item(i).id,
						"AfectacionOtro": results.rows.item(i).afectacion_otro,
						"Aflorante": results.rows.item(i).aflorante,
						"AreaAlta": results.rows.item(i).area_alta,
						"AreaBaja": results.rows.item(i).area_baja,
						"AreaMedia": results.rows.item(i).area_media,
						"AreaMuybaja": results.rows.item(i).area_muybaja,
						"BosqueGaleria": results.rows.item(i).bosque_galeria,
						"BosquePrimario": results.rows.item(i).bosque_primario,
						"BosqueSecundario": results.rows.item(i).bosque_secundario,
						"CaidaRocas": results.rows.item(i).caida_rocas,
						"CarcavasLeve": results.rows.item(i).carcavas_leve,
						"CarcavasModerada": results.rows.item(i).carcavas_moderada,
						"CarcavasMuysevera": results.rows.item(i).carcavas_muysevera,
						"CarcavasSevera": results.rows.item(i).carcavas_severa,
						"CcPropietario": results.rows.item(i).cc_propietario,
						"Complejo": results.rows.item(i).complejo,
						"CoordenadaE": results.rows.item(i).coordenada_e,
						"CoordenadaN": results.rows.item(i).coordenada_n,
						"Cultivos": results.rows.item(i).cultivos,
						"DistanciaSp": results.rows.item(i).distancia_sp,
						"Eriales": results.rows.item(i).eriales,
						"Estado": results.rows.item(i).estado,
						"EstadoActivo": results.rows.item(i).estado_activo,
						"EstadoEstabilizado": results.rows.item(i).estado_estabilizado,
						"EstadoInactivo": results.rows.item(i).estado_inactivo,
						"Fecha": results.rows.item(i).fecha,
						"FechaInicio": results.rows.item(i).fecha_inicio,
						"FechaModificada": results.rows.item(i).fecha_modificada,
						"FlujosDetritos": results.rows.item(i).flujos_detritos,
						"FlujosEscombros": results.rows.item(i).flujos_escombros,
						"FlujosLodo": results.rows.item(i).flujos_lodo,
						"Id": results.rows.item(i).id,
						"LaminarLeve": results.rows.item(i).laminar_leve,
						"LaminarModerada": results.rows.item(i).laminar_moderada,
						"LaminarMuysevera": results.rows.item(i).laminar_muysevera,
						"LaminarSevera": results.rows.item(i).laminar_severa,
						"Linea": results.rows.item(i).linea,
						"Litologia": results.rows.item(i).litologia,
						"LugarCcPropietario": results.rows.item(i).lugar_cc_propietario,
						"MasaOtro": results.rows.item(i).masa_otro,
						"MorfoAncho": results.rows.item(i).morfo_ancho,
						"MorfoDesliza": results.rows.item(i).morfo_desliza,
						"MorfoLong": results.rows.item(i).morfo_long,
						"MorfoProf": results.rows.item(i).morfo_prof,
						"NoAflorante": results.rows.item(i).no_aflorante,
						"Observa": results.rows.item(i).observa,
						"Operadora": results.rows.item(i).operadora,
						"OrigenCoord": results.rows.item(i).origen_coord,
						"Otro": results.rows.item(i).otro,
						"OtroLeve": results.rows.item(i).otro_leve,
						"OtroModerada": results.rows.item(i).otro_moderada,
						"OtroMuysevera": results.rows.item(i).otro_muysevera,
						"OtroSevera": results.rows.item(i).otro_severa,
						"Pastos": results.rows.item(i).pastos,
						"PDepto": results.rows.item(i).P_DEPTO,
						"PendAlta": results.rows.item(i).pend_alta,
						"PendBaja": results.rows.item(i).pend_baja,
						"PendMedia": results.rows.item(i).pend_media,
						"PendMuyalta": results.rows.item(i).pend_muyalta,
						"PeriodoInvierno": results.rows.item(i).periodo_invierno,
						"PeriodoVerano": results.rows.item(i).periodo_verano,
						"Permiso": results.rows.item(i).permiso,
						"PMun": results.rows.item(i).P_MUN,
						"Predio": results.rows.item(i).predio,
						"ProgramaSismico": results.rows.item(i).programa_sismico,
						"Propietario": results.rows.item(i).propietario,
						"Rastrojo": results.rows.item(i).rastrojo,
						"RelaRepreProp": results.rows.item(i).rela_repre_prop,
						"Reptacion": results.rows.item(i).reptacion,
						"Rotacional": results.rows.item(i).rotacional,
						"SocavaLeve": results.rows.item(i).socava_leve,
						"SocavaModerada": results.rows.item(i).socava_moderada,
						"SocavaMuysevera": results.rows.item(i).socava_muysevera,
						"SocavaSevera": results.rows.item(i).socava_severa,
						"SpCercano": results.rows.item(i).sp_cercano,
						"Stk": results.rows.item(i).stk,
						"SurcoLeve": results.rows.item(i).surco_leve,
						"SurcoModerada": results.rows.item(i).surco_moderada,
						"SurcoMuysevera": results.rows.item(i).surco_muysevera,
						"SurcoSevera": results.rows.item(i).surco_severa,
						"Telefono": results.rows.item(i).telefono,
						"Terraceras": results.rows.item(i).terraceras,
						"Traslacional": results.rows.item(i).traslacional,
						"UniColuvion": results.rows.item(i).uni_coluvion,
						"UnidFisiografica": results.rows.item(i).uni_llanura,
						"UniLlanura": results.rows.item(i).uni_loma,
						"UniLoma": results.rows.item(i).uni_terraza,
						"UniTerraza": results.rows.item(i).unid_fisiografica,
						"Usuario": results.rows.item(i).usuario,
						"Vereda": results.rows.item(i).vereda,
						"Volcamiento": results.rows.item(i).volcamiento
                    });
                    

                    $.ajax({
                        type: 'POST',
                        contentType: 'application/json',
                        url: 'http://'+ window.localStorage.getItem("ip") +'/eregistersServe/webresources/com.eregisters.entities.preerosivop',
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

    window.localStorage.setItem("editar", "true");
    window.localStorage.setItem("actaId", actaId);
    window.location.href = "preProcesoErosivo.html";
}

function prepareCreate() {

    window.localStorage.setItem("editar", "false");
    window.localStorage.setItem("actaId", 0);
    window.location.href = "preProcesoErosivo.html";
}
