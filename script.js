// ================================================
// AfterWoW Database — Script Principal
// ================================================

// === BASE DE DATOS DE ITEMS ===
const items = [
  // ARMAS LEGENDARIAS
  {
    id: 1,
    nombre: "Fyr'alath el Lacerasueños",
    nivel: 489,
    tipo: "Arma a dos manos",
    subtipo: "Hacha",
    categoria: "armas",
    calidad: "legendary",
    icono: "🪓",
    fuente: "Fyrakk - Amirdrassil",
    binding: "Se liga al recoger",
    stats: {
      daño: "1,234 - 2,345",
      velocidad: "3.60",
      fuerza: "+1,234",
      aguante: "+567",
      celeridad: "+345",
      maestria: "+289"
    },
    efecto: {
      nombre: "Marca de Fyr'alath",
      descripcion: "Tus ataques tienen probabilidad de marcar al objetivo, infligiendo 12,345 de daño de Fuego adicional durante 10 seg."
    },
    flavor: "Las llamas del Sueño arden eternamente.",
    expansion: "Dragonflight",
    patch: "10.2",
    loot: [
      { fuente: "Fyrakk (Normal)", chance: "12%", modo: "Normal" },
      { fuente: "Fyrakk (Heroico)", chance: "8%", modo: "Heroico" },
      { fuente: "Fyrakk (Mítico)", chance: "5%", modo: "Mítico" }
    ],
    relacionados: [2, 3, 4],
    comentarios: [
      { id: 1, usuario: "DragonSlayer", fecha: "Hace 2 días", texto: "El mejor arma de la expansión. El proc de fuego es brutal en AoE.", votos: 12 },
      { id: 2, usuario: "TankMaster", fecha: "Hace 5 días", texto: "Se dropea del último boss de Amirdrassil en cualquier dificultad.", votos: 8 }
    ]
  },
  {
    id: 2,
    nombre: "Atiesh, Gran Bastón del Guardián",
    nivel: 130,
    tipo: "Bastón",
    subtipo: "Bastón",
    categoria: "armas",
    calidad: "legendary",
    icono: "🔮",
    fuente: "Naxxramas (Classic)",
    binding: "Se liga al recoger",
    stats: {
      daño: "145 - 248",
      velocidad: "3.00",
      intelecto: "+150",
      aguante: "+120",
      golpeCritico: "+85",
      espiritu: "+95"
    },
    efecto: {
      nombre: "Poder del Guardián",
      descripcion: "Aumenta el poder con hechizos en 120 y permite abrir un portal a Karazhan."
    },
    flavor: "Portado por los Guardianes más poderosos de Azeroth.",
    expansion: "Classic",
    patch: "1.11",
    loot: [
      { fuente: "Kel'Thuzad - Naxxramas", chance: "Fragmentos", modo: "40 jugadores" }
    ],
    relacionados: [3, 5],
    comentarios: [
      { id: 1, usuario: "ClassicFan", fecha: "Hace 1 mes", texto: "Uno de los items más difíciles de conseguir en la historia de WoW.", votos: 25 }
    ]
  },
  {
    id: 3,
    nombre: "Sulfuras, Mano de Ragnaros",
    nivel: 80,
    tipo: "Arma a dos manos",
    subtipo: "Maza",
    categoria: "armas",
    calidad: "legendary",
    icono: "🔨",
    fuente: "Ragnaros - Núcleo de Magma",
    binding: "Se liga al recoger",
    stats: {
      daño: "223 - 372",
      velocidad: "3.70",
      fuerza: "+12",
      aguante: "+15",
      golpeCritico: "+8"
    },
    efecto: {
      nombre: "Llamas de Sulfuras",
      descripcion: "Lanza una bola de fuego que inflige daño de Fuego a todos los enemigos en un área."
    },
    flavor: "Forjada en las profundidades del Núcleo de Magma.",
    expansion: "Classic",
    patch: "1.0",
    loot: [
      { fuente: "Ragnaros - Núcleo de Magma", chance: "3%", modo: "40 jugadores" }
    ],
    relacionados: [2, 4],
    comentarios: [
      { id: 1, usuario: "VeteranPlayer", fecha: "Hace 2 meses", texto: "El legendario original. Muchos recuerdos farmeando Ragnaros.", votos: 45 }
    ]
  },
  {
    id: 4,
    nombre: "Warglaives de Azzinoth",
    nivel: 156,
    tipo: "Arma a una mano",
    subtipo: "Espada",
    categoria: "armas",
    calidad: "legendary",
    icono: "⚔️",
    fuente: "Illidan - Templo Oscuro",
    binding: "Se liga al recoger",
    stats: {
      daño: "214 - 398",
      velocidad: "2.80",
      agilidad: "+200",
      aguante: "+120",
      celeridad: "+85",
      golpeCritico: "+95"
    },
    efecto: {
      nombre: "Furia de Azzinoth",
      descripcion: "Tus ataques tienen probabilidad de invocar una Llama de Azzinoth que lucha a tu lado durante 10 seg."
    },
    flavor: "No estabais preparados.",
    expansion: "The Burning Crusade",
    patch: "2.1",
    loot: [
      { fuente: "Illidan - Templo Oscuro", chance: "4%", modo: "25 jugadores" }
    ],
    relacionados: [3, 5],
    comentarios: [
      { id: 1, usuario: "DemonHunter", fecha: "Hace 3 meses", texto: "Las armas más icónicas de WoW. Illidan es el mejor villano.", votos: 67 }
    ]
  },
  {
    id: 5,
    nombre: "Valanyr, Martillo de los Reyes Ancestrales",
    nivel: 245,
    tipo: "Arma a una mano",
    subtipo: "Maza",
    categoria: "armas",
    calidad: "legendary",
    icono: "🔨",
    fuente: "Ulduar",
    binding: "Se liga al recoger",
    stats: {
      daño: "178 - 330",
      velocidad: "2.50",
      intelecto: "+340",
      aguante: "+280",
      golpeCritico: "+150",
      celeridad: "+120"
    },
    efecto: {
      nombre: "Bendición de los Ancestrales",
      descripcion: "Tu sanación tiene probabilidad de crear un escudo protector que absorbe daño."
    },
    flavor: "Forjada por los titanes en la fragua de Ulduar.",
    expansion: "Wrath of the Lich King",
    patch: "3.1",
    loot: [
      { fuente: "Algalon - Ulduar", chance: "Fragmentos", modo: "25 jugadores" }
    ],
    relacionados: [2, 3],
    comentarios: [
      { id: 1, usuario: "HolyPala", fecha: "Hace 1 mes", texto: "El mejor arma de healer que ha existido.", votos: 33 }
    ]
  },
  {
    id: 6,
    nombre: "Espada de Quel'delar",
    nivel: 251,
    tipo: "Espada a una mano",
    subtipo: "Espada",
    categoria: "armas",
    calidad: "epic",
    icono: "⚔️",
    fuente: "Cadena de misiones",
    binding: "Se liga al recoger",
    stats: {
      daño: "190 - 354",
      velocidad: "2.60",
      fuerza: "+280",
      aguante: "+220",
      golpeCritico: "+120",
      celeridad: "+100"
    },
    efecto: {
      nombre: "Filo de los Quel'dorei",
      descripcion: "Aumenta tu probabilidad de golpe crítico contra no-muertos en un 5%."
    },
    flavor: "Una reliquia de los Altos Elfos restaurada a su gloria.",
    expansion: "Wrath of the Lich King",
    patch: "3.3",
    loot: [
      { fuente: "Cadena de misiones ICC", chance: "100%", modo: "Quest" }
    ],
    relacionados: [4, 5],
    comentarios: [
      { id: 1, usuario: "LoreExpert", fecha: "Hace 2 semanas", texto: "La cadena de misiones para obtenerla es épica.", votos: 18 }
    ]
  },
  {
    id: 7,
    nombre: "Nasz'uro la Llama Inquebrantable",
    nivel: 457,
    tipo: "Arma principal",
    subtipo: "Puño",
    categoria: "armas",
    calidad: "epic",
    icono: "🔥",
    fuente: "Scalecommander Sarkareth - Aberrus",
    binding: "Se liga al recoger",
    stats: {
      daño: "980 - 1,820",
      velocidad: "2.60",
      intelecto: "+890",
      aguante: "+670",
      celeridad: "+345",
      maestria: "+280"
    },
    efecto: {
      nombre: "Llama de Nasz'uro",
      descripcion: "Tus hechizos tienen probabilidad de invocar un draco aliado que ataca a tu objetivo."
    },
    flavor: "El fuego de los Aspectos nunca se extingue.",
    expansion: "Dragonflight",
    patch: "10.1",
    loot: [
      { fuente: "Sarkareth (Mítico)", chance: "100%", modo: "Mítico" }
    ],
    relacionados: [1, 6],
    comentarios: [
      { id: 1, usuario: "Evoker_Main", fecha: "Hace 1 semana", texto: "Muy buena para Evoker y casters en general.", votos: 9 }
    ]
  },
  {
    id: 8,
    nombre: "Capa de Ensueño Ardiente",
    nivel: 483,
    tipo: "Espalda",
    subtipo: "Capa",
    categoria: "armadura",
    calidad: "epic",
    icono: "🧥",
    fuente: "Fyrakk - Amirdrassil",
    binding: "Se liga al recoger",
    stats: {
      armadura: "450",
      agilidad: "+890",
      aguante: "+670",
      celeridad: "+320",
      versatilidad: "+280"
    },
    efecto: {
      nombre: "Protección del Sueño",
      descripcion: "Reduce el daño de Fuego recibido en un 5%."
    },
    flavor: "Tejida con los hilos del Sueño Esmeralda.",
    expansion: "Dragonflight",
    patch: "10.2",
    loot: [
      { fuente: "Fyrakk - Amirdrassil", chance: "15%", modo: "Normal/Heroico/Mítico" }
    ],
    relacionados: [9, 10],
    comentarios: [
      { id: 1, usuario: "RaidLeader", fecha: "Hace 3 días", texto: "Best in slot para casi todas las clases de agilidad.", votos: 22 }
    ]
  },
  {
    id: 9,
    nombre: "Yelmo de Dominio del Comandante",
    nivel: 476,
    tipo: "Cabeza",
    subtipo: "Placas",
    categoria: "armadura",
    calidad: "epic",
    icono: "⛑️",
    fuente: "Tindral - Amirdrassil",
    binding: "Se liga al recoger",
    stats: {
      armadura: "1,890",
      fuerza: "+1,120",
      aguante: "+890",
      golpeCritico: "+420",
      maestria: "+380"
    },
    efecto: {
      nombre: "Voluntad del Comandante",
      descripcion: "Aumenta el daño infligido a objetivos por encima del 80% de vida en un 3%."
    },
    flavor: "Solo los más valientes merecen portar este yelmo.",
    expansion: "Dragonflight",
    patch: "10.2",
    loot: [
      { fuente: "Tindral - Amirdrassil", chance: "18%", modo: "Normal/Heroico/Mítico" }
    ],
    relacionados: [8, 10, 11],
    comentarios: [
      { id: 1, usuario: "WarriorMain", fecha: "Hace 1 semana", texto: "Excelente pieza de tier para Warriors y Paladins.", votos: 14 }
    ]
  },
  {
    id: 10,
    nombre: "Pechera del Vacío Primordial",
    nivel: 470,
    tipo: "Pecho",
    subtipo: "Tela",
    categoria: "armadura",
    calidad: "epic",
    icono: "👘",
    fuente: "Nymue - Amirdrassil",
    binding: "Se liga al recoger",
    stats: {
      armadura: "650",
      intelecto: "+1,050",
      aguante: "+850",
      celeridad: "+400",
      golpeCritico: "+350"
    },
    efecto: {
      nombre: "Resonancia del Vacío",
      descripcion: "Tu daño con hechizos de Sombra tiene probabilidad de crear una zona de vacío que daña enemigos cercanos."
    },
    flavor: "Las sombras susurran secretos olvidados.",
    expansion: "Dragonflight",
    patch: "10.2",
    loot: [
      { fuente: "Nymue - Amirdrassil", chance: "16%", modo: "Normal/Heroico/Mítico" }
    ],
    relacionados: [8, 9, 11],
    comentarios: []
  },
  {
    id: 11,
    nombre: "Hombreras del Guardián de Ceniza",
    nivel: 463,
    tipo: "Hombros",
    subtipo: "Cuero",
    categoria: "armadura",
    calidad: "epic",
    icono: "🦺",
    fuente: "Volcoross - Amirdrassil",
    binding: "Se liga al recoger",
    stats: {
      armadura: "780",
      agilidad: "+920",
      aguante: "+750",
      versatilidad: "+380",
      maestria: "+340"
    },
    efecto: null,
    flavor: "Endurecidas por las llamas del Amirdrassil.",
    expansion: "Dragonflight",
    patch: "10.2",
    loot: [
      { fuente: "Volcoross - Amirdrassil", chance: "20%", modo: "Normal/Heroico/Mítico" }
    ],
    relacionados: [8, 9, 10],
    comentarios: []
  },
  {
    id: 12,
    nombre: "Anillo del Guardián Esmeralda",
    nivel: 476,
    tipo: "Anillo",
    subtipo: "Anillo",
    categoria: "accesorios",
    calidad: "epic",
    icono: "💍",
    fuente: "Nymue - Amirdrassil",
    binding: "Se liga al recoger",
    stats: {
      celeridad: "+520",
      maestria: "+480",
      aguante: "+340"
    },
    efecto: {
      nombre: "Vínculo Esmeralda",
      descripcion: "Aumenta tu velocidad de movimiento un 2% mientras estés en exteriores."
    },
    flavor: "El Sueño Esmeralda protege a los suyos.",
    expansion: "Dragonflight",
    patch: "10.2",
    loot: [
      { fuente: "Nymue - Amirdrassil", chance: "20%", modo: "Normal/Heroico/Mítico" }
    ],
    relacionados: [13, 14],
    comentarios: [
      { id: 1, usuario: "MinMaxer", fecha: "Hace 4 días", texto: "Los stats son perfectos para specs de celeridad y maestría.", votos: 7 }
    ]
  },
  {
    id: 13,
    nombre: "Collar de la Llama Eterna",
    nivel: 470,
    tipo: "Cuello",
    subtipo: "Collar",
    categoria: "accesorios",
    calidad: "epic",
    icono: "📿",
    fuente: "Smolderon - Amirdrassil",
    binding: "Se liga al recoger",
    stats: {
      golpeCritico: "+490",
      versatilidad: "+450",
      aguante: "+380"
    },
    efecto: {
      nombre: "Llama Interior",
      descripcion: "Tu golpe crítico tiene probabilidad de aumentar tu Intelecto en 500 durante 12 seg."
    },
    flavor: "El fuego interior nunca se apaga.",
    expansion: "Dragonflight",
    patch: "10.2",
    loot: [
      { fuente: "Smolderon - Amirdrassil", chance: "20%", modo: "Normal/Heroico/Mítico" }
    ],
    relacionados: [12, 14],
    comentarios: []
  },
  {
    id: 14,
    nombre: "Trinket del Sueño Distorsionado",
    nivel: 483,
    tipo: "Abalorio",
    subtipo: "Trinket",
    categoria: "accesorios",
    calidad: "epic",
    icono: "🔯",
    fuente: "Fyrakk - Amirdrassil",
    binding: "Se liga al recoger",
    stats: {
      intelecto: "+780"
    },
    efecto: {
      nombre: "Distorsión Onírica",
      descripcion: "Uso: Aumenta tu poder con hechizos en 3,450 durante 15 seg. 2 min de reutilización."
    },
    flavor: "La realidad se dobla ante el poder del Sueño.",
    expansion: "Dragonflight",
    patch: "10.2",
    loot: [
      { fuente: "Fyrakk - Amirdrassil", chance: "10%", modo: "Normal/Heroico/Mítico" }
    ],
    relacionados: [12, 13],
    comentarios: [
      { id: 1, usuario: "CasterDPS", fecha: "Hace 1 día", texto: "Mejor trinket para casters en Amirdrassil, sin duda.", votos: 19 }
    ]
  },
  {
    id: 15,
    nombre: "Matraz de la Sombra Titánica",
    nivel: 70,
    tipo: "Consumible",
    subtipo: "Matraz",
    categoria: "consumibles",
    calidad: "rare",
    icono: "🧪",
    fuente: "Alquimia",
    binding: "No se liga",
    stats: { efecto: "Stat principal +720" },
    efecto: {
      nombre: "Sombra Titánica",
      descripcion: "Aumenta tu estadística principal en 720 durante 1 hora. Persiste a través de la muerte."
    },
    flavor: "Destilada con esencia de titán.",
    expansion: "Dragonflight",
    patch: "10.0",
    loot: [{ fuente: "Alquimia (nivel 100)", chance: "Fabricación", modo: "Profesión" }],
    relacionados: [16, 17],
    comentarios: [
      { id: 1, usuario: "Raider", fecha: "Hace 1 día", texto: "Obligatorio para cualquier raid.", votos: 31 }
    ]
  },
  {
    id: 16,
    nombre: "Poción de Poder Elemental",
    nivel: 70,
    tipo: "Consumible",
    subtipo: "Poción",
    categoria: "consumibles",
    calidad: "rare",
    icono: "⚗️",
    fuente: "Alquimia",
    binding: "No se liga",
    stats: { efecto: "Intelecto +1,200 por 30seg" },
    efecto: {
      nombre: "Poder Elemental",
      descripcion: "Aumenta tu Intelecto en 1,200 durante 30 seg."
    },
    flavor: null,
    expansion: "Dragonflight",
    patch: "10.0",
    loot: [{ fuente: "Alquimia (nivel 75)", chance: "Fabricación", modo: "Profesión" }],
    relacionados: [15, 17],
    comentarios: []
  },
  {
    id: 17,
    nombre: "Banquete del Gran Kalecgos",
    nivel: 70,
    tipo: "Consumible",
    subtipo: "Comida",
    categoria: "consumibles",
    calidad: "uncommon",
    icono: "🍖",
    fuente: "Cocina",
    binding: "No se liga",
    stats: { efecto: "Stat secundaria +75" },
    efecto: {
      nombre: "Bien alimentado",
      descripcion: "Aumenta tu mejor estadística secundaria en 75 durante 1 hora."
    },
    flavor: "Preparado con las recetas ancestrales de los dragones.",
    expansion: "Dragonflight",
    patch: "10.0",
    loot: [{ fuente: "Cocina (nivel 100)", chance: "Fabricación", modo: "Profesión" }],
    relacionados: [15, 16],
    comentarios: []
  },
  {
    id: 18,
    nombre: "Gema Primordial de Celeridad",
    nivel: 70,
    tipo: "Gema",
    subtipo: "Gema",
    categoria: "gemas",
    calidad: "rare",
    icono: "💎",
    fuente: "Joyería",
    binding: "No se liga",
    stats: { celeridad: "+70" },
    efecto: null,
    flavor: null,
    expansion: "Dragonflight",
    patch: "10.0",
    loot: [{ fuente: "Joyería (nivel 80)", chance: "Fabricación", modo: "Profesión" }],
    relacionados: [],
    comentarios: []
  },
  {
    id: 19,
    nombre: "Riendas del Proto-draco Renovado",
    nivel: 1,
    tipo: "Montura",
    subtipo: "Montura voladora",
    categoria: "monturas",
    calidad: "epic",
    icono: "🐉",
    fuente: "Logro: Glory of the Dragonflight Hero",
    binding: "Se liga al recoger",
    stats: {},
    efecto: {
      nombre: "Montura voladora",
      descripcion: "Invoca un Proto-draco Renovado que te permite volar."
    },
    flavor: "Renacido de las cenizas del Dragonflight.",
    expansion: "Dragonflight",
    patch: "10.0",
    loot: [{ fuente: "Logro completado", chance: "100%", modo: "Logro" }],
    relacionados: [20],
    comentarios: [
      { id: 1, usuario: "MountCollector", fecha: "Hace 1 semana", texto: "Necesitas completar todos los logros de mazmorras heroicas de Dragonflight.", votos: 11 }
    ]
  },
  {
    id: 20,
    nombre: "Invencible",
    nivel: 1,
    tipo: "Montura",
    subtipo: "Montura voladora",
    categoria: "monturas",
    calidad: "legendary",
    icono: "🦄",
    fuente: "Arthas - Ciudadela de la Corona de Hielo",
    binding: "Se liga al recoger",
    stats: {},
    efecto: {
      nombre: "Montura voladora",
      descripcion: "Invoca a Invencible, el corcel espectral del Rey Exánime."
    },
    flavor: "En la vida, el fiel corcel de Arthas. En la muerte, su eterno sirviente.",
    expansion: "Wrath of the Lich King",
    patch: "3.3.5",
    loot: [{ fuente: "Arthas (Mítico 25)", chance: "1%", modo: "25 Heroico" }],
    relacionados: [19],
    comentarios: [
      { id: 1, usuario: "LootHunter", fecha: "Hace 2 meses", texto: "Drop rate de 1%. Llevo 500 intentos y nada.", votos: 89 },
      { id: 2, usuario: "LuckyOne", fecha: "Hace 1 mes", texto: "Me cayó en el primer intento, sorry not sorry 😂", votos: 156 }
    ]
  }
];

