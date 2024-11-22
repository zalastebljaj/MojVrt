document.addEventListener("DOMContentLoaded", function () {

    var trznica = this.getElementById("trznica");

    if (trznica) {
        var asinhronaZahteva = new XMLHttpRequest();

        asinhronaZahteva.open("GET", "/api/trznica-seznam", true);
        asinhronaZahteva.addEventListener("load", function () {
            var jsonRezultati = JSON.parse(asinhronaZahteva.responseText);

            jsonRezultati.forEach((item, index) => {
                var seznamPonudb = document.getElementById("seznam");
                seznamPonudb.innerHTML +=
                    "<li>\n" + 
                    "<p>" + item.ime + (item.imam.length > 0 ? " ima za menjavo: " + item.imam: "") + (item.iscem.length > 0 ? " Išče " + item.iscem : "") + ".</p>\n" +
                    "</li>";
            })
        })
        asinhronaZahteva.send();
    }
})