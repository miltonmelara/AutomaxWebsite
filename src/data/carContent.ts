// Comprehensive car content type for luxurious detail pages
export type QuickSpec = {
  value: string;
  label: string;
};

export type Feature = {
  icon: string;
  title: string;
  description: string;
  specs?: string[];
};

export type SpecificationGroup = {
  title: string;
  icon?: string;
  items: string[];
};

export type VariantInfo = {
  highlight?: string;
  price?: string;
};

export type VariantComparison = {
  feature: string;
  values: (string | boolean)[];
};

export type CarContent = {
  heroTitle?: string;
  tagline?: string;
  heroDescription: string;
  startingPrice?: string;
  gallery?: string[];
  quickSpecs?: QuickSpec[];
  features?: Feature[];
  specifications?: SpecificationGroup[];
  variants?: Record<string, VariantInfo>;
  variantComparison?: VariantComparison[];
  closingCTA?: string;
};

export const carContent: Record<string, CarContent> = {
  // ═══════════════════════════════════════════════════════════════
  // GWM TANK 300
  // ═══════════════════════════════════════════════════════════════
  'tank-300': {
    heroTitle: 'Tank 300',
    tagline: 'Domina Cualquier Terreno',
    heroDescription: 'El todoterreno que redefine la aventura. Con 217 caballos de fuerza, tracción 4x4 permanente y 8 modos de manejo, el Tank 300 está diseñado para quienes no conocen límites. Tecnología de punta, seguridad de clase mundial y un diseño que impone respeto.',
    gallery: [
      '/carImages/GWM copy/Tank 300/Imagen principal.png',
      '/carImages/GWM copy/Tank 300/Diseño llamativo.png',
      '/carImages/GWM copy/Tank 300/Tecnología que suma.png',
      '/carImages/GWM copy/Tank 300/Protección activa en todo momento.png',
      '/carImages/GWM copy/Tank 300/Pantallas que lo muestran todo con claridad.png',
      '/carImages/GWM copy/Tank 300/Visión completa para moverte con confianza.png',
      '/carImages/GWM copy/Tank 300/Manejarlo se siente distinto desde que sales del camino.png',
    ],
    quickSpecs: [
      { value: '217', label: 'HP de Potencia' },
      { value: '380', label: 'Nm de Torque' },
      { value: '4x4', label: 'Tracción Total' },
      { value: '8', label: 'Modos de Manejo' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Potencia Sin Compromisos',
        description: 'Motor 2.0L Turbo que entrega 217 HP y 380 Nm de torque. Respuesta inmediata en cualquier situación, desde el asfalto urbano hasta los caminos más desafiantes.',
        specs: [
          'Motor 2.0 CC Turbo Gasolina',
          'Transmisión automática ZF de 8 velocidades',
          'Sistema Start/Stop para eficiencia',
          'Emisiones estándar Euro V',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Seguridad de Clase Mundial',
        description: 'Sistema completo ADAS con 6 bolsas de aire, cámara 360° HD y tecnologías avanzadas que te protegen a ti y a los tuyos en cada aventura.',
        specs: [
          '6 bolsas de aire',
          'Cámara 360° HD',
          'Frenado automático de emergencia',
          'Monitoreo de puntos ciegos (BSM)',
          'Control de estabilidad ESP',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Tecnología Off-Road Avanzada',
        description: 'Conquista cualquier terreno con 8 modos de manejo especializados y bloqueo diferencial. Desde roca hasta barro, el Tank 300 se adapta automáticamente.',
        specs: [
          '8 modos: Off Road, Standard, Sport, ECO, Roca, Montaña, Barro, EXPERTO',
          'Bloqueo diferencial delantero y trasero',
          'Control de descenso en pendientes (HDC)',
          'Asistente de arranque en pendiente',
        ],
      },
      {
        icon: 'confort',
        title: 'Interior Premium',
        description: 'Cabina diseñada para el confort extremo. Asientos de cuero con ajuste eléctrico, climatización dual y acabados que elevan cada viaje.',
        specs: [
          'Tapicería de cuero premium',
          'Asientos delanteros eléctricos',
          'A/C automático dual-zone',
          'Iluminación ambiental adaptable',
          'Sunroof panorámico',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Conectividad Total',
        description: 'Pantalla multimedia de 12.3" con sistema de audio Infinity de 8 bocinas. Tu música, tus mapas, tus llamadas: todo integrado perfectamente.',
        specs: [
          'Pantalla multimedia 12.3"',
          'Panel de instrumentos digital 12.3"',
          'Apple CarPlay & Android Auto',
          'Audio Infinity 8 bocinas',
          'Cargador USB Tipo A y C',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Asistencias Inteligentes',
        description: 'Sistema ADAS completo que te asiste en cada maniobra. Desde el estacionamiento autónomo hasta el monitor anti-sueño.',
        specs: [
          'Control crucero adaptativo (ACC)',
          'Sensor de colisión frontal y peatones',
          'Sensor de mantenimiento de carril',
          'Asistente de parqueo automático',
          'Monitor anti-sueño',
        ],
      },
    ],
    specifications: [
      {
        title: 'Motor y Transmisión',
        icon: 'motor',
        items: [
          'Motor 2.0 CC Turbo Gasolina',
          'Potencia: 217 HP',
          'Torque: 380 Nm',
          'Transmisión automática ZF 8 velocidades',
          'Tracción 4x4 permanente',
          'Sistema Start/Stop',
          'Emisiones Euro V',
        ],
      },
      {
        title: 'Dimensiones',
        icon: 'exterior',
        items: [
          'Largo: 4,760 mm',
          'Ancho: 1,930 mm',
          'Alto: 1,903 mm',
          'Distancia entre ejes: 2,750 mm',
          'Aros de aleación 17"',
        ],
      },
      {
        title: 'Seguridad',
        icon: 'seguridad',
        items: [
          '6 bolsas de aire',
          'Frenos ABS con EBD',
          'Control de estabilidad (ESP)',
          'Control de tracción (TCS)',
          'Control de descenso (HDC)',
          'Frenado en detención (Autohold)',
          'Freno de mano eléctrico',
          'Cámara 360° HD',
          'Anclajes ISOFIX',
        ],
      },
      {
        title: 'Asistencias ADAS',
        icon: 'tecnología',
        items: [
          'Asistencia hidráulica de frenado (HBA)',
          'Asistente de giro pronunciado',
          'Monitoreo de neumáticos (TPMS)',
          'Monitoreo de puntos ciegos (BSM)',
          'Sensor de mantenimiento de carril',
          'Sensor de colisión frontal y peatones',
          'Bloqueo diferencial delantero y trasero',
          'Asistente de parqueo',
          'Monitor anti sueño',
        ],
      },
      {
        title: 'Interior y Confort',
        icon: 'interior',
        items: [
          'Llave inteligente / Smart kit',
          'Panel de instrumentos digital 12.3"',
          'A/C automático dual-zone',
          'Asientos delanteros eléctricos',
          'Tapicería de cuero',
          'Timón multifuncional con paddle shift',
          'Iluminación ambiental adaptable',
          'Sunroof',
        ],
      },
      {
        title: 'Entretenimiento',
        icon: 'tecnología',
        items: [
          'Pantalla multimedia 12.3"',
          'Apple CarPlay & Android Auto',
          'Sistema de audio Infinity 8 bocinas',
          'Entradas USB Tipo A y C',
          'Bluetooth',
          'Cargador 12V delantero y baúl',
        ],
      },
      {
        title: 'Suspensión',
        icon: 'exterior',
        items: [
          'Suspensión delantera de doble horquilla',
          'Suspensión trasera independiente Multilink',
          'Chasis tipo escalera',
        ],
      },
    ],
    variants: {
      'Ficha Técnica': {
        highlight: 'Versión única full equipo',
      },
    },
    closingCTA: 'El Tank 300 te espera. Agenda tu test drive y siente la potencia de un verdadero todoterreno con alma aventurera.',
  },

  // ═══════════════════════════════════════════════════════════════
  // GWM TANK 500
  // ═══════════════════════════════════════════════════════════════
  'tank-500': {
    heroTitle: 'Tank 500',
    tagline: 'Lujo, Potencia y Capacidad Sin Límites',
    heroDescription: 'La SUV híbrida que lo tiene todo: 342 HP de potencia combinada, capacidad para 7 pasajeros, y la tecnología más avanzada del mercado. El Tank 500 redefine lo que significa viajar con lujo y capacidad todoterreno.',
    gallery: [
      '/carImages/GWM copy/Tank 500/Imagen principal.png',
      '/carImages/GWM copy/Tank 500/Tecnología de alto nivel.png',
      '/carImages/GWM copy/Tank 500/Protección activa y pasiva para todos.png',
      '/carImages/GWM copy/Tank 500/Conectividad en todo momento.png',
      '/carImages/GWM copy/Tank 500/Cámaras 360° HD y visualización frontal.png',
      '/carImages/GWM copy/Tank 500/Capacidad para 7 pasajeros con acabados de lujo.png',
      '/carImages/GWM copy/Tank 500/Ambiente interior que acompaña.png',
      '/carImages/GWM copy/Tank 500/Comandos de voz y sistema de sonido premium.png',
      '/carImages/GWM copy/Tank 500/Visión completa del entorno.png',
      '/carImages/GWM copy/Tank 500/Tecnología que previene antes de reaccionar.png',
    ],
    quickSpecs: [
      { value: '342', label: 'HP Combinados' },
      { value: '648', label: 'Nm de Torque' },
      { value: '7', label: 'Pasajeros' },
      { value: '11', label: 'Modos de Manejo' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Potencia Híbrida Extraordinaria',
        description: 'Sistema híbrido auto-recargable que combina un motor 2.0L Turbo con motor eléctrico para entregar 342 HP y un torque brutal de 648 Nm. Capacidad de remolque de 3 toneladas.',
        specs: [
          'Motor 2.0 CC Turbocharger + Motor Eléctrico',
          'Potencia combinada: 342 HP',
          'Torque combinado: 648 Nm',
          'Transmisión híbrida ZF 9 velocidades',
          'Capacidad de remolque: 3 toneladas',
          'Tracción 4x4 inteligente AWD',
        ],
      },
      {
        icon: 'confort',
        title: 'Lujo en Cada Detalle',
        description: 'Interior de primera clase con asientos de cuero con masaje, climatización en asientos, techo panorámico y sistema de fragancias. 64 colores de iluminación ambiental para crear tu atmósfera perfecta.',
        specs: [
          'Asientos delanteros eléctricos con 8 memorias',
          'Soporte lumbar y función masaje',
          'A/C en asientos (calefacción y ventilación)',
          'Sistema de fragancias integrado',
          'Iluminación ambiental 64 colores',
          'Techo panorámico',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Seguridad de Nivel 2',
        description: 'Sistema ADAS Nivel 2 con las tecnologías más avanzadas del mercado. Conducción semi-autónoma, frenado de emergencia y alertas inteligentes que anticipan el peligro.',
        specs: [
          '6 bolsas de aire',
          'Frenado automático de emergencia',
          'Control crucero adaptativo',
          'Desbloqueo automático por colisión',
          'Corte de combustible por colisión',
          'Radar de señales de tránsito',
        ],
      },
      {
        icon: 'tecnología',
        title: '11 Modos de Manejo',
        description: 'Domina cualquier terreno con 11 modos especializados. Desde el modo ECO para ciudad hasta el modo EXPERTO para los conductores más exigentes.',
        specs: [
          'Off Road Inteligente',
          'Standard, Sport, ECO',
          'Roca, Arena, Lodo',
          '4H, 4L para máxima tracción',
          'Modo EXPERTO personalizable',
          'Bloqueo diferencial delantero y trasero',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Centro de Comando Digital',
        description: 'Pantalla multimedia de 14.6" con sistema de audio Infinity de 12 bocinas. Head-Up Display, comandos de voz y conectividad total para una experiencia inmersiva.',
        specs: [
          'Pantalla multimedia 14.6"',
          'Panel de instrumentos 12.3"',
          'Head-Up Display (HUD)',
          'Sistema Infinity 12 bocinas',
          'Comandos de voz inteligentes',
          'Cargador inalámbrico',
        ],
      },
      {
        icon: 'confort',
        title: 'Espacio para 7 con Estilo',
        description: 'Tres filas de asientos con espacio real para 7 pasajeros. Estribos automáticos, luz de cortesía en puertas y acabados premium en cada superficie.',
        specs: [
          'Capacidad para 7 pasajeros',
          'Estribos automáticos',
          'Luz de cortesía en puertas',
          'Encendido a distancia automático',
          'Parabrisas trasero calefaccionado',
          'Aros de 19" con rueda de repuesto',
        ],
      },
    ],
    specifications: [
      {
        title: 'Sistema Híbrido',
        icon: 'motor',
        items: [
          'Motor 2.0 CC Turbocharger (VGT)',
          'Motor Eléctrico integrado',
          'Potencia combinada: 342 HP',
          'Torque combinado: 648 Nm',
          'Inyección directa',
          'Transmisión híbrida automática ZF 9 velocidades',
          'Tracción 4x4 inteligente AWD',
          'Capacidad de remolque: 3 toneladas',
          'Sistema Start/Stop',
          'Híbrido auto-recargable',
        ],
      },
      {
        title: 'Dimensiones',
        icon: 'exterior',
        items: [
          'Largo: 5,078 mm',
          'Ancho: 1,934 mm',
          'Alto: 1,905 mm',
          'Distancia entre ejes: 2,850 mm',
          'Aros de aleación 19"',
          'Rueda de repuesto completa',
        ],
      },
      {
        title: 'Seguridad Avanzada',
        icon: 'seguridad',
        items: [
          '6 bolsas de aire',
          'Frenos de disco ventilados en 4 ruedas',
          'Frenos ABS con EBD',
          'Control de estabilidad (ESP)',
          'Control de tracción (TCS)',
          'Control de descenso (HDC)',
          'Frenado automático de emergencia',
          'Frenado en detención (Autohold)',
          'Freno de mano eléctrico',
          'Desbloqueo automático por colisión',
          'Corte de combustible por colisión',
          'Advertencia de colisión trasera (RCW)',
          'Advertencia de puertas abiertas (DOW)',
          'Cámara 360° HD',
          'Cámara omnivista de terreno',
          'Anclajes ISOFIX',
        ],
      },
      {
        title: 'Asistencias ADAS Nivel 2',
        icon: 'tecnología',
        items: [
          'Asistencia hidráulica de frenado (HBA)',
          'Asistente de tráfico cruzado (RCTA)',
          'Asistente de pendiente (HAC)',
          'Asistente de giro pronunciado',
          'Visualización frontal (HUD)',
          'Monitoreo de neumáticos (TPMS)',
          'Monitoreo de puntos ciegos (BSM)',
          'Sensor de mantenimiento de carril',
          'Sensor de cambio de carril (LDW)',
          'Sensores de colisión y peatones',
          'Sensor de objetos en movimiento',
          'Sensor de lluvia y de luz',
          'Bloqueo diferencial delantero y trasero',
          'Control crucero adaptativo (ACC)',
          'Control crucero Off Road',
          'Radar de señales de tránsito',
          'Alerta de exceso de velocidad',
          'Sistema de comandos de voz',
          'Ajuste de faros electrónico',
          'Estribos automáticos',
          'Asistente de parqueo',
          'Parqueo autónomo',
          'Monitor anti sueño',
        ],
      },
      {
        title: 'Interior Premium',
        icon: 'interior',
        items: [
          'Capacidad: 7 pasajeros',
          'Encendido a distancia automático',
          'Llave inteligente / Smart kit',
          'Panel de instrumentos digital 12.3"',
          'A/C automático dual-zone',
          'Sensor de calidad de aire (AQS)',
          'Sistema de fragancias',
          'Asientos delanteros eléctricos',
          '8 memorias en asientos delanteros',
          'Soporte lumbar y masaje en asientos',
          'A/C en asientos (calefacción/ventilación)',
          'Tapicería de cuero premium',
          'Timón multifuncional con paddle shift',
          'Iluminación ambiental 64 colores',
          'Luz de cortesía en puertas',
          'Cargador 12V y enchufe 220V',
          'Parabrisas trasero calefaccionado',
          'Techo panorámico',
        ],
      },
      {
        title: 'Entretenimiento',
        icon: 'tecnología',
        items: [
          'Pantalla multimedia 14.6"',
          'Apple CarPlay & Android Auto',
          'Sistema Infinity con 12 bocinas',
          'Amplificador independiente de sonido',
          'Entradas USB Tipo A y C',
          'Cargador inalámbrico',
          'Bluetooth',
        ],
      },
      {
        title: 'Suspensión y Chasis',
        icon: 'exterior',
        items: [
          'Suspensión independiente delantera doble horquilla',
          'Suspensión independiente trasera Multilink',
          'Sistema AWD inteligente',
          'Chasis tipo monocasco reforzado',
        ],
      },
    ],
    variants: {
      'Ficha Técnica': {
        highlight: 'Versión única full equipo híbrida',
      },
    },
    closingCTA: 'El Tank 500 representa la cima del lujo todoterreno. Agenda tu experiencia de manejo y descubre por qué es el SUV más completo del mercado.',
  },

  // ═══════════════════════════════════════════════════════════════
  // GWM POER
  // ═══════════════════════════════════════════════════════════════
  'poer': {
    heroTitle: 'GWM Poer',
    tagline: 'Pickup Premium con ADN Todoterreno',
    heroDescription: 'El pickup que combina la robustez del trabajo pesado con el refinamiento de una SUV de lujo. Motor turbodiésel de 161 HP, tracción 4x4 y hasta 410 Nm de torque para enfrentar cualquier desafío.',
    gallery: [
      '/carImages/GWM copy/Poer/Imagen principal.png',
      '/carImages/GWM copy/Poer/Poer power.jpg',
      '/carImages/GWM copy/Poer/Driving assistance.jpg',
      '/carImages/GWM copy/Poer/Interior cabina.jpg',
      '/carImages/GWM copy/Poer/Screen.jpg',
      '/carImages/GWM copy/Poer/Cabina 2.jpg',
    ],
    quickSpecs: [
      { value: '161', label: 'HP de Potencia' },
      { value: '410', label: 'Nm de Torque' },
      { value: '4x4', label: 'Tracción Total' },
      { value: '4', label: 'Versiones' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Torque para el Trabajo Pesado',
        description: 'Motor 2.0L Turbodiésel que entrega 161 HP y un torque masivo de 410 Nm. Diseñado para carga pesada, remolque y las condiciones más exigentes.',
        specs: [
          'Motor 2.0 CC Turbo Diésel',
          'Potencia: 161 HP',
          'Torque: 410 Nm',
          'Transmisión automática 8 vel o manual 6 vel',
          'Tracción 4x4',
          'Emisiones Euro IV',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Seguridad de SUV Premium',
        description: 'Hasta 6 bolsas de aire, cámara 360° HD y sistema ADAS completo. Protección de clase premium para ti, tu equipo y tu carga.',
        specs: [
          'Hasta 6 bolsas de aire (según versión)',
          'Cámara 360° HD (versión Deluxe)',
          'Frenos ABS con EBD',
          'Control de estabilidad ESP',
          'Control de descenso HDC',
          'Anclajes ISOFIX',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Asistencias Inteligentes',
        description: 'Sistema ADAS disponible con monitoreo de puntos ciegos, sensor de colisión frontal y reconocimiento de señales de tránsito.',
        specs: [
          'Monitoreo de puntos ciegos (BSM)',
          'Sensor de colisión frontal y peatones',
          'Sensor de mantenimiento de carril',
          'Control crucero adaptativo',
          'Reconocimiento de señales (TSR)',
          'Asistente de parqueo',
        ],
      },
      {
        icon: 'confort',
        title: 'Cabina de Primera Clase',
        description: 'Interior refinado con tapicería de cuero, asientos eléctricos y climatización automática dual. Trabajar duro nunca fue tan cómodo.',
        specs: [
          'Tapicería de cuero (desde versión Élite)',
          'Asientos delanteros eléctricos (Deluxe)',
          'A/C automático dual-zone',
          'Timón multifuncional con paddle shift',
          'Sunroof (versión Deluxe)',
          'Llave inteligente Smart Kit',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Conectividad Completa',
        description: 'Pantalla multimedia de 9" con Apple CarPlay y Android Auto. Sistema de audio de alta fidelidad para acompañar cada jornada.',
        specs: [
          'Pantalla multimedia 9"',
          'Apple CarPlay & Android Auto',
          '6 bocinas de alta fidelidad',
          'Bluetooth integrado',
          'Entradas USB',
          'Cargador inalámbrico (Deluxe)',
        ],
      },
      {
        icon: 'diseño',
        title: 'Capacidad de Carga Superior',
        description: 'Palangana amplia con opciones de largo estándar o extendido. Chasis tipo escalera diseñado para trabajo intensivo día tras día.',
        specs: [
          'Palangana corta: 5,425 mm',
          'Palangana larga: 5,665 mm',
          'Ancho: 1,934-1,968 mm',
          'Chasis tipo escalera reforzado',
          'Aros de 17" o 18" según versión',
        ],
      },
    ],
    specifications: [
      {
        title: 'Motor y Transmisión',
        icon: 'motor',
        items: [
          'Motor 2.0 CC Turbo Diésel',
          'Potencia: 161 HP',
          'Torque: 410 Nm',
          'Transmisión automática 8 vel (Plus/Deluxe)',
          'Transmisión manual 6 vel (Active/Élite)',
          'Tracción 4x4 en todas las versiones',
          'Modos de manejo: Standard, ECO, Sport (AT)',
          'Modos de manejo: 2H, AUTO, 4L (MT)',
          'Emisiones Euro IV',
        ],
      },
      {
        title: 'Dimensiones',
        icon: 'exterior',
        items: [
          'Largo palangana corta: 5,410-5,425 mm',
          'Largo palangana larga: 5,665 mm',
          'Ancho: 1,934-1,968 mm',
          'Alto: 1,882-1,886 mm',
          'Distancia entre ejes: 3,230 mm',
          'Aros de aleación 17" (Active/Élite)',
          'Aros de aleación 18" (Plus/Deluxe)',
        ],
      },
      {
        title: 'Seguridad',
        icon: 'seguridad',
        items: [
          '2 bolsas de aire (Active/Plus)',
          '4 bolsas de aire (Élite)',
          '6 bolsas de aire (Deluxe)',
          'Frenos ABS con EBD',
          'Control de estabilidad (ESP)',
          'Control de tracción (TCS)',
          'Control de descenso (HDC)',
          'Frenado en detención Autohold (Plus/Deluxe)',
          'Freno de mano eléctrico (Plus/Deluxe)',
          'Cámara de retroceso (Élite/Plus)',
          'Cámara 360° HD (Deluxe)',
          'Anclajes ISOFIX',
        ],
      },
      {
        title: 'Asistencias',
        icon: 'tecnología',
        items: [
          'Asistencia hidráulica al frenado (HBA)',
          'Asistencia de frenado (BAS) - Plus/Deluxe',
          'Monitoreo de neumáticos (TPMS)',
          'Sensores de retroceso (todas)',
          'Sensores delanteros (Plus/Deluxe)',
          'Sensor de lluvia y luz (Élite/Plus/Deluxe)',
          'Monitoreo de puntos ciegos BSM (Deluxe)',
          'Sensor de mantenimiento de carril (Deluxe)',
          'Sensor de colisión frontal y peatones (Deluxe)',
          'Reconocimiento de señales TSR (Deluxe)',
          'Control crucero adaptativo ACC (Deluxe)',
          'Asistente de parqueo (Plus/Deluxe)',
          'Cierre centralizado',
        ],
      },
      {
        title: 'Interior y Confort',
        icon: 'interior',
        items: [
          'Panel de instrumentos 3.5" (Élite/Plus) / 7" (Deluxe)',
          'A/C automático (todas)',
          'A/C dual-zone (Deluxe)',
          'Asientos ajustables (Active/Élite/Plus)',
          'Asientos delanteros eléctricos (Deluxe)',
          'Tapicería de tela (Active)',
          'Tapicería de cuero (Élite/Plus/Deluxe)',
          'Timón multifuncional',
          'Paletas de cambios (Plus/Deluxe)',
          'Cargador 12V delantero',
          'Sunroof (Deluxe)',
          'Neblineras (Deluxe)',
        ],
      },
      {
        title: 'Entretenimiento',
        icon: 'tecnología',
        items: [
          'Radio FM/AM (Active)',
          'Pantalla multimedia 9" (Élite/Plus/Deluxe)',
          'Apple CarPlay & Android Auto (Élite/Plus/Deluxe)',
          '4 bocinas (Plus)',
          '6 bocinas de alta fidelidad (Active/Élite/Deluxe)',
          'Cargador inalámbrico (Deluxe)',
          'Entradas USB',
          'Bluetooth',
        ],
      },
      {
        title: 'Suspensión y Chasis',
        icon: 'exterior',
        items: [
          'Suspensión delantera independiente con barra estabilizadora',
          'Suspensión trasera independiente Multilink',
          'Chasis tipo escalera reforzado',
        ],
      },
    ],
    variants: {
      'Poer Active': {
        highlight: 'Trabajo esencial • Transmisión manual 6 vel',
      },
      'Poer Élite': {
        highlight: 'Equipamiento mejorado • Transmisión manual 6 vel',
      },
      'Poer Plus': {
        highlight: 'Transmisión automática • Mayor confort',
      },
      'Poer Deluxe': {
        highlight: 'Full equipo • ADAS completo • Cámara 360°',
      },
    },
    variantComparison: [
      { feature: 'Transmisión', values: ['Manual 6 vel', 'Manual 6 vel', 'Auto 8 vel', 'Auto 8 vel'] },
      { feature: 'Bolsas de aire', values: ['2', '4', '2', '6'] },
      { feature: 'Tapicería de cuero', values: [false, true, true, true] },
      { feature: 'Pantalla multimedia 9"', values: [false, true, true, true] },
      { feature: 'Apple CarPlay / Android Auto', values: [false, true, true, true] },
      { feature: 'Llave inteligente', values: [false, true, true, true] },
      { feature: 'Cámara de retroceso', values: [false, true, true, true] },
      { feature: 'Cámara 360° HD', values: [false, false, false, true] },
      { feature: 'Sensores delanteros', values: [false, false, true, true] },
      { feature: 'Monitoreo punto ciego (BSM)', values: [false, false, false, true] },
      { feature: 'Control crucero adaptativo', values: [false, false, false, true] },
      { feature: 'Asientos eléctricos', values: [false, false, false, true] },
      { feature: 'Sunroof', values: [false, false, false, true] },
      { feature: 'Cargador inalámbrico', values: [false, false, false, true] },
      { feature: 'Freno de mano eléctrico', values: [false, false, true, true] },
      { feature: 'Paletas de cambio', values: [false, false, true, true] },
      { feature: 'Aros', values: ['17"', '17"', '18"', '18"'] },
    ],
    closingCTA: 'La Poer combina la capacidad de trabajo que necesitas con el confort que mereces. Elige tu versión y comienza una nueva era de productividad.',
  },

  // ═══════════════════════════════════════════════════════════════
  // PLACEHOLDER FOR OTHER MODELS (to be completed)
  // ═══════════════════════════════════════════════════════════════
  'h6': {
    heroTitle: 'Haval H6',
    tagline: 'SUV 2WD Turbo & HEV',
    heroDescription:
      'SUV 2WD con motor 2.0 CC Turbo Gasolina de 201 Hp y 320 Nm, y versión 1.5 CC Turbo HEV con 255 Hp y 355 Nm combinados. Transmisión DCT, modos de manejo Standard/ECO/Sport/Nieve (GT añade Pista) y conectividad Apple CarPlay & Android Auto.',
    gallery: [
      '/carImages/GWM copy/Haval H6/Imagen principal.png',
      '/carImages/GWM copy/Haval H6/Motor turbo de 201 hp.png',
      '/carImages/GWM copy/Haval H6/Caja automática de 7 velocidades (DCT).png',
      '/carImages/GWM copy/Haval H6/Modos de manejo según el camino.png',
      '/carImages/GWM copy/Haval H6/Pantalla central con conectividad completa.png',
      '/carImages/GWM copy/Haval H6/Tablero digital.png',
      '/carImages/GWM copy/Haval H6/Interior moderno con techo panorámico.png',
      '/carImages/GWM copy/Haval H6/Asientos de cuero.png',
      '/carImages/GWM copy/Haval H6/Extras en la versión Deluxe.png',
      '/carImages/GWM copy/Haval H6/Interior amplio y cómodo.png',
    ],
    quickSpecs: [
      { value: '201 / 255 Hp', label: 'Potencia' },
      { value: '320 / 355 Nm', label: 'Torque' },
      { value: 'DCT 7 vel', label: 'Transmisión' },
      { value: '5 años / 150,000 km', label: 'Garantía' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Motorizaciones Turbo y HEV',
        description:
          'H6 ofrece motor 2.0 CC Turbo Gasolina y versión 1.5 CC Turbo HEV auto recargable. Ambas con tracción 2WD.',
        specs: [
          '2.0 CC Turbo Gasolina • 201 Hp • 320 Nm • Euro V',
          '1.5 CC Turbo HEV • 255 Hp combinados • 355 Nm combinados • Euro VI',
          'Tracción 2WD (todas)',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Transmisión DCT y modos de manejo',
        description:
          'Transmisión DCT con modos Standard, ECO, Sport y Nieve. La versión GT agrega modo Pista.',
        specs: [
          'Transmisión 7 vel (DCT) en gasolina',
          'Transmisión automática DCT en HEV',
          'Modos: Standard, ECO, Sport y Nieve',
          'Modo Pista (GT)',
          'Sistema Start/Stop (Élite/Deluxe)',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Conectividad y multimedia',
        description:
          'Pantallas multimedia de 10.25” o 12.3” con Apple CarPlay & Android Auto y audio Infinity.',
        specs: [
          'Pantalla multimedia 10.25” (Élite)',
          'Pantalla multimedia 12.3” (Deluxe/GT/HEV)',
          'Apple CarPlay & Android Auto',
          '8 bocinas / Audio Infinity',
          'Bluetooth y entradas USB',
          'Cargador inalámbrico (Deluxe/GT/HEV)',
        ],
      },
      {
        icon: 'confort',
        title: 'Confort y equipamiento',
        description:
          'Cabina equipada con llave inteligente, A/C automático dual-zone y tapicería de cuero.',
        specs: [
          'Llave inteligente / Smart kit',
          'Panel de instrumentos 10.25”',
          'A/C automático dual-zone',
          'Tapicería de cuero',
          'Asientos delanteros eléctricos (Deluxe/GT/HEV)',
          'Paletas de cambios (Élite/Deluxe/GT)',
          'Techo panorámico',
          'Aros 18” (Élite) / 19” (Deluxe/GT/HEV)',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Asistencias a la conducción (ADAS)',
        description:
          'Asistencias disponibles con monitoreo y alertas avanzadas para una conducción segura.',
        specs: [
          'Asistencia a la conducción (ADAS) (Deluxe/GT/HEV)',
          'Asistencia hidráulica de frenado (HBA) / Asistencia al frenado (BA)',
          'Monitoreo de neumáticos (TPMS)',
          'Monitoreo de puntos ciegos (BSM)',
          'Sensor de mantenimiento de carril',
          'Sensor de colisión frontal y peatones',
          'Visualización frontal (HUD)',
          'Parqueo autónomo y monitor anti sueño',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Seguridad activa y pasiva',
        description:
          'Protección integral con 6 bolsas de aire y sistemas de estabilidad y frenado.',
        specs: [
          '6 bolsas de aire',
          'Frenos con ABS y EBD',
          'Frenado en detención (Autohold)',
          'Freno de mano eléctrico',
          'Control de estabilidad (ESP)',
          'Control de descenso (HDC)',
          'Control de tracción (TCS)',
          'Cámara de retroceso (Élite) / Cámara 360° HD (Deluxe/GT/HEV)',
          'Anclajes ISOFIX',
        ],
      },
    ],
    specifications: [
      {
        title: 'Motor y Transmisión',
        icon: 'motor',
        items: [
          '2.0 CC Turbo Gasolina • 201 Hp • 320 Nm • Euro V • 2WD',
          '1.5 CC Turbo HEV • 255 Hp combinados • 355 Nm combinados • Euro VI • 2WD',
          'Transmisión 7 vel (DCT) en gasolina',
          'Transmisión automática DCT en HEV',
          'Modos: Standard, ECO, Sport y Nieve',
          'Modo Pista (GT)',
          'Sistema Start/Stop (Élite/Deluxe)',
        ],
      },
      {
        title: 'Dimensiones',
        icon: 'exterior',
        items: [
          'H6 Élite/Deluxe: Largo 4,653 mm • Ancho 1,886 mm • Alto 1,730 mm • Ejes 2,738 mm',
          'H6 GT: Largo 4,727 mm • Ancho 1,940 mm • Alto 1,729 mm • Ejes 2,738 mm',
          'H6 HEV: Largo 4,683 mm • Ancho 1,886 mm • Alto 1,730 mm • Ejes 2,738 mm',
        ],
      },
      {
        title: 'Suspensión y Chasis',
        icon: 'exterior',
        items: [
          'Suspensión delantera independiente McPherson',
          'Suspensión trasera independiente Multilink',
          'Chasis tipo monocasco',
        ],
      },
      {
        title: 'Conectividad',
        icon: 'tecnología',
        items: [
          'Pantalla multimedia 10.25” (Élite)',
          'Pantalla multimedia 12.3” (Deluxe/GT/HEV)',
          'Apple CarPlay & Android Auto',
          '8 bocinas / Audio Infinity',
          'Bluetooth',
          'Entradas USB',
          'Cargador inalámbrico (Deluxe/GT/HEV)',
        ],
      },
      {
        title: 'Equipamiento y Confort',
        icon: 'interior',
        items: [
          'Llave inteligente / Smart kit',
          'Panel de instrumentos 10.25”',
          'A/C automático dual-zone',
          'Tapicería de cuero',
          'Asiento eléctrico conductor (Élite)',
          'Asientos delanteros eléctricos (Deluxe/GT/HEV)',
          'Paletas de cambios (Élite/Deluxe/GT)',
          'Cargador 12V delantero (Élite/HEV)',
          'Cargador 12V delantero y baúl (Deluxe/GT)',
          'Techo panorámico',
          'Kit de reparación de llantas (HEV)',
          'Aros 18” (Élite) / 19” (Deluxe/GT/HEV)',
        ],
      },
      {
        title: 'Asistencias y Seguridad',
        icon: 'seguridad',
        items: [
          'Asistencia a la conducción (ADAS) (Deluxe/GT/HEV)',
          'Asistencia hidráulica de frenado (HBA) / Asistencia al frenado (BA)',
          'Monitoreo de neumáticos (TPMS)',
          'Monitoreo de puntos ciegos (BSM)',
          'Sensor de mantenimiento de carril',
          'Sensor de colisión frontal y peatones',
          'Visualización frontal (HUD)',
          'Cierre centralizado',
          'Parqueo autónomo',
          'Monitor anti sueño',
          '6 bolsas de aire',
          'Frenos con ABS y EBD',
          'Frenado en detención (Autohold)',
          'Freno de mano eléctrico',
          'Control de estabilidad (ESP)',
          'Control de descenso (HDC)',
          'Control de tracción (TCS)',
          'Cámara de retroceso (Élite) / Cámara 360° HD (Deluxe/GT/HEV)',
          'Anclajes ISOFIX',
        ],
      },
    ],
    variants: {
      'H6 Élite': {
        highlight: 'Pantalla 10.25” • Aros 18” • Cámara de retroceso',
      },
      'H6 Deluxe': {
        highlight: 'ADAS + HUD • Cámara 360° HD • Aros 19”',
      },
      'H6 GT': {
        highlight: 'Modo Pista • ADAS + HUD • Aros 19”',
      },
      'H6 HEV': {
        highlight: '255 Hp combinados • Euro VI • Auto recargable',
      },
    },
    closingCTA: 'Agenda tu test drive y conoce la versión H6 que mejor se adapta a tus necesidades.',
  },
  'jolion': {
    heroTitle: 'Haval Jolion',
    tagline: 'SUV 2WD Turbo y HEV',
    heroDescription:
      'Motor 1.5 CC Turbo Gasolina de 141 Hp y 210 Nm, y versión 1.5 CC HEV con 248 Hp y 375 Nm combinados. Tracción 2WD, transmisión DCT y modos Standard/ECO/Sport/Nieve con Apple CarPlay & Android Auto.',
    gallery: [
      '/carImages/GWM copy/Haval Jolion/Imagen principal.png',
      '/carImages/GWM copy/Haval Jolion/Pantalla flotante y tablero digital.png',
      '/carImages/GWM copy/Haval Jolion/Controles desde el volante y modos de manejo.png',
      '/carImages/GWM copy/Haval Jolion/Interior moderno.png',
      '/carImages/GWM copy/Haval Jolion/Asientos con calefacción.png',
      '/carImages/GWM copy/Haval Jolion/Sensores y cámara de retroceso.png',
      '/carImages/GWM copy/Haval Jolion/Control de estabilidad y asistencia en pendientes.png',
      '/carImages/GWM copy/Haval Jolion/Detalles que elevan la experiencia.png',
      '/carImages/GWM copy/Haval Jolion/Más tecnología en la versión Deluxe.png',
      '/carImages/GWM copy/Haval Jolion HEV/Imagen principal.jpg',
      '/carImages/GWM copy/Haval Jolion HEV/Autorecargable.png',
      '/carImages/GWM copy/Haval Jolion HEV/Pantalla central de 12.3” y tablero digital.png',
      '/carImages/GWM copy/Haval Jolion HEV/Modos de manejo.png',
      '/carImages/GWM copy/Haval Jolion HEV/Apple CarPlay, Android Auto y Bluetooth.png',
      '/carImages/GWM copy/Haval Jolion HEV/Head-Up Display y sistema de sonido envolvente.png',
      '/carImages/GWM copy/Haval Jolion HEV/Aire acondicionado.png',
      '/carImages/GWM copy/Haval Jolion HEV/Asientos cómodos.png',
      '/carImages/GWM copy/Haval Jolion HEV/Amplia cabina.png',
      '/carImages/GWM copy/Haval Jolion HEV/Potencia motor.png',
    ],
    quickSpecs: [
      { value: '141 / 248 Hp', label: 'Potencia' },
      { value: '210 / 375 Nm', label: 'Torque' },
      { value: 'DCT 7 vel', label: 'Transmisión' },
      { value: '5-7 años / 150,000-200,000 km', label: 'Garantía' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Motor Turbo y HEV',
        description:
          'Jolion ofrece motor 1.5 CC Turbo Gasolina y versión 1.5 CC HEV auto recargable. Ambas con tracción 2WD.',
        specs: [
          '1.5 CC Turbo Gasolina • 141 Hp • 210 Nm • Euro V',
          '1.5 CC HEV • 248 Hp combinados • 375 Nm combinados • Euro VI',
          'Tracción 2WD (todas)',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Transmisión DCT y modos de manejo',
        description:
          'Transmisión DCT con modos Standard, ECO, Sport y Nieve para adaptarse a cada camino.',
        specs: [
          'Transmisión 7 vel (DCT) en gasolina',
          'Transmisión automática DCT en HEV',
          'Modos: Standard, ECO, Sport y Nieve',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Conectividad y multimedia',
        description:
          'Pantallas multimedia de 10.3” o 12.3” con Apple CarPlay & Android Auto y audio de alta fidelidad.',
        specs: [
          'Pantalla multimedia 10.3” (Élite)',
          'Pantalla multimedia 12.3” (Deluxe/HEV)',
          'Apple CarPlay & Android Auto',
          '6 bocinas de alta fidelidad',
          'Bluetooth y entradas USB',
          'Cargador inalámbrico (Deluxe/HEV)',
        ],
      },
      {
        icon: 'confort',
        title: 'Confort y equipamiento',
        description:
          'Cabina equipada con llave inteligente, A/C automático dual-zone y tapicería de cuero.',
        specs: [
          'Llave inteligente / Smart kit',
          'Panel de instrumentos de 7”',
          'A/C automático dual-zone',
          'Tapicería de cuero',
          'Asientos ajustables',
          'Asiento eléctrico conductor (Deluxe/HEV)',
          'Paletas de cambios (Élite/Deluxe)',
          'Cargador 12V delantero',
          'Techo panorámico (Deluxe/HEV)',
          'Kit de reparación de llantas (HEV)',
          'Aros de 18”',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Asistencias a la conducción',
        description:
          'Asistencias disponibles con monitoreo y alertas avanzadas para una conducción segura.',
        specs: [
          'Asistencia a la conducción (ADAS) (Deluxe/HEV)',
          'Asistencia hidráulica de frenado (HBA)',
          'Monitoreo de neumáticos (TPMS)',
          'Monitoreo de puntos ciegos (BSM) (Deluxe/HEV)',
          'Sensor de mantenimiento de carril (Deluxe/HEV)',
          'Sensor de colisión frontal y peatones (Deluxe/HEV)',
          'Visualización frontal (HUD) (Deluxe/HEV)',
          'Sensores de retroceso',
          'Sensor de lluvia y luz (Élite)',
          'Asistente de parqueo',
          'Parqueo autónomo (Deluxe/HEV)',
          'Monitor anti sueño (Deluxe/HEV)',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Seguridad activa y pasiva',
        description:
          'Protección integral con 6 bolsas de aire y sistemas de estabilidad y frenado.',
        specs: [
          '6 bolsas de aire',
          'Frenos con ABS y EBD',
          'Frenado en detención (Autohold)',
          'Freno de mano eléctrico',
          'Control crucero adaptativo (AAC)',
          'Control de estabilidad (ESP)',
          'Control de descenso (HDC)',
          'Control de tracción (TCS)',
          'Cámara de retroceso (Élite)',
          'Cámara 360° HD (Deluxe/HEV)',
          'Anclajes ISOFIX',
        ],
      },
    ],
    specifications: [
      {
        title: 'Motor y Transmisión',
        icon: 'motor',
        items: [
          '1.5 CC Turbo Gasolina • 141 Hp • 210 Nm • Euro V • 2WD',
          '1.5 CC HEV • 248 Hp combinados • 375 Nm combinados • Euro VI • 2WD',
          'Transmisión 7 vel (DCT) en gasolina',
          'Transmisión automática DCT en HEV',
          'Modos: Standard, ECO, Sport y Nieve',
        ],
      },
      {
        title: 'Dimensiones',
        icon: 'exterior',
        items: [
          'Largo: 4,472 mm',
          'Ancho: 1,842 mm (HEV 1,841 mm)',
          'Alto: 1,619 mm',
          'Distancia entre ejes: 2,700 mm',
        ],
      },
      {
        title: 'Suspensión y Chasis',
        icon: 'exterior',
        items: [
          'Suspensión delantera independiente McPherson',
          'Suspensión trasera con barra de torsión',
          'Chasis tipo monocasco',
        ],
      },
      {
        title: 'Conectividad',
        icon: 'tecnología',
        items: [
          'Pantalla multimedia 10.3” (Élite)',
          'Pantalla multimedia 12.3” (Deluxe/HEV)',
          'Apple CarPlay & Android Auto',
          '6 bocinas de alta fidelidad',
          'Bluetooth',
          'Entradas USB',
          'Cargador inalámbrico (Deluxe/HEV)',
        ],
      },
      {
        title: 'Equipamiento y Confort',
        icon: 'interior',
        items: [
          'Llave inteligente / Smart kit',
          'Panel de instrumentos de 7”',
          'A/C automático dual-zone',
          'Tapicería de cuero',
          'Asientos ajustables',
          'Asiento eléctrico conductor (Deluxe/HEV)',
          'Paletas de cambios (Élite/Deluxe)',
          'Cargador 12V delantero',
          'Techo panorámico (Deluxe/HEV)',
          'Kit de reparación de llantas (HEV)',
          'Aros de 18”',
        ],
      },
      {
        title: 'Asistencias y Seguridad',
        icon: 'seguridad',
        items: [
          'Asistencia a la conducción (ADAS) (Deluxe/HEV)',
          'Asistencia hidráulica de frenado (HBA)',
          'Monitoreo de neumáticos (TPMS)',
          'Monitoreo de puntos ciegos (BSM) (Deluxe/HEV)',
          'Sensor de mantenimiento de carril (Deluxe/HEV)',
          'Sensor de colisión frontal y peatones (Deluxe/HEV)',
          'Visualización frontal (HUD) (Deluxe/HEV)',
          'Sensores de retroceso',
          'Sensor de lluvia y luz (Élite)',
          'Asistente de parqueo',
          'Parqueo autónomo (Deluxe/HEV)',
          'Monitor anti sueño (Deluxe/HEV)',
          '6 bolsas de aire',
          'Frenos con ABS y EBD',
          'Frenado en detención (Autohold)',
          'Freno de mano eléctrico',
          'Control crucero adaptativo (AAC)',
          'Control de estabilidad (ESP)',
          'Control de descenso (HDC)',
          'Control de tracción (TCS)',
          'Cámara de retroceso (Élite)',
          'Cámara 360° HD (Deluxe/HEV)',
          'Anclajes ISOFIX',
        ],
      },
      {
        title: 'Garantía',
        icon: 'seguridad',
        items: [
          'Élite: 7 años / 200,000 km',
          'Deluxe: 5 años / 150,000 km',
          'HEV: 5 años / 150,000 km',
        ],
      },
    ],
    variants: {
      'Jolion Élite': {
        highlight: 'Pantalla 10.3” • Aros 18” • Cámara de retroceso',
      },
      'Jolion Deluxe': {
        highlight: 'ADAS + HUD • Cámara 360° HD • Techo panorámico',
      },
      'Jolion HEV': {
        highlight: '248 Hp combinados • Euro VI • Auto recargable',
      },
    },
    closingCTA: 'Agenda tu test drive y elige la versión Jolion ideal para ti.',
  },
  'wingle': {
    heroTitle: 'GWM Wingle',
    tagline: 'Pick Up 4x4 con transmisión manual',
    heroDescription:
      'Motor 2.0 CC Turbo Diésel con 141 Hp y 315 Nm, transmisión MT de 6 velocidades y tracción 4x4. Una pickup de trabajo con suspensión reforzada y garantía de 7 años / 200,000 km.',
    gallery: [
      '/carImages/GWM copy/Wingle/Imagen principal.png',
      '/carImages/GWM copy/Wingle/Capacidad que simplifica tu día.png',
      '/carImages/GWM copy/Wingle/Comodidad que se ajusta a ti.png',
      '/carImages/GWM copy/Wingle/Conectividad sin distracciones.png',
      '/carImages/GWM copy/Wingle/Interior moderno.png',
      '/carImages/GWM copy/Wingle/Más control en cada maniobra.png',
      '/carImages/GWM copy/Wingle/Protección siempre presente.png',
      '/carImages/GWM copy/Wingle/Se siente bien desde que empieza el camino.png',
      '/carImages/GWM copy/Wingle/Avanza con confianza, sin importar el camino.png',
      '/carImages/GWM copy/Wingle/Tecnología que cuida sin que lo notes.png',
    ],
    quickSpecs: [
      { value: '141 Hp', label: 'Potencia' },
      { value: '315 Nm', label: 'Torque' },
      { value: 'MT 6 vel', label: 'Transmisión' },
      { value: '7 años / 200,000 km', label: 'Garantía' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Motor Turbo Diésel 2.0',
        description:
          'Motor 2.0 CC Turbo Diésel con 141 Hp y 315 Nm. Pensado para carga, trabajo y terreno exigente.',
        specs: [
          'Motor 2.0 CC Turbo Diésel',
          'Potencia: 141 Hp',
          'Torque: 315 Nm',
          'Emisiones estándar Euro IV',
          'Tracción 4x4',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Transmisión MT 6 velocidades',
        description:
          'Caja manual de 6 velocidades y dirección hidráulica para control total.',
        specs: [
          'Transmisión MT 6 Vel',
          'Dirección hidráulica',
        ],
      },
      {
        icon: 'confort',
        title: 'Cabina funcional',
        description:
          'Comodidad práctica con mandos en el timón y asiento de piloto con múltiples ajustes.',
        specs: [
          'Comandos en el timón',
          'Asiento de piloto con 6 posiciones',
          'A/C manual',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Conectividad esencial',
        description:
          'Radio con entrada USB y controles al volante para mantenerte conectado.',
        specs: [
          'Radio con entrada USB',
          'Comandos en el timón',
        ],
      },
      {
        icon: 'diseño',
        title: 'Suspensión reforzada',
        description:
          'Configuración preparada para carga y trabajo diario con eje rígido y paquete de resortes.',
        specs: [
          'Suspensión delantera independiente',
          'Suspensión trasera con eje rígido / paquete de resortes',
          'Freno de mano manual',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Seguridad de trabajo',
        description:
          'Seguridad esencial para el día a día con sistemas de control y asistencia.',
        specs: [
          '2 bolsas de aire',
          'Cinturones de seguridad',
          'Frenos de disco delanteros',
          'Sensores de retroceso',
          'Control de tracción',
        ],
      },
    ],
    specifications: [
      {
        title: 'Motor y Transmisión',
        icon: 'motor',
        items: [
          'Motor 2.0 CC Turbo Diésel',
          'Potencia: 141 Hp',
          'Torque: 315 Nm',
          'Emisiones estándar Euro IV',
          'Transmisión MT 6 Vel',
          'Tracción 4x4',
        ],
      },
      {
        title: 'Dimensiones',
        icon: 'exterior',
        items: [
          'Largo: 5,015 mm',
          'Ancho: 1,800 mm',
          'Alto: 1,730 mm',
          'Distancia entre ejes: 2,280 mm',
        ],
      },
      {
        title: 'Suspensión y Chasis',
        icon: 'exterior',
        items: [
          'Dirección hidráulica',
          'Suspensión delantera independiente',
          'Suspensión trasera con eje rígido / paquete de resortes',
          'Freno de mano manual',
        ],
      },
      {
        title: 'Equipamiento',
        icon: 'interior',
        items: [
          'Radio con entrada USB',
          'Comandos en el timón',
          'Asiento de piloto con 6 posiciones',
          'A/C manual',
        ],
      },
      {
        title: 'Seguridad',
        icon: 'seguridad',
        items: [
          '2 bolsas de aire',
          'Cinturones de seguridad',
          'Frenos de disco delanteros',
          'Sensores de retroceso',
          'Control de tracción',
        ],
      },
      {
        title: 'Garantía',
        icon: 'seguridad',
        items: [
          '7 años / 200,000 km',
        ],
      },
    ],
    variants: {
      'Pick Up C/S': {
        highlight: '4x4 • MT 6 vel • Turbo Diésel',
      },
    },
    closingCTA: 'Wingle: lista para el trabajo diario con capacidad 4x4 y respaldo de 7 años.',
  },

  // Mazda models - placeholders to maintain compatibility
  'mazda-2': {
    heroTitle: 'Mazda 2',
    tagline: 'SKYACTIV 1.5 • AT 6 vel',
    heroDescription:
      'Mazda 2 con motor SKYACTIV 1.5 (1496 C.C.) y caja automática de 6 velocidades (Tiptronic según versión). Incluye frenos ABS (con EBD y TCS según ficha/versión), bolsas de aire delanteras y laterales/de cortina, pantalla touch de 7" y conectividad CarPlay/Android, con cámara de retroceso y sensores de parqueo según versión.',
    gallery: [
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
    ],
    quickSpecs: [
      { value: '1496 C.C.', label: 'Motor' },
      { value: '106–109 Hp', label: 'Potencia' },
      { value: 'AT 6 vel', label: 'Transmisión' },
      { value: '12 gal', label: 'Tanque' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Motor SKYACTIV 1.5 y AT 6 vel',
        description:
          'Motor SKYACTIV 1.5 con caja automática de 6 velocidades (Tiptronic según versión) y modo Sport para potenciar la aceleración.',
        specs: [
          '1496 C.C. • SKYACTIV • DOHC • 16 válvulas • 4 cilindros',
          'Potencia: 106 / 107 / 109 H.P. (según ficha)',
          'Caja automática de 6 velocidades',
          'Tiptronic y retroceso (según versión)',
          'Botón / sistema Sport (según ficha)',
          'Tanque de combustible 12 galones',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Frenos ABS (EBD/TCS según versión)',
        description:
          'Control y seguridad con frenos ABS, con EBD y TCS según la versión.',
        specs: [
          'Frenos con sistema ABS',
          'EBD y TCS (según ficha/versión)',
          'Frenos de disco en las 4 ruedas (según versión)',
          'Sensores de parqueo / acercamiento (según versión)',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Bolsas de aire y protección',
        description:
          'Bolsas de aire para piloto y copiloto, y bolsas laterales y de cortina para mayor protección.',
        specs: [
          'Bolsas de aire piloto y copiloto',
          'Bolsas laterales y de cortina',
          'Barras laterales contra impactos (según ficha)',
          'Cinturones de seguridad delanteros y traseros (según versión)',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Pantalla touch 7” y conectividad',
        description:
          'Pantalla touch LCD de 7" con conectores USB/AUX y sistema CarPlay/Android de fábrica.',
        specs: [
          'Pantalla de conectividad touch LCD de 7"',
          'CONECTORES PARA USB Y AUXILIAR (según ficha)',
          'Sistema CarPlay audio / Android Auto (según versión)',
          'Sistema CarPlay y Android de fábrica (según versión)',
          'Radio AM/FM 4 bocinas (según ficha)',
          'Bluetooth y pantalla informativa',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Cámara y sensores (según versión)',
        description:
          'Asistencia para estacionar con cámara de retroceso y sensores de parqueo/acercamiento según versión.',
        specs: [
          'Cámara de retroceso (según ficha)',
          'Sensores de parqueo / acercamiento (según versión)',
        ],
      },
      {
        icon: 'confort',
        title: 'Confort interior y keyless',
        description:
          'Aire acondicionado (climatizado automático según versión), tapicería de tela de lujo y acceso/arranque inteligente sin llave (según versión).',
        specs: [
          'Aire acondicionado',
          'Aire acondicionado climatizado automático (según versión)',
          'Tapicería de tela de lujo',
          'Timón forrado en cuero con controles de audio (según versión)',
          'Sistema de arranque inteligente sin llave (según versión)',
          'Vidrios y retrovisores eléctricos',
          'Retrovisores abatibles/plegables eléctricamente (según versión)',
        ],
      },
      {
        icon: 'diseño',
        title: 'Iluminación y exterior',
        description:
          'Faros halógenos o bi-xenón con detalles LED según versión, desempañador trasero y apertura remota de puertas.',
        specs: [
          'Faros delanteros halógenos (según versión)',
          'Faros delanteros tipo bi-xenón (según versión)',
          'Luces alta y baja tipo LED (según versión)',
          'Desempañador vidrio trasero',
          'Limpiabrisas delanteros intermitentes (con sensores según versión)',
          'Apertura de puertas con control a distancia',
        ],
      },
    ],
    specifications: [
      {
        title: 'Motor y Transmisión',
        icon: 'motor',
        items: [
          'Motor SKYACTIV 1.5: 1496 C.C. • DOHC • 16 válvulas • 4 cilindros',
          'Potencia: 106 / 107 / 109 H.P. (según ficha)',
          'Caja automática de 6 velocidades',
          'Tiptronic y retroceso (según versión)',
          'Sistema Sport / botón Sport (según ficha)',
          'Capacidad de tanque de combustible 12 galones',
        ],
      },
      {
        title: 'Seguridad y Frenos (según versión)',
        icon: 'seguridad',
        items: [
          'Frenos con sistema ABS',
          'EBD y TCS (según ficha/versión)',
          'Frenos de disco en las 4 ruedas (según versión)',
          'Bolsas de aire piloto y copiloto',
          'Bolsas laterales y de cortina',
          'Cámara de retroceso (según versión)',
          'Sensores de parqueo / acercamiento (según versión)',
          'Barras laterales contra impactos (según ficha)',
        ],
      },
      {
        title: 'Conectividad y Multimedia',
        icon: 'tecnología',
        items: [
          'Pantalla touch LCD de 7"',
          'Radio AM/FM 4 bocinas (según ficha)',
          'Conectores USB y auxiliar',
          'Bluetooth y pantalla informativa',
          'Sistema CarPlay/Android (según versión)',
        ],
      },
      {
        title: 'Interior y Confort (según versión)',
        icon: 'interior',
        items: [
          'Aire acondicionado',
          'Aire acondicionado climatizado automático (según versión)',
          'Tapicería de tela de lujo',
          'Timón ajustable en altura',
          'Timón forrado en cuero con controles de audio (según versión)',
          'Vidrios y retrovisores eléctricos',
          'Retrovisores abatibles/plegables eléctricamente (según versión)',
          'Tapa de combustible con apertura desde interior',
          'Medidor de temperatura exterior',
          'Sistema inmovilizador',
          'Luz de baúl',
        ],
      },
      {
        title: 'Exterior e Iluminación (según versión)',
        icon: 'exterior',
        items: [
          'Faros delanteros halógenos / bi-xenón (según versión)',
          'Luces alta y baja tipo LED (según versión)',
          'Espejos retrovisores del color del carro / negro brillante (según versión)',
          'Desempañador de vidrio trasero',
          'Limpiabrisas delanteros intermitentes (con sensores según versión)',
          'Bumper delantero y trasero del color del carro',
          'Apertura de puertas con control a distancia',
          'Antena de radio en vidrio trasero (según versión)',
        ],
      },
    ],
    variants: {
      Hatchback: {
        highlight: '1496 C.C. • AT 6 vel • ABS/EBD/TCS • CarPlay/Android',
      },
      'Sedán Intermedia': {
        highlight: 'AT 6 vel Tiptronic • A/C automático • Sensores luz/lluvia • LED',
      },
      'Sedán Full': {
        highlight: 'AT 6 vel Tiptronic • Aros bitono 16” • Bi-xenón + LED • Keyless',
      },
    },
    closingCTA: 'Agenda tu test drive y elige tu Mazda 2: Hatchback, Sedán Intermedia o Sedán Full.',
  },
  'mazda-3': {
    heroTitle: 'Mazda 3 Sedán',
    tagline: 'SKYACTIV-G 1.5 • AT 6 vel',
    heroDescription:
      'Sedán Mazda 3 con motor SKYACTIV-G de 4 cilindros y 16 válvulas (1496 C.C., 110 H.P.), sistema I-STOP y caja automática/activimática de 6 velocidades con modo Sport. Incluye frenos ABS, G-Vectoring Control, freno de estacionamiento eléctrico (EPB) con Auto Hold, 7 bolsas de aire y conectividad CarPlay/Android con pantalla y cámara de retroceso.',
    gallery: [
      '/carImages/Mazda copy/Mazda 3/Motor 1.5 y caja automática de 6 velocidades.png',
      '/carImages/Mazda copy/Mazda 3/Frenado automático en pendiente y freno eléctrico.png',
      '/carImages/Mazda copy/Mazda 3/7 bolsas de aire y sensores de retroceso.png',
      '/carImages/Mazda copy/Mazda 3/Pantalla central con cámara de retroceso.png',
      '/carImages/Mazda copy/Mazda 3/Apple CarPlay y Android Auto.png',
      '/carImages/Mazda copy/Mazda 3/Asientos cómodos y aire acondicionado.png',
      '/carImages/Mazda copy/Mazda 3/Encendido sin llave y luces automáticas.png',
      '/carImages/Mazda copy/Mazda 3/Diseño interior cómodo y moderno.png',
      '/carImages/Mazda copy/Mazda 3/Espacio justo para todos.png',
    ],
    quickSpecs: [
      { value: '110 H.P.', label: 'Potencia' },
      { value: '1496 C.C.', label: 'Motor' },
      { value: 'AT 6 vel', label: 'Transmisión' },
      { value: '7 bolsas', label: 'Seguridad' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Motor SKYACTIV-G 1.5 y AT 6 vel',
        description:
          'Motor SKYACTIV-G de 4 cilindros y 16 válvulas con sistema I-STOP y caja automática/activimática de 6 velocidades, con selección de marcha Sport.',
        specs: [
          '1496 C.C. • 110 H.P.',
          'SKYACTIV-G • 4 cilindros • 16 válvulas',
          'Sistema I-STOP',
          'Caja automática y activimática de 6 velocidades',
          'Selección de marcha Sport',
          'Gasolina • tanque 13 galones',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Frenos ABS, GVC y EPB',
        description:
          'Seguridad y control con frenos ABS, G-Vectoring Control, freno de estacionamiento eléctrico (EPB) y sistema Auto Hold.',
        specs: [
          'Sistema de frenos ABS',
          'Sistema G-Vectoring Control',
          'Freno de estacionamiento eléctrico (EPB)',
          'Sistema de retención de freno / Auto Hold',
        ],
      },
      {
        icon: 'seguridad',
        title: '7 bolsas de aire y protección',
        description:
          '7 bolsas de aire (piloto, copiloto, laterales, cortina y rodillas para piloto), con barras laterales contra impacto.',
        specs: [
          '7 bolsas de aire: piloto, copiloto, laterales, cortina y rodillas (piloto)',
          'Barras laterales contra impacto',
          'Cinturones de seguridad delanteros y traseros',
          'Sensores de retroceso del color del carro',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Pantalla con cámara de retroceso',
        description:
          'Pantalla con cámara de retroceso para maniobras más seguras.',
        specs: [
          'Pantalla con cámara de retroceso',
          'Sensores de retroceso del color del carro',
        ],
      },
      {
        icon: 'tecnología',
        title: 'CarPlay y Android de fábrica',
        description:
          'Conectividad con CarPlay y Android de fábrica, con radio AM/FM y conectores auxiliares para iPod/USB.',
        specs: [
          'Sistema CarPlay y Android de fábrica',
          'Radio AM/FM',
          'Conectores auxiliares de iPod y USB',
          'Control de audio y Bluetooth al timón',
        ],
      },
      {
        icon: 'confort',
        title: 'Confort y practicidad interior',
        description:
          'Aire acondicionado, computadora de viaje, tapicería de tela y asientos con apoyacabeza.',
        specs: [
          'Aire acondicionado',
          'Computadora de viaje',
          'Tapicería de tela',
          'Asientos delanteros reclinables',
          'Asientos traseros con apoyacabeza',
          'Timón telescópico (altura y profundidad)',
          'Vidrios eléctricos',
        ],
      },
      {
        icon: 'diseño',
        title: 'Acceso inteligente e iluminación',
        description:
          'Arranque sin llave, cerradura central con keyless enter y luces delanteras bi-xenón con sensor automático, más apertura de baúl a distancia.',
        specs: [
          'Arranque de motor sin llave',
          'Cerradura central con Keyless Enter',
          'Luces delantera bi xenón con sensor automático',
          'Apertura de baúl a distancia',
          'Limpia brisas delanteros intermitente con sensores',
          'Desempañador de vidrio trasero',
        ],
      },
    ],
    specifications: [
      {
        title: 'Motor y Dirección',
        icon: 'motor',
        items: [
          'Motor SKYACTIV-G 4 cilindros • 16 válvulas',
          '1496 C.C. • 110 H.P.',
          'Sistema I-STOP',
          'Caja automática y activimática de 6 velocidades',
          'Selección de marcha Sport',
          'Gasolina • capacidad 13 galones',
          'Sistema G-Vectoring Control',
          'Llantas 205/60R16 con aros aluminio',
        ],
      },
      {
        title: 'Seguridad y Frenos',
        icon: 'seguridad',
        items: [
          'Sistema de frenos ABS',
          'Freno de estacionamiento eléctrico (EPB)',
          'Sistema de retención de freno, Auto Hold',
          '7 bolsas de aire: piloto, copiloto, laterales, cortina y rodillas para piloto',
          'Cinturones de seguridad delanteros y traseros',
          'Barras laterales contra impacto',
        ],
      },
      {
        title: 'Conectividad y Tecnología',
        icon: 'tecnología',
        items: [
          'Sistema CarPlay y Android de fábrica',
          'Pantalla con cámara de retroceso',
          'Control de audio y Bluetooth al timón',
          'Conectores auxiliares de iPod y USB',
          'Radio AM/FM',
          'Computadora de viaje',
        ],
      },
      {
        title: 'Interior y Confort',
        icon: 'interior',
        items: [
          'Aire acondicionado',
          'Tapicería de tela',
          'Timón telescópico, graduación altura y profundidad',
          'Asientos delanteros reclinables',
          'Asientos traseros con apoyacabeza',
          'Vidrios eléctricos',
          'Espejo interior día / noche',
          'Viseras con espejo',
          'Luz de lectura interior',
          'Cerradura central',
          'Control remoto',
        ],
      },
      {
        title: 'Exterior e Iluminación',
        icon: 'exterior',
        items: [
          'Luces delantera bi xenón con sensor automático',
          'Retrovisores del color de carro',
          'Espejos retrovisores retráctiles con pidevías',
          'Limpia brisas delanteros intermitente con sensores',
          'Tercer stop trasero',
          'Desempañador de vidrio trasero',
          'Dos escapes de salida',
          'Bumper delantero y trasero del color del carro',
          'Apertura de baúl a distancia',
          'Antena de radio incorporada vidrio trasero',
          'Sensores de retroceso del color del carro',
          'Alarma de fábrica',
          'Tapa combustible apertura automática',
        ],
      },
    ],
    variants: {
      'Sedán': {
        highlight: '110 H.P. • 1496 C.C. • AT 6 vel • 7 bolsas de aire',
      },
    },
    closingCTA: 'Agenda tu test drive y conoce el Mazda 3 Sedán con motor SKYACTIV-G 1.5, CarPlay/Android y 7 bolsas de aire.',
  },
  'cx-3': {
    heroTitle: 'Mazda CX-3',
    tagline: 'SKYACTIV 2.0 • AT 6 vel',
    heroDescription:
      'Mazda CX-3 con motor 2.0 SKYACTIV (1997 C.C., 155 H.P.), inyección directa y caja automática Tiptronic de 6 velocidades. Incluye i-STOP, frenos de disco en las 4 ruedas con ABS y EBD, DSC, TCS, Auto Hold y freno de estacionamiento automático. Conectividad CarPlay/Android, pantalla a color y monitor de vista trasera.',
    gallery: [
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
    ],
    quickSpecs: [
      { value: '155 H.P.', label: 'Potencia' },
      { value: '1997 C.C.', label: 'Motor' },
      { value: 'AT 6 vel', label: 'Transmisión' },
      { value: '15 gal', label: 'Tanque' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Motor 2.0 SKYACTIV e i-STOP',
        description:
          'Motor 2.0 SKYACTIV con inyección directa, 4 cilindros en línea y sistema i-STOP ahorrativo.',
        specs: [
          '2.0 SKYACTIV • 1997 C.C. • 155 H.P.',
          '4 cilindros en línea • DOHC • 16 válvulas',
          'Inyección directa',
          'Relación de compresión 13:01',
          'Sistema i-STOP ahorrativo',
          'Tanque de combustible 15 galones',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Control y frenado inteligente',
        description:
          'Frenos de disco con ABS y EBD, más asistencias dinámicas para una conducción estable.',
        specs: [
          'Frenos de disco en las 4 ruedas con ABS',
          'Distribución electrónica de fuerza de frenado (EBD)',
          'Control dinámico de estabilidad (DSC)',
          'Control de tracción (TCS)',
          'Auto Hold / sistema de retención de frenado',
          'Freno de estacionamiento automático',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Bolsas de aire y protección',
        description:
          'Protección con bolsas de aire laterales y de cortina, más cinturones de 3 puntos.',
        specs: [
          '6 bolsas de aire (delanteras, laterales y de cortinas)',
          'Cinturones delanteros de 3 puntos con pretensores',
          'Cinturones traseros de 3 puntos',
          'Luz de advertencia de cinturones de seguridad',
          'Inmovilizador y alarma de fábrica',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Pantalla y conectividad',
        description:
          'Pantalla a color y conectividad CarPlay/Android Auto con radio de 6 bocinas.',
        specs: [
          'Pantalla de color de 7"',
          'Radio AM/FM con 6 bocinas',
          'Sistema CarPlay/Android Auto',
          'Monitor de vista trasera',
          'Control de audio y Bluetooth en el timón',
        ],
      },
      {
        icon: 'confort',
        title: 'Confort interior',
        description:
          'Aire acondicionado climatizado automático, acabados en cuero y elevavidrios eléctricos.',
        specs: [
          'Aire acondicionado climatizado automático',
          'Timón forrado en cuero (ajustable en altura y profundidad)',
          'Palanca de cambio forrada en cuero',
          'Espejo interior diurno y nocturno',
          'Elevavidrios eléctricos',
        ],
      },
      {
        icon: 'diseño',
        title: 'Exterior y equipamiento',
        description:
          'Detalles premium con faros Xenón, neblineras LED, sensor de lluvia y elementos de diseño funcional.',
        specs: [
          'Faros delanteros tipo Xenón con sensor automático',
          'Neblineras delanteras tipo LED',
          'Limpiabrisas delantero con sensor automático',
          'Limpiabrisas trasero y desempañador de vidrio',
          'Aros de aluminio 215/50R18',
          'Antena tipo tiburón',
          'Spoiler trasero del color del carro',
          'Sensores de parqueo traseros y cámara de retroceso',
        ],
      },
    ],
    specifications: [
      {
        title: 'Motor y Transmisión',
        icon: 'motor',
        items: [
          'Motor 2.0 SKYACTIV: 1997 C.C. • 155 H.P.',
          'Inyección directa • relación de compresión 13:01',
          '4 cilindros en línea • DOHC • 16 válvulas',
          'Caja automática Tiptronic 6 velocidades',
          'Botón Sport de alta potencia',
          'Tanque de combustible 15 galones',
        ],
      },
      {
        title: 'Seguridad y Control',
        icon: 'seguridad',
        items: [
          'Frenos de disco en las 4 ruedas con ABS',
          'Distribución electrónica de fuerza de frenado (EBD)',
          'Control dinámico de estabilidad (DSC)',
          'Control de tracción (TCS)',
          'Auto Hold / retención de frenado',
          'Freno de estacionamiento automático',
          '6 bolsas de aire (delanteras, laterales y de cortinas)',
        ],
      },
      {
        title: 'Conectividad y Multimedia',
        icon: 'tecnología',
        items: [
          'Pantalla de color de 7"',
          'Sistema CarPlay/Android Auto',
          'Radio AM/FM con 6 bocinas',
          'Monitor de vista trasera',
          'Bluetooth y control de audio en el timón',
        ],
      },
      {
        title: 'Interior y Confort',
        icon: 'interior',
        items: [
          'Aire acondicionado climatizado automático',
          'Timón forrado en cuero, ajustable en altura y profundidad',
          'Palanca de cambio forrada en cuero',
          'Espejo interior diurno y nocturno',
          'Tapicería de tela',
          'Tapa carga de baúl',
          'Elevavidrios eléctricos',
        ],
      },
      {
        title: 'Exterior e Iluminación',
        icon: 'exterior',
        items: [
          'Faros delanteros tipo Xenón con sensor automático',
          'Neblineras delanteras tipo LED',
          'Limpiabrisas delantero intermitente con sensor automático',
          'Limpiabrisas trasero y desempañador de vidrio',
          'Pidevías en retrovisores',
          'Antena tipo tiburón',
          'Bumper delantero y trasero del color del carro',
          'Sensores de parqueo traseros y cámara de retroceso',
          'Aros de aluminio 215/50R18',
        ],
      },
    ],
    variants: {
      'Única versión': {
        highlight: '2.0 (155 H.P.) • AT 6 vel Tiptronic • i-STOP • 6 bolsas de aire',
      },
    },
    closingCTA: 'Agenda tu test drive y conoce el CX-3 con motor 2.0 SKYACTIV y equipamiento completo.',
  },
  'cx-30': {
    heroTitle: 'Mazda CX-30',
    tagline: 'SKYACTIV 2.0 • AT 6 vel',
    heroDescription:
      'Mazda CX-30 con motor 2.0 SKYACTIV (1998 C.C., 155 H.P.) y caja automática de 6 velocidades tipo Tiptronic. Incluye i-STOP, frenos de disco en las 4 ruedas con ABS, control dinámico de estabilidad (DSC), control de tracción (TCS), G-Vectoring Control (GVC), EPB y Auto Hold. Conectividad CarPlay/Android, display central 8.8" y 7 bolsas de aire.',
    gallery: [
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
    ],
    quickSpecs: [
      { value: '155 H.P.', label: 'Potencia' },
      { value: '1998 C.C.', label: 'Motor' },
      { value: 'AT 6 vel', label: 'Transmisión' },
      { value: '7 bolsas', label: 'Seguridad' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Motor 2.0 SKYACTIV e i-STOP',
        description:
          'Motor 2.0 SKYACTIV de inyección directa con sistema ahorrativo i-STOP y modo Sport.',
        specs: [
          '2.0 SKYACTIV • 1998 C.C. • 155 H.P.',
          'Gasolina • inyección directa',
          '4 cilindros en línea • DOHC • 16 válvulas',
          'Sistemas ahorrativo i-STOP',
          'Selección de marcha Sport',
          'Tanque: 15 gal (LAD) / 13 gal (LAE)',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Control y frenado inteligente',
        description:
          'Frenos de disco con ABS y asistencias de estabilidad para una conducción segura y controlada.',
        specs: [
          'Frenos de disco en las 4 ruedas con ABS',
          'Control dinámico de estabilidad (DSC)',
          'Sistema de control de tracción (TCS)',
          'G-Vectoring Control (GVC)',
          'EPB (freno de estacionamiento eléctrico)',
          'Auto Hold / retención de frenado',
        ],
      },
      {
        icon: 'seguridad',
        title: '7 bolsas de aire',
        description:
          'Protección integral con 7 bolsas de aire para piloto, copiloto, laterales, cortina y rodillas para piloto.',
        specs: [
          '7 bolsas de aire: piloto, copiloto, laterales, cortina y rodillas (piloto)',
          'Cinturones de seguridad delanteros y traseros',
          'Barras laterales contra impacto (según ficha)',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Display 8.8” y multimedia',
        description:
          'Display central de 8.8" con Mazda Connect (según versión), radio AM/FM con 8 bocinas y control desde el volante.',
        specs: [
          'Display central 8.8"',
          'Mazda Connect (LAE)',
          'Radio AM/FM con 8 bocinas',
          'Timón con control de audio y control de crucero',
          'Sistema manos libres Bluetooth',
        ],
      },
      {
        icon: 'tecnología',
        title: 'CarPlay/Android y cámara trasera',
        description:
          'Conectividad CarPlay/Android de fábrica y monitor de vista trasera para maniobras más fáciles.',
        specs: [
          'Sistema CarPlay/Android de fábrica',
          'Monitor de vista trasera',
          'Tomas auxiliar y puerto USB',
          'Cargador y CarPlay inalámbrico (LAE)',
        ],
      },
      {
        icon: 'confort',
        title: 'Confort con A/C dual',
        description:
          'Aire acondicionado climatizado con control dual, acabados en cuero en controles clave y ergonomía pensada para viajar cómodo.',
        specs: [
          'Aire acondicionado climatizado con control dual',
          'Palanca de cambios forrada en cuero',
          'Timón forrado en cuero (ajustable en altura y profundidad)',
          'Tapicería de tela de lujo',
          'Vidrios eléctricos (sensor auto a un toque)',
        ],
      },
      {
        icon: 'diseño',
        title: 'Keyless, faros Bi-Xenón y detalles LED',
        description:
          'Diseño y practicidad con keyless entry, encendido inteligente y faros Bi-Xenón con sensor automático, más elementos premium según versión.',
        specs: [
          'Sistema de entrada sin llave (Keyless Entry)',
          'Encendido inteligente (Start Push Button)',
          'Faros delanteros tipo Bi-Xenón con sensor de encendido automático',
          'Limpia brisas con sensor de lluvia',
          'Luces diurnas tipo LED (LAE)',
          'Luces traseras combinadas con detalles LED (LAE)',
          'Apertura de baúl eléctrico/automático (LAE)',
        ],
      },
    ],
    specifications: [
      {
        title: 'Motor y Transmisión',
        icon: 'motor',
        items: [
          'Motor 2.0 SKYACTIV: 1998 C.C. • 155 H.P. • gasolina, inyección directa',
          '4 cilindros en línea • DOHC • 16 válvulas',
          'Caja automática de 6 vel tipo Tiptronic',
          'Selección de marcha Sport',
          'Sistemas ahorrativo i-STOP',
          'Tanque: 15 gal (LAD) / 13 gal (LAE)',
        ],
      },
      {
        title: 'Seguridad y Control',
        icon: 'seguridad',
        items: [
          'Frenos de disco en las 4 ruedas con ABS',
          'Control dinámico de estabilidad (DSC)',
          'Control de tracción (TCS)',
          'G-Vectoring Control (GVC)',
          'EPB (freno de estacionamiento eléctrico)',
          'Auto Hold / retención de frenado',
          '7 bolsas de aire (piloto, copiloto, laterales, cortina y rodillas piloto)',
        ],
      },
      {
        title: 'Conectividad y Tecnología',
        icon: 'tecnología',
        items: [
          'Sistema CarPlay/Android de fábrica',
          'Display central 8.8"',
          'Mazda Connect (LAE)',
          'Radio AM/FM con 8 bocinas',
          'Monitor de vista trasera',
          'Tomas auxiliar y puerto USB',
          'Cargador y CarPlay inalámbrico (LAE)',
          'Control de puntos ciego en retrovisor (BSM) (LAE)',
        ],
      },
      {
        title: 'Interior y Confort',
        icon: 'interior',
        items: [
          'A/C climatizado con control dual',
          'Tapicería de tela de lujo',
          'Timón forrado en cuero, ajustable (altura y profundidad)',
          'Palanca de cambios forrada en cuero',
          'Vidrios eléctricos (sensor auto a un toque)',
          'Espejo retrovisor interior día/noche (aut. en LAE)',
          'Pantalla de conducción activa en vidrio frontal (LAE)',
        ],
      },
      {
        title: 'Exterior e Iluminación',
        icon: 'exterior',
        items: [
          'Llantas 215/55/R18 con aros aluminio plateados',
          'Faros delanteros tipo Bi-Xenón con sensor automático',
          'Luces diurnas tipo LED (LAE)',
          'Luces traseras combinadas con detalles LED (LAE)',
          'Keyless Entry',
          'Sensor de lluvia (LAE y según ficha)',
          'Desempañador de vidrio trasero',
          'Dimensiones: largo 4,395 mm • ancho 1,795 mm (según ficha)',
          'Apertura de baúl eléctrico/automático (LAE)',
        ],
      },
    ],
    variants: {
      'CX-30 (LAD)': {
        highlight: '2.0 (155 H.P.) • AT 6 vel Tiptronic • i-STOP • Tanque 15 gal',
      },
      'CX-30 (LAE)': {
        highlight: 'Mazda Connect • CarPlay inalámbrico • BSM • Baúl eléctrico • Tanque 13 gal',
      },
    },
    closingCTA: 'Agenda tu test drive y elige tu CX-30: LAD o LAE.',
  },
  'cx-5': {
    heroTitle: 'Mazda CX-5',
    tagline: 'SKYACTIV 2.0 / 2.5 • AT 6 vel',
    heroDescription:
      'Mazda CX-5 con motor 2.0 SKYACTIV (1997 CC, 155 H.P.) y versión SKYACTIV-G 2.5 (2488 CC, 188 H.P.). Caja automática de 6 velocidades (Tiptronic en 2.0) e i-STOP, con control dinámico de estabilidad (DSC) y G-Vectoring Control (GVC). Pantalla a color de 10.25", CarPlay/Android, freno de estacionamiento eléctrico (EPB) y Auto Hold.',
    gallery: [
      '/carImages/Mazda copy/CX-5/comfort.avif',
      '/carImages/Mazda copy/CX-5/pantalla.webp',
      '/carImages/Mazda copy/CX-5/iluminacion.webp',
      '/carImages/Mazda copy/CX-5/asistencias y cámaras.avif',
      '/carImages/Mazda copy/CX-5/frenos.jpeg',
      '/carImages/Mazda copy/CX-5/motores.avif',
    ],
    quickSpecs: [
      { value: '155 / 188 Hp', label: 'Potencia' },
      { value: '2.0 / 2.5', label: 'Motor SKYACTIV' },
      { value: 'AT 6 vel', label: 'Transmisión' },
      { value: '10.25”', label: 'Pantalla' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Motores SKYACTIV 2.0 y 2.5',
        description:
          'Dos opciones de motorización con inyección directa y relación de compresión 13:01: 2.0 SKYACTIV de 155 H.P. y SKYACTIV-G 2.5 de 188 H.P.',
        specs: [
          '2.0 SKYACTIV: 1997 C.C. • 155 H.P. • Gasolina',
          'SKYACTIV-G 2.5: 2488 C.C. • 188 H.P. • Gasolina',
          '4 cilindros en línea, DOHC, 16 válvulas',
          'Inyección directa',
          'Sistema de corte de ralentí i-STOP',
          'Tanque 15 gal (2.0) / 15.5 gal (2.5)',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Control y frenado inteligente',
        description:
          'Frenos de disco en las 4 ruedas con ABS y distribución electrónica de frenado, con estabilidad y asistencia para una conducción segura.',
        specs: [
          'Frenos de disco en las 4 ruedas con ABS',
          'Distribución electrónica de fuerza de frenado (EBD)',
          'Control dinámico de estabilidad (DSC)',
          'G-Vectoring Control (GVC)',
          'Freno de estacionamiento eléctrico (EPB)',
          'Auto Hold / retención de frenado',
          'Sistema de control de tracción (TCS) (Full)',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Pantalla 10.25” y conectividad',
        description:
          'Pantalla a color de 10.25" con CarPlay/Android y opciones de audio según versión, incluyendo Bose en versiones superiores.',
        specs: [
          'Pantalla a color de 10.25"',
          'Sistema CarPlay y Android (cable)',
          'Radio AM/FM con 7 bocinas (Inicial/Tela/Cuero)',
          'Bose: 11 bocinas (Full) / 10 bocinas (2.5 4x4)',
          'Conectores tipo C (Tela/Full)',
          'Cargador inalámbrico (Tela/Cuero/Full/2.5 4x4)',
        ],
      },
      {
        icon: 'confort',
        title: 'Confort y acabados',
        description:
          'Interior con timón y palanca forrados en cuero, climatización automática y acabados que cambian según la versión (tela o cuero).',
        specs: [
          'Aire acondicionado automático (dual en varias versiones)',
          'Salida independiente de A/C trasero (varias versiones)',
          'Tapicería: tela / tela de lujo / cuero original',
          'Asiento conductor: ajuste manual (Inicial) / eléctrico (Cuero/Full/2.5 4x4)',
          'Memorias en asiento del conductor (2.5 4x4 / Full)',
          'Asiento eléctrico para copiloto (Full / 2.5 4x4)',
          'Asientos traseros abatibles (según versión)',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Asistencias y cámaras (según versión)',
        description:
          'Equipamiento de asistencia que incluye monitoreo de vista trasera, cámara 360° y sistemas de advertencia/alerta en versiones seleccionadas.',
        specs: [
          'Monitor de vista trasera',
          'Cámara 360° (Full)',
          'Control de punto ciego (BSM) (Full)',
          'Sensores de punto ciego en retrovisores (Tela)',
          'Sistema/Asistente de salida de carril (Cuero/2.5 4x4)',
          'Asistente/advertencia de frenado y frenado en ciudad (Cuero/Full/2.5 4x4)',
          'Sensores de parqueo delanteros y traseros',
          'Bolsas de aire delanteras, laterales y de cortina',
        ],
      },
      {
        icon: 'diseño',
        title: 'Exterior e iluminación',
        description:
          'Iluminación y detalles exteriores que escalan por versión: desde faros halógenos hasta LED o bi-xenón con sistemas adaptativos.',
        specs: [
          'Faros halógenos (Inicial)',
          'Faros LED con sensor automático (Tela/Full)',
          'Faros bi-xenón con detalles LED (Cuero/2.5 4x4)',
          'Sistema de luces adaptativas / AFS (según versión)',
          'Retrovisores con pidevías y plegado eléctrico (según versión)',
          'Antena tipo aleta de tiburón',
          'Sunroof eléctrico (2.5 4x4)',
          'Llantas 255/65R17 (Inicial) / 225/55R19 (Tela/Full/2.5 4x4) / 215/55R19 (Cuero)',
        ],
      },
    ],
    specifications: [
      {
        title: 'Motor y Transmisión',
        icon: 'motor',
        items: [
          '2.0 SKYACTIV: 1997 C.C. • 155 H.P. • gasolina • compresión 13:01',
          'SKYACTIV-G 2.5: 2488 C.C. • 188 H.P. • gasolina • compresión 13:01',
          '4 cilindros en línea, DOHC, 16 válvulas',
          'Inyección directa',
          'Caja automática 6 vel tipo Tiptronic (2.0)',
          'Caja automática 6 velocidades (2.5)',
          'i-STOP (corte de ralentí)',
          'Tanque: 15 gal (2.0) / 15.5 gal (2.5)',
          'Transmisión 4x4 AWD con botón Off Road y Sport (2.5 4x4)',
        ],
      },
      {
        title: 'Seguridad y Control',
        icon: 'seguridad',
        items: [
          'Frenos de disco en las 4 ruedas con ABS',
          'EBD (distribución electrónica de fuerza de frenado)',
          'DSC (control dinámico de estabilidad)',
          'GVC (G-Vectoring Control)',
          'EPB (freno de estacionamiento eléctrico)',
          'Auto Hold / retención de frenado',
          'TCS (control de tracción) (Full)',
          'Bolsas de aire delanteras, laterales y de cortina',
          'Anclajes ISOFIX',
        ],
      },
      {
        title: 'Conectividad y Audio',
        icon: 'tecnología',
        items: [
          'Pantalla a color de 10.25"',
          'CarPlay y Android (cable)',
          'Radio AM/FM con 7 bocinas (Inicial/Tela/Cuero)',
          'Bose: 11 bocinas (Full) / 10 bocinas (2.5 4x4)',
          'Cargador inalámbrico (Tela/Cuero/Full/2.5 4x4)',
          'Conectores tipo C (Tela/Full)',
        ],
      },
      {
        title: 'Interior y Confort',
        icon: 'interior',
        items: [
          'Timón forrado en cuero con control de audio y Bluetooth',
          'Palanca de cambio forrada en cuero',
          'Aire acondicionado automático (dual en varias versiones)',
          'Salida independiente de A/C trasero (según versión)',
          'Tapicería: tela / tela de lujo / cuero original',
          'Asiento eléctrico conductor (Cuero/Full/2.5 4x4)',
          'Memorias en asiento del conductor (Full/2.5 4x4)',
          'Asiento eléctrico para copiloto (Full/2.5 4x4)',
          'Pantalla de conducción activa en vidrio frontal (Cuero/Full/2.5 4x4)',
        ],
      },
      {
        title: 'Exterior e Iluminación',
        icon: 'exterior',
        items: [
          'Faros halógenos (Inicial)',
          'Faros LED con sensor automático (Tela/Full)',
          'Faros bi-xenón con detalles LED (Cuero/2.5 4x4)',
          'Sistema de luces adaptativas / AFS (según versión)',
          'Sensores de parqueo delanteros y traseros',
          'Antena tipo tiburón',
          'Spoiler trasero del color del carro',
          'Sunroof eléctrico (2.5 4x4)',
          'Puerta de baúl asistida electrónicamente con sensor de objetos (2.5 4x4)',
        ],
      },
    ],
    variants: {
      Inicial: {
        highlight: '2.0 SKYACTIV • Aros 17” • 7 bocinas • Halógeno',
      },
      'Equipada Tela': {
        highlight: 'Aros 19” bitono • LED • Cargador inalámbrico',
      },
      'Equipada Cuero': {
        highlight: 'Cuero • Bi-xenón • HUD • Asiento eléctrico conductor',
      },
      Full: {
        highlight: 'Cámara 360° • Bose 11 bocinas • Asientos eléctricos',
      },
      '2.5 4X4': {
        highlight: '2.5 (188 H.P.) • AWD 4x4 • Bose 10 bocinas • Off Road',
      },
    },
    closingCTA: 'Agenda tu test drive y elige la versión CX-5 que se adapta a tu estilo de vida.',
  },
  'cx-9': {
    heroTitle: 'Mazda CX-9',
    tagline: '2.5 Turbo • AWD',
    heroDescription:
      'Mazda CX-9 con motor 2.5 SKYACTIV-G Turbo (2488 C.C., 250 H.P.) y tracción AWD. Transmisión automática SKYACTIV-DRIVE de 6 velocidades con modo manual. Incluye frenos ABS con EBD y BA, DSC, TCS, G-Vectoring Control, asistencias de carril (LAS/LDWS) y SCBS. Capacidad para 7 pasajeros y equipamiento premium con pantalla touch de 9", audio Bose y cámara 360° (según ficha).',
    gallery: [
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
    ],
    quickSpecs: [
      { value: '250 H.P.', label: 'Potencia' },
      { value: '2488 C.C.', label: 'Motor' },
      { value: 'AWD', label: 'Tracción' },
      { value: '7 pasajeros', label: 'Capacidad' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Motor 2.5 Turbo SKYACTIV-G',
        description:
          'Motor 2.5 Turbo SKYACTIV-G de 2488 C.C. con 250 H.P., diseñado para respuesta suave y potente.',
        specs: [
          '2.5 Turbo SKYACTIV-G • 2488 C.C.',
          '250 H.P.',
          'Gasolina',
          '16 válvulas',
          'Tracción 4x4 AWD',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Control dinámico y frenado',
        description:
          'Control de estabilidad, tracción y frenado avanzado para un manejo seguro.',
        specs: [
          'Frenos ABS',
          'EBD (distribución electrónica de frenado)',
          'BA (asistencia de frenado)',
          'DSC (control dinámico de estabilidad)',
          'TCS (control de tracción)',
          'G-Vectoring Control (GVC)',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Asistencias de carril y ciudad',
        description:
          'Asistencias de carril y frenado urbano para mayor seguridad en carretera y ciudad.',
        specs: [
          'Asistencia de mantenimiento de carril (LAS)',
          'Advertencia de abandono de carril (LDWS)',
          'Asistente de frenado de ciudad (SCBS)',
          'Asistente de tracción todo terreno',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Pantalla 9” y audio Bose',
        description:
          'Pantalla touch de 9" con conectividad y sistema de audio Bose.',
        specs: [
          'Pantalla touch de 9"',
          'Sistema Bluetooth manos libres',
          'CarPlay de fábrica con cargador inalámbrico',
          'Sistema de audio Bose AM/FM/MP3 con 12 bocinas',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Cámara 360° y seguridad',
        description:
          'Visión completa y asistencias para estacionar con mayor confianza.',
        specs: [
          'Cámara de visión 360°',
          'Control punto ciego (BSM)',
          'Display de información frontal (ADD)',
        ],
      },
      {
        icon: 'confort',
        title: 'Confort premium para 7',
        description:
          'Interior espacioso con tres filas y climatización de tres zonas.',
        specs: [
          'Capacidad para 7 pasajeros',
          'A/C automático de tres zonas',
          'Tapicería de cuero 2 tonos (según ficha)',
          'Sunroof eléctrico de un solo toque',
          'Puerta trasera con apertura y cierre eléctrico',
        ],
      },
      {
        icon: 'diseño',
        title: 'Detalles exteriores premium',
        description:
          'Estilo elegante con iluminación avanzada y acabados exteriores completos.',
        specs: [
          'Luces LED dirigibles (AFLS) con sensor automático',
          'Luces diurnas DRL',
          'Neblineras LED',
          'Aros de aleación R20',
          'Vidrios entintados de privacidad (2a y 3a fila)',
          'Escape doble con puntas cromadas',
        ],
      },
    ],
    specifications: [
      {
        title: 'Motor y Transmisión',
        icon: 'motor',
        items: [
          'Motor 2.5 Turbo SKYACTIV-G • 2488 C.C. • 250 H.P.',
          'Transmisión automática SKYACTIV-DRIVE 6 vel con modo manual',
          'Tracción 4x4 AWD',
        ],
      },
      {
        title: 'Seguridad y Control',
        icon: 'seguridad',
        items: [
          'Frenos ABS',
          'EBD (distribución electrónica de frenado)',
          'BA (asistencia de frenado)',
          'DSC (control dinámico de estabilidad)',
          'TCS (control de tracción)',
          'G-Vectoring Control (GVC)',
          'LAS (asistencia de mantenimiento de carril)',
          'LDWS (advertencia de abandono de carril)',
          'SCBS (asistente de frenado de ciudad)',
        ],
      },
      {
        title: 'Conectividad y Tecnología',
        icon: 'tecnología',
        items: [
          'Pantalla touch de 9"',
          'Bluetooth manos libres',
          'CarPlay de fábrica con cargador inalámbrico',
          'Sistema de audio Bose con 12 bocinas',
          'Cámara de visión 360°',
          'Display de información frontal (ADD)',
          'Control de crucero',
        ],
      },
      {
        title: 'Interior y Confort',
        icon: 'interior',
        items: [
          'Capacidad para 7 pasajeros',
          'A/C automático de tres zonas',
          'Tapicería de cuero 2 tonos (según ficha)',
          'Sunroof eléctrico de un solo toque',
          'Puerta trasera con apertura/cierre eléctrico',
          'Vidrios eléctricos con función de un solo toque',
          'Espejos de vanidad iluminados',
        ],
      },
      {
        title: 'Exterior e Iluminación',
        icon: 'exterior',
        items: [
          'Aros de aleación R20',
          'Luces LED dirigibles (AFLS) con sensor automático',
          'Luces diurnas DRL',
          'Neblineras LED',
          'Vidrios entintados de privacidad (2a y 3a fila)',
          'Antena tipo tiburón',
          'Escape doble con puntas cromadas',
          'Apertura de baúl con sensor de pie',
        ],
      },
    ],
    variants: {
      'CX-9 (LB1)': {
        highlight: '2.5 Turbo • AWD • 7 pasajeros • Bose 12 bocinas',
      },
      'CX-9 (LBY)': {
        highlight: '2.5 Turbo • AWD • 7 pasajeros • Bose 12 bocinas',
      },
    },
    closingCTA: 'Agenda tu test drive y conoce el Mazda CX-9 con 7 pasajeros y tracción AWD.',
  },
  'cx-60': {
    heroTitle: 'Mazda CX-60',
    tagline: '2.5 SKYACTIV / 3.3 MHEV • AWD',
    heroDescription:
      'Mazda CX-60 con motor SKYACTIV-G 2.5 (188 H.P., 2500 C.C.) o motor MHEV 3.3 (284 H.P., 3300 C.C.), ambos con caja automática SKYACTIV-DRIVE de 8 velocidades y tracción AWD con botón Off Road. Incluye i-STOP, frenos ABS/EBD/BA, pantalla de 12", audio Bose, CarPlay/Android (inalámbrico en 2.5) y asistencias como LDWS, BSM y SCBS.',
    gallery: [
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
    ],
    quickSpecs: [
      { value: '188 / 284 H.P.', label: 'Potencia' },
      { value: '250 / 450 Nm', label: 'Torque' },
      { value: 'AWD', label: 'Tracción' },
      { value: 'AT 8 vel', label: 'Transmisión' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Motores 2.5 SKYACTIV y 3.3 MHEV',
        description:
          'Dos opciones de motorización: 2.5 SKYACTIV-G (188 H.P.) y 3.3 MHEV (284 H.P.) con sistema i-STOP.',
        specs: [
          '2.5 SKYACTIV-G: 188 H.P. • 250 Nm • 2500 C.C.',
          '3.3 MHEV: 284 H.P. • 450 Nm • 3300 C.C.',
          '4 cilindros (2.5) / 6 cilindros (3.3) • DOHC',
          'Sistema i-STOP ahorrativo',
          'Botón para manejo de alta potencia (3.3)',
        ],
      },
      {
        icon: 'potencia',
        title: 'AWD y modo Off Road',
        description:
          'Tracción AWD con botón Off Road y control de tracción para un manejo seguro en distintas superficies.',
        specs: [
          'Transmisión AWD con botón Off Road',
          'Control de tracción (TCS)',
          'KPC (Control cinemático de posición)',
          'Barras estabilizadoras delantera y trasera',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Pantalla 12” y audio Bose',
        description:
          'Pantalla de 12" con conectividad y audio Bose HD con 12 bocinas.',
        specs: [
          'Pantalla de color de 12"',
          'Sistema de audio Bose HD AM/FM con 12 bocinas',
          'Bluetooth manos libres',
          'CarPlay y Android Auto (inalámbrico en 2.5)',
          'Cargador inalámbrico',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Asistencias y seguridad avanzada',
        description:
          'Paquete de asistencias con LDWS, BSM, SCBS y alerta de atención del conductor.',
        specs: [
          'LDWS (monitoreo de cambio de carril)',
          'BSM (monitores punto ciego)',
          'SCBS (frenado inteligente)',
          'HBC (control de luces de carretera)',
          'Alerta de atención de conductor',
          '7 bolsas de aire (incluye rodilla piloto)',
        ],
      },
      {
        icon: 'confort',
        title: 'Confort premium',
        description:
          'Interior con acabados premium, asientos eléctricos y climatización dual con salida trasera.',
        specs: [
          'A/C dual independiente con salida trasera',
          'Asientos eléctricos de piloto y copiloto',
          'Tapicería de cuero de fábrica',
          'Ajuste lumbar eléctrico (piloto)',
          'Vidrios eléctricos automáticos (4)',
          'Display de conducción activa (ADD)',
        ],
      },
      {
        icon: 'diseño',
        title: 'Exterior e iluminación',
        description:
          'Iluminación LED adaptativa, DRL y detalles exteriores completos.',
        specs: [
          'Faros LED con sistema adaptativo',
          'Luces de conducción diurna (DRL)',
          'Luces con encendido automático',
          'Limpiabrisas con sensor de lluvia',
          'Spoiler trasero del color del carro',
          'Dos escapes de salida',
          'Aros aluminio R20 • 235/50',
        ],
      },
    ],
    specifications: [
      {
        title: 'Motor y Transmisión',
        icon: 'motor',
        items: [
          '2.5 SKYACTIV-G: 188 H.P. • 250 Nm • 2500 C.C.',
          '3.3 MHEV: 284 H.P. • 450 Nm • 3300 C.C.',
          'Caja automática SKYACTIV-DRIVE 8 vel',
          'Transmisión AWD con botón Off Road',
          'Sistema i-STOP',
        ],
      },
      {
        title: 'Seguridad y Control',
        icon: 'seguridad',
        items: [
          'Frenos de disco en las 4 ruedas con ABS',
          'EBD y BA',
          'TCS (control de tracción)',
          'LDWS (monitoreo de cambio de carril)',
          'BSM (punto ciego)',
          'SCBS (frenado inteligente)',
          'KPC (control cinemático de posición)',
          '7 bolsas de aire (incluye rodilla piloto)',
        ],
      },
      {
        title: 'Conectividad y Tecnología',
        icon: 'tecnología',
        items: [
          'Pantalla de 12"',
          'Audio Bose HD con 12 bocinas',
          'Bluetooth manos libres',
          'CarPlay/Android de fábrica (inalámbrico en 2.5)',
          'Display de conducción activa (ADD)',
          'Cargador inalámbrico',
        ],
      },
      {
        title: 'Interior y Confort',
        icon: 'interior',
        items: [
          'A/C dual independiente con salida trasera',
          'Asientos eléctricos piloto y copiloto',
          'Tapicería de cuero de fábrica',
          'Ajuste lumbar eléctrico (piloto)',
          'Asiento trasero reclinable (2 posiciones)',
          'Asientos traseros 40/20/40 a nivel piso',
          'Baúl de 477 litros',
        ],
      },
      {
        title: 'Exterior e Iluminación',
        icon: 'exterior',
        items: [
          'Faros LED con sistema adaptativo',
          'DRL y encendido automático',
          'Limpiabrisas con sensor de lluvia',
          'Retrovisores con plegado eléctrico automático',
          'Aros de aluminio R20 • 235/50',
          'Spoiler trasero del color del carro',
          'Dos escapes de salida',
        ],
      },
    ],
    variants: {
      '2.5 AT 4X4': {
        highlight: '2.5 (188 H.P.) • AWD • AT 8 vel • CarPlay inalámbrico',
      },
      'Hybrid AT': {
        highlight: '3.3 MHEV (284 H.P.) • AWD • 450 Nm • AT 8 vel',
      },
    },
    closingCTA: 'Agenda tu test drive y elige tu Mazda CX-60 2.5 o MHEV.',
  },
  'cx-90': {
    heroTitle: 'Mazda CX-90',
    tagline: '3.3 MHEV • AWD',
    heroDescription:
      'Mazda CX-90 con motor MHEV 3.3 (3300 C.C., 345 H.P.) y tracción AWD. Transmisión automática SKYACTIV-DRIVE de 8 velocidades, frenos ABS/EBD/BA, TCS, i-STOP y asistencias avanzadas como LDWS, BSM, SCBS y KPC. Interior con 6 asientos, pantalla de 12", audio Bose y CarPlay/Android (inalámbrico) según ficha.',
    gallery: [
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
      '/carImages/placeholders/vehicle-placeholder.svg',
    ],
    quickSpecs: [
      { value: '345 H.P.', label: 'Potencia' },
      { value: '500 Nm', label: 'Torque' },
      { value: 'AWD', label: 'Tracción' },
      { value: '6 asientos', label: 'Capacidad' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Motor 3.3 MHEV de alto desempeño',
        description:
          'Motor mild hybrid 3.3 con 345 H.P. y 500 Nm para un desempeño premium.',
        specs: [
          '3.3 MHEV • 3300 C.C.',
          '345 H.P. (5,000–6,000 rpm)',
          '500 Nm (2,000–4,500 rpm)',
          '6 cilindros • DOHC • 24 válvulas',
          'Sistema i-STOP',
        ],
      },
      {
        icon: 'potencia',
        title: 'AWD y transmisión 8 vel',
        description:
          'Tracción AWD con botón Off Road y transmisión automática SKYACTIV-DRIVE de 8 velocidades.',
        specs: [
          'Transmisión automática 8 vel SKYACTIV-DRIVE',
          'AWD con botón Off Road',
          'Paddle shifts',
          'Botón para manejo de alta potencia',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Seguridad y asistencias',
        description:
          'Paquete completo de seguridad con frenado inteligente, monitoreo de carril y punto ciego.',
        specs: [
          'Frenos ABS, EBD y BA',
          'TCS (control de tracción)',
          'LDWS (monitoreo cambio de carril)',
          'BSM (punto ciego)',
          'SCBS (frenado inteligente)',
          'KPC (control cinemático de posición)',
          'HBC (control de luces de carretera)',
          '7 bolsas de aire (incluye rodilla piloto)',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Pantalla 12” y Bose',
        description:
          'Pantalla de 12" con audio Bose HD y conectividad avanzada.',
        specs: [
          'Pantalla de 12"',
          'Audio Bose HD AM/FM con 12 bocinas',
          'Bluetooth manos libres',
          'CarPlay/Android de fábrica (inalámbrico)',
          'Display de conducción activa (ADD)',
          'Cargador inalámbrico',
        ],
      },
      {
        icon: 'confort',
        title: 'Confort premium para 6',
        description:
          'Interior de lujo con 6 asientos, cuero, climatización y acabados premium.',
        specs: [
          'Capacidad de 6 asientos',
          'A/C dual independiente con salida trasera',
          'Tapicería de cuero de fábrica',
          'Asientos eléctricos piloto y copiloto',
          'Consola central con portavasos y apoyabrazos (1a y 2a fila)',
        ],
      },
      {
        icon: 'diseño',
        title: 'Exterior e iluminación premium',
        description:
          'Iluminación LED adaptativa, DRL y detalles exteriores con apertura automática de baúl.',
        specs: [
          'Faros LED con sistema adaptativo',
          'DRL y encendido automático',
          'Aros aluminio 275/45R21',
          'Barras de techo cromadas',
          'Puerta de baúl con apertura automática (sensor de pie)',
          'Spoiler trasero del color del carro',
          'Dos escapes de salida',
        ],
      },
    ],
    specifications: [
      {
        title: 'Motor y Transmisión',
        icon: 'motor',
        items: [
          'Motor 3.3 MHEV: 3300 C.C. • 345 H.P. • 500 Nm',
          '6 cilindros • DOHC • 24 válvulas',
          'Transmisión automática SKYACTIV-DRIVE 8 vel',
          'AWD con botón Off Road',
          'Sistema i-STOP',
        ],
      },
      {
        title: 'Seguridad y Control',
        icon: 'seguridad',
        items: [
          'Frenos de disco en las 4 ruedas con ABS',
          'EBD y BA',
          'TCS (control de tracción)',
          'LDWS (monitoreo cambio de carril)',
          'BSM (punto ciego)',
          'SCBS (frenado inteligente)',
          'KPC (control cinemático de posición)',
          'HBC (control de luces de carretera)',
          '7 bolsas de aire (incluye rodilla piloto)',
        ],
      },
      {
        title: 'Conectividad y Tecnología',
        icon: 'tecnología',
        items: [
          'Pantalla de 12"',
          'Audio Bose HD con 12 bocinas',
          'Bluetooth manos libres',
          'CarPlay/Android de fábrica (inalámbrico)',
          'Display de conducción activa (ADD)',
          'Cargador inalámbrico',
        ],
      },
      {
        title: 'Interior y Confort',
        icon: 'interior',
        items: [
          'Capacidad de 6 asientos',
          'A/C dual independiente con salida trasera',
          'Tapicería de cuero de fábrica',
          'Asientos eléctricos piloto y copiloto',
          'Ajuste lumbar eléctrico (piloto)',
          'Asientos traseros reclinables',
          'Vidrios eléctricos automáticos (4)',
        ],
      },
      {
        title: 'Exterior e Iluminación',
        icon: 'exterior',
        items: [
          'Aros aluminio 275/45R21',
          'Faros LED con sistema adaptativo',
          'DRL y encendido automático',
          'Barras de techo cromadas',
          'Puerta de baúl con apertura automática (sensor de pie)',
          'Spoiler trasero del color del carro',
          'Dos escapes de salida',
        ],
      },
    ],
    variants: {
      'Gasolina': {
        highlight: '3.3 MHEV (345 H.P.) • AWD • 6 asientos • Bose 12 bocinas',
      },
      'Hybrid': {
        highlight: '3.3 MHEV (345 H.P.) • AWD • 6 asientos • Bose 12 bocinas',
      },
    },
    closingCTA: 'Agenda tu test drive y vive el desempeño premium del Mazda CX-90.',
  },
  'bt-50': {
    heroTitle: 'Mazda BT-50',
    tagline: 'Turbodiésel 1.9 / 3.0 • 4x4',
    heroDescription:
      'Pickup 4x4 con motor turbodiésel 1.9 (1898 C.C., 150 HP, 350 Nm) o 3.0 (3000 C.C., 190 HP, 450 Nm). Transmisión mecánica de 6 velocidades o automática (según versión), con frenos ABS y EBD, y equipamiento que varía desde cabina sencilla de trabajo hasta versiones Full / Full Plus con mayor confort.',
    gallery: [
      '/carImages/Mazda copy/BT-50/Motor 1.9 o 3.0.png',
      '/carImages/Mazda copy/BT-50/Opción de tracción 4x4.png',
      '/carImages/Mazda copy/BT-50/Caja mecánica de 6 velocidades.png',
      '/carImages/Mazda copy/BT-50/Aire acondicionado y controles esenciales.png',
      '/carImages/Mazda copy/BT-50/Interior funcional y bien distribuido.png',
      '/carImages/Mazda copy/BT-50/Doble cabina para trabajo y traslado.png',
      '/carImages/Mazda copy/BT-50/Cabina sencilla, para mayor carga.png',
      '/carImages/Mazda copy/BT-50/Más equipamiento en la versión Full.png',
      '/carImages/Mazda copy/BT-50/Maletero amplio y estructura reforzada.png',
    ],
    quickSpecs: [
      { value: '150 / 190 Hp', label: 'Potencia' },
      { value: '350 / 450 Nm', label: 'Torque' },
      { value: '4x4', label: 'Tracción' },
      { value: 'MT / AT', label: 'Transmisión' },
    ],
    features: [
      {
        icon: 'motor',
        title: 'Motores turbodiésel 1.9 / 3.0',
        description:
          'Dos opciones de motor turbodiésel con riel común e intercooler: 1.9 de 150 HP y 350 Nm, y 3.0 de 190 HP y 450 Nm.',
        specs: [
          '1.9: 1898 C.C. • 150 HP • 350 Nm (1800–2600 rpm)',
          '3.0: 3000 C.C. • 190 HP • 450 Nm (1600–2600 rpm)',
          '4 cilindros en línea, 16 válvulas (según ficha)',
          'Turbo alimentado, intercooler, riel común',
        ],
      },
      {
        icon: 'potencia',
        title: 'Tracción 4x4 y control',
        description:
          'Tracción 4x4 para trabajo y camino, con asistencia de arranque en pendiente y control de descenso (según versión).',
        specs: [
          'Tracción 4x4 (según ficha)',
          'Asistencia de arranque en pendiente (HLA) (según versión)',
          'Control de descenso en pendientes (según versión)',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Transmisión MT / AT',
        description:
          'Versiones con caja mecánica de 6 velocidades o automática (según versión), pensadas para ciudad y carga.',
        specs: [
          'Caja mecánica de 6 velocidades (según versión)',
          'Caja automática 6 vel (1.9 AT, según ficha)',
          'Automático en versiones 3.0 AT (según ficha)',
        ],
      },
      {
        icon: 'confort',
        title: 'Confort práctico',
        description:
          'Desde A/C manual de control simple hasta aire acondicionado automático con ventilación trasera (según versión).',
        specs: [
          'A/C manual (según versión)',
          'A/C automático con ventilación trasera (según versión)',
          'Asiento conductor eléctrico 8 posiciones (según versión)',
          'Vidrios eléctricos (según versión)',
          'Retrovisores plegables eléctricos automáticos (según versión)',
        ],
      },
      {
        icon: 'tecnología',
        title: 'Conectividad (según versión)',
        description:
          'Desde radio básico hasta pantalla touch de 7" o display de 9" con CarPlay/Android (según versión).',
        specs: [
          'Radio 2 bocinas (según versión)',
          'Radio 4/6/8 bocinas (según versión)',
          'Pantalla touch 7" (según versión)',
          'Display de sonido 9" (según versión)',
          'Sistema CarPlay y Android de fábrica (según versión)',
          'Cámara de retroceso (según versión)',
        ],
      },
      {
        icon: 'seguridad',
        title: 'Seguridad (según versión)',
        description:
          'Paquete de seguridad que incluye frenos ABS y EBD, y bolsas de aire que varían por versión.',
        specs: [
          'Frenos ABS (según ficha)',
          'EBD (según ficha)',
          'Bolsas de aire frontales (según versión)',
          '7 bolsas de aire (Full Plus 3.0, según ficha)',
          'Sensores de parqueo (según versión)',
        ],
      },
    ],
    specifications: [
      {
        title: 'Motor y Transmisión',
        icon: 'motor',
        items: [
          'Turbodiésel 1.9: 1898 C.C. • 150 HP • 350 Nm (1800–2600 rpm)',
          'Turbodiésel 3.0: 3000 C.C. • 190 HP • 450 Nm (1600–2600 rpm)',
          'Turbo alimentado, intercooler, riel común (según ficha)',
          'Transmisión MT 6 vel (según versión)',
          'Caja automática 6 vel (1.9 AT, según ficha)',
          'Automático 3.0 AT (según ficha)',
          'Tracción 4x4 (según ficha)',
        ],
      },
      {
        title: 'Frenos y Control',
        icon: 'seguridad',
        items: [
          'ABS (según ficha)',
          'EBD (según ficha)',
          'Control de descenso en pendientes (según versión)',
          'Asistencia de arranque en pendiente (HLA) (según versión)',
        ],
      },
      {
        title: 'Dimensiones (según versión)',
        icon: 'exterior',
        items: [
          'Cabina sencilla: Largo 5,320 mm • Ancho 1,810 mm • Alto 1,765 mm',
          'Freestyle: Largo 5,280 mm • Ancho 1,870 mm • Alto 1,785 mm',
          'DC MT: Largo 5,280 mm • Ancho 1,870 mm • Alto 1,790 mm',
          '1.9 AT: Largo 5,280 mm • Ancho 1,870 mm • Alto 1,790 mm',
          '3.0 AT Full: Largo 5,280 mm • Ancho 1,810 mm (según ficha)',
          '3.0 AT Full Plus: Largo 5,280 mm • Ancho 1,870 mm • Alto 1,790 mm',
          'Aros: 16C hierro (Cabina sencilla) • 17” hierro/aluminio • 18” aluminio (según versión)',
        ],
      },
      {
        title: 'Interior y Confort (según versión)',
        icon: 'interior',
        items: [
          'A/C manual',
          'A/C automático con ventilación trasera',
          'Asientos de tela / asientos de cuero (según versión)',
          'Asiento conductor eléctrico 8 posiciones (según versión)',
          'Retrovisores plegables eléctricos automáticos (según versión)',
        ],
      },
      {
        title: 'Conectividad (según versión)',
        icon: 'tecnología',
        items: [
          'Pantalla touch 7"',
          'Display de sonido 9"',
          'CarPlay y Android de fábrica',
          'Cámara de retroceso',
          'Radio con 2 / 4 / 6 / 8 bocinas',
        ],
      },
      {
        title: 'Seguridad (según versión)',
        icon: 'seguridad',
        items: [
          'Bolsas de aire frontales (según versión)',
          '7 bolsas de aire (Full Plus 3.0)',
          'Sensores de parqueo delanteros y traseros (según versión)',
          'Faros LED y neblineras (según versión)',
        ],
      },
    ],
    variants: {
      'Cabina Sencilla': {
        highlight: '1.9 (150 HP) • MT 6 vel • 4x4 • Aros hierro 16C',
      },
      Freestyle: {
        highlight: '1.9 (150 HP) • MT 6 vel • ABS/EBD • 4 bocinas + CarPlay',
      },
      'DC MT': {
        highlight: '1.9 (150 HP) • MT 6 vel • ABS/EBD • Aros hierro 17”',
      },
      'MT Aros de Hierro': {
        highlight: '1.9 (150 HP) • MT 6 vel • Pantalla touch 7” + CarPlay',
      },
      'MT Full 3.0': {
        highlight: '3.0 (190 HP) • 450 Nm • A/C automático • 8 bocinas',
      },
      '1.9 AT Aros Aluminio 2025': {
        highlight: '1.9 (150 HP) • AT 6 vel • 4 bocinas • Pantalla 7” + CarPlay',
      },
      'AT Full 3.0 DC 2025': {
        highlight: '3.0 (190 HP) • AT • 6 bocinas • Display 9”',
      },
      'AT Full Plus 3.0 DC 2025': {
        highlight: '3.0 (190 HP) • AT • Cuero • 7 bolsas de aire',
      },
    },
    closingCTA: 'Agenda tu test drive y elige la versión BT-50 ideal para tu trabajo y tu día a día.',
  },
};
