import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoExistente = state.itens.find((p) => p.id === produto.id)

      if (produtoExistente) {
        alert('Item já adicionado ao carrinho')
      } else {
        state.itens.push(produto)
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      const produtoId = action.payload
      state.itens = state.itens.filter((produto) => produto.id !== produtoId)
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
