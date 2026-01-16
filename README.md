# Las Calles Contra El Fascismo

<div align="center">
  <img src="logo.png" alt="Las Calles Contra El Fascismo Logo" width="256">
  <br>
  <a href="https://lascallescontraelfascismo.org">lascallescontraelfascismo.org</a>
  <br>
  <br>
  
  ![License](https://img.shields.io/badge/license-BSD--3-blue)
  ![Version](https://img.shields.io/badge/version-1.0-green)
</div>

## ¿Por qué?

En un contexto de auge de discursos de odio y extrema derecha, **Las Calles Contra El Fascismo** nace como una respuesta necesaria de unidad, acción y solidaridad combativa. Este proyecto digital sirve como altavoz para la asamblea, facilitando la difusión de convocatorias, comunicados y recursos para la defensa de los derechos humanos y la memoria antifascista. Buscamos visibilizar la resistencia y crear alianzas diversas frente a la reacción fascista.

## Estructura del Proyecto

El proyecto es una web estática multilenguaje (Castellano, Inglés, Francés, Árabe) con un diseño inspirado en la cartelería republicana y antifascista histórica.

- **Frontend**: HTML5, CSS3, Vanilla JS.
- **Despliegue**: Docker + Caddy (Reverse Proxy).
- **Diseño**: Mobile-first, WCAG 2.1 AA accesible.

## Despliegue Paso a Paso

### Requisitos previos

- Servidor con Docker y Docker Compose instalados.
- Acceso a la terminal del servidor.

### Instrucciones

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/JaviLopezG/lascallescontraelfascismo.git
   cd lascallescontraelfascismo
   ```

2. **Configurar el entorno (Docker)**:
   El proyecto incluye un `docker-compose.yml`. Puedes levantar el servicio directamente:
   ```bash
   docker-compose up -d --build
   ```
   Esto levantará el contenedor en el puerto `8085`.

3. **Configurar Proxy Inverso (Caddy)**:
   Si usas Caddy como proxy inverso (recomendado), añade la siguiente entrada a tu `Caddyfile`:
   ```caddy
   lascallescontraelfascismo.org {
       reverse_proxy localhost:8085
   }
   ```
   Recarga Caddy: `caddy reload`.

4. **Automatización de actualizaciones**:
   Para mantener la web actualizada automáticamente cada hora, añade la siguiente línea a tu crontab (`crontab -e`):
   ```bash
   0 * * * * cd /ruta/al/repo/lascallescontraelfascismo && git pull && docker-compose up -d --build
   ```

## Colaboración

Estamos abiertas a colaboraciones de todo tipo. Si quieres aportar código, traducir contenidos o sugerir mejoras:

- **Problemas técnicos**: Abre un [Issue](https://github.com/JaviLopezG/lascallescontraelfascismo/issues) en este repositorio.
- **Debate y comunidad**: Participa en [Discussions](https://github.com/JaviLopezG/lascallescontraelfascismo/discussions).
- **Contacto privado**: Escribe a [mail@javilopezg.com](mailto:mail@javilopezg.com) o al correo de la asamblea [lascallescontraelfascismo@riseup.net](mailto:lascallescontraelfascismo@riseup.net).

¡No pasarán!