// === NPCS ===
const npcs = [
  {
    id: 101,
    nombre: "Fyrakk",
    nivel: 73,
    tipo: "Jefe de Raid",
    subtipo: "Jefe final",
    categoria: "jefes",
    calidad: "legendary",
    icono: "🐉",
    fuente: "Amirdrassil, el Sueño de la Esperanza",
    binding: null,
    stats: {
      vida: "891,234,567",
      daño: "45,000 - 78,000",
      armadura: "12,500"
    },
    efecto: {
      nombre: "Encuentro de 3 fases",
      descripcion: "Fyrakk intenta quemar Amirdrassil. Los jugadores deben defender el Árbol del Mundo mientras combaten al Proto-dragón corrupto."
    },
    flavor: "El más destructivo de los Proto-dragones primordiales.",
    expansion: "Dragonflight",
    patch: "10.2",
    loot: [
      { fuente: "Fyrakk (Normal)", chance: "Drop garantizado", modo: "Normal" },
      { fuente: "Fyrakk (Heroico)", chance: "Drop garantizado", modo: "Heroico" },
      { fuente: "Fyrakk (Mítico)", chance: "Drop garantizado", modo: "Mítico" }
    ],
    relacionados: [102, 103],
    comentarios: [
      { id: 1, usuario: "MythicRaider", fecha: "Hace 3 días", texto: "La fase 3 es brutal en mítico. Necesitas mucha coordinación.", votos: 28 }
    ]
  },
  {
    id: 102,
    nombre: "Raszageth la Tormenta Eterna",
    nivel: 72,
    tipo: "Jefe de Raid",
    subtipo: "Jefe final",
    categoria: "jefes",
    calidad: "epic",
    icono: "⚡",
    fuente: "Bóveda de las Encarnaciones",
    binding: null,
    stats: {
      vida: "645,000,000",
      daño: "35,000 - 62,000",
      armadura: "10,800"
    },
    efecto: {
      nombre: "Encuentro de 3 fases",
      descripcion: "Raszageth desata la tormenta sobre la Bóveda. Incluye fases con plataformas y transiciones aéreas."
    },
    flavor: "La primera de las Encarnaciones Primordiales en despertar.",
    expansion: "Dragonflight",
    patch: "10.0",
    loot: [
      { fuente: "Raszageth (Normal)", chance: "Drop garantizado", modo: "Normal" },
      { fuente: "Raszageth (Mítico)", chance: "Drop garantizado", modo: "Mítico" }
    ],
    relacionados: [101, 103],
    comentarios: []
  },
  {
    id: 103,
    nombre: "Arthas Menethil, El Rey Exánime",
    nivel: 83,
    tipo: "Jefe de Raid",
    subtipo: "Jefe final",
    categoria: "jefes",
    calidad: "legendary",
    icono: "💀",
    fuente: "Ciudadela de la Corona de Hielo",
    binding: null,
    stats: {
      vida: "103,151,168",
      daño: "25,000 - 45,000",
      armadura: "10,643"
    },
    efecto: {
      nombre: "Encuentro épico de múltiples fases",
      descripcion: "El encuentro más emblemático de WoW. Incluye la famosa mecánica donde Arthas mata a toda la raid y Tirion los resucita."
    },
    flavor: "Ya no hay nada de humano en mí. Solo soy... el Rey Exánime.",
    expansion: "Wrath of the Lich King",
    patch: "3.3",
    loot: [
      { fuente: "Arthas (25 Normal)", chance: "Drop garantizado", modo: "25 Normal" },
      { fuente: "Arthas (25 Heroico)", chance: "Drop garantizado", modo: "25 Heroico" }
    ],
    relacionados: [101, 102],
    comentarios: [
      { id: 1, usuario: "WoWVeteran", fecha: "Hace 6 meses", texto: "El mejor encuentro de la historia de WoW. El cinemático final es increíble.", votos: 203 }
    ]
  }
];

