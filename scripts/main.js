var pOswiecenia;
var info;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    navigator.splashscreen.hide();
    pOswiecenia = document.getElementById("przyciskOswiecenia");
    pOswiecenia.addEventListener("click", fOswiecenia);
    pRytmu = document.getElementById("przyciskRytmu");
    pRytmu.addEventListener("click", fRytmu);
}

function fOswiecenia() {
    if (window.navigator.simulator === true) {
        alert("Niewspierane w symulatorze");
    }
    else {
        window.plugins.flashlight.available(function(isAvailable) {
            if (isAvailable) {
                // toggle on/off
                if (pOswiecenia.textContent === "Przycisk oswiecenia ;)") {
                    pOswiecenia.textContent = "Przycisk wygaszenia ;)";
                }
                else {
                    pOswiecenia.textContent = "Przycisk oswiecenia ;)";
                } 
                window.plugins.flashlight.toggle(fSukcesOswiecenia, fBrakOswiecenia);
            }
            else {
                alert("To urz�dzenie nie mo�e Ci� o�wieci�");
            }
        });
    }
}

function fSukcesOswiecenia() {
    info = "Zosta�e� o�wiecony! :)";
    pokazKomunikat(info);
}
    
function fBrakOswiecenia() {
    info = "Mo�e nie zas�u�y�e� na o�wiecenie? ;)";
    pokazKomunikat(info);
}


function fRytmu() {
    if (window.navigator.simulator === true) {
        alert("Niewspierane w symulatorze");
    }
    else {
        window.plugins.navigator.vibrate.available(function(isAvailable) {
            if (isAvailable) {
                // toggle on/off
                if (pRytmu.textContent === "Poczuj rytm ;)") {
                    pRytmu.textContent = "Poczules rytm ;)";
                }
                else {
                    pOswiecenia.textContent = "Poczuj rytm ;)";
                } 
                window.plugins.navigator.vibrate([2000, 500, 1000, 500, 1000, 500, 2000, 1000, 2000, 500, 1000, 500, 1000, 500, 2000]);
                fSukcesRytmu();
                
            }
            else {
                alert("To urz�dzenie nie czuje rytmu");
            }
        });
    }
}

function fSukcesRytmu() {
    info = "Poczu�es rytm! :)";
    pokazKomunikat(info);
}
    





    
function pokazKomunikat(text) {
    var statusBox = document.getElementById('rezultat');
    statusBox.textContent = text;
}
