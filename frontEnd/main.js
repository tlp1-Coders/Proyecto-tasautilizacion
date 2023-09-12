// capturar form con data.target
const form = document.getElementById('form');

const getdata= async(valor)=>{
    try {
        const response = await fetch('http://localhost:4000/vehicles', {
            method: 'POST',
            body: JSON.stringify({valor}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            const error = await response.json();
            return error;
        };

        const data = await response.json();
        return data;
        
    } catch (error) {
        return error
        
    }
    
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData= new FormData(e.target);
    const valor = formData.get('patente');
    const data = await getdata(valor);
    console.log(data);
    const p=document.querySelector('#vehiculoLista');
    if(data.message){
        console.log(data.message);
        p.innerText=`${data.message}`;
    }
    else if(data.vehicle.debts.length==0){
        p.innerText=`
        Vehiculo con dominio: ${data.vehicle.dominio}, no posee deudas`;
    }else{
        const debts = data.vehicle.debts;
        p.innerHTML = '';
        p.innerHTML = ` Vehiculo con dominio: ${data.vehicle.dominio} posee deuda`; 
        
        debts.forEach(element => {  
            p.innerHTML += `
            <li>Monto: $${element.montoDeuda} Periodos: ${element.periodoDeuda}</li><br> `;
        });
    }
    });
   