const formulario= document.getElementById('formLogin');



formulario.addEventListener('submit',async(e)=>{
        e.preventDefault();
    
    let usuario=document.getElementById('usuario').value;
    let password=document.getElementById('password').value;
    console.log(usuario);
    console.log(password);
    const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, password }),
    });
    if (!response.ok) {
        const { message } = await response.json();
        return Swal.fire('Error', message, 'error');
    }

    const { message} = await response.json();
    Swal.fire('Correcto', message, 'success');

    // Redireccionar a la vista de consultas
    setTimeout(() => {
        window.location.href = '/consultas';
    }, 2000);
});