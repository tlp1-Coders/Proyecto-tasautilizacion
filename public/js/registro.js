const btnRegistro=document.getElementById('btn-registro');
const formulario=document.getElementById('formulario_registro');

formulario.addEventListener('submit',async(e)=>{
        e.preventDefault();

        const nombreApellido=document.getElementById('nombre').value,
        dni=document.getElementById('dni').value,
        email=document.getElementById('email').value,
        usuario=document.getElementById('usuario').value,
        password=document.getElementById('password').value,
        pin=document.getElementById('pin').value,
        foto=document.getElementById('foto').value;

        console.log(usuario);
        
        if ( nombreApellido === '' || dni === '' || email === '' || usuario === '' || password === '' || password.length>12 || password.length<8|| pin === ''|| pin.length!==4 ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Complete todos los campos correctamente',
            });
            return;
        };
       
        const response = await fetch('http://localhost:4000/api/usuario',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombreApellido,
                dni,
                email,
                usuario,
                password,
                pin,
                foto
            }),
        });
        
        const respToJson = await response.json();
        
        if(response.status !== 201 && response.status !== 200) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: respToJson.message,
            });
            return;
        }
    
        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: respToJson.message,
        });
    
        console.log(respToJson.message);
    
        formulario.reset();
    
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
    


    });

  