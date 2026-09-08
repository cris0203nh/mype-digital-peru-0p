import { Clock, GraduationCap, BarChart3, Share2, Cog, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Course {
  title: string
  description: string
  duration: string
  level: string
  icon: LucideIcon
}

const COURSES: Course[] = [
  {
    title: 'Primeros pasos en transformación digital',
    description: 'Aprende herramientas básicas para mejorar tu negocio desde cero.',
    duration: '4 semanas',
    level: 'Principiante',
    icon: GraduationCap,
  },
  {
    title: 'Marketing digital para MYPE',
    description: 'Atrae más clientes con estrategias de publicidad simples y de bajo costo.',
    duration: '5 semanas',
    level: 'Intermedio',
    icon: BarChart3,
  },
  {
    title: 'Gestión de redes sociales',
    description: 'Crea contenido y administra tus redes para vender más cada semana.',
    duration: '3 semanas',
    level: 'Principiante',
    icon: Share2,
  },
  {
    title: 'Automatización de procesos',
    description: 'Ahorra tiempo automatizando ventas, pedidos e inventario de tu negocio.',
    duration: '6 semanas',
    level: 'Avanzado',
    icon: Cog,
  },
]

export function TrainingCards() {
  return (
    <section id="capacitaciones" className="bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Capacitaciones
          </p>
          <h2 className="mt-2 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Aprende a tu ritmo con cursos prácticos
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Programas diseñados para empresarios sin experiencia técnica, con ejemplos reales de
            negocios peruanos.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course) => {
            const Icon = course.icon
            return (
              <article
                key={course.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold leading-snug text-foreground">
                  {course.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" aria-hidden="true" />
                    {course.duration}
                  </span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-secondary-foreground">
                    {course.level}
                  </span>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  Ver curso
                </Button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
