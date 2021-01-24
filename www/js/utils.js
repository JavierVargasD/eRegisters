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