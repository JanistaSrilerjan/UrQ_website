function actionSubmit() {
    var inpObj = document.getElementById("cust_name");

    if (!inpObj.checkValidity()) {

        document.getElementById("empty_name").style.display = 'block';
    } else {

        document.getElementById("empty_name").style.display = 'none';
        document.getElementById('each_list').style.display = "block";

        var q = document.getElementById("num_q").innerText;
        var next_q = parseInt(q) + 1;
        document.getElementById("q_num").innerHTML = next_q.toString();

        var val = Math.floor(1000 + Math.random() * 9000);
        console.log(val);
        document.getElementById("rand_pin").innerHTML = val.toString();

        var name = document.getElementById("cust_name").value;
        document.getElementById('name_cust').innerHTML = name;
    }
}
function next() {

    var q = document.getElementById("num_q").innerText;

    var next_q = parseInt(q) + 1;

    document.getElementById("num_q").innerHTML = next_q.toString();
}
