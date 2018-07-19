
let userKey = '90a96745b76dadf7a7e66bf0c24b2ae8';

function saverestaurant(param) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost:3000/restaurants');
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(JSON.stringify(param));
    });
}

function getallusercollection() {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://localhost:3000/collections');
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(null);
    });
}


function savecollection(param) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost:3000/collections');
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(JSON.stringify(param));
    });
}

function updatecollection(param, id) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", 'http://localhost:3000/collections/' + id);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(JSON.stringify(param));
    });
}



function searchresults(param) {


    var xmlHttp = new XMLHttpRequest();
    var params = "entity_id=4&count=6&q=" + param;
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            formatSearch(JSON.parse(xmlHttp.responseText));

        }
    }
    xmlHttp.open("GET", 'https://developers.zomato.com/api/v2.1/search?' + params, true);
    //  xmlHttp.setRequestHeader("Access-Control-Allow-Origin","*"); 
    xmlHttp.setRequestHeader("user-key", userKey);
    xmlHttp.send(null);

    /*var params = "entity_id=4&count=6&q=" + param;
    jQuery.ajax({
        type: "GET",
        url: 'https://developers.zomato.com/api/v2.1/search?' + params,
        cache: false,
        success: function(data){
            formatSearch(data);
        }
      });*/

}

function geteachusercollection(param) {

    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://localhost:3000/collections/' + param);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(null);
    });

}

function getcollectiondeatils(param, collectioname) {


    var xmlHttp = new XMLHttpRequest();
    var params = param;
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            formateachuserCollection(JSON.parse(xmlHttp.responseText), collectioname);

        }
    }
    xmlHttp.open("GET", 'http://localhost:3000/collections/' + params, true);
    //  xmlHttp.setRequestHeader("Access-Control-Allow-Origin","*"); 
    xmlHttp.send(null);



}



function getcollectiondetails(param, collectioname) {


    var xmlHttp = new XMLHttpRequest();
    var params = "entity_id=4&count=12&collection_id=" + param;
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            formatCollection(JSON.parse(xmlHttp.responseText), collectioname);

        }
    }
    xmlHttp.open("GET", 'https://developers.zomato.com/api/v2.1/search?' + params, true);
    //  xmlHttp.setRequestHeader("Access-Control-Allow-Origin","*"); 
    xmlHttp.setRequestHeader("user-key", userKey);
    xmlHttp.send(null);



}

function getrestaurantdetails(param) {


    var xmlHttp = new XMLHttpRequest();
    var params = "res_id=" + param;
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            formatrestaurant(JSON.parse(xmlHttp.responseText));

        }
    }
    xmlHttp.open("GET", 'https://developers.zomato.com/api/v2.1/restaurant?' + params, true);
    //  xmlHttp.setRequestHeader("Access-Control-Allow-Origin","*"); 
    xmlHttp.setRequestHeader("user-key", userKey);
    xmlHttp.send(null);

    /*var params = "entity_id=4&count=6&q=" + param;
    jQuery.ajax({
        type: "GET",
        url: 'https://developers.zomato.com/api/v2.1/search?' + params,
        cache: false,
        success: function(data){
            formatSearch(data);
        }
      });*/

}




function getmostpoularcollections() {

    var xmlHttp = new XMLHttpRequest();
    var params = "city_id=4&count=12";
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            formatMostpoular(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", 'https://developers.zomato.com/api/v2.1/collections?' + params, true);
    //  xmlHttp.setRequestHeader("Access-Control-Allow-Origin","*"); 
    xmlHttp.setRequestHeader("user-key", userKey);
    xmlHttp.send(null);

}

function getusercollections() {

    var xmlHttp = new XMLHttpRequest();
    //var params = "city_id=4&count=12";
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            formatusercollection(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", 'http://localhost:3000/collections', true);
    // xmlHttp.open("GET","./collection.json", true);
    //  xmlHttp.setRequestHeader("Access-Control-Allow-Origin","*"); 
    xmlHttp.setRequestHeader("user-key", userKey);
    xmlHttp.send(null);
    /* var xmlHttp = new XMLHttpRequest();
     //var params = "city_id=4&count=12";
     xmlHttp.onreadystatechange = function () {
         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
         formatusercollection(JSON.parse(xmlHttp.responseText));
     }
     xmlHttp.open("GET", 'http://localhost:3000/restaurants', true);
    // xmlHttp.open("GET","./collection.json", true);
     //  xmlHttp.setRequestHeader("Access-Control-Allow-Origin","*"); 
     xmlHttp.setRequestHeader("user-key", userKey);
     xmlHttp.send(null);*/

}

function deleteCollection(param) {

    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", 'http://localhost:3000/collections/' + param);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(null);
    });
}


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


