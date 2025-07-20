let num1 = 0;
let num2 = 0;
const spanNum = document.getElementById('num');
function actualizar(){
    if (num2>9){
        spanNum.style.color = '#44BBA4';        
    }
    else{
        document.getElementById('num2').textContent = num2
        spanNum.style.color = '#000000';
    }
}
document.getElementById("Aumentar").addEventListener("click", function(){
    num2 += 1;
    actualizar();
})
document.getElementById("Disminuir").addEventListener("click", function(){    
        num2 -= 1;
        actualizar();
})
