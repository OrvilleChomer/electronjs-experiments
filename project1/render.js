/**
 *   file:  render.js
 * 
 *   Github Repo:   https://github.com/OrvilleChomer/electronjs-experiments/tree/main/project1
 * 
 */

let infoNd

function pageSetup() {
    infoNd = document.getElementById("info")
    infoNd.innerHTML = "Code in render.js ran okay."
} // end of pageSetup

window.addEventListener("load", pageSetup)