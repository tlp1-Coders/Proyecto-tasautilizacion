export const loginRequest =  async(valor) => {
    const response = await fetch('http://localhost:4000/api/auth/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valor)
    })
    const data = await response.json();
    if (response.status !== 200) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: data.message,
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message,
            showConfirmButton: false,
            timer: 1500
        });
        window.localStorage.setItem('token', data.token);
        window.location.href = '/consultas';
    }
    
    // data.errors.map(e => console.log(e.msg));
}