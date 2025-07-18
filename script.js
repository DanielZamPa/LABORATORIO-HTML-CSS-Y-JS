document.getElementById("Aumentar").addEventListener("click", function(){
    const span2 = document.getElementById('num2');
    if (span2<10){
        span2.textContent += 1;
        li.textContent = texto;
        document.getElementById("lista-tareas").appendChild(li)
        input.value = ""
    }
})
document.getElementById("Disminuir").addEventListener("click", function(){    
    if (texto){
        
        li.textContent = texto;
        document.getElementById("lista-tareas").appendChild(li)
        input.value = ""
    }
})