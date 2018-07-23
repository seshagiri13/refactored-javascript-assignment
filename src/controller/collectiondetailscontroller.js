import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
var servicea  = require('../service/services');
import '../css/collectiondetails.css';
import '../css/bootstrap.css';


window.onload = function(){
    let params = (new URL(document.location)).searchParams;
let param = params.get("collid");
let collectioname = params.get("collname");
servicea.getcoll(param,collectioname);
}