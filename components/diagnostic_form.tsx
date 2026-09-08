'use client'

import { useMemo, useState } from 'react'
import { Store, Wrench, HelpCircle, ClipboardCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RecommendationCards } from '@/components/recommendation_cards'
import {
  getDigitalLevel,
  getRecommendations,
  type BusinessType,
  type CurrentTool,
  type DiagnosticAnswers,
  type MainDifficulty,
} from '@/lib/recommendation_logic'

const BUSINESS_OPTIONS: { value: BusinessType; label: string }[] = [
  { value: 'comercio', label: 'Comercio' },
  { value: 'restaurante', label: 'Restaurante' },
  { value: 'servicios', label: 'Servicios' },
  { value: 'produccion', label: 'Producción' },
  { value: 'otro', label: 'Otro' },
]

const TOOL_OPTIONS: { value: CurrentTool; label: string }[] = [
  { value: 'redes', label: 'Redes sociales' },
  { value: 'facturacion', label: 'Facturación electrónica' },
  { value: 'inventario', label: 'Sistemas de inventario' },
  { value: 'ninguna', label: 'Ninguna' },
]

const DIFFICULTY_OPTIONS: { value: MainDifficulty; label: string }[] = [
  { value: 'desconoce', label: 'No conozco herramientas digitales' },
  { value: 'costo', label: 'La tecnología es costosa' },
  { value: 'capacitacion', label: 'No tengo capacitación' },
  { value: 'soporte', label: 'No tengo apoyo técnico' },
]

function OptionGroup<T extends string>({
  legend,
  icon,
  options,
  selected,
  onSelect,
}: {
  legend: string
  icon: React.ReactNode
  options: { value: T; label: string }[]
  selected: T | null
  onSelect: (value: T) => void
}) {
  return (
    <fieldset>
      <legend className="mb-3 flex items-center gap-2 font-display text-base font-bold text-foreground">
        <span className="flex size-7 items-center justify-center rounded-lg bg-secondary text-primary">
          {icon}
        </span>
        {legend}
      </legend>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((opt) => {
          const active = selected === opt.value
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onSelect(opt.value)}
              aria-pressed={active}
              className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                active
                  ? 'border-primary bg-primary/5 text-foreground ring-2 ring-primary/30'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

export function DiagnosticForm() {
  const [answers, setAnswers] = useState<DiagnosticAnswers>({
    businessType: null,
    currentTool: null,
    difficulty: null,
  })
  const [submitted, setSubmitted] = useState(false)

  const complete = answers.businessType && answers.currentTool && answers.difficulty

  const result = useMemo(() => {
    if (!submitted) return null
    return {
      tools: getRecommendations(answers),
      level: getDigitalLevel(answers),
    }
  }, [submitted, answers])

  return (
    <section id="diagnostico" className="bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Conoce el nivel digital de tu negocio
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Responde 3 preguntas rápidas y recibe una recomendación personalizada de herramientas
            digitales adaptadas a tu realidad.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card p-5 shadow-sm md:p-8">
          <div className="grid gap-8">
            <OptionGroup
              legend="¿Qué tipo de negocio tienes?"
              icon={<Store className="size-4" />}
              options={BUSINESS_OPTIONS}
              selected={answers.businessType}
              onSelect={(v) => {
                setAnswers((a) => ({ ...a, businessType: v }))
                setSubmitted(false)
              }}
            />
            <OptionGroup
              legend="¿Qué herramientas digitales utilizas actualmente?"
              icon={<Wrench className="size-4" />}
              options={TOOL_OPTIONS}
              selected={answers.currentTool}
              onSelect={(v) => {
                setAnswers((a) => ({ ...a, currentTool: v }))
                setSubmitted(false)
              }}
            />
            <OptionGroup
              legend="¿Cuál es tu principal dificultad?"
              icon={<HelpCircle className="size-4" />}
              options={DIFFICULTY_OPTIONS}
              selected={answers.difficulty}
              onSelect={(v) => {
                setAnswers((a) => ({ ...a, difficulty: v }))
                setSubmitted(false)
              }}
            />
          </div>

          <div className="mt-8 flex flex-col items-center gap-2">
            <Button
              size="lg"
              className="h-12 w-full px-6 text-base sm:w-auto"
              disabled={!complete}
              onClick={() => setSubmitted(true)}
            >
              <ClipboardCheck className="size-4" aria-hidden="true" />
              Analizar mi negocio
            </Button>
            {!complete && (
              <p className="text-xs text-muted-foreground">
                Selecciona una opción en cada pregunta para continuar.
              </p>
            )}
          </div>

          {result && (
            <RecommendationCards
              tools={result.tools}
              levelLabel={result.level.label}
              levelMessage={result.level.message}
            />
          )}
        </div>
      </div>
    </section>
  )
}
