var refresh_rate = 5; //<-- em segundos, troque para o que for necessario
var last_user_action = 0;
var has_focus = false;
var lost_focus_count = 0;
   
var focus_margin = 10; 


function reset() {
    last_user_action = 0;
    console.log("Reset");
}

function windowHasFocus() {
    has_focus = true;
}

function windowLostFocus() {
    has_focus = false;
    lost_focus_count++;
    console.log(lost_focus_count + " <~ Lost Focus");
}


setInterval(function () {
    last_user_action++;
    refreshCheck();
}, 1000);


function refreshCheck() {
    var focus = window.onfocus;
    if ((last_user_action >= refresh_rate && !has_focus && document.readyState == "complete") || lost_focus_count > focus_margin) {
        window.location.reload(); 
        reset(); 
    }

}
window.addEventListener("click", reset, false);
//window.addEventListener("mousemove", reset, false);
window.addEventListener("keypress", reset, false);
window.addEventListener("scroll", reset, false);
document.addEventListener("touchMove", reset, false);
document.addEventListener("touchEnd", reset, false);

var timeDisplay = document.getElementById("time");

window.addEventListener("keypress",)