// === QUESTS ===
const quests = [
  {
    id: 201,
    nombre: "El despertar del Sueño",
    nivel: 70,
    tipo: "Misión de historia",
    subtipo: "Historia",
    categoria: "quests",
    calidad: "epic",
    icono: "📜",
    fuente: "Amirdrassil",
    binding: null,
    stats: {
      experiencia: "25,000 XP",
      oro: "50g 00s",
      reputacion: "Guardianes del Sueño +500"
    },
    efecto: {
      nombre: "Recompensa",
      descripcion: "Completa la cadena de misiones principal del parche 10.2 y desbloquea acceso a Amirdrassil."
    },
    flavor: "El Sueño Esmeralda necesita héroes que lo defiendan.",
    expansion: "Dragonflight",
    patch: "10.2",
    loot: [],
    relacionados: [202],
    comentarios: []
  },
  {
    id: 202,
    nombre: "La Forja de Almas",
    nivel: 80,
    tipo: "Misión de mazmorra",
    subtipo: "Mazmorra",
    categoria: "quests",
    calidad: "rare",
    icono: "📋",
    fuente: "Ciudadela de la Corona de Hielo",
    binding: null,
    stats: {
      experiencia: "44,000 XP",
      oro: "22g 00s",
      reputacion: "Cruzada Argenta +350"
    },
    efecto: {
      nombre: "Recompensa",
      descripcion: "Inicia la cadena de misiones de las mazmorras de la Ciudadela de la Corona de Hielo."
    },
    flavor: "Las almas atrapadas claman por liberación.",
    expansion: "Wrath of the Lich King",
    patch: "3.3",
    loot: [],
    relacionados: [201],
    comentarios: []
  }
];

// === SPELLS ===
const spells = [
  {
    id: 301,
    nombre: "Golpe Heroico",
    nivel: 1,
    tipo: "Habilidad de Guerrero",
    subtipo: "Habilidad",
    categoria: "spells",
    calidad: "common",
    icono: "⚔️",
    fuente: "Guerrero - Nivel 1",
    binding: null,
    stats: {
      coste: "30 Furia",
      alcance: "Cuerpo a cuerpo",
      lanzamiento: "Instantáneo",
      reutilizacion: "Sin cooldown"
    },
    efecto: {
      nombre: "Golpe Heroico",
      descripcion: "Un poderoso golpe que inflige 150% del daño de arma como daño físico."
    },
    flavor: null,
    expansion: "Classic",
    patch: "1.0",
    loot: [],
    relacionados: [302, 303],
    comentarios: []
  },
  {
    id: 302,
    nombre: "Bola de Fuego",
    nivel: 1,
    tipo: "Habilidad de Mago",
    subtipo: "Habilidad",
    categoria: "spells",
    calidad: "common",
    icono: "🔥",
    fuente: "Mago - Nivel 1",
    binding: null,
    stats: {
      coste: "2% de Maná base",
      alcance: "40 metros",
      lanzamiento: "2.25 seg",
      reutilizacion: "Sin cooldown"
    },
    efecto: {
      nombre: "Bola de Fuego",
      descripcion: "Lanza una bola de fuego que inflige daño de Fuego y aplica un efecto de quemadura que inflige daño adicional durante 8 seg."
    },
    flavor: null,
    expansion: "Classic",
    patch: "1.0",
    loot: [],
    relacionados: [301, 303],
    comentarios: []
  },
  {
    id: 303,
    nombre: "Rejuvenecimiento",
    nivel: 1,
    tipo: "Habilidad de Druida",
    subtipo: "Habilidad",
    categoria: "spells",
    calidad: "common",
    icono: "🌿",
    fuente: "Druida - Nivel 1",
    binding: null,
    stats: {
      coste: "1.8% de Maná base",
      alcance: "40 metros",
      lanzamiento: "Instantáneo",
      reutilizacion: "Sin cooldown"
    },
    efecto: {
      nombre: "Rejuvenecimiento",
      descripcion: "Sana al objetivo durante 12 seg. Se puede acumular hasta 3 veces."
    },
    flavor: null,
    expansion: "Classic",
    patch: "1.0",
    loot: [],
    relacionados: [301, 302],
    comentarios: []
  }
];

