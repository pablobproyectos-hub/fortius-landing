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
- `terminos.html` y `privacidad.html`: Términos y Condiciones y Política de Privacidad (mismo texto que la app, más el formulario de prueba), con su estilo en `assets/legal.css`.
- `assets/og-fortius.jpg`: la imagen de vista previa al compartir el link (WhatsApp, redes). Las etiquetas `og:` de `index.html` apuntan a `https://fortiusgymapp.netlify.app`: si cambia el dominio, hay que actualizarlas.
- `assets/app/`: capturas reales de la app de Fortius (con datos de demostración) y el logo.
- El resto de `assets/`: el sistema de estilos y animaciones de la skill design-taste-frontend (solo los archivos que la página usa).

## Pedidos de prueba (Netlify Forms)

Los botones "Probá 20 días gratis" llevan al principio de la sección Precio (`#precio`), donde está el formulario de prueba (`#prueba`): nombre, gimnasio, cantidad de alumnos y WhatsApp. Netlify lo detecta solo al publicar (`data-netlify="true"`) y, al enviarlo, el visitante ve `gracias.html`.

Para que cada pedido te llegue por mail: en Netlify, **Site configuration → Forms → Form notifications → Add notification → Email notification**, formulario `prueba`, tu mail. El asunto es "Nuevo pedido de prueba de Fortius". Todos los pedidos quedan además en la pestaña **Forms** del sitio.

## Contacto en la página

- WhatsApp (3571 31-3949) en el formulario, las preguntas frecuentes, el pie y la página de gracias, con un mensaje ya escrito.
- El mail fortiusgymapp@gmail.com en el pie.
