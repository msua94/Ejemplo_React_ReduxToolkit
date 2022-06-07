import { useSelector } from 'react-redux';
import AgregarProducto from './agregarProductoComponent';
import MisProductos from './misProductosComponent';


function App() {
  const productos = useSelector((state:any) => state.productos);
  return (
    <div>
      <AgregarProducto></AgregarProducto>
      <br></br>
      <br></br>
      {productos.length > 0 ? <MisProductos></MisProductos> : <div>Aún no se han agregado productos.</div>}
    </div>
  );
}

export default App;
