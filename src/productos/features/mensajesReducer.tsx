import { createSlice } from '@reduxjs/toolkit';

var estadoInicial = {
    mostrarMensaje : "none",
    mensaje: "",
};

export const mensajesSlice = createSlice({
  name: 'mensajes',
  initialState: estadoInicial,
  reducers: {
    SetMostrarMensaje: (state, action) => {
        state.mostrarMensaje = action.payload;
    },
    SetMensaje: (state, action) => {
        console.log(action)
        state.mensaje = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { SetMostrarMensaje, SetMensaje } = mensajesSlice.actions

export default mensajesSlice.reducer