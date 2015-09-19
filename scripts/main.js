var pOswiecenia;
var info;

var l = 1000; // d³ugi sygna³ wibracji
var s = 500;  // krótki 
var n = 300;  // krótka przerwa miêdzy sygna³ami (pomiêdzy literami)
var p = 600;  // d³uga przewra miêdzy sygna³ami (pomiêdzy wyrazami)

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    navigator.splashscreen.hide();
    pOswiecenia = document.getElementById("przyciskOswiecenia");
    pOswiecenia.addEventListener("click", fOswiecenia);
}

function fOswiecenia() {
    if (window.navigator.simulator === true) {
        alert("Niewspierane w symulatorze");
    }
    else {
        window.plugins.flashlight.available(function(isAvailable) {
            if (isAvailable) {
                // toggle on/off
                if (pOswiecenia.textContent === "Zostan oswiecony ;)") {
                    pOswiecenia.textContent = "Nie potrzebuje oswiecenia ;)";
                }
                else {
                    pOswiecenia.textContent = "Zostan oswiecony ;)";
                } 
                window.plugins.flashlight.toggle(fSukcesOswiecenia, fBrakOswiecenia);
            }
            else {
                alert("To urzadzenie nie moze Cie oswiecic");
            }
        });
    }
}

function fSukcesOswiecenia() {
    info = "Zostales oswiecony! :)";
    pokazKomunikat(info);
}
    
function fBrakOswiecenia() {
    info = "Moze nie zasluzyles na oswiecenie? ;)";
    pokazKomunikat(info);
}


    
function fRytmu () {
    navigator.notification.vibrate([s,n,l,n,s,n,p,n,l,n,s,n,l,n,l,n,p,n,l,n,p,n,l,n,l,n]);  
}

function fCwierkania () {
        navigator.notification.beep(3);
}


    
function pokazKomunikat(text) {
    var statusBox = document.getElementById('rezultat');
    statusBox.textContent = text;
}
