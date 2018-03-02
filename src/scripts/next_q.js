function next() {

    var q = document.getElementById("num_q").innerText;

    var next_q = parseInt(q) + 1;

    document.getElementById("num_q").innerHTML = next_q.toString();
}