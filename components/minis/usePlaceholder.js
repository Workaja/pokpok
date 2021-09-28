import React from 'react';

export default () => {
  const initialState = "no-title"
  const [nextState, setNextState] = React.useState(null)
  const reducer = async (state, action) => {
    switch (action) {
      case 'tambah':
        const fetTambah = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const titleTambah = await fetTambah.json()
        return setNextState(titleTambah.title)
      case 'kurang':
        const fetKurang = await fetch('https://jsonplaceholder.typicode.com/posts/2')
        const titleKurang = await fetKurang.json()
        return setNextState(titleKurang.title)
      default: return state
    }
  }
  
  const [data,dispatch] = React.useReducer(reducer, initialState)

  return { data: nextState, dispatch }
}