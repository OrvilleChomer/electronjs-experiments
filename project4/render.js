/**
 *   file:  render.js
 */

let infoNd

function pageSetup() {
    infoNd = document.getElementById("info")
    infoNd.innerHTML = "Code in render.js ran okay. <br>Environment: "+APP_ENVIRONMENT
} // end of pageSetup

window.addEventListener("load", pageSetup)