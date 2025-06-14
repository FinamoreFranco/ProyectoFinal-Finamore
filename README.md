# 🗡️ Hunter Game - Simulador de Cazadores

Un simulador interactivo donde el jugador ingresa su nombre, elige una clase y se enfrenta a enemigos. Cada victoria otorga experiencia y niveles, mientras que un cotizador adicional permite estimar costos de misiones.

---

## 🎮 Características principales

- Ingreso de nombre con validación (SweetAlert2).
- Selección de clase: Ronin, Martial Artist, Priest o Mage.
- Sistema de combate con enemigos progresivos.
- Subida de nivel con almacenamiento en `localStorage`.
- Interfaz con HTML dinámico generado desde JS.
- Cotizador de servicios en una sección aparte.
- Estilo visual oscuro tipo videojuego / anime.
- Botón para reiniciar el progreso y empezar desde cero.

---

## 🧪 Tecnologías utilizadas

- **HTML5**
- **CSS3** (diseño responsivo, variables, animaciones)
- **JavaScript** (DOM, eventos, arrays, objetos, funciones)
- **SweetAlert2** para reemplazo de `alert` y `prompt`
- **localStorage** para persistencia de datos

---

## 📁 Estructura del proyecto

ProyectoFinalFinamore/
├── index.html # Página principal del juego
├── cotizador.html # Cotizador de servicios/misiones
├── style.css # Estilos generales
├── cotizador.css # Estilos específicos del cotizador
├── main.js # Lógica principal del juego
├── cotizar.js # Lógica del cotizador
├── nav.js # Menú de navegación lateral
├── assets/ # Imágenes y recursos
│ ├── ronin.webp
│ ├── priest.webp
│ ├── mage.webp
│ ├── marcialArtist.webp

🔁 Lógica general del juego
Se guarda el nombre, clase y nivel del jugador.

La primera pelea siempre es contra un Goblin de nivel 1.

Los enemigos siguientes son aleatorios y escalan en dificultad.

El jugador sube de nivel si gana.

El progreso se mantiene incluso al recargar o cerrar.

El cotizador permite estimar costos de servicios como misiones u objetos especiales.

El botón “Reiniciar juego” permite empezar desde cero.


