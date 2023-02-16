function r() {
    var dropdt = new Date(document.getElementById("ffd").value); var pickdt = new
        Date(document.getElementById("ssd").value); let r = parseInt((dropdt - pickdt) /(24 * 3600 * 1000)); document.getElementById("numdays2").value = r;
}