// ================================================
// JUNTAR TODA LA BASE DE DATOS
// ================================================
const todosLosItems = [...items, ...npcs, ...quests, ...spells];

// ================================================
// ESTADO GLOBAL
// ================================================
let state = {
  filtroCalidad: 'all',
  categoriaActual: 'all',
  subcategoriaActual: null,
  paginaActual: 1,
  itemsPorPagina: 15,
  vistaActual: 'tabla',
  ordenActual: null,
  ordenDireccion: 'asc',
  filtroNivelMin: null,
  filtroNivelMax: null,
  filtroExpansion: 'all',
  listaActual: [],
  comentarioIdCounter: 1000
};

// ================================================
// FAVORITOS Y RECIENTES (localStorage)
// ================================================
function getFavoritos() {
  return JSON.parse(localStorage.getItem('awdb_favoritos')) || [];
}

function setFavoritos(favs) {
  localStorage.setItem('awdb_favoritos', JSON.stringify(favs));
}

function getRecientes() {
  return JSON.parse(localStorage.getItem('awdb_recientes')) || [];
}

function setRecientes(rec) {
  localStorage.setItem('awdb_recientes', JSON.stringify(rec));
}

function toggleFavorito(id) {
  let favs = getFavoritos();
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
    mostrarToast('Eliminado de favoritos', 'fa-star');
  } else {
    favs.unshift(id);
    favs = favs.slice(0, 50);
    mostrarToast('Añadido a favoritos ⭐', 'fa-star');
  }
  setFavoritos(favs);
  actualizarBtnFavorito(id);
}

function esFavorito(id) {
  return getFavoritos().includes(id);
}

function agregarReciente(id) {
  let rec = getRecientes();
  rec = rec.filter(r => r !== id);
  rec.unshift(id);
  rec = rec.slice(0, 8);
  setRecientes(rec);
}

function actualizarBtnFavorito(id) {
  const btn = document.getElementById('btnFavorito');
  if (!btn) return;
  if (esFavorito(id)) {
    btn.classList.add('favorited');
    btn.innerHTML = '<i class="fas fa-star"></i> Favorito';
  } else {
    btn.classList.remove('favorited');
    btn.innerHTML = '<i class="far fa-star"></i> Añadir a favoritos';
  }
}

// ================================================
// TOAST NOTIFICATION
// ================================================
function mostrarToast(mensaje, icono = 'fa-check') {
  const toast = document.getElementById('toast');
  toast.innerHTML = `<i class="fas ${icono}"></i> ${mensaje}`;
  toast.classList.add('show');
  toast.classList.remove('hide');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hide');
  }, 2500);
}

// ================================================
// TOOLTIP
// ================================================
const tooltip = document.getElementById('tooltip');

function mostrarTooltip(e, item) {
  if (!item) return;

  const statsHTML = Object.entries(item.stats || {})
    .slice(0, 4)
    .map(([k, v]) => `<div class="tt-stat">+${v} ${formatStatName(k)}</div>`)
    .join('');

  tooltip.className = `tooltip-wowhead tt-${item.calidad}`;
  tooltip.innerHTML = `
    <div class="tt-name ${item.calidad}">${item.icono} ${item.nombre}</div>
    ${item.nivel > 0 ? `<div class="tt-ilvl">Nivel de objeto ${item.nivel}</div>` : ''}
    ${item.binding ? `<div class="tt-binding">${item.binding}</div>` : ''}
    <div class="tt-type">
      <span>${item.tipo}</span>
      ${item.subtipo ? `<span>${item.subtipo}</span>` : ''}
    </div>
    ${statsHTML}
    ${item.efecto ? `<div class="tt-effect">✨ ${item.efecto.descripcion}</div>` : ''}
    ${item.flavor ? `<div class="tt-flavor">"${item.flavor}"</div>` : ''}
    <div class="tt-source"><i class="fas fa-map-marker-alt"></i> ${item.fuente}</div>
  `;
  tooltip.style.display = 'block';
  moverTooltip(e);
}

function moverTooltip(e) {
  const x = e.clientX + 15;
  const y = e.clientY + 15;
  const rect = tooltip.getBoundingClientRect();
  const maxX = window.innerWidth - rect.width - 10;
  const maxY = window.innerHeight - rect.height - 10;
  tooltip.style.left = Math.min(x, maxX) + 'px';
  tooltip.style.top = Math.min(y, maxY) + 'px';
}

function ocultarTooltip() {
  tooltip.style.display = 'none';
}

// ================================================
// INICIALIZACION
// ================================================
document.addEventListener('DOMContentLoaded', function () {
  inicializarContadores();
  inicializarBuscador();
  inicializarRecientes();
  mostrarItems(todosLosItems);
  manejarHash();
  console.log('%cAfterWoW Database cargado ✅', 'color:#e94560;font-size:16px;font-weight:bold;');
});

function inicializarContadores() {
  const total = todosLosItems.length;
  document.getElementById('totalItems').textContent = total;

  const countItems = items.length;
  const countNpcs = npcs.length;
  const countQuests = quests.length;
  const countSpells = spells.length;

  animarContador('countItems', countItems);
  animarContador('countNpcs', countNpcs);
  animarContador('countQuests', countQuests);
  animarContador('countSpells', countSpells);

  // Contadores en cards
  document.getElementById('cardCountArmas').textContent =
    todosLosItems.filter(i => i.categoria === 'armas').length;
  document.getElementById('cardCountArmadura').textContent =
    todosLosItems.filter(i => i.categoria === 'armadura').length;
  document.getElementById('cardCountAccesorios').textContent =
    todosLosItems.filter(i => i.categoria === 'accesorios').length;
  document.getElementById('cardCountConsumibles').textContent =
    todosLosItems.filter(i => i.categoria === 'consumibles').length;
  document.getElementById('cardCountNpcs').textContent =
    todosLosItems.filter(i => i.categoria === 'jefes').length;
  document.getElementById('cardCountQuests').textContent =
    todosLosItems.filter(i => i.categoria === 'quests').length;
  document.getElementById('cardCountSpells').textContent =
    todosLosItems.filter(i => i.categoria === 'spells').length;
  document.getElementById('cardCountMonturas').textContent =
    todosLosItems.filter(i => i.categoria === 'monturas').length;
}

function animarContador(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  let current = 0;
  const step = Math.ceil(target / 30);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, 40);
}

