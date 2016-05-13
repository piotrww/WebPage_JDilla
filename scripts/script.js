$(document).ready(function() {
  console.log("Document ready!");


//Parralax


function parralax() {
        var prlxLayer1 = document.getElementById('c1');
        prlxLayer1.style.top = -(window.pageYOffset*2)+'px';

        var prlxLayer2 = document.getElementById('c2');
        prlxLayer2.style.top = -(window.pageYOffset*2.5)+'px';

    }

    window.addEventListener("scroll", parralax, false);




});