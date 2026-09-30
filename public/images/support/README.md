# Fotografias de soporte

Archivos opcionales utilizados por `/soporte-tecnico`:

- `support-consultation.webp`: tecnico ayudando a una clienta frente a una laptop. Se muestra en el Hero.
- `support-diagnostic.webp`: tecnico explicando diagnostico o mantenimiento a una clienta. Se muestra en servicio a domicilio.

Usar fotografias autorizadas, idealmente horizontales de al menos 1200 px de ancho. La interfaz no coloca texto sobre las caras. Revisar el recorte final con las fotografias reales.

El servidor comprueba si los archivos existen. Si faltan, no genera rutas rotas: utiliza el visual de laptop existente y una composicion abstracta. Reconstruir el proyecto despues de incorporar las fotografias para actualizar la ruta estatica y desplegarla.
