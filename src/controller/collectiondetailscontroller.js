import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
var servicea  = require('../service/services');
var colldetailsview  = require('../views/collectiondetailsview');
import '../css/collectiondetails.css';
import '../css/bootstrap.css';


window.onload = ()=>{
    let params = (new URL(document.location)).searchParams;
let param = params.get("collid");
let collectioname = params.get("collname");
servicea.getcoll(param,collectioname).then((data)=>{
    colldetailsview.formatCollection(JSON.parse(data),collectioname);
});
}