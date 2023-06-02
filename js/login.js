const formulario= document.getElementById('incioSesion');
const  cuenta={
    email:'augustochavesfiore@gmail.com',
    user:'augusto',
    password:'contraseniaprueba'

}

const $form = document.querySelector('form')


formulario.addEventListener('click',()=>{
    let email=document.getElementById('email').value;
    let user=document.getElementById('user').value;
    let password=document.getElementById('password').value;
    
    if(email===cuenta.email && user===cuenta.user && password===cuenta.password){
        alert('dentro');
        $form.setAttribute('action','consulta.html')
    }    
    else{
        alert("Cuenta incorrecta")

    }
})

console.log(email.value);
console.log(user.value);
console.log(password.value);
