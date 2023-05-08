const Producto = require("../models/Producto");

exports.crearProducto = async(req,res)=>{
    try {
        let producto;
        //crear
        producto=new Producto(req.body);
        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}

exports.obtenerProductos=async(req,res)=>{
    try {
        const productos=await Producto.find();
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}

exports.actualizarProducto=async(req,res)=>{
    try {
        const updatedProducto= await Producto.findByIdAndUpdate({_id:req.params.id},req.body,{
            new: true
        });
        if(updatedProducto){
            res.json(updatedProducto);
        }
        else{
            res.status(404).json({
                msg:"No encontrado",
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}

exports.obtenerProducto=async(req,res)=>{
    try {
        const productoObtenido= await Producto.findById(req.params.id);
        if(productoObtenido){
            res.json(productoObtenido);
        }
        else{
            res.status(404).json({
                msg:"No encontrado",
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}

exports.borrarProducto=async(req,res)=>{
    try {
        const deletedProduct= await Producto.findByIdAndDelete(req.params.id);
        if(deletedProduct){
            res.json(deletedProduct);
        }
        else{
            res.status(404).json({
                msg:"No encontrado",
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}