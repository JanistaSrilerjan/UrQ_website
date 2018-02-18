function select(){
    var selector = document.getElementById('op-cl-reserve');
    var value = selector.options[selector.selectedIndex].value;
    if(value=="1"){
        document.getElementById("reserve-time").style.display='none';
    }
    else{
        document.getElementById("reserve-time").style.display='block';
    }
}