function formatCollection(collection, collectioname) {
    let collname = document.querySelector("#collectioname");
    collname.innerHTML = collectioname;
    let mostpopular = document.querySelector("#Most-popular");
    for (var coll in collection.restaurants) {
        var card = document.createElement('div');
        card.id = collection.restaurants[coll].restaurant.R.res_id;
        var cardheader = document.createElement('div');
        cardheader.className = 'card-header';
        cardheader.innerHTML = '<strong>' + collection.restaurants[coll].restaurant.name + '</strong>';
        card.appendChild(cardheader);
        cardheader.addEventListener("onclick", function click(e) {
            var resid = e.target.parentElement.id;
            window.location.href = "restaurantdetails.html?resid=" + resid;
            e.stopPropagation();
        });

        var cardimage = document.createElement('img');

        cardimage.className = 'card-img-top';
        cardimage.setAttribute('src', collection.restaurants[coll].restaurant.featured_image);
        cardimage.setAttribute('alt', collection.restaurants[coll].restaurant.name);
        card.appendChild(cardimage);
        cardimage.addEventListener("click", function click(e) {
            var resid = e.target.parentElement.id;
            window.location.href = "restaurantdetails.html?resid=" + resid;
            e.stopPropagation();
        });

        var cardbody = document.createElement('div');

        cardbody.className = 'card-body';
        cardbody.innerHTML = collection.restaurants[coll].restaurant.cuisines + "<br>" + collection.restaurants[coll].restaurant.location.city;
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


function formatMostpoular(collection) {
    let mostpopular = document.querySelector("#mostpopular");
    for (var coll in collection.collections) {

        var card = document.createElement('div');
        card.id = collection.collections[coll].collection.collection_id;
        card.title = collection.collections[coll].collection.title;
        var cardheader = document.createElement('div');
        cardheader.className = 'card-header';
        cardheader.innerHTML = '<strong>' + collection.collections[coll].collection.title + '</strong>';
        card.appendChild(cardheader);
        cardheader.addEventListener("click", function click(e) {
            var collid = e.target.parentElement.id;
            var collname = e.target.parentElement.title;
            window.location.href = "collectiondetails.html?collid=" + collid + "&collname=" + collname;
            e.stopPropagation();
        });
        var cardimage = document.createElement('img');

        cardimage.className = 'card-img-top';
        cardimage.setAttribute('src', collection.collections[coll].collection.image_url);
        cardimage.setAttribute('alt', collection.collections[coll].collection.title);
        card.appendChild(cardimage);
        cardimage.addEventListener("click", function click(e) {
            var collid = e.target.parentElement.id;
            var collname = e.target.parentElement.title;
            window.location.href = "collectiondetails.html?collid=" + collid + "&collname=" + collname;
            e.stopPropagation();
        });

        var cardbody = document.createElement('div');

        cardbody.className = 'card-body';
        cardbody.innerHTML = collection.collections[coll].collection.description;
        card.appendChild(cardbody);
        cardbody.addEventListener("click", function click(e) {
            var collid = e.target.parentElement.id;
            var collname = e.target.parentElement.title;
            window.location.href = "collectiondetails.html?collid=" + collid + "&collname=" + collname;
            e.stopPropagation();
        });
        card.className = 'card col-sm-3 text-white bg-dark most-pop';
        mostpopular.appendChild(card);
        card.addEventListener("click", function click(e) {
            var collid = e.target.id
            var collname = e.target.title;
            window.location.href = "collectiondetails.html?collid=" + collid + "&collname=" + collname;
        });
    }
}

function formatSearch(collection) {
    let seacrhpopular = document.querySelector("#searchresults");
    for (var coll in collection.restaurants) {
        document.querySelector("#Search-results").style.display = "block";
        var card = document.createElement('div');
        card.id = collection.restaurants[coll].restaurant.R.res_id;
        var cardheader = document.createElement('div');
        cardheader.className = 'card-header';
        cardheader.innerHTML = '<strong>' + collection.restaurants[coll].restaurant.name + '</strong>';
        card.appendChild(cardheader);
        cardheader.addEventListener("click", function click(e) {
            var resid = e.target.parentElement.id;
            window.location.href = "restaurantdetails.html?resid=" + resid;
            e.stopPropagation();
        });

        var cardimage = document.createElement('img');

        cardimage.className = 'card-img-top';
        cardimage.setAttribute('src', collection.restaurants[coll].restaurant.featured_image);
        cardimage.setAttribute('alt', collection.restaurants[coll].restaurant.name);
        card.appendChild(cardimage);
        cardimage.addEventListener("click", function click(e) {
            var resid = e.target.parentElement.id;
            window.location.href = "restaurantdetails.html?resid=" + resid;
            e.stopPropagation();
        });

        var cardbody = document.createElement('div');

        cardbody.className = 'card-body';
        cardbody.innerHTML = collection.restaurants[coll].restaurant.cuisines + "<br>" + collection.restaurants[coll].restaurant.location.city;
        card.appendChild(cardbody);
        cardbody.addEventListener("click", function click(e) {
            var resid = e.target.parentElement.id
            window.location.href = "restaurantdetails.html?resid=" + resid;
            e.stopPropagation();
        });
        card.className = 'card col-sm-3 text-white bg-dark most-pop';
        seacrhpopular.appendChild(card);
        card.addEventListener("click", function click(e) {
            var resid = e.target.id
            window.location.href = "restaurantdetails.html?resid=" + resid;
        });
    }
}

function formatusercollection(collection) {
    let seacrhpopular = document.querySelector("#usercollection");
    for (var coll in collection) {
        var card = document.createElement('div');
        card.id = collection[coll].id;
        card.title = collection[coll].name;
        card.draggable = true;
        card.style.position = "relative";
        var cardheader = document.createElement('div');
        cardheader.className = 'card-header';
        cardheader.innerHTML = '<strong>' + collection[coll].name + '</strong>';
        card.appendChild(cardheader);
        cardheader.addEventListener("dragstart", function drag(e) {
            e.dataTransfer.setData("divId", e.target.parentElement.id);
            e.stopPropagation();
        });
        cardheader.addEventListener("click", function click(e) {
            var collid = e.target.parentElement.id;
            var collname = e.target.parentElement.title;
            window.location.href = "collectionitems.html?collid=" + collid + "&collname=" + collname;
            e.stopPropagation();
        });
        var cardimage = document.createElement('img');

        cardimage.className = 'card-img-top';
        cardimage.setAttribute('src', "./images/collimage.jpg");
      /*  cardimage.setAttribute('alt', collection[coll].name);*/
        card.appendChild(cardimage);
        cardimage.addEventListener("dragstart", function drag(e) {
            e.dataTransfer.setData("divId", e.target.parentElement.id);
            e.stopPropagation();
        });
        cardimage.addEventListener("click", function click(e) {
            var collid = e.target.parentElement.id;
            var collname = e.target.parentElement.title;
            window.location.href = "collectionitems.html?collid=" + collid + "&collname=" + collname;
            e.stopPropagation();
        });

        var cardbody = document.createElement('div');

        cardbody.className = 'card-body';
        cardbody.innerHTML = collection[coll].Description;
        card.appendChild(cardbody);
        cardbody.addEventListener("dragstart", function drag(e) {
            e.dataTransfer.setData("divId", e.target.parentElement.id);
            e.stopPropagation();
        });
        cardbody.addEventListener("click", function click(e) {
            var collid = e.target.parentElement.id;
            var collname = e.target.parentElement.title;
            window.location.href = "collectionitems.html?collid=" + collid + "&collname=" + collname;
            e.stopPropagation();
        });
        card.className = 'card col-sm-3 text-white bg-dark most-pop';
        seacrhpopular.appendChild(card);
        card.addEventListener("dragstart", function drag(e) {
            e.dataTransfer.setData("divId", e.target.id);
        });
        card.addEventListener("click", function click(e) {
            var collid = e.target.parentElement.id;
            var collname = e.target.parentElement.title;
            window.location.href = "collectionitems.html?collid=" + collid + "&collname=" + collname;
            e.stopPropagation();
        });
    }
}

module.exports = {
    getpopular: getmostpoularcollections(),
    getcoll: getcollectiondetails,
    getrestaurantdetails: getrestaurantdetails,
    getallusercollection: getallusercollection,
    geteachusercollection: geteachusercollection,
    updatecollection: updatecollection,
    getusercollections: getusercollections,
    savecollection: savecollection,
    getcollectiondeatils: getcollectiondeatils,
    deleteCollection: deleteCollection,
    updatecollection: updatecollection,
    searchresults:searchresults
}