export const characterReducer = (state , action) => {
  switch (action.type) {
    case 'incrementCounter': {
      return state + 1
    }
    case 'decrementCounter': {
      return state - 1
    }
    default:
      throw new Error()
  }
}

