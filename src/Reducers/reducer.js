export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DENTIST':
            return { ...state, dentistList: action.payload }
        case 'ADD_FAV':
            return { ...state, favs: [...state.favs, action.payload] }
        case 'THEMEDARK':
            return { ...state, theme: 'dark' }
        case 'THEMELIGHT':
            return { ...state, theme: 'light' }
        default:
            return state

    }
}