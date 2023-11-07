// Sandoval, Matías Agustín - Informatorio Etapa 3

import React from 'react';
import { createRoot } from 'react-dom/client';
import peliculas from './MOVIES_DATA.json';
import './styles/styles.css';

function CardMovie() {
  return (
    <ul className="movie-list">
      {peliculas.map((p) => (
        <li className="movie-card" key={p.id}>
          <img
            src={p.poster}
            alt={`Poster de ${p.title}`}
            className="movie-poster"
          />
          <div className="movie-details">
            <h1>{p.title}</h1>
            <p class="top">
              Fecha de lanzamiento: {fecha(p.releaseDate)} <br />
              <br />
              Duración: {p.duration} | Madurez: {p.maturity}
              <br />
              <br />
              Géneros: {p.genres.join(', ')}
              <br />
            </p>
            <div class="rank">
              ⭐ {p.rating} | Metascore:{' '}
              <span className={metascoreColor(p.metascore)}>{p.metascore}</span>
            </div>

            <p>Director: {p.director}</p>
            <p>
              Actores principales:
              <a href="#"> {p.mainActors.join(', ')}</a>
            </p>
            <p id="resumen">{p.plot}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function fecha(fechalanzamiento) {
  let dia = fechalanzamiento[3] + fechalanzamiento[4];
  let mes = fechalanzamiento[0] + fechalanzamiento[1];
  let año =
    fechalanzamiento[6] +
    fechalanzamiento[7] +
    fechalanzamiento[8] +
    fechalanzamiento[9];
  return dia + '/' + mes + '/' + año;
}
function metascoreColor(metascore) {
  if (metascore >= 0 && metascore <= 49) {
    return 'red-text';
  } else if (metascore >= 50 && metascore <= 59) {
    return 'yellow-text';
  } else {
    return 'green-text';
  }
}

function App() {
  return <CardMovie></CardMovie>;
}

const container = document.querySelector('#app');
const root = createRoot(container);
root.render(<App />);
