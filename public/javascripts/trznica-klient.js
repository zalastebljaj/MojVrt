document.addEventListener("DOMContentLoaded", function () {

    var trznica = this.getElementById("trznica");

    if (trznica) {
        var asinhronaZahteva = new XMLHttpRequest();

        asinhronaZahteva.open("GET", "/trznica-seznam", true);
        asinhronaZahteva.addEventListener("load", function () {
            var jsonRezultati = JSON.parse(asinhronaZahteva.responseText);

            document.getElementById("naslov").innerText = jsonRezultati.naslov;
            document.getElementById("podnaslov").innerText = jsonRezultati.podnaslov;

            jsonRezultati.ponudbe.forEach((item, index) => {
                var seznamPonudb = document.getElementById("seznam");
                seznamPonudb.innerHTML +=
                    "<li>\n" + 
                    "<p>" + item.ime + (item.imam.length > 0 ? " ima za menjavo: " + item.imam: "") + (item.iscem.length > 0 ? " Išče " + item.iscem : "") + ".</p>" +
                    "</li>";
            })
        })
        asinhronaZahteva.send();
    }
})