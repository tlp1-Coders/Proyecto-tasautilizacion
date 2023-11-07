
export const getvehicleRequest = async (valor) => {
    const authorization = window.localStorage.getItem('token');
    if (!authorization) {
       return null
    }
    const response = await fetch('http://localhost:4000/api/vehicles', {
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
            timer: 2500
        });
        if (response.status === 401) {
            window.localStorage.removeItem('token');
        }
    }
    
        return (data.vehicle);
    
}

export const getvehicleNotUserRequest = async ({valor}) => {


    const response = await fetch('http://localhost:4000/api/vehicles/vehicleNotUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            valor
        })
    })
    const data = await response.json();
    if (response.status !== 200) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: data.message,
            showConfirmButton: true,
            timer: 2500
        });
    }
        return (data.vehicle);

    

}