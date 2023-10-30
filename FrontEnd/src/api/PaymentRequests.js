export const paymentGetRequest =  async(id) => {
    try {
        const response = await fetch(`http://localhost:4000/api/debts/${id}`, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            },
        });
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
        return data
    } catch (error) {
        console.log(error);
    }


    
};
export const paymentPutRequest =  async(mpOrder) => {
    try {
        const response = await fetch(`http://localhost:4000/api/debts`, {
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: mpOrder
        });
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
        }
        return data
    } catch (error) {
        console.log(error);
    }
};

export const MPCreateOrderRequest =  async(mpOrder) => {
    try {
        const response = await fetch('http://localhost:4000/mp/createOrder', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mpOrder)
        })
        if (response.status !== 200) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: response.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: response.message,
                showConfirmButton: false,
                timer: 1500
            });
            const data = await response.json();
            return data
        }

    } catch (error) {
        console.log(error);
        
    }
    
}