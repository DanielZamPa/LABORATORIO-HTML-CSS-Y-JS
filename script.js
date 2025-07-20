let num = 0;
const spanNum = document.getElementById('num');
function actualizar(){
    document.getElementById('num').textContent = num
    if (num>=10){
        spanNum.style.color = '#44BBA4';
    }
    else{
        spanNum.style.color = '#000000';
    }
}
document.getElementById("Aumentar").addEventListener("click", function(){
    num += 1;
    actualizar();    
})
document.getElementById("Disminuir").addEventListener("click", function(){    
        num -= 1;
        actualizar();
})