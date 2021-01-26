var i = 1;

document.addEventListener("deviceready", onDeviceReady, false);

var myDB;

function onDeviceReady() {
	
    myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});

    myDB.transaction(function(transaction) {
		
        transaction.executeSql('SELECT * FROM pre_vial_p', [], function(tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                $("#TableData").append("<li class='list-group-item'><input id='" + results.rows.item(i).id + "' type='checkbox' aria-label='...'>&nbsp;&nbsp;&nbsp;<a href='javascript:prepareEdit(" + results.rows.item(i).id + ")' >act-pre-vial-00" + results.rows.item(i).id + "</a></li>");
            }
        }, function(tx, error)
        {
            alert('Error occurred');
        });
		
		
		transaction.executeSql('SELECT * FROM post_vial_p', [], function(tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                $("#TableData").append("<li class='list-group-item'><input id='" + results.rows.item(i).id + "' type='checkbox' aria-label='...'>&nbsp;&nbsp;&nbsp;<a href='javascript:prepareEditPost(" + results.rows.item(i).id + ")' >act-post-vial-00" + results.rows.item(i).id + "</a></li>");
            }
        }, function(tx, error)
        {
            alert('Error occurred');
        });
		
		
    });
	
}

function transmit() {

	jQuery.fn.pop = [].pop;
    jQuery.fn.shift = [].shift;
	
    $("input[type='checkbox']:checked").each(function() {
		
		var idPre = $(this).attr('id');
		
		
		myDB.transaction(function(transaction) {
            

			console.log("idPre" + idPre );
			var preObraArtePCollection = [];
			var preObraArtePCollectionJson;
			
			transaction.executeSql('SELECT * FROM pre_obra_arte_p where id_acta=' + idPre, [], function(tx, results) {
				
				var len = results.rows.length, i;
				for (i = 0; i < len; i++) {
					
					var PreObraArteP = {};
					console.log("------" + results.rows.item(i).id);					
					PreObraArteP['id'] = results.rows.item(i).id;					
					PreObraArteP['abscisa'] = results.rows.item(i).abscisa;
					PreObraArteP['estribosColM'] = results.rows.item(i).estribos_col_m;
					PreObraArteP['estribosColE'] = results.rows.item(i).estribos_col_e;
					PreObraArteP['estribosColP'] = results.rows.item(i).estribos_col_p;
					PreObraArteP['estribosColLongMayor'] = results.rows.item(i).estribos_col_long_mayor;
					PreObraArteP['estribosColLongMenor'] = results.rows.item(i).estribos_col_long_menor;
					PreObraArteP['estribosColAnchoMayor'] = results.rows.item(i).estribos_col_ancho_mayor;
					PreObraArteP['estribosColAnchoMenor'] = results.rows.item(i).estribos_col_ancho_menor;
					PreObraArteP['estribosT'] = results.rows.item(i).estribos_t;
					PreObraArteP['estribosL'] = results.rows.item(i).estribos_l;
					PreObraArteP['estribosA'] = results.rows.item(i).estribos_a;
					PreObraArteP['vigasColM'] = results.rows.item(i).vigas_col_m;
					PreObraArteP['vigasColE'] = results.rows.item(i).vigas_col_e;
					PreObraArteP['vigasColP'] = results.rows.item(i).vigas_col_p;
					PreObraArteP['vigasColLongMayor'] = results.rows.item(i).vigas_col_long_mayor;
					PreObraArteP['vigasColLongMenor'] = results.rows.item(i).vigas_col_long_menor;
					PreObraArteP['vigasColAnchoMayor'] = results.rows.item(i).vigas_col_ancho_mayor;
					PreObraArteP['vigasColAnchoMenor'] = results.rows.item(i).vigas_col_ancho_menor;
					PreObraArteP['vigasT'] = results.rows.item(i).vigas_t;
					PreObraArteP['vigasL'] = results.rows.item(i).vigas_l;
					PreObraArteP['vigasA'] = results.rows.item(i).vigas_a;
					PreObraArteP['placasColM'] = results.rows.item(i).placas_col_m;
					PreObraArteP['placasColE'] = results.rows.item(i).placas_col_e;
					PreObraArteP['placasColP'] = results.rows.item(i).placas_col_p;
					PreObraArteP['placasColLongMayor'] = results.rows.item(i).placas_col_long_mayor;
					PreObraArteP['placasColLongMenor'] = results.rows.item(i).placas_col_long_menor;
					PreObraArteP['placasColAnchoMayor'] = results.rows.item(i).placas_col_ancho_mayor;
					PreObraArteP['placasColAnchoMenor'] = results.rows.item(i).placas_col_ancho_menor;
					PreObraArteP['placasT'] = results.rows.item(i).placas_t;
					PreObraArteP['placasL'] = results.rows.item(i).placas_l;
					PreObraArteP['placasA'] = results.rows.item(i).placas_a;
					PreObraArteP['observaciones'] = results.rows.item(i).observaciones;					
					preObraArtePCollection.push(PreObraArteP);	
				}
				
				preObraArtePCollectionJson = JSON.stringify( preObraArtePCollection);
				console.log("OOOBRAAA" + JSON.stringify( preObraArtePCollection) );
                            
            }, function(tx, error) {
                alert('Error occurred');
            });
			
			
			
			var prePatologiaPCollection = [];
			var prePatologiaPCollectionJson;
			
			transaction.executeSql('SELECT * FROM pre_patologia_p where id_acta=' + idPre, [], function(tx, results) {
				
				var len = results.rows.length, i;
				console.log("lenlenlenlen" + len);
				
				for (i = 0; i < len; i++) {
					
					var PrePatologiaP = {};		
					console.log("#############" + results.rows.item(i).id);	
					PrePatologiaP['id'] =  results.rows.item(i).id;
					PrePatologiaP['idActa'] =  results.rows.item(i).id_acta;
					PrePatologiaP['abscisa'] =  results.rows.item(i).abscisa;
					PrePatologiaP['valorP'] =  results.rows.item(i).valor_p;
					PrePatologiaP['valorE'] =  results.rows.item(i).valor_e;
					PrePatologiaP['izq'] =  results.rows.item(i).izq;
					PrePatologiaP['eje'] =  results.rows.item(i).eje;
					PrePatologiaP['der'] =  results.rows.item(i).der;
					PrePatologiaP['longi ']= results.rows.item(i).longi;
					PrePatologiaP['aleatoria'] = results.rows.item(i).aleatoria;
					PrePatologiaP['transver'] = results.rows.item(i).transver;
					PrePatologiaP['longMayor'] = results.rows.item(i).long_mayor;
					PrePatologiaP['longMenor'] = results.rows.item(i).long_menor;
					PrePatologiaP['anchoMayor'] = results.rows.item(i).ancho_mayor;
					PrePatologiaP['anchoMenor'] = results.rows.item(i).ancho_menor;
					PrePatologiaP['profMayor'] = results.rows.item(i).prof_mayor;
					PrePatologiaP['profMenor'] = results.rows.item(i).prof_menor;
					PrePatologiaP['observaciones'] = results.rows.item(i).observaciones;				
					prePatologiaPCollection.push(PrePatologiaP);	
				}
				
				prePatologiaPCollectionJson = JSON.stringify( prePatologiaPCollection);
				//console.log("patoooooo" +  );
                            
            }, function(tx, error) {
                alert('Error occurred');
            });
			
			
			
			
			
			transaction.executeSql('SELECT * FROM pre_vial_p where id=' + idPre, [], function(tx, results) {
				
				var len = results.rows.length, i;
				for (i = 0; i < len; i++) {
						
				console.log("@@@" + results.rows.item(i).id);
				var datasend = JSON.stringify({
						
							"id": results.rows.item(i).id,
							"programaSismico": results.rows.item(i).programa_sismico,
							"operadora": results.rows.item(i).operadora,
							"fecha": results.rows.item(i).fecha,
							"linea": results.rows.item(i).linea,
							"acta": results.rows.item(i).acta,
							"permiso": results.rows.item(i).permiso,
							"pDepto": results.rows.item(i).P_DEPTO,
							"pMun": results.rows.item(i).P_MUN,
							"vereda": results.rows.item(i).vereda,
							"predio": results.rows.item(i).predio,
							"propietario": results.rows.item(i).propietario,
							"ccPropietario": results.rows.item(i).cc_propietario,
							"lugarCcPropietario": results.rows.item(i).lugar_cc_propietario,
							"telefono": results.rows.item(i).telefono,
							"abscisaInicial": results.rows.item(i).telefono,
							"abscisaFinal": results.rows.item(i).abscisa_final,
							"despEnsitu1": results.rows.item(i).desp_ensitu1,
							"despEnsitu2": results.rows.item(i).desp_Ensitu2,
							"coordenadasiE": results.rows.item(i).coordenadasi_E,
							"coordenadasiN": results.rows.item(i).coordenadasi_N,
							"coordenadasfE": results.rows.item(i).coordenadasf_E,
							"coordenadasfN": results.rows.item(i).coordenadasf_N,
							"plana": results.rows.item(i).plana,
							"ondulada": results.rows.item(i).ondulada,
							"quebrada": results.rows.item(i).quebrada,
							"escarpe": results.rows.item(i).escarpe,
							"anchoPromedio": results.rows.item(i).ancho_Promedio,
							"pendiente1": results.rows.item(i).pendiente1,
							"pendiente2": results.rows.item(i).pendiente2,
							"pendiente3": results.rows.item(i).pendiente3,
							"orden1": results.rows.item(i).orden_1,
							"orden2": results.rows.item(i).orden_2,
							"orden3": results.rows.item(i).orden_3,
							"veredal": results.rows.item(i).veredal,
							"vecinal": results.rows.item(i).vecinal,
							"privada": results.rows.item(i).privada,
							"comunitaria": results.rows.item(i).comunitaria,
							"sinPavimento": results.rows.item(i).sin_Pavimento,
							"conAfirmado": results.rows.item(i).con_Afirmado,
							"sinAfirmado": results.rows.item(i).sin_Afirmado,
							"pavFlexCtoAsfaltico": results.rows.item(i).pav_Flex_Cto_Asfaltico,
							"pavFlexCrudo": results.rows.item(i).pav_Flex_Crudo,
							"tratSuperficial": results.rows.item(i).trat_Superficial,
							"pavRigido": results.rows.item(i).pav_Rigido,
							"adoquin": results.rows.item(i).adoquin,
							"triturado": results.rows.item(i).triturado,
							"empedrado": results.rows.item(i).empedrado,
							"materialAporte": results.rows.item(i).material_Aporte,
							"crudoRio": results.rows.item(i).crudo_Rio,
							"crudoRioSel": results.rows.item(i).crudo_Rio_Sel,
							"otros": results.rows.item(i).otros,
							"trafico": results.rows.item(i).trafico,
							"fechaInicio": results.rows.item(i).fecha_Inicio,
							"usuario": results.rows.item(i).usuario,
							"fechaModificada": results.rows.item(i).fecha_Modificada,
							"estado": results.rows.item(i).estado,
							"conceptoGeneral": results.rows.item(i).concepto_General,
							"preObraArtePCollection": preObraArtePCollection, 
							"prePatologiaPCollection": prePatologiaPCollection, 							   
                    });
						
						
					console.log(datasend);
					$.ajax({
                        type: 'POST',
                        contentType: 'application/json',
                        url: 'http://'+ window.localStorage.getItem("ip") +'/eregistersServe/webresources/com.eregisters.entities.previalp',
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
				
				
				
                            
            }, function(tx, error) {
                alert('Error occurred');
            });
			
			
        });
		
		
        

    });




}

function prepareEdit(actaId) {

    window.localStorage.setItem("editar", "false");
    window.localStorage.setItem("actaId", actaId);
	window.localStorage.setItem("post", "false");
    window.location.href = "posVial.html";
}

function prepareEditPost(actaId) {

    window.localStorage.setItem("editar", "true");
    window.localStorage.setItem("actaId", actaId);
	window.localStorage.setItem("post", "true");
    window.location.href = "posVial.html";
}

function prepareCreate() {

    window.localStorage.setItem("editar", "false");
    window.localStorage.setItem("actaId", 0);
    window.location.href = "preVial.html";
}
