var state= require('../state/state');
var servicea  = require('../service/services');

function formateachuserCollection(collection, collectioname) {
    let collname = document.querySelector("#collectioname");
    collname.innerHTML = collectioname;
    let mostpopular = document.querySelector("#collection-item");
    mostpopular.innerHTML="";
    for (var coll in collection.restaurants) {
        var card = document.createElement('div');
        card.id = collection.restaurants[coll].id;

    
        var cardheader = document.createElement('div');
        cardheader.className = 'card-header';
        cardheader.innerHTML = '<strong>' + collection.restaurants[coll].Name + '</strong>';
        var button= document.createElement('button');
        button.className="btn btn-primary";
        button.name="Delete";
        button.innerHTML="Delete";
        button.style.marginLeft="1rem";
        button.addEventListener("click", function click(e) {
            state.store.dispatch({type: 'DELETE', data:{id:e.target.parentElement.parentElement.id}});
            servicea.deleteRestaurant(state.store.getState().parsedata,state.store.getState().parsedata.id);
            e.stopPropagation();
        });
        cardheader.appendChild(button);
        card.appendChild(cardheader);
        cardheader.addEventListener("onclick", function click(e) {
            var resid = e.target.parentElement.id;
            window.location.href = "restaurantdetails.html?resid=" + resid;
            e.stopPropagation();
        });
       
        var cardimage = document.createElement('img');

        cardimage.className = 'card-img-top';
        cardimage.setAttribute('src', collection.restaurants[coll].Img_Url);
        cardimage.setAttribute('alt', collection.restaurants[coll].name);
        card.appendChild(cardimage);
        cardimage.addEventListener("click", function click(e) {
            var resid = e.target.parentElement.id;
            window.location.href = "restaurantdetails.html?resid=" + resid;
            e.stopPropagation();
        });

        var cardbody = document.createElement('div');

        cardbody.className = 'card-body';
        cardbody.innerHTML = collection.restaurants[coll].cuisines + "<br>" + collection.restaurants[coll].city;
      
        card.appendChild(cardbody);
      
        cardbody.addEventListener("onclick", function click(e) {
            var resid = e.target.parentElement.id
            window.location.href = "restaurantdetails.html?resid=" + resid;
            e.stopPropagation();
        });
        card.className = 'card col-sm-3 text-white bg-dark most-pop';
        mostpopular.appendChild(card);
        card.addEventListener("onclick", function click(e) {
            var resid = e.target.id
            window.location.href = "restaurantdetails.html?resid=" + resid;
        });
    }
}

module.exports={
    formateachuserCollection:formateachuserCollection
}