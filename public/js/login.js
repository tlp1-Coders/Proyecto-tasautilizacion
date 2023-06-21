const formulario= document.getElementById('incioSesion');

const $form = document.querySelector('form');


formulario.addEventListener('click',()=>{
    
    let email=document.getElementById('email').value;
    let user=document.getElementById('user').value;
    let password=document.getElementById('password').value;
    const validacion=  cuenta.find(e=>email===e.email && user===e.user && password===e.password);     
    if(!validacion){
        alert("Cuenta incorrecta")
        return
    } 
    alert('dentro');
    $form.setAttribute('action','consulta.html')
        
})