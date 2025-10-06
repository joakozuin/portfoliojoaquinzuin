// src/components/ProjectsSection.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const Proyecto = () => {
  const [loading, setLoading] = useState(true);

  const projects = [
    {
      id: 1,
      title: 'Net-Makers',
      videoUrl: 'https://youtu.be/haLTdlVM7EA',
      frontend: 'Next.js, React, TypeScript, CSS',
      backend: 'Node.js, Express, CORS, JWT, Bcrypt, cookie-parser',
      database: 'MongoDB',
      liveUrl: 'https://www.thenetmakers.com/',
    },
    {
      id: 2,
      title: 'Star Wars API',
      videoUrl: 'https://youtu.be/hXJ0JxrilB0',
      frontend: 'Next.js, React, JavaScript, CSS',
      backend: 'Node.js, Express',
      database: 'MongoDB',
      liveUrl: 'https://people-start-wars-pd8xnmyzq-joakozuin.vercel.app/',
    },
    {
      id: 3,
      title: 'Ecommerce',
      videoUrl: 'https://youtu.be/IfFnni3lTHw',
      frontend: 'Next.js, React, JavaScript, CSS',
      backend: 'Node.js, Express, CORS, JWT, Bcrypt, cookie-parser',
      database: 'MongoDB',
      liveUrl: null,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Reducido a 1s para mejor UX
    return () => clearTimeout(timer);
  }, []);

  const handleDevClick = () => {
    Swal.fire({
      title: 'Lo siento, no se puede ver',
      text: 'Está en Desarrollo',
      icon: 'warning',
    });
  };

  const getYouTubeID = (url: string) => {
    const cleanUrl = url.trim();
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = cleanUrl.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {loading ? (
              <div className="video-loading">
                <div className="spinner"></div>
              </div>
            ) : (
              <>
                <h3 className="project-title">{project.title}</h3>
                <div className="video-container">
                  {getYouTubeID(project.videoUrl) ? (
                    <LiteYouTubeEmbed
                      id={getYouTubeID(project.videoUrl)}
                      title={project.title}
                      poster="hqdefault"
                      params="autoplay=1&mute=1" // opcional
                    />
                  ) : (
                    <p className="error-message">Video no disponible</p>
                  )}
                </div>
                <ul className="tech-list">
                  <li><strong>Frontend:</strong> {project.frontend}</li>
                  <li><strong>Backend:</strong> {project.backend}</li>
                  <li><strong>Base de Datos:</strong> {project.database}</li>
                </ul>
                <div className="project-button">
                  {project.liveUrl ? (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Ver en la web
                    </Link>
                  ) : (
                    <button onClick={handleDevClick} className="btn-primary">
                      Ver en la web
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyecto;
