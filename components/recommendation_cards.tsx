import { CheckCircle2, Sparkles } from 'lucide-react'
import type { Tool, ToolLevel } from '@/lib/recommendation_logic'

const LEVEL_STYLES: Record<ToolLevel, string> = {
  Principiante: 'bg-accent/15 text-accent-foreground',
  Intermedio: 'bg-primary/10 text-primary',
  Avanzado: 'bg-secondary text-secondary-foreground',
}

export function RecommendationCards({
  tools,
  levelLabel,
  levelMessage,
}: {
  tools: Tool[]
  levelLabel: string
  levelMessage: string
}) {
  return (
    <div className="mt-8 rounded-3xl border border-primary/20 bg-secondary/40 p-5 md:p-8">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Sparkles className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">
            Nuestra recomendación digital
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            <span className="font-semibold text-primary">{levelLabel}.</span> {levelMessage}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <article
            key={tool.id}
            className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-2">
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${LEVEL_STYLES[tool.level]}`}
              >
                {tool.level}
              </span>
              {tool.free && (
                <span className="text-xs font-semibold text-accent-foreground">Gratis</span>
              )}
            </div>
            <h4 className="mt-3 font-display text-lg font-bold text-foreground">{tool.name}</h4>
            <p className="text-xs font-medium uppercase tracking-wide text-primary">
              {tool.category}
            </p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {tool.benefit}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground">
              <CheckCircle2 className="size-4 text-accent" aria-hidden="true" />
              Recomendada para tu negocio
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
