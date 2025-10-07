// src/components/CV.tsx
'use client';

import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const CV = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    if (!cvRef.current) return;

    html2canvas(cvRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('JoaquinZuin_CV.pdf');
    });
  };

  return (
    <section className="cv-section">
      <div className="cv-container" ref={cvRef}>
        {/* Encabezado */}
        <header className="cv-header">
          <h1 className="cv-name">Joaquín Sebastián Zuin</h1>
          <p className="cv-contact">
            📱 +54 261 6486504 | 📧 joaquinzuin16@gmail.com<br />
            📍 Mendoza, Maipú, Argentina
          </p>
        </header>

        {/* Perfil profesional */}
        <section className="cv-section-block">
          <h2 className="cv-section-title">Perfil Profesional</h2>
          <p>
            Técnico Superior en Análisis y Programación de Sistemas con experiencia práctica en el desarrollo de soluciones para entornos eCommerce, gestión de infraestructura en la nube, análisis de datos y automatización de procesos. Cuento con conocimientos intermedios en SQL, Node.js, MongoDB, React, Next.js y TypeScript, así como conocimientos básicos en Java, C#, PHP y Python. He desarrollado scripts personalizados en JavaScript para la automatización de tareas repetitivas, mejorando la eficiencia operativa. Además, tengo experiencia en el análisis de datos y manejo de bases de datos relacionales y no relacionales. Nivel de inglés intermedio.
          </p>
        </section>

        {/* Habilidades */}
        <section className="cv-section-block">
          <h2 className="cv-section-title">Habilidades Clave</h2>
          <div className="skills-grid">
            <div>
              <h3>Programación FrontEnd</h3>
              <ul>
                <li>HTML, CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Redux</li>
                <li>Zustand</li>
              </ul>
            </div>
            <div>
              <h3>Programación Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>JsonWebToken</li>
                <li>Cookie-Parser</li>
                <li>Bcrypt</li>
              </ul>
            </div>
            <div>
              <h3>Motores de Base de Datos</h3>
              <ul>
                <li>SQL Server</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experiencia profesional */}
        <section className="cv-section-block">
          <h2 className="cv-section-title">Experiencia Profesional</h2>

          <div className="experience-item">
            <h3>Net-Makers</h3>
            <p className="experience-role">Programador FrontEnd</p>
            <span className="experience-date">24 de abril 2024 - actualidad</span>
            <ul>
              <li>Desarrollo e implementación de funcionalidades clave en el FrontEnd...</li>
              <li>Diseño y programación lógica del formulario multipaso de registro...</li>
              <li>Gestión y administración de usuarios en diversas plataformas...</li>
              <li>Manejo de instancias de bases de datos...</li>
              <li>Colaboración en proyectos de integración entre FrontEnd y Backend...</li>
            </ul>
            <p className="experience-link">https://www.thenetmakers.com/</p>
          </div>

          <div className="experience-item">
            <h3>Business & Development</h3>
            <p className="experience-role">Desarrollador Full Stack</p>
            <span className="experience-date">1 de septiembre 2024 – 1 marzo 2025</span>
            <ul>
              <li>Implementé el módulo de administración de productos para una plataforma eCommerce...</li>
              <li>Desarrollé un formulario funcional para la carga y edición de imágenes...</li>
              <li>Automatización de tareas repetitivas...</li>
              <li>Trabajo directo con bases de datos relacionales...</li>
              <li>Colaboración en el desarrollo de APIs REST...</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Red de Salud Tecnología</h3>
            <p className="experience-role">Desarrollador FrontEnd y Analista de Sistemas</p>
            <span className="experience-date">11 de junio 2025 - actualidad</span>
            <ul>
              <li>Diseño y desarrollo de diagramas UML...</li>
              <li>Implementación de módulos clave en el FrontEnd...</li>
              <li>Desarrollo del módulo de gestión de productos...</li>
              <li>Creación de formularios funcionales para carga de imágenes...</li>
              <li>Automatización de tareas repetitivas...</li>
            </ul>
          </div>
        </section>

        {/* Educación */}
        <section className="cv-section-block">
          <h2 className="cv-section-title">Educación</h2>
          <ul>
            <li>
              <strong>Bachiller con Orientación en Educación Física y Ciencias Naturales</strong><br />
              Fundación Antonio Tomba — 2012 a 2016
            </li>
            <li>
              <strong>Técnico Superior en Análisis y Programación de Sistemas</strong><br />
              IES9-023 Maipú, Mendoza — 2018 a 2023
            </li>
            <li>
              <strong>Inglés Nivel A1</strong><br />
              Instituto YES
            </li>
          </ul>
        </section>

        {/* Cursos */}
        <section className="cv-section-block">
          <h2 className="cv-section-title">Cursos de Especialización</h2>
          <ul>
            <li>Desarrollo Web — Coderhouse (2021)</li>
            <li>JavaScript — Coderhouse (2021)</li>
            <li>React JS — Coderhouse (2022)</li>
            <li>Desarrollo Full Stack — Coderhouse (2022)</li>
            <li>Programación Backend — Coderhouse (2022)</li>
          </ul>
        </section>
      </div>

      {/* Botón de descarga */}
      <div className="cv-download">
        <button onClick={handleDownloadPDF} className="btn-primary">
          📄 Descargar CV en PDF
        </button>
      </div>
    </section>
  );
};

export default CV;
