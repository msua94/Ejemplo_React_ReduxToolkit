import { createSlice } from '@reduxjs/toolkit'
import { Producto } from '../../modelos'

var estadoInicial: Producto[] = [];

export const productosSlice = createSlice({
  name: 'productos',
  initialState: estadoInicial,
  reducers: {
    AgregueProducto: (state, action) => {
      state.push(action.payload)
    },
    ActualiceNombre:(state,action) => {
      state[action.payload.indice].nombre = action.payload.nombre;
    },
    ActualiceCantidad:(state,action) => {
      state[action.payload.indice].cantidad = action.payload.cantidad;
    }
  },
})

// Action creators are generated for each case reducer function
export const { AgregueProducto, ActualiceNombre, ActualiceCantidad } = productosSlice.actions

export default productosSlice.reducer