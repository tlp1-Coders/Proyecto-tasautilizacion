const formulario= document.getElementById('incioSesion');
const  cuenta=[
    {
        email:'augustochavesfiore@gmail.com',
        user:'augusto',
        password:'password'
    },
    {
        email:'garciafabianemmanuel@gmail.com',
        user:'fabian',
        password:'password'
    },
    {
        email:'canepamariajose95@gmail.com',
        user:'majo',
        password:'password'
    },
    

];

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