# Dulce Hogar — Pastelería familiar

Sitio web desarrollado como proyecto de la materia **Diseño Web con HTML5**,
siguiendo el documento de planificación del sitio (Pasos 1 a 4).

## Descripción

Sitio web de un negocio familiar de repostería. Presenta el negocio, su catálogo
de productos, una galería de imágenes, la forma de hacer pedidos y los datos de
contacto.

## Estructura del sitio

| Página | Contenido |
|---|---|
| `index.html` | Bienvenida, promociones y productos destacados |
| `nosotros.html` | Historia, la familia, misión, visión y valores |
| `productos.html` | Pasteles, cupcakes, postres y tabla de tamaños |
| `galeria.html` | Fotos de productos y eventos realizados |
| `pedidos.html` | Pasos para pedir, formulario y métodos de pago |
| `contacto.html` | Teléfono, redes sociales, formulario y ubicación |

## Organización de archivos

```
/
├── index.html
├── nosotros.html
├── productos.html
├── galeria.html
├── pedidos.html
├── contacto.html
├── css/
│   └── estilos.css
├── js/
│   └── menu.js
└── img/
    └── (15 ilustraciones en formato SVG)
```

## Tecnologías utilizadas

- **HTML5** con etiquetas semánticas: `header`, `nav`, `main`, `section`,
  `article`, `figure`, `footer`.
- **CSS3**: variables de color, Flexbox, CSS Grid y diseño responsivo
  con *media queries*.
- **JavaScript**: menú desplegable para pantallas pequeñas y mensaje de
  confirmación en los formularios.
- **SVG**: todas las ilustraciones son vectoriales, por lo que se ven nítidas
  en cualquier pantalla y pesan muy poco.

## Notas

Los formularios son una demostración escolar: validan los datos con HTML5
pero no envían información a ningún servidor.
