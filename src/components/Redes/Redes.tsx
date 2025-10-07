
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
 
} from 'react-icons/fa';

const Redes = () => {
  const redes = [
    {
      nombre: 'Facebook',
      url: 'https://www.facebook.com/share/1LuLEr3iwc/',
      icon: <FaFacebook />,
    },
    {
      nombre: 'Instagram',
      url: 'https://www.instagram.com/joaquinzuin?igsh=NXkwZzUxODllY2Fi',
      icon: <FaInstagram />,
    },
    {
      nombre: 'LinkedIn',
      url: 'https://www.linkedin.com/in/joaquin-zuin-21710724a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: <FaLinkedin />,
    },
    {
      nombre: 'GitHub',
      url: 'https://github.com/joakozuin',
      icon: <FaGithub />,
    },

  ];

  return (
    <section className="redes-section">
      <h2 className="section-title">Conectemos</h2>
      <p className="redes-subtitle">
        Seguime en mis redes o escribime directamente.
      </p>
      <div className="redes-grid">
        {redes.map((red, index) => (
          <a
            key={index}
            href={red.url}
            target="_blank"
            rel="noopener noreferrer"
            className="redes-card"
            aria-label={red.nombre}
          >
            <div className="redes-icon">{red.icon}</div>
            <span className="redes-nombre">{red.nombre}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Redes;
