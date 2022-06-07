
let info


function pageSetup() {
    info = document.getElementById("info")
    info.innerText = "pageSetup() ran okay."
} // end of pageSetup

window.addEventListener("load", pageSetup)