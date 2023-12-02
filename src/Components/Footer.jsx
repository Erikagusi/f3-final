import React from 'react'
import { useDentistState } from './utils/DentistContext'

const Footer = () => {
  const { state } = useDentistState()
  return (
    <footer className={state.theme}>

      <div className='powerBy'>
        <h6> Powered by </h6>
        <img className='imgFooter' src="./images/DH.png" alt='DH-logo' />
      </div>

      <div className='redes'>
        <img src="./images/ico-facebook.png" alt='DH-logo' width={20} />
        <img src="./images/ico-instagram.png" alt='DH-logo' width={20} />
        <img src="./images/ico-tiktok.png" alt='DH-logo' width={20} />
        <img src="./images/ico-whatsapp.png" alt='DH-logo' width={20} />
      </div>

    </footer>
  )
}

export default Footer
