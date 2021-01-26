var i = 1;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});

    myDB.transaction(function(transaction) {
        transaction.executeSql('SELECT * FROM pre_infra_p', [], function(tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                $("#TableData").append("<li class='list-group-item'><input id='" + results.rows.item(i).id + "' type='checkbox' aria-label='...'>&nbsp;&nbsp;&nbsp;<a href='javascript:prepareEdit(" + results.rows.item(i).id + ")' >act-pre-inf-00" + results.rows.item(i).id + "</a></li>");
            }
        }, function(tx, error)
        {
            alert('Error occurred');
        });
		
		
				transaction.executeSql('SELECT * FROM post_infra_p', [], function(tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                $("#TableData").append("<li class='list-group-item'><input id='" + results.rows.item(i).id + "' type='checkbox' aria-label='...'>&nbsp;&nbsp;&nbsp;<a href='javascript:prepareEditPost(" + results.rows.item(i).id + ")' >act-post-inf-00" + results.rows.item(i).id + "</a></li>");
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
            transaction.executeSql('SELECT * FROM pre_infra_p where id=' + idPre, [], function(tx, results) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    //results.rows.item(i).id
                    var datasend = JSON.stringify({
                        "Acta": results.rows.item(i).id,
						"Altura": results.rows.item(i).altura,
						"Ancho": results.rows.item(i).ancho,
						"Caidas": results.rows.item(i).caidas,
						"CajaEntradaEC": results.rows.item(i).caja_entrada_e_c,
						"CajaEntradaEE": results.rows.item(i).caja_entrada_e_e,
						"CajaEntradaEM": results.rows.item(i).caja_entrada_e_m,
						"CajaEntradaMC": results.rows.item(i).caja_entrada_m_c,
						"CajaEntradaME": results.rows.item(i).caja_entrada_m_e,
						"CajaEntradaMM": results.rows.item(i).caja_entrada_m_m,
						"CajaSalidaEC": results.rows.item(i).caja_salida_e_c,
						"CajaSalidaEE": results.rows.item(i).caja_salida_e_e,
						"CajaSalidaEM": results.rows.item(i).caja_salida_e_m,
						"CajaSalidaMC": results.rows.item(i).caja_salida_m_c,
						"CajaSalidaME": results.rows.item(i).caja_salida_m_e,
						"CajaSalidaMM": results.rows.item(i).caja_salida_m_m,
						"CaptacionSumergidaEC": results.rows.item(i).captacion_sumergida_e_c,
						"CaptacionSumergidaEE": results.rows.item(i).captacion_sumergida_e_e,
						"CaptacionSumergidaEM": results.rows.item(i).captacion_sumergida_e_m,
						"CaptacionSumergidaMC": results.rows.item(i).captacion_sumergida_m_c,
						"CaptacionSumergidaME": results.rows.item(i).captacion_sumergida_m_e,
						"CaptacionSumergidaMM": results.rows.item(i).captacion_sumergida_m_m,
						"Carcavas": results.rows.item(i).carcavas,
						"CaudalEfimero": results.rows.item(i).caudal_efimero,
						"CaudalIntermitente": results.rows.item(i).caudal_intermitente,
						"CaudalOtro": results.rows.item(i).caudal_otro,
						"CaudalPermanente": results.rows.item(i).caudal_permanente,
						"CcPropietario": results.rows.item(i).cc_propietario,
						"CerramientoEC": results.rows.item(i).cerramiento_e_c,
						"CerramientoEE": results.rows.item(i).cerramiento_e_e,
						"CerramientoEM": results.rows.item(i).cerramiento_e_m,
						"CerramientoMC": results.rows.item(i).cerramiento_m_c,
						"CerramientoME": results.rows.item(i).cerramiento_m_e,
						"CerramientoMM": results.rows.item(i).cerramiento_m_m,
						"Cizallamiento": results.rows.item(i).cizallamiento,
						"ColumnaEC": results.rows.item(i).columna_e_c,
						"ColumnaEE": results.rows.item(i).columna_e_e,
						"ColumnaEM": results.rows.item(i).columna_e_m,
						"ColumnaMC": results.rows.item(i).columna_m_c,
						"ColumnaME": results.rows.item(i).columna_m_e,
						"ColumnaMM": results.rows.item(i).columna_m_m,
						"CompuertaEC": results.rows.item(i).compuerta_e_c,
						"CompuertaEE": results.rows.item(i).compuerta_e_e,
						"CompuertaEM": results.rows.item(i).compuerta_e_m,
						"CompuertaMC": results.rows.item(i).compuerta_m_c,
						"CompuertaME": results.rows.item(i).compuerta_m_e,
						"CompuertaMM": results.rows.item(i).compuerta_m_m,
						"ConduccionAlmacenamientoEC": results.rows.item(i).conduccion_almacenamiento_e_c,
						"ConduccionAlmacenamientoEE": results.rows.item(i).conduccion_almacenamiento_e_e,
						"ConduccionAlmacenamientoEM": results.rows.item(i).conduccion_almacenamiento_e_m,
						"ConduccionAlmacenamientoMC": results.rows.item(i).conduccion_almacenamiento_m_c,
						"ConduccionAlmacenamientoME": results.rows.item(i).conduccion_almacenamiento_m_e,
						"ConduccionAlmacenamientoMM": results.rows.item(i).conduccion_almacenamiento_m_m,
						"ConduccionDesarenadorEC": results.rows.item(i).conduccion_desarenador_e_c,
						"ConduccionDesarenadorEE": results.rows.item(i).conduccion_desarenador_e_e,
						"ConduccionDesarenadorEM": results.rows.item(i).conduccion_desarenador_e_m,
						"ConduccionDesarenadorMC": results.rows.item(i).conduccion_desarenador_m_c,
						"ConduccionDesarenadorME": results.rows.item(i).conduccion_desarenador_m_e,
						"ConduccionDesarenadorMM": results.rows.item(i).conduccion_desarenador_m_m,
						"ConduccionEC": results.rows.item(i).conduccion_e_c,
						"ConduccionEE": results.rows.item(i).conduccion_e_e,
						"ConduccionEM": results.rows.item(i).conduccion_e_m,
						"ConduccionMC": results.rows.item(i).conduccion_m_c,
						"ConduccionME": results.rows.item(i).conduccion_m_e,
						"ConduccionMM": results.rows.item(i).conduccion_m_m,
						"ConstruSi": results.rows.item(i).constru_si,
						"CoordenadaE": results.rows.item(i).coordenada_e,
						"CoordenadaN": results.rows.item(i).coordenada_n,
						"DesarenadorEC": results.rows.item(i).desarenador_e_c,
						"DesarenadorEE": results.rows.item(i).desarenador_e_e,
						"DesarenadorEM": results.rows.item(i).desarenador_e_m,
						"DesarenadorMC": results.rows.item(i).desarenador_m_c,
						"DesarenadorME": results.rows.item(i).desarenador_m_e,
						"DesarenadorMM": results.rows.item(i).desarenador_m_m,
						"Deslizamientos": results.rows.item(i).deslizamientos,
						"Desprendimientos": results.rows.item(i).desprendimientos,
						"DistanciaSp": results.rows.item(i).distancia_sp,
						"Elemento": results.rows.item(i).elemento,
						"Erosion": results.rows.item(i).erosion,
						"ErosivosNinguno": results.rows.item(i).erosivos_ninguno,
						"Estado": results.rows.item(i).estado,
						"FaltaRela":	results.rows.item(i).falta_rela,
						"Fecha": results.rows.item(i).fecha,
						"FechaInicio": results.rows.item(i).fechaHoraInicio,
						"FechaModificada": results.rows.item(i).fecha_modificada,
						"Flujos": results.rows.item(i).flujos,
						"Forma": results.rows.item(i).forma,
						"GavionEC": results.rows.item(i).gavion_e_c,
						"GavionEE": results.rows.item(i).gavion_e_e,
						"GavionEM": results.rows.item(i).gavion_e_m,
						"GavionMC": results.rows.item(i).gavion_m_c,
						"GavionME": results.rows.item(i).gavion_m_e,
						"GavionMM": results.rows.item(i).gavion_m_m,
						"Id": results.rows.item(i).id,
						"Laminar": results.rows.item(i).laminar,
						"Largo": results.rows.item(i).largo,
						"Linea": results.rows.item(i).linea  ,
						"LosaEC": results.rows.item(i).losa_e_c,
						"LosaEE": results.rows.item(i).losa_e_e,
						"LosaEM": results.rows.item(i).losa_e_m,
						"LosaMC": results.rows.item(i).losa_m_c,
						"LosaME": results.rows.item(i).losa_m_e,
						"LosaMM": results.rows.item(i).losa_m_m,
						"LugarCcPropietario": results.rows.item(i).lugar_cc_propietario,
						"MovNinguno": results.rows.item(i).mov_ninguno,
						"MuroEC": results.rows.item(i).muro_e_c,
						"MuroEE": results.rows.item(i).muro_e_e,
						"MuroEM": results.rows.item(i).muro_e_m,
						"MuroMC": results.rows.item(i).muro_m_c,
						"MuroME": results.rows.item(i).muro_m_e,
						"MuroMM": results.rows.item(i).muro_m_m,
						"Observa": results.rows.item(i).observa,
						"Operadora": results.rows.item(i).operadora,
						"OrigenCoord": results.rows.item(i).origen_coord,
						"Otro1EC": results.rows.item(i).otro1_e_c,
						"Otro1EE": results.rows.item(i).otro1_e_e,
						"Otro1EM": results.rows.item(i).otro1_e_m,
						"Otro1MC": results.rows.item(i).otro1_m_c,
						"Otro1ME": results.rows.item(i).otro1_m_e,
						"Otro1MM": results.rows.item(i).otro1_m_m,
						"Otro1Nombre": results.rows.item(i).otro1_nombre,
						"Otro2EC": results.rows.item(i).otro2_e_c,
						"Otro2EE": results.rows.item(i).otro2_e_e,
						"Otro2EM": results.rows.item(i).otro2_e_m,
						"Otro2MC": results.rows.item(i).otro2_m_c,
						"Otro2ME": results.rows.item(i).otro2_m_e,
						"Otro2MM": results.rows.item(i).otro2_m_m,
						"Otro2Nombre": results.rows.item(i).otro2_nombre,
						"Otro3EC": results.rows.item(i).otro3_e_c,
						"Otro3EE": results.rows.item(i).otro3_e_e,
						"Otro3EM": results.rows.item(i).otro3_e_m,
						"Otro3MC": results.rows.item(i).otro3_m_c,
						"Otro3ME": results.rows.item(i).otro3_m_e,
						"Otro3MM": results.rows.item(i).otro3_m_m,
						"Otro3Nombre": results.rows.item(i).otro3_nombre,
						"Otro4EC": results.rows.item(i).otro4_e_c,
						"Otro4EE": results.rows.item(i).otro4_e_e,
						"Otro4EM": results.rows.item(i).otro4_e_m,
						"Otro4MC": results.rows.item(i).otro4_m_c,
						"Otro4ME": results.rows.item(i).otro4_m_e,
						"Otro4MM": results.rows.item(i).otro4_m_m,
						"Otro4Nombre": results.rows.item(i).otro4_nombre,
						"Otro5EC": results.rows.item(i).otro5_e_c,
						"Otro5EE": results.rows.item(i).otro5_e_e,
						"Otro5EM": results.rows.item(i).otro5_e_m,
						"Otro5MC": results.rows.item(i).otro5_m_c,
						"Otro5ME": results.rows.item(i).otro5_m_e,
						"Otro5MM": results.rows.item(i).otro5_m_m,
						"Otro5Nombre": results.rows.item(i).otro5_nombre,
						"PDepto": results.rows.item(i).P_DEPTO,
						"Permiso": results.rows.item(i).permiso,
						"PilotesEC": results.rows.item(i).pilotes_e_c,
						"PilotesEE": results.rows.item(i).pilotes_e_e,
						"PilotesEM": results.rows.item(i).pilotes_e_m,
						"PilotesMC": results.rows.item(i).pilotes_m_c,
						"PilotesME": results.rows.item(i).pilotes_m_e,
						"PilotesMM": results.rows.item(i).pilotes_m_m,
						"PMun": results.rows.item(i).P_MUN,
						"Predio": results.rows.item(i).predio,
						"Profundidad": results.rows.item(i).profundidad,
						"ProgramaSismico": results.rows.item(i).programa_sismico,
						"Propietario": results.rows.item(i).propietario,
						"RejillaEC": results.rows.item(i).rejilla_e_c,
						"RejillaEE": results.rows.item(i).rejilla_e_e,
						"RejillaEM": results.rows.item(i).rejilla_e_m,
						"RejillaMC": results.rows.item(i).rejilla_m_c,
						"RejillaME": results.rows.item(i).rejilla_m_e,
						"RejillaMM": results.rows.item(i).rejilla_m_m,
						"RelaRepreProp": results.rows.item(i).rela_repre_prop,
						"RevestimientoEC": results.rows.item(i).revestimiento_e_c,
						"RevestimientoEE": results.rows.item(i).revestimiento_e_e,
						"RevestimientoEM": results.rows.item(i).revestimiento_e_m,
						"RevestimientoMC": results.rows.item(i).revestimiento_m_c,
						"RevestimientoME": results.rows.item(i).revestimiento_m_e,
						"RevestimientoMM": results.rows.item(i).revestimiento_m_m,
						"Socavacion": results.rows.item(i).socavacion,
						"Socavamiento": results.rows.item(i).socavamiento,
						"SpCercano": results.rows.item(i).sp_cercano,
						"Stk": results.rows.item(i).stk,
						"Surcos": results.rows.item(i).surcos,
						"TanqueAlmacenamientoEC": results.rows.item(i).tanque_almacenamiento_e_c,
						"TanqueAlmacenamientoEE": results.rows.item(i).tanque_almacenamiento_e_e,
						"TanqueAlmacenamientoEM": results.rows.item(i).tanque_almacenamiento_e_m,
						"TanqueAlmacenamientoMC": results.rows.item(i).tanque_almacenamiento_m_c,
						"TanqueAlmacenamientoME": results.rows.item(i).tanque_almacenamiento_m_e,
						"TanqueAlmacenamientoMM": results.rows.item(i).tanque_almacenamiento_m_m,
						"TanqueDesarenadorEC": results.rows.item(i).tanque_desarenador_e_c,
						"TanqueDesarenadorEE": results.rows.item(i).tanque_desarenador_e_e,
						"TanqueDesarenadorEM": results.rows.item(i).tanque_desarenador_e_m,
						"TanqueDesarenadorMC": results.rows.item(i).tanque_desarenador_m_c,
						"TanqueDesarenadorME": results.rows.item(i).tanque_desarenador_m_e,
						"TanqueDesarenadorMM": results.rows.item(i).tanque_desarenador_m_m,
						"TanqueDistribucionEC": results.rows.item(i).tanque_distribucion_e_c,
						"TanqueDistribucionEE": results.rows.item(i).tanque_distribucion_e_e,
						"TanqueDistribucionEM": results.rows.item(i).tanque_distribucion_e_m,
						"TanqueDistribucionMC": results.rows.item(i).tanque_distribucion_m_c,
						"TanqueDistribucionME": results.rows.item(i).tanque_distribucion_m_e,
						"TanqueDistribucionMM": results.rows.item(i).tanque_distribucion_m_m,
						"Telefono": results.rows.item(i).telefono,
						"TiempoConstruccion": results.rows.item(i).tiempo_construccion,
						"Topografia": results.rows.item(i).topografia,
						"TorreEC": results.rows.item(i).torre_e_c,
						"TorreEE": results.rows.item(i).torre_e_e,
						"TorreEM": results.rows.item(i).torre_e_m,
						"TorreMC": results.rows.item(i).torre_m_c,
						"TorreME": results.rows.item(i).torre_m_e,
						"TorreMM": results.rows.item(i).torre_m_m,
						"TraficoLiviano": results.rows.item(i).trafico_liviano,
						"TraficoOtro": results.rows.item(i).trafico_otro,
						"TraficoPesado": results.rows.item(i).trafico_pesado,
						"TuberiaDistribucionEC": results.rows.item(i).tuberia_distribucion_e_c,
						"TuberiaDistribucionEE": results.rows.item(i).tuberia_distribucion_e_e,
						"TuberiaDistribucionEM": results.rows.item(i).tuberia_distribucion_e_m,
						"TuberiaDistribucionMC": results.rows.item(i).tuberia_distribucion_m_c,
						"TuberiaDistribucionME": results.rows.item(i).tuberia_distribucion_m_e,
						"TuberiaDistribucionMM": results.rows.item(i).tuberia_distribucion_m_m,
						"Usuario": results.rows.item(i).usuario,
						"ValvulaControlEC": results.rows.item(i).valvula_control_e_c,
						"ValvulaControlEE": results.rows.item(i).valvula_control_e_e,
						"ValvulaControlEM": results.rows.item(i).valvula_control_e_m,
						"ValvulaControlMC": results.rows.item(i).valvula_control_m_c,
						"ValvulaControlME": results.rows.item(i).valvula_control_m_e,
						"ValvulaControlMM": results.rows.item(i).valvula_control_m_m,
						"Vereda": results.rows.item(i).vereda,
						"Volcamiento": results.rows.item(i).volcamiento,
						"Volcamientos": results.rows.item(i).volcamientos
                    });
                    

                    $.ajax({
                        type: 'POST',
                        contentType: 'application/json',
                        url: 'http://'+ window.localStorage.getItem("ip") +'/eregistersServe/webresources/com.eregisters.entities.preinfrap',
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
    window.location.href = "posInfraestructura.html";
}

function prepareEditPost(actaId) {

    window.localStorage.setItem("editar", "true");
    window.localStorage.setItem("actaId", actaId);
	window.localStorage.setItem("post", "true");
    window.location.href = "posInfraestructura.html";
}

function prepareCreate() {

    window.localStorage.setItem("editar", "false");
    window.localStorage.setItem("actaId", 0);
    window.location.href = "preInfraestructura.html";
}
