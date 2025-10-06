// src/app/layout.tsx
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div className="layout">
          <Navbar />
          <div className="main-content">
            <Sidebar />
            <main className="main">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
