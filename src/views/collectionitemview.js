function formateachuserCollection(collection, collectioname) {
    let collname = document.querySelector("#collectioname");
    collname.innerHTML = collectioname;
    let mostpopular = document.querySelector("#collection-item");
    for (var coll in collection.restaurants) {
        var card = document.createElement('div');
        card.id = collection.restaurants[coll].id;
        var cardheader = document.createElement('div');
        cardheader.className = 'card-header';
        cardheader.innerHTML = '<strong>' + collection.restaurants[coll].Name + '</strong>';
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