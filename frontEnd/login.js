const form = document.getElementById('form');

const fechtData = async(usuario,password
    ) => {
    return await fetch('http://localhost:4000/auth/login',{
        method: 'POST',
        body: JSON.stringify({
            usuario,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const usuario = formData.get('usuario');
    const password = formData.get('password');
    try {
      const response= await fechtData(usuario,password)
      const data= await response.json();
      if(!response.ok){
            console.log(data);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }else{
            console.log(data);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    } catch (error) {
        console.log(error);
    }


});