import Image from 'next/image'
import { ArrowRight, LayoutGrid, ShieldCheck, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 to-background" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary">
            <Zap className="size-3.5" aria-hidden="true" />
            Hecho para microempresarios peruanos
          </span>
          <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            Transforma tu MYPE con tecnología sencilla y accesible
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Ayudamos a pequeños empresarios peruanos a identificar sus necesidades digitales y
            encontrar herramientas para mejorar su productividad.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-5 text-base" render={<a href="#diagnostico" />}>
              Realizar diagnóstico digital
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-5 text-base"
              render={<a href="#herramientas" />}
            >
              Explorar herramientas
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
              100% gratuito
            </li>
            <li className="flex items-center gap-2">
              <LayoutGrid className="size-4 text-accent" aria-hidden="true" />
              Sin conocimientos técnicos
            </li>
            <li className="flex items-center gap-2">
              <Zap className="size-4 text-accent" aria-hidden="true" />
              Recomendaciones al instante
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5">
            <Image
              src="/hero-mype.png"
              alt="Microempresaria peruana usando una laptop y un celular para digitalizar su pequeño negocio"
              width={720}
              height={560}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:block">
            <p className="text-2xl font-extrabold text-primary">+2,800</p>
            <p className="text-xs text-muted-foreground">MYPE ya digitalizándose</p>
          </div>
        </div>
      </div>
    </section>
  )
}
