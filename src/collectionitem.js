import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
var servicea  = require('./services');
import './css/collectionitem.css';
import './css/bootstrap.css';


window.onload = function(){
    let params = (new URL(document.location)).searchParams;
var collid = params.get("collid");
let collname = params.get("collname");
document.getElementById("collid").title=collid;
servicea.getcollectiondeatils(collid,collname);
var details;
servicea.geteachusercollection(collid).then(function(data)
{
     details=JSON.parse(data);

});

document.getElementById("btnEdit").addEventListener("click",  function(e){
    e.preventDefault();
    let collid=e.target.parentElement.title;
  
    document.getElementById("txtname").value=details.name;
    document.getElementById("txtdesc").value=details.Description;
    var modal=document.getElementById("modal");
    modal.style.display="block";
 
});
document.getElementById("btnDelete").addEventListener("click",  function(e){
    let collid=e.target.parentElement.title;
    e.preventDefault();
    servicea.deleteCollection(collid).then(
        function()
        {
            window.location.href="usercollection.html";
        }
    )
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

   details.name=name;
   details.Description=desc;

   servicea.updatecollection(details,details.id).then(
       function () {
        window.location.href="usercollection.html";
       }
   )
});

}