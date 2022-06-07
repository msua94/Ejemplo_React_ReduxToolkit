import { useDispatch, useSelector } from 'react-redux';
import {ActualiceNombre, ActualiceCantidad } from "../features/productosReducer";


function MisProductos() {
  const productos = useSelector((state:any) => state.productos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Mis productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre producto</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
        {
          productos.map((producto:any,indice:number)=>{
            return <tr key={indice}>
              <td>
                <input type="text"
                       value={producto.nombre}
                       onChange={(event) => dispatch(ActualiceNombre({nombre:event.target.value, indice}))}></input>
                </td>
              <td>
                <input type="number"
                       value={producto.cantidad}
                       onChange={(event) => dispatch(ActualiceCantidad({cantidad:event.target.value, indice}))}></input>
              
              </td>
            </tr>
          })
        }
        </tbody>
      </table>
    </div>
  );
}

export default MisProductos;
