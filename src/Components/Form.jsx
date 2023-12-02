import React from "react";
import Contact from "../Routes/Contact";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [cliente, setCliente] = useState({
    nombre: '',
    email: ''
  })

  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const handleSumbit = (e) => {
    e.preventDefault()
    if ((cliente.nombre.length >= 5) && (regex.test(cliente.email))) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  }

  return (
    <>
      <div >

        <form onSubmit={handleSumbit}>
          <input type="text" value={cliente.nombre} placeholder='Ingrese su Nombre' onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })} />
          <input type="text" value={cliente.email} placeholder='Ingrese su Email ' onChange={(e) => setCliente({ ...cliente, email: e.target.value })} />
          <br />
          <button> Enviar </button>
        </form>


        {show && <h3>Gracias {cliente.nombre} Te contactaremos lo mas pronto via email</h3>}
        {error && <h4 style={{ color: 'red' }}>Error, digita bien tu informacion</h4>}
      </div>
    </>
  )
}

export default Form
