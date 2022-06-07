import { useDispatch, useSelector } from 'react-redux';
import { Producto } from '../../modelos';
import {SetNombre, SetCantidad } from "../features/productoNuevoReducer";
import {SetMostrarMensaje, SetMensaje } from "../features/mensajesReducer";
import {AgregueProducto } from "../features/productosReducer";


function AgregarProducto() {
  const productoNuevo = useSelector((state:any) => state.productoNuevo);
  const mensajes = useSelector((state:any) => state.mensajes);
  const dispatch = useDispatch();

  const AgregueProductoNuevo = ()=>{
    console.log("AgregueProductoNuevo");
    if(productoNuevo.nombre ==""){
      dispatch(SetMensaje("El campo Producto es requerido"));
      dispatch(SetMostrarMensaje("block"));
      return;
    }
    if(productoNuevo.cantidad <= 0){
      dispatch(SetMensaje("El campo Cantidad debe ser mayor a cero"));
      dispatch(SetMostrarMensaje("block"));
      return;
    }
    let productoPorAgregar : Producto = new Producto();
    productoPorAgregar.nombre = productoNuevo.nombre;
    productoPorAgregar.cantidad = productoNuevo.cantidad;
    dispatch(AgregueProducto(productoPorAgregar));
  }

  return (
    <div>
      <h2>Agregar producto</h2>
      <div>
        <input type="text"
               placeholder='Producto'
               value={productoNuevo.nombre}
               onChange={(event) => dispatch(SetNombre(event.target.value))}></input>
      </div>
      <div>
        <label>Cantidad: </label>
        <input type="number"
               value={productoNuevo.cantidad}
               onChange={(event) => dispatch(SetCantidad(event.target.value))}></input>
      </div>
      <div>
        <label style={{display : mensajes.mostrarMensaje, color : "red"}}>{mensajes.mensaje}</label>
        <button onClick={AgregueProductoNuevo}>Agregar</button>
      </div>
      
    </div>
  );
}

export default AgregarProducto;
