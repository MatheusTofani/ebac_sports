import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
