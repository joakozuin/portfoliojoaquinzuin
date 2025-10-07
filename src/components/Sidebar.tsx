'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '/proyectos' },
     { name: 'Redes', href: '/redes' },
     { name: 'Empresa', href: '/empresa' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'CV', href: '/cv' },
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Navegación</h2>
      <nav className="sidebar-nav">
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`sidebar-link ${
                  pathname === link.href ? 'sidebar-link-active' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}