
// vistas
exports.vistaPrincipal=(req,res)=>{
    res.render('index');
};
exports.vistaConsulta=(req,res)=>{
    res.render('consultas');
};
exports.vistaPagos=(req,res)=>{
    res.render('pagos');
};
exports.vistaLogin=(req,res)=>{
    res.render('login');
};
exports.vistaRegistro=(req,res)=>{
    res.render('registro');
};

