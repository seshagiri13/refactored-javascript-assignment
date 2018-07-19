//import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
var servicea  = require('./services');
import './css/home.css';
import './css/bootstrap.css';




window.onload = function(){
     servicea.getpopular;
      document.querySelector("#Search-results").style.display="none";
    document.getElementById("btnSearch").addEventListener("click",  function(e){
        document.querySelector("#Search-results").style.display="none";
        document.querySelector("#searchresults").innerHTML = "";
        e.preventDefault();
      let param=document.querySelector("#inprest").value;
      servicea.searchresults(param);

      // formatSearch(searchresult);
    });
}

