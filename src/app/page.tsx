import Image from 'next/image';
import SkillSection from '@/components/Section';

export default function HomePage() {
  const frontend = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS'];
  const backend = ['Node.js', 'Express', 'NestJS', 'cookie-parser'];
  const databases = ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL Server'];

  return (
    <>
      {/* Tarjeta de presentación */}
      <div className="profile-card">
        <Image
          src="/imagenJSZ.jpg"
          alt="Joaquín Sebastián Zuin"
          width={150}
          height={150}
          className="profile-image"
        />
        <div className="profile-text">
          <h1>Soy Joaquín Sebastián Zuin</h1>
          <p>Analista de Sistemas y Programación Full Stack</p>
          <p className="experience">5 años de experiencia</p>
          <p className="graduation-note">Me recibí en el año 2023</p>
        </div>
      </div>

      {/* Objetivos laborales */}
      <h1 className="objectives-title">Objetivos laborales</h1>
      <div className="objectives-list">
        <ul>
          <li>Cuento con gran capacidad para resolver problemas.</li>
          <li>Me caracterizó por mi responsabilidad y búsqueda de alternativas de solución.</li>
          <li>Me destaco por mi capacidad para aprender y trabajar en equipo.</li>
          <li>Mi principal objetivo es desempeñarme en una empresa que valore la integración de jóvenes que inicien su actividad laboral ofreciendo posibilidad de progreso y crecimiento personal.</li>
        </ul>
      </div>

      {/* Habilidades */}
      <div className="skills-section">
        <SkillSection title="Frontend" skills={frontend} />
        <SkillSection title="Backend" skills={backend} />
        <SkillSection title="Base de Datos" skills={databases} />
      </div>
    </>
  );
}