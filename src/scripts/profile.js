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