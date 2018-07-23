
function formatrestaurant(collection) {
    let restdetails = document.querySelector("#restdetails");

    var card = document.createElement('div');
    card.id = collection.R.res_id;
    card.title = collection.name;
    var cardimage = document.createElement('img');
    cardimage.id = "img";
    cardimage.className = 'card-img-top';
    cardimage.setAttribute('src', collection.featured_image);
    cardimage.setAttribute('alt', collection.name);
    card.appendChild(cardimage);
    var cardbody = document.createElement('div');
    cardbody.id = "cdbody";
    cardbody.className = 'card-body';
    cardbody.innerHTML = "<h2><strong>" + collection.name + "</strong></h2>";
    cardbody.innerHTML = cardbody.innerHTML + "<br><strong>Cuisines:</strong>" + collection.cuisines + "<br><strong>Location:</strong>" + collection.location.city;
    cardbody.title = collection.cuisines + ";" + collection.location.city;
    card.appendChild(cardbody);
    card.className = 'card mb-3';
    restdetails.appendChild(card);
}

module.exports={
formatrestaurant:formatrestaurant
}