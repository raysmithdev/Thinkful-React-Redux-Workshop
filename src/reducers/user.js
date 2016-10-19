const initialState = {
  name: 'Ray',
  age: 25
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return Object.assign({}, state, {
        count: 20
      })
    default:
      return state
  }
}

export default user
