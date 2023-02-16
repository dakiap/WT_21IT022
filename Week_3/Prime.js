function fun() {
    var i = limit;
    var j = limit2;
    limit = document.getElementById('limit').value;
    limit2 = document.getElementById('limit2').value;
    for (i = limit; i <= limit2; i++) {
        c = 0;
        for (j = 1; j <= i; j++) {
            if (i % j == 0) {
                c++;
            }
        }
        if (c == 2) {
            document.getElementById("result").insertAdjacentHTML('beforeend', i + '<br>');
        }
    }
}