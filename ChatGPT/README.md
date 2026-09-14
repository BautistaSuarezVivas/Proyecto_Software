# Café Central

Sitio web estático responsive para una cafetería ficticia.

## Estructura

- `index.html`: estructura y contenido de todas las secciones.
- `css/styles.css`: estilos, diseño responsive y animaciones.
- `js/script.js`: menú móvil, filtros del menú y validación/interacción del formulario.
- `assets/cafe.svg`: recurso visual local, por lo que el sitio no depende de imágenes externas.

## Cómo ejecutar

No requiere instalación ni dependencias.

1. Descomprimí el proyecto.
2. Abrí `index.html` directamente en el navegador.

También podés levantar un servidor local desde la carpeta del proyecto:

```bash
python -m http.server 8000
```

Luego visitá `http://localhost:8000`.

## Interacciones

- Menú de navegación responsive para celulares.
- Filtros para mostrar cafés, bebidas o comidas.
- Validación del formulario de contacto con mensaje de confirmación.
- Desplazamiento suave entre secciones y botón para volver al inicio.