function inicializarRecientes() {
  const rec = getRecientes();
  const seccion = document.getElementById('recientesSeccion');
  const grid = document.getElementById('recientesGrid');

  if (rec.length === 0) {
    seccion.style.display = 'none';
    return;
  }

  seccion.style.display = 'block';
  grid.innerHTML = rec.map(id => {
    const item = todosLosItems.find(i => i.id === id);
    if (!item) return '';
    return `
      <div class="reciente-card" onclick="mostrarDetalle(${item.id})">
        <span class="rc-icon">${item.icono}</span>
        <div>
          <div class="rc-name ${item.calidad}">${item.nombre}</div>
          <div class="rc-level">iLvl ${item.nivel} · ${item.tipo}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ================================================
// BUSCADOR CON AUTOCOMPLETADO
// ================================================
function inicializarBuscador() {
  const searchInput = document.getElementById('search');
  const searchFilter = document.getElementById('searchFilter');
  const autocomplete = document.getElementById('autocompleteResults');

  searchInput.addEventListener('input', function () {
    const texto = this.value.toLowerCase().trim();

    if (texto.length < 2) {
      autocomplete.style.display = 'none';
      return;
    }

    const filtro = searchFilter.value;
    let resultados = todosLosItems.filter(item =>
      item.nombre.toLowerCase().includes(texto) ||
      String(item.id).includes(texto)
    );

    if (filtro !== 'all') {
      resultados = resultados.filter(i => i.categoria === filtro);
    }

    if (resultados.length === 0) {
      autocomplete.innerHTML = `
        <div class="autocomplete-item" style="color:#4a4a5e;">
          <div class="ac-icon">🔍</div>
          <div class="ac-info">
            <div class="ac-name">Sin resultados para "${texto}"</div>
          </div>
        </div>`;
      autocomplete.style.display = 'block';
      return;
    }

    // Agrupar por categoría
    const categorias = {};
    resultados.slice(0, 12).forEach(item => {
      if (!categorias[item.categoria]) categorias[item.categoria] = [];
      categorias[item.categoria].push(item);
    });

    const nombresCategoria = {
      armas: '⚔️ Armas',
      armadura: '🛡️ Armadura',
      accesorios: '💍 Accesorios',
      consumibles: '🧪 Consumibles',
      gemas: '💎 Gemas',
      jefes: '👹 Jefes',
      quests: '📜 Misiones',
      spells: '✨ Hechizos',
      monturas: '🐎 Monturas'
    };

    let html = '';
    Object.entries(categorias).forEach(([cat, items]) => {
      html += `<div class="autocomplete-category">${nombresCategoria[cat] || cat}</div>`;
      items.forEach(item => {
        html += `
          <div class="autocomplete-item" onclick="mostrarDetalle(${item.id})">
            <div class="ac-icon item-icon-small ${item.calidad}-border">${item.icono}</div>
            <div class="ac-info">
              <div class="ac-name ${item.calidad}">${resaltarTexto(item.nombre, texto)}</div>
              <div class="ac-meta">${item.tipo} · ${item.fuente}</div>
            </div>
            <div class="ac-level">iLvl ${item.nivel}</div>
          </div>
        `;
      });
    });

    if (resultados.length > 12) {
      html += `<div class="autocomplete-footer" onclick="buscarTodos('${texto}')">
        Ver todos los ${resultados.length} resultados →
      </div>`;
    }

    autocomplete.innerHTML = html;
    autocomplete.style.display = 'block';
  });

  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const texto = this.value.toLowerCase().trim();
      buscarTodos(texto);
      autocomplete.style.display = 'none';
    }
    if (e.key === 'Escape') {
      autocomplete.style.display = 'none';
    }
  });

  searchFilter.addEventListener('change', function () {
    searchInput.dispatchEvent(new Event('input'));
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.search-wrapper')) {
      autocomplete.style.display = 'none';
    }
  });
}

function resaltarTexto(texto, busqueda) {
  if (!busqueda) return texto;
  const regex = new RegExp(`(${busqueda})`, 'gi');
  return texto.replace(regex, '<mark style="background:#e94560;color:white;border-radius:2px;padding:0 2px;">$1</mark>');
}

function buscarTodos(texto) {
  const searchFilter = document.getElementById('searchFilter');
  const filtro = searchFilter.value;

  let resultado = todosLosItems.filter(item =>
    item.nombre.toLowerCase().includes(texto) ||
    String(item.id).includes(texto)
  );

  if (filtro !== 'all') {
    resultado = resultado.filter(item => item.categoria === filtro);
  }

  state.categoriaActual = filtro !== 'all' ? filtro : 'all';
  state.listaActual = resultado;
  state.paginaActual = 1;

  document.getElementById('tituloTabla').innerHTML =
    `<i class="fas fa-search"></i> Resultados para "${texto}"`;

  mostrarItems(resultado);
  mostrarPagina('inicio');
  actualizarBreadcrumbs([{ texto: `Búsqueda: "${texto}"` }]);
}

// ================================================
// MOSTRAR ITEMS EN TABLA
// ================================================
function mostrarItems(lista) {
  state.listaActual = lista;
  state.paginaActual = 1;

  renderizarVista();
}

function renderizarVista() {
  const lista = state.listaActual;
  const inicio = (state.paginaActual - 1) * state.itemsPorPagina;
  const fin = inicio + state.itemsPorPagina;
  const paginada = lista.slice(inicio, fin);

  actualizarContadorResultados(lista.length);

  if (state.vistaActual === 'tabla') {
    renderizarTabla(paginada);
  } else {
    renderizarGrid(paginada);
  }

  renderizarPaginacion(lista.length);
}

function renderizarTabla(lista) {
  const tbody = document.getElementById('tablaBody');

  if (lista.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6">
          <div class="empty-state">
            <i class="fas fa-search"></i>
            <h3>No se encontraron resultados</h3>
            <p>Intenta con otro término de búsqueda o cambia los filtros</p>
          </div>
        </td>
      </tr>`;
    return;
  }

  tbody.innerHTML = lista.map(item => `
    <tr onclick="mostrarDetalle(${item.id})"
        onmouseenter="mostrarTooltip(event, todosLosItems.find(i=>i.id===${item.id}))"
        onmousemove="moverTooltip(event)"
        onmouseleave="ocultarTooltip()">
      <td>
        <div class="item-icon-small ${item.calidad}-border">${item.icono}</div>
      </td>
      <td>
        <div class="item-name-cell">
          <span class="${item.calidad}">${item.nombre}</span>
          <span class="item-name-sub">${item.subtipo || ''}</span>
        </div>
      </td>
      <td style="color:#f59e0b;font-weight:600;">${item.nivel}</td>
      <td style="color:#94a3b8;">${item.tipo}</td>
      <td style="color:#64748b;">${item.fuente}</td>
      <td><span class="expansion-badge">${item.expansion || ''}</span></td>
    </tr>
  `).join('');
}

function renderizarGrid(lista) {
  const grid = document.getElementById('gridBody');

  if (lista.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1;">
        <i class="fas fa-search"></i>
        <h3>No se encontraron resultados</h3>
      </div>`;
    return;
  }

  grid.innerHTML = lista.map(item => `
    <div class="grid-item ${item.calidad}-border"
         onclick="mostrarDetalle(${item.id})"
         onmouseenter="mostrarTooltip(event, todosLosItems.find(i=>i.id===${item.id}))"
         onmousemove="moverTooltip(event)"
         onmouseleave="ocultarTooltip()">
      <div class="grid-item-icon ${item.calidad}-border">${item.icono}</div>
      <div class="grid-item-name ${item.calidad}">${item.nombre}</div>
      <div class="grid-item-meta">${item.tipo}</div>
      <div class="grid-item-level">iLvl ${item.nivel}</div>
    </div>
  `).join('');
}

function actualizarContadorResultados(total) {
  const el = document.getElementById('resultadoCount');
  if (el) el.textContent = `${total} resultado${total !== 1 ? 's' : ''}`;
}

// ================================================
// PAGINACION
// ================================================
function renderizarPaginacion(total) {
  const paginacion = document.getElementById('paginacion');
  const totalPaginas = Math.ceil(total / state.itemsPorPagina);

  if (totalPaginas <= 1) {
    paginacion.innerHTML = '';
    return;
  }

  const pagActual = state.paginaActual;
  let html = '';

  // Anterior
  html += `<button class="pag-btn ${pagActual === 1 ? 'disabled' : ''}"
    onclick="${pagActual > 1 ? `cambiarPagina(${pagActual - 1})` : ''}">
    <i class="fas fa-chevron-left"></i>
  </button>`;

  // Páginas
  const rango = [];
  for (let i = 1; i <= totalPaginas; i++) {
    if (i === 1 || i === totalPaginas || (i >= pagActual - 2 && i <= pagActual + 2)) {
      rango.push(i);
    } else if (rango[rango.length - 1] !== '...') {
      rango.push('...');
    }
  }

  rango.forEach(p => {
    if (p === '...') {
      html += `<span class="pag-info">...</span>`;
    } else {
      html += `<button class="pag-btn ${p === pagActual ? 'active' : ''}"
        onclick="cambiarPagina(${p})">${p}</button>`;
    }
  });

  // Siguiente
  html += `<button class="pag-btn ${pagActual === totalPaginas ? 'disabled' : ''}"
    onclick="${pagActual < totalPaginas ? `cambiarPagina(${pagActual + 1})` : ''}">
    <i class="fas fa-chevron-right"></i>
  </button>`;

  html += `<span class="pag-info">Página ${pagActual} de ${totalPaginas}</span>`;

  paginacion.innerHTML = html;
}

function cambiarPagina(pagina) {
  state.paginaActual = pagina;
  renderizarVista();
  window.scrollTo({ top: document.querySelector('.tabla-seccion').offsetTop - 80, behavior: 'smooth' });
}

// ================================================
// CAMBIAR VISTA (tabla/grid)
// ================================================
function cambiarVista(vista, btn) {
  state.vistaActual = vista;

  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const vistaTabla = document.getElementById('vistaTabla');
  const vistaGrid = document.getElementById('vistaGrid');

  if (vista === 'tabla') {
    vistaTabla.style.display = 'block';
    vistaGrid.style.display = 'none';
  } else {
    vistaTabla.style.display = 'none';
    vistaGrid.style.display = 'block';
  }

  renderizarVista();
}

// ================================================
// FILTROS
// ================================================
function filtrarCalidad(calidad, boton) {
  document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
  boton.classList.add('active');
  state.filtroCalidad = calidad;

  let lista = state.categoriaActual === 'all' ? todosLosItems :
    todosLosItems.filter(i => i.categoria === state.categoriaActual);

  if (state.subcategoriaActual) {
    lista = lista.filter(i => i.subtipo === state.subcategoriaActual);
  }

  if (calidad !== 'all') {
    lista = lista.filter(i => i.calidad === calidad);
  }

  lista = aplicarFiltrosNivel(lista);
  mostrarItems(lista);
}

function filtrarCategoria(categoria) {
  state.categoriaActual = categoria;
  state.subcategoriaActual = null;
  state.filtroCalidad = 'all';
  state.paginaActual = 1;

  document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
  const firstBtn = document.querySelector('.filtro-btn');
  if (firstBtn) firstBtn.classList.add('active');

  let lista = todosLosItems.filter(i => i.categoria === categoria);

  const titulos = {
    armas: '⚔️ Armas',
    armadura: '🛡️ Armadura',
    accesorios: '💍 Accesorios',
    consumibles: '🧪 Consumibles',
    gemas: '💎 Gemas',
    jefes: '👹 Jefes de Raid',
    quests: '📜 Misiones',
    spells: '✨ Hechizos',
    monturas: '🐎 Monturas'
  };

  const titulo = titulos[categoria] || '📦 Resultados';
  document.getElementById('tituloTabla').innerHTML = `<i class="fas fa-filter"></i> ${titulo}`;

  mostrarItems(lista);
  mostrarPagina('inicio');

  actualizarBreadcrumbs([{ texto: titulo, accion: `filtrarCategoria('${categoria}')` }]);

  window.scrollTo({
    top: document.querySelector('.tabla-seccion').offsetTop - 80,
    behavior: 'smooth'
  });
}

function filtrarSubcategoria(categoria, subtipo) {
  state.categoriaActual = categoria;
  state.subcategoriaActual = subtipo;
  state.paginaActual = 1;

  const lista = todosLosItems.filter(i =>
    i.categoria === categoria && i.subtipo === subtipo
  );

  document.getElementById('tituloTabla').innerHTML =
    `<i class="fas fa-filter"></i> ${subtipo}`;

  mostrarItems(lista);
  mostrarPagina('inicio');

  actualizarBreadcrumbs([
    { texto: categoria.charAt(0).toUpperCase() + categoria.slice(1), accion: `filtrarCategoria('${categoria}')` },
    { texto: subtipo }
  ]);

  window.scrollTo({
    top: document.querySelector('.tabla-seccion').offsetTop - 80,
    behavior: 'smooth'
  });
}

function filtrarClase(clase) {
  mostrarToast(`Clase ${clase} - Próximamente 🚧`, 'fa-hammer');
}

// ================================================
// FILTROS AVANZADOS
// ================================================
function aplicarFiltrosAvanzados() {
  const nivelMin = parseInt(document.getElementById('filtroNivelMin').value) || 0;
  const nivelMax = parseInt(document.getElementById('filtroNivelMax').value) || 9999;
  const expansion = document.getElementById('filtroExpansion').value;

  state.filtroNivelMin = nivelMin;
  state.filtroNivelMax = nivelMax;
  state.filtroExpansion = expansion;

  let lista = state.categoriaActual === 'all' ? todosLosItems :
    todosLosItems.filter(i => i.categoria === state.categoriaActual);

  lista = aplicarFiltrosNivel(lista);
  mostrarItems(lista);
}

function aplicarFiltrosNivel(lista) {
  const min = state.filtroNivelMin || 0;
  const max = state.filtroNivelMax || 9999;
  const exp = state.filtroExpansion;

  return lista.filter(i => {
    const nivelOk = i.nivel >= min && i.nivel <= max;
    const expOk = exp === 'all' || i.expansion === exp;
    return nivelOk && expOk;
  });
}

function resetFiltrosAvanzados() {
  document.getElementById('filtroNivelMin').value = '';
  document.getElementById('filtroNivelMax').value = '';
  document.getElementById('filtroExpansion').value = 'all';
  state.filtroNivelMin = null;
  state.filtroNivelMax = null;
  state.filtroExpansion = 'all';

  let lista = state.categoriaActual === 'all' ? todosLosItems :
    todosLosItems.filter(i => i.categoria === state.categoriaActual);

  mostrarItems(lista);
  mostrarToast('Filtros limpiados', 'fa-times');
}

// ================================================
// ORDENAR TABLA
// ================================================
function ordenarTabla(campo) {
  if (state.ordenActual === campo) {
    state.ordenDireccion = state.ordenDireccion === 'asc' ? 'desc' : 'asc';
  } else {
    state.ordenActual = campo;
    state.ordenDireccion = 'asc';
  }

  const dir = state.ordenDireccion === 'asc' ? 1 : -1;

  state.listaActual = [...state.listaActual].sort((a, b) => {
    if (campo === 'nivel') return (a.nivel - b.nivel) * dir;
    const aVal = String(a[campo] || '').toLowerCase();
    const bVal = String(b[campo] || '').toLowerCase();
    return aVal.localeCompare(bVal) * dir;
  });

  // Actualizar iconos de ordenación
  document.querySelectorAll('.sortable').forEach(th => {
    th.classList.remove('sort-active');
    th.querySelector('i').className = 'fas fa-sort';
  });

  const thActivo = [...document.querySelectorAll('.sortable')]
    .find(th => th.getAttribute('onclick').includes(campo));
  if (thActivo) {
    thActivo.classList.add('sort-active');
    thActivo.querySelector('i').className =
      `fas fa-sort-${state.ordenDireccion === 'asc' ? 'up' : 'down'}`;
  }

  renderizarVista();
}

// ================================================
// MOSTRAR PAGINAS
// ================================================
function mostrarPagina(pagina) {
  const paginas = ['paginaInicio', 'paginaDetalle', 'paginaComparar',
    'paginaRecientes', 'paginaFavoritos'];
  paginas.forEach(p => {
    const el = document.getElementById(p);
    if (el) el.style.display = 'none';
  });

  const nombres = {
    inicio: 'paginaInicio',
    detalle: 'paginaDetalle',
    comparar: 'paginaComparar',
    recientes: 'paginaRecientes',
    favoritos: 'paginaFavoritos'
  };

  const el = document.getElementById(nombres[pagina]);
  if (el) {
    el.style.display = 'block';
    el.classList.add('fade-in');
  }
}

// ================================================
// NAVEGACION Y HASH URL
// ================================================
window.addEventListener('hashchange', manejarHash);

function manejarHash() {
  const hash = window.location.hash;
  if (!hash || hash === '#') {
    navegarInicio();
    return;
  }

  const partes = hash.replace('#', '').split('=');
  if (partes.length === 2) {
    const tipo = partes[0];
    const id = parseInt(partes[1]);
    if (!isNaN(id)) {
      const item = todosLosItems.find(i => i.id === id);
      if (item) {
        mostrarDetalle(id);
        return;
      }
    }
  }

  navegarInicio();
}

function navegarInicio() {
  state.categoriaActual = 'all';
  state.subcategoriaActual = null;
  state.filtroCalidad = 'all';
  state.paginaActual = 1;

  mostrarPagina('inicio');
  document.getElementById('tituloTabla').innerHTML =
    '<i class="fas fa-fire"></i> Items Populares';
  document.getElementById('search').value = '';
  document.getElementById('autocompleteResults').style.display = 'none';

  mostrarItems(todosLosItems);
  inicializarRecientes();
  actualizarBreadcrumbs([]);

  window.history.pushState('', '', window.location.pathname);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================================================
// BREADCRUMBS
// ================================================
function actualizarBreadcrumbs(pasos) {
  const el = document.getElementById('breadcrumbs');
  if (!el) return;

  let html = `
    <div class="breadcrumbs-inner">
      <a href="#" onclick="navegarInicio()"><i class="fas fa-home"></i> Inicio</a>
  `;

  pasos.forEach((paso, i) => {
    html += `<span class="separator">›</span>`;
    if (paso.accion && i < pasos.length - 1) {
      html += `<a href="#" onclick="${paso.accion}">${paso.texto}</a>`;
    } else {
      html += `<span class="current">${paso.texto}</span>`;
    }
  });

  html += '</div>';
  el.innerHTML = html;
}

// ================================================
// MOSTRAR DETALLE
// ================================================
function mostrarDetalle(id) {
  const item = todosLosItems.find(i => i.id === id);
  if (!item) return;

  // Hash URL
  window.location.hash = `item=${id}`;

  // Guardar en recientes
  agregarReciente(id);

  mostrarPagina('detalle');

  const relacionadosHTML = generarRelacionados(item);
  const lootHTML = generarLootTable(item);
  const statsHTML = generarStats(item);
  const efectoHTML = item.efecto ? `
    <div class="efecto-box">
      <h4>${item.efecto.nombre}</h4>
      <p>${item.efecto.descripcion}</p>
    </div>
  ` : '<p style="color:#4a4a5e;font-size:13px;">Sin efectos especiales</p>';

  const flavorHTML = item.flavor ? `
    <div class="flavor-text">"${item.flavor}"</div>
  ` : '';

  const comentariosHTML = generarComentarios(item);
  const favoritado = esFavorito(id);

  document.getElementById('detalleContenido').innerHTML = `

    <!-- ACCIONES -->
    <div class="detalle-actions">
      <button class="btn-volver" onclick="navegarInicio()">
        <i class="fas fa-arrow-left"></i> Volver
      </button>
      <div class="detalle-action-btns">
        <button class="action-btn ${favoritado ? 'favorited' : ''}"
                id="btnFavorito"
                onclick="toggleFavorito(${id})">
          <i class="${favoritado ? 'fas' : 'far'} fa-star"></i>
          ${favoritado ? 'Favorito' : 'Añadir a favoritos'}
        </button>
        <button class="action-btn" onclick="copiarEnlace(${id})">
          <i class="fas fa-link"></i> Copiar enlace
        </button>
        <button class="action-btn" onclick="agregarComparador(${id})">
          <i class="fas fa-balance-scale"></i> Comparar
        </button>
      </div>
    </div>

    <!-- CARD PRINCIPAL -->
    <div class="detalle-card">

      <!-- TOP -->
      <div class="detalle-top">
        <div class="detalle-icono ${item.calidad}-border">
          ${item.icono}
        </div>
        <div class="detalle-info">
          <h1 class="${item.calidad}">${item.nombre}</h1>
          ${item.nivel > 0 ? `<div class="detalle-ilvl">Nivel de objeto ${item.nivel}</div>` : ''}
          ${item.binding ? `<div class="detalle-binding">${item.binding}</div>` : ''}
          <div class="detalle-tipo">
            <span>${item.tipo}</span>
            ${item.subtipo ? `<span>${item.subtipo}</span>` : ''}
          </div>
        </div>
      </div>

      <!-- TABS -->
      <div class="detalle-tabs">
        <button class="tab-btn active" onclick="cambiarTab(this, 'tabStats')">
          <i class="fas fa-chart-bar"></i> Estadísticas
        </button>
        <button class="tab-btn" onclick="cambiarTab(this, 'tabLoot')">
          <i class="fas fa-treasure-chest"></i> Cómo obtener
          <span class="tab-count">${item.loot ? item.loot.length : 0}</span>
        </button>
        <button class="tab-btn" onclick="cambiarTab(this, 'tabRelacionados')">
          <i class="fas fa-link"></i> Relacionados
          <span class="tab-count">${item.relacionados ? item.relacionados.length : 0}</span>
        </button>
        <button class="tab-btn" onclick="cambiarTab(this, 'tabComentarios')">
          <i class="fas fa-comments"></i> Comentarios
          <span class="tab-count">${item.comentarios ? item.comentarios.length : 0}</span>
        </button>
      </div>

      <!-- TAB: STATS -->
      <div class="tab-content active" id="tabStats">
        <div class="detalle-body">
          <div class="detalle-stats">
            <h3><i class="fas fa-chart-bar"></i> Estadísticas</h3>
            ${statsHTML || '<p style="color:#4a4a5e;font-size:13px;">Sin estadísticas</p>'}
          </div>
          <div class="detalle-extra">
            <h3><i class="fas fa-magic"></i> Efectos</h3>
            ${efectoHTML}
            ${flavorHTML}
          </div>
        </div>
      </div>

      <!-- TAB: LOOT -->
      <div class="tab-content" id="tabLoot">
        ${lootHTML}
      </div>

      <!-- TAB: RELACIONADOS -->
      <div class="tab-content" id="tabRelacionados">
        ${relacionadosHTML}
      </div>

      <!-- TAB: COMENTARIOS -->
      <div class="tab-content" id="tabComentarios">
        ${comentariosHTML}
        <div class="add-comment">
          <input type="text" id="nuevoComentario"
            placeholder="Añade un consejo, estrategia o comentario..." maxlength="300">
          <button onclick="agregarComentario(${id})">
            <i class="fas fa-paper-plane"></i> Enviar
          </button>
        </div>
      </div>

      <!-- SOURCE -->
      <div class="detalle-source">
        <div class="source-item">
          <span class="source-label">Fuente</span>
          <span class="source-value">${item.fuente}</span>
        </div>
        <div class="source-item">
          <span class="source-label">Expansión</span>
          <span class="source-value">${item.expansion || '-'}</span>
        </div>
        <div class="source-item">
          <span class="source-label">Parche</span>
          <span class="source-value">${item.patch || '-'}</span>
        </div>
        <div class="source-item">
          <span class="source-label">Calidad</span>
          <span class="source-value ${item.calidad}">
            ${item.calidad.charAt(0).toUpperCase() + item.calidad.slice(1)}
          </span>
        </div>
        <div class="source-item">
          <span class="source-label">ID</span>
          <span class="source-value">#${item.id}</span>
        </div>
        <div class="source-item">
          <span class="source-label">Comando</span>
          <button class="copy-btn" onclick="copiarComando(${item.id})">
            <i class="fas fa-copy"></i> .additem ${item.id}
          </button>
        </div>
      </div>
    </div>
  `;

  actualizarBreadcrumbs([
    {
      texto: item.categoria.charAt(0).toUpperCase() + item.categoria.slice(1),
      accion: `filtrarCategoria('${item.categoria}')`
    },
    { texto: item.nombre }
  ]);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================================================
// TABS
// ================================================
function cambiarTab(btn, tabId) {
  const card = btn.closest('.detalle-card');
  card.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  card.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const tab = document.getElementById(tabId);
  if (tab) {
    tab.classList.add('active');
    tab.classList.add('fade-in');
  }
}

// ================================================
// GENERADORES DE HTML
// ================================================
function generarStats(item) {
  if (!item.stats || Object.keys(item.stats).length === 0) return '';
  return Object.entries(item.stats).map(([key, value]) => `
    <div class="stat-row">
      <span class="stat-nombre">${formatStatName(key)}</span>
      <span class="stat-valor">${value}</span>
    </div>
  `).join('');
}

function generarLootTable(item) {
  if (!item.loot || item.loot.length === 0) {
    return `
      <div class="empty-state">
        <i class="fas fa-treasure-chest"></i>
        <h3>Sin información de obtención</h3>
        <p>No hay datos de drop disponibles</p>
      </div>`;
  }

  return `
    <table class="loot-table">
      <thead>
        <tr>
          <th>Fuente</th>
          <th>Modo</th>
          <th>Probabilidad</th>
        </tr>
      </thead>
      <tbody>
        ${item.loot.map(l => `
          <tr>
            <td>${l.fuente}</td>
            <td><span class="expansion-badge">${l.modo}</span></td>
            <td class="drop-chance">${l.chance}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function generarRelacionados(item) {
  if (!item.relacionados || item.relacionados.length === 0) {
    return `
      <div class="empty-state">
        <i class="fas fa-link"></i>
        <h3>Sin items relacionados</h3>
      </div>`;
  }

  const relacionados = item.relacionados
    .map(id => todosLosItems.find(i => i.id === id))
    .filter(Boolean);

  return `
    <div class="related-grid">
      ${relacionados.map(rel => `
        <div class="related-item" onclick="mostrarDetalle(${rel.id})">
          <div class="item-icon-small ${rel.calidad}-border">${rel.icono}</div>
          <div>
            <div class="item-name-cell">
              <span class="${rel.calidad}" style="font-size:13px;">${rel.nombre}</span>
              <span class="item-name-sub">iLvl ${rel.nivel} · ${rel.tipo}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function generarComentarios(item) {
  if (!item.comentarios || item.comentarios.length === 0) {
    return `
      <div class="empty-state" style="padding:30px;">
        <i class="fas fa-comments"></i>
        <h3>Sin comentarios aún</h3>
        <p>¡Sé el primero en comentar!</p>
      </div>`;
  }

  return item.comentarios.map(c => `
    <div class="comment" id="comment-${c.id}">
      <div class="comment-header">
        <div class="comment-user">
          <i class="fas fa-user-circle"></i>
          ${c.usuario}
          <span class="comment-date">${c.fecha}</span>
        </div>
        <div class="comment-votes">
          <button class="vote-btn" onclick="votarComentario(${c.id}, 'up', this)">
            <i class="fas fa-thumbs-up"></i> ${c.votos || 0}
          </button>
          <button class="vote-btn" onclick="votarComentario(${c.id}, 'down', this)">
            <i class="fas fa-thumbs-down"></i>
          </button>
        </div>
      </div>
      <div class="comment-text">${c.texto}</div>
    </div>
  `).join('');
}

// ================================================
// COMENTARIOS
// ================================================
function agregarComentario(itemId) {
  const input = document.getElementById('nuevoComentario');
  const texto = input.value.trim();

  if (!texto) {
    mostrarToast('Escribe un comentario primero', 'fa-exclamation');
    return;
  }

  if (texto.length < 10) {
    mostrarToast('El comentario es demasiado corto', 'fa-exclamation');
    return;
  }

  const item = todosLosItems.find(i => i.id === itemId);
  if (!item) return;

  const nuevoComentario = {
    id: ++state.comentarioIdCounter,
    usuario: 'Tú',
    fecha: 'Ahora mismo',
    texto: texto,
    votos: 0
  };

  item.comentarios.unshift(nuevoComentario);
  input.value = '';

  // Re-render solo los comentarios
  const tabComentarios = document.getElementById('tabComentarios');
  if (tabComentarios) {
    const addComment = tabComentarios.querySelector('.add-comment');
    tabComentarios.innerHTML = generarComentarios(item);
    tabComentarios.appendChild(addComment);
  }

  // Actualizar contador en tab
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    if (btn.textContent.includes('Comentarios')) {
      const count = btn.querySelector('.tab-count');
      if (count) count.textContent = item.comentarios.length;
    }
  });

  mostrarToast('Comentario añadido ✅', 'fa-check');
}

function votarComentario(comentarioId, tipo, btn) {
  const votos = parseInt(btn.querySelector('i').nextSibling?.textContent) ||
    parseInt(btn.textContent.replace(/\D/g, '')) || 0;

  if (tipo === 'up') {
    btn.innerHTML = `<i class="fas fa-thumbs-up"></i> ${votos + 1}`;
    btn.style.color = '#1eff00';
    mostrarToast('+1 voto', 'fa-thumbs-up');
  }
}

// ================================================
// ACCIONES DE DETALLE
// ================================================
function copiarComando(id) {
  const comando = `.additem ${id}`;
  navigator.clipboard.writeText(comando).then(() => {
    mostrarToast(`Copiado: ${comando}`, 'fa-copy');
  }).catch(() => {
    mostrarToast(`Comando: ${comando}`, 'fa-copy');
  });
}

function copiarEnlace(id) {
  const url = `${window.location.origin}${window.location.pathname}#item=${id}`;
  navigator.clipboard.writeText(url).then(() => {
    mostrarToast('Enlace copiado al portapapeles', 'fa-link');
  }).catch(() => {
    mostrarToast('No se pudo copiar', 'fa-times');
  });
}

// ================================================
// COMPARADOR
// ================================================
let comparadorItems = [];

function agregarComparador(id) {
  const item = todosLosItems.find(i => i.id === id);
  if (!item) return;

  if (comparadorItems.find(i => i.id === id)) {
    mostrarToast('Este item ya está en el comparador', 'fa-exclamation');
    return;
  }

  if (comparadorItems.length >= 2) {
    comparadorItems.shift();
  }

  comparadorItems.push(item);

  if (comparadorItems.length === 2) {
    mostrarComparador();
  } else {
    mostrarToast(`${item.nombre} añadido al comparador. Selecciona otro item.`, 'fa-balance-scale');
  }
}

function mostrarComparador() {
  mostrarPagina('comparar');

  const [a, b] = comparadorItems;

  if (!a || !b) {
    document.getElementById('compararContenido').innerHTML = `
      <div class="empty-state">
        <i class="fas fa-balance-scale"></i>
        <h3>Selecciona 2 items para comparar</h3>
        <p>Usa el botón "Comparar" en la página de detalle de cada item</p>
      </div>`;
    return;
  }

  const todasLasStats = [...new Set([
    ...Object.keys(a.stats || {}),
    ...Object.keys(b.stats || {})
  ])];

  const statsCompara = todasLasStats.map(stat => {
    const valA = parseFloat(String(a.stats?.[stat] || '0').replace(/[^0-9.]/g, '')) || 0;
    const valB = parseFloat(String(b.stats?.[stat] || '0').replace(/[^0-9.]/g, '')) || 0;
    const mejorA = valA > valB;
    const mejorB = valB > valA;
    return `
      <tr>
        <td style="color:${mejorA ? '#1eff00' : '#e2e8f0'};font-weight:${mejorA ? '700' : '400'};">
          ${a.stats?.[stat] || '-'}
        </td>
        <td style="color:#64748b;font-size:12px;text-align:center;">${formatStatName(stat)}</td>
        <td style="color:${mejorB ? '#1eff00' : '#e2e8f0'};font-weight:${mejorB ? '700' : '400'};text-align:right;">
          ${b.stats?.[stat] || '-'}
        </td>
      </tr>`;
  }).join('');

  document.getElementById('compararContenido').innerHTML = `
    <div class="detalle-actions">
      <button class="btn-volver" onclick="navegarInicio()">
        <i class="fas fa-arrow-left"></i> Volver
      </button>
    </div>
    <div class="detalle-card">
      <div class="detalle-top" style="justify-content:space-around;">
        <div style="text-align:center;">
          <div class="detalle-icono ${a.calidad}-border" style="margin:0 auto 10px;">
            ${a.icono}
          </div>
          <div class="${a.calidad}" style="font-size:16px;font-weight:700;">${a.nombre}</div>
          <div style="color:#f59e0b;font-size:13px;">iLvl ${a.nivel}</div>
        </div>
        <div style="display:flex;align-items:center;font-size:24px;color:#e94560;">VS</div>
        <div style="text-align:center;">
          <div class="detalle-icono ${b.calidad}-border" style="margin:0 auto 10px;">
            ${b.icono}
          </div>
          <div class="${b.calidad}" style="font-size:16px;font-weight:700;">${b.nombre}</div>
          <div style="color:#f59e0b;font-size:13px;">iLvl ${b.nivel}</div>
        </div>
      </div>
      <div style="padding:25px 30px;">
        <h3 style="color:#e94560;font-size:12px;text-transform:uppercase;
          letter-spacing:1.5px;margin-bottom:15px;">
          <i class="fas fa-chart-bar"></i> Comparación de Stats
        </h3>
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr>
              <th style="text-align:left;color:#64748b;font-size:11px;padding:8px 0;">
                ${a.nombre.substring(0, 20)}...
              </th>
              <th style="text-align:center;color:#64748b;font-size:11px;">Stat</th>
              <th style="text-align:right;color:#64748b;font-size:11px;">
                ${b.nombre.substring(0, 20)}...
              </th>
            </tr>
          </thead>
          <tbody>${statsCompara}</tbody>
        </table>
        <div style="margin-top:20px;text-align:center;">
          <button class="copy-btn" onclick="comparadorItems=[];navegarInicio()">
            <i class="fas fa-times"></i> Limpiar comparador
          </button>
        </div>
      </div>
    </div>
  `;

  actualizarBreadcrumbs([{ texto: 'Comparador de items' }]);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================================================
// RECIENTES Y FAVORITOS
// ================================================
function mostrarRecientes() {
  const rec = getRecientes();
  mostrarPagina('recientes');

  if (rec.length === 0) {
    document.getElementById('recientesContenido').innerHTML = `
      <div class="detalle-actions">
        <button class="btn-volver" onclick="navegarInicio()">
          <i class="fas fa-arrow-left"></i> Volver
        </button>
      </div>
      <div class="empty-state">
        <i class="fas fa-history"></i>
        <h3>No has visto ningún item aún</h3>
        <p>Explora la base de datos para ver el historial aquí</p>
      </div>`;
    return;
  }

  const recItems = rec.map(id => todosLosItems.find(i => i.id === id)).filter(Boolean);

  document.getElementById('recientesContenido').innerHTML = `
    <div class="detalle-actions">
      <button class="btn-volver" onclick="navegarInicio()">
        <i class="fas fa-arrow-left"></i> Volver
      </button>
    </div>
    <div class="detalle-card" style="padding:25px 30px;">
      <h2 style="color:#e94560;margin-bottom:20px;">
        <i class="fas fa-history"></i> Vistos recientemente
      </h2>
      <div class="related-grid">
        ${recItems.map(item => `
          <div class="related-item" onclick="mostrarDetalle(${item.id})">
            <div class="item-icon-small ${item.calidad}-border">${item.icono}</div>
            <div>
              <div class="${item.calidad}" style="font-size:13px;font-weight:600;">
                ${item.nombre}
              </div>
              <div style="font-size:11px;color:#4a4a5e;">iLvl ${item.nivel} · ${item.tipo}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  actualizarBreadcrumbs([{ texto: 'Vistos recientemente' }]);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mostrarFavoritos() {
  const favs = getFavoritos();
  mostrarPagina('favoritos');

  if (favs.length === 0) {
    document.getElementById('favoritosContenido').innerHTML = `
      <div class="detalle-actions">
        <button class="btn-volver" onclick="navegarInicio()">
          <i class="fas fa-arrow-left"></i> Volver
        </button>
      </div>
      <div class="empty-state">
        <i class="fas fa-star"></i>
        <h3>No tienes favoritos aún</h3>
        <p>Pulsa la estrella en cualquier item para guardarlo aquí</p>
      </div>`;
    return;
  }

  const favItems = favs.map(id => todosLosItems.find(i => i.id === id)).filter(Boolean);

  document.getElementById('favoritosContenido').innerHTML = `
    <div class="detalle-actions">
      <button class="btn-volver" onclick="navegarInicio()">
        <i class="fas fa-arrow-left"></i> Volver
      </button>
      <button class="action-btn" onclick="limpiarFavoritos()">
        <i class="fas fa-trash"></i> Limpiar favoritos
      </button>
    </div>
    <div class="detalle-card" style="padding:25px 30px;">
      <h2 style="color:#f59e0b;margin-bottom:20px;">
        <i class="fas fa-star"></i> Mis favoritos (${favItems.length})
      </h2>
      <div class="related-grid">
        ${favItems.map(item => `
          <div class="related-item" onclick="mostrarDetalle(${item.id})">
            <div class="item-icon-small ${item.calidad}-border">${item.icono}</div>
            <div>
              <div class="${item.calidad}" style="font-size:13px;font-weight:600;">
                ${item.nombre}
              </div>
              <div style="font-size:11px;color:#4a4a5e;">iLvl ${item.nivel} · ${item.tipo}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  actualizarBreadcrumbs([{ texto: 'Mis favoritos' }]);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function limpiarFavoritos() {
  setFavoritos([]);
  mostrarToast('Favoritos limpiados', 'fa-trash');
  mostrarFavoritos();
}

// ================================================
// CALCULADORA (placeholder)
// ================================================
function mostrarCalculadora() {
  mostrarToast('Calculadora de DPS - Próximamente 🚧', 'fa-calculator');
}

// ================================================
// FORMATEAR NOMBRES DE STATS
// ================================================
function formatStatName(key) {
  const nombres = {
    daño: "Daño",
    velocidad: "Velocidad",
    fuerza: "Fuerza",
    agilidad: "Agilidad",
    intelecto: "Intelecto",
    aguante: "Aguante",
    celeridad: "Celeridad",
    maestria: "Maestría",
    golpeCritico: "Golpe Crítico",
    versatilidad: "Versatilidad",
    espiritu: "Espíritu",
    armadura: "Armadura",
    vida: "Vida",
    efecto: "Efecto",
    experiencia: "Experiencia",
    oro: "Oro",
    reputacion: "Reputación",
    coste: "Coste",
    alcance: "Alcance",
    lanzamiento: "Lanzamiento",
    reutilizacion: "Reutilización",
    daño: "Daño"
  };
  return nombres[key] || key;
}
