import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistState } from "./utils/DentistContext";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Navbar = () => {

  const { state, ChangeDark, ChangeLight } = useDentistState()

  const chageTheme = () => {
    {
      if (state.theme == 'dark') {
        ChangeLight()
      } else {
        ChangeDark()
      }
    }
  }

  return (
    <nav className={state.theme}>

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <div className='imgNavr'>
        <img src="./public/images/iOdonto.jpg" alt="" width={200} />
      </div>

      <div className='linksHome'>
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/contact'><h4>Contacto</h4></Link>
        <Link to='/favs'><h4>Favoritos</h4></Link>
      </div>

      <div className='buttonNav'>
        <button className='buttonNav' onClick={chageTheme}> {state.theme ? '☀️' : '🌒'} </button>
      </div>
    </nav>
  )
}


export default Navbar