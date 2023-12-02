import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDentistState } from '../Components/utils/DentistContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const DentistDetail = () => {
  const { state } = useDentistState()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState([])
  const { id } = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
    axios(url)
      .then(response => setDentist(response.data))
  }, [])


  return (
    <div className={state.theme}>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='tablaDatos'>
        <h2>Detalles del Dentista </h2>

        <table>
          <tbody>
            <tr>
              <td>Nombre</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Website</td>
            </tr>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DentistDetail