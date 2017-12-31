function click_shabu_buffet(){
    var selector = document.getElementById('f_type');
    var value = selector.options[selector.selectedIndex].value;
    console.log(value);
    if(value=="2"||value=="3"){
        document.getElementById('num_s').innerHTML="จำนวนโต๊ะลูกค้า";
        document.getElementById('person').innerHTML="โต๊ะ";
    }
    else{
        document.getElementById('num_s').innerHTML="พนักงานฝ่ายทำอาหาร";
        document.getElementById('person').innerHTML="คน";
    }
}
function disable_select(){
    var selector = document.getElementById('q_type');
    var value = selector.options[selector.selectedIndex].value;
    if(value=="1"){
        document.getElementById("s_type").disabled = true;
    }
    else{
        document.getElementById("s_type").disabled = false;
    }
}