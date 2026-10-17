import React from 'react'
import { Link } from 'react-router-dom'

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: 'Empresa',
    links: [
      { label: 'Inicio', href: '/' },
      { label: 'Sobre Nosotros', href: '/about' },
      { label: 'Servicios', href: '/services' },
    ],
  },
  {
    title: 'Servicios',
    links: [
      { label: 'Desarrollo Organizacional', href: '/services' },
      { label: 'Construcción de Equipos', href: '/services' },
      { label: 'Gestión del Cambio', href: '/services' },
    ],
  },
]

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-100">
      {/* Main Footer Content */}
      <div className="container-base max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-emerald-500">EvoPeople</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Consultoría profesional en desarrollo organizacional para equipos y empresas.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-500 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-500 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5M9 19s1.5-3 9-5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-500 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={`${section.title}-${index}`}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-emerald-500 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Contacto
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@evopeople.com"
                  className="text-slate-400 hover:text-emerald-500 transition-colors text-sm"
                >
                  info@evopeople.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-slate-400 hover:text-emerald-500 transition-colors text-sm"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-slate-400 text-sm">
                123 Business Street<br />
                Suite 100<br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700" />

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} EvoPeople OD Consulting. Todos los derechos reservados.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <Link to="/" className="text-sm text-slate-400 hover:text-emerald-500 transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/" className="text-sm text-slate-400 hover:text-emerald-500 transition-colors">
              Términos de Servicio
            </Link>
            <Link to="/" className="text-sm text-slate-400 hover:text-emerald-500 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
