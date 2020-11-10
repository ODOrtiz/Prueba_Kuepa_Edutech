# Prueba tecnica kuepa EduTech.
Este proyecto fue creado con "create-react-app".

Version react 17.0.1.

Existe una version online aquí: [demo online](www.prueba-kuepa-edutech.web.app)
## Para ejecutar de forma local
Clonar el proyecto
```
git clone https://github.com/ODOrtiz/Prueba_Kuepa_Edutech
```
Instalar dependencias
```
npm install
```
Finalmente correr un servidor local
```
npm start
```
## Estructura del proyecto
Este proyecto esta construido utilizando ***Context***, esto con el fin de tener un mejor manejo de datos en los diferentes componentes.

Ningun componente contiene logica de tratamiento de datos, todo se realiza en ***Utils*** y en los ***State*** de los ***Context*** en la carpeta Context y luego esa informacion es pasada a los componentes. 

Para simular el comportamiento de la pagina se utilizó las siguietnes rutas de la API:
1. https://docs.opendota.com/#tag/pro-players
2. https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D%2Fget

La ruta ***1*** se usó para simular los mensajes que llegan en el panel derecho, haciendo uso de la propiedad ***fantasy_role*** para separar mensajes de Facebook o Whatsapp (2 -> Whatsapp, otro -> Facebook). Tambien, se utilizó para la tabla de conexiones de agenda para el dia, separando usuarios conectados y desconectados con la propiedad  ***fantasy_role*** (2 -> conectado, otro -> desconectado). Además, se utilizó para las estadisticas de ***Tu plan de hoy*** haciendo uso de ***fantasy_role*** clasificando entre 0,1,2 y realizando combinaciones para obtener diferentes valores en cada tarjeta.
Cabe resaltar, que de la ruta ***1*** se utilizarón los primeros 100 datos obtenidos.

La ruta ***2*** se usó para simular un usuario que inició sesión en la plataforma, logrando observar su fotografia, un mensaje de bienvenida e informacion en los Leads Stats utilizando las propiedades ***rank_tier*** y ***leaderboard_rank*** para calcular el porcentaje de avance y la informacion de leads. Además, se utilizó de la misma manera en la ***Meta grupal***. 

En todas las llamadas se utilizó ***Axios***.
## Logo empresa
Para crear el logo de la empresa he utilizado Adobe Illustrator.
