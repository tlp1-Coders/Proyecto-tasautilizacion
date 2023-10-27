export const getUserInfoByToken=async(token)=>{
    
   try {
    const response = await fetch('http://localhost:4000/api/auth/user',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'authorization':token
        }     
    })
    if(response.status!==200){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: data.message,
            showConfirmButton: false,
            timer: 1500
        })
        
    }
    const data = await response.json();
    return data
    
   } catch (error) {
       console.log(error);
   }
}