'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Overlay cuando el sidebar está abierto (móvil) */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <nav className="navbar">
        <div className="navbar-title">Joaquín Sebastián Zuin</div>

        {/* Botón hamburguesa solo en móvil */}
        <button
          className="hamburger"
          onClick={() => setSidebarOpen(true)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Sidebar móvil (deslizable) */}
      <aside
        className={`sidebar-mobile ${sidebarOpen ? 'sidebar-mobile-open' : ''}`}
      >
        <div className="sidebar-mobile-header">
          <h2 className="sidebar-title">Navegación</h2>
          <button
            className="close-btn"
            onClick={() => setSidebarOpen(false)}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            {[
                  { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '/proyectos' },
     { name: 'Redes', href: '/redes' },
     { name: 'Empresa', href: '/empresa' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'CV', href: '/cv' },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`sidebar-link ${
                    pathname === link.href ? 'sidebar-link-active' : ''
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}