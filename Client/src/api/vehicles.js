export const getvehicle = async (valor) => {
    const authorization = window.localStorage.getItem('token');
    console.log(valor);
    const response = await fetch('http://localhost:4000/vehicles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: authorization ?? ''
        },
        body: JSON.stringify({
            ...valor
        })
    })
    const data = await response.json();
    if (response.status !== 200) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: data.message,
            showConfirmButton: true,
            timer: 1500
        });
    }
    else {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message,
            showConfirmButton: false,
            timer: 500
        });
        return (data.vehicle);
    }
}