import { TrendingUp, BookOpen, Cog, Target, type LucideIcon } from 'lucide-react'

interface Result {
  label: string
  description: string
  icon: LucideIcon
}

const RESULTS: Result[] = [
  {
    label: 'Productividad empresarial',
    description: 'Optimiza tus tareas diarias y dedica más tiempo a hacer crecer tu negocio.',
    icon: TrendingUp,
  },
  {
    label: 'Conocimiento digital',
    description: 'Gana confianza usando herramientas tecnológicas de forma práctica.',
    icon: BookOpen,
  },
  {
    label: 'Automatización de procesos',
    description: 'Reduce el trabajo manual en ventas, inventario y atención al cliente.',
    icon: Cog,
  },
  {
    label: 'Nuevas oportunidades comerciales',
    description: 'Llega a más clientes y abre canales de venta en internet.',
    icon: Target,
  },
]

export function ResultsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Resultados esperados
          </p>
          <h2 className="mt-2 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Lo que tu negocio puede lograr
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">
                  <span className="text-accent-foreground">+ </span>
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
