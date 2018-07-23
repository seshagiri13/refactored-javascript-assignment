import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
var servicea  = require('../service/services');
import '../css/usercollection.css';
import '../css/bootstrap.css';


window.onload = function(){
    servicea.getusercollections();
    document.getElementById("usercollection").addEventListener("drop",  function(e){
        e.preventDefault();
        var dropdivid = e.dataTransfer.getData("divId");
        e.target.appendChild(document.getElementById(dropdivid));

     
    });
    document.getElementById("usercollection").addEventListener("dragover",  function(e){
        e.preventDefault();
    });

    document.getElementById("btnAdd").addEventListener("click",  function(e){
        e.preventDefault();
        var modal=document.getElementById("modal");
        modal.style.display="block";
    });

    document.getElementById("close").addEventListener("click",  function(e){
        e.preventDefault();
        var modal=document.getElementById("modal");
        modal.style.display="block";
    });

    document.getElementById("close").addEventListener("click",  function(e){
        e.preventDefault();
        var modal=document.getElementById("modal");
        modal.style.display="none";
        document.getElementById("txtname").value="";
        document.getElementById("txtdesc").value="";
    });

    document.getElementById("closebtn").addEventListener("click",  function(e){
        e.preventDefault();
        var modal=document.getElementById("modal");
        modal.style.display="none";
        document.getElementById("txtname").value="";
        document.getElementById("txtdesc").value="";
    });

    document.getElementById("save").addEventListener("click",  function(e){
        e.preventDefault();
       let name= document.getElementById("txtname").value;
       let desc= document.getElementById("txtdesc").value;
       const coll=new collection(name,desc,[]);

       servicea.savecollection(coll).then(
           function () {
            window.location.href="usercollection.html";
           }
       )
    });
}

class collection 
{
    constructor (name, Description, restaurants) {
        this.name = name;
        this.Description = Description;
        this.restaurants = restaurants;
    }
}

