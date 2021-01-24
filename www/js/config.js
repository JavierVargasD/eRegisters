$(document).ready(function() {
    $("#operadora").val(window.localStorage.getItem("operadora"));
    $("#programa_sismico").val(window.localStorage.getItem("programa_sismico"));
    $("#userc").val(window.localStorage.getItem("userc"));
    $("#passc").val(window.localStorage.getItem("passc"));
    $("#passc").val(window.localStorage.getItem("ip"));
	$("#representante").val(window.localStorage.getItem("representante"));
	$("#numdocrepre").val(window.localStorage.getItem("numdocrepre"));
	$("#lugarcc").val(window.localStorage.getItem("lugarcc"));

});


function saveConfig() {
    window.localStorage.setItem("operadora", $("#operadora").val());
    window.localStorage.setItem("programa_sismico", $("#programa_sismico").val());
    window.localStorage.setItem("userc", $("#userc").val());
    window.localStorage.setItem("passc", $("#passc").val());
    window.localStorage.setItem("ip", $("#ip").val());
    window.localStorage.setItem("representante", $("#representante").val());
    window.localStorage.setItem("numdocrepre", $("#numdocrepre").val());
    window.localStorage.setItem("lugarcc", $("#lugarcc").val());
    alert('Config. guardada');
    window.location.href  =  'index.html';
}

function updateTables(){
	
    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db", location: 'default'});
	
    myDB.transaction(function(transaction) {
        
        transaction.executeSql("alter table pre_vivienda_p add column rela_repre_prop VARCHAR(50)", [],
                function(tx, result) {
                    console.log("Table alter successfully");
                },
                function(error) {
                    alert(error.message);
                });

    });
    
    
        myDB.transaction(function(transaction) {
        
        transaction.executeSql("alter table pre_vivienda_p add column elementos_si INTEGER(1)", [],
                function(tx, result) {
                    console.log("Table alter successfully");
                },
                function(error) {
                    alert(error.message);
                });

    });
    
    
   myDB.transaction(function(transaction) {
        
        transaction.executeSql("alter table pre_vivienda_p add column falta_rela VARCHAR(250)", [],
                function(tx, result) {
                    console.log("Table alter successfully");
                },
                function(error) {
                    alert(error.message);
                });

    });
    

       myDB.transaction(function(transaction) {
        
        transaction.executeSql("alter table pre_vivienda_p add column habitada VARCHAR(2)", [],
                function(tx, result) {
                    console.log("Table alter successfully");
                },
                function(error) {
                    alert(error.message);
                });

    });
    
       myDB.transaction(function(transaction) {
        
        transaction.executeSql("alter table pre_vivienda_p add column deshabitada VARCHAR(2)", [],
                function(tx, result) {
                    console.log("Table alter successfully");
                },
                function(error) {
                    alert(error.message);
                });

    });
    
       myDB.transaction(function(transaction) {
        
        transaction.executeSql("alter table pre_vivienda_p add column rural VARCHAR(2)", [],
                function(tx, result) {
                    console.log("Table alter successfully");
                },
                function(error) {
                    alert(error.message);
                });

    });
    
    
       myDB.transaction(function(transaction) {
        
        transaction.executeSql("alter table pre_vivienda_p add column urbano VARCHAR(2)", [],
                function(tx, result) {
                    console.log("Table alter successfully");
                },
                function(error) {
                    alert(error.message);
                });

    });
    
    

    
    

}



