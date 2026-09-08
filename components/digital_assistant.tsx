'use client'

import { useEffect, useRef, useState } from 'react'
import { Bot, Send, X, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Message {
  role: 'assistant' | 'user'
  text: string
}

const SUGGESTIONS = [
  'No sé qué tecnología necesita mi negocio',
  '¿Cuánto cuesta digitalizar mi MYPE?',
  '¿Por dónde empiezo?',
]

function getAnswer(question: string): string {
  const q = question.toLowerCase()
  if (q.includes('no sé') || q.includes('no se') || q.includes('qué tecnología') || q.includes('que tecnologia') || q.includes('necesita')) {
    return 'Primero realizaremos un diagnóstico para recomendar herramientas según tus necesidades. Ve a la sección "Diagnóstico Digital" y responde 3 preguntas rápidas.'
  }
  if (q.includes('cuesta') || q.includes('precio') || q.includes('costo') || q.includes('caro') || q.includes('gratis')) {
    return 'Muchas herramientas son gratuitas, como WhatsApp Business y Canva. Empezar tu transformación digital puede costar S/ 0. Te recomendamos comenzar con soluciones sin costo.'
  }
  if (q.includes('empiez') || q.includes('empez') || q.includes('inici') || q.includes('primero')) {
    return 'Te recomiendo empezar con el diagnóstico digital gratuito. Con tus respuestas te sugerimos las 3 o 4 herramientas más adecuadas para tu rubro.'
  }
  if (q.includes('capacita') || q.includes('curso') || q.includes('aprend')) {
    return 'Contamos con cursos prácticos para MYPE, desde "Primeros pasos en transformación digital" hasta "Automatización de procesos". Revisa la sección de Capacitaciones.'
  }
  if (q.includes('factura') || q.includes('sunat')) {
    return 'La facturación electrónica te permite registrar ventas y organizar documentos cumpliendo con la SUNAT. Es ideal si ya usas redes sociales y quieres formalizar tu gestión.'
  }
  if (q.includes('hola') || q.includes('buenas') || q.includes('buenos')) {
    return '¡Hola! Soy tu asistente digital. Cuéntame sobre tu negocio y te ayudo a encontrar las herramientas que necesitas.'
  }
  return 'Gracias por tu consulta. Para darte la mejor recomendación, realiza nuestro diagnóstico digital gratuito y así conoceremos las necesidades específicas de tu negocio.'
}

export function DigitalAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: '¡Hola! Soy Digital MYPE Assistant. Estoy aquí para resolver tus dudas sobre la transformación digital de tu negocio.',
    },
  ])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: trimmed },
      { role: 'assistant', text: getAnswer(trimmed) },
    ])
    setInput('')
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
        aria-label="Abrir asistente digital"
      >
        {open ? <X className="size-5" /> : <MessageSquare className="size-5" />}
        <span className="hidden sm:inline">{open ? 'Cerrar' : 'Asistente'}</span>
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 z-50 flex h-[30rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
          <div className="flex items-center gap-3 border-b border-border bg-primary px-4 py-3 text-primary-foreground">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary-foreground/15">
              <Bot className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-sm font-bold">Digital MYPE Assistant</p>
              <p className="text-xs text-primary-foreground/80">En línea · responde al instante</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <p
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-foreground'
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}

            {messages.length <= 1 && (
              <div className="space-y-2 pt-2">
                <p className="text-xs font-medium text-muted-foreground">Preguntas frecuentes:</p>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="block w-full rounded-xl border border-border bg-background px-3 py-2 text-left text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="h-10 flex-1 rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              aria-label="Mensaje para el asistente"
            />
            <Button type="submit" size="icon" className="size-10 shrink-0" aria-label="Enviar">
              <Send className="size-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  )
}
