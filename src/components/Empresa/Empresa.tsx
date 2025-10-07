
import React from 'react';

const Empresa = () => {
  const experiencias = [
    {
      id: 1,
      empresa: 'Net-Makers',
      pais: 'España',
      periodo: '24 de abril 2024 - actualidad',
      rol: 'Programador FrontEnd',
      descripcion:
        'Con experiencia en desarrollo e implementación de interfaces web responsivas y dinámicas. Con conocimientos sólidos en automatización de procesos, gestión de usuarios en múltiples plataformas y administración de bases de datos.',
      logros: [
        'Desarrollo e implementación de funcionalidades clave en el FrontEnd, incluyendo alta, baja y modificación del perfil de usuario.',
        'Diseño y programación lógica del formulario multipaso de registro para reclutadores y empresas, mejorando la experiencia del usuario y reduciendo errores en el ingreso de datos.',
        'Gestión y administración de usuarios en diversas plataformas, asegurando permisos y accesos correctos.',
        'Manejo de instancias de bases de datos, incluyendo respaldos, restauraciones y migraciones entre entornos.',
        'Colaboración en proyectos de integración entre FrontEnd y Backend para garantizar consistencia de datos y mejora continua en la experiencia del usuario.',
      ],
      url: 'https://thenetmakers.net/',
    },
    {
      id: 2,
      empresa: 'Business & Development',
      pais: 'Venezuela',
      periodo: '1 de septiembre 2024 – 1 marzo 2025',
      rol: 'Desarrollador Full Stack',
      descripcion:
        'Con experiencia en el desarrollo e implementación de interfaces web responsivas y dinámicas, así como en la gestión integral de productos para plataformas eCommerce. Con sólidos conocimientos en automatización de procesos, manejo de bases de datos y administración de sistemas.',
      logros: [
        'Implementé el módulo de administración de productos para una plataforma eCommerce, permitiendo el alta, baja y modificación de productos desde una interfaz intuitiva.',
        'Desarrollé un formulario funcional para la carga y edición de imágenes de producto utilizando la librería react-cropper, mejorando la experiencia de usuario y la calidad visual del catálogo.',
        'Automatización de tareas repetitivas dentro del flujo de gestión de productos, optimizando tiempos de operación y reduciendo errores humanos.',
        'Trabajo directo con bases de datos relacionales para garantizar la consistencia y seguridad de los datos durante las operaciones CRUD.',
        'Colaboración en el desarrollo de APIs REST para integrar la capa de FrontEnd con Backend.',
        'Participación activa en ciclos ágiles de desarrollo, incluyendo reuniones diarias, sprints y revisiones de código.',
      ],
      url: '',
    },
    {
      id: 3,
      empresa: 'Red de Salud Tecnología',
      pais: 'Argentina',
      periodo: '11 de junio de 2025 - actualidad',
      rol: 'Desarrollador FrontEnd y Analista de Sistemas',
      descripcion:
        'Con experiencia en el diseño e implementación de interfaces web responsivas y dinámicas, así como en la gestión integral de productos para plataformas eCommerce. Con sólidos conocimientos en automatización de procesos, manejo de bases de datos relacionales y administración de sistemas.',
      logros: [
        'Diseño y desarrollo de diagramas UML, incluyendo casos de uso y diagramas de clases, para modelar funcionalidades del sistema.',
        'Implementación de módulos clave en el FrontEnd, tales como alta, baja y modificación de perfiles de usuario (administrador, proveedor, agente de soporte).',
        'Desarrollo del módulo de gestión de productos para una plataforma eCommerce.',
        'Creación de formularios funcionales para carga y edición de imágenes de productos, utilizando react-cropper.',
        'Automatización de tareas repetitivas en el flujo de gestión de productos.',
        'Gestión directa de bases de datos relacionales, asegurando consistencia y seguridad durante operaciones CRUD.',
      ],
      url: '',
    },
  ];

  return (
    <section className="experiencia-section">
      <h2 className="section-title">Experiencia Profesional</h2>
      <div className="experiencia-container">
        {experiencias.map((exp) => (
          <div key={exp.id} className="experiencia-card">
            <div className="empresa-header">
              <div>
                <h3 className="empresa-nombre">{exp.empresa}</h3>
                <p className="empresa-pais">🌍 {exp.pais}</p>
              </div>
              {exp.periodo && <span className="empresa-periodo">{exp.periodo}</span>}
            </div>
            <p className="rol">{exp.rol}</p>
            <p className="descripcion">{exp.descripcion}</p>
            <h4 className="logros-title">Logros:</h4>
            <ul className="logros-list">
              {exp.logros.map((logro, i) => (
                <li key={i}>{logro}</li>
              ))}
            </ul>
            {exp.url && (
              <a
                href={exp.url.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="empresa-link"
              >
                Visitar sitio web
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Empresa;
