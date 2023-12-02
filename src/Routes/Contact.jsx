import React from 'react'
import Form from '../Components/Form'
import { useDentistState } from '../Components/utils/DentistContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { state } = useDentistState()

  return (
    <div className={state.theme}>
      <div className='contact'>
        <div className='saberMas'>
          <h2>Quieres saber mas?</h2>
          <h2>Envianos tus dudas y te contactaremos</h2>
        </div>
        <br />
        <br />
        <br />
        <div className='formC'>
          <Form />
        </div>
      </div>

    </div>
  )
}

export default Contact