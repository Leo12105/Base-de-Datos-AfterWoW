// === DATOS DE PRUEBA ===
const items = [
  { nombre: "Fyr'alath el Lacerasueños", nivel: 489, tipo: "Arma a dos manos", fuente: "Fyrakk", calidad: "legendary" },
  { nombre: "Atiesh Gran Bastón del Guardián", nivel: 130, tipo: "Bastón", fuente: "Naxxramas", calidad: "legendary" },
  { nombre: "Espada de Quel'delar", nivel: 251, tipo: "Espada", fuente: "Cadena de misiones", calidad: "epic" },
  { nombre: "Capa de Ensueño Ardiente", nivel: 483, tipo: "Espalda", fuente: "Fyrakk", calidad: "epic" },
  { nombre: "Matraz de la Sombra Titánica", nivel: 70, tipo: "Consumible", fuente: "Alquimia", calidad: "rare" },
  { nombre: "Anillo del Guardián Esmeralda", nivel: 476, tipo: "Anillo", fuente: "Nymue", calidad: "epic" },
  { nombre: "Botas de la Tormenta Arcana", nivel: 450, tipo: "Pies", fuente: "Crafting", calidad: "uncommon" }
];

// === BUSCADOR ===
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', function() {
  const texto = this.value.toLowerCase();

  if (texto.length === 0) {
    mostrarItems(items);
    return;
  }

  const resultado = items.filter(item =>
    item.nombre.toLowerCase().includes(texto)
  );

  mostrarItems(resultado);
});

// === MOSTRAR ITEMS EN LA TABLA ===
function mostrarItems(lista) {
  const tbody = document.querySelector('.tabla tbody');

  if (lista.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; color:#64748b; padding:30px;">
          No se encontraron resultados
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = lista.map(item => `
    <tr>
      <td>${getIcono(item.calidad)}</td>
      <td class="${item.calidad}">${item.nombre}</td>
      <td>${item.nivel}</td>
      <td>${item.tipo}</td>
      <td>${item.fuente}</td>
    </tr>
  `).join('');
}

// === ICONOS SEGUN CALIDAD ===
function getIcono(calidad) {
  const iconos = {
    legendary: "🪓",
    epic: "⚔️",
    rare: "🧪",
    uncommon: "🛡️"
  };
  return iconos[calidad] || "📦";
}

// === CARDS CATEGORIAS ===
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    const categoria = this.querySelector('h3').textContent;
    alert(`Sección ${categoria} en construcción 🚧`);
  });
});

console.log("AfterWoW cargado correctamente ✅");
