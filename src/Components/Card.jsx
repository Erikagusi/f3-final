import React from "react";
import { Link } from "react-router-dom";
import { useDentistState } from "./utils/DentistContext";


const Card = ({ dentist }) => {

  const { state, dispatch } = useDentistState()
  const findFav = state.favs.find(fav => fav.id == dentist.id)

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    if (findFav) {
      alert('El Dentista ya habia sido agregado antes')
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentist })

    }
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <Link to={'/detail/' + dentist.id}>
        <img className="imgDoc" src='/images/doctor.jpg' alt="imgCardDoctor" />
        <div className="datosCard">
          <h3>{dentist.name}</h3>
          <h3>{dentist.username}</h3>
        </div>
      </Link>
      {/*<button onClick={addFav} className="favButton">Añadir a Favoritos</button>*/}
      <button onClick={addFav} className="favButton"> {findFav ? '❤️' : '⭐'} </button>

    </div>
  );
};

export default Card;
