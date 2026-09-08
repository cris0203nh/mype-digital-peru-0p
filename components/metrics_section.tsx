const METRICS = [
  { value: '2,840', label: 'MYPE registradas' },
  { value: '5,120', label: 'Diagnósticos realizados' },
  { value: '3,760', label: 'Usuarios capacitados' },
  { value: '8,900', label: 'Herramientas implementadas' },
  { value: '94%', label: 'Satisfacción del usuario' },
]

export function MetricsSection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Indicadores del impacto
          </h2>
          <p className="mt-3 text-pretty text-primary-foreground/80">
            Resultados que reflejan cómo la transformación digital cambia la realidad de las
            pequeñas empresas peruanas.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-5">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl bg-primary-foreground/10 p-5 text-center backdrop-blur-sm"
            >
              <dt className="sr-only">{metric.label}</dt>
              <dd className="font-display text-3xl font-extrabold md:text-4xl">{metric.value}</dd>
              <p className="mt-1 text-sm text-primary-foreground/80">{metric.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
