export const registerRequest =  async(valor) => {

   try {
    const response = await fetch('http://localhost:4000/api/auth/new', {
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
            text: response.message,
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
       return data
    }
    
   } catch (error) {
       console.log(error);
   }
    }