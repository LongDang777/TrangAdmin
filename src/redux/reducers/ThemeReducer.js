const stateDefault = {
    themeReducer: {
        mode:'light',
        color:'blue'
    }
}

export const ThemeReducer= (state = stateDefault, action) => {
      switch(action.type) {
          case 'SET_MODE':
              state.themeReducer = action.payload
              return {
                  ...state,
              }
          case 'SET_COLOR':
            state.themeReducer = action.payload

              return {
                  ...state,
              }
          default:
              return state
      }
    }


