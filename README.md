# Simple Instagram raffle bot

Un bot simple de Instagram que permite realizar un sorteo en el que participaran aquellos usuarios que hayan dado me gusta a una publicación en concreto de tu perfil. Informa de si el ganador te sigue o no y la única restricción es que el número de participantes no supere los mil.

## Prerequisitos 📖

Antes de descargar el proyecto y sus dependencias, necesitas tener instalado NodeJS y su gestor de dependencias `npm`, que vienen en el mismo paquete de instalación. Puedes consultar [su página web oficial](https://nodejs.org/en/download/) para instalarlo, es multiplataforma (Windows, Linux e macOS).

## Instalación ✔️

1.  Clonar el repositorio en nuestro ordenador:

        git clone https://github.com/serNAVARRO7/instagram-raffle.git  

    *Es posible descargarlo directamente como un ZIP desde el botón CLONE.*

2.  Instalar paquetes:

    Sobre la carpeta raíz del proyecto, ejecutamos:

        npm i
        
3. Ajustar las variables de entorno que nos permitirán logearnos en Instagram:

    Para poder funcionar correctamente, es necesario crear el archivo de entorno `.env` y completar la información.

    Ejecutamos el siguiente comando, para crearlo a partir del ejemplo:
        
        (Windows)
        copy .env-example .env

        (Linux)
        cp .env-example .env
        
## Puesta en marcha 💡

Una vez instalados los paquetes y completada la información del archivo `.env`, podremos llevar a cabo el sorteo:

    node bot.js

Si se desea realizar otro sorteo, solo es necesario volver a lanzar el comando. Tener en cuenta que el ganador volverá a ser aleatorio.
