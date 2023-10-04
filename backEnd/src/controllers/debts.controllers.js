import { getDebt } from "../models/debts.model.js";

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
}