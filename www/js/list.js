$(document).ready(function() {

    alert('ready');
    alert(window);
    var myDB = window.sqlitePlugin.openDatabase({name: "geominutes.db"});
    myDB.transaction(function(transaction) {
        transaction.executeSql('SELECT * FROM pre_vivienda_p', [], function(tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                $("#TableData").append("<li class='list-group-item'><input type='checkbox' aria-label='...'>&nbsp;&nbsp;&nbsp;<a href='#'>act-pre-viv-001</a></li>");

                //$("#TableData").append("<tr><td>" + results.rows.item(i).id + "</td><td>" + results.rows.item(i).title + "</td><td>" + results.rows.item(i).desc + "</td></tr>");
            }
        }, function(tx, error)
        {
            alert('Error occurred');
        });
    });


});
