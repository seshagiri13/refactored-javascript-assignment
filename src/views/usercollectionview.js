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
            var collid = e.target.id;
            var collname = e.target.title;
            window.location.href = "collectionitems.html?collid=" + collid + "&collname=" + collname;
            e.stopPropagation();
        });
    }
}

module.exports={
    formatusercollection:formatusercollection
}