function load(){
    var n1 = document.getElementById("n1");
    n1.innerText = Math.floor(Math.random()*10);
    n1.style.display = "none"
    var antes = document.getElementsByClassName("n1")[0]
    antes.style.display = "block"
    
};

function verificar(){
    var antes = document.getElementsByClassName("n1")[0]
    antes.style.display = "none"
    n1.style.display = "block"
    var num1 = document.getElementById("n1").innerHTML;
    var n2 = document.getElementById("n2").value;
    res = document.getElementById("res");
    if(num1 == n2){
        res.innerHTML = "Parabéns, você adivinhou!"
        res.style.background = "green"
    } else{
        res.innerHTML = "Não foi dessa vez, tente novamente!"
        res.style.background = "red"
    };
};

function recomecar(){
    document.location.reload(true);
    
};