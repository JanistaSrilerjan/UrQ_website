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
var i=0;
function call_q(){
    var inpObj = document.getElementById("cust_num");
    var q = document.getElementById("cust_num").value;
    if (!inpObj.checkValidity()) {
        document.getElementById("empty_q").innerHTML = "กรุณาระบุหมายเลขคิว";
    } else if(q < 1) {
        document.getElementById("empty_q").innerHTML = "ระบุหมายเลขคิวไม่ถูกต้อง";
    }
    else{
        document.getElementById("empty_num").style.display = 'none';
        
        var original = document.getElementById('show_call');      
        var j=0;
        if(i==0){
            document.getElementById("call_num").innerHTML = q.toString();
            document.getElementById("show_call").style.display = 'block';
            i++;
        }
        else{
            document.getElementById("call_num").innerHTML = q.toString();
            var clone = original.cloneNode(true); // "deep" clone
            clone.id = "duplicater" + ++j;
            original.parentNode.appendChild(clone);
        }
        console.log(i);
    }
}

function cancel(){
    document.getElementById("show_call").style.display = 'none';
    i = 0;
}
