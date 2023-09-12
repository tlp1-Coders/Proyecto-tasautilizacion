const form = document.getElementById('form');
const getdata= async(nombreApellido,usuario,dni,email,password,pin)=>{
    try {
        const response = await fetch('http://localhost:4000/auth/new', {
            method: 'POST',
            body: JSON.stringify({
                nombreApellido,
                usuario,
                dni,
                email,
                password,
                pin
                
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            return response;
        };
    
        const data = await response.json();
        return data;
        
    } catch (error) {
        return error
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault(e);
    const formData= new FormData(e.target);
    const nombreApellido = formData.get('nombreApellido');
    const usuario = formData.get('usuario');
    const dni = formData.get('dni');
    const email = formData.get('email');
    const password = formData.get('password');
    const pin = formData.get('pin');
    const confirmPassword = formData.get('confirmPassword');
    const data = await getdata(nombreApellido,usuario,dni,email,password,pin)
    console.log(data);
    if (!data.ok){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: data.message,
            showConfirmButton: false,
            timer: 1500
        });
    }
    else{
        Swal.fire({
            icon: 'success',
            title: 'Exito',
            text: data.message,
            showConfirmButton: false,
            timer: 1500
        });
    }
});