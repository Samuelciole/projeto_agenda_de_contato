const form = document.getElementById('forms')
const cont = []
const num = []
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    
    const campoContato = document.getElementById('contato')
    const campoTel = document.getElementById('tel')


    if (num.includes(campoTel.value)){
        alert('Esse nome já existe')

        campoTel.value = ''
        campoContato.value = ''
        
    }

    else if(cont.includes(campoContato.value)){
        alert('Esse número de contato já existe')
        
        campoContato.value = ''
        campoTel.value = ''
    }

    else{
        cont.push(campoContato.value)
        num.push(campoTel.value)
    
 

   
    
    let linha = '<tr>'
    linha += `<td> ${campoTel.value}</td>`
    linha += `<td> ${campoContato.value}</td>`
    linha += '</tr>'
    linhas += linha


    const campoPrincipal = document.querySelector('tbody')
    campoPrincipal.innerHTML = linhas

    campoContato.value = ''
    campoTel.value = ''
    }


})