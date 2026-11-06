# Fortius: landing

Página de presentación de Fortius, el software para gimnasios. Es un sitio estático: HTML, CSS, JS e imágenes, sin backend ni paso de compilación.

## Verla en tu PC

```bash
npx serve .
```

Y abrí la dirección que muestra (por defecto `http://localhost:3000`).

## Publicarla

En Netlify (o cualquier hosting estático):

- **Build command:** vacío
- **Publish directory:** `.`

Cada `git push` a `main` vuelve a publicar el sitio.

## Qué hay adentro

- `index.html`: la página.
- `assets/app/`: capturas reales de la app de Fortius (con datos de demostración) y el logo.
- El resto de `assets/`: el sistema de estilos y animaciones de la skill design-taste-frontend (solo los archivos que la página usa).

## Pendiente

- El botón "Pedí una demo" abre un mail a `hola@fortius.example`: reemplazarlo por el contacto real (aparece en `index.html` tres veces).
