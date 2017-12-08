// out clock numbers text
var out = document.getElementById("out");
// clock creating
function time_clock(){
    // get data
    var d = new Date();
    var h = d.getHours().toString();
    var m = d.getMinutes().toString();
    var s = d.getSeconds().toString();

    // add '0' in text
    if(h.length < 2){
        h = "0" + h;
    }
    if(m.length < 2){
        m = "0" + m;
    }
    if(s.length < 2){
        s = "0" + s;
    }

    // get full text
    var getFullData = h + ":" + m + ":" + s;

    // change text
    out.textContent = getFullData;
}
// start clock
time_clock();
setInterval(time_clock,1000);