A los buenos días. Es muy pequeño, pero revisa el directorio y luego sigue las instrucciones:

1. Vamos a crear una web estática para una asamblea que lucha por los derechos humanos.
2. Debe estar en castellano (por defecto), inglés, francés y árabe. Cuando un visitante nuevo entre, si se detecta que el navegador está en otro idioma deberá mostrarse un popup que le diga en castellano y el idioma de destino "¿Prefieres ver la página en otro idioma?" y la lista de idiomas disponibles.
3. La estética de la web tiene que recordar a los carteles de propaganda de la república durante la guerra civil (vintage, art deco, realismo socialista, pop art...)
4. Los colores principales deben ser logo (rosa 2596be, blanco y negro).
5. La página debe tener un diseño mobile first.
6. Debe ser accesible (WCAG 2.1 AA).
7. Los apartados que tendrá serán:
    - Cabecera
    - Texto
    - Manifiesto
    - Redes
    - Kit de prensa
    - Noticias
    - Pie de página
8. El texto se tomará el que hay en el archivo texto.md traduciéndolo de markdown a html. También habrá que traducirlo a cada uno de los idiomas en los que será visible la web.
9. En manifiesto se enlazará al pdf correspondiente para el idioma que se esté visualizando.
10. En redes se mostrará un icono con el estilo de la web, que represente a cada una de las redes sociales de la asamblea. Los enlaces se encuentran en el archivo redes.txt
11. En kit de prensa se mostrará un enlace para descargar el kit de prensa en el idioma correspondiente.
12. En el apartado noticias, se mostrarán los enlaces de noticias del archivo noticias.txt
13. Para las primeras 6 noticias se mostrará el titulo, la fecha, la entradilla y la imagen de las smart cards de cada página.
14. Para el resto de páginas se mostrará solo el titulo y la fecha.
15. En el pie de página se pondrá una breve nota explicando que no se usan cookies ni se recopilan datos y que todo el material es original de la asamblea.
16. Ordena los archivos generados como mejor te parezca.
17. Puedes usar el navegador en cualquier momento para verificar que todo funciona correctamente.
18. Cuando esté listo, inicializa un repositorio.
19. Crea un archivo README.md
20. Súbelo a mi github.
21. vamos a publicarlo en mi vps (Trillian - 213.109.161.164) bajo el dominio lascallescontraelfascismo.org que he comprado en ovh
22. en trillian hay un caddy (docker) que hace de reverse proxy y reparte las peticiones. Crea un archivo Caddy-example con el cambio que haya que incluir.
23. Para servir la página no usaremos el servidor web de trillian, crearemos un contenedor, así que crea el archivo docker-compose y los que sean necesarios.
23. en trillian crearemos una entrada en cron para que cada hora se haga un pull del repositorio de github y se actualice la web. Crea un archivo crontab-example
