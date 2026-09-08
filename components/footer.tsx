import { Rocket, Mail, Phone, MapPin } from 'lucide-react'

const LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Diagnóstico Digital', href: '#diagnostico' },
  { label: 'Herramientas', href: '#herramientas' },
  { label: 'Capacitaciones', href: '#capacitaciones' },
]

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Rocket className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-extrabold text-foreground">
                MYPE Digital Perú
              </span>
            </div>
            <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Una solución para impulsar la innovación y competitividad de las pequeñas empresas
              peruanas.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-foreground">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-foreground">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                contacto@mypedigital.pe
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" aria-hidden="true" />
                (01) 555 1234
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                Lima, Perú
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© 2026 MYPE Digital Perú. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
