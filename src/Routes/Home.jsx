import React from 'react'
import Card from '../Components/Card'
import DentistList from '../Components/DentistList'
import { useDentistState } from '../Components/utils/DentistContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useDentistState()
  return (
    <main className={state.theme} >
      <h1>Home</h1>

      <div className='card-grid'>
        {state.dentistList.map(dentist => <Card key={dentist.id} dentist={dentist} />)}
        {/* Aqui deberias renderizar las cards a partir de un map*/}
      </div>
    </main>
  )
}

export default Home