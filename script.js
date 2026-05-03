// ================================================
// AfterWoW - Base de Datos
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
    comentarios: [
      { usuario: "DragonSlayer", fecha: "Hace 2 días", texto: "El mejor arma de la expansión. El proc de fuego es brutal en AoE." },
      { usuario: "TankMaster", fecha: "Hace 5 días", texto: "Se dropea del último boss de Amirdrassil en cualquier dificultad." }
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
    comentarios: [
      { usuario: "ClassicFan", fecha: "Hace 1 mes", texto: "Uno de los items más difíciles de conseguir en la historia de WoW." }
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
    comentarios: [
      { usuario: "VeteranPlayer", fecha: "Hace 2 meses", texto: "El legendario original. Muchos recuerdos farmeando Ragnaros." }
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
    comentarios: [
      { usuario: "DemonHunter", fecha: "Hace 3 meses", texto: "Las armas más icónicas de WoW. Illidan es el mejor villano." }
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
    comentarios: [
      { usuario: "HolyPala", fecha: "Hace 1 mes", texto: "El mejor arma de healer que ha existido." }
    ]
  },

  // ARMAS EPICAS
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
    comentarios: [
      { usuario: "LoreExpert", fecha: "Hace 2 semanas", texto: "La cadena de misiones para obtenerla es épica." }
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
    comentarios: [
      { usuario: "Evoker_Main", fecha: "Hace 1 semana", texto: "Muy buena para Evoker y casters en general." }
    ]
  },

  // ARMADURA
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
    comentarios: [
      { usuario: "RaidLeader", fecha: "Hace 3 días", texto: "Best in slot para casi todas las clases de agilidad." }
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
    comentarios: [
      { usuario: "WarriorMain", fecha: "Hace 1 semana", texto: "Excelente pieza de tier para Warriors y Paladins." }
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
    comentarios: []
  },

  // ACCESORIOS
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
    comentarios: [
      { usuario: "MinMaxer", fecha: "Hace 4 días", texto: "Los stats son perfectos para specs de celeridad y maestría." }
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
    comentarios: [
      { usuario: "CasterDPS", fecha: "Hace 1 día", texto: "Mejor trinket para casters en Amirdrassil, sin duda." }
    ]
  },

  // CONSUMIBLES
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
    stats: {
      efecto: "Stat principal +720"
    },
    efecto: {
      nombre: "Sombra Titánica",
      descripcion: "Aumenta tu estadística principal en 720 durante 1 hora. Persiste a través de la muerte."
    },
    flavor: "Destilada con esencia de titán.",
    expansion: "Dragonflight",
    patch: "10.0",
    comentarios: [
      { usuario: "Raider", fecha: "Hace 1 día", texto: "Obligatorio para cualquier raid." }
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
    stats: {
      efecto: "Intelecto +1,200 por 30seg"
    },
    efecto: {
      nombre: "Poder Elemental",
      descripcion: "Aumenta tu Intelecto en 1,200 durante 30 seg."
    },
    flavor: null,
    expansion: "Dragonflight",
    patch: "10.0",
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
    stats: {
      efecto: "Stat secundaria +75"
    },
    efecto: {
      nombre: "Bien alimentado",
      descripcion: "Aumenta tu mejor estadística secundaria en 75 durante 1 hora."
    },
    flavor: "Preparado con las recetas ancestrales de los dragones.",
    expansion: "Dragonflight",
    patch: "10.0",
    comentarios: []
  },

  // GEMAS
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
    stats: {
      celeridad: "+70"
    },
    efecto: null,
    flavor: null,
    expansion: "Dragonflight",
    patch: "10.0",
    comentarios: []
  },

  // MONTURAS
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
    comentarios: [
      { usuario: "MountCollector", fecha: "Hace 1 semana", texto: "Necesitas completar todos los logros de mazmorras heroicas de Dragonflight." }
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
    comentarios: [
      { usuario: "LootHunter", fecha: "Hace 2 meses", texto: "Drop rate de 1%. Llevo 500 intentos y nada." },
      { usuario: "LuckyOne", fecha: "Hace 1 mes", texto: "Me cayó en el primer intento, sorry not sorry 😂" }
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
    comentarios: [
      { usuario: "MythicRaider", fecha: "Hace 3 días", texto: "La fase 3 es brutal en mítico. Necesitas mucha coordinación." }
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
    comentarios: [
      { usuario: "WoWVeteran", fecha: "Hace 6 meses", texto: "El mejor encuentro de la historia de WoW. El cinemático final es increíble." }
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
    comentarios: []
  }
];

// === JUNTAR TODA LA BASE DE DATOS ===
const todosLosItems = [...items, ...npcs, ...quests, ...spells];

// === VARIABLE PARA FILTRO ACTUAL ===
let filtroActual = 'all';
let categoriaActual = 'all';

// === INICIALIZAR PAGINA ===
document.addEventListener('DOMContentLoaded', function() {
  mostrarItems(todosLosItems);
  console.log("AfterWoW cargado correctamente ✅");
});

// === MOSTRAR ITEMS EN LA TABLA ===
function mostrarItems(lista) {
  const tbody = document.getElementById('tablaBody');

  if (lista.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; color:#64748b; padding:30px;">
          No se encontraron resultados 😕
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = lista.map(item => `
    <tr onclick="mostrarDetalle(${item.id})">
      <td style="font-size:24px;">${item.icono}</td>
      <td class="${item.calidad}">${item.nombre}</td>
      <td>${item.nivel}</td>
      <td>${item.tipo}</td>
      <td>${item.fuente}</td>
    </tr>
  `).join('');
}

// === BUSCADOR ===
const searchInput = document.getElementById('search');
const searchFilter = document.getElementById('searchFilter');

searchInput.addEventListener('input', function() {
  const texto = this.value.toLowerCase();
  const filtro = searchFilter.value;

  let resultado = todosLosItems.filter(item =>
    item.nombre.toLowerCase().includes(texto)
  );

  if (filtro !== 'all') {
    resultado = resultado.filter(item => item.categoria === filtro);
  }

  mostrarItems(resultado);
  document.getElementById('paginaInicio').style.display = 'block';
  document.getElementById('paginaDetalle').style.display = 'none';
});

searchFilter.addEventListener('change', function() {
  searchInput.dispatchEvent(new Event('input'));
});

// === FILTRAR POR CALIDAD ===
function filtrarCalidad(calidad, boton) {
  document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
  boton.classList.add('active');

  let lista = categoriaActual === 'all' ? todosLosItems :
    todosLosItems.filter(item => item.categoria === categoriaActual);

  if (calidad !== 'all') {
    lista = lista.filter(item => item.calidad === calidad);
  }

  mostrarItems(lista);
}

// === FILTRAR POR CATEGORIA ===
function filtrarCategoria(categoria) {
  categoriaActual = categoria;

  let lista = todosLosItems.filter(item => item.categoria === categoria);
  mostrarItems(lista);

  const titulos = {
    armas: "⚔️ Armas",
    armadura: "🛡️ Armadura",
    accesorios: "💍 Accesorios",
    espalda: "🧥 Capas",
    consumibles: "🧪 Consumibles",
    gemas: "💎 Gemas",
    npcs: "👹 NPCs",
    jefes: "💀 Jefes de Raid",
    vendedores: "🏪 Vendedores",
    entrenadores: "📖 Entrenadores",
    quests: "📜 Misiones",
    spells: "✨ Hechizos",
    logros: "🏆 Logros",
    monturas: "🐎 Monturas"
  };

  document.getElementById('tituloTabla').textContent = titulos[categoria] || "📦 Resultados";

  document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.filtro-btn').classList.add('active');

  document.getElementById('paginaInicio').style.display = 'block';
  document.getElementById('paginaDetalle').style.display = 'none';

  window.scrollTo({ top: document.querySelector('.tabla-seccion').offsetTop - 80, behavior: 'smooth' });
}

// === FILTRAR POR CLASE (placeholder) ===
function filtrarClase(clase) {
  alert(`Sección de clase "${clase}" en construcción 🚧`);
}

// === MOSTRAR PAGINA DE INICIO ===
function mostrarInicio() {
  categoriaActual = 'all';
  document.getElementById('paginaInicio').style.display = 'block';
  document.getElementById('paginaDetalle').style.display = 'none';
  document.getElementById('tituloTabla').textContent = "⚔️ Items Populares";
  searchInput.value = '';
  mostrarItems(todosLosItems);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// === MOSTRAR DETALLE DE ITEM ===
function mostrarDetalle(id) {
  const item = todosLosItems.find(i => i.id === id);
  if (!item) return;

  document.getElementById('paginaInicio').style.display = 'none';
  document.getElementById('paginaDetalle').style.display = 'block';

  const statsHTML = Object.entries(item.stats).map(([key, value]) => `
    <div class="stat-row">
      <span class="stat-nombre">${formatStatName(key)}</span>
      <span class="stat-valor">${value}</span>
    </div>
  `).join('');

  const efectoHTML = item.efecto ? `
    <div class="efecto-box">
      <h4>${item.efecto.nombre}</h4>
      <p>${item.efecto.descripcion}</p>
    </div>
  ` : '';

  const flavorHTML = item.flavor ? `
    <div class="flavor-text">"${item.flavor}"</div>
  ` : '';

  const comentariosHTML = item.comentarios && item.comentarios.length > 0 ? `
    <div class="detalle-comments">
      <h3>💬 Comentarios (${item.comentarios.length})</h3>
      ${item.comentarios.map(c => `
        <div class="comment">
          <div class="comment-user">
            ${c.usuario}
            <span class="comment-date">${c.fecha}</span>
          </div>
          <div class="comment-text">${c.texto}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  document.getElementById('detalleContenido').innerHTML = `
    <div class="detalle-card">
      <div class="detalle-top">
        <div class="detalle-icono ${item.calidad}-border">
          ${item.icono}
        </div>
        <div class="detalle-info">
          <h1 class="${item.calidad}">${item.nombre}</h1>
          <div class="detalle-ilvl">Nivel de objeto ${item.nivel}</div>
          ${item.binding ? `<div class="detalle-binding">${item.binding}</div>` : ''}
          <div class="detalle-tipo">
            <span>${item.tipo}</span>
            ${item.subtipo ? `<span>${item.subtipo}</span>` : ''}
          </div>
        </div>
      </div>

      <div class="detalle-body">
        <div class="detalle-stats">
          <h3>📊 Estadísticas</h3>
          ${statsHTML}
        </div>
        <div class="detalle-extra">
          <h3>✨ Efectos</h3>
          ${efectoHTML || '<p style="color:#64748b;">Sin efectos especiales</p>'}
          ${flavorHTML}
        </div>
      </div>

      <div class="detalle-source">
        <div class="source-item">
          <span class="source-label">Fuente</span>
          <span class="source-value">${item.fuente}</span>
        </div>
        <div class="source-item">
          <span class="source-label">Expansión</span>
          <span class="source-value">${item.expansion}</span>
        </div>
        <div class="source-item">
          <span class="source-label">Parche</span>
          <span class="source-value">${item.patch}</span>
        </div>
        <div class="source-item">
          <span class="source-label">Calidad</span>
          <span class="source-value ${item.calidad}">${item.calidad.charAt(0).toUpperCase() + item.calidad.slice(1)}</span>
        </div>
      </div>

      ${comentariosHTML}
    </div>
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// === FORMATEAR NOMBRES DE STATS ===
function formatStatName(key) {
  const nombres = {
    daño: "⚔️ Daño",
    velocidad: "💨 Velocidad",
    fuerza: "💪 Fuerza",
    agilidad: "🏃 Agilidad",
    intelecto: "🧠 Intelecto",
    aguante: "❤️ Aguante",
    celeridad: "⚡ Celeridad",
    maestria: "🎯 Maestría",
    golpeCritico: "💥 Golpe Crítico",
    versatilidad: "🔄 Versatilidad",
    espiritu: "✨ Espíritu",
    armadura: "🛡️ Armadura",
    vida: "❤️ Vida",
    efecto: "✨ Efecto",
    experiencia: "📊 Experiencia",
    oro: "💰 Oro",
    reputacion: "⭐ Reputación",
    coste: "💧 Coste",
    alcance: "📏 Alcance",
    lanzamiento: "⏱️ Lanzamiento",
    reutilizacion: "🔄 Reutilización"
  };
  return nombres[key] || key;
}
