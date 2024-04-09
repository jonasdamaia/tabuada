function calcular(){
    var num = parseInt(document.querySelector('input#numero').value)
    var res = document.getElementById('res')
    if(isNaN(num)){
        alert('Você precisa informar um número válido!')
    }else{
        res.innerHTML = ''
        for(var i = 0; i <= 10; i++){
            var resultado = `${num} x ${i} = ${num * i} <br>`
            res.innerHTML += resultado
        }

    }
}