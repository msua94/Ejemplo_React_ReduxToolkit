import { configureStore } from '@reduxjs/toolkit'
import productosReducer from '../productos/features/productosReducer';
import productoNuevoReducer from '../productos/features/productoNuevoReducer';
import mensajesReducer from '../productos/features/mensajesReducer';

export default configureStore({
  reducer: {
    productos: productosReducer,
    productoNuevo: productoNuevoReducer,
    mensajes:mensajesReducer
  },
})