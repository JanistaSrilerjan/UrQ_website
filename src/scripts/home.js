function next() {

    var q = document.getElementById("num_q").innerText;

    var next_q = parseInt(q) + 1;

    document.getElementById("num_q").innerHTML = next_q.toString();
}

function add_nameq(){

    document.getElementById('each_list').style.display = "block";

    var q =  document.getElementById("num_q").innerText;
    console.log(q);
    document.getElementById("q_num").innerHTML = q;

    var val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);
    document.getElementById("rand_pin").innerHTML = val.toString();
    
    var name = document.getElementById("cust_name").value;
    document.getElementById('name_cust').innerHTML=name;


}