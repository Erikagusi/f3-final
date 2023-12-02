import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useReducer } from 'react';
import { reducer } from '../../Reducers/reducer';



const DentistState = createContext()

const initialState = {
    theme: '',
    dentistList: [],
    favs: JSON.parse(localStorage.getItem('favs')) || []
}

const Context = ({ children }) => {

    const ChangeDark = () => {
        dispatch({ type: "THEMEDARK" })
      }
    
      const ChangeLight = () => {
        dispatch({ type: "THEMELIGHT" })
      }

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state);

    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        axios(url)
            .then(response => dispatch({ type: 'GET_DENTIST', payload: response.data }))

    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])

    return (
        <DentistState.Provider value={{
            ChangeDark , ChangeLight ,
            state, dispatch,
        }}>
            {children}
        </DentistState.Provider>


    )
}

export default Context

export const useDentistState = () => useContext(DentistState)