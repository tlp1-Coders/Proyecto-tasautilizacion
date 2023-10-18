import { getDebt, upDateDebt } from "../models/debts.model.js";

export const getDebtbyid= async (req,res)=>{
    try {
        const debt= await getDebt(req.params.id);
        if (!debt) {
            return res.status(404).json({
                message: 'Deuda no encontrada'
            });
        };
        return res.status(200).json({debt});
        
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'No se pudo obtener la deuda, error de servidor'
        });
    }
};

export const debtUpdate= async (req,res)=>{
    try {
        const debt= await getDebt(req.body.id);
        if (!debt) {
            return res.status(404).json({
                message: 'Deuda no encontrada'
            });
        }
        const {price,quantity }=req.body
        const debtState=()=>{
            if((debt.periodoDeuda-(quantity))===0){
                return false
            }
            return true
        }

        const newDebt={
            periodoDeuda: debt.periodoDeuda-(quantity),
            montoDeuda: debt.montoDeuda-quantity*price,
            estadoDeuda: debtState()

        }
        console.log(newDebt);

        const debtUp = await upDateDebt(req.body.id, newDebt);
        if (!debtUp) {
            return res.status(400).json({
                message: 'No se pudo actualizar la deuda'
            });
        };
        return res.status(200).json({debtUp});
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'No se pudo actualizar la deuda, error de servidor'
        });
        
    }
}
