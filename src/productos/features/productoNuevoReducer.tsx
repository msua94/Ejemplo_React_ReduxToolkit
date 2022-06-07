import { createSlice } from '@reduxjs/toolkit'
import { Producto } from '../../modelos'

var estadoInicial: Producto = new Producto();

export const productoNuevoSlice = createSlice({
  name: 'productoNuevo',
  initialState: estadoInicial,
  reducers: {
    SetNombre: (state, action) => {
        console.log(action);
        state.nombre = action.payload;
    },
    SetCantidad: (state, action) => {
        state.cantidad = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { SetNombre, SetCantidad } = productoNuevoSlice.actions

export default productoNuevoSlice.reducer