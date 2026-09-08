export type BusinessType = 'comercio' | 'restaurante' | 'servicios' | 'produccion' | 'otro'
export type CurrentTool = 'redes' | 'facturacion' | 'inventario' | 'ninguna'
export type MainDifficulty = 'desconoce' | 'costo' | 'capacitacion' | 'soporte'

export interface DiagnosticAnswers {
  businessType: BusinessType | null
  currentTool: CurrentTool | null
  difficulty: MainDifficulty | null
}

export type ToolLevel = 'Principiante' | 'Intermedio' | 'Avanzado'

export interface Tool {
  id: string
  name: string
  category: string
  benefit: string
  level: ToolLevel
  free: boolean
}

export const ALL_TOOLS: Tool[] = [
  {
    id: 'whatsapp-business',
    name: 'WhatsApp Business',
    category: 'Comunicación y ventas',
    benefit:
      'Atiende a tus clientes, muestra tu catálogo y recibe pedidos desde el celular que ya usas.',
    level: 'Principiante',
    free: true,
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    category: 'Productividad',
    benefit:
      'Correo profesional, documentos y hojas de cálculo para organizar la información de tu negocio.',
    level: 'Intermedio',
    free: false,
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'Marketing y diseño',
    benefit:
      'Crea publicaciones, flyers y logos atractivos para tus redes sociales sin ser diseñador.',
    level: 'Principiante',
    free: true,
  },
  {
    id: 'facturacion',
    name: 'Facturación electrónica',
    category: 'Gestión empresarial',
    benefit: 'Permite registrar ventas y organizar documentos digitales cumpliendo con la SUNAT.',
    level: 'Intermedio',
    free: false,
  },
  {
    id: 'inventario',
    name: 'Sistema de inventario',
    category: 'Gestión empresarial',
    benefit:
      'Controla tu stock, evita pérdidas y sabe qué productos se venden más en tiempo real.',
    level: 'Intermedio',
    free: false,
  },
  {
    id: 'ventas-online',
    name: 'Plataformas de ventas online',
    category: 'Comercio electrónico',
    benefit: 'Vende tus productos por internet y llega a más clientes fuera de tu localidad.',
    level: 'Avanzado',
    free: false,
  },
]

const findTool = (id: string) => ALL_TOOLS.find((t) => t.id === id) as Tool

/**
 * Devuelve una lista priorizada de herramientas según las respuestas del diagnóstico.
 * La lógica prioriza soluciones simples y económicas cuando la dificultad es el costo
 * o la falta de conocimiento, y agrega herramientas específicas por rubro de negocio.
 */
export function getRecommendations(answers: DiagnosticAnswers): Tool[] {
  const ids = new Set<string>()

  // Base según la dificultad principal
  switch (answers.difficulty) {
    case 'desconoce':
      ids.add('whatsapp-business')
      ids.add('canva')
      break
    case 'costo':
      ids.add('whatsapp-business')
      ids.add('canva')
      break
    case 'capacitacion':
      ids.add('whatsapp-business')
      ids.add('google-workspace')
      break
    case 'soporte':
      ids.add('google-workspace')
      ids.add('facturacion')
      break
    default:
      ids.add('whatsapp-business')
  }

  // Complementos según herramientas que ya usa
  if (answers.currentTool === 'ninguna') {
    ids.add('whatsapp-business')
    ids.add('canva')
  }
  if (answers.currentTool === 'redes') {
    ids.add('canva')
    ids.add('facturacion')
  }
  if (answers.currentTool === 'facturacion') {
    ids.add('inventario')
    ids.add('ventas-online')
  }
  if (answers.currentTool === 'inventario') {
    ids.add('ventas-online')
    ids.add('facturacion')
  }

  // Ajustes por tipo de negocio
  switch (answers.businessType) {
    case 'comercio':
      ids.add('inventario')
      ids.add('ventas-online')
      break
    case 'restaurante':
      ids.add('whatsapp-business')
      ids.add('canva')
      break
    case 'servicios':
      ids.add('google-workspace')
      ids.add('canva')
      break
    case 'produccion':
      ids.add('inventario')
      ids.add('facturacion')
      break
    default:
      break
  }

  return Array.from(ids)
    .map(findTool)
    .filter(Boolean)
    .slice(0, 4)
}

const LEVEL_LABEL: Record<MainDifficulty, string> = {
  desconoce: 'Inicial',
  costo: 'Inicial',
  capacitacion: 'En desarrollo',
  soporte: 'Intermedio',
}

export function getDigitalLevel(answers: DiagnosticAnswers): {
  label: string
  message: string
} {
  if (answers.currentTool === 'ninguna') {
    return {
      label: 'Nivel inicial',
      message:
        'Tu negocio está dando sus primeros pasos digitales. Comienza con herramientas gratuitas y fáciles de usar.',
    }
  }
  if (answers.currentTool === 'facturacion' || answers.currentTool === 'inventario') {
    return {
      label: 'Nivel intermedio',
      message:
        'Ya cuentas con procesos digitalizados. Es un buen momento para integrar ventas online y automatizar tareas.',
    }
  }
  return {
    label: `Nivel ${answers.difficulty ? LEVEL_LABEL[answers.difficulty] : 'inicial'}`,
    message:
      'Tienes una base digital que podemos potenciar con herramientas adaptadas a tu rubro y presupuesto.',
  }
}
