import {
  MessageCircle,
  Briefcase,
  Palette,
  FileText,
  Boxes,
  ShoppingCart,
  type LucideIcon,
} from 'lucide-react'
import { ALL_TOOLS, type ToolLevel } from '@/lib/recommendation_logic'

const ICONS: Record<string, LucideIcon> = {
  'whatsapp-business': MessageCircle,
  'google-workspace': Briefcase,
  canva: Palette,
  facturacion: FileText,
  inventario: Boxes,
  'ventas-online': ShoppingCart,
}

const LEVEL_STYLES: Record<ToolLevel, string> = {
  Principiante: 'bg-accent/15 text-accent-foreground',
  Intermedio: 'bg-primary/10 text-primary',
  Avanzado: 'bg-secondary text-secondary-foreground',
}

export function ToolsSection() {
  return (
    <section id="herramientas" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Herramientas digitales
          </p>
          <h2 className="mt-2 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Soluciones simples y económicas para tu negocio
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Explora las herramientas que recomendamos a las MYPE peruanas, ordenadas por nivel de
            dificultad para que empieces por lo más sencillo.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_TOOLS.map((tool) => {
            const Icon = ICONS[tool.id] ?? Briefcase
            return (
              <article
                key={tool.id}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${LEVEL_STYLES[tool.level]}`}
                  >
                    {tool.level}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{tool.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {tool.category}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {tool.benefit}
                </p>
                {tool.free && (
                  <span className="mt-4 w-fit rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                    Opción gratuita disponible
                  </span>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
