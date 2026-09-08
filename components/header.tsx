'use client'

import { useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Diagnóstico Digital', href: '#diagnostico' },
  { label: 'Herramientas', href: '#herramientas' },
  { label: 'Capacitaciones', href: '#capacitaciones' },
  { label: 'Contacto', href: '#contacto' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Rocket className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-extrabold text-foreground">
              MYPE Digital Perú
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Impulsando la transformación digital de pequeños negocios
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button size="lg" render={<a href="#diagnostico" />}>
            Diagnóstico gratis
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Navegación móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-2" size="lg" render={<a href="#diagnostico" onClick={() => setOpen(false)} />}>
              Diagnóstico gratis
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